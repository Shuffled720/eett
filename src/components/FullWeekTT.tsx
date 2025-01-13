"use client"
import React, { useState, useEffect } from "react"
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

export function FullWeekTT() {
  const [currentDayOfWeek, setCurrentDayOfWeek] = useState("")

  useEffect(() => {
    const currentDate = new Date()
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ]
    const dayOfWeek = daysOfWeek[currentDate.getDay()]
    setCurrentDayOfWeek(dayOfWeek)
  }, [])
  return (
    <div className="container bg-secondary my-2">
      <Table className="text-xs antialiased">
        <TableCaption>Full Week Time Table</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[10px]">Days</TableHead>
            <TableHead>8:30-9:25</TableHead>
            <TableHead>9:30-10:25</TableHead>
            <TableHead>10:30-11:25</TableHead>
            <TableHead>11:30-12:25</TableHead>
            <TableHead>12:30-01:25</TableHead>
            <TableHead>01:30-02:25</TableHead>
            <TableHead>02:30-03:25</TableHead>
            <TableHead>03:30-04:25</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.weekTT.map((day, key) => (
            <>
              {day.day === currentDayOfWeek ? (
                <>
                  <TableRow key={day.day} className="text-primary">
                    <TableCell className="font-medium">{day.day}</TableCell>
                    {day.ttList.map((tt) => (
                      <>
                        {tt.type === "Lecture" ? (
                          <>
                            <TableCell className=" font-medium bg-green-50">
                              {tt.title}
                              {tt.teacher} <br/>
                              {tt.room}
                            </TableCell>
                          </>
                        ) : (
                          <></>
                        )}
                        {tt.type === "Tutorial" ? (
                          <>
                            <TableCell className="font-medium bg-red-50">
                              {tt.title}
                              {tt.teacher} <br/>
                            </TableCell>
                          </>
                        ) : (
                          <></>
                        )}
                        {tt.type === "" ? (
                          <>
                            <TableCell className="font-medium ">
                              {tt.title}
                              {tt.teacher} <br/>
                            </TableCell>
                          </>
                        ) : (
                          <></>
                        )}
                      </>
                    ))}
                  </TableRow>
                </>
              ) : (
                <>
                  <TableRow key={day.day}>
                    <TableCell className="font-medium">{day.day}</TableCell>
                    {day.ttList.map((tt) => (
                      <>
                        {tt.type === "Lecture" ? (
                          <>
                            <TableCell className="font-medium bg-green-50">
                              {tt.title}
                              {tt.teacher} <br/>
                              {tt.room}
                            </TableCell>
                          </>
                        ) : (
                          <></>
                        )}
                        {tt.type === "Tutorial" ? (
                          <>
                            <TableCell className="font-medium bg-red-50">
                              {tt.title}
                              {tt.teacher} <br/>
                            </TableCell>
                          </>
                        ) : (
                          <></>
                        )}
                        {tt.type === "" ? (
                          <>
                            <TableCell className="font-medium ">
                              {tt.title}
                              {tt.teacher} <br/>
                            </TableCell>
                          </>
                        ) : (
                          <></>
                        )}
                      </>
                    ))}
                  </TableRow>
                </>
              )}
            </>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
