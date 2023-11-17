import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'store';
import { LocationByPageThunk, LocationThunk } from 'store/Location';

export const HomeTemplate = () => {
  const TouristAttraction = [
    { viTri: 'Ha Long Bay', tinhThanh: 'Quang Ninh, Viet Nam' },
    { viTri: 'Hoi An', tinhThanh: 'Quang Nam, Viet Nam' },
    { viTri: 'Terraces', tinhThanh: 'Bac Kan, Viet Nam' },
    { viTri: 'Ban Giooc Waterfall', tinhThanh: 'Lang Son, Viet Nam' },
    { viTri: 'Notre Dame Cathedral', tinhThanh: 'Ho Chi Minh, Viet Nam' },
    { viTri: 'Rong Bridge', tinhThanh: 'Da Nang, Viet Nam' },
    { viTri: ' Ho Guom', tinhThanh: 'Ha Noi, Viet Nam' },
  ]
  const TouristHobby = [
    { viTri: 'Full house' },
    { viTri: 'Unique house' },
    { viTri: 'Farm & Nature' },
    { viTri: 'Allow for pet' },
  ]
  const [setScreen, isSetScreen] = useState<number>(window.innerWidth)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(LocationThunk())
    dispatch(LocationByPageThunk())
  }, [dispatch])
  const { location, locationByPage } = useAppSelector(state => state.Location)
  const handleScreen = () => { isSetScreen(window.innerWidth) }
  window.addEventListener('resize', handleScreen);
  let slidesPerView = 0
  let spaceBetween = 0
  if (setScreen < 639) { slidesPerView = 1; spaceBetween = 10 } else { slidesPerView = 3; spaceBetween = 10 }
  return (
    <div>
      <div className='relative'>
        <img className='w-full' src="/images/shot-panoramic-composition-living-room.jpg" alt="" />
        <div className='sm:absolute sm:-bottom-[38px] sm:left-1/2 sm:-translate-x-1/2 max-w-screen-lg m-auto sm:bg-white sm:border sm:rounded-[40px] flex flex-col sm:flex-row justify-between items-center w-full my-2 sm:my-0'>
          <div className='grid grid-col-1 sm:grid-cols-4 w-full mx-3 sm:mx-5'>
            <div className='div-input-home'>
              <label htmlFor="" className='label'>Location</label>
              <select className='input-home'>
                <option value="">Let's go</option>
                {
                  location?.map(a => (
                    <option key={a.id} value={a.id}>{a.tenViTri}, {a.tinhThanh}, {a.quocGia}</option>
                  ))
                }
              </select>
            </div>
            <div className='div-input-home'>
              <label htmlFor="" className='label'>Check in</label>
              <input className='input-home' type="date" placeholder='dd/mm/yyy' />
            </div>
            <div className='div-input-home'>
              <label htmlFor="" className='label'>Check out</label>
              <input className='input-home' type="date" placeholder='dd/mm/yyy' />
            </div>
            <div className='div-input-home'>
              <label htmlFor="" className='label'>Tourist</label>
              <input className='input-home' type="text" placeholder='How many' />
            </div>
          </div>
          <button className='mt-1 sm:mt-0 sm:mx-0 sm:mr-7 w-full sm:w-auto border sm:px-3 py-2 rounded-md sm:rounded-[50%] bg-gradient-to-br from-cyan-300 to-blue-600'><i className="fa-solid fa-magnifying-glass text-white"></i></button>
        </div>
      </div>
      <div className='max-w-screen-xl m-auto sm:pt-8 px-[20px] sm:px-[30px]'>
        <div className='w-full'>
          <h1 className='title-home'>Explore Nearby Destinations</h1>
          <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-5'>
            {
              locationByPage?.map(a => (
                <div className='bg-white rounded-lg'>
                  <div className='flex items-center p-2 sm:p-3'>
                    <img className='h-12 w-12 sm:h-20 sm:w-20 rounded-lg' src={a.hinhAnh} alt="" />
                    <div className='ml-2'>
                      <p className='label'>{a.tenViTri}</p>
                      <p className='label'>{a.tinhThanh}<span className='phone:hidden sm:inline'>, {a.quocGia}</span></p>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        <div className='w-full'>
          <h1 className='title-home'>Explore Tourist Attraction</h1>
          <Swiper
            slidesPerView={slidesPerView}
            spaceBetween={spaceBetween}
            loop={true}
            modules={[Autoplay]}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false
            }}
            centerInsufficientSlides={true}
            className=" py-5"
          >
            {
              TouristAttraction?.map((a, index) => (
                <SwiperSlide key={index}><div className='relative px-3 sm:hover:-translate-y-4 sm:transition-all sm:duration-700'><div className='div-carousel'><p className='p-carousel'>{a.viTri}</p><p className='title-carousel'>{a.tinhThanh}</p></div><img className='img-carousel' src={`/images/carousel-(${index + 1}).jpg`} alt="" /></div></SwiperSlide>
              ))
            }
          </Swiper>
        </div>
        <div className='w-full'>
          <h1 className='title-home'>Explore Tourist Hobby</h1>
          <div className='grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8'>
            {
              TouristHobby?.map((a, index) => (
                <div className='relative hover:-translate-y-4 transition-all duration-700'>
                  <img className='rounded-lg cursor-pointer shadow-dark-box' src={`/images/hobbyTravel-(${index + 1}).jpg`} alt="" />
                  <div className='div-carousel'><p className='p-carousel'>{a.viTri}</p></div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>

  )
}
