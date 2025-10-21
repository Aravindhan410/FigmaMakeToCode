function Container() {
  return <div className="h-[36px] shrink-0 w-full" data-name="Container" />;
}

function Button() {
  return (
    <div className="absolute bg-white h-[28px] left-0 rounded-[8px] top-[4px] w-[72.987px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#99a1af] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[18px] left-[12.8px] not-italic text-[12px] text-black text-nowrap top-[3.8px] whitespace-pre">Show All</p>
    </div>
  );
}

function PrimitiveLabel() {
  return (
    <div className="h-[18px] relative shrink-0 w-[60px]" data-name="Primitive.label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[18px] items-center relative w-[60px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[18px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">Book Title</p>
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

function Container1() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[24px] items-center left-[88.99px] top-[6px] w-[188px]" data-name="Container">
      <PrimitiveLabel />
      <Input />
    </div>
  );
}

function PrimitiveLabel1() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[18px] items-center left-0 top-[9px] w-[50px]" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[18px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">Category</p>
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
    <div className="absolute bg-white h-[36px] left-[58px] rounded-[2px] top-0 w-[120px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[#99a1af] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <PrimitiveSpan />
      <Icon />
      <p className="absolute font-['Arial:Regular',_sans-serif] h-[19px] leading-[20px] left-[6.01px] not-italic opacity-60 text-[14px] text-black top-[7.2px] w-[89px]">category</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute h-[36px] left-[292.99px] top-0 w-[178px]" data-name="Container">
      <PrimitiveLabel1 />
      <PrimitiveButton />
    </div>
  );
}

function EditBookForm() {
  return (
    <div className="absolute h-[36px] left-[12px] top-[12px] w-[998.4px]" data-name="EditBookForm">
      <Button />
      <Container1 />
      <Container2 />
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-gradient-to-r from-3% from-[rgba(37,87,225,0.8)] h-[60.8px] relative shrink-0 to-[#f8fafc] via-51% via-[#bdcefa] w-[1022.4px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0px_0px_0.8px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[60.8px] relative w-[1022.4px]">
        <EditBookForm />
      </div>
    </div>
  );
}

function TableHead() {
  return (
    <div className="absolute bg-neutral-50 h-[30px] left-0 top-0 w-[43.362px]" data-name="TableHead">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0px_0.8px_0px_0px] border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[15.714px] left-[21.1px] not-italic text-[11px] text-center text-neutral-950 text-nowrap top-[4.94px] translate-x-[-50%] whitespace-pre">SNO</p>
    </div>
  );
}

function TableHead1() {
  return (
    <div className="absolute bg-neutral-50 h-[30px] left-[43.36px] top-0 w-[63.525px]" data-name="TableHead">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0px_0.8px_0px_0px] border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[15.714px] left-[31.48px] not-italic text-[11px] text-center text-neutral-950 text-nowrap top-[4.94px] translate-x-[-50%] whitespace-pre">BookNo</p>
    </div>
  );
}

function TableHead2() {
  return (
    <div className="absolute bg-neutral-50 h-[30px] left-[106.89px] top-0 w-[68.375px]" data-name="TableHead">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0px_0.8px_0px_0px] border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[15.714px] left-[34.86px] not-italic text-[11px] text-center text-neutral-950 text-nowrap top-[4.94px] translate-x-[-50%] whitespace-pre">Title</p>
    </div>
  );
}

function TableHead3() {
  return (
    <div className="absolute bg-neutral-50 h-[30px] left-[175.26px] top-0 w-[75.775px]" data-name="TableHead">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0px_0.8px_0px_0px] border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[15.714px] left-[38.56px] not-italic text-[11px] text-center text-neutral-950 text-nowrap top-[4.94px] translate-x-[-50%] whitespace-pre">Category</p>
    </div>
  );
}

function TableHead4() {
  return (
    <div className="absolute bg-white h-[30px] left-[251.04px] top-0 w-[51.438px]" data-name="TableHead">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0px_0.8px_0px_0px] border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[15.714px] left-[25.57px] not-italic text-[11px] text-center text-neutral-950 text-nowrap top-[4.94px] translate-x-[-50%] whitespace-pre">ISBN</p>
    </div>
  );
}

