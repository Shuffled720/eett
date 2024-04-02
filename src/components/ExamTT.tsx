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
import data from "@/data/data.json"

export function ExamTT() {
  return (
    <div className="container bg-popover border-2 my-5 ">
      <Table className="text-xs antialiased ">
        <TableCaption>MSE Time Table</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="">Day & Date</TableHead>
            <TableHead>Exam</TableHead>
            <TableHead>Name</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.endExamTT.map((exam, index) => (
            <TableRow key={index}>
              <TableCell>{exam.date_day}</TableCell>
              <TableCell>{exam.code}</TableCell>
              <TableCell>{exam.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        {/* <TableFooter></TableFooter> */}
      </Table>
    </div>
  )
}
