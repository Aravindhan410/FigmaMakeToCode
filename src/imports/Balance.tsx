import svgPaths from "./svg-zpvn649wwc";

function Label() {
  return (
    <div className="h-[20px] relative shrink-0 w-[44.4px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[44.4px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-0 not-italic text-[#717182] text-[14px] text-nowrap top-[-1.2px] whitespace-pre">Month:</p>
      </div>
    </div>
  );
}

function PrimitiveSpan() {
  return (
    <div className="h-[20px] relative shrink-0 w-[21.95px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[20px] items-center overflow-clip relative rounded-[inherit] w-[21.95px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">FEB</p>
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
    <div className="bg-[#f3f3f5] h-[36px] relative rounded-[8px] shrink-0 w-[192px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[36px] items-center justify-between px-[12.8px] py-[0.8px] relative w-[192px]">
        <PrimitiveSpan />
        <Icon />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[36px] relative shrink-0 w-[248.4px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[36px] items-center relative w-[248.4px]">
        <Label />
        <PrimitiveButton />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-[rgba(0,0,0,0.1)] h-[24px] relative shrink-0 w-px" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] w-px" />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[28px] relative shrink-0 w-[87.35px]" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[87.35px]">
        <p className="absolute font-['Arial:Bold',_sans-serif] leading-[28px] left-0 not-italic text-[20px] text-neutral-950 text-nowrap top-[-2.2px] whitespace-pre">BALANCE</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[36px] relative shrink-0 w-[384.75px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[24px] h-[36px] items-center relative w-[384.75px]">
        <Container />
        <Container1 />
        <Heading1 />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[10.8px] size-[16px] top-[8px]" data-name="Icon">
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

function Button() {
  return (
    <div className="bg-white h-[32px] relative rounded-[8px] shrink-0 w-[87.3px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[32px] relative w-[87.3px]">
        <Icon1 />
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[34.8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[4.8px] whitespace-pre">Export</p>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-[10.8px] size-[16px] top-[8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p19987d80} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M14 2V5.33333H10.6667" id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2a3e9c80} id="Vector_3" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M5.33333 10.6667H2V14" id="Vector_4" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white h-[32px] relative rounded-[8px] shrink-0 w-[92.037px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[32px] relative w-[92.037px]">
        <Icon2 />
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[34.8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[4.8px] whitespace-pre">Update</p>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-[10.8px] size-[16px] top-[8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M12 4L4 12" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M4 4L12 12" id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-white h-[32px] relative rounded-[8px] shrink-0 w-[79.787px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[32px] relative w-[79.787px]">
        <Icon3 />
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[34.8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[4.8px] whitespace-pre">Close</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[32px] relative shrink-0 w-[283.125px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[32px] items-center relative w-[283.125px]">
        <Button />
        <Button1 />
        <Button2 />
      </div>
    </div>
  );
}

function BalanceHeader() {
  return (
    <div className="absolute bg-white box-border content-stretch flex h-[84.8px] items-center justify-between left-[0.8px] pb-[0.8px] pt-0 px-[24px] top-[0.8px] w-[1086.4px]" data-name="BalanceHeader">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <Container2 />
      <Container3 />
    </div>
  );
}

function CardTitle() {
  return (
    <div className="absolute h-[20px] left-[24.8px] top-[24.8px] w-[198px]" data-name="CardTitle">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-1.2px] whitespace-pre">Total Items</p>
    </div>
  );
}

function BalanceContent() {
  return (
    <div className="content-stretch flex h-[31.988px] items-start relative shrink-0 w-full" data-name="BalanceContent">
      <p className="basis-0 font-['Arial:Bold',_sans-serif] grow leading-[32px] min-h-px min-w-px not-italic relative shrink-0 text-[24px] text-neutral-950">20</p>
    </div>
  );
}

function BalanceContent1() {
  return (
    <div className="content-stretch flex h-[15.988px] items-start relative shrink-0 w-full" data-name="BalanceContent">
      <p className="basis-0 font-['Arial:Regular',_sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#717182] text-[12px]">Inventory items tracked</p>
    </div>
  );
}

function CardContent() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[1.907e_-6px] h-[71.975px] items-start left-[0.8px] px-[24px] py-0 top-[82.8px] w-[246px]" data-name="CardContent">
      <BalanceContent />
      <BalanceContent1 />
    </div>
  );
}

function Card() {
  return (
    <div className="absolute bg-white h-[155.575px] left-0 rounded-[14px] top-0 w-[247.6px]" data-name="Card">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <CardTitle />
      <CardContent />
    </div>
  );
}

function CardTitle1() {
  return (
    <div className="absolute h-[20px] left-[24.8px] top-[24.8px] w-[198px]" data-name="CardTitle">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-1.2px] whitespace-pre">Items with Balance</p>
    </div>
  );
}

function BalanceContent2() {
  return (
    <div className="content-stretch flex h-[31.988px] items-start relative shrink-0 w-full" data-name="BalanceContent">
      <p className="basis-0 font-['Arial:Bold',_sans-serif] grow leading-[32px] min-h-px min-w-px not-italic relative shrink-0 text-[#00a63e] text-[24px]">0</p>
    </div>
  );
}

function BalanceContent3() {
  return (
    <div className="content-stretch flex h-[15.988px] items-start relative shrink-0 w-full" data-name="BalanceContent">
      <p className="basis-0 font-['Arial:Regular',_sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#717182] text-[12px]">Items in stock</p>
    </div>
  );
}

function CardContent1() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[1.907e_-6px] h-[71.975px] items-start left-[0.8px] px-[24px] py-0 top-[82.8px] w-[246px]" data-name="CardContent">
      <BalanceContent2 />
      <BalanceContent3 />
    </div>
  );
}

function Card1() {
  return (
    <div className="absolute bg-white h-[155.575px] left-[263.6px] rounded-[14px] top-0 w-[247.6px]" data-name="Card">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <CardTitle1 />
      <CardContent1 />
    </div>
  );
}

function CardTitle2() {
  return (
    <div className="absolute h-[20px] left-[24.8px] top-[24.8px] w-[198px]" data-name="CardTitle">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-1.2px] whitespace-pre">Out of Stock</p>
    </div>
  );
}

function BalanceContent4() {
  return (
    <div className="content-stretch flex h-[31.988px] items-start relative shrink-0 w-full" data-name="BalanceContent">
      <p className="basis-0 font-['Arial:Bold',_sans-serif] grow leading-[32px] min-h-px min-w-px not-italic relative shrink-0 text-[#e7000b] text-[24px]">20</p>
    </div>
  );
}

function BalanceContent5() {
  return (
    <div className="content-stretch flex h-[15.988px] items-start relative shrink-0 w-full" data-name="BalanceContent">
      <p className="basis-0 font-['Arial:Regular',_sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#717182] text-[12px]">Items need restocking</p>
    </div>
  );
}

function CardContent2() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[1.907e_-6px] h-[71.975px] items-start left-[0.8px] px-[24px] py-0 top-[82.8px] w-[246px]" data-name="CardContent">
      <BalanceContent4 />
      <BalanceContent5 />
    </div>
  );
}

function Card2() {
  return (
    <div className="absolute bg-white h-[155.575px] left-[527.2px] rounded-[14px] top-0 w-[247.6px]" data-name="Card">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <CardTitle2 />
      <CardContent2 />
    </div>
  );
}

function CardTitle3() {
  return (
    <div className="absolute h-[20px] left-[24.8px] top-[24.8px] w-[198px]" data-name="CardTitle">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-1.2px] whitespace-pre">Total Value</p>
    </div>
  );
}

function BalanceContent6() {
  return (
    <div className="h-[31.988px] relative shrink-0 w-full" data-name="BalanceContent">
      <p className="absolute font-['Arial:Bold',_sans-serif] leading-[32px] left-0 not-italic text-[#155dfc] text-[24px] top-[-2px] w-[62px]">₹0.00</p>
    </div>
  );
}

function BalanceContent7() {
  return (
    <div className="content-stretch flex h-[15.988px] items-start relative shrink-0 w-full" data-name="BalanceContent">
      <p className="basis-0 font-['Arial:Regular',_sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#717182] text-[12px]">Current inventory value</p>
    </div>
  );
}

function CardContent3() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[1.907e_-6px] h-[71.975px] items-start left-[0.8px] px-[24px] py-0 top-[82.8px] w-[246px]" data-name="CardContent">
      <BalanceContent6 />
      <BalanceContent7 />
    </div>
  );
}

function Card3() {
  return (
    <div className="absolute bg-white h-[155.575px] left-[790.8px] rounded-[14px] top-0 w-[247.6px]" data-name="Card">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <CardTitle3 />
      <CardContent3 />
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[155.575px] relative shrink-0 w-full" data-name="Container">
      <Card />
      <Card1 />
      <Card2 />
      <Card3 />
    </div>
  );
}

function CardTitle4() {
  return (
    <div className="absolute h-[16px] left-[24px] top-[24px] w-[988.8px]" data-name="CardTitle">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[-2.2px] whitespace-pre">Mess Inventory Balance - February 2025-2026</p>
    </div>
  );
}

function BalanceContent8() {
  return (
    <div className="absolute h-[20px] left-[24px] top-[46px] w-[988.8px]" data-name="BalanceContent">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-0 not-italic text-[#717182] text-[14px] text-nowrap top-[-1.2px] whitespace-pre">Track quantity and rates for all mess items</p>
    </div>
  );
}

function CardHeader() {
  return (
    <div className="absolute h-[66px] left-[0.8px] top-[0.8px] w-[1036.8px]" data-name="CardHeader">
      <CardTitle4 />
      <BalanceContent8 />
    </div>
  );
}

function TableHead() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[64px]" data-name="TableHead">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.6px] whitespace-pre">Sno</p>
    </div>
  );
}

