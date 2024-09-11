import Link from 'next/link';
export default function NavBar() {

    return (

<nav
  className="flex-no-wrap relative flex w-full items-center justify-between bg-zinc-50 py-2 shadow-dark-mild dark:bg-neutral-700 lg:flex-wrap lg:justify-start lg:py-4">
  <div className="flex w-full flex-wrap items-center justify-between px-3"> 
   
    <div className="list-style-none me-auto flex flex-col ps-0 lg:flex-row text-white space-x-10">
  
        <div className="list-style-none me-auto flex flex-col ps-0 lg:flex-row text-black">
          <Link className="mb-4 lg:mb-0 lg:pe-2 text-[#BBA]" href="/crash">Our Teams </Link>
          <Link className="mb-4 lg:mb-0 lg:pe-2 hover:text-[#BBA] focus:text-[#BB0]" href="/sales">Sales</Link>
          <Link className="mb-4 lg:mb-0 lg:pe-2 hover:text-[#BBA] focus:text-[#BB0]" href="/webdesign">Webdesign</Link>
          <Link className="mb-4 lg:mb-0 lg:pe-2 hover:text-[#BBA] focus:text-[#BB0]" href="/development">Development</Link>
        </div>
        <div className="list-style-none me-auto flex flex-col ps-0 lg:flex-row text-black space-x-10">
          <Link className="ml-15 mb-4 lg:mb-0 lg:pe-2 hover:text-[#BBA] focus:text-[#BB0]" href="/buy">Buy</Link>
          <Link className="mb-4 lg:mb-0 lg:pe-2 hover:text-[#BBA] focus:text-[#BB0]" href="/about">?</Link>
        </div>
          
    </div>
    
  </div>
</nav>
    );

}

