import { NavLink } from 'react-router-dom'
import { MagnifyingGlassIcon, HomeIcon } from '@heroicons/react/24/solid'
import { useState } from "react";

export default function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <header className="px-4 md:px-8 lg:px-16 py-4 text-white">
            <nav className='dm-sans-regular text-white text-sm flex justify-between items-center md:gap-3 lg:gap-5'>
                <div className='flex items-center gap-5'>
                    <NavLink to={'/'}>
                        <img src="/polygon.png" alt="Imagen Polygon" />
                    </NavLink>

                    <div className="hidden md:block">
                        <div>
                            <span className=''>
                                <MagnifyingGlassIcon className='text-white size-4 absolute position-icon-search' />
                            </span>
                            <input type='search' className='dm-sans-regular bg-search size-search rounded-3xl ps-10 text-base' placeholder='Search Item, Collection and Account' />
                        </div>
                    </div>
                </div>

                <section className="MOBILE-MENU flex md:hidden">
                    <div className="HAMBURGER-ICON space-y-2" onClick={() => setIsNavOpen((prev) => !prev)}>
                        <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                        <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                        <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                    </div>

                    <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                        <div className="CROSS-ICON absolute top-0 right-0 px-8 py-8" onClick={() => setIsNavOpen(false)}>
                            <svg
                                className="h-8 w-8 text-gray-600"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </div>
                        <div className="MENU-LINK-MOBILE-OPEN flex flex-col justify-between items-center gap-5 absolute top-20 left-5">
                            <NavLink to={''}>
                                <img src="/foto_perfil.png" alt="Foto perfil" />
                            </NavLink>
                            <NavLink className={({ isActive }) => isActive ? 'bg-active px-4 py-2 rounded-3xl flex gap-2' : 'flex gap-2'} to={'/'} onClick={() => setIsNavOpen(false)}>
                                <HomeIcon className='size-3 relative top-1' /> Home
                            </NavLink>
                            <NavLink className={({ isActive }) => isActive ? 'bg-active px-4 py-2 rounded-3xl' : ''} to={'/descubrir'} onClick={() => setIsNavOpen(false)}>Descubrir</NavLink>
                            <NavLink className={({ isActive }) => isActive ? 'bg-active px-4 py-2 rounded-3xl' : ''} to={'/favoritos'} onClick={() => setIsNavOpen(false)}>Favoritos</NavLink>
                            <NavLink className='text-white bg-nav-link px-4 lg:px-7 py-2 rounded-3xl text-nowrap' to={'/subir_obra'} onClick={() => setIsNavOpen(false)}>Subir Obra</NavLink>
                        </div>
                    </div>
                </section>

                <div className="DESKTOP-MENU hidden md:flex gap-3">
                    <NavLink className={({ isActive }) => isActive ? 'bg-active px-4 py-2 rounded-3xl flex gap-2' : 'flex gap-2 mt-2'} to={'/'}>
                        <HomeIcon className='size-3 relative top-1' /> Home
                    </NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'bg-active px-4 py-2 rounded-3xl' : 'mt-2'} to={'/descubrir'}>Descubrir</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'bg-active px-4 py-2 rounded-3xl' : 'mt-2'} to={'/favoritos'}>Favoritos</NavLink>
                    <NavLink className='text-white bg-nav-link md:px-4 lg:px-7 py-2 rounded-3xl text-nowrap' to={'/subir_obra'}>Subir Obra</NavLink>
                    <NavLink to={''}>
                        <img src="/foto_perfil.png" alt="Foto perfil" />
                    </NavLink>
                </div>
            </nav>
        </header>
    )
}