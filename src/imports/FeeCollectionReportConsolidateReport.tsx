import svgPaths from "./svg-kislopp5fb";
import { imgVector } from "./svg-te1xe";

function Container() {
  return <div className="bg-gradient-to-r from-[#155dfc] h-[24px] shrink-0 to-[#1447e6] w-full" data-name="Container" />;
}

function PrimitiveLabel() {
  return (
    <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Academic</p>
    </div>
  );
}

function PrimitiveSpan() {
  return (
    <div className="h-[20px] relative shrink-0 w-[66.612px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[20px] items-center overflow-clip relative rounded-[inherit] w-[66.612px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Select year</p>
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
    <div className="bg-[#f3f3f5] h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[36px] items-center justify-between px-[12.8px] py-[0.8px] relative w-full">
          <PrimitiveSpan />
          <Icon />
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[58px] items-start left-0 top-0 w-[162.4px]" data-name="Container">
      <PrimitiveLabel />
      <PrimitiveButton />
    </div>
  );
}

function PrimitiveLabel1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Course</p>
    </div>
  );
}

function PrimitiveSpan1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[81.25px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[20px] items-center overflow-clip relative rounded-[inherit] w-[81.25px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Select course</p>
      </div>
    </div>
  );
}

function Icon11() {
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
    <div className="bg-[#f3f3f5] h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[36px] items-center justify-between px-[12.8px] py-[0.8px] relative w-full">
          <PrimitiveSpan1 />
          <Icon11 />
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[58px] items-start left-[178.4px] top-0 w-[162.4px]" data-name="Container">
      <PrimitiveLabel1 />
      <PrimitiveButton1 />
    </div>
  );
}

function PrimitiveLabel2() {
  return (
    <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Sem</p>
    </div>
  );
}

function PrimitiveSpan2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[96.037px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[20px] items-center overflow-clip relative rounded-[inherit] w-[96.037px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Select semester</p>
      </div>
    </div>
  );
}

function Icon12() {
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
    <div className="bg-[#f3f3f5] h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[36px] items-center justify-between px-[12.8px] py-[0.8px] relative w-full">
          <PrimitiveSpan2 />
          <Icon12 />
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[58px] items-start left-[356.8px] top-0 w-[162.4px]" data-name="Container">
      <PrimitiveLabel2 />
      <PrimitiveButton2 />
    </div>
  );
}

function PrimitiveLabel3() {
  return (
    <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Roll No</p>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[#f3f3f5] h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[36px] items-center px-[12px] py-[4px] relative w-full">
          <p className="font-['Arial:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Enter roll number</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[58px] items-start left-[535.2px] top-0 w-[162.4px]" data-name="Container">
      <PrimitiveLabel3 />
      <Input />
    </div>
  );
}

function PrimitiveLabel4() {
  return (
    <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Student Name</p>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-[#f3f3f5] h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[36px] items-center px-[12px] py-[4px] relative w-full">
          <p className="font-['Arial:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Enter student name</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[58px] items-start left-[713.6px] top-0 w-[162.4px]" data-name="Container">
      <PrimitiveLabel4 />
      <Input1 />
    </div>
  );
}

function PrimitiveLabel5() {
  return (
    <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Fee Type</p>
    </div>
  );
}

function PrimitiveSpan3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[90.45px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[20px] items-center overflow-clip relative rounded-[inherit] w-[90.45px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Select fee type</p>
      </div>
    </div>
  );
}

function Icon13() {
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
    <div className="bg-[#f3f3f5] h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[36px] items-center justify-between px-[12.8px] py-[0.8px] relative w-full">
          <PrimitiveSpan3 />
          <Icon13 />
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[58px] items-start left-[892px] top-0 w-[162.4px]" data-name="Container">
      <PrimitiveLabel5 />
      <PrimitiveButton3 />
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[58px] relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Container2 />
      <Container3 />
      <Container4 />
      <Container5 />
      <Container6 />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#155dfc] box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center left-0 px-[16px] py-[8px] rounded-[8px] top-[8px] w-[107.1px]" data-name="Button">
      <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">Consolidate</p>
    </div>
  );
}

function Button11() {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center left-[119.1px] px-[16.8px] py-[8.8px] rounded-[8px] top-[8px] w-[97.737px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">SEM WISE</p>
    </div>
  );
}

function Button12() {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center left-[228.84px] px-[16.8px] py-[8.8px] rounded-[8px] top-[8px] w-[64.275px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">View</p>
    </div>
  );
}

function Button13() {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center left-[305.11px] px-[16.8px] py-[8.8px] rounded-[8px] top-[8px] w-[67.787px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Close</p>
    </div>
  );
}

function Button14() {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[8px] h-[36px] items-center justify-center left-[990.55px] px-[16.8px] py-[8.8px] rounded-[8px] top-[8px] w-[63.85px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Print</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="Container">
      <Button />
      <Button11 />
      <Button12 />
      <Button13 />
      <Button14 />
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute h-[64px] left-0 top-0 w-[1054.4px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.8px_0px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Icon14() {
  return (
    <div className="absolute contents inset-[8.333%]" data-name="Icon">
      <div className="absolute bottom-1/4 left-[8.33%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1.333px_-6px] mask-size-[16px_16px] right-[8.33%] top-[37.5%]" data-name="Vector" style={{ maskImage: `url('${imgVector}')` }}>
        <div className="absolute inset-[-11.11%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 8">
            <path d={svgPaths.p2aaf7580} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[62.5%] left-1/4 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-4px_-1.333px] mask-size-[16px_16px] right-1/4 top-[8.33%]" data-name="Vector_2" style={{ maskImage: `url('${imgVector}')` }}>
        <div className="absolute inset-[-14.29%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 7">
            <path d={svgPaths.p1c5c0c80} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[8.33%] left-1/4 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-4px_-9.333px] mask-size-[16px_16px] right-1/4 top-[58.33%]" data-name="Vector_3" style={{ maskImage: `url('${imgVector}')` }}>
        <div className="absolute inset-[-12.5%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 7">
            <path d={svgPaths.p915180} id="Vector_3" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Icon14 />
    </div>
  );
}

function Icon15() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <ClipPathGroup />
    </div>
  );
}

