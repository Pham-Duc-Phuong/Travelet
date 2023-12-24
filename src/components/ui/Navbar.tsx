import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "store"
import cn from 'classnames'
import { useNavigate } from "react-router-dom"
import { AuthActions } from "store/Auth"
import { PATH } from "constant"

export const Navbar = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const { token } = useAppSelector(state => state.Auth)
    const { UserByID } = useAppSelector(state => state.User)
    const DropDown = () => {
        const navbarUser = document.querySelector('#navbar-user')
        navbarUser.classList.toggle('phone:hidden')
        navbarUser.classList.toggle('phone:block')
    }
    const [setScroll, isSetSecroll] = useState<boolean>(false)

    const handleScroll = () => {
        if (window.pageYOffset > 50) {
            isSetSecroll(true)
            return
        }
        isSetSecroll(false)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
    return (
        <div className="fixed w-full z-50">
            <nav className={cn("border-gray-200 shadow-lg transition-all duration-500", { 'bg-white-rgba': !setScroll, 'bg-white': setScroll })}>
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3 sm:p-4">
                    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse" onClick={() => { navigate("/") }}>
                        <img src="/images/logo (3).png" className="h-[30px] sm:h-[45px] rounded-[50%]" alt="Flowbite Logo" />
                        <span className="self-center text-xl sm:text-2xl font-semibold whitespace-nowrap text-white drop-shadow-logo">Travelet</span>
                    </a>
                    <div className="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">
                        {token ? <div>
                            <button type="button" className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                                <span className="sr-only">Open user menu</span>
                                <img className="w-8 h-8 rounded-full" src={UserByID?.avatar} alt="user photo" />
                            </button>
                            <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow" id="user-dropdown">
                                <div className="px-4 py-3">
                                    <span className="block text-sm text-gray-900 dark:text-white">{UserByID?.name}</span>
                                    <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">{UserByID?.email}</span>
                                </div>
                                <ul className="py-2" aria-labelledby="user-menu-button">
                                    <li>
                                        <a href="#" className="a-navbar-dropdown" onClick={() => { navigate(PATH.account) }}>Account</a>
                                    </li>
                                    <li>
                                        <a href="#" className="a-navbar-dropdown" onClick={() => { navigate(PATH.admin) }}>Admin</a>
                                    </li>
                                    <li>
                                        <a href="#" className="a-navbar-dropdown" onClick={() => { dispatch(AuthActions.logOut()) }}>Sign out</a>
                                    </li>
                                </ul>
                            </div>
                        </div> : <div className="flex"><p className="p-carousel p-0" onClick={() => { navigate(PATH.login) }}>Login</p><span className="p-carousel sm:px-4">|</span><p className="p-carousel p-0" onClick={() => { navigate(PATH.register) }}>Register</p></div>}
                        <button id="btn-menu" type="button" className="inline-flex items-center w-10 h-10 justify-center text-sm text-black rounded-lg md:hidden" onClick={() => { DropDown() }}>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div className="items-center justify-between w-full phone:hidden md:block md:w-auto md:order-1" id="navbar-user">
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                            <li>
                                <a href="#" className="a-navbar-menu" onClick={() => { navigate('/') }}>Home</a>
                            </li>
                            <li>
                                <a href="#" className="a-navbar-menu" onClick={() => { navigate(PATH.travel) }}>Travel</a>
                            </li>
                            <li>
                                <a href="#" className="a-navbar-menu">Services</a>
                            </li>
                            <li>
                                <a href="#" className="a-navbar-menu">Pricing</a>
                            </li>
                            <li>
                                <a href="#" className="a-navbar-menu">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
