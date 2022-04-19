import React from 'react';
import {Divider, Grid, Typography} from "@mui/material";
import ProductImage from "./ProductImage";
import {Product} from "../../apis/types";
import {formatPrice} from "../../utils/priceUtils";

type ProductDetailProps = { product: Product }

export default function ProductDetail(props: ProductDetailProps) {
    const {product} = props;

    return (
        <div>
            <Grid container direction={'row'} wrap={"nowrap"} spacing={4}>
                <Grid item>
                    <ProductImage height={300} url={product.avatar}/>
                </Grid>
                <Grid item container direction={'column'} justifyContent={'space-between'}>
                    <Grid item>
                        <Typography align={'left'} variant={'h3'}>{product.name}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography align={'left'}
                                    variant={'h5'}>{formatPrice(product.price)}</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Divider sx={{my: 3}}/>
            <Typography fontWeight={'bold'} align={'left'} variant={'h5'}>Descriptioin</Typography>
            <Typography variant={'body2'} align={'left'}>{product.description}</Typography>
        </div>
    );
}

