import { useAppDispatch, useAppSelector } from 'store'
import { useEffect } from 'react'
import '../layout/style.css'
import { layPhongTheoIDThunk } from 'store/Room'
import { useParams } from 'react-router-dom'
import { Search } from 'components'

export const RoomTemplate = () => {
  const { locationID, roomID } = useParams()
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(layPhongTheoIDThunk(roomID))
  }, [dispatch, roomID])
  const { layPhongTheoID } = useAppSelector(state => state.Room)
  const { location } = useAppSelector(state => state.Location)
  const address = location?.find(a => a.id === Number(locationID))
  console.log('address', address)
  console.log('layPhongTheoID', layPhongTheoID)
  return (
    <div className="container-page">
      <form action="" className="form-search">
        <Search />
      </form>
      <div>
        <img className='rounded-lg my-5 shadow-lg' src={layPhongTheoID?.hinhAnh} alt="" />
        <div className='grid sm:grid-cols-room-sm xl:grid-cols-room-xl gap-2 sm:gap-5'>
          <div className='div-room sm:col-start-1'>
            <div className='p-5'>
              <p className='title-room'>{layPhongTheoID?.tenPhong}</p>
              <p className='decription-room hover:underline cursor-pointer'>{address?.tenViTri}, {address?.tinhThanh}, {address?.quocGia}</p>
              <hr className='my-3' />
              <p className='description-room'>{layPhongTheoID?.moTa}</p>
            </div>
          </div>
          <div className='div-room sm:col-start-1'>
            <div className='p-5'>
              <p className='title-room'>Vacant ready room</p>
              <hr className='my-3' />
              <div className="description-room flex flex-wrap items-end justify-between sm:justify-start sm:gap-6">
                <div className='flex flex-col items-center'><i className="fa-solid fa-person text-2xl sm:text-4xl"></i><p>{layPhongTheoID?.khach} tourists</p></div>
                <div className='flex flex-col items-center'><i className="fa-solid fa-bed text-2xl sm:text-4xl"></i><p>{layPhongTheoID?.phongNgu} bedroom - {layPhongTheoID?.giuong} bed </p></div>
                <div className='flex flex-col items-center'><i className="fa-solid fa-bath text-2xl sm:text-4xl"></i><p>{layPhongTheoID?.phongTam} bathroom</p></div>
              </div>
            </div>
          </div>
          <div className='div-room sm:col-start-1'>
            <div className='p-5'>
              <p className='title-room'>Amenities </p>
              <hr className='my-3' />
              <div className="description-room flex flex-wrap items-end gap-4">
                {layPhongTheoID?.wifi ? <div><i className="fa-solid fa-wifi mr-1"></i>wifi</div> : ''}
                {layPhongTheoID?.dieuHoa ? <div><i className="fa-regular fa-snowflake mr-1"></i>air conditioner</div> : ''}
                {layPhongTheoID?.tivi ? <div><i className="fa-solid fa-tv mr-1"></i>TV</div> : ''}
                {layPhongTheoID?.doXe ? <div><i className="fa-solid fa-square-parking mr-1"></i>parking</div> : ''}
                {layPhongTheoID?.bep ? <div><i className="fa-solid fa-kitchen-set mr-1"></i>kitchen</div> : ''}
                {layPhongTheoID?.mayGiat ? <div><i className="fa-regular fa-hard-drive mr-1"></i>washing machine</div> : ''}
                {layPhongTheoID?.banUi ? <div><i className="fa-solid fa-hot-tub-person mr-1"></i>iron</div> : ''}
              </div>
            </div>
          </div>
          <div className='div-room sm:col-start-2 sm:row-start-1 sm:row-end-3 order-first'>
            <div className='p-5'>
              <p className='description-room'><span className='title-room'>{layPhongTheoID?.giaTien}$</span>/night</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
