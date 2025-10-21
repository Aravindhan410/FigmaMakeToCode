import svgPaths from "./svg-j76hbg0m4t";

function PrimitiveLabel() {
  return (
    <div className="h-[14px] relative shrink-0 w-[47.35px]" data-name="Primitive.label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[14px] items-center relative w-[47.35px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Course:</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white h-[28px] relative rounded-[8px] shrink-0 w-[96px]" data-name="Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[28px] items-center overflow-clip px-[8px] py-[4px] relative rounded-[inherit] w-[96px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">DPH3499</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#cad5e2] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container() {
  return (
    <div className="h-[28px] relative shrink-0 w-[151.35px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[28px] items-center relative w-[151.35px]">
        <PrimitiveLabel />
        <Input />
      </div>
    </div>
  );
}

function PrimitiveLabel1() {
  return (
    <div className="h-[14px] relative shrink-0 w-[51.962px]" data-name="Primitive.label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[14px] items-center relative w-[51.962px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Remark:</p>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="basis-0 bg-white grow h-[28px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[28px] items-center px-[8px] py-[4px] relative w-full">
          <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">All</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#cad5e2] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[28px] relative shrink-0 w-[187.963px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[28px] items-center relative w-[187.963px]">
        <PrimitiveLabel1 />
        <Input1 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[28px] relative shrink-0 w-[363.312px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[24px] h-[28px] items-center relative w-[363.312px]">
        <Container />
        <Container1 />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="basis-0 bg-white grow h-[28px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#90a1b9] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[6px] h-[28px] items-center justify-center px-[16.8px] py-[0.8px] relative w-full">
          <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">SHOW</p>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white h-[28px] relative rounded-[8px] shrink-0 w-[74.175px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#90a1b9] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[6px] h-[28px] items-center justify-center px-[16.8px] py-[0.8px] relative w-[74.175px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">CLOSE</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[28px] relative shrink-0 w-[157.8px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[28px] items-center relative w-[157.8px]">
        <Button />
        <Button1 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex h-[28px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container2 />
      <Container3 />
    </div>
  );
}

function ReportHeader() {
  return (
    <div className="absolute bg-slate-100 box-border content-stretch flex flex-col h-[53px] items-start left-px pb-[0.8px] pt-[12px] px-[16px] top-px w-[1149px]" data-name="ReportHeader">
      <div aria-hidden="true" className="absolute border-[#cad5e2] border-[0px_0px_0.8px] border-solid inset-0 pointer-events-none" />
      <Container4 />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M10 12L6 8L10 4" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 rounded-[8px] size-[32px] top-0" data-name="Button">
      <Icon />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[36px] rounded-[8px] size-[32px] top-0" data-name="Button">
      <Icon1 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p3a151200} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p18af2500} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[72px] rounded-[8px] size-[32px] top-0" data-name="Button">
      <Icon2 />
    </div>
  );
}

function PrimitiveDiv() {
  return <div className="absolute bg-[rgba(0,0,0,0.1)] h-0 left-[116px] top-[16px] w-px" data-name="Primitive.div" />;
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p107a080} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M14 14L11.1 11.1" id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M5.33333 7.33333H9.33333" id="Vector_3" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[129px] rounded-[8px] size-[32px] top-0" data-name="Button">
      <Icon3 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p107a080} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M14 14L11.1 11.1" id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M7.33333 5.33333V9.33333" id="Vector_3" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M5.33333 7.33333H9.33333" id="Vector_4" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[165px] rounded-[8px] size-[32px] top-0" data-name="Button">
      <Icon4 />
    </div>
  );
}

function PrimitiveDiv1() {
  return <div className="absolute bg-[rgba(0,0,0,0.1)] h-0 left-[209px] top-[16px] w-px" data-name="Primitive.div" />;
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p12949080} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 2V5.33333H5.33333" id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[222px] rounded-[8px] size-[32px] top-0" data-name="Button">
      <Icon5 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p3f4fc5e0} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M14 2V5.33333H10.6667" id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button8() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[258px] rounded-[8px] size-[32px] top-0" data-name="Button">
      <Icon6 />
    </div>
  );
}

