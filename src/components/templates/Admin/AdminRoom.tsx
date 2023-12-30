import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "store"
import { LocationThunk } from "store/Location"
import { layPhongThunk } from "store/Room"

export const AdminRoom = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(layPhongThunk())
    dispatch(LocationThunk())
  }, [dispatch])
  const { layPhong } = useAppSelector(state => state.Room)
  const { location } = useAppSelector(state => state.Location)
  const [setScreen, isSetScreen] = useState<number>(window.innerWidth)
  const handleScreen = () => { isSetScreen(window.innerWidth) }
  window.addEventListener('resize', handleScreen)
  const getLocation = (values) => {
    const findLocation = location.find(a => a.id === values)
    return findLocation?.tenViTri ? findLocation?.tenViTri : 'Khu tao sống'
  }
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 table-auto">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-3 py-3">
              ID
            </th>
            <th scope="col" className="px-3 py-3">
              Location
            </th>
            <th scope="col" className="px-3 py-3">
              Hotel
            </th>
          </tr>
        </thead>
        <tbody>
          {
            layPhong?.map(a => (
              <tr key={a.id} className="bg-white border-b">
                <td className="px-3 py-3">
                  {a.id}
                </td>
                <td className="px-3 py-3">
                  {getLocation(a.maViTri)}
                </td>
                <td className="px-3 py-3">
                  {setScreen > 640 ? a.tenPhong : a.tenPhong.substring(0, 13) + "..."}
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}