function TableHead1() {
  return (
    <div className="absolute h-[40px] left-[64px] top-0 w-[128px]" data-name="TableHead">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.6px] whitespace-pre">MessMonth</p>
    </div>
  );
}

function TableHead2() {
  return (
    <div className="absolute h-[40px] left-[192px] top-0 w-[331.2px]" data-name="TableHead">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.6px] whitespace-pre">Items</p>
    </div>
  );
}

function TableHead3() {
  return (
    <div className="absolute h-[40px] left-[523.2px] top-0 w-[128px]" data-name="TableHead">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[120.33px] not-italic text-[14px] text-neutral-950 text-nowrap text-right top-[8.6px] translate-x-[-100%] whitespace-pre">BalanceQty</p>
    </div>
  );
}

function TableHead4() {
  return (
    <div className="absolute h-[40px] left-[651.2px] top-0 w-[128px]" data-name="TableHead">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[120.64px] not-italic text-[14px] text-neutral-950 text-nowrap text-right top-[8.6px] translate-x-[-100%] whitespace-pre">BalanceRate</p>
    </div>
  );
}

function TableHead5() {
  return (
    <div className="absolute h-[40px] left-[779.2px] top-0 w-[128px]" data-name="TableHead">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.6px] whitespace-pre">Academic</p>
    </div>
  );
}

function TableHead6() {
  return (
    <div className="absolute h-[40px] left-[907.2px] top-0 w-[80px]" data-name="TableHead">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.6px] whitespace-pre">Status</p>
    </div>
  );
}

function TableRow() {
  return (
    <div className="absolute bg-[rgba(236,236,240,0.5)] h-[40px] left-0 top-0 w-[987.2px]" data-name="TableRow">
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
    <div className="absolute h-[40px] left-0 top-0 w-[987.2px]" data-name="TableHeader">
      <TableRow />
    </div>
  );
}

function TableCell() {
  return (
    <div className="absolute h-[38.788px] left-0 top-0 w-[64px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.19px] whitespace-pre">1</p>
    </div>
  );
}

