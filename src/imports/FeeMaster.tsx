import svgPaths from "./svg-vgmhyllxof";

function Label() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-0 not-italic text-[14px] text-black text-nowrap top-[-1.2px] whitespace-pre">Academic</p>
    </div>
  );
}

function Option() {
  return <div className="absolute left-[-431.6px] size-0 top-[44px]" data-name="Option" />;
}

function Dropdown() {
  return (
    <div className="bg-white h-[32px] relative rounded-[4px] shrink-0 w-full" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[4px]" />
      {[...Array(4).keys()].map((_, i) => (
        <Option key={i} />
      ))}
    </div>
  );
}

function FormField() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[56px] items-start left-[16px] top-[16px] w-[288px]" data-name="FormField">
      <Label />
      <Dropdown />
    </div>
  );
}

function Label1() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-0 not-italic text-[14px] text-black text-nowrap top-[-1.2px] whitespace-pre">Mode of Join</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute left-[362px] size-[16px] top-[10px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d={svgPaths.pb7adf00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Mode() {
  return (
    <div className="bg-white h-[32px] relative rounded-[8px] shrink-0 w-[288px]" data-name="mode">
      <div className="h-[32px] overflow-clip relative rounded-[inherit] w-[288px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[21px] left-[24px] not-italic text-[14px] text-black text-nowrap top-[calc(50%-10px)] whitespace-pre">select...</p>
        <Frame />
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function FormField1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[56px] items-start left-[16px] top-[84px] w-[288px]" data-name="FormField">
      <Label1 />
      <Mode />
    </div>
  );
}

function Label2() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-0 not-italic text-[14px] text-black text-nowrap top-[-1.2px] whitespace-pre">Type</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute left-[362px] size-[16px] top-[10px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d={svgPaths.pb7adf00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Type() {
  return (
    <div className="bg-white h-[32px] relative rounded-[8px] shrink-0 w-[288px]" data-name="type">
      <div className="h-[32px] overflow-clip relative rounded-[inherit] w-[288px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[21px] left-[24px] not-italic text-[14px] text-black text-nowrap top-[calc(50%-10px)] whitespace-pre">select</p>
        <Frame1 />
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function FormField2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[56px] items-start left-[16px] top-[152px] w-[288px]" data-name="FormField">
      <Label2 />
      <Type />
    </div>
  );
}

function Label3() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-0 not-italic text-[14px] text-black text-nowrap top-[-1.2px] whitespace-pre">Course</p>
    </div>
  );
}

function Option4() {
  return <div className="absolute left-[-431.6px] size-0 top-[-160px]" data-name="Option" />;
}

function Dropdown1() {
  return (
    <div className="bg-white h-[32px] relative rounded-[4px] shrink-0 w-full" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[4px]" />
      {[...Array(5).keys()].map((_, i) => (
        <Option4 key={i} />
      ))}
    </div>
  );
}

function FormField3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[56px] items-start left-[16px] top-[220px] w-[288px]" data-name="FormField">
      <Label3 />
      <Dropdown1 />
    </div>
  );
}

function Label4() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-0 not-italic text-[14px] text-black text-nowrap top-[-1.2px] whitespace-pre">CNo</p>
    </div>
  );
}

function TextInput() {
  return (
    <div className="bg-white h-[32px] relative rounded-[4px] shrink-0 w-full" data-name="TextInput">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[32px] items-center px-[8px] py-0 relative w-full">
          <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#364153] text-[14px] text-nowrap whitespace-pre">4000</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function FormField4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[56px] items-start left-[16px] top-[288px] w-[288px]" data-name="FormField">
      <Label4 />
      <TextInput />
    </div>
  );
}

function Label5() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-0 not-italic text-[14px] text-black text-nowrap top-[-1.2px] whitespace-pre">Yno</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute left-[362px] size-[16px] top-[10px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d={svgPaths.pb7adf00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Yno() {
  return (
    <div className="bg-white h-[32px] relative rounded-[8px] shrink-0 w-[288px]" data-name="yno">
      <div className="h-[32px] overflow-clip relative rounded-[inherit] w-[288px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[21px] left-[24px] not-italic text-[14px] text-black text-nowrap top-[calc(50%-10px)] whitespace-pre">select...</p>
        <Frame2 />
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function FormField5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[56px] items-start left-[16px] top-[356px] w-[288px]" data-name="FormField">
      <Label5 />
      <Yno />
    </div>
  );
}

