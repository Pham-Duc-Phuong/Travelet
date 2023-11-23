import { type } from "os"
import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "store"
import { LocationByPageThunk } from "store/Location"
import { Location } from "types"
import { getToday } from "utils"

type SearchProps = {
    Array?: Array<Location>
}

export const Search = ({ Array }: SearchProps) => {
    const { location } = useAppSelector(state => state.Location)
    return (
        <div className='grid grid-col-1 sm:grid-cols-search w-full mx-3 sm:mx-5 items-center'>
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
                <input className='input-home' type="date" placeholder='dd/mm/yyy' defaultValue={getToday} />
            </div>
            <div className='div-input-home'>
                <label htmlFor="" className='label'>Check out</label>
                <input className='input-home' type="date" placeholder='dd/mm/yyy' />
            </div>
            <div className='div-input-home'>
                <label htmlFor="" className='label'>Tourist</label>
                <input className='input-home' type="text" placeholder='How many' />
            </div>
            <button type='submit' className='mt-1 w-auto py-2 sm:mt-0 sm:mx-3 sm:w-fit sm:h-fit sm:px-3 rounded-md sm:rounded-[50%] border bg-gradient-to-br from-cyan-300 to-blue-600'><i className="fa-solid fa-magnifying-glass text-white"></i></button>
        </div>
    )
}
