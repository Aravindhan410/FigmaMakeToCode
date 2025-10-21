import svgPaths from "./svg-cvaj1qayjs";

function Heading1() {
  return (
    <div className="h-[31.988px] relative shrink-0 w-[286.85px]" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[31.988px] items-start relative w-[286.85px]">
        <p className="font-['Arial:Bold',_sans-serif] leading-[32px] not-italic relative shrink-0 text-[#101828] text-[24px] text-nowrap whitespace-pre">{`₹ Income & Expense Receipt`}</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[12px] h-[32px] items-center relative shrink-0 w-full" data-name="Container">
      <Heading1 />
    </div>
  );
}

function CardTitle() {
  return (
    <div className="absolute font-['Arial:Regular',_sans-serif] h-[28px] leading-[28px] left-[24.8px] not-italic text-[18px] text-nowrap top-[24.8px] w-[1054.4px] whitespace-pre" data-name="CardTitle">
      <p className="absolute left-[28px] text-neutral-950 top-[-1.4px]">Transaction Entry</p>
      <p className="absolute left-[12.2px] text-black top-[0.2px]">₹</p>
    </div>
  );
}

function PrimitiveLabel() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Date</p>
    </div>
  );
}

function Input() {
  return (
    <div className="absolute bg-[#f3f3f5] h-[36px] left-0 rounded-[8px] top-0 w-[162.4px]" data-name="Input">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[12px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M5.33334 1.33333V4" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 1.33333V4" id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3ee34580} id="Vector_3" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 6.66667H14" id="Vector_4" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Container">
      <Input />
      <Icon />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col h-[56px] items-start left-0 top-0 w-[162.4px]" data-name="Container">
      <PrimitiveLabel />
      <Container1 />
    </div>
  );
}

function PrimitiveLabel1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Group</p>
    </div>
  );
}

function PrimitiveSpan() {
  return (
    <div className="h-[20px] relative shrink-0 w-[112.8px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[20px] items-center overflow-clip relative rounded-[inherit] w-[112.8px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Suspense Settlement</p>
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

function PrimitiveButton() {
  return (
    <div className="bg-[#f3f3f5] h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[36px] items-center justify-between px-[12.8px] py-[0.8px] relative w-full">
          <PrimitiveSpan />
          <Icon1 />
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col h-[56px] items-start left-[178.4px] top-0 w-[162.4px]" data-name="Container">
      <PrimitiveLabel1 />
      <PrimitiveButton />
    </div>
  );
}

function PrimitiveLabel2() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Category</p>
    </div>
  );
}

function PrimitiveSpan1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[58.038px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[20px] items-center overflow-clip relative rounded-[inherit] w-[58.038px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Suspense</p>
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

function PrimitiveButton1() {
  return (
    <div className="bg-[#f3f3f5] h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[36px] items-center justify-between px-[12.8px] py-[0.8px] relative w-full">
          <PrimitiveSpan1 />
          <Icon2 />
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex flex-col h-[56px] items-start left-[356.8px] top-0 w-[162.4px]" data-name="Container">
      <PrimitiveLabel2 />
      <PrimitiveButton1 />
    </div>
  );
}

function PrimitiveLabel3() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Person</p>
    </div>
  );
}

function PrimitiveSpan2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[83.013px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[20px] items-center overflow-clip relative rounded-[inherit] w-[83.013px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Select person</p>
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

function PrimitiveButton2() {
  return (
    <div className="bg-[#f3f3f5] h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[36px] items-center justify-between px-[12.8px] py-[0.8px] relative w-full">
          <PrimitiveSpan2 />
          <Icon3 />
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex flex-col h-[56px] items-start left-[535.2px] top-0 w-[162.4px]" data-name="Container">
      <PrimitiveLabel3 />
      <PrimitiveButton2 />
    </div>
  );
}

function PrimitiveLabel4() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Authorization</p>
    </div>
  );
}

