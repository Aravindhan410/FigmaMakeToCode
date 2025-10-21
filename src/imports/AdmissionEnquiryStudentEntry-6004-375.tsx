import svgPaths from "./svg-ykb4f25ant";

function Frame() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p85ab180} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-gray-100 box-border content-stretch flex flex-col items-start p-[12px] relative rounded-[2.68435e+07px] shrink-0" data-name="Frame">
      <Frame />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-[1125px]" data-name="Frame">
      <Frame1 />
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[32px] not-italic relative shrink-0 text-[24px] text-black text-nowrap whitespace-pre">Student Entry</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute bg-gradient-to-r box-border content-stretch flex from-[#3c68df] gap-[667px] items-center justify-end left-0 p-[16px] to-[#eef2f9] top-0 via-50% via-[#c6d5fb] w-[1150px]" data-name="Frame">
      <Frame2 />
    </div>
  );
}

function Component4() {
  return (
    <div className="absolute h-[40px] left-[13px] rounded-[10px] top-[30px] w-[211px]" data-name="Component 4">
      <div aria-hidden="true" className="absolute border-[0.1px] border-black border-solid inset-[-0.1px] pointer-events-none rounded-[10.1px]" />
      <div className="absolute bg-white inset-0 rounded-[14px]" data-name="Rectangle" />
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal inset-[30%_20.89%_30%_3.75%] justify-center leading-[0] not-italic text-[13px] text-[rgba(0,0,0,0.6)]">
        <p className="leading-[normal]">Enter S.No</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute h-[78px] left-[28px] top-[99px] w-[252px]" data-name="Frame">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[28px] left-[16px] not-italic text-[14px] text-black text-nowrap top-0 whitespace-pre">S.NO</p>
      <Component4 />
    </div>
  );
}

function Component5() {
  return (
    <div className="absolute h-[40px] left-[13px] rounded-[10px] top-[30px] w-[211px]" data-name="Component 4">
      <div aria-hidden="true" className="absolute border-[0.1px] border-black border-solid inset-[-0.1px] pointer-events-none rounded-[10.1px]" />
      <div className="absolute bg-white inset-0 rounded-[14px]" data-name="Rectangle" />
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal inset-[30%_20.89%_30%_3.75%] justify-center leading-[0] not-italic text-[13px] text-[rgba(0,0,0,0.6)]">
        <p className="leading-[normal]">Enter name</p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute h-[78px] left-[454px] top-[98px] w-[252px]" data-name="Frame">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[28px] left-[16px] not-italic text-[14px] text-black text-nowrap top-0 whitespace-pre">
        Student Name<span className="text-[#ff0808]">{` *`}</span>
      </p>
      <Component5 />
    </div>
  );
}

function Component6() {
  return (
    <div className="absolute h-[40px] left-[13px] rounded-[10px] top-[30px] w-[211px]" data-name="Component 4">
      <div aria-hidden="true" className="absolute border-[0.1px] border-black border-solid inset-[-0.1px] pointer-events-none rounded-[10.1px]" />
      <div className="absolute bg-white inset-0 rounded-[14px]" data-name="Rectangle" />
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal inset-[30%_20.89%_30%_3.75%] justify-center leading-[0] not-italic text-[13px] text-[rgba(0,0,0,0.6)]">
        <p className="leading-[normal]">Enter mobile number</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute h-[78px] left-[880px] top-[99px] w-[252px]" data-name="Frame">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[28px] left-[16px] not-italic text-[14px] text-black text-nowrap top-0 whitespace-pre">
        Mobile No<span className="text-[#ff0808]">{` *`}</span>
      </p>
      <Component6 />
    </div>
  );
}

function Component7() {
  return (
    <div className="absolute h-[40px] left-[13px] rounded-[10px] top-[30px] w-[211px]" data-name="Component 4">
      <div className="absolute bg-white inset-0 rounded-[14px]" data-name="Rectangle">
        <div aria-hidden="true" className="absolute border-[0.1px] border-black border-solid inset-0 pointer-events-none rounded-[14px]" />
      </div>
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal inset-[30%_20.89%_30%_3.75%] justify-center leading-[0] not-italic text-[13px] text-[rgba(14,14,14,0.44)]">
        <p className="leading-[normal]">Enter name</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute h-[78px] left-[77px] top-[134px] w-[252px]" data-name="Frame">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[28px] left-[16px] not-italic text-[14px] text-black text-nowrap top-0 whitespace-pre">
        Parent Name<span className="text-[#ff0808]">{` *`}</span>
      </p>
      <Component7 />
    </div>
  );
}