function Label6() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-0 not-italic text-[14px] text-black text-nowrap top-[-1.2px] whitespace-pre">Term wise</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute left-[362px] size-[16px] top-[10px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d={svgPaths.pb7adf00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Term() {
  return (
    <div className="bg-white h-[32px] relative rounded-[8px] shrink-0 w-[288px]" data-name="term">
      <div className="h-[32px] overflow-clip relative rounded-[inherit] w-[288px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[21px] left-[24px] not-italic text-[14px] text-black text-nowrap top-[calc(50%-10px)] whitespace-pre">select...</p>
        <Frame3 />
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function FormField6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[56px] items-start left-[16px] top-[424px] w-[288px]" data-name="FormField">
      <Label6 />
      <Term />
    </div>
  );
}

function Label7() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-0 not-italic text-[14px] text-black text-nowrap top-[-1.2px] whitespace-pre">Quota</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute left-[362px] size-[16px] top-[10px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d={svgPaths.pb7adf00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Quota() {
  return (
    <div className="bg-white h-[32px] relative rounded-[8px] shrink-0 w-[288px]" data-name="quota">
      <div className="h-[32px] overflow-clip relative rounded-[inherit] w-[288px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[21px] left-[24px] not-italic text-[14px] text-black text-nowrap top-[calc(50%-10px)] whitespace-pre">Select</p>
        <Frame4 />
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function FormField7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[56px] items-start left-[16px] top-[492px] w-[288px]" data-name="FormField">
      <Label7 />
      <Quota />
    </div>
  );
}

function Button({ onClick }: { onClick?: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="bg-[#0055ff] h-[36px] relative rounded-[4px] shrink-0 w-full cursor-pointer hover:bg-[#0044dd] transition-colors" 
      data-name="Button"
    >
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[16px] not-italic text-[14px] text-nowrap text-white top-[6.8px] whitespace-pre">Add New Fee</p>
    </button>
  );
}

function Button1({ onClick }: { onClick?: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="bg-[#0055ff] h-[36px] relative rounded-[4px] shrink-0 w-full cursor-pointer hover:bg-[#0044dd] transition-colors" 
      data-name="Button"
    >
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[16px] not-italic text-[14px] text-nowrap text-white top-[6.8px] whitespace-pre">Add Mess Fee</p>
    </button>
  );
}

function Container({ onAddNewFee, onAddMessFee }: { onAddNewFee?: () => void; onAddMessFee?: () => void }) {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[80px] items-start left-[16px] top-[564px] w-[288px]" data-name="Container">
      <Button onClick={onAddNewFee} />
      <Button1 onClick={onAddMessFee} />
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[288.98px] not-italic text-[14px] text-black text-nowrap text-right top-[-1.2px] translate-x-[-100%] whitespace-pre">Fee No.</p>
    </div>
  );
}

function Label8() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-0 not-italic text-[14px] text-black text-nowrap top-[-1.2px] whitespace-pre">Fee Type</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute left-[362px] size-[16px] top-[10px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d={svgPaths.pb7adf00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Fee() {
  return (
    <div className="bg-white h-[32px] relative rounded-[8px] shrink-0 w-[288px]" data-name="fee">
      <div className="h-[32px] overflow-clip relative rounded-[inherit] w-[288px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[21px] left-[24px] not-italic text-[14px] text-black text-nowrap top-[calc(50%-10px)] whitespace-pre">select...</p>
        <Frame5 />
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function FormField8() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[56px] items-start relative shrink-0 w-full" data-name="FormField">
      <Label8 />
      <Fee />
    </div>
  );
}

function Label9() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-0 not-italic text-[14px] text-black text-nowrap top-[-1.2px] whitespace-pre">Amount</p>
    </div>
  );
}

