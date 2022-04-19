import PageContent from "../components/layout/PageContent";
import ProductForm from "../components/product/ProductForm";

type NewProductProps = {}
export default function NewProduct(props: NewProductProps) {
    return (
        <PageContent>
            <ProductForm />
        </PageContent>
    );

}
