import svgPaths from "./svg-trk586eefk";

function PrimitiveLabel() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">Date</p>
    </div>
  );
}

function Input() {
  return (
    <div className="absolute bg-white h-[36px] left-0 rounded-[8px] top-0 w-[194.875px]" data-name="Input">
      <div className="box-border content-stretch flex h-[36px] items-center overflow-clip pl-[12px] pr-[40px] py-[4px] relative rounded-[inherit] w-[194.875px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">07-Oct-2025</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[166.88px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M5.33333 1.33333V4" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 1.33333V4" id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3ee34580} id="Vector_3" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 6.66667H14" id="Vector_4" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
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
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[64px] items-start left-0 top-0 w-[194.875px]" data-name="Container">
      <PrimitiveLabel />
      <Container />
    </div>
  );
}

function PrimitiveLabel1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">Veh. Regno</p>
    </div>
  );
}

function PrimitiveSpan() {
  return (
    <div className="h-[20px] relative shrink-0 w-[84.138px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[20px] items-center overflow-clip relative rounded-[inherit] w-[84.138px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Select Vehicle</p>
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
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
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
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[64px] items-start left-[210.88px] top-0 w-[194.875px]" data-name="Container">
      <PrimitiveLabel1 />
      <PrimitiveButton />
    </div>
  );
}

function PrimitiveLabel2() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">Route</p>
    </div>
  );
}

function PrimitiveSpan1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[76.675px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[20px] items-center overflow-clip relative rounded-[inherit] w-[76.675px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Select Route</p>
      </div>
    </div>
  );
}

function Icon2() {
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

function PrimitiveButton1() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[36px] items-center justify-between px-[12.8px] py-[0.8px] relative w-full">
          <PrimitiveSpan1 />
          <Icon2 />
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[64px] items-start left-[421.75px] top-0 w-[194.887px]" data-name="Container">
      <PrimitiveLabel2 />
      <PrimitiveButton1 />
    </div>
  );
}

function PrimitiveLabel3() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">Driver</p>
    </div>
  );
}

function PrimitiveSpan2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[77.487px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[20px] items-center overflow-clip relative rounded-[inherit] w-[77.487px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Select Driver</p>
      </div>
    </div>
  );
}

function Icon3() {
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

function PrimitiveButton2() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[36px] items-center justify-between px-[12.8px] py-[0.8px] relative w-full">
          <PrimitiveSpan2 />
          <Icon3 />
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[64px] items-start left-[632.64px] top-0 w-[194.875px]" data-name="Container">
      <PrimitiveLabel3 />
      <PrimitiveButton2 />
    </div>
  );
}

function PrimitiveLabel4() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">Conductor</p>
    </div>
  );
}

function PrimitiveSpan3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[105.763px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[20px] items-center overflow-clip relative rounded-[inherit] w-[105.763px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Select Conductor</p>
      </div>
    </div>
  );
}

function Icon4() {
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

function PrimitiveButton3() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[36px] items-center justify-between px-[12.8px] py-[0.8px] relative w-full">
          <PrimitiveSpan3 />
          <Icon4 />
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[64px] items-start left-[843.51px] top-0 w-[194.887px]" data-name="Container">
      <PrimitiveLabel4 />
      <PrimitiveButton3 />
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Container2 />
      <Container3 />
      <Container4 />
      <Container5 />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute bg-gradient-to-r box-border content-stretch flex flex-col from-[#155dfc] gap-[16px] h-[116px] items-start left-px pb-0 pt-[24px] px-[24px] rounded-tl-[10px] rounded-tr-[10px] to-[#1447e6] top-px w-[1086px]" data-name="Container">
      <Container6 />
    </div>
  );
}

