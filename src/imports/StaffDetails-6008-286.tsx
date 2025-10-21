import svgPaths from "./svg-wyrugmu15z";

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
        <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">{` Last Employee ID:`}</p>
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
    <div className="bg-[#0022ff] h-[32px] relative rounded-[8px] shrink-0 w-[151px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[11px] h-[32px] items-center relative w-[151px]">
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
    <div className="absolute bg-white h-[29px] left-[3px] rounded-[14px] top-[3.5px] w-[117.888px]" data-name="Primitive.button">
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
    <div className="absolute h-[29px] left-[120.89px] rounded-[14px] top-[3.5px] w-[135.613px]" data-name="Primitive.button">
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

function StaffDetailsForm() {
  return (
    <div className="absolute h-[14px] left-[55.21px] top-0 w-[6.088px]" data-name="StaffDetailsForm">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[14px] left-0 not-italic text-[#fb2c36] text-[14px] text-nowrap top-[-1.4px] whitespace-pre">*</p>
    </div>
  );
}

function PrimitiveLabel2() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[14px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-1.4px] whitespace-pre">Staff ID</p>
      <StaffDetailsForm />
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[#f3f3f5] h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[36px] items-center px-[12px] py-[4px] relative w-full">
          <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">TT5</p>
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[58px] items-start left-0 top-0 w-[339.2px]" data-name="Container">
      <PrimitiveLabel2 />
      <Input />
    </div>
  );
}

function StaffDetailsForm1() {
  return (
    <div className="absolute h-[14px] left-[45.89px] top-0 w-[6.088px]" data-name="StaffDetailsForm">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[14px] left-0 not-italic text-[#fb2c36] text-[14px] text-nowrap top-[-1.4px] whitespace-pre">*</p>
    </div>
  );
}

function PrimitiveLabel3() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[14px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-1.4px] whitespace-pre">Name</p>
      <StaffDetailsForm1 />
    </div>
  );
}

function Input1() {
  return <div className="bg-[#f3f3f5] h-[36px] rounded-[8px] shrink-0 w-full" data-name="Input" />;
}

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[58px] items-start left-[363.2px] top-0 w-[339.2px]" data-name="Container">
      <PrimitiveLabel3 />
      <Input1 />
    </div>
  );
}

function StaffDetailsForm2() {
  return (
    <div className="absolute h-[14px] left-[84.34px] top-0 w-[6.088px]" data-name="StaffDetailsForm">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[14px] left-0 not-italic text-[#fb2c36] text-[14px] text-nowrap top-[-1.4px] whitespace-pre">*</p>
    </div>
  );
}

function PrimitiveLabel4() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[14px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-1.4px] whitespace-pre">Designation</p>
      <StaffDetailsForm2 />
    </div>
  );
}

function Input2() {
  return <div className="bg-[#f3f3f5] h-[36px] rounded-[8px] shrink-0 w-full" data-name="Input" />;
}

function Container4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[58px] items-start left-0 top-[82px] w-[339.2px]" data-name="Container">
      <PrimitiveLabel4 />
      <Input2 />
    </div>
  );
}

function StaffDetailsForm3() {
  return (
    <div className="absolute h-[14px] left-[89px] top-0 w-[6.088px]" data-name="StaffDetailsForm">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[14px] left-0 not-italic text-[#fb2c36] text-[14px] text-nowrap top-[-1.4px] whitespace-pre">*</p>
    </div>
  );
}

function PrimitiveLabel5() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[14px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-1.4px] whitespace-pre">Qualification</p>
      <StaffDetailsForm3 />
    </div>
  );
}

function Input3() {
  return <div className="bg-[#f3f3f5] h-[36px] rounded-[8px] shrink-0 w-full" data-name="Input" />;
}

function Container5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[58px] items-start left-[363.2px] top-[82px] w-[339.2px]" data-name="Container">
      <PrimitiveLabel5 />
      <Input3 />
    </div>
  );
}

