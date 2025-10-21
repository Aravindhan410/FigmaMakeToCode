import svgPaths from "../imports/svg-strtco7xaf";

function Paragraph() {
  return (
    <div className="h-[24px] relative shrink-0 w-[109.688px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[109.688px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-2.2px] whitespace-pre">Add Book Entry</p>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="h-[21px] relative shrink-0 w-[67.275px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-[67.275px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[21px] left-0 not-italic text-[14px] text-nowrap text-white top-[-1.2px] whitespace-pre">Entry Date:</p>
      </div>
    </div>
  );
}

function AddBookForm() {
  return (
    <div className="h-[21px] relative shrink-0 w-[77.963px]" data-name="AddBookForm">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-[77.963px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[21px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-[-1.2px] whitespace-pre">04/Oct/2025</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M5.33333 1.33333V4" id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 1.33333V4" id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3ee34580} id="Vector_3" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 6.66667H14" id="Vector_4" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-white h-[37px] relative rounded-[8px] shrink-0 w-[125.963px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[37px] items-center pl-[12px] pr-0 py-0 relative w-[125.963px]">
        <AddBookForm />
        <Icon />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[37px] relative shrink-0 w-[201.238px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[37px] items-center relative w-[201.238px]">
        <Label />
        <Container />
      </div>
    </div>
  );
}

function AddBookForm1() {
  return (
    <div className="bg-gradient-to-r from-3% from-[rgba(37,87,225,0.8)] h-[68px] relative rounded-tl-[10px] rounded-tr-[10px] shrink-0 to-[#f8fafc] via-51% via-[#bdcefa] w-[1149px]" data-name="AddBookForm">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[68px] items-center justify-between px-[16px] py-0 relative w-[1149px]">
        <Paragraph />
        <Container1 />
      </div>
    </div>
  );
}

function AnimatedFormField() {
  return (
    <div className="absolute h-[21px] left-[119.19px] top-0 w-[6.088px]" data-name="AnimatedFormField">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[21px] left-0 not-italic text-[#fb2c36] text-[14px] text-nowrap top-[-1.2px] whitespace-pre">*</p>
    </div>
  );
}

function PrimitiveLabel() {
  return (
    <div className="h-[21px] relative shrink-0 w-[388px]" data-name="Primitive.label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-[388px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[21px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-1.2px] whitespace-pre">Book/ Access No</p>
        <AnimatedFormField />
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[8px] shrink-0 w-[388.6px]" data-name="Input">
      <div className="bg-clip-padding border-[0.3px] border-[transparent] border-solid box-border h-full w-[388.6px]" />
      <div aria-hidden="true" className="absolute border-[0.3px] border-black border-solid inset-0 pointer-events-none rounded-[8.3px]" />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[65px] items-start left-0 top-0 w-[388px]" data-name="Container">
      <PrimitiveLabel />
      <Input />
    </div>
  );
}

function PrimitiveLabel1() {
  return (
    <div className="h-[21px] relative shrink-0 w-[388px]" data-name="Primitive.label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[21px] items-center relative w-[388px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[21px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">ISBN</p>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[8px] shrink-0 w-[388.6px]" data-name="Input">
      <div className="bg-clip-padding border-[0.3px] border-[transparent] border-solid box-border h-full w-[388.6px]" />
      <div aria-hidden="true" className="absolute border-[0.3px] border-black border-solid inset-0 pointer-events-none rounded-[8.3px]" />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[65px] items-start left-[412px] top-0 w-[388px]" data-name="Container">
      <PrimitiveLabel1 />
      <Input1 />
    </div>
  );
}

function PrimitiveLabel2() {
  return (
    <div className="h-[21px] relative shrink-0 w-[388px]" data-name="Primitive.label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[21px] items-center relative w-[388px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[21px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Call No</p>
      </div>
    </div>
  );
}

function Input2() {
  return (
    <div className="bg-white h-[36.6px] relative rounded-[8px] shrink-0 w-[388.6px]" data-name="Input">
      <div className="bg-clip-padding border-[0.3px] border-[transparent] border-solid box-border h-[36.6px] w-[388.6px]" />
      <div aria-hidden="true" className="absolute border-[0.3px] border-black border-solid inset-0 pointer-events-none rounded-[8.3px]" />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[65px] items-start left-0 top-[89px] w-[388px]" data-name="Container">
      <PrimitiveLabel2 />
      <Input2 />
    </div>
  );
}

function AnimatedFormField1() {
  return (
    <div className="absolute h-[21px] left-[75.91px] top-0 w-[6.088px]" data-name="AnimatedFormField">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[21px] left-0 not-italic text-[#fb2c36] text-[14px] text-nowrap top-[-1.2px] whitespace-pre">*</p>
    </div>
  );
}

function PrimitiveLabel3() {
  return (
    <div className="h-[21px] relative shrink-0 w-[388px]" data-name="Primitive.label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-[388px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[21px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-1.2px] whitespace-pre">Book Title</p>
        <AnimatedFormField1 />
      </div>
    </div>
  );
}

function Input3() {
  return (
    <div className="basis-0 bg-white grow h-[36.6px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Input">
      <div className="bg-clip-padding border-[0.3px] border-[transparent] border-solid box-border h-[36.6px] w-full" />
      <div aria-hidden="true" className="absolute border-[0.3px] border-black border-solid inset-0 pointer-events-none rounded-[8.3px]" />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-gray-200 h-[28px] relative rounded-[8px] shrink-0 w-[44.2px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[44.2px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[18px] left-[12px] not-italic text-[12px] text-black text-nowrap top-[3.8px] whitespace-pre">Fon</p>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[21px] relative shrink-0 w-[122.263px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-[122.263px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[21px] left-0 not-italic text-[#717182] text-[14px] text-nowrap top-[-1.2px] whitespace-pre">Microsoft Sans Serif</p>
      </div>
    </div>
  );
}

function AddBookForm2() {
  return (
    <div className="h-[36px] relative shrink-0 w-[388px]" data-name="AddBookForm">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[36px] items-center pl-0 pr-[23.137px] py-0 relative w-[388px]">
        <Input3 />
        <Button />
        <Text />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[65px] items-start left-[412px] top-[89px] w-[388px]" data-name="Container">
      <PrimitiveLabel3 />
      <AddBookForm2 />
    </div>
  );
}

function AnimatedFormField2() {
  return (
    <div className="absolute h-[21px] left-[70.08px] top-0 w-[6.088px]" data-name="AnimatedFormField">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[21px] left-0 not-italic text-[#fb2c36] text-[14px] text-nowrap top-[-1.2px] whitespace-pre">*</p>
    </div>
  );
}

function PrimitiveLabel4() {
  return (
    <div className="h-[21px] relative shrink-0 w-[388px]" data-name="Primitive.label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-[388px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[21px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-1.2px] whitespace-pre">Category</p>
        <AnimatedFormField2 />
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
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[8px] shrink-0 w-[388.6px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[0.3px] border-black border-solid inset-0 pointer-events-none rounded-[8.3px]" />
      <div className="bg-clip-padding border-[0.3px] border-[transparent] border-solid box-border content-stretch flex h-full items-center justify-between px-[12px] py-0 relative w-[388.6px]">
        <p className="font-['Arial:Regular',_sans-serif] h-[19px] leading-[20px] not-italic relative shrink-0 text-[14px] text-black w-[120px]">category</p>
        <Icon1 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[65px] items-start left-0 top-[178px] w-[388px]" data-name="Container">
      <PrimitiveLabel4 />
      <PrimitiveButton />
    </div>
  );
}

function PrimitiveLabel5() {
  return (
    <div className="h-[21px] relative shrink-0 w-[388px]" data-name="Primitive.label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[21px] items-center relative w-[388px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[21px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Author Name</p>
      </div>
    </div>
  );
}

function Input4() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[8px] shrink-0 w-[388.6px]" data-name="Input">
      <div className="bg-clip-padding border-[0.3px] border-[transparent] border-solid box-border h-full w-[388.6px]" />
      <div aria-hidden="true" className="absolute border-[0.3px] border-black border-solid inset-0 pointer-events-none rounded-[8.3px]" />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[65px] items-start left-[412px] top-[178px] w-[388px]" data-name="Container">
      <PrimitiveLabel5 />
      <Input4 />
    </div>
  );
}

function PrimitiveLabel6() {
  return (
    <div className="h-[21px] relative shrink-0 w-[388px]" data-name="Primitive.label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[21px] items-center relative w-[388px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[21px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Edition</p>
      </div>
    </div>
  );
}

function Input5() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[8px] shrink-0 w-[388.6px]" data-name="Input">
      <div className="bg-clip-padding border-[0.3px] border-[transparent] border-solid box-border h-full w-[388.6px]" />
      <div aria-hidden="true" className="absolute border-[0.3px] border-black border-solid inset-0 pointer-events-none rounded-[8.3px]" />
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[65px] items-start left-0 top-[267px] w-[388px]" data-name="Container">
      <PrimitiveLabel6 />
      <Input5 />
    </div>
  );
}

function PrimitiveLabel7() {
  return (
    <div className="h-[21px] relative shrink-0 w-[388px]" data-name="Primitive.label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[21px] items-center relative w-[388px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[21px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Year/Publisher</p>
      </div>
    </div>
  );
}

function Input6() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[8px] shrink-0 w-[388.6px]" data-name="Input">
      <div className="bg-clip-padding border-[0.3px] border-[transparent] border-solid box-border h-full w-[388.6px]" />
      <div aria-hidden="true" className="absolute border-[0.3px] border-black border-solid inset-0 pointer-events-none rounded-[8.3px]" />
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[65px] items-start left-[412px] top-[267px] w-[388px]" data-name="Container">
      <PrimitiveLabel7 />
      <Input6 />
    </div>
  );
}

function PrimitiveLabel8() {
  return (
    <div className="h-[21px] relative shrink-0 w-[388px]" data-name="Primitive.label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[21px] items-center relative w-[388px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[21px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Vendor</p>
      </div>
    </div>
  );
}

function Input7() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[8px] shrink-0 w-[388.6px]" data-name="Input">
      <div className="bg-clip-padding border-[0.3px] border-[transparent] border-solid box-border h-full w-[388.6px]" />
      <div aria-hidden="true" className="absolute border-[0.3px] border-black border-solid inset-0 pointer-events-none rounded-[8.3px]" />
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[65px] items-start left-0 top-[356px] w-[388px]" data-name="Container">
      <PrimitiveLabel8 />
      <Input7 />
    </div>
  );
}

function PrimitiveLabel9() {
  return (
    <div className="h-[21px] relative shrink-0 w-[388px]" data-name="Primitive.label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[21px] items-center relative w-[388px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[21px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Date Arrived</p>
      </div>
    </div>
  );
}

function Input8() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[8px] shrink-0 w-[388.6px]" data-name="Input">
      <div className="bg-clip-padding border-[0.3px] border-[transparent] border-solid box-border h-full w-[388.6px]" />
      <div aria-hidden="true" className="absolute border-[0.3px] border-black border-solid inset-0 pointer-events-none rounded-[8.3px]" />
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[65px] items-start left-[412px] top-[356px] w-[388px]" data-name="Container">
      <PrimitiveLabel9 />
      <Input8 />
    </div>
  );
}

