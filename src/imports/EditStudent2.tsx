function Heading2() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[28px] left-0 not-italic text-[18px] text-nowrap text-white top-[-1.4px] whitespace-pre">Edit Student</p>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[#314158] h-[60px] relative rounded-tl-[10px] rounded-tr-[10px] shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[60px] items-start pb-0 pt-[16px] px-[16px] relative w-full">
          <Heading2 />
        </div>
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-1.2px] whitespace-pre">Filter</p>
    </div>
  );
}

function PrimitiveLabel() {
  return (
    <div className="h-[20px] relative shrink-0 w-[76.775px]" data-name="Primitive.label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[20px] items-center relative w-[76.775px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Department</p>
      </div>
    </div>
  );
}

function PrimitiveSpan() {
  return (
    <div className="h-[20px] relative shrink-0 w-[36.688px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[20px] items-center overflow-clip relative rounded-[inherit] w-[36.688px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Select</p>
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
    <div className="bg-[#f3f3f5] h-[36px] relative rounded-[8px] shrink-0 w-[128px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[36px] items-center justify-between px-[12.8px] py-[0.8px] relative w-[128px]">
        <PrimitiveSpan />
        <Icon />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[36px] relative shrink-0 w-[212.775px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[36px] items-center relative w-[212.775px]">
        <PrimitiveLabel />
        <PrimitiveButton />
      </div>
    </div>
  );
}

function PrimitiveLabel1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[27.462px]" data-name="Primitive.label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[20px] items-center relative w-[27.462px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Sem</p>
      </div>
    </div>
  );
}

function PrimitiveSpan1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[26.825px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[20px] items-center overflow-clip relative rounded-[inherit] w-[26.825px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Sem</p>
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
    <div className="bg-[#f3f3f5] h-[36px] relative rounded-[8px] shrink-0 w-[80px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[36px] items-center justify-between px-[12.8px] py-[0.8px] relative w-[80px]">
        <PrimitiveSpan1 />
        <Icon1 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[36px] relative shrink-0 w-[115.463px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[36px] items-center relative w-[115.463px]">
        <PrimitiveLabel1 />
        <PrimitiveButton1 />
      </div>
    </div>
  );
}

function PrimitiveLabel2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[21.65px]" data-name="Primitive.label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[20px] items-center relative w-[21.65px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Sec</p>
      </div>
    </div>
  );
}

function PrimitiveSpan2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[21.238px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[20px] items-center overflow-clip relative rounded-[inherit] w-[21.238px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Sec</p>
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
    <div className="bg-[#f3f3f5] h-[36px] relative rounded-[8px] shrink-0 w-[80px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[36px] items-center justify-between px-[12.8px] py-[0.8px] relative w-[80px]">
        <PrimitiveSpan2 />
        <Icon2 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[36px] relative shrink-0 w-[109.65px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[36px] items-center relative w-[109.65px]">
        <PrimitiveLabel2 />
        <PrimitiveButton2 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex gap-[16px] h-[36px] items-center relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Container2 />
      <Container3 />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[68px] items-start left-[16px] top-[16px] w-[1116.4px]" data-name="Container">
      <Heading3 />
      <Container4 />
    </div>
  );
}

function PrimitiveDiv() {
  return <div className="absolute bg-[rgba(0,0,0,0.1)] h-px left-[16px] top-[100px] w-[1116.4px]" data-name="Primitive.div" />;
}

function Heading4() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-1.2px] whitespace-pre">{`Search / Trash & Master`}</p>
    </div>
  );
}

function PrimitiveLabel3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[126.613px]" data-name="Primitive.label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[20px] items-center relative w-[126.613px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Reg No / Reg Name</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[#f3f3f5] h-[36px] relative rounded-[8px] shrink-0 w-[256px]" data-name="Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[36px] items-center overflow-clip px-[12px] py-[4px] relative rounded-[inherit] w-[256px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Enter registration number or name</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[36px] items-center left-0 top-0 w-[390.613px]" data-name="Container">
      <PrimitiveLabel3 />
      <Input />
    </div>
  );
}

