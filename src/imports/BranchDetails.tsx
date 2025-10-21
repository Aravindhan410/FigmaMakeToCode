import svgPaths from "./svg-6i5xe41npu";

function Frame() {
  return (
    <div className="absolute bg-gradient-to-r box-border content-stretch flex flex-col from-[#002fff] gap-[9px] items-start justify-end left-[75px] pl-0 pr-[642.6px] py-0 rounded-[10px] to-[#ffffff] top-[53px] w-[999.6px]" data-name="Frame">
      <p className="font-['Inter:Bold',_sans-serif] font-bold leading-[32px] not-italic relative shrink-0 text-[16px] text-black text-nowrap whitespace-pre">{` Branch Details`}</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col items-start p-[6px] relative rounded-[2.68435e+07px] shrink-0" data-name="Frame">
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[2.68435e+07px]" />
      <div className="bg-[#5f7083] rounded-[2.68435e+07px] shrink-0 size-[8px]" data-name="Rectangle" />
    </div>
  );
}

function Frame2() {
  return (
    <div className="box-border content-stretch flex gap-[12px] items-start pb-0 pl-0 pr-[0.663px] pt-[0.212px] relative shrink-0" data-name="Frame">
      <Frame1 />
      <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-black text-nowrap whitespace-pre">Regular</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="box-border content-stretch flex gap-[12px] items-start pb-0 pl-[0.337px] pr-[0.138px] pt-[0.212px] relative shrink-0" data-name="Frame">
      <div className="relative rounded-[2.68435e+07px] shrink-0 size-[20px]" data-name="Rectangle">
        <div aria-hidden="true" className="absolute border-2 border-[#aab5c4] border-solid inset-0 pointer-events-none rounded-[2.68435e+07px]" />
      </div>
      <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-black text-nowrap whitespace-pre">Lateral Entry</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="box-border content-stretch flex gap-[32px] items-start pl-0 pr-[505.462px] py-0 relative shrink-0 w-[680px]" data-name="Frame">
      <Frame2 />
      <Frame3 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="box-border content-stretch flex gap-[150px] items-start pb-[1.788px] pt-[2px] px-0 relative shrink-0 w-[524px]" data-name="Frame">
      <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[14px] text-black text-nowrap tracking-[0.35px] whitespace-pre">{`        Mode`}</p>
      <Frame4 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute left-[443px] size-[20px] top-[15px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p7b68400} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame161() {
  return (
    <div className="bg-white h-[42px] relative rounded-[8px] shrink-0 w-[482px]">
      <div className="h-[42px] overflow-clip relative rounded-[inherit] w-[482px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[21px] left-[11px] not-italic text-[14px] text-black text-nowrap top-[calc(50%-11px)] whitespace-pre">code</p>
        <Frame6 />
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame7() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[2px] items-start pb-0 pl-0 pr-[0.4px] pt-[2.212px] relative shrink-0" data-name="Frame">
      <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[14px] text-black text-nowrap tracking-[0.35px] whitespace-pre">Course Code</p>
      <Frame161 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute box-border content-stretch flex font-['Inter:Regular',_sans-serif] font-normal gap-[346px] items-start justify-end leading-[16px] left-0 not-italic pb-[0.775px] pl-0 pr-[0.6px] pt-0 text-[#cccccc] text-[12px] text-nowrap top-[80px] whitespace-pre" data-name="Frame">
      <p className="relative shrink-0">e.g: DME, CSE, ECE</p>
      <p className="relative shrink-0">0/10</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="h-[95.987px] relative shrink-0 w-[482.2px]" data-name="Frame">
      <p className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[20px] left-[-0.4px] not-italic text-[14px] text-black text-nowrap top-[2.21px] tracking-[0.35px] whitespace-pre">Branch Code</p>
      <Frame8 />
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] left-[15.6px] not-italic text-[14px] text-black text-nowrap top-[44.71px] translate-y-[-50%]">
        <p className="leading-[normal] whitespace-pre">e.g., DME, CSE, ECE</p>
      </div>
      <div className="absolute bg-white h-[44px] left-[-0.4px] rounded-[6px] top-[24.21px] w-[482px]" data-name="Rectangle">
        <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[6px]" />
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[24px] items-start justify-center relative shrink-0 w-full" data-name="Frame">
      <Frame7 />
      <Frame9 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="h-[52px] relative shrink-0 w-[988.4px]" data-name="Frame">
      <p className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[20px] left-[18.8px] not-italic text-[14px] text-black text-nowrap top-[2.23px] tracking-[0.35px] whitespace-pre">Branch Name</p>
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] left-[268.8px] not-italic text-[14px] text-black text-nowrap top-[20.73px] translate-y-[-50%]">
        <p className="leading-[normal] whitespace-pre">Enter full branch name</p>
      </div>
      <div className="absolute bg-white h-[44px] left-[252.8px] rounded-[6px] top-[0.23px] w-[735px]" data-name="Rectangle">
        <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[6px]" />
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="absolute h-[65px] left-[250.7px] top-[-24.99px] w-[234px]" data-name="Frame">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[16px] left-[0.28px] not-italic text-[12px] text-black text-nowrap top-[5.22px] whitespace-pre">GQ (General Quota)</p>
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] left-[12.28px] not-italic text-[14px] text-black text-nowrap top-[44.73px] translate-y-[-50%]">
        <p className="leading-[normal] whitespace-pre">0</p>
      </div>
      <div className="absolute bg-white h-[46px] left-[0.28px] rounded-[6px] top-[24.23px] w-[234px]" data-name="Rectangle">
        <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[6px]" />
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="absolute h-[69.6px] left-[500.86px] top-[-25px] w-[234.438px]" data-name="Frame">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[16px] left-[-0.16px] not-italic text-[12px] text-black text-nowrap top-[5.22px] whitespace-pre">MQ (Management Quota)</p>
      <div className="absolute bg-white h-[46px] left-[-0.16px] rounded-[6px] top-[24.23px] w-[234px]" data-name="Rectangle">
        <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[6px]" />
      </div>
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] left-[11.84px] not-italic text-[14px] text-black text-nowrap top-[44.73px] translate-y-[-50%]">
        <p className="leading-[normal] whitespace-pre">0</p>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="h-[69.6px] relative shrink-0 w-[735.3px]" data-name="Frame">
      <Frame12 />
      <Frame13 />
      <div className="absolute bg-white h-[44px] left-[-0.3px] rounded-[6px] top-[0.23px] w-[234px]" data-name="Rectangle">
        <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[6px]" />
      </div>
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] left-[15.7px] not-italic text-[14px] text-black text-nowrap top-[20.73px] translate-y-[-50%]">
        <p className="leading-[normal] whitespace-pre">0</p>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[11.625px] items-start justify-center relative shrink-0" data-name="Frame">
      <Frame14 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="size-full">
        <div className="content-stretch flex gap-[70px] items-start relative w-full">
          <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[14px] text-black tracking-[0.35px] w-[171px] whitespace-pre-wrap">{`     Sanctioned Intake`}</p>
          <Frame15 />
        </div>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p7b68400} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame18() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[587px] items-start justify-end pl-[35px] pr-[16px] py-[13px] relative rounded-[6px] shrink-0 w-[719px]" data-name="Frame">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-black text-nowrap whitespace-pre">Self-Finance</p>
      <Frame17 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[80px] items-start pb-0 pl-0 pr-[0.6px] pt-[0.025px] relative w-full">
          <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[14px] text-black tracking-[0.35px] w-[183px] whitespace-pre-wrap">{`     Type of Institution`}</p>
          <Frame18 />
        </div>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="absolute left-[689px] size-[20px] top-[15px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p7b68400} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame162() {
  return (
    <div className="absolute bg-white h-[44px] left-[253px] rounded-[8px] top-[-1.29px] w-[735px]">
      <div className="h-[44px] overflow-clip relative rounded-[inherit] w-[735px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[21px] left-[11px] not-italic text-[14px] text-black text-nowrap top-[calc(50%-11px)] whitespace-pre">code</p>
        <Frame20 />
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame21() {
  return (
    <div className="h-[52px] relative shrink-0 w-[988.4px]" data-name="Frame">
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] left-[268.8px] not-italic text-[14px] text-black text-nowrap top-[20.93px] translate-y-[-50%]">
        <p className="leading-[normal] whitespace-pre">Enter AICTE approval number</p>
      </div>
      <p className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[20px] left-[20px] not-italic text-[14px] text-black text-nowrap top-[5.71px] tracking-[0.35px] whitespace-pre">AICTE Approval No</p>
      <Frame162 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="absolute bg-[rgba(13,55,216,0.18)] box-border content-stretch flex flex-col gap-[32px] h-[600px] items-start justify-center left-[77px] opacity-50 pb-[77.025px] pt-0 px-0 rounded-[10px] top-[107px] w-[998px]" data-name="Frame">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_4px_40px_0px_#0022ff,0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
      <Frame5 />
      <Frame10 />
      <Frame11 />
      <Frame16 />
      <Frame19 />
      <Frame21 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="bg-[#999999] box-border content-stretch flex flex-col items-start pb-[14px] pt-[12px] px-[33px] relative rounded-[6px] shrink-0" data-name="Frame">
      <div aria-hidden="true" className="absolute border border-[#777777] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Inter:Bold',_sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white whitespace-pre">SUBMIT</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="bg-[#999999] box-border content-stretch flex flex-col items-start pb-[14px] pl-[33px] pr-[32px] pt-[12px] relative rounded-[6px] shrink-0" data-name="Frame">
      <div aria-hidden="true" className="absolute border border-[#777777] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Inter:Bold',_sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white whitespace-pre">SAVE</p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="box-border content-stretch flex gap-[16px] items-start justify-end pb-0 pl-0 pr-[0.175px] pt-[0.4px] relative shrink-0" data-name="Frame">
      <Frame23 />
      <Frame24 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="bg-[#999999] box-border content-stretch flex flex-col items-start pb-[14px] pt-[12px] px-[33px] relative rounded-[6px] shrink-0" data-name="Frame">
      <div aria-hidden="true" className="absolute border border-[#777777] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Inter:Bold',_sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white whitespace-pre">DELETE</p>
    </div>
  );
}

function Frame27() {
  return (
    <div className="bg-[#999999] box-border content-stretch flex flex-col items-start pb-[14px] pl-[33px] pr-[32px] pt-[12px] relative rounded-[6px] shrink-0" data-name="Frame">
      <div aria-hidden="true" className="absolute border border-[#777777] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Inter:Bold',_sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white whitespace-pre">CLOSE</p>
    </div>
  );
}

function Frame28() {
  return (
    <div className="box-border content-stretch flex gap-[16px] items-start justify-center pb-0 pl-0 pr-[0.6px] pt-[0.4px] relative shrink-0" data-name="Frame">
      <Frame26 />
      <Frame27 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="absolute content-stretch flex gap-[506.062px] items-start justify-center left-[75px] top-[804.26px] w-[999.6px]" data-name="Frame">
      <Frame25 />
      <Frame28 />
    </div>
  );
}

export default function BranchDetails() {
  return (
    <div className="bg-white relative size-full" data-name="branch details">
      <div className="absolute bg-white h-[957px] left-0 top-0 w-[1150px]" data-name="Rectangle" />
      <Frame />
      <Frame22 />
      <Frame29 />
    </div>
  );
}