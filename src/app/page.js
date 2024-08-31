import Dashboard from "@/components/Dashboard";
import Login from "@/components/Login";
import Pdf from "@/components/PDF/Pdf";
import PDFComponent from "@/components/PDF/Pdf";
import { SidebarDemo } from "@/components/Sidebar";
import Image from "next/image";

export default function Home() {
  const data = [
    { label: "Name", value: "John Doe" },
    { label: "Email", value: "john.doe@example.com" },
    { label: "Role", value: "Admin" },
    { label: "Status", value: "Active" },
  ];
  return (
    <main className="">

    {/* <Dashboard/> */}
    <Pdf data={data}/>
    </main>
  );
}
