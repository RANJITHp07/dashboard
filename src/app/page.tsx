'use client'
import Header from "./Components/Header";
import Table from "./Components/Table";
import NavBar from "./Components/navBar";
import SideBar from "./Components/sideBar";
import dynamic from 'next/dynamic'

// work only without SSR due to window usage
const Chart = dynamic(
  () => import('./Components/Chart'),
  { ssr: false }
)


export default function Home() {
  return (
    <div className="bg-[#F2F4F7] min-h-screen">
      <div className="flex">
        <div className="">
          {/* side bar of the page */}
         <SideBar/> 
        </div>
        <div className="w-full">
         <NavBar/>
         <div className=" py-7 md:py-12 px-[18px] xl:px-[32px]">
          <Header/>
           {/* chart to show the users*/}
          <Chart/>
          {/*table to list out*/}
          <Table/>
         </div>
        </div>
      </div>
    </div>
  )
}