function PrimitiveLabel10() {
  return (
    <div className="h-[21px] relative shrink-0 w-[388px]" data-name="Primitive.label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[21px] items-center relative w-[388px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[21px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Price</p>
      </div>
    </div>
  );
}

function Input9() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[8px] shrink-0 w-[388.6px]" data-name="Input">
      <div className="bg-clip-padding border-[0.3px] border-[transparent] border-solid box-border h-full w-[388.6px]" />
      <div aria-hidden="true" className="absolute border-[0.3px] border-black border-solid inset-0 pointer-events-none rounded-[8.3px]" />
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[65px] items-start left-0 top-[445px] w-[388px]" data-name="Container">
      <PrimitiveLabel10 />
      <Input9 />
    </div>
  );
}

function PrimitiveLabel11() {
  return (
    <div className="h-[21px] relative shrink-0 w-[388px]" data-name="Primitive.label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[21px] items-center relative w-[388px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[21px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Return Day</p>
      </div>
    </div>
  );
}

function Input10() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[8px] shrink-0 w-[388.6px]" data-name="Input">
      <div className="bg-clip-padding border-[0.3px] border-[transparent] border-solid box-border h-full w-[388.6px]" />
      <div aria-hidden="true" className="absolute border-[0.3px] border-black border-solid inset-0 pointer-events-none rounded-[8.3px]" />
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[65px] items-start left-[412px] top-[445px] w-[388px]" data-name="Container">
      <PrimitiveLabel11 />
      <Input10 />
    </div>
  );
}