function PrimitiveButton3() {
  return (
    <div className="bg-[#f3f3f5] relative rounded-[4px] shrink-0 size-[16px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[16px]" />
    </div>
  );
}

function PrimitiveLabel4() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="Primitive.label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[20px] items-center relative w-full">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Trash</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[20px] relative shrink-0 w-[57.263px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[20px] items-center relative w-[57.263px]">
        <PrimitiveButton3 />
        <PrimitiveLabel4 />
      </div>
    </div>
  );
}

function PrimitiveButton4() {
  return (
    <div className="bg-[#f3f3f5] relative rounded-[4px] shrink-0 size-[16px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[16px]" />
    </div>
  );
}

function PrimitiveLabel5() {
  return (
    <div className="h-[20px] relative shrink-0 w-[43.888px]" data-name="Primitive.label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[20px] items-center relative w-[43.888px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Master</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[20px] relative shrink-0 w-[67.888px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[20px] items-center relative w-[67.888px]">
        <PrimitiveButton4 />
        <PrimitiveLabel5 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[20px] items-center left-[406.61px] top-[8px] w-[141.15px]" data-name="Container">
      <Container7 />
      <Container8 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#155dfc] h-[36px] relative rounded-[8px] shrink-0 w-[57.875px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#193cb8] border-[1.6px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center px-[13.6px] py-[7.6px] relative w-[57.875px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">View</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#155dfc] h-[36px] relative rounded-[8px] shrink-0 w-[62.938px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#193cb8] border-[1.6px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center px-[13.6px] py-[7.6px] relative w-[62.938px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">Move</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#155dfc] h-[36px] relative rounded-[8px] shrink-0 w-[61.1px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#193cb8] border-[1.6px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center px-[13.6px] py-[7.6px] relative w-[61.1px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">Bring</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[36px] items-start left-[563.76px] top-0 w-[197.913px]" data-name="Container">
      <Button />
      <Button1 />
      <Button2 />
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Container">
      <Container6 />
      <Container9 />
      <Container10 />
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[68px] items-start left-[16px] top-[117px] w-[1116.4px]" data-name="Container">
      <Heading4 />
      <Container11 />
    </div>
  );
}

function PrimitiveDiv1() {
  return <div className="absolute bg-[rgba(0,0,0,0.1)] h-px left-[16px] top-[201px] w-[1116.4px]" data-name="Primitive.div" />;
}

function Heading5() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-1.2px] whitespace-pre">Find and Replace</p>
    </div>
  );
}

function PrimitiveLabel6() {
  return (
    <div className="h-[20px] relative shrink-0 w-[27.3px]" data-name="Primitive.label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[20px] items-center relative w-[27.3px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Find</p>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-[#f3f3f5] h-[36px] relative rounded-[8px] shrink-0 w-[192px]" data-name="Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[36px] items-center overflow-clip px-[12px] py-[4px] relative rounded-[inherit] w-[192px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Text to find</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[36px] relative shrink-0 w-[227.3px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[36px] items-center relative w-[227.3px]">
        <PrimitiveLabel6 />
        <Input1 />
      </div>
    </div>
  );
}

function PrimitiveLabel7() {
  return (
    <div className="h-[20px] relative shrink-0 w-[49.212px]" data-name="Primitive.label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[20px] items-center relative w-[49.212px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Replace</p>
      </div>
    </div>
  );
}

function Input2() {
  return (
    <div className="bg-[#f3f3f5] h-[36px] relative rounded-[8px] shrink-0 w-[192px]" data-name="Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[36px] items-center overflow-clip px-[12px] py-[4px] relative rounded-[inherit] w-[192px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Replace with</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[36px] relative shrink-0 w-[249.213px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[36px] items-center relative w-[249.213px]">
        <PrimitiveLabel7 />
        <Input2 />
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#00a63e] h-[36px] relative rounded-[8px] shrink-0 w-[73.213px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center px-[12px] py-[6px] relative w-[73.213px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">Replace</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex gap-[16px] h-[36px] items-center relative shrink-0 w-full" data-name="Container">
      <Container13 />
      <Container14 />
      <Button3 />
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[68px] items-start left-[16px] top-[218px] w-[1116.4px]" data-name="Container">
      <Heading5 />
      <Container15 />
    </div>
  );
}

