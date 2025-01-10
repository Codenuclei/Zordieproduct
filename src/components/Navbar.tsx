import { useState } from 'react'
import { Button } from './ui/button'

const Navbar = () => {

    const [menu, setmenu] = useState<boolean>(false);
    return (
        <div>
            <div className='h-[54px]   bg-radial-gradient flex items-center justify-center'>
                <div>
                    <p className='text-white text-xs md:text-sm lg:text-md font-bold text-center'>Autodesigner 2.0 is here. The most popular UI generator just got even better!</p>
                </div>
            </div>

            {/* navbar */}
            <nav className=" bg-black text-white p-4 flex justify-between   items-center gap-6">
                <h1 className='md:hidden font-bold text-white'>Zordie AI</h1>
                <div className='hidden md:block lg:w-[50%] '>
                    <div className='flex justify-center  xl:justify-end xl:pr-[100px]'>
                        <ul className="flex space-x-3 lg:space-x-5 font-semibold ">
                            <li><a href="#" className="hover:text-[#FF191D] xl:pr-[40px]">Product</a> </li>
                            <li><a href="#" className="hover:text-[#FF191D]">AI Design</a> </li>
                            <li><a href="#" className="hover:text-[#FF191D]">Templates</a> </li>
                            <li><a href="#" className="hover:text-[#FF191D]">Solutions</a></li>
                        </ul>
                    </div>
                </div>
                <div className=' hidden md:block lg:mr-[50px]'>
                    <div className='flex items-center justify-center '>
                        <ul className='flex space-x-3 lg:space-x-5 font-semibold  '>
                            <li><a href="#" className="hover:text-[#FF191D]">Pricing</a> </li>
                            <li><a href="#" className="hover:text-[#FF191D]">Contact sales</a></li>
                            <li><a href="#" className="hover:text-[#FF191D]">Log In</a> </li>
                        </ul>
                        <div className='flex items-center justify-center  ml-4' >
                            <Button className='bg-[#FF1E22] hover:bg-[#ff191de6] font-bold py-1 px-2  border  rounded-xl border-black' style={{ boxShadow: 'inset 1px 1px 0px 0px #69B5FF, inset 0px 1px 1px 1px #69B5FF' }}
                            >
                                Sign up for free
                            </Button>

                        </div>
                    </div>
                </div>


                <div onClick={() => setmenu(!menu)} className='md:hidden'>
                    {menu ? '✕' : "☰"}
                </div>
            </nav>

            {/* mobile navbar */}
            {menu && <nav className=" bg-black text-white p-4 flex z-10 h-[80%] justify-center items-center gap-6">
                      
                <div className='flex flex-col items-center justify-center gap-4 '>
                    <ul className="flex flex-col  gap-2 font-semibold items-center ">
                        <li onClick={() => setmenu(!menu)}><a href="#" className="hover:text-[#FF191D] ">Product</a></li>
                        <li onClick={() => setmenu(!menu)}><a href="#" className="hover:text-[#FF191D]">AI Design</a> </li>
                        <li onClick={() => setmenu(!menu)}><a href="#" className="hover:text-[#FF191D]">Templates</a> </li>
                        <li onClick={() => setmenu(!menu)}><a href="#" className="hover:text-[#FF191D]">Solutions</a></li>
                        <li onClick={() => setmenu(!menu)}><a href="#" className="hover:text-[#FF191D]">Pricing</a> </li>
                        <li onClick={() => setmenu(!menu)}><a href="#" className="hover:text-[#FF191D]">Contact sales</a></li>
                        <li onClick={() => setmenu(!menu)}><a href="#" className="hover:text-[#FF191D]">Log In</a></li>
                        <li onClick={() => setmenu(!menu)}>
                            <Button className='bg-[#FF1E22] font-bold py-1 px-2 hover:bg-[#FF1E22] border  rounded-xl border-black' style={{ boxShadow: 'inset 1px 1px 0px 0px #69B5FF, inset 0px 1px 1px 1px #69B5FF' }}
                            >
                                Sign up for free
                            </Button>
                        </li>
                    </ul>
                </div>
            </nav>}

        </div>
    )
}

export default Navbar