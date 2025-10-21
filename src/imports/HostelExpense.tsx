import svgPaths from "./svg-2tastc4nbb";

function Icon() {
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

function PrimitiveSpan() {
  return (
    <div className="h-0 relative shrink-0 w-full" data-name="Primitive.span">
      <Icon />
    </div>
  );
}

function PrimitiveButton() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative rounded-[2.68435e+07px] shrink-0 size-[16px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[2.68435e+07px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-[0.8px] pt-[8px] px-[0.8px] relative size-[16px]">
        <PrimitiveSpan />
      </div>
    </div>
  );
}

function PrimitiveLabel() {
  return (
    <div className="basis-0 grow h-[14px] min-h-px min-w-px relative shrink-0" data-name="Primitive.label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[14px] items-center relative w-full">
        <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">ByBill</p>
      </div>
    </div>
  );
}

function ExpenseForm() {
  return (
    <div className="h-[16px] relative shrink-0 w-[59px]" data-name="ExpenseForm">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[16px] items-center relative w-[59px]">
        <PrimitiveButton />
        <PrimitiveLabel />
      </div>
    </div>
  );
}

function PrimitiveButton1() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative rounded-[2.68435e+07px] shrink-0 size-[16px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[2.68435e+07px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[16px]" />
    </div>
  );
}

function PrimitiveLabel1() {
  return (
    <div className="h-[14px] relative shrink-0 w-[63.05px]" data-name="Primitive.label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[14px] items-center relative w-[63.05px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">ToCheque</p>
      </div>
    </div>
  );
}

function ExpenseForm1() {
  return (
    <div className="h-[16px] relative shrink-0 w-[87.05px]" data-name="ExpenseForm">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[16px] items-center relative w-[87.05px]">
        <PrimitiveButton1 />
        <PrimitiveLabel1 />
      </div>
    </div>
  );
}

function PrimitiveDiv() {
  return (
    <div className="content-stretch flex gap-[32px] h-[16px] items-start relative shrink-0 w-full" data-name="Primitive.div">
      <ExpenseForm />
      <ExpenseForm1 />
    </div>
  );
}

function PrimitiveLabel2() {
  return (
    <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Date</p>
    </div>
  );
}

function Input() {
  return (
    <div className="absolute bg-[#f3f3f5] h-[36px] left-0 rounded-[8px] top-0 w-[161.8px]" data-name="Input">
      <div className="box-border content-stretch flex h-[36px] items-center overflow-clip pl-[12px] pr-[40px] py-[4px] relative rounded-[inherit] w-[161.8px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">07-Oct-2025</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[133.8px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M5.33333 1.33333V4" id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 1.33333V4" id="Vector_2" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3ee34580} id="Vector_3" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 6.66668H14" id="Vector_4" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Container">
      <Input />
      <Icon1 />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[54px] items-start left-0 top-0 w-[161.8px]" data-name="Container">
      <PrimitiveLabel2 />
      <Container />
    </div>
  );
}

function PrimitiveLabel3() {
  return (
    <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Expense Type</p>
    </div>
  );
}

function PrimitiveSpan1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[67.588px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[20px] items-center overflow-clip relative rounded-[inherit] w-[67.588px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Select type</p>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon" opacity="0.5">
          <path d="M4 6.00001L8 10L12 6.00001" id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function PrimitiveButton2() {
  return (
    <div className="bg-[#f3f3f5] h-[36px] relative rounded-[8px] shrink-0 w-[117.188px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[36px] items-center justify-between px-[12.8px] py-[0.8px] relative w-[117.188px]">
        <PrimitiveSpan1 />
        <Icon2 />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white h-[32px] relative rounded-[8px] shrink-0 w-[55.087px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[6px] h-[32px] items-center justify-center px-[12.8px] py-[0.8px] relative w-[55.087px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">ADD</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[8px] h-[36px] items-start relative shrink-0 w-full" data-name="Container">
      <PrimitiveButton2 />
      <Button />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[54px] items-start left-[177.8px] top-0 w-[161.8px]" data-name="Container">
      <PrimitiveLabel3 />
      <Container2 />
    </div>
  );
}

function PrimitiveLabel4() {
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
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[54px] items-start left-[355.6px] top-0 w-[250.7px]" data-name="Container">
      <PrimitiveLabel4 />
      <Input1 />
    </div>
  );
}

function PrimitiveLabel5() {
  return (
    <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Person</p>
    </div>
  );
}

function Input2() {
  return (
    <div className="bg-[#f3f3f5] h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[36px] items-center px-[12px] py-[4px] relative w-full">
          <p className="font-['Arial:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Enter person</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[54px] items-start left-[622.3px] top-0 w-[161.8px]" data-name="Container">
      <PrimitiveLabel5 />
      <Input2 />
    </div>
  );
}

function PrimitiveLabel6() {
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
          <p className="font-['Arial:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">0</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[54px] items-start left-[800.1px] top-0 w-[161.8px]" data-name="Container">
      <PrimitiveLabel6 />
      <Input3 />
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-[#45556c] h-[36px] left-[977.9px] rounded-[8px] top-[18px] w-[72.9px]" data-name="Button">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[11.11px] not-italic text-[14px] text-nowrap text-white top-[6.8px] whitespace-pre">SUBMIT</p>
    </div>
  );
}

function ExpenseForm2() {
  return (
    <div className="h-[54px] relative shrink-0 w-full" data-name="ExpenseForm">
      <Container1 />
      <Container3 />
      <Container4 />
      <Container5 />
      <Container6 />
      <Button1 />
    </div>
  );
}

function CardContent() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[1098.8px]" data-name="CardContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[24px] h-full items-start pb-0 pt-[24px] px-[24px] relative w-[1098.8px]">
        <PrimitiveDiv />
        <ExpenseForm2 />
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="bg-white h-[143.6px] relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[143.6px] items-start p-[0.8px] relative w-full">
          <CardContent />
        </div>
      </div>
    </div>
  );
}

function TableHead() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[107.15px]" data-name="TableHead">
      <div aria-hidden="true" className="absolute border-[#bedbff] border-[0px_0.8px_0px_0px] border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Bold',_sans-serif] leading-[20px] left-[8px] not-italic text-[#1c398e] text-[14px] text-nowrap top-[8.6px] whitespace-pre">Sno</p>
    </div>
  );
}

