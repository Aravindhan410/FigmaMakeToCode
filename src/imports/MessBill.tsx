import svgPaths from "./svg-5kllgy5h7m";

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
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-[120px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[#90a1b9] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[36px] items-center justify-between px-[12.8px] py-[0.8px] relative w-[120px]">
        <PrimitiveSpan />
        <Icon />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-slate-100 box-border content-stretch flex gap-[6px] h-[32px] items-center justify-center left-0 px-[12.8px] py-[0.8px] rounded-[8px] top-0 w-[139.038px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#90a1b9] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Generate MessBill</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-slate-100 box-border content-stretch flex gap-[6px] h-[32px] items-center justify-center left-[147.04px] px-[12.8px] py-[0.8px] rounded-[8px] top-0 w-[130.25px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#90a1b9] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Update MessFee</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-slate-100 box-border content-stretch flex gap-[6px] h-[32px] items-center justify-center left-[285.29px] px-[12.8px] py-[0.8px] rounded-[8px] top-0 w-[124.812px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#90a1b9] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Update Balance</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute bg-[#155dfc] box-border content-stretch flex gap-[6px] h-[32px] items-center justify-center left-[418.1px] px-[12px] py-0 rounded-[8px] top-0 w-[89.513px]" data-name="Button">
      <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">MESS BILL</p>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute bg-[#d4183d] box-border content-stretch flex gap-[6px] h-[32px] items-center justify-center left-[515.61px] px-[12px] py-0 rounded-[8px] top-0 w-[64.575px]" data-name="Button">
      <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">CLOSE</p>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[32px] relative shrink-0 w-[580.188px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[32px] relative w-[580.188px]">
        <Button />
        <Button1 />
        <Button2 />
        <Button3 />
        <Button4 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex h-[36px] items-center justify-between relative w-full">
          <PrimitiveButton />
          <Container />
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-slate-200 h-[60.8px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[60.8px] items-start pb-[0.8px] pt-[12px] px-[12px] relative w-full">
          <Container1 />
        </div>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-0 size-[12px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_4020_3570)" id="Icon">
          <path d={svgPaths.p15ea74a0} id="Vector" stroke="var(--stroke-0, #1C398E)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_4020_3570">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function MessBillWindow() {
  return (
    <div className="absolute h-[20px] left-[12px] top-[9.8px] w-[125.188px]" data-name="MessBillWindow">
      <Icon1 />
      <p className="absolute font-['Arial:Bold',_sans-serif] leading-[20px] left-[16px] not-italic text-[#1c398e] text-[14px] text-nowrap top-[-1.2px] whitespace-pre">StuRollNo</p>
    </div>
  );
}

function TableHead() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[149.588px]" data-name="TableHead">
      <div aria-hidden="true" className="absolute border-[#cad5e2] border-[0px_0.8px_0px_0px] border-solid inset-0 pointer-events-none" />
      <MessBillWindow />
    </div>
  );
}

function TableHead1() {
  return (
    <div className="absolute h-[40px] left-[149.59px] top-0 w-[158.688px]" data-name="TableHead">
      <div aria-hidden="true" className="absolute border-[#cad5e2] border-[0px_0.8px_0px_0px] border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Bold',_sans-serif] leading-[20px] left-[12.4px] not-italic text-[#1c398e] text-[14px] text-nowrap top-[8.6px] whitespace-pre">StuName</p>
    </div>
  );
}

function TableHead2() {
  return (
    <div className="absolute h-[40px] left-[308.27px] top-0 w-[147.775px]" data-name="TableHead">
      <div aria-hidden="true" className="absolute border-[#cad5e2] border-[0px_0.8px_0px_0px] border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Bold',_sans-serif] leading-[20px] left-[12.4px] not-italic text-[#1c398e] text-[14px] text-nowrap top-[8.6px] whitespace-pre">StuRegNo</p>
    </div>
  );
}

function TableHead3() {
  return (
    <div className="absolute h-[40px] left-[456.05px] top-0 w-[75.2px]" data-name="TableHead">
      <div aria-hidden="true" className="absolute border-[#cad5e2] border-[0px_0.8px_0px_0px] border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Bold',_sans-serif] leading-[20px] left-[12.4px] not-italic text-[#1c398e] text-[14px] text-nowrap top-[8.6px] whitespace-pre">Sem</p>
    </div>
  );
}

function TableHead4() {
  return (
    <div className="absolute h-[40px] left-[531.25px] top-0 w-[95.013px]" data-name="TableHead">
      <div aria-hidden="true" className="absolute border-[#cad5e2] border-[0px_0.8px_0px_0px] border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Bold',_sans-serif] leading-[20px] left-[12.4px] not-italic text-[#1c398e] text-[14px] text-nowrap top-[8.6px] whitespace-pre">CCode</p>
    </div>
  );
}

function TableHead5() {
  return (
    <div className="absolute h-[40px] left-[626.26px] top-0 w-[102.7px]" data-name="TableHead">
      <div aria-hidden="true" className="absolute border-[#cad5e2] border-[0px_0.8px_0px_0px] border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Bold',_sans-serif] leading-[20px] left-[12.4px] not-italic text-[#1c398e] text-[14px] text-nowrap top-[8.6px] whitespace-pre">BrCode</p>
    </div>
  );
}

function TableHead6() {
  return (
    <div className="absolute h-[40px] left-[728.96px] top-0 w-[103.825px]" data-name="TableHead">
      <div aria-hidden="true" className="absolute border-[#cad5e2] border-[0px_0.8px_0px_0px] border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Bold',_sans-serif] leading-[20px] left-[12.4px] not-italic text-[#1c398e] text-[14px] text-nowrap top-[8.6px] whitespace-pre">AppNo</p>
    </div>
  );
}

function TableHead7() {
  return (
    <div className="absolute h-[40px] left-[832.79px] top-0 w-[143.8px]" data-name="TableHead">
      <div aria-hidden="true" className="absolute border-[#cad5e2] border-[0px_0.8px_0px_0px] border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Bold',_sans-serif] leading-[20px] left-[12.4px] not-italic text-[#1c398e] text-[14px] text-nowrap top-[8.6px] whitespace-pre">MessMonth</p>
    </div>
  );
}

function TableHead8() {
  return (
    <div className="absolute h-[40px] left-[976.59px] top-0 w-[109.812px]" data-name="TableHead">
      <p className="absolute font-['Arial:Bold',_sans-serif] leading-[20px] left-[12.4px] not-italic text-[#1c398e] text-[14px] text-nowrap top-[8.6px] whitespace-pre">MessBill</p>
    </div>
  );
}

function TableRow() {
  return (
    <div className="absolute bg-blue-100 h-[40px] left-0 top-0 w-[1086.4px]" data-name="TableRow">
      <div aria-hidden="true" className="absolute border-[#cad5e2] border-[0px_0px_0.8px] border-solid inset-0 pointer-events-none" />
      <TableHead />
      <TableHead1 />
      <TableHead2 />
      <TableHead3 />
      <TableHead4 />
      <TableHead5 />
      <TableHead6 />
      <TableHead7 />
      <TableHead8 />
    </div>
  );
}

function TableHeader() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[1086.4px]" data-name="TableHeader">
      <TableRow />
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-0 size-[12px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_4020_3567)" id="Icon">
          <path d={svgPaths.p15ea74a0} id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_4020_3567">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function MessBillWindow1() {
  return (
    <div className="absolute h-[20px] left-[12px] top-[10px] w-[125.188px]" data-name="MessBillWindow">
      <Icon2 />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[16px] not-italic text-[14px] text-neutral-950 text-nowrap top-[-1.2px] whitespace-pre">2023001</p>
    </div>
  );
}

function TableCell() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[149.588px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <MessBillWindow1 />
    </div>
  );
}

