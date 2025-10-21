import svgPaths from "./svg-cyondq8wun";

function Heading1() {
  return (
    <div className="absolute bg-[#1e2939] h-[28px] left-[16px] top-[16px] w-[1072px]" data-name="Heading 1">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[28px] left-0 not-italic text-[20px] text-nowrap text-white top-[-2.2px] whitespace-pre">Settlement Window</p>
    </div>
  );
}

function PrimitiveLabel() {
  return (
    <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Date</p>
    </div>
  );
}

function Input() {
  return (
    <div className="absolute bg-white h-[36px] left-0 rounded-[8px] top-0 w-[154.4px]" data-name="Input">
      <div className="box-border content-stretch flex h-[36px] items-center overflow-clip px-[12px] py-[4px] relative rounded-[inherit] w-[154.4px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">07-Oct-2025</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[126.4px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M5.33333 1.33333V4" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 1.33333V4" id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3ee34580} id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 6.66667H14" id="Vector_4" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M5.33333 9.33333H5.34" id="Vector_5" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 9.33333H8.00667" id="Vector_6" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 9.33333H10.6733" id="Vector_7" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M5.33333 12H5.34" id="Vector_8" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 12H8.00667" id="Vector_9" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 12H10.6733" id="Vector_10" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Container">
      <Input />
      <Icon />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[58px] items-start left-0 top-[8px] w-[154.4px]" data-name="Container">
      <PrimitiveLabel />
      <Container />
    </div>
  );
}

function PrimitiveLabel1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Expense Type</p>
    </div>
  );
}

function PrimitiveSpan() {
  return (
    <div className="h-[20px] relative shrink-0 w-[67.588px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[20px] items-center overflow-clip relative rounded-[inherit] w-[67.588px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Select type</p>
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
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Primitive.button">
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

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[66px] items-start left-[170.4px] top-0 w-[154.4px]" data-name="Container">
      <PrimitiveLabel1 />
      <PrimitiveButton />
    </div>
  );
}

function PrimitiveLabel2() {
  return (
    <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Detail</p>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[36px] items-center px-[12px] py-[4px] relative w-full">
          <p className="font-['Arial:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Enter details</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[58px] items-start left-[340.8px] top-[8px] w-[154.4px]" data-name="Container">
      <PrimitiveLabel2 />
      <Input1 />
    </div>
  );
}

function PrimitiveLabel3() {
  return (
    <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Person</p>
    </div>
  );
}

function PrimitiveSpan1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[83.013px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[20px] items-center overflow-clip relative rounded-[inherit] w-[83.013px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Select person</p>
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
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Primitive.button">
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
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[66px] items-start left-[511.2px] top-0 w-[154.4px]" data-name="Container">
      <PrimitiveLabel3 />
      <PrimitiveButton1 />
    </div>
  );
}

function PrimitiveLabel4() {
  return (
    <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Amount</p>
    </div>
  );
}

function Input2() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[36px] items-center px-[12px] py-[4px] relative w-full">
          <p className="font-['Arial:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">0</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[58px] items-start left-[681.6px] top-[8px] w-[154.4px]" data-name="Container">
      <PrimitiveLabel4 />
      <Input2 />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#1e2939] h-[36px] left-[852px] rounded-[8px] top-[30px] w-[154.4px]" data-name="Button">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[51.86px] not-italic text-[14px] text-nowrap text-white top-[6.8px] whitespace-pre">SUBMIT</p>
    </div>
  );
}

function Form() {
  return (
    <div className="h-[66px] relative shrink-0 w-full" data-name="Form">
      <Container1 />
      <Container2 />
      <Container3 />
      <Container4 />
      <Container5 />
      <Button />
    </div>
  );
}

