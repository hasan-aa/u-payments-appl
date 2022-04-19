import {useParams} from "react-router-dom";
import ProductDetail from "../components/product/ProductDetail";
import {useGetProductByIdQuery} from "../apis/product-api";
import PageLoader from "../components/layout/PageLoader";
import PageContent from "../components/layout/PageContent";

type DetailProps = {}
export default function Detail(props: DetailProps) {
    const {productId} = useParams()

    // @ts-ignore (productId is a required parameter)
    const {data: product, isLoading} = useGetProductByIdQuery(productId)

    if (isLoading || !product) {
        return <PageLoader/>
    }

    return (
        <PageContent>
            <ProductDetail product={product}/>
        </PageContent>
    );
}
