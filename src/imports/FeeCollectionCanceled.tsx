import svgPaths from "./svg-qfyk6zrhbz";

function PrimitiveLabel() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[20px] items-center left-0 top-[6px] w-[66.475px]" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">From Date</p>
    </div>
  );
}

function Input() {
  return (
    <div className="absolute bg-white h-[32px] left-0 rounded-[8px] top-0 w-[100px]" data-name="Input">
      <div className="box-border content-stretch flex h-[32px] items-center overflow-clip px-[8px] py-[4px] relative rounded-[inherit] w-[100px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Oct 2023</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[80px] size-[12px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M4 1V3" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 1V3" id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p333d5300} id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M1.5 5H10.5" id="Vector_4" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[32px] left-[74.47px] top-0 w-[100px]" data-name="Container">
      <Input />
      <Icon />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute h-[32px] left-0 top-[2px] w-[174.475px]" data-name="Container">
      <PrimitiveLabel />
      <Container />
    </div>
  );
}

function PrimitiveLabel1() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[20px] items-center left-0 top-[6px] w-[50px]" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">To Date</p>
    </div>
  );
}

function Input1() {
  return (
    <div className="absolute bg-white h-[32px] left-0 rounded-[8px] top-0 w-[100px]" data-name="Input">
      <div className="box-border content-stretch flex h-[32px] items-center overflow-clip px-[8px] py-[4px] relative rounded-[inherit] w-[100px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Oct 2023</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[80px] size-[12px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M4 1V3" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 1V3" id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p333d5300} id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M1.5 5H10.5" id="Vector_4" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute h-[32px] left-[58px] top-0 w-[100px]" data-name="Container">
      <Input1 />
      <Icon1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute h-[32px] left-[198.47px] top-[2px] w-[158px]" data-name="Container">
      <PrimitiveLabel1 />
      <Container2 />
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[36px] relative shrink-0 w-[823.237px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[36px] relative w-[823.237px]">
        <Container1 />
        <Container3 />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white h-[32px] relative rounded-[8px] shrink-0 w-[85px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[6px] h-[32px] items-center justify-center px-[16px] py-0 relative w-[85px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-black text-nowrap whitespace-pre">CANCELED</p>
      </div>
    </div>
  );
}

function Button11() {
  return (
    <div className="bg-white h-[32px] relative rounded-[8px] shrink-0 w-[72.575px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[6px] h-[32px] items-center justify-center px-[16px] py-0 relative w-[72.575px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-black text-nowrap whitespace-pre">CLOSE</p>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M12 4L4 12" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M4 4L12 12" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button12() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[24px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[24px]">
        <Icon2 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[32px] relative shrink-0 w-[202.6px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[32px] items-center relative w-[202.6px]">
        <Button />
        <Button11 />
        <Button12 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex h-[36px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container4 />
      <Container5 />
    </div>
  );
}

function ReportHeader() {
  return (
    <div className="absolute bg-[#8b9dc3] box-border content-stretch flex flex-col h-[60.8px] items-start left-[1.8px] pb-[0.8px] pt-[12px] px-[16px] top-[0.8px] w-[1148.4px]" data-name="ReportHeader">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <Container6 />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute h-[64px] left-0 top-0 w-[1054.4px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.8px_0px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Icon3() {
  return (
    <div className="h-[7.325px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.5%_4.44%_12.5%_6.67%]" data-name="Vector">
        <div className="absolute inset-[-11.49%_-4.84%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 8">
            <path d={svgPaths.p256b68c0} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.26194" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute content-stretch flex flex-col h-[7.325px] items-start left-[18.46px] top-[94.94px] w-[14.675px]" data-name="Container">
      <Icon3 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="h-[6px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[14.29%_10%_19.05%_10%]" data-name="Vector_2">
        <div className="absolute inset-[-14.9%_-7.99%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 6">
            <path d={svgPaths.p35d61c00} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.19203" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex flex-col h-[6px] items-start left-[21.14px] top-[90.26px] w-[9.325px]" data-name="Container">
      <Icon4 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="h-[6.675px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[14.29%_10%_9.52%_10%]" data-name="Vector_3">
        <div className="absolute inset-[-12.36%_-8.43%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 7">
            <path d={svgPaths.p2805e280} id="Vector_3" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2573" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute content-stretch flex flex-col h-[6.675px] items-start left-[21.14px] top-[98.26px] w-[9.325px]" data-name="Container">
      <Icon5 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="h-0 relative shrink-0 w-full" data-name="Icon">
      <Container8 />
      <Container9 />
      <Container10 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Icon11">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col h-[16px] items-start pb-0 pr-[33.8px] relative w-full">
          <Icon6 />
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start left-0 pb-0 pt-[8px] px-[8px] rounded-[8px] size-[32px] top-[16.8px]" data-name="Button2">
      <Icon11 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="h-[13.325px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[7.143%]" data-name="Vector">
        <div className="absolute inset-[-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d={svgPaths.p27209f00} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.26904" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[55.14px] size-[13.325px] top-[90.94px]" data-name="Container">
      <Icon7 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="h-[6.662px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[14.29%_14.81%_9.52%_11.11%]" data-name="Vector_2">
        <div className="absolute inset-[-12.08%_-10.35%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 7">
            <path d={svgPaths.p28bf3600} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2264" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex flex-col h-[6.662px] items-start left-[57.8px] top-[97.6px] w-[8px]" data-name="Container">
      <Icon8 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="h-[4.662px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[20%_9.52%_13.33%_14.29%]" data-name="Vector_3">
        <div className="absolute inset-[-20.21%_-12.37%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 5">
            <path d={svgPaths.p122f2700} id="Vector_3" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25612" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute content-stretch flex flex-col h-[4.662px] items-start left-[57.8px] top-[90.94px] w-[6.662px]" data-name="Container">
      <Icon9 />
    </div>
  );
}

function Icon13() {
  return (
    <div className="h-0 relative shrink-0 w-full" data-name="Icon13">
      <Container11 />
      <Container12 />
      <Container13 />
    </div>
  );
}

function Icon14() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Icon14">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col h-[16px] items-start pb-0 pr-[69.8px] relative w-full">
          <Icon13 />
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start left-[36px] pb-0 pt-[8px] px-[8px] rounded-[8px] size-[32px] top-[16.8px]" data-name="Button1">
      <Icon14 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="h-[10.675px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[9.09%_6.06%_6.06%_9.09%]" data-name="Vector">
        <div className="absolute inset-[-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
            <path d={svgPaths.p3880cc00} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.29394" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[94.46px] size-[10.675px] top-[94.26px]" data-name="Container">
      <Icon10 />
    </div>
  );
}

function Icon12() {
  return (
    <div className="h-[10.675px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[9.09%_6.06%_6.06%_9.09%]" data-name="Vector_2">
        <div className="absolute inset-[-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
            <path d={svgPaths.p16c6cf80} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.29394" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[90.46px] size-[10.675px] top-[90.26px]" data-name="Container">
      <Icon12 />
    </div>
  );
}

function Icon15() {
  return (
    <div className="h-0 relative shrink-0 w-full" data-name="Icon15">
      <Container14 />
      <Container15 />
    </div>
  );
}

function Icon16() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Icon16">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col h-[16px] items-start pb-0 pr-[105.8px] relative w-full">
          <Icon15 />
        </div>
      </div>
    </div>
  );
}

function Button22() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start left-[72px] pb-0 pt-[8px] px-[8px] rounded-[8px] size-[32px] top-[16.8px]" data-name="Button22">
      <Icon16 />
    </div>
  );
}

function Icon33() {
  return (
    <div className="h-[5.338px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[16.67%_4.44%_16.69%_6.67%]" data-name="Vector">
        <div className="absolute inset-[-17.49%_-4.77%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 6">
            <path d={svgPaths.p174b3380} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.24387" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute content-stretch flex flex-col h-[5.338px] items-start left-[126.46px] top-[93.6px] w-[14.675px]" data-name="Container">
      <Icon33 />
    </div>
  );
}

function Icon34() {
  return (
    <div className="h-[12px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[7.69%_4.44%_10.26%_6.67%]" data-name="Vector_2">
        <div className="absolute inset-[-6.43%_-4.86%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 12">
            <path d={svgPaths.p3b639cf0} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.26707" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute content-stretch flex flex-col h-[12px] items-start left-[126.46px] top-[91.6px] w-[14.675px]" data-name="Container">
      <Icon34 />
    </div>
  );
}

function Icon17() {
  return (
    <div className="h-0 relative shrink-0 w-full" data-name="Icon17">
      <Container16 />
      <Container17 />
    </div>
  );
}

function Icon18() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Icon18">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col h-[16px] items-start pb-0 pr-[141.8px] relative w-full">
          <Icon17 />
        </div>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start left-[108px] pb-0 pt-[8px] px-[8px] rounded-[8px] size-[32px] top-[16.8px]" data-name="Button3">
      <Icon18 />
    </div>
  );
}

function PrimitiveDiv() {
  return <div className="absolute bg-[rgba(0,0,0,0.1)] h-0 left-[148px] top-[32.8px] w-px" data-name="PrimitiveDiv" />;
}

function Icon35() {
  return (
    <div className="h-[10.675px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[9.09%_19.05%_6.06%_14.29%]" data-name="Vector">
        <div className="absolute inset-[-6.71%_-15.2%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 11">
            <path d="M5 10.0576L1 5.52879L5 1" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.21605" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex flex-col h-[10.675px] items-start left-[177.46px] top-[92.26px] w-[6px]" data-name="Container">
      <Icon35 />
    </div>
  );
}

function Icon36() {
  return (
    <div className="h-[1.325px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/2 left-[9.09%] right-[6.06%] top-1/2" data-name="Vector_2">
        <div className="absolute inset-[-0.53px_-5.9%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 2">
            <path d="M10.0576 1H1" id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.0691" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute content-stretch flex flex-col h-[1.325px] items-start left-[177.46px] top-[96.94px] w-[10.675px]" data-name="Container">
      <Icon36 />
    </div>
  );
}

function Icon19() {
  return (
    <div className="h-0 relative shrink-0 w-full" data-name="Icon19">
      <Container18 />
      <Container19 />
    </div>
  );
}

function Icon20() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Icon20">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col h-[16px] items-start pb-0 pr-[190.8px] relative w-full">
          <Icon19 />
        </div>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start left-[157px] pb-0 pt-[8px] px-[8px] rounded-[8px] size-[32px] top-[16.8px]" data-name="Button4">
      <Icon20 />
    </div>
  );
}

