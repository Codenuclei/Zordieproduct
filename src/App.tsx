import './App.css'
import Navbar from './components/Navbar'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import companies from "./data/companies.json"
import cards from "./data/cards.json"
import Autoplay from 'embla-carousel-autoplay'
import Masonry from "react-masonry-css";
import Footer from './components/Footer'



const breakpointColumnsObj = {
  default: 3,
  1100: 2,
  700: 1
};


function App() {

  return (
    <>
      <Navbar />

      {/* Header section */}
      <div className='relative w-full overflow-hidden '>

        <div className='background bg-black  w-full min-h-screen relative'
         
        >
          <header className=" text-white py-14 md:py-20 px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-5xl  font-bold mb-4 text-[#F5F5F5]">
                Turn product ideas into concepts instantly with Zordie AI
              </h1>
              <p className="text-sm md:text-lg mb-6 text-[#F5F5F5] md:px-16">
                Visualize, communicate, and iterate on wireframes and prototypes in minutes. Empower your product team with AI!
              </p>
              <div className="flex  items-center justify-center ">
                <div className='bg-white flex  rounded-xl mt-6'>
                  <input
                    type="text"
                    className=" h-[40px] md:h-[48px]  w-full md:w-[400px] px-4 py-2 rounded-md text-black outline-none border-black"
                    placeholder="An e-commerce website design for a"
                  />
                  <div className="flex gap-3 items-center justify-center bg-radial-gradient hover:bg-[#FC0C10] text-white font-bold py-2 h-[40px] md:h-[58px] md:w-[140px] px-4 rounded-xl cursor-pointer " style={{ boxShadow: 'inset 1px 1px 0px 1px #69B5FF, inset 0px 1px 1px 1px #69B5FF' }}>
                    <img src="/product/stars.png" alt="" />
                    <span > Generate</span>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <div className='w-full flex justify-center items-center md:mt-4 px-4'>
            <div className='md:w-[70%]  rounded-lg bg-[#F50D0D3D] p-2 md:p-4'>
              <img className='object-fit w-full h-full' src="/product/Video.png" alt="Product Video" />
            </div>
          </div>

          <div className='h-[32px] w-[70%] md:w-[50%] mx-auto mt-10 md:mt-24  mb-[100px] md:mb-[150px] '>
            <h2 className='text-white text-sm md:text-2xl text-center'>Trusted by individuals and teams at the world's boldest companies</h2>
          </div>

          <div className='h-[50px] bg-black '>

          </div>

          <div className='  carousel absolute left-0  w-full max-sm:bottom-[54px] max-md:bottom-[36px] max-lg:bottom-[58px] max-xl:bottom-[70px] xl:bottom-[0px] z-10'>
            <div className='relative mt-2'>
              <div className=" max-sm:hidden absolute inset-y-0 left-0 top-9 w-24 h-full z-30" style={{ background: 'linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.75) 25%, rgba(0, 0, 0, 0.75) 75%, rgba(0, 0, 0, 0) 100%)' }}></div>
              <div className="max-sm:hidden absolute inset-y-0 right-0 top-9 w-24 h-full z-30" style={{ background: 'linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.75) 25%, rgba(0, 0, 0, 0.75) 75%, rgba(0, 0, 0, 0) 100%)' }}></div>
              <Carousel plugins={[Autoplay({ delay: 2000 })]} className="w-full py-5 px-1">
                <CarouselContent className="flex items-center justify-center">
                  {companies.map(({ name, id, path }) => (
                    <CarouselItem key={id} className="basis-1/3 lg:basis-1/6 px-0.5 ">
                      <img src={path} alt={name} className="   h-8 sm:h-[80px] sm:w-[100px]  object-contain" />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>

          </div>

        </div>
      </div>

      <div className="bg-black text-white min-h-screen flex flex-col lg:justify-center items-center  py-10 lg:py-20 px-4">
        <div className="text-center flex flex-col items-center justify-center gap-3 xl:w-[50%]">
          <div className="inline-block px-4 py-2 rounded-full bg-custom-red-gradient shadow-custom complex-background border border-[#FF191D] border-t-[#FFB2B3] cursor-pointer hover: h-[40px] w-[180px]  text-sm  mb-2">
            AI UI design is here!
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-[#F5F5F5]">
            UI design for disruptive product teams
          </h1>
          <p className="text-sm md:text-md lg:text-xl mb-6 max-w-2xl leading-relaxed">
            Collaborate in real-time with AI and your entire product team. In Upzone, everyone can contribute to
            building the next big thing!
          </p>
          <button className="bg-radial-gradient flex justify-center items-center hover:bg-[#FC0C10] h-[44px] w-[170px]  text-white font-bold py-3 px-6 rounded-md transition duration-300"> {/* Added transition */}
            Find out more
          </button>
        </div>


        <div className=' md:px-14 mt-10 flex flex-col md:flex-row md:flex-wrap gap-6 '>

          <div className="pl-[20px] w-full md:w-[60%]  border-[1px] border-[#343232] rounded-lg bg-gradient-to-br from-[#040208] via-[#4B0082] to-[#9932CC]">
            <div className='  flex flex-col gap-2 md:gap-4 mt-[20px]  lg:mt-[40px] md:ml-[20px] lg:ml-[50px] '>
              <h1 className='font-bold text-lg lg:text-xl'>Generate prototypes</h1>
              <p className='text-xs font-semibold lg:text-lg text-[#F5F5F5] pr-[10px]'>No ideas left behind... generate multi-screen, editable prototypes in seconds using simple text</p>
              <img className='mt-[20px] ' src="/UI/Image.png" alt="img" />
            </div>
          </div>


          <div className=" w-full md:w-[35%] border-[1px] border-[#343232] rounded-lg flex flex-col justify-center items-center">
            <div className='pl-[20px] flex flex-col gap-2 md:gap-4 justify-center mt-[20px]  lg:mt-[40px] md:ml-[20px] lg:ml-[50px] mb-[50px]'>
              <h1 className='text-start font-bold text-lg lg:text-xl'>Modify any component</h1>
              <p className=' xl:w-[80%] text-xs font-semibold lg:text-lg text-[#F5F5F5]'>Iterate at speed.. Select any component, describe the changes you want, and let Autodesigner do the hard work.</p>
              <img className='mt-[20px] px-[20px] md:px-0 md:pr-[50px]' src="/UI/img1.png" alt="img" />
            </div>
          </div>


          <div className="w-full md:w-[35%] border-[1px] border-[#343232] rounded-lg flex flex-col justify-center items-center">
            <div className='w-[80%]  flex flex-col gap-2 md:gap-4 justify-center mt-[20px] '>
              <h1 className='text-start font-bold text-lg lg:text-xl'>Generate Animated Videos</h1>
              <p className=' xl:w-[80%] text-xs font-semibold lg:text-lg text-[#F5F5F5]'>Generate new screens for your Upzone project with ease- expand the scope of your designs in no time at all.</p>
              <img className='mt-[20px]' src="/UI/img2.png" alt="img" />
            </div>
          </div>


          <div className="w-full md:w-[60%]  border-[1px] border-[#343232] rounded-lg flex-col justify-between gap-2  px-[40px] ">
            <div className='md:w-[80%]  flex flex-col gap-2 justify-center mt-[20px] '>
              <h1 className='text-start font-bold text-lg lg:text-xl'>Screenshot Scanner</h1>
              <p className=' xl:w-[80%] text-xs font-semibold lg:text-lg text-[#F5F5F5]'>Turn screenshots into editable mockups in seconds. It's never been easier to iterate and communicate design ideas.</p>

            </div>
            <div className='flex items-end justify-between gap-4'>
              <div>
                <img className='mt-[20px] mb-[30px]  max-sm-w-[150px] max-sm:h-[130px] w-[290px] h-[220px]' src="/UI/img3.png" alt="img" />
              </div>
              <div>
                <img src="/UI/img4.png" className='  max-sm-w-[150px] max-sm:h-[160px] w-[360px] h-[250px] ' alt="img" />
              </div>
            </div>
          </div>

          <div className=" w-full md:w-[48%]  border-[1px] border-[#343232] rounded-lg flex flex-col justify-center items-center">
            <div className='w-[80%]  flex flex-col gap-2 md:gap-4 justify-center mt-[20px] '>
              <h1 className='text-start font-bold text-lg lg:text-xl'>Wireframe scanner</h1>
              <p className=' xl:w-[80%] text-xs font-semibold lg:text-lg text-[#F5F5F5]'>Transform your hand-drawn wireframe sketches into digital designs in no time at all.</p>
              <img className='mt-[20px]' src="/UI/img5.png" alt="img" />
            </div>
          </div>

          <div className="w-full md:w-[48%]  border-[1px] border-[#343232] flex flex-col justify-center items-center rounded-lg bg-gradient-to-br from-[#040208] via-[#4B0082] to-[#9932CC]">
            <div className='w-[80%]  flex flex-col gap-2 md:gap-4 justify-center mt-[20px]  '>
              <h1 className='text-start font-bold text-lg lg:text-xl'>Generate themes</h1>
              <p className='xl:w-[80%] text-xs font-semibold lg:text-lg text-[#F5F5F5]'>Create new themes in seconds... generate a new theme for your project to instantly change the style.</p>
              <img className='mt-[20px] mb-[15px]' src="/UI/img6.png" alt="img" />
            </div>
          </div>

        </div>



        {/* <div className=' px-[100px] mt-[50px]'>
            <Masonry
              breakpointCols={breakpointColumnsObj2}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
            >

              <div className="  border-[1px] w-[80%] border-[#343232] rounded-lg bg-gradient-to-br from-[#040208] via-[#4B0082] to-[#9932CC]">
                <div className='  flex flex-col gap-2 md:gap-4 mt-[20px]  lg:mt-[40px] md:ml-[20px] lg:ml-[50px] '>
                  <h1 className='font-bold text-lg lg:text-xl'>Generate prototypes</h1>
                  <p className='text-xs font-semibold lg:text-lg text-[#F5F5F5] pr-[10px]'>No ideas left behind... generate multi-screen, editable prototypes in seconds using simple text</p>
                  <img className='mt-[20px] ' src="/UI/Image.png" alt="img" />
                </div>
              </div>


              <div className=" border-[1px] w-[20%] border-[#343232] rounded-lg flex flex-col justify-center items-center">
                <div className='  flex flex-col gap-2 md:gap-4 justify-center mt-[20px]  lg:mt-[40px] md:ml-[20px] lg:ml-[50px] mb-[50px]'>
                  <h1 className='text-start font-bold text-lg lg:text-xl'>Modify any component</h1>
                  <p className=' xl:w-[80%] text-xs font-semibold lg:text-lg text-[#F5F5F5]'>Iterate at speed.. Select any component, describe the changes you want, and let Autodesigner do the hard work.</p>
                  <img className='mt-[20px] w-full h-[300px]' src="/UI/img1.png" alt="img" />
                </div>
              </div>


              <div className=" border-[1px] border-[#343232] rounded-lg flex flex-col justify-center items-center">
                <div className='w-[80%]  flex flex-col gap-2 md:gap-4 justify-center mt-[20px] '>
                  <h1 className='text-start font-bold text-lg lg:text-xl'>Generate Animated Videos</h1>
                  <p className=' xl:w-[80%] text-xs font-semibold lg:text-lg text-[#F5F5F5]'>Generate new screens for your Upzone project with ease- expand the scope of your designs in no time at all.</p>
                  <img className='mt-[20px]' src="/UI/img2.png" alt="img" />
                </div>
              </div>


              <div className=" border-[1px] border-[#343232] rounded-lg flex justify-between gap-2  px-[40px] ">
                <div className='  flex flex-col gap-2 justify-center mt-[20px] '>
                  <h1 className='text-start font-bold text-lg lg:text-xl'>Screenshot Scanner</h1>
                  <p className=' xl:w-[80%] text-xs font-semibold lg:text-lg text-[#F5F5F5]'>Turn screenshots into editable mockups in seconds. It's never been easier to iterate and communicate design ideas.</p>
                  <img className='mt-[20px] mb-[30px] w-[290px] h-[220px]' src="/UI/img3.png" alt="img" />
                </div>
                <div className='flex justify-end flex-col items-end'>
                  <img src="/UI/img4.png" className='w-[330px] h-[250px] ' alt="img" />
                </div>
              </div>

              <div className=" border-[1px] border-[#343232] rounded-lg flex flex-col justify-center items-center">
                <div className='w-[80%]  flex flex-col gap-2 md:gap-4 justify-center mt-[20px] '>
                  <h1 className='text-start font-bold text-lg lg:text-xl'>Wireframe scanner</h1>
                  <p className=' xl:w-[80%] text-xs font-semibold lg:text-lg text-[#F5F5F5]'>Transform your hand-drawn wireframe sketches into digital designs in no time at all.</p>
                  <img className='mt-[20px]' src="/UI/img5.png" alt="img" />
                </div>
              </div>

              <div className="border-[1px] border-[#343232] flex flex-col justify-center items-center rounded-lg bg-gradient-to-br from-[#040208] via-[#4B0082] to-[#9932CC]">
                <div className='w-[80%]  flex flex-col gap-2 md:gap-4 justify-center mt-[20px]  '>
                  <h1 className='text-start font-bold text-lg lg:text-xl'>Generate themes</h1>
                  <p className='xl:w-[80%] text-xs font-semibold lg:text-lg text-[#F5F5F5]'>Create new themes in seconds... generate a new theme for your project to instantly change the style.</p>
                  <img className='mt-[20px] mb-[15px]' src="/UI/img6.png" alt="img" />
                </div>
              </div>

            </Masonry>
          </div> */}
      </div>


      <div className="bg-black text-[#F5F5F5] w-full min-h-screen p-8 md:px-[74px] relative">
        <h1 className="max-sm:text-xl max-sm:text-center text-2xl lg:text-4xl mb-[50px]">
          What our customers say about us
        </h1>

        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          <div className="absolute inset-x-0 top-20 h-32 z-30" style={{ background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.75) 25%, rgba(0, 0, 0, 0.75) 75%, rgba(0, 0, 0, 0) 100%)' }}></div>
          <div className="absolute inset-x-0 bottom-0 md:bottom-8 h-32 z-30" style={{ background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.75) 25%, rgba(0, 0, 0, 0.75) 75%, rgba(0, 0, 0, 0) 100%)' }}></div>

          {cards.map((item, index) => (
            <div
              key={index}
              className="border-[1px] border-[#343232] p-4 md:px-6 rounded-lg bg-black relative overflow-hidden"
            >
              <div className="relative z-20">
                <div className="flex items-center mb-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h2 className="font-bold text-lg">{item.name}</h2>
                    <p className="text-sm text-gray-400">{item.handle}</p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed whitespace-pre-line">{item.text}</p>
              </div>
            </div>
          ))}
        </Masonry>
      </div>


      <Footer />
    </>
  )
}

export default App