function TableHead1() {
  return (
    <div className="absolute h-[40px] left-[107.15px] top-0 w-[236.7px]" data-name="TableHead">
      <div aria-hidden="true" className="absolute border-[#bedbff] border-[0px_0.8px_0px_0px] border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Bold',_sans-serif] leading-[20px] left-[8.4px] not-italic text-[#1c398e] text-[14px] text-nowrap top-[8.6px] whitespace-pre">PDate</p>
    </div>
  );
}

function TableHead2() {
  return (
    <div className="absolute h-[40px] left-[343.85px] top-0 w-[181.188px]" data-name="TableHead">
      <div aria-hidden="true" className="absolute border-[#bedbff] border-[0px_0.8px_0px_0px] border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Bold',_sans-serif] leading-[20px] left-[8.4px] not-italic text-[#1c398e] text-[14px] text-nowrap top-[8.6px] whitespace-pre">Expense</p>
    </div>
  );
}

function TableHead3() {
  return (
    <div className="absolute h-[40px] left-[525.04px] top-0 w-[236.238px]" data-name="TableHead">
      <div aria-hidden="true" className="absolute border-[#bedbff] border-[0px_0.8px_0px_0px] border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Bold',_sans-serif] leading-[20px] left-[8.4px] not-italic text-[#1c398e] text-[14px] text-nowrap top-[8.6px] whitespace-pre">Description</p>
    </div>
  );
}

function TableHead4() {
  return (
    <div className="absolute h-[40px] left-[761.27px] top-0 w-[157.938px]" data-name="TableHead">
      <div aria-hidden="true" className="absolute border-[#bedbff] border-[0px_0.8px_0px_0px] border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Bold',_sans-serif] leading-[20px] left-[8.4px] not-italic text-[#1c398e] text-[14px] text-nowrap top-[8.6px] whitespace-pre">Person</p>
    </div>
  );
}

function TableHead5() {
  return (
    <div className="absolute h-[40px] left-[919.21px] top-0 w-[179.588px]" data-name="TableHead">
      <p className="absolute font-['Arial:Bold',_sans-serif] leading-[20px] left-[8.4px] not-italic text-[#1c398e] text-[14px] text-nowrap top-[8.6px] whitespace-pre">Amount</p>
    </div>
  );
}

function TableRow() {
  return (
    <div className="absolute bg-blue-100 h-[40px] left-0 top-0 w-[1098.8px]" data-name="TableRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <TableHead />
      <TableHead1 />
      <TableHead2 />
      <TableHead3 />
      <TableHead4 />
      <TableHead5 />
    </div>
  );
}

