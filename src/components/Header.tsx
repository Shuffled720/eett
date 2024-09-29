import Link from "next/link"

const Header = () => {
  return (
    <>
      <Link href="/">
        <h1 className="text-center text-3xl py-2 ">EE Time-Table</h1>
      </Link>
      <Link href="/toss-coin">
        <h1 className="text-center text-3xl py-2 ">Toss a coin</h1>
      </Link>

    </>
  )
}
export default Header
