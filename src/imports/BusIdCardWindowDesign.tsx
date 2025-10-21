import svgPaths from "./svg-x6mc93gaux";

function Container() {
  return (
    <div className="absolute h-[80.8px] left-0 top-0 w-[1120px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.8px_0px_0px] border-gray-200 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute bg-white h-0 left-[16px] top-[144px] w-[1116.4px]" data-name="Container1">
      <Container />
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[10.8px] size-[16px] top-[8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p19416e00} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3e059a80} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p16159200} id="Vector_3" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2fbd4340} id="Vector_4" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white h-[32px] relative rounded-[8px] shrink-0 w-[137.4px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[32px] relative w-[137.4px]">
        <Icon />
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[40.8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[4.8px] whitespace-pre">Import Photo</p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[10.8px] size-[16px] top-[8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_4014_14939)" id="Icon">
          <path d={svgPaths.p19d9cf00} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p4adfe2c} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p27a74a00} id="Vector_3" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_4014_14939">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white h-[32px] relative rounded-[8px] shrink-0 w-[81.85px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[32px] relative w-[81.85px]">
        <Icon1 />
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[40.8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[4.8px] whitespace-pre">Print</p>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-[10px] size-[16px] top-[8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p3c401780} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p56b0600} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p17caa400} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#030213] h-[32px] relative rounded-[8px] shrink-0 w-[79.362px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[32px] relative w-[79.362px]">
        <Icon2 />
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[40px] not-italic text-[14px] text-nowrap text-white top-[4.8px] whitespace-pre">Save</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[32px] relative shrink-0 w-[314.613px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[32px] items-center justify-end relative w-[314.613px]">
        <Button />
        <Button1 />
        <Button2 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex gap-[497.738px] h-[32px] items-center justify-end right-[6.8px] top-[96.2px] w-[315.4px]" data-name="Container">
      <Container2 />
    </div>
  );
}

function PrimitiveLabel() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#364153] text-[14px] text-nowrap whitespace-pre">Department</p>
    </div>
  );
}

function PrimitiveSpan() {
  return (
    <div className="h-[20px] relative shrink-0 w-[70.638px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[20px] items-center overflow-clip relative rounded-[inherit] w-[70.638px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Select Dept</p>
      </div>
    </div>
  );
}

function Icon3() {
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
          <Icon3 />
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[64px] items-start relative shrink-0 w-[145.762px]" data-name="Container">
      <PrimitiveLabel />
      <PrimitiveButton />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[64px] items-start left-0 top-[15.99px] w-[145.762px]" data-name="Container">
      <Container4 />
    </div>
  );
}

function PrimitiveLabel1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#364153] text-[14px] text-nowrap whitespace-pre">SEM</p>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[#f3f3f5] h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[36px] items-center px-[12px] py-[4px] relative w-full">
          <p className="font-['Arial:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">0</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[64px] items-start left-[161.76px] top-[15.99px] w-[145.775px]" data-name="Container">
      <PrimitiveLabel1 />
      <Input />
    </div>
  );
}

function PrimitiveLabel2() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#364153] text-[14px] text-nowrap whitespace-pre">Reg No</p>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-[#f3f3f5] h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[36px] items-center px-[12px] py-[4px] relative w-full">
          <p className="font-['Arial:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Registration</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[64px] items-start left-[323.54px] top-[15.99px] w-[145.775px]" data-name="Container">
      <PrimitiveLabel2 />
      <Input1 />
    </div>
  );
}

function PrimitiveLabel3() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#364153] text-[14px] text-nowrap whitespace-pre">ID Card</p>
    </div>
  );
}

function Input2() {
  return (
    <div className="bg-[#f3f3f5] h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[36px] items-center px-[12px] py-[4px] relative w-full">
          <p className="font-['Arial:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Card ID</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[64px] items-start left-[485.31px] top-[15.99px] w-[145.762px]" data-name="Container">
      <PrimitiveLabel3 />
      <Input2 />
    </div>
  );
}

function PrimitiveLabel4() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#364153] text-[14px] text-nowrap whitespace-pre">CI</p>
    </div>
  );
}

function Input3() {
  return (
    <div className="bg-[#f3f3f5] h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[36px] items-center px-[12px] py-[4px] relative w-full">
          <p className="font-['Arial:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">CI Number</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[64px] items-start left-[647.08px] top-[15.99px] w-[145.775px]" data-name="Container">
      <PrimitiveLabel4 />
      <Input3 />
    </div>
  );
}

function PrimitiveButton1() {
  return (
    <div className="bg-[#f3f3f5] relative rounded-[4px] shrink-0 size-[16px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[16px]" />
    </div>
  );
}

function PrimitiveLabel5() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <PrimitiveButton1 />
      <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#364153] text-[14px] text-nowrap whitespace-pre">Bus ID</p>
    </div>
  );
}

