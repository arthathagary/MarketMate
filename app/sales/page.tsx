"use client";
import SearchBar from '@/components/SearchBar'
import React, { useEffect, useState } from 'react'
import { Sales, columns } from './column'
import { DataTable } from './data-table'
import FloatingButton from '@/components/FloatingButton'
import Billing from '../billings/page'

async function getData(searchQuery: string): Promise<Sales[]> {
  const allData: Sales[] = [
    {
      id: '1',
      name: "Item1",
      price: 33,
      quantity: 3
    },
    {
      id: '2',
      name: "Shirt",
      price: 33,
      quantity: 3
    },
    {
      id: '3',
      name: "Motor",
      price: 33,
      quantity: 3
    }
  ];

  const filteredData = allData.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())||
    item.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return filteredData;
}

const SalesPage = () => {
  const [filteredData, setFilteredData] = useState<Sales[]>([]); // New state for filtered data
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData(searchQuery);
      setFilteredData(result);
    };

    // Only fetch data when searchQuery is not empty
    if (searchQuery.trim() !== '') {
      fetchData();
    }
  }, [searchQuery]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className='h-screen flex flex-col w-full'>
      <SearchBar onSearch={handleSearch} />
      {/* Display DataTable only if searchQuery is not empty */}
      {searchQuery.trim() !== '' && (
        <>
          <DataTable columns={columns} data={filteredData} />
          <FloatingButton>Checkout</FloatingButton>
          {/* <Billing data={filteredData} /> */}
        </>
      )}
    </div>
  );
};

export default SalesPage;
