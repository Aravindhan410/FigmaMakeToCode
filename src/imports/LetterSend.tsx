import svgPaths from "./svg-dd9jwle0us";

function Heading1() {
  return (
    <div className="h-[31.988px] relative shrink-0 w-[309.4px]" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[31.988px] items-start relative w-[309.4px]">
        <p className="font-['Arial:Bold',_sans-serif] leading-[32px] not-italic relative shrink-0 text-[#101828] text-[24px] text-nowrap whitespace-pre">Administration / Send Letter</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[10.8px] size-[16px] top-[8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M12 4L4 12" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M4 4L12 12" id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white h-[32px] relative rounded-[8px] shrink-0 w-[86.175px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[32px] relative w-[86.175px]">
        <Icon />
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[34.8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[4.8px] whitespace-pre">CLOSE</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <Button />
    </div>
  );
}

function CardTitle() {
  return (
    <div className="absolute h-[28px] left-[24.8px] top-[24.8px] w-[1054.4px]" data-name="CardTitle">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[28px] left-0 not-italic text-[18px] text-neutral-950 text-nowrap top-[-1.4px] whitespace-pre">Letter Details</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-0 size-[16px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M5.33333 1.33333V4" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 1.33333V4" id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3ee34580} id="Vector_3" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 6.66667H14" id="Vector_4" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M5.33333 9.33333H5.34" id="Vector_5" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 9.33333H8.00667" id="Vector_6" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 9.33333H10.6733" id="Vector_7" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M5.33333 12H5.34" id="Vector_8" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 12H8.00667" id="Vector_9" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 12H10.6733" id="Vector_10" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function PrimitiveLabel() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Primitive.label">
      <Icon1 />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[14px] left-[24px] not-italic text-[14px] text-neutral-950 text-nowrap top-[-0.4px] whitespace-pre">Date</p>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[36px] items-center px-[12px] py-[4px] relative w-full">
          <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">06-Oct-2025</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[60px] items-start left-0 top-0 w-[335.462px]" data-name="Container">
      <PrimitiveLabel />
      <Input />
    </div>
  );
}

function PrimitiveLabel1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">To</p>
    </div>
  );
}

function PrimitiveSpan() {
  return (
    <div className="h-[20px] relative shrink-0 w-[94.175px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[20px] items-center overflow-clip relative rounded-[inherit] w-[94.175px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Select recipient</p>
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

function PrimitiveButton() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[36px] items-center justify-between px-[12.8px] py-[0.8px] relative w-full">
          <PrimitiveSpan />
          <Icon2 />
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[60px] items-start left-[359.46px] top-0 w-[335.462px]" data-name="Container">
      <PrimitiveLabel1 />
      <PrimitiveButton />
    </div>
  );
}

function PrimitiveLabel2() {
  return (
    <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Type of Post</p>
    </div>
  );
}

function PrimitiveSpan1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[98.55px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[20px] items-center overflow-clip relative rounded-[inherit] w-[98.55px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Select post type</p>
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

function PrimitiveButton1() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[36px] items-center justify-between px-[12.8px] py-[0.8px] relative w-full">
          <PrimitiveSpan1 />
          <Icon3 />
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[60px] items-start left-[718.92px] top-0 w-[335.475px]" data-name="Container">
      <PrimitiveLabel2 />
      <PrimitiveButton1 />
    </div>
  );
}

function PrimitiveLabel3() {
  return (
    <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Address</p>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[36px] items-center px-[12px] py-[4px] relative w-full">
          <p className="font-['Arial:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Enter address</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[58px] items-start left-0 top-[84px] w-[335.462px]" data-name="Container">
      <PrimitiveLabel3 />
      <Input1 />
    </div>
  );
}

function PrimitiveLabel4() {
  return (
    <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Cost</p>
    </div>
  );
}

function Input2() {
  return (
    <div className="basis-0 bg-white grow h-[36px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[36px] items-center px-[12px] py-[4px] relative w-full">
          <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">0</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function PrimitiveSpan2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[7.55px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[20px] items-center overflow-clip relative rounded-[inherit] w-[7.55px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">₹</p>
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

function PrimitiveButton2() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-[80px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[36px] items-center justify-between px-[12.8px] py-[0.8px] relative w-[80px]">
        <PrimitiveSpan2 />
        <Icon4 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[8px] h-[36px] items-start relative shrink-0 w-full" data-name="Container">
      <Input2 />
      <PrimitiveButton2 />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[58px] items-start left-[359.46px] top-[84px] w-[335.462px]" data-name="Container">
      <PrimitiveLabel4 />
      <Container5 />
    </div>
  );
}

function PrimitiveLabel5() {
  return (
    <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Message</p>
    </div>
  );
}

function Textarea() {
  return (
    <div className="bg-white h-[100px] relative rounded-[8px] shrink-0 w-full" data-name="Textarea">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[100px] items-start px-[12px] py-[8px] relative w-full">
          <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Enter your message here...</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[122px] items-start left-0 top-[166px] w-[1054.4px]" data-name="Container">
      <PrimitiveLabel5 />
      <Textarea />
    </div>
  );
}

function App() {
  return (
    <div className="h-[288px] relative shrink-0 w-full" data-name="App">
      <Container1 />
      <Container2 />
      <Container3 />
      <Container4 />
      <Container6 />
      <Container7 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="absolute left-[12.8px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p12949080} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 2V5.33333H5.33333" id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-[100.838px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[36px] relative w-[100.838px]">
        <Icon5 />
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[36.8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[6.8px] whitespace-pre">UPDATE</p>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="absolute left-[12px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_4008_5055)" id="Icon">
          <path d={svgPaths.p9b47a00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p15e62a80} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_4008_5055">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#155dfc] h-[36px] relative rounded-[8px] shrink-0 w-[83.65px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[36px] relative w-[83.65px]">
        <Icon6 />
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[36px] not-italic text-[14px] text-nowrap text-white top-[6.8px] whitespace-pre">SEND</p>
      </div>
    </div>
  );
}

function App1() {
  return (
    <div className="h-[52.8px] relative shrink-0 w-full" data-name="App">
      <div aria-hidden="true" className="absolute border-[0.8px_0px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row justify-end size-full">
        <div className="box-border content-stretch flex gap-[12px] h-[52.8px] items-start justify-end pb-0 pt-[16.8px] px-0 relative w-full">
          <Button1 />
          <Button2 />
        </div>
      </div>
    </div>
  );
}

function CardContent() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[24px] h-[388.8px] items-start left-[0.8px] px-[24px] py-0 top-[98.8px] w-[1102.4px]" data-name="CardContent">
      <App />
      <App1 />
    </div>
  );
}

function Card() {
  return (
    <div className="bg-white h-[488.4px] relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <CardTitle />
      <CardContent />
    </div>
  );
}

function CardTitle1() {
  return (
    <div className="h-[28px] relative shrink-0 w-[1054.4px]" data-name="CardTitle">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[1054.4px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[28px] left-0 not-italic text-[18px] text-neutral-950 text-nowrap top-[-1.4px] whitespace-pre">Sent Letters</p>
      </div>
    </div>
  );
}

function TableHead() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[64px]" data-name="TableHead">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.6px] whitespace-pre">Sno</p>
    </div>
  );
}

function TableHead1() {
  return (
    <div className="absolute h-[40px] left-[64px] top-0 w-[183.538px]" data-name="TableHead">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.6px] whitespace-pre">Date</p>
    </div>
  );
}