function TableCell1() {
  return (
    <div className="absolute h-[40px] left-[149.59px] top-0 w-[158.688px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[12.4px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.8px] whitespace-pre">Arjun Kumar</p>
    </div>
  );
}

function TableCell2() {
  return (
    <div className="absolute h-[40px] left-[308.27px] top-0 w-[147.775px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[12.4px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.8px] whitespace-pre">REG2023001</p>
    </div>
  );
}

function TableCell3() {
  return (
    <div className="absolute h-[40px] left-[456.05px] top-0 w-[75.2px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[37.39px] not-italic text-[14px] text-center text-neutral-950 text-nowrap top-[8.8px] translate-x-[-50%] whitespace-pre">VI</p>
    </div>
  );
}

function TableCell4() {
  return (
    <div className="absolute h-[40px] left-[531.25px] top-0 w-[95.013px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[47.45px] not-italic text-[14px] text-center text-neutral-950 text-nowrap top-[8.8px] translate-x-[-50%] whitespace-pre">CS</p>
    </div>
  );
}

function TableCell5() {
  return (
    <div className="absolute h-[40px] left-[626.26px] top-0 w-[102.7px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[52.25px] not-italic text-[14px] text-center text-neutral-950 text-nowrap top-[8.8px] translate-x-[-50%] whitespace-pre">CSE</p>
    </div>
  );
}

function TableCell6() {
  return (
    <div className="absolute h-[40px] left-[728.96px] top-0 w-[103.825px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[12.4px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.8px] whitespace-pre">APP001</p>
    </div>
  );
}

function TableCell7() {
  return (
    <div className="absolute h-[40px] left-[832.79px] top-0 w-[143.8px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[71.53px] not-italic text-[14px] text-center text-neutral-950 text-nowrap top-[8.8px] translate-x-[-50%] whitespace-pre">FEB</p>
    </div>
  );
}

function TableCell8() {
  return (
    <div className="absolute h-[40px] left-[976.59px] top-0 w-[109.812px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[98.65px] not-italic text-[#008236] text-[14px] text-right top-[8.8px] translate-x-[-100%] w-[40px]">₹4200</p>
    </div>
  );
}

