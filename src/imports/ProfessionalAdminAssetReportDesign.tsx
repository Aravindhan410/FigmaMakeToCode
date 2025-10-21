import svgPaths from "./svg-joacamhv4u";

function AssetReport() {
  return <div className="absolute bg-[#2b7fff] left-0 rounded-[2.68435e+07px] size-[8px] top-[4px]" data-name="AssetReport" />;
}

function CardTitle() {
  return (
    <div className="absolute h-[16px] left-[24px] top-[24px] w-[1085.6px]" data-name="CardTitle">
      <AssetReport />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[16px] not-italic text-[#1d293d] text-[16px] text-nowrap top-[-2.2px] whitespace-pre">Administration Asset Report</p>
    </div>
  );
}

function CardHeader() {
  return (
    <div className="bg-slate-50 h-[70.8px] relative shrink-0 w-[1133.6px]" data-name="CardHeader">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[70.8px] relative w-[1133.6px]">
        <CardTitle />
      </div>
    </div>
  );
}

function PrimitiveLabel() {
  return (
    <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[#314158] text-[14px] text-nowrap whitespace-pre">Date</p>
    </div>
  );
}

function Input() {
  return (
    <div className="absolute bg-white h-[36px] left-0 rounded-[8px] top-0 w-[159.325px]" data-name="Input">
      <div className="box-border content-stretch flex h-[36px] items-center overflow-clip px-[12px] py-[4px] relative rounded-[inherit] w-[159.325px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">06-Oct-2025</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#cad5e2] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[131.32px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M5.33333 1.33333V4" id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 1.33333V4" id="Vector_2" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3ee34580} id="Vector_3" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 6.66667H14" id="Vector_4" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
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
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[58px] items-start left-0 top-0 w-[159.325px]" data-name="Container">
      <PrimitiveLabel />
      <Container />
    </div>
  );
}

function PrimitiveLabel1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[#314158] text-[14px] text-nowrap whitespace-pre">Assets</p>
    </div>
  );
}

function PrimitiveSpan() {
  return (
    <div className="h-[20px] relative shrink-0 w-[71.588px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[20px] items-center overflow-clip relative rounded-[inherit] w-[71.588px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Select asset</p>
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
      <div aria-hidden="true" className="absolute border-[#cad5e2] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
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
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[58px] items-start left-[175.32px] top-0 w-[159.338px]" data-name="Container">
      <PrimitiveLabel1 />
      <PrimitiveButton />
    </div>
  );
}

function PrimitiveLabel2() {
  return (
    <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[#314158] text-[14px] text-nowrap whitespace-pre">Description</p>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[36px] items-center px-[12px] py-[4px] relative w-full">
          <p className="font-['Arial:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Enter description</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#cad5e2] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[58px] items-start left-[350.66px] top-0 w-[159.338px]" data-name="Container">
      <PrimitiveLabel2 />
      <Input1 />
    </div>
  );
}

function PrimitiveLabel3() {
  return (
    <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[#314158] text-[14px] text-nowrap whitespace-pre">Qty</p>
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
      <div aria-hidden="true" className="absolute border-[#cad5e2] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[58px] items-start left-[526px] top-0 w-[159.325px]" data-name="Container">
      <PrimitiveLabel3 />
      <Input2 />
    </div>
  );
}

function PrimitiveLabel4() {
  return (
    <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[#314158] text-[14px] text-nowrap whitespace-pre">Rate</p>
    </div>
  );
}

function Input3() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[36px] items-center px-[12px] py-[4px] relative w-full">
          <p className="font-['Arial:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">0</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#cad5e2] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[58px] items-start left-[701.33px] top-0 w-[159.338px]" data-name="Container">
      <PrimitiveLabel4 />
      <Input3 />
    </div>
  );
}

function PrimitiveLabel5() {
  return (
    <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[#314158] text-[14px] text-nowrap whitespace-pre">Amount</p>
    </div>
  );
}

function Input4() {
  return (
    <div className="bg-slate-100 h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border-[#cad5e2] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[58px] items-start left-[876.66px] top-0 w-[159.338px]" data-name="Container">
      <PrimitiveLabel5 />
      <Input4 />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute h-[58px] left-[24.8px] top-[24.8px] w-[1036px]" data-name="Container">
      <Container1 />
      <Container2 />
      <Container3 />
      <Container4 />
      <Container5 />
      <Container6 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-[12px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 3.33333V12.6667" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#155dfc] h-[36px] left-[954.13px] rounded-[8px] top-[106.8px] w-[106.675px]" data-name="Button">
      <Icon2 />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[44px] not-italic text-[14px] text-nowrap text-white top-[6.8px] whitespace-pre">SUBMIT</p>
    </div>
  );
}

function AssetReport1() {
  return (
    <div className="bg-slate-50 h-[167.6px] relative rounded-[10px] shrink-0 w-full" data-name="AssetReport">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Container7 />
      <Button />
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[27px] left-0 not-italic text-[#1d293d] text-[18px] text-nowrap top-[-2.2px] whitespace-pre">Asset Records</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-slate-100 h-[51.8px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[51.8px] items-start pb-[0.8px] pt-[12px] px-[16px] relative w-full">
          <Heading3 />
        </div>
      </div>
    </div>
  );
}

function TableHead() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[64px]" data-name="TableHead">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[32.41px] not-italic text-[#1c398e] text-[14px] text-center text-nowrap top-[8.6px] translate-x-[-50%] whitespace-pre">Sno</p>
    </div>
  );
}

function TableHead1() {
  return (
    <div className="absolute h-[40px] left-[64px] top-0 w-[278.45px]" data-name="TableHead">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[#1c398e] text-[14px] text-nowrap top-[8.6px] whitespace-pre">Date</p>
    </div>
  );
}

function TableHead2() {
  return (
    <div className="absolute h-[40px] left-[342.45px] top-0 w-[175.637px]" data-name="TableHead">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[#1c398e] text-[14px] text-nowrap top-[8.6px] whitespace-pre">Assets</p>
    </div>
  );
}

function TableHead3() {
  return (
    <div className="absolute h-[40px] left-[518.09px] top-0 w-[277.913px]" data-name="TableHead">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[#1c398e] text-[14px] text-nowrap top-[8.6px] whitespace-pre">Description</p>
    </div>
  );
}

function TableHead4() {
  return (
    <div className="absolute h-[40px] left-[796px] top-0 w-[80px]" data-name="TableHead">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[39.61px] not-italic text-[#1c398e] text-[14px] text-center text-nowrap top-[8.6px] translate-x-[-50%] whitespace-pre">Qty</p>
    </div>
  );
}

function TableHead5() {
  return (
    <div className="absolute h-[40px] left-[876px] top-0 w-[96px]" data-name="TableHead">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[88.56px] not-italic text-[#1c398e] text-[14px] text-nowrap text-right top-[8.6px] translate-x-[-100%] whitespace-pre">Rate</p>
    </div>
  );
}

function TableHead6() {
  return (
    <div className="absolute h-[40px] left-[972px] top-0 w-[112px]" data-name="TableHead">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[104.44px] not-italic text-[#1c398e] text-[14px] text-nowrap text-right top-[8.6px] translate-x-[-100%] whitespace-pre">Amount</p>
    </div>
  );
}

function TableRow() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[1084px]" data-name="TableRow">
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
    <div className="absolute bg-blue-50 h-[40px] left-0 top-0 w-[1084px]" data-name="TableHeader">
      <TableRow />
    </div>
  );
}

function Badge() {
  return (
    <div className="absolute bg-[#ff6900] h-[21.587px] left-[20.77px] rounded-[8px] top-[8.8px] w-[22.438px]" data-name="Badge">
      <div className="h-[21.587px] overflow-clip relative rounded-[inherit] w-[22.438px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[11.3px] not-italic text-[12px] text-center text-nowrap text-white top-[1.8px] translate-x-[-50%] whitespace-pre">1</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell() {
  return (
    <div className="absolute h-[38.388px] left-0 top-0 w-[64px]" data-name="TableCell">
      <Badge />
    </div>
  );
}

function TableCell1() {
  return (
    <div className="absolute h-[38.388px] left-[64px] top-0 w-[278.45px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[#314158] text-[14px] text-nowrap top-[8.19px] whitespace-pre">03-Jul-2025</p>
    </div>
  );
}

function TableCell2() {
  return (
    <div className="absolute h-[38.388px] left-[342.45px] top-0 w-[175.637px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[#314158] text-[14px] text-nowrap top-[8.19px] whitespace-pre">TEST</p>
    </div>
  );
}

function TableCell3() {
  return (
    <div className="absolute h-[38.388px] left-[518.09px] top-0 w-[277.913px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[#314158] text-[14px] text-nowrap top-[8.19px] whitespace-pre">TEST</p>
    </div>
  );
}

function TableCell4() {
  return (
    <div className="absolute h-[38.388px] left-[796px] top-0 w-[80px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[40.23px] not-italic text-[#314158] text-[14px] text-center text-nowrap top-[8.19px] translate-x-[-50%] whitespace-pre">5</p>
    </div>
  );
}

function TableCell5() {
  return (
    <div className="absolute h-[38.388px] left-[876px] top-0 w-[96px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[88.78px] not-italic text-[#314158] text-[14px] text-nowrap text-right top-[8.19px] translate-x-[-100%] whitespace-pre">1,000</p>
    </div>
  );
}

function TableCell6() {
  return (
    <div className="absolute h-[38.388px] left-[972px] top-0 w-[112px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[104.78px] not-italic text-[#314158] text-[14px] text-nowrap text-right top-[8.19px] translate-x-[-100%] whitespace-pre">5,000</p>
    </div>
  );
}

function TableRow1() {
  return (
    <div className="absolute h-[38.388px] left-0 top-0 w-[1084px]" data-name="TableRow">
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

function TableBody() {
  return (
    <div className="absolute h-[38.388px] left-0 top-[40px] w-[1084px]" data-name="TableBody">
      <TableRow1 />
    </div>
  );
}

function Table() {
  return (
    <div className="h-[78.388px] overflow-clip relative shrink-0 w-full" data-name="Table">
      <TableHeader />
      <TableBody />
    </div>
  );
}

function AssetReport2() {
  return (
    <div className="bg-white h-[131.788px] relative rounded-[10px] shrink-0 w-full" data-name="AssetReport">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[1.907e_-5px] h-[131.788px] items-start p-[0.8px] relative w-full">
          <Container8 />
          <Table />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-[12.8px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p38f39800} id="Vector" stroke="var(--stroke-0, #314158)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p26302300} id="Vector_2" stroke="var(--stroke-0, #314158)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-[108.838px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#cad5e2] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[36px] relative w-[108.838px]">
        <Icon3 />
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[44.8px] not-italic text-[#314158] text-[14px] text-nowrap top-[6.8px] whitespace-pre">UPDATE</p>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute left-[12.8px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M12 4L4 12" id="Vector" stroke="var(--stroke-0, #314158)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M4 4L12 12" id="Vector_2" stroke="var(--stroke-0, #314158)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-[98.175px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#cad5e2] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[36px] relative w-[98.175px]">
        <Icon4 />
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[44.8px] not-italic text-[#314158] text-[14px] text-nowrap top-[6.8px] whitespace-pre">CLOSE</p>
      </div>
    </div>
  );
}

function AssetReport3() {
  return (
    <div className="box-border content-stretch flex gap-[12px] h-[52.8px] items-start justify-end pb-0 pt-[16.8px] px-0 relative shrink-0 w-full" data-name="AssetReport">
      <div aria-hidden="true" className="absolute border-[0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <Button1 />
      <Button2 />
    </div>
  );
}

function CardContent() {
  return (
    <div className="h-[448.188px] relative shrink-0 w-[1133.6px]" data-name="CardContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[24px] h-[448.188px] items-start pb-0 pt-[24px] px-[24px] relative w-[1133.6px]">
        <AssetReport1 />
        <AssetReport2 />
        <AssetReport3 />
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="bg-white h-[544.588px] relative rounded-[14px] shrink-0 w-[1135.2px]" data-name="Card">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[24px] h-[544.588px] items-start p-[0.8px] relative w-[1135.2px]">
        <CardHeader />
        <CardContent />
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="bg-gray-100 content-stretch flex h-[646.4px] items-center justify-center relative shrink-0 w-full" data-name="App">
      <Card />
    </div>
  );
}

export default function ProfessionalAdminAssetReportDesign() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Professional Admin Asset Report Design">
      <App />
    </div>
  );
}