function NumberInput() {
  return (
    <div className="absolute bg-white h-[32px] left-0 rounded-[4px] top-0 w-[288px]" data-name="Number Input">
      <div className="box-border content-stretch flex h-[32px] items-center overflow-clip pl-[8px] pr-[24px] py-0 relative rounded-[inherit] w-[288px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#364153] text-[14px] text-nowrap whitespace-pre">0</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Button2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[16px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] text-nowrap whitespace-pre">▲</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[16px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-full items-center justify-center relative w-[16px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] text-nowrap whitespace-pre">▼</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col h-[32px] items-start left-[268px] top-0 w-[16px]" data-name="Container">
      <Button2 />
      <Button3 />
    </div>
  );
}

function NumberInput1() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="NumberInput">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
      <NumberInput />
      <Container2 />
    </div>
  );
}

function FormField9() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[56px] items-start relative shrink-0 w-full" data-name="FormField">
      <Label9 />
      <NumberInput1 />
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#0068ff] h-[36px] relative rounded-[4px] shrink-0 w-full" data-name="Button">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[16px] not-italic text-[14px] text-nowrap text-white top-[6.8px] whitespace-pre">SUBMIT</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[12px] h-[236.8px] items-start left-[16px] pb-0 pt-[16.8px] px-0 top-[660px] w-[288px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#6a7282] border-[0.8px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Container1 />
      <FormField8 />
      <FormField9 />
      <Button4 />
    </div>
  );
}

function Container4({ onAddNewFee, onAddMessFee }: { onAddNewFee?: () => void; onAddMessFee?: () => void }) {
  return (
    <div className="absolute bg-[#fdfdfd] h-[912.8px] left-[23px] rounded-[10px] top-[25px] w-[319.8px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <FormField />
      <FormField1 />
      <FormField2 />
      <FormField3 />
      <FormField4 />
      <FormField5 />
      <FormField6 />
      <FormField7 />
      <Container onAddNewFee={onAddNewFee} onAddMessFee={onAddMessFee} />
      <Container3 />
    </div>
  );
}

