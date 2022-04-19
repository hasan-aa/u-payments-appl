import React from 'react';
import {Field, Form} from 'react-final-form';
import {MenuItem} from "@mui/material";
import LoadingButton from '@mui/lab/LoadingButton';
import {useCreateProductMutation, useGetCategoriesQuery} from "../../apis/product-api";
import {Product} from "../../apis/types";
import FormField from '../FormField';
import {useNavigate} from "react-router-dom";


export default function ProductForm() {
    const {data: categories, isLoading} = useGetCategoriesQuery()
    const [createProduct, {isLoading: createInProgress}] = useCreateProductMutation()
    const navigate = useNavigate();

    async function handleSubmit(data: Partial<Product>) {
        let result = await createProduct(data)

        if (!result.hasOwnProperty('error')) {
            navigate('/')
        }
    }

    return (
        <Form
            onSubmit={handleSubmit}
            render={({handleSubmit, dirty, invalid}) => (
                <>
                    <FormField label={'Product name'} name={'name'} required/>
                    <FormField label={'Description'} name={'description'} multiline/>
                    <FormField label={'Image URL'} name={'avatar'} required/>
                    <FormField label={'Categories'} name={'category'} type={'select'} required>
                        {isLoading && 'Loading...'}
                        {categories?.map(category => (
                            <MenuItem key={category.id}
                                      value={category.name}>{category.name}</MenuItem>)
                        )}
                    </FormField>
                    <FormField label={'Price'} name={'price'} type={'number'} required/>

                    <Field name="developerEmail" initialValue={'hasan.a.ayar@gmail.com'}>
                        {props => (<input {...props.input} type={'hidden'}/>)}
                    </Field>

                    <LoadingButton loading={!!createInProgress}
                                   fullWidth color={'primary'}
                                   variant={'contained'}
                                   disabled={!dirty || invalid}
                                   onClick={handleSubmit}>
                        Submit
                    </LoadingButton>
                </>
            )}/>
    );
}

