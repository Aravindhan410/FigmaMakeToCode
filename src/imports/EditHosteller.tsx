import svgPaths from "./svg-0r4a7bslbn";

function PrimitiveLabel() {
  return (
    <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Course</p>
    </div>
  );
}

function PrimitiveSpan() {
  return (
    <div className="h-[20px] relative shrink-0 w-[15.813px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[20px] items-center overflow-clip relative rounded-[inherit] w-[15.813px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">All</p>
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
    <div className="bg-[#f3f3f5] h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[36px] items-center justify-between px-[12.8px] py-[0.8px] relative w-full">
          <PrimitiveSpan />
          <Icon />
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col h-[50px] items-start left-0 top-0 w-[164.925px]" data-name="Container">
      <PrimitiveLabel />
      <PrimitiveButton />
    </div>
  );
}

function PrimitiveLabel1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Sem</p>
    </div>
  );
}

function Input() {
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

function Container1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[50px] items-start left-[180.93px] top-0 w-[74.475px]" data-name="Container">
      <PrimitiveLabel1 />
      <Input />
    </div>
  );
}

function PrimitiveLabel2() {
  return (
    <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Search Name / L.No / Regno</p>
    </div>
  );
}

function Input1() {
  return (
    <div className="absolute bg-[#f3f3f5] h-[36px] left-0 rounded-[8px] top-0 w-[345.863px]" data-name="Input">
      <div className="box-border content-stretch flex h-[36px] items-center overflow-clip pl-[40px] pr-[12px] py-[4px] relative rounded-[inherit] w-[345.863px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Enter search term...</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[12px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M14 14L11.1067 11.1067" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p107a080} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Container">
      <Input1 />
      <Icon1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col h-[50px] items-start left-[271.4px] top-0 w-[345.863px]" data-name="Container">
      <PrimitiveLabel2 />
      <Container2 />
    </div>
  );
}

function PrimitiveLabel3() {
  return (
    <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Find</p>
    </div>
  );
}

function Input2() {
  return (
    <div className="bg-[#f3f3f5] h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[36px] items-center px-[12px] py-[4px] relative w-full">
          <p className="font-['Arial:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Find text</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex flex-col h-[50px] items-start left-[633.26px] top-0 w-[164.938px]" data-name="Container">
      <PrimitiveLabel3 />
      <Input2 />
    </div>
  );
}

function PrimitiveLabel4() {
  return (
    <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Replace</p>
    </div>
  );
}

function Input3() {
  return (
    <div className="bg-[#f3f3f5] h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[36px] items-center px-[12px] py-[4px] relative w-full">
          <p className="font-['Arial:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Replace with</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex flex-col h-[50px] items-start left-[814.2px] top-0 w-[164.925px]" data-name="Container">
      <PrimitiveLabel4 />
      <Input3 />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#030213] h-[36px] left-[995.13px] rounded-[8px] top-[14px] w-[74.475px]" data-name="Button">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8.99px] not-italic text-[14px] text-nowrap text-white top-[6.8px] whitespace-pre">REPLACE</p>
    </div>
  );
}

function App() {
  return (
    <div className="h-[50px] relative shrink-0 w-full" data-name="App">
      <Container />
      <Container1 />
      <Container3 />
      <Container4 />
      <Container5 />
      <Button />
    </div>
  );
}

function PrimitiveDiv() {
  return <div className="bg-[rgba(0,0,0,0.1)] h-px shrink-0 w-full" data-name="Primitive.div" />;
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p2d50f500} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p32887f80} id="Vector_2" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3694d280} id="Vector_3" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[20px] relative shrink-0 w-[167.963px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[167.963px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-1.2px] whitespace-pre">No of Students are Staying:</p>
      </div>
    </div>
  );
}

function Badge() {
  return (
    <div className="bg-green-100 h-[21.587px] relative rounded-[8px] shrink-0 w-[31.188px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[21.587px] items-center justify-center overflow-clip px-[8.8px] py-[2.8px] relative rounded-[inherit] w-[31.188px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[16px] not-italic relative shrink-0 text-[#016630] text-[12px] text-nowrap whitespace-pre">45</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[21.587px] relative shrink-0 w-[231.15px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[21.587px] items-center relative w-[231.15px]">
        <Icon2 />
        <Text />
        <Badge />
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p32887f80} id="Vector" stroke="var(--stroke-0, #F54900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3694d280} id="Vector_2" stroke="var(--stroke-0, #F54900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2c08a8a0} id="Vector_3" stroke="var(--stroke-0, #F54900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2408dcc0} id="Vector_4" stroke="var(--stroke-0, #F54900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[174.15px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[174.15px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-1.2px] whitespace-pre">No of Students were Vacant:</p>
      </div>
    </div>
  );
}

function Badge1() {
  return (
    <div className="bg-[#ffedd4] h-[21.587px] relative rounded-[8px] shrink-0 w-[29.1px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[21.587px] items-center justify-center overflow-clip px-[8.8px] py-[2.8px] relative rounded-[inherit] w-[29.1px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[16px] not-italic relative shrink-0 text-[#9f2d00] text-[12px] text-nowrap whitespace-pre">15</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[21.587px] relative shrink-0 w-[235.25px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[21.587px] items-center relative w-[235.25px]">
        <Icon3 />
        <Text1 />
        <Badge1 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute content-stretch flex gap-[24px] h-[21.587px] items-start left-0 top-0 w-[490.4px]" data-name="Container">
      <Container6 />
      <Container7 />
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute content-stretch flex h-[18.4px] items-start left-[112.96px] top-[0.8px] w-[7.775px]" data-name="Text">
      <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4a5565] text-[14px] text-nowrap whitespace-pre">2</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute h-[20px] left-[948.86px] top-[0.79px] w-[120.738px]" data-name="Container">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-[-1.2px] whitespace-pre">Showing Records:</p>
      <Text2 />
    </div>
  );
}

function App1() {
  return (
    <div className="h-[21.587px] relative shrink-0 w-full" data-name="App">
      <Container8 />
      <Container9 />
    </div>
  );
}

function CardContent() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[16px] h-[128px] items-start left-px px-[10px] py-0 top-[11px] w-[1101px]" data-name="CardContent">
      <App />
      <PrimitiveDiv />
      <App1 />
    </div>
  );
}

