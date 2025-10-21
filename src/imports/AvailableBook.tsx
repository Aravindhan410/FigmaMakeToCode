function Container() {
  return <div className="absolute h-[36px] left-0 top-0 w-[1150.6px]" data-name="Container" />;
}

function PrimitiveLabel() {
  return (
    <div className="h-[18px] relative shrink-0 w-[50px]" data-name="Primitive.label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[18px] items-center relative w-[50px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[18px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">Category</p>
      </div>
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
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function PrimitiveButton() {
  return (
    <div className="basis-0 bg-white grow h-[36px] min-h-px min-w-px relative rounded-[2px] shrink-0" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[#99a1af] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[36px] relative w-full">
        <PrimitiveSpan />
        <Icon />
        <p className="absolute font-['Arial:Regular',_sans-serif] h-[19px] leading-[20px] left-[9.2px] not-italic opacity-60 text-[14px] text-black top-[8.2px] w-[89px]">category</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[36px] items-center left-0 top-0 w-[178px]" data-name="Container">
      <PrimitiveLabel />
      <PrimitiveButton />
    </div>
  );
}

function PrimitiveLabel1() {
  return (
    <div className="h-[18px] relative shrink-0 w-[120.537px]" data-name="Primitive.label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[18px] items-center relative w-[120.537px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[18px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">Book No or Book Title</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="basis-0 bg-white grow h-[24px] min-h-px min-w-px relative rounded-[2px] shrink-0" data-name="Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] w-full" />
      <div aria-hidden="true" className="absolute border-[#99a1af] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[24px] items-center left-[194px] top-[6px] w-[278.538px]" data-name="Container">
      <PrimitiveLabel1 />
      <Input />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-white h-[28px] left-[488.54px] rounded-[8px] top-[4px] w-[112.838px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#99a1af] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[18px] left-[16.8px] not-italic text-[12px] text-black text-nowrap top-[3.8px] whitespace-pre">OK AVAILABLE</p>
    </div>
  );
}

function AvailableBookForm() {
  return (
    <div className="absolute h-[36px] left-[12px] top-[12px] w-[1125px]" data-name="AvailableBookForm">
      <Container1 />
      <Container2 />
      <Button />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute bg-gradient-to-r from-3% from-[rgba(37,87,225,0.8)] h-[61px] left-[0.8px] to-[#f8fafc] top-[0.8px] via-51% via-[#bdcefa] w-[1149px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0px_0px_0.8px] border-solid inset-0 pointer-events-none" />
      <AvailableBookForm />
    </div>
  );
}

function TableHead() {
  return (
    <div className="absolute bg-white h-[35px] left-0 top-0 w-[140.05px]" data-name="TableHead">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0px_0.8px_0px_0px] border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[15.714px] left-[16px] not-italic text-[11px] text-neutral-950 text-nowrap top-[7.44px] whitespace-pre">BookNo</p>
    </div>
  );
}

function TableHead1() {
  return (
    <div className="absolute bg-white h-[35px] left-[140.05px] top-0 w-[280.1px]" data-name="TableHead">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0px_0.8px_0px_0px] border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[15.714px] left-[16.4px] not-italic text-[11px] text-neutral-950 text-nowrap top-[7.44px] whitespace-pre">Book Title</p>
    </div>
  );
}

function TableHead2() {
  return (
    <div className="absolute h-[35px] left-[420.15px] top-0 w-[210.075px]" data-name="TableHead">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0px_0.8px_0px_0px] border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[15.714px] left-[16.4px] not-italic text-[11px] text-neutral-950 text-nowrap top-[7.44px] whitespace-pre">Author</p>
    </div>
  );
}

function TableHead3() {
  return (
    <div className="absolute h-[35px] left-[630.23px] top-0 w-[280.1px]" data-name="TableHead">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0px_0.8px_0px_0px] border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[15.714px] left-[16.4px] not-italic text-[11px] text-neutral-950 text-nowrap top-[7.44px] whitespace-pre">Publisher</p>
    </div>
  );
}

function TableHead4() {
  return (
    <div className="absolute h-[35px] left-[910.33px] top-0 w-[112.075px]" data-name="TableHead">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[15.714px] left-[16.4px] not-italic text-[11px] text-neutral-950 text-nowrap top-[7.44px] whitespace-pre">Qty</p>
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
    </div>
  );
}

function TableHeader() {
  return (
    <div className="absolute bg-gradient-to-r from-3% from-[rgba(37,87,225,0.8)] h-[35px] left-0 to-51% to-[#f8fafc] top-0 via-27% via-[#bdcefa] w-[1022.4px]" data-name="TableHeader">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.8px] border-solid border-white inset-0 pointer-events-none" />
      <TableRow />
    </div>
  );
}

