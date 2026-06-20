// import { VscChevronLeft, VscChevronRight, VscSearch } from 'react-icons/vsc';
import { CiWallet } from 'react-icons/ci';
import { IoPersonCircleOutline } from 'react-icons/io5';
const TopBar = () => {
  return (
    // <div className="bg-gray-100 p-2 grid grid-cols-3">
    //   {/* Top bar left section */}
    //   <div className="w-1/4 flex justify-center items-center">
    //     <button className="cursor-pointer">
    //       <VscChevronLeft />
    //     </button>
    //     <p className="mr-1.5">Month</p>
    //     <p className="pl-1">2026</p>
    //     <button className="cursor-pointer">
    //       <VscChevronRight />
    //     </button>
    //   </div>
    //   {/* Top bar center section */}
    //   <div className="w-1/4">
    //     <input
    //       type="text"
    //       name="search"
    //       id="search"
    //       className="border-2 rounded-md outline-0 p-1 pl-2  border-amber-50 bg-gray-50"
    //     />
    //   </div>
    //   {/* Top bar right section */}
    // </div>
    <section className="flex justify-between items-center p-4 text-primary border-b-[0.25px]">
      <div className="flex justify-center items-center">
        <CiWallet className="text-2xl" />
        <h1 className="ml-2 text-xl font-bold">FinanceOS</h1>
      </div>
      <div className="">
        <IoPersonCircleOutline className="text-2xl" />
      </div>
    </section>
  );
};

export default TopBar;