function PrimitiveSpan3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[112.8px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[20px] items-center overflow-clip relative rounded-[inherit] w-[112.8px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Select authorization</p>
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

function PrimitiveButton3() {
  return (
    <div className="bg-[#f3f3f5] h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[36px] items-center justify-between px-[12.8px] py-[0.8px] relative w-full">
          <PrimitiveSpan3 />
          <Icon4 />
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex flex-col h-[56px] items-start left-[713.6px] top-0 w-[162.4px]" data-name="Container">
      <PrimitiveLabel4 />
      <PrimitiveButton3 />
    </div>
  );
}

function PrimitiveLabel5() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Payment Method</p>
    </div>
  );
}

function Icon5() {
  return (
    <div className="absolute left-[3.2px] size-[8px] top-[-4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
        <g clipPath="url(#clip0_4008_8484)" id="Icon">
          <path d={svgPaths.p3e71aa30} fill="var(--fill-0, #030213)" id="Vector" stroke="var(--stroke-0, #030213)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.666667" />
        </g>
        <defs>
          <clipPath id="clip0_4008_8484">
            <rect fill="white" height="8" width="8" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function PrimitiveSpan4() {
  return (
    <div className="h-0 relative shrink-0 w-full" data-name="Primitive.span">
      <Icon5 />
    </div>
  );
}

function PrimitiveButton4() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative rounded-[2.68435e+07px] shrink-0 size-[16px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[2.68435e+07px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-[0.8px] pt-[8px] px-[0.8px] relative size-[16px]">
        <PrimitiveSpan4 />
      </div>
    </div>
  );
}

function PrimitiveLabel6() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="Primitive.label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[20px] items-center relative w-full">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Cash</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="h-[20px] relative shrink-0 w-[54.188px]" data-name="App">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[20px] items-center relative w-[54.188px]">
        <PrimitiveButton4 />
        <PrimitiveLabel6 />
      </div>
    </div>
  );
}

function PrimitiveButton5() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative rounded-[2.68435e+07px] shrink-0 size-[16px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[2.68435e+07px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[16px]" />
    </div>
  );
}

function PrimitiveLabel7() {
  return (
    <div className="h-[20px] relative shrink-0 w-[48.325px]" data-name="Primitive.label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[20px] items-center relative w-[48.325px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Cheque</p>
      </div>
    </div>
  );
}

function App1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[72.325px]" data-name="App">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[20px] items-center relative w-[72.325px]">
        <PrimitiveButton5 />
        <PrimitiveLabel7 />
      </div>
    </div>
  );
}

function PrimitiveDiv() {
  return (
    <div className="content-stretch flex gap-[16px] h-[20px] items-start relative shrink-0 w-full" data-name="Primitive.div">
      <App />
      <App1 />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[56px] items-start left-[892px] top-0 w-[162.4px]" data-name="Container">
      <PrimitiveLabel5 />
      <PrimitiveDiv />
    </div>
  );
}

function App2() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="App">
      <Container2 />
      <Container3 />
      <Container4 />
      <Container5 />
      <Container6 />
      <Container7 />
    </div>
  );
}

function PrimitiveLabel8() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Detail</p>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-[#f3f3f5] h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[36px] items-center px-[12px] py-[4px] relative w-full">
          <p className="font-['Arial:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Enter transaction details</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute content-stretch flex flex-col h-[56px] items-start left-0 top-0 w-[251.6px]" data-name="Container">
      <PrimitiveLabel8 />
      <Input1 />
    </div>
  );
}

function PrimitiveLabel9() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Bill Information</p>
    </div>
  );
}

function PrimitiveButton6() {
  return (
    <div className="bg-[#f3f3f5] relative rounded-[4px] shrink-0 size-[16px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[16px]" />
    </div>
  );
}