function PrimitiveDiv2() {
  return <div className="absolute bg-[rgba(0,0,0,0.1)] h-px left-[16px] top-[302px] w-[1116.4px]" data-name="Primitive.div" />;
}

function Button4() {
  return (
    <div className="bg-[#6a7282] h-[36px] relative rounded-[8px] shrink-0 w-[118.963px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center px-[12px] py-[6px] relative w-[118.963px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">Personal Detail</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#00a63e] h-[36px] relative rounded-[8px] shrink-0 w-[113.963px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center px-[12px] py-[6px] relative w-[113.963px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">General Detail</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[36px] items-start left-[16px] top-[319px] w-[1116.4px]" data-name="Container">
      <Button4 />
      <Button5 />
    </div>
  );
}

function PrimitiveDiv3() {
  return <div className="absolute bg-[rgba(0,0,0,0.1)] h-px left-[16px] top-[371px] w-[1116.4px]" data-name="Primitive.div" />;
}

function Heading6() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-1.2px] whitespace-pre">Student Data</p>
    </div>
  );
}

function TableHead() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[35.1px]" data-name="TableHead">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.6px] whitespace-pre">No</p>
    </div>
  );
}

function TableHead1() {
  return (
    <div className="absolute h-[40px] left-[35.1px] top-0 w-[61.288px]" data-name="TableHead">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.6px] whitespace-pre">Appno</p>
    </div>
  );
}

function TableHead2() {
  return (
    <div className="absolute h-[40px] left-[96.39px] top-0 w-[63.712px]" data-name="TableHead">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.6px] whitespace-pre">Regno</p>
    </div>
  );
}

function TableHead3() {
  return (
    <div className="absolute h-[40px] left-[160.1px] top-0 w-[128.05px]" data-name="TableHead">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.6px] whitespace-pre">Stuname</p>
    </div>
  );
}

function TableHead4() {
  return (
    <div className="absolute h-[40px] left-[288.15px] top-0 w-[47.313px]" data-name="TableHead">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.6px] whitespace-pre">Cno</p>
    </div>
  );
}

function TableHead5() {
  return (
    <div className="absolute h-[40px] left-[335.46px] top-0 w-[59.975px]" data-name="TableHead">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.6px] whitespace-pre">Course</p>
    </div>
  );
}

function TableHead6() {
  return (
    <div className="absolute h-[40px] left-[395.44px] top-0 w-[39.675px]" data-name="TableHead">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.6px] whitespace-pre">Yno</p>
    </div>
  );
}

function TableHead7() {
  return (
    <div className="absolute h-[40px] left-[435.11px] top-0 w-[43.462px]" data-name="TableHead">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.6px] whitespace-pre">Sem</p>
    </div>
  );
}

function TableHead8() {
  return (
    <div className="absolute h-[40px] left-[478.57px] top-0 w-[56.55px]" data-name="TableHead">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.6px] whitespace-pre">Rollno</p>
    </div>
  );
}

function TableHead9() {
  return (
    <div className="absolute h-[40px] left-[535.13px] top-0 w-[82.588px]" data-name="TableHead">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.6px] whitespace-pre">DOB</p>
    </div>
  );
}

function TableHead10() {
  return (
    <div className="absolute h-[40px] left-[617.71px] top-0 w-[41.275px]" data-name="TableHead">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.6px] whitespace-pre">Age</p>
    </div>
  );
}

function TableHead11() {
  return (
    <div className="absolute h-[40px] left-[658.99px] top-0 w-[89.975px]" data-name="TableHead">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.6px] whitespace-pre">CourseType</p>
    </div>
  );
}

