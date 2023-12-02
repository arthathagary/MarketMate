"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string
  name : string
  price : number
  quantity : number
  action : string
}

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "id",
    header: "Product ID",
  },
  {
    accessorKey: "name",
    header: "Product Name",
  },
  {
    accessorKey: "quantity",
    header: "Quantity",
  },
  {
    accessorKey: "price",
    header: "Price",
  },
  {
    accessorKey: "action",
    header: "Action",
  }
]