function TableHead2() {
  return (
    <div className="absolute h-[40px] left-[247.54px] top-0 w-[161.025px]" data-name="TableHead">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.6px] whitespace-pre">To</p>
    </div>
  );
}

function TableHead3() {
  return (
    <div className="absolute h-[40px] left-[408.56px] top-0 w-[180.9px]" data-name="TableHead">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.6px] whitespace-pre">Message</p>
    </div>
  );
}

function TableHead4() {
  return (
    <div className="absolute h-[40px] left-[589.46px] top-0 w-[210.125px]" data-name="TableHead">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.6px] whitespace-pre">Type of Post</p>
    </div>
  );
}

function TableHead5() {
  return (
    <div className="absolute h-[40px] left-[799.59px] top-0 w-[149.713px]" data-name="TableHead">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.6px] whitespace-pre">Address</p>
    </div>
  );
}

function TableHead6() {
  return (
    <div className="absolute h-[40px] left-[949.3px] top-0 w-[103.5px]" data-name="TableHead">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[96.34px] not-italic text-[14px] text-neutral-950 text-nowrap text-right top-[8.6px] translate-x-[-100%] whitespace-pre">Cost</p>
    </div>
  );
}

function TableRow() {
  return (
    <div className="absolute bg-blue-50 h-[40px] left-0 top-0 w-[1052.8px]" data-name="TableRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
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
    <div className="absolute h-[40px] left-0 top-0 w-[1052.8px]" data-name="TableHeader">
      <TableRow />
    </div>
  );
}

