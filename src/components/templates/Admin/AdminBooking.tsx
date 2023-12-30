import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "store"
import { listBookedThunk } from "store/Book"

export const AdminBooking = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(listBookedThunk())
  }, [dispatch])
  const { listBooked } = useAppSelector(state => state.Book)
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 table-auto">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-3 py-3">
              ID
            </th>
            <th scope="col" className="px-3 py-3">
              Check in
            </th>
            <th scope="col" className="px-3 py-3">
              Check out
            </th>
            <th scope="col" className="px-3 py-3">
              <i className="fa-solid fa-person text-blue-600 text-base"></i>
            </th>
          </tr>
        </thead>
        <tbody>
          {
            listBooked?.map(a => (
              <tr key={a.id} className="bg-white border-b">
                <td className="px-3 py-3">
                  {a.id}
                </td>
                <td className="px-3 py-3">
                  {("0" + (new Date(a.ngayDen).getMonth() + 1)).slice(-2)}/{("0" + (new Date(a.ngayDen).getDate() + 1)).slice(-2)}/{new Date(a.ngayDen).getFullYear()}
                </td>
                <td className="px-3 py-3">
                  {("0" + (new Date(a.ngayDi).getMonth() + 1)).slice(-2)}/{("0" + (new Date(a.ngayDi).getDate() + 1)).slice(-2)}/{new Date(a.ngayDi).getFullYear()}
                </td>
                <td className="px-3 py-3">
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
