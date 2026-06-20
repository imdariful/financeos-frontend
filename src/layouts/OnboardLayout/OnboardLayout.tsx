import { GrFormNext } from 'react-icons/gr';

const OnboardLayout = () => {
  return (
    <div className="w-screen h-screen">
      <form action="" className="w-full h-full">
        <div className="w-full h-full flex flex-col justify-center items-center">
          <label
            htmlFor="name"
            className="text-[#dfe2ef] font-bold mb-5 text-xl"
          >
            Your Name?
          </label>
          <input
            id="name"
            type="text"
            className="border p-2 border-[#81869e] rounded outline-0 outline-[#dfe2ef] focus:border-[#00574d]  text-center"
          />

          <button type="submit" className="mt-10">
            <GrFormNext className="border rounded-full text-3xl" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default OnboardLayout;
