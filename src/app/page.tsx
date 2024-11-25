import { ExamTT } from "@/components/ExamTT"
import { FullWeekTT } from "@/components/FullWeekTT"
import Header from "@/components/Header"
import Material from "@/components/Material"
import Menu from "@/components/Menu"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <Header />
      <p className="text-center">Maze karo BTP hai!!!</p>
      {/* <ExamTT /> */}
      {/* <FullWeekTT /> */}
      {/* <Material /> */}
      <Menu />
      <Button asChild>
        <Link href={"/todo"}>A</Link>
      </Button>
      <Button asChild>
        <Link href={"/fast-calculation"}>B</Link>
      </Button>
    </>
  )
}
