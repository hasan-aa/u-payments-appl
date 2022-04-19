import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {Category, Product} from './types'

export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://62286b649fd6174ca82321f1.mockapi.io/case-study/'}),
    tagTypes: ['Products'],
    endpoints: (builder) => ({
        getProducts: builder.query<Product[],void>({
            query: () => `products/`,
            providesTags: (result) =>
                result ? result.map(({ id }) => ({ type: 'Products', id })) : [],
        }),
        getProductById: builder.query<Product, string>({
            query: (id) => `products/${id}`,
        }),
        createProduct: builder.mutation<Product, Partial<Product>>({
            query: (body) => ({
                url: `products`,
                method: 'POST',
                body,
            }),
            async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
                try {
                    const { data: newProduct } = await queryFulfilled
                    dispatch(
                        productApi.util.updateQueryData('getProducts', undefined, (draft) => {
                            draft.push(newProduct)
                        })
                    )
                } catch (e){
                    console.log('Error updating store:',e)
                }
            },
        }),

        getCategories: builder.query<Category[], void>({
            query: () => `categories/`,
        }),
        getCategoryById: builder.query<Category, string>({
            query: (id) => `categories/${id}`,
        }),

    }),
})
// @ts-ignore
window.productApi=productApi

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
    useGetProductByIdQuery,
    useGetProductsQuery,
    useGetCategoriesQuery,
    useCreateProductMutation,
} = productApi
