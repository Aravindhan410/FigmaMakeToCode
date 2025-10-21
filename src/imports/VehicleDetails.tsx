import svgPaths from "./svg-r45sgnjjyl";

function Icon() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M6.66667 1.66667V5" id="Vector" stroke="var(--stroke-0, #030213)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 1.66667V5" id="Vector_2" stroke="var(--stroke-0, #030213)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1da67b80} id="Vector_3" stroke="var(--stroke-0, #030213)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M2.5 8.33333H17.5" id="Vector_4" stroke="var(--stroke-0, #030213)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M6.66667 11.6667H6.675" id="Vector_5" stroke="var(--stroke-0, #030213)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 11.6667H10.0083" id="Vector_6" stroke="var(--stroke-0, #030213)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 11.6667H13.3417" id="Vector_7" stroke="var(--stroke-0, #030213)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M6.66667 15H6.675" id="Vector_8" stroke="var(--stroke-0, #030213)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 15H10.0083" id="Vector_9" stroke="var(--stroke-0, #030213)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 15H13.3417" id="Vector_10" stroke="var(--stroke-0, #030213)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function CardTitle() {
  return (
    <div className="h-[20px] relative shrink-0 w-[1100.4px]" data-name="CardTitle">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[1100.4px]">
        <Icon />
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[28px] not-italic text-[16px] text-neutral-950 text-nowrap top-[-0.2px] whitespace-pre">Vehicle Registration Details</p>
      </div>
    </div>
  );
}

function PrimitiveLabel() {
  return (
    <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Vehicle No</p>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[#f3f3f5] h-[44px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[44px] items-center px-[12px] py-[4px] relative w-full">
          <p className="font-['Arial:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Enter vehicle number</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[66px] items-start left-0 top-0 w-[350.8px]" data-name="Container">
      <PrimitiveLabel />
      <Input />
    </div>
  );
}

function PrimitiveLabel1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Vehicle Type</p>
    </div>
  );
}

function PrimitiveSpan() {
  return (
    <div className="h-[20px] relative shrink-0 w-[113.95px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[20px] items-center overflow-clip relative rounded-[inherit] w-[113.95px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Select vehicle type</p>
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

function Container1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[66px] items-start left-[374.8px] top-0 w-[350.8px]" data-name="Container">
      <PrimitiveLabel1 />
      <PrimitiveButton />
    </div>
  );
}

function PrimitiveLabel2() {
  return (
    <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Registration Date</p>
    </div>
  );
}

function Input1() {
  return (
    <div className="absolute bg-[#f3f3f5] h-[44px] left-0 rounded-[8px] top-0 w-[350.8px]" data-name="Input">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-[322.8px] size-[16px] top-[14px]" data-name="Icon">
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

function Container2() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="Container">
      <Input1 />
      <Icon2 />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[66px] items-start left-[749.6px] top-0 w-[350.8px]" data-name="Container">
      <PrimitiveLabel2 />
      <Container2 />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute h-[66px] left-0 top-0 w-[1100.4px]" data-name="Container">
      <Container />
      <Container1 />
      <Container3 />
    </div>
  );
}

function PrimitiveLabel3() {
  return (
    <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Chassis No</p>
    </div>
  );
}

function Input2() {
  return (
    <div className="bg-[#f3f3f5] h-[44px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[44px] items-center px-[12px] py-[4px] relative w-full">
          <p className="font-['Arial:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Enter chassis number</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[66px] items-start left-0 top-0 w-[538.2px]" data-name="Container">
      <PrimitiveLabel3 />
      <Input2 />
    </div>
  );
}

function PrimitiveLabel4() {
  return (
    <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Remark</p>
    </div>
  );
}

function Input3() {
  return (
    <div className="bg-[#f3f3f5] h-[44px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[44px] items-center px-[12px] py-[4px] relative w-full">
          <p className="font-['Arial:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Enter remarks</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[66px] items-start left-[562.2px] top-0 w-[538.2px]" data-name="Container">
      <PrimitiveLabel4 />
      <Input3 />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute h-[66px] left-0 top-[90px] w-[1100.4px]" data-name="Container">
      <Container5 />
      <Container6 />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#030213] box-border content-stretch flex gap-[8px] h-[44px] items-center justify-center left-[991.05px] px-[32px] py-[8px] rounded-[8px] top-[196px] w-[109.35px]" data-name="Button">
      <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">Submit</p>
    </div>
  );
}