function Icon37() {
  return (
    <div className="h-[1.325px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/2 left-[9.09%] right-[6.06%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.53px_-5.9%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 2">
            <path d="M1 1H10.0576" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.0691" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute content-stretch flex flex-col h-[1.325px] items-start left-[213.46px] top-[96.94px] w-[10.675px]" data-name="Container">
      <Icon37 />
    </div>
  );
}

function Icon38() {
  return (
    <div className="h-[10.675px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[9.09%_19.05%_6.06%_14.29%]" data-name="Vector_2">
        <div className="absolute inset-[-6.71%_-15.2%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 11">
            <path d={svgPaths.p20d0e400} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.21605" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute content-stretch flex flex-col h-[10.675px] items-start left-[218.14px] top-[92.26px] w-[6px]" data-name="Container">
      <Icon38 />
    </div>
  );
}

function Icon21() {
  return (
    <div className="h-0 relative shrink-0 w-full" data-name="Icon21">
      <Container20 />
      <Container21 />
    </div>
  );
}

function Icon22() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Icon22">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col h-[16px] items-start pb-0 pr-[226.8px] relative w-full">
          <Icon21 />
        </div>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start left-[193px] pb-0 pt-[8px] px-[8px] rounded-[8px] size-[32px] top-[16.8px]" data-name="Button5">
      <Icon22 />
    </div>
  );
}

