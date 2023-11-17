import { useEffect, useState } from "react"
import { useAppSelector } from "store"
import cn from 'classnames'

export const Navbar = () => {
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
            <nav className={cn("border-gray-200  shadow-lg dark:shadow-darkMode", { 'bg-white-rgba duration-700': !setScroll, 'bg-white dark:bg-gray-900 duration-700': setScroll })}>
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="/images/logo (3).png" className="h-[30px] sm:h-[45px] mr-2 sm:mr-3 rounded-[50%]" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white drop-shadow-logo">Travelet</span>
                    </a>
                    <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <button type="button" className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                            <span className="sr-only">Open user menu</span>
                            <img className="w-8 h-8 rounded-full" src={UserByID?.avatar} alt="user photo" />
                        </button>
                        {/* Dropdown menu */}
                        <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
                            <div className="px-4 py-3">
                                <span className="block text-sm text-gray-900 dark:text-white">{UserByID?.name}</span>
                                <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">{UserByID?.email}</span>
                            </div>
                            <ul className="py-2" aria-labelledby="user-menu-button">
                                <li>
                                    <a href="#" className="a-navbar-dropdown">Dashboard</a>
                                </li>
                                <li>
                                    <a href="#" className="a-navbar-dropdown">Settings</a>
                                </li>
                                <li>
                                    <a href="#" className="a-navbar-dropdown">Earnings</a>
                                </li>
                                <li>
                                    <a href="#" className="a-navbar-dropdown">Sign out</a>
                                </li>
                            </ul>
                        </div>
                        <button id="btn-menu" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" onClick={() => { DropDown() }}>
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div className="items-center justify-between w-full phone:hidden md:block md:w-auto md:order-1" id="navbar-user">
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a href="#" className="a-navbar-menu">Home</a>
                            </li>
                            <li>
                                <a href="#" className="a-navbar-menu">About</a>
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