function VehicleDetailsForm() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[1100.4px]" data-name="VehicleDetailsForm">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[1100.4px]">
        <Container4 />
        <Container7 />
        <Button />
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[46px] h-[355.6px] items-start left-0 pl-[24.8px] pr-[0.8px] py-[24.8px] rounded-[14px] top-[23.99px] w-[1150px]" data-name="Card">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <CardTitle />
      <VehicleDetailsForm />
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p33ed6f00} id="Vector" stroke="var(--stroke-0, #030213)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M12.5 15H7.5" id="Vector_2" stroke="var(--stroke-0, #030213)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p2f5b2980} id="Vector_3" stroke="var(--stroke-0, #030213)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p76e7200} id="Vector_4" stroke="var(--stroke-0, #030213)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.pce04cf0} id="Vector_5" stroke="var(--stroke-0, #030213)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function CardTitle1() {
  return (
    <div className="absolute h-[20px] left-[24.8px] top-[24.8px] w-[1100.4px]" data-name="CardTitle">
      <Icon3 />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[28px] not-italic text-[16px] text-neutral-950 text-nowrap top-[-0.2px] whitespace-pre">Vehicle Records</p>
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute left-0 size-[16px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M2.66667 6H13.3333" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2.66667 10H13.3333" id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 2L5.33333 14" id="Vector_3" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 2L9.33333 14" id="Vector_4" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function VehicleDataTable() {
  return (
    <div className="absolute h-[20px] left-[8px] top-[9.8px] w-[50.1px]" data-name="VehicleDataTable">
      <Icon4 />
      <p className="absolute font-['Arial:Bold',_sans-serif] leading-[20px] left-[20px] not-italic text-[14px] text-neutral-950 text-nowrap top-[-1.2px] whitespace-pre">S.No</p>
    </div>
  );
}

function TableHead() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[66.1px]" data-name="TableHead">
      <VehicleDataTable />
    </div>
  );
}

function Icon5() {
  return (
    <div className="absolute left-0 size-[16px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p264a0480} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10 12H6" id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p37bb0d00} id="Vector_3" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1c171d80} id="Vector_4" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p48c6d00} id="Vector_5" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function VehicleDataTable1() {
  return (
    <div className="absolute h-[20px] left-[8px] top-[9.8px] w-[223.288px]" data-name="VehicleDataTable">
      <Icon5 />
      <p className="absolute font-['Arial:Bold',_sans-serif] leading-[20px] left-[20px] not-italic text-[14px] text-neutral-950 text-nowrap top-[-1.2px] whitespace-pre">Vehicle No</p>
    </div>
  );
}

function TableHead1() {
  return (
    <div className="absolute h-[40px] left-[66.1px] top-0 w-[239.288px]" data-name="TableHead">
      <VehicleDataTable1 />
    </div>
  );
}

function TableHead2() {
  return (
    <div className="absolute h-[40px] left-[305.39px] top-0 w-[218.338px]" data-name="TableHead">
      <p className="absolute font-['Arial:Bold',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.6px] whitespace-pre">Vehicle Type</p>
    </div>
  );
}

function TableHead3() {
  return (
    <div className="absolute h-[40px] left-[523.73px] top-0 w-[195.35px]" data-name="TableHead">
      <p className="absolute font-['Arial:Bold',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.6px] whitespace-pre">Chassis No</p>
    </div>
  );
}

