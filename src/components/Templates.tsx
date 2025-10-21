import svgPaths from "../imports/svg-k5rwpruydq";
import { imgGroup } from "../imports/svg-sergs";

function Frame() {
  return (
    <div className="absolute left-[24px] size-[24px] top-[18px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p297c2380} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[8.33%_13.67%_16.67%_3%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-0.5px] mask-size-[13px_12px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <div className="absolute inset-[-5.56%_-4.61%_-5.56%_-4.62%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 11">
          <g id="Group">
            <path d={svgPaths.pcc0f5c0} id="Vector" stroke="var(--stroke-0, #111111)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p13e57880} id="Vector_2" stroke="var(--stroke-0, #121212)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p13bb4e80} id="Vector_3" stroke="var(--stroke-0, #101010)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p2f62e800} id="Vector_4" stroke="var(--stroke-0, #101010)" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute contents inset-[4.17%_-3%_-4.17%_3%]" data-name="Clip path group">
      <Group />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute h-[12px] left-[979px] overflow-clip top-[21px] w-[13px]" data-name="Frame">
      <ClipPathGroup />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute h-[15px] left-[1004px] top-[338px] w-[17px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 15">
        <g id="Frame">
          <path d="M12.75 3.75L4.25 11.25" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
          <path d="M4.25 3.75L12.75 11.25" id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute h-[15px] left-[880px] top-[336px] w-[16px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 15">
        <g id="Frame">
          <path d={svgPaths.p1ef3e00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" />
        </g>
      </svg>
    </div>
  );
}

function Group23() {
  return (
    <div className="absolute h-[36px] left-[143px] top-[91px] w-[543px]">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-[-1px] pointer-events-none" />
      <div className="absolute bg-white inset-0 rounded-[8px]" data-name="Rectangle">
        <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
      <div className="absolute flex flex-col font-['Arial:Regular',_sans-serif] inset-[27.78%_60.22%_27.78%_2.95%] justify-center leading-[0] not-italic text-[#6a7282] text-[14px]">
        <p className="leading-[normal]">Type your message here...</p>
      </div>
    </div>
  );
}

export default function Templates() {
  return (
    <div className="bg-white relative size-full" data-name="sms>templates">
      <div className="absolute bg-white h-[590px] left-0 top-0 w-[1271px]" data-name="Rectangle" />
      <div className="absolute bg-gradient-to-r from-3% from-[rgba(37,87,225,0.8)] h-[60px] left-0 to-[#f8fafc] top-0 via-51% via-[#bdcefa] w-[1150px]" data-name="Rectangle" />
      <Frame />
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[28px] left-[60px] not-italic text-[18px] text-nowrap text-white top-[16px] whitespace-pre">Message Management</p>
      <div className="absolute bg-[rgba(255,255,255,0.2)] h-[26px] left-[966px] rounded-[8px] top-[14px] w-[131px]" data-name="Rectangle">
        <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[8px]" />
      </div>
      <Frame1 />
      <p className="absolute font-['Arial:Regular',_sans-serif] h-[16px] leading-[16px] left-[999px] not-italic text-[12px] text-black top-[19px] w-[84px]">Quick Message</p>
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[29px] not-italic text-[14px] text-neutral-950 text-nowrap top-[94px] whitespace-pre">New Message</p>
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[122px] not-italic text-[#fb2c36] text-[14px] text-nowrap top-[94px] whitespace-pre">*</p>
      <div className="absolute bg-[#7595ec] h-[38px] left-[725px] rounded-[8px] top-[90px] w-[64px]" data-name="Rectangle">
        <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      </div>
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[757px] not-italic text-[14px] text-center text-nowrap text-white top-[99px] translate-x-[-50%] whitespace-pre">ADD</p>
      <div className="absolute bg-[rgba(98,135,190,0.77)] h-[44px] left-[30px] top-[147px] w-[1109px]" data-name="Rectangle" />
      <div className="absolute h-[44px] left-[30px] top-[148px] w-[439px]" data-name="Rectangle">
        <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none" />
      </div>
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[46px] not-italic text-[14px] text-nowrap text-white top-[160px] whitespace-pre">Sno</p>
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[485px] not-italic text-[14px] text-nowrap text-white top-[160px] whitespace-pre">Message</p>
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[1017px] not-italic text-[14px] text-nowrap text-white top-[160px] whitespace-pre">Action</p>
      <div className="absolute bg-[#f3f3f5] h-[45px] left-[30px] top-[192px] w-[1109px]" data-name="Rectangle">
        <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      </div>
      <div className="absolute bg-[rgba(96,165,250,0.38)] h-[45px] left-[30px] top-[192px] w-[439px]" data-name="Rectangle">
        <div aria-hidden="true" className="absolute border-[0px_1px_0px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      </div>
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[46px] not-italic text-[14px] text-black text-nowrap top-[204px] whitespace-pre">1</p>
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[20px] left-[485px] not-italic text-[14px] text-neutral-950 text-nowrap top-[204px] whitespace-pre">Welcome</p>
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[16px] left-[29px] not-italic text-[#6a7282] text-[12px] text-nowrap top-[246px] whitespace-pre">1 message total</p>
      <div className="absolute h-[71px] left-[5px] top-[310px] w-[1261px]" data-name="Rectangle">
        <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      </div>
      <div className="absolute bg-white h-[38px] left-[987px] rounded-[8px] top-[327px] w-[107px]" data-name="Rectangle">
        <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      </div>
      <Frame2 />
      <p className="absolute font-['Arial:Regular',_sans-serif] h-[20px] leading-[20px] left-[1053px] not-italic text-[14px] text-center text-neutral-950 top-[336px] translate-x-[-50%] w-[48px]">CLOSE</p>
      <div className="absolute bg-[#7595ec] h-[38px] left-[865px] rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1)] top-[327px] w-[94px]" data-name="Rectangle" />
      <Frame3 />
      <p className="absolute font-['Arial:Regular',_sans-serif] h-[20px] leading-[20px] left-[920px] not-italic text-[14px] text-center text-white top-[336px] translate-x-[-50%] w-[38px]">SAVE</p>
      <Group23 />
    </div>
  );
}