function ExpenseForm() {
  return (
    <div className="bg-slate-100 h-[115.6px] relative rounded-[10px] shrink-0 w-full" data-name="ExpenseForm">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[115.6px] items-start pb-[0.8px] pt-[24.8px] px-[24.8px] relative w-full">
          <Form />
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute h-[20px] left-[12px] top-[12px] w-[114.8px]" data-name="Container">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-1.2px] whitespace-pre">Sno</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute h-[20px] left-[142.8px] top-[12px] w-[114.8px]" data-name="Container">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-1.2px] whitespace-pre">PDate</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute h-[20px] left-[273.6px] top-[12px] w-[114.8px]" data-name="Container">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-1.2px] whitespace-pre">Expense</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute h-[20px] left-[404.4px] top-[12px] w-[114.8px]" data-name="Container">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-1.2px] whitespace-pre">Description</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute h-[20px] left-[535.2px] top-[12px] w-[114.8px]" data-name="Container">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-1.2px] whitespace-pre">Person</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute h-[20px] left-[666px] top-[12px] w-[114.8px]" data-name="Container">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-1.2px] whitespace-pre">Amount</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute h-[20px] left-[796.8px] top-[12px] w-[114.8px]" data-name="Container">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-1.2px] whitespace-pre">Suspense</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute h-[20px] left-[927.6px] top-[12px] w-[114.8px]" data-name="Container">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-1.2px] whitespace-pre">Remark</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="bg-blue-100 h-[44px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.8px] border-black border-solid inset-0 pointer-events-none" />
      <Container6 />
      <Container7 />
      <Container8 />
      <Container9 />
      <Container10 />
      <Container11 />
      <Container12 />
      <Container13 />
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute h-[40px] left-[12px] top-[12px] w-[114.8px]" data-name="Container">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-1.2px] whitespace-pre">1</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute h-[40px] left-[142.8px] top-[12px] w-[114.8px]" data-name="Container">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-1.2px] whitespace-pre">07-Oct-2025</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute h-[40px] left-[273.6px] top-[12px] w-[114.8px]" data-name="Container">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-1.2px] whitespace-pre">Office Supplies</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute h-[40px] left-[404.4px] top-[12px] w-[114.8px]" data-name="Container">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 top-[-1.2px] w-[109px]">Stationery and printing materials</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute h-[40px] left-[535.2px] top-[12px] w-[114.8px]" data-name="Container">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-1.2px] whitespace-pre">John Doe</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute h-[40px] left-[666px] top-[12px] w-[114.8px]" data-name="Container">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-1.2px] whitespace-pre">250</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute h-[40px] left-[796.8px] top-[12px] w-[114.8px]" data-name="Container">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-1.2px] whitespace-pre">0</p>
    </div>
  );
}

function Badge() {
  return (
    <div className="absolute bg-[#030213] h-[21.587px] left-[927.6px] rounded-[8px] top-[12.4px] w-[71.225px]" data-name="Badge">
      <div className="h-[21.587px] overflow-clip relative rounded-[inherit] w-[71.225px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[8.8px] not-italic text-[12px] text-nowrap text-white top-[1.8px] whitespace-pre">Approved</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container22() {
  return (
    <div className="bg-white h-[300px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <Container15 />
      <Container16 />
      <Container17 />
      <Container18 />
      <Container19 />
      <Container20 />
      <Container21 />
      <Badge />
    </div>
  );
}

function ExpenseTable() {
  return (
    <div className="h-[346.4px] relative rounded-[10px] shrink-0 w-full" data-name="ExpenseTable">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[0.8px] h-[346.4px] items-start p-[0.8px] relative w-full">
          <Container14 />
          <Container22 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function PrimitiveLabel5() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4a5565] text-[14px] text-nowrap whitespace-pre">Suspense</p>
    </div>
  );
}

function Input3() {
  return (
    <div className="bg-gray-50 h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[36px] items-center px-[12px] py-[4px] relative w-full">
          <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">0</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function CardContent() {
  return (
    <div className="h-[104px] relative shrink-0 w-[334.4px]" data-name="CardContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[8px] h-[104px] items-start pb-0 pt-[16px] px-[16px] relative w-[334.4px]">
        <PrimitiveLabel5 />
        <Input3 />
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="[grid-area:1_/_1] bg-white box-border content-stretch flex flex-col h-[105.6px] items-start p-[0.8px] relative rounded-[14px] shrink-0" data-name="Card">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <CardContent />
    </div>
  );
}

function PrimitiveLabel6() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4a5565] text-[14px] text-nowrap whitespace-pre">Expense</p>
    </div>
  );
}