function TableHeader() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[1098.8px]" data-name="TableHeader">
      <TableRow />
    </div>
  );
}

function TableCell() {
  return (
    <div className="absolute bg-[#ffedd4] h-[36.4px] left-0 top-0 w-[107.15px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[7.2px] whitespace-pre">1</p>
    </div>
  );
}

function TableCell1() {
  return (
    <div className="absolute h-[36.4px] left-[107.15px] top-0 w-[236.7px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8.4px] not-italic text-[14px] text-neutral-950 text-nowrap top-[7.2px] whitespace-pre">05-Jul-2025</p>
    </div>
  );
}

function TableCell2() {
  return (
    <div className="absolute h-[36.4px] left-[343.85px] top-0 w-[181.188px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8.4px] not-italic text-[14px] text-neutral-950 text-nowrap top-[7.2px] whitespace-pre">THINGS</p>
    </div>
  );
}

function TableCell3() {
  return (
    <div className="absolute h-[36.4px] left-[525.04px] top-0 w-[236.238px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8.4px] not-italic text-[14px] text-neutral-950 text-nowrap top-[7.2px] whitespace-pre">SAND</p>
    </div>
  );
}

function TableCell4() {
  return (
    <div className="absolute h-[36.4px] left-[761.27px] top-0 w-[157.938px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8.4px] not-italic text-[14px] text-neutral-950 text-nowrap top-[7.2px] whitespace-pre">JAGA</p>
    </div>
  );
}

function TableCell5() {
  return (
    <div className="absolute h-[36.4px] left-[919.21px] top-0 w-[179.588px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[172.36px] not-italic text-[14px] text-neutral-950 text-nowrap text-right top-[7.2px] translate-x-[-100%] whitespace-pre">5,000</p>
    </div>
  );
}

function TableRow1() {
  return (
    <div className="absolute h-[36.4px] left-0 top-0 w-[1098.8px]" data-name="TableRow">
      <TableCell />
      <TableCell1 />
      <TableCell2 />
      <TableCell3 />
      <TableCell4 />
      <TableCell5 />
    </div>
  );
}

function TableBody() {
  return (
    <div className="absolute h-[36.4px] left-0 top-[40px] w-[1098.8px]" data-name="TableBody">
      <TableRow1 />
    </div>
  );
}

function Table() {
  return (
    <div className="h-[76.4px] relative shrink-0 w-[1098.8px]" data-name="Table">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[76.4px] overflow-clip relative rounded-[inherit] w-[1098.8px]">
        <TableHeader />
        <TableBody />
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="bg-white h-[102px] relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[102px] items-start p-[0.8px] relative w-full">
          <Table />
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-slate-100 h-[36px] relative rounded-[8px] shrink-0 w-[116.838px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#cad5e2] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center px-[32.8px] py-[8.8px] relative w-[116.838px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#314158] text-[14px] text-nowrap whitespace-pre">UPDATE</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-slate-100 h-[36px] relative rounded-[8px] shrink-0 w-[106.175px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#cad5e2] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center px-[32.8px] py-[8.8px] relative w-[106.175px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#314158] text-[14px] text-nowrap whitespace-pre">CLOSE</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="box-border content-stretch flex gap-[16px] h-[52.8px] items-start justify-end pb-0 pt-[16.8px] px-0 relative shrink-0 w-full" data-name="App">
      <div aria-hidden="true" className="absolute border-[0.8px_0px_0px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <Button2 />
      <Button3 />
    </div>
  );
}

function CardContent1() {
  return (
    <div className="bg-white h-[394.4px] relative shrink-0 w-[1148.4px]" data-name="CardContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[24px] h-[394.4px] items-start pb-0 pt-[24px] px-[24px] relative w-[1148.4px]">
        <Card />
        <Card1 />
        <App />
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[24px] h-[502.8px] items-start left-1/2 p-[0.8px] rounded-[14px] top-[24px] translate-x-[-50%] w-[1172px]" data-name="Card">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <CardContent1 />
    </div>
  );
}

function App1() {
  return (
    <div className="bg-gray-100 h-[646.4px] relative shrink-0 w-full" data-name="App">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[646.4px] items-start pb-0 pl-[24px] pt-[24px] relative w-full">
          <Card2 />
        </div>
      </div>
    </div>
  );
}

export default function HostelExpense() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Hostel Expense">
      <App1 />
    </div>
  );
}