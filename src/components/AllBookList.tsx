function Container() {
  return <div className="absolute bg-gradient-to-r from-3% from-[rgba(37,87,225,0.8)] h-[36px] left-[-0.2px] to-[#f8fafc] top-0 via-51% via-[#bdcefa] w-[1023px]" data-name="Container" />;
}

function PrimitiveLabel() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[18px] items-center left-0 top-[9px] w-[50px]" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[18px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">Category</p>
    </div>
  );
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
    <div className="absolute bg-white h-[36px] left-[58px] rounded-[2px] top-0 w-[120px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[#99a1af] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <Icon />
      <p className="absolute font-['Arial:Regular',_sans-serif] h-[19px] leading-[20px] left-[6.2px] not-italic opacity-60 text-[14px] text-black top-[8.2px] w-[89px]">category</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute h-[36px] left-0 top-0 w-[178px]" data-name="Container">
      <PrimitiveLabel />
      <PrimitiveButton />
    </div>
  );
}

function PrimitiveLabel1() {
  return (
    <div className="h-[18px] relative shrink-0 w-[117.238px]" data-name="Primitive.label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[18px] items-center relative w-[117.238px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[18px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">Book No or BookTitle</p>
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
    <div className="absolute content-stretch flex gap-[8px] h-[24px] items-center left-[194px] top-[6px] w-[275.238px]" data-name="Container">
      <PrimitiveLabel1 />
      <Input />
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[21px] left-0 not-italic text-[14px] text-black text-nowrap top-[-1.2px] tracking-[0.7px] whitespace-pre">BOOK HISTORY</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[30.6px] items-start left-[653.17px] pb-[0.8px] pt-[4.8px] px-[16.8px] rounded-[4px] top-[2.7px] w-[137.288px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#99a1af] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Heading2 />
    </div>
  );
}

function AllBookListForm() {
  return (
    <div className="bg-[#4a5565] relative rounded-[6px] shrink-0 size-[8px]" data-name="AllBookListForm">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[8px]" />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute bg-white box-border content-stretch flex items-center justify-center left-[974.4px] p-[0.8px] rounded-[2px] size-[24px] top-[6px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#99a1af] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <AllBookListForm />
    </div>
  );
}

function AllBookListForm1() {
  return (
    <div className="absolute h-[36px] left-[12px] top-[12px] w-[998.4px]" data-name="AllBookListForm">
      <Container1 />
      <Container2 />
      <Container3 />
      <Container4 />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute bg-gradient-to-r from-3% from-[rgba(37,87,225,0.8)] h-[60.8px] left-[0.8px] to-[#f8fafc] top-[0.8px] via-51% via-[#bdcefa] w-[1022.4px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0px_0px_0.8px] border-solid inset-0 pointer-events-none" />
      <AllBookListForm1 />
    </div>
  );
}

function TableHead() {
  return (
    <div className="absolute h-[35px] left-0 top-0 w-[80.713px]" data-name="TableHead">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0px_0.8px_0px_0px] border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[15.714px] left-[12px] not-italic text-[11px] text-neutral-950 text-nowrap top-[7.44px] whitespace-pre">No</p>
    </div>
  );
}

function TableHead1() {
  return (
    <div className="absolute h-[35px] left-[80.71px] top-0 w-[134.525px]" data-name="TableHead">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0px_0.8px_0px_0px] border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[15.714px] left-[12.4px] not-italic text-[11px] text-neutral-950 text-nowrap top-[7.44px] whitespace-pre">ISBN</p>
    </div>
  );
}

function TableHead2() {
  return (
    <div className="absolute h-[35px] left-[215.24px] top-0 w-[134.525px]" data-name="TableHead">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0px_0.8px_0px_0px] border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[15.714px] left-[12.4px] not-italic text-[11px] text-neutral-950 text-nowrap top-[7.44px] whitespace-pre">Book No</p>
    </div>
  );
}

function TableHead3() {
  return (
    <div className="absolute h-[35px] left-[349.76px] top-0 w-[269.05px]" data-name="TableHead">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0px_0.8px_0px_0px] border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[15.714px] left-[12.4px] not-italic text-[11px] text-neutral-950 text-nowrap top-[7.44px] whitespace-pre">Book Name</p>
    </div>
  );
}

function TableHead4() {
  return (
    <div className="absolute h-[35px] left-[618.81px] top-0 w-[134.525px]" data-name="TableHead">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0px_0.8px_0px_0px] border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[15.714px] left-[12.4px] not-italic text-[11px] text-neutral-950 text-nowrap top-[7.44px] whitespace-pre">Date</p>
    </div>
  );
}