function CardTitle() {
  return (
    <div className="absolute h-[28px] left-[24.8px] top-[24.8px] w-[280.525px]" data-name="CardTitle">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[28px] left-0 not-italic text-[#008236] text-[18px] text-nowrap top-[-1.4px] whitespace-pre">Income</p>
    </div>
  );
}

function PrimitiveLabel5() {
  return (
    <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[#008236] text-[14px] text-nowrap whitespace-pre">Collection Amount</p>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-[#f3f3f5] h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[36px] items-center px-[12px] py-[4px] relative w-full">
          <p className="font-['Arial:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">0</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#7bf1a8] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function VehicleExpenseWindow() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[58px] items-start relative shrink-0 w-full" data-name="VehicleExpenseWindow">
      <PrimitiveLabel5 />
      <Input1 />
    </div>
  );
}

function PrimitiveLabel6() {
  return (
    <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[#008236] text-[14px] text-nowrap whitespace-pre">Remark</p>
    </div>
  );
}

function Input2() {
  return (
    <div className="bg-[#f3f3f5] h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[36px] items-center px-[12px] py-[4px] relative w-full">
          <p className="font-['Arial:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Enter remark</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#7bf1a8] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function VehicleExpenseWindow1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[58px] items-start relative shrink-0 w-full" data-name="VehicleExpenseWindow">
      <PrimitiveLabel6 />
      <Input2 />
    </div>
  );
}

function CardContent() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[16px] h-[156px] items-start left-[0.8px] px-[24px] py-0 top-[94.8px] w-[328.525px]" data-name="CardContent">
      <VehicleExpenseWindow />
      <VehicleExpenseWindow1 />
    </div>
  );
}

function Card() {
  return (
    <div className="absolute bg-green-50 h-[333.6px] left-0 rounded-[14px] top-0 w-[330.125px]" data-name="Card">
      <div aria-hidden="true" className="absolute border-[#b9f8cf] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <CardTitle />
      <CardContent />
    </div>
  );
}

function CardTitle1() {
  return (
    <div className="absolute h-[28px] left-[24.8px] top-[24.8px] w-[280.538px]" data-name="CardTitle">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[28px] left-0 not-italic text-[#c10007] text-[18px] text-nowrap top-[-1.4px] whitespace-pre">Expense</p>
    </div>
  );
}

function PrimitiveLabel7() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#c10007] text-[14px] text-nowrap whitespace-pre">Bill Detail</p>
    </div>
  );
}

function Input3() {
  return (
    <div className="bg-[#f3f3f5] h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[36px] items-center px-[12px] py-[4px] relative w-full">
          <p className="font-['Arial:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">0</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#ffa2a2] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[64px] items-start left-0 top-0 w-[134.262px]" data-name="Container">
      <PrimitiveLabel7 />
      <Input3 />
    </div>
  );
}

function PrimitiveLabel8() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#c10007] text-[14px] text-nowrap whitespace-pre">Liter</p>
    </div>
  );
}

function Input4() {
  return (
    <div className="bg-[#f3f3f5] h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[36px] items-center px-[12px] py-[4px] relative w-full">
          <p className="font-['Arial:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">0</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#ffa2a2] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[64px] items-start left-[146.26px] top-0 w-[134.275px]" data-name="Container">
      <PrimitiveLabel8 />
      <Input4 />
    </div>
  );
}

function PrimitiveLabel9() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#c10007] text-[14px] text-nowrap whitespace-pre">Start K.M</p>
    </div>
  );
}

function Input5() {
  return (
    <div className="bg-[#f3f3f5] h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[36px] items-center px-[12px] py-[4px] relative w-full">
          <p className="font-['Arial:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">0</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#ffa2a2] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[64px] items-start left-0 top-[76px] w-[134.262px]" data-name="Container">
      <PrimitiveLabel9 />
      <Input5 />
    </div>
  );
}

function PrimitiveLabel10() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#c10007] text-[14px] text-nowrap whitespace-pre">End K.M</p>
    </div>
  );
}

function Input6() {
  return (
    <div className="bg-[#f3f3f5] h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[36px] items-center px-[12px] py-[4px] relative w-full">
          <p className="font-['Arial:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">0</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#ffa2a2] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[64px] items-start left-[146.26px] top-[76px] w-[134.275px]" data-name="Container">
      <PrimitiveLabel10 />
      <Input6 />
    </div>
  );
}

function VehicleExpenseWindow2() {
  return (
    <div className="h-[140px] relative shrink-0 w-full" data-name="VehicleExpenseWindow">
      <Container8 />
      <Container9 />
      <Container10 />
      <Container11 />
    </div>
  );
}

function PrimitiveLabel11() {
  return (
    <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[#c10007] text-[14px] text-nowrap whitespace-pre">Expense</p>
    </div>
  );
}

function Input7() {
  return (
    <div className="bg-[#f3f3f5] h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[36px] items-center px-[12px] py-[4px] relative w-full">
          <p className="font-['Arial:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">0</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#ffa2a2] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function VehicleExpenseWindow3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[58px] items-start relative shrink-0 w-full" data-name="VehicleExpenseWindow">
      <PrimitiveLabel11 />
      <Input7 />
    </div>
  );
}

function CardContent1() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[16px] h-[238px] items-start left-[0.8px] px-[24px] py-0 top-[94.8px] w-[328.538px]" data-name="CardContent">
      <VehicleExpenseWindow2 />
      <VehicleExpenseWindow3 />
    </div>
  );
}