function PrimitiveLabel10() {
  return (
    <div className="h-[20px] relative shrink-0 w-[46.925px]" data-name="Primitive.label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[20px] items-center relative w-[46.925px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Has Bill</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <PrimitiveButton6 />
      <PrimitiveLabel10 />
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[56px] items-start left-[267.6px] top-0 w-[162.4px]" data-name="Container">
      <PrimitiveLabel9 />
      <Container9 />
    </div>
  );
}

function PrimitiveLabel11() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Income</p>
    </div>
  );
}

function Input2() {
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

function Container11() {
  return (
    <div className="absolute content-stretch flex flex-col h-[56px] items-start left-[446px] top-0 w-[162.4px]" data-name="Container">
      <PrimitiveLabel11 />
      <Input2 />
    </div>
  );
}

function PrimitiveLabel12() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Expense</p>
    </div>
  );
}

function Input3() {
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

function Container12() {
  return (
    <div className="absolute content-stretch flex flex-col h-[56px] items-start left-[624.4px] top-0 w-[162.4px]" data-name="Container">
      <PrimitiveLabel12 />
      <Input3 />
    </div>
  );
}

function PrimitiveLabel13() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">S.No</p>
    </div>
  );
}

function Input4() {
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

function Container13() {
  return (
    <div className="absolute content-stretch flex flex-col h-[56px] items-start left-[802.8px] top-0 w-[73.2px]" data-name="Container">
      <PrimitiveLabel13 />
      <Input4 />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#155dfc] box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center left-[892px] px-[16px] py-[8px] rounded-[8px] top-[20px] w-[83.237px]" data-name="Button">
      <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">UPDATE</p>
    </div>
  );
}

function App3() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="App">
      <Container8 />
      <Container10 />
      <Container11 />
      <Container12 />
      <Container13 />
      <Button />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-[113.912px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center px-[24.8px] py-[8.8px] relative w-[113.912px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">VOUCHER</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#00a63e] h-[36px] relative rounded-[8px] shrink-0 w-[98.675px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center px-[24px] py-[8px] relative w-[98.675px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">SUBMIT</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#d4183d] h-[36px] relative rounded-[8px] shrink-0 w-[88.575px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center px-[24px] py-[8px] relative w-[88.575px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">CLOSE</p>
      </div>
    </div>
  );
}

function App4() {
  return (
    <div className="h-[52.8px] relative shrink-0 w-full" data-name="App">
      <div aria-hidden="true" className="absolute border-[0.8px_0px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row justify-end size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[52.8px] items-start justify-end pb-0 pt-[16.8px] px-0 relative w-full">
          <Button1 />
          <Button2 />
          <Button3 />
        </div>
      </div>
    </div>
  );
}

function CardContent() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[24px] h-[236.8px] items-start left-[0.8px] px-[24px] py-0 top-[82.8px] w-[1102.4px]" data-name="CardContent">
      <App2 />
      <App3 />
      <App4 />
    </div>
  );
}

function Card() {
  return (
    <div className="bg-white h-[320.4px] relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <CardTitle />
      <CardContent />
    </div>
  );
}

function CardTitle1() {
  return (
    <div className="h-[28px] relative shrink-0 w-[1054.4px]" data-name="CardTitle">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[1054.4px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[28px] left-0 not-italic text-[18px] text-neutral-950 text-nowrap top-[-1.4px] whitespace-pre">Transaction History</p>
      </div>
    </div>
  );
}

function TableHead() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[64px]" data-name="TableHead">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.6px] whitespace-pre">S.No</p>
    </div>
  );
}

function TableHead1() {
  return (
    <div className="absolute h-[40px] left-[64px] top-0 w-[86.95px]" data-name="TableHead">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.6px] whitespace-pre">Date</p>
    </div>
  );
}

function TableHead2() {
  return (
    <div className="absolute h-[40px] left-[150.95px] top-0 w-[105.975px]" data-name="TableHead">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.6px] whitespace-pre">Group</p>
    </div>
  );
}

