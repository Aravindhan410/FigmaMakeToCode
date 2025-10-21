function Container() {
  return <div className="absolute h-[36px] left-0 top-0 w-[1007.6px]" data-name="Container" />;
}

function PrimitiveLabel() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[18px] items-center left-0 top-[9px] w-[65.813px]" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[18px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">Department</p>
    </div>
  );
}

function PrimitiveSpan() {
  return <div className="absolute left-[8.8px] size-0 top-[18px]" data-name="Primitive.span" />;
}

function Icon() {
  return (
    <div className="absolute left-[95.2px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon" opacity="0.5">
          <path d="M4.00001 6L8.00001 10L12 6" id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function PrimitiveButton() {
  return (
    <div className="absolute bg-white h-[36px] left-[73.81px] rounded-[2px] top-0 w-[120px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[#99a1af] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <PrimitiveSpan />
      <Icon />
      <p className="absolute font-['Arial:Regular',_sans-serif] h-[19px] leading-[20px] left-[8.19px] not-italic opacity-60 text-[14px] text-black top-[6.2px] w-[89px]">dep</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute h-[36px] left-0 top-0 w-[193.812px]" data-name="Container">
      <PrimitiveLabel />
      <PrimitiveButton />
    </div>
  );
}

function PrimitiveLabel1() {
  return (
    <div className="h-[18px] relative shrink-0 w-[116.275px]" data-name="Primitive.label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[18px] items-center relative w-[116.275px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[18px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">Borrower ID or Name</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white h-[24px] relative rounded-[2px] shrink-0 w-[130px]" data-name="Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] w-[130px]" />
      <div aria-hidden="true" className="absolute border-[#99a1af] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[24px] items-center left-[209.81px] top-[6px] w-[254.275px]" data-name="Container">
      <PrimitiveLabel1 />
      <Input />
    </div>
  );
}

function PrimitiveLabel2() {
  return (
    <div className="basis-0 grow h-[18px] min-h-px min-w-px relative shrink-0" data-name="Primitive.label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[18px] items-center relative w-full">
        <p className="font-['Arial:Regular',_sans-serif] leading-[18px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">BookNo or Title OK GI Issue Date</p>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-white h-[24px] relative rounded-[2px] shrink-0 w-[130px]" data-name="Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] w-[130px]" />
      <div aria-hidden="true" className="absolute border-[#99a1af] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[24px] items-center left-[480.09px] top-[6px] w-[318.263px]" data-name="Container">
      <PrimitiveLabel2 />
      <Input1 />
    </div>
  );
}

function Input2() {
  return (
    <div className="absolute bg-white h-[24px] left-[814.35px] rounded-[2px] top-[6px] w-[110px]" data-name="Input">
      <div aria-hidden="true" className="absolute border-[#99a1af] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-white h-[28px] left-[940.35px] rounded-[8px] top-[4px] w-[50.087px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#99a1af] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[18px] left-[16.8px] not-italic text-[12px] text-black text-nowrap top-[3.8px] whitespace-pre">▶</p>
    </div>
  );
}

function BookOutForm() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="BookOutForm">
      <Container1 />
      <Container2 />
      <Container3 />
      <Input2 />
      <Button />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute bg-gradient-to-r box-border content-stretch flex flex-col from-3% from-[rgba(37,87,225,0.8)] h-[60.8px] items-start left-[0.8px] pb-[0.8px] pt-[12px] px-[12px] to-[#f8fafc] top-[0.8px] via-51% via-[#bdcefa] w-[1022.4px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0px_0px_0.8px] border-solid inset-0 pointer-events-none" />
      <BookOutForm />
    </div>
  );
}

function TableHead() {
  return (
    <div className="absolute h-[35px] left-0 top-0 w-[77.65px]" data-name="TableHead">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0px_0.8px_0px_0px] border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[15.714px] left-[16px] not-italic text-[11px] text-neutral-950 text-nowrap top-[7.44px] whitespace-pre">No</p>
    </div>
  );
}

function TableHead1() {
  return (
    <div className="absolute h-[35px] left-[77.65px] top-0 w-[129.413px]" data-name="TableHead">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0px_0.8px_0px_0px] border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[15.714px] left-[16.4px] not-italic text-[11px] text-neutral-950 text-nowrap top-[7.44px] whitespace-pre">BookNo</p>
    </div>
  );
}

function TableHead2() {
  return (
    <div className="absolute h-[35px] left-[207.06px] top-0 w-[232.95px]" data-name="TableHead">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0px_0.8px_0px_0px] border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[15.714px] left-[16.4px] not-italic text-[11px] text-neutral-950 text-nowrap top-[7.44px] whitespace-pre">Book Title</p>
    </div>
  );
}

function TableHead3() {
  return (
    <div className="absolute h-[35px] left-[440.01px] top-0 w-[129.413px]" data-name="TableHead">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0px_0.8px_0px_0px] border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[15.714px] left-[16.4px] not-italic text-[11px] text-neutral-950 text-nowrap top-[7.44px] whitespace-pre">Borrower</p>
    </div>
  );
}

function TableHead4() {
  return (
    <div className="absolute h-[35px] left-[569.42px] top-0 w-[194.125px]" data-name="TableHead">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0px_0.8px_0px_0px] border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[15.714px] left-[16.4px] not-italic text-[11px] text-neutral-950 text-nowrap top-[7.44px] whitespace-pre">Borrower Name</p>
    </div>
  );
}