function Badge() {
  return (
    <div className="absolute bg-blue-50 h-[21.587px] left-[8px] rounded-[8px] top-[8.8px] w-[37.1px]" data-name="Badge">
      <div className="h-[21.587px] overflow-clip relative rounded-[inherit] w-[37.1px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[8.8px] not-italic text-[#1447e6] text-[12px] text-nowrap top-[1.8px] whitespace-pre">FEB</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#bedbff] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell1() {
  return (
    <div className="absolute h-[38.788px] left-[64px] top-0 w-[128px]" data-name="TableCell">
      <Badge />
    </div>
  );
}

function TableCell2() {
  return (
    <div className="absolute h-[38.788px] left-[192px] top-0 w-[331.2px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.19px] whitespace-pre">Acid</p>
    </div>
  );
}

function TableCell3() {
  return (
    <div className="absolute h-[38.788px] left-[523.2px] top-0 w-[128px]" data-name="TableCell">
      <p className="absolute font-['Consolas:Regular',_sans-serif] leading-[20px] left-[120.3px] not-italic text-[14px] text-neutral-950 text-nowrap text-right top-[8.99px] translate-x-[-100%] whitespace-pre">0</p>
    </div>
  );
}

function TableCell4() {
  return (
    <div className="absolute h-[38.788px] left-[651.2px] top-0 w-[128px]" data-name="TableCell">
      <p className="absolute font-['Consolas:Regular',_sans-serif] leading-[20px] left-[120.5px] not-italic text-[14px] text-neutral-950 text-right top-[8.99px] translate-x-[-100%] w-[39px]">₹0.00</p>
    </div>
  );
}

function Badge1() {
  return (
    <div className="absolute bg-green-50 h-[21.587px] left-[8px] rounded-[8px] top-[8.8px] w-[75.763px]" data-name="Badge">
      <div className="h-[21.587px] overflow-clip relative rounded-[inherit] w-[75.763px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[8.8px] not-italic text-[#008236] text-[12px] text-nowrap top-[1.8px] whitespace-pre">2025-2026</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#b9f8cf] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell5() {
  return (
    <div className="absolute h-[38.788px] left-[779.2px] top-0 w-[128px]" data-name="TableCell">
      <Badge1 />
    </div>
  );
}

function Badge2() {
  return (
    <div className="absolute bg-red-50 h-[21.587px] left-[8px] rounded-[8px] top-[8.8px] w-[52.112px]" data-name="Badge">
      <div className="h-[21.587px] overflow-clip relative rounded-[inherit] w-[52.112px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[8.8px] not-italic text-[#c10007] text-[12px] text-nowrap top-[1.8px] whitespace-pre">Empty</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#ffc9c9] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell6() {
  return (
    <div className="absolute h-[38.788px] left-[907.2px] top-0 w-[80px]" data-name="TableCell">
      <Badge2 />
    </div>
  );
}

function TableRow1() {
  return (
    <div className="absolute h-[38.788px] left-0 top-0 w-[987.2px]" data-name="TableRow">
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
    <div className="absolute h-[38.788px] left-0 top-0 w-[64px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.19px] whitespace-pre">2</p>
    </div>
  );
}

function Badge3() {
  return (
    <div className="absolute bg-blue-50 h-[21.587px] left-[8px] rounded-[8px] top-[8.8px] w-[37.1px]" data-name="Badge">
      <div className="h-[21.587px] overflow-clip relative rounded-[inherit] w-[37.1px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[8.8px] not-italic text-[#1447e6] text-[12px] text-nowrap top-[1.8px] whitespace-pre">FEB</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#bedbff] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell8() {
  return (
    <div className="absolute h-[38.788px] left-[64px] top-0 w-[128px]" data-name="TableCell">
      <Badge3 />
    </div>
  );
}

function TableCell9() {
  return (
    <div className="absolute h-[38.788px] left-[192px] top-0 w-[331.2px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.19px] whitespace-pre">Annachi Flower</p>
    </div>
  );
}

function TableCell10() {
  return (
    <div className="absolute h-[38.788px] left-[523.2px] top-0 w-[128px]" data-name="TableCell">
      <p className="absolute font-['Consolas:Regular',_sans-serif] leading-[20px] left-[120.3px] not-italic text-[14px] text-neutral-950 text-nowrap text-right top-[8.99px] translate-x-[-100%] whitespace-pre">0</p>
    </div>
  );
}

function TableCell11() {
  return (
    <div className="absolute h-[38.788px] left-[651.2px] top-0 w-[128px]" data-name="TableCell">
      <p className="absolute font-['Consolas:Regular',_sans-serif] leading-[20px] left-[120.5px] not-italic text-[14px] text-neutral-950 text-right top-[8.99px] translate-x-[-100%] w-[39px]">₹0.00</p>
    </div>
  );
}

function Badge4() {
  return (
    <div className="absolute bg-green-50 h-[21.587px] left-[8px] rounded-[8px] top-[8.8px] w-[75.763px]" data-name="Badge">
      <div className="h-[21.587px] overflow-clip relative rounded-[inherit] w-[75.763px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[8.8px] not-italic text-[#008236] text-[12px] text-nowrap top-[1.8px] whitespace-pre">2025-2026</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#b9f8cf] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell12() {
  return (
    <div className="absolute h-[38.788px] left-[779.2px] top-0 w-[128px]" data-name="TableCell">
      <Badge4 />
    </div>
  );
}

function Badge5() {
  return (
    <div className="absolute bg-red-50 h-[21.587px] left-[8px] rounded-[8px] top-[8.8px] w-[52.112px]" data-name="Badge">
      <div className="h-[21.587px] overflow-clip relative rounded-[inherit] w-[52.112px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[8.8px] not-italic text-[#c10007] text-[12px] text-nowrap top-[1.8px] whitespace-pre">Empty</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#ffc9c9] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell13() {
  return (
    <div className="absolute h-[38.788px] left-[907.2px] top-0 w-[80px]" data-name="TableCell">
      <Badge5 />
    </div>
  );
}

function TableRow2() {
  return (
    <div className="absolute h-[38.788px] left-0 top-[38.79px] w-[987.2px]" data-name="TableRow">
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
    <div className="absolute h-[38.788px] left-0 top-0 w-[64px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.19px] whitespace-pre">3</p>
    </div>
  );
}

function Badge6() {
  return (
    <div className="absolute bg-blue-50 h-[21.587px] left-[8px] rounded-[8px] top-[8.8px] w-[37.1px]" data-name="Badge">
      <div className="h-[21.587px] overflow-clip relative rounded-[inherit] w-[37.1px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[8.8px] not-italic text-[#1447e6] text-[12px] text-nowrap top-[1.8px] whitespace-pre">FEB</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#bedbff] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell15() {
  return (
    <div className="absolute h-[38.788px] left-[64px] top-0 w-[128px]" data-name="TableCell">
      <Badge6 />
    </div>
  );
}

function TableCell16() {
  return (
    <div className="absolute h-[38.788px] left-[192px] top-0 w-[331.2px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.19px] whitespace-pre">Appalam</p>
    </div>
  );
}

function TableCell17() {
  return (
    <div className="absolute h-[38.788px] left-[523.2px] top-0 w-[128px]" data-name="TableCell">
      <p className="absolute font-['Consolas:Regular',_sans-serif] leading-[20px] left-[120.3px] not-italic text-[14px] text-neutral-950 text-nowrap text-right top-[8.99px] translate-x-[-100%] whitespace-pre">0</p>
    </div>
  );
}

function TableCell18() {
  return (
    <div className="absolute h-[38.788px] left-[651.2px] top-0 w-[128px]" data-name="TableCell">
      <p className="absolute font-['Consolas:Regular',_sans-serif] leading-[20px] left-[120.5px] not-italic text-[14px] text-neutral-950 text-right top-[8.99px] translate-x-[-100%] w-[39px]">₹0.00</p>
    </div>
  );
}

function Badge7() {
  return (
    <div className="absolute bg-green-50 h-[21.587px] left-[8px] rounded-[8px] top-[8.8px] w-[75.763px]" data-name="Badge">
      <div className="h-[21.587px] overflow-clip relative rounded-[inherit] w-[75.763px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[8.8px] not-italic text-[#008236] text-[12px] text-nowrap top-[1.8px] whitespace-pre">2025-2026</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#b9f8cf] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell19() {
  return (
    <div className="absolute h-[38.788px] left-[779.2px] top-0 w-[128px]" data-name="TableCell">
      <Badge7 />
    </div>
  );
}

function Badge8() {
  return (
    <div className="absolute bg-red-50 h-[21.587px] left-[8px] rounded-[8px] top-[8.8px] w-[52.112px]" data-name="Badge">
      <div className="h-[21.587px] overflow-clip relative rounded-[inherit] w-[52.112px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[8.8px] not-italic text-[#c10007] text-[12px] text-nowrap top-[1.8px] whitespace-pre">Empty</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#ffc9c9] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell20() {
  return (
    <div className="absolute h-[38.788px] left-[907.2px] top-0 w-[80px]" data-name="TableCell">
      <Badge8 />
    </div>
  );
}

function TableRow3() {
  return (
    <div className="absolute h-[38.788px] left-0 top-[77.58px] w-[987.2px]" data-name="TableRow">
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
  return (
    <div className="absolute h-[38.788px] left-0 top-0 w-[64px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.19px] whitespace-pre">4</p>
    </div>
  );
}

function Badge9() {
  return (
    <div className="absolute bg-blue-50 h-[21.587px] left-[8px] rounded-[8px] top-[8.8px] w-[37.1px]" data-name="Badge">
      <div className="h-[21.587px] overflow-clip relative rounded-[inherit] w-[37.1px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[8.8px] not-italic text-[#1447e6] text-[12px] text-nowrap top-[1.8px] whitespace-pre">FEB</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#bedbff] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell22() {
  return (
    <div className="absolute h-[38.788px] left-[64px] top-0 w-[128px]" data-name="TableCell">
      <Badge9 />
    </div>
  );
}

function TableCell23() {
  return (
    <div className="absolute h-[38.788px] left-[192px] top-0 w-[331.2px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.19px] whitespace-pre">Arisi Mavu</p>
    </div>
  );
}

function TableCell24() {
  return (
    <div className="absolute h-[38.788px] left-[523.2px] top-0 w-[128px]" data-name="TableCell">
      <p className="absolute font-['Consolas:Regular',_sans-serif] leading-[20px] left-[120.3px] not-italic text-[14px] text-neutral-950 text-nowrap text-right top-[8.99px] translate-x-[-100%] whitespace-pre">0</p>
    </div>
  );
}

function TableCell25() {
  return (
    <div className="absolute h-[38.788px] left-[651.2px] top-0 w-[128px]" data-name="TableCell">
      <p className="absolute font-['Consolas:Regular',_sans-serif] leading-[20px] left-[120.5px] not-italic text-[14px] text-neutral-950 text-right top-[8.99px] translate-x-[-100%] w-[39px]">₹0.00</p>
    </div>
  );
}

function Badge10() {
  return (
    <div className="absolute bg-green-50 h-[21.587px] left-[8px] rounded-[8px] top-[8.8px] w-[75.763px]" data-name="Badge">
      <div className="h-[21.587px] overflow-clip relative rounded-[inherit] w-[75.763px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[8.8px] not-italic text-[#008236] text-[12px] text-nowrap top-[1.8px] whitespace-pre">2025-2026</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#b9f8cf] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell26() {
  return (
    <div className="absolute h-[38.788px] left-[779.2px] top-0 w-[128px]" data-name="TableCell">
      <Badge10 />
    </div>
  );
}

function Badge11() {
  return (
    <div className="absolute bg-red-50 h-[21.587px] left-[8px] rounded-[8px] top-[8.8px] w-[52.112px]" data-name="Badge">
      <div className="h-[21.587px] overflow-clip relative rounded-[inherit] w-[52.112px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[8.8px] not-italic text-[#c10007] text-[12px] text-nowrap top-[1.8px] whitespace-pre">Empty</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#ffc9c9] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell27() {
  return (
    <div className="absolute h-[38.788px] left-[907.2px] top-0 w-[80px]" data-name="TableCell">
      <Badge11 />
    </div>
  );
}

function TableRow4() {
  return (
    <div className="absolute h-[38.788px] left-0 top-[116.36px] w-[987.2px]" data-name="TableRow">
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
  return (
    <div className="absolute h-[38.788px] left-0 top-0 w-[64px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.19px] whitespace-pre">5</p>
    </div>
  );
}

function Badge12() {
  return (
    <div className="absolute bg-blue-50 h-[21.587px] left-[8px] rounded-[8px] top-[8.8px] w-[37.1px]" data-name="Badge">
      <div className="h-[21.587px] overflow-clip relative rounded-[inherit] w-[37.1px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[8.8px] not-italic text-[#1447e6] text-[12px] text-nowrap top-[1.8px] whitespace-pre">FEB</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#bedbff] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell29() {
  return (
    <div className="absolute h-[38.788px] left-[64px] top-0 w-[128px]" data-name="TableCell">
      <Badge12 />
    </div>
  );
}

function TableCell30() {
  return (
    <div className="absolute h-[38.788px] left-[192px] top-0 w-[331.2px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.19px] whitespace-pre">Biriyani Elai</p>
    </div>
  );
}

function TableCell31() {
  return (
    <div className="absolute h-[38.788px] left-[523.2px] top-0 w-[128px]" data-name="TableCell">
      <p className="absolute font-['Consolas:Regular',_sans-serif] leading-[20px] left-[120.3px] not-italic text-[14px] text-neutral-950 text-nowrap text-right top-[8.99px] translate-x-[-100%] whitespace-pre">0</p>
    </div>
  );
}

function TableCell32() {
  return (
    <div className="absolute h-[38.788px] left-[651.2px] top-0 w-[128px]" data-name="TableCell">
      <p className="absolute font-['Consolas:Regular',_sans-serif] leading-[20px] left-[120.5px] not-italic text-[14px] text-neutral-950 text-right top-[8.99px] translate-x-[-100%] w-[39px]">₹0.00</p>
    </div>
  );
}

function Badge13() {
  return (
    <div className="absolute bg-green-50 h-[21.587px] left-[8px] rounded-[8px] top-[8.8px] w-[75.763px]" data-name="Badge">
      <div className="h-[21.587px] overflow-clip relative rounded-[inherit] w-[75.763px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[8.8px] not-italic text-[#008236] text-[12px] text-nowrap top-[1.8px] whitespace-pre">2025-2026</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#b9f8cf] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell33() {
  return (
    <div className="absolute h-[38.788px] left-[779.2px] top-0 w-[128px]" data-name="TableCell">
      <Badge13 />
    </div>
  );
}

function Badge14() {
  return (
    <div className="absolute bg-red-50 h-[21.587px] left-[8px] rounded-[8px] top-[8.8px] w-[52.112px]" data-name="Badge">
      <div className="h-[21.587px] overflow-clip relative rounded-[inherit] w-[52.112px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[8.8px] not-italic text-[#c10007] text-[12px] text-nowrap top-[1.8px] whitespace-pre">Empty</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#ffc9c9] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell34() {
  return (
    <div className="absolute h-[38.788px] left-[907.2px] top-0 w-[80px]" data-name="TableCell">
      <Badge14 />
    </div>
  );
}

function TableRow5() {
  return (
    <div className="absolute h-[38.788px] left-0 top-[155.15px] w-[987.2px]" data-name="TableRow">
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
  return (
    <div className="absolute h-[38.788px] left-0 top-0 w-[64px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.19px] whitespace-pre">6</p>
    </div>
  );
}

function Badge15() {
  return (
    <div className="absolute bg-blue-50 h-[21.587px] left-[8px] rounded-[8px] top-[8.8px] w-[37.1px]" data-name="Badge">
      <div className="h-[21.587px] overflow-clip relative rounded-[inherit] w-[37.1px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[8.8px] not-italic text-[#1447e6] text-[12px] text-nowrap top-[1.8px] whitespace-pre">FEB</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#bedbff] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell36() {
  return (
    <div className="absolute h-[38.788px] left-[64px] top-0 w-[128px]" data-name="TableCell">
      <Badge15 />
    </div>
  );
}

function TableCell37() {
  return (
    <div className="absolute h-[38.788px] left-[192px] top-0 w-[331.2px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.19px] whitespace-pre">Black Sundal</p>
    </div>
  );
}

function TableCell38() {
  return (
    <div className="absolute h-[38.788px] left-[523.2px] top-0 w-[128px]" data-name="TableCell">
      <p className="absolute font-['Consolas:Regular',_sans-serif] leading-[20px] left-[120.3px] not-italic text-[14px] text-neutral-950 text-nowrap text-right top-[8.99px] translate-x-[-100%] whitespace-pre">0</p>
    </div>
  );
}

function TableCell39() {
  return (
    <div className="absolute h-[38.788px] left-[651.2px] top-0 w-[128px]" data-name="TableCell">
      <p className="absolute font-['Consolas:Regular',_sans-serif] leading-[20px] left-[120.5px] not-italic text-[14px] text-neutral-950 text-right top-[8.99px] translate-x-[-100%] w-[39px]">₹0.00</p>
    </div>
  );
}

function Badge16() {
  return (
    <div className="absolute bg-green-50 h-[21.587px] left-[8px] rounded-[8px] top-[8.8px] w-[75.763px]" data-name="Badge">
      <div className="h-[21.587px] overflow-clip relative rounded-[inherit] w-[75.763px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[8.8px] not-italic text-[#008236] text-[12px] text-nowrap top-[1.8px] whitespace-pre">2025-2026</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#b9f8cf] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell40() {
  return (
    <div className="absolute h-[38.788px] left-[779.2px] top-0 w-[128px]" data-name="TableCell">
      <Badge16 />
    </div>
  );
}

function Badge17() {
  return (
    <div className="absolute bg-red-50 h-[21.587px] left-[8px] rounded-[8px] top-[8.8px] w-[52.112px]" data-name="Badge">
      <div className="h-[21.587px] overflow-clip relative rounded-[inherit] w-[52.112px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[8.8px] not-italic text-[#c10007] text-[12px] text-nowrap top-[1.8px] whitespace-pre">Empty</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#ffc9c9] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell41() {
  return (
    <div className="absolute h-[38.788px] left-[907.2px] top-0 w-[80px]" data-name="TableCell">
      <Badge17 />
    </div>
  );
}

function TableRow6() {
  return (
    <div className="absolute h-[38.788px] left-0 top-[193.94px] w-[987.2px]" data-name="TableRow">
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
  return (
    <div className="absolute h-[38.788px] left-0 top-0 w-[64px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.19px] whitespace-pre">7</p>
    </div>
  );
}

function Badge18() {
  return (
    <div className="absolute bg-blue-50 h-[21.587px] left-[8px] rounded-[8px] top-[8.8px] w-[37.1px]" data-name="Badge">
      <div className="h-[21.587px] overflow-clip relative rounded-[inherit] w-[37.1px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[8.8px] not-italic text-[#1447e6] text-[12px] text-nowrap top-[1.8px] whitespace-pre">FEB</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#bedbff] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell43() {
  return (
    <div className="absolute h-[38.788px] left-[64px] top-0 w-[128px]" data-name="TableCell">
      <Badge18 />
    </div>
  );
}

function TableCell44() {
  return (
    <div className="absolute h-[38.788px] left-[192px] top-0 w-[331.2px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.19px] whitespace-pre">Bleaching powder</p>
    </div>
  );
}

function TableCell45() {
  return (
    <div className="absolute h-[38.788px] left-[523.2px] top-0 w-[128px]" data-name="TableCell">
      <p className="absolute font-['Consolas:Regular',_sans-serif] leading-[20px] left-[120.3px] not-italic text-[14px] text-neutral-950 text-nowrap text-right top-[8.99px] translate-x-[-100%] whitespace-pre">0</p>
    </div>
  );
}

function TableCell46() {
  return (
    <div className="absolute h-[38.788px] left-[651.2px] top-0 w-[128px]" data-name="TableCell">
      <p className="absolute font-['Consolas:Regular',_sans-serif] leading-[20px] left-[120.5px] not-italic text-[14px] text-neutral-950 text-right top-[8.99px] translate-x-[-100%] w-[39px]">₹0.00</p>
    </div>
  );
}

function Badge19() {
  return (
    <div className="absolute bg-green-50 h-[21.587px] left-[8px] rounded-[8px] top-[8.8px] w-[75.763px]" data-name="Badge">
      <div className="h-[21.587px] overflow-clip relative rounded-[inherit] w-[75.763px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[8.8px] not-italic text-[#008236] text-[12px] text-nowrap top-[1.8px] whitespace-pre">2025-2026</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#b9f8cf] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell47() {
  return (
    <div className="absolute h-[38.788px] left-[779.2px] top-0 w-[128px]" data-name="TableCell">
      <Badge19 />
    </div>
  );
}

function Badge20() {
  return (
    <div className="absolute bg-red-50 h-[21.587px] left-[8px] rounded-[8px] top-[8.8px] w-[52.112px]" data-name="Badge">
      <div className="h-[21.587px] overflow-clip relative rounded-[inherit] w-[52.112px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[8.8px] not-italic text-[#c10007] text-[12px] text-nowrap top-[1.8px] whitespace-pre">Empty</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#ffc9c9] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell48() {
  return (
    <div className="absolute h-[38.788px] left-[907.2px] top-0 w-[80px]" data-name="TableCell">
      <Badge20 />
    </div>
  );
}

function TableRow7() {
  return (
    <div className="absolute h-[38.788px] left-0 top-[232.72px] w-[987.2px]" data-name="TableRow">
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
  return (
    <div className="absolute h-[38.788px] left-0 top-0 w-[64px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.19px] whitespace-pre">8</p>
    </div>
  );
}

function Badge21() {
  return (
    <div className="absolute bg-blue-50 h-[21.587px] left-[8px] rounded-[8px] top-[8.8px] w-[37.1px]" data-name="Badge">
      <div className="h-[21.587px] overflow-clip relative rounded-[inherit] w-[37.1px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[8.8px] not-italic text-[#1447e6] text-[12px] text-nowrap top-[1.8px] whitespace-pre">FEB</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#bedbff] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell50() {
  return (
    <div className="absolute h-[38.788px] left-[64px] top-0 w-[128px]" data-name="TableCell">
      <Badge21 />
    </div>
  );
}

function TableCell51() {
  return (
    <div className="absolute h-[38.788px] left-[192px] top-0 w-[331.2px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.19px] whitespace-pre">Briyani Masala</p>
    </div>
  );
}

function TableCell52() {
  return (
    <div className="absolute h-[38.788px] left-[523.2px] top-0 w-[128px]" data-name="TableCell">
      <p className="absolute font-['Consolas:Regular',_sans-serif] leading-[20px] left-[120.3px] not-italic text-[14px] text-neutral-950 text-nowrap text-right top-[8.99px] translate-x-[-100%] whitespace-pre">0</p>
    </div>
  );
}

function TableCell53() {
  return (
    <div className="absolute h-[38.788px] left-[651.2px] top-0 w-[128px]" data-name="TableCell">
      <p className="absolute font-['Consolas:Regular',_sans-serif] leading-[20px] left-[120.5px] not-italic text-[14px] text-neutral-950 text-right top-[8.99px] translate-x-[-100%] w-[39px]">₹0.00</p>
    </div>
  );
}

function Badge22() {
  return (
    <div className="absolute bg-green-50 h-[21.587px] left-[8px] rounded-[8px] top-[8.8px] w-[75.763px]" data-name="Badge">
      <div className="h-[21.587px] overflow-clip relative rounded-[inherit] w-[75.763px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[8.8px] not-italic text-[#008236] text-[12px] text-nowrap top-[1.8px] whitespace-pre">2025-2026</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#b9f8cf] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell54() {
  return (
    <div className="absolute h-[38.788px] left-[779.2px] top-0 w-[128px]" data-name="TableCell">
      <Badge22 />
    </div>
  );
}

function Badge23() {
  return (
    <div className="absolute bg-red-50 h-[21.587px] left-[8px] rounded-[8px] top-[8.8px] w-[52.112px]" data-name="Badge">
      <div className="h-[21.587px] overflow-clip relative rounded-[inherit] w-[52.112px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[8.8px] not-italic text-[#c10007] text-[12px] text-nowrap top-[1.8px] whitespace-pre">Empty</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#ffc9c9] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell55() {
  return (
    <div className="absolute h-[38.788px] left-[907.2px] top-0 w-[80px]" data-name="TableCell">
      <Badge23 />
    </div>
  );
}

function TableRow8() {
  return (
    <div className="absolute h-[38.788px] left-0 top-[271.51px] w-[987.2px]" data-name="TableRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
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

function TableCell56() {
  return (
    <div className="absolute h-[38.788px] left-0 top-0 w-[64px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.19px] whitespace-pre">9</p>
    </div>
  );
}

function Badge24() {
  return (
    <div className="absolute bg-blue-50 h-[21.587px] left-[8px] rounded-[8px] top-[8.8px] w-[37.1px]" data-name="Badge">
      <div className="h-[21.587px] overflow-clip relative rounded-[inherit] w-[37.1px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[8.8px] not-italic text-[#1447e6] text-[12px] text-nowrap top-[1.8px] whitespace-pre">FEB</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#bedbff] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell57() {
  return (
    <div className="absolute h-[38.788px] left-[64px] top-0 w-[128px]" data-name="TableCell">
      <Badge24 />
    </div>
  );
}

function TableCell58() {
  return (
    <div className="absolute h-[38.788px] left-[192px] top-0 w-[331.2px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.19px] whitespace-pre">Cashew nut</p>
    </div>
  );
}

function TableCell59() {
  return (
    <div className="absolute h-[38.788px] left-[523.2px] top-0 w-[128px]" data-name="TableCell">
      <p className="absolute font-['Consolas:Regular',_sans-serif] leading-[20px] left-[120.3px] not-italic text-[14px] text-neutral-950 text-nowrap text-right top-[8.99px] translate-x-[-100%] whitespace-pre">0</p>
    </div>
  );
}

function TableCell60() {
  return (
    <div className="absolute h-[38.788px] left-[651.2px] top-0 w-[128px]" data-name="TableCell">
      <p className="absolute font-['Consolas:Regular',_sans-serif] leading-[20px] left-[120.5px] not-italic text-[14px] text-neutral-950 text-right top-[8.99px] translate-x-[-100%] w-[39px]">₹0.00</p>
    </div>
  );
}

function Badge25() {
  return (
    <div className="absolute bg-green-50 h-[21.587px] left-[8px] rounded-[8px] top-[8.8px] w-[75.763px]" data-name="Badge">
      <div className="h-[21.587px] overflow-clip relative rounded-[inherit] w-[75.763px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[8.8px] not-italic text-[#008236] text-[12px] text-nowrap top-[1.8px] whitespace-pre">2025-2026</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#b9f8cf] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell61() {
  return (
    <div className="absolute h-[38.788px] left-[779.2px] top-0 w-[128px]" data-name="TableCell">
      <Badge25 />
    </div>
  );
}

function Badge26() {
  return (
    <div className="absolute bg-red-50 h-[21.587px] left-[8px] rounded-[8px] top-[8.8px] w-[52.112px]" data-name="Badge">
      <div className="h-[21.587px] overflow-clip relative rounded-[inherit] w-[52.112px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[8.8px] not-italic text-[#c10007] text-[12px] text-nowrap top-[1.8px] whitespace-pre">Empty</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#ffc9c9] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell62() {
  return (
    <div className="absolute h-[38.788px] left-[907.2px] top-0 w-[80px]" data-name="TableCell">
      <Badge26 />
    </div>
  );
}

function TableRow9() {
  return (
    <div className="absolute h-[38.788px] left-0 top-[310.3px] w-[987.2px]" data-name="TableRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <TableCell56 />
      <TableCell57 />
      <TableCell58 />
      <TableCell59 />
      <TableCell60 />
      <TableCell61 />
      <TableCell62 />
    </div>
  );
}

function TableCell63() {
  return (
    <div className="absolute h-[38.788px] left-0 top-0 w-[64px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.19px] whitespace-pre">10</p>
    </div>
  );
}

function Badge27() {
  return (
    <div className="absolute bg-blue-50 h-[21.587px] left-[8px] rounded-[8px] top-[8.8px] w-[37.1px]" data-name="Badge">
      <div className="h-[21.587px] overflow-clip relative rounded-[inherit] w-[37.1px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[8.8px] not-italic text-[#1447e6] text-[12px] text-nowrap top-[1.8px] whitespace-pre">FEB</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#bedbff] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell64() {
  return (
    <div className="absolute h-[38.788px] left-[64px] top-0 w-[128px]" data-name="TableCell">
      <Badge27 />
    </div>
  );
}

function TableCell65() {
  return (
    <div className="absolute h-[38.788px] left-[192px] top-0 w-[331.2px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.19px] whitespace-pre">Chicken Masala</p>
    </div>
  );
}

function TableCell66() {
  return (
    <div className="absolute h-[38.788px] left-[523.2px] top-0 w-[128px]" data-name="TableCell">
      <p className="absolute font-['Consolas:Regular',_sans-serif] leading-[20px] left-[120.3px] not-italic text-[14px] text-neutral-950 text-nowrap text-right top-[8.99px] translate-x-[-100%] whitespace-pre">0</p>
    </div>
  );
}

function TableCell67() {
  return (
    <div className="absolute h-[38.788px] left-[651.2px] top-0 w-[128px]" data-name="TableCell">
      <p className="absolute font-['Consolas:Regular',_sans-serif] leading-[20px] left-[120.5px] not-italic text-[14px] text-neutral-950 text-right top-[8.99px] translate-x-[-100%] w-[39px]">₹0.00</p>
    </div>
  );
}

function Badge28() {
  return (
    <div className="absolute bg-green-50 h-[21.587px] left-[8px] rounded-[8px] top-[8.8px] w-[75.763px]" data-name="Badge">
      <div className="h-[21.587px] overflow-clip relative rounded-[inherit] w-[75.763px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[8.8px] not-italic text-[#008236] text-[12px] text-nowrap top-[1.8px] whitespace-pre">2025-2026</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#b9f8cf] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell68() {
  return (
    <div className="absolute h-[38.788px] left-[779.2px] top-0 w-[128px]" data-name="TableCell">
      <Badge28 />
    </div>
  );
}

function Badge29() {
  return (
    <div className="absolute bg-red-50 h-[21.587px] left-[8px] rounded-[8px] top-[8.8px] w-[52.112px]" data-name="Badge">
      <div className="h-[21.587px] overflow-clip relative rounded-[inherit] w-[52.112px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[8.8px] not-italic text-[#c10007] text-[12px] text-nowrap top-[1.8px] whitespace-pre">Empty</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#ffc9c9] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell69() {
  return (
    <div className="absolute h-[38.788px] left-[907.2px] top-0 w-[80px]" data-name="TableCell">
      <Badge29 />
    </div>
  );
}

function TableRow10() {
  return (
    <div className="absolute h-[38.788px] left-0 top-[349.09px] w-[987.2px]" data-name="TableRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <TableCell63 />
      <TableCell64 />
      <TableCell65 />
      <TableCell66 />
      <TableCell67 />
      <TableCell68 />
      <TableCell69 />
    </div>
  );
}

function TableCell70() {
  return (
    <div className="absolute h-[38.788px] left-0 top-0 w-[64px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.19px] whitespace-pre">11</p>
    </div>
  );
}

function Badge30() {
  return (
    <div className="absolute bg-blue-50 h-[21.587px] left-[8px] rounded-[8px] top-[8.8px] w-[37.1px]" data-name="Badge">
      <div className="h-[21.587px] overflow-clip relative rounded-[inherit] w-[37.1px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[8.8px] not-italic text-[#1447e6] text-[12px] text-nowrap top-[1.8px] whitespace-pre">FEB</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#bedbff] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell71() {
  return (
    <div className="absolute h-[38.788px] left-[64px] top-0 w-[128px]" data-name="TableCell">
      <Badge30 />
    </div>
  );
}

function TableCell72() {
  return (
    <div className="absolute h-[38.788px] left-[192px] top-0 w-[331.2px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.19px] whitespace-pre">Chilly Powder</p>
    </div>
  );
}

function TableCell73() {
  return (
    <div className="absolute h-[38.788px] left-[523.2px] top-0 w-[128px]" data-name="TableCell">
      <p className="absolute font-['Consolas:Regular',_sans-serif] leading-[20px] left-[120.3px] not-italic text-[14px] text-neutral-950 text-nowrap text-right top-[8.99px] translate-x-[-100%] whitespace-pre">0</p>
    </div>
  );
}

function TableCell74() {
  return (
    <div className="absolute h-[38.788px] left-[651.2px] top-0 w-[128px]" data-name="TableCell">
      <p className="absolute font-['Consolas:Regular',_sans-serif] leading-[20px] left-[120.5px] not-italic text-[14px] text-neutral-950 text-right top-[8.99px] translate-x-[-100%] w-[39px]">₹0.00</p>
    </div>
  );
}

function Badge31() {
  return (
    <div className="absolute bg-green-50 h-[21.587px] left-[8px] rounded-[8px] top-[8.8px] w-[75.763px]" data-name="Badge">
      <div className="h-[21.587px] overflow-clip relative rounded-[inherit] w-[75.763px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[8.8px] not-italic text-[#008236] text-[12px] text-nowrap top-[1.8px] whitespace-pre">2025-2026</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#b9f8cf] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell75() {
  return (
    <div className="absolute h-[38.788px] left-[779.2px] top-0 w-[128px]" data-name="TableCell">
      <Badge31 />
    </div>
  );
}

function Badge32() {
  return (
    <div className="absolute bg-red-50 h-[21.587px] left-[8px] rounded-[8px] top-[8.8px] w-[52.112px]" data-name="Badge">
      <div className="h-[21.587px] overflow-clip relative rounded-[inherit] w-[52.112px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[8.8px] not-italic text-[#c10007] text-[12px] text-nowrap top-[1.8px] whitespace-pre">Empty</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#ffc9c9] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell76() {
  return (
    <div className="absolute h-[38.788px] left-[907.2px] top-0 w-[80px]" data-name="TableCell">
      <Badge32 />
    </div>
  );
}

function TableRow11() {
  return (
    <div className="absolute h-[38.788px] left-0 top-[387.88px] w-[987.2px]" data-name="TableRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <TableCell70 />
      <TableCell71 />
      <TableCell72 />
      <TableCell73 />
      <TableCell74 />
      <TableCell75 />
      <TableCell76 />
    </div>
  );
}

function TableCell77() {
  return (
    <div className="absolute h-[38.788px] left-0 top-0 w-[64px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.19px] whitespace-pre">12</p>
    </div>
  );
}

function Badge33() {
  return (
    <div className="absolute bg-blue-50 h-[21.587px] left-[8px] rounded-[8px] top-[8.8px] w-[37.1px]" data-name="Badge">
      <div className="h-[21.587px] overflow-clip relative rounded-[inherit] w-[37.1px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[8.8px] not-italic text-[#1447e6] text-[12px] text-nowrap top-[1.8px] whitespace-pre">FEB</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#bedbff] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell78() {
  return (
    <div className="absolute h-[38.788px] left-[64px] top-0 w-[128px]" data-name="TableCell">
      <Badge33 />
    </div>
  );
}

function TableCell79() {
  return (
    <div className="absolute h-[38.788px] left-[192px] top-0 w-[331.2px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.19px] whitespace-pre">cleaning powder</p>
    </div>
  );
}

function TableCell80() {
  return (
    <div className="absolute h-[38.788px] left-[523.2px] top-0 w-[128px]" data-name="TableCell">
      <p className="absolute font-['Consolas:Regular',_sans-serif] leading-[20px] left-[120.3px] not-italic text-[14px] text-neutral-950 text-nowrap text-right top-[8.99px] translate-x-[-100%] whitespace-pre">0</p>
    </div>
  );
}

function TableCell81() {
  return (
    <div className="absolute h-[38.788px] left-[651.2px] top-0 w-[128px]" data-name="TableCell">
      <p className="absolute font-['Consolas:Regular',_sans-serif] leading-[20px] left-[120.5px] not-italic text-[14px] text-neutral-950 text-right top-[8.99px] translate-x-[-100%] w-[39px]">₹0.00</p>
    </div>
  );
}

function Badge34() {
  return (
    <div className="absolute bg-green-50 h-[21.587px] left-[8px] rounded-[8px] top-[8.8px] w-[75.763px]" data-name="Badge">
      <div className="h-[21.587px] overflow-clip relative rounded-[inherit] w-[75.763px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[8.8px] not-italic text-[#008236] text-[12px] text-nowrap top-[1.8px] whitespace-pre">2025-2026</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#b9f8cf] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell82() {
  return (
    <div className="absolute h-[38.788px] left-[779.2px] top-0 w-[128px]" data-name="TableCell">
      <Badge34 />
    </div>
  );
}

function Badge35() {
  return (
    <div className="absolute bg-red-50 h-[21.587px] left-[8px] rounded-[8px] top-[8.8px] w-[52.112px]" data-name="Badge">
      <div className="h-[21.587px] overflow-clip relative rounded-[inherit] w-[52.112px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[8.8px] not-italic text-[#c10007] text-[12px] text-nowrap top-[1.8px] whitespace-pre">Empty</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#ffc9c9] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell83() {
  return (
    <div className="absolute h-[38.788px] left-[907.2px] top-0 w-[80px]" data-name="TableCell">
      <Badge35 />
    </div>
  );
}

function TableRow12() {
  return (
    <div className="absolute h-[38.788px] left-0 top-[426.66px] w-[987.2px]" data-name="TableRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <TableCell77 />
      <TableCell78 />
      <TableCell79 />
      <TableCell80 />
      <TableCell81 />
      <TableCell82 />
      <TableCell83 />
    </div>
  );
}

function TableCell84() {
  return (
    <div className="absolute h-[38.788px] left-0 top-0 w-[64px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.19px] whitespace-pre">13</p>
    </div>
  );
}

function Badge36() {
  return (
    <div className="absolute bg-blue-50 h-[21.587px] left-[8px] rounded-[8px] top-[8.8px] w-[37.1px]" data-name="Badge">
      <div className="h-[21.587px] overflow-clip relative rounded-[inherit] w-[37.1px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[8.8px] not-italic text-[#1447e6] text-[12px] text-nowrap top-[1.8px] whitespace-pre">FEB</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#bedbff] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell85() {
  return (
    <div className="absolute h-[38.788px] left-[64px] top-0 w-[128px]" data-name="TableCell">
      <Badge36 />
    </div>
  );
}

function TableCell86() {
  return (
    <div className="absolute h-[38.788px] left-[192px] top-0 w-[331.2px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.19px] whitespace-pre">Coconut Oil</p>
    </div>
  );
}

function TableCell87() {
  return (
    <div className="absolute h-[38.788px] left-[523.2px] top-0 w-[128px]" data-name="TableCell">
      <p className="absolute font-['Consolas:Regular',_sans-serif] leading-[20px] left-[120.3px] not-italic text-[14px] text-neutral-950 text-nowrap text-right top-[8.99px] translate-x-[-100%] whitespace-pre">0</p>
    </div>
  );
}

function TableCell88() {
  return (
    <div className="absolute h-[38.788px] left-[651.2px] top-0 w-[128px]" data-name="TableCell">
      <p className="absolute font-['Consolas:Regular',_sans-serif] leading-[20px] left-[120.5px] not-italic text-[14px] text-neutral-950 text-right top-[8.99px] translate-x-[-100%] w-[39px]">₹0.00</p>
    </div>
  );
}

function Badge37() {
  return (
    <div className="absolute bg-green-50 h-[21.587px] left-[8px] rounded-[8px] top-[8.8px] w-[75.763px]" data-name="Badge">
      <div className="h-[21.587px] overflow-clip relative rounded-[inherit] w-[75.763px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[8.8px] not-italic text-[#008236] text-[12px] text-nowrap top-[1.8px] whitespace-pre">2025-2026</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#b9f8cf] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell89() {
  return (
    <div className="absolute h-[38.788px] left-[779.2px] top-0 w-[128px]" data-name="TableCell">
      <Badge37 />
    </div>
  );
}

function Badge38() {
  return (
    <div className="absolute bg-red-50 h-[21.587px] left-[8px] rounded-[8px] top-[8.8px] w-[52.112px]" data-name="Badge">
      <div className="h-[21.587px] overflow-clip relative rounded-[inherit] w-[52.112px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[8.8px] not-italic text-[#c10007] text-[12px] text-nowrap top-[1.8px] whitespace-pre">Empty</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#ffc9c9] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell90() {
  return (
    <div className="absolute h-[38.788px] left-[907.2px] top-0 w-[80px]" data-name="TableCell">
      <Badge38 />
    </div>
  );
}

function TableRow13() {
  return (
    <div className="absolute h-[38.788px] left-0 top-[465.45px] w-[987.2px]" data-name="TableRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <TableCell84 />
      <TableCell85 />
      <TableCell86 />
      <TableCell87 />
      <TableCell88 />
      <TableCell89 />
      <TableCell90 />
    </div>
  );
}

function TableCell91() {
  return (
    <div className="absolute h-[38.788px] left-0 top-0 w-[64px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.19px] whitespace-pre">14</p>
    </div>
  );
}

function Badge39() {
  return (
    <div className="absolute bg-blue-50 h-[21.587px] left-[8px] rounded-[8px] top-[8.8px] w-[37.1px]" data-name="Badge">
      <div className="h-[21.587px] overflow-clip relative rounded-[inherit] w-[37.1px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[8.8px] not-italic text-[#1447e6] text-[12px] text-nowrap top-[1.8px] whitespace-pre">FEB</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#bedbff] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell92() {
  return (
    <div className="absolute h-[38.788px] left-[64px] top-0 w-[128px]" data-name="TableCell">
      <Badge39 />
    </div>
  );
}

function TableCell93() {
  return (
    <div className="absolute h-[38.788px] left-[192px] top-0 w-[331.2px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.19px] whitespace-pre">Currymasala powder</p>
    </div>
  );
}

function TableCell94() {
  return (
    <div className="absolute h-[38.788px] left-[523.2px] top-0 w-[128px]" data-name="TableCell">
      <p className="absolute font-['Consolas:Regular',_sans-serif] leading-[20px] left-[120.3px] not-italic text-[14px] text-neutral-950 text-nowrap text-right top-[8.99px] translate-x-[-100%] whitespace-pre">0</p>
    </div>
  );
}

function TableCell95() {
  return (
    <div className="absolute h-[38.788px] left-[651.2px] top-0 w-[128px]" data-name="TableCell">
      <p className="absolute font-['Consolas:Regular',_sans-serif] leading-[20px] left-[120.5px] not-italic text-[14px] text-neutral-950 text-right top-[8.99px] translate-x-[-100%] w-[39px]">₹0.00</p>
    </div>
  );
}

function Badge40() {
  return (
    <div className="absolute bg-green-50 h-[21.587px] left-[8px] rounded-[8px] top-[8.8px] w-[75.763px]" data-name="Badge">
      <div className="h-[21.587px] overflow-clip relative rounded-[inherit] w-[75.763px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[8.8px] not-italic text-[#008236] text-[12px] text-nowrap top-[1.8px] whitespace-pre">2025-2026</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#b9f8cf] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell96() {
  return (
    <div className="absolute h-[38.788px] left-[779.2px] top-0 w-[128px]" data-name="TableCell">
      <Badge40 />
    </div>
  );
}

function Badge41() {
  return (
    <div className="absolute bg-red-50 h-[21.587px] left-[8px] rounded-[8px] top-[8.8px] w-[52.112px]" data-name="Badge">
      <div className="h-[21.587px] overflow-clip relative rounded-[inherit] w-[52.112px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[8.8px] not-italic text-[#c10007] text-[12px] text-nowrap top-[1.8px] whitespace-pre">Empty</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#ffc9c9] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell97() {
  return (
    <div className="absolute h-[38.788px] left-[907.2px] top-0 w-[80px]" data-name="TableCell">
      <Badge41 />
    </div>
  );
}

function TableRow14() {
  return (
    <div className="absolute h-[38.788px] left-0 top-[504.24px] w-[987.2px]" data-name="TableRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <TableCell91 />
      <TableCell92 />
      <TableCell93 />
      <TableCell94 />
      <TableCell95 />
      <TableCell96 />
      <TableCell97 />
    </div>
  );
}

function TableCell98() {
  return (
    <div className="absolute h-[38.788px] left-0 top-0 w-[64px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.19px] whitespace-pre">15</p>
    </div>
  );
}

function Badge42() {
  return (
    <div className="absolute bg-blue-50 h-[21.587px] left-[8px] rounded-[8px] top-[8.8px] w-[37.1px]" data-name="Badge">
      <div className="h-[21.587px] overflow-clip relative rounded-[inherit] w-[37.1px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[8.8px] not-italic text-[#1447e6] text-[12px] text-nowrap top-[1.8px] whitespace-pre">FEB</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#bedbff] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell99() {
  return (
    <div className="absolute h-[38.788px] left-[64px] top-0 w-[128px]" data-name="TableCell">
      <Badge42 />
    </div>
  );
}

function TableCell100() {
  return (
    <div className="absolute h-[38.788px] left-[192px] top-0 w-[331.2px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.19px] whitespace-pre">Dalita</p>
    </div>
  );
}

function TableCell101() {
  return (
    <div className="absolute h-[38.788px] left-[523.2px] top-0 w-[128px]" data-name="TableCell">
      <p className="absolute font-['Consolas:Regular',_sans-serif] leading-[20px] left-[120.3px] not-italic text-[14px] text-neutral-950 text-nowrap text-right top-[8.99px] translate-x-[-100%] whitespace-pre">0</p>
    </div>
  );
}

function TableCell102() {
  return (
    <div className="absolute h-[38.788px] left-[651.2px] top-0 w-[128px]" data-name="TableCell">
      <p className="absolute font-['Consolas:Regular',_sans-serif] leading-[20px] left-[120.5px] not-italic text-[14px] text-neutral-950 text-right top-[8.99px] translate-x-[-100%] w-[39px]">₹0.00</p>
    </div>
  );
}

function Badge43() {
  return (
    <div className="absolute bg-green-50 h-[21.587px] left-[8px] rounded-[8px] top-[8.8px] w-[75.763px]" data-name="Badge">
      <div className="h-[21.587px] overflow-clip relative rounded-[inherit] w-[75.763px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[8.8px] not-italic text-[#008236] text-[12px] text-nowrap top-[1.8px] whitespace-pre">2025-2026</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#b9f8cf] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell103() {
  return (
    <div className="absolute h-[38.788px] left-[779.2px] top-0 w-[128px]" data-name="TableCell">
      <Badge43 />
    </div>
  );
}

function Badge44() {
  return (
    <div className="absolute bg-red-50 h-[21.587px] left-[8px] rounded-[8px] top-[8.8px] w-[52.112px]" data-name="Badge">
      <div className="h-[21.587px] overflow-clip relative rounded-[inherit] w-[52.112px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[8.8px] not-italic text-[#c10007] text-[12px] text-nowrap top-[1.8px] whitespace-pre">Empty</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#ffc9c9] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell104() {
  return (
    <div className="absolute h-[38.788px] left-[907.2px] top-0 w-[80px]" data-name="TableCell">
      <Badge44 />
    </div>
  );
}

function TableRow15() {
  return (
    <div className="absolute h-[38.788px] left-0 top-[543.02px] w-[987.2px]" data-name="TableRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <TableCell98 />
      <TableCell99 />
      <TableCell100 />
      <TableCell101 />
      <TableCell102 />
      <TableCell103 />
      <TableCell104 />
    </div>
  );
}

function TableCell105() {
  return (
    <div className="absolute h-[38.788px] left-0 top-0 w-[64px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.19px] whitespace-pre">16</p>
    </div>
  );
}

function Badge45() {
  return (
    <div className="absolute bg-blue-50 h-[21.587px] left-[8px] rounded-[8px] top-[8.8px] w-[37.1px]" data-name="Badge">
      <div className="h-[21.587px] overflow-clip relative rounded-[inherit] w-[37.1px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[8.8px] not-italic text-[#1447e6] text-[12px] text-nowrap top-[1.8px] whitespace-pre">FEB</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#bedbff] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell106() {
  return (
    <div className="absolute h-[38.788px] left-[64px] top-0 w-[128px]" data-name="TableCell">
      <Badge45 />
    </div>
  );
}

function TableCell107() {
  return (
    <div className="absolute h-[38.788px] left-[192px] top-0 w-[331.2px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.19px] whitespace-pre">Detol Soap</p>
    </div>
  );
}

function TableCell108() {
  return (
    <div className="absolute h-[38.788px] left-[523.2px] top-0 w-[128px]" data-name="TableCell">
      <p className="absolute font-['Consolas:Regular',_sans-serif] leading-[20px] left-[120.3px] not-italic text-[14px] text-neutral-950 text-nowrap text-right top-[8.99px] translate-x-[-100%] whitespace-pre">0</p>
    </div>
  );
}

function TableCell109() {
  return (
    <div className="absolute h-[38.788px] left-[651.2px] top-0 w-[128px]" data-name="TableCell">
      <p className="absolute font-['Consolas:Regular',_sans-serif] leading-[20px] left-[120.5px] not-italic text-[14px] text-neutral-950 text-right top-[8.99px] translate-x-[-100%] w-[39px]">₹0.00</p>
    </div>
  );
}

function Badge46() {
  return (
    <div className="absolute bg-green-50 h-[21.587px] left-[8px] rounded-[8px] top-[8.8px] w-[75.763px]" data-name="Badge">
      <div className="h-[21.587px] overflow-clip relative rounded-[inherit] w-[75.763px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[8.8px] not-italic text-[#008236] text-[12px] text-nowrap top-[1.8px] whitespace-pre">2025-2026</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#b9f8cf] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell110() {
  return (
    <div className="absolute h-[38.788px] left-[779.2px] top-0 w-[128px]" data-name="TableCell">
      <Badge46 />
    </div>
  );
}

function Badge47() {
  return (
    <div className="absolute bg-red-50 h-[21.587px] left-[8px] rounded-[8px] top-[8.8px] w-[52.112px]" data-name="Badge">
      <div className="h-[21.587px] overflow-clip relative rounded-[inherit] w-[52.112px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[8.8px] not-italic text-[#c10007] text-[12px] text-nowrap top-[1.8px] whitespace-pre">Empty</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#ffc9c9] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell111() {
  return (
    <div className="absolute h-[38.788px] left-[907.2px] top-0 w-[80px]" data-name="TableCell">
      <Badge47 />
    </div>
  );
}

function TableRow16() {
  return (
    <div className="absolute h-[38.788px] left-0 top-[581.81px] w-[987.2px]" data-name="TableRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <TableCell105 />
      <TableCell106 />
      <TableCell107 />
      <TableCell108 />
      <TableCell109 />
      <TableCell110 />
      <TableCell111 />
    </div>
  );
}

function TableCell112() {
  return (
    <div className="absolute h-[38.788px] left-0 top-0 w-[64px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.19px] whitespace-pre">17</p>
    </div>
  );
}

function Badge48() {
  return (
    <div className="absolute bg-blue-50 h-[21.587px] left-[8px] rounded-[8px] top-[8.8px] w-[37.1px]" data-name="Badge">
      <div className="h-[21.587px] overflow-clip relative rounded-[inherit] w-[37.1px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[8.8px] not-italic text-[#1447e6] text-[12px] text-nowrap top-[1.8px] whitespace-pre">FEB</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#bedbff] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell113() {
  return (
    <div className="absolute h-[38.788px] left-[64px] top-0 w-[128px]" data-name="TableCell">
      <Badge48 />
    </div>
  );
}

function TableCell114() {
  return (
    <div className="absolute h-[38.788px] left-[192px] top-0 w-[331.2px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.19px] whitespace-pre">Dry graphs</p>
    </div>
  );
}

function TableCell115() {
  return (
    <div className="absolute h-[38.788px] left-[523.2px] top-0 w-[128px]" data-name="TableCell">
      <p className="absolute font-['Consolas:Regular',_sans-serif] leading-[20px] left-[120.3px] not-italic text-[14px] text-neutral-950 text-nowrap text-right top-[8.99px] translate-x-[-100%] whitespace-pre">0</p>
    </div>
  );
}

function TableCell116() {
  return (
    <div className="absolute h-[38.788px] left-[651.2px] top-0 w-[128px]" data-name="TableCell">
      <p className="absolute font-['Consolas:Regular',_sans-serif] leading-[20px] left-[120.5px] not-italic text-[14px] text-neutral-950 text-right top-[8.99px] translate-x-[-100%] w-[39px]">₹0.00</p>
    </div>
  );
}

function Badge49() {
  return (
    <div className="absolute bg-green-50 h-[21.587px] left-[8px] rounded-[8px] top-[8.8px] w-[75.763px]" data-name="Badge">
      <div className="h-[21.587px] overflow-clip relative rounded-[inherit] w-[75.763px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[8.8px] not-italic text-[#008236] text-[12px] text-nowrap top-[1.8px] whitespace-pre">2025-2026</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#b9f8cf] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell117() {
  return (
    <div className="absolute h-[38.788px] left-[779.2px] top-0 w-[128px]" data-name="TableCell">
      <Badge49 />
    </div>
  );
}

function Badge50() {
  return (
    <div className="absolute bg-red-50 h-[21.587px] left-[8px] rounded-[8px] top-[8.8px] w-[52.112px]" data-name="Badge">
      <div className="h-[21.587px] overflow-clip relative rounded-[inherit] w-[52.112px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[8.8px] not-italic text-[#c10007] text-[12px] text-nowrap top-[1.8px] whitespace-pre">Empty</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#ffc9c9] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell118() {
  return (
    <div className="absolute h-[38.788px] left-[907.2px] top-0 w-[80px]" data-name="TableCell">
      <Badge50 />
    </div>
  );
}

function TableRow17() {
  return (
    <div className="absolute h-[38.788px] left-0 top-[620.6px] w-[987.2px]" data-name="TableRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <TableCell112 />
      <TableCell113 />
      <TableCell114 />
      <TableCell115 />
      <TableCell116 />
      <TableCell117 />
      <TableCell118 />
    </div>
  );
}

function TableCell119() {
  return (
    <div className="absolute h-[38.788px] left-0 top-0 w-[64px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.19px] whitespace-pre">18</p>
    </div>
  );
}

function Badge51() {
  return (
    <div className="absolute bg-blue-50 h-[21.587px] left-[8px] rounded-[8px] top-[8.8px] w-[37.1px]" data-name="Badge">
      <div className="h-[21.587px] overflow-clip relative rounded-[inherit] w-[37.1px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[8.8px] not-italic text-[#1447e6] text-[12px] text-nowrap top-[1.8px] whitespace-pre">FEB</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#bedbff] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell120() {
  return (
    <div className="absolute h-[38.788px] left-[64px] top-0 w-[128px]" data-name="TableCell">
      <Badge51 />
    </div>
  );
}

function TableCell121() {
  return (
    <div className="absolute h-[38.788px] left-[192px] top-0 w-[331.2px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.19px] whitespace-pre">Elaikkai</p>
    </div>
  );
}

function TableCell122() {
  return (
    <div className="absolute h-[38.788px] left-[523.2px] top-0 w-[128px]" data-name="TableCell">
      <p className="absolute font-['Consolas:Regular',_sans-serif] leading-[20px] left-[120.3px] not-italic text-[14px] text-neutral-950 text-nowrap text-right top-[8.99px] translate-x-[-100%] whitespace-pre">0</p>
    </div>
  );
}

function TableCell123() {
  return (
    <div className="absolute h-[38.788px] left-[651.2px] top-0 w-[128px]" data-name="TableCell">
      <p className="absolute font-['Consolas:Regular',_sans-serif] leading-[20px] left-[120.5px] not-italic text-[14px] text-neutral-950 text-right top-[8.99px] translate-x-[-100%] w-[39px]">₹0.00</p>
    </div>
  );
}

function Badge52() {
  return (
    <div className="absolute bg-green-50 h-[21.587px] left-[8px] rounded-[8px] top-[8.8px] w-[75.763px]" data-name="Badge">
      <div className="h-[21.587px] overflow-clip relative rounded-[inherit] w-[75.763px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[8.8px] not-italic text-[#008236] text-[12px] text-nowrap top-[1.8px] whitespace-pre">2025-2026</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#b9f8cf] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell124() {
  return (
    <div className="absolute h-[38.788px] left-[779.2px] top-0 w-[128px]" data-name="TableCell">
      <Badge52 />
    </div>
  );
}

function Badge53() {
  return (
    <div className="absolute bg-red-50 h-[21.587px] left-[8px] rounded-[8px] top-[8.8px] w-[52.112px]" data-name="Badge">
      <div className="h-[21.587px] overflow-clip relative rounded-[inherit] w-[52.112px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[8.8px] not-italic text-[#c10007] text-[12px] text-nowrap top-[1.8px] whitespace-pre">Empty</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#ffc9c9] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell125() {
  return (
    <div className="absolute h-[38.788px] left-[907.2px] top-0 w-[80px]" data-name="TableCell">
      <Badge53 />
    </div>
  );
}

function TableRow18() {
  return (
    <div className="absolute h-[38.788px] left-0 top-[659.39px] w-[987.2px]" data-name="TableRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <TableCell119 />
      <TableCell120 />
      <TableCell121 />
      <TableCell122 />
      <TableCell123 />
      <TableCell124 />
      <TableCell125 />
    </div>
  );
}

function TableCell126() {
  return (
    <div className="absolute h-[38.788px] left-0 top-0 w-[64px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.19px] whitespace-pre">19</p>
    </div>
  );
}

function Badge54() {
  return (
    <div className="absolute bg-blue-50 h-[21.587px] left-[8px] rounded-[8px] top-[8.8px] w-[37.1px]" data-name="Badge">
      <div className="h-[21.587px] overflow-clip relative rounded-[inherit] w-[37.1px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[8.8px] not-italic text-[#1447e6] text-[12px] text-nowrap top-[1.8px] whitespace-pre">FEB</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#bedbff] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell127() {
  return (
    <div className="absolute h-[38.788px] left-[64px] top-0 w-[128px]" data-name="TableCell">
      <Badge54 />
    </div>
  );
}

function TableCell128() {
  return (
    <div className="absolute h-[38.788px] left-[192px] top-0 w-[331.2px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.19px] whitespace-pre">Garlic</p>
    </div>
  );
}

function TableCell129() {
  return (
    <div className="absolute h-[38.788px] left-[523.2px] top-0 w-[128px]" data-name="TableCell">
      <p className="absolute font-['Consolas:Regular',_sans-serif] leading-[20px] left-[120.3px] not-italic text-[14px] text-neutral-950 text-nowrap text-right top-[8.99px] translate-x-[-100%] whitespace-pre">0</p>
    </div>
  );
}

function TableCell130() {
  return (
    <div className="absolute h-[38.788px] left-[651.2px] top-0 w-[128px]" data-name="TableCell">
      <p className="absolute font-['Consolas:Regular',_sans-serif] leading-[20px] left-[120.5px] not-italic text-[14px] text-neutral-950 text-right top-[8.99px] translate-x-[-100%] w-[39px]">₹0.00</p>
    </div>
  );
}

function Badge55() {
  return (
    <div className="absolute bg-green-50 h-[21.587px] left-[8px] rounded-[8px] top-[8.8px] w-[75.763px]" data-name="Badge">
      <div className="h-[21.587px] overflow-clip relative rounded-[inherit] w-[75.763px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[8.8px] not-italic text-[#008236] text-[12px] text-nowrap top-[1.8px] whitespace-pre">2025-2026</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#b9f8cf] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell131() {
  return (
    <div className="absolute h-[38.788px] left-[779.2px] top-0 w-[128px]" data-name="TableCell">
      <Badge55 />
    </div>
  );
}

function Badge56() {
  return (
    <div className="absolute bg-red-50 h-[21.587px] left-[8px] rounded-[8px] top-[8.8px] w-[52.112px]" data-name="Badge">
      <div className="h-[21.587px] overflow-clip relative rounded-[inherit] w-[52.112px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[8.8px] not-italic text-[#c10007] text-[12px] text-nowrap top-[1.8px] whitespace-pre">Empty</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#ffc9c9] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell132() {
  return (
    <div className="absolute h-[38.788px] left-[907.2px] top-0 w-[80px]" data-name="TableCell">
      <Badge56 />
    </div>
  );
}

function TableRow19() {
  return (
    <div className="absolute h-[38.788px] left-0 top-[698.17px] w-[987.2px]" data-name="TableRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <TableCell126 />
      <TableCell127 />
      <TableCell128 />
      <TableCell129 />
      <TableCell130 />
      <TableCell131 />
      <TableCell132 />
    </div>
  );
}

function TableCell133() {
  return (
    <div className="absolute h-[38.388px] left-0 top-0 w-[64px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.19px] whitespace-pre">20</p>
    </div>
  );
}

function Badge57() {
  return (
    <div className="absolute bg-blue-50 h-[21.587px] left-[8px] rounded-[8px] top-[8.8px] w-[37.1px]" data-name="Badge">
      <div className="h-[21.587px] overflow-clip relative rounded-[inherit] w-[37.1px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[8.8px] not-italic text-[#1447e6] text-[12px] text-nowrap top-[1.8px] whitespace-pre">FEB</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#bedbff] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell134() {
  return (
    <div className="absolute h-[38.388px] left-[64px] top-0 w-[128px]" data-name="TableCell">
      <Badge57 />
    </div>
  );
}

function TableCell135() {
  return (
    <div className="absolute h-[38.388px] left-[192px] top-0 w-[331.2px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.19px] whitespace-pre">Gas(Big)</p>
    </div>
  );
}

function TableCell136() {
  return (
    <div className="absolute h-[38.388px] left-[523.2px] top-0 w-[128px]" data-name="TableCell">
      <p className="absolute font-['Consolas:Regular',_sans-serif] leading-[20px] left-[120.3px] not-italic text-[14px] text-neutral-950 text-nowrap text-right top-[8.99px] translate-x-[-100%] whitespace-pre">0</p>
    </div>
  );
}

function TableCell137() {
  return (
    <div className="absolute h-[38.388px] left-[651.2px] top-0 w-[128px]" data-name="TableCell">
      <p className="absolute font-['Consolas:Regular',_sans-serif] leading-[20px] left-[120.5px] not-italic text-[14px] text-neutral-950 text-right top-[8.99px] translate-x-[-100%] w-[39px]">₹0.00</p>
    </div>
  );
}

function Badge58() {
  return (
    <div className="absolute bg-green-50 h-[21.587px] left-[8px] rounded-[8px] top-[8.8px] w-[75.763px]" data-name="Badge">
      <div className="h-[21.587px] overflow-clip relative rounded-[inherit] w-[75.763px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[8.8px] not-italic text-[#008236] text-[12px] text-nowrap top-[1.8px] whitespace-pre">2025-2026</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#b9f8cf] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell138() {
  return (
    <div className="absolute h-[38.388px] left-[779.2px] top-0 w-[128px]" data-name="TableCell">
      <Badge58 />
    </div>
  );
}

function Badge59() {
  return (
    <div className="absolute bg-red-50 h-[21.587px] left-[8px] rounded-[8px] top-[8.8px] w-[52.112px]" data-name="Badge">
      <div className="h-[21.587px] overflow-clip relative rounded-[inherit] w-[52.112px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[8.8px] not-italic text-[#c10007] text-[12px] text-nowrap top-[1.8px] whitespace-pre">Empty</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#ffc9c9] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell139() {
  return (
    <div className="absolute h-[38.388px] left-[907.2px] top-0 w-[80px]" data-name="TableCell">
      <Badge59 />
    </div>
  );
}

function TableRow20() {
  return (
    <div className="absolute h-[38.388px] left-0 top-[736.96px] w-[987.2px]" data-name="TableRow">
      <TableCell133 />
      <TableCell134 />
      <TableCell135 />
      <TableCell136 />
      <TableCell137 />
      <TableCell138 />
      <TableCell139 />
    </div>
  );
}

function TableBody() {
  return (
    <div className="absolute h-[775.35px] left-0 top-[40px] w-[987.2px]" data-name="TableBody">
      <TableRow1 />
      <TableRow2 />
      <TableRow3 />
      <TableRow4 />
      <TableRow5 />
      <TableRow6 />
      <TableRow7 />
      <TableRow8 />
      <TableRow9 />
      <TableRow10 />
      <TableRow11 />
      <TableRow12 />
      <TableRow13 />
      <TableRow14 />
      <TableRow15 />
      <TableRow16 />
      <TableRow17 />
      <TableRow18 />
      <TableRow19 />
      <TableRow20 />
    </div>
  );
}

function Table() {
  return (
    <div className="h-[815.35px] overflow-clip relative shrink-0 w-full" data-name="Table">
      <TableHeader />
      <TableBody />
    </div>
  );
}

function BalanceContent9() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[816.95px] items-start left-[24.8px] p-[0.8px] rounded-[8px] top-[90.8px] w-[988.8px]" data-name="BalanceContent">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Table />
    </div>
  );
}

function Card4() {
  return (
    <div className="bg-white h-[932.55px] relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <CardHeader />
      <BalanceContent9 />
    </div>
  );
}

function BalanceContent10() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[24px] h-[1160.12px] items-start left-[0.8px] pb-0 pt-[24px] px-[24px] top-[85.6px] w-[1086.4px]" data-name="BalanceContent">
      <Container4 />
      <Card4 />
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-white h-[1246.53px] relative rounded-[10px] shrink-0 w-[1088px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[1246.53px] overflow-clip relative rounded-[inherit] w-[1088px]">
        <BalanceHeader />
        <BalanceContent10 />
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

export default function Balance() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative size-full" data-name="Balance">
      <Container5 />
    </div>
  );
}