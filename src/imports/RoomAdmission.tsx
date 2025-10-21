import svgPaths from "./svg-v3xuzvxda3";

function PrimitiveLabel() {
  return (
    <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[#314158] text-[14px] text-nowrap whitespace-pre">Allocation Type</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[3.2px] size-[8px] top-[-4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
        <g clipPath="url(#clip0_4020_1713)" id="Icon">
          <path d={svgPaths.p3e71aa30} fill="var(--fill-0, #030213)" id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.666667" />
        </g>
        <defs>
          <clipPath id="clip0_4020_1713">
            <rect fill="white" height="8" width="8" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function PrimitiveSpan() {
  return (
    <div className="h-0 relative shrink-0 w-full" data-name="Primitive.span">
      <Icon />
    </div>
  );
}

function PrimitiveButton() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative rounded-[2.68435e+07px] shrink-0 size-[16px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[2.68435e+07px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-[0.8px] pt-[8px] px-[0.8px] relative size-[16px]">
        <PrimitiveSpan />
      </div>
    </div>
  );
}

function PrimitiveLabel1() {
  return (
    <div className="h-[14px] relative shrink-0 w-[51.388px]" data-name="Primitive.label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[14px] items-center relative w-[51.388px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[#314158] text-[14px] text-nowrap whitespace-pre">Allocate</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="h-[16px] relative shrink-0 w-[75.388px]" data-name="App">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[16px] items-center relative w-[75.388px]">
        <PrimitiveButton />
        <PrimitiveLabel1 />
      </div>
    </div>
  );
}

function PrimitiveButton1() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative rounded-[2.68435e+07px] shrink-0 size-[16px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[2.68435e+07px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[16px]" />
    </div>
  );
}

function PrimitiveLabel2() {
  return (
    <div className="h-[14px] relative shrink-0 w-[41.575px]" data-name="Primitive.label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[14px] items-center relative w-[41.575px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[#314158] text-[14px] text-nowrap whitespace-pre">Vacate</p>
      </div>
    </div>
  );
}

function App1() {
  return (
    <div className="h-[16px] relative shrink-0 w-[65.575px]" data-name="App">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[16px] items-center relative w-[65.575px]">
        <PrimitiveButton1 />
        <PrimitiveLabel2 />
      </div>
    </div>
  );
}

function PrimitiveDiv() {
  return (
    <div className="content-stretch flex gap-[24px] h-[16px] items-start relative shrink-0 w-full" data-name="Primitive.div">
      <App />
      <App1 />
    </div>
  );
}

function Container() {
  return (
    <div className="h-[42px] relative shrink-0 w-[164.963px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[12px] h-[42px] items-start relative w-[164.963px]">
        <PrimitiveLabel />
        <PrimitiveDiv />
      </div>
    </div>
  );
}

function PrimitiveLabel3() {
  return (
    <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[#314158] text-[14px] text-nowrap whitespace-pre">Date</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[12.8px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M5.33333 1.33333V4" id="Vector" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 1.33333V4" id="Vector_2" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3ee34580} id="Vector_3" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 6.66667H14" id="Vector_4" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#cad5e2] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Icon1 />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[44.8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[6.8px] whitespace-pre">07-Oct-2025</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[62px] relative shrink-0 w-[192px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[12px] h-[62px] items-start relative w-[192px]">
        <PrimitiveLabel3 />
        <Button />
      </div>
    </div>
  );
}

function App2() {
  return (
    <div className="h-[62px] relative shrink-0 w-full" data-name="App">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex h-[62px] items-center justify-between relative w-full">
          <Container />
          <Container1 />
        </div>
      </div>
    </div>
  );
}

function PrimitiveLabel4() {
  return (
    <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[#314158] text-[14px] text-nowrap whitespace-pre">Block Name</p>
    </div>
  );
}

function PrimitiveSpan1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[73.775px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[20px] items-center overflow-clip relative rounded-[inherit] w-[73.775px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Select block</p>
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

function PrimitiveButton2() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[#cad5e2] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[36px] items-center justify-between px-[12.8px] py-[0.8px] relative w-full">
          <PrimitiveSpan1 />
          <Icon2 />
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[62px] items-start left-0 top-0 w-[523.6px]" data-name="Container">
      <PrimitiveLabel4 />
      <PrimitiveButton2 />
    </div>
  );
}

function PrimitiveLabel5() {
  return (
    <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[#314158] text-[14px] text-nowrap whitespace-pre">Room Name</p>
    </div>
  );
}

function PrimitiveSpan2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[73.85px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[20px] items-center overflow-clip relative rounded-[inherit] w-[73.85px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Select room</p>
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

function PrimitiveButton3() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[#cad5e2] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[36px] items-center justify-between px-[12.8px] py-[0.8px] relative w-full">
          <PrimitiveSpan2 />
          <Icon3 />
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[62px] items-start left-[547.6px] top-0 w-[523.6px]" data-name="Container">
      <PrimitiveLabel5 />
      <PrimitiveButton3 />
    </div>
  );
}

function PrimitiveLabel6() {
  return (
    <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[#314158] text-[14px] text-nowrap whitespace-pre">Registration No</p>
    </div>
  );
}

function PrimitiveSpan3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[163.438px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[20px] items-center overflow-clip relative rounded-[inherit] w-[163.438px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Select registration number</p>
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

function PrimitiveButton4() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[#cad5e2] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[36px] items-center justify-between px-[12.8px] py-[0.8px] relative w-full">
          <PrimitiveSpan3 />
          <Icon4 />
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[62px] items-start left-0 top-[94px] w-[523.6px]" data-name="Container">
      <PrimitiveLabel6 />
      <PrimitiveButton4 />
    </div>
  );
}

function PrimitiveLabel7() {
  return (
    <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[#314158] text-[14px] text-nowrap whitespace-pre">Student Name</p>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[36px] items-center px-[12px] py-[4px] relative w-full">
          <p className="font-['Arial:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#90a1b9] text-[14px] text-nowrap whitespace-pre">Enter student name</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#cad5e2] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[62px] items-start left-[547.6px] top-[94px] w-[523.6px]" data-name="Container">
      <PrimitiveLabel7 />
      <Input />
    </div>
  );
}

function App3() {
  return (
    <div className="h-[156px] relative shrink-0 w-full" data-name="App">
      <Container2 />
      <Container3 />
      <Container4 />
      <Container5 />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-[106.175px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#cad5e2] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center px-[32.8px] py-[8.8px] relative w-[106.175px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#314158] text-[14px] text-nowrap whitespace-pre">CLOSE</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#155dfc] h-[36px] relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0 w-[96.475px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center px-[32px] py-[8px] relative w-[96.475px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">SAVE</p>
      </div>
    </div>
  );
}

function App4() {
  return (
    <div className="h-[60.8px] relative shrink-0 w-full" data-name="App">
      <div aria-hidden="true" className="absolute border-[0.8px_0px_0px] border-slate-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row justify-end size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[60.8px] items-start justify-end pb-0 pt-[24.8px] px-0 relative w-full">
          <Button1 />
          <Button2 />
        </div>
      </div>
    </div>
  );
}

function CardContent() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[32px] h-[366.8px] items-start left-0 px-[24px] py-0 top-[109.99px] w-[1119.2px]" data-name="CardContent">
      <App2 />
      <App3 />
      <App4 />
    </div>
  );
}

function Card() {
  return (
    <div className="bg-[rgba(255,255,255,0.8)] h-[476.788px] relative rounded-[14px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] shrink-0 w-[1119.2px]" data-name="Card">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[476.788px] relative w-[1119.2px]">
        <CardContent />
      </div>
    </div>
  );
}

export default function RoomAdmission() {
  return (
    <div className="content-stretch flex items-center justify-center relative size-full" data-name="Room Admission" style={{ backgroundImage: "linear-gradient(150.675deg, rgb(248, 250, 252) 0%, rgb(241, 245, 249) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <Card />
    </div>
  );
}