function TableHead5() {
  return (
    <div className="absolute h-[35px] left-[763.55px] top-0 w-[129.413px]" data-name="TableHead">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0px_0.8px_0px_0px] border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[15.714px] left-[16.4px] not-italic text-[11px] text-neutral-950 text-nowrap top-[7.44px] whitespace-pre">Issue Date</p>
    </div>
  );
}

function TableHead6() {
  return (
    <div className="absolute h-[35px] left-[892.96px] top-0 w-[129.438px]" data-name="TableHead">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[15.714px] left-[16.4px] not-italic text-[11px] text-neutral-950 text-nowrap top-[7.44px] whitespace-pre">Due Date</p>
    </div>
  );
}

function TableRow() {
  return (
    <div className="absolute bg-white h-[35px] left-0 top-0 w-[1022.4px]" data-name="TableRow">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0px_0px_0.8px] border-solid inset-0 pointer-events-none" />
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
    <div className="absolute bg-[#8fa1b3] h-[35px] left-0 top-0 w-[1022.4px]" data-name="TableHeader">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0px_0px_0.8px] border-solid inset-0 pointer-events-none" />
      <TableRow />
    </div>
  );
}

function TableCell() {
  return (
    <div className="absolute h-[32.112px] left-0 top-0 w-[77.65px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[15.714px] left-[16px] not-italic text-[11px] text-neutral-950 text-nowrap top-[6.4px] whitespace-pre">1</p>
    </div>
  );
}

function TableCell1() {
  return (
    <div className="absolute h-[32.112px] left-[77.65px] top-0 w-[129.413px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[15.714px] left-[16.4px] not-italic text-[11px] text-neutral-950 text-nowrap top-[6.4px] whitespace-pre">EX061</p>
    </div>
  );
}

function TableCell2() {
  return (
    <div className="absolute h-[32.112px] left-[207.06px] top-0 w-[232.95px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[15.714px] left-[16.4px] not-italic text-[11px] text-neutral-950 text-nowrap top-[6.4px] whitespace-pre">WISDOM</p>
    </div>
  );
}

function TableCell3() {
  return (
    <div className="absolute h-[32.112px] left-[440.01px] top-0 w-[129.413px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[15.714px] left-[16.4px] not-italic text-[11px] text-neutral-950 text-nowrap top-[6.4px] whitespace-pre">STD001</p>
    </div>
  );
}

function TableCell4() {
  return (
    <div className="absolute h-[32.112px] left-[569.42px] top-0 w-[194.125px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[15.714px] left-[16.4px] not-italic text-[11px] text-neutral-950 text-nowrap top-[6.4px] whitespace-pre">JOHN SMITH</p>
    </div>
  );
}

function TableCell5() {
  return (
    <div className="absolute h-[32.112px] left-[763.55px] top-0 w-[129.413px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[15.714px] left-[16.4px] not-italic text-[11px] text-neutral-950 text-nowrap top-[6.4px] whitespace-pre">04/Oct/2025</p>
    </div>
  );
}

function TableCell6() {
  return (
    <div className="absolute h-[32.112px] left-[892.96px] top-0 w-[129.438px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[15.714px] left-[16.4px] not-italic text-[11px] text-neutral-950 text-nowrap top-[6.4px] whitespace-pre">11/Oct/2025</p>
    </div>
  );
}

function TableRow1() {
  return (
    <div className="absolute bg-white h-[32.112px] left-0 top-0 w-[1022.4px]" data-name="Table Row">
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
    <div className="absolute h-[32.112px] left-0 top-[35px] w-[1022.4px]" data-name="TableBody">
      <TableRow1 />
    </div>
  );
}

function Table() {
  return (
    <div className="h-[67.112px] overflow-clip relative shrink-0 w-full" data-name="Table">
      <TableHeader />
      <TableBody />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex flex-col h-[67.112px] items-start left-[0.8px] overflow-clip top-[61.6px] w-[1022.4px]" data-name="Container">
      <Table />
    </div>
  );
}

function BookOutForm1() {
  return (
    <div className="h-[18px] relative shrink-0 w-[4.875px]" data-name="BookOutForm">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[18px] relative w-[4.875px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[18px] left-0 not-italic text-[12px] text-nowrap text-white top-[-1.2px] whitespace-pre">•</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white h-[28px] relative rounded-[8px] shrink-0 w-[78.912px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#99a1af] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[78.912px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[18px] left-[24.8px] not-italic text-[12px] text-black text-nowrap top-[3.8px] whitespace-pre">Close</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute bg-gradient-to-r box-border content-stretch flex from-3% from-[rgba(37,87,225,0.8)] h-[52.8px] items-center justify-between left-[0.8px] pb-0 pt-[0.8px] px-[12px] to-[#f8fafc] top-[128.71px] via-51% via-[#bdcefa] w-[1022.4px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0.8px_0px_0px] border-solid inset-0 pointer-events-none" />
      <BookOutForm1 />
      <Button1 />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute bg-white h-[182.312px] left-0 top-[52px] w-[1007.6px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0.8px] border-solid inset-0 pointer-events-none" />
      <Container4 />
      <Container5 />
      <Container6 />
    </div>
  );
}

function App() {
  return (
    <div className="bg-gradient-to-r from-3% from-[rgba(37,87,225,0.8)] h-[234px] relative shrink-0 to-[#f8fafc] via-51% via-[#bdcefa] w-[1023px]" data-name="App">
      <Container />
      <Container7 />
    </div>
  );
}

export default function BookOut() {
  return (
    <div className="bg-white relative size-full" data-name="book out">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start pb-0 pt-[16px] px-[71.2px] relative size-full">
          <App />
        </div>
      </div>
    </div>
  );
}