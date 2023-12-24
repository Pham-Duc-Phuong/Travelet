import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "store"
import { listBookedThunk } from "store/Book"
import { layPhongThunk } from "store/Room"

export const HistoryBooking = () => {
  const { UserByID } = useAppSelector(state => state.User)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(listBookedThunk(UserByID?.id))
    dispatch(layPhongThunk())
  }, [dispatch, UserByID?.id])
  const { layPhong } = useAppSelector(state => state.Room)
  const { listBooked } = useAppSelector(state => state.Book)
  const nameHotel = (values) => {
    const data = layPhong?.find(a => a.id === values)
    return data?.tenPhong.substring(0, 15) + "..."
  }
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 table-fixed sm:table-auto">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Hotel
            </th>
            <th scope="col" className="px-6 py-3">
              Check in
            </th>
            <th scope="col" className="px-6 py-3">
              Check out
            </th>
            <th scope="col" className="px-6 py-3">
              Tourist
            </th>
          </tr>
        </thead>
        <tbody>
          {
            listBooked?.map(a => (
              <tr key={a.id} className="bg-white border-b">
                <td className="px-6 py-4">
                  {nameHotel(a.maPhong)}
                </td>
                <td className="px-6 py-4">
                  {("0" + (new Date(a.ngayDen).getMonth() + 1)).slice(-2)} / {("0" + (new Date(a.ngayDen).getDate() + 1)).slice(-2)} / {new Date(a.ngayDen).getFullYear()}
                </td>
                <td className="px-6 py-4">
                  {("0" + (new Date(a.ngayDi).getMonth() + 1)).slice(-2)} / {("0" + (new Date(a.ngayDi).getDate() + 1)).slice(-2)} / {new Date(a.ngayDi).getFullYear()}
                </td>
                <td className="px-6 py-4">
                  {a.soLuongKhach}
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}