function Frame165() {
  return (
    <div className="absolute bg-[#779ad0] h-[100px] left-[385px] rounded-[20px] top-[43px] w-[717px]">
      <div className="absolute bg-[lightblue] h-[34px] left-[calc(50%-271px)] rounded-[10px] top-[calc(50%-4px)] translate-x-[-50%] translate-y-[-50%] w-[163px]" data-name="Rectangle">
        <div aria-hidden="true" className="absolute border border-[#9bc4d4] border-solid inset-0 pointer-events-none rounded-[10px]" />
      </div>
      <p className="absolute font-['Inter:Bold',_sans-serif] font-bold leading-[16.5px] left-[calc(50%-274.5px)] not-italic text-[11px] text-black text-center text-nowrap top-[calc(50%-13px)] translate-x-[-50%] whitespace-pre">Generate Student Fee</p>
      <div className="absolute bg-[#cccccc] h-[34px] left-[calc(50%-110px)] rounded-[10px] top-[calc(50%-4px)] translate-x-[-50%] translate-y-[-50%] w-[147px]" data-name="Rectangle">
        <div aria-hidden="true" className="absolute border border-[#b8b8b8] border-solid inset-0 pointer-events-none rounded-[10px]" />
      </div>
      <p className="absolute font-['Inter:Bold',_sans-serif] font-bold leading-[16.5px] left-[calc(50%-109px)] not-italic text-[11px] text-black text-center text-nowrap top-[calc(50%-13px)] translate-x-[-50%] whitespace-pre">Update Exam Fees</p>
      <p className="absolute font-['Inter:Bold',_sans-serif] font-bold leading-[16.5px] left-[calc(50%-25.5px)] not-italic text-[11px] text-nowrap text-white top-[calc(50%-13px)] whitespace-pre">Security Code:</p>
      <div className="absolute bg-white h-[29px] left-[calc(50%+124.5px)] rounded-[10px] top-[calc(50%-4.5px)] translate-x-[-50%] translate-y-[-50%] w-[128px]" data-name="Rectangle">
        <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[10px]" />
      </div>
      <div className="absolute bg-[#cccccc] h-[34px] left-[calc(50%+239px)] rounded-[10px] top-[calc(50%-4px)] translate-x-[-50%] translate-y-[-50%] w-[77px]" data-name="Rectangle">
        <div aria-hidden="true" className="absolute border border-[#b8b8b8] border-solid inset-0 pointer-events-none rounded-[10px]" />
      </div>
      <p className="absolute font-['Inter:Bold',_sans-serif] font-bold leading-[16.5px] left-[calc(50%+240px)] not-italic text-[11px] text-black text-center text-nowrap top-[calc(50%-13px)] translate-x-[-50%] whitespace-pre">UPDATE</p>
      <div className="absolute bg-[#aaaaaa] h-[34px] left-[calc(50%+316.5px)] rounded-[10px] top-[calc(50%-4px)] translate-x-[-50%] translate-y-[-50%] w-[70px]" data-name="Rectangle">
        <div aria-hidden="true" className="absolute border border-[#999999] border-solid inset-0 pointer-events-none rounded-[10px]" />
      </div>
      <p className="absolute font-['Inter:Bold',_sans-serif] font-bold leading-[16.5px] left-[calc(50%+318px)] not-italic text-[11px] text-black text-center text-nowrap top-[calc(50%-13px)] translate-x-[-50%] whitespace-pre">CLOSE</p>
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] left-[calc(50%+72.5px)] not-italic text-[#999999] text-[10px] text-nowrap top-[calc(50%-4px)] translate-y-[-50%]">
        <p className="leading-[normal] whitespace-pre">Enter code</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start left-0 pl-[12px] pr-[17px] py-[18px] top-0" data-name="Frame">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
      <div className="bg-white relative rounded-[2px] shrink-0 size-[12px]" data-name="Rectangle">
        <div aria-hidden="true" className="absolute border border-[#666666] border-solid inset-[-1px] pointer-events-none rounded-[3px]" />
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start left-[94px] pb-[15px] pl-[12px] pr-[34px] pt-[16px] top-0" data-name="Frame">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Bold',_sans-serif] font-bold leading-[16.5px] not-italic relative shrink-0 text-[11px] text-black text-nowrap whitespace-pre">UserID</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start left-[299px] pb-[15px] pl-[12px] pr-[29px] pt-[16px] top-0" data-name="Frame">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Bold',_sans-serif] font-bold leading-[16.5px] not-italic relative shrink-0 text-[11px] text-black text-nowrap whitespace-pre">Department</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start left-[503px] pb-[15px] pl-[12px] pr-[70px] pt-[16px] top-0" data-name="Frame">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Bold',_sans-serif] font-bold leading-[16.5px] not-italic relative shrink-0 text-[11px] text-black text-nowrap whitespace-pre">Contact</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start left-[41px] pb-[15px] pl-[12px] pr-[13px] pt-[16px] top-0" data-name="Frame">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Bold',_sans-serif] font-bold leading-[16.5px] not-italic relative shrink-0 text-[11px] text-black text-nowrap whitespace-pre">S.No.</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start left-[401px] pb-[15px] pl-[12px] pr-[67px] pt-[16px] top-0" data-name="Frame">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Bold',_sans-serif] font-bold leading-[16.5px] not-italic relative shrink-0 text-[11px] text-black text-nowrap whitespace-pre">Role</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start left-[176px] pb-[15px] pl-[12px] pr-[56px] pt-[16px] top-0" data-name="Frame">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Bold',_sans-serif] font-bold leading-[16.5px] not-italic relative shrink-0 text-[11px] text-black text-nowrap whitespace-pre">UserName</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start left-[626px] pb-[15px] pl-[12px] pr-[37px] pt-[16px] top-0" data-name="Frame">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Bold',_sans-serif] font-bold leading-[16.5px] not-italic relative shrink-0 text-[11px] text-black text-nowrap whitespace-pre">Status</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="bg-[#e7d8d8] h-[48px] relative shrink-0 w-[1149px]" data-name="Frame">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
      <Frame6 />
      <Frame7 />
      <Frame8 />
      <Frame9 />
      <p className="absolute font-['Inter:Bold',_sans-serif] font-bold leading-[16.5px] left-[720px] not-italic text-[11px] text-black text-nowrap top-[16px] whitespace-pre">Actions</p>
      <Frame10 />
      <Frame11 />
      <Frame12 />
      <Frame13 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="bg-[#a0a0a0] box-border content-stretch flex flex-col items-start pb-[5px] pt-[4px] px-[9px] relative rounded-[4px] shrink-0" data-name="Frame">
      <div aria-hidden="true" className="absolute border border-[#666666] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[13.5px] not-italic relative shrink-0 text-[9px] text-black text-center text-nowrap whitespace-pre">Edit</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="bg-[#a0a0a0] box-border content-stretch flex flex-col items-start pb-[5px] pl-[9px] pr-[8px] pt-[4px] relative rounded-[4px] shrink-0" data-name="Frame">
      <div aria-hidden="true" className="absolute border border-[#666666] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[13.5px] not-italic relative shrink-0 text-[9px] text-black text-center text-nowrap whitespace-pre">View</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="absolute box-border content-stretch flex gap-[4px] items-start justify-center left-[720.09px] pb-0 pl-0 pr-[340.4px] pt-[0.35px] top-[15.65px]" data-name="Frame">
      <Frame15 />
      <Frame16 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start left-[41px] pb-[21px] pl-[12px] pr-[37px] pt-[19px] top-0" data-name="Frame">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[15px] not-italic relative shrink-0 text-[10px] text-black text-nowrap whitespace-pre">1</p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start left-[176px] pb-[21px] pl-[12px] pr-[58px] pt-[19px] top-0" data-name="Frame">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[15px] not-italic relative shrink-0 text-[10px] text-black text-nowrap whitespace-pre">John Smith</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start left-[401px] pb-[21px] pl-[12px] pr-[44px] pt-[19px] top-0" data-name="Frame">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[15px] not-italic relative shrink-0 text-[10px] text-black text-nowrap whitespace-pre">Professor</p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="bg-[#d4edda] relative rounded-[2.68435e+07px] shrink-0 w-full" data-name="Frame">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start px-[8px] py-[4px] relative w-full">
          <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[13.5px] not-italic relative shrink-0 text-[#155724] text-[9px] text-nowrap whitespace-pre">Active</p>
        </div>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start left-[626px] pb-[15px] pl-[12px] pr-[27px] pt-[18px] top-0" data-name="Frame">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none" />
      <Frame21 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start left-0 pb-[22px] pl-[12px] pr-[17px] pt-[21px] top-0" data-name="Frame">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none" />
      <div className="bg-white relative rounded-[2px] shrink-0 size-[12px]" data-name="Rectangle">
        <div aria-hidden="true" className="absolute border border-[#666666] border-solid inset-[-1px] pointer-events-none rounded-[3px]" />
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start left-[299px] pb-[15px] pl-[12px] pr-[43px] pt-[13px] top-0" data-name="Frame">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[15px] not-italic relative shrink-0 text-[10px] text-black w-[47px]">Computer Science</p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start left-[94px] pb-[21px] pl-[12px] pr-[33px] pt-[19px] top-0" data-name="Frame">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[15px] not-italic relative shrink-0 text-[10px] text-black text-nowrap whitespace-pre">USR001</p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start left-[503px] pb-[21px] pl-[12px] pr-[30px] pt-[19px] top-0" data-name="Frame">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[15px] not-italic relative shrink-0 text-[10px] text-black text-nowrap whitespace-pre">+91-9876543210</p>
    </div>
  );
}

function Frame27() {
  return (
    <div className="absolute bg-[#f8f9fa] h-[55px] left-[0.4px] top-[0.2px] w-[1149px]" data-name="Frame">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none" />
      <Frame17 />
      <Frame18 />
      <Frame19 />
      <Frame20 />
      <Frame22 />
      <Frame23 />
      <Frame24 />
      <Frame25 />
      <Frame26 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="bg-[#a0a0a0] box-border content-stretch flex flex-col items-start pb-[4px] pt-[5px] px-[9px] relative rounded-[4px] shrink-0" data-name="Frame">
      <div aria-hidden="true" className="absolute border border-[#666666] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[13.5px] not-italic relative shrink-0 text-[9px] text-black text-center text-nowrap whitespace-pre">Edit</p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="bg-[#a0a0a0] box-border content-stretch flex flex-col items-start pb-[4px] pl-[9px] pr-[8px] pt-[5px] relative rounded-[4px] shrink-0" data-name="Frame">
      <div aria-hidden="true" className="absolute border border-[#666666] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[13.5px] not-italic relative shrink-0 text-[9px] text-black text-center text-nowrap whitespace-pre">View</p>
    </div>
  );
}

function Frame30() {
  return (
    <div className="absolute box-border content-stretch flex gap-[4px] items-start justify-center left-[720.09px] pb-[0.55px] pl-0 pr-[340.4px] pt-0 top-[15.45px]" data-name="Frame">
      <Frame28 />
      <Frame29 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start left-0 pb-[22px] pl-[12px] pr-[17px] pt-[21px] top-0" data-name="Frame">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none" />
      <div className="bg-white relative rounded-[2px] shrink-0 size-[12px]" data-name="Rectangle">
        <div aria-hidden="true" className="absolute border border-[#666666] border-solid inset-[-1px] pointer-events-none rounded-[3px]" />
      </div>
    </div>
  );
}

function Frame32() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start left-[94px] pb-[21px] pl-[12px] pr-[31px] pt-[19px] top-0" data-name="Frame">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[15px] not-italic relative shrink-0 text-[10px] text-black text-nowrap whitespace-pre">USR002</p>
    </div>
  );
}