function Card() {
  return (
    <div className="bg-white h-[125px] relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <CardContent />
    </div>
  );
}

function TableHead() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[64px]" data-name="TableHead">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.6px] whitespace-pre">Lno</p>
    </div>
  );
}

function TableHead1() {
  return (
    <div className="absolute h-[40px] left-[64px] top-0 w-[96px]" data-name="TableHead">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.6px] whitespace-pre">Regno</p>
    </div>
  );
}

function TableHead2() {
  return (
    <div className="absolute h-[40px] left-[160px] top-0 w-[573.6px]" data-name="TableHead">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.6px] whitespace-pre">StudName</p>
    </div>
  );
}

function TableHead3() {
  return (
    <div className="absolute h-[40px] left-[733.6px] top-0 w-[80px]" data-name="TableHead">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.6px] whitespace-pre">Course</p>
    </div>
  );
}

function TableHead4() {
  return (
    <div className="absolute h-[40px] left-[813.6px] top-0 w-[64px]" data-name="TableHead">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.6px] whitespace-pre">CNo</p>
    </div>
  );
}

function TableHead5() {
  return (
    <div className="absolute h-[40px] left-[877.6px] top-0 w-[80px]" data-name="TableHead">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.6px] whitespace-pre">SYear</p>
    </div>
  );
}

function TableHead6() {
  return (
    <div className="absolute h-[40px] left-[957.6px] top-0 w-[64px]" data-name="TableHead">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.6px] whitespace-pre">Sem</p>
    </div>
  );
}

function TableHead7() {
  return (
    <div className="absolute h-[40px] left-[1021.6px] top-0 w-[96px]" data-name="TableHead">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.6px] whitespace-pre">DOB</p>
    </div>
  );
}

function TableRow() {
  return (
    <div className="absolute bg-blue-50 h-[40px] left-0 top-0 w-[1117.6px]" data-name="TableRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <TableHead />
      <TableHead1 />
      <TableHead2 />
      <TableHead3 />
      <TableHead4 />
      <TableHead5 />
      <TableHead6 />
      <TableHead7 />
    </div>
  );
}

function TableHeader() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[1117.6px]" data-name="TableHeader">
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

function TableCell1() {
  return (
    <div className="absolute h-[38.788px] left-[64px] top-0 w-[96px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.19px] whitespace-pre">2021001</p>
    </div>
  );
}

function TableCell2() {
  return (
    <div className="absolute h-[38.788px] left-[160px] top-0 w-[573.6px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.19px] whitespace-pre">John Doe</p>
    </div>
  );
}