function TableCell() {
  return (
    <div className="absolute h-[32.112px] left-0 top-0 w-[140.05px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[15.714px] left-[16px] not-italic text-[11px] text-neutral-950 text-nowrap top-[6.4px] whitespace-pre">10001</p>
    </div>
  );
}

function TableCell1() {
  return (
    <div className="absolute h-[32.112px] left-[140.05px] top-0 w-[280.1px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[15.714px] left-[16.4px] not-italic text-[11px] text-neutral-950 text-nowrap top-[6.4px] whitespace-pre">WISDOM</p>
    </div>
  );
}

function TableCell2() {
  return (
    <div className="absolute h-[32.112px] left-[420.15px] top-0 w-[210.075px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[15.714px] left-[16.4px] not-italic text-[11px] text-neutral-950 text-nowrap top-[6.4px] whitespace-pre">A.L JAHGAL</p>
    </div>
  );
}

function TableCell3() {
  return (
    <div className="absolute h-[32.112px] left-[630.23px] top-0 w-[280.1px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[15.714px] left-[16.4px] not-italic text-[11px] text-neutral-950 text-nowrap top-[6.4px] whitespace-pre">1984 BUREAU...</p>
    </div>
  );
}

function TableCell4() {
  return (
    <div className="absolute h-[32.112px] left-[910.33px] top-0 w-[112.075px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[15.714px] left-[16.4px] not-italic text-[11px] text-neutral-950 text-nowrap top-[6.4px] whitespace-pre">1</p>
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

function Container4() {
  return (
    <div className="absolute content-stretch flex flex-col h-[66.713px] items-start left-[0.8px] overflow-clip top-[61.8px] w-[1149px]" data-name="Container">
      <Table />
    </div>
  );
}

function AvailableBookForm1() {
  return (
    <div className="h-[18px] relative shrink-0 w-[96.563px]" data-name="AvailableBookForm">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[18px] relative w-[96.563px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[18px] left-0 not-italic text-[12px] text-nowrap text-white top-[-1.2px] whitespace-pre">Showing Books : 1</p>
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

function Container5() {
  return (
    <div className="absolute bg-gradient-to-r box-border content-stretch flex from-3% from-[rgba(37,87,225,0.8)] h-[53px] items-center justify-between left-[0.8px] pb-0 pt-[0.8px] px-[12px] to-[#f8fafc] top-[128.51px] via-51% via-[#bdcefa] w-[1149px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0.8px_0px_0px] border-solid inset-0 pointer-events-none" />
      <AvailableBookForm1 />
      <Button1 />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute bg-gradient-to-r from-3% from-[rgba(37,87,225,0.8)] h-[182.312px] left-0 to-[#f8fafc] top-[52px] via-51% via-[#bdcefa] w-[1150.6px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0.8px] border-solid inset-0 pointer-events-none" />
      <Container3 />
      <Container4 />
      <Container5 />
    </div>
  );
}

function App() {
  return (
    <div className="absolute bg-gradient-to-r from-3% from-[rgba(37,87,225,0.8)] h-[275px] left-0 to-[#f8fafc] top-0 via-100% via-[#bdcefa] w-[1150.6px]" data-name="App">
      <Container />
      <Container6 />
    </div>
  );
}

export default function AvailableBook() {
  return (
    <div className="bg-white relative size-full" data-name="available book">
      <App />
    </div>
  );
}