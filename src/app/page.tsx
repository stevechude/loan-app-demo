import Placehold from "@/assets/Placehold";
import { FaRegStar, FaStar } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex flex-col gap-6">
      {/* deets */}
      <div
        style={{ boxShadow: "0px 0px 4px -2px gray" }}
        className="rounded-lg h-56 w-full bg-white flex items-center"
      >
        <div className="w-full flex flex-wrap gap-2.5 lg:flex-nowrap justify-between px-2 md:px-5 lg:px-8">
          <div className="flex items-center gap-4">
            <div className="rounded-full border p-3 md:p-4 lg:p-6 bg-[#213F7D] bg-opacity-15">
              <Placehold />
            </div>
            <div className="flex flex-col gap-2 text-[#213F7D]">
              <p className="text-lg md:text-xl lg:text-2xl">Grace Effiom</p>
              <p className="text-xs lg:text-sm">LSQFf587g90</p>
            </div>
          </div>

          {/* stars */}
          <div className="flex items-center gap-3 border-s border-e px-4">
            <div className="flex flex-col items-center gap-3">
              <p className="text-[#213F7D] text-lg md:text-xl lg:text-2xl">
                User’s Tier
              </p>
              <span className="flex items-center gap-2">
                <FaStar color="#E9B200" />
                <FaRegStar color="#E9B200" />
                <FaRegStar color="#E9B200" />
              </span>
            </div>
          </div>

          {/* amt */}
          <div className="flex items-center text-[#213F7D]">
            <div className="flex flex-col gap-2 lg:gap-3">
              <p className="text-lg md:text-xl lg:text-2xl">₦200,000.00</p>
              <p className="text-xs lg:text-sm">9912345678/Providus Bank</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