function StaffDetailsForm4() {
  return (
    <div className="absolute h-[14px] left-[66.08px] top-0 w-[6.088px]" data-name="StaffDetailsForm">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[14px] left-0 not-italic text-[#fb2c36] text-[14px] text-nowrap top-[-1.4px] whitespace-pre">*</p>
    </div>
  );
}

function PrimitiveLabel6() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[14px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-1.4px] whitespace-pre">Category</p>
      <StaffDetailsForm4 />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute left-[311px] size-[16px] top-[12px]" data-name="Frame">
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
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-[339px]">
      <div className="h-[36px] overflow-clip relative rounded-[inherit] w-[339px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[21px] left-[11px] not-italic text-[14px] text-black text-nowrap top-[calc(50%-11px)] whitespace-pre">select</p>
        <Frame />
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[58px] items-start left-0 top-[164px] w-[339.2px]" data-name="Container">
      <PrimitiveLabel6 />
      <Frame162 />
    </div>
  );
}

function PrimitiveLabel7() {
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

function Frame161() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-[255px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[36px] overflow-clip relative rounded-[inherit] w-[255px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[21px] left-[11px] not-italic text-[14px] text-black text-nowrap top-[calc(50%-11px)] whitespace-pre">select...</p>
        <Frame1 />
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Input4() {
  return (
    <div className="bg-[#f3f3f5] h-[36px] relative rounded-[8px] shrink-0 w-[76.662px]" data-name="Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[36px] items-center overflow-clip px-[12px] py-[4px] relative rounded-[inherit] w-[76.662px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">5010</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Frame161 />
      <Input4 />
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[58px] items-start left-[363.2px] top-[164px] w-[339.2px]" data-name="Container">
      <PrimitiveLabel7 />
      <Container7 />
    </div>
  );
}

function StaffDetailsForm5() {
  return (
    <div className="absolute h-[14px] left-[37.09px] top-0 w-[6.088px]" data-name="StaffDetailsForm">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[14px] left-0 not-italic text-[#fb2c36] text-[14px] text-nowrap top-[-1.4px] whitespace-pre">*</p>
    </div>
  );
}

function PrimitiveLabel8() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[14px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-1.4px] whitespace-pre">DOB</p>
      <StaffDetailsForm5 />
    </div>
  );
}

function Input5() {
  return (
    <div className="absolute bg-[#f3f3f5] box-border content-stretch flex h-[36px] items-center left-0 overflow-clip pl-[12px] pr-[40px] py-[4px] rounded-[8px] top-0 w-[339.2px]" data-name="Input">
      <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">04/Oct/2025</p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-[311.2px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M5.33333 1.33333V4" id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 1.33333V4" id="Vector_2" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3ee34580} id="Vector_3" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 6.66667H14" id="Vector_4" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Container">
      <Input5 />
      <Icon2 />
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[58px] items-start left-0 top-[246px] w-[339.2px]" data-name="Container">
      <PrimitiveLabel8 />
      <Container9 />
    </div>
  );
}

function StaffDetailsForm6() {
  return (
    <div className="absolute h-[14px] left-[57.24px] top-0 w-[6.088px]" data-name="StaffDetailsForm">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[14px] left-0 not-italic text-[#fb2c36] text-[14px] text-nowrap top-[-1.4px] whitespace-pre">*</p>
    </div>
  );
}

function PrimitiveLabel9() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[14px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-1.4px] whitespace-pre">Contact</p>
      <StaffDetailsForm6 />
    </div>
  );
}

function Input6() {
  return <div className="bg-[#f3f3f5] h-[36px] rounded-[8px] shrink-0 w-full" data-name="Input" />;
}

function Container11() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[58px] items-start left-[363.2px] top-[246px] w-[339.2px]" data-name="Container">
      <PrimitiveLabel9 />
      <Input6 />
    </div>
  );
}

function StaffDetailsForm7() {
  return (
    <div className="absolute h-[14px] left-[59.73px] top-0 w-[6.088px]" data-name="StaffDetailsForm">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[14px] left-0 not-italic text-[#fb2c36] text-[14px] text-nowrap top-[-1.4px] whitespace-pre">*</p>
    </div>
  );
}

function PrimitiveLabel10() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[14px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-1.4px] whitespace-pre">Religion</p>
      <StaffDetailsForm7 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute left-[311px] size-[16px] top-[12px]" data-name="Frame">
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
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-[339px]">
      <div className="h-[36px] overflow-clip relative rounded-[inherit] w-[339px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[21px] left-[11px] not-italic text-[14px] text-black text-nowrap top-[calc(50%-11px)] whitespace-pre">select...</p>
        <Frame2 />
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[58px] items-start left-0 top-[328px] w-[339.2px]" data-name="Container">
      <PrimitiveLabel10 />
      <Frame163 />
    </div>
  );
}

