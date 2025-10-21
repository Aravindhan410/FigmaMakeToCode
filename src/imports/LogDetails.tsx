import svgPaths from "./svg-qzcov9ocsy";

function UpArrowSvgrepoCom() {
  return <div className="size-[10px]" data-name="up-arrow_svgrepo.com" />;
}

export default function LogDetails() {
  return (
    <div className="bg-white relative size-full flex items-center justify-center" data-name="log details">
      {/* Main Dialog Box */}
      <div className="backdrop-blur-[2px] backdrop-filter bg-white rounded-[40px] shadow-[0px_4px_40px_5px_#76d7f5,0px_4px_4px_0px_rgba(118,215,245,0.25),0px_4px_4px_0px_rgba(0,0,0,0.25)] w-[300px] h-[226px] flex flex-col items-center justify-center gap-[20px] p-[40px]">
        
        {/* DATE Section */}
        <div className="flex flex-col items-center gap-[8px] w-full">
          <div className="bg-[#006aff] box-border flex items-center justify-center px-[10px] py-[5px] rounded-[20px] h-[25px]">
            <p className="font-['Inter:Regular',_sans-serif] font-normal text-[12px] text-black whitespace-nowrap">DATE</p>
          </div>
          <div className="bg-white h-[25px] rounded-[20px] w-[133px] border border-black" />
        </div>

        {/* USER NAME Section */}
        <div className="flex flex-col items-center gap-[8px] w-full">
          <div className="bg-[#006aff] box-border flex items-center justify-center px-[10px] py-[5px] rounded-[20px] h-[25px]">
            <p className="font-['Inter:Regular',_sans-serif] font-normal text-[12px] text-black whitespace-nowrap">USER NAME</p>
          </div>
          <div className="bg-white h-[25px] rounded-[20px] w-[133px] relative border border-black">
            <div className="h-[25px] overflow-clip rounded-[inherit] w-[133px]">
              <p className="absolute font-['Arial:Regular',_sans-serif] left-[11px] text-[14px] text-black top-[calc(50%-10.5px)] whitespace-nowrap">select name...</p>
              <div className="absolute flex items-center justify-center right-[10px] size-[10px] top-[8px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                  <path d={svgPaths.p7b68400} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* CANCEL Button */}
        <div className="bg-[#fb1919] box-border flex items-center justify-center px-[32.8px] py-[8.8px] rounded-[8px] h-[32px] border-[0.8px] border-[#cad5e2] cursor-pointer hover:opacity-90 transition-opacity">
          <p className="font-['Arial:Regular',_sans-serif] text-[14px] text-black whitespace-nowrap">CANCEL</p>
        </div>
      </div>
    </div>
  );
}