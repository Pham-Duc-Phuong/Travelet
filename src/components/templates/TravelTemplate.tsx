import { useEffect } from "react"
import { layPhongThunk } from "store/Room"
import { Search } from "components"
import { PATH } from "constant"
import { useParams, generatePath, useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "store"
import { LocationByPageThunk } from "store/Location"
import { layPhongTheoViTriThunk } from "store/Room"

export const TravelTemplate = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(layPhongThunk())
    }, [dispatch])
    const { layPhong } = useAppSelector(state => state.Room)
    const navigate = useNavigate()
    const { locationID } = useParams()
    useEffect(() => {
        dispatch(layPhongTheoViTriThunk(locationID))
        dispatch(LocationByPageThunk())
    }, [dispatch, locationID])
    const detailRoom = (setRoomID) => {
        const path = generatePath(PATH.room, { roomID: setRoomID });
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
            <div className="grid grid-cols-1 gap-5 sm:gap-7 sm:pt-7">
                {
                    layPhong?.map((a, index) => (
                        <div key={a.id} className="relative" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
                            <i id={`heart${index}`} className="fa-regular fa-heart text-red-500 absolute lg:top-4 lg:right-6 lg:left-auto sm:left-6 bottom-4 left-3 text-2xl" onClick={() => { setLike(index) }}></i>
                            <div className="w-full grid grid-cols-1 lg:grid-cols-2 rounded-lg bg-white shadow-lg cursor-pointer hover:bg-sky-50 transition-all duration-500" onClick={() => { detailRoom(a.id) }}>
                                <img src={a.hinhAnh} className="h-full rounded-t-lg lg:rounded-l-lg lg:rounded-r-none" alt="" />
                                <div className="py-3 lg:py-6 px-3 sm:px-6 w-full">
                                    <p className="comment-location mb-1">Toàn bộ căn hộ dịch vụ</p>
                                    <h1 className="title-location">{a.tenPhong}</h1>
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
