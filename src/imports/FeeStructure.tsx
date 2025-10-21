import svgPaths from "./svg-j74ji0e4h1";

function PrimitiveLabel() {
  return (
    <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Vehicle No</p>
    </div>
  );
}

function PrimitiveSpan() {
  return (
    <div className="h-[20px] relative shrink-0 w-[83.037px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[20px] items-center overflow-clip relative rounded-[inherit] w-[83.037px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Select vehicle</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon" opacity="0.5">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function PrimitiveButton() {
  return (
    <div className="bg-[#f3f3f5] h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[36px] items-center justify-between px-[12.8px] py-[0.8px] relative w-full">
          <PrimitiveSpan />
          <Icon />
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[66px] items-start left-0 top-0 w-[330.663px]" data-name="Container">
      <PrimitiveLabel />
      <PrimitiveButton />
    </div>
  );
}

function PrimitiveLabel1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Route Name</p>
    </div>
  );
}

function PrimitiveSpan1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[73.588px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[20px] items-center overflow-clip relative rounded-[inherit] w-[73.588px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Select route</p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon" opacity="0.5">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function PrimitiveButton1() {
  return (
    <div className="bg-[#f3f3f5] h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[36px] items-center justify-between px-[12.8px] py-[0.8px] relative w-full">
          <PrimitiveSpan1 />
          <Icon1 />
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[66px] items-start left-[354.66px] top-0 w-[330.663px]" data-name="Container">
      <PrimitiveLabel1 />
      <PrimitiveButton1 />
    </div>
  );
}

function PrimitiveLabel2() {
  return (
    <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Route No</p>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[#f3f3f5] h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[36px] items-center px-[12px] py-[4px] relative w-full">
          <p className="font-['Arial:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Enter route number</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[66px] items-start left-[709.33px] top-0 w-[330.675px]" data-name="Container">
      <PrimitiveLabel2 />
      <Input />
    </div>
  );
}

function PrimitiveLabel3() {
  return (
    <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Age No</p>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-[#f3f3f5] h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[36px] items-center px-[12px] py-[4px] relative w-full">
          <p className="font-['Arial:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Enter age number</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[58px] items-start left-0 top-[90px] w-[330.663px]" data-name="Container">
      <PrimitiveLabel3 />
      <Input1 />
    </div>
  );
}

function PrimitiveLabel4() {
  return (
    <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Stage Name</p>
    </div>
  );
}

function Input2() {
  return (
    <div className="bg-[#f3f3f5] h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[36px] items-center px-[12px] py-[4px] relative w-full">
          <p className="font-['Arial:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Enter stage name</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[58px] items-start left-[354.66px] top-[90px] w-[330.663px]" data-name="Container">
      <PrimitiveLabel4 />
      <Input2 />
    </div>
  );
}

function PrimitiveLabel5() {
  return (
    <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Amount</p>
    </div>
  );
}

function Input3() {
  return (
    <div className="bg-[#f3f3f5] h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[36px] items-center px-[12px] py-[4px] relative w-full">
          <p className="font-['Arial:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Enter amount</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[58px] items-start left-[709.33px] top-[90px] w-[330.675px]" data-name="Container">
      <PrimitiveLabel5 />
      <Input3 />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute h-[148px] left-0 top-0 w-[1040px]" data-name="Container">
      <Container />
      <Container1 />
      <Container2 />
      <Container3 />
      <Container4 />
      <Container5 />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#155dfc] box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center left-[925.33px] px-[32px] py-[8px] rounded-[8px] top-[172px] w-[114.675px]" data-name="Button">
      <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">SUBMIT</p>
    </div>
  );
}

function VehicleDetailsForm() {
  return (
    <div className="h-[208px] relative shrink-0 w-full" data-name="VehicleDetailsForm">
      <Container6 />
      <Button />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[273px] items-start left-0 pb-[0.8px] pt-[32px] px-[32px] top-[-2px] w-[1150px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.8px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <VehicleDetailsForm />
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-[12.8px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M5.33333 4V8" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10 4V8" id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M1.33333 8H14.4" id="Vector_3" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.pa325f00} id="Vector_4" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p48c6d00} id="Vector_5" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6 12H9.33333" id="Vector_6" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p13f3cc20} id="Vector_7" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-[133.825px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[36px] relative w-[133.825px]">
        <Icon2 />
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[36.8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[6.8px] whitespace-pre">Generate Bus</p>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-[12.8px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p19416e00} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3e059a80} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 6H5.33333" id="Vector_3" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 8.66667H5.33333" id="Vector_4" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 11.3333H5.33333" id="Vector_5" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-[145.1px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[36px] relative w-[145.1px]">
        <Icon3 />
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[36.8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[6.8px] whitespace-pre">Bus Fee Report</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[36px] items-start left-0 top-0 w-[290.925px]" data-name="Container">
      <Button1 />
      <Button2 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute left-[12px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_4014_14529)" id="Icon">
          <path d={svgPaths.p3397ec80} id="Vector" stroke="var(--stroke-0, #030213)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p4adfe2c} id="Vector_2" stroke="var(--stroke-0, #030213)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p27a74a00} id="Vector_3" stroke="var(--stroke-0, #030213)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_4014_14529">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-gray-100 h-[36px] relative rounded-[8px] shrink-0 w-[87.45px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[36px] relative w-[87.45px]">
        <Icon4 />
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[36px] not-italic text-[#030213] text-[14px] text-nowrap top-[6.8px] whitespace-pre">PRINT</p>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="absolute left-[12px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p19987d80} id="Vector" stroke="var(--stroke-0, #1447E6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M14 2V5.33333H10.6667" id="Vector_2" stroke="var(--stroke-0, #1447E6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2a3e9c80} id="Vector_3" stroke="var(--stroke-0, #1447E6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M5.33333 10.6667H2V14" id="Vector_4" stroke="var(--stroke-0, #1447E6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-blue-100 h-[36px] relative rounded-[8px] shrink-0 w-[99.237px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[36px] relative w-[99.237px]">
        <Icon5 />
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[36px] not-italic text-[#1447e6] text-[14px] text-nowrap top-[6.8px] whitespace-pre">UPDATE</p>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="absolute left-[12px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M12 4L4.00004 12" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M4.00004 4L12 12" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#d4183d] h-[36px] relative rounded-[8px] shrink-0 w-[88.575px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[36px] relative w-[88.575px]">
        <Icon6 />
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[36px] not-italic text-[14px] text-nowrap text-white top-[6.8px] whitespace-pre">CLOSE</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[36px] items-start left-[740.74px] top-0 w-[299.263px]" data-name="Container">
      <Button3 />
      <Button4 />
      <Button5 />
    </div>
  );
}

function ActionButtons() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="ActionButtons">
      <Container8 />
      <Container9 />
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute bg-gray-50 box-border content-stretch flex flex-col h-[85px] items-start left-0 pb-[0.8px] pt-[24px] px-[32px] top-[291px] w-[1150px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.8px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <ActionButtons />
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[28px] relative shrink-0 w-[171.238px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[171.238px]">
        <p className="absolute font-['Arial:Bold',_sans-serif] leading-[28px] left-0 not-italic text-[#101828] text-[18px] text-nowrap top-[-1.4px] whitespace-pre">Vehicle Route Details</p>
      </div>
    </div>
  );
}

function Badge() {
  return (
    <div className="h-[25.6px] relative rounded-[8px] shrink-0 w-[79.225px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[25.6px] items-center justify-center overflow-clip px-[8.8px] py-[2.8px] relative rounded-[inherit] w-[79.225px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">7 Records</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex h-[28px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Heading3 />
      <Badge />
    </div>
  );
}

function TableHead() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[64px]" data-name="TableHead">
      <p className="absolute font-['Arial:Bold',_sans-serif] leading-[20px] left-[32.02px] not-italic text-[14px] text-center text-neutral-950 text-nowrap top-[8.6px] translate-x-[-50%] whitespace-pre">SNO</p>
    </div>
  );
}

function TableHead1() {
  return (
    <div className="absolute h-[40px] left-[64px] top-0 w-[190.887px]" data-name="TableHead">
      <p className="absolute font-['Arial:Bold',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.6px] whitespace-pre">Bus Number</p>
    </div>
  );
}

function TableHead2() {
  return (
    <div className="absolute h-[40px] left-[254.89px] top-0 w-[80px]" data-name="TableHead">
      <p className="absolute font-['Arial:Bold',_sans-serif] leading-[20px] left-[40.06px] not-italic text-[14px] text-center text-neutral-950 text-nowrap top-[8.6px] translate-x-[-50%] whitespace-pre">Route N</p>
    </div>
  );
}

function TableHead3() {
  return (
    <div className="absolute h-[40px] left-[334.89px] top-0 w-[208.762px]" data-name="TableHead">
      <p className="absolute font-['Arial:Bold',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.6px] whitespace-pre">Route Name</p>
    </div>
  );
}

function TableHead4() {
  return (
    <div className="absolute h-[40px] left-[543.65px] top-0 w-[80px]" data-name="TableHead">
      <p className="absolute font-['Arial:Bold',_sans-serif] leading-[20px] left-[40.48px] not-italic text-[14px] text-center text-neutral-950 text-nowrap top-[8.6px] translate-x-[-50%] whitespace-pre">Stage N</p>
    </div>
  );
}

function TableHead5() {
  return (
    <div className="absolute h-[40px] left-[623.65px] top-0 w-[260.85px]" data-name="TableHead">
      <p className="absolute font-['Arial:Bold',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.6px] whitespace-pre">Stage Name</p>
    </div>
  );
}

function TableHead6() {
  return (
    <div className="absolute h-[40px] left-[884.5px] top-0 w-[153.9px]" data-name="TableHead">
      <p className="absolute font-['Arial:Bold',_sans-serif] leading-[20px] left-[146.34px] not-italic text-[14px] text-neutral-950 text-nowrap text-right top-[8.6px] translate-x-[-100%] whitespace-pre">Amount</p>
    </div>
  );
}

function TableRow() {
  return (
    <div className="absolute bg-blue-50 h-[40px] left-0 top-0 w-[1038.4px]" data-name="TableRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <TableHead />
      <TableHead1 />
      <TableHead2 />
      <TableHead3 />
      <TableHead4 />
      <TableHead5 />
      <TableHead6 />
    </div>
  );
}

function TableHeader() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[1038.4px]" data-name="TableHeader">
      <TableRow />
    </div>
  );
}

function Badge1() {
  return (
    <div className="absolute bg-blue-100 h-[21.587px] left-[20.77px] rounded-[8px] top-[8.8px] w-[22.438px]" data-name="Badge">
      <div className="h-[21.587px] overflow-clip relative rounded-[inherit] w-[22.438px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[11.3px] not-italic text-[#193cb8] text-[12px] text-center text-nowrap top-[1.8px] translate-x-[-50%] whitespace-pre">1</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell() {
  return (
    <div className="absolute h-[38.788px] left-0 top-0 w-[64px]" data-name="TableCell">
      <Badge1 />
    </div>
  );
}

function TableCell1() {
  return (
    <div className="absolute h-[38.788px] left-[64px] top-0 w-[190.887px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[#101828] text-[14px] text-nowrap top-[8.19px] whitespace-pre">TN58</p>
    </div>
  );
}

function Badge2() {
  return (
    <div className="absolute bg-[#eceef2] h-[21.587px] left-[28.77px] rounded-[8px] top-[8.8px] w-[22.438px]" data-name="Badge">
      <div className="h-[21.587px] overflow-clip relative rounded-[inherit] w-[22.438px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[11.3px] not-italic text-[#030213] text-[12px] text-center text-nowrap top-[1.8px] translate-x-[-50%] whitespace-pre">1</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell2() {
  return (
    <div className="absolute h-[38.788px] left-[254.89px] top-0 w-[80px]" data-name="TableCell">
      <Badge2 />
    </div>
  );
}

function TableCell3() {
  return (
    <div className="absolute h-[38.788px] left-[334.89px] top-0 w-[208.762px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[#1447e6] text-[14px] text-nowrap top-[8.19px] whitespace-pre">VELLODE</p>
    </div>
  );
}

function Badge3() {
  return (
    <div className="absolute bg-[#eceef2] h-[21.587px] left-[28.77px] rounded-[8px] top-[8.8px] w-[22.438px]" data-name="Badge">
      <div className="h-[21.587px] overflow-clip relative rounded-[inherit] w-[22.438px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[11.3px] not-italic text-[#030213] text-[12px] text-center text-nowrap top-[1.8px] translate-x-[-50%] whitespace-pre">1</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell4() {
  return (
    <div className="absolute h-[38.788px] left-[543.65px] top-0 w-[80px]" data-name="TableCell">
      <Badge3 />
    </div>
  );
}

function TableCell5() {
  return (
    <div className="absolute h-[38.788px] left-[623.65px] top-0 w-[260.85px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[#364153] text-[14px] text-nowrap top-[8.19px] whitespace-pre">MUTHAMPALAY...</p>
    </div>
  );
}

function Badge4() {
  return (
    <div className="absolute bg-green-100 h-[21.587px] left-[92.09px] rounded-[8px] top-[8.8px] w-[53.813px]" data-name="Badge">
      <div className="h-[21.587px] overflow-clip relative rounded-[inherit] w-[53.813px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[45.8px] not-italic text-[#016630] text-[12px] text-nowrap text-right top-[1.8px] translate-x-[-100%] whitespace-pre">₹8,000</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell6() {
  return (
    <div className="absolute h-[38.788px] left-[884.5px] top-0 w-[153.9px]" data-name="TableCell">
      <Badge4 />
    </div>
  );
}

function TableRow1() {
  return (
    <div className="absolute bg-white h-[38.788px] left-0 top-0 w-[1038.4px]" data-name="TableRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <TableCell />
      <TableCell1 />
      <TableCell2 />
      <TableCell3 />
      <TableCell4 />
      <TableCell5 />
      <TableCell6 />
    </div>
  );
}

function Badge5() {
  return (
    <div className="absolute bg-blue-100 h-[21.587px] left-[19.86px] rounded-[8px] top-[8.8px] w-[24.262px]" data-name="Badge">
      <div className="h-[21.587px] overflow-clip relative rounded-[inherit] w-[24.262px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[12.3px] not-italic text-[#193cb8] text-[12px] text-center text-nowrap top-[1.8px] translate-x-[-50%] whitespace-pre">2</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell7() {
  return (
    <div className="absolute h-[38.788px] left-0 top-0 w-[64px]" data-name="TableCell">
      <Badge5 />
    </div>
  );
}

function TableCell8() {
  return (
    <div className="absolute h-[38.788px] left-[64px] top-0 w-[190.887px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[#101828] text-[14px] text-nowrap top-[8.19px] whitespace-pre">33</p>
    </div>
  );
}

function Badge6() {
  return (
    <div className="absolute bg-[#eceef2] h-[21.587px] left-[25.45px] rounded-[8px] top-[8.8px] w-[29.1px]" data-name="Badge">
      <div className="h-[21.587px] overflow-clip relative rounded-[inherit] w-[29.1px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[14.8px] not-italic text-[#030213] text-[12px] text-center text-nowrap top-[1.8px] translate-x-[-50%] whitespace-pre">10</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell9() {
  return (
    <div className="absolute h-[38.788px] left-[254.89px] top-0 w-[80px]" data-name="TableCell">
      <Badge6 />
    </div>
  );
}

function TableCell10() {
  return (
    <div className="absolute h-[38.788px] left-[334.89px] top-0 w-[208.762px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[#1447e6] text-[14px] text-nowrap top-[8.19px] whitespace-pre">ERODE</p>
    </div>
  );
}

function Badge7() {
  return (
    <div className="absolute bg-[#eceef2] h-[21.587px] left-[25.45px] rounded-[8px] top-[8.8px] w-[29.1px]" data-name="Badge">
      <div className="h-[21.587px] overflow-clip relative rounded-[inherit] w-[29.1px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[14.8px] not-italic text-[#030213] text-[12px] text-center text-nowrap top-[1.8px] translate-x-[-50%] whitespace-pre">10</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell11() {
  return (
    <div className="absolute h-[38.788px] left-[543.65px] top-0 w-[80px]" data-name="TableCell">
      <Badge7 />
    </div>
  );
}

function TableCell12() {
  return (
    <div className="absolute h-[38.788px] left-[623.65px] top-0 w-[260.85px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[#364153] text-[14px] text-nowrap top-[8.19px] whitespace-pre">KARUNGALPALA...</p>
    </div>
  );
}

function Badge8() {
  return (
    <div className="absolute bg-[#ffe2e2] h-[21.587px] left-[85.42px] rounded-[8px] top-[8.8px] w-[60.475px]" data-name="Badge">
      <div className="h-[21.587px] overflow-clip relative rounded-[inherit] w-[60.475px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[51.8px] not-italic text-[#9f0712] text-[12px] text-nowrap text-right top-[1.8px] translate-x-[-100%] whitespace-pre">₹30,000</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell13() {
  return (
    <div className="absolute h-[38.788px] left-[884.5px] top-0 w-[153.9px]" data-name="TableCell">
      <Badge8 />
    </div>
  );
}

function TableRow2() {
  return (
    <div className="absolute bg-gray-50 h-[38.788px] left-0 top-[38.79px] w-[1038.4px]" data-name="TableRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <TableCell7 />
      <TableCell8 />
      <TableCell9 />
      <TableCell10 />
      <TableCell11 />
      <TableCell12 />
      <TableCell13 />
    </div>
  );
}

function Badge9() {
  return (
    <div className="absolute bg-blue-100 h-[21.587px] left-[19.86px] rounded-[8px] top-[8.8px] w-[24.262px]" data-name="Badge">
      <div className="h-[21.587px] overflow-clip relative rounded-[inherit] w-[24.262px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[12.3px] not-italic text-[#193cb8] text-[12px] text-center text-nowrap top-[1.8px] translate-x-[-50%] whitespace-pre">3</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell14() {
  return (
    <div className="absolute h-[38.788px] left-0 top-0 w-[64px]" data-name="TableCell">
      <Badge9 />
    </div>
  );
}

function TableCell15() {
  return (
    <div className="absolute h-[38.788px] left-[64px] top-0 w-[190.887px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[#101828] text-[14px] text-nowrap top-[8.19px] whitespace-pre">BUS NUM...</p>
    </div>
  );
}

function Badge10() {
  return (
    <div className="absolute bg-[#eceef2] h-[21.587px] left-[24.65px] rounded-[8px] top-[8.8px] w-[30.7px]" data-name="Badge">
      <div className="h-[21.587px] overflow-clip relative rounded-[inherit] w-[30.7px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[15.8px] not-italic text-[#030213] text-[12px] text-center text-nowrap top-[1.8px] translate-x-[-50%] whitespace-pre">27</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell16() {
  return (
    <div className="absolute h-[38.788px] left-[254.89px] top-0 w-[80px]" data-name="TableCell">
      <Badge10 />
    </div>
  );
}

function TableCell17() {
  return (
    <div className="absolute h-[38.788px] left-[334.89px] top-0 w-[208.762px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[#1447e6] text-[14px] text-nowrap top-[8.19px] whitespace-pre">ARAKKONAM</p>
    </div>
  );
}

function Badge11() {
  return (
    <div className="absolute bg-[#eceef2] h-[21.587px] left-[28.77px] rounded-[8px] top-[8.8px] w-[22.438px]" data-name="Badge">
      <div className="h-[21.587px] overflow-clip relative rounded-[inherit] w-[22.438px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[11.3px] not-italic text-[#030213] text-[12px] text-center text-nowrap top-[1.8px] translate-x-[-50%] whitespace-pre">1</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell18() {
  return (
    <div className="absolute h-[38.788px] left-[543.65px] top-0 w-[80px]" data-name="TableCell">
      <Badge11 />
    </div>
  );
}

function TableCell19() {
  return (
    <div className="absolute h-[38.788px] left-[623.65px] top-0 w-[260.85px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[#364153] text-[14px] text-nowrap top-[8.19px] whitespace-pre">OLD BUS STAND</p>
    </div>
  );
}

function Badge12() {
  return (
    <div className="absolute bg-[#fef9c2] h-[21.587px] left-[89.1px] rounded-[8px] top-[8.8px] w-[56.8px]" data-name="Badge">
      <div className="h-[21.587px] overflow-clip relative rounded-[inherit] w-[56.8px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[48.8px] not-italic text-[#894b00] text-[12px] text-nowrap text-right top-[1.8px] translate-x-[-100%] whitespace-pre">₹11,500</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell20() {
  return (
    <div className="absolute h-[38.788px] left-[884.5px] top-0 w-[153.9px]" data-name="TableCell">
      <Badge12 />
    </div>
  );
}

function TableRow3() {
  return (
    <div className="absolute bg-white h-[38.788px] left-0 top-[77.58px] w-[1038.4px]" data-name="TableRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <TableCell14 />
      <TableCell15 />
      <TableCell16 />
      <TableCell17 />
      <TableCell18 />
      <TableCell19 />
      <TableCell20 />
    </div>
  );
}

function Badge13() {
  return (
    <div className="absolute bg-blue-100 h-[21.587px] left-[19.74px] rounded-[8px] top-[8.8px] w-[24.525px]" data-name="Badge">
      <div className="h-[21.587px] overflow-clip relative rounded-[inherit] w-[24.525px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[12.3px] not-italic text-[#193cb8] text-[12px] text-center text-nowrap top-[1.8px] translate-x-[-50%] whitespace-pre">4</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell21() {
  return (
    <div className="absolute h-[38.788px] left-0 top-0 w-[64px]" data-name="TableCell">
      <Badge13 />
    </div>
  );
}

function TableCell22() {
  return (
    <div className="absolute h-[38.788px] left-[64px] top-0 w-[190.887px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[#101828] text-[14px] text-nowrap top-[8.19px] whitespace-pre">BUS NUM...</p>
    </div>
  );
}

function Badge14() {
  return (
    <div className="absolute bg-[#eceef2] h-[21.587px] left-[24.65px] rounded-[8px] top-[8.8px] w-[30.7px]" data-name="Badge">
      <div className="h-[21.587px] overflow-clip relative rounded-[inherit] w-[30.7px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[15.8px] not-italic text-[#030213] text-[12px] text-center text-nowrap top-[1.8px] translate-x-[-50%] whitespace-pre">27</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell23() {
  return (
    <div className="absolute h-[38.788px] left-[254.89px] top-0 w-[80px]" data-name="TableCell">
      <Badge14 />
    </div>
  );
}

function TableCell24() {
  return (
    <div className="absolute h-[38.788px] left-[334.89px] top-0 w-[208.762px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[#1447e6] text-[14px] text-nowrap top-[8.19px] whitespace-pre">ARAKKONAM</p>
    </div>
  );
}

function Badge15() {
  return (
    <div className="absolute bg-[#eceef2] h-[21.587px] left-[27.86px] rounded-[8px] top-[8.8px] w-[24.262px]" data-name="Badge">
      <div className="h-[21.587px] overflow-clip relative rounded-[inherit] w-[24.262px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[12.3px] not-italic text-[#030213] text-[12px] text-center text-nowrap top-[1.8px] translate-x-[-50%] whitespace-pre">2</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell25() {
  return (
    <div className="absolute h-[38.788px] left-[543.65px] top-0 w-[80px]" data-name="TableCell">
      <Badge15 />
    </div>
  );
}

function TableCell26() {
  return (
    <div className="absolute h-[38.788px] left-[623.65px] top-0 w-[260.85px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[#364153] text-[14px] text-nowrap top-[8.19px] whitespace-pre">ARAKKONAM IOB</p>
    </div>
  );
}

function Badge16() {
  return (
    <div className="absolute bg-[#fef9c2] h-[21.587px] left-[89.1px] rounded-[8px] top-[8.8px] w-[56.8px]" data-name="Badge">
      <div className="h-[21.587px] overflow-clip relative rounded-[inherit] w-[56.8px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[48.8px] not-italic text-[#894b00] text-[12px] text-nowrap text-right top-[1.8px] translate-x-[-100%] whitespace-pre">₹11,500</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell27() {
  return (
    <div className="absolute h-[38.788px] left-[884.5px] top-0 w-[153.9px]" data-name="TableCell">
      <Badge16 />
    </div>
  );
}

function TableRow4() {
  return (
    <div className="absolute bg-gray-50 h-[38.788px] left-0 top-[116.36px] w-[1038.4px]" data-name="TableRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <TableCell21 />
      <TableCell22 />
      <TableCell23 />
      <TableCell24 />
      <TableCell25 />
      <TableCell26 />
      <TableCell27 />
    </div>
  );
}

function Badge17() {
  return (
    <div className="absolute bg-blue-100 h-[21.587px] left-[19.86px] rounded-[8px] top-[8.8px] w-[24.262px]" data-name="Badge">
      <div className="h-[21.587px] overflow-clip relative rounded-[inherit] w-[24.262px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[12.3px] not-italic text-[#193cb8] text-[12px] text-center text-nowrap top-[1.8px] translate-x-[-50%] whitespace-pre">5</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell28() {
  return (
    <div className="absolute h-[38.788px] left-0 top-0 w-[64px]" data-name="TableCell">
      <Badge17 />
    </div>
  );
}

function TableCell29() {
  return (
    <div className="absolute h-[38.788px] left-[64px] top-0 w-[190.887px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[#101828] text-[14px] text-nowrap top-[8.19px] whitespace-pre">BUS NUM...</p>
    </div>
  );
}

function Badge18() {
  return (
    <div className="absolute bg-[#eceef2] h-[21.587px] left-[24.65px] rounded-[8px] top-[8.8px] w-[30.7px]" data-name="Badge">
      <div className="h-[21.587px] overflow-clip relative rounded-[inherit] w-[30.7px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[15.8px] not-italic text-[#030213] text-[12px] text-center text-nowrap top-[1.8px] translate-x-[-50%] whitespace-pre">27</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell30() {
  return (
    <div className="absolute h-[38.788px] left-[254.89px] top-0 w-[80px]" data-name="TableCell">
      <Badge18 />
    </div>
  );
}

function TableCell31() {
  return (
    <div className="absolute h-[38.788px] left-[334.89px] top-0 w-[208.762px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[#1447e6] text-[14px] text-nowrap top-[8.19px] whitespace-pre">ARAKKONAM</p>
    </div>
  );
}

function Badge19() {
  return (
    <div className="absolute bg-[#eceef2] h-[21.587px] left-[27.86px] rounded-[8px] top-[8.8px] w-[24.262px]" data-name="Badge">
      <div className="h-[21.587px] overflow-clip relative rounded-[inherit] w-[24.262px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[12.3px] not-italic text-[#030213] text-[12px] text-center text-nowrap top-[1.8px] translate-x-[-50%] whitespace-pre">3</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell32() {
  return (
    <div className="absolute h-[38.788px] left-[543.65px] top-0 w-[80px]" data-name="TableCell">
      <Badge19 />
    </div>
  );
}

function TableCell33() {
  return (
    <div className="absolute h-[38.788px] left-[623.65px] top-0 w-[260.85px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[#364153] text-[14px] text-nowrap top-[8.19px] whitespace-pre">JOTHI NAGAR</p>
    </div>
  );
}

function Badge20() {
  return (
    <div className="absolute bg-[#fef9c2] h-[21.587px] left-[89.1px] rounded-[8px] top-[8.8px] w-[56.8px]" data-name="Badge">
      <div className="h-[21.587px] overflow-clip relative rounded-[inherit] w-[56.8px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[48.8px] not-italic text-[#894b00] text-[12px] text-nowrap text-right top-[1.8px] translate-x-[-100%] whitespace-pre">₹11,250</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell34() {
  return (
    <div className="absolute h-[38.788px] left-[884.5px] top-0 w-[153.9px]" data-name="TableCell">
      <Badge20 />
    </div>
  );
}

function TableRow5() {
  return (
    <div className="absolute bg-white h-[38.788px] left-0 top-[155.15px] w-[1038.4px]" data-name="TableRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <TableCell28 />
      <TableCell29 />
      <TableCell30 />
      <TableCell31 />
      <TableCell32 />
      <TableCell33 />
      <TableCell34 />
    </div>
  );
}

function Badge21() {
  return (
    <div className="absolute bg-blue-100 h-[21.587px] left-[19.85px] rounded-[8px] top-[8.8px] w-[24.3px]" data-name="Badge">
      <div className="h-[21.587px] overflow-clip relative rounded-[inherit] w-[24.3px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[12.3px] not-italic text-[#193cb8] text-[12px] text-center text-nowrap top-[1.8px] translate-x-[-50%] whitespace-pre">6</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell35() {
  return (
    <div className="absolute h-[38.788px] left-0 top-0 w-[64px]" data-name="TableCell">
      <Badge21 />
    </div>
  );
}

function TableCell36() {
  return (
    <div className="absolute h-[38.788px] left-[64px] top-0 w-[190.887px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[#101828] text-[14px] text-nowrap top-[8.19px] whitespace-pre">BUS NUM...</p>
    </div>
  );
}

function Badge22() {
  return (
    <div className="absolute bg-[#eceef2] h-[21.587px] left-[24.65px] rounded-[8px] top-[8.8px] w-[30.7px]" data-name="Badge">
      <div className="h-[21.587px] overflow-clip relative rounded-[inherit] w-[30.7px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[15.8px] not-italic text-[#030213] text-[12px] text-center text-nowrap top-[1.8px] translate-x-[-50%] whitespace-pre">27</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell37() {
  return (
    <div className="absolute h-[38.788px] left-[254.89px] top-0 w-[80px]" data-name="TableCell">
      <Badge22 />
    </div>
  );
}

function TableCell38() {
  return (
    <div className="absolute h-[38.788px] left-[334.89px] top-0 w-[208.762px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[#1447e6] text-[14px] text-nowrap top-[8.19px] whitespace-pre">ARAKKONAM</p>
    </div>
  );
}

function Badge23() {
  return (
    <div className="absolute bg-[#eceef2] h-[21.587px] left-[27.74px] rounded-[8px] top-[8.8px] w-[24.525px]" data-name="Badge">
      <div className="h-[21.587px] overflow-clip relative rounded-[inherit] w-[24.525px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[12.3px] not-italic text-[#030213] text-[12px] text-center text-nowrap top-[1.8px] translate-x-[-50%] whitespace-pre">4</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell39() {
  return (
    <div className="absolute h-[38.788px] left-[543.65px] top-0 w-[80px]" data-name="TableCell">
      <Badge23 />
    </div>
  );
}

function TableCell40() {
  return (
    <div className="absolute h-[38.788px] left-[623.65px] top-0 w-[260.85px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[#364153] text-[14px] text-nowrap top-[8.19px] whitespace-pre">NAGALAMA NA...</p>
    </div>
  );
}

function Badge24() {
  return (
    <div className="absolute bg-[#fef9c2] h-[21.587px] left-[89.1px] rounded-[8px] top-[8.8px] w-[56.8px]" data-name="Badge">
      <div className="h-[21.587px] overflow-clip relative rounded-[inherit] w-[56.8px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[48.8px] not-italic text-[#894b00] text-[12px] text-nowrap text-right top-[1.8px] translate-x-[-100%] whitespace-pre">₹11,250</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell41() {
  return (
    <div className="absolute h-[38.788px] left-[884.5px] top-0 w-[153.9px]" data-name="TableCell">
      <Badge24 />
    </div>
  );
}

function TableRow6() {
  return (
    <div className="absolute bg-gray-50 h-[38.788px] left-0 top-[193.94px] w-[1038.4px]" data-name="TableRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <TableCell35 />
      <TableCell36 />
      <TableCell37 />
      <TableCell38 />
      <TableCell39 />
      <TableCell40 />
      <TableCell41 />
    </div>
  );
}

function Badge25() {
  return (
    <div className="absolute bg-blue-100 h-[21.587px] left-[19.98px] rounded-[8px] top-[8.8px] w-[24.038px]" data-name="Badge">
      <div className="h-[21.587px] overflow-clip relative rounded-[inherit] w-[24.038px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[12.3px] not-italic text-[#193cb8] text-[12px] text-center text-nowrap top-[1.8px] translate-x-[-50%] whitespace-pre">7</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell42() {
  return (
    <div className="absolute h-[38.388px] left-0 top-0 w-[64px]" data-name="TableCell">
      <Badge25 />
    </div>
  );
}

function TableCell43() {
  return (
    <div className="absolute h-[38.388px] left-[64px] top-0 w-[190.887px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[#101828] text-[14px] text-nowrap top-[8.19px] whitespace-pre">BUS NUM...</p>
    </div>
  );
}

function Badge26() {
  return (
    <div className="absolute bg-[#eceef2] h-[21.587px] left-[24.65px] rounded-[8px] top-[8.8px] w-[30.7px]" data-name="Badge">
      <div className="h-[21.587px] overflow-clip relative rounded-[inherit] w-[30.7px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[15.8px] not-italic text-[#030213] text-[12px] text-center text-nowrap top-[1.8px] translate-x-[-50%] whitespace-pre">27</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell44() {
  return (
    <div className="absolute h-[38.388px] left-[254.89px] top-0 w-[80px]" data-name="TableCell">
      <Badge26 />
    </div>
  );
}

function TableCell45() {
  return (
    <div className="absolute h-[38.388px] left-[334.89px] top-0 w-[208.762px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[#1447e6] text-[14px] text-nowrap top-[8.19px] whitespace-pre">ARAKKONAM</p>
    </div>
  );
}

function Badge27() {
  return (
    <div className="absolute bg-[#eceef2] h-[21.587px] left-[27.86px] rounded-[8px] top-[8.8px] w-[24.262px]" data-name="Badge">
      <div className="h-[21.587px] overflow-clip relative rounded-[inherit] w-[24.262px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[12.3px] not-italic text-[#030213] text-[12px] text-center text-nowrap top-[1.8px] translate-x-[-50%] whitespace-pre">5</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell46() {
  return (
    <div className="absolute h-[38.388px] left-[543.65px] top-0 w-[80px]" data-name="TableCell">
      <Badge27 />
    </div>
  );
}

function TableCell47() {
  return (
    <div className="absolute h-[38.388px] left-[623.65px] top-0 w-[260.85px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[#364153] text-[14px] text-nowrap top-[8.19px] whitespace-pre">SEKHAR VARMA ...</p>
    </div>
  );
}

function Badge28() {
  return (
    <div className="absolute bg-green-100 h-[21.587px] left-[92.05px] rounded-[8px] top-[8.8px] w-[53.85px]" data-name="Badge">
      <div className="h-[21.587px] overflow-clip relative rounded-[inherit] w-[53.85px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[45.8px] not-italic text-[#016630] text-[12px] text-nowrap text-right top-[1.8px] translate-x-[-100%] whitespace-pre">₹9,500</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell48() {
  return (
    <div className="absolute h-[38.388px] left-[884.5px] top-0 w-[153.9px]" data-name="TableCell">
      <Badge28 />
    </div>
  );
}

function TableRow7() {
  return (
    <div className="absolute bg-white h-[38.388px] left-0 top-[232.72px] w-[1038.4px]" data-name="TableRow">
      <TableCell42 />
      <TableCell43 />
      <TableCell44 />
      <TableCell45 />
      <TableCell46 />
      <TableCell47 />
      <TableCell48 />
    </div>
  );
}

function TableBody() {
  return (
    <div className="absolute h-[271.113px] left-0 top-[40px] w-[1038.4px]" data-name="TableBody">
      <TableRow1 />
      <TableRow2 />
      <TableRow3 />
      <TableRow4 />
      <TableRow5 />
      <TableRow6 />
      <TableRow7 />
    </div>
  );
}

function Table() {
  return (
    <div className="h-[311.113px] overflow-clip relative shrink-0 w-full" data-name="Table">
      <TableHeader />
      <TableBody />
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[312.712px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col h-[312.712px] items-start p-[0.8px] relative w-full">
          <Table />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Text() {
  return (
    <div className="h-[20px] relative shrink-0 w-[109.975px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[109.975px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] top-[-1.2px] w-[110px]">Showing 7 entries</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[86.188px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[86.188px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] text-nowrap top-[-1.2px] whitespace-pre">Total Amount:</p>
      </div>
    </div>
  );
}

function Badge29() {
  return (
    <div className="bg-blue-100 h-[29.6px] relative rounded-[8px] shrink-0 w-[75.662px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[29.6px] items-center justify-center overflow-clip px-[12.8px] py-[4.8px] relative rounded-[inherit] w-[75.662px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#193cb8] text-[14px] text-nowrap whitespace-pre">₹93,000</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[29.6px] relative shrink-0 w-[177.85px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[16px] h-[29.6px] items-center relative w-[177.85px]">
        <Text1 />
        <Badge29 />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="box-border content-stretch flex h-[46.4px] items-center justify-between pb-0 pt-[0.8px] px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.8px_0px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <Text />
      <Container13 />
    </div>
  );
}

function VehicleDetailsTable() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[419.113px] items-start left-1/2 top-[409px] translate-x-[-50%] w-[1040px]" data-name="VehicleDetailsTable">
      <Container11 />
      <Container12 />
      <Container14 />
    </div>
  );
}

export default function FeeStructure() {
  return (
    <div className="bg-white overflow-clip relative rounded-[10px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] size-full" data-name="Fee Structure">
      <Container7 />
      <Container10 />
      <VehicleDetailsTable />
    </div>
  );
}