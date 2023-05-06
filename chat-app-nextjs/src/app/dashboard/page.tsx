import Link from "next/link"

const page = () => {
    return (
        <>
            <div>page</div>
            <Link 
            href={`/dashboard/photo/123`}>
                Photo
            </Link>
        </>
    )
}

export default page