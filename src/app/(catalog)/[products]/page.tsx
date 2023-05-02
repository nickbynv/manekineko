import Container from "@/components/Container"
import ProductPanel from "@/components/ProductPanel"

export default (props: {
    params: {
        products: string
    }
}) => {
    return (
        <Container className="mt-4">
            <ProductPanel category={props.params.products} />
        </Container>
    )
}