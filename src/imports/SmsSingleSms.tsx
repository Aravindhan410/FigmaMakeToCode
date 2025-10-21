import svgPaths from "./svg-tlyljtclnq";

function Icon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p261dfb00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Heading2() {
  return (
    <div className="basis-0 grow h-[28px] min-h-px min-w-px relative shrink-0" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-full">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[28px] left-0 not-italic text-[18px] text-nowrap text-white top-[-1px] whitespace-pre">Send SMS</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[28px] relative shrink-0 w-[117.906px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[28px] items-center relative w-[117.906px]">
        <Icon />
        <Heading2 />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[9px] size-[12px] top-[5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p38fdee00} id="Vector" stroke="var(--stroke-0, #121212)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p265ba180} id="Vector_2" stroke="var(--stroke-0, #121212)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.pc6b7c80} id="Vector_3" stroke="var(--stroke-0, #121212)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p13058e80} id="Vector_4" stroke="var(--stroke-0, #121212)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Badge() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] h-[22px] relative rounded-[8px] shrink-0 w-[120.141px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[22px] overflow-clip relative rounded-[inherit] w-[120.141px]">
        <Icon1 />
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[29px] not-italic text-[#717182] text-[12px] text-nowrap top-[2px] whitespace-pre">Quick Message</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(17,17,17,0.3)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex h-[28px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container />
      <Badge />
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-gradient-to-r from-3% from-[rgba(37,87,225,0.8)] h-[60px] relative rounded-tl-[10px] rounded-tr-[10px] shrink-0 to-[#f8fafc] via-51% via-[#bdcefa] w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[60px] items-start pb-0 pt-[16px] px-[24px] relative w-full">
          <Container1 />
        </div>
      </div>
    </div>
  );
}

function SmsForm() {
  return (
    <div className="absolute h-[14px] left-[97.48px] top-0 w-[6.078px]" data-name="SMSForm">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[14px] left-0 not-italic text-[#fb2c36] text-[14px] text-nowrap top-[-2px] whitespace-pre">*</p>
    </div>
  );
}

function PrimitiveLabel() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[14px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-2px] whitespace-pre">Message Type</p>
      <SmsForm />
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
    <div className="bg-[#fdfdff] h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.74)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[36px] items-center justify-between px-[13px] py-px relative w-full">
          <div className="flex flex-col font-['Arial:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6a7282] text-[14px] text-nowrap">
            <p className="leading-[normal] whitespace-pre">Select Message Template</p>
          </div>
          <Icon2 />
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[8px] items-start relative self-start shrink-0" data-name="Container">
      <PrimitiveLabel />
      <PrimitiveButton />
    </div>
  );
}

function PrimitiveLabel1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Sender Name</p>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[36px] items-center px-[12px] py-[4px] relative w-full">
          <p className="font-['Arial:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">School Admin</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.74)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container4() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex flex-col gap-[8px] items-start relative self-start shrink-0" data-name="Container">
      <PrimitiveLabel1 />
      <Input />
    </div>
  );
}

function Container5() {
  return (
    <div className="gap-[16px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[58px] relative shrink-0 w-full" data-name="Container">
      <Container3 />
      <Container4 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-0 size-[16px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_4020_6006)" id="Icon">
          <path d={svgPaths.p26187580} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_4020_6006">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SmsForm1() {
  return (
    <div className="absolute h-[14px] left-[140.7px] top-px w-[6.078px]" data-name="SMSForm">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[14px] left-0 not-italic text-[#fb2c36] text-[14px] text-nowrap top-[-2px] whitespace-pre">*</p>
    </div>
  );
}

function PrimitiveLabel2() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Primitive.label">
      <Icon3 />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[14px] left-[32px] not-italic text-[14px] text-neutral-950 text-nowrap top-[-1px] whitespace-pre">Mobile Number</p>
      <SmsForm1 />
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-[#fdfdff] h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[36px] items-center px-[12px] py-[4px] relative w-full">
          <p className="font-['Consolas:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Enter mobile number (e.g., 9876543210)</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.74)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[60px] items-start relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel2 />
      <Input1 />
    </div>
  );
}

function SmsForm2() {
  return (
    <div className="absolute h-[14px] left-[63.64px] top-0 w-[6.078px]" data-name="SMSForm">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[14px] left-0 not-italic text-[#fb2c36] text-[14px] text-nowrap top-[-2px] whitespace-pre">*</p>
    </div>
  );
}

function PrimitiveLabel3() {
  return (
    <div className="h-[14px] relative shrink-0 w-[69.719px]" data-name="Primitive.label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[14px] relative w-[69.719px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[14px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-2px] whitespace-pre">Message</p>
        <SmsForm2 />
      </div>
    </div>
  );
}

function Badge1() {
  return (
    <div className="bg-white h-[22px] relative rounded-[8px] shrink-0 w-[89.578px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[22px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[inherit] w-[89.578px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] text-nowrap whitespace-pre">160 chars left</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.74)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex h-[22px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel3 />
      <Badge1 />
    </div>
  );
}

function Textarea() {
  return (
    <div className="bg-white h-[120px] relative rounded-[8px] shrink-0 w-full" data-name="Textarea">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[120px] items-start px-[12px] py-[8px] relative w-full">
          <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Type your message here...</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.74)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-[-1px] w-[88px]">0/160 characters</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[174px] items-start relative shrink-0 w-full" data-name="Container">
      <Container7 />
      <Textarea />
      <Container8 />
    </div>
  );
}

function SmsForm3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[340px] items-start left-[25px] top-[25px] w-[622px]" data-name="SMSForm">
      <Container5 />
      <Container6 />
      <Container9 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute left-[13.7px] size-[16px] top-[10px]" data-name="Icon">
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
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-[100px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[36px] relative w-[100px]">
        <Icon4 />
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[45.7px] not-italic text-[14px] text-neutral-950 text-nowrap top-[6px] whitespace-pre">CLOSE</p>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="absolute left-[12px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_4020_6015)" id="Icon">
          <path d={svgPaths.pb7a5200} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3370bc40} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_4020_6015">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#7595ec] h-[36px] relative rounded-[8px] shrink-0 w-[123.688px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[36px] relative w-[123.688px]">
        <Icon5 />
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[44px] not-italic text-[14px] text-nowrap text-white top-[6px] whitespace-pre">SEND SMS</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex gap-[12px] h-[36px] items-start justify-end relative shrink-0 w-full" data-name="Container">
      <Button />
      <Button1 />
    </div>
  );
}

function SmsForm4() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[69px] items-start left-px pb-0 pt-[17px] px-[24px] top-[413px] w-[670px]" data-name="SMSForm">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <Container10 />
    </div>
  );
}

function Card() {
  return (
    <div className="bg-white h-[483px] relative rounded-bl-[14px] rounded-br-[14px] shrink-0 w-[1150px]" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-bl-[14px] rounded-br-[14px]" />
      <SmsForm3 />
      <SmsForm4 />
    </div>
  );
}

export default function SmsSingleSms() {
  return (
    <div className="bg-gray-100 content-stretch flex flex-col items-start relative size-full" data-name="sms>single sms">
      <Container2 />
      <Card />
    </div>
  );
}