function Frame33() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start left-[299px] pb-[21px] pl-[12px] pr-[29px] pt-[19px] top-0" data-name="Frame">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[15px] not-italic relative shrink-0 text-[10px] text-black text-nowrap whitespace-pre">Mathematics</p>
    </div>
  );
}

function Frame34() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start left-[503px] pb-[21px] pl-[12px] pr-[33px] pt-[19px] top-0" data-name="Frame">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[15px] not-italic relative shrink-0 text-[10px] text-black text-nowrap whitespace-pre">+91-9876543211</p>
    </div>
  );
}

function Frame35() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start left-[41px] pb-[21px] pl-[12px] pr-[35px] pt-[19px] top-0" data-name="Frame">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[15px] not-italic relative shrink-0 text-[10px] text-black text-nowrap whitespace-pre">2</p>
    </div>
  );
}

function Frame36() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start left-[401px] pb-[15px] pl-[12px] pr-[44px] pt-[13px] top-0" data-name="Frame">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[15px] not-italic relative shrink-0 text-[10px] text-black w-[46px]">Assistant Professor</p>
    </div>
  );
}

function Frame37() {
  return (
    <div className="bg-[#d4edda] relative rounded-[2.68435e+07px] shrink-0 w-full" data-name="Frame">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start px-[8px] py-[4px] relative w-full">
          <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[13.5px] not-italic relative shrink-0 text-[#155724] text-[9px] text-nowrap whitespace-pre">Active</p>
        </div>
      </div>
    </div>
  );
}

function Frame38() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start left-[626px] pb-[15px] pl-[12px] pr-[27px] pt-[18px] top-0" data-name="Frame">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none" />
      <Frame37 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start left-[176px] pb-[21px] pl-[12px] pr-[40px] pt-[19px] top-0" data-name="Frame">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[15px] not-italic relative shrink-0 text-[10px] text-black text-nowrap whitespace-pre">Sarah Johnson</p>
    </div>
  );
}

