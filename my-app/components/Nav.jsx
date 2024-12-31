import React from 'react'
import MenuSan from './MenuSan'
import { RxModulzLogo } from "react-icons/rx";
function Nav() {

    return (
        <header className="bg-white mb-8">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex-1 md:flex md:items-center md:gap-12">
                        <a className="block text-indigo-600" href="#">
                            <span className="sr-only">Home</span>
                            <RxModulzLogo className="h-16 w-16" />

                        </a>
                    </div>

                    <div className="md:flex md:items-center md:gap-12">
                        <nav aria-label="Global" className="hidden md:block">
                            <ul className="flex items-center gap-6 text-sm">
                                <li>
                                    <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> About </a>
                                </li>

                                <li>
                                    <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Services </a>
                                </li>

                                <li>
                                    <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Projects </a>
                                </li>
                            </ul>
                        </nav>

                        <div className="flex items-center gap-4">
                            <div className="sm:flex sm:gap-4">
                                {/* <a
                                    className="rounded-md bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                                    href="#"
                                >
                                    Login
                                </a> */}

                                <div className="hidden sm:flex">
                                    <a
                                        className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-blue-600"
                                        href="#"
                                    >
                                        Ajouter
                                    </a>
                                </div>
                            </div>

                            <div className="block md:hidden">
                                <MenuSan />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Nav