function PrimitiveDiv1() {
  return <div className="absolute bg-[rgba(0,0,0,0.1)] h-0 left-[233px] top-[32.8px] w-px" data-name="PrimitiveDiv1" />;
}

function Icon39() {
  return (
    <div className="h-[12px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[7.69%_10.26%_10.26%_7.69%]" data-name="Vector">
        <div className="absolute inset-[-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
            <path d={svgPaths.p2b4d0000} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.23077" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[261.14px] size-[12px] top-[90.94px]" data-name="Container">
      <Icon39 />
    </div>
  );
}

function Icon40() {
  return (
    <div className="h-[4.225px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[20%_22%_22%_20%]" data-name="Vector_2">
        <div className="absolute inset-[-22.988%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
            <path d="M3.4505 3.4505L1 1" id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.12666" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[270.24px] size-[4.225px] top-[100.04px]" data-name="Container">
      <Icon40 />
    </div>
  );
}

function Icon41() {
  return (
    <div className="h-[1.337px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/2 left-[16.67%] right-[16.67%] top-1/2" data-name="Vector_3">
        <div className="absolute inset-[-0.51px_-14.45%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 2">
            <path d="M1 1H4.55833" id="Vector_3" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.0284" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute content-stretch flex flex-col h-[1.337px] items-start left-[264.46px] top-[96.26px] w-[5.338px]" data-name="Container">
      <Icon41 />
    </div>
  );
}

function Icon23() {
  return (
    <div className="h-0 relative shrink-0 w-full" data-name="Icon23">
      <Container22 />
      <Container23 />
      <Container24 />
    </div>
  );
}

function Icon24() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Icon24">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col h-[16px] items-start pb-0 pr-[275.8px] relative w-full">
          <Icon23 />
        </div>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start left-[242px] pb-0 pt-[8px] px-[8px] rounded-[8px] size-[32px] top-[16.8px]" data-name="Button6">
      <Icon24 />
    </div>
  );
}

function Icon42() {
  return (
    <div className="h-[12px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[7.69%_10.26%_10.26%_7.69%]" data-name="Vector">
        <div className="absolute inset-[-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
            <path d={svgPaths.p2b4d0000} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.23077" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[297.14px] size-[12px] top-[90.94px]" data-name="Container">
      <Icon42 />
    </div>
  );
}

function Icon43() {
  return (
    <div className="h-[4.225px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[20%_22%_22%_20%]" data-name="Vector_2">
        <div className="absolute inset-[-22.988%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
            <path d="M3.4505 3.4505L1 1" id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.12666" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[306.24px] size-[4.225px] top-[100.04px]" data-name="Container">
      <Icon43 />
    </div>
  );
}

function Icon44() {
  return (
    <div className="h-[5.338px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[16.67%] left-1/2 right-1/2 top-[16.67%]" data-name="Vector_3">
        <div className="absolute inset-[-14.45%_-0.51px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 6">
            <path d="M1 1V4.55833" id="Vector_3" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.0284" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute content-stretch flex flex-col h-[5.338px] items-start left-[302.46px] top-[94.26px] w-[1.337px]" data-name="Container">
      <Icon44 />
    </div>
  );
}

function Icon45() {
  return (
    <div className="h-[1.337px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/2 left-[16.67%] right-[16.67%] top-1/2" data-name="Vector_3">
        <div className="absolute inset-[-0.51px_-14.45%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 2">
            <path d="M1 1H4.55833" id="Vector_3" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.0284" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute content-stretch flex flex-col h-[1.337px] items-start left-[300.46px] top-[96.26px] w-[5.338px]" data-name="Container">
      <Icon45 />
    </div>
  );
}

function Icon25() {
  return (
    <div className="h-0 relative shrink-0 w-full" data-name="Icon25">
      <Container25 />
      <Container26 />
      <Container27 />
      <Container28 />
    </div>
  );
}

