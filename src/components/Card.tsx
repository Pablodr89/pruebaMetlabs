import { HeartIcon, ShoppingCartIcon } from "@heroicons/react/24/solid"
import CIcon from '@coreui/icons-react';
import * as icon from '@coreui/icons';
import { NavLink } from "react-router-dom";

export default function Card() {
    return (
        <>
            <div id="card" className="max-w-60 max-h-72 ml-3">
                <div className="overflow-hidden">
                    <img src="/image_card.png" alt="Imagen card" />
                </div>

                <div className="px-5 py-6 bg-card rounded-lg">
                    <h2 className="raleway-bold text-white text-xl">Javier Cantante</h2>
                    <div className="flex gap-2 mt-3">
                        <NavLink to={''}>
                            <img src="/foto_perfil.png" alt="Foto perfil" className="size-6" />
                        </NavLink>
                        <p className="dm-sans-regular text-gray-400 text-sm mt-1">@johnti60</p>
                    </div>
                </div>

                <div className="relative bottom-3 left-4 hidden" id="options">
                    <div className="bg-options flex justify-between items-center p-4 w-52 h-10 rounded-xl">
                        <button>
                            <CIcon icon={icon.cilHandshake} className="size-5 text-white" />
                        </button>

                        <button>
                            <ShoppingCartIcon className="size-5 text-white" />
                        </button>
                        <button>
                            <HeartIcon className="size-5 text-white" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
