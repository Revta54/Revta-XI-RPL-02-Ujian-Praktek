import { useState } from 'react'
import './App.css'
import logo from '../src/assets/logo.png'
import petanilogo from '../src/assets/petanilogo.png'

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
     <nav className='bg-teal-600 dark:bg-teal-900 flex gap-7 h-15 text-white'>

      <div className='flex items-center'>
      <img className="flex items-center size-18 w-20 h-20 p-5"src={logo} alt="" />
      </div>

     <div className='flex justify-center items-center x gap-2.5'>
      <div className='flex justify-center items-center x gap-1.5' href="">
      <i class='bx bx-home text-2xl'></i>
        <h1>Home</h1>
      </div>
     </div>
     <div className='flex justify-center items-center gap-2.5'>
      <div className='flex justify-center items-center x gap-1.5' href="">
      <i class='bx bx-play-circle text-2xl' ></i>
        <h1>Kelas</h1>
      </div>
     </div>
     <div className='flex justify-center items-center gap-2.5'>
      <div className='flex justify-center items-center x gap-1.5' href="">
      <i class='bx bx-file text-2xl' ></i>
        <h1>Tutorial</h1>
      </div>
     </div>
     <div className='flex justify-center items-center gap-2.5'>
      <div className='flex justify-center items-center x gap-1.5' href="">
      <i class='bx bx-book-open text-2xl' ></i>
        <h1>Buku</h1>
      </div>
     </div>
     <div className='flex justify-center items-center gap-2.5'>
      <div className='flex justify-center items-center x gap-1.5' href="">
      <i class='bx bxl-discord-alt text-2xl' ></i>
        <h1>Discord</h1>
      </div>
     </div>

     <div className='flex items-center gap-4 ml-155'>
     <i class='bx bx-search text-2xl' ></i>
     <i class='bx bx-sun text-2xl' ></i>
      <h1 className='inline-block px-3 py-2 bg-teal-500 rounded-lg'>Join Newsletter</h1>
    </div>
     </nav>

     <header className=" bg-slate-800 text-white pb-40 px-6 pt-25">
    <h1 className="text-5xl font-bold mb-2">Petani Kode</h1>
    <p className="text-lg max-w-xl">
    Belajar budidaya kode (coding) dengan tutorial yang mudah dipahami. Mostly pakai Linux.
    </p>
    <h1 className='inline-block px-3 py-2 mt-5 bg-teal-500 rounded-lg mr-3'>Mulai Belajar</h1>
    <h1 className='inline-block px-3 py-2 mt-5 border border-teal-500 text-teal rounded-lg hover:bg-teal-500 hover:text-white '>Join Newsletter</h1>
    <div className='relative py-6 md:py-0'>
      <img className=" origin-bottom-right right-0 -bottom-96 static md:absolute w-100 md:w-96 lg:w-2/5 mb-25 h-120 mr-30"src={petanilogo} alt="" />
      </div>
  </header>

  <div className="container mx-auto px-4 lg:max-w-7xl mt-16 ml-2">
    <div className='font-bold uppercase text-teal-600 text-sm mb-2'>kategori
    </div>
    <h2 className='text-3xl font-bold mb-2'>Mau belajar apa hari ini?</h2>
    <p className='text-lg  text-black mb-2'></p>
  </div>

  <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
    <a className='block rounded-2xl px-6 py-8 bg-black shadow-md ml-6 h-50 w-90'> 
    <i class='bx bx-code-alt text-3xl bg-blue-600 p-2 rounded-lg'></i>
    <h2 className='text-amber-300 mt-5 font-bold'>Basic Programming</h2>
    <p className=' text-amber-300 text-sm mt-2 text-left'>Baca tutorial dasar-dasar pemrogramman 
    <br/> menggunakan C, C++, C#, Java, JavaScript,<br/> dan masih banyak lagi.</p>
    </a>
    {/* <i class='bx bx-chevron-right text-amber-300 text-4xl ml-2'></i> */}
  </div>
    </>
  )

}

export default App