function TableHead3() {
  return (
    <div className="absolute h-[40px] left-[256.93px] top-0 w-[94px]" data-name="TableHead">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.6px] whitespace-pre">Head</p>
    </div>
  );
}

function TableHead4() {
  return (
    <div className="absolute h-[40px] left-[350.93px] top-0 w-[168.35px]" data-name="TableHead">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.6px] whitespace-pre">Description</p>
    </div>
  );
}

function TableHead5() {
  return (
    <div className="absolute h-[40px] left-[519.27px] top-0 w-[100.988px]" data-name="TableHead">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.6px] whitespace-pre">Detail</p>
    </div>
  );
}

function TableHead6() {
  return (
    <div className="absolute h-[40px] left-[620.26px] top-0 w-[164.025px]" data-name="TableHead">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.6px] whitespace-pre">Authorized</p>
    </div>
  );
}

function TableHead7() {
  return (
    <div className="absolute h-[40px] left-[784.29px] top-0 w-[110.912px]" data-name="TableHead">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.6px] whitespace-pre">Bill No</p>
    </div>
  );
}

function TableHead8() {
  return (
    <div className="absolute h-[40px] left-[895.2px] top-0 w-[75.5px]" data-name="TableHead">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[67.75px] not-italic text-[14px] text-neutral-950 text-nowrap text-right top-[8.6px] translate-x-[-100%] whitespace-pre">Buy</p>
    </div>
  );
}

function TableHead9() {
  return (
    <div className="absolute h-[40px] left-[970.7px] top-0 w-[82.1px]" data-name="TableHead">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[74.91px] not-italic text-[14px] text-neutral-950 text-nowrap text-right top-[8.6px] translate-x-[-100%] whitespace-pre">Paid</p>
    </div>
  );
}

function TableRow() {
  return (
    <div className="absolute bg-gray-50 h-[40px] left-0 top-0 w-[1052.8px]" data-name="TableRow">
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
    </div>
  );
}

function TableHeader() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[1052.8px]" data-name="TableHeader">
      <TableRow />
    </div>
  );
}

function TableCell() {
  return (
    <div className="absolute h-[84.4px] left-0 top-0 w-[1052.8px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[525.92px] not-italic text-[#6a7282] text-[14px] text-center text-nowrap top-[31.2px] translate-x-[-50%] whitespace-pre">No transactions recorded yet</p>
    </div>
  );
}

function TableRow1() {
  return (
    <div className="absolute h-[84.4px] left-0 top-0 w-[1052.8px]" data-name="TableRow">
      <TableCell />
    </div>
  );
}

function TableBody() {
  return (
    <div className="absolute h-[84.4px] left-0 top-[40px] w-[1052.8px]" data-name="TableBody">
      <TableRow1 />
    </div>
  );
}

function Table() {
  return (
    <div className="h-[124.4px] overflow-clip relative shrink-0 w-full" data-name="Table">
      <TableHeader />
      <TableBody />
    </div>
  );
}

function App5() {
  return (
    <div className="h-[126px] relative rounded-[8px] shrink-0 w-[1054.4px]" data-name="App">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[126px] items-start p-[0.8px] relative w-[1054.4px]">
        <Table />
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="bg-white h-[233.6px] relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[30px] h-[233.6px] items-start pb-[0.8px] pl-[24.8px] pr-[0.8px] pt-[24.8px] relative w-full">
          <CardTitle1 />
          <App5 />
        </div>
      </div>
    </div>
  );
}

function App6() {
  return (
    <div className="bg-gray-50 content-stretch flex flex-col gap-[24px] h-[634px] items-start relative shrink-0 w-full" data-name="App">
      <Container />
      <Card />
      <Card1 />
    </div>
  );
}

export default function IncomeExpense() {
  return (
    <div className="bg-white relative size-full" data-name="Income Expense">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start pb-0 pt-[24px] px-[24px] relative size-full">
          <App6 />
        </div>
      </div>
    </div>
  );
}