function Component8() {
  return (
    <div className="absolute h-[40px] left-[13px] rounded-[10px] top-[30px] w-[211px]" data-name="Component 4">
      <div aria-hidden="true" className="absolute border-[0.1px] border-black border-solid inset-[-0.1px] pointer-events-none rounded-[10.1px]" />
      <div className="absolute bg-white inset-0 rounded-[14px]" data-name="Rectangle" />
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal inset-[30%_20.89%_30%_3.75%] justify-center leading-[0] not-italic text-[13px] text-[rgba(14,14,14,0.51)]">
        <p className="leading-[normal]">Enter village</p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute h-[78px] left-[450px] top-[134px] w-[252px]" data-name="Frame">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[28px] left-[16px] not-italic text-[14px] text-black text-nowrap top-0 whitespace-pre">Village</p>
      <Component8 />
    </div>
  );
}

function Component9() {
  return (
    <div className="absolute h-[40px] left-[13px] rounded-[10px] top-[30px] w-[211px]" data-name="Component 4">
      <div aria-hidden="true" className="absolute border-[0.1px] border-black border-solid inset-[-0.1px] pointer-events-none rounded-[10.1px]" />
      <div className="absolute bg-white inset-0 rounded-[14px]" data-name="Rectangle" />
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal inset-[30%_20.89%_30%_3.75%] justify-center leading-[0] not-italic text-[#999999] text-[13px]">
        <p className="leading-[normal]">Enter district name</p>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute h-[78px] left-[823px] top-[134px] w-[252px]" data-name="Frame">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[28px] left-[16px] not-italic text-[14px] text-black text-nowrap top-0 whitespace-pre">District</p>
      <Component9 />
    </div>
  );
}

function Component10() {
  return (
    <div className="absolute h-[40px] left-[13px] rounded-[10px] top-[30px] w-[211px]" data-name="Component 4">
      <div aria-hidden="true" className="absolute border-[0.1px] border-black border-solid inset-[-0.1px] pointer-events-none rounded-[10.1px]" />
      <div className="absolute bg-white inset-0 rounded-[14px]" data-name="Rectangle" />
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal inset-[30%_20.89%_30%_3.75%] justify-center leading-[0] not-italic text-[#999999] text-[13px]">
        <p className="leading-[normal]">Enter no</p>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute h-[78px] left-[77px] top-[274px] w-[252px]" data-name="Frame">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[28px] left-[16px] not-italic text-[14px] text-black text-nowrap top-0 whitespace-pre">Door No</p>
      <Component10 />
    </div>
  );
}

function Component11() {
  return (
    <div className="absolute h-[40px] left-[13px] rounded-[10px] top-[30px] w-[211px]" data-name="Component 4">
      <div aria-hidden="true" className="absolute border-[0.1px] border-black border-solid inset-[-0.1px] pointer-events-none rounded-[10.1px]" />
      <div className="absolute bg-white inset-0 rounded-[14px]" data-name="Rectangle" />
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal inset-[30%_20.89%_30%_3.75%] justify-center leading-[0] not-italic text-[#999999] text-[13px]">
        <p className="leading-[normal]">Enter post</p>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute h-[78px] left-[450px] top-[274px] w-[252px]" data-name="Frame">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[28px] left-[16px] not-italic text-[14px] text-black text-nowrap top-0 whitespace-pre">Post</p>
      <Component11 />
    </div>
  );
}

function Component12() {
  return (
    <div className="absolute h-[40px] left-[13px] rounded-[10px] top-[30px] w-[211px]" data-name="Component 4">
      <div aria-hidden="true" className="absolute border-[0.1px] border-black border-solid inset-[-0.1px] pointer-events-none rounded-[10.1px]" />
      <div className="absolute bg-white inset-0 rounded-[14px]" data-name="Rectangle" />
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal inset-[30%_20.89%_30%_3.75%] justify-center leading-[0] not-italic text-[#999999] text-[13px]">
        <p className="leading-[normal]">Enter pin code</p>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="absolute h-[78px] left-[823px] top-[274px] w-[252px]" data-name="Frame">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[28px] left-[16px] not-italic text-[14px] text-black text-nowrap top-0 whitespace-pre">
        Pin code<span className="text-[#ff0808]">{` *`}</span>
      </p>
      <Component12 />
    </div>
  );
}

function Component13() {
  return (
    <div className="absolute h-[40px] left-[13px] rounded-[10px] top-[30px] w-[211px]" data-name="Component 4">
      <div aria-hidden="true" className="absolute border-[0.1px] border-black border-solid inset-[-0.1px] pointer-events-none rounded-[10.1px]" />
      <div className="absolute bg-white inset-0 rounded-[14px]" data-name="Rectangle" />
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal inset-[30%_20.89%_30%_3.75%] justify-center leading-[0] not-italic text-[#999999] text-[13px]">
        <p className="leading-[normal]">Enter street name</p>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="absolute h-[78px] left-[77px] top-[414px] w-[252px]" data-name="Frame">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[28px] left-[16px] not-italic text-[14px] text-black text-nowrap top-0 whitespace-pre">Street Name</p>
      <Component13 />
    </div>
  );
}

function Component14() {
  return (
    <div className="absolute h-[40px] left-[13px] rounded-[10px] top-[30px] w-[211px]" data-name="Component 4">
      <div aria-hidden="true" className="absolute border-[0.1px] border-black border-solid inset-[-0.1px] pointer-events-none rounded-[10.1px]" />
      <div className="absolute bg-white inset-0 rounded-[14px]" data-name="Rectangle" />
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal inset-[30%_20.89%_30%_3.75%] justify-center leading-[0] not-italic text-[#999999] text-[13px]">
        <p className="leading-[normal]">Enter taluk</p>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="absolute h-[78px] left-[450px] top-[414px] w-[252px]" data-name="Frame">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[28px] left-[16px] not-italic text-[14px] text-black text-nowrap top-0 whitespace-pre">{`Taluk `}</p>
      <Component14 />
    </div>
  );
}

function Component15() {
  return (
    <div className="absolute h-[40px] left-[13px] rounded-[10px] top-[30px] w-[211px]" data-name="Component 4">
      <div aria-hidden="true" className="absolute border-[0.1px] border-black border-solid inset-[-0.1px] pointer-events-none rounded-[10.1px]" />
      <div className="absolute bg-white inset-0 rounded-[14px]" data-name="Rectangle" />
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal inset-[30%_20.89%_30%_3.75%] justify-center leading-[0] not-italic text-[#999999] text-[13px]">
        <p className="leading-[normal]">Enter annual income</p>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="absolute h-[78px] left-[823px] top-[414px] w-[252px]" data-name="Frame">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[28px] left-[16px] not-italic text-[14px] text-black text-nowrap top-0 whitespace-pre">Annual Income</p>
      <Component15 />
    </div>
  );
}

function Frame127() {
  return (
    <div className="absolute bg-gradient-to-r box-border content-stretch flex from-[#4c74e2] from-[6.25%] gap-[10px] items-center justify-center left-0 p-[10px] to-[#f1f2f5] top-0 via-[#bccbf2] via-[53.846%] w-[1150px]">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[32px] text-black text-nowrap">
        <p className="leading-[normal] whitespace-pre">Address for communication</p>
      </div>
    </div>
  );
}

function Frame88() {
  return (
    <div className="absolute bg-[#b0e297] box-border content-stretch flex gap-[10px] h-[33px] items-center justify-center left-[950px] p-[10px] top-[540px] w-[106px]">
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-nowrap whitespace-pre">{`Next       >`}</p>
    </div>
  );
}

function Frame128() {
  return (
    <div className="absolute h-[595px] left-0 top-[243px] w-[1150px]">
      <div className="absolute bg-white h-[378px] left-[40px] rounded-[20px] shadow-[0px_30px_60px_0px_rgba(29,78,216,0.55)] top-[121px] w-[1056px]" />
      <Frame7 />
      <Frame8 />
      <Frame9 />
      <Frame10 />
      <Frame11 />
      <Frame12 />
      <Frame13 />
      <Frame14 />
      <Frame15 />
      <Frame127 />
      <Frame88 />
    </div>
  );
}

export default function AdmissionEnquiryStudentEntry() {
  return (
    <div className="bg-white relative size-full" data-name="Admission - Enquiry - Student entry">
      <Frame3 />
      <Frame4 />
      <Frame5 />
      <Frame6 />
      <Frame128 />
    </div>
  );
}