function Card1() {
  return (
    <div className="absolute bg-red-50 h-[333.6px] left-[354.13px] rounded-[14px] top-0 w-[330.138px]" data-name="Card">
      <div aria-hidden="true" className="absolute border-[#ffc9c9] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <CardTitle1 />
      <CardContent1 />
    </div>
  );
}

function PrimitiveLabel12() {
  return (
    <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[#1447e6] text-[14px] text-center text-nowrap whitespace-pre">Balance</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[31.988px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arial:Bold',_sans-serif] leading-[32px] left-[140.39px] not-italic text-[#00a63e] text-[24px] text-center top-[-2px] translate-x-[-50%] w-[62px]">₹0.00</p>
    </div>
  );
}

function VehicleExpenseWindow4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[53.987px] items-start relative shrink-0 w-full" data-name="VehicleExpenseWindow">
      <PrimitiveLabel12 />
      <Container12 />
    </div>
  );
}

function PrimitiveDiv() {
  return <div className="bg-[#bedbff] h-px shrink-0 w-full" data-name="Primitive.div" />;
}

function Button() {
  return (
    <div className="bg-[#00a63e] h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[114.92px] not-italic text-[14px] text-nowrap text-white top-[6.8px] whitespace-pre">SUBMIT</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#8ec5ff] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[108.1px] not-italic text-[#1447e6] text-[14px] text-nowrap top-[6.8px] whitespace-pre">VOUCHER</p>
    </div>
  );
}

function VehicleExpenseWindow5() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[84px] items-start relative shrink-0 w-full" data-name="VehicleExpenseWindow">
      <Button />
      <Button1 />
    </div>
  );
}

function CardContent2() {
  return (
    <div className="h-[218.988px] relative shrink-0 w-[328.525px]" data-name="CardContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[16px] h-[218.988px] items-start pb-0 pt-[24px] px-[24px] relative w-[328.525px]">
        <VehicleExpenseWindow4 />
        <PrimitiveDiv />
        <VehicleExpenseWindow5 />
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div className="absolute bg-blue-50 box-border content-stretch flex flex-col h-[333.6px] items-start left-[708.26px] p-[0.8px] rounded-[14px] top-0 w-[330.125px]" data-name="Card">
      <div aria-hidden="true" className="absolute border-[#bedbff] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <CardContent2 />
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute h-[333.6px] left-[24.8px] top-[140.8px] w-[1038.4px]" data-name="Container">
      <Card />
      <Card1 />
      <Card2 />
    </div>
  );
}

function CardTitle2() {
  return (
    <div className="absolute h-[16px] left-[24.8px] top-[24.8px] w-[988.8px]" data-name="CardTitle">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-0 not-italic text-[#364153] text-[16px] text-nowrap top-[-2.2px] whitespace-pre">Expense Records</p>
    </div>
  );
}

function TableHead() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[66.313px]" data-name="TableHead">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[33.58px] not-italic text-[14px] text-center text-nowrap text-white top-[8.6px] translate-x-[-50%] whitespace-pre">Sno</p>
    </div>
  );
}

function TableHead1() {
  return (
    <div className="absolute h-[40px] left-[66.31px] top-0 w-[89.075px]" data-name="TableHead">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[45.06px] not-italic text-[14px] text-center text-nowrap text-white top-[8.6px] translate-x-[-50%] whitespace-pre">PDate</p>
    </div>
  );
}

function TableHead2() {
  return (
    <div className="absolute h-[40px] left-[155.39px] top-0 w-[102.988px]" data-name="TableHead">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[51.3px] not-italic text-[14px] text-center text-nowrap text-white top-[8.6px] translate-x-[-50%] whitespace-pre">cGroup</p>
    </div>
  );
}

function TableHead3() {
  return (
    <div className="absolute h-[40px] left-[258.38px] top-0 w-[105.325px]" data-name="TableHead">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[53.26px] not-italic text-[14px] text-center text-nowrap text-white top-[8.6px] translate-x-[-50%] whitespace-pre">DRIVER</p>
    </div>
  );
}

function TableHead4() {
  return (
    <div className="absolute h-[40px] left-[363.7px] top-0 w-[166.55px]" data-name="TableHead">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[83.34px] not-italic text-[14px] text-center text-nowrap text-white top-[8.6px] translate-x-[-50%] whitespace-pre">CONDUCTOR</p>
    </div>
  );
}

