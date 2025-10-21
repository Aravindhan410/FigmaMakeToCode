import svgPaths from "./svg-ds8nuoo78x";
import imgImagePhotoPreview from "figma:asset/4e9885a5b38f19d17a96dc3ef79b0efaf1a40101.png";

function Icon() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[16.67%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-6.25%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 18">
            <path d={svgPaths.p2d5d3400} id="Vector" stroke="var(--stroke-0, #030213)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[41.67%_37.5%_33.33%_37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.667%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
            <path d={svgPaths.p1e531d00} id="Vector" stroke="var(--stroke-0, #030213)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function PhotoEditingCard() {
  return (
    <div className="absolute bg-[rgba(3,2,19,0.1)] box-border content-stretch flex flex-col items-start left-0 pb-0 pt-[8px] px-[8px] rounded-[10px] size-[40px] top-0" data-name="PhotoEditingCard">
      <Icon />
    </div>
  );
}

function CardTitle() {
  return (
    <div className="h-[40px] relative shrink-0 w-[140.325px]" data-name="CardTitle">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[40px] relative w-[140.325px]">
        <PhotoEditingCard />
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[52px] not-italic text-[16px] text-neutral-950 text-nowrap top-[9.8px] whitespace-pre">Photo Editor</p>
      </div>
    </div>
  );
}

function PhotoEditingCard1() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-between relative shrink-0 w-[846.4px]" data-name="PhotoEditingCard">
      <CardTitle />
    </div>
  );
}

function PhotoEditingCard2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[846.4px]" data-name="PhotoEditingCard">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[24px] left-0 not-italic text-[#717182] text-[16px] text-nowrap top-[-2.2px] whitespace-pre">Upload, edit, and manage your photos with advanced editing tools</p>
    </div>
  );
}

function CardHeader() {
  return (
    <div className="relative shrink-0" data-name="CardHeader">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[30px] items-center justify-center p-[24px] relative">
        <PhotoEditingCard1 />
        <PhotoEditingCard2 />
      </div>
    </div>
  );
}

function PrimitiveLabel() {
  return (
    <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Photo Preview</p>
    </div>
  );
}

