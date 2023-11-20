import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "store"
import { LocationByPageThunk } from "store/Location"
import { layPhongTheoViTriThunk } from "store/Room"
import { get7DayNext, getToday } from "utils"


export const LocationTemplate = () => {
  const dispatch = useAppDispatch()
  const { locationID } = useParams()
  useEffect(() => {
    dispatch(layPhongTheoViTriThunk(Number(locationID)))
    dispatch(LocationByPageThunk())
  }, [dispatch, locationID])
  const { layPhongTheoViTri } = useAppSelector(state => state.Room)
  const { locationByPage } = useAppSelector(state => state.Location)
  const locationChoosen = locationByPage?.find(a => a.id === Number(locationID))
  return (
    <div className='max-w-screen-xl m-auto pt-[100px] sm:pt-[150px] px-5'>
      <p className="label sm:text-[14px] tracking-widest">có {layPhongTheoViTri?.length} chỗ ở từ {getToday} đến {get7DayNext}</p>
      <h1 className="title-carousel px-0 my-4"> Chỗ ở tại {locationChoosen?.tinhThanh} , {locationChoosen?.quocGia}</h1>
      <div className=" grid grid-cols-1 gap-2 sm:gap-7">
        {
          layPhongTheoViTri?.map(a => (
            <div key={a.id} className="w-full flex flex-col sm:flex-row rounded-lg bg-white shadow-dark-box">
              <img src={a.hinhAnh} className="h-30 sm:h-40 rounded-t-lg sm:rounded-l-lg sm:rounded-r-none" alt="" />
              <div className="my-2 mx-3 sm:mx-5">
                <p className="comment-location">Toàn bộ căn hộ dịch vụ tại Quận {locationChoosen?.tenViTri}</p>
                <h1 className="label text-[18px] sm:text-[22px]">{a.tenPhong}</h1>
                <hr className="w-[40px] my-2" />
                <p className="comment-location">{a.khach} Khách - {a.phongNgu} Phòng ngủ - {a.giuong} Giường - {a.phongTam} Phòng tắm</p>
                <p className="comment-location">{a.wifi ? "Wifi -" : ""} {a.dieuHoa ? "Điều hoà nhiệt độ -" : ""} {a.mayGiat ? "Máy giặc" : ""} </p>
                <p  className="comment-location"></p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
