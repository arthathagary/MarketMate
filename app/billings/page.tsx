"use client";
import React, { useState, useEffect } from 'react';
import FloatingButton from "@/components/FloatingButton";
import { Payment, columns } from "./column";
import { DataTable } from "./data-table";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: '1',
      name: "Item1",
      price: 10,
      quantity: 3,
      action: <span></span>
    },
    {
      id: '2',
      name: "Item2",
      price: 70,
      quantity: 3,
      action: <span></span>
    },
    {
      id: '3',
      name: "Item3",
      price: 20,
      quantity: 3,
      action: <span></span>
    },
    // ...
  ]
}

export default function Billing() {
  const [datas, setDatas] = useState<Payment[]>([]);
  const [discountPercentage, setDiscountPercentage] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData();
        setDatas(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const totalAmount = datas.reduce((total, data) => total + data.price, 0);
  const discountAmount = (totalAmount * discountPercentage) / 100;
  const subtotal = totalAmount - discountAmount;

  

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={datas} />
      <div className="mt-8 max-w-sm float-right">
        <Card className="px-6">
          <div className="flex items-center justify-between">
            <h1 className="my-3">
              Total : 
            </h1>
            <h1>
              {totalAmount}
            </h1>
          </div>
          <div className="mb-3 flex items-center gap-8 justify-between">
            <h1>Discount :</h1>
            <Input
              className="w-20 text-right"
              type="number"
              value={discountPercentage}
              onChange={(e) => setDiscountPercentage(parseFloat(e.target.value))}
            />
          </div>
          <div className="flex items-center justify-between">
            <h1 className="mb-3">
              Subtotal : 
            </h1>
            <h1>
              {subtotal}/-
            </h1>
          </div>
        </Card>
      </div>
      <FloatingButton>Print Bill</FloatingButton>
    </div>
  );
}
