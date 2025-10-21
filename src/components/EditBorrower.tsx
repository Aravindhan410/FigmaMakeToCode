function Container() {
  return <div className="bg-gradient-to-r from-3% from-[rgba(37,87,225,0.8)] h-[36px] shrink-0 to-[#f8fafc] via-51% via-[#bdcefa] w-full" data-name="Container" />;
}

function EditBorrowerForm() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="EditBorrowerForm">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[21px] left-0 not-italic text-[14px] text-nowrap text-white top-[-1.2px] tracking-[0.35px] whitespace-pre">Modify borrower details</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute bg-gradient-to-r box-border content-stretch flex flex-col from-3% from-[rgba(37,87,225,0.8)] h-[45.8px] items-start left-[0.8px] pb-[0.8px] pl-[12px] pr-[854.275px] pt-[12px] to-[#f8fafc] top-[0.8px] via-51% via-[#bdcefa] w-[1022.4px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0px_0px_0.8px] border-solid inset-0 pointer-events-none" />
      <EditBorrowerForm />
    </div>
  );
}

function PrimitiveLabel() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[18px] items-center left-0 top-[9px] w-[70px]" data-name="Primitive.label">
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
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function PrimitiveButton() {
  return (
    <div className="absolute bg-white h-[36px] left-[78px] rounded-[2px] top-0 w-[120px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[#99a1af] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <PrimitiveSpan />
      <Icon />
      <p className="absolute font-['Arial:Regular',_sans-serif] h-[19px] leading-[20px] left-[13px] not-italic opacity-60 text-[14px] text-black top-[7.4px] w-[89px]">dep</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute h-[36px] left-0 top-0 w-[198px]" data-name="Container">
      <PrimitiveLabel />
      <PrimitiveButton />
    </div>
  );
}