function Icon26() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Icon26">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col h-[16px] items-start pb-0 pr-[311.8px] relative w-full">
          <Icon25 />
        </div>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start left-[278px] pb-0 pt-[8px] px-[8px] rounded-[8px] size-[32px] top-[16.8px]" data-name="Button7">
      <Icon26 />
    </div>
  );
}

function Icon46() {
  return (
    <div className="h-[10.675px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[9.09%_4.44%_6.07%_6.67%]" data-name="Vector">
        <div className="absolute inset-[-7.17%_-4.98%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 11">
            <path d={svgPaths.p26fa3f0} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.29918" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute content-stretch flex flex-col h-[10.675px] items-start left-[332.46px] top-[92.26px] w-[14.675px]" data-name="Container">
      <Icon46 />
    </div>
  );
}

function Icon47() {
  return (
    <div className="h-[5.325px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[16.667%]" data-name="Vector_2">
        <div className="absolute inset-[-16.667%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
            <path d={svgPaths.p1fb6c700} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.18333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[337.14px] size-[5.325px] top-[94.94px]" data-name="Container">
      <Icon47 />
    </div>
  );
}

function Icon27() {
  return (
    <div className="h-0 relative shrink-0 w-full" data-name="Icon27">
      <Container29 />
      <Container30 />
    </div>
  );
}

function Icon28() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Icon28">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col h-[16px] items-start pb-0 pr-[347.8px] relative w-full">
          <Icon27 />
        </div>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start left-[314px] pb-0 pt-[8px] px-[8px] rounded-[8px] size-[32px] top-[16.8px]" data-name="Button8">
      <Icon28 />
    </div>
  );
}

function PrimitiveDiv2() {
  return <div className="absolute bg-[rgba(0,0,0,0.1)] h-0 left-[354px] top-[32.8px] w-px" data-name="PrimitiveDiv2" />;
}

function Icon48() {
  return (
    <div className="h-[13.325px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[7.143%]" data-name="Vector">
        <div className="absolute inset-[-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d={svgPaths.p2651a300} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.26904" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[382.14px] size-[13.325px] top-[90.94px]" data-name="Container">
      <Icon48 />
    </div>
  );
}

function Icon49() {
  return (
    <div className="h-[4.662px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[20%_13.33%_13.33%_20%]" data-name="Vector_2">
        <div className="absolute inset-[-20%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
            <path d="M1 1V4.10833H4.10833" id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.24333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[382.14px] size-[4.662px] top-[90.94px]" data-name="Container">
      <Icon49 />
    </div>
  );
}

function Icon29() {
  return (
    <div className="h-0 relative shrink-0 w-full" data-name="Icon29">
      <Container31 />
      <Container32 />
    </div>
  );
}

function Icon30() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Icon30">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col h-[16px] items-start pb-0 pr-[396.8px] relative w-full">
          <Icon29 />
        </div>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start left-[363px] pb-0 pt-[8px] px-[8px] rounded-[8px] size-[32px] top-[16.8px]" data-name="Button9">
      <Icon30 />
    </div>
  );
}

function Icon50() {
  return (
    <div className="h-[14.675px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[6.67%_10.26%_4.44%_7.69%]" data-name="Vector">
        <div className="absolute inset-[-4.86%_-6.43%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 15">
            <path d={svgPaths.p35039700} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.26707" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute content-stretch flex flex-col h-[14.675px] items-start left-[418.8px] top-[90.26px] w-[12px]" data-name="Container">
      <Icon50 />
    </div>
  );
}

function Icon51() {
  return (
    <div className="h-[5.338px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[16.667%]" data-name="Vector_2">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
            <path d={svgPaths.p842b140} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.18611" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[425.46px] size-[5.338px] top-[90.26px]" data-name="Container">
      <Icon51 />
    </div>
  );
}

function Icon52() {
  return (
    <div className="h-[4.675px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[20%_13.33%_13.33%_20%]" data-name="Vector_3">
        <div className="absolute inset-[-20%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
            <path d="M4.11667 1L1 4.1167" id="Vector_3" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.24666" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[422.46px] size-[4.675px] top-[97.26px]" data-name="Container">
      <Icon52 />
    </div>
  );
}

function Icon53() {
  return (
    <div className="h-[4.675px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[20%_13.33%_13.33%_20%]" data-name="Vector_4">
        <div className="absolute inset-[-20%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
            <path d="M1 1L4.11667 4.1167" id="Vector_4" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.24666" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[422.46px] size-[4.675px] top-[97.26px]" data-name="Container">
      <Icon53 />
    </div>
  );
}

function Icon31() {
  return (
    <div className="h-0 relative shrink-0 w-full" data-name="Icon31">
      <Container33 />
      <Container34 />
      <Container35 />
      <Container36 />
    </div>
  );
}

function Icon32() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Icon32">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col h-[16px] items-start pb-0 pr-[432.8px] relative w-full">
          <Icon31 />
        </div>
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start left-[399px] pb-0 pt-[8px] px-[8px] rounded-[8px] size-[32px] top-[16.8px]" data-name="Button10">
      <Icon32 />
    </div>
  );
}

function ReportFilters() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="ReportFilters">
      <Container7 />
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

function Container37() {
  return (
    <div className="absolute bg-[#f0f0f0] box-border content-stretch flex flex-col h-[72.8px] items-start left-[1.8px] pb-[0.8px] pt-[4px] px-[8px] top-[61.6px] w-[1148.4px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <ReportFilters />
    </div>
  );
}