function PrimitiveLabel12() {
  return (
    <div className="h-[21px] relative shrink-0 w-[256px]" data-name="Primitive.label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[21px] items-center relative w-[256px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[21px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Rack / Row / Column</p>
      </div>
    </div>
  );
}

function Input11() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[8px] shrink-0 w-[256.6px]" data-name="Input">
      <div className="bg-clip-padding border-[0.3px] border-[transparent] border-solid box-border content-stretch flex h-full items-center overflow-clip px-[12px] py-[4px] relative rounded-[inherit] w-[256.6px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">0</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.3px] border-neutral-950 border-solid inset-0 pointer-events-none rounded-[8.3px]" />
    </div>
  );
}

function AddBookForm3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[65px] items-start left-0 top-0 w-[256px]" data-name="AddBookForm">
      <PrimitiveLabel12 />
      <Input11 />
    </div>
  );
}

function PrimitiveLabel13() {
  return (
    <div className="h-[21px] relative shrink-0 w-[256px]" data-name="Primitive.label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[21px] items-center relative w-[256px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[21px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">&nbsp;</p>
      </div>
    </div>
  );
}

function Input12() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[8px] shrink-0 w-[256.6px]" data-name="Input">
      <div className="bg-clip-padding border-[0.3px] border-[transparent] border-solid box-border content-stretch flex h-full items-center overflow-clip px-[12px] py-[4px] relative rounded-[inherit] w-[256.6px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">0</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.3px] border-neutral-950 border-solid inset-0 pointer-events-none rounded-[8.3px]" />
    </div>
  );
}