function Input() {
  return (
    <div className="absolute bg-white h-[24px] left-[214px] rounded-[2px] top-[6px] w-[150px]" data-name="Input">
      <div className="box-border content-stretch flex h-[24px] items-center overflow-clip px-[8px] py-[4px] relative rounded-[inherit] w-[150px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">[ Enter ID or Name]</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#99a1af] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}

function PrimitiveLabel1() {
  return (
    <div className="h-[18px] relative shrink-0 w-[30px]" data-name="Primitive.label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[18px] items-center relative w-[30px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[18px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">Sem</p>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="basis-0 bg-white grow h-[24px] min-h-px min-w-px relative rounded-[2px] shrink-0" data-name="Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] w-full" />
      <div aria-hidden="true" className="absolute border-[#99a1af] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[24px] items-center left-[380px] top-[6px] w-[88px]" data-name="Container">
      <PrimitiveLabel1 />
      <Input1 />
    </div>
  );
}

function EditBorrowerForm1() {
  return (
    <div className="bg-[#4a5565] relative rounded-[6px] shrink-0 size-[8px]" data-name="EditBorrowerForm">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[8px]" />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute bg-white box-border content-stretch flex items-center justify-center left-[484px] p-[0.8px] rounded-[2px] size-[24px] top-[6px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#99a1af] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <EditBorrowerForm1 />
    </div>
  );
}

function EditBorrowerForm2() {
  return (
    <div className="absolute h-[36px] left-[12px] top-[12px] w-[998.4px]" data-name="EditBorrowerForm">
      <Container2 />
      <Input />
      <Container3 />
      <Container4 />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute bg-gradient-to-r from-3% from-[rgba(37,87,225,0.8)] h-[60.8px] left-[0.8px] to-[#f8fafc] top-[46.6px] via-51% via-[#bdcefa] w-[1022.4px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0px_0px_0.8px] border-solid inset-0 pointer-events-none" />
      <EditBorrowerForm2 />
    </div>
  );
}

function TableHead() {
  return (
    <div className="absolute box-border content-stretch flex h-[32.112px] items-start left-0 pl-[8px] pr-[8.8px] py-[8px] top-0 w-[54.375px]" data-name="TableHead">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-solid border-white inset-0 pointer-events-none" />
      <p className="basis-0 font-['Arial:Regular',_sans-serif] grow leading-[15.714px] min-h-px min-w-px not-italic relative shrink-0 text-[11px] text-center text-white">BID</p>
    </div>
  );
}

function TableHead1() {
  return (
    <div className="absolute box-border content-stretch flex h-[32.112px] items-start left-[54.38px] pl-[8px] pr-[8.8px] py-[8px] top-0 w-[87.013px]" data-name="TableHead">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-solid border-white inset-0 pointer-events-none" />
      <p className="basis-0 font-['Arial:Regular',_sans-serif] grow leading-[15.714px] min-h-px min-w-px not-italic relative shrink-0 text-[11px] text-center text-white">RegNo</p>
    </div>
  );
}

function TableHead2() {
  return (
    <div className="absolute box-border content-stretch flex h-[32.112px] items-start left-[250.15px] pl-[8px] pr-[8.8px] py-[8px] top-0 w-[108.763px]" data-name="TableHead">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-solid border-white inset-0 pointer-events-none" />
      <p className="basis-0 font-['Arial:Regular',_sans-serif] grow leading-[15.714px] min-h-px min-w-px not-italic relative shrink-0 text-[11px] text-center text-white">Dept</p>
    </div>
  );
}

function TableHead3() {
  return (
    <div className="absolute box-border content-stretch flex h-[32.112px] items-start left-[358.91px] pl-[8px] pr-[8.8px] py-[8px] top-0 w-[87.013px]" data-name="TableHead">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-solid border-white inset-0 pointer-events-none" />
      <p className="basis-0 font-['Arial:Regular',_sans-serif] grow leading-[15.714px] min-h-px min-w-px not-italic relative shrink-0 text-[11px] text-center text-white">Desig</p>
    </div>
  );
}

function TableHead4() {
  return (
    <div className="absolute box-border content-stretch flex h-[32.112px] items-start left-[445.93px] pl-[8px] pr-[8.8px] py-[8px] top-0 w-[108.763px]" data-name="TableHead">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-solid border-white inset-0 pointer-events-none" />
      <p className="basis-0 font-['Arial:Regular',_sans-serif] grow leading-[15.714px] min-h-px min-w-px not-italic relative shrink-0 text-[11px] text-center text-white">Mobile</p>
    </div>
  );
}

function TableHead5() {
  return (
    <div className="absolute box-border content-stretch flex h-[32.112px] items-start left-[554.69px] pl-[8px] pr-[8.8px] py-[8px] top-0 w-[87.013px]" data-name="TableHead">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-solid border-white inset-0 pointer-events-none" />
      <p className="basis-0 font-['Arial:Regular',_sans-serif] grow leading-[15.714px] min-h-px min-w-px not-italic relative shrink-0 text-[11px] text-center text-white">Contact</p>
    </div>
  );
}

function TableHead6() {
  return (
    <div className="absolute box-border content-stretch flex h-[32.112px] items-start left-[641.7px] pl-[8px] pr-[8.8px] py-[8px] top-0 w-[97.888px]" data-name="TableHead">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-solid border-white inset-0 pointer-events-none" />
      <p className="basis-0 font-['Arial:Regular',_sans-serif] grow leading-[15.714px] min-h-px min-w-px not-italic relative shrink-0 text-[11px] text-center text-white">activeDate</p>
    </div>
  );
}

function TableHead7() {
  return (
    <div className="absolute box-border content-stretch flex h-[32.112px] items-start left-[739.59px] pl-[8px] pr-[8.8px] py-[8px] top-0 w-[65.25px]" data-name="TableHead">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-solid border-white inset-0 pointer-events-none" />
      <p className="basis-0 font-['Arial:Regular',_sans-serif] grow leading-[15.714px] min-h-px min-w-px not-italic relative shrink-0 text-[11px] text-center text-white">Fine</p>
    </div>
  );
}

function TableHead8() {
  return (
    <div className="absolute box-border content-stretch flex h-[32.112px] items-start left-[804.84px] pl-[8px] pr-[8.8px] py-[8px] top-0 w-[65.25px]" data-name="TableHead">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-solid border-white inset-0 pointer-events-none" />
      <p className="basis-0 font-['Arial:Regular',_sans-serif] grow leading-[15.714px] min-h-px min-w-px not-italic relative shrink-0 text-[11px] text-center text-white">Year</p>
    </div>
  );
}

function TableHead9() {
  return (
    <div className="absolute box-border content-stretch flex h-[32.112px] items-start left-[870.09px] pl-[8px] pr-[8.8px] py-[8px] top-0 w-[87.013px]" data-name="TableHead">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-solid border-white inset-0 pointer-events-none" />
      <p className="basis-0 font-['Arial:Regular',_sans-serif] grow leading-[15.714px] min-h-px min-w-px not-italic relative shrink-0 text-[11px] text-center text-white">Address</p>
    </div>
  );
}

function TableHead10() {
  return (
    <div className="absolute box-border content-stretch flex h-[32.112px] items-start left-[957.1px] p-[8px] top-0 w-[65.3px]" data-name="TableHead">
      <p className="basis-0 font-['Arial:Regular',_sans-serif] grow leading-[15.714px] min-h-px min-w-px not-italic relative shrink-0 text-[11px] text-center text-white">Photo</p>
    </div>
  );
}

function TableRow() {
  return (
    <div className="absolute h-[32.112px] left-0 top-0 w-[1022.4px]" data-name="TableRow">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0px_0px_0.8px] border-solid inset-0 pointer-events-none" />
      <TableHead />
      <TableHead1 />
      <TableHead2 />
      <TableHead3 />
      <TableHead4 />
      <TableHead5 />
      <TableHead6 />
      <TableHead7 />
      <TableHead8 />
      <TableHead9 />
      <TableHead10 />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[15.714px] left-[188.5px] not-italic text-[11px] text-center text-nowrap text-white top-[7.6px] translate-x-[-50%] whitespace-pre">BName</p>
    </div>
  );
}

function TableHeader() {
  return (
    <div className="absolute bg-[#4285f4] h-[32.112px] left-0 top-0 w-[1022.4px]" data-name="TableHeader">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0px_0px_0.8px] border-solid inset-0 pointer-events-none" />
      <TableRow />
    </div>
  );
}

function TableCell() {
  return (
    <div className="absolute bg-white h-[25px] left-0 top-0 w-[54.375px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[15.714px] left-[26.93px] not-italic text-[11px] text-center text-neutral-950 text-nowrap top-[2.84px] translate-x-[-50%] whitespace-pre">BH</p>
    </div>
  );
}

function TableCell1() {
  return (
    <div className="absolute bg-white h-[25px] left-[54.38px] top-0 w-[87.013px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-gray-200 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TableCell2() {
  return (
    <div className="absolute bg-white h-[25px] left-[141.39px] top-0 w-[108.763px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[15.714px] left-[55.11px] not-italic text-[11px] text-center text-neutral-950 text-nowrap top-[2.84px] translate-x-[-50%] whitespace-pre">SHIVRAJ</p>
    </div>
  );
}

function TableCell3() {
  return (
    <div className="absolute bg-white h-[25px] left-[250.15px] top-0 w-[108.763px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[15.714px] left-[54.96px] not-italic text-[11px] text-center text-neutral-950 text-nowrap top-[2.84px] translate-x-[-50%] whitespace-pre">BHYADRA</p>
    </div>
  );
}

function TableCell4() {
  return (
    <div className="absolute bg-white h-[25px] left-[358.91px] top-0 w-[87.013px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-gray-200 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TableCell5() {
  return (
    <div className="absolute bg-white h-[25px] left-[445.93px] top-0 w-[108.763px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[15.714px] left-[54.73px] not-italic text-[11px] text-center text-neutral-950 text-nowrap top-[2.84px] translate-x-[-50%] whitespace-pre">9009026512</p>
    </div>
  );
}

function TableCell6() {
  return (
    <div className="absolute bg-white h-[25px] left-[554.69px] top-0 w-[87.013px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-gray-200 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TableCell7() {
  return (
    <div className="absolute bg-white h-[25px] left-[641.7px] top-0 w-[97.888px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-gray-200 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TableCell8() {
  return (
    <div className="absolute bg-white h-[25px] left-[739.59px] top-0 w-[65.25px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[15.714px] left-[33.15px] not-italic text-[11px] text-center text-neutral-950 text-nowrap top-[2.84px] translate-x-[-50%] whitespace-pre">1</p>
    </div>
  );
}

function TableCell9() {
  return (
    <div className="absolute bg-white h-[25px] left-[804.84px] top-0 w-[65.25px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-gray-200 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TableCell10() {
  return (
    <div className="absolute bg-white h-[25px] left-[870.09px] top-0 w-[87.013px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[15.714px] left-[44.04px] not-italic text-[11px] text-center text-neutral-950 text-nowrap top-[2.84px] translate-x-[-50%] whitespace-pre">1</p>
    </div>
  );
}

function TableCell11() {
  return (
    <div className="absolute bg-white h-[25px] left-[957.1px] top-0 w-[65.3px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[15.714px] left-[33.45px] not-italic text-[11px] text-center text-neutral-950 text-nowrap top-[2.84px] translate-x-[-50%] whitespace-pre">106</p>
    </div>
  );
}

function TableRow1() {
  return (
    <div className="absolute bg-[#ffd6a8] h-[25px] left-0 top-0 w-[1022.4px]" data-name="Table Row">
      <TableCell />
      <TableCell1 />
      <TableCell2 />
      <TableCell3 />
      <TableCell4 />
      <TableCell5 />
      <TableCell6 />
      <TableCell7 />
      <TableCell8 />
      <TableCell9 />
      <TableCell10 />
      <TableCell11 />
    </div>
  );
}

function TableBody() {
  return (
    <div className="absolute h-[25px] left-0 top-[32.11px] w-[1022.4px]" data-name="TableBody">
      <TableRow1 />
    </div>
  );
}

function Table() {
  return (
    <div className="h-[57.112px] overflow-clip relative shrink-0 w-full" data-name="Table">
      <TableHeader />
      <TableBody />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex flex-col h-[57.112px] items-start left-[0.8px] overflow-clip top-[107.4px] w-[1022.4px]" data-name="Container">
      <Table />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white h-[28px] relative rounded-[8px] shrink-0 w-[89.412px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#99a1af] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[89.412px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[18px] left-[24.8px] not-italic text-[12px] text-black text-nowrap top-[3.8px] whitespace-pre">Update</p>
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

function Container7() {
  return (
    <div className="absolute bg-gradient-to-r box-border content-stretch flex from-3% from-[rgba(37,87,225,0.8)] gap-[16px] h-[52.8px] items-center justify-center left-[0.8px] pb-0 pt-[0.8px] px-0 to-[#f8fafc] top-[164.51px] via-51% via-[#bdcefa] w-[1022.4px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0.8px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Button />
      <Button1 />
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-white h-[218.113px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0.8px] border-solid inset-0 pointer-events-none" />
      <Container1 />
      <Container5 />
      <Container6 />
      <Container7 />
    </div>
  );
}

function App() {
  return (
    <div className="bg-gray-100 content-stretch flex flex-col gap-[16px] h-[270px] items-start relative shrink-0 w-[1023px]" data-name="App">
      <Container />
      <Container8 />
    </div>
  );
}

export default function EditBorrower() {
  return (
    <div className="bg-white relative size-full" data-name="edit barrower">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start pb-0 pt-[16px] px-[71.2px] relative size-full">
          <App />
        </div>
      </div>
    </div>
  );
}
