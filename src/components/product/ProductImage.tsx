import {Card, CardActionArea, CardMedia} from "@mui/material";
import noPhoto from "../../assets/images/no-photo-available.png";

type ProductImageProps = {
    onClick?: () => any,
    height: number,
    url: string,
}

export default function ProductImage(props: ProductImageProps) {
    const {url ,height,onClick} = props

    const handleImageError = (e: any) => {
        e.target.onerror = null;
        e.target.src = noPhoto
    }

    return (
        <Card sx={{
            p: 2,
            borderRadius: 4,
            width: 1,
            maxWidth:400,
            height: height,
            alignItems: 'center',
            display: 'flex'
        }}>
            <CardActionArea disabled={!onClick} onClick={onClick}>
                <CardMedia
                    component="img"
                    image={url}
                    alt={'Product image'}
                    onError={handleImageError}
                />
            </CardActionArea>
        </Card>
    )
}
