import svgPaths from "./svg-10i6qrvoin";

function Heading1() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="absolute font-['Arial:Bold',_sans-serif] leading-[36px] left-0 not-italic text-[30px] text-neutral-950 text-nowrap top-[-2.6px] tracking-[-0.75px] whitespace-pre">Stock Management System</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-0 not-italic text-[#717182] text-[16px] text-nowrap top-[-2.2px] whitespace-pre">Manage your inventory with our comprehensive stock entry system</p>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col h-[60px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <Paragraph />
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M10 2.5V12.5" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p320a7e80} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3053b100} id="Vector_3" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function CardTitle() {
  return (
    <div className="absolute h-[20px] left-[24.8px] top-[24.8px] w-[1054.4px]" data-name="CardTitle">
      <Icon />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[28px] not-italic text-[16px] text-neutral-950 text-nowrap top-[-0.2px] whitespace-pre">Stock Entry Administration</p>
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
    <div className="absolute bg-[#f3f3f5] h-[36px] left-0 rounded-[8px] top-0 w-[251.6px]" data-name="Input">
      <div className="box-border content-stretch flex h-[36px] items-center overflow-clip pl-[12px] pr-[40px] py-[4px] relative rounded-[inherit] w-[251.6px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">06/Oct/2025</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[223.6px] size-[16px] top-[10px]" data-name="Icon">
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

function Container1() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Container">
      <Input />
      <Icon1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[58px] items-start left-0 top-0 w-[251.6px]" data-name="Container">
      <PrimitiveLabel />
      <Container1 />
    </div>
  );
}

function PrimitiveLabel1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Code</p>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-[#f3f3f5] h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[36px] items-center px-[12px] py-[4px] relative w-full">
          <p className="font-['Arial:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Enter code</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[58px] items-start left-[267.6px] top-0 w-[251.6px]" data-name="Container">
      <PrimitiveLabel1 />
      <Input1 />
    </div>
  );
}

function PrimitiveLabel2() {
  return (
    <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Product Name</p>
    </div>
  );
}

function Input2() {
  return (
    <div className="bg-[#f3f3f5] h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[36px] items-center px-[12px] py-[4px] relative w-full">
          <p className="font-['Arial:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Enter product name</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[58px] items-start left-[535.2px] top-0 w-[251.6px]" data-name="Container">
      <PrimitiveLabel2 />
      <Input2 />
    </div>
  );
}

function PrimitiveLabel3() {
  return (
    <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Brand Name</p>
    </div>
  );
}

function Input3() {
  return (
    <div className="bg-[#f3f3f5] h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[36px] items-center px-[12px] py-[4px] relative w-full">
          <p className="font-['Arial:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Enter brand name</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[58px] items-start left-[802.8px] top-0 w-[251.6px]" data-name="Container">
      <PrimitiveLabel3 />
      <Input3 />
    </div>
  );
}

function StockEntryForm() {
  return (
    <div className="h-[58px] relative shrink-0 w-full" data-name="StockEntryForm">
      <Container2 />
      <Container3 />
      <Container4 />
      <Container5 />
    </div>
  );
}

function PrimitiveLabel4() {
  return (
    <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Rate</p>
    </div>
  );
}

function Input4() {
  return (
    <div className="bg-[#f3f3f5] h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[36px] items-center px-[12px] py-[4px] relative w-full">
          <p className="font-['Arial:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">0.00</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[58px] items-start left-0 top-0 w-[340.8px]" data-name="Container">
      <PrimitiveLabel4 />
      <Input4 />
    </div>
  );
}

function PrimitiveLabel5() {
  return (
    <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Quantity</p>
    </div>
  );
}

function Input5() {
  return (
    <div className="bg-[#f3f3f5] h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[36px] items-center px-[12px] py-[4px] relative w-full">
          <p className="font-['Arial:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">0.00</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[58px] items-start left-[356.8px] top-0 w-[340.8px]" data-name="Container">
      <PrimitiveLabel5 />
      <Input5 />
    </div>
  );
}

