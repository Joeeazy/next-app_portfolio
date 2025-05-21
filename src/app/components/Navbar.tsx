"use client"

import React, { useState } from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {Bars3Icon, MoonIcon, SunIcon, XMarkIcon} from "@heroicons/react/24/outline"

export default function Navbar() {

  const theme = "dark"; //TODO GET THEME FROM CONTEXT
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

    //active link
    const pathname = usePathname()

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    const menuItems = [
        {href: "/", label: "Home"},
        {href: "/about", label: "About"},
        {href: "/projects", label: "Projects"},
        {href: "/blogs", label: "Blogs"},
        {href: "/contact", label: "Contact"},
    ]
  return (
    <nav className='fixed w-full bg-white/80 dark:bg-dark/80 backdrop-blur-sm z-50'>
      <div className='container max-w-7xl mx-auto px-4'>
        {/* desktop menu */}
        <div className='flex items-center justify-between h-16'>
          <Link href="/" className='text-xl font-bold text-primary'>Mwangi.&trade;</Link>
          {/* menu items */}
          <div className='hidden md:flex items-center space-x-8'>
            {
              menuItems.map((menu, index) => {
                const isActive = pathname === menu.href 
                return (
                  (
                    <Link key={index} href={menu.href} className={`hover:text-primary transition-colors font-medium ${isActive ? 'text-primary': ''}`}>{menu.label}</Link>
                  )
                )
              })
            }
            <button className='p-2 rounded-lg text-primary hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer'>
              {
                theme === "dark" ? (
                  <SunIcon  className='w-5 h-5'/>
                ) : (
                  <MoonIcon className='w-5 h-5'/>
                )
              }
            </button>
          </div>

          {/* mobile menu btn */}
          <button onClick={toggleMobileMenu} className='md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer'>
            {
              isMobileMenuOpen ? (
                <XMarkIcon className='w-6 h-6'/>
              ) : (
                <Bars3Icon className='w-6 h-6'/>
              )
            }
          </button>
        </div>
        {/* mobile menu */}
        {
          isMobileMenuOpen && (
            <div className='md:hidden '>
              <div className='py-4 space-y-4'>
                {
                  menuItems.map((item, index) => (
                    <div key={index} onClick={toggleMobileMenu}>
                      <Link href={item.href} className="block py-2 hover:text-primary transition-colors">{item.label}</Link>
                    </div>
                  ))
                }
                <div>
                <button className='flex py-2 items-center hover:text-primary transition-colors'>
              {
                theme === "dark" ? (
                  <><SunIcon  className='w-5 h-5 mr-2'/>Light Mode</>
                ) : (
                  <><MoonIcon className='w-5 h-5 mr-2'/>Dark Mode</>
                )
              }
            </button>
                </div>
              </div>
            </div>
          )
        }
      </div>
    </nav>
  )
}