function TableHead12() {
  return (
    <div className="absolute h-[40px] left-[748.96px] top-0 w-[59.85px]" data-name="TableHead">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.6px] whitespace-pre">Branch</p>
    </div>
  );
}

function TableHead13() {
  return (
    <div className="absolute h-[40px] left-[808.81px] top-0 w-[121px]" data-name="TableHead">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.6px] whitespace-pre">AdmissionStatus</p>
    </div>
  );
}

function TableHead14() {
  return (
    <div className="absolute h-[40px] left-[929.81px] top-0 w-[118.312px]" data-name="TableHead">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.6px] whitespace-pre">SubmissionDate</p>
    </div>
  );
}

function TableHead15() {
  return (
    <div className="absolute h-[40px] left-[1048.12px] top-0 w-[93.588px]" data-name="TableHead">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.6px] whitespace-pre">FatherName</p>
    </div>
  );
}

function TableHead16() {
  return (
    <div className="absolute h-[40px] left-[1141.71px] top-0 w-[101.013px]" data-name="TableHead">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.6px] whitespace-pre">MotherName</p>
    </div>
  );
}

function TableHead17() {
  return (
    <div className="absolute h-[40px] left-[1242.72px] top-0 w-[89.05px]" data-name="TableHead">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.6px] whitespace-pre">Address1</p>
    </div>
  );
}

function TableRow() {
  return (
    <div className="absolute bg-gray-100 h-[40px] left-0 top-0 w-[1331.78px]" data-name="TableRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <TableHead />
      <TableHead1 />
      <TableHead2 />
      <TableHead3 />
      <TableHead4 />
      <TableHead5 />
      <TableHead6 />
      <TableHead7 />
      <TableHead8 />
      <TableHead9 />
      <TableHead10 />
      <TableHead11 />
      <TableHead12 />
      <TableHead13 />
      <TableHead14 />
      <TableHead15 />
      <TableHead16 />
      <TableHead17 />
    </div>
  );
}

function TableHeader() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[1331.78px]" data-name="TableHeader">
      <TableRow />
    </div>
  );
}

function TableCell() {
  return (
    <div className="absolute bg-[#ffd6a8] h-[36.8px] left-0 top-0 w-[35.1px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[7.2px] whitespace-pre">4</p>
    </div>
  );
}

function TableCell1() {
  return (
    <div className="absolute h-[36.8px] left-[35.1px] top-0 w-[61.288px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[7.2px] whitespace-pre">400001</p>
    </div>
  );
}

function TableCell2() {
  return (
    <div className="absolute h-[36.8px] left-[96.39px] top-0 w-[63.712px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[7.2px] whitespace-pre">REG001</p>
    </div>
  );
}

function TableCell3() {
  return (
    <div className="absolute h-[36.8px] left-[160.1px] top-0 w-[128.05px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[7.2px] whitespace-pre">ASHOK MITHREN</p>
    </div>
  );
}

function TableCell4() {
  return (
    <div className="absolute h-[36.8px] left-[288.15px] top-0 w-[47.313px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[7.2px] whitespace-pre">C001</p>
    </div>
  );
}

function TableCell5() {
  return (
    <div className="absolute h-[36.8px] left-[335.46px] top-0 w-[59.975px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[7.2px] whitespace-pre">BTECH</p>
    </div>
  );
}

function TableCell6() {
  return (
    <div className="absolute h-[36.8px] left-[395.44px] top-0 w-[39.675px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[7.2px] whitespace-pre">Y1</p>
    </div>
  );
}

function TableCell7() {
  return (
    <div className="absolute h-[36.8px] left-[435.11px] top-0 w-[43.462px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[7.2px] whitespace-pre">1</p>
    </div>
  );
}

function TableCell8() {
  return (
    <div className="absolute h-[36.8px] left-[478.57px] top-0 w-[56.55px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[7.2px] whitespace-pre">R001</p>
    </div>
  );
}

function TableCell9() {
  return (
    <div className="absolute h-[36.8px] left-[535.13px] top-0 w-[82.588px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[7.2px] whitespace-pre">15-Aug-97</p>
    </div>
  );
}

