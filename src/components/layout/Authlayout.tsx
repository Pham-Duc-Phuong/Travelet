import { Outlet } from "react-router-dom"

export const Authlayout = () => {
  return (
    <div className="AuthLayout h-full">
      <div className="h-screen w-screen relative ">
        <div className="absolute top-0 left-0 w-0 sm:w-full h-full">
          <img
            className="w-full h-full object-cover object-bottom"
            src="./images/1.jpg"
          />
        </div>
        <div className="absolute top-0 left-0 w-0 sm:w-full h-full bg-black z-10 opacity-20"></div>
        <div className="absolute w-full h-full sm:h-auto sm:w-[450px] p-[30px] top-1/2 left-1/2 bg-white z-20 -translate-x-1/2 -translate-y-1/2 sm:rounded-md">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

