import svgPaths from "./svg-fi7ipap91q";

function CardTitle() {
  return (
    <div className="absolute h-[28px] left-[24px] top-[24px] w-[848px]" data-name="CardTitle">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[28px] left-0 not-italic text-[18px] text-nowrap text-white top-[-1.4px] whitespace-pre">New User</p>
    </div>
  );
}

function NewUserForm() {
  return (
    <div className="absolute h-[14px] left-[78.24px] top-0 w-[6.088px]" data-name="NewUserForm">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[14px] left-0 not-italic text-[#ff6467] text-[14px] text-nowrap top-[-1.4px] whitespace-pre">*</p>
    </div>
  );
}

function PrimitiveLabel() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[14px] left-0 not-italic text-[14px] text-nowrap text-white top-[-1.4px] whitespace-pre">User Name</p>
      <NewUserForm />
    </div>
  );
}

function Input() {
  return <div className="bg-white h-[32px] rounded-[8px] shrink-0 w-full" data-name="Input" />;
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[54px] items-start relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel />
      <Input />
    </div>
  );
}

function PrimitiveLabel1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">Qualification</p>
    </div>
  );
}

function Input1() {
  return <div className="bg-white h-[32px] rounded-[8px] shrink-0 w-full" data-name="Input" />;
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[54px] items-start relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel1 />
      <Input1 />
    </div>
  );
}

function PrimitiveLabel2() {
  return (
    <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">Department</p>
    </div>
  );
}

function Input2() {
  return <div className="bg-white h-[32px] rounded-[8px] shrink-0 w-full" data-name="Input" />;
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[54px] items-start relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel2 />
      <Input2 />
    </div>
  );
}

function PrimitiveLabel3() {
  return (
    <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">Contact</p>
    </div>
  );
}

function Input3() {
  return <div className="bg-white h-[32px] rounded-[8px] shrink-0 w-full" data-name="Input" />;
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[54px] items-start relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel3 />
      <Input3 />
    </div>
  );
}

function PrimitiveLabel4() {
  return (
    <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">Remark</p>
    </div>
  );
}

function Input4() {
  return <div className="bg-white h-[32px] rounded-[8px] shrink-0 w-full" data-name="Input" />;
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[54px] items-start relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel4 />
      <Input4 />
    </div>
  );
}

function Container5() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Container">
      <Container />
      <Container1 />
      <Container2 />
      <Container3 />
      <Container4 />
    </div>
  );
}

function NewUserForm1() {
  return (
    <div className="absolute h-[14px] left-[68.15px] top-0 w-[6.088px]" data-name="NewUserForm">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[14px] left-0 not-italic text-[#ff6467] text-[14px] text-nowrap top-[-1.4px] whitespace-pre">*</p>
    </div>
  );
}

function PrimitiveLabel5() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[14px] left-0 not-italic text-[14px] text-nowrap text-white top-[-1.4px] whitespace-pre">User Role</p>
      <NewUserForm1 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel5 />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute left-[376px] size-[20px] top-[8px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Frame">
          <path d={svgPaths.p7b68400} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[376px] top-[8px]" data-name="Group">
      <Frame />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[376px] top-[8px]" data-name="Group">
      <Group />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[376px] top-[8px]" data-name="Group">
      <Group1 />
    </div>
  );
}

function Frame156() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-[408px]">
      <div className="h-[36px] overflow-clip relative rounded-[inherit] w-[408px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[21px] left-[24px] not-italic text-[14px] text-black text-nowrap top-[calc(50%-10px)] whitespace-pre">Select Role</p>
        <Group2 />
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function PrimitiveLabel6() {
  return (
    <div className="h-[30px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[14px] left-0 not-italic text-[14px] text-nowrap text-white top-[-1.4px] whitespace-pre">For Login :</p>
    </div>
  );
}

function NewUserForm2() {
  return (
    <div className="absolute h-[14px] left-[54.48px] top-0 w-[6.088px]" data-name="NewUserForm">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[14px] left-0 not-italic text-[#ff6467] text-[14px] text-nowrap top-[-1.4px] whitespace-pre">*</p>
    </div>
  );
}

function PrimitiveLabel7() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[14px] left-0 not-italic text-[14px] text-nowrap text-white top-[-1.4px] whitespace-pre">User ID</p>
      <NewUserForm2 />
    </div>
  );
}

function Input5() {
  return <div className="bg-white h-[32px] rounded-[8px] shrink-0 w-full" data-name="Input" />;
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[54px] items-start relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel7 />
      <Input5 />
    </div>
  );
}

function NewUserForm3() {
  return (
    <div className="absolute h-[14px] left-[67.55px] top-0 w-[6.088px]" data-name="NewUserForm">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[14px] left-0 not-italic text-[#ff6467] text-[14px] text-nowrap top-[-1.4px] whitespace-pre">*</p>
    </div>
  );
}

function PrimitiveLabel8() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[14px] left-0 not-italic text-[14px] text-nowrap text-white top-[-1.4px] whitespace-pre">Password</p>
      <NewUserForm3 />
    </div>
  );
}

function Input6() {
  return <div className="bg-white h-[32px] rounded-[8px] shrink-0 w-full" data-name="Input" />;
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[54px] items-start relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel8 />
      <Input6 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[124px] items-start relative shrink-0 w-full" data-name="Container">
      <Container7 />
      <Container8 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[154px] items-start relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel6 />
      <Container9 />
    </div>
  );
}

function Container11() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex flex-col gap-[14px] items-start relative shrink-0" data-name="Container">
      <Container6 />
      <Frame156 />
      <Container10 />
    </div>
  );
}

function NewUserForm4() {
  return (
    <div className="gap-[32px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[334px] relative shrink-0 w-full" data-name="NewUserForm">
      <Container5 />
      <Container11 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#90a1b9] h-[32px] relative rounded-[8px] shrink-0 w-[116.275px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#cad5e2] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[32.8px] py-[8.8px] relative w-[116.275px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-black text-nowrap whitespace-pre">SUBMIT</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#90a1b9] h-[32px] relative rounded-[8px] shrink-0 w-[117.225px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#cad5e2] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[32.8px] py-[8.8px] relative w-[117.225px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-black text-nowrap whitespace-pre">CANCEL</p>
      </div>
    </div>
  );
}

function NewUserForm5() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="NewUserForm">
      <div className="flex flex-row justify-center size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[56px] items-start justify-center pb-0 pt-[24px] px-0 relative w-full">
          <Button />
          <Button1 />
        </div>
      </div>
    </div>
  );
}

function CardContent() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[24px] h-[438px] items-start left-0 px-[24px] py-0 top-[76px] w-[896px]" data-name="CardContent">
      <NewUserForm4 />
      <NewUserForm5 />
    </div>
  );
}

function Card() {
  return (
    <div className="absolute bg-gradient-to-b from-[#688bfe] from-[45.192%] h-[536px] left-[139px] rounded-[14px] shadow-[0px_4px_60px_0px_rgba(75,131,228,0.25),0px_10px_15px_-3px_#526dcf,0px_4px_6px_-4px_rgba(223,230,255,0.1)] to-[#4e5e85] top-[210px] w-[895.6px]" data-name="Card">
      <CardTitle />
      <CardContent />
    </div>
  );
}

export default function NewUser() {
  return (
    <div className="bg-white relative size-full" data-name="new user">
      <Card />
    </div>
  );
}