function TableHead5() {
  return (
    <div className="absolute bg-neutral-50 h-[30px] left-[302.48px] top-0 w-[58.025px]" data-name="TableHead">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0px_0.8px_0px_0px] border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[15.714px] left-[29.34px] not-italic text-[11px] text-center text-neutral-950 text-nowrap top-[4.94px] translate-x-[-50%] whitespace-pre">CallNo</p>
    </div>
  );
}

function TableHead6() {
  return (
    <div className="absolute bg-neutral-50 h-[30px] left-[360.5px] top-0 w-[55.525px]" data-name="TableHead">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0px_0.8px_0px_0px] border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[15.714px] left-[28.09px] not-italic text-[11px] text-center text-neutral-950 text-nowrap top-[4.94px] translate-x-[-50%] whitespace-pre">CallNo</p>
    </div>
  );
}

function TableHead7() {
  return (
    <div className="absolute bg-neutral-50 h-[30px] left-[416.02px] top-0 w-[78.05px]" data-name="TableHead">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0px_0.8px_0px_0px] border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[15.714px] left-[39.11px] not-italic text-[11px] text-center text-neutral-950 text-nowrap top-[4.94px] translate-x-[-50%] whitespace-pre">Author</p>
    </div>
  );
}

function TableHead8() {
  return (
    <div className="absolute bg-neutral-50 h-[30px] left-[494.07px] top-0 w-[57.413px]" data-name="TableHead">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0px_0.8px_0px_0px] border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[15.714px] left-[29.19px] not-italic text-[11px] text-center text-neutral-950 text-nowrap top-[4.94px] translate-x-[-50%] whitespace-pre">Edition</p>
    </div>
  );
}

function TableHead9() {
  return (
    <div className="absolute bg-neutral-50 h-[30px] left-[551.49px] top-0 w-[107.575px]" data-name="TableHead">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0px_0.8px_0px_0px] border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[15.714px] left-[54px] not-italic text-[11px] text-center text-neutral-950 text-nowrap top-[4.94px] translate-x-[-50%] whitespace-pre">year/Published</p>
    </div>
  );
}

function TableHead10() {
  return (
    <div className="absolute bg-neutral-50 h-[30px] left-[659.06px] top-0 w-[107.162px]" data-name="TableHead">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0px_0.8px_0px_0px] border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[15.714px] left-[54.14px] not-italic text-[11px] text-center text-neutral-950 text-nowrap top-[4.94px] translate-x-[-50%] whitespace-pre">Vendor</p>
    </div>
  );
}

function TableHead11() {
  return (
    <div className="absolute bg-neutral-50 h-[30px] left-[766.23px] top-0 w-[85.45px]" data-name="TableHead">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0px_0.8px_0px_0px] border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[15.714px] left-[42.55px] not-italic text-[11px] text-center text-neutral-950 text-nowrap top-[4.94px] translate-x-[-50%] whitespace-pre">Date/Arrival</p>
    </div>
  );
}

function TableHead12() {
  return (
    <div className="absolute bg-neutral-50 h-[30px] left-[851.67px] top-0 w-[45.625px]" data-name="TableHead">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0px_0.8px_0px_0px] border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[15.714px] left-[22.61px] not-italic text-[11px] text-center text-neutral-950 text-nowrap top-[4.94px] translate-x-[-50%] whitespace-pre">Price</p>
    </div>
  );
}

function TableHead13() {
  return (
    <div className="absolute bg-neutral-50 h-[30px] left-[897.3px] top-0 w-[38.413px]" data-name="TableHead">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0px_0.8px_0px_0px] border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[15.714px] left-[19.26px] not-italic text-[11px] text-center text-neutral-950 text-nowrap top-[4.94px] translate-x-[-50%] whitespace-pre">Qty</p>
    </div>
  );
}

function TableHead14() {
  return (
    <div className="absolute bg-neutral-50 h-[30px] left-[935.71px] top-0 w-[44.675px]" data-name="TableHead">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0px_0.8px_0px_0px] border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[15.714px] left-[22.56px] not-italic text-[11px] text-center text-neutral-950 text-nowrap top-[4.94px] translate-x-[-50%] whitespace-pre">Rack</p>
    </div>
  );
}

function TableHead15() {
  return (
    <div className="absolute bg-neutral-50 h-[30px] left-[980.39px] top-0 w-[42.013px]" data-name="TableHead">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[15.714px] left-[21.98px] not-italic text-[11px] text-center text-neutral-950 text-nowrap top-[4.94px] translate-x-[-50%] whitespace-pre">Row</p>
    </div>
  );
}

