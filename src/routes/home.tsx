import {useGetProductsQuery} from "../apis/product-api";
import ProductCard from "../components/product/ProductCard";
import PageLoader from "../components/layout/PageLoader";
import {Fab, Grid} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import {useNavigate} from "react-router-dom";
import CategoryFilter from "../components/categories/CategoryFilter";
import PageTopWidgets from "../components/layout/PageTopWidgets";
import PageContent from "../components/layout/PageContent";
import React from "react";

type HomeProps = {}

const fabStyle = {
    position: 'absolute',
    bottom: 16,
    right: 16,
};
export default function Home(props: HomeProps) {
    const {data: products, isLoading} = useGetProductsQuery()
    const navigate = useNavigate();
    const [categoryFilter, setCategories] = React.useState<string[]>([])

    function handleCategoryFilter(categories: string[]) {
        setCategories(categories)
    }

    const filteredProducts = React.useMemo(() => {
        if (products && categoryFilter.length) {
            return products.filter(product => categoryFilter.some(categoryName => {
                let lcCategory=categoryName.toLowerCase();
                let lcProductCategory=product.category?.toLowerCase()||'';

                // Check both ways to create better matches
                return lcCategory.includes(lcProductCategory) || lcProductCategory.includes(lcCategory)
            }))
        }
        return products;
    }, [categoryFilter, products])

    return (
        <Grid container>
            {isLoading && <PageLoader/>}

            <PageTopWidgets>
                <CategoryFilter onChange={handleCategoryFilter}/>
            </PageTopWidgets>

            <PageContent>
                <Grid item container spacing={4}>
                    {!isLoading && filteredProducts?.map((product) =>
                        <Grid key={product.id} xs={12} md={4} lg={3} xl={2} item>
                            <ProductCard product={product}/>
                        </Grid>
                    )}
                </Grid>
                <Fab sx={fabStyle} onClick={() => navigate('/new-product')} color="primary"
                     aria-label="add">
                    <AddIcon/>
                </Fab>
            </PageContent>
        </Grid>
    )
}