function TableRow1() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[1086.4px]" data-name="TableRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.8px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <TableCell />
      <TableCell1 />
      <TableCell2 />
      <TableCell3 />
      <TableCell4 />
      <TableCell5 />
      <TableCell6 />
      <TableCell7 />
      <TableCell8 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-0 size-[12px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_4020_3567)" id="Icon">
          <path d={svgPaths.p15ea74a0} id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_4020_3567">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function MessBillWindow2() {
  return (
    <div className="absolute h-[20px] left-[12px] top-[10px] w-[125.188px]" data-name="MessBillWindow">
      <Icon3 />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[16px] not-italic text-[14px] text-neutral-950 text-nowrap top-[-1.2px] whitespace-pre">2023002</p>
    </div>
  );
}

function TableCell9() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[149.588px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <MessBillWindow2 />
    </div>
  );
}

function TableCell10() {
  return (
    <div className="absolute h-[40px] left-[149.59px] top-0 w-[158.688px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[12.4px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.8px] whitespace-pre">Priya Sharma</p>
    </div>
  );
}

function TableCell11() {
  return (
    <div className="absolute h-[40px] left-[308.27px] top-0 w-[147.775px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[12.4px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.8px] whitespace-pre">REG2023002</p>
    </div>
  );
}

function TableCell12() {
  return (
    <div className="absolute h-[40px] left-[456.05px] top-0 w-[75.2px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[37.39px] not-italic text-[14px] text-center text-neutral-950 text-nowrap top-[8.8px] translate-x-[-50%] whitespace-pre">IV</p>
    </div>
  );
}

function TableCell13() {
  return (
    <div className="absolute h-[40px] left-[531.25px] top-0 w-[95.013px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[47.63px] not-italic text-[14px] text-center text-neutral-950 text-nowrap top-[8.8px] translate-x-[-50%] whitespace-pre">EC</p>
    </div>
  );
}

function TableCell14() {
  return (
    <div className="absolute h-[40px] left-[626.26px] top-0 w-[102.7px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[51.42px] not-italic text-[14px] text-center text-neutral-950 text-nowrap top-[8.8px] translate-x-[-50%] whitespace-pre">ECE</p>
    </div>
  );
}

function TableCell15() {
  return (
    <div className="absolute h-[40px] left-[728.96px] top-0 w-[103.825px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[12.4px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.8px] whitespace-pre">APP002</p>
    </div>
  );
}

function TableCell16() {
  return (
    <div className="absolute h-[40px] left-[832.79px] top-0 w-[143.8px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[71.53px] not-italic text-[14px] text-center text-neutral-950 text-nowrap top-[8.8px] translate-x-[-50%] whitespace-pre">FEB</p>
    </div>
  );
}

function TableCell17() {
  return (
    <div className="absolute h-[40px] left-[976.59px] top-0 w-[109.812px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[97.94px] not-italic text-[#008236] text-[14px] text-right top-[8.8px] translate-x-[-100%] w-[39px]">₹3800</p>
    </div>
  );
}

function TableRow2() {
  return (
    <div className="absolute h-[40px] left-0 top-[40px] w-[1086.4px]" data-name="TableRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.8px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <TableCell9 />
      <TableCell10 />
      <TableCell11 />
      <TableCell12 />
      <TableCell13 />
      <TableCell14 />
      <TableCell15 />
      <TableCell16 />
      <TableCell17 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute left-0 size-[12px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_4020_3567)" id="Icon">
          <path d={svgPaths.p15ea74a0} id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_4020_3567">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function MessBillWindow3() {
  return (
    <div className="absolute h-[20px] left-[12px] top-[10px] w-[125.188px]" data-name="MessBillWindow">
      <Icon4 />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[16px] not-italic text-[14px] text-neutral-950 text-nowrap top-[-1.2px] whitespace-pre">2023003</p>
    </div>
  );
}

function TableCell18() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[149.588px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <MessBillWindow3 />
    </div>
  );
}

function TableCell19() {
  return (
    <div className="absolute h-[40px] left-[149.59px] top-0 w-[158.688px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[12.4px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.8px] whitespace-pre">Rahul Singh</p>
    </div>
  );
}

function TableCell20() {
  return (
    <div className="absolute h-[40px] left-[308.27px] top-0 w-[147.775px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[12.4px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.8px] whitespace-pre">REG2023003</p>
    </div>
  );
}

function TableCell21() {
  return (
    <div className="absolute h-[40px] left-[456.05px] top-0 w-[75.2px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[37.39px] not-italic text-[14px] text-center text-neutral-950 text-nowrap top-[8.8px] translate-x-[-50%] whitespace-pre">VI</p>
    </div>
  );
}

function TableCell22() {
  return (
    <div className="absolute h-[40px] left-[531.25px] top-0 w-[95.013px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[48.17px] not-italic text-[14px] text-center text-neutral-950 text-nowrap top-[8.8px] translate-x-[-50%] whitespace-pre">ME</p>
    </div>
  );
}

function TableCell23() {
  return (
    <div className="absolute h-[40px] left-[626.26px] top-0 w-[102.7px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[51.21px] not-italic text-[14px] text-center text-neutral-950 text-nowrap top-[8.8px] translate-x-[-50%] whitespace-pre">MECH</p>
    </div>
  );
}

function TableCell24() {
  return (
    <div className="absolute h-[40px] left-[728.96px] top-0 w-[103.825px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[12.4px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.8px] whitespace-pre">APP003</p>
    </div>
  );
}

