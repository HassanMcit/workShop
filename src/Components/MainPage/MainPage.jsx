export default function MainPage() {
  return (
    <>
    <div className="flex flex-col items-center justify-center main-page text-center space-y-8 animate__animated animate__slideInDown">
        <h1 className="text-4xl md:text-6xl font-bold capitalize text-white leading-tight md:leading-none">Welcome in our Agency Travel</h1>
        <p className="text-xl text-white max-w-[40rem]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, accusamus!</p>
        <div className="flex space-x-3">
            <button className="bg-slate-800/90 p-3 md:w-44 rounded-xl text-white hover:bg-transparent hover:outline hover:outline-2 hover:outline-slate-800">Read More</button>
            <button className="outline outline-2 p-3 md:w-44 rounded-xl text-white hover:bg-white hover:text-neutral-900 hover:font-bold">Contact Us</button>
        </div>
        <div className="text-2xl relative text-white before:content-[''] before:w-20 before:h-[2px] before:bg-slate-100 before:absolute before:-start-24 before:top-1/2 after:content-[''] after:w-20 after:h-[2px] after:bg-slate-100 after:absolute after:start-10 after:top-1/2">
            <i className="fa-brands fa-magento"></i>
        </div>
    </div> 
    </>
  )
}