function AddBookForm4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[65px] items-start left-[272px] top-0 w-[256px]" data-name="AddBookForm">
      <PrimitiveLabel13 />
      <Input12 />
    </div>
  );
}

function PrimitiveLabel14() {
  return (
    <div className="h-[21px] relative shrink-0 w-[256px]" data-name="Primitive.label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[21px] items-center relative w-[256px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[21px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">&nbsp;</p>
      </div>
    </div>
  );
}

function Input13() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[8px] shrink-0 w-[256.6px]" data-name="Input">
      <div className="bg-clip-padding border-[0.3px] border-[transparent] border-solid box-border content-stretch flex h-full items-center overflow-clip px-[12px] py-[4px] relative rounded-[inherit] w-[256.6px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">0</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.3px] border-neutral-950 border-solid inset-0 pointer-events-none rounded-[8.3px]" />
    </div>
  );
}

function AddBookForm5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[65px] items-start left-[544px] top-0 w-[256px]" data-name="AddBookForm">
      <PrimitiveLabel14 />
      <Input13 />
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute h-[65px] left-0 top-[534px] w-[800px]" data-name="Container">
      <AddBookForm3 />
      <AddBookForm4 />
      <AddBookForm5 />
    </div>
  );
}

function PrimitiveLabel15() {
  return (
    <div className="h-[21px] relative shrink-0 w-[388px]" data-name="Primitive.label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[21px] items-center relative w-[388px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[21px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">PerDay Special Fine</p>
      </div>
    </div>
  );
}

function Input14() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[8px] shrink-0 w-[388.6px]" data-name="Input">
      <div className="bg-clip-padding border-[0.3px] border-[transparent] border-solid box-border content-stretch flex h-full items-center overflow-clip px-[12px] py-[4px] relative rounded-[inherit] w-[388.6px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">1.00</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.3px] border-neutral-950 border-solid inset-0 pointer-events-none rounded-[8.3px]" />
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[65px] items-start left-0 top-[623px] w-[388px]" data-name="Container">
      <PrimitiveLabel15 />
      <Input14 />
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

