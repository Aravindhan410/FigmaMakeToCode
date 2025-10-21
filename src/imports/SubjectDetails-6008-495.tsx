import svgPaths from "./svg-d1vh0ztidw";

function PrimitiveLabel() {
  return (
    <div className="h-[14px] relative shrink-0 w-[158.9px]" data-name="Primitive.label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[14px] items-center relative w-[158.9px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">Staff Registration System</p>
      </div>
    </div>
  );
}

function PrimitiveLabel1() {
  return (
    <div className="h-[14px] relative shrink-0 w-[112.438px]" data-name="Primitive.label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[14px] items-center relative w-[112.438px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">Last Employee ID:</p>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] h-[32px] relative rounded-[4px] shrink-0 w-[24.625px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[32px] relative w-[24.625px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-[8px] not-italic text-[16px] text-nowrap text-white top-[1.8px] whitespace-pre">5</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[#0022ff] h-[32px] relative rounded-[8px] shrink-0 w-[145.062px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[32px] items-center relative w-[145.062px]">
        <PrimitiveLabel1 />
        <Text />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-gradient-to-r from-[#0022ff] h-[64px] relative rounded-tl-[10px] rounded-tr-[10px] shrink-0 to-[#ffffff] w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[64px] items-center justify-between px-[16px] py-0 relative w-full">
          <PrimitiveLabel />
          <Container />
        </div>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[8.8px] size-[16px] top-[6.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p32887f80} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p36436880} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p188b8380} id="Vector_3" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3694d280} id="Vector_4" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function PrimitiveButton() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.2)] h-[29px] left-[3px] rounded-[14px] top-[3.5px] w-[117.888px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Icon />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[32.8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[3.3px] whitespace-pre">Staff Details</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[8.8px] size-[16px] top-[6.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M8 4.66667V14" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p8c8fb00} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function PrimitiveButton1() {
  return (
    <div className="absolute bg-white h-[29px] left-[120.89px] rounded-[14px] top-[3.5px] w-[135.613px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Icon1 />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[32.8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[3.3px] whitespace-pre">Subject Details</p>
    </div>
  );
}

function TabList() {
  return (
    <div className="bg-[#ececf0] h-[36px] relative rounded-[14px] shrink-0 w-[259.5px]" data-name="Tab List">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[36px] relative w-[259.5px]">
        <PrimitiveButton />
        <PrimitiveButton1 />
      </div>
    </div>
  );
}

function PrimitiveLabel2() {
  return (
    <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">EmpID</p>
    </div>
  );
}

function StaffDetailsForm() {
  return (
    <div className="h-[20px] relative shrink-0 w-[7.55px]" data-name="StaffDetailsForm">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[7.55px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-1.2px] whitespace-pre">0</p>
      </div>
    </div>
  );
}

function Icon2() {
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
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[36px] items-center justify-between px-[13px] py-px relative w-full">
          <StaffDetailsForm />
          <Icon2 />
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[58px] items-start left-0 top-0 w-[132.225px]" data-name="Container">
      <PrimitiveLabel2 />
      <PrimitiveButton2 />
    </div>
  );
}

function PrimitiveLabel3() {
  return (
    <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Name</p>
    </div>
  );
}

function UpArrowSvgrepoCom() {
  return <div className="size-[10px]" data-name="up-arrow_svgrepo.com" />;
}

function Frame() {
  return (
    <div className="absolute left-[107px] size-[16px] top-[12px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d={svgPaths.pb7adf00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame156() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-[133px]">
      <div className="h-[36px] overflow-clip relative rounded-[inherit] w-[133px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[21px] left-[11px] not-italic text-[14px] text-black text-nowrap top-[calc(50%-11px)] whitespace-pre">{`select name... `}</p>
        <div className="absolute flex items-center justify-center left-[113px] size-[10px] top-[8px]">
          <div className="flex-none rotate-[180deg]">
            <UpArrowSvgrepoCom />
          </div>
        </div>
        <Frame />
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[58px] items-start left-[148.22px] top-0 w-[132.225px]" data-name="Container">
      <PrimitiveLabel3 />
      <Frame156 />
    </div>
  );
}

function PrimitiveLabel4() {
  return (
    <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Academic Year</p>
    </div>
  );
}

