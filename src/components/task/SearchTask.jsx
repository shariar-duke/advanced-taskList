import {IoSearchOutline} from "react-icons/io5"
export default function SearchTask() {

    const handleClick =(e)=> 
    {
        e.preventDefault()
    }
  return (
    <form>
        <div className="container max-auto flex justify-end">
            <div className="relative overflow-hidden rounded-lg  md:min-w-[380px] lg:min-w-[440px] ">
                <input type="search" id="search-dropdown"
                className="z-20 block w-full bg-white-100 px-4 py-2 pr-2 focus:outline-none cursor-pointer"
                placeholder="Search Task"
                required
                />
                <button onClick={handleClick} type="submit" className="text-white absolute  top-0 h-full md:right-[30px]">
                  <IoSearchOutline size={18} color="black"/>
                </button>
            </div>
        </div>
    </form>
  )
}
