import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "store"
import { LocationThunk } from "store/Location"

export const AdminLocation = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(LocationThunk())
  }, [dispatch])
  const { location } = useAppSelector(state => state.Location)
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 table-auto">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-3 py-3">
              ID
            </th>
            <th scope="col" className="px-3 py-3">
              Image
            </th>
            <th scope="col" className="px-3 py-3">
              Location
            </th>
          </tr>
        </thead>
        <tbody>
          {
            location?.map(a => (
              <tr key={a.id} className="bg-white border-b">
                <td className="px-3 py-3">
                  {a.id}
                </td>
                <td className="px-3 py-3">
                  <img className="w-20" src={a.hinhAnh} alt="" />
                </td>
                <td className="px-3 py-3">
                  {a.tenViTri}, {a.tinhThanh}, {a.quocGia}
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}
