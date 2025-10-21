import svgPaths from "./svg-cmlb6v7hwd";

function PrimitiveLabel() {
  return (
    <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Date</p>
    </div>
  );
}

function Input() {
  return (
    <div className="absolute bg-[#f3f3f5] h-[36px] left-0 rounded-[8px] top-0 w-[159.725px]" data-name="Input">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[12px] size-[16px] top-[10px]" data-name="Icon">
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
    <div className="absolute content-stretch flex flex-col h-[50px] items-start left-0 top-0 w-[159.725px]" data-name="Container">
      <PrimitiveLabel />
      <Container />
    </div>
  );
}

function PrimitiveLabel1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Vendor</p>
    </div>
  );
}

function PrimitiveSpan() {
  return (
    <div className="h-[20px] relative shrink-0 w-[83.787px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[20px] items-center overflow-clip relative rounded-[inherit] w-[83.787px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Select vendor</p>
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
    <div className="bg-[#f3f3f5] h-[36px] relative rounded-[8px] shrink-0 w-[167.225px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[36px] items-center justify-between px-[12.8px] py-[0.8px] relative w-[167.225px]">
        <PrimitiveSpan />
        <Icon1 />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-[10.8px] size-[16px] top-[8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 3.33333V12.6667" id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white h-[32px] relative rounded-[8px] shrink-0 w-[72.375px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[32px] relative w-[72.375px]">
        <Icon2 />
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[32.8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[4.8px] whitespace-pre">New</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[8px] h-[36px] items-start relative shrink-0 w-full" data-name="Container">
      <PrimitiveButton />
      <Button />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col h-[50px] items-start left-[175.72px] top-0 w-[247.6px]" data-name="Container">
      <PrimitiveLabel1 />
      <Container2 />
    </div>
  );
}

function PrimitiveLabel2() {
  return (
    <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Description</p>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-[#f3f3f5] h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[36px] items-center px-[12px] py-[4px] relative w-full">
          <p className="font-['Arial:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Enter description</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex flex-col h-[50px] items-start left-[439.32px] top-0 w-[247.6px]" data-name="Container">
      <PrimitiveLabel2 />
      <Input1 />
    </div>
  );
}

function PrimitiveLabel3() {
  return (
    <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Bill No</p>
    </div>
  );
}

function Input2() {
  return (
    <div className="bg-[#f3f3f5] h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[36px] items-center px-[12px] py-[4px] relative w-full">
          <p className="font-['Arial:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Bill number</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex flex-col h-[50px] items-start left-[702.92px] top-0 w-[159.738px]" data-name="Container">
      <PrimitiveLabel3 />
      <Input2 />
    </div>
  );
}

function PrimitiveLabel4() {
  return (
    <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Buy (Rs)</p>
    </div>
  );
}

function Input3() {
  return (
    <div className="bg-[#f3f3f5] h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[36px] items-center px-[12px] py-[4px] relative w-full">
          <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap text-right whitespace-pre">0</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex flex-col h-[50px] items-start left-[878.66px] top-0 w-[71.862px]" data-name="Container">
      <PrimitiveLabel4 />
      <Input3 />
    </div>
  );
}

function PrimitiveLabel5() {
  return (
    <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Paid (Rs)</p>
    </div>
  );
}

function Input4() {
  return (
    <div className="bg-[#f3f3f5] h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[36px] items-center px-[12px] py-[4px] relative w-full">
          <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap text-right whitespace-pre">0</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex flex-col h-[50px] items-start left-[966.52px] top-0 w-[71.875px]" data-name="Container">
      <PrimitiveLabel5 />
      <Input4 />
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Container3 />
      <Container4 />
      <Container5 />
      <Container6 />
      <Container7 />
    </div>
  );
}

function PrimitiveLabel6() {
  return (
    <div className="h-[14px] relative shrink-0 w-[112.875px]" data-name="Primitive.label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[14px] items-center relative w-[112.875px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Payment Method:</p>
      </div>
    </div>
  );
}

function Icon3() {
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

function PrimitiveSpan1() {
  return (
    <div className="h-0 relative shrink-0 w-full" data-name="Primitive.span">
      <Icon3 />
    </div>
  );
}

function PrimitiveButton1() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative rounded-[2.68435e+07px] shrink-0 size-[16px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[2.68435e+07px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-[0.8px] pt-[8px] px-[0.8px] relative size-[16px]">
        <PrimitiveSpan1 />
      </div>
    </div>
  );
}

function PrimitiveLabel7() {
  return (
    <div className="h-[14px] relative shrink-0 w-[49.6px]" data-name="Primitive.label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[14px] items-center relative w-[49.6px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">by Cash</p>
      </div>
    </div>
  );
}

function TransactionForm() {
  return (
    <div className="h-[16px] relative shrink-0 w-[73.6px]" data-name="TransactionForm">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[16px] items-center relative w-[73.6px]">
        <PrimitiveButton1 />
        <PrimitiveLabel7 />
      </div>
    </div>
  );
}

function PrimitiveButton2() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative rounded-[2.68435e+07px] shrink-0 size-[16px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[2.68435e+07px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[16px]" />
    </div>
  );
}

function PrimitiveLabel8() {
  return (
    <div className="h-[14px] relative shrink-0 w-[48.325px]" data-name="Primitive.label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[14px] items-center relative w-[48.325px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Cheque</p>
      </div>
    </div>
  );
}

function TransactionForm1() {
  return (
    <div className="h-[16px] relative shrink-0 w-[72.325px]" data-name="TransactionForm">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[16px] items-center relative w-[72.325px]">
        <PrimitiveButton2 />
        <PrimitiveLabel8 />
      </div>
    </div>
  );
}

function PrimitiveDiv() {
  return (
    <div className="h-[16px] relative shrink-0 w-[169.925px]" data-name="Primitive.div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[24px] h-[16px] items-center relative w-[169.925px]">
        <TransactionForm />
        <TransactionForm1 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[16px] relative shrink-0 w-[306.8px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[24px] h-[16px] items-center relative w-[306.8px]">
        <PrimitiveLabel6 />
        <PrimitiveDiv />
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#030213] h-[40px] relative rounded-[8px] shrink-0 w-[114.675px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[32px] py-0 relative w-[114.675px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">SUBMIT</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container9 />
      <Button1 />
    </div>
  );
}

function TransactionForm2() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[24px] h-[163.6px] items-start left-0 pb-[0.8px] pt-[24.8px] px-[24.8px] rounded-[10px] top-[-4.01px] w-[1088px]" data-name="TransactionForm">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <Container8 />
      <Container10 />
    </div>
  );
}

function TableHead() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[74.888px]" data-name="TableHead">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[37.86px] not-italic text-[14px] text-center text-nowrap text-white top-[8.6px] translate-x-[-50%] whitespace-pre">Sno</p>
    </div>
  );
}

function TableHead1() {
  return (
    <div className="absolute h-[40px] left-[74.89px] top-0 w-[175.738px]" data-name="TableHead">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[88.39px] not-italic text-[14px] text-center text-nowrap text-white top-[8.6px] translate-x-[-50%] whitespace-pre">PDate</p>
    </div>
  );
}

function TableHead2() {
  return (
    <div className="absolute h-[40px] left-[250.63px] top-0 w-[247.375px]" data-name="TableHead">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[123.39px] not-italic text-[14px] text-center text-nowrap text-white top-[8.6px] translate-x-[-50%] whitespace-pre">CName</p>
    </div>
  );
}

function TableHead3() {
  return (
    <div className="absolute h-[40px] left-[498px] top-0 w-[251.45px]" data-name="TableHead">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[125.91px] not-italic text-[14px] text-center text-nowrap text-white top-[8.6px] translate-x-[-50%] whitespace-pre">Description</p>
    </div>
  );
}

function TableHead4() {
  return (
    <div className="absolute h-[40px] left-[749.45px] top-0 w-[125.188px]" data-name="TableHead">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[62.83px] not-italic text-[14px] text-center text-nowrap text-white top-[8.6px] translate-x-[-50%] whitespace-pre">BillNo</p>
    </div>
  );
}

function TableHead5() {
  return (
    <div className="absolute h-[40px] left-[874.64px] top-0 w-[105.863px]" data-name="TableHead">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[53.55px] not-italic text-[14px] text-center text-nowrap text-white top-[8.6px] translate-x-[-50%] whitespace-pre">Buy</p>
    </div>
  );
}

function TableHead6() {
  return (
    <div className="absolute h-[40px] left-[980.5px] top-0 w-[105.9px]" data-name="TableHead">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[53.85px] not-italic text-[14px] text-center text-nowrap text-white top-[8.6px] translate-x-[-50%] whitespace-pre">Paid</p>
    </div>
  );
}

function TableRow() {
  return (
    <div className="absolute bg-[#2b7fff] h-[40px] left-0 top-0 w-[1086.4px]" data-name="TableRow">
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
    <div className="absolute h-[40px] left-0 top-0 w-[1086.4px]" data-name="TableHeader">
      <TableRow />
    </div>
  );
}

function TableCell() {
  return (
    <div className="absolute h-[36.8px] left-0 top-0 w-[74.888px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[37.66px] not-italic text-[14px] text-center text-neutral-950 text-nowrap top-[7.2px] translate-x-[-50%] whitespace-pre">1</p>
    </div>
  );
}

function TableCell1() {
  return (
    <div className="absolute h-[36.8px] left-[74.89px] top-0 w-[175.738px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[87.74px] not-italic text-[14px] text-center text-neutral-950 text-nowrap top-[7.2px] translate-x-[-50%] whitespace-pre">06-Oct-2025</p>
    </div>
  );
}

function TableCell2() {
  return (
    <div className="absolute h-[36.8px] left-[250.63px] top-0 w-[247.375px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[123.85px] not-italic text-[14px] text-center text-neutral-950 text-nowrap top-[7.2px] translate-x-[-50%] whitespace-pre">OMEGA INFOTECH</p>
    </div>
  );
}

function TableCell3() {
  return (
    <div className="absolute h-[36.8px] left-[498px] top-0 w-[251.45px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[125.22px] not-italic text-[14px] text-center text-neutral-950 text-nowrap top-[7.2px] translate-x-[-50%] whitespace-pre">Software License</p>
    </div>
  );
}

function TableCell4() {
  return (
    <div className="absolute h-[36.8px] left-[749.45px] top-0 w-[125.188px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[63.52px] not-italic text-[14px] text-center text-neutral-950 text-nowrap top-[7.2px] translate-x-[-50%] whitespace-pre">INV-001</p>
    </div>
  );
}

function TableCell5() {
  return (
    <div className="absolute h-[36.8px] left-[874.64px] top-0 w-[105.863px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[98.09px] not-italic text-[14px] text-neutral-950 text-nowrap text-right top-[7.2px] translate-x-[-100%] whitespace-pre">15,000</p>
    </div>
  );
}

function TableCell6() {
  return (
    <div className="absolute h-[36.8px] left-[980.5px] top-0 w-[105.9px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[98.13px] not-italic text-[14px] text-neutral-950 text-nowrap text-right top-[7.2px] translate-x-[-100%] whitespace-pre">15,000</p>
    </div>
  );
}

function TableRow1() {
  return (
    <div className="absolute h-[36.8px] left-0 top-0 w-[1086.4px]" data-name="TableRow">
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

function TableCell7() {
  return (
    <div className="absolute h-[36.8px] left-0 top-0 w-[74.888px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[37.66px] not-italic text-[14px] text-center text-neutral-950 text-nowrap top-[7.2px] translate-x-[-50%] whitespace-pre">2</p>
    </div>
  );
}

function TableCell8() {
  return (
    <div className="absolute h-[36.8px] left-[74.89px] top-0 w-[175.738px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[87.74px] not-italic text-[14px] text-center text-neutral-950 text-nowrap top-[7.2px] translate-x-[-50%] whitespace-pre">05-Oct-2025</p>
    </div>
  );
}

function TableCell9() {
  return (
    <div className="absolute h-[36.8px] left-[250.63px] top-0 w-[247.375px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[123.35px] not-italic text-[14px] text-center text-neutral-950 text-nowrap top-[7.2px] translate-x-[-50%] whitespace-pre">Tech Solutions</p>
    </div>
  );
}

function TableCell10() {
  return (
    <div className="absolute h-[36.8px] left-[498px] top-0 w-[251.45px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[125.3px] not-italic text-[14px] text-center text-neutral-950 text-nowrap top-[7.2px] translate-x-[-50%] whitespace-pre">Hardware Purchase</p>
    </div>
  );
}

function TableCell11() {
  return (
    <div className="absolute h-[36.8px] left-[749.45px] top-0 w-[125.188px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[63.52px] not-italic text-[14px] text-center text-neutral-950 text-nowrap top-[7.2px] translate-x-[-50%] whitespace-pre">INV-002</p>
    </div>
  );
}

function TableCell12() {
  return (
    <div className="absolute h-[36.8px] left-[874.64px] top-0 w-[105.863px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[98.09px] not-italic text-[14px] text-neutral-950 text-nowrap text-right top-[7.2px] translate-x-[-100%] whitespace-pre">25,000</p>
    </div>
  );
}

function TableCell13() {
  return (
    <div className="absolute h-[36.8px] left-[980.5px] top-0 w-[105.9px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[98.13px] not-italic text-[14px] text-neutral-950 text-nowrap text-right top-[7.2px] translate-x-[-100%] whitespace-pre">20,000</p>
    </div>
  );
}

function TableRow2() {
  return (
    <div className="absolute h-[36.8px] left-0 top-[36.8px] w-[1086.4px]" data-name="TableRow">
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

function TableCell14() {
  return (
    <div className="absolute h-[36.8px] left-0 top-0 w-[74.888px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[37.66px] not-italic text-[14px] text-center text-neutral-950 text-nowrap top-[7.2px] translate-x-[-50%] whitespace-pre">3</p>
    </div>
  );
}

function TableCell15() {
  return (
    <div className="absolute h-[36.8px] left-[74.89px] top-0 w-[175.738px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[87.74px] not-italic text-[14px] text-center text-neutral-950 text-nowrap top-[7.2px] translate-x-[-50%] whitespace-pre">04-Oct-2025</p>
    </div>
  );
}

function TableCell16() {
  return (
    <div className="absolute h-[36.8px] left-[250.63px] top-0 w-[247.375px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[124.49px] not-italic text-[14px] text-center text-neutral-950 text-nowrap top-[7.2px] translate-x-[-50%] whitespace-pre">Digital Services</p>
    </div>
  );
}

function TableCell17() {
  return (
    <div className="absolute h-[36.8px] left-[498px] top-0 w-[251.45px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[126.39px] not-italic text-[14px] text-center text-neutral-950 text-nowrap top-[7.2px] translate-x-[-50%] whitespace-pre">Consulting Fee</p>
    </div>
  );
}

function TableCell18() {
  return (
    <div className="absolute h-[36.8px] left-[749.45px] top-0 w-[125.188px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[63.52px] not-italic text-[14px] text-center text-neutral-950 text-nowrap top-[7.2px] translate-x-[-50%] whitespace-pre">INV-003</p>
    </div>
  );
}

function TableCell19() {
  return (
    <div className="absolute h-[36.8px] left-[874.64px] top-0 w-[105.863px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[98.64px] not-italic text-[14px] text-neutral-950 text-nowrap text-right top-[7.2px] translate-x-[-100%] whitespace-pre">8,000</p>
    </div>
  );
}

function TableCell20() {
  return (
    <div className="absolute h-[36.8px] left-[980.5px] top-0 w-[105.9px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[98.67px] not-italic text-[14px] text-neutral-950 text-nowrap text-right top-[7.2px] translate-x-[-100%] whitespace-pre">8,000</p>
    </div>
  );
}

function TableRow3() {
  return (
    <div className="absolute h-[36.8px] left-0 top-[73.6px] w-[1086.4px]" data-name="TableRow">
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

function TableCell21() {
  return <div className="absolute h-[48px] left-0 top-0 w-[74.888px]" data-name="TableCell" />;
}

function TableCell22() {
  return <div className="absolute h-[48px] left-[74.89px] top-0 w-[175.738px]" data-name="TableCell" />;
}

function TableCell23() {
  return <div className="absolute h-[48px] left-[250.63px] top-0 w-[247.375px]" data-name="TableCell" />;
}

function TableCell24() {
  return <div className="absolute h-[48px] left-[498px] top-0 w-[251.45px]" data-name="TableCell" />;
}

function TableCell25() {
  return <div className="absolute h-[48px] left-[749.45px] top-0 w-[125.188px]" data-name="TableCell" />;
}

function TableCell26() {
  return <div className="absolute h-[48px] left-[874.64px] top-0 w-[105.863px]" data-name="TableCell" />;
}

function TableCell27() {
  return <div className="absolute h-[48px] left-[980.5px] top-0 w-[105.9px]" data-name="TableCell" />;
}

function TableRow4() {
  return (
    <div className="absolute h-[48px] left-0 top-[110.4px] w-[1086.4px]" data-name="TableRow">
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

function TableCell28() {
  return <div className="absolute h-[48px] left-0 top-0 w-[74.888px]" data-name="TableCell" />;
}

function TableCell29() {
  return <div className="absolute h-[48px] left-[74.89px] top-0 w-[175.738px]" data-name="TableCell" />;
}

function TableCell30() {
  return <div className="absolute h-[48px] left-[250.63px] top-0 w-[247.375px]" data-name="TableCell" />;
}

function TableCell31() {
  return <div className="absolute h-[48px] left-[498px] top-0 w-[251.45px]" data-name="TableCell" />;
}

function TableCell32() {
  return <div className="absolute h-[48px] left-[749.45px] top-0 w-[125.188px]" data-name="TableCell" />;
}

function TableCell33() {
  return <div className="absolute h-[48px] left-[874.64px] top-0 w-[105.863px]" data-name="TableCell" />;
}

function TableCell34() {
  return <div className="absolute h-[48px] left-[980.5px] top-0 w-[105.9px]" data-name="TableCell" />;
}

function TableRow5() {
  return (
    <div className="absolute h-[48px] left-0 top-[158.4px] w-[1086.4px]" data-name="TableRow">
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

function TableCell35() {
  return <div className="absolute h-[48px] left-0 top-0 w-[74.888px]" data-name="TableCell" />;
}

function TableCell36() {
  return <div className="absolute h-[48px] left-[74.89px] top-0 w-[175.738px]" data-name="TableCell" />;
}

function TableCell37() {
  return <div className="absolute h-[48px] left-[250.63px] top-0 w-[247.375px]" data-name="TableCell" />;
}

function TableCell38() {
  return <div className="absolute h-[48px] left-[498px] top-0 w-[251.45px]" data-name="TableCell" />;
}

function TableCell39() {
  return <div className="absolute h-[48px] left-[749.45px] top-0 w-[125.188px]" data-name="TableCell" />;
}

function TableCell40() {
  return <div className="absolute h-[48px] left-[874.64px] top-0 w-[105.863px]" data-name="TableCell" />;
}

function TableCell41() {
  return <div className="absolute h-[48px] left-[980.5px] top-0 w-[105.9px]" data-name="TableCell" />;
}

function TableRow6() {
  return (
    <div className="absolute h-[48px] left-0 top-[206.4px] w-[1086.4px]" data-name="TableRow">
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

function TableCell42() {
  return <div className="absolute h-[48px] left-0 top-0 w-[74.888px]" data-name="TableCell" />;
}

function TableCell43() {
  return <div className="absolute h-[48px] left-[74.89px] top-0 w-[175.738px]" data-name="TableCell" />;
}

function TableCell44() {
  return <div className="absolute h-[48px] left-[250.63px] top-0 w-[247.375px]" data-name="TableCell" />;
}

function TableCell45() {
  return <div className="absolute h-[48px] left-[498px] top-0 w-[251.45px]" data-name="TableCell" />;
}

function TableCell46() {
  return <div className="absolute h-[48px] left-[749.45px] top-0 w-[125.188px]" data-name="TableCell" />;
}

function TableCell47() {
  return <div className="absolute h-[48px] left-[874.64px] top-0 w-[105.863px]" data-name="TableCell" />;
}

function TableCell48() {
  return <div className="absolute h-[48px] left-[980.5px] top-0 w-[105.9px]" data-name="TableCell" />;
}

function TableRow7() {
  return (
    <div className="absolute h-[48px] left-0 top-[254.4px] w-[1086.4px]" data-name="TableRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
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

function TableCell49() {
  return <div className="absolute h-[48px] left-0 top-0 w-[74.888px]" data-name="TableCell" />;
}

function TableCell50() {
  return <div className="absolute h-[48px] left-[74.89px] top-0 w-[175.738px]" data-name="TableCell" />;
}

function TableCell51() {
  return <div className="absolute h-[48px] left-[250.63px] top-0 w-[247.375px]" data-name="TableCell" />;
}

function TableCell52() {
  return <div className="absolute h-[48px] left-[498px] top-0 w-[251.45px]" data-name="TableCell" />;
}

function TableCell53() {
  return <div className="absolute h-[48px] left-[749.45px] top-0 w-[125.188px]" data-name="TableCell" />;
}

function TableCell54() {
  return <div className="absolute h-[48px] left-[874.64px] top-0 w-[105.863px]" data-name="TableCell" />;
}

function TableCell55() {
  return <div className="absolute h-[48px] left-[980.5px] top-0 w-[105.9px]" data-name="TableCell" />;
}

function TableRow8() {
  return (
    <div className="absolute h-[48px] left-0 top-[302.4px] w-[1086.4px]" data-name="TableRow">
      <TableCell49 />
      <TableCell50 />
      <TableCell51 />
      <TableCell52 />
      <TableCell53 />
      <TableCell54 />
      <TableCell55 />
    </div>
  );
}

function TableBody() {
  return (
    <div className="absolute h-[350.4px] left-0 top-[40px] w-[1086.4px]" data-name="TableBody">
      <TableRow1 />
      <TableRow2 />
      <TableRow3 />
      <TableRow4 />
      <TableRow5 />
      <TableRow6 />
      <TableRow7 />
      <TableRow8 />
    </div>
  );
}

function Table() {
  return (
    <div className="h-[390.4px] overflow-clip relative shrink-0 w-full" data-name="Table">
      <TableHeader />
      <TableBody />
    </div>
  );
}

function TransactionTable() {
  return (
    <div className="absolute bg-white h-[392px] left-0 rounded-[10px] top-[183.59px] w-[1088px]" data-name="TransactionTable">
      <div className="box-border content-stretch flex flex-col h-[392px] items-start overflow-clip p-[0.8px] relative rounded-[inherit] w-[1088px]">
        <Table />
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-[116.838px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[32.8px] py-[0.8px] relative w-[116.838px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">UPDATE</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#d4183d] h-[40px] relative rounded-[8px] shrink-0 w-[104.575px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[32px] py-0 relative w-[104.575px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">CLOSE</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute box-border content-stretch flex gap-[16px] h-[56px] items-start justify-end left-0 pb-0 pt-[16px] px-0 top-[699.59px] w-[1088px]" data-name="Container">
      <Button2 />
      <Button3 />
    </div>
  );
}

function App() {
  return (
    <div className="bg-gray-50 h-[755.588px] relative shrink-0 w-full" data-name="App">
      <TransactionForm2 />
      <TransactionTable />
      <Container11 />
    </div>
  );
}

export default function DesignTransactionWindow() {
  return (
    <div className="bg-white relative size-full" data-name="Design Transaction Window">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start pb-0 pt-[32px] px-[32px] relative size-full">
          <App />
        </div>
      </div>
    </div>
  );
}