function TableRow() {
  return (
    <div className="absolute h-[30px] left-0 top-0 w-[1022.4px]" data-name="TableRow">
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
      <TableHead11 />
      <TableHead12 />
      <TableHead13 />
      <TableHead14 />
      <TableHead15 />
    </div>
  );
}

function TableHeader() {
  return (
    <div className="absolute bg-[#8fa1b3] h-[30px] left-0 top-0 w-[1022.4px]" data-name="TableHeader">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0px_0px_0.8px] border-solid inset-0 pointer-events-none" />
      <TableRow />
    </div>
  );
}

function TableCell() {
  return (
    <div className="absolute h-[25px] left-0 top-0 w-[43.362px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[15.714px] left-[22.01px] not-italic text-[11px] text-center text-neutral-950 text-nowrap top-[2.84px] translate-x-[-50%] whitespace-pre">1</p>
    </div>
  );
}

function TableCell1() {
  return (
    <div className="absolute h-[25px] left-[43.36px] top-0 w-[63.525px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[15.714px] left-[31.84px] not-italic text-[11px] text-center text-neutral-950 text-nowrap top-[2.84px] translate-x-[-50%] whitespace-pre">EX061</p>
    </div>
  );
}

function TableCell2() {
  return (
    <div className="absolute h-[25px] left-[106.89px] top-0 w-[68.375px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[15.714px] left-[34.21px] not-italic text-[11px] text-center text-neutral-950 text-nowrap top-[2.84px] translate-x-[-50%] whitespace-pre">WISDOM</p>
    </div>
  );
}

function TableCell3() {
  return (
    <div className="absolute h-[25px] left-[175.26px] top-0 w-[75.775px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[15.714px] left-[38.08px] not-italic text-[11px] text-center text-neutral-950 text-nowrap top-[2.84px] translate-x-[-50%] whitespace-pre">GENERALS</p>
    </div>
  );
}

function TableCell4() {
  return (
    <div className="absolute h-[25px] left-[251.04px] top-0 w-[51.438px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[15.714px] left-[26.39px] not-italic text-[11px] text-center text-neutral-950 text-nowrap top-[2.84px] translate-x-[-50%] whitespace-pre">65842</p>
    </div>
  );
}

function TableCell5() {
  return (
    <div className="absolute h-[25px] left-[302.48px] top-0 w-[58.025px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[15.714px] left-[29.71px] not-italic text-[11px] text-center text-neutral-950 text-nowrap top-[2.84px] translate-x-[-50%] whitespace-pre">124566</p>
    </div>
  );
}