function PrimitiveLabel6() {
  return (
    <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Scale</p>
    </div>
  );
}

function PrimitiveSpan() {
  return (
    <div className="h-[20px] relative shrink-0 w-[70.763px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[20px] items-center overflow-clip relative rounded-[inherit] w-[70.763px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Select scale</p>
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

function PrimitiveButton() {
  return (
    <div className="bg-[#f3f3f5] h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[36px] items-center justify-between px-[12.8px] py-[0.8px] relative w-full">
          <PrimitiveSpan />
          <Icon2 />
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[58px] items-start left-[713.6px] top-0 w-[340.8px]" data-name="Container">
      <PrimitiveLabel6 />
      <PrimitiveButton />
    </div>
  );
}

function StockEntryForm1() {
  return (
    <div className="h-[58px] relative shrink-0 w-full" data-name="StockEntryForm">
      <Container6 />
      <Container7 />
      <Container8 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-[12.8px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M8 10V2" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p8861580} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p19411800} id="Vector_3" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-white h-[36px] left-0 rounded-[8px] top-[16.8px] w-[91.3px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Icon3 />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[36.8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[6.8px] whitespace-pre">Export</p>
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute left-[12px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M8 2V10" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p26e09a00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p23ad1400} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-[#030213] h-[36px] left-[103.3px] rounded-[8px] top-[16.8px] w-[93.35px]" data-name="Button">
      <Icon4 />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[36px] not-italic text-[14px] text-nowrap text-white top-[6.8px] whitespace-pre">Submit</p>
    </div>
  );
}

function Icon5() {
  return (
    <div className="absolute left-[12px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p12949080} id="Vector" stroke="var(--stroke-0, #030213)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 2V5.33333H5.33333" id="Vector_2" stroke="var(--stroke-0, #030213)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-[#eceef2] h-[36px] left-[208.65px] rounded-[8px] top-[16.8px] w-[94.438px]" data-name="Button">
      <Icon5 />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[36px] not-italic text-[#030213] text-[14px] text-nowrap top-[6.8px] whitespace-pre">Update</p>
    </div>
  );
}

function Icon6() {
  return (
    <div className="absolute left-[12px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M12 4L4 12" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M4 4L12 12" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute bg-[#d4183d] h-[36px] left-[972.21px] rounded-[8px] top-[16.8px] w-[82.188px]" data-name="Button">
      <Icon6 />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[36px] not-italic text-[14px] text-nowrap text-white top-[6.8px] whitespace-pre">Close</p>
    </div>
  );
}

function StockEntryForm2() {
  return (
    <div className="h-[52.8px] relative shrink-0 w-full" data-name="StockEntryForm">
      <div aria-hidden="true" className="absolute border-[0.8px_0px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <Button />
      <Button1 />
      <Button2 />
      <Button3 />
    </div>
  );
}

function CardContent() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[24px] h-[240.8px] items-start left-[0.8px] px-[24px] py-0 top-[74.8px] w-[1102.4px]" data-name="CardContent">
      <StockEntryForm />
      <StockEntryForm1 />
      <StockEntryForm2 />
    </div>
  );
}

function Card() {
  return (
    <div className="bg-white h-[316.4px] relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <CardTitle />
      <CardContent />
    </div>
  );
}

function Icon7() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p2fedb580} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 18.3333V10" id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p2eca8c80} id="Vector_3" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M6.25 3.55832L13.75 7.84999" id="Vector_4" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function CardTitle1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[1054.4px]" data-name="CardTitle">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[1054.4px]">
        <Icon7 />
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[28px] not-italic text-[16px] text-neutral-950 text-nowrap top-[-0.2px] whitespace-pre">Stock Entries</p>
      </div>
    </div>
  );
}

function TableHead() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[191.525px]" data-name="TableHead">
      <p className="absolute font-['Arial:Bold',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.6px] whitespace-pre">Date</p>
    </div>
  );
}

