export default function Container(props: {
    children: React.ReactNode,
    className?: string
}) {
    return (
        <section className={`${props.className} p-4 min-h-[90vh] xl:w-[80rem] flex flex-col items-center`}>
            {props.children}
        </section>
    )
}