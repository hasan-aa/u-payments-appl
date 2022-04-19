import {Product} from "../../apis/types";
import {Grid, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {formatPrice} from "../../utils/priceUtils";
import ProductImage from "./ProductImage";

type ProductCardProps = { product: Product }

export default function ProductCard(props: ProductCardProps) {
    const {product} = props;

    const navigate = useNavigate();

    const handleProductClick = () => {
        navigate(`/detail/${product.id}`)
    }


    return (
        <Grid container spacing={1}>
            <Grid item>
                <ProductImage onClick={handleProductClick} height={200} url={product.avatar}/>
            </Grid>
            <Grid item width={1}>
                <Typography variant={'body1'}>{product.name}</Typography>
            </Grid>
            <Grid item width={1}>
                <Typography align={'center'}
                            variant={'body2'}>{formatPrice(product.price)}</Typography>
            </Grid>
        </Grid>
    )
}