function PrimitiveLabel16() {
  return (
    <div className="h-[21px] relative shrink-0 w-[52.975px]" data-name="Primitive.label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[21px] items-center relative w-[52.975px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[21px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">With CD</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[21px] relative shrink-0 w-[388px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[21px] items-center relative w-[388px]">
        <PrimitiveButton1 />
        <PrimitiveLabel16 />
      </div>
    </div>
  );
}

function PrimitiveButton2() {
  return (
    <div className="bg-[#f3f3f5] relative rounded-[4px] shrink-0 size-[16px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[16px]" />
    </div>
  );
}

function PrimitiveLabel17() {
  return (
    <div className="h-[21px] relative shrink-0 w-[113.075px]" data-name="Primitive.label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[21px] items-center relative w-[113.075px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[21px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Is Reference Book</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[21px] relative shrink-0 w-[388px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[21px] items-center relative w-[388px]">
        <PrimitiveButton2 />
        <PrimitiveLabel17 />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[65px] items-start justify-center left-[412px] top-[623px] w-[388px]" data-name="Container">
      <Container16 />
      <Container17 />
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute h-[688px] left-[24px] top-[24px] w-[800px]" data-name="Container">
      <Container2 />
      <Container3 />
      <Container4 />
      <Container5 />
      <Container6 />
      <Container7 />
      <Container8 />
      <Container9 />
      <Container10 />
      <Container11 />
      <Container12 />
      <Container13 />
      <Container14 />
      <Container15 />
      <Container18 />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white h-[36.6px] relative rounded-[8px] shrink-0 w-[106.775px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.3px] border-neutral-950 border-solid inset-0 pointer-events-none rounded-[8.3px]" />
      <div className="bg-clip-padding border-[0.3px] border-[transparent] border-solid box-border h-[36.6px] relative w-[106.775px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[32.8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[6.8px] whitespace-pre">CLOSE</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-white h-[36.6px] relative rounded-[8px] shrink-0 w-[94.088px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.3px] border-neutral-950 border-solid inset-0 pointer-events-none rounded-[8.3px]" />
      <div className="bg-clip-padding border-[0.3px] border-[transparent] border-solid box-border h-[36.6px] relative w-[94.088px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[32px] not-italic text-[14px] text-neutral-950 text-nowrap top-[6.8px] whitespace-pre">ADD</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-white h-[36.6px] relative rounded-[8px] shrink-0 w-[115.838px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.3px] border-neutral-950 border-solid inset-0 pointer-events-none rounded-[8.3px]" />
      <div className="bg-clip-padding border-[0.3px] border-[transparent] border-solid box-border h-[36.6px] relative w-[115.838px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[32px] not-italic text-[14px] text-neutral-950 text-nowrap top-[6.8px] whitespace-pre">UPDATE</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute box-border content-stretch flex gap-[16px] h-[60.8px] items-start justify-end left-[24px] pb-0 pt-[24.8px] px-0 top-[744px] w-[974.4px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.8px_0px_0px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <Button1 />
      <Button2 />
      <Button3 />
    </div>
  );
}

function AddBookForm6() {
  return (
    <div className="h-[828.8px] relative shrink-0 w-full" data-name="AddBookForm">
      <Container19 />
      <Container20 />
    </div>
  );
}

function Container21() {
  return (
    <div className="[grid-area:1_/_1] bg-gradient-to-b box-border content-stretch flex flex-col from-3% from-[rgba(37,87,225,0.8)] h-[830.4px] items-start ml-0 mt-0 p-[0.8px] relative rounded-bl-[14px] rounded-br-[14px] to-[#f8fafc] via-51% via-[#bdcefa] w-[1150px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.8px] border-gray-200 border-solid inset-0 pointer-events-none rounded-bl-[14px] rounded-br-[14px]" />
      <AddBookForm6 />
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full">
      <Container21 />
    </div>
  );
}

export default function AddBook() {
  return (
    <div className="bg-gray-100 content-stretch flex flex-col items-start relative size-full" data-name="add book">
      <AddBookForm1 />
      <Group1 />
    </div>
  );
}