function Badge2() {
  return (
    <div className="absolute h-[21.587px] left-[8px] rounded-[8px] top-[8.8px] w-[37.8px]" data-name="Badge">
      <div className="h-[21.587px] overflow-clip relative rounded-[inherit] w-[37.8px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[8.8px] not-italic text-[12px] text-neutral-950 text-nowrap top-[1.8px] whitespace-pre">CSE</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell3() {
  return (
    <div className="absolute h-[38.788px] left-[733.6px] top-0 w-[80px]" data-name="TableCell">
      <Badge2 />
    </div>
  );
}

function TableCell4() {
  return (
    <div className="absolute h-[38.788px] left-[813.6px] top-0 w-[64px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.19px] whitespace-pre">101</p>
    </div>
  );
}

function TableCell5() {
  return (
    <div className="absolute h-[38.788px] left-[877.6px] top-0 w-[80px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.19px] whitespace-pre">2021</p>
    </div>
  );
}

function TableCell6() {
  return (
    <div className="absolute h-[38.788px] left-[957.6px] top-0 w-[64px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.19px] whitespace-pre">6</p>
    </div>
  );
}

function TableCell7() {
  return (
    <div className="absolute h-[38.788px] left-[1021.6px] top-0 w-[96px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.19px] whitespace-pre">15/03/2003</p>
    </div>
  );
}

function TableRow1() {
  return (
    <div className="absolute h-[38.788px] left-0 top-0 w-[1117.6px]" data-name="TableRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <TableCell />
      <TableCell1 />
      <TableCell2 />
      <TableCell3 />
      <TableCell4 />
      <TableCell5 />
      <TableCell6 />
      <TableCell7 />
    </div>
  );
}

function TableCell8() {
  return (
    <div className="absolute h-[38.388px] left-0 top-0 w-[64px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.19px] whitespace-pre">2</p>
    </div>
  );
}

function TableCell9() {
  return (
    <div className="absolute h-[38.388px] left-[64px] top-0 w-[96px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.19px] whitespace-pre">2021002</p>
    </div>
  );
}

function TableCell10() {
  return (
    <div className="absolute h-[38.388px] left-[160px] top-0 w-[573.6px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.19px] whitespace-pre">Jane Smith</p>
    </div>
  );
}

function Badge3() {
  return (
    <div className="absolute h-[21.587px] left-[8px] rounded-[8px] top-[8.8px] w-[37.475px]" data-name="Badge">
      <div className="h-[21.587px] overflow-clip relative rounded-[inherit] w-[37.475px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[8.8px] not-italic text-[12px] text-neutral-950 text-nowrap top-[1.8px] whitespace-pre">ECE</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell11() {
  return (
    <div className="absolute h-[38.388px] left-[733.6px] top-0 w-[80px]" data-name="TableCell">
      <Badge3 />
    </div>
  );
}

function TableCell12() {
  return (
    <div className="absolute h-[38.388px] left-[813.6px] top-0 w-[64px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.19px] whitespace-pre">102</p>
    </div>
  );
}

function TableCell13() {
  return (
    <div className="absolute h-[38.388px] left-[877.6px] top-0 w-[80px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.19px] whitespace-pre">2021</p>
    </div>
  );
}

function TableCell14() {
  return (
    <div className="absolute h-[38.388px] left-[957.6px] top-0 w-[64px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.19px] whitespace-pre">6</p>
    </div>
  );
}

function TableCell15() {
  return (
    <div className="absolute h-[38.388px] left-[1021.6px] top-0 w-[96px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.19px] whitespace-pre">22/07/2003</p>
    </div>
  );
}

function TableRow2() {
  return (
    <div className="absolute h-[38.388px] left-0 top-[38.79px] w-[1117.6px]" data-name="TableRow">
      <TableCell8 />
      <TableCell9 />
      <TableCell10 />
      <TableCell11 />
      <TableCell12 />
      <TableCell13 />
      <TableCell14 />
      <TableCell15 />
    </div>
  );
}

function TableBody() {
  return (
    <div className="absolute h-[77.175px] left-0 top-[40px] w-[1117.6px]" data-name="TableBody">
      <TableRow1 />
      <TableRow2 />
    </div>
  );
}

function Table() {
  return (
    <div className="h-[117px] relative shrink-0 w-[1100px]" data-name="Table">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[117px] overflow-clip relative rounded-[inherit] w-[1100px]">
        <TableHeader />
        <TableBody />
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="bg-white h-[142.775px] relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[142.775px] items-start p-[0.8px] relative w-full">
          <Table />
        </div>
      </div>
    </div>
  );
}

function PrimitiveButton1() {
  return (
    <div className="bg-[#f3f3f5] relative rounded-[4px] shrink-0 size-[16px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[16px]" />
    </div>
  );
}

function PrimitiveLabel5() {
  return (
    <div className="h-[20px] relative shrink-0 w-[81.5px]" data-name="Primitive.label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[20px] items-center relative w-[81.5px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Show Border</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[20px] relative shrink-0 w-[105.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[20px] items-center relative w-[105.5px]">
        <PrimitiveButton1 />
        <PrimitiveLabel5 />
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#030213] h-[36px] relative rounded-[8px] shrink-0 w-[110.438px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center px-[32px] py-[8px] relative w-[110.438px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">Update</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-[99.787px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center px-[32.8px] py-[8.8px] relative w-[99.787px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Close</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[36px] relative shrink-0 w-[222.225px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[36px] items-start relative w-[222.225px]">
        <Button1 />
        <Button2 />
      </div>
    </div>
  );
}

function App2() {
  return (
    <div className="h-[36px] relative shrink-0 w-[1069.6px]" data-name="App">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[36px] items-center justify-between relative w-[1069.6px]">
        <Container10 />
        <Container11 />
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div className="bg-white h-[77.6px] relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[77.6px] items-start pb-[0.8px] pl-[24.8px] pr-[0.8px] pt-[16.8px] relative w-full">
          <App2 />
        </div>
      </div>
    </div>
  );
}

function App3() {
  return (
    <div className="bg-gray-50 content-stretch flex flex-col gap-[24px] h-[598.4px] items-start relative shrink-0 w-full" data-name="App">
      <Card />
      <Card1 />
      <Card2 />
    </div>
  );
}

export default function EditHosteller() {
  return (
    <div className="bg-white relative size-full" data-name="Edit Hosteller">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start pb-0 pt-[24px] px-[24px] relative size-full">
          <App3 />
        </div>
      </div>
    </div>
  );
}