function Icon16() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[8px] size-[16px] top-[8px]" data-name="Icon">
      <Icon15 />
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute left-0 rounded-[8px] size-[32px] top-[16.8px]" data-name="Button2">
      <Icon16 />
    </div>
  );
}

function Icon17() {
  return (
    <div className="absolute contents inset-[12.5%]" data-name="Icon">
      <div className="absolute inset-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d={svgPaths.pad60500} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[54.17%_29.17%_12.5%_29.17%]" data-name="Vector_2">
        <div className="absolute inset-[-12.5%_-10%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 7">
            <path d={svgPaths.p35a66500} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%_37.5%_66.67%_29.17%]" data-name="Vector_3">
        <div className="absolute inset-[-20%_-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 5">
            <path d={svgPaths.p174dca80} id="Vector_3" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon18() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Icon17 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[8px] size-[16px] top-[8px]" data-name="Icon1">
      <Icon18 />
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute left-[36px] rounded-[8px] size-[32px] top-[16.8px]" data-name="Button1">
      <Icon1 />
    </div>
  );
}

function Icon19() {
  return (
    <div className="absolute contents inset-[8.333%]" data-name="Icon">
      <div className="absolute inset-[33.33%_8.33%_8.33%_33.33%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-5.333px] mask-size-[16px_16px]" data-name="Vector" style={{ maskImage: `url('${imgVector}')` }}>
        <div className="absolute inset-[-7.143%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
            <path d={svgPaths.p2674eb80} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%_33.33%_33.33%_8.33%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1.333px] mask-size-[16px_16px]" data-name="Vector_2" style={{ maskImage: `url('${imgVector}')` }}>
        <div className="absolute inset-[-7.143%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
            <path d={svgPaths.p134b3fa0} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ClipPathGroup1() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Icon19 />
    </div>
  );
}

function Icon20() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <ClipPathGroup1 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[8px] size-[16px] top-[8px]" data-name="Icon2">
      <Icon20 />
    </div>
  );
}

function Button22() {
  return (
    <div className="absolute left-[72px] rounded-[8px] size-[32px] top-[16.8px]" data-name="Button22">
      <Icon2 />
    </div>
  );
}

function Icon21() {
  return (
    <div className="absolute contents inset-[16.67%_8.33%]" data-name="Icon">
      <div className="absolute inset-[29.17%_8.33%_45.84%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-16.68%_-5%_-16.67%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 6">
            <path d={svgPaths.p31c4f380} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[16.67%_8.33%]" data-name="Vector_2">
        <div className="absolute inset-[-6.25%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 13">
            <path d={svgPaths.p3ece6300} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon22() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Icon21 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[8px] size-[16px] top-[8px]" data-name="Icon3">
      <Icon22 />
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute left-[108px] rounded-[8px] size-[32px] top-[16.8px]" data-name="Button3">
      <Icon3 />
    </div>
  );
}

function PrimitiveDiv() {
  return <div className="absolute bg-[rgba(0,0,0,0.1)] h-0 left-[148px] top-[32.8px] w-px" data-name="PrimitiveDiv" />;
}

function Icon23() {
  return (
    <div className="absolute contents inset-[20.833%]" data-name="Icon">
      <div className="absolute bottom-[20.83%] left-[20.83%] right-1/2 top-[20.83%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-14.29%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 11">
            <path d={svgPaths.p2548680} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2" data-name="Vector_2">
        <div className="absolute inset-[-0.67px_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 2">
            <path d="M10.3334 1H1" id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon24() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Icon23 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[8px] size-[16px] top-[8px]" data-name="Icon4">
      <Icon24 />
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute left-[157px] rounded-[8px] size-[32px] top-[16.8px]" data-name="Button4">
      <Icon4 />
    </div>
  );
}

function Icon25() {
  return (
    <div className="absolute contents inset-[20.833%]" data-name="Icon">
      <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.67px_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 2">
            <path d="M1 1H10.3334" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[20.83%] left-1/2 right-[20.83%] top-[20.83%]" data-name="Vector_2">
        <div className="absolute inset-[-7.14%_-14.29%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 11">
            <path d={svgPaths.p33e8fb00} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon26() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Icon25 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[8px] size-[16px] top-[8px]" data-name="Icon5">
      <Icon26 />
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute left-[193px] rounded-[8px] size-[32px] top-[16.8px]" data-name="Button5">
      <Icon5 />
    </div>
  );
}

function PrimitiveDiv1() {
  return <div className="absolute bg-[rgba(0,0,0,0.1)] h-0 left-[233px] top-[32.8px] w-px" data-name="PrimitiveDiv1" />;
}

function Icon27() {
  return (
    <div className="absolute contents inset-[12.5%]" data-name="Icon">
      <div className="absolute inset-[12.5%_20.83%_20.83%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
            <path d={svgPaths.p2d9d1f00} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[69.38%_12.5%_12.5%_69.38%]" data-name="Vector_2">
        <div className="absolute inset-[-22.988%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
            <path d="M3.9 3.9L1 1" id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[45.83%_41.67%_54.17%_33.33%]" data-name="Vector_3">
        <div className="absolute inset-[-0.67px_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 2">
            <path d="M1 1H5" id="Vector_3" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon28() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Icon27 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[8px] size-[16px] top-[8px]" data-name="Icon6">
      <Icon28 />
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute left-[242px] rounded-[8px] size-[32px] top-[16.8px]" data-name="Button6">
      <Icon6 />
    </div>
  );
}

