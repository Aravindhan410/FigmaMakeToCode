import svgPaths from "./svg-bkyilrxyia";

function Label() {
  return (
    <div className="h-[20px] relative shrink-0 w-[71px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[71px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[30px] not-italic text-[14px] text-neutral-950 text-nowrap top-[-1.2px] whitespace-pre">Course</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white h-[32px] relative rounded-[8px] shrink-0 w-[89px]" data-name="Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[32px] w-[89px]" />
      <div aria-hidden="true" className="absolute border-[#cad5e2] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Label1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[68px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[68px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[30px] not-italic text-[14px] text-neutral-950 text-nowrap top-[-1.2px] whitespace-pre">Sem</p>
      </div>
    </div>
  );
}

function Label2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[34px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[34px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-1.2px] whitespace-pre">L No</p>
      </div>
    </div>
  );
}

function Label3() {
  return (
    <div className="relative shrink-0 w-[90px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[10px] items-center relative w-[90px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Student Name</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="basis-0 grow h-[32px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[32px] items-center relative w-full">
        <Label />
        <Input />
        <Label1 />
        <Input />
        <Label2 />
        <Input />
        <Label3 />
        <Input />
      </div>
    </div>
  );
}

function PrimitiveButton() {
  return (
    <div className="bg-[#f3f3f5] relative rounded-[4px] shrink-0 size-[16px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[16px]" />
    </div>
  );
}

function PrimitiveLabel() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="Primitive.label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[20px] items-center relative w-full">
        <PrimitiveButton />
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#364153] text-[14px] text-nowrap whitespace-pre">Include Paid Deposit</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-slate-200 h-[32px] relative rounded-[8px] shrink-0 w-[129.463px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#90a1b9] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[32px] relative w-[129.463px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[36.8px] not-italic text-[14px] text-neutral-950 text-nowrap top-[4.8px] whitespace-pre">Personal</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[32px] relative shrink-0 w-[351.025px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[32px] items-center justify-end relative w-[351.025px]">
        <PrimitiveLabel />
        <Button />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex h-[32px] items-center justify-between left-[12px] top-[12px] w-[1096px]" data-name="Container">
      <Container />
      <Container2 />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute h-[80.8px] left-0 top-0 w-[1120px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.8px_0px_0px] border-gray-200 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Icon() {
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

function Container5() {
  return (
    <div className="absolute content-stretch flex flex-col h-[7.325px] items-start left-[24.66px] top-[187.74px] w-[14.675px]" data-name="Container">
      <Icon />
    </div>
  );
}

function Icon1() {
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

function Container6() {
  return (
    <div className="absolute content-stretch flex flex-col h-[6px] items-start left-[27.34px] top-[183.06px] w-[9.325px]" data-name="Container">
      <Icon1 />
    </div>
  );
}

function Icon2() {
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

function Container7() {
  return (
    <div className="absolute content-stretch flex flex-col h-[6.675px] items-start left-[27.34px] top-[191.06px] w-[9.325px]" data-name="Container">
      <Icon2 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="h-0 relative shrink-0 w-full" data-name="Icon">
      <Container5 />
      <Container6 />
      <Container7 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Icon11">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col h-[16px] items-start pb-0 pr-[40px] relative w-full">
          <Icon3 />
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

function Icon4() {
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

function Container8() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[61.34px] size-[13.325px] top-[183.74px]" data-name="Container">
      <Icon4 />
    </div>
  );
}

function Icon5() {
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

function Container9() {
  return (
    <div className="absolute content-stretch flex flex-col h-[6.662px] items-start left-[64px] top-[190.4px] w-[8px]" data-name="Container">
      <Icon5 />
    </div>
  );
}

function Icon6() {
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

function Container10() {
  return (
    <div className="absolute content-stretch flex flex-col h-[4.662px] items-start left-[64px] top-[183.74px] w-[6.662px]" data-name="Container">
      <Icon6 />
    </div>
  );
}

function Icon13() {
  return (
    <div className="h-0 relative shrink-0 w-full" data-name="Icon13">
      <Container8 />
      <Container9 />
      <Container10 />
    </div>
  );
}

function Icon14() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Icon14">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col h-[16px] items-start pb-0 pr-[76px] relative w-full">
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

function Icon7() {
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

function Container11() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[100.66px] size-[10.675px] top-[187.06px]" data-name="Container">
      <Icon7 />
    </div>
  );
}

function Icon8() {
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

function Container12() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[96.66px] size-[10.675px] top-[183.06px]" data-name="Container">
      <Icon8 />
    </div>
  );
}

function Icon15() {
  return (
    <div className="h-0 relative shrink-0 w-full" data-name="Icon15">
      <Container11 />
      <Container12 />
    </div>
  );
}

function Icon16() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Icon16">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col h-[16px] items-start pb-0 pr-[112px] relative w-full">
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

function Icon9() {
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

function Container13() {
  return (
    <div className="absolute content-stretch flex flex-col h-[5.338px] items-start left-[132.66px] top-[186.4px] w-[14.675px]" data-name="Container">
      <Icon9 />
    </div>
  );
}

function Icon10() {
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

function Container14() {
  return (
    <div className="absolute content-stretch flex flex-col h-[12px] items-start left-[132.66px] top-[184.4px] w-[14.675px]" data-name="Container">
      <Icon10 />
    </div>
  );
}

function Icon17() {
  return (
    <div className="h-0 relative shrink-0 w-full" data-name="Icon17">
      <Container13 />
      <Container14 />
    </div>
  );
}

function Icon18() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Icon18">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col h-[16px] items-start pb-0 pr-[148px] relative w-full">
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

function Icon12() {
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

function Container15() {
  return (
    <div className="absolute content-stretch flex flex-col h-[10.675px] items-start left-[183.66px] top-[185.06px] w-[6px]" data-name="Container">
      <Icon12 />
    </div>
  );
}

function Icon33() {
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

function Container16() {
  return (
    <div className="absolute content-stretch flex flex-col h-[1.325px] items-start left-[183.66px] top-[189.74px] w-[10.675px]" data-name="Container">
      <Icon33 />
    </div>
  );
}

function Icon19() {
  return (
    <div className="h-0 relative shrink-0 w-full" data-name="Icon19">
      <Container15 />
      <Container16 />
    </div>
  );
}

function Icon20() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Icon20">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col h-[16px] items-start pb-0 pr-[197px] relative w-full">
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

function Icon34() {
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

function Container17() {
  return (
    <div className="absolute content-stretch flex flex-col h-[1.325px] items-start left-[219.66px] top-[189.74px] w-[10.675px]" data-name="Container">
      <Icon34 />
    </div>
  );
}

function Icon35() {
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

function Container18() {
  return (
    <div className="absolute content-stretch flex flex-col h-[10.675px] items-start left-[224.34px] top-[185.06px] w-[6px]" data-name="Container">
      <Icon35 />
    </div>
  );
}

function Icon21() {
  return (
    <div className="h-0 relative shrink-0 w-full" data-name="Icon21">
      <Container17 />
      <Container18 />
    </div>
  );
}

function Icon22() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Icon22">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col h-[16px] items-start pb-0 pr-[233px] relative w-full">
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

function Icon36() {
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

function Container19() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[267.34px] size-[12px] top-[183.74px]" data-name="Container">
      <Icon36 />
    </div>
  );
}

function Icon37() {
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

function Container20() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[276.44px] size-[4.225px] top-[192.84px]" data-name="Container">
      <Icon37 />
    </div>
  );
}

function Icon38() {
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

function Container21() {
  return (
    <div className="absolute content-stretch flex flex-col h-[1.337px] items-start left-[270.66px] top-[189.06px] w-[5.338px]" data-name="Container">
      <Icon38 />
    </div>
  );
}

function Icon23() {
  return (
    <div className="h-0 relative shrink-0 w-full" data-name="Icon23">
      <Container19 />
      <Container20 />
      <Container21 />
    </div>
  );
}

function Icon24() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Icon24">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col h-[16px] items-start pb-0 pr-[282px] relative w-full">
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
    <div className="absolute content-stretch flex flex-col items-start left-[303.34px] size-[12px] top-[183.74px]" data-name="Container">
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
    <div className="absolute content-stretch flex flex-col items-start left-[312.44px] size-[4.225px] top-[192.84px]" data-name="Container">
      <Icon40 />
    </div>
  );
}

function Icon41() {
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

function Container24() {
  return (
    <div className="absolute content-stretch flex flex-col h-[5.338px] items-start left-[308.66px] top-[187.06px] w-[1.337px]" data-name="Container">
      <Icon41 />
    </div>
  );
}

function Icon42() {
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

function Container25() {
  return (
    <div className="absolute content-stretch flex flex-col h-[1.337px] items-start left-[306.66px] top-[189.06px] w-[5.338px]" data-name="Container">
      <Icon42 />
    </div>
  );
}

function Icon25() {
  return (
    <div className="h-0 relative shrink-0 w-full" data-name="Icon25">
      <Container22 />
      <Container23 />
      <Container24 />
      <Container25 />
    </div>
  );
}

function Icon26() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Icon26">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col h-[16px] items-start pb-0 pr-[318px] relative w-full">
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

function Icon43() {
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

function Container26() {
  return (
    <div className="absolute content-stretch flex flex-col h-[10.675px] items-start left-[338.66px] top-[185.06px] w-[14.675px]" data-name="Container">
      <Icon43 />
    </div>
  );
}

function Icon44() {
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

function Container27() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[343.34px] size-[5.325px] top-[187.74px]" data-name="Container">
      <Icon44 />
    </div>
  );
}

function Icon27() {
  return (
    <div className="h-0 relative shrink-0 w-full" data-name="Icon27">
      <Container26 />
      <Container27 />
    </div>
  );
}

function Icon28() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Icon28">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col h-[16px] items-start pb-0 pr-[354px] relative w-full">
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

function Icon45() {
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

function Container28() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[388.34px] size-[13.325px] top-[183.74px]" data-name="Container">
      <Icon45 />
    </div>
  );
}

function Icon46() {
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

function Container29() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[388.34px] size-[4.662px] top-[183.74px]" data-name="Container">
      <Icon46 />
    </div>
  );
}

function Icon29() {
  return (
    <div className="h-0 relative shrink-0 w-full" data-name="Icon29">
      <Container28 />
      <Container29 />
    </div>
  );
}

function Icon30() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Icon30">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col h-[16px] items-start pb-0 pr-[403px] relative w-full">
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

function Icon47() {
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

function Container30() {
  return (
    <div className="absolute content-stretch flex flex-col h-[14.675px] items-start left-[425px] top-[183.06px] w-[12px]" data-name="Container">
      <Icon47 />
    </div>
  );
}

function Icon48() {
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

function Container31() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[431.66px] size-[5.338px] top-[183.06px]" data-name="Container">
      <Icon48 />
    </div>
  );
}

function Icon49() {
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

function Container32() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[428.66px] size-[4.675px] top-[190.06px]" data-name="Container">
      <Icon49 />
    </div>
  );
}

function Icon50() {
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

function Container33() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[428.66px] size-[4.675px] top-[190.06px]" data-name="Container">
      <Icon50 />
    </div>
  );
}

function Icon31() {
  return (
    <div className="h-0 relative shrink-0 w-full" data-name="Icon31">
      <Container30 />
      <Container31 />
      <Container32 />
      <Container33 />
    </div>
  );
}

function Icon32() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Icon32">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col h-[16px] items-start pb-0 pr-[439px] relative w-full">
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
    <div className="absolute h-[64px] left-[3px] top-[-2px] w-[1120px]" data-name="ReportFilters">
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

function Container1() {
  return (
    <div className="absolute bg-white h-[60px] left-0 top-[50px] w-[1120px]" data-name="Container1">
      <Container4 />
      <ReportFilters />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex h-[18.4px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4a5565] text-[14px] text-nowrap whitespace-pre">Main Report</p>
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute bg-gray-100 box-border content-stretch flex flex-col h-[32.8px] items-start left-[-7px] pb-[0.8px] pl-[16px] pr-[1027.83px] pt-[7.2px] top-[107px] w-[1120px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0px_0px_0.8px] border-solid inset-0 pointer-events-none" />
      <Text />
    </div>
  );
}

function OfficeReportHeader() {
  return (
    <div className="bg-slate-100 h-[137.6px] relative shrink-0 w-[1120px]" data-name="OfficeReportHeader">
      <div aria-hidden="true" className="absolute border-[#cad5e2] border-[0px_0px_0.8px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[137.6px] relative w-[1120px]">
        <Container3 />
        <Container1 />
        <Container34 />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute h-[28px] left-[17.6px] top-[9.6px] w-[552.95px]" data-name="Heading 1">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[28px] left-[276.5px] not-italic text-[#e7000b] text-[18px] text-center text-nowrap top-[-1.4px] translate-x-[-50%] whitespace-pre">GRT INSTITUTE OF PHARMACEUTICAL EDUCATION AND RESEARCH</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[20px] left-[17.6px] top-[37.6px] w-[552.95px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[276.01px] not-italic text-[#e7000b] text-[14px] text-center text-nowrap top-[-1.2px] translate-x-[-50%] whitespace-pre">GRT MAHABALIPURAM NAGAR, CHENNAI TIRUPATHY HIGHWAY TIRUTTANI - 631 209</p>
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute h-[67.2px] left-[121.92px] top-0 w-[588.15px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e7000b] border-[1.6px] border-solid inset-0 pointer-events-none" />
      <Heading1 />
      <Paragraph />
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute h-[28px] left-0 top-[99.2px] w-[832px]" data-name="Heading 2">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[28px] left-[416.57px] not-italic text-[20px] text-center text-neutral-950 text-nowrap top-[-2.2px] translate-x-[-50%] whitespace-pre">Personal Ledger</p>
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[127.2px] relative shrink-0 w-full" data-name="Container">
      <Container35 />
      <Heading2 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-[415.96px] not-italic text-[16px] text-center text-neutral-950 text-nowrap top-[-2.2px] translate-x-[-50%] whitespace-pre">Prepared by: _________________</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-[416.43px] not-italic text-[16px] text-center text-neutral-950 text-nowrap top-[-2.2px] translate-x-[-50%] whitespace-pre">Signature: _________________</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-[416.55px] not-italic text-[16px] text-center text-neutral-950 text-nowrap top-[-2.2px] translate-x-[-50%] whitespace-pre">Date: _________________</p>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[88px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph1 />
      <Paragraph2 />
      <Paragraph3 />
    </div>
  );
}

function Container38() {
  return (
    <div className="bg-white h-[588.8px] relative rounded-[10px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[32px] h-[588.8px] items-start pb-0 pt-[32px] px-[32px] relative w-full">
          <Container36 />
          <Container37 />
        </div>
      </div>
    </div>
  );
}

function ReportContent() {
  return (
    <div className="basis-0 bg-slate-200 grow min-h-px min-w-px relative shrink-0 w-[1120px]" data-name="ReportContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-full items-start pb-0 pt-[24px] px-[112px] relative w-[1120px]">
        <Container38 />
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[120.162px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[120.162px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-0 not-italic text-[#45556c] text-[14px] text-nowrap top-[-1.2px] whitespace-pre">Current Page No.: 1</p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[103.287px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[103.287px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-0 not-italic text-[#45556c] text-[14px] text-nowrap top-[-1.2px] whitespace-pre">Total Page No.: 1</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[119.025px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[119.025px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-0 not-italic text-[#45556c] text-[14px] text-nowrap top-[-1.2px] whitespace-pre">Zoom Factor: 100%</p>
      </div>
    </div>
  );
}

function OfficeReportFooter() {
  return (
    <div className="bg-slate-100 h-[36.8px] relative shrink-0 w-[1120px]" data-name="OfficeReportFooter">
      <div aria-hidden="true" className="absolute border-[#cad5e2] border-[0.8px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[36.8px] items-center justify-between pb-0 pt-[0.8px] px-[16px] relative w-[1120px]">
        <Text1 />
        <Text2 />
        <Text3 />
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col h-[800px] items-start relative shrink-0 w-full" data-name="Container">
      <OfficeReportHeader />
      <ReportContent />
      <OfficeReportFooter />
    </div>
  );
}

function Container40() {
  return (
    <div className="bg-white h-[868.8px] relative rounded-[10px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] shrink-0 w-[1120px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[868.8px] items-start overflow-clip relative rounded-[inherit] w-[1120px]">
        <Container39 />
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="bg-[#cad5e2] content-stretch flex h-[900.8px] items-center justify-center relative shrink-0 w-full" data-name="App">
      <Container40 />
    </div>
  );
}

export default function PersonalLedger() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Personal Ledger">
      <App />
    </div>
  );
}