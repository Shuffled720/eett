import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
// import data from "@/data/data.json"
const data = [
  {
    day: "Monday",
    first: {
      title: "",
      type: "",
      teacher: "",
    },
    second: {
      title: "L: EE 302",
      type: "Lecture",
      teacher: "(Controls)",
    },
    third: {
      title: "L: EE 304",
      type: "Lecture",
      teacher: "DSP(Appinna)",
    },
    fourth: {
      title: "L: EE 308",
      type: "Lecture",
      teacher: "(Taklu)",
    },
  },
  {
    day: "Tuesday",
    first: {
      title: "L: HS 302/ ES 302",
      type: "Lecture",
      teacher: "",
    },
    second: {
      title: "",
      type: "",
      teacher: "",
    },
    third: {
      title: "L: EE 306",
      type: "Lecture",
      teacher: "(Black-Shaibal)",
    },
    fourth: {
      title: "L: EE 302",
      type: "Lecture",
      teacher: "(Controls)",
    },
  },
  {
    day: "Wednessday",
    first: {
      title: "",
      type: "",
      teacher: "",
    },
    second: {
      title: "L: EE 306",
      type: "Lecture",
      teacher: "(Black-Shaibal)",
    },
    third: {
      title: "L: EE 304",
      type: "Lecture",
      teacher: "DSP(Appinna)",
    },
    fourth: {
      title: "",
      type: "",
      teacher: "",
    },
  },
  {
    day: "Thursday",
    first: {
      title: "L: HS 302/ ES 302",
      type: "Lecture",
      teacher: "",
    },
    second: {
      title: "L: EE 304",
      type: "Lecture",
      teacher: "DSP(Appinna)",
    },
    third: {
      title: "T: EE 306",
      type: "Tutorial",
      teacher: "(Black-Shaibal)",
    },
    fourth: {
      title: "L: EE 308",
      type: "Lecture",
      teacher: "(Taklu)",
    },
  },
  {
    day: "Friday",
    first: {
      title: "",
      type: "",
      teacher: "",
    },
    second: {
      title: "T: EE 302",
      type: "Tutorial",
      teacher: "(Controls)",
    },
    third: {
      title: "T: EE 308",
      type: "Tutorial",
      teacher: "(Taklu)",
    },
    fourth: {
      title: "T: EE 304",
      type: "Tutorial",
      teacher: "DSP(appinna)",
    },
  },
  {
    day: "Saturday",

    first: {
      title: "L: HS 302/ ES 302",
      type: "Lecture",
      teacher: "",
    },
    second: {
      title: "",
      type: "",
      teacher: "",
    },
    third: {
      title: "",
      type: "",
      teacher: "",
    },
    fourth: {
      title: "",
      type: "",
      teacher: "",
    },
  },
]

export function FullWeekTT() {
  return (
    <div className="container">
      <Table>
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Days</TableHead>
            <TableHead>8:30-9:25</TableHead>
            <TableHead>9:30-10:25</TableHead>
            <TableHead>10:30-11:25</TableHead>
            <TableHead>11:30-12:25</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((day) => (
            <TableRow key={day.day}>
              <TableCell className="font-medium">{day.day}</TableCell>

              <TableCell className="font-medium ">
                <div className="">
                  {day.first.title}
                  {day.first.teacher}
                </div>
              </TableCell>
              <TableCell className="font-medium">
                {day.second.title}
                {day.second.teacher}
              </TableCell>
              <TableCell className="font-medium">
                {day.third.title}
                {day.third.teacher}
              </TableCell>
              <TableCell className="font-medium">
                {day.fourth.title}
                {day.fourth.teacher}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        {/* <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter> */}
      </Table>
    </div>
  )
}