function ImagePhotoPreview() {
  return (
    <div className="h-[257.6px] relative shrink-0 w-full" data-name="Image (Photo Preview)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImagePhotoPreview} />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute bg-[rgba(236,236,240,0.3)] left-0 rounded-[14px] size-[260.8px] top-0" data-name="Container">
      <div className="box-border content-stretch flex flex-col items-start overflow-clip p-[1.6px] relative rounded-[inherit] size-[260.8px]">
        <ImagePhotoPreview />
      </div>
      <div aria-hidden="true" className="absolute border-[1.6px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.556%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p371e6400} id="Vector" stroke="var(--stroke-0, #030213)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[29.17%_54.17%_54.17%_29.17%]" data-name="Vector">
        <div className="absolute inset-[-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
            <path d={svgPaths.pafef4f0} id="Vector" stroke="var(--stroke-0, #030213)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[12.5%] left-1/4 right-[12.5%] top-[47.2%]" data-name="Vector">
        <div className="absolute inset-[-10.34%_-6.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 12">
            <path d={svgPaths.p2d798d00} id="Vector" stroke="var(--stroke-0, #030213)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-[rgba(255,255,255,0.9)] relative rounded-[2.68435e+07px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[12px] px-[12px] relative size-[48px]">
        <Icon1 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] content-stretch flex items-center justify-center left-0 opacity-0 size-[260.8px] top-0" data-name="Container">
      <Container1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[260.8px] relative shrink-0 w-full" data-name="Container">
      <Container />
      <Container2 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-[59.63px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M8 2V10" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p26e09a00} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p23ad1400} id="Vector_3" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Icon2 />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[91.63px] not-italic text-[14px] text-neutral-950 text-nowrap top-[6.8px] whitespace-pre">{`Browse & Upload`}</p>
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-[24.02px] size-[16px] top-[8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p2caad200} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p370da580} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="basis-0 grow h-[32px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[32px] relative w-full">
        <Icon3 />
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[54.02px] not-italic text-[14px] text-neutral-950 text-nowrap top-[4.8px] whitespace-pre">Camera</p>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute left-[25.85px] size-[16px] top-[8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p19d57600} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2fe1fe40} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p25c2200} id="Vector_3" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="basis-0 grow h-[32px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[32px] relative w-full">
        <Icon4 />
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[55.85px] not-italic text-[14px] text-neutral-950 text-nowrap top-[4.8px] whitespace-pre">Gallery</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex gap-[8px] h-[32px] items-start relative w-full">
          <Button1 />
          <Button2 />
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[80px] items-start relative shrink-0 w-full" data-name="Container">
      <Button />
      <Container4 />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[397.6px] items-start left-0 top-0 w-[260.8px]" data-name="Container">
      <PrimitiveLabel />
      <Container3 />
      <Container5 />
    </div>
  );
}

function PrimitiveLabel1() {
  return (
    <div className="h-[14px] relative shrink-0 w-[132.925px]" data-name="Primitive.label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[14px] items-center relative w-[132.925px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Registration Number</p>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="absolute left-[10px] size-[16px] top-[8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_6008_724)" id="Icon">
          <path d="M8.66667 14H14" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p35028280} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_6008_724">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="h-[32px] relative rounded-[8px] shrink-0 w-[74.4px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[32px] relative w-[74.4px]">
        <Icon5 />
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[40px] not-italic text-[14px] text-neutral-950 text-nowrap top-[4.8px] whitespace-pre">Edit</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel1 />
      <Button3 />
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[#f3f3f5] h-[36px] opacity-50 relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[36px] items-center px-[12px] py-[4px] relative w-full">
          <p className="font-['Arial:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap whitespace-pre">Enter registration number...</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute bg-[rgba(236,236,240,0.3)] box-border content-stretch flex flex-col gap-[16px] h-[133.6px] items-start left-0 pb-[0.8px] pt-[24.8px] px-[24.8px] rounded-[14px] top-0 w-[553.6px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Container7 />
      <Input />
    </div>
  );
}

function PrimitiveDiv() {
  return <div className="absolute bg-[rgba(0,0,0,0.1)] h-px left-0 top-[157.6px] w-[553.6px]" data-name="Primitive.div" />;
}

function PrimitiveLabel2() {
  return (
    <div className="content-stretch flex gap-[8px] h-[14px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Arial:Regular',_sans-serif] leading-[14px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Editing Tools</p>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_6008_720)" id="Icon">
          <path d={svgPaths.p33ba44c0} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p27309b80} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_6008_720">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function PhotoEditingCard3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[30.55px]" data-name="PhotoEditingCard">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[30.55px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-1.2px] whitespace-pre">Crop</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[8px] h-[80px] items-center justify-center left-0 p-[0.8px] rounded-[8px] top-0 w-[129.4px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Icon6 />
      <PhotoEditingCard3 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p12824f00} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function PhotoEditingCard4() {
  return (
    <div className="h-[20px] relative shrink-0 w-[38.075px]" data-name="PhotoEditingCard">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[38.075px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-1.2px] whitespace-pre">Filters</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[8px] h-[80px] items-center justify-center left-[141.4px] p-[0.8px] rounded-[8px] top-0 w-[129.4px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Icon7 />
      <PhotoEditingCard4 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_6008_703)" id="Icon">
          <path d={svgPaths.p3685cc80} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p13a75f00} fill="var(--fill-0, #0A0A0A)" id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3359640} fill="var(--fill-0, #0A0A0A)" id="Vector_3" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1e291080} fill="var(--fill-0, #0A0A0A)" id="Vector_4" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2041a800} fill="var(--fill-0, #0A0A0A)" id="Vector_5" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_6008_703">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function PhotoEditingCard5() {
  return (
    <div className="h-[20px] relative shrink-0 w-[40.763px]" data-name="PhotoEditingCard">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[40.763px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-1.2px] whitespace-pre">Adjust</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[8px] h-[80px] items-center justify-center left-[282.8px] p-[0.8px] rounded-[8px] top-0 w-[129.4px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Icon8 />
      <PhotoEditingCard5 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_6008_699)" id="Icon">
          <path d="M8.66667 14H14" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p6305c00} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_6008_699">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function PhotoEditingCard6() {
  return (
    <div className="h-[20px] relative shrink-0 w-[42.025px]" data-name="PhotoEditingCard">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[42.025px]">
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-[-1.2px] whitespace-pre">Effects</p>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[8px] h-[80px] items-center justify-center left-[424.2px] p-[0.8px] rounded-[8px] top-0 w-[129.4px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Icon9 />
      <PhotoEditingCard6 />
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[80px] relative shrink-0 w-full" data-name="Container">
      <Button4 />
      <Button5 />
      <Button6 />
      <Button7 />
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[110px] items-start left-0 top-[182.6px] w-[553.6px]" data-name="Container">
      <PrimitiveLabel2 />
      <Container9 />
    </div>
  );
}