function TableCell10() {
  return (
    <div className="absolute h-[36.8px] left-[617.71px] top-0 w-[41.275px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[7.2px] whitespace-pre">26</p>
    </div>
  );
}

function TableCell11() {
  return (
    <div className="absolute h-[36.8px] left-[658.99px] top-0 w-[89.975px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[7.2px] whitespace-pre">Regular</p>
    </div>
  );
}

function TableCell12() {
  return (
    <div className="absolute h-[36.8px] left-[748.96px] top-0 w-[59.85px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[7.2px] whitespace-pre">CSE</p>
    </div>
  );
}

function TableCell13() {
  return (
    <div className="absolute h-[36.8px] left-[808.81px] top-0 w-[121px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[7.2px] whitespace-pre">Confirmed</p>
    </div>
  );
}

function TableCell14() {
  return (
    <div className="absolute h-[36.8px] left-[929.81px] top-0 w-[118.312px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[7.2px] whitespace-pre">01-Oct-25</p>
    </div>
  );
}

function TableCell15() {
  return (
    <div className="absolute h-[36.8px] left-[1048.12px] top-0 w-[93.588px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[7.2px] whitespace-pre">RAMAN</p>
    </div>
  );
}

function TableCell16() {
  return (
    <div className="absolute h-[36.8px] left-[1141.71px] top-0 w-[101.013px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[7.2px] whitespace-pre">SUJATHA</p>
    </div>
  );
}

function TableCell17() {
  return (
    <div className="absolute h-[36.8px] left-[1242.72px] top-0 w-[89.05px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[7.2px] whitespace-pre">123 Main St</p>
    </div>
  );
}

function TableRow1() {
  return (
    <div className="absolute h-[36.8px] left-0 top-0 w-[1331.78px]" data-name="TableRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <TableCell />
      <TableCell1 />
      <TableCell2 />
      <TableCell3 />
      <TableCell4 />
      <TableCell5 />
      <TableCell6 />
      <TableCell7 />
      <TableCell8 />
      <TableCell9 />
      <TableCell10 />
      <TableCell11 />
      <TableCell12 />
      <TableCell13 />
      <TableCell14 />
      <TableCell15 />
      <TableCell16 />
      <TableCell17 />
    </div>
  );
}

function TableCell18() {
  return (
    <div className="absolute h-[36.4px] left-0 top-0 w-[35.1px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[#ff6900] text-[14px] text-nowrap top-[7.2px] whitespace-pre">*</p>
    </div>
  );
}

function TableCell19() {
  return <div className="absolute h-[36.4px] left-[35.1px] top-0 w-[61.288px]" data-name="TableCell" />;
}

function TableCell20() {
  return <div className="absolute h-[36.4px] left-[96.39px] top-0 w-[63.712px]" data-name="TableCell" />;
}

function TableCell21() {
  return <div className="absolute h-[36.4px] left-[160.1px] top-0 w-[128.05px]" data-name="TableCell" />;
}

function TableCell22() {
  return <div className="absolute h-[36.4px] left-[288.15px] top-0 w-[47.313px]" data-name="TableCell" />;
}

function TableCell23() {
  return <div className="absolute h-[36.4px] left-[335.46px] top-0 w-[59.975px]" data-name="TableCell" />;
}

function TableCell24() {
  return <div className="absolute h-[36.4px] left-[395.44px] top-0 w-[39.675px]" data-name="TableCell" />;
}

function TableCell25() {
  return <div className="absolute h-[36.4px] left-[435.11px] top-0 w-[43.462px]" data-name="TableCell" />;
}

function TableCell26() {
  return <div className="absolute h-[36.4px] left-[478.57px] top-0 w-[56.55px]" data-name="TableCell" />;
}

function TableCell27() {
  return <div className="absolute h-[36.4px] left-[535.13px] top-0 w-[82.588px]" data-name="TableCell" />;
}

function TableCell28() {
  return <div className="absolute h-[36.4px] left-[617.71px] top-0 w-[41.275px]" data-name="TableCell" />;
}