function Frame40() {
  return (
    <div className="absolute bg-white h-[55px] left-[0.4px] top-[55.2px] w-[1149px]" data-name="Frame">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none" />
      <Frame30 />
      <Frame31 />
      <Frame32 />
      <Frame33 />
      <Frame34 />
      <Frame35 />
      <Frame36 />
      <Frame38 />
      <Frame39 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="bg-[#a0a0a0] box-border content-stretch flex flex-col items-start pb-[5px] pt-[4px] px-[9px] relative rounded-[4px] shrink-0" data-name="Frame">
      <div aria-hidden="true" className="absolute border border-[#666666] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[13.5px] not-italic relative shrink-0 text-[9px] text-black text-center text-nowrap whitespace-pre">Edit</p>
    </div>
  );
}

function Frame42() {
  return (
    <div className="bg-[#a0a0a0] box-border content-stretch flex flex-col items-start pb-[5px] pl-[9px] pr-[8px] pt-[4px] relative rounded-[4px] shrink-0" data-name="Frame">
      <div aria-hidden="true" className="absolute border border-[#666666] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[13.5px] not-italic relative shrink-0 text-[9px] text-black text-center text-nowrap whitespace-pre">View</p>
    </div>
  );
}

function Frame43() {
  return (
    <div className="absolute box-border content-stretch flex gap-[4px] items-start justify-center left-[720.09px] pb-[0.1px] pl-0 pr-[340.4px] pt-0 top-[14px]" data-name="Frame">
      <Frame41 />
      <Frame42 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start left-[41px] pb-[18px] pl-[12px] pr-[35px] pt-[17px] top-0" data-name="Frame">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[15px] not-italic relative shrink-0 text-[10px] text-black text-nowrap whitespace-pre">3</p>
    </div>
  );
}