function Icon54() {
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

function Button13() {
  return (
    <div className="bg-white h-[32px] opacity-50 relative rounded-[8px] shrink-0 w-[37.6px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[32px] items-center justify-center p-[0.8px] relative w-[37.6px]">
        <Icon54 />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[20px] relative shrink-0 w-[85.25px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[85.25px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[8px] not-italic text-[14px] text-neutral-950 top-[-1.2px] w-[70px]">Page 1 of 5</p>
      </div>
    </div>
  );
}

function Icon55() {
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

function Button14() {
  return (
    <div className="bg-white h-[32px] relative rounded-[8px] shrink-0 w-[37.6px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[32px] items-center justify-center p-[0.8px] relative w-[37.6px]">
        <Icon55 />
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[32px] relative shrink-0 w-[176.45px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[32px] items-center relative w-[176.45px]">
        <Button13 />
        <Text />
        <Button14 />
      </div>
    </div>
  );
}

function Icon56() {
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

function Button15() {
  return (
    <div className="absolute bg-white box-border content-stretch flex h-[32px] items-center justify-center left-0 p-[0.8px] rounded-[8px] top-0 w-[37.6px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Icon56 />
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute h-[20px] left-[45.6px] top-[6px] w-[60px]" data-name="Text">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[30.44px] not-italic text-[14px] text-center text-neutral-950 top-[-1.2px] translate-x-[-50%] w-[35px]">100%</p>
    </div>
  );
}

function Icon57() {
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

function Button16() {
  return (
    <div className="absolute bg-white box-border content-stretch flex h-[32px] items-center justify-center left-[113.6px] p-[0.8px] rounded-[8px] top-0 w-[37.6px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Icon57 />
    </div>
  );
}

function Icon58() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p3f4fc5e0} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M14 2V5.33333H10.6666" id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button17() {
  return (
    <div className="absolute bg-white box-border content-stretch flex h-[32px] items-center justify-center left-[159.2px] p-[0.8px] rounded-[8px] top-0 w-[37.6px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Icon58 />
    </div>
  );
}

function Icon59() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_4008_6986)" id="Icon">
          <path d={svgPaths.p3397ec80} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p4adfe2c} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p27a74a00} id="Vector_3" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_4008_6986">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button18() {
  return (
    <div className="absolute bg-white box-border content-stretch flex h-[32px] items-center justify-center left-[204.8px] p-[0.8px] rounded-[8px] top-0 w-[37.6px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Icon59 />
    </div>
  );
}

function Icon60() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M8 10V2" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p23ad1400} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p19411800} id="Vector_3" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button19() {
  return (
    <div className="absolute bg-white box-border content-stretch flex h-[32px] items-center justify-center left-[250.4px] p-[0.8px] rounded-[8px] top-0 w-[37.6px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Icon60 />
    </div>
  );
}

