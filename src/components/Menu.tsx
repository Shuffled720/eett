import Image from "next/image"

const Menu = () => {
  return (
    <>
      <section id="menu" className="container ">
        <center>
          <h1 className="text-center text-3xl py-2 ">Menu</h1>
          <div className="h-1/5 overflow-hidden">
            <Image
              alt="menu"
              className="menu-img"
              src="/menu.png"
              width={700}
              height={700}
            />
          </div>
        </  center>
      </section>
    </>
  )
}

export default Menu
