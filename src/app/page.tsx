import { ExamTT } from "@/components/ExamTT"
import { FullWeekTT } from "@/components/FullWeekTT"
import Header from "@/components/Header"
import Material from "@/components/Material"
import Menu from "@/components/Menu"

export default function Home() {
  return (
    <>
      <Header />
      <p className="text-center">Maze karo BTP hai!!!</p>
      {/* <ExamTT /> */}
      {/* <FullWeekTT /> */}
      {/* <Material /> */}
      <Menu />
    </>
  )
}