function Frame45() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start left-[176px] pb-[18px] pl-[12px] pr-[41px] pt-[17px] top-0" data-name="Frame">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[15px] not-italic relative shrink-0 text-[10px] text-black text-nowrap whitespace-pre">Michael Brown</p>
    </div>
  );
}

function Frame46() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start left-[401px] pb-[18px] pl-[12px] pr-[52px] pt-[17px] top-0" data-name="Frame">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[15px] not-italic relative shrink-0 text-[10px] text-black text-nowrap whitespace-pre">Teacher</p>
    </div>
  );
}

function Frame47() {
  return (
    <div className="bg-[#d4edda] relative rounded-[2.68435e+07px] shrink-0 w-full" data-name="Frame">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start pb-[5px] pt-[3px] px-[8px] relative w-full">
          <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[13.5px] not-italic relative shrink-0 text-[#155724] text-[9px] text-nowrap whitespace-pre">Active</p>
        </div>
      </div>
    </div>
  );
}

function Frame48() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start left-[626px] pb-[11px] pl-[12px] pr-[27px] pt-[17px] top-0" data-name="Frame">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none" />
      <Frame47 />
    </div>
  );
}

function Frame49() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start left-[94px] pb-[18px] pl-[12px] pr-[31px] pt-[17px] top-0" data-name="Frame">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[15px] not-italic relative shrink-0 text-[10px] text-black text-nowrap whitespace-pre">USR003</p>
    </div>
  );
}

function Frame50() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start left-[503px] pb-[18px] pl-[12px] pr-[31px] pt-[17px] top-0" data-name="Frame">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[15px] not-italic relative shrink-0 text-[10px] text-black text-nowrap whitespace-pre">+91-9876543212</p>
    </div>
  );
}

function Frame51() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start left-[299px] pb-[18px] pl-[12px] pr-[56px] pt-[17px] top-0" data-name="Frame">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[15px] not-italic relative shrink-0 text-[10px] text-black text-nowrap whitespace-pre">English</p>
    </div>
  );
}

function Frame52() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start left-0 pl-[12px] pr-[17px] py-[19px] top-0" data-name="Frame">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none" />
      <div className="bg-white relative rounded-[2px] shrink-0 size-[12px]" data-name="Rectangle">
        <div aria-hidden="true" className="absolute border border-[#666666] border-solid inset-[-1px] pointer-events-none rounded-[3px]" />
      </div>
    </div>
  );
}

function Frame53() {
  return (
    <div className="absolute bg-[#f8f9fa] h-[50px] left-[0.4px] top-[109.2px] w-[1149px]" data-name="Frame">
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none" />
      <Frame43 />
      <Frame44 />
      <Frame45 />
      <Frame46 />
      <Frame48 />
      <Frame49 />
      <Frame50 />
      <Frame51 />
      <Frame52 />
    </div>
  );
}

function Frame54() {
  return (
    <div className="h-[159.9px] relative shrink-0 w-[1148.8px]" data-name="Frame">
      <Frame27 />
      <Frame40 />
      <Frame53 />
    </div>
  );
}

function Frame55() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[0.8px] items-start left-[345px] pb-[0.4px] pt-0 px-0 top-[159px] w-[805px]" data-name="Frame">
      <Frame14 />
      <Frame54 />
    </div>
  );
}

export default function FeeMaster({ onAddNewFee, onAddMessFee }: { onAddNewFee?: () => void; onAddMessFee?: () => void }) {
  return (
    <div className="bg-white relative size-full" data-name="fee master">
      <Container4 onAddNewFee={onAddNewFee} onAddMessFee={onAddMessFee} />
      <Frame165 />
      <Frame55 />
    </div>
  );
}