function StaffDetailsForm8() {
  return (
    <div className="absolute h-[14px] left-[42.27px] top-0 w-[6.088px]" data-name="StaffDetailsForm">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[14px] left-0 not-italic text-[#fb2c36] text-[14px] text-nowrap top-[-1.4px] whitespace-pre">*</p>
    </div>
  );
}

function PrimitiveLabel11() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[14px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-1.4px] whitespace-pre">Email</p>
      <StaffDetailsForm8 />
    </div>
  );
}

function Input7() {
  return <div className="bg-[#f3f3f5] h-[36px] rounded-[8px] shrink-0 w-full" data-name="Input" />;
}

function Container13() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[58px] items-start left-[363.2px] top-[328px] w-[339.2px]" data-name="Container">
      <PrimitiveLabel11 />
      <Input7 />
    </div>
  );
}

function PrimitiveLabel12() {
  return (
    <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Gender</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute left-[311px] size-[16px] top-[12px]" data-name="Frame">
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
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-[339px]">
      <div className="h-[36px] overflow-clip relative rounded-[inherit] w-[339px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[21px] left-[11px] not-italic text-[14px] text-black text-nowrap top-[calc(50%-11px)] whitespace-pre">select...</p>
        <Frame3 />
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[58px] items-start left-0 top-[410px] w-[339.2px]" data-name="Container">
      <PrimitiveLabel12 />
      <Frame165 />
    </div>
  );
}

function PrimitiveLabel13() {
  return (
    <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">BasicPay</p>
    </div>
  );
}

function Input8() {
  return (
    <div className="bg-[#f3f3f5] h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[36px] items-center px-[12px] py-[4px] relative w-full">
          <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">0</p>
        </div>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[58px] items-start left-[363.2px] top-[410px] w-[339.2px]" data-name="Container">
      <PrimitiveLabel13 />
      <Input8 />
    </div>
  );
}

function PrimitiveLabel14() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">PF</p>
    </div>
  );
}

function Input9() {
  return (
    <div className="bg-[#f3f3f5] h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[36px] items-center px-[12px] py-[4px] relative w-full">
          <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">0</p>
        </div>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[58px] items-start left-0 top-[492px] w-[339.2px]" data-name="Container">
      <PrimitiveLabel14 />
      <Input9 />
    </div>
  );
}

function PrimitiveLabel15() {
  return (
    <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">JDATE</p>
    </div>
  );
}

function Input10() {
  return (
    <div className="absolute bg-[#f3f3f5] box-border content-stretch flex h-[36px] items-center left-0 overflow-clip pl-[12px] pr-[40px] py-[4px] rounded-[8px] top-0 w-[339.2px]" data-name="Input">
      <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">04/Oct/2025</p>
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-[311.2px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M5.33333 1.33333V4" id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 1.33333V4" id="Vector_2" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3ee34580} id="Vector_3" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 6.66667H14" id="Vector_4" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Container">
      <Input10 />
      <Icon3 />
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[58px] items-start left-[363.2px] top-[492px] w-[339.2px]" data-name="Container">
      <PrimitiveLabel15 />
      <Container17 />
    </div>
  );
}

function PrimitiveLabel16() {
  return (
    <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">RDATE</p>
    </div>
  );
}

function Input11() {
  return (
    <div className="absolute bg-[#f3f3f5] box-border content-stretch flex h-[36px] items-center left-0 overflow-clip pl-[12px] pr-[40px] py-[4px] rounded-[8px] top-0 w-[339.2px]" data-name="Input">
      <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">04/Oct/2025</p>
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute left-[311.2px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M5.33333 1.33333V4" id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 1.33333V4" id="Vector_2" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3ee34580} id="Vector_3" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 6.66667H14" id="Vector_4" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Container">
      <Input11 />
      <Icon4 />
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[58px] items-start left-0 top-[574px] w-[339.2px]" data-name="Container">
      <PrimitiveLabel16 />
      <Container19 />
    </div>
  );
}

function PrimitiveLabel17() {
  return (
    <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">AcNumber</p>
    </div>
  );
}

function Input12() {
  return <div className="bg-[#f3f3f5] h-[36px] rounded-[8px] shrink-0 w-full" data-name="Input" />;
}

function Container21() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[58px] items-start left-[363.2px] top-[574px] w-[339.2px]" data-name="Container">
      <PrimitiveLabel17 />
      <Input12 />
    </div>
  );
}

