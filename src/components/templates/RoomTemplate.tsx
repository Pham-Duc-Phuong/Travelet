import { Swiper, SwiperSlide } from 'swiper/react'; import { Navigation } from 'swiper/modules'; import 'swiper/css'; import 'swiper/css/navigation';
import { useAppDispatch, useAppSelector } from 'store'
import { useEffect, useState } from 'react'
import '../layout/style.css'
import { layPhongTheoIDThunk } from 'store/Room'
import { useParams } from 'react-router-dom'
import { Search } from 'components'
import { Button } from 'antd'
import { useForm, SubmitHandler } from 'react-hook-form'
import { BookingSchema, BookingSchemaType, CommentSchema, CommentSchemaType } from 'schema'
import { zodResolver } from '@hookform/resolvers/zod'
import cn from 'classnames'
import { BookServices, CommentServices } from 'services'
import { booked, postComment } from 'types'
import { toast } from 'react-toastify'
import { getCheckInDay, getCheckOutDay } from 'utils'
import { getCommentThunk } from 'store/Comment'

export const RoomTemplate = () => {
  const { roomID } = useParams()
  const [tourist, setTourist] = useState<number>(1)
  const [quantityRoom, setQuantityRoom] = useState<number>(1)
  const [checkInDay, setCheckInDay] = useState(getCheckInDay)
  const [checkOutDay, setCheckOutDay] = useState(getCheckOutDay)
  const tinhSoNgay = Math.round(((new Date(checkOutDay).getTime()) - (new Date(checkInDay).getTime())) / (1000 * 60 * 60 * 24))
  const { handleSubmit: handleSubmit1, register: register1, formState: { errors: errors1 } } = useForm<BookingSchemaType>({
    mode: "onChange",
    resolver: zodResolver(BookingSchema)
  })
  const { handleSubmit: handleSubmit2, register: register2, formState: { errors: errors2 } } = useForm<CommentSchemaType>({
    mode: "onChange",
    resolver: zodResolver(CommentSchema)
  })
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(layPhongTheoIDThunk(roomID));
    dispatch(getCommentThunk(roomID))
  }, [dispatch, roomID])
  const { layPhongTheoID } = useAppSelector(state => state.Room)
  const { UserByID } = useAppSelector(state => state.User)
  const { getComment } = useAppSelector(state => state.Comment)
  const tinhTienPhong = layPhongTheoID?.giaTien * quantityRoom * tinhSoNgay
  const [setScreen, isSetScreen] = useState<number>(window.innerWidth)
  const handleScreen = () => { isSetScreen(window.innerWidth) }; window.addEventListener('resize', handleScreen); let slidesPerView = 0; let spaceBetween = 0; if (setScreen < 639) { slidesPerView = 2; spaceBetween = 5 } else { slidesPerView = 4; spaceBetween = 10 }
  const [setStar, isSetStar] = useState<number>(0)
  const rateStar = (index) => {
    const star = document.querySelectorAll('.fa-star')
    star.forEach((a, index1) => {
      isSetStar(index + 1)
      index >= index1 - 1 ? a.classList.add('text-yellow-300') : a.classList.remove('text-yellow-300');
    })
  }
  const setSubmit1: SubmitHandler<booked> = async (values) => {
    const booking = { ...values, id: 0, maPhong: Number(roomID), maNguoiDung: UserByID?.id }
    if (tourist < 1 || quantityRoom < 1) return toast.error('Số lượng khách và phòng phải lớn hơn 0')
    try {
      await BookServices.booking(booking)
      toast.success('Đặt phòng thành công')
    } catch (error) {
      toast.error('Đặt phòng thất bại')
    }
  }
  const setSubmit2: SubmitHandler<postComment> = async (values) => {
    const rate = { ...values, id: 0, maPhong: Number(roomID), maNguoiBinhLuan: UserByID?.id, ngayBinhLuan: getCheckInDay, saoBinhLuan: setStar }
    if (setStar == 0) return toast.error('Hãy đánh giá số sao')
    try {
      await CommentServices.postComment(rate)
      dispatch(getCommentThunk(roomID))
      toast.success("Đánh giá thành công")
    } catch (error) {
      toast.error("Đánh giá thất bại")
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
          <div className='div-room sm:col-start-1 sm:col-end-2'>
            <div className='p-5'>
              <p className='title-location'>{layPhongTheoID?.tenPhong}</p>
              <hr className='my-3'/>
              <p className='description-room'>{layPhongTheoID?.moTa}</p>
            </div>
          </div>
          <div className='div-room sm:col-start-1 sm:col-end-2'>
            <div className='p-5'>
              <p className='title-location'>Vacant ready room</p>
              <hr className='my-3' />
              <div className="description-room flex flex-wrap items-end justify-between sm:justify-start sm:gap-6">
                <div className='flex flex-col items-center'><i className="fa-solid fa-person text-2xl sm:text-4xl"></i><p>{layPhongTheoID?.khach} tourists</p></div>
                <div className='flex flex-col items-center'><i className="fa-solid fa-bed text-2xl sm:text-4xl"></i><p>{layPhongTheoID?.phongNgu} bedroom - {layPhongTheoID?.giuong} bed </p></div>
                <div className='flex flex-col items-center'><i className="fa-solid fa-bath text-2xl sm:text-4xl"></i><p>{layPhongTheoID?.phongTam} bathroom</p></div>
              </div>
            </div>
          </div>
          <div className='div-room sm:col-start-1 sm:col-end-2'>
            <div className='p-5'>
              <p className='title-location'>Amenities</p>
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
          <div className='div-room room sm:col-start-2 sm:col-end-3 sm:row-start-1 sm:row-end-4 order-first'>
            <div className='p-5'>
              <div className='flex items-center justify-between'>
                <p className='description-room'><span className='title-location inline'>{layPhongTheoID?.giaTien}$</span>/night</p>
                <p className='description-room cursor-pointer'><i className="fa-solid fa-star text-yellow-300"></i><span className='hover:underline'>
                  {
                    getComment?.length ? Math.round((getComment?.reduce((total, a) => total += a.saoBinhLuan, 0) / getComment?.length) * 10) / 10 : 5
                  }
                </span> ( {getComment?.length ? getComment?.length : 5} rated )</p>
              </div>
              {/* Form */}
              <form onSubmit={handleSubmit1(setSubmit1)}>
                <div className='my-4'>
                  <div className='grid grid-cols-2'>
                    <div className={cn('check input-checkin', { "!border-red-500": errors1?.ngayDen })}>
                      <label>Checkin</label>
                      <input id='ngayDen' className='comment-location outline-none w-full' type="datetime-local" {...register1('ngayDen')} value={checkInDay} onChange={(e) => { setCheckInDay(e.target.value) }} />
                    </div>
                    <div className={cn('check input-checkout', { "!border-red-500": errors1?.ngayDi })}>
                      <label>Checkout</label>
                      <input id='ngayDi' className='comment-location outline-none w-full' type="datetime-local"  {...register1('ngayDi')} value={checkOutDay} onChange={(e) => { setCheckOutDay(e.target.value) }} />
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
                  <div className={cn('check px-[10px] py-5 rounded-b-xl !border-t-0', { "border-red-500": errors1?.soLuongKhach })}>
                    <label>Tourists</label>
                    <div className='flex justify-center'>
                      <button type='button' className='btn-quantity' onClick={() => { if (tourist > 1) { setTourist(tourist - 1) } }}><i className="fa-solid fa-minus text-blue-700"></i></button>
                      <input className='w-full outline-none text-center' type="number" placeholder='People' value={tourist} {...register1('soLuongKhach')} onChange={(e) => { setTourist(Number(e.target.value)) }} />
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
        <div className='div-room my-2 sm:my-5'>
          <div className='p-5'>
            <p className='title-location'>Comment</p>
            <div>
              {
                [...Array(5)].map((_, index) => (
                  <i key={index} className="fa-solid fa-star text-lg sm:text-2xl mb-2" onClick={() => { rateStar(index) }}></i>
                ))
              }
              <form onSubmit={handleSubmit2(setSubmit2)} className='description-room w-full border rounded-3xl outline-none my-0 flex'>
                <input type="text" className='ml-4 mr-2 w-full outline-none' {...register2("noiDung")} />
                <button type='submit' className='border-0 py-2 mt-0 px-3 rounded-[50%] bg-gradient-to-br from-cyan-300 to-blue-600'><i className="fa-solid fa-paper-plane text-white"></i></button>
              </form>
              {errors2 && <p className='error'>{errors2?.noiDung?.message}</p>}
            </div>
            <hr className='my-3' />
            <div className="description-room">
              <Swiper
                slidesPerView={slidesPerView}
                spaceBetween={spaceBetween}
                loop={true}
                navigation={true}
                modules={[Navigation]}
                centeredSlides={true}
                centerInsufficientSlides={true}
              >
                {
                  getComment?.map((a, index) => (
                    <SwiperSlide key={index}>
                      {
                        <div className='border rounded-lg h-32'>
                          <div className='p-2'>
                            <div className='flex items-center w-full space-x-3'>
                              {a.avatar ? <img className='w-8 h-8 rounded-[50%]' src={a.avatar} alt="" /> : <i className="fa-solid fa-user w-10 h-10 rounded-[50%] text-center leading-10 border text-white bg-black"></i>}
                              <p className='font-[600]'>{a.tenNguoiBinhLuan.substring(0, 10)}</p>
                            </div>
                            <p>{a.noiDung}</p>
                          </div>
                        </div>
                      }
                    </SwiperSlide>
                  ))
                }
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
