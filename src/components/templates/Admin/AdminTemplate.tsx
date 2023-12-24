import { useState } from "react"
import { useAppSelector } from "store"
import { AdminBooking, AdminLocation, AdminRoom, AdminUser } from "."

export const AdminTemplate = () => {
  const [setActive, isSetActive] = useState(1)
  const { UserByID } = useAppSelector(state => state.User)
  return (
    <div className="container-page pt-32 relative">
      <div className="bg-white w-full h-[700px] sm:h-[500px] shadow-dark-box rounded-lg grid sm:grid-cols-account">
        <div className="sm:border-gray-300 sm:border-r flex flex-col items-center p-4 gap-2">
          {UserByID?.avatar ? <img className="rounded-[50%] sm:w-48 w-24" src={UserByID?.avatar} alt="" /> : <i className="fa-solid fa-user w-24 h-24 sm:w-48 sm:h-48 rounded-[50%] text-center leading-10 border text-white bg-gray-500"></i>}
          <h1 className="title-location">{UserByID?.name}</h1>
          <p className="p-admin" onClick={() => { isSetActive(1) }}>Manage User</p>
          <p className="p-admin" onClick={() => { isSetActive(2) }}>Manage Booking</p>
          <p className="p-admin" onClick={() => { isSetActive(3) }}>Manage Location</p>
          <p className="p-admin" onClick={() => { isSetActive(4) }}>Manage Room</p>
        </div>
        <div className={setActive === 1 ? "block overflow-y-scroll" : "hidden"}>
          <AdminUser />
        </div>
        <div className={setActive === 2 ? "block overflow-y-scroll" : "hidden"}>
          <AdminBooking />
        </div>
        <div className={setActive === 3 ? "block overflow-y-scroll" : "hidden"}>
          <AdminLocation />
        </div>
        <div className={setActive === 4 ? "block overflow-y-scroll" : "hidden"}>
          <AdminRoom />
        </div>
      </div>
    </div>
  )
}