function PrimitiveLabel18() {
  return (
    <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">BankName</p>
    </div>
  );
}

function Input13() {
  return <div className="bg-[#f3f3f5] h-[36px] rounded-[8px] shrink-0 w-full" data-name="Input" />;
}

function Container22() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[58px] items-start left-0 top-[656px] w-[339.2px]" data-name="Container">
      <PrimitiveLabel18 />
      <Input13 />
    </div>
  );
}

function StaffDetailsForm9() {
  return (
    <div className="absolute h-[14px] left-[58.31px] top-0 w-[6.088px]" data-name="StaffDetailsForm">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[14px] left-0 not-italic text-[#fb2c36] text-[14px] text-nowrap top-[-1.4px] whitespace-pre">*</p>
    </div>
  );
}

function PrimitiveLabel19() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[14px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-1.4px] whitespace-pre">PAN No</p>
      <StaffDetailsForm9 />
    </div>
  );
}

function Input14() {
  return <div className="bg-[#f3f3f5] h-[36px] rounded-[8px] shrink-0 w-full" data-name="Input" />;
}

function Container23() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[58px] items-start left-[363.2px] top-[656px] w-[339.2px]" data-name="Container">
      <PrimitiveLabel19 />
      <Input14 />
    </div>
  );
}

function StaffDetailsForm10() {
  return (
    <div className="absolute h-[14px] left-[131.04px] top-0 w-[6.088px]" data-name="StaffDetailsForm">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[14px] left-0 not-italic text-[#fb2c36] text-[14px] text-nowrap top-[-1.4px] whitespace-pre">*</p>
    </div>
  );
}

function PrimitiveLabel20() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[14px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-1.4px] whitespace-pre">Temporary Address</p>
      <StaffDetailsForm10 />
    </div>
  );
}

function Input15() {
  return <div className="bg-[#f3f3f5] h-[36px] rounded-[8px] shrink-0 w-full" data-name="Input" />;
}

function Container24() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[58px] items-start left-0 top-[738px] w-[339.2px]" data-name="Container">
      <PrimitiveLabel20 />
      <Input15 />
    </div>
  );
}

function StaffDetailsForm11() {
  return (
    <div className="absolute h-[14px] left-[82.04px] top-0 w-[6.088px]" data-name="StaffDetailsForm">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[14px] left-0 not-italic text-[#fb2c36] text-[14px] text-nowrap top-[-1.4px] whitespace-pre">*</p>
    </div>
  );
}

function PrimitiveLabel21() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[14px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-1.4px] whitespace-pre">Community</p>
      <StaffDetailsForm11 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute left-[311px] size-[16px] top-[12px]" data-name="Frame">
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
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-[339px]">
      <div className="h-[36px] overflow-clip relative rounded-[inherit] w-[339px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[21px] left-[11px] not-italic text-[14px] text-black text-nowrap top-[calc(50%-11px)] whitespace-pre">Select...</p>
        <Frame4 />
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[58px] items-start left-[363.2px] top-[738px] w-[339.2px]" data-name="Container">
      <PrimitiveLabel21 />
      <Frame164 />
    </div>
  );
}

function StaffDetailsForm12() {
  return (
    <div className="absolute h-[14px] left-[69.42px] top-0 w-[6.088px]" data-name="StaffDetailsForm">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[14px] left-0 not-italic text-[#fb2c36] text-[14px] text-nowrap top-[-1.4px] whitespace-pre">*</p>
    </div>
  );
}

function PrimitiveLabel22() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[14px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-1.4px] whitespace-pre">Adhar No</p>
      <StaffDetailsForm12 />
    </div>
  );
}

function Input16() {
  return <div className="bg-[#f3f3f5] h-[36px] rounded-[8px] shrink-0 w-full" data-name="Input" />;
}

function Container26() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[58px] items-start left-0 top-[820px] w-[339.2px]" data-name="Container">
      <PrimitiveLabel22 />
      <Input16 />
    </div>
  );
}

function StaffDetailsForm13() {
  return (
    <div className="absolute h-[14px] left-[73.22px] top-0 w-[6.088px]" data-name="StaffDetailsForm">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[14px] left-0 not-italic text-[#fb2c36] text-[14px] text-nowrap top-[-1.4px] whitespace-pre">*</p>
    </div>
  );
}

function PrimitiveLabel23() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[14px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-1.4px] whitespace-pre">Certificate</p>
      <StaffDetailsForm13 />
    </div>
  );
}