function PrimitiveDiv2() {
  return <div className="absolute bg-[rgba(0,0,0,0.1)] h-0 left-[302px] top-[16px] w-px" data-name="Primitive.div" />;
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M14 14L11.1067 11.1067" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p107a080} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button9() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[315px] rounded-[8px] size-[32px] top-0" data-name="Button">
      <Icon7 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_4008_6986)" id="Icon">
          <path d={svgPaths.p3397ec80} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p4adfe2c} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p27a74a00} id="Vector_3" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_4008_6986">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button10() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[351px] rounded-[8px] size-[32px] top-0" data-name="Button">
      <Icon8 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M8 10V2" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p23ad1400} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p19411800} id="Vector_3" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button11() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[387px] rounded-[8px] size-[32px] top-0" data-name="Button">
      <Icon9 />
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Container">
      <Button2 />
      <Button3 />
      <Button4 />
      <PrimitiveDiv />
      <Button5 />
      <Button6 />
      <PrimitiveDiv1 />
      <Button7 />
      <Button8 />
      <PrimitiveDiv2 />
      <Button9 />
      <Button10 />
      <Button11 />
    </div>
  );
}

function Toolbar() {
  return (
    <div className="absolute bg-slate-50 box-border content-stretch flex flex-col h-[48px] items-start left-px pb-[0.8px] pt-[8px] px-[16px] top-[54px] w-[1149px]" data-name="Toolbar">
      <div aria-hidden="true" className="absolute border-[#cad5e2] border-[0px_0px_0.8px] border-solid inset-0 pointer-events-none" />
      <Container5 />
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-white h-[29.6px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#cad5e2] border-[0.8px] border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[12.8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[3.6px] whitespace-pre">Main Report</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute bg-slate-200 box-border content-stretch flex flex-col h-[38px] items-start left-0 pb-[0.8px] pl-[8px] pr-[1008.62px] pt-[4px] top-0 w-[1149px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#cad5e2] border-[0px_0px_0.8px] border-solid inset-0 pointer-events-none" />
      <Container6 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex h-[15.988px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arial:Regular',_sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#e7000b] text-[12px] text-center">GILT INSTITUTE OF JOURNALISM ETHICS, EDUCATION AND RESEARCH</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex h-[15.988px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Arial:Regular',_sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#e7000b] text-[12px] text-center">GILT BACHELOR OF JOURNALISM ADVANCED PLACEMENT (HONOURS) SEMESTER 1 RESULT</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[423.63px] not-italic text-[14px] text-center text-neutral-950 text-nowrap top-[-1.2px] translate-x-[-50%] whitespace-pre">NARRATION REPORT</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="box-border content-stretch flex flex-col h-[29.6px] items-start pb-[0.8px] pt-[4.8px] px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.8px_0px] border-black border-solid inset-0 pointer-events-none" />
      <Container10 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[69.575px] items-start relative shrink-0 w-full" data-name="Container">
      <Container8 />
      <Container9 />
      <Container11 />
    </div>
  );
}

function HeaderCell() {
  return (
    <div className="absolute h-[40.775px] left-0 top-0 w-[99.412px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[0.8px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Bold',_sans-serif] leading-[16px] left-[50.19px] not-italic text-[12px] text-center text-neutral-950 top-[3.4px] translate-x-[-50%] w-[54px]">COURSE: DPH3499</p>
    </div>
  );
}

function TableRow() {
  return (
    <div className="absolute bg-gray-100 h-[40.775px] left-0 top-0 w-[845.6px]" data-name="Table Row">
      <HeaderCell />
    </div>
  );
}

function HeaderCell1() {
  return (
    <div className="absolute h-[24.788px] left-0 top-0 w-[99.412px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[0.8px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Bold',_sans-serif] leading-[16px] left-[50.55px] not-italic text-[12px] text-center text-neutral-950 text-nowrap top-[3.4px] translate-x-[-50%] whitespace-pre">SNO</p>
    </div>
  );
}

function HeaderCell2() {
  return (
    <div className="absolute h-[24.788px] left-[99.41px] top-0 w-[128.65px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[0.8px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Bold',_sans-serif] leading-[16px] left-[63.83px] not-italic text-[12px] text-center text-neutral-950 text-nowrap top-[3.4px] translate-x-[-50%] whitespace-pre">ROLL NO</p>
    </div>
  );
}

function HeaderCell3() {
  return (
    <div className="absolute h-[24.788px] left-[228.06px] top-0 w-[154.375px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[0.8px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Bold',_sans-serif] leading-[16px] left-[77.29px] not-italic text-[12px] text-center text-neutral-950 text-nowrap top-[3.4px] translate-x-[-50%] whitespace-pre">NAME</p>
    </div>
  );
}

function HeaderCell4() {
  return (
    <div className="absolute h-[24.788px] left-[382.44px] top-0 w-[77.188px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[0.8px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Bold',_sans-serif] leading-[16px] left-[38.79px] not-italic text-[12px] text-center text-neutral-950 text-nowrap top-[3.4px] translate-x-[-50%] whitespace-pre">SEM</p>
    </div>
  );
}

function HeaderCell5() {
  return (
    <div className="absolute h-[24.788px] left-[459.63px] top-0 w-[154.375px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[0.8px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Bold',_sans-serif] leading-[16px] left-[77.36px] not-italic text-[12px] text-center text-neutral-950 text-nowrap top-[3.4px] translate-x-[-50%] whitespace-pre">FEE TYPE</p>
    </div>
  );
}

function HeaderCell6() {
  return (
    <div className="absolute h-[24.788px] left-[614px] top-0 w-[102.912px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[0.8px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Bold',_sans-serif] leading-[16px] left-[52.06px] not-italic text-[12px] text-center text-neutral-950 text-nowrap top-[3.4px] translate-x-[-50%] whitespace-pre">REMARK</p>
    </div>
  );
}

function HeaderCell7() {
  return (
    <div className="absolute h-[24.788px] left-[716.91px] top-0 w-[128.688px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[0.8px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Bold',_sans-serif] leading-[16px] left-[64.36px] not-italic text-[12px] text-center text-neutral-950 text-nowrap top-[3.4px] translate-x-[-50%] whitespace-pre">Amount</p>
    </div>
  );
}

function TableRow1() {
  return (
    <div className="absolute bg-gray-100 h-[24.788px] left-0 top-[40.77px] w-[845.6px]" data-name="Table Row">
      <HeaderCell1 />
      <HeaderCell2 />
      <HeaderCell3 />
      <HeaderCell4 />
      <HeaderCell5 />
      <HeaderCell6 />
      <HeaderCell7 />
    </div>
  );
}

function TableHeader() {
  return (
    <div className="absolute h-[65.563px] left-[0.4px] top-[0.4px] w-[845.6px]" data-name="Table Header">
      <TableRow />
      <TableRow1 />
    </div>
  );
}

function TableCell() {
  return (
    <div className="absolute h-[24.788px] left-0 top-0 w-[99.412px]" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[0.8px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[49.96px] not-italic text-[12px] text-center text-neutral-950 text-nowrap top-[3.4px] translate-x-[-50%] whitespace-pre">1</p>
    </div>
  );
}

function TableCell1() {
  return (
    <div className="absolute h-[24.788px] left-[99.41px] top-0 w-[128.65px]" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[0.8px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[65.06px] not-italic text-[12px] text-center text-neutral-950 text-nowrap top-[3.4px] translate-x-[-50%] whitespace-pre">2CA3052</p>
    </div>
  );
}

function TableCell2() {
  return (
    <div className="absolute h-[24.788px] left-[228.06px] top-0 w-[154.375px]" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[0.8px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[77.94px] not-italic text-[12px] text-center text-neutral-950 text-nowrap top-[3.4px] translate-x-[-50%] whitespace-pre">LAGA</p>
    </div>
  );
}

function TableCell3() {
  return (
    <div className="absolute h-[24.788px] left-[382.44px] top-0 w-[77.188px]" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[0.8px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[38.85px] not-italic text-[12px] text-center text-neutral-950 text-nowrap top-[3.4px] translate-x-[-50%] whitespace-pre">1</p>
    </div>
  );
}

function TableCell4() {
  return (
    <div className="absolute h-[24.788px] left-[459.63px] top-0 w-[154.375px]" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[0.8px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[77.24px] not-italic text-[12px] text-center text-neutral-950 text-nowrap top-[3.4px] translate-x-[-50%] whitespace-pre">TUITION FEES</p>
    </div>
  );
}

function TableCell5() {
  return (
    <div className="absolute h-[24.788px] left-[614px] top-0 w-[102.912px]" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[0.8px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[51.05px] not-italic text-[12px] text-center text-neutral-950 text-nowrap top-[3.4px] translate-x-[-50%] whitespace-pre">-</p>
    </div>
  );
}

function TableCell6() {
  return (
    <div className="absolute h-[24.788px] left-[716.91px] top-0 w-[128.688px]" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[0.8px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[64.83px] not-italic text-[12px] text-center text-neutral-950 text-nowrap top-[3.4px] translate-x-[-50%] whitespace-pre">5,000.00</p>
    </div>
  );
}

function TableRow2() {
  return (
    <div className="absolute h-[24.788px] left-0 top-0 w-[845.6px]" data-name="Table Row">
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

function TableCell7() {
  return (
    <div className="absolute h-[24.788px] left-0 top-0 w-[716.913px]" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[0.8px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[359.16px] not-italic text-[12px] text-center text-neutral-950 text-nowrap top-[3.4px] translate-x-[-50%] whitespace-pre">Total: 1</p>
    </div>
  );
}

function TableCell8() {
  return (
    <div className="absolute h-[24.788px] left-[716.91px] top-0 w-[128.688px]" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[0.8px] border-black border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[64.83px] not-italic text-[12px] text-center text-neutral-950 text-nowrap top-[3.4px] translate-x-[-50%] whitespace-pre">5,000.00</p>
    </div>
  );
}

function TableRow3() {
  return (
    <div className="absolute h-[24.788px] left-0 top-[24.79px] w-[845.6px]" data-name="Table Row">
      <TableCell7 />
      <TableCell8 />
    </div>
  );
}

function TableBody() {
  return (
    <div className="absolute h-[49.575px] left-[0.4px] top-[65.96px] w-[845.6px]" data-name="Table Body">
      <TableRow2 />
      <TableRow3 />
    </div>
  );
}

function Table() {
  return (
    <div className="h-[115.938px] relative shrink-0 w-full" data-name="Table">
      <div aria-hidden="true" className="absolute border-[0.8px] border-black border-solid inset-0 pointer-events-none" />
      <TableHeader />
      <TableBody />
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[249.512px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] h-[249.512px] items-start pb-0 pt-[24px] px-[24px] relative w-full">
          <Container12 />
          <Table />
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="bg-white h-[251.113px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0.8px] border-solid inset-0 pointer-events-none shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[251.113px] items-start p-[0.8px] relative w-full">
          <Container13 />
        </div>
      </div>
    </div>
  );
}

function PdfViewer() {
  return (
    <div className="absolute bg-[#99a1af] box-border content-stretch flex flex-col h-[606px] items-start left-0 overflow-clip pb-0 pt-[16px] px-[111.2px] top-[38px] w-[1149px]" data-name="PDFViewer">
      <Container14 />
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute h-[644px] left-px top-[102px] w-[1149px]" data-name="Container">
      <Container7 />
      <PdfViewer />
    </div>
  );
}

function Text() {
  return (
    <div className="h-[15.988px] relative shrink-0 w-[103px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.988px] items-start relative w-[103px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[16px] not-italic relative shrink-0 text-[#45556c] text-[12px] text-nowrap whitespace-pre">Current Page No.: 1</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[15.988px] relative shrink-0 w-[88.525px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.988px] items-start relative w-[88.525px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[16px] not-italic relative shrink-0 text-[#45556c] text-[12px] text-nowrap whitespace-pre">Total Page No.: 1</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[15.988px] relative shrink-0 w-[207.525px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[16px] h-[15.988px] items-center relative w-[207.525px]">
        <Text />
        <Text1 />
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[15.988px] relative shrink-0 w-[69.5px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[15.988px] items-start relative w-[69.5px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[16px] not-italic relative shrink-0 text-[#45556c] text-[12px] text-nowrap whitespace-pre">Zoom Factor:</p>
      </div>
    </div>
  );
}

function PrimitiveSpan() {
  return (
    <div className="h-[15.988px] relative shrink-0 w-[29.238px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[15.988px] items-center overflow-clip relative rounded-[inherit] w-[29.238px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[16px] not-italic relative shrink-0 text-[#45556c] text-[12px] text-nowrap whitespace-pre">100%</p>
      </div>
    </div>
  );
}

function Icon10() {
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
    <div className="basis-0 bg-[#f3f3f5] grow h-[36px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[36px] items-center justify-between px-[12.8px] py-[0.8px] relative w-full">
          <PrimitiveSpan />
          <Icon10 />
        </div>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[36px] relative shrink-0 w-[157.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[36px] items-center relative w-[157.5px]">
        <Text2 />
        <PrimitiveButton />
      </div>
    </div>
  );
}

function Button12() {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[6px] h-[24px] items-center justify-center left-0 px-[8.8px] py-[0.8px] rounded-[8px] top-0 w-[40.8px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Arial:Regular',_sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-neutral-950 text-nowrap whitespace-pre">First</p>
    </div>
  );
}

function Button13() {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[6px] h-[24px] items-center justify-center left-[44.8px] px-[8.8px] py-[0.8px] rounded-[8px] top-0 w-[41.413px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Arial:Regular',_sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-neutral-950 text-nowrap whitespace-pre">Prev</p>
    </div>
  );
}

function Button14() {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[6px] h-[24px] items-center justify-center left-[90.21px] px-[8.8px] py-[0.8px] rounded-[8px] top-0 w-[43.538px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Arial:Regular',_sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-neutral-950 text-nowrap whitespace-pre">Next</p>
    </div>
  );
}

function Button15() {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[6px] h-[24px] items-center justify-center left-[137.75px] px-[8.8px] py-[0.8px] rounded-[8px] top-0 w-[39.25px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Arial:Regular',_sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-neutral-950 text-nowrap whitespace-pre">Last</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-full">
        <Button12 />
        <Button13 />
        <Button14 />
        <Button15 />
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[36px] relative shrink-0 w-[350.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[16px] h-[36px] items-center relative w-[350.5px]">
        <Container17 />
        <Container18 />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex h-[36px] items-center justify-between relative w-full">
          <Container16 />
          <Container19 />
        </div>
      </div>
    </div>
  );
}

function StatusBar() {
  return (
    <div className="absolute bg-slate-100 box-border content-stretch flex flex-col h-[53px] items-start left-px pb-0 pt-[8.8px] px-[16px] top-[746px] w-[1149px]" data-name="StatusBar">
      <div aria-hidden="true" className="absolute border-[#cad5e2] border-[0.8px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Container20 />
    </div>
  );
}

export default function NarrationReport() {
  return (
    <div className="bg-white relative size-full" data-name="Narration Report">
      <div className="relative size-full">
        <ReportHeader />
        <Toolbar />
        <Container15 />
        <StatusBar />
      </div>
      <div aria-hidden="true" className="absolute border-[#90a1b9] border-[0.8px] border-solid inset-0 pointer-events-none shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" />
    </div>
  );
}