function PrimitiveDiv1() {
  return <div className="absolute bg-[rgba(0,0,0,0.1)] h-px left-0 top-[316.6px] w-[553.6px]" data-name="Primitive.div" />;
}

function Icon10() {
  return (
    <div className="absolute left-[116.84px] size-[16px] top-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p3c401780} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p56b0600} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p17caa400} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button8() {
  return (
    <div className="basis-0 bg-[#030213] grow h-[40px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[40px] relative w-full">
        <Icon10 />
        <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[148.84px] not-italic text-[14px] text-nowrap text-white top-[8.8px] whitespace-pre">Save Changes</p>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-[91.3px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[24.8px] py-[0.8px] relative w-[91.3px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Export</p>
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-[85.175px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[40px] items-center justify-center px-[24.8px] py-[0.8px] relative w-[85.175px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Share</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute box-border content-stretch flex gap-[12px] h-[56px] items-start left-0 pb-0 pt-[16px] px-0 top-[341.6px] w-[553.6px]" data-name="Container">
      <Button8 />
      <Button9 />
      <Button10 />
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute h-[397.6px] left-[292.8px] top-0 w-[553.6px]" data-name="Container">
      <Container8 />
      <PrimitiveDiv />
      <Container10 />
      <PrimitiveDiv1 />
      <Container11 />
    </div>
  );
}

function PhotoEditingCard7() {
  return (
    <div className="h-[397.6px] relative shrink-0 w-full" data-name="PhotoEditingCard">
      <Container6 />
      <Container12 />
    </div>
  );
}

function Text() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[81.763px]" data-name="Text">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-0 not-italic text-[#717182] text-[14px] text-nowrap top-[-1.2px] whitespace-pre">Status: Ready</p>
    </div>
  );
}

function PrimitiveDiv2() {
  return <div className="absolute bg-[rgba(0,0,0,0.1)] h-0 left-[97.76px] top-[10px] w-px" data-name="Primitive.div" />;
}

function Text1() {
  return (
    <div className="absolute h-[20px] left-[114.76px] top-0 w-[138.675px]" data-name="Text">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-0 not-italic text-[#717182] text-[14px] text-nowrap top-[-1.2px] whitespace-pre">Resolution: 1920x1080</p>
    </div>
  );
}

function PrimitiveDiv3() {
  return <div className="absolute bg-[rgba(0,0,0,0.1)] h-0 left-[269.44px] top-[10px] w-px" data-name="Primitive.div" />;
}

function Text2() {
  return (
    <div className="absolute h-[20px] left-[286.44px] top-0 w-[78.625px]" data-name="Text">
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-0 not-italic text-[#717182] text-[14px] text-nowrap top-[-1.2px] whitespace-pre">Format: PNG</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[20px] relative shrink-0 w-[365.062px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[365.062px]">
        <Text />
        <PrimitiveDiv2 />
        <Text1 />
        <PrimitiveDiv3 />
        <Text2 />
      </div>
    </div>
  );
}

function Badge() {
  return (
    <div className="bg-[#eceef2] h-[21.587px] relative rounded-[8px] shrink-0 w-[119.638px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[21.587px] items-center justify-center overflow-clip px-[8.8px] py-[2.8px] relative rounded-[inherit] w-[119.638px]">
        <p className="font-['Arial:Regular',_sans-serif] leading-[16px] not-italic relative shrink-0 text-[#030213] text-[12px] text-nowrap whitespace-pre">Auto-save enabled</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function PhotoEditingCard8() {
  return (
    <div className="bg-[rgba(236,236,240,0.2)] h-[55.188px] relative rounded-[10px] shrink-0 w-full" data-name="PhotoEditingCard">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[55.188px] items-center justify-between px-[16.8px] py-[0.8px] relative w-full">
          <Container13 />
          <Badge />
        </div>
      </div>
    </div>
  );
}

function CardContent() {
  return (
    <div className="h-[508.788px] relative shrink-0 w-[894.4px]" data-name="CardContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[32px] h-[508.788px] items-center justify-center px-[24px] py-0 relative w-[894.4px]">
        <PhotoEditingCard7 />
        <PhotoEditingCard8 />
      </div>
    </div>
  );
}

export default function PhotoEditor() {
  return (
    <div className="bg-white relative rounded-[14px] size-full" data-name="Photo Editor">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-center justify-center p-[0.8px] relative size-full">
          <CardHeader />
          <CardContent />
        </div>
      </div>
    </div>
  );
}