function StaffDetailsForm1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[65.975px]" data-name="StaffDetailsForm">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[65.975px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-1.2px] whitespace-pre">2025-2026</p>
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

function PrimitiveButton3() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[36px] items-center justify-between px-[13px] py-px relative w-full">
          <StaffDetailsForm1 />
          <Icon3 />
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[58px] items-start left-[296.45px] top-0 w-[132.225px]" data-name="Container">
      <PrimitiveLabel4 />
      <PrimitiveButton3 />
    </div>
  );
}

function PrimitiveLabel5() {
  return (
    <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">SemType</p>
    </div>
  );
}

function StaffDetailsForm2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[36.688px]" data-name="StaffDetailsForm">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[36.688px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-1.2px] whitespace-pre">Select</p>
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

function PrimitiveButton4() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[36px] items-center justify-between px-[13px] py-px relative w-full">
          <StaffDetailsForm2 />
          <Icon4 />
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[58px] items-start left-[444.68px] top-0 w-[132.238px]" data-name="Container">
      <PrimitiveLabel5 />
      <PrimitiveButton4 />
    </div>
  );
}

function PrimitiveLabel6() {
  return (
    <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Department</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute left-[228px] size-[16px] top-[10px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d={svgPaths.pb7adf00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame162() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-[132px]">
      <div className="h-[36px] overflow-clip relative rounded-[inherit] w-[132px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[21px] left-[11px] not-italic text-[14px] text-black text-nowrap top-[calc(50%-11px)] whitespace-pre">select...</p>
        <Frame1 />
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[58px] items-start left-[592.91px] top-0 w-[132.225px]" data-name="Container">
      <PrimitiveLabel6 />
      <Frame162 />
    </div>
  );
}

function PrimitiveLabel7() {
  return (
    <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Sem</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute left-[187px] size-[20px] top-[15px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p7b68400} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute left-[101px] size-[16px] top-[11px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d={svgPaths.pb7adf00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame160() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-[132px]">
      <div className="h-[36px] overflow-clip relative rounded-[inherit] w-[132px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[21px] left-[11px] not-italic text-[14px] text-black text-nowrap top-[calc(50%-11px)] whitespace-pre">sem</p>
        <Frame2 />
        <Frame3 />
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[58px] items-start left-[741.14px] top-0 w-[132.225px]" data-name="Container">
      <PrimitiveLabel7 />
      <Frame160 />
    </div>
  );
}

function PrimitiveLabel8() {
  return (
    <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Regl.</p>
    </div>
  );
}

function StaffDetailsForm3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[9.037px]" data-name="StaffDetailsForm">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[9.037px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-1.2px] whitespace-pre">A</p>
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

function PrimitiveButton5() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[36px] items-center justify-between px-[13px] py-px relative w-full">
          <StaffDetailsForm3 />
          <Icon5 />
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[58px] items-start left-[889.36px] top-0 w-[132.238px]" data-name="Container">
      <PrimitiveLabel8 />
      <PrimitiveButton5 />
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[58px] relative shrink-0 w-full" data-name="Container">
      <Container2 />
      <Container3 />
      <Container4 />
      <Container5 />
      <Container6 />
      <Container7 />
      <Container8 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[1021.6px]" data-name="Heading 3">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[-2.2px] whitespace-pre">Subject Details</p>
    </div>
  );
}

function PrimitiveLabel9() {
  return (
    <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-[89px]" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Subject1</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="basis-0 grow h-[58px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[8px] h-[58px] items-start relative w-full">
        <PrimitiveLabel9 />
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute left-[362px] size-[16px] top-[10px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d={svgPaths.pb7adf00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame158() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-[395px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[36px] overflow-clip relative rounded-[inherit] w-[395px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[21px] left-[24px] not-italic text-[14px] text-black text-nowrap top-[calc(50%-10px)] whitespace-pre">select1</p>
        <Frame4 />
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-[96px]" data-name="Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[36px] items-center overflow-clip px-[12px] py-[4px] relative rounded-[inherit] w-[96px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Code</p>
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[58px] items-end left-[0.2px] top-0 w-[503px]" data-name="Container">
      <Container10 />
      <Frame158 />
      <Input />
    </div>
  );
}

function PrimitiveLabel10() {
  return (
    <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Subject2</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="basis-0 grow h-[58px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[8px] h-[58px] items-start relative w-full">
        <PrimitiveLabel10 />
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute left-[362px] size-[16px] top-[10px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d={svgPaths.pb7adf00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame159() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-[395px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[36px] overflow-clip relative rounded-[inherit] w-[395px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[21px] left-[24px] not-italic text-[14px] text-black text-nowrap top-[calc(50%-10px)] whitespace-pre">select2</p>
        <Frame5 />
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-[96px]" data-name="Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[36px] items-center overflow-clip px-[12px] py-[4px] relative rounded-[inherit] w-[96px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Code</p>
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[58px] items-end left-[518.8px] top-0 w-[502.8px]" data-name="Container">
      <Container12 />
      <Frame159 />
      <Input1 />
    </div>
  );
}

function PrimitiveLabel11() {
  return (
    <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Subject3</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="basis-0 grow h-[58px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[8px] h-[58px] items-start relative w-full">
        <PrimitiveLabel11 />
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute left-[362px] size-[16px] top-[10px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d={svgPaths.pb7adf00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame164() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-[395px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[36px] overflow-clip relative rounded-[inherit] w-[395px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[21px] left-[24px] not-italic text-[14px] text-black text-nowrap top-[calc(50%-10px)] whitespace-pre">select3</p>
        <Frame6 />
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Input2() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-[96px]" data-name="Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[36px] items-center overflow-clip px-[12px] py-[4px] relative rounded-[inherit] w-[96px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Code</p>
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[58px] items-end left-0 top-[74px] w-[502.8px]" data-name="Container">
      <Container14 />
      <Frame164 />
      <Input2 />
    </div>
  );
}

function PrimitiveLabel12() {
  return (
    <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Subject4</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="basis-0 grow h-[58px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[8px] h-[58px] items-start relative w-full">
        <PrimitiveLabel12 />
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute left-[362px] size-[16px] top-[10px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d={svgPaths.pb7adf00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame161() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-[395px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[36px] overflow-clip relative rounded-[inherit] w-[395px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[21px] left-[24px] not-italic text-[14px] text-black text-nowrap top-[calc(50%-10px)] whitespace-pre">select4</p>
        <Frame7 />
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Input3() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-[96px]" data-name="Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[36px] items-center overflow-clip px-[12px] py-[4px] relative rounded-[inherit] w-[96px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Code</p>
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[58px] items-end left-[518.8px] top-[74px] w-[502.8px]" data-name="Container">
      <Container16 />
      <Frame161 />
      <Input3 />
    </div>
  );
}

function PrimitiveLabel13() {
  return (
    <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Subject5</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="basis-0 grow h-[58px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[8px] h-[58px] items-start relative w-full">
        <PrimitiveLabel13 />
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute left-[362px] size-[16px] top-[10px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d={svgPaths.pb7adf00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame165() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-[395px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[36px] overflow-clip relative rounded-[inherit] w-[395px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[21px] left-[24px] not-italic text-[14px] text-black text-nowrap top-[calc(50%-10px)] whitespace-pre">select5</p>
        <Frame8 />
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Input4() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-[96px]" data-name="Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[36px] items-center overflow-clip px-[12px] py-[4px] relative rounded-[inherit] w-[96px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Code</p>
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[58px] items-end left-0 top-[148px] w-[502.8px]" data-name="Container">
      <Container18 />
      <Frame165 />
      <Input4 />
    </div>
  );
}

function PrimitiveLabel14() {
  return (
    <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Subject6</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="basis-0 grow h-[58px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[8px] h-[58px] items-start relative w-full">
        <PrimitiveLabel14 />
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute left-[362px] size-[16px] top-[10px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d={svgPaths.pb7adf00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame163() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-[395px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[36px] overflow-clip relative rounded-[inherit] w-[395px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[21px] left-[24px] not-italic text-[14px] text-black text-nowrap top-[calc(50%-10px)] whitespace-pre">select6</p>
        <Frame9 />
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Input5() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-[96px]" data-name="Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[36px] items-center overflow-clip px-[12px] py-[4px] relative rounded-[inherit] w-[96px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Code</p>
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[58px] items-end left-[518.8px] top-[148px] w-[502.8px]" data-name="Container">
      <Container20 />
      <Frame163 />
      <Input5 />
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute h-[206px] left-0 top-[40px] w-[1021.6px]" data-name="Container">
      <Container11 />
      <Container13 />
      <Container15 />
      <Container17 />
      <Container19 />
      <Container21 />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#4a5565] box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center left-[928.25px] px-[24px] py-[8px] rounded-[8px] top-[278px] w-[93.35px]" data-name="Button">
      <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">Submit</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[314px] relative shrink-0 w-full" data-name="Container">
      <Heading3 />
      <Container22 />
      <Button />
    </div>
  );
}

function Container24() {
  return (
    <div className="bg-white h-[444px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_4px_40px_0px_rgba(9,0,255,0.25)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] h-[444px] items-start pb-0 pt-[24px] px-[24px] relative w-full">
          <Container9 />
          <Container23 />
        </div>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="absolute left-[486px] size-[48px] top-[48px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Icon">
          <path d="M24 14V42" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d={svgPaths.p3ac4a400} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[24px] left-0 top-[112px] w-[1020px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-[510.39px] not-italic text-[#99a1af] text-[16px] text-center text-nowrap top-[-2.2px] translate-x-[-50%] whitespace-pre">Subject assignment results will be displayed here</p>
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[184px] relative shrink-0 w-full" data-name="Container">
      <Icon6 />
      <Paragraph />
    </div>
  );
}

function Container26() {
  return (
    <div className="bg-white h-[300px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.8px] border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[300px] items-start pb-[0.8px] pt-[24.8px] px-[24.8px] relative w-full">
          <Container25 />
        </div>
      </div>
    </div>
  );
}

function StaffDetailsForm4() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[1069.6px]" data-name="StaffDetailsForm">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[24px] h-full items-start relative w-[1069.6px]">
        <Container24 />
        <Container26 />
      </div>
    </div>
  );
}

function PrimitiveDiv() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] h-[844px] items-start relative shrink-0 w-full" data-name="Primitive.div">
      <TabList />
      <StaffDetailsForm4 />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-[117.225px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center px-[32.8px] py-[8.8px] relative w-[117.225px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">CANCEL</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#00a63e] h-[36px] relative rounded-[8px] shrink-0 w-[115.238px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center px-[32px] py-[8px] relative w-[115.238px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">UPDATE</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#4a5565] h-[36px] relative rounded-[8px] shrink-0 w-[114.675px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center px-[32px] py-[8px] relative w-[114.675px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">SUBMIT</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex gap-[16px] h-[36px] items-start justify-end relative shrink-0 w-full" data-name="Container">
      <Button1 />
      <Button2 />
      <Button3 />
    </div>
  );
}

function StaffDetailsForm5() {
  return (
    <div className="box-border content-stretch flex flex-col h-[60.8px] items-start pb-0 pt-[24.8px] px-0 relative shrink-0 w-full" data-name="StaffDetailsForm">
      <div aria-hidden="true" className="absolute border-[0.8px_0px_0px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <Container27 />
    </div>
  );
}

function CardContent() {
  return (
    <div className="h-[984.8px] relative shrink-0 w-[1117.6px]" data-name="CardContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[32px] h-[984.8px] items-start pb-0 pt-[24px] px-[24px] relative w-[1117.6px]">
        <PrimitiveDiv />
        <StaffDetailsForm5 />
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="bg-white h-[985.6px] relative rounded-bl-[14px] rounded-br-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-bl-[14px] rounded-br-[14px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[985.6px] items-start pb-[0.8px] pt-0 px-[0.8px] relative w-full">
          <CardContent />
        </div>
      </div>
    </div>
  );
}

function StaffDetailsForm6() {
  return (
    <div className="bg-gray-100 content-stretch flex flex-col h-[1049.6px] items-start relative shrink-0 w-full" data-name="StaffDetailsForm">
      <Container1 />
      <Card />
    </div>
  );
}

function App() {
  return (
    <div className="bg-gray-100 h-[1081.6px] relative shrink-0 w-full" data-name="App">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[1081.6px] items-start pb-0 pt-[16px] px-[16px] relative w-full">
          <StaffDetailsForm6 />
        </div>
      </div>
    </div>
  );
}

export default function SubjectDetails() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="subject details">
      <App />
    </div>
  );
}