function Icon6() {
  return (
    <div className="absolute left-0 size-[16px] top-[2px]" data-name="Icon">
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

function VehicleDataTable2() {
  return (
    <div className="absolute h-[20px] left-[8px] top-[9.8px] w-[199.975px]" data-name="VehicleDataTable">
      <Icon6 />
      <p className="absolute font-['Arial:Bold',_sans-serif] leading-[20px] left-[20px] not-italic text-[14px] text-neutral-950 text-nowrap top-[-1.2px] whitespace-pre">Reg Date</p>
    </div>
  );
}

function TableHead4() {
  return (
    <div className="absolute h-[40px] left-[719.08px] top-0 w-[215.975px]" data-name="TableHead">
      <VehicleDataTable2 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="absolute left-0 size-[16px] top-[2px]" data-name="Icon">
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

function VehicleDataTable3() {
  return (
    <div className="absolute h-[20px] left-[8px] top-[9.8px] w-[195.35px]" data-name="VehicleDataTable">
      <Icon7 />
      <p className="absolute font-['Arial:Bold',_sans-serif] leading-[20px] left-[20px] not-italic text-[14px] text-neutral-950 text-nowrap top-[-1.2px] whitespace-pre">Remark</p>
    </div>
  );
}

function TableHead5() {
  return (
    <div className="absolute h-[40px] left-[935.05px] top-0 w-[211.35px]" data-name="TableHead">
      <VehicleDataTable3 />
    </div>
  );
}

function TableRow() {
  return (
    <div className="absolute bg-[rgba(236,236,240,0.5)] h-[40px] left-0 top-0 w-[1146.4px]" data-name="TableRow">
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
    <div className="absolute h-[40px] left-[2px] top-0 w-[1146.4px]" data-name="TableHeader">
      <TableRow />
    </div>
  );
}

function TableCell() {
  return (
    <div className="absolute h-[38.788px] left-0 top-0 w-[66.1px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[10px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.19px] whitespace-pre">1</p>
    </div>
  );
}

function TableCell1() {
  return (
    <div className="absolute h-[38.788px] left-[66.1px] top-0 w-[239.288px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[#030213] text-[14px] text-nowrap top-[8.19px] whitespace-pre">33</p>
    </div>
  );
}

function Badge() {
  return (
    <div className="absolute bg-blue-100 h-[21.587px] left-[8px] rounded-[8px] top-[8.8px] w-[39.825px]" data-name="Badge">
      <div className="h-[21.587px] overflow-clip relative rounded-[inherit] w-[39.825px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[8.8px] not-italic text-[#193cb8] text-[12px] text-nowrap top-[1.8px] whitespace-pre">BUS</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell2() {
  return (
    <div className="absolute h-[38.788px] left-[305.39px] top-0 w-[218.338px]" data-name="TableCell">
      <Badge />
    </div>
  );
}

function TableCell3() {
  return (
    <div className="absolute h-[38.788px] left-[523.73px] top-0 w-[195.35px]" data-name="TableCell">
      <p className="absolute font-['Consolas:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.99px] whitespace-pre">1776</p>
    </div>
  );
}

function TableCell4() {
  return (
    <div className="absolute h-[38.788px] left-[719.08px] top-0 w-[215.975px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.19px] whitespace-pre">25-Mar-23</p>
    </div>
  );
}

function TableCell5() {
  return (
    <div className="absolute h-[38.788px] left-[935.05px] overflow-clip top-0 w-[211.35px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.19px] whitespace-pre">LIKE SUND...</p>
    </div>
  );
}

function TableRow1() {
  return (
    <div className="absolute bg-orange-50 h-[38.788px] left-0 top-0 w-[1146.4px]" data-name="TableRow">
      <div aria-hidden="true" className="absolute border-[#ff8904] border-[0px_0px_0.8px_4px] border-solid inset-0 pointer-events-none" />
      <TableCell />
      <TableCell1 />
      <TableCell2 />
      <TableCell3 />
      <TableCell4 />
      <TableCell5 />
    </div>
  );
}

function TableCell6() {
  return (
    <div className="absolute h-[38.788px] left-0 top-0 w-[66.1px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.19px] whitespace-pre">2</p>
    </div>
  );
}

function TableCell7() {
  return (
    <div className="absolute h-[38.788px] left-[66.1px] top-0 w-[239.288px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[#030213] text-[14px] text-nowrap top-[8.19px] whitespace-pre">TN58</p>
    </div>
  );
}

function Badge1() {
  return (
    <div className="absolute bg-green-100 h-[21.587px] left-[8px] rounded-[8px] top-[8.8px] w-[41.913px]" data-name="Badge">
      <div className="h-[21.587px] overflow-clip relative rounded-[inherit] w-[41.913px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[8.8px] not-italic text-[#016630] text-[12px] text-nowrap top-[1.8px] whitespace-pre">VAN</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell8() {
  return (
    <div className="absolute h-[38.788px] left-[305.39px] top-0 w-[218.338px]" data-name="TableCell">
      <Badge1 />
    </div>
  );
}

function TableCell9() {
  return (
    <div className="absolute h-[38.788px] left-[523.73px] top-0 w-[195.35px]" data-name="TableCell">
      <p className="absolute font-['Consolas:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.99px] whitespace-pre">526489</p>
    </div>
  );
}

function TableCell10() {
  return (
    <div className="absolute h-[38.788px] left-[719.08px] top-0 w-[215.975px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.19px] whitespace-pre">10-Jul-25</p>
    </div>
  );
}

function TableCell11() {
  return (
    <div className="absolute h-[38.788px] left-[935.05px] overflow-clip top-0 w-[211.35px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.19px] whitespace-pre">NEW</p>
    </div>
  );
}

function TableRow2() {
  return (
    <div className="absolute h-[38.788px] left-0 top-[38.79px] w-[1146.4px]" data-name="TableRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <TableCell6 />
      <TableCell7 />
      <TableCell8 />
      <TableCell9 />
      <TableCell10 />
      <TableCell11 />
    </div>
  );
}

function TableCell12() {
  return (
    <div className="absolute h-[48px] left-0 top-0 w-[1146.4px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[574.19px] not-italic text-[#717182] text-[14px] text-center text-nowrap top-[13px] translate-x-[-50%] whitespace-pre">Add more vehicle records...</p>
    </div>
  );
}

function TableRow3() {
  return (
    <div className="absolute h-[48px] left-0 top-[77.58px] w-[1146.4px]" data-name="TableRow">
      <TableCell12 />
    </div>
  );
}

function TableBody() {
  return (
    <div className="absolute h-[125.575px] left-[2px] top-[40px] w-[1146.4px]" data-name="TableBody">
      <TableRow1 />
      <TableRow2 />
      <TableRow3 />
    </div>
  );
}

function Table() {
  return (
    <div className="h-[165.575px] overflow-clip relative shrink-0 w-full" data-name="Table">
      <TableHeader />
      <TableBody />
    </div>
  );
}

function VehicleDataTable4() {
  return (
    <div className="absolute content-stretch flex flex-col h-[165.575px] items-start left-[0.8px] overflow-clip top-[90.8px] w-[1148.4px]" data-name="VehicleDataTable">
      <Table />
    </div>
  );
}

function Card1() {
  return (
    <div className="absolute bg-white h-[281.175px] left-0 rounded-[14px] top-[381.59px] w-[1150px]" data-name="Card">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <CardTitle1 />
      <VehicleDataTable4 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="absolute left-[12.8px] size-[16px] top-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M12 4L4 12" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M4 4L12 12" id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white h-[44px] relative rounded-[8px] shrink-0 w-[83.787px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[44px] relative w-[83.787px]">
        <Icon8 />
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[36.8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[10.8px] whitespace-pre">Close</p>
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="absolute left-[12px] size-[16px] top-[14px]" data-name="Icon">
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
    <div className="bg-[#030213] h-[44px] relative rounded-[8px] shrink-0 w-[94.438px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[44px] relative w-[94.438px]">
        <Icon9 />
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[36px] not-italic text-[14px] text-nowrap text-white top-[10.8px] whitespace-pre">Update</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute box-border content-stretch flex gap-[16px] h-[68.8px] items-start justify-end left-0 pb-0 pt-[24.8px] px-0 top-[774.76px] w-[1150px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.8px_0px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <Button1 />
      <Button2 />
    </div>
  );
}

export default function VehicleDetails() {
  return (
    <div className="bg-[rgba(255,255,255,0.97)] relative size-full" data-name="Vehicle Details">
      <Card />
      <Card1 />
      <Container8 />
    </div>
  );
}