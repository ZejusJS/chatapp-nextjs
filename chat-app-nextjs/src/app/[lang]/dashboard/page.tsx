import Link from "next/link"

async function getData() {
    try {
        const res: any = await fetch('https://swapi.dev/api/starships/3', {
            // next: { tags: ['starships', '3'] },
            cache: "no-store"
        })
        if (!res.ok) {
            throw new Error('Failed to fetch data')
        }
        return res.json()
    } catch (e) {
        throw new Error('Failed to fetch data')
    }
}

function preload() {
    void getData()
};

async function page() {
    preload()
    const res = await getData()

    return (
        <>
            <div>page</div>
            <div>{res.model}</div>
            <Link
                href={`/dashboard/photo/123`}>
                Photo
            </Link>
        </>
    )
}



export default page