import Carousel from "@/components/Carousel"
import Container from "@/components/Container"
import ProductPanel from "@/components/ProductPanel"

export default () => {
    return (
        <>
            <Carousel />

            <Container className="!items-start">
                <h1 className="text-2xl font-bold text-red-500 py-7 pl-3">
                    Популярное
                </h1>

                <ProductPanel category="popular" />
            </Container>
        </>
    )
}