function TableCell() {
  return (
    <div className="absolute h-[38.788px] left-0 top-0 w-[64px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.19px] whitespace-pre">1</p>
    </div>
  );
}

function TableCell1() {
  return (
    <div className="absolute h-[38.788px] left-[64px] top-0 w-[183.538px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.19px] whitespace-pre">25-Mar-23</p>
    </div>
  );
}

function Badge() {
  return (
    <div className="absolute bg-[#ffedd4] h-[21.587px] left-[8px] rounded-[8px] top-[8.8px] w-[55.9px]" data-name="Badge">
      <div className="h-[21.587px] overflow-clip relative rounded-[inherit] w-[55.9px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[8.8px] not-italic text-[#9f2d00] text-[12px] text-nowrap top-[1.8px] whitespace-pre">OFFICE</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell2() {
  return (
    <div className="absolute h-[38.788px] left-[247.54px] top-0 w-[161.025px]" data-name="TableCell">
      <Badge />
    </div>
  );
}

function TableCell3() {
  return (
    <div className="absolute h-[38.788px] left-[408.56px] top-0 w-[180.9px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.19px] whitespace-pre">EXPIRED</p>
    </div>
  );
}

function Badge1() {
  return (
    <div className="absolute h-[21.587px] left-[8px] rounded-[8px] top-[8.8px] w-[52.188px]" data-name="Badge">
      <div className="h-[21.587px] overflow-clip relative rounded-[inherit] w-[52.188px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[8.8px] not-italic text-[#1447e6] text-[12px] text-nowrap top-[1.8px] whitespace-pre">SPEED</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#bedbff] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell4() {
  return (
    <div className="absolute h-[38.788px] left-[589.46px] top-0 w-[210.125px]" data-name="TableCell">
      <Badge1 />
    </div>
  );
}

function TableCell5() {
  return (
    <div className="absolute h-[38.788px] left-[799.59px] top-0 w-[149.713px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.19px] whitespace-pre">ERODE</p>
    </div>
  );
}

function TableCell6() {
  return (
    <div className="absolute h-[38.788px] left-[949.3px] top-0 w-[103.5px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[95.85px] not-italic text-[14px] text-neutral-950 text-right top-[8.19px] translate-x-[-100%] w-[23px]">₹50</p>
    </div>
  );
}

function TableRow1() {
  return (
    <div className="absolute h-[38.788px] left-0 top-0 w-[1052.8px]" data-name="TableRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
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

function TableCell7() {
  return (
    <div className="absolute h-[38.388px] left-0 top-0 w-[64px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.19px] whitespace-pre">3</p>
    </div>
  );
}

function TableCell8() {
  return (
    <div className="absolute h-[38.388px] left-[64px] top-0 w-[183.538px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.19px] whitespace-pre">10-Jul-25</p>
    </div>
  );
}

function Badge2() {
  return (
    <div className="absolute bg-[#ffedd4] h-[21.587px] left-[8px] rounded-[8px] top-[8.8px] w-[55.9px]" data-name="Badge">
      <div className="h-[21.587px] overflow-clip relative rounded-[inherit] w-[55.9px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[8.8px] not-italic text-[#9f2d00] text-[12px] text-nowrap top-[1.8px] whitespace-pre">OFFICE</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell9() {
  return (
    <div className="absolute h-[38.388px] left-[247.54px] top-0 w-[161.025px]" data-name="TableCell">
      <Badge2 />
    </div>
  );
}

function TableCell10() {
  return (
    <div className="absolute h-[38.388px] left-[408.56px] top-0 w-[180.9px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.19px] whitespace-pre">WELCOME</p>
    </div>
  );
}

function Badge3() {
  return (
    <div className="absolute h-[21.587px] left-[8px] rounded-[8px] top-[8.8px] w-[52.188px]" data-name="Badge">
      <div className="h-[21.587px] overflow-clip relative rounded-[inherit] w-[52.188px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[8.8px] not-italic text-[#1447e6] text-[12px] text-nowrap top-[1.8px] whitespace-pre">SPEED</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#bedbff] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell11() {
  return (
    <div className="absolute h-[38.388px] left-[589.46px] top-0 w-[210.125px]" data-name="TableCell">
      <Badge3 />
    </div>
  );
}

function TableCell12() {
  return (
    <div className="absolute h-[38.388px] left-[799.59px] top-0 w-[149.713px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.19px] whitespace-pre">ERODE</p>
    </div>
  );
}

function TableCell13() {
  return (
    <div className="absolute h-[38.388px] left-[949.3px] top-0 w-[103.5px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[96.3px] not-italic text-[14px] text-neutral-950 text-right top-[8.19px] translate-x-[-100%] w-[31px]">₹100</p>
    </div>
  );
}

function TableRow2() {
  return (
    <div className="absolute h-[38.388px] left-0 top-[38.79px] w-[1052.8px]" data-name="TableRow">
      <TableCell7 />
      <TableCell8 />
      <TableCell9 />
      <TableCell10 />
      <TableCell11 />
      <TableCell12 />
      <TableCell13 />
    </div>
  );
}

function TableBody() {
  return (
    <div className="absolute h-[77.175px] left-0 top-[40px] w-[1052.8px]" data-name="TableBody">
      <TableRow1 />
      <TableRow2 />
    </div>
  );
}

function Table() {
  return (
    <div className="h-[117.175px] overflow-clip relative shrink-0 w-full" data-name="Table">
      <TableHeader />
      <TableBody />
    </div>
  );
}

function App2() {
  return (
    <div className="bg-white h-[118.775px] relative rounded-[8px] shrink-0 w-[1054.4px]" data-name="App">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[118.775px] items-start p-[0.8px] relative w-[1054.4px]">
        <Table />
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="bg-white h-[242.375px] relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[46px] h-[242.375px] items-start pb-[0.8px] pl-[24.8px] pr-[0.8px] pt-[24.8px] relative w-full">
          <CardTitle1 />
          <App2 />
        </div>
      </div>
    </div>
  );
}

function App3() {
  return (
    <div className="bg-gray-50 content-stretch flex flex-col gap-[24px] h-[810.775px] items-start relative shrink-0 w-full" data-name="App">
      <Container />
      <Card />
      <Card1 />
    </div>
  );
}

export default function LetterSend() {
  return (
    <div className="bg-white relative size-full" data-name="Letter / Send">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start pb-0 pt-[24px] px-[24px] relative size-full">
          <App3 />
        </div>
      </div>
    </div>
  );
}