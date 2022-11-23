import { useState } from "react";
import { NavLink  } from 'react-router-dom'
import SelectLanguage from "./Language";
export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false); 

return (
    <div className="flex items-center justify-between py-8 bg-gray-800 shadow">
        <a className="ml-10"href="/Home">
            <h2 className="text-2xl text-red-700 font-bold py-3">SITEC</h2>
        </a>
        <nav>
            <section className="MOBILE-MENU flex lg:hidden">
                <div className="HAMBURGER-ICON space-y-2"
                onClick={() => setIsNavOpen((prev) => !prev)} >
                    <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                    <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                    <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                </div>
                <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}> 
                <div className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
                onClick={() => setIsNavOpen(false)} >
                    <svg
                    className="h-8 w-8 text-gray-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </div>
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
            <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/Home">Home</a>
            </li>
            <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/Login">Login</a>
            </li>
            <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/novedades">Novedades</a>
            </li>
            <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/contacto">Contact</a>
            </li>
            </ul>
        </div>
        </section>
        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex mr-20">
            <li>
                <button className="bg-neutral-900 hover:bg-neutral-800 text-white font-bold py-2 px-4 rounded-full"><NavLink to="/home">Home</NavLink></button>
            </li>
            <li className="ml-2">
                <button className="bg-neutral-900 hover:bg-neutral-800 text-white font-bold py-2 px-4 rounded-full"><NavLink to="/Novedades">Novedades</NavLink></button>
            </li>
            <li className="ml-2">
                <button className="bg-neutral-900 hover:bg-neutral-800 text-white font-bold py-2 px-4 rounded-full"><NavLink to="/Contacto">Contacto</NavLink> </button>
            </li>
            <li className="ml-2">
                <button className="bg-neutral-900 hover:bg-neutral-800 text-white font-bold py-2 px-4 rounded-full"><NavLink to="/Login">Login</NavLink> </button>
            </li>
            <li>

            <SelectLanguage/>
            </li>
        </ul>
</nav>
<style>{`
.hideMenuNav {
        display: none;
}
.showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
}
    `}</style>
    </div>
);
}