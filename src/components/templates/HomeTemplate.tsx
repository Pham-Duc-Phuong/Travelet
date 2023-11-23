import { Swiper, SwiperSlide } from 'swiper/react'; import { Autoplay } from 'swiper/modules'; import 'swiper/css'; import 'swiper/css/pagination'; import { useEffect, useState } from 'react'; import { useAppDispatch, useAppSelector } from 'store'; import { LocationByPageThunk } from 'store/Location'; import '../layout/style.css'; import { generatePath, useNavigate } from 'react-router-dom'
import { PATH } from 'constant';
import { Search } from 'components';
export const HomeTemplate = () => {
  const TouristAttraction = [{ viTri: 'Ha Long Bay', tinhThanh: 'Quang Ninh, Viet Nam' }, { viTri: 'Hoi An', tinhThanh: 'Quang Nam, Viet Nam' }, { viTri: 'Terraces', tinhThanh: 'Bac Kan, Viet Nam' }, { viTri: 'Ban Giooc Waterfall', tinhThanh: 'Lang Son, Viet Nam' }, { viTri: 'Notre Dame Cathedral', tinhThanh: 'Ho Chi Minh, Viet Nam' }, { viTri: 'Rong Bridge', tinhThanh: 'Da Nang, Viet Nam' }, { viTri: ' Ho Guom', tinhThanh: 'Ha Noi, Viet Nam' },]
  const TouristHobby = [{ viTri: 'Full house' }, { viTri: 'Unique house' }, { viTri: 'Farm & Nature' }, { viTri: 'Allow for pet' },]
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(LocationByPageThunk())
  }, [dispatch])
  const { locationByPage } = useAppSelector(state => state.Location)
  const navigate = useNavigate()
  // handleScreen get WidthScreen
  const [setScreen, isSetScreen] = useState<number>(window.innerWidth)
  const handleScreen = () => { isSetScreen(window.innerWidth) }; window.addEventListener('resize', handleScreen); let slidesPerView = 0; let spaceBetween = 0; if (setScreen < 639) { slidesPerView = 1; spaceBetween = 0 } else if (setScreen < 1024) { slidesPerView = 2; spaceBetween = 10 } else { slidesPerView = 3; spaceBetween = 10 }
  return (
    <div>
      <div className='relative'>
        <img className='w-full' src="/images/shot-panoramic-composition-living-room.jpg" alt="" />
        <form className='sm:absolute sm:-bottom-[38px] sm:left-1/2 sm:-translate-x-1/2 form-search px-5 sm:px-0'>
          <Search />
        </form>
      </div>
      {/* Explore Nearby Destinations */}
      <div className='container-page pt-0 sm:pt-8'>
        <div className='w-full'>
          <h1 className='title-home'>Explore Nearby Destinations</h1>
          <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-5'>
            {
              locationByPage?.map(a => (
                <div key={a.id} className='bg-white rounded-lg hover:bg-cyan-50 transition-all duration-500 cursor-pointer' onClick={() => {
                  const path = generatePath(PATH.location, { locationID: a.id })
                  navigate(path)
                }}>
                  <div className='flex items-center border p-1 sm:p-2 rounded-lg shadow-md'>
                    <img className='h-14 w-14 sm:h-24 sm:w-24 rounded-lg' src={a.hinhAnh} alt="" />
                    <div className='ml-2'>
                      <p className='label text-[16px] sm:text-[22px] font-[700]'>{a.tenViTri}</p>
                      <p className='label'>{a.tinhThanh}<span className='phone:hidden sm:inline'>, {a.quocGia}</span></p>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        {/* Explore Tourist Attraction */}
        <div className='w-full'>
          <h1 className='title-home mb-0 sm:mb-5'>Explore Tourist Attraction</h1>
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
            className="py-5"
          >
            {
              TouristAttraction?.map((a, index) => (
                <SwiperSlide key={index}><div className='relative px-3 sm:hover:-translate-y-2 sm:transition-all sm:duration-700'><div className='div-carousel'><p className='title-carousel'>{a.viTri}</p><p className='p-carousel'>{a.tinhThanh}</p></div><img className='img-carousel' src={`/images/carousel-${index + 1}.jpg`} alt="" /></div></SwiperSlide>
              ))
            }
          </Swiper>
        </div>
        {/* Explore Tourist Hobby */}
        <div className='w-full -mt-4 sm:mb-5'>
          <h1 className='title-home'>Explore Tourist Hobby</h1>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8'>
            {
              TouristHobby?.map((a, index) => (
                <div key={index} className='relative hover:-translate-y-2 transition-all duration-700'>
                  <img className='rounded-lg cursor-pointer shadow-dark-box' src={`/images/hobbyTravel-${index + 1}.jpg`} alt="" />
                  <div className='div-service'><p className='title-service'>{a.viTri}</p></div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>

  )
}
