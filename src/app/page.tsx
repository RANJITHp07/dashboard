'use client'
import Header from "./Components/Header";
import Table from "./Components/Table";
import NavBar from "./Components/navBar";
import SideBar from "./Components/sideBar";
import dynamic from 'next/dynamic'

// work only without SSR
const Chart = dynamic(
  () => import('./Components/Chart'),
  { ssr: false }
)


export default function Home() {
  return (
    <div className="bg-[#F2F4F7] min-h-screen">
      <div className="flex">
        <div className="">
         <SideBar/> 
        </div>
        <div className="w-full">
         <NavBar/>
         <div className=" py-7 md:py-12 px-[18px] xl:px-[32px]">
          <Header/>
          <Chart/>
          <Table/>
         </div>
        </div>
      </div>
    </div>
  )
}