function Input4() {
  return (
    <div className="absolute bg-[#f3f3f5] h-[36px] left-0 rounded-[8px] top-0 w-[145.775px]" data-name="Input">
      <div className="box-border content-stretch flex h-[36px] items-center overflow-clip pl-[12px] pr-[32px] py-[4px] relative rounded-[inherit] w-[145.775px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Bus Number</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Badge() {
  return (
    <div className="absolute bg-[#eceef2] h-[28px] left-[90.63px] rounded-[8px] top-[4px] w-[51.15px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[28px] items-center justify-center overflow-clip px-[8.8px] py-[2.8px] relative rounded-[inherit] w-[51.15px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[16px] not-italic relative shrink-0 text-[#030213] text-[12px] text-nowrap whitespace-pre">Active</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Container">
      <Input4 />
      <Badge />
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[64px] items-start left-[808.85px] top-[15.99px] w-[145.775px]" data-name="Container">
      <PrimitiveLabel5 />
      <Container10 />
    </div>
  );
}

function PrimitiveLabel6() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#364153] text-[14px] text-nowrap whitespace-pre">Date Range</p>
    </div>
  );
}

function PrimitiveLabel7() {
  return (
    <div className="content-stretch flex gap-[8px] h-[15.988px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] text-nowrap whitespace-pre">From Date</p>
    </div>
  );
}

function PrimitiveSpan1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[36.688px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[20px] items-center overflow-clip relative rounded-[inherit] w-[36.688px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Select</p>
      </div>
    </div>
  );
}