function TableHead1() {
  return (
    <div className="absolute h-[40px] left-[191.53px] top-0 w-[95.125px]" data-name="TableHead">
      <p className="absolute font-['Arial:Bold',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.6px] whitespace-pre">Pcode</p>
    </div>
  );
}

function TableHead2() {
  return (
    <div className="absolute h-[40px] left-[286.65px] top-0 w-[209.15px]" data-name="TableHead">
      <p className="absolute font-['Arial:Bold',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.6px] whitespace-pre">Product Name</p>
    </div>
  );
}

function TableHead3() {
  return (
    <div className="absolute h-[40px] left-[495.8px] top-0 w-[185.238px]" data-name="TableHead">
      <p className="absolute font-['Arial:Bold',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.6px] whitespace-pre">Brand Name</p>
    </div>
  );
}

function TableHead4() {
  return (
    <div className="absolute h-[40px] left-[681.04px] top-0 w-[131.338px]" data-name="TableHead">
      <p className="absolute font-['Arial:Bold',_sans-serif] leading-[20px] left-[123.78px] not-italic text-[14px] text-neutral-950 text-nowrap text-right top-[8.6px] translate-x-[-100%] whitespace-pre">Amount</p>
    </div>
  );
}

function TableHead5() {
  return (
    <div className="absolute h-[40px] left-[812.38px] top-0 w-[145.887px]" data-name="TableHead">
      <p className="absolute font-['Arial:Bold',_sans-serif] leading-[20px] left-[73.2px] not-italic text-[14px] text-center text-neutral-950 text-nowrap top-[8.6px] translate-x-[-50%] whitespace-pre">Stock</p>
    </div>
  );
}

function TableHead6() {
  return (
    <div className="absolute h-[40px] left-[958.26px] top-0 w-[94.537px]" data-name="TableHead">
      <p className="absolute font-['Arial:Bold',_sans-serif] leading-[20px] left-[47.46px] not-italic text-[14px] text-center text-neutral-950 text-nowrap top-[8.6px] translate-x-[-50%] whitespace-pre">Scale</p>
    </div>
  );
}

function TableRow() {
  return (
    <div className="absolute bg-[rgba(236,236,240,0.5)] h-[40px] left-0 top-0 w-[1052.8px]" data-name="TableRow">
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
    <div className="absolute h-[40px] left-0 top-0 w-[1052.8px]" data-name="TableHeader">
      <TableRow />
    </div>
  );
}

function TableCell() {
  return (
    <div className="absolute h-[38.788px] left-0 top-0 w-[191.525px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.19px] whitespace-pre">25-Mar-2023</p>
    </div>
  );
}

