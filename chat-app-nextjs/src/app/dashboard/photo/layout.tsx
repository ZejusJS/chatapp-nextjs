const layout = ({
    children,
    modal
}: {
    children: React.ReactNode,
    modal: React.ReactNode,
}) => {
    return (
        <>
            <div>{modal}</div>
        </>
    )
}

export default layout