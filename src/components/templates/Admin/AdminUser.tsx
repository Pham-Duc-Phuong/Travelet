import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "store"
import { getUserThunk } from "store/Users"

export const AdminUser = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getUserThunk())
  }, [dispatch])
  const { listUser } = useAppSelector(state => state.User)
  const [setScreen, isSetScreen] = useState<number>(window.innerWidth)
  const handleScreen = () => { isSetScreen(window.innerWidth) }
  window.addEventListener('resize', handleScreen)

  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 table-fixed sm:table-auto">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              ID
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              <i className="fa-regular fa-trash-can text-red-600 text-base"></i>
            </th>
          </tr>
        </thead>
        <tbody>
          {
            listUser?.map(a => (
              <tr key={a.id} className="bg-white border-b">
                <td className="px-6 py-4">
                  {a.id}
                </td>
                <td className="px-6 py-4">
                {setScreen > 640 ? a.name : a.name.substring(0, 5) + "..."}
                </td>
                <td className="px-6 py-4">
                  {setScreen > 640 ? a.email : a.email.substring(0, 5) + "..."}
                </td>
                <td className="px-6 py-4">
                  <i className="fa-regular fa-trash-can text-red-600 text-base border border-red-600 px-2 py-[3px] rounded-lg hover:text-white hover:bg-red-600 duration-500"></i>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}