function TableHead5() {
  return (
    <div className="absolute h-[35px] left-[753.34px] top-0 w-[134.525px]" data-name="TableHead">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0px_0.8px_0px_0px] border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[15.714px] left-[12.4px] not-italic text-[11px] text-neutral-950 text-nowrap top-[7.44px] whitespace-pre">CallNo</p>
    </div>
  );
}

function TableHead6() {
  return (
    <div className="absolute h-[35px] left-[887.86px] top-0 w-[134.538px]" data-name="TableHead">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[15.714px] left-[12.4px] not-italic text-[11px] text-neutral-950 text-nowrap top-[7.44px] whitespace-pre">Type</p>
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
    <div className="absolute h-[32.112px] left-0 top-0 w-[80.713px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[15.714px] left-[12px] not-italic text-[11px] text-neutral-950 text-nowrap top-[6.4px] whitespace-pre">1</p>
    </div>
  );
}

function TableCell1() {
  return (
    <div className="absolute h-[32.112px] left-[80.71px] top-0 w-[134.525px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[15.714px] left-[12.4px] not-italic text-[11px] text-neutral-950 text-nowrap top-[6.4px] whitespace-pre">65842</p>
    </div>
  );
}

function TableCell2() {
  return (
    <div className="absolute h-[32.112px] left-[215.24px] top-0 w-[134.525px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[15.714px] left-[12.4px] not-italic text-[11px] text-neutral-950 text-nowrap top-[6.4px] whitespace-pre">10001</p>
    </div>
  );
}

function TableCell3() {
  return (
    <div className="absolute h-[32.112px] left-[349.76px] top-0 w-[269.05px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[15.714px] left-[12.4px] not-italic text-[11px] text-neutral-950 text-nowrap top-[6.4px] whitespace-pre">WISDOM</p>
    </div>
  );
}

function TableCell4() {
  return (
    <div className="absolute h-[32.112px] left-[618.81px] top-0 w-[134.525px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[15.714px] left-[12.4px] not-italic text-[11px] text-neutral-950 text-nowrap top-[6.4px] whitespace-pre">07-Jul-25</p>
    </div>
  );
}

function TableCell5() {
  return (
    <div className="absolute h-[32.112px] left-[753.34px] top-0 w-[134.525px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-gray-200 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TableCell6() {
  return <div className="absolute h-[32.112px] left-[887.86px] top-0 w-[134.538px]" data-name="TableCell" />;
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

function Container6() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[119.6px] items-start left-[0.8px] overflow-clip pb-0 pt-[17px] px-0 top-[61.6px] w-[1022.4px]" data-name="Container">
      <Table />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute bg-gradient-to-r from-3% from-[rgba(37,87,225,0.8)] h-[182px] left-[-0.2px] to-51% to-[#f8fafc] top-[52px] via-27% via-[rgba(189,206,250,0.9)] w-[1023px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0.8px] border-solid inset-0 pointer-events-none" />
      <Container5 />
      <Container6 />
    </div>
  );
}

function App() {
  return (
    <div className="bg-gray-100 h-[234px] relative shrink-0 w-[1023px]" data-name="App">
      <Container />
      <Container7 />
    </div>
  );
}

function AllBookListForm2() {
  return (
    <div className="bg-neutral-950 h-[18px] relative shrink-0 w-[96.563px]" data-name="AllBookListForm">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[18px] relative w-[96.563px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[18px] left-0 not-italic text-[12px] text-nowrap text-white top-[-1.2px] whitespace-pre">Showing Books : 1</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white h-[28px] relative rounded-[8px] shrink-0 w-[78.912px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#99a1af] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[78.912px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[18px] left-[24.8px] not-italic text-[12px] text-black text-nowrap top-[3.8px] whitespace-pre">Close</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-gradient-to-r box-border content-stretch flex from-3% from-[rgba(37,87,225,0.8)] h-[52.8px] items-center justify-between pb-0 pt-[0.8px] px-[12px] relative shrink-0 to-51% to-[rgba(248,250,252,0.667)] via-27% via-[rgba(189,206,250,0.9)] w-[1022.4px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0.8px_0px_0px] border-solid inset-0 pointer-events-none" />
      <AllBookListForm2 />
      <Button />
    </div>
  );
}

export default function AllBookList() {
  return (
    <div className="bg-white relative size-full" data-name="all book list">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start pb-0 pt-[16px] px-[71.2px] relative size-full">
          <App />
          <Container8 />
        </div>
      </div>
    </div>
  );
}