function Input17() {
  return <div className="bg-[#f3f3f5] h-[36px] rounded-[8px] shrink-0 w-full" data-name="Input" />;
}

function Container27() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[58px] items-start left-[363.2px] top-[820px] w-[339.2px]" data-name="Container">
      <PrimitiveLabel23 />
      <Input17 />
    </div>
  );
}

function PrimitiveLabel24() {
  return (
    <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Others</p>
    </div>
  );
}

function Input18() {
  return <div className="bg-[#f3f3f5] h-[36px] rounded-[8px] shrink-0 w-full" data-name="Input" />;
}

function Container28() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[58px] items-start left-0 top-[902px] w-[339.2px]" data-name="Container">
      <PrimitiveLabel24 />
      <Input18 />
    </div>
  );
}

function StaffDetailsForm14() {
  return (
    <div className="absolute h-[14px] left-[42.46px] top-0 w-[6.088px]" data-name="StaffDetailsForm">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[14px] left-0 not-italic text-[#fb2c36] text-[14px] text-nowrap top-[-1.4px] whitespace-pre">*</p>
    </div>
  );
}

function PrimitiveLabel25() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[14px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-1.4px] whitespace-pre">Caste</p>
      <StaffDetailsForm14 />
    </div>
  );
}

function Input19() {
  return <div className="bg-[#f3f3f5] h-[36px] rounded-[8px] shrink-0 w-full" data-name="Input" />;
}

function Container29() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[58px] items-start left-[363.2px] top-[902px] w-[339.2px]" data-name="Container">
      <PrimitiveLabel25 />
      <Input19 />
    </div>
  );
}

function Container30() {
  return (
    <div className="h-[960px] relative shrink-0 w-full" data-name="Container">
      <Container2 />
      <Container3 />
      <Container4 />
      <Container5 />
      <Container6 />
      <Container8 />
      <Container10 />
      <Container11 />
      <Container12 />
      <Container13 />
      <Container14 />
      <Container15 />
      <Container16 />
      <Container18 />
      <Container20 />
      <Container21 />
      <Container22 />
      <Container23 />
      <Container24 />
      <Container25 />
      <Container26 />
      <Container27 />
      <Container28 />
      <Container29 />
    </div>
  );
}

function PrimitiveButton2() {
  return (
    <div className="bg-[#f3f3f5] relative rounded-[4px] shrink-0 size-[16px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[16px]" />
    </div>
  );
}

function PrimitiveLabel26() {
  return (
    <div className="h-[20px] relative shrink-0 w-[178.85px]" data-name="Primitive.label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[20px] items-center relative w-[178.85px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Same as Temporary Address</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <PrimitiveButton2 />
      <PrimitiveLabel26 />
    </div>
  );
}

function PrimitiveLabel27() {
  return (
    <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">PermanentAddress</p>
    </div>
  );
}

function Input20() {
  return <div className="bg-[#f3f3f5] h-[36px] rounded-[8px] shrink-0 w-full" data-name="Input" />;
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[86px] items-start relative shrink-0 w-full" data-name="Container">
      <Container31 />
      <PrimitiveLabel27 />
      <Input20 />
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[1070px] items-start left-[-1.8px] top-[2px] w-[702.4px]" data-name="Container">
      <Container30 />
      <Container32 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="h-[32px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[37.5%] left-1/2 right-1/2 top-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-8.33%_-1.33px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 20">
            <path d="M2 2V18" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%_29.17%_66.67%_29.17%]" data-name="Vector">
        <div className="absolute inset-[-20%_-10%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 10">
            <path d={svgPaths.p31a426c0} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[62.5%_12.5%_12.5%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 12">
            <path d={svgPaths.p1adc3400} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="bg-gray-200 h-[80px] relative rounded-[2.68435e+07px] shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[80px] items-start pb-0 pt-[24px] px-[24px] relative w-full">
          <Icon5 />
        </div>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="bg-gray-50 h-[115.2px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[1.6px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[115.2px] items-start pb-[1.6px] pt-[17.6px] px-[127.6px] relative w-full">
          <Container34 />
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#0022ff] h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[139.59px] not-italic text-[14px] text-nowrap text-white top-[6.8px] whitespace-pre">BROWSE</p>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[167.2px] items-start relative shrink-0 w-full" data-name="Container">
      <Container35 />
      <Button />
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[-2.2px] whitespace-pre">For Login</p>
    </div>
  );
}

