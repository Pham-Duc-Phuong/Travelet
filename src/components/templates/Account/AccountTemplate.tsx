import { useState } from "react"
import { useAppSelector } from "store"
import { AccountInfo, HistoryBooking, Password } from "."

export const AccountTemplate = () => {
    const [setActive, isSetActive] = useState(1)
    const { UserByID } = useAppSelector(state => state.User)
    return (
        <div className="container-page pt-32 relative">
            <div className="bg-white w-full h-[700px] sm:h-[430px] shadow-dark-box rounded-lg grid sm:grid-cols-account">
                <div className="sm:border-gray-300 sm:border-r flex flex-col items-center p-4 gap-2">
                    {UserByID?.avatar ? <img className="rounded-[50%] sm:w-48 w-24" src={UserByID?.avatar} alt="" /> : <i className="fa-solid fa-user w-24 h-24 sm:w-48 sm:h-48 rounded-[50%] text-center leading-10 border text-white bg-gray-500"></i>}
                    <h1 className="title-location">{UserByID?.name}</h1>
                    <p className="p-admin" onClick={() => { isSetActive(1) }}>Account's info</p>
                    <p className="p-admin" onClick={() => { isSetActive(2) }}>Change password</p>
                    <p className="p-admin" onClick={() => { isSetActive(3) }}>History booking</p>
                </div>
                <div className={setActive === 1 ? "p-4 block" : "hidden"}>
                    <AccountInfo />
                </div>
                <div className={setActive === 2 ? "p-4 block" : "hidden"}>
                    <Password />
                </div>
                <div className={setActive === 3 ? "block overflow-y-scroll" : "hidden"}>
                    <HistoryBooking />
                </div>
            </div>
        </div>
    )
}