function Container39() {
  return (
    <div className="h-[32px] relative shrink-0 w-[288px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[32px] relative w-[288px]">
        <Button15 />
        <Text1 />
        <Button16 />
        <Button17 />
        <Button18 />
        <Button19 />
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="bg-[#f0f0f0] h-[48.8px] relative shrink-0 w-[1148.4px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[48.8px] items-center justify-between pb-[0.8px] pt-0 px-[12px] relative w-[1148.4px]">
        <Container38 />
        <Container39 />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[28px] left-[374.86px] not-italic text-[20px] text-center text-neutral-950 text-nowrap top-[-2.2px] translate-x-[-50%] whitespace-pre">Office Report</p>
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[28px] left-[375.46px] not-italic text-[18px] text-center text-neutral-950 text-nowrap top-[-1.4px] translate-x-[-50%] whitespace-pre">Fee Collection Report - Date Wise</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[375.66px] not-italic text-[#4a5565] text-[14px] text-center top-[-1.2px] translate-x-[-50%] w-[156px]">Generated on: 10/7/2025</p>
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[8px] h-[108.8px] items-start left-0 pb-[0.8px] pt-0 px-0 top-0 w-[750.4px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <Heading1 />
      <Heading2 />
      <Paragraph />
    </div>
  );
}

function BoldText() {
  return (
    <div className="absolute content-stretch flex h-[18.4px] items-start left-0 top-[0.8px] w-[72.662px]" data-name="Bold Text">
      <p className="font-['Arial:Bold',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">From Date:</p>
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[367.2px]" data-name="Container">
      <BoldText />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[72.66px] not-italic text-[14px] text-neutral-950 text-nowrap top-[-1.2px] whitespace-pre">Oct 2023</p>
    </div>
  );
}

function BoldText1() {
  return (
    <div className="absolute content-stretch flex h-[18.4px] items-start left-0 top-[0.8px] w-[53.987px]" data-name="Bold Text">
      <p className="font-['Arial:Bold',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">To Date:</p>
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute h-[20px] left-[383.2px] top-0 w-[367.2px]" data-name="Container">
      <BoldText1 />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[53.99px] not-italic text-[14px] text-neutral-950 text-nowrap top-[-1.2px] whitespace-pre">Oct 2023</p>
    </div>
  );
}

function BoldText2() {
  return (
    <div className="absolute content-stretch flex h-[18.4px] items-start left-0 top-[0.8px] w-[48.95px]" data-name="Bold Text">
      <p className="font-['Arial:Bold',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Course:</p>
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute h-[20px] left-0 top-[36px] w-[367.2px]" data-name="Container">
      <BoldText2 />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[48.95px] not-italic text-[14px] text-neutral-950 text-nowrap top-[-1.2px] whitespace-pre">BPHARM</p>
    </div>
  );
}

function BoldText3() {
  return (
    <div className="absolute content-stretch flex h-[18.4px] items-start left-0 top-[0.8px] w-[64.875px]" data-name="Bold Text">
      <p className="font-['Arial:Bold',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Semester:</p>
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute h-[20px] left-[383.2px] top-[36px] w-[367.2px]" data-name="Container">
      <BoldText3 />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[64.88px] not-italic text-[14px] text-neutral-950 text-nowrap top-[-1.2px] whitespace-pre">1</p>
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute h-[56px] left-0 top-[132.8px] w-[750.4px]" data-name="Container">
      <Container42 />
      <Container43 />
      <Container44 />
      <Container45 />
    </div>
  );
}

function HeaderCell() {
  return (
    <div className="absolute h-[32.788px] left-0 top-0 w-[133.512px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Bold',_sans-serif] leading-[16px] left-[8.4px] not-italic text-[12px] text-neutral-950 text-nowrap top-[7.4px] whitespace-pre">Student ID</p>
    </div>
  );
}

function HeaderCell1() {
  return (
    <div className="absolute h-[32.788px] left-[133.51px] top-0 w-[155.8px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Bold',_sans-serif] leading-[16px] left-[8.4px] not-italic text-[12px] text-neutral-950 text-nowrap top-[7.4px] whitespace-pre">Name</p>
    </div>
  );
}

function HeaderCell2() {
  return (
    <div className="absolute h-[32.788px] left-[289.31px] top-0 w-[114.863px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Bold',_sans-serif] leading-[16px] left-[8.4px] not-italic text-[12px] text-neutral-950 text-nowrap top-[7.4px] whitespace-pre">Fee Type</p>
    </div>
  );
}

function HeaderCell3() {
  return (
    <div className="absolute h-[32.788px] left-[404.18px] top-0 w-[108.863px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Bold',_sans-serif] leading-[16px] left-[100.5px] not-italic text-[12px] text-neutral-950 text-nowrap text-right top-[7.4px] translate-x-[-100%] whitespace-pre">Amount</p>
    </div>
  );
}

function HeaderCell4() {
  return (
    <div className="absolute h-[32.788px] left-[513.04px] top-0 w-[145.475px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Bold',_sans-serif] leading-[16px] left-[8.4px] not-italic text-[12px] text-neutral-950 text-nowrap top-[7.4px] whitespace-pre">Date</p>
    </div>
  );
}

function HeaderCell5() {
  return (
    <div className="absolute h-[32.788px] left-[658.51px] top-0 w-[89.487px]" data-name="Header Cell">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Bold',_sans-serif] leading-[16px] left-[8.4px] not-italic text-[12px] text-neutral-950 text-nowrap top-[7.4px] whitespace-pre">Status</p>
    </div>
  );
}

function TableRow() {
  return (
    <div className="absolute bg-gray-100 h-[32.788px] left-0 top-0 w-[748px]" data-name="Table Row">
      <HeaderCell />
      <HeaderCell1 />
      <HeaderCell2 />
      <HeaderCell3 />
      <HeaderCell4 />
      <HeaderCell5 />
    </div>
  );
}

function TableHeader() {
  return (
    <div className="absolute h-[32.788px] left-[0.4px] top-[0.4px] w-[748px]" data-name="Table Header">
      <TableRow />
    </div>
  );
}

function TableCell() {
  return (
    <div className="absolute h-[32.788px] left-0 top-0 w-[133.512px]" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[8.4px] not-italic text-[12px] text-neutral-950 text-nowrap top-[7.4px] whitespace-pre">PH001</p>
    </div>
  );
}

function TableCell1() {
  return (
    <div className="absolute h-[32.788px] left-[133.51px] top-0 w-[155.8px]" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[8.4px] not-italic text-[12px] text-neutral-950 text-nowrap top-[7.4px] whitespace-pre">John Doe</p>
    </div>
  );
}

function TableCell2() {
  return (
    <div className="absolute h-[32.788px] left-[289.31px] top-0 w-[114.863px]" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[8.4px] not-italic text-[12px] text-neutral-950 text-nowrap top-[7.4px] whitespace-pre">Tuition</p>
    </div>
  );
}

function TableCell3() {
  return (
    <div className="absolute h-[32.788px] left-[404.18px] top-0 w-[108.863px]" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[101.04px] not-italic text-[12px] text-neutral-950 text-nowrap text-right top-[7.4px] translate-x-[-100%] whitespace-pre">₹25,000</p>
    </div>
  );
}

function TableCell4() {
  return (
    <div className="absolute h-[32.788px] left-[513.04px] top-0 w-[145.475px]" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[8.4px] not-italic text-[12px] text-neutral-950 text-nowrap top-[7.4px] whitespace-pre">15-Oct-2023</p>
    </div>
  );
}

function TableCell5() {
  return (
    <div className="absolute h-[32.788px] left-[658.51px] top-0 w-[89.487px]" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[8.4px] not-italic text-[12px] text-neutral-950 text-nowrap top-[7.4px] whitespace-pre">Paid</p>
    </div>
  );
}

function TableRow1() {
  return (
    <div className="absolute h-[32.788px] left-0 top-0 w-[748px]" data-name="Table Row">
      <TableCell />
      <TableCell1 />
      <TableCell2 />
      <TableCell3 />
      <TableCell4 />
      <TableCell5 />
    </div>
  );
}

function TableCell6() {
  return (
    <div className="absolute h-[32.788px] left-0 top-0 w-[133.512px]" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[8.4px] not-italic text-[12px] text-neutral-950 text-nowrap top-[7.4px] whitespace-pre">PH002</p>
    </div>
  );
}

function TableCell7() {
  return (
    <div className="absolute h-[32.788px] left-[133.51px] top-0 w-[155.8px]" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[8.4px] not-italic text-[12px] text-neutral-950 text-nowrap top-[7.4px] whitespace-pre">Jane Smith</p>
    </div>
  );
}

function TableCell8() {
  return (
    <div className="absolute h-[32.788px] left-[289.31px] top-0 w-[114.863px]" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[8.4px] not-italic text-[12px] text-neutral-950 text-nowrap top-[7.4px] whitespace-pre">Exam</p>
    </div>
  );
}

function TableCell9() {
  return (
    <div className="absolute h-[32.788px] left-[404.18px] top-0 w-[108.863px]" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[100.51px] not-italic text-[12px] text-neutral-950 text-nowrap text-right top-[7.4px] translate-x-[-100%] whitespace-pre">₹5,000</p>
    </div>
  );
}

function TableCell10() {
  return (
    <div className="absolute h-[32.788px] left-[513.04px] top-0 w-[145.475px]" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[8.4px] not-italic text-[12px] text-neutral-950 text-nowrap top-[7.4px] whitespace-pre">18-Oct-2023</p>
    </div>
  );
}

function TableCell11() {
  return (
    <div className="absolute h-[32.788px] left-[658.51px] top-0 w-[89.487px]" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[8.4px] not-italic text-[12px] text-neutral-950 text-nowrap top-[7.4px] whitespace-pre">Paid</p>
    </div>
  );
}

function TableRow2() {
  return (
    <div className="absolute h-[32.788px] left-0 top-[32.79px] w-[748px]" data-name="Table Row">
      <TableCell6 />
      <TableCell7 />
      <TableCell8 />
      <TableCell9 />
      <TableCell10 />
      <TableCell11 />
    </div>
  );
}

function TableCell12() {
  return (
    <div className="absolute h-[32.788px] left-0 top-0 w-[133.512px]" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[8.4px] not-italic text-[12px] text-neutral-950 text-nowrap top-[7.4px] whitespace-pre">PH003</p>
    </div>
  );
}

function TableCell13() {
  return (
    <div className="absolute h-[32.788px] left-[133.51px] top-0 w-[155.8px]" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[8.4px] not-italic text-[12px] text-neutral-950 text-nowrap top-[7.4px] whitespace-pre">Mike Johnson</p>
    </div>
  );
}

function TableCell14() {
  return (
    <div className="absolute h-[32.788px] left-[289.31px] top-0 w-[114.863px]" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[8.4px] not-italic text-[12px] text-neutral-950 text-nowrap top-[7.4px] whitespace-pre">Library</p>
    </div>
  );
}

function TableCell15() {
  return (
    <div className="absolute h-[32.788px] left-[404.18px] top-0 w-[108.863px]" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[100.51px] not-italic text-[12px] text-neutral-950 text-nowrap text-right top-[7.4px] translate-x-[-100%] whitespace-pre">₹2,000</p>
    </div>
  );
}

function TableCell16() {
  return (
    <div className="absolute h-[32.788px] left-[513.04px] top-0 w-[145.475px]" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[8.4px] not-italic text-[12px] text-neutral-950 text-nowrap top-[7.4px] whitespace-pre">20-Oct-2023</p>
    </div>
  );
}

function TableCell17() {
  return (
    <div className="absolute h-[32.788px] left-[658.51px] top-0 w-[89.487px]" data-name="Table Cell">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[8.4px] not-italic text-[12px] text-neutral-950 text-nowrap top-[7.4px] whitespace-pre">Paid</p>
    </div>
  );
}

function TableRow3() {
  return (
    <div className="absolute h-[32.788px] left-0 top-[65.58px] w-[748px]" data-name="Table Row">
      <TableCell12 />
      <TableCell13 />
      <TableCell14 />
      <TableCell15 />
      <TableCell16 />
      <TableCell17 />
    </div>
  );
}

function TableBody() {
  return (
    <div className="absolute h-[98.362px] left-[0.4px] top-[33.19px] w-[748px]" data-name="Table Body">
      <TableRow1 />
      <TableRow2 />
      <TableRow3 />
    </div>
  );
}

function Table() {
  return (
    <div className="h-[131.95px] relative shrink-0 w-full" data-name="Table">
      <TableHeader />
      <TableBody />
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[133.55px] items-start left-0 p-[0.8px] top-[212.8px] w-[750.4px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <Table />
    </div>
  );
}

function BoldText4() {
  return (
    <div className="absolute content-stretch flex h-[18.4px] items-start left-0 top-[0.8px] w-[92.112px]" data-name="Bold Text">
      <p className="font-['Arial:Bold',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Total Records:</p>
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[367.2px]" data-name="Container">
      <BoldText4 />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[92.11px] not-italic text-[14px] text-neutral-950 text-nowrap top-[-1.2px] whitespace-pre">3</p>
    </div>
  );
}

function BoldText5() {
  return (
    <div className="absolute content-stretch flex h-[18.4px] items-start left-0 top-[0.8px] w-[93.737px]" data-name="Bold Text">
      <p className="font-['Arial:Bold',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Total Amount:</p>
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute h-[20px] left-[383.2px] top-0 w-[367.2px]" data-name="Container">
      <BoldText5 />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[93.74px] not-italic text-[14px] text-neutral-950 text-nowrap top-[-1.2px] whitespace-pre">₹32,000</p>
    </div>
  );
}

function BoldText6() {
  return (
    <div className="absolute content-stretch flex h-[18.4px] items-start left-0 top-[0.8px] w-[89.713px]" data-name="Bold Text">
      <p className="font-['Arial:Bold',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Paid Amount:</p>
    </div>
  );
}

function Container50() {
  return (
    <div className="absolute h-[20px] left-0 top-[36px] w-[367.2px]" data-name="Container">
      <BoldText6 />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[89.71px] not-italic text-[14px] text-neutral-950 text-nowrap top-[-1.2px] whitespace-pre">₹32,000</p>
    </div>
  );
}

function BoldText7() {
  return (
    <div className="absolute content-stretch flex h-[18.4px] items-start left-0 top-[0.8px] w-[115.287px]" data-name="Bold Text">
      <p className="font-['Arial:Bold',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Pending Amount:</p>
    </div>
  );
}

function Container51() {
  return (
    <div className="absolute h-[20px] left-[383.2px] top-[36px] w-[367.2px]" data-name="Container">
      <BoldText7 />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[115.29px] not-italic text-[14px] text-neutral-950 text-nowrap top-[-1.2px] whitespace-pre">₹0</p>
    </div>
  );
}

function Container52() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="Container">
      <Container48 />
      <Container49 />
      <Container50 />
      <Container51 />
    </div>
  );
}