function TableCell25() {
  return (
    <div className="absolute h-[40px] left-[832.79px] top-0 w-[143.8px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[71.53px] not-italic text-[14px] text-center text-neutral-950 text-nowrap top-[8.8px] translate-x-[-50%] whitespace-pre">FEB</p>
    </div>
  );
}

function TableCell26() {
  return (
    <div className="absolute h-[40px] left-[976.59px] top-0 w-[109.812px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[98.61px] not-italic text-[#008236] text-[14px] text-right top-[8.4px] translate-x-[-100%] w-[53px]">₹4100</p>
    </div>
  );
}

function TableRow3() {
  return (
    <div className="absolute h-[40px] left-0 top-[80px] w-[1086.4px]" data-name="TableRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.8px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <TableCell18 />
      <TableCell19 />
      <TableCell20 />
      <TableCell21 />
      <TableCell22 />
      <TableCell23 />
      <TableCell24 />
      <TableCell25 />
      <TableCell26 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="absolute left-0 size-[12px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_4020_3564)" id="Icon">
          <path d={svgPaths.p13588700} id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_4020_3564">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function MessBillWindow4() {
  return (
    <div className="absolute h-[20px] left-[12px] top-[10px] w-[125.188px]" data-name="MessBillWindow">
      <Icon5 />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[16px] not-italic text-[14px] text-neutral-950 text-nowrap top-[-1.2px] whitespace-pre">2023004</p>
    </div>
  );
}

function TableCell27() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[149.588px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <MessBillWindow4 />
    </div>
  );
}

function TableCell28() {
  return (
    <div className="absolute h-[40px] left-[149.59px] top-0 w-[158.688px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[12.4px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.8px] whitespace-pre">Sneha Patel</p>
    </div>
  );
}

function TableCell29() {
  return (
    <div className="absolute h-[40px] left-[308.27px] top-0 w-[147.775px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[12.4px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.8px] whitespace-pre">REG2023004</p>
    </div>
  );
}

function TableCell30() {
  return (
    <div className="absolute h-[40px] left-[456.05px] top-0 w-[75.2px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[37.86px] not-italic text-[14px] text-center text-neutral-950 text-nowrap top-[8.8px] translate-x-[-50%] whitespace-pre">II</p>
    </div>
  );
}

function TableCell31() {
  return (
    <div className="absolute h-[40px] left-[531.25px] top-0 w-[95.013px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[47.45px] not-italic text-[14px] text-center text-neutral-950 text-nowrap top-[8.8px] translate-x-[-50%] whitespace-pre">CS</p>
    </div>
  );
}

function TableCell32() {
  return (
    <div className="absolute h-[40px] left-[626.26px] top-0 w-[102.7px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[52.25px] not-italic text-[14px] text-center text-neutral-950 text-nowrap top-[8.8px] translate-x-[-50%] whitespace-pre">CSE</p>
    </div>
  );
}

function TableCell33() {
  return (
    <div className="absolute h-[40px] left-[728.96px] top-0 w-[103.825px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[12.4px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.8px] whitespace-pre">APP004</p>
    </div>
  );
}

function TableCell34() {
  return (
    <div className="absolute h-[40px] left-[832.79px] top-0 w-[143.8px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[71.53px] not-italic text-[14px] text-center text-neutral-950 text-nowrap top-[8.8px] translate-x-[-50%] whitespace-pre">FEB</p>
    </div>
  );
}

function TableCell35() {
  return (
    <div className="absolute h-[40px] left-[976.59px] top-0 w-[109.812px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[97.9px] not-italic text-[#008236] text-[14px] text-right top-[8.8px] translate-x-[-100%] w-[39px]">₹3900</p>
    </div>
  );
}

function TableRow4() {
  return (
    <div className="absolute h-[40px] left-0 top-[120px] w-[1086.4px]" data-name="TableRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.8px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <TableCell27 />
      <TableCell28 />
      <TableCell29 />
      <TableCell30 />
      <TableCell31 />
      <TableCell32 />
      <TableCell33 />
      <TableCell34 />
      <TableCell35 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="absolute left-0 size-[12px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_4020_3564)" id="Icon">
          <path d={svgPaths.p13588700} id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_4020_3564">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function MessBillWindow5() {
  return (
    <div className="absolute h-[20px] left-[12px] top-[10px] w-[125.188px]" data-name="MessBillWindow">
      <Icon6 />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[16px] not-italic text-[14px] text-neutral-950 text-nowrap top-[-1.2px] whitespace-pre">2023005</p>
    </div>
  );
}

function TableCell36() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[149.588px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <MessBillWindow5 />
    </div>
  );
}

function TableCell37() {
  return (
    <div className="absolute h-[40px] left-[149.59px] top-0 w-[158.688px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[12.4px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.8px] whitespace-pre">Vikram Reddy</p>
    </div>
  );
}

function TableCell38() {
  return (
    <div className="absolute h-[40px] left-[308.27px] top-0 w-[147.775px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[12.4px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.8px] whitespace-pre">REG2023005</p>
    </div>
  );
}

function TableCell39() {
  return (
    <div className="absolute h-[40px] left-[456.05px] top-0 w-[75.2px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[37.66px] not-italic text-[14px] text-center text-neutral-950 text-nowrap top-[8.8px] translate-x-[-50%] whitespace-pre">VIII</p>
    </div>
  );
}

