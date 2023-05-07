const layout = ({
    children,
    modal
}: {
    children: React.ReactNode,
    modal: React.ReactNode,
}) => {
    return (
        <>
            <div>{children}</div>
        </>
    )
}

export default layout