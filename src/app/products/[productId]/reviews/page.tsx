interface Props {
    params: { productId: string }
//     params: { slug: string };
//   searchParams: { [key: string]: string | string[] | undefined };
}

export default function Reviews({ params }: Props) {
    return (
        <h1>
            Reviews page for product {params.productId}
        </h1>
    )
}