function Icon29() {
  return (
    <div className="absolute contents inset-[12.5%]" data-name="Icon">
      <div className="absolute inset-[12.5%_20.83%_20.83%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
            <path d={svgPaths.p2d9d1f00} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[69.38%_12.5%_12.5%_69.38%]" data-name="Vector_2">
        <div className="absolute inset-[-22.988%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
            <path d="M3.9 3.9L1 1" id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[33.33%_54.17%_41.67%_45.83%]" data-name="Vector_3">
        <div className="absolute inset-[-16.67%_-0.67px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 6">
            <path d="M1 1V5" id="Vector_3" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[45.83%_41.67%_54.17%_33.33%]" data-name="Vector_4">
        <div className="absolute inset-[-0.67px_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 2">
            <path d="M1 1H5" id="Vector_3" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon30() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Icon29 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[8px] size-[16px] top-[8px]" data-name="Icon7">
      <Icon30 />
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute left-[278px] rounded-[8px] size-[32px] top-[16.8px]" data-name="Button7">
      <Icon7 />
    </div>
  );
}

function Icon31() {
  return (
    <div className="absolute contents inset-[20.84%_8.33%]" data-name="Icon">
      <div className="absolute inset-[20.84%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 11">
            <path d={svgPaths.p13747c00} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%]" data-name="Vector_2">
        <div className="absolute inset-[-16.667%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
            <path d={svgPaths.pafef4f0} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon32() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Icon31 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[8px] size-[16px] top-[8px]" data-name="Icon8">
      <Icon32 />
    </div>
  );
}

function Button8() {
  return (
    <div className="absolute left-[314px] rounded-[8px] size-[32px] top-[16.8px]" data-name="Button8">
      <Icon8 />
    </div>
  );
}

function PrimitiveDiv2() {
  return <div className="absolute bg-[rgba(0,0,0,0.1)] h-0 left-[354px] top-[32.8px] w-px" data-name="PrimitiveDiv2" />;
}

function Icon33() {
  return (
    <div className="absolute contents inset-[12.5%]" data-name="Icon">
      <div className="absolute inset-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d={svgPaths.p2e347d80} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%_66.67%_66.67%_12.5%]" data-name="Vector_2">
        <div className="absolute inset-[-20%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
            <path d="M1 1V4.33333H4.33333" id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon34() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Icon33 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[8px] size-[16px] top-[8px]" data-name="Icon9">
      <Icon34 />
    </div>
  );
}

function Button9() {
  return (
    <div className="absolute left-[363px] rounded-[8px] size-[32px] top-[16.8px]" data-name="Button9">
      <Icon9 />
    </div>
  );
}

function Icon35() {
  return (
    <div className="absolute contents inset-[8.33%_16.67%]" data-name="Icon">
      <div className="absolute inset-[8.33%_16.67%]" data-name="Vector">
        <div className="absolute inset-[-5%_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 15">
            <path d={svgPaths.p23a79e00} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%_16.67%_66.67%_58.33%]" data-name="Vector_2">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
            <path d={svgPaths.p3d2b15c0} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[52.08%_39.58%_27.08%_39.58%]" data-name="Vector_3">
        <div className="absolute inset-[-20%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
            <path d="M4.33334 1L1 4.33337" id="Vector_3" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[52.08%_39.58%_27.08%_39.58%]" data-name="Vector_4">
        <div className="absolute inset-[-20%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
            <path d="M1 1L4.33334 4.33337" id="Vector_4" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon36() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Icon35 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[8px] size-[16px] top-[8px]" data-name="Icon10">
      <Icon36 />
    </div>
  );
}

function Button10() {
  return (
    <div className="absolute left-[399px] rounded-[8px] size-[32px] top-[16.8px]" data-name="Button10">
      <Icon10 />
    </div>
  );
}

function ReportFilters() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="ReportFilters">
      <Container9 />
      <Button2 />
      <Button1 />
      <Button22 />
      <Button3 />
      <PrimitiveDiv />
      <Button4 />
      <Button5 />
      <PrimitiveDiv1 />
      <Button6 />
      <Button7 />
      <Button8 />
      <PrimitiveDiv2 />
      <Button9 />
      <Button10 />
    </div>
  );
}

function Container10() {
  return (
    <div className="box-border content-stretch flex flex-col h-[80.8px] items-start pb-0 pt-[16.8px] px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.8px_0px_0px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <ReportFilters />
    </div>
  );
}

