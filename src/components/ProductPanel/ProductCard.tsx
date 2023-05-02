"use client"
import { IProduct } from "@/interfaces"
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Typography
} from "@material-tailwind/react"
import { useState } from "react"

export default function ProductCard(props: {
    product: IProduct
}) {
    const [scaleIconVisible, setScaleIconVisible] = useState(0)

    return (
        <Card className="w-full max-w-[26rem] shadow-lg overflow-hidden" style={{ fontFamily: "serif !important" }}>
            <CardHeader
                floated={false}
                color="blue-gray"
                className="max-w-full h-[14rem] transition-transform bg-center bg-cover hover:scale-105 lg:h-[13rem] lg:hover:scale-110 xl:h-[11rem]"
                style={{ backgroundImage: `url(${props.product.img})` }}
                onMouseEnter={() => setScaleIconVisible(50)}
                onMouseLeave={() => setScaleIconVisible(0)}
            >
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60" />

                <div className={`absolute right-3 top-3 w-9 h-9 transition-opacity bg-white rounded-full flex justify-center items-center pl-[2px] pt-[2px] opacity-${scaleIconVisible}`}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 text-black"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                    </svg>

                </div>
            </CardHeader>

            <CardBody className="p-4 md:h-[10rem] lg:h-[13rem]">
                <Typography
                    variant="h5"
                    color="blue-gray"
                    className="cursor-default font-bold mb-3 overflow-hidden"
                >
                    {props.product.title}
                </Typography>

                <Typography
                    color="gray"
                    className="break-words leading-5"
                >
                    {props.product.description}
                </Typography>
            </CardBody>

            <CardFooter className="p-4">
                <div className="mb-3 flex justify-between items-center">
                    <Typography
                        variant="h5"
                        color="blue-gray"
                        className="font-bold text-[1.6rem]"
                    >
                        {props.product.price} ₽
                    </Typography>

                    {props.product.weight && (
                        <Typography
                            variant="h5"
                            color="gray"
                            className="text-md font-light"
                        >
                            {props.product.weight} г.
                        </Typography>
                    )}
                </div>

                <Button
                    size="lg"
                    fullWidth={true}
                    color="red"
                >
                    В корзину
                </Button>
            </CardFooter>
        </Card>
    );
}