function TableCell29() {
  return <div className="absolute h-[36.4px] left-[658.99px] top-0 w-[89.975px]" data-name="TableCell" />;
}

function TableCell30() {
  return <div className="absolute h-[36.4px] left-[748.96px] top-0 w-[59.85px]" data-name="TableCell" />;
}

function TableCell31() {
  return <div className="absolute h-[36.4px] left-[808.81px] top-0 w-[121px]" data-name="TableCell" />;
}

function TableCell32() {
  return <div className="absolute h-[36.4px] left-[929.81px] top-0 w-[118.312px]" data-name="TableCell" />;
}

function TableCell33() {
  return <div className="absolute h-[36.4px] left-[1048.12px] top-0 w-[93.588px]" data-name="TableCell" />;
}

function TableCell34() {
  return <div className="absolute h-[36.4px] left-[1141.71px] top-0 w-[101.013px]" data-name="TableCell" />;
}

function TableCell35() {
  return <div className="absolute h-[36.4px] left-[1242.72px] top-0 w-[89.05px]" data-name="TableCell" />;
}

function TableRow2() {
  return (
    <div className="absolute h-[36.4px] left-0 top-[36.8px] w-[1331.78px]" data-name="TableRow">
      <TableCell18 />
      <TableCell19 />
      <TableCell20 />
      <TableCell21 />
      <TableCell22 />
      <TableCell23 />
      <TableCell24 />
      <TableCell25 />
      <TableCell26 />
      <TableCell27 />
      <TableCell28 />
      <TableCell29 />
      <TableCell30 />
      <TableCell31 />
      <TableCell32 />
      <TableCell33 />
      <TableCell34 />
      <TableCell35 />
    </div>
  );
}

function TableBody() {
  return (
    <div className="absolute h-[73.2px] left-0 top-[40px] w-[1331.78px]" data-name="TableBody">
      <TableRow1 />
      <TableRow2 />
    </div>
  );
}

function Table() {
  return (
    <div className="h-[113.2px] relative shrink-0 w-full" data-name="Table">
      <TableHeader />
      <TableBody />
    </div>
  );
}

function Table1() {
  return (
    <div className="box-border content-stretch flex flex-col h-[128.4px] items-start overflow-clip pl-0 py-0 relative shrink-0 w-full" data-name="Table">
      <Table />
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[130px] relative rounded-[10px] shrink-0 w-[1326px]" data-name="Container">
      <div className="box-border content-stretch flex flex-col h-[130px] items-start overflow-clip p-[0.8px] relative rounded-[inherit] w-[1326px]">
        <Table1 />
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[162px] items-start left-[16px] top-[388px] w-[1116.4px]" data-name="Container">
      <Heading6 />
      <Container18 />
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-[#00a63e] h-[36px] relative rounded-[8px] shrink-0 w-[64.475px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center px-[16px] py-[8px] relative w-[64.475px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">SAVE</p>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-[#6a7282] h-[36px] relative rounded-[8px] shrink-0 w-[72.575px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center px-[16px] py-[8px] relative w-[72.575px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">CLOSE</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute box-border content-stretch flex gap-[16px] h-[52.8px] items-start justify-end left-[16px] pb-0 pt-[16.8px] px-0 top-[566px] w-[1116.4px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.8px_0px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <Button6 />
      <Button7 />
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[634.8px] relative shrink-0 w-full" data-name="Container">
      <Container5 />
      <PrimitiveDiv />
      <Container12 />
      <PrimitiveDiv1 />
      <Container16 />
      <PrimitiveDiv2 />
      <Container17 />
      <PrimitiveDiv3 />
      <Container19 />
      <Container20 />
    </div>
  );
}

export default function EditStudent2() {
  return (
    <div className="bg-white relative rounded-[10px] size-full" data-name="Edit Student_2">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[1.907e_-6px] items-start p-[0.8px] relative size-full">
          <Container />
          <Container21 />
        </div>
      </div>
    </div>
  );
}