function TableCell6() {
  return (
    <div className="absolute h-[25px] left-[360.5px] top-0 w-[55.525px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-gray-200 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TableCell7() {
  return (
    <div className="absolute h-[25px] left-[416.02px] top-0 w-[78.05px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[15.714px] left-[39.69px] not-italic text-[11px] text-center text-neutral-950 text-nowrap top-[2.84px] translate-x-[-50%] whitespace-pre">AL JAHGAL</p>
    </div>
  );
}

function TableCell8() {
  return (
    <div className="absolute h-[25px] left-[494.07px] top-0 w-[57.413px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[15.714px] left-[29.49px] not-italic text-[11px] text-center text-neutral-950 text-nowrap top-[2.84px] translate-x-[-50%] whitespace-pre">17TH</p>
    </div>
  );
}

function TableCell9() {
  return (
    <div className="absolute h-[25px] left-[551.49px] top-0 w-[107.575px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[15.714px] left-[54.13px] not-italic text-[11px] text-center text-neutral-950 text-nowrap top-[2.84px] translate-x-[-50%] whitespace-pre">1984 BHARATR...</p>
    </div>
  );
}

function TableCell10() {
  return (
    <div className="absolute h-[25px] left-[659.06px] top-0 w-[107.162px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[15.714px] left-[54.1px] not-italic text-[11px] text-center text-neutral-950 text-nowrap top-[2.84px] translate-x-[-50%] whitespace-pre">OMEGA INFOR...</p>
    </div>
  );
}

function TableCell11() {
  return (
    <div className="absolute h-[25px] left-[766.23px] top-0 w-[85.45px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[15.714px] left-[43.1px] not-italic text-[11px] text-center text-neutral-950 text-nowrap top-[2.84px] translate-x-[-50%] whitespace-pre">07-07-2025</p>
    </div>
  );
}

function TableCell12() {
  return (
    <div className="absolute h-[25px] left-[851.67px] top-0 w-[45.625px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[15.714px] left-[23.41px] not-italic text-[11px] text-center text-neutral-950 text-nowrap top-[2.84px] translate-x-[-50%] whitespace-pre">500</p>
    </div>
  );
}

function TableCell13() {
  return (
    <div className="absolute h-[25px] left-[897.3px] top-0 w-[38.413px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[15.714px] left-[19.74px] not-italic text-[11px] text-center text-neutral-950 text-nowrap top-[2.84px] translate-x-[-50%] whitespace-pre">1</p>
    </div>
  );
}

function TableCell14() {
  return (
    <div className="absolute h-[25px] left-[935.71px] top-0 w-[44.675px]" data-name="TableCell">
      <div aria-hidden="true" className="absolute border-[0px_0.8px_0px_0px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[15.714px] left-[22.86px] not-italic text-[11px] text-center text-neutral-950 text-nowrap top-[2.84px] translate-x-[-50%] whitespace-pre">1</p>
    </div>
  );
}

function TableCell15() {
  return (
    <div className="absolute h-[25px] left-[980.39px] top-0 w-[42.013px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[15.714px] left-[21.74px] not-italic text-[11px] text-center text-neutral-950 text-nowrap top-[2.84px] translate-x-[-50%] whitespace-pre">1</p>
    </div>
  );
}

function TableRow1() {
  return (
    <div className="absolute bg-[#bedbff] h-[25px] left-0 top-0 w-[1022.4px]" data-name="Table Row">
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
      <TableCell12 />
      <TableCell13 />
      <TableCell14 />
      <TableCell15 />
    </div>
  );
}

function TableBody() {
  return (
    <div className="absolute h-[25px] left-0 top-[30px] w-[1022.4px]" data-name="TableBody">
      <TableRow1 />
    </div>
  );
}

function Table() {
  return (
    <div className="h-[55px] overflow-clip relative shrink-0 w-full" data-name="Table">
      <TableHeader />
      <TableBody />
    </div>
  );
}

function Container4() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[1022.4px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-full items-start overflow-clip relative rounded-[inherit] w-[1022.4px]">
        <Table />
      </div>
    </div>
  );
}

function EditBookForm1() {
  return (
    <div className="h-[18px] relative shrink-0 w-[93.287px]" data-name="EditBookForm">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[18px] relative w-[93.287px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[18px] left-0 not-italic text-[12px] text-nowrap text-white top-[-1.2px] whitespace-pre">Showing Books: 1</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white h-[28px] relative rounded-[8px] shrink-0 w-[93.513px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#99a1af] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[93.513px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[18px] left-[24.8px] not-italic text-[12px] text-black text-nowrap top-[3.8px] whitespace-pre">UPDATE</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-white h-[28px] relative rounded-[8px] shrink-0 w-[84.388px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#99a1af] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[84.388px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[18px] left-[24.8px] not-italic text-[12px] text-black text-nowrap top-[3.8px] whitespace-pre">CLOSE</p>
      </div>
    </div>
  );
}

function EditBookForm2() {
  return (
    <div className="h-[28px] relative shrink-0 w-[189.9px]" data-name="EditBookForm">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[28px] items-start relative w-[189.9px]">
        <Button1 />
        <Button2 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-gradient-to-r from-3% from-[rgba(37,87,225,0.8)] h-[52.8px] relative shrink-0 to-[#f8fafc] via-51% via-[#bdcefa] w-[1022.4px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0.8px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[52.8px] items-center justify-between pb-0 pt-[0.8px] px-[12px] relative w-[1022.4px]">
        <EditBookForm1 />
        <EditBookForm2 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[3.815e_-6px] h-[170.2px] items-start p-[0.8px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0.8px] border-solid inset-0 pointer-events-none" />
      <Container3 />
      <Container4 />
      <Container5 />
    </div>
  );
}

function App() {
  return (
    <div className="absolute bg-gradient-to-r content-stretch flex flex-col from-3% from-[rgba(37,87,225,0.8)] gap-[16px] items-start left-[71.2px] to-[#f8fafc] top-[16px] via-51% via-[#bdcefa] w-[1007.6px]" data-name="App">
      <Container />
      <Container6 />
    </div>
  );
}

export default function EditBook() {
  return (
    <div className="bg-white relative size-full" data-name="edit book">
      <App />
    </div>
  );
}