function ReportHeader() {
  return (
    <div className="h-[214.8px] relative shrink-0 w-[1054.4px]" data-name="ReportHeader">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[16px] h-[214.8px] items-start relative w-[1054.4px]">
        <Container7 />
        <Container8 />
        <Container10 />
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="bg-white h-[264.4px] relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[264.4px] items-start pb-[0.8px] pl-[24.8px] pr-[0.8px] pt-[24.8px] relative w-full">
          <ReportHeader />
        </div>
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[28px] relative shrink-0 w-[344.363px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[344.363px]">
        <p className="absolute font-['Arial:Bold',_sans-serif] leading-[28px] left-0 not-italic text-[#101828] text-[18px] text-nowrap top-[-1.4px] whitespace-pre">Fee Collection Report - Consolidated View</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[20px] relative shrink-0 w-[114.375px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[114.375px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] top-[-1.2px] w-[115px]">Showing 5 records</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex h-[28px] items-center justify-between relative w-full">
          <Heading3 />
          <Container11 />
        </div>
      </div>
    </div>
  );
}

function ReportContent() {
  return (
    <div className="h-[20px] relative shrink-0 w-[307.2px]" data-name="ReportContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[307.2px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-0 not-italic text-[#155dfc] text-[14px] text-nowrap top-[-1.2px] whitespace-pre">Total Amount</p>
      </div>
    </div>
  );
}

function ReportContent1() {
  return (
    <div className="h-[28px] relative shrink-0 w-[307.2px]" data-name="ReportContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[307.2px]">
        <p className="absolute font-['Arial:Bold',_sans-serif] leading-[28px] left-0 not-italic text-[#193cb8] text-[20px] text-nowrap top-[-2.2px] whitespace-pre">₹3,75,000.00</p>
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="absolute bg-blue-50 box-border content-stretch flex flex-col gap-[24px] h-[105.6px] items-start left-0 pb-[0.8px] pl-[16.8px] pr-[0.8px] pt-[16.8px] rounded-[14px] top-0 w-[340.8px]" data-name="Card">
      <div aria-hidden="true" className="absolute border-[#bedbff] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <ReportContent />
      <ReportContent1 />
    </div>
  );
}

function ReportContent2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[307.2px]" data-name="ReportContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[307.2px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-0 not-italic text-[#00a63e] text-[14px] text-nowrap top-[-1.2px] whitespace-pre">Amount Paid</p>
      </div>
    </div>
  );
}

function ReportContent3() {
  return (
    <div className="h-[28px] relative shrink-0 w-[307.2px]" data-name="ReportContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[307.2px]">
        <p className="absolute font-['Arial:Bold',_sans-serif] leading-[28px] left-0 not-italic text-[#016630] text-[20px] text-nowrap top-[-2.2px] whitespace-pre">₹2,30,000.00</p>
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div className="absolute bg-green-50 box-border content-stretch flex flex-col gap-[24px] h-[105.6px] items-start left-[356.8px] pb-[0.8px] pl-[16.8px] pr-[0.8px] pt-[16.8px] rounded-[14px] top-0 w-[340.8px]" data-name="Card">
      <div aria-hidden="true" className="absolute border-[#b9f8cf] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <ReportContent2 />
      <ReportContent3 />
    </div>
  );
}

function ReportContent4() {
  return (
    <div className="h-[20px] relative shrink-0 w-[307.2px]" data-name="ReportContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[307.2px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-0 not-italic text-[#e7000b] text-[14px] text-nowrap top-[-1.2px] whitespace-pre">Amount Due</p>
      </div>
    </div>
  );
}

function ReportContent5() {
  return (
    <div className="h-[28px] relative shrink-0 w-[307.2px]" data-name="ReportContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[307.2px]">
        <p className="absolute font-['Arial:Bold',_sans-serif] leading-[28px] left-0 not-italic text-[#9f0712] text-[20px] text-nowrap top-[-2.2px] whitespace-pre">₹1,45,000.00</p>
      </div>
    </div>
  );
}

function Card3() {
  return (
    <div className="absolute bg-red-50 box-border content-stretch flex flex-col gap-[24px] h-[105.6px] items-start left-[713.6px] pb-[0.8px] pl-[16.8px] pr-[0.8px] pt-[16.8px] rounded-[14px] top-0 w-[340.8px]" data-name="Card">
      <div aria-hidden="true" className="absolute border-[#ffc9c9] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <ReportContent4 />
      <ReportContent5 />
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[105.6px] relative shrink-0 w-full" data-name="Container">
      <Card1 />
      <Card2 />
      <Card3 />
    </div>
  );
}

function TableHead() {
  return (
    <div className="absolute h-[40px] left-0 top-0 w-[75.025px]" data-name="TableHead">
      <p className="absolute font-['Arial:Bold',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.6px] whitespace-pre">Roll No</p>
    </div>
  );
}

function TableHead1() {
  return (
    <div className="absolute h-[40px] left-[75.03px] top-0 w-[127.825px]" data-name="TableHead">
      <p className="absolute font-['Arial:Bold',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.6px] whitespace-pre">Student Name</p>
    </div>
  );
}

function TableHead2() {
  return (
    <div className="absolute h-[40px] left-[202.85px] top-0 w-[97.412px]" data-name="TableHead">
      <p className="absolute font-['Arial:Bold',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.6px] whitespace-pre">Course</p>
    </div>
  );
}

function TableHead3() {
  return (
    <div className="absolute h-[40px] left-[300.26px] top-0 w-[88.813px]" data-name="TableHead">
      <p className="absolute font-['Arial:Bold',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.6px] whitespace-pre">Semester</p>
    </div>
  );
}

function TableHead4() {
  return (
    <div className="absolute h-[40px] left-[389.07px] top-0 w-[90.688px]" data-name="TableHead">
      <p className="absolute font-['Arial:Bold',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.6px] whitespace-pre">Fee Type</p>
    </div>
  );
}

function TableHead5() {
  return (
    <div className="absolute h-[40px] left-[479.76px] top-0 w-[121.725px]" data-name="TableHead">
      <p className="absolute font-['Arial:Bold',_sans-serif] leading-[20px] left-[114.56px] not-italic text-[14px] text-neutral-950 text-nowrap text-right top-[8.6px] translate-x-[-100%] whitespace-pre">Total Amount</p>
    </div>
  );
}

function TableHead6() {
  return (
    <div className="absolute h-[40px] left-[601.49px] top-0 w-[117.463px]" data-name="TableHead">
      <p className="absolute font-['Arial:Bold',_sans-serif] leading-[20px] left-[109.88px] not-italic text-[14px] text-neutral-950 text-nowrap text-right top-[8.6px] translate-x-[-100%] whitespace-pre">Paid Amount</p>
    </div>
  );
}

function TableHead7() {
  return (
    <div className="absolute h-[40px] left-[718.95px] top-0 w-[115.65px]" data-name="TableHead">
      <p className="absolute font-['Arial:Bold',_sans-serif] leading-[20px] left-[108.59px] not-italic text-[14px] text-neutral-950 text-nowrap text-right top-[8.6px] translate-x-[-100%] whitespace-pre">Due Amount</p>
    </div>
  );
}

function TableHead8() {
  return (
    <div className="absolute h-[40px] left-[834.6px] top-0 w-[93.162px]" data-name="TableHead">
      <p className="absolute font-['Arial:Bold',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.6px] whitespace-pre">Status</p>
    </div>
  );
}

function TableHead9() {
  return (
    <div className="absolute h-[40px] left-[927.76px] top-0 w-[125.037px]" data-name="TableHead">
      <p className="absolute font-['Arial:Bold',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.6px] whitespace-pre">Payment Date</p>
    </div>
  );
}

function TableRow() {
  return (
    <div className="absolute bg-gray-50 h-[40px] left-0 top-0 w-[1052.8px]" data-name="TableRow">
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
    <div className="absolute h-[40px] left-0 top-0 w-[1052.8px]" data-name="TableHeader">
      <TableRow />
    </div>
  );
}

function TableCell() {
  return (
    <div className="absolute h-[38.788px] left-0 top-0 w-[75.025px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.19px] whitespace-pre">CS001</p>
    </div>
  );
}

function TableCell1() {
  return (
    <div className="absolute h-[38.788px] left-[75.03px] top-0 w-[127.825px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.19px] whitespace-pre">John Doe</p>
    </div>
  );
}

function TableCell2() {
  return (
    <div className="absolute h-[38.788px] left-[202.85px] top-0 w-[97.412px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.19px] whitespace-pre">B.Tech CSE</p>
    </div>
  );
}

function TableCell3() {
  return (
    <div className="absolute h-[38.788px] left-[300.26px] top-0 w-[88.813px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.19px] whitespace-pre">5th</p>
    </div>
  );
}

function TableCell4() {
  return (
    <div className="absolute h-[38.788px] left-[389.07px] top-0 w-[90.688px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.19px] whitespace-pre">Academic</p>
    </div>
  );
}

function TableCell5() {
  return (
    <div className="absolute h-[38.788px] left-[479.76px] top-0 w-[121.725px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[114.28px] not-italic text-[14px] text-neutral-950 text-nowrap text-right top-[8.19px] translate-x-[-100%] whitespace-pre">₹75,000.00</p>
    </div>
  );
}

function TableCell6() {
  return (
    <div className="absolute h-[38.788px] left-[601.49px] top-0 w-[117.463px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[110.01px] not-italic text-[14px] text-neutral-950 text-nowrap text-right top-[8.19px] translate-x-[-100%] whitespace-pre">₹75,000.00</p>
    </div>
  );
}

function TableCell7() {
  return (
    <div className="absolute h-[38.788px] left-[718.95px] top-0 w-[115.65px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[108.42px] not-italic text-[14px] text-neutral-950 text-nowrap text-right top-[8.19px] translate-x-[-100%] whitespace-pre">₹0.00</p>
    </div>
  );
}

function Badge() {
  return (
    <div className="absolute bg-green-100 h-[21.587px] left-[8px] rounded-[8px] top-[8.8px] w-[40.9px]" data-name="Badge">
      <div className="h-[21.587px] overflow-clip relative rounded-[inherit] w-[40.9px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[8.8px] not-italic text-[#016630] text-[12px] text-nowrap top-[1.8px] whitespace-pre">Paid</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell8() {
  return (
    <div className="absolute h-[38.788px] left-[834.6px] top-0 w-[93.162px]" data-name="TableCell">
      <Badge />
    </div>
  );
}

function TableCell9() {
  return (
    <div className="absolute h-[38.788px] left-[927.76px] top-0 w-[125.037px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.19px] whitespace-pre">2024-08-15</p>
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
      <TableCell7 />
      <TableCell8 />
      <TableCell9 />
    </div>
  );
}

function TableCell10() {
  return (
    <div className="absolute h-[38.788px] left-0 top-0 w-[75.025px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.19px] whitespace-pre">CS002</p>
    </div>
  );
}

function TableCell11() {
  return (
    <div className="absolute h-[38.788px] left-[75.03px] top-0 w-[127.825px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.19px] whitespace-pre">Jane Smith</p>
    </div>
  );
}

function TableCell12() {
  return (
    <div className="absolute h-[38.788px] left-[202.85px] top-0 w-[97.412px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.19px] whitespace-pre">B.Tech CSE</p>
    </div>
  );
}

function TableCell13() {
  return (
    <div className="absolute h-[38.788px] left-[300.26px] top-0 w-[88.813px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.19px] whitespace-pre">5th</p>
    </div>
  );
}

function TableCell14() {
  return (
    <div className="absolute h-[38.788px] left-[389.07px] top-0 w-[90.688px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.19px] whitespace-pre">Academic</p>
    </div>
  );
}

function TableCell15() {
  return (
    <div className="absolute h-[38.788px] left-[479.76px] top-0 w-[121.725px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[114.28px] not-italic text-[14px] text-neutral-950 text-nowrap text-right top-[8.19px] translate-x-[-100%] whitespace-pre">₹75,000.00</p>
    </div>
  );
}

function TableCell16() {
  return (
    <div className="absolute h-[38.788px] left-[601.49px] top-0 w-[117.463px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[110.01px] not-italic text-[14px] text-neutral-950 text-nowrap text-right top-[8.19px] translate-x-[-100%] whitespace-pre">₹50,000.00</p>
    </div>
  );
}

function TableCell17() {
  return (
    <div className="absolute h-[38.788px] left-[718.95px] top-0 w-[115.65px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[108.2px] not-italic text-[14px] text-neutral-950 text-nowrap text-right top-[8.19px] translate-x-[-100%] whitespace-pre">₹25,000.00</p>
    </div>
  );
}

function Badge1() {
  return (
    <div className="absolute bg-[#fef9c2] h-[21.587px] left-[8px] rounded-[8px] top-[8.8px] w-[52.2px]" data-name="Badge">
      <div className="h-[21.587px] overflow-clip relative rounded-[inherit] w-[52.2px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[8.8px] not-italic text-[#894b00] text-[12px] text-nowrap top-[1.8px] whitespace-pre">Partial</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell18() {
  return (
    <div className="absolute h-[38.788px] left-[834.6px] top-0 w-[93.162px]" data-name="TableCell">
      <Badge1 />
    </div>
  );
}

function TableCell19() {
  return (
    <div className="absolute h-[38.788px] left-[927.76px] top-0 w-[125.037px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.19px] whitespace-pre">2024-08-10</p>
    </div>
  );
}

function TableRow2() {
  return (
    <div className="absolute h-[38.788px] left-0 top-[38.79px] w-[1052.8px]" data-name="TableRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <TableCell10 />
      <TableCell11 />
      <TableCell12 />
      <TableCell13 />
      <TableCell14 />
      <TableCell15 />
      <TableCell16 />
      <TableCell17 />
      <TableCell18 />
      <TableCell19 />
    </div>
  );
}

function TableCell20() {
  return (
    <div className="absolute h-[38.788px] left-0 top-0 w-[75.025px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.19px] whitespace-pre">CS003</p>
    </div>
  );
}

function TableCell21() {
  return (
    <div className="absolute h-[38.788px] left-[75.03px] top-0 w-[127.825px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.19px] whitespace-pre">Mike Johnson</p>
    </div>
  );
}

function TableCell22() {
  return (
    <div className="absolute h-[38.788px] left-[202.85px] top-0 w-[97.412px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.19px] whitespace-pre">B.Tech CSE</p>
    </div>
  );
}

function TableCell23() {
  return (
    <div className="absolute h-[38.788px] left-[300.26px] top-0 w-[88.813px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.19px] whitespace-pre">5th</p>
    </div>
  );
}

function TableCell24() {
  return (
    <div className="absolute h-[38.788px] left-[389.07px] top-0 w-[90.688px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.19px] whitespace-pre">Academic</p>
    </div>
  );
}

function TableCell25() {
  return (
    <div className="absolute h-[38.788px] left-[479.76px] top-0 w-[121.725px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[114.28px] not-italic text-[14px] text-neutral-950 text-nowrap text-right top-[8.19px] translate-x-[-100%] whitespace-pre">₹75,000.00</p>
    </div>
  );
}

function TableCell26() {
  return (
    <div className="absolute h-[38.788px] left-[601.49px] top-0 w-[117.463px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[110.24px] not-italic text-[14px] text-neutral-950 text-nowrap text-right top-[8.19px] translate-x-[-100%] whitespace-pre">₹0.00</p>
    </div>
  );
}

function TableCell27() {
  return (
    <div className="absolute h-[38.788px] left-[718.95px] top-0 w-[115.65px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[108.2px] not-italic text-[14px] text-neutral-950 text-nowrap text-right top-[8.19px] translate-x-[-100%] whitespace-pre">₹75,000.00</p>
    </div>
  );
}

function Badge2() {
  return (
    <div className="absolute bg-[#ffe2e2] h-[21.587px] left-[8px] rounded-[8px] top-[8.8px] w-[62.188px]" data-name="Badge">
      <div className="h-[21.587px] overflow-clip relative rounded-[inherit] w-[62.188px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[8.8px] not-italic text-[#9f0712] text-[12px] text-nowrap top-[1.8px] whitespace-pre">Pending</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell28() {
  return (
    <div className="absolute h-[38.788px] left-[834.6px] top-0 w-[93.162px]" data-name="TableCell">
      <Badge2 />
    </div>
  );
}

function TableCell29() {
  return (
    <div className="absolute h-[38.788px] left-[927.76px] top-0 w-[125.037px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.19px] whitespace-pre">-</p>
    </div>
  );
}

function TableRow3() {
  return (
    <div className="absolute h-[38.788px] left-0 top-[77.58px] w-[1052.8px]" data-name="TableRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <TableCell20 />
      <TableCell21 />
      <TableCell22 />
      <TableCell23 />
      <TableCell24 />
      <TableCell25 />
      <TableCell26 />
      <TableCell27 />
      <TableCell28 />
      <TableCell29 />
    </div>
  );
}

function TableCell30() {
  return (
    <div className="absolute h-[38.788px] left-0 top-0 w-[75.025px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.19px] whitespace-pre">CS004</p>
    </div>
  );
}

function TableCell31() {
  return (
    <div className="absolute h-[38.788px] left-[75.03px] top-0 w-[127.825px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.19px] whitespace-pre">Sarah Wilson</p>
    </div>
  );
}

function TableCell32() {
  return (
    <div className="absolute h-[38.788px] left-[202.85px] top-0 w-[97.412px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.19px] whitespace-pre">B.Tech CSE</p>
    </div>
  );
}

function TableCell33() {
  return (
    <div className="absolute h-[38.788px] left-[300.26px] top-0 w-[88.813px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.19px] whitespace-pre">5th</p>
    </div>
  );
}

function TableCell34() {
  return (
    <div className="absolute h-[38.788px] left-[389.07px] top-0 w-[90.688px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.19px] whitespace-pre">Academic</p>
    </div>
  );
}

function TableCell35() {
  return (
    <div className="absolute h-[38.788px] left-[479.76px] top-0 w-[121.725px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[114.28px] not-italic text-[14px] text-neutral-950 text-nowrap text-right top-[8.19px] translate-x-[-100%] whitespace-pre">₹75,000.00</p>
    </div>
  );
}

function TableCell36() {
  return (
    <div className="absolute h-[38.788px] left-[601.49px] top-0 w-[117.463px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[110.01px] not-italic text-[14px] text-neutral-950 text-nowrap text-right top-[8.19px] translate-x-[-100%] whitespace-pre">₹75,000.00</p>
    </div>
  );
}

function TableCell37() {
  return (
    <div className="absolute h-[38.788px] left-[718.95px] top-0 w-[115.65px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[108.42px] not-italic text-[14px] text-neutral-950 text-nowrap text-right top-[8.19px] translate-x-[-100%] whitespace-pre">₹0.00</p>
    </div>
  );
}

function Badge3() {
  return (
    <div className="absolute bg-green-100 h-[21.587px] left-[8px] rounded-[8px] top-[8.8px] w-[40.9px]" data-name="Badge">
      <div className="h-[21.587px] overflow-clip relative rounded-[inherit] w-[40.9px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[8.8px] not-italic text-[#016630] text-[12px] text-nowrap top-[1.8px] whitespace-pre">Paid</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell38() {
  return (
    <div className="absolute h-[38.788px] left-[834.6px] top-0 w-[93.162px]" data-name="TableCell">
      <Badge3 />
    </div>
  );
}

function TableCell39() {
  return (
    <div className="absolute h-[38.788px] left-[927.76px] top-0 w-[125.037px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.19px] whitespace-pre">2024-08-20</p>
    </div>
  );
}

function TableRow4() {
  return (
    <div className="absolute h-[38.788px] left-0 top-[116.36px] w-[1052.8px]" data-name="TableRow">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <TableCell30 />
      <TableCell31 />
      <TableCell32 />
      <TableCell33 />
      <TableCell34 />
      <TableCell35 />
      <TableCell36 />
      <TableCell37 />
      <TableCell38 />
      <TableCell39 />
    </div>
  );
}

function TableCell40() {
  return (
    <div className="absolute h-[38.388px] left-0 top-0 w-[75.025px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.19px] whitespace-pre">CS005</p>
    </div>
  );
}

function TableCell41() {
  return (
    <div className="absolute h-[38.388px] left-[75.03px] top-0 w-[127.825px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.19px] whitespace-pre">David Brown</p>
    </div>
  );
}

function TableCell42() {
  return (
    <div className="absolute h-[38.388px] left-[202.85px] top-0 w-[97.412px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.19px] whitespace-pre">B.Tech CSE</p>
    </div>
  );
}

function TableCell43() {
  return (
    <div className="absolute h-[38.388px] left-[300.26px] top-0 w-[88.813px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.19px] whitespace-pre">5th</p>
    </div>
  );
}

function TableCell44() {
  return (
    <div className="absolute h-[38.388px] left-[389.07px] top-0 w-[90.688px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.19px] whitespace-pre">Academic</p>
    </div>
  );
}

function TableCell45() {
  return (
    <div className="absolute h-[38.388px] left-[479.76px] top-0 w-[121.725px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[114.28px] not-italic text-[14px] text-neutral-950 text-nowrap text-right top-[8.19px] translate-x-[-100%] whitespace-pre">₹75,000.00</p>
    </div>
  );
}

function TableCell46() {
  return (
    <div className="absolute h-[38.388px] left-[601.49px] top-0 w-[117.463px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[110.01px] not-italic text-[14px] text-neutral-950 text-nowrap text-right top-[8.19px] translate-x-[-100%] whitespace-pre">₹30,000.00</p>
    </div>
  );
}

function TableCell47() {
  return (
    <div className="absolute h-[38.388px] left-[718.95px] top-0 w-[115.65px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[108.2px] not-italic text-[14px] text-neutral-950 text-nowrap text-right top-[8.19px] translate-x-[-100%] whitespace-pre">₹45,000.00</p>
    </div>
  );
}

function Badge4() {
  return (
    <div className="absolute bg-[#fef9c2] h-[21.587px] left-[8px] rounded-[8px] top-[8.8px] w-[52.2px]" data-name="Badge">
      <div className="h-[21.587px] overflow-clip relative rounded-[inherit] w-[52.2px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[8.8px] not-italic text-[#894b00] text-[12px] text-nowrap top-[1.8px] whitespace-pre">Partial</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TableCell48() {
  return (
    <div className="absolute h-[38.388px] left-[834.6px] top-0 w-[93.162px]" data-name="TableCell">
      <Badge4 />
    </div>
  );
}

function TableCell49() {
  return (
    <div className="absolute h-[38.388px] left-[927.76px] top-0 w-[125.037px]" data-name="TableCell">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[8.19px] whitespace-pre">2024-08-12</p>
    </div>
  );
}

function TableRow5() {
  return (
    <div className="absolute h-[38.388px] left-0 top-[155.15px] w-[1052.8px]" data-name="TableRow">
      <TableCell40 />
      <TableCell41 />
      <TableCell42 />
      <TableCell43 />
      <TableCell44 />
      <TableCell45 />
      <TableCell46 />
      <TableCell47 />
      <TableCell48 />
      <TableCell49 />
    </div>
  );
}

function TableBody() {
  return (
    <div className="absolute h-[193.538px] left-0 top-[40px] w-[1052.8px]" data-name="TableBody">
      <TableRow1 />
      <TableRow2 />
      <TableRow3 />
      <TableRow4 />
      <TableRow5 />
    </div>
  );
}

function Table() {
  return (
    <div className="h-[233.538px] overflow-clip relative shrink-0 w-full" data-name="Table">
      <TableHeader />
      <TableBody />
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[235.137px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col h-[235.137px] items-start p-[0.8px] relative w-full">
          <Table />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function ReportContent6() {
  return (
    <div className="h-[408.738px] relative shrink-0 w-[1054.4px]" data-name="ReportContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[16px] h-[408.738px] items-start relative w-[1054.4px]">
        <Container12 />
        <Container13 />
        <Container14 />
      </div>
    </div>
  );
}

function Card4() {
  return (
    <div className="bg-white h-[458.337px] relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[458.337px] items-start pb-[0.8px] pl-[24.8px] pr-[0.8px] pt-[24.8px] relative w-full">
          <ReportContent6 />
        </div>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-full">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-[-1.2px] whitespace-pre">Current Page No:</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[6.438px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[6.438px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[-2.2px] whitespace-pre">1</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[24px] relative shrink-0 w-[120.188px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[24px] items-center relative w-[120.188px]">
        <Text />
        <Text1 />
      </div>
    </div>
  );
}

function Icon37() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M10 12L6 8L10 4" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button15() {
  return (
    <div className="bg-white h-[32px] opacity-50 relative rounded-[8px] shrink-0 w-[37.6px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[32px] items-center justify-center p-[0.8px] relative w-[37.6px]">
        <Icon37 />
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[51.35px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[51.35px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[-1.2px] whitespace-pre">1 of 1</p>
      </div>
    </div>
  );
}

function Icon38() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button16() {
  return (
    <div className="bg-white h-[32px] opacity-50 relative rounded-[8px] shrink-0 w-[37.6px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[32px] items-center justify-center p-[0.8px] relative w-[37.6px]">
        <Icon38 />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[32px] relative shrink-0 w-[142.55px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[32px] items-center relative w-[142.55px]">
        <Button15 />
        <Text2 />
        <Button16 />
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[88.862px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[88.862px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-[-1.2px] whitespace-pre">Total Page No:</p>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[24px] relative shrink-0 w-[6.438px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[6.438px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-0 not-italic text-[16px] text-neutral-950 text-nowrap top-[-2.2px] whitespace-pre">1</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[24px] relative shrink-0 w-[103.3px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[24px] items-center relative w-[103.3px]">
        <Text3 />
        <Text4 />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[32px] relative shrink-0 w-[398.038px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[16px] h-[32px] items-center relative w-[398.038px]">
        <Container15 />
        <Container16 />
        <Container17 />
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[20px] relative shrink-0 w-[81.088px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[81.088px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-[-1.2px] whitespace-pre">Zoom Factor:</p>
      </div>
    </div>
  );
}

function Icon39() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p107a080} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M14 14L11.1 11.1" id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M5.33333 7.33333H9.33333" id="Vector_3" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button17() {
  return (
    <div className="bg-white h-[32px] relative rounded-[8px] shrink-0 w-[37.6px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[32px] items-center justify-center p-[0.8px] relative w-[37.6px]">
        <Icon39 />
      </div>
    </div>
  );
}

function PrimitiveSpan4() {
  return (
    <div className="h-[20px] relative shrink-0 w-[30.4px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[20px] items-center overflow-clip relative rounded-[inherit] w-[30.4px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">100%</p>
      </div>
    </div>
  );
}

function Icon40() {
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
    <div className="bg-[#f3f3f5] h-[36px] relative rounded-[8px] shrink-0 w-[80px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[36px] items-center justify-between px-[12.8px] py-[0.8px] relative w-[80px]">
        <PrimitiveSpan4 />
        <Icon40 />
      </div>
    </div>
  );
}

function Icon41() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p107a080} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M14 14L11.1 11.1" id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M7.33333 5.33333V9.33333" id="Vector_3" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M5.33333 7.33333H9.33333" id="Vector_4" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button18() {
  return (
    <div className="bg-white h-[32px] relative rounded-[8px] shrink-0 w-[37.6px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[32px] items-center justify-center p-[0.8px] relative w-[37.6px]">
        <Icon41 />
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[36px] relative shrink-0 w-[163.2px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[36px] items-center relative w-[163.2px]">
        <Button17 />
        <PrimitiveButton4 />
        <Button18 />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[36px] relative shrink-0 w-[252.288px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[36px] items-center relative w-[252.288px]">
        <Text5 />
        <Container19 />
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex h-[36px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container18 />
      <Container20 />
    </div>
  );
}

function ReportFooter() {
  return (
    <div className="bg-white h-[68.8px] relative shrink-0 w-full" data-name="ReportFooter">
      <div aria-hidden="true" className="absolute border-[0.8px_0px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[68.8px] items-start pb-0 pt-[16.8px] px-[16px] relative w-full">
          <Container21 />
        </div>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col h-[815.538px] items-start overflow-clip relative rounded-[10px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Container">
      <Container />
      <Card />
      <Card4 />
      <ReportFooter />
    </div>
  );
}

function App() {
  return (
    <div className="bg-gray-50 h-[863.538px] relative shrink-0 w-full" data-name="App">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[863.538px] items-start pb-0 pt-[24px] px-[24px] relative w-full">
          <Container22 />
        </div>
      </div>
    </div>
  );
}

export default function FeeCollectionReportConsolidateReport() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Fee Collection Report / Consolidate Report">
      <App />
    </div>
  );
}