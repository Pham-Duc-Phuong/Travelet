import { useAppDispatch, useAppSelector } from 'store'
import { useEffect, useState } from 'react'
import '../layout/style.css'
import { layPhongTheoIDThunk } from 'store/Room'
import { useParams } from 'react-router-dom'
import { Search } from 'components'
import { Button } from 'antd'
import { useForm, SubmitHandler } from 'react-hook-form'
import { BookingSchema, BookingSchemaType } from 'schema'
import { zodResolver } from '@hookform/resolvers/zod'
import cn from 'classnames'
import { BookServices } from 'services'
import { booked } from 'types'
import { toast } from 'react-toastify'
import { getCheckInDay, getCheckOutDay } from 'utils'

export const RoomTemplate = () => {
  const { locationID, roomID } = useParams()
  const [tourist, setTourist] = useState<number>(1)
  const [quantityRoom, setQuantityRoom] = useState<number>(1)
  const [checkInDay, setCheckInDay] = useState(getCheckInDay)
  const [checkOutDay, setCheckOutDay] = useState(getCheckOutDay)
  const tinhSoNgay = ((new Date(checkOutDay).getTime()) - (new Date(checkInDay).getTime())) / (1000 * 60 * 60 * 24)
  const { handleSubmit, register, formState: { errors } } = useForm<BookingSchemaType>({
    mode: "onChange",
    resolver: zodResolver(BookingSchema)
  })
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(layPhongTheoIDThunk(roomID));

  }, [dispatch, roomID])
  const { layPhongTheoID } = useAppSelector(state => state.Room)
  const { location } = useAppSelector(state => state.Location)
  const { UserByID } = useAppSelector(state => state.User)
  const address = location?.find(a => a.id === Number(locationID))
  const tinhTienPhong = layPhongTheoID?.giaTien * quantityRoom * tinhSoNgay
  const setSubmit: SubmitHandler<booked> = async (values) => {
    const booking = { ...values, id: 0, maPhong: Number(roomID), maNguoiDung: UserByID?.id }
    if (tourist < 1 && quantityRoom < 1) {
      toast.error('Số lượng khách và phòng phải lớn hơn 0')
    } else {
      try {
        await BookServices.booking(booking)
        toast.success('Đặt phòng thành công')
      } catch (error) {
        toast.error(error.response.data.message)
      }
    }
  }
  return (
    <div className="container-page">
      <form action="" className="form-search">
        <Search />
      </form>
      <div>
        <img className='rounded-lg my-5 shadow-lg' src={layPhongTheoID?.hinhAnh} alt="" />
        <div className='grid sm:grid-cols-room-sm gap-2 sm:gap-5'>
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
                {layPhongTheoID?.mayGiat ? <div><i className="fa-regular fa-hard-drive mr-1"></i>washer</div> : ''}
                {layPhongTheoID?.banUi ? <div><i className="fa-solid fa-hot-tub-person mr-1"></i>iron</div> : ''}
              </div>
            </div>
          </div>
          <div className='div-room room sm:col-start-2 sm:row-start-1 sm:row-end-4 order-first'>
            <div className='p-5'>
              <div className='flex items-center justify-between'>
                <p className='description-room'><span className='title-room'>{layPhongTheoID?.giaTien}$</span>/night</p>
                <p className='description-room cursor-pointer'><i className="fa-solid fa-star text-yellow-300"></i><span className='hover:underline'>4.85 (52 reviews)</span></p>
              </div>
              {/* Form */}
              <form onSubmit={handleSubmit(setSubmit)}>
                <div className='my-4'>
                  <div className='grid grid-cols-2'>
                    <div className={cn('check input-checkin', { "!border-red-500": errors?.ngayDen })}>
                      <label>Checkin</label>
                      <input id='ngayDen' className='comment-location outline-none w-full' type="datetime-local" {...register('ngayDen')} value={checkInDay} onChange={(e) => { setCheckInDay(e.target.value) }} />
                    </div>
                    <div className={cn('check input-checkout', { "!border-red-500": errors?.ngayDi })}>
                      <label>Checkout</label>
                      <input id='ngayDi' className='comment-location outline-none w-full' type="datetime-local"  {...register('ngayDi')} value={checkOutDay} onChange={(e) => { setCheckOutDay(e.target.value) }} />
                    </div>
                  </div>
                  <div className={cn('check px-[10px] py-5 !border-t-0')}>
                    <label>Room</label>
                    <div className='flex justify-center'>
                      <button type='button' className='btn-quantity' onClick={() => { if (quantityRoom > 1) { setQuantityRoom(quantityRoom - 1) } }}><i className="fa-solid fa-minus text-blue-700"></i></button>
                      <input className='w-full outline-none text-center' type="number" placeholder='room' value={quantityRoom} onChange={(e) => { setQuantityRoom(Number(e.target.value)) }} />
                      <button type='button' className='btn-quantity' onClick={() => { setQuantityRoom(quantityRoom + 1) }}><i className="fa-solid fa-plus text-blue-700"></i></button>
                    </div>
                  </div>
                  <div className={cn('check px-[10px] py-5 rounded-b-xl !border-t-0', { "border-red-500": errors?.soLuongKhach })}>
                    <label>Tourists</label>
                    <div className='flex justify-center'>
                      <button type='button' className='btn-quantity' onClick={() => { if (tourist > 1) { setTourist(tourist - 1) } }}><i className="fa-solid fa-minus text-blue-700"></i></button>
                      <input className='w-full outline-none text-center' type="number" placeholder='People' value={tourist} {...register('soLuongKhach')} onChange={(e) => { setTourist(Number(e.target.value)) }} />
                      <button type='button' className='btn-quantity' onClick={() => { setTourist(tourist + 1) }}><i className="fa-solid fa-plus text-blue-700"></i></button>
                    </div>
                  </div>
                </div>
                <Button htmlType='submit' className='btn-register my-2'>Booking now</Button>
                <div className='mt-4'>
                  <div className='flex justify-between'>
                    <p className='description-room'>{layPhongTheoID?.giaTien}$ x {quantityRoom} room x {tinhSoNgay} day</p>
                    <p className='description-room'>{tinhTienPhong}$</p>
                  </div>
                  <div className='flex justify-between'>
                    <p className='description-room'>Service charge</p>
                    <p className='description-room'>{20 * quantityRoom}$</p>
                  </div>
                  <div className='flex justify-between'>
                    <p className='description-room'>Tax</p>
                    <p className='description-room'>{(tinhTienPhong * 0.1).toFixed(1)}$</p>
                  </div>
                  <hr className='my-1 sm:my-3' />
                  <div className='flex justify-between'>
                    <p className='description-room font-[700]'>Total</p>
                    <p className='description-room'>{(tinhTienPhong + 20 * quantityRoom + (tinhTienPhong * 0.1)).toFixed(1)}$</p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
