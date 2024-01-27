import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Link from "next/link"

const Material = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-center text-3xl   ">Material</h1>
      <section className=" text-left">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Power Systems(Paladhi)</AccordionTrigger>
            <AccordionContent>
              <Link
                target="_blank"
                href="https://drive.google.com/file/d/1Zbj-vYdsduhHqsDZuCp41QTT5czyzTiM/view?usp=sharing"
              >
                Book 1
              </Link>
            </AccordionContent>
            <AccordionContent>
              <Link
                target="_blank"
                href="https://drive.google.com/file/d/1Tk7U7mPDz_-uB8r3LuvNqPeLMJQz2B4o/view?usp=sharing"
              >
                Book 2
              </Link>
            </AccordionContent>
            <AccordionContent>
              <Link
                target="_blank"
                href="https://drive.google.com/file/d/1_IJ2SatFUo5BArWxFJ82xg_D8ZKDx99t/view?usp=sharing"
              >
                Book 3
              </Link>
            </AccordionContent>
          </AccordionItem>
          {/* <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
          </AccordionContent>
          </AccordionItem>
        <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
        Yes. It&apos;s animated by default, but you can disable it if you
            prefer.
            </AccordionContent>
        </AccordionItem> */}
        </Accordion>
      </section>
    </div>
  )
}

export default Material
