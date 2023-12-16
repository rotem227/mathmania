import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';


function Navbar() {
    const navigate = useNavigate();

    const drawerCheckboxRef = useRef<HTMLInputElement>(null);

    const handleNavItemClick = () => drawerCheckboxRef.current!.checked = false;

    return (
        <>
            <div className="navbar bg-base-100 shadow-lg">
                <div className="navbar-start">
                    <label htmlFor="my-drawer" className="btn btn-square btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </label>
                </div>
                <div className="navbar-center">
                    <a className="btn btn-ghost text-xl">
                        <span className="tracking-widest">
                            <span className="text-primary">MATH</span>MANIA
                        </span>
                    </a>
                </div>
                <div className="navbar-end">
                    <button className="btn btn-square btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
                    </button>
                </div>
            </div>

            <div className="drawer">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" ref={drawerCheckboxRef} />
                <div className="drawer-side z-[999]">
                    <div className="relative h-full">
                        <label htmlFor="my-drawer" className="btn btn-md btn-circle btn-ghost absolute right-2 top-2">✕</label>
                        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-72 min-h-full bg-base-200 text-base-content pt-12">
                            <li className="text-lg"><Link to="/practice" onClick={handleNavItemClick}>Practic</Link></li>
                            <li className="text-lg"><Link to="/" onClick={handleNavItemClick}>Settings</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;