function Badge() {
  return (
    <div className="absolute h-[21.587px] left-[8px] rounded-[8px] top-[8.8px] w-[22.438px]" data-name="Badge">
      <div className="h-[21.587px] overflow-clip relative rounded-[inherit] w-[22.438px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[8.8px] not-italic text-[12px] text-neutral-950 text-nowrap top-[1.8px] whitespace-pre">1</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell1() {
  return (
    <div className="absolute h-[38.788px] left-[191.53px] top-0 w-[95.125px]" data-name="TableCell">
      <Badge />
    </div>
  );
}

function TableCell2() {
  return (
    <div className="absolute h-[38.788px] left-[286.65px] top-0 w-[209.15px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.19px] whitespace-pre">BOOKS</p>
    </div>
  );
}

function TableCell3() {
  return (
    <div className="absolute h-[38.788px] left-[495.8px] top-0 w-[185.238px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.19px] whitespace-pre">TNPL</p>
    </div>
  );
}

function TableCell4() {
  return (
    <div className="absolute h-[38.788px] left-[681.04px] top-0 w-[131.338px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[123.38px] not-italic text-[14px] text-neutral-950 text-nowrap text-right top-[8.19px] translate-x-[-100%] whitespace-pre">₹100</p>
    </div>
  );
}

function Badge1() {
  return (
    <div className="absolute bg-[#eceef2] h-[21.587px] left-[43.41px] rounded-[8px] top-[8.8px] w-[59.05px]" data-name="Badge">
      <div className="h-[21.587px] overflow-clip relative rounded-[inherit] w-[59.05px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[29.8px] not-italic text-[#030213] text-[12px] text-center top-[1.8px] translate-x-[-50%] w-[42px]">15 units</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell5() {
  return (
    <div className="absolute h-[38.788px] left-[812.38px] top-0 w-[145.887px]" data-name="TableCell">
      <Badge1 />
    </div>
  );
}

function TableCell6() {
  return (
    <div className="absolute h-[38.788px] left-[958.26px] top-0 w-[94.537px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[47.49px] not-italic text-[14px] text-center text-neutral-950 text-nowrap top-[8.19px] translate-x-[-50%] whitespace-pre">1</p>
    </div>
  );
}

function TableRow1() {
  return (
    <div className="absolute h-[38.788px] left-0 top-0 w-[1052.8px]" data-name="TableRow">
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
    <div className="absolute h-[38.788px] left-0 top-0 w-[191.525px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.19px] whitespace-pre">03-Jul-2025</p>
    </div>
  );
}

function Badge2() {
  return (
    <div className="absolute h-[21.587px] left-[8px] rounded-[8px] top-[8.8px] w-[24.262px]" data-name="Badge">
      <div className="h-[21.587px] overflow-clip relative rounded-[inherit] w-[24.262px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[8.8px] not-italic text-[12px] text-neutral-950 text-nowrap top-[1.8px] whitespace-pre">2</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell8() {
  return (
    <div className="absolute h-[38.788px] left-[191.53px] top-0 w-[95.125px]" data-name="TableCell">
      <Badge2 />
    </div>
  );
}

function TableCell9() {
  return (
    <div className="absolute h-[38.788px] left-[286.65px] top-0 w-[209.15px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.19px] whitespace-pre">DESKTOPS</p>
    </div>
  );
}

function TableCell10() {
  return (
    <div className="absolute h-[38.788px] left-[495.8px] top-0 w-[185.238px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.19px] whitespace-pre">DELL</p>
    </div>
  );
}

function TableCell11() {
  return (
    <div className="absolute h-[38.788px] left-[681.04px] top-0 w-[131.338px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[123.46px] not-italic text-[14px] text-neutral-950 text-nowrap text-right top-[8.19px] translate-x-[-100%] whitespace-pre">₹10,000</p>
    </div>
  );
}

function Badge3() {
  return (
    <div className="absolute bg-[#eceef2] h-[21.587px] left-[43.41px] rounded-[8px] top-[8.8px] w-[59.05px]" data-name="Badge">
      <div className="h-[21.587px] overflow-clip relative rounded-[inherit] w-[59.05px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[29.8px] not-italic text-[#030213] text-[12px] text-center top-[1.8px] translate-x-[-50%] w-[42px]">15 units</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell12() {
  return (
    <div className="absolute h-[38.788px] left-[812.38px] top-0 w-[145.887px]" data-name="TableCell">
      <Badge3 />
    </div>
  );
}

function TableCell13() {
  return (
    <div className="absolute h-[38.788px] left-[958.26px] top-0 w-[94.537px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[47.49px] not-italic text-[14px] text-center text-neutral-950 text-nowrap top-[8.19px] translate-x-[-50%] whitespace-pre">1</p>
    </div>
  );
}

function TableRow2() {
  return (
    <div className="absolute h-[38.788px] left-0 top-[38.79px] w-[1052.8px]" data-name="TableRow">
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
    <div className="absolute h-[38.388px] left-0 top-0 w-[191.525px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.19px] whitespace-pre">10-Jul-2025</p>
    </div>
  );
}

function Badge4() {
  return (
    <div className="absolute h-[21.587px] left-[8px] rounded-[8px] top-[8.8px] w-[24.262px]" data-name="Badge">
      <div className="h-[21.587px] overflow-clip relative rounded-[inherit] w-[24.262px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[8.8px] not-italic text-[12px] text-neutral-950 text-nowrap top-[1.8px] whitespace-pre">3</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell15() {
  return (
    <div className="absolute h-[38.388px] left-[191.53px] top-0 w-[95.125px]" data-name="TableCell">
      <Badge4 />
    </div>
  );
}

function TableCell16() {
  return (
    <div className="absolute h-[38.388px] left-[286.65px] top-0 w-[209.15px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.19px] whitespace-pre">KEYBOARDS</p>
    </div>
  );
}

function TableCell17() {
  return (
    <div className="absolute h-[38.388px] left-[495.8px] top-0 w-[185.238px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.19px] whitespace-pre">DELL</p>
    </div>
  );
}

function TableCell18() {
  return (
    <div className="absolute h-[38.388px] left-[681.04px] top-0 w-[131.338px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[124.24px] not-italic text-[14px] text-neutral-950 text-nowrap text-right top-[8.19px] translate-x-[-100%] whitespace-pre">₹300</p>
    </div>
  );
}

function Badge5() {
  return (
    <div className="absolute bg-[#eceef2] h-[21.587px] left-[43.41px] rounded-[8px] top-[8.8px] w-[59.05px]" data-name="Badge">
      <div className="h-[21.587px] overflow-clip relative rounded-[inherit] w-[59.05px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[29.8px] not-italic text-[#030213] text-[12px] text-center top-[1.8px] translate-x-[-50%] w-[42px]">15 units</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell19() {
  return (
    <div className="absolute h-[38.388px] left-[812.38px] top-0 w-[145.887px]" data-name="TableCell">
      <Badge5 />
    </div>
  );
}

function TableCell20() {
  return (
    <div className="absolute h-[38.388px] left-[958.26px] top-0 w-[94.537px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[47.49px] not-italic text-[14px] text-center text-neutral-950 text-nowrap top-[8.19px] translate-x-[-50%] whitespace-pre">1</p>
    </div>
  );
}

function TableRow3() {
  return (
    <div className="absolute h-[38.388px] left-0 top-[77.58px] w-[1052.8px]" data-name="TableRow">
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

function TableBody() {
  return (
    <div className="absolute h-[115.963px] left-0 top-[40px] w-[1052.8px]" data-name="TableBody">
      <TableRow1 />
      <TableRow2 />
      <TableRow3 />
    </div>
  );
}

function Table() {
  return (
    <div className="h-[155.963px] overflow-clip relative shrink-0 w-full" data-name="Table">
      <TableHeader />
      <TableBody />
    </div>
  );
}

function StockEntryTable() {
  return (
    <div className="h-[157.562px] relative rounded-[8px] shrink-0 w-[1054.4px]" data-name="StockEntryTable">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[157.562px] items-start p-[0.8px] relative w-[1054.4px]">
        <Table />
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="bg-white h-[257.163px] relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[30px] h-[257.163px] items-start pb-[0.8px] pl-[24.8px] pr-[0.8px] pt-[24.8px] relative w-full">
          <CardTitle1 />
          <StockEntryTable />
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[597.562px] items-start relative shrink-0 w-full" data-name="Container">
      <Card />
      <Card1 />
    </div>
  );
}

export default function StockEntry() {
  return (
    <div className="bg-white relative size-full" data-name="Stock Entry">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start pb-0 pt-[24px] px-[24px] relative size-full">
          <Container />
          <Container9 />
        </div>
      </div>
    </div>
  );
}