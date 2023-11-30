import { Search } from "components"
import { PATH } from "constant"
import { useEffect } from "react"
import { useParams, generatePath, useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "store"
import { LocationByPageThunk } from "store/Location"
import { layPhongTheoViTriThunk } from "store/Room"
import { get7DayNext, getToday } from "utils"


export const LocationTemplate = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { locationID } = useParams()
  useEffect(() => {
    dispatch(layPhongTheoViTriThunk(locationID))
    dispatch(LocationByPageThunk())
  }, [dispatch, locationID])
  const { layPhongTheoViTri } = useAppSelector(state => state.Room)
  const { locationByPage } = useAppSelector(state => state.Location)
  const locationChoosen = locationByPage?.find(a => a.id === Number(locationID))
  const detailRoom = (setRoomID) => {
    const path = generatePath(PATH.room, { locationID: locationID, roomID: setRoomID });
    navigate(path)
  }
  const setLike = (index) => {
    document.getElementById(`heart${index}`).classList.toggle('fa-regular')
    document.getElementById(`heart${index}`).classList.toggle('fa-solid')
  }
  return (
    <div className='container-page'>
      <form action="" className="form-search">
        <Search />
      </form>
      <p className="label sm:text-[14px] tracking-widest sm:mt-3">Have {layPhongTheoViTri?.length} accommodation from {getToday} to {get7DayNext}</p>
      <h1 className="title-carousel px-0 my-3"> Accommodation in {locationChoosen?.tinhThanh} , {locationChoosen?.quocGia}</h1>
      <div className=" grid grid-cols-1 gap-5 sm:gap-7">
        {
          layPhongTheoViTri?.map((a, index) => (
            <div key={a.id} className="relative">
              <i id={`heart${index}`} className="fa-regular fa-heart text-red-500 absolute lg:top-4 lg:right-6 lg:left-auto sm:left-6 bottom-4 left-3 text-2xl" onClick={() => { setLike(index) }}></i>
              <div className="w-full grid grid-cols-1 lg:grid-cols-2 rounded-lg bg-white shadow-lg cursor-pointer hover:bg-sky-50 transition-all duration-500" onClick={() => { detailRoom(a.id) }}>
                <img src={a.hinhAnh} className="h-full rounded-t-lg lg:rounded-l-lg lg:rounded-r-none" alt="" />
                <div className="py-3 lg:py-6 px-3 sm:px-6 w-full">
                  <p className="comment-location mb-1">Toàn bộ căn hộ dịch vụ tại {locationChoosen?.tenViTri}</p>
                  <h1 className="label text-[18px] sm:text-[22px] font-[700]">{a.tenPhong}</h1>
                  <hr className="w-[40px] my-2" />
                  <p className="comment-location"><i className="fa-solid fa-person"></i> {a.khach} tourists - <i className="fa-solid fa-bed"></i> {a.phongNgu} bedroom, {a.giuong} bed - <i className="fa-solid fa-bath"></i> {a.phongTam} bathroom</p>
                  <div className="comment-location flex flex-wrap gap-4">{a.wifi ? <div><i className="fa-solid fa-wifi mr-2"></i>Wifi</div> : ""} {a.dieuHoa ? <div><i className="fa-regular fa-snowflake mr-2"></i>air conditioner</div> : ""} {a.mayGiat ? <div><i className="fa-regular fa-hard-drive mr-2"></i>washing machine</div> : ""} </div>
                  <p className="comment-location text-right lg:absolute lg:bottom-2 lg:right-6 py-2"><span className="text-xl font-[700] text-black">{a.giaTien}$</span>/night</p>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}