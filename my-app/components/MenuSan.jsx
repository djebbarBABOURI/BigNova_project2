'use client';
import React, { useState } from 'react'
import { IoMdAdd } from "react-icons/io";

function MenuSan() {
    const [isDropDown, setIsDropDown] = useState(false);
    return (

        <div className="relative">
            <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75" onClick={() => { setIsDropDown((prev) => !prev); }}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>

            {isDropDown && <div
                className="absolute end-0 z-10 mt-2 w-56 divide-y divide-gray-100 rounded-md border border-gray-100 bg-white shadow-lg"
                role="menu"
            >
                <div className="p-2">
                    <strong className="block p-2 text-xs font-medium uppercase text-gray-400"> General </strong>

                    <li className='list-none'>
                        <a
                            className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                            role="menuitem" href="#" onClick={() => { setIsDropDown(false); }}> About </a>
                    </li>

                    <li className='list-none'>
                        <a
                            className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                            role="menuitem" href="#" onClick={() => { setIsDropDown(false); }}> Services </a>
                    </li>

                    <li className='list-none'>
                        <a
                            className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                            role="menuitem" href="#" onClick={() => { setIsDropDown(false); }}> Projects </a>
                    </li>

                </div>

                <div className="p-2">
                    <strong className="block p-2 text-xs font-medium uppercase text-gray-400"> Actions </strong>
                    <a
                        className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-blue-500 hover:bg-blue-50 cursor-pointer"
                        role="menuitem" onClick={() => { setIsDropDown(false); }}
                    >
                        <IoMdAdd />
                        Ajouter
                    </a>

                </div>
            </div>}
        </div>

    )
}

export default MenuSan
