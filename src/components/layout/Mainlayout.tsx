import { Footer, Navbar } from "components"
import { Outlet } from "react-router-dom"
import './style.css'
export const Mainlayout = () => {
    return (
        <div className="m-auto bg-carousel">
            <Navbar />
            <div className="dark:bg-[#111827]">
                <Outlet />
            </div>
            <div className="">
                <Footer />
            </div>
        </div>
    )
}
// pt-[72px] sm:pt-[77px]