import { useLocation, useNavigate, useSearchParams } from "react-router-dom"
import qs from 'qs'
type queryParams = Record<string, string>;
type setQueryParams = (time: Record<string, string>) => void
export const useQueryParams = (): [queryParams, setQueryParams] => {
    const [searchParams] = useSearchParams()
    const location = useLocation()
    const navigate = useNavigate()
    const queryParams = Object.fromEntries(searchParams)
    const setQueryParams = (time: Record<string, string>) => {
        const qsStringly = qs.stringify(time, {
            addQueryPrefix: true,
        })
        navigate(location.pathname + qsStringly)
    }
    return [queryParams, setQueryParams]
}