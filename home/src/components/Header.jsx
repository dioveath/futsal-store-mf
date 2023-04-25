import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useScrollLockOnDialog } from '../hooks/useScrollLockOnDialog';

export default function Header() {
  const { isDialogOpen: active, setIsDialogOpen: setActive } = useScrollLockOnDialog();
  const navRef = useRef(null);


  // useEffect(() => {
  //   if(typeof window === 'undefined' || !navRef?.current) return;
  //   const handleScroll = (event) => {
  //     if(typeof window === 'undefined' || !navRef?.current) return;
  //     const navHeight = navRef.current.offsetHeight;
  //     if(window.scrollY > navHeight) {
  //       navRef.current.classList.add('bg-green-800/90');
  //     } else {
  //       navRef.current.classList.remove('bg-green-800/90');
  //     }
  //   }
  //   document.addEventListener('scroll', handleScroll);
  //   return () => {
  //     document.removeEventListener('scroll', handleScroll);
  //   }
  // }, [navRef])

  
  
  return (
    <nav ref={navRef} className="fixed z-20 top-0 left-0 w-full flex items-center justify-between py-4 px-10 md:px-20 lg:px-52 text-white bg-green-800/90">
      <div>
        <Link to="/" className="font-bold uppercase">Futsal Store</Link>
      </div>

      <div>
        <button className="md:hidden" onClick={() => setActive(!active)}> Open </button>
        <ul className={`${active ? 'translate-x-0' : 'translate-x-full'} 
        bg-green-800/90 flex fixed z-40 top-0 right-0 flex-col w-screen h-screen justify-center items-center
        md:bg-transparent md:static md:flex md:flex-row md:w-auto md:h-auto md:translate-x-0
        list-none gap-4 font-semibold transition-all duration-500`}>
        <button className="md:hidden" onClick={() => setActive(!active)}> Close </button>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        {/* <li><Link to="/contact">Contact</Link></li> */}
        <li>
            <Link to="/auth/login"> Login </Link>
        </li>
        <li>
            <Link to="/auth/register"> Sign Up </Link>
        </li>                
      </ul>        
      </div>


    </nav>    
  )
}