function Icon4() {
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

function PrimitiveButton2() {
  return (
    <div className="bg-[#f3f3f5] h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[36px] items-center justify-between px-[12.8px] py-[0.8px] relative w-full">
          <PrimitiveSpan1 />
          <Icon4 />
        </div>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="basis-0 grow h-[51.987px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[2.861e_-6px] h-[51.987px] items-start relative w-full">
        <PrimitiveLabel7 />
        <PrimitiveButton2 />
      </div>
    </div>
  );
}

function PrimitiveLabel8() {
  return (
    <div className="content-stretch flex gap-[8px] h-[15.988px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] text-nowrap whitespace-pre">To Date</p>
    </div>
  );
}

function PrimitiveSpan2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[36.688px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[20px] items-center overflow-clip relative rounded-[inherit] w-[36.688px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Select</p>
      </div>
    </div>
  );
}

function Icon5() {
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

function PrimitiveButton3() {
  return (
    <div className="bg-[#f3f3f5] h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[36px] items-center justify-between px-[12.8px] py-[0.8px] relative w-full">
          <PrimitiveSpan2 />
          <Icon5 />
        </div>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="basis-0 grow h-[51.987px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[2.861e_-6px] h-[51.987px] items-start relative w-full">
        <PrimitiveLabel8 />
        <PrimitiveButton3 />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="box-border content-stretch flex gap-[8px] h-[51.987px] items-start pl-0 py-0 relative shrink-0 w-full" data-name="Container">
      <Container12 />
      <Container13 />
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[79.987px] items-start left-[970.63px] top-0 w-[145.762px]" data-name="Container">
      <PrimitiveLabel6 />
      <Container14 />
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute h-[79.987px] left-[7.2px] top-[11.2px] w-[1116.4px]" data-name="Container">
      <Container5 />
      <Container6 />
      <Container7 />
      <Container8 />
      <Container9 />
      <Container11 />
      <Container15 />
    </div>
  );
}

function Container17() {
  return (
    <div className="bg-gradient-to-r from-[#eff6ff] h-[144px] relative shrink-0 to-[#eef2ff] w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <Container1 />
      <Container3 />
      <Container16 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-[-2.2px] whitespace-pre">Quick Actions</p>
    </div>
  );
}

function Icon6() {
  return (
    <div className="absolute left-[12px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p32887f80} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3b6ee540} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p188b8380} id="Vector_3" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3694d280} id="Vector_4" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <Icon6 />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[44px] not-italic text-[14px] text-neutral-950 text-nowrap top-[6.8px] whitespace-pre">View All Cards</p>
    </div>
  );
}

function Icon7() {
  return (
    <div className="absolute left-[12px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M5.33333 1.33333V4" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 1.33333V4" id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3ee34580} id="Vector_3" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 6.66667H14" id="Vector_4" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <Icon7 />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[44px] not-italic text-[14px] text-neutral-950 text-nowrap top-[6.8px] whitespace-pre">Expiry Report</p>
    </div>
  );
}

function Icon8() {
  return (
    <div className="absolute left-[12px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p35993080} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M1.33333 6.66667H14.6667" id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <Icon8 />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[44px] not-italic text-[14px] text-neutral-950 text-nowrap top-[6.8px] whitespace-pre">New Card</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[124px] items-start relative shrink-0 w-full" data-name="Container">
      <Button3 />
      <Button4 />
      <Button5 />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[160px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading3 />
      <Container18 />
    </div>
  );
}

function PrimitiveDiv() {
  return <div className="bg-[rgba(0,0,0,0.1)] h-px shrink-0 w-full" data-name="Primitive.div" />;
}

function Heading4() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-[-2.2px] whitespace-pre">Recent Cards</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-1.2px] whitespace-pre">BUS-001</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex h-[15.988px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Arial:Regular',_sans-serif] leading-[16px] not-italic relative shrink-0 text-[#717182] text-[12px] text-nowrap whitespace-pre">John Doe</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[35.987px] relative shrink-0 w-[52.737px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[35.987px] items-start relative w-[52.737px]">
        <Paragraph />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Badge1() {
  return (
    <div className="h-[21.587px] relative rounded-[8px] shrink-0 w-[51.15px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[21.587px] items-center justify-center overflow-clip px-[8.8px] py-[2.8px] relative rounded-[inherit] w-[51.15px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-neutral-950 text-nowrap whitespace-pre">Active</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function App() {
  return (
    <div className="h-[35.987px] relative shrink-0 w-[197.6px]" data-name="App">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[35.987px] items-center justify-between relative w-[197.6px]">
        <Container20 />
        <Badge1 />
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="bg-white h-[61.587px] relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[61.587px] items-start pb-[0.8px] pl-[12.8px] pr-[0.8px] pt-[12.8px] relative w-full">
          <App />
        </div>
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-1.2px] whitespace-pre">BUS-002</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="content-stretch flex h-[15.988px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Arial:Regular',_sans-serif] leading-[16px] not-italic relative shrink-0 text-[#717182] text-[12px] text-nowrap whitespace-pre">Jane Smith</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[35.987px] relative shrink-0 w-[57.225px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[35.987px] items-start relative w-[57.225px]">
        <Paragraph2 />
        <Paragraph3 />
      </div>
    </div>
  );
}

function Badge2() {
  return (
    <div className="bg-[#eceef2] h-[21.587px] relative rounded-[8px] shrink-0 w-[62.188px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[21.587px] items-center justify-center overflow-clip px-[8.8px] py-[2.8px] relative rounded-[inherit] w-[62.188px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[16px] not-italic relative shrink-0 text-[#030213] text-[12px] text-nowrap whitespace-pre">Pending</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function App1() {
  return (
    <div className="h-[35.987px] relative shrink-0 w-[197.6px]" data-name="App">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[35.987px] items-center justify-between relative w-[197.6px]">
        <Container21 />
        <Badge2 />
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="bg-white h-[61.587px] relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[61.587px] items-start pb-[0.8px] pl-[12.8px] pr-[0.8px] pt-[12.8px] relative w-full">
          <App1 />
        </div>
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-1.2px] whitespace-pre">BUS-003</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="content-stretch flex h-[15.988px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Arial:Regular',_sans-serif] leading-[16px] not-italic relative shrink-0 text-[#717182] text-[12px] text-nowrap whitespace-pre">Mike Johnson</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[35.987px] relative shrink-0 w-[73.025px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[35.987px] items-start relative w-[73.025px]">
        <Paragraph4 />
        <Paragraph5 />
      </div>
    </div>
  );
}

function Badge3() {
  return (
    <div className="bg-[#d4183d] h-[21.587px] relative rounded-[8px] shrink-0 w-[58.138px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[21.587px] items-center justify-center overflow-clip px-[8.8px] py-[2.8px] relative rounded-[inherit] w-[58.138px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">Expired</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function App2() {
  return (
    <div className="h-[35.987px] relative shrink-0 w-[197.6px]" data-name="App">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[35.987px] items-center justify-between relative w-[197.6px]">
        <Container22 />
        <Badge3 />
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div className="bg-white h-[61.587px] relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[61.587px] items-start pb-[0.8px] pl-[12.8px] pr-[0.8px] pt-[12.8px] relative w-full">
          <App2 />
        </div>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[200.762px] items-start relative shrink-0 w-full" data-name="Container">
      <Card />
      <Card1 />
      <Card2 />
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[236.762px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading4 />
      <Container23 />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[429.763px] items-start relative shrink-0 w-full" data-name="Container">
      <Container19 />
      <PrimitiveDiv />
      <Container24 />
    </div>
  );
}

function Container26() {
  return (
    <div className="bg-gray-50 h-[600px] relative shrink-0 w-[256px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[600px] items-start pb-0 pl-[16px] pr-[16.8px] pt-[16px] relative w-[256px]">
        <Container25 />
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arial:Bold',_sans-serif] leading-[28px] left-0 not-italic text-[18px] text-nowrap text-white top-[-1.4px] whitespace-pre">Transport Authority</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-0 not-italic text-[14px] text-blue-100 text-nowrap top-[-1.2px] whitespace-pre">Employee ID Card</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[48px] relative shrink-0 w-[168.1px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[48px] items-start relative w-[168.1px]">
        <Heading5 />
        <Paragraph6 />
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p27a3200} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p2db021c0} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p18f42980} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p2ee517c0} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container28() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] relative rounded-[10px] shrink-0 size-[64px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[64px]">
        <Icon9 />
      </div>
    </div>
  );
}

function App3() {
  return (
    <div className="h-[64px] relative shrink-0 w-[270.4px]" data-name="App">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[64px] items-start justify-between relative w-[270.4px]">
        <Container27 />
        <Container28 />
      </div>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Bold',_sans-serif] leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-2.2px] whitespace-pre">John Doe</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-0 not-italic text-[14px] text-blue-100 text-nowrap top-[-1.2px] whitespace-pre">Bus Driver</p>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="content-stretch flex h-[15.988px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Arial:Regular',_sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[12px] text-blue-100">ID: BUS-001 | Valid: 07/12/2025</p>
    </div>
  );
}

function App4() {
  return (
    <div className="h-[67.987px] relative shrink-0 w-[270.4px]" data-name="App">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[67.987px] items-start relative w-[270.4px]">
        <Paragraph7 />
        <Paragraph8 />
        <Paragraph9 />
      </div>
    </div>
  );
}

function CardContent() {
  return (
    <div className="h-[190.4px] relative shrink-0 w-[318.4px]" data-name="CardContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[190.4px] items-start justify-between pb-0 pl-[24px] pr-0 pt-[24px] relative w-[318.4px]">
        <App3 />
        <App4 />
      </div>
    </div>
  );
}

function Card3() {
  return (
    <div className="box-border content-stretch flex flex-col h-[192px] items-start p-[0.8px] relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" />
      <CardContent />
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[600px] relative shrink-0 w-[892.4px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[600px] items-start pb-0 pt-[204px] px-[286.2px] relative w-[892.4px]">
        <Card3 />
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex gap-[1.824e_-5px] h-[600px] items-start relative shrink-0 w-full" data-name="Container">
      <Container26 />
      <Container29 />
    </div>
  );
}

function Text() {
  return (
    <div className="absolute content-stretch flex h-[18.4px] items-start left-[109.59px] top-[0.8px] w-[5.638px]" data-name="Text">
      <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">1</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[115.225px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[115.225px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-0 not-italic text-[#717182] text-[14px] text-nowrap top-[-1.2px] whitespace-pre">Current Page No:</p>
        <Text />
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute content-stretch flex h-[18.4px] items-start left-[92.7px] top-[0.8px] w-[5.638px]" data-name="Text">
      <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">1</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[98.338px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[98.338px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-0 not-italic text-[#717182] text-[14px] text-nowrap top-[-1.2px] whitespace-pre">Total Page No:</p>
        <Text2 />
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[20px] relative shrink-0 w-[237.562px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[24px] h-[20px] items-start relative w-[237.562px]">
        <Text1 />
        <Text3 />
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="absolute content-stretch flex h-[18.4px] items-start left-[84.92px] top-[0.8px] w-[32.95px]" data-name="Text">
      <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">100%</p>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[20px] relative shrink-0 w-[117.875px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[117.875px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-0 not-italic text-[#717182] text-[14px] text-nowrap top-[-1.2px] whitespace-pre">Zoom Factor:</p>
        <Text4 />
      </div>
    </div>
  );
}

function Badge4() {
  return (
    <div className="h-[21.587px] relative rounded-[8px] shrink-0 w-[50.725px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[21.587px] items-center justify-center overflow-clip px-[8.8px] py-[2.8px] relative rounded-[inherit] w-[50.725px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-neutral-950 text-nowrap whitespace-pre">Ready</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[21.587px] relative shrink-0 w-[184.6px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[16px] h-[21.587px] items-center relative w-[184.6px]">
        <Text5 />
        <Badge4 />
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex h-[21.587px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container31 />
      <Container32 />
    </div>
  );
}

function Container34() {
  return (
    <div className="bg-gray-100 h-[38.388px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.8px_0px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[38.388px] items-start pb-0 pt-[8.8px] px-[16px] relative w-full">
          <Container33 />
        </div>
      </div>
    </div>
  );
}

export default function BusIdCardWindowDesign() {
  return (
    <div className="bg-white relative size-full" data-name="Bus Id Card Window Design">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[3.04e_-6px] items-start px-[1.8px] py-[0.8px] relative size-full">
          <Container17 />
          <Container30 />
          <Container34 />
        </div>
      </div>
    </div>
  );
}