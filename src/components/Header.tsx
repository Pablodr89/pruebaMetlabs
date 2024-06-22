import { NavLink } from 'react-router-dom'
import { MagnifyingGlassIcon, HomeIcon } from '@heroicons/react/24/solid'

export default function Header() {
    let screenWidth
    return (
        <header className="flex justify-between md:px-8 lg:px-16 md:py-4">
            <div className="flex items-center md:gap-5 lg:gap-10">
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

            <nav className='dm-sans-regular text-white text-sm flex items-center md:gap-3 lg:gap-5'>
                <NavLink className={({ isActive }) => isActive ? 'bg-active px-4 py-2 rounded-3xl flex gap-2' : 'flex gap-2'} to={'/'}>
                    <HomeIcon className='size-3 relative top-1' /> Home
                </NavLink>
                <NavLink className={({ isActive }) => isActive ? 'bg-active px-4 py-2 rounded-3xl' : ''} to={'/descubrir'}>Descubrir</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'bg-active px-4 py-2 rounded-3xl' : ''} to={'/favoritos'}>Favoritos</NavLink>
                <NavLink className='text-white bg-nav-link md:px-4 lg:px-7 py-2 rounded-3xl text-nowrap' to={'/subir_obra'}>Subir Obra</NavLink>
                <NavLink to={''}>
                    <img src="/foto_perfil.png" alt="Foto perfil" />
                </NavLink>
            </nav>
        </header>
    )
}