function TableCell40() {
  return (
    <div className="absolute h-[40px] left-[531.25px] top-0 w-[95.013px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[47.91px] not-italic text-[14px] text-center text-neutral-950 text-nowrap top-[8.8px] translate-x-[-50%] whitespace-pre">EE</p>
    </div>
  );
}

function TableCell41() {
  return (
    <div className="absolute h-[40px] left-[626.26px] top-0 w-[102.7px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[52.23px] not-italic text-[14px] text-center text-neutral-950 text-nowrap top-[8.8px] translate-x-[-50%] whitespace-pre">EEE</p>
    </div>
  );
}

function TableCell42() {
  return (
    <div className="absolute h-[40px] left-[728.96px] top-0 w-[103.825px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[12.4px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.8px] whitespace-pre">APP005</p>
    </div>
  );
}

function TableCell43() {
  return (
    <div className="absolute h-[40px] left-[832.79px] top-0 w-[143.8px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[71.53px] not-italic text-[14px] text-center text-neutral-950 text-nowrap top-[8.8px] translate-x-[-50%] whitespace-pre">FEB</p>
    </div>
  );
}

function TableCell44() {
  return (
    <div className="absolute h-[40px] left-[976.59px] top-0 w-[109.812px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[98.65px] not-italic text-[#008236] text-[14px] text-right top-[8.8px] translate-x-[-100%] w-[40px]">₹4300</p>
    </div>
  );
}

function TableRow5() {
  return (
    <div className="absolute h-[40px] left-0 top-[160px] w-[1086.4px]" data-name="TableRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.8px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <TableCell36 />
      <TableCell37 />
      <TableCell38 />
      <TableCell39 />
      <TableCell40 />
      <TableCell41 />
      <TableCell42 />
      <TableCell43 />
      <TableCell44 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_4020_3558)" id="Icon">
          <path d={svgPaths.p13588700} id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_4020_3558">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function MessBillWindow6() {
  return (
    <div className="absolute content-stretch flex h-[12px] items-center left-[12px] top-[14px] w-[125.188px]" data-name="MessBillWindow">
      <Icon7 />
    </div>
  );
}

function TableCell45() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[149.588px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <MessBillWindow6 />
    </div>
  );
}