function PrimitiveLabel28() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">User ID</p>
    </div>
  );
}

function Input21() {
  return <div className="bg-[#f3f3f5] h-[32px] rounded-[8px] shrink-0 w-full" data-name="Input" />;
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[56px] items-start relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel28 />
      <Input21 />
    </div>
  );
}

function PrimitiveLabel29() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Password</p>
    </div>
  );
}

function Input22() {
  return <div className="bg-[#f3f3f5] h-[32px] rounded-[8px] shrink-0 w-full" data-name="Input" />;
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[56px] items-start relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel29 />
      <Input22 />
    </div>
  );
}

function PrimitiveLabel30() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">User Role</p>
    </div>
  );
}

function StaffDetailsForm15() {
  return (
    <div className="h-[20px] relative shrink-0 w-[36.688px]" data-name="StaffDetailsForm">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[36.688px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-0 not-italic text-[#717182] text-[14px] text-nowrap top-[-1.2px] whitespace-pre">Select</p>
      </div>
    </div>
  );
}

function Icon6() {
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
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[36px] items-center justify-between px-[12px] py-0 relative w-full">
          <StaffDetailsForm15 />
          <Icon6 />
        </div>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[60px] items-start relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel30 />
      <PrimitiveButton3 />
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[196px] items-start relative shrink-0 w-full" data-name="Container">
      <Container37 />
      <Container38 />
      <Container39 />
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[236px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading3 />
      <Container40 />
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[1070px] items-start left-[734.4px] top-0 w-[335.2px]" data-name="Container">
      <Container36 />
      <Container41 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute left-[311px] size-[16px] top-[10px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d={svgPaths.pb7adf00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame157() {
  return (
    <div className="absolute bg-white h-[36px] left-[730.2px] rounded-[8px] top-[391px] w-[339.2px]">
      <div className="h-[36px] overflow-clip relative rounded-[inherit] w-[339.2px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[21px] left-[24px] not-italic text-[14px] text-black text-nowrap top-[calc(50%-10px)] whitespace-pre">Select Role</p>
        <Frame5 />
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function StaffDetailsForm16() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[1069.6px]" data-name="StaffDetailsForm">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[1069.6px]">
        <Container33 />
        <Container42 />
        <Frame157 />
      </div>
    </div>
  );
}

function PrimitiveDiv() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] h-[1146px] items-start relative shrink-0 w-full" data-name="Primitive.div">
      <TabList />
      <StaffDetailsForm16 />
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

function Container43() {
  return (
    <div className="content-stretch flex gap-[16px] h-[36px] items-start justify-end relative shrink-0 w-full" data-name="Container">
      <Button1 />
      <Button2 />
      <Button3 />
    </div>
  );
}

function StaffDetailsForm17() {
  return (
    <div className="box-border content-stretch flex flex-col h-[60.8px] items-start pb-0 pt-[24.8px] px-0 relative shrink-0 w-full" data-name="StaffDetailsForm">
      <div aria-hidden="true" className="absolute border-[0.8px_0px_0px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <Container43 />
    </div>
  );
}

function CardContent() {
  return (
    <div className="h-[1286.8px] relative shrink-0 w-[1117.6px]" data-name="CardContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[32px] h-[1286.8px] items-start pb-0 pt-[24px] px-[24px] relative w-[1117.6px]">
        <PrimitiveDiv />
        <StaffDetailsForm17 />
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="bg-white h-[1287.6px] relative rounded-bl-[14px] rounded-br-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-bl-[14px] rounded-br-[14px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[1287.6px] items-start pb-[0.8px] pt-0 px-[0.8px] relative w-full">
          <CardContent />
        </div>
      </div>
    </div>
  );
}

function StaffDetailsForm18() {
  return (
    <div className="bg-gray-100 content-stretch flex flex-col h-[1351.6px] items-start relative shrink-0 w-full" data-name="StaffDetailsForm">
      <Container1 />
      <Card />
    </div>
  );
}

function App() {
  return (
    <div className="bg-gray-100 box-border content-stretch flex flex-col h-[1368px] items-start pb-0 pt-[16px] px-[16px] relative shrink-0 w-[1150px]" data-name="App">
      <StaffDetailsForm18 />
    </div>
  );
}

export default function StaffDetails() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="staff details">
      <App />
    </div>
  );
}