import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>hey</h1>
      <Link
      href={'/dashboard'}
      >
        Dashboard
      </Link>
    </>
  )
}