function Container53() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[72.8px] items-start left-0 pb-0 pt-[16.8px] px-0 top-[370.35px] w-[750.4px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.8px_0px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <Container52 />
    </div>
  );
}

function Container54() {
  return (
    <div className="absolute h-[15.988px] left-0 top-[475.15px] w-[750.4px]" data-name="Container">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[375.51px] not-italic text-[#6a7282] text-[12px] text-center top-[-1px] translate-x-[-50%] w-[60px]">Page 1 of 5</p>
    </div>
  );
}

function Container55() {
  return (
    <div className="h-[491.138px] relative shrink-0 w-full" data-name="Container">
      <Container41 />
      <Container46 />
      <Container47 />
      <Container53 />
      <Container54 />
    </div>
  );
}

function Container56() {
  return (
    <div className="bg-white h-[1056px] relative shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col h-[1056px] items-start pb-[0.8px] pt-[32.8px] px-[32.8px] relative w-full">
          <Container55 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-gray-200 border-solid inset-0 pointer-events-none shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container57() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[1148.4px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-full items-start overflow-clip pb-0 pt-[16px] px-[166.2px] relative rounded-[inherit] w-[1148.4px]">
        <Container56 />
      </div>
    </div>
  );
}

function ReportContent() {
  return (
    <div className="absolute bg-[#9fb6c4] content-stretch flex flex-col gap-[3.815e_-6px] h-[1136.8px] items-start left-[1.8px] top-[134.4px] w-[1148.4px]" data-name="ReportContent">
      <Container40 />
      <Container57 />
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[120.162px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[120.162px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[-1.2px] whitespace-pre">Current Page No.: 1</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[103.287px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[103.287px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[-1.2px] whitespace-pre">Total Page No.: 5</p>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[20px] relative shrink-0 w-[203.512px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[203.512px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[-1.2px] whitespace-pre">Document: Fee Collection Report</p>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="h-[20px] relative shrink-0 w-[474.962px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[24px] h-[20px] items-center relative w-[474.962px]">
        <Text2 />
        <Text3 />
        <Text4 />
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[20px] relative shrink-0 w-[37.438px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[37.438px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[-1.2px] whitespace-pre">Ready</p>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[20px] relative shrink-0 w-[119.025px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[119.025px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[-1.2px] whitespace-pre">Zoom Factor: 100%</p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="h-[20px] relative shrink-0 w-[172.463px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[16px] h-[20px] items-center relative w-[172.463px]">
        <Text5 />
        <Text6 />
      </div>
    </div>
  );
}

function StatusBar() {
  return (
    <div className="absolute bg-[#e6e6e6] box-border content-stretch flex h-[36.8px] items-center justify-between left-[1.8px] pb-0 pt-[0.8px] px-[16px] top-[1271.2px] w-[1148.4px]" data-name="StatusBar">
      <div aria-hidden="true" className="absolute border-[0.8px_0px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <Container58 />
      <Container59 />
    </div>
  );
}

export default function FeeCollectionCanceled() {
  return (
    <div className="bg-white relative size-full" data-name="Fee Collection / Canceled">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0.8px] border-solid inset-0 pointer-events-none shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <ReportHeader />
      <Container37 />
      <ReportContent />
      <StatusBar />
    </div>
  );
}