function Input4() {
  return (
    <div className="bg-gray-50 h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[36px] items-center px-[12px] py-[4px] relative w-full">
          <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">250</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function CardContent1() {
  return (
    <div className="h-[104px] relative shrink-0 w-[334.4px]" data-name="CardContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[8px] h-[104px] items-start pb-0 pt-[16px] px-[16px] relative w-[334.4px]">
        <PrimitiveLabel6 />
        <Input4 />
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="[grid-area:1_/_2] bg-white h-[105.6px] relative rounded-[14px] shrink-0" data-name="Card">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[105.6px] items-start p-[0.8px] relative w-full">
          <CardContent1 />
        </div>
      </div>
    </div>
  );
}

function PrimitiveLabel7() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4a5565] text-[14px] text-nowrap whitespace-pre">Balance</p>
    </div>
  );
}

function Input5() {
  return (
    <div className="bg-gray-50 h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[36px] items-center px-[12px] py-[4px] relative w-full">
          <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">250</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function CardContent2() {
  return (
    <div className="h-[104px] relative shrink-0 w-[334.4px]" data-name="CardContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[8px] h-[104px] items-start pb-0 pt-[16px] px-[16px] relative w-[334.4px]">
        <PrimitiveLabel7 />
        <Input5 />
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div className="[grid-area:1_/_3] bg-white box-border content-stretch flex flex-col h-[105.6px] items-start p-[0.8px] relative rounded-[14px] shrink-0" data-name="Card">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <CardContent2 />
    </div>
  );
}

function Container23() {
  return (
    <div className="gap-[24px] grid grid-cols-[repeat(3,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[105.6px] relative shrink-0 w-full" data-name="Container">
      <Card />
      <Card1 />
      <Card2 />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-[149px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center px-[32.8px] py-[8.8px] relative w-[149px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">SETTLEMENT</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-[116.45px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center px-[32.8px] py-[8.8px] relative w-[116.45px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">REPORT</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#155dfc] h-[36px] relative rounded-[8px] shrink-0 w-[115.238px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center px-[32px] py-[8px] relative w-[115.238px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">UPDATE</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-[106.175px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center px-[32.8px] py-[8.8px] relative w-[106.175px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">CLOSE</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[36px] relative shrink-0 w-[369.863px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[16px] h-[36px] items-start relative w-[369.863px]">
        <Button2 />
        <Button3 />
        <Button4 />
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex h-[52px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Button1 />
      <Container24 />
    </div>
  );
}

function SettlementSummary() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[173.6px] items-start relative shrink-0 w-full" data-name="SettlementSummary">
      <Container23 />
      <Container25 />
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[24px] h-[731.6px] items-start left-0 pb-0 pt-[24px] px-[24px] top-[60px] w-[1104px]" data-name="Container">
      <ExpenseForm />
      <ExpenseTable />
      <SettlementSummary />
    </div>
  );
}

function Container27() {
  return (
    <div className="bg-white h-[791.6px] relative rounded-[10px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 w-[1104px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[791.6px] overflow-clip relative rounded-[inherit] w-[1104px]">
        <Heading1 />
        <Container26 />
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="absolute bg-gray-50 content-stretch flex h-[840px] items-center justify-center left-0 top-0 w-[1150px]" data-name="App">
      <Container27 />
    </div>
  );
}

function SelectItemText() {
  return <div className="h-0 shrink-0 w-full" data-name="SelectItemText" />;
}

function SlotClone() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start left-[242.2px] pb-0 pr-[243.2px] size-px top-[197.8px]" data-name="SlotClone">
      {[...Array(7).keys()].map((_, i) => (
        <SelectItemText key={i} />
      ))}
    </div>
  );
}

function SelectItemText7() {
  return <div className="h-0 shrink-0 w-full" data-name="SelectItemText" />;
}

function SlotClone1() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start left-[583px] pb-0 pr-[584px] size-px top-[197.8px]" data-name="SlotClone">
      {[...Array(5).keys()].map((_, i) => (
        <SelectItemText7 key={i} />
      ))}
    </div>
  );
}

export default function DesignSettlementWindow() {
  return (
    <div className="bg-white relative size-full" data-name="Design Settlement Window">
      <App />
      <SlotClone />
      <SlotClone1 />
    </div>
  );
}