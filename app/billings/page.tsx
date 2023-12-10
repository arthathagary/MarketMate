import FloatingButton from "@/components/FloatingButton"
import { Payment, columns } from "./column"
import { DataTable } from "./data-table"
import { Button } from "@/components/ui/button"
import { MdDeleteOutline } from "react-icons/md";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";


async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: '1',
      name : "Item1",
      price :33,
      quantity:3,
      action : <span></span>
    },
    // ...
  ]
}

export default async function Billing() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
      <div className="mt-8 max-w-sm float-right">
      <Card className="px-6">
        <div className="flex items-center justify-between">
        <h1 className="my-3">
          Total : 
        </h1>
        <h1>
          1000/-
        </h1>
        </div>
        <div className="mb-3 flex items-center gap-8 justify-between">
        <h1>Discount :</h1>
        <Input className="w-20" />
        </div>
        <div className="flex items-center justify-between">
        <h1 className="mb-3">
          Subtotal : 
        </h1>
        <h1>
        800/-
        </h1>
        </div>
      </Card>
      </div>
      <FloatingButton>Print Bill</FloatingButton>
    </div>
  )
}
