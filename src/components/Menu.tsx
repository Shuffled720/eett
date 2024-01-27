import Image from "next/image"

const Menu = () => {
  return (
    <>
      <section id="menu" className="container ">
        <h1 className="text-center text-3xl   ">Menu</h1>
        <div className=" overflow-hidden ">
          <Image
            alt="menu"
            className="menu-img"
            src="/menu.png"
            width={1500}
            height={100}
          />
        </div>
      </section>
    </>
  )
}

export default Menu