function TableCell46() {
  return (
    <div className="absolute h-[40px] left-[149.59px] top-0 w-[158.688px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TableCell47() {
  return (
    <div className="absolute h-[40px] left-[308.27px] top-0 w-[147.775px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TableCell48() {
  return (
    <div className="absolute h-[40px] left-[456.05px] top-0 w-[75.2px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TableCell49() {
  return (
    <div className="absolute h-[40px] left-[531.25px] top-0 w-[95.013px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TableCell50() {
  return (
    <div className="absolute h-[40px] left-[626.26px] top-0 w-[102.7px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TableCell51() {
  return (
    <div className="absolute h-[40px] left-[728.96px] top-0 w-[103.825px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TableCell52() {
  return (
    <div className="absolute h-[40px] left-[832.79px] top-0 w-[143.8px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TableCell53() {
  return <div className="absolute h-[40px] left-[976.59px] top-0 w-[109.812px]" data-name="TableCell" />;
}

function TableRow6() {
  return (
    <div className="absolute h-[40px] left-0 top-[200px] w-[1086.4px]" data-name="TableRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.8px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <TableCell45 />
      <TableCell46 />
      <TableCell47 />
      <TableCell48 />
      <TableCell49 />
      <TableCell50 />
      <TableCell51 />
      <TableCell52 />
      <TableCell53 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_4020_3558)" id="Icon">
          <path d={svgPaths.p13588700} id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_4020_3558">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function MessBillWindow7() {
  return (
    <div className="absolute content-stretch flex h-[12px] items-center left-[12px] top-[14px] w-[125.188px]" data-name="MessBillWindow">
      <Icon8 />
    </div>
  );
}

function TableCell54() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[149.588px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <MessBillWindow7 />
    </div>
  );
}

function TableCell55() {
  return (
    <div className="absolute h-[40px] left-[149.59px] top-0 w-[158.688px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TableCell56() {
  return (
    <div className="absolute h-[40px] left-[308.27px] top-0 w-[147.775px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TableCell57() {
  return (
    <div className="absolute h-[40px] left-[456.05px] top-0 w-[75.2px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TableCell58() {
  return (
    <div className="absolute h-[40px] left-[531.25px] top-0 w-[95.013px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TableCell59() {
  return (
    <div className="absolute h-[40px] left-[626.26px] top-0 w-[102.7px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TableCell60() {
  return (
    <div className="absolute h-[40px] left-[728.96px] top-0 w-[103.825px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TableCell61() {
  return (
    <div className="absolute h-[40px] left-[832.79px] top-0 w-[143.8px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TableCell62() {
  return <div className="absolute h-[40px] left-[976.59px] top-0 w-[109.812px]" data-name="TableCell" />;
}

function TableRow7() {
  return (
    <div className="absolute h-[40px] left-0 top-[240px] w-[1086.4px]" data-name="TableRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.8px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <TableCell54 />
      <TableCell55 />
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

function Icon9() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_4020_3558)" id="Icon">
          <path d={svgPaths.p13588700} id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_4020_3558">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function MessBillWindow8() {
  return (
    <div className="absolute content-stretch flex h-[12px] items-center left-[12px] top-[14px] w-[125.188px]" data-name="MessBillWindow">
      <Icon9 />
    </div>
  );
}

function TableCell63() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[149.588px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <MessBillWindow8 />
    </div>
  );
}

function TableCell64() {
  return (
    <div className="absolute h-[40px] left-[149.59px] top-0 w-[158.688px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TableCell65() {
  return (
    <div className="absolute h-[40px] left-[308.27px] top-0 w-[147.775px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TableCell66() {
  return (
    <div className="absolute h-[40px] left-[456.05px] top-0 w-[75.2px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TableCell67() {
  return (
    <div className="absolute h-[40px] left-[531.25px] top-0 w-[95.013px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TableCell68() {
  return (
    <div className="absolute h-[40px] left-[626.26px] top-0 w-[102.7px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TableCell69() {
  return (
    <div className="absolute h-[40px] left-[728.96px] top-0 w-[103.825px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TableCell70() {
  return (
    <div className="absolute h-[40px] left-[832.79px] top-0 w-[143.8px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TableCell71() {
  return <div className="absolute h-[40px] left-[976.59px] top-0 w-[109.812px]" data-name="TableCell" />;
}

function TableRow8() {
  return (
    <div className="absolute h-[40px] left-0 top-[280px] w-[1086.4px]" data-name="TableRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.8px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <TableCell63 />
      <TableCell64 />
      <TableCell65 />
      <TableCell66 />
      <TableCell67 />
      <TableCell68 />
      <TableCell69 />
      <TableCell70 />
      <TableCell71 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_4020_3558)" id="Icon">
          <path d={svgPaths.p13588700} id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_4020_3558">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function MessBillWindow9() {
  return (
    <div className="absolute content-stretch flex h-[12px] items-center left-[12px] top-[14px] w-[125.188px]" data-name="MessBillWindow">
      <Icon10 />
    </div>
  );
}

function TableCell72() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[149.588px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <MessBillWindow9 />
    </div>
  );
}

function TableCell73() {
  return (
    <div className="absolute h-[40px] left-[149.59px] top-0 w-[158.688px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TableCell74() {
  return (
    <div className="absolute h-[40px] left-[308.27px] top-0 w-[147.775px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TableCell75() {
  return (
    <div className="absolute h-[40px] left-[456.05px] top-0 w-[75.2px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TableCell76() {
  return (
    <div className="absolute h-[40px] left-[531.25px] top-0 w-[95.013px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TableCell77() {
  return (
    <div className="absolute h-[40px] left-[626.26px] top-0 w-[102.7px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TableCell78() {
  return (
    <div className="absolute h-[40px] left-[728.96px] top-0 w-[103.825px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TableCell79() {
  return (
    <div className="absolute h-[40px] left-[832.79px] top-0 w-[143.8px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TableCell80() {
  return <div className="absolute h-[40px] left-[976.59px] top-0 w-[109.812px]" data-name="TableCell" />;
}

function TableRow9() {
  return (
    <div className="absolute h-[40px] left-0 top-[320px] w-[1086.4px]" data-name="TableRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.8px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <TableCell72 />
      <TableCell73 />
      <TableCell74 />
      <TableCell75 />
      <TableCell76 />
      <TableCell77 />
      <TableCell78 />
      <TableCell79 />
      <TableCell80 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_4020_3558)" id="Icon">
          <path d={svgPaths.p13588700} id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_4020_3558">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function MessBillWindow10() {
  return (
    <div className="absolute content-stretch flex h-[12px] items-center left-[12px] top-[14px] w-[125.188px]" data-name="MessBillWindow">
      <Icon11 />
    </div>
  );
}

function TableCell81() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[149.588px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <MessBillWindow10 />
    </div>
  );
}

function TableCell82() {
  return (
    <div className="absolute h-[40px] left-[149.59px] top-0 w-[158.688px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TableCell83() {
  return (
    <div className="absolute h-[40px] left-[308.27px] top-0 w-[147.775px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TableCell84() {
  return (
    <div className="absolute h-[40px] left-[456.05px] top-0 w-[75.2px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TableCell85() {
  return (
    <div className="absolute h-[40px] left-[531.25px] top-0 w-[95.013px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TableCell86() {
  return (
    <div className="absolute h-[40px] left-[626.26px] top-0 w-[102.7px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TableCell87() {
  return (
    <div className="absolute h-[40px] left-[728.96px] top-0 w-[103.825px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TableCell88() {
  return (
    <div className="absolute h-[40px] left-[832.79px] top-0 w-[143.8px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TableCell89() {
  return <div className="absolute h-[40px] left-[976.59px] top-0 w-[109.812px]" data-name="TableCell" />;
}

function TableRow10() {
  return (
    <div className="absolute h-[40px] left-0 top-[360px] w-[1086.4px]" data-name="TableRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.8px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <TableCell81 />
      <TableCell82 />
      <TableCell83 />
      <TableCell84 />
      <TableCell85 />
      <TableCell86 />
      <TableCell87 />
      <TableCell88 />
      <TableCell89 />
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_4020_3561)" id="Icon">
          <path d={svgPaths.p32e38300} id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_4020_3561">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function MessBillWindow11() {
  return (
    <div className="absolute content-stretch flex h-[12px] items-center left-[12px] top-[14px] w-[125.188px]" data-name="MessBillWindow">
      <Icon12 />
    </div>
  );
}

function TableCell90() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[149.588px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <MessBillWindow11 />
    </div>
  );
}

function TableCell91() {
  return (
    <div className="absolute h-[40px] left-[149.59px] top-0 w-[158.688px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TableCell92() {
  return (
    <div className="absolute h-[40px] left-[308.27px] top-0 w-[147.775px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TableCell93() {
  return (
    <div className="absolute h-[40px] left-[456.05px] top-0 w-[75.2px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TableCell94() {
  return (
    <div className="absolute h-[40px] left-[531.25px] top-0 w-[95.013px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TableCell95() {
  return (
    <div className="absolute h-[40px] left-[626.26px] top-0 w-[102.7px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TableCell96() {
  return (
    <div className="absolute h-[40px] left-[728.96px] top-0 w-[103.825px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TableCell97() {
  return (
    <div className="absolute h-[40px] left-[832.79px] top-0 w-[143.8px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TableCell98() {
  return <div className="absolute h-[40px] left-[976.59px] top-0 w-[109.812px]" data-name="TableCell" />;
}

function TableRow11() {
  return (
    <div className="absolute h-[40px] left-0 top-[400px] w-[1086.4px]" data-name="TableRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.8px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <TableCell90 />
      <TableCell91 />
      <TableCell92 />
      <TableCell93 />
      <TableCell94 />
      <TableCell95 />
      <TableCell96 />
      <TableCell97 />
      <TableCell98 />
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_4020_3561)" id="Icon">
          <path d={svgPaths.p32e38300} id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_4020_3561">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function MessBillWindow12() {
  return (
    <div className="absolute content-stretch flex h-[12px] items-center left-[12px] top-[14px] w-[125.188px]" data-name="MessBillWindow">
      <Icon13 />
    </div>
  );
}

function TableCell99() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[149.588px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <MessBillWindow12 />
    </div>
  );
}

function TableCell100() {
  return (
    <div className="absolute h-[40px] left-[149.59px] top-0 w-[158.688px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TableCell101() {
  return (
    <div className="absolute h-[40px] left-[308.27px] top-0 w-[147.775px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TableCell102() {
  return (
    <div className="absolute h-[40px] left-[456.05px] top-0 w-[75.2px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TableCell103() {
  return (
    <div className="absolute h-[40px] left-[531.25px] top-0 w-[95.013px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TableCell104() {
  return (
    <div className="absolute h-[40px] left-[626.26px] top-0 w-[102.7px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TableCell105() {
  return (
    <div className="absolute h-[40px] left-[728.96px] top-0 w-[103.825px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TableCell106() {
  return (
    <div className="absolute h-[40px] left-[832.79px] top-0 w-[143.8px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TableCell107() {
  return <div className="absolute h-[40px] left-[976.59px] top-0 w-[109.812px]" data-name="TableCell" />;
}

function TableRow12() {
  return (
    <div className="absolute h-[40px] left-0 top-[440px] w-[1086.4px]" data-name="TableRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.8px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <TableCell99 />
      <TableCell100 />
      <TableCell101 />
      <TableCell102 />
      <TableCell103 />
      <TableCell104 />
      <TableCell105 />
      <TableCell106 />
      <TableCell107 />
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_4020_3561)" id="Icon">
          <path d={svgPaths.p32e38300} id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_4020_3561">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function MessBillWindow13() {
  return (
    <div className="absolute content-stretch flex h-[12px] items-center left-[12px] top-[14px] w-[125.188px]" data-name="MessBillWindow">
      <Icon14 />
    </div>
  );
}

function TableCell108() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[149.588px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <MessBillWindow13 />
    </div>
  );
}

function TableCell109() {
  return (
    <div className="absolute h-[40px] left-[149.59px] top-0 w-[158.688px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TableCell110() {
  return (
    <div className="absolute h-[40px] left-[308.27px] top-0 w-[147.775px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TableCell111() {
  return (
    <div className="absolute h-[40px] left-[456.05px] top-0 w-[75.2px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TableCell112() {
  return (
    <div className="absolute h-[40px] left-[531.25px] top-0 w-[95.013px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TableCell113() {
  return (
    <div className="absolute h-[40px] left-[626.26px] top-0 w-[102.7px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TableCell114() {
  return (
    <div className="absolute h-[40px] left-[728.96px] top-0 w-[103.825px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TableCell115() {
  return (
    <div className="absolute h-[40px] left-[832.79px] top-0 w-[143.8px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TableCell116() {
  return <div className="absolute h-[40px] left-[976.59px] top-0 w-[109.812px]" data-name="TableCell" />;
}

function TableRow13() {
  return (
    <div className="absolute h-[40px] left-0 top-[480px] w-[1086.4px]" data-name="TableRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.8px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <TableCell108 />
      <TableCell109 />
      <TableCell110 />
      <TableCell111 />
      <TableCell112 />
      <TableCell113 />
      <TableCell114 />
      <TableCell115 />
      <TableCell116 />
    </div>
  );
}

function Icon15() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_4020_3561)" id="Icon">
          <path d={svgPaths.p32e38300} id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_4020_3561">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function MessBillWindow14() {
  return (
    <div className="absolute content-stretch flex h-[12px] items-center left-[12px] top-[14px] w-[125.188px]" data-name="MessBillWindow">
      <Icon15 />
    </div>
  );
}

function TableCell117() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[149.588px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <MessBillWindow14 />
    </div>
  );
}

function TableCell118() {
  return (
    <div className="absolute h-[40px] left-[149.59px] top-0 w-[158.688px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TableCell119() {
  return (
    <div className="absolute h-[40px] left-[308.27px] top-0 w-[147.775px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TableCell120() {
  return (
    <div className="absolute h-[40px] left-[456.05px] top-0 w-[75.2px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TableCell121() {
  return (
    <div className="absolute h-[40px] left-[531.25px] top-0 w-[95.013px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TableCell122() {
  return (
    <div className="absolute h-[40px] left-[626.26px] top-0 w-[102.7px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TableCell123() {
  return (
    <div className="absolute h-[40px] left-[728.96px] top-0 w-[103.825px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TableCell124() {
  return (
    <div className="absolute h-[40px] left-[832.79px] top-0 w-[143.8px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TableCell125() {
  return <div className="absolute h-[40px] left-[976.59px] top-0 w-[109.812px]" data-name="TableCell" />;
}

function TableRow14() {
  return (
    <div className="absolute h-[40px] left-0 top-[520px] w-[1086.4px]" data-name="TableRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.8px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <TableCell117 />
      <TableCell118 />
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

function Icon16() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_4020_3561)" id="Icon">
          <path d={svgPaths.p32e38300} id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_4020_3561">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function MessBillWindow15() {
  return (
    <div className="absolute content-stretch flex h-[12px] items-center left-[12px] top-[14.2px] w-[125.188px]" data-name="MessBillWindow">
      <Icon16 />
    </div>
  );
}

function TableCell126() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[149.588px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <MessBillWindow15 />
    </div>
  );
}

function TableCell127() {
  return (
    <div className="absolute h-[40px] left-[149.59px] top-0 w-[158.688px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TableCell128() {
  return (
    <div className="absolute h-[40px] left-[308.27px] top-0 w-[147.775px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TableCell129() {
  return (
    <div className="absolute h-[40px] left-[456.05px] top-0 w-[75.2px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TableCell130() {
  return (
    <div className="absolute h-[40px] left-[531.25px] top-0 w-[95.013px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TableCell131() {
  return (
    <div className="absolute h-[40px] left-[626.26px] top-0 w-[102.7px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TableCell132() {
  return (
    <div className="absolute h-[40px] left-[728.96px] top-0 w-[103.825px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TableCell133() {
  return (
    <div className="absolute h-[40px] left-[832.79px] top-0 w-[143.8px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TableCell134() {
  return <div className="absolute h-[40px] left-[976.59px] top-0 w-[109.812px]" data-name="TableCell" />;
}

function TableRow15() {
  return (
    <div className="absolute h-[40px] left-0 top-[560px] w-[1086.4px]" data-name="TableRow">
      <TableCell126 />
      <TableCell127 />
      <TableCell128 />
      <TableCell129 />
      <TableCell130 />
      <TableCell131 />
      <TableCell132 />
      <TableCell133 />
      <TableCell134 />
    </div>
  );
}

function TableBody() {
  return (
    <div className="absolute h-[600px] left-0 top-[40px] w-[1086.4px]" data-name="TableBody">
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
    </div>
  );
}

function Table() {
  return (
    <div className="h-[640px] overflow-clip relative shrink-0 w-full" data-name="Table">
      <TableHeader />
      <TableBody />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col h-[640px] items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <Table />
    </div>
  );
}

function Container4() {
  return <div className="bg-[#cad5e2] h-[4px] rounded-[4px] shrink-0 w-full" data-name="Container" />;
}

function Container5() {
  return (
    <div className="bg-slate-100 h-[20.8px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#cad5e2] border-[0.8px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[20.8px] items-start pb-0 pt-[8.8px] px-[8px] relative w-full">
          <Container4 />
        </div>
      </div>
    </div>
  );
}

function MessBillWindow16() {
  return (
    <div className="bg-white h-[723.2px] relative shrink-0 w-[1088px]" data-name="MessBillWindow">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[723.2px] items-start overflow-clip p-[0.8px] relative rounded-[inherit] w-[1088px]">
        <Container2 />
        <Container3 />
        <Container5 />
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function App() {
  return (
    <div className="bg-slate-50 content-stretch flex h-[787.2px] items-center justify-center relative shrink-0 w-full" data-name="App">
      <MessBillWindow16 />
    </div>
  );
}

export default function MessBill() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Mess Bill">
      <App />
    </div>
  );
}