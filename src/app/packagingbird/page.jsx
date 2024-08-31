import Costings from '@/components/Costings'
import React from 'react'

const pages = () => {
  const products = [
    {
      id: "P001",
      name: "Smartphone X Pro",
      status: "Active",
      price: "$999.00",
      sales: 150,
      createdAt: "6/23/2024",
    },
    {
      id: "P002",
      name: "Wireless Earbuds Ultra",
      status: "Active",
      price: "$199.00",
      sales: 300,
      createdAt: "6/23/2024",
    },
    {
      id: "P003",
      name: "Smart Home Hub",
      status: "Active",
      price: "$149.00",
      sales: 200,
      createdAt: "6/23/2024",
    },
    {
      id: "P004",
      name: "4K Ultra HD Smart TV",
      status: "Active",
      price: "$799.00",
      sales: 50,
      createdAt: "6/23/2024",
    },
  ];

  return (
    <div>
        <Costings data={products} link="packagingbird"/>
    </div>
  )
}

export default pages