function TableHead5() {
  return (
    <div className="absolute h-[40px] left-[530.25px] top-0 w-[87.775px]" data-name="TableHead">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[44.3px] not-italic text-[14px] text-center text-nowrap text-white top-[8.6px] translate-x-[-50%] whitespace-pre">Detail</p>
    </div>
  );
}

function TableHead6() {
  return (
    <div className="absolute h-[40px] left-[618.02px] top-0 w-[90.05px]" data-name="TableHead">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[45.25px] not-italic text-[14px] text-center text-nowrap text-white top-[8.6px] translate-x-[-50%] whitespace-pre">BillNo</p>
    </div>
  );
}

function TableHead7() {
  return (
    <div className="absolute h-[40px] left-[708.08px] top-0 w-[115.763px]" data-name="TableHead">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[58.33px] not-italic text-[14px] text-center text-nowrap text-white top-[8.6px] translate-x-[-50%] whitespace-pre">INCOME</p>
    </div>
  );
}

function TableHead8() {
  return (
    <div className="absolute h-[40px] left-[823.84px] top-0 w-[120.725px]" data-name="TableHead">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[61.3px] not-italic text-[14px] text-center text-nowrap text-white top-[8.6px] translate-x-[-50%] whitespace-pre">EXPENSE</p>
    </div>
  );
}

function TableHead9() {
  return (
    <div className="absolute h-[40px] left-[944.56px] top-0 w-[90.638px]" data-name="TableHead">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[44.89px] not-italic text-[14px] text-center text-nowrap text-white top-[8.6px] translate-x-[-50%] whitespace-pre">Status</p>
    </div>
  );
}

function TableRow() {
  return (
    <div className="absolute bg-[#155dfc] h-[40px] left-0 top-0 w-[1035.2px]" data-name="TableRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
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
    </div>
  );
}

function TableHeader() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[1035.2px]" data-name="TableHeader">
      <TableRow />
    </div>
  );
}

function TableCell() {
  return (
    <div className="absolute h-[84.4px] left-0 top-0 w-[1035.2px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[518.56px] not-italic text-[#6a7282] text-[14px] text-center text-nowrap top-[31.2px] translate-x-[-50%] whitespace-pre">No expense records found. Add new entries using the form above.</p>
    </div>
  );
}

function TableRow1() {
  return (
    <div className="absolute h-[84.4px] left-0 top-0 w-[1035.2px]" data-name="TableRow">
      <TableCell />
    </div>
  );
}

function TableBody() {
  return (
    <div className="absolute h-[84.4px] left-0 top-[40px] w-[1035.2px]" data-name="TableBody">
      <TableRow1 />
    </div>
  );
}

function Table() {
  return (
    <div className="h-[124.4px] overflow-clip relative shrink-0 w-full" data-name="Table">
      <TableHeader />
      <TableBody />
    </div>
  );
}

function VehicleExpenseWindow6() {
  return (
    <div className="absolute h-[126px] left-[0.8px] rounded-[10px] top-[70.8px] w-[1036.8px]" data-name="VehicleExpenseWindow">
      <div className="box-border content-stretch flex flex-col h-[126px] items-start overflow-clip p-[0.8px] relative rounded-[inherit] w-[1036.8px]">
        <Table />
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Card3() {
  return (
    <div className="absolute bg-white h-[221.6px] left-[24.8px] rounded-[14px] top-[508.4px] w-[1038.4px]" data-name="Card">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <CardTitle2 />
      <VehicleExpenseWindow6 />
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-[116.838px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center px-[32.8px] py-[8.8px] relative w-[116.838px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#364153] text-[14px] text-nowrap whitespace-pre">UPDATE</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-[106.175px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#ffa2a2] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center px-[32.8px] py-[8.8px] relative w-[106.175px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#c10007] text-[14px] text-nowrap whitespace-pre">CLOSE</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[36px] items-start justify-end left-[24.8px] top-[784px] w-[1038.4px]" data-name="Container">
      <Button2 />
      <Button3 />
    </div>
  );
}

function VehicleExpenseWindow7() {
  return (
    <div className="bg-white h-[844.8px] relative rounded-[10px] shrink-0 w-[1088px]" data-name="VehicleExpenseWindow">
      <div aria-hidden="true" className="absolute border-[0.8px] border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[844.8px] relative w-[1088px]">
        <Container7 />
        <Container13 />
        <Card3 />
        <Container14 />
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="bg-gray-50 content-stretch flex h-[908.8px] items-center justify-center relative shrink-0 w-full" data-name="App">
      <VehicleExpenseWindow7 />
    </div>
  );
}

export default function VehicleExpense() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Vehicle Expense">
      <App />
    </div>
  );
}