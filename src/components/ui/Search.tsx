import { useAppSelector } from "store"
import { getToday } from "utils"


export const Search = () => {
    const { location } = useAppSelector(state => state.Location)
    return (
        <div className='sm:grid grid-col-1 sm:grid-cols-search w-full mx-3 sm:mx-5 items-center phone:hidden'>
            <div className='div-input-home'>
                <label>Location</label>
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
                <label>Check in</label>
                <input className='input-home' type="date" placeholder='dd/mm/yyy' defaultValue={getToday} />
            </div>
            <div className='div-input-home'>
                <label>Check out</label>
                <input className='input-home' type="date" placeholder='dd/mm/yyy' />
            </div>
            <div className='div-input-home'>
                <label>Tourist</label>
                <input className='input-home' type="text" placeholder='How many' />
            </div>
            <button type='submit' className='btn-search'><i className="fa-solid fa-magnifying-glass text-white"></i></button>
        </div>
    )
}
