import svgPaths from "./svg-v450wudt9t";

function App() {
  return <div className="absolute bg-gray-100 h-[646.4px] left-0 top-0 w-[1167.2px]" data-name="App" />;
}

function PrimitiveLabel() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#364153] text-[14px] text-nowrap whitespace-pre">Registration Number</p>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[#f3f3f5] h-[44px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[44px] items-center px-[12px] py-[4px] relative w-full">
          <p className="font-['Arial:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">0</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[72px] items-start left-0 top-0 w-[530.8px]" data-name="Container">
      <PrimitiveLabel />
      <Input />
    </div>
  );
}

function PrimitiveLabel1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#364153] text-[14px] text-nowrap whitespace-pre">Student Name</p>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-[#f3f3f5] h-[44px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[44px] items-center px-[12px] py-[4px] relative w-full">
          <p className="font-['Arial:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Enter student name</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[72px] items-start left-[554.8px] top-0 w-[530.8px]" data-name="Container">
      <PrimitiveLabel1 />
      <Input1 />
    </div>
  );
}

function StudentBusWindow() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="StudentBusWindow">
      <Container />
      <Container1 />
    </div>
  );
}

function PrimitiveLabel2() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#364153] text-[14px] text-nowrap whitespace-pre">Transport Type</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[3.2px] size-[8px] top-[-4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
        <g clipPath="url(#clip0_4008_8484)" id="Icon">
          <path d={svgPaths.p3e71aa30} fill="var(--fill-0, #030213)" id="Vector" stroke="var(--stroke-0, #030213)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.666667" />
        </g>
        <defs>
          <clipPath id="clip0_4008_8484">
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
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[2.68435e+07px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-[0.8px] pt-[8px] px-[0.8px] relative size-[16px]">
        <PrimitiveSpan />
      </div>
    </div>
  );
}

function PrimitiveLabel3() {
  return (
    <div className="h-[24px] relative shrink-0 w-[25.9px]" data-name="Primitive.label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[24px] items-center relative w-[25.9px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-neutral-950 text-nowrap whitespace-pre">Bus</p>
      </div>
    </div>
  );
}

function StudentBusWindow1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[53.9px]" data-name="StudentBusWindow">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[24px] items-center relative w-[53.9px]">
        <PrimitiveButton />
        <PrimitiveLabel3 />
      </div>
    </div>
  );
}

function PrimitiveButton1() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative rounded-[2.68435e+07px] shrink-0 size-[16px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[2.68435e+07px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[16px]" />
    </div>
  );
}

function PrimitiveLabel4() {
  return (
    <div className="h-[24px] relative shrink-0 w-[46.587px]" data-name="Primitive.label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[24px] items-center relative w-[46.587px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-neutral-950 text-nowrap whitespace-pre">Hostel</p>
      </div>
    </div>
  );
}

function StudentBusWindow2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[74.588px]" data-name="StudentBusWindow">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[24px] items-center relative w-[74.588px]">
        <PrimitiveButton1 />
        <PrimitiveLabel4 />
      </div>
    </div>
  );
}

function PrimitiveDiv() {
  return (
    <div className="content-stretch flex gap-[32px] h-[24px] items-start relative shrink-0 w-full" data-name="Primitive.div">
      <StudentBusWindow1 />
      <StudentBusWindow2 />
    </div>
  );
}

function StudentBusWindow3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[60px] items-start relative shrink-0 w-full" data-name="StudentBusWindow">
      <PrimitiveLabel2 />
      <PrimitiveDiv />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#155dfc] h-[36px] relative rounded-[8px] shrink-0 w-[96.475px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center px-[32px] py-[10px] relative w-[96.475px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">SAVE</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-[106.175px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center px-[32.8px] py-[10.8px] relative w-[106.175px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#364153] text-[14px] text-nowrap whitespace-pre">CLOSE</p>
      </div>
    </div>
  );
}

function StudentBusWindow4() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="StudentBusWindow">
      <div className="flex flex-row justify-center size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[60px] items-start justify-center pb-0 pt-[24px] px-0 relative w-full">
          <Button />
          <Button1 />
        </div>
      </div>
    </div>
  );
}

function CardContent() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[32px] h-[280px] items-start left-[0.8px] px-[24px] py-0 top-[110.8px] w-[1133.6px]" data-name="CardContent">
      <StudentBusWindow />
      <StudentBusWindow3 />
      <StudentBusWindow4 />
    </div>
  );
}

function CardTitle() {
  return (
    <div className="h-[28px] relative shrink-0 w-[267.763px]" data-name="CardTitle">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[267.763px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[28px] left-0 not-italic text-[20px] text-neutral-950 text-nowrap top-[-2.2px] whitespace-pre">Student Transport Registration</p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M12 4L4 12" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M4 4L12 12" id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[32px]">
        <Icon1 />
      </div>
    </div>
  );
}

function StudentBusWindow5() {
  return (
    <div className="absolute content-stretch flex h-[32px] items-center justify-between left-[24.8px] top-[24.8px] w-[1085.6px]" data-name="StudentBusWindow">
      <CardTitle />
      <Button2 />
    </div>
  );
}

function Card() {
  return (
    <div className="bg-white h-[391.6px] relative rounded-[14px] shrink-0 w-[1135.2px]" data-name="Card">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[391.6px] relative w-[1135.2px]">
        <CardContent />
        <StudentBusWindow5 />
      </div>
    </div>
  );
}

function StudentBusWindow6() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.5)] content-stretch flex h-[646.4px] items-center justify-center left-0 top-0 w-[1167.2px]" data-name="StudentBusWindow">
      <Card />
    </div>
  );
}

export default function StudentBus() {
  return (
    <div className="bg-white relative size-full" data-name="Student Bus">
      <App />
      <StudentBusWindow6 />
    </div>
  );
}