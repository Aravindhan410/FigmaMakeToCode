import svgPaths from "./svg-dexr54zbe7";
import imgEllipse from "figma:asset/6e4b505597ac72ecd843e5eed5fc95a0075f47f7.png";
import imgEllipse1 from "figma:asset/3ef884c29454fd9011a2d2143ba206ec7983b9b8.png";
import imgEllipse2 from "figma:asset/c89c2115cbb89d5043c187e8b397f84feff0394d.png";
import imgEllipse3 from "figma:asset/34dc7f05c5b2ce55087baa754bdc9c634bbbc118.png";
import imgEllipse4 from "figma:asset/8789ff7d00d318e7aee1b9a91bba157337d18959.png";
import imgEllipse5 from "figma:asset/689ddb22f614f330a09eaa58c93880a575531c1b.png";

function Line() {
  return (
    <div className="absolute inset-[12.47%_6.53%_12.47%_6.24%]" data-name="Line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 17">
        <g id="Line">
          <path d={svgPaths.p1e5f4400} fill="var(--fill-0, white)" id="Vector 1" opacity="0.36" />
          <path d={svgPaths.p268988f0} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Book1() {
  return (
    <div className="absolute left-[37.47px] overflow-clip size-[22.483px] top-[31.48px]" data-name="book 1">
      <Line />
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents left-[37.47px] top-[31.48px]">
      <Book1 />
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute contents left-[33.72px] top-[26.98px]">
      <div className="absolute left-[33.72px] size-[29.977px] top-[26.98px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
          <circle cx="14.9886" cy="14.9886" fill="var(--fill-0, #FFB700)" id="Ellipse 12" r="14.9886" />
        </svg>
      </div>
      <Group9 />
    </div>
  );
}

function Group30() {
  return (
    <div className="absolute contents left-[33.72px] top-[26.98px]">
      <p className="absolute font-['Poppins:Bold',_sans-serif] leading-[1.5] left-[75.69px] not-italic text-[#063852] text-[17.986px] text-nowrap top-[28.48px] tracking-[-0.1799px] whitespace-pre">Educlass</p>
      <Group13 />
    </div>
  );
}

function Envelope2() {
  return (
    <div className="absolute left-[32.98px] size-[17.986px] top-[143.14px]" data-name="envelope (2)">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1_658)" id="envelope (2)">
          <path d={svgPaths.pa66b400} fill="var(--fill-0, #9EA3AE)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_658">
            <rect fill="white" height="17.9863" width="17.9863" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Inbox() {
  return (
    <div className="absolute contents left-[32.98px] top-[140.89px]" data-name="Inbox">
      <p className="absolute font-['Poppins:Medium',_sans-serif] leading-[1.45] left-[71.94px] not-italic text-[#9ea3ae] text-[13.49px] text-nowrap top-[142.39px] tracking-[-0.0674px] whitespace-pre">Inbox</p>
      <Envelope2 />
      <div className="absolute left-[44.97px] size-[8.993px] top-[140.89px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
          <circle cx="4.49658" cy="4.49658" fill="var(--fill-0, #DB4141)" id="Ellipse 11" r="4.49658" />
        </svg>
      </div>
    </div>
  );
}

function Bank() {
  return (
    <div className="absolute left-[32.98px] size-[17.986px] top-[185.86px]" data-name="bank">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1_686)" id="bank">
          <path d={svgPaths.pe564280} fill="var(--fill-0, #9EA3AE)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_686">
            <rect fill="white" height="17.9863" width="17.9863" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Class() {
  return (
    <div className="absolute contents left-[32.98px] top-[185.86px]" data-name="Class">
      <p className="absolute font-['Poppins:Medium',_sans-serif] leading-[1.45] left-[71.94px] not-italic text-[#9ea3ae] text-[13.49px] text-nowrap top-[185.86px] tracking-[-0.0674px] whitespace-pre">Class</p>
      <Bank />
    </div>
  );
}

function Users() {
  return (
    <div className="absolute left-[32.98px] size-[17.986px] top-[230.07px]" data-name="users">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1_569)" id="users">
          <path d={svgPaths.pd40ee00} fill="var(--fill-0, #9EA3AE)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_569">
            <rect fill="white" height="17.9863" width="17.9863" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Student() {
  return (
    <div className="absolute contents left-[32.98px] top-[229.32px]" data-name="Student">
      <p className="absolute font-['Poppins:Medium',_sans-serif] leading-[1.45] left-[71.94px] not-italic text-[#9ea3ae] text-[13.49px] text-nowrap top-[229.32px] tracking-[-0.0674px] whitespace-pre">Student</p>
      <Users />
    </div>
  );
}

function Document() {
  return (
    <div className="absolute left-[32.98px] size-[17.986px] top-[273.54px]" data-name="document">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1_709)" id="document">
          <path d={svgPaths.p3fa76100} fill="var(--fill-0, #9EA3AE)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_709">
            <rect fill="white" height="17.9863" width="17.9863" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Test() {
  return (
    <div className="absolute contents left-[32.98px] top-[272.79px]" data-name="Test">
      <p className="absolute font-['Poppins:Medium',_sans-serif] leading-[1.45] left-[71.94px] not-italic text-[#9ea3ae] text-[13.49px] text-nowrap top-[272.79px] tracking-[-0.0674px] whitespace-pre">Test</p>
      <Document />
    </div>
  );
}

function Folder() {
  return (
    <div className="absolute left-[32.98px] size-[17.986px] top-[317.01px]" data-name="folder">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1_602)" id="folder">
          <path d={svgPaths.p28701a80} fill="var(--fill-0, #9EA3AE)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_602">
            <rect fill="white" height="17.9863" width="17.9863" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Files() {
  return (
    <div className="absolute contents left-[32.98px] top-[316.26px]" data-name="Files">
      <p className="absolute font-['Poppins:Medium',_sans-serif] leading-[1.45] left-[71.94px] not-italic text-[#9ea3ae] text-[13.49px] text-nowrap top-[316.26px] tracking-[-0.0674px] whitespace-pre">Files</p>
      <Folder />
    </div>
  );
}

function Settings() {
  return (
    <div className="absolute left-[32.98px] size-[17.986px] top-[360.48px]" data-name="settings">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1_579)" id="settings">
          <path d={svgPaths.p3f6b21c0} fill="var(--fill-0, #9EA3AE)" id="Vector" />
          <path d={svgPaths.p1301b800} fill="var(--fill-0, #9EA3AE)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_579">
            <rect fill="white" height="17.9863" width="17.9863" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Settings1() {
  return (
    <div className="absolute contents left-[32.98px] top-[359.73px]" data-name="Settings">
      <p className="absolute font-['Poppins:Medium',_sans-serif] leading-[1.45] left-[71.94px] not-italic text-[#9ea3ae] text-[13.49px] text-nowrap top-[359.73px] tracking-[-0.0674px] whitespace-pre">Settings</p>
      <Settings />
    </div>
  );
}

function Apps() {
  return (
    <div className="absolute left-[32.98px] size-[17.986px] top-[99.67px]" data-name="apps">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1_669)" id="apps">
          <path d={svgPaths.p2cd25500} fill="var(--fill-0, #2374EE)" id="Vector" />
          <path d={svgPaths.p1e38f00} fill="var(--fill-0, #2374EE)" id="Vector_2" />
          <path d={svgPaths.p2e287500} fill="var(--fill-0, #2374EE)" id="Vector_3" />
          <path d={svgPaths.p2b5c3780} fill="var(--fill-0, #2374EE)" id="Vector_4" />
        </g>
        <defs>
          <clipPath id="clip0_1_669">
            <rect fill="white" height="17.9863" width="17.9863" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="absolute contents left-[32.98px] top-[98.92px]" data-name="Dashboard">
      <p className="absolute font-['Poppins:Medium',_sans-serif] leading-[1.45] left-[71.94px] not-italic text-[#2374ee] text-[13.49px] text-nowrap top-[98.92px] tracking-[-0.0674px] whitespace-pre">Dashboard</p>
      <Apps />
    </div>
  );
}

function Group77() {
  return (
    <div className="absolute contents left-0 top-[86.93px]">
      <div className="absolute bg-[#2374ee] h-[43.467px] left-0 top-[86.93px] w-[2.998px]" />
      <Dashboard />
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute contents left-[22.48px] top-[580.06px]">
      <div className="absolute bg-white h-[160.378px] left-[22.48px] rounded-[11.991px] top-[580.06px] w-[146.139px]">
        <div aria-hidden="true" className="absolute border-[#d3d5da] border-[0.3px] border-solid inset-0 pointer-events-none rounded-[11.991px]" />
      </div>
      <div className="absolute bg-[#2374ee] h-[31.476px] left-[40.47px] rounded-[7.494px] top-[694.72px] w-[110.166px]" />
      <p className="absolute font-['Poppins:Bold',_sans-serif] leading-[1.45] left-[52.46px] not-italic text-[#063852] text-[13.49px] top-[649.01px] tracking-[-0.0674px] w-[91.43px]">Brian Connor</p>
      <p className="absolute font-['Poppins:Medium',_sans-serif] leading-[1.4] left-[50.21px] not-italic text-[#9ea3ae] text-[10.492px] top-[668.49px] w-[95.927px]">Teacher Assistant</p>
      <p className="absolute font-['Poppins:Medium',_sans-serif] leading-[1.4] left-[95.93px] not-italic text-[10.492px] text-center text-white top-[702.22px] translate-x-[-50%] w-[62.952px]">View Profile</p>
    </div>
  );
}

function Group78() {
  return (
    <div className="absolute contents left-0 top-0">
      <div className="absolute bg-white h-[767.416px] left-0 top-0 w-[191.105px]">
        <div aria-hidden="true" className="absolute border-[#d3d5da] border-[0.3px] border-solid inset-0 pointer-events-none" />
      </div>
      <Group30 />
      <Inbox />
      <Class />
      <Student />
      <Test />
      <Files />
      <Settings1 />
      <Group77 />
      <Group12 />
      <div className="absolute left-[73.44px] size-[44.966px] top-[595.05px]" data-name="Ellipse">
        <img alt="" className="block max-w-none size-full" height="44.966" src={imgEllipse} width="44.966" />
      </div>
    </div>
  );
}

function Group23() {
  return (
    <div className="absolute contents left-[calc(41.667%+17.237px)] top-[112.41px]">
      <p className="absolute font-['Poppins:Medium',_sans-serif] leading-[1.35] left-[calc(41.667%+17.237px)] not-italic text-[#063852] text-[8.993px] top-[172.37px] w-[12.74px]">03</p>
      <p className="absolute font-['Poppins:Medium',_sans-serif] leading-[1.35] left-[calc(41.667%+46.465px)] not-italic text-[#063852] text-[8.993px] top-[172.37px] w-[12.74px]">04</p>
      <p className="absolute font-['Poppins:Medium',_sans-serif] leading-[1.35] left-[calc(41.667%+76.442px)] not-italic text-[#063852] text-[8.993px] top-[172.37px] w-[12.74px]">05</p>
      <p className="absolute font-['Poppins:Medium',_sans-serif] leading-[1.35] left-[calc(50%+17.237px)] not-italic text-[#063852] text-[8.993px] top-[172.37px] w-[11.991px]">06</p>
      <p className="absolute font-['Poppins:Medium',_sans-serif] leading-[1.35] left-[calc(50%+47.214px)] not-italic text-[#063852] text-[8.993px] top-[172.37px] w-[11.991px]">07</p>
      <div className="absolute h-[56.957px] left-[calc(41.667%+23.196px)] top-[112.41px] w-0">
        <div className="absolute bottom-0 left-[-0.17px] right-[-0.17px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 57">
            <path d="M1 0V56.9567" id="Vector 3" stroke="var(--stroke-0, #D3D5DA)" strokeWidth="0.338713" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[56.957px] left-[calc(41.667%+53.173px)] top-[112.41px] w-0">
        <div className="absolute bottom-0 left-[-0.17px] right-[-0.17px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 57">
            <path d="M1 0V56.9567" id="Vector 3" stroke="var(--stroke-0, #D3D5DA)" strokeWidth="0.338713" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[56.957px] left-[calc(50%-6.781px)] top-[112.41px] w-0">
        <div className="absolute bottom-0 left-[-0.17px] right-[-0.17px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 57">
            <path d="M1 0V56.9567" id="Vector 3" stroke="var(--stroke-0, #D3D5DA)" strokeWidth="0.338713" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[56.957px] left-[calc(50%+23.196px)] top-[112.41px] w-0">
        <div className="absolute bottom-0 left-[-0.17px] right-[-0.17px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 57">
            <path d="M1 0V56.9567" id="Vector 3" stroke="var(--stroke-0, #D3D5DA)" strokeWidth="0.338713" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[56.957px] left-[calc(50%+53.173px)] top-[112.41px] w-0">
        <div className="absolute bottom-0 left-[-0.17px] right-[-0.17px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 57">
            <path d="M1 0V56.9567" id="Vector 3" stroke="var(--stroke-0, #D3D5DA)" strokeWidth="0.338713" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[32.975px] left-[calc(41.667%+23.196px)] top-[122.91px] w-[119.945px]">
        <div className="absolute inset-[-3.05%_-0.33%_-2.74%_-0.3%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 122 35">
            <path d={svgPaths.p3c054000} id="Vector 8" stroke="var(--stroke-0, #2374EE)" strokeWidth="1.69357" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[46.465px] left-[calc(41.667%+23.232px)] top-[122.91px] w-[119.945px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 120 47">
          <path d={svgPaths.p8cc4700} fill="url(#paint0_linear_1_638)" id="Vector 9" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_638" x1="59.9726" x2="59.9726" y1="0" y2="46.4646">
              <stop stopColor="#515FCE" stopOpacity="0.2" />
              <stop offset="1" stopColor="#515FCE" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute left-[calc(41.667%+19.008px)] size-[8.375px] top-[137.75px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
          <circle cx="4.18773" cy="4.18773" fill="var(--fill-0, white)" id="Ellipse 18" r="3.34094" stroke="var(--stroke-0, #2374EE)" strokeWidth="1.69357" />
        </svg>
      </div>
      <div className="absolute left-[calc(41.667%+48.713px)] size-[8.375px] top-[151.38px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
          <circle cx="4.18773" cy="4.18773" fill="var(--fill-0, white)" id="Ellipse 18" r="3.34094" stroke="var(--stroke-0, #2374EE)" strokeWidth="1.69357" />
        </svg>
      </div>
      <div className="absolute left-[calc(41.667%+78.69px)] size-[8.375px] top-[142.39px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
          <circle cx="4.18773" cy="4.18773" fill="var(--fill-0, white)" id="Ellipse 18" r="3.34094" stroke="var(--stroke-0, #2374EE)" strokeWidth="1.69357" />
        </svg>
      </div>
      <div className="absolute left-[calc(50%+18.736px)] size-[8.375px] top-[118.41px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
          <circle cx="4.18773" cy="4.18773" fill="var(--fill-0, white)" id="Ellipse 18" r="3.34094" stroke="var(--stroke-0, #2374EE)" strokeWidth="1.69357" />
        </svg>
      </div>
      <div className="absolute left-[calc(50%+48.713px)] size-[8.375px] top-[134.9px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
          <circle cx="4.18773" cy="4.18773" fill="var(--fill-0, white)" id="Ellipse 18" r="3.34094" stroke="var(--stroke-0, #2374EE)" strokeWidth="1.69357" />
        </svg>
      </div>
    </div>
  );
}

function Group26() {
  return (
    <div className="absolute contents left-[calc(33.333%+59.205px)] top-[74.94px]">
      <div className="absolute bg-white h-[119.909px] left-[calc(33.333%+59.205px)] rounded-[11.991px] top-[74.94px] w-[194.852px]">
        <div aria-hidden="true" className="absolute border-[#d3d5da] border-[0.3px] border-solid inset-0 pointer-events-none rounded-[11.991px]" />
      </div>
      <p className="absolute css-buezur font-['Poppins:Bold',_sans-serif] leading-[1.5] left-[calc(33.333%+74.194px)] not-italic text-[#063852] text-[11.991px] top-[86.93px] w-[102.672px]">Subjects Taught</p>
      <p className="absolute font-['Poppins:Bold',_sans-serif] h-[26.98px] leading-[1.25] left-[calc(33.333%+74.194px)] not-italic text-[#063852] text-[23.982px] top-[104.92px] tracking-[-0.2398px] w-[25.481px]">12</p>
      <Group23 />
    </div>
  );
}

function Group22() {
  return (
    <div className="absolute left-[calc(25%+45.715px)] size-[74.943px] top-[100.42px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 75 75">
        <g id="Group 22">
          <path d={svgPaths.p30e1ce00} fill="var(--fill-0, #C4C4C4)" id="Ellipse 13" />
          <path d={svgPaths.p1206fc00} fill="var(--fill-0, #2374EE)" id="Ellipse 14" />
          <path d={svgPaths.ped9bf00} fill="var(--fill-0, #FFB700)" id="Ellipse 15" />
        </g>
      </svg>
    </div>
  );
}

function Group16() {
  return (
    <div className="absolute contents left-[calc(16.667%+47.214px)] top-[140.14px]">
      <p className="absolute font-['Poppins:Medium',_sans-serif] leading-[1.4] left-[calc(16.667%+59.205px)] not-italic text-[#063852] text-[10.492px] top-[140.14px] w-[44.216px]">Male : 12</p>
      <div className="absolute left-[calc(16.667%+47.214px)] size-[5.995px] top-[144.64px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="2.99772" cy="2.99772" fill="var(--fill-0, #FFB700)" id="Ellipse 16" r="2.99772" />
        </svg>
      </div>
    </div>
  );
}

function Group15() {
  return (
    <div className="absolute contents left-[calc(16.667%+47.214px)] top-[161.13px]">
      <p className="absolute font-['Poppins:Medium',_sans-serif] leading-[1.4] left-[calc(16.667%+59.205px)] not-italic text-[#063852] text-[10.492px] top-[161.13px] w-[60.704px]">Female : 24</p>
      <div className="absolute left-[calc(16.667%+47.214px)] size-[5.995px] top-[165.62px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="2.99772" cy="2.99772" fill="var(--fill-0, #0E9278)" id="Ellipse 17" r="2.99772" />
        </svg>
      </div>
    </div>
  );
}

function Users3() {
  return (
    <div className="absolute left-[calc(25%+72.695px)] size-[20.984px] top-[126.65px]" data-name="users (3)">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
        <g clipPath="url(#clip0_1_704)" id="users (3)">
          <path d={svgPaths.p3e4c1400} fill="var(--fill-0, #063852)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_704">
            <rect fill="white" height="20.984" width="20.984" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group25() {
  return (
    <div className="absolute contents left-[calc(16.667%+32.225px)] top-[74.94px]">
      <div className="absolute bg-white h-[119.909px] left-[calc(16.667%+32.225px)] rounded-[11.991px] top-[74.94px] w-[194.852px]">
        <div aria-hidden="true" className="absolute border-[#d3d5da] border-[0.3px] border-solid inset-0 pointer-events-none rounded-[11.991px]" />
      </div>
      <p className="absolute font-['Poppins:Bold',_sans-serif] h-[29.228px] leading-[1.25] left-[calc(16.667%+47.214px)] not-italic text-[#063852] text-[23.982px] top-[104.92px] tracking-[-0.2398px] w-[29.977px]">36</p>
      <Group22 />
      <p className="absolute css-buezur font-['Poppins:Bold',_sans-serif] leading-[1.5] left-[calc(16.667%+47.214px)] not-italic text-[#063852] text-[11.991px] top-[86.93px] w-[91.43px]">Total Students</p>
      <Group16 />
      <Group15 />
      <Users3 />
    </div>
  );
}

function Group24() {
  return (
    <div className="absolute contents font-['Poppins:Medium',_sans-serif] leading-[1.35] left-[calc(58.333%+59.954px)] not-italic text-[#063852] text-[8.993px] top-[172.37px]">
      <p className="absolute left-[calc(58.333%+59.954px)] top-[172.37px] w-[17.986px]">Sun</p>
      <p className="absolute left-[calc(66.667%-1.499px)] top-[172.37px] w-[20.984px]">Mon</p>
      <p className="absolute left-[calc(66.667%+30.727px)] top-[172.37px] w-[18.736px]">Tue</p>
      <p className="absolute left-[calc(66.667%+58.455px)] top-[172.37px] w-[21.733px]">Wed</p>
    </div>
  );
}

function Group27() {
  return (
    <div className="absolute contents left-[calc(58.333%+61.453px)] top-[122.91px]">
      <div className="absolute bg-[#ffb700] h-[46.465px] left-[calc(58.333%+61.453px)] rounded-tl-[2.998px] rounded-tr-[2.998px] top-[122.91px] w-[14.989px]" />
      <div className="absolute bg-[#ffb700] h-[19.485px] left-[calc(66.667%+1.499px)] rounded-tl-[2.998px] rounded-tr-[2.998px] top-[149.89px] w-[14.989px]" />
      <div className="absolute bg-[#ffb700] h-[34.474px] left-[calc(66.667%+31.476px)] rounded-tl-[2.998px] rounded-tr-[2.998px] top-[134.9px] w-[14.989px]" />
      <div className="absolute bg-[#ffb700] h-[46.465px] left-[calc(66.667%+61.453px)] rounded-tl-[2.998px] rounded-tr-[2.998px] top-[122.91px] w-[14.989px]" />
    </div>
  );
}

function Group28() {
  return (
    <div className="absolute contents left-[calc(58.333%+59.954px)] top-[122.91px]">
      <Group24 />
      <Group27 />
    </div>
  );
}

function Group29() {
  return (
    <div className="absolute contents left-[calc(58.333%-3.747px)] top-[74.94px]">
      <div className="absolute bg-white h-[119.909px] left-[calc(58.333%-3.747px)] rounded-[12.74px] top-[74.94px] w-[194.852px]">
        <div aria-hidden="true" className="absolute border-[#d3d5da] border-[0.3px] border-solid inset-0 pointer-events-none rounded-[12.74px]" />
      </div>
      <p className="absolute css-buezur font-['Poppins:Bold',_sans-serif] leading-[1.5] left-[calc(58.333%+11.241px)] not-italic text-[#063852] text-[11.991px] top-[86.93px] w-[93.679px]">Task Assigned</p>
      <p className="absolute font-['Poppins:Bold',_sans-serif] h-[26.98px] leading-[1.25] left-[calc(58.333%+11.241px)] not-italic text-[#063852] text-[23.982px] top-[104.92px] tracking-[-0.2398px] w-[31.476px]">06</p>
      <Group28 />
    </div>
  );
}

function AngleRight1() {
  return (
    <div className="relative size-[8.993px]" data-name="angle-right 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
        <g clipPath="url(#clip0_1_583)" id="angle-right 1">
          <path d={svgPaths.pe78bf00} fill="var(--fill-0, #063852)" id="Vector" stroke="var(--stroke-0, #063852)" strokeWidth="0.299772" />
        </g>
        <defs>
          <clipPath id="clip0_1_583">
            <rect fill="white" height="8.99315" width="8.99316" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group44() {
  return (
    <div className="absolute contents left-[calc(66.667%+11.241px)] top-[524.6px]">
      <p className="absolute font-['Poppins:Medium',_sans-serif] leading-[1.6] left-[calc(66.667%+11.241px)] not-italic text-[#063852] text-[11.991px] text-nowrap top-[524.6px] whitespace-pre">Class A</p>
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[calc(66.667%+62.203px)] top-[530.6px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "8.984375", "--transform-inner-height": "8.984375" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <AngleRight1 />
        </div>
      </div>
    </div>
  );
}

function Group80() {
  return (
    <div className="absolute contents left-[calc(16.667%+62.203px)] top-[521.6px]">
      <p className="absolute font-['Poppins:Bold',_sans-serif] leading-[1.5] left-[calc(16.667%+62.203px)] not-italic text-[#063852] text-[17.986px] text-nowrap top-[521.6px] tracking-[-0.1799px] whitespace-pre">Class Attendance</p>
      <Group44 />
    </div>
  );
}

function UsersAlt1() {
  return (
    <div className="absolute left-[calc(16.667%+62.203px)] size-[14.989px] top-[569.57px]" data-name="users-alt 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g clipPath="url(#clip0_1_592)" id="users-alt 1">
          <path d={svgPaths.p3b274ef0} fill="var(--fill-0, #9EA3AE)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_592">
            <rect fill="white" height="14.9886" width="14.9886" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group59() {
  return (
    <div className="absolute contents left-[calc(16.667%+62.203px)] top-[568.82px]">
      <p className="absolute font-['Poppins:Medium',_sans-serif] leading-[1.4] left-[calc(16.667%+86.184px)] not-italic text-[#9ea3ae] text-[10.492px] text-nowrap top-[568.82px] whitespace-pre">36</p>
      <UsersAlt1 />
    </div>
  );
}

function UsersAlt2() {
  return (
    <div className="absolute left-[calc(16.667%+62.203px)] size-[14.989px] top-[608.54px]" data-name="users-alt 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g clipPath="url(#clip0_1_592)" id="users-alt 1">
          <path d={svgPaths.p3b274ef0} fill="var(--fill-0, #9EA3AE)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_592">
            <rect fill="white" height="14.9886" width="14.9886" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group58() {
  return (
    <div className="absolute contents left-[calc(16.667%+62.203px)] top-[607.79px]">
      <p className="absolute font-['Poppins:Medium',_sans-serif] leading-[1.4] left-[calc(16.667%+86.184px)] not-italic text-[#9ea3ae] text-[10.492px] text-nowrap top-[607.79px] whitespace-pre">27</p>
      <UsersAlt2 />
    </div>
  );
}

function UsersAlt3() {
  return (
    <div className="absolute left-[calc(16.667%+62.203px)] size-[14.989px] top-[647.51px]" data-name="users-alt 3">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g clipPath="url(#clip0_1_592)" id="users-alt 1">
          <path d={svgPaths.p3b274ef0} fill="var(--fill-0, #9EA3AE)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_592">
            <rect fill="white" height="14.9886" width="14.9886" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group57() {
  return (
    <div className="absolute contents left-[calc(16.667%+62.203px)] top-[646.76px]">
      <p className="absolute font-['Poppins:Medium',_sans-serif] leading-[1.4] left-[calc(16.667%+86.184px)] not-italic text-[#9ea3ae] text-[10.492px] text-nowrap top-[646.76px] whitespace-pre">18</p>
      <UsersAlt3 />
    </div>
  );
}

function UsersAlt4() {
  return (
    <div className="absolute left-[calc(16.667%+62.203px)] size-[14.989px] top-[686.48px]" data-name="users-alt 4">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g clipPath="url(#clip0_1_592)" id="users-alt 1">
          <path d={svgPaths.p3b274ef0} fill="var(--fill-0, #9EA3AE)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_592">
            <rect fill="white" height="14.9886" width="14.9886" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group56() {
  return (
    <div className="absolute contents left-[calc(16.667%+62.203px)] top-[685.73px]">
      <p className="absolute font-['Poppins:Medium',_sans-serif] leading-[1.4] left-[calc(16.667%+86.184px)] not-italic text-[#9ea3ae] text-[10.492px] text-nowrap top-[685.73px] whitespace-pre">09</p>
      <UsersAlt4 />
    </div>
  );
}

function Group55() {
  return (
    <div className="absolute h-[129.651px] left-[calc(25%+46.465px)] top-[571.82px] w-[463.147px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 464 130">
        <g id="Group 55">
          <path d={svgPaths.p16a290c0} id="Vector 12" stroke="var(--stroke-0, #2374EE)" strokeDasharray="6 6" strokeWidth="1.49886" />
          <path d={svgPaths.p3ca56180} id="Vector 10" stroke="var(--stroke-0, #2374EE)" strokeWidth="2.24829" />
          <path d={svgPaths.p1add9380} fill="url(#paint0_linear_1_640)" id="Vector 13" />
          <circle cx="5.99544" cy="33.7243" fill="var(--fill-0, white)" id="Ellipse 18" r="4.87129" stroke="var(--stroke-0, #2374EE)" strokeWidth="2.24829" />
          <circle cx="98.1753" cy="20.984" fill="var(--fill-0, white)" id="Ellipse 19" r="4.87129" stroke="var(--stroke-0, #2374EE)" strokeWidth="2.24829" />
          <circle cx="190.355" cy="16.4875" fill="var(--fill-0, white)" id="Ellipse 20" r="7.4943" stroke="var(--stroke-0, #2374EE)" strokeWidth="2.99772" />
          <circle cx="283.284" cy="22.4829" fill="var(--fill-0, white)" id="Ellipse 21" r="4.87129" stroke="var(--stroke-0, #2374EE)" strokeWidth="2.24829" />
          <circle cx="457.152" cy="19.4852" fill="var(--fill-0, white)" id="Ellipse 22" r="4.87129" stroke="var(--stroke-0, #2374EE)" strokeWidth="2.24829" />
          <circle cx="370.218" cy="5.99544" fill="var(--fill-0, white)" id="Ellipse 23" r="4.87129" stroke="var(--stroke-0, #2374EE)" strokeWidth="2.24829" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_640" x1="231.574" x2="231.574" y1="20.6093" y2="120.658">
            <stop stopColor="#515FCE" stopOpacity="0.2" />
            <stop offset="1" stopColor="#515FCE" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Group60() {
  return (
    <div className="absolute contents left-[calc(16.667%+62.203px)] top-[568.82px]">
      <p className="absolute font-['Poppins:Medium',_sans-serif] leading-[1.4] left-[calc(25%+39.72px)] not-italic text-[#9ea3ae] text-[10.492px] text-nowrap top-[705.21px] whitespace-pre">Mon</p>
      <p className="absolute font-['Poppins:Medium',_sans-serif] leading-[1.4] left-[calc(33.333%+44.216px)] not-italic text-[#9ea3ae] text-[10.492px] text-nowrap top-[705.21px] whitespace-pre">Tue</p>
      <p className="absolute font-['Poppins:Medium',_sans-serif] leading-[1.4] left-[calc(41.667%+43.467px)] not-italic text-[#9ea3ae] text-[10.492px] text-nowrap top-[705.21px] whitespace-pre">Wed</p>
      <p className="absolute font-['Poppins:Medium',_sans-serif] leading-[1.4] left-[calc(50%+49.462px)] not-italic text-[#9ea3ae] text-[10.492px] text-nowrap top-[705.21px] whitespace-pre">Thu</p>
      <p className="absolute font-['Poppins:Medium',_sans-serif] leading-[1.4] left-[calc(58.333%+48.713px)] not-italic text-[#9ea3ae] text-[10.492px] text-nowrap top-[705.21px] whitespace-pre">Fri</p>
      <p className="absolute font-['Poppins:Medium',_sans-serif] leading-[1.4] left-[calc(66.667%+42.717px)] not-italic text-[#9ea3ae] text-[10.492px] text-nowrap top-[705.21px] whitespace-pre">Mon</p>
      <Group59 />
      <Group58 />
      <Group57 />
      <Group56 />
      <Group55 />
    </div>
  );
}

function Group45() {
  return (
    <div className="absolute contents left-[calc(41.667%+21.733px)] top-[525.35px]">
      <div className="absolute bg-white h-[38.97px] left-[calc(41.667%+21.733px)] rounded-[5.995px] shadow-[0px_5.995px_8.993px_0px_rgba(40,44,66,0.08)] top-[525.35px] w-[68.948px]" />
      <p className="absolute font-['Poppins:Medium',_sans-serif] leading-[1.35] left-[calc(41.667%+33.724px)] not-italic text-[8.993px] text-black text-nowrap top-[531.35px] whitespace-pre">
        <span className="text-[#063852]">Attend:</span> <span className="text-[#2374ee]">33</span>
      </p>
      <p className="absolute font-['Poppins:Medium',_sans-serif] leading-[1.35] left-[calc(41.667%+33.724px)] not-italic text-[8.993px] text-black text-nowrap top-[546.33px] whitespace-pre">
        <span className="text-[#063852]">Absent:</span> <span className="text-[#db4141]">3</span>
      </p>
    </div>
  );
}

function Group81() {
  return (
    <div className="absolute contents left-[calc(16.667%+32.225px)] top-[506.61px]">
      <div className="absolute bg-white h-[233.822px] left-[calc(16.667%+32.225px)] rounded-[14.989px] top-[506.61px] w-[608.537px]">
        <div aria-hidden="true" className="absolute border-[#d3d5da] border-[0.3px] border-solid inset-0 pointer-events-none rounded-[14.989px]" />
      </div>
      <Group80 />
      <Group60 />
      <Group45 />
    </div>
  );
}

function Group66() {
  return (
    <div className="absolute contents left-[calc(16.667%+54.708px)] top-[262.3px]">
      <div className="absolute bg-[#f8f7fc] h-[35.973px] left-[calc(16.667%+54.708px)] top-[262.3px] w-[563.571px]" />
      <p className="absolute font-['Poppins:Medium',_sans-serif] leading-[1.6] left-[calc(16.667%+84.686px)] not-italic text-[#063852] text-[11.991px] text-nowrap top-[270.54px] whitespace-pre">Name</p>
      <p className="absolute font-['Poppins:Medium',_sans-serif] leading-[1.6] left-[calc(33.333%+66.699px)] not-italic text-[#063852] text-[11.991px] text-nowrap top-[270.54px] whitespace-pre">Date</p>
      <p className="absolute font-['Poppins:Medium',_sans-serif] leading-[1.6] left-[calc(50%+22.483px)] not-italic text-[#063852] text-[11.991px] text-nowrap top-[270.54px] whitespace-pre">Status</p>
    </div>
  );
}

function Group36() {
  return (
    <div className="absolute contents left-[calc(50%+23.232px)] top-[312.51px]">
      <div className="absolute bg-[rgba(58,120,232,0.12)] h-[19.485px] left-[calc(50%+23.232px)] rounded-[18.736px] top-[312.51px] w-[50.961px]" />
      <p className="absolute font-['Poppins:Regular',_sans-serif] leading-[1.35] left-[calc(50%+35.223px)] not-italic text-[#3a78e8] text-[8.993px] text-nowrap top-[315.51px] whitespace-pre">Active</p>
    </div>
  );
}

function Group35() {
  return (
    <div className="absolute contents left-[calc(16.667%+84.686px)] top-[311.76px]">
      <p className="absolute font-['Poppins:Medium',_sans-serif] leading-[1.4] left-[calc(25%+27.729px)] not-italic text-[#063852] text-[10.492px] text-nowrap top-[314.76px] whitespace-pre">Jack Grow</p>
      <div className="absolute left-[calc(16.667%+84.686px)] size-[20.984px] top-[311.76px]" data-name="Ellipse">
        <img alt="" className="block max-w-none size-full" height="20.984" src={imgEllipse1} width="20.984" />
      </div>
    </div>
  );
}

function Download1() {
  return (
    <div className="absolute left-[calc(66.667%-12.74px)] size-[13.49px] top-[315.51px]" data-name="download 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_1_634)" id="download 1">
          <path d={svgPaths.p4fab780} fill="var(--fill-0, #2374EE)" id="Vector" />
          <path d={svgPaths.p2b2406f0} fill="var(--fill-0, #2374EE)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_634">
            <rect fill="white" height="13.4897" width="13.4897" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Eye1() {
  return (
    <div className="absolute left-[calc(66.667%+24.731px)] size-[13.49px] top-[315.51px]" data-name="eye 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_1_627)" id="eye 1">
          <path d={svgPaths.pee22080} fill="var(--fill-0, #9EA3AE)" id="Vector" />
          <path d={svgPaths.p2a66c900} fill="var(--fill-0, #9EA3AE)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_627">
            <rect fill="white" height="13.4897" width="13.4897" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group40() {
  return (
    <div className="absolute contents left-[calc(66.667%-12.74px)] top-[315.51px]">
      <Download1 />
      <Eye1 />
    </div>
  );
}

function Group62() {
  return (
    <div className="absolute contents left-[calc(16.667%+84.686px)] top-[311.76px]">
      <Group36 />
      <p className="absolute font-['Poppins:Regular',_sans-serif] leading-[1.4] left-[calc(33.333%+66.699px)] not-italic text-[#9ea3ae] text-[10.492px] text-nowrap top-[314.76px] whitespace-pre">12 December</p>
      <Group35 />
      <Group40 />
    </div>
  );
}

function Group37() {
  return (
    <div className="absolute contents left-[calc(50%+23.232px)] top-[348.49px]">
      <div className="absolute bg-[rgba(58,120,232,0.12)] h-[19.485px] left-[calc(50%+23.232px)] rounded-[18.736px] top-[348.49px] w-[50.961px]" />
      <p className="absolute font-['Poppins:Regular',_sans-serif] leading-[1.35] left-[calc(50%+35.223px)] not-italic text-[#3a78e8] text-[8.993px] text-nowrap top-[351.48px] whitespace-pre">Active</p>
    </div>
  );
}

function Group34() {
  return (
    <div className="absolute contents left-[calc(16.667%+84.686px)] top-[347.74px]">
      <p className="absolute font-['Poppins:Medium',_sans-serif] leading-[1.4] left-[calc(25%+27.729px)] not-italic text-[#063852] text-[10.492px] text-nowrap top-[350.73px] whitespace-pre">Sam Smith</p>
      <div className="absolute left-[calc(16.667%+84.686px)] size-[20.984px] top-[347.74px]" data-name="Ellipse">
        <img alt="" className="block max-w-none size-full" height="20.984" src={imgEllipse2} width="20.984" />
      </div>
    </div>
  );
}

function Download2() {
  return (
    <div className="absolute left-[calc(66.667%-12.74px)] size-[13.49px] top-[351.48px]" data-name="download 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_1_700)" id="download 1">
          <path d={svgPaths.p3e4f800} fill="var(--fill-0, #2374EE)" id="Vector" />
          <path d={svgPaths.p1ef67200} fill="var(--fill-0, #2374EE)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_700">
            <rect fill="white" height="13.4897" width="13.4897" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Eye2() {
  return (
    <div className="absolute left-[calc(66.667%+24.731px)] size-[13.49px] top-[351.48px]" data-name="eye 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_1_623)" id="eye 1">
          <path d={svgPaths.p26fb1c80} fill="var(--fill-0, #9EA3AE)" id="Vector" />
          <path d={svgPaths.pa5c1700} fill="var(--fill-0, #9EA3AE)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_623">
            <rect fill="white" height="13.4897" width="13.4897" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group41() {
  return (
    <div className="absolute contents left-[calc(66.667%-12.74px)] top-[351.48px]">
      <Download2 />
      <Eye2 />
    </div>
  );
}

function Group63() {
  return (
    <div className="absolute contents left-[calc(16.667%+84.686px)] top-[347.74px]">
      <Group37 />
      <p className="absolute font-['Poppins:Regular',_sans-serif] leading-[1.4] left-[calc(33.333%+66.699px)] not-italic text-[#9ea3ae] text-[10.492px] text-nowrap top-[350.73px] whitespace-pre">12 December</p>
      <Group34 />
      <Group41 />
    </div>
  );
}

function Group38() {
  return (
    <div className="absolute contents left-[calc(50%+23.232px)] top-[384.46px]">
      <div className="absolute bg-[rgba(255,190,64,0.12)] h-[19.485px] left-[calc(50%+23.232px)] rounded-[18.736px] top-[384.46px] w-[63.702px]" />
      <p className="absolute font-['Poppins:Regular',_sans-serif] leading-[1.35] left-[calc(50%+35.223px)] not-italic text-[#ffb700] text-[8.993px] text-nowrap top-[387.45px] whitespace-pre">Checked</p>
    </div>
  );
}

function Group32() {
  return (
    <div className="absolute contents left-[calc(16.667%+84.686px)] top-[383.71px]">
      <p className="absolute font-['Poppins:Medium',_sans-serif] leading-[1.4] left-[calc(25%+27.729px)] not-italic text-[#063852] text-[10.492px] text-nowrap top-[386.71px] whitespace-pre">Sandrina Wong</p>
      <div className="absolute left-[calc(16.667%+84.686px)] size-[20.984px] top-[383.71px]" data-name="Ellipse">
        <img alt="" className="block max-w-none size-full" height="20.984" src={imgEllipse3} width="20.984" />
      </div>
    </div>
  );
}

function Download3() {
  return (
    <div className="absolute left-[calc(66.667%-12.74px)] size-[13.49px] top-[387.45px]" data-name="download 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_1_693)" id="download 1">
          <path d={svgPaths.p1bd97000} fill="var(--fill-0, #2374EE)" id="Vector" />
          <path d={svgPaths.p2b2406f0} fill="var(--fill-0, #2374EE)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_693">
            <rect fill="white" height="13.4897" width="13.4897" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Eye3() {
  return (
    <div className="absolute left-[calc(66.667%+24.731px)] size-[13.49px] top-[387.45px]" data-name="eye 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_1_609)" id="eye 1">
          <path d={svgPaths.p2b99e688} fill="var(--fill-0, #9EA3AE)" id="Vector" />
          <path d={svgPaths.p635ce00} fill="var(--fill-0, #9EA3AE)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_609">
            <rect fill="white" height="13.4897" width="13.4897" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group42() {
  return (
    <div className="absolute contents left-[calc(66.667%-12.74px)] top-[387.45px]">
      <Download3 />
      <Eye3 />
    </div>
  );
}

function Group64() {
  return (
    <div className="absolute contents left-[calc(16.667%+84.686px)] top-[383.71px]">
      <Group38 />
      <p className="absolute font-['Poppins:Regular',_sans-serif] leading-[1.4] left-[calc(33.333%+66.699px)] not-italic text-[#9ea3ae] text-[10.492px] text-nowrap top-[386.71px] whitespace-pre">06 December</p>
      <Group32 />
      <Group42 />
    </div>
  );
}

function Group39() {
  return (
    <div className="absolute contents left-[calc(50%+23.232px)] top-[420.43px]">
      <div className="absolute bg-[rgba(14,146,120,0.12)] h-[19.485px] left-[calc(50%+23.232px)] rounded-[18.736px] top-[420.43px] w-[73.444px]" />
      <p className="absolute font-['Poppins:Regular',_sans-serif] leading-[1.35] left-[calc(50%+35.223px)] not-italic text-[#0e9278] text-[8.993px] text-nowrap top-[423.43px] whitespace-pre">Completed</p>
    </div>
  );
}

function Group33() {
  return (
    <div className="absolute contents left-[calc(16.667%+84.686px)] top-[419.68px]">
      <p className="absolute font-['Poppins:Medium',_sans-serif] leading-[1.4] left-[calc(25%+27.729px)] not-italic text-[#063852] text-[10.492px] text-nowrap top-[422.68px] whitespace-pre">Ahmed Blake</p>
      <div className="absolute left-[calc(16.667%+84.686px)] size-[20.984px] top-[419.68px]" data-name="Ellipse">
        <img alt="" className="block max-w-none size-full" height="20.984" src={imgEllipse4} width="20.984" />
      </div>
    </div>
  );
}

function Download4() {
  return (
    <div className="absolute left-[calc(66.667%-12.74px)] size-[13.49px] top-[423.43px]" data-name="download 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_1_595)" id="download 1">
          <path d={svgPaths.p1c0c1900} fill="var(--fill-0, #2374EE)" id="Vector" />
          <path d={svgPaths.p2b2406f0} fill="var(--fill-0, #2374EE)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_595">
            <rect fill="white" height="13.4897" width="13.4897" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Eye4() {
  return (
    <div className="absolute left-[calc(66.667%+24.731px)] size-[13.49px] top-[423.43px]" data-name="eye 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_1_689)" id="eye 1">
          <path d={svgPaths.p2b99e688} fill="var(--fill-0, #9EA3AE)" id="Vector" />
          <path d={svgPaths.p635ce00} fill="var(--fill-0, #9EA3AE)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_689">
            <rect fill="white" height="13.4897" width="13.4897" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group43() {
  return (
    <div className="absolute contents left-[calc(66.667%-12.74px)] top-[423.43px]">
      <Download4 />
      <Eye4 />
    </div>
  );
}

function Group65() {
  return (
    <div className="absolute contents left-[calc(16.667%+84.686px)] top-[419.68px]">
      <Group39 />
      <p className="absolute font-['Poppins:Regular',_sans-serif] leading-[1.4] left-[calc(33.333%+66.699px)] not-italic text-[#9ea3ae] text-[10.492px] text-nowrap top-[422.68px] whitespace-pre">04 December</p>
      <Group33 />
      <Group43 />
    </div>
  );
}

function Group61() {
  return (
    <div className="absolute contents left-[calc(50%+23.232px)] top-[456.4px]">
      <div className="absolute bg-[rgba(14,146,120,0.12)] h-[19.485px] left-[calc(50%+23.232px)] rounded-[18.736px] top-[456.4px] w-[73.444px]" />
      <p className="absolute font-['Poppins:Regular',_sans-serif] leading-[1.35] left-[calc(50%+35.223px)] not-italic text-[#0e9278] text-[8.993px] text-nowrap top-[459.4px] whitespace-pre">Completed</p>
    </div>
  );
}

function Group67() {
  return (
    <div className="absolute contents left-[calc(16.667%+84.686px)] top-[455.65px]">
      <p className="absolute font-['Poppins:Medium',_sans-serif] leading-[1.4] left-[calc(25%+27.729px)] not-italic text-[#063852] text-[10.492px] text-nowrap top-[458.65px] whitespace-pre">Jonathan B.</p>
      <div className="absolute left-[calc(16.667%+84.686px)] size-[20.984px] top-[455.65px]" data-name="Ellipse">
        <img alt="" className="block max-w-none size-full" height="20.984" src={imgEllipse5} width="20.984" />
      </div>
    </div>
  );
}

function Download5() {
  return (
    <div className="absolute left-[calc(66.667%-12.74px)] size-[13.49px] top-[459.4px]" data-name="download 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_1_661)" id="download 1">
          <path d={svgPaths.p12e31800} fill="var(--fill-0, #2374EE)" id="Vector" />
          <path d={svgPaths.p1d706000} fill="var(--fill-0, #2374EE)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_661">
            <rect fill="white" height="13.4897" width="13.4897" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Eye5() {
  return (
    <div className="absolute left-[calc(66.667%+24.731px)] size-[13.49px] top-[459.4px]" data-name="eye 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_1_605)" id="eye 1">
          <path d={svgPaths.p3e7abf80} fill="var(--fill-0, #9EA3AE)" id="Vector" />
          <path d={svgPaths.p25f1ac00} fill="var(--fill-0, #9EA3AE)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_605">
            <rect fill="white" height="13.4897" width="13.4897" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group74() {
  return (
    <div className="absolute contents left-[calc(66.667%-12.74px)] top-[459.4px]">
      <Download5 />
      <Eye5 />
    </div>
  );
}

function Group68() {
  return (
    <div className="absolute contents left-[calc(16.667%+84.686px)] top-[455.65px]">
      <Group61 />
      <p className="absolute font-['Poppins:Regular',_sans-serif] leading-[1.4] left-[calc(33.333%+66.699px)] not-italic text-[#9ea3ae] text-[10.492px] text-nowrap top-[458.65px] whitespace-pre">04 December</p>
      <Group67 />
      <Group74 />
    </div>
  );
}

function AngleRight4() {
  return (
    <div className="relative size-[8.993px]" data-name="angle-right 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
        <g clipPath="url(#clip0_1_675)" id="angle-right 1">
          <path d={svgPaths.p2eb4cf00} fill="var(--fill-0, #063852)" id="Vector" stroke="var(--stroke-0, #063852)" strokeWidth="0.299772" />
        </g>
        <defs>
          <clipPath id="clip0_1_675">
            <rect fill="white" height="8.99315" width="8.99316" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group75() {
  return (
    <div className="absolute contents left-[calc(66.667%+11.241px)] top-[224.83px]">
      <p className="absolute font-['Poppins:Medium',_sans-serif] leading-[1.6] left-[calc(66.667%+11.241px)] not-italic text-[#063852] text-[11.991px] text-nowrap top-[224.83px] whitespace-pre">Class A</p>
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[calc(66.667%+62.203px)] top-[230.82px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "8.984375", "--transform-inner-height": "8.984375" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <AngleRight4 />
        </div>
      </div>
    </div>
  );
}

function Group79() {
  return (
    <div className="absolute contents left-[calc(16.667%+62.203px)] top-[221.83px]">
      <p className="absolute font-['Poppins:Bold',_sans-serif] leading-[1.5] left-[calc(16.667%+62.203px)] not-italic text-[#063852] text-[17.986px] text-nowrap top-[221.83px] tracking-[-0.1799px] whitespace-pre">Submitted Tasks</p>
      <Group75 />
    </div>
  );
}

function Group92() {
  return (
    <div className="absolute contents left-[calc(16.667%+32.225px)] top-[206.84px]">
      <div className="absolute bg-white h-[287.781px] left-[calc(16.667%+32.225px)] rounded-[14.989px] top-[206.84px] w-[608.537px]">
        <div aria-hidden="true" className="absolute border-[#d3d5da] border-[0.3px] border-solid inset-0 pointer-events-none rounded-[14.989px]" />
      </div>
      <Group66 />
      <Group62 />
      <Group63 />
      <Group64 />
      <Group65 />
      <Group68 />
      <Group79 />
    </div>
  );
}

function Group93() {
  return (
    <div className="absolute contents left-[calc(16.667%+32.225px)] top-[26.98px]">
      <Group26 />
      <Group25 />
      <Group29 />
      <p className="absolute font-['Poppins:Bold',_sans-serif] leading-[1.5] left-[calc(16.667%+32.225px)] not-italic text-[#063852] text-[17.986px] text-nowrap top-[26.98px] tracking-[-0.1799px] whitespace-pre">Overview</p>
      <Group81 />
      <Group92 />
    </div>
  );
}

function Component01AlignCenter() {
  return (
    <div className="absolute bottom-0 left-[-0.13%] right-0 top-[-0.13%]" data-name="01 align center">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g id="01 align center">
          <path d={svgPaths.p231bd700} fill="var(--fill-0, #063852)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Search1() {
  return (
    <div className="absolute left-[calc(83.333%-26.979px)] overflow-clip size-[16.488px] top-[32.98px]" data-name="search 1">
      <Component01AlignCenter />
    </div>
  );
}

function Group46() {
  return (
    <div className="absolute contents left-[calc(75%+44.966px)] top-[20.98px]">
      <div className="absolute bg-white h-[41.219px] left-[calc(75%+44.966px)] rounded-[11.241px] top-[20.98px] w-[209.84px]">
        <div aria-hidden="true" className="absolute border-[#d3d5da] border-[0.3px] border-solid inset-0 pointer-events-none rounded-[11.241px]" />
      </div>
      <p className="absolute font-['Poppins:Medium',_sans-serif] leading-[1.6] left-[calc(83.333%+1.499px)] not-italic text-[#063852] text-[11.991px] text-nowrap top-[30.73px] whitespace-pre">Search</p>
      <Search1 />
    </div>
  );
}

function Group47() {
  return (
    <div className="absolute h-[2.998px] left-[2.25px] top-[7.49px] w-[13.49px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 3">
        <g id="Group 47">
          <circle cx="1.49886" cy="1.49886" fill="var(--fill-0, #9EA3AE)" id="Ellipse 23" r="1.49886" />
          <circle cx="6.74487" cy="1.49885" fill="var(--fill-0, #9EA3AE)" id="Ellipse 24" r="1.49886" />
          <circle cx="11.9909" cy="1.49885" fill="var(--fill-0, #9EA3AE)" id="Ellipse 25" r="1.49886" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute left-[calc(91.667%+41.968px)] overflow-clip size-[17.986px] top-[131.9px]">
      <Group47 />
    </div>
  );
}

function Group49() {
  return (
    <div className="absolute contents left-[calc(75%+59.954px)] top-[131.15px]">
      <p className="absolute font-['Poppins:Medium',_sans-serif] leading-[1.6] left-[calc(75%+59.954px)] not-italic text-[#9ea3ae] text-[11.991px] text-nowrap top-[131.15px] whitespace-pre">Today</p>
      <Frame1 />
    </div>
  );
}

function Group48() {
  return (
    <div className="absolute contents left-[calc(83.333%+29.977px)] not-italic text-nowrap top-[158.88px] whitespace-pre">
      <p className="absolute font-['Poppins:Regular',_sans-serif] leading-[1.35] left-[calc(83.333%+29.977px)] text-[#9ea3ae] text-[8.993px] top-[158.88px]">Graphic Design Class</p>
      <p className="absolute font-['Poppins:Medium',_sans-serif] leading-[1.5] left-[calc(83.333%+29.977px)] text-[#063852] text-[11.991px] top-[170.87px]">Illustrator Basic Tools</p>
    </div>
  );
}

function Group69() {
  return (
    <div className="absolute contents left-[calc(75%+59.954px)] top-[158.88px]">
      <p className="absolute font-['Poppins:Bold',_sans-serif] leading-[1.45] left-[calc(75%+59.954px)] not-italic text-[#063852] text-[13.49px] text-nowrap top-[164.13px] tracking-[-0.0674px] whitespace-pre">09:00</p>
      <Group48 />
      <div className="absolute h-[26.98px] left-[calc(83.333%+20.984px)] top-[160.38px] w-0">
        <div className="absolute bottom-0 left-[-0.75px] right-[-0.75px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 27">
            <path d="M1 0V26.9795" id="Vector 13" stroke="var(--stroke-0, #FFB700)" strokeWidth="1.49886" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group50() {
  return (
    <div className="absolute contents left-[calc(83.333%+29.977px)] not-italic text-nowrap top-[200.85px] whitespace-pre">
      <p className="absolute font-['Poppins:Regular',_sans-serif] leading-[1.35] left-[calc(83.333%+29.977px)] text-[#9ea3ae] text-[8.993px] top-[200.85px]">Graphic Design Class</p>
      <p className="absolute font-['Poppins:Medium',_sans-serif] leading-[1.5] left-[calc(83.333%+29.977px)] text-[#063852] text-[11.991px] top-[212.84px]">InDesign Basic Tools</p>
    </div>
  );
}

function Group70() {
  return (
    <div className="absolute contents left-[calc(75%+59.954px)] top-[200.85px]">
      <p className="absolute font-['Poppins:Bold',_sans-serif] leading-[1.45] left-[calc(75%+59.954px)] not-italic text-[#063852] text-[13.49px] text-nowrap top-[206.09px] tracking-[-0.0674px] whitespace-pre">13:00</p>
      <Group50 />
      <div className="absolute h-[26.98px] left-[calc(83.333%+20.984px)] top-[202.35px] w-0">
        <div className="absolute bottom-0 left-[-0.75px] right-[-0.75px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 27">
            <path d="M1 0V26.9795" id="Vector 13" stroke="var(--stroke-0, #FFB700)" strokeWidth="1.49886" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group71() {
  return (
    <div className="absolute contents left-[calc(75%+44.966px)] top-[122.16px]">
      <div className="absolute bg-white h-[121.408px] left-[calc(75%+44.966px)] rounded-[11.241px] top-[122.16px] w-[209.84px]">
        <div aria-hidden="true" className="absolute border-[#d3d5da] border-[0.3px] border-solid inset-0 pointer-events-none rounded-[11.241px]" />
      </div>
      <Group49 />
      <Group69 />
      <Group70 />
    </div>
  );
}

function Group76() {
  return (
    <div className="absolute h-[2.998px] left-[2.25px] top-[7.49px] w-[13.49px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 3">
        <g id="Group 47">
          <circle cx="1.49886" cy="1.49886" fill="var(--fill-0, #9EA3AE)" id="Ellipse 23" r="1.49886" />
          <circle cx="6.74487" cy="1.49886" fill="var(--fill-0, #9EA3AE)" id="Ellipse 24" r="1.49886" />
          <circle cx="11.9909" cy="1.49886" fill="var(--fill-0, #9EA3AE)" id="Ellipse 25" r="1.49886" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute left-[calc(91.667%+41.968px)] overflow-clip size-[17.986px] top-[265.3px]">
      <Group76 />
    </div>
  );
}

function Group53() {
  return (
    <div className="absolute contents left-[calc(75%+59.954px)] top-[264.55px]">
      <p className="absolute font-['Poppins:Medium',_sans-serif] leading-[1.6] left-[calc(75%+59.954px)] not-italic text-[#9ea3ae] text-[11.991px] text-nowrap top-[264.55px] whitespace-pre">Tommorow</p>
      <Frame2 />
    </div>
  );
}

function Group51() {
  return (
    <div className="absolute contents left-[calc(83.333%+29.977px)] not-italic text-nowrap top-[292.28px] whitespace-pre">
      <p className="absolute font-['Poppins:Regular',_sans-serif] leading-[1.35] left-[calc(83.333%+29.977px)] text-[#9ea3ae] text-[8.993px] top-[292.28px]">UI / UX Class</p>
      <p className="absolute font-['Poppins:Medium',_sans-serif] leading-[1.5] left-[calc(83.333%+29.977px)] text-[#063852] text-[11.991px] top-[304.27px]">Spacing Guidelines</p>
    </div>
  );
}

function Group72() {
  return (
    <div className="absolute contents left-[calc(75%+59.954px)] top-[292.28px]">
      <p className="absolute font-['Poppins:Bold',_sans-serif] leading-[1.45] left-[calc(75%+59.954px)] not-italic text-[#063852] text-[13.49px] text-nowrap top-[297.52px] tracking-[-0.0674px] whitespace-pre">08:00</p>
      <Group51 />
      <div className="absolute h-[26.98px] left-[calc(83.333%+20.984px)] top-[293.78px] w-0">
        <div className="absolute bottom-0 left-[-0.75px] right-[-0.75px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 27">
            <path d="M1 0V26.9795" id="Vector 13" stroke="var(--stroke-0, #FFB700)" strokeWidth="1.49886" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group52() {
  return (
    <div className="absolute contents left-[calc(83.333%+29.977px)] not-italic text-nowrap top-[334.25px] whitespace-pre">
      <p className="absolute font-['Poppins:Regular',_sans-serif] leading-[1.35] left-[calc(83.333%+29.977px)] text-[#9ea3ae] text-[8.993px] top-[334.25px]">UI / UX Class</p>
      <p className="absolute font-['Poppins:Medium',_sans-serif] leading-[1.5] left-[calc(83.333%+29.977px)] text-[#063852] text-[11.991px] top-[346.24px]">Basic Prototyping</p>
    </div>
  );
}

function Group73() {
  return (
    <div className="absolute contents left-[calc(75%+59.954px)] top-[334.25px]">
      <p className="absolute font-['Poppins:Bold',_sans-serif] leading-[1.45] left-[calc(75%+59.954px)] not-italic text-[#063852] text-[13.49px] text-nowrap top-[339.49px] tracking-[-0.0674px] whitespace-pre">11:00</p>
      <Group52 />
      <div className="absolute h-[26.98px] left-[calc(83.333%+20.984px)] top-[335.74px] w-0">
        <div className="absolute bottom-0 left-[-0.75px] right-[-0.75px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 27">
            <path d="M1 0V26.9795" id="Vector 13" stroke="var(--stroke-0, #FFB700)" strokeWidth="1.49886" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group91() {
  return (
    <div className="absolute contents left-[calc(75%+44.966px)] top-[255.56px]">
      <div className="absolute bg-white h-[121.408px] left-[calc(75%+44.966px)] rounded-[11.241px] top-[255.56px] w-[209.84px]">
        <div aria-hidden="true" className="absolute border-[#d3d5da] border-[0.3px] border-solid inset-0 pointer-events-none rounded-[11.241px]" />
      </div>
      <Group53 />
      <Group72 />
      <Group73 />
    </div>
  );
}

function Icons() {
  return (
    <div className="relative shrink-0 size-[11.991px]" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icons">
          <path d={svgPaths.p2790ca80} fill="var(--fill-0, #848A95)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icons1() {
  return (
    <div className="relative size-[11.991px]" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icons">
          <path d={svgPaths.p9d9fc40} fill="var(--fill-0, #848A95)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex gap-[17.986px] items-start left-[calc(91.667%+25.481px)] top-[398.7px]">
      <Icons />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg]">
          <Icons1 />
        </div>
      </div>
    </div>
  );
}

function WeekBase() {
  return (
    <div className="absolute content-stretch flex gap-[7.494px] items-start left-[calc(75%+52.46px)] top-[438.42px]" data-name="Week Base">
      <p className="font-['Poppins:Bold',_sans-serif] leading-[1.35] not-italic relative shrink-0 text-[#9ea3ae] text-[12px] text-center text-nowrap whitespace-pre">MON</p>
    </div>
  );
}

function WeekBase1() {
  return (
    <div className="absolute content-stretch flex gap-[7.494px] items-start left-[calc(83.333%-3.747px)] top-[438.42px]" data-name="Week Base">
      <p className="font-['Poppins:Bold',_sans-serif] leading-[1.35] not-italic relative shrink-0 text-[#9ea3ae] text-[12px] text-center text-nowrap whitespace-pre">TUE</p>
    </div>
  );
}

function WeekBase2() {
  return (
    <div className="absolute content-stretch flex gap-[7.494px] items-start left-[calc(83.333%+23.982px)] top-[438.42px]" data-name="Week Base">
      <p className="font-['Poppins:Bold',_sans-serif] leading-[1.35] not-italic relative shrink-0 text-[#9ea3ae] text-[12px] text-center text-nowrap whitespace-pre">WED</p>
    </div>
  );
}

function WeekBase3() {
  return (
    <div className="absolute content-stretch flex gap-[7.494px] items-start left-[calc(83.333%+56.207px)] top-[438.42px]" data-name="Week Base">
      <p className="font-['Poppins:Bold',_sans-serif] leading-[1.35] not-italic relative shrink-0 text-[#9ea3ae] text-[12px] text-center text-nowrap whitespace-pre">THU</p>
    </div>
  );
}

function WeekBase4() {
  return (
    <div className="absolute content-stretch flex gap-[7.494px] items-start left-[calc(91.667%-5.246px)] top-[438.42px]" data-name="Week Base">
      <p className="font-['Poppins:Bold',_sans-serif] leading-[1.35] not-italic relative shrink-0 text-[#9ea3ae] text-[12px] text-center text-nowrap whitespace-pre">FRI</p>
    </div>
  );
}

function WeekBase5() {
  return (
    <div className="absolute content-stretch flex gap-[7.494px] items-start left-[calc(91.667%+19.485px)] top-[438.42px]" data-name="Week Base">
      <p className="font-['Poppins:Bold',_sans-serif] leading-[1.35] not-italic relative shrink-0 text-[#9ea3ae] text-[12px] text-center text-nowrap whitespace-pre">SAT</p>
    </div>
  );
}

function WeekBase6() {
  return (
    <div className="absolute content-stretch flex gap-[7.494px] items-start left-[calc(91.667%+47.214px)] top-[438.42px]" data-name="Week Base">
      <p className="font-['Poppins:Bold',_sans-serif] leading-[1.35] not-italic relative shrink-0 text-[#9ea3ae] text-[12px] text-center text-nowrap whitespace-pre">SUN</p>
    </div>
  );
}

function Days() {
  return (
    <div className="absolute bg-[#ffb700] left-[calc(75%+52.46px)] overflow-clip rounded-[29.977px] size-[17.986px] top-[465.4px]" data-name="Days">
      <div className="absolute flex flex-col font-['Poppins:Bold',_sans-serif] inset-0 justify-center leading-[0] not-italic text-[#fdfdfd] text-[14px] text-center">
        <p className="leading-[1.4]">1</p>
      </div>
    </div>
  );
}

function Days1() {
  return (
    <div className="absolute left-[calc(83.333%-7.994px)] size-[17.986px] top-[465.4px]" data-name="Days">
      <div className="absolute flex flex-col font-['Poppins:Regular',_sans-serif] inset-0 justify-center leading-[0] not-italic text-[#6c727f] text-[14px] text-center">
        <p className="leading-[1.4]">2</p>
      </div>
    </div>
  );
}

function Days2() {
  return (
    <div className="absolute left-[calc(83.333%+21.484px)] size-[17.986px] top-[465.4px]" data-name="Days">
      <div className="absolute flex flex-col font-['Poppins:Regular',_sans-serif] inset-0 justify-center leading-[0] not-italic text-[#6c727f] text-[14px] text-center">
        <p className="leading-[1.4]">3</p>
      </div>
    </div>
  );
}

function Days3() {
  return (
    <div className="absolute left-[calc(83.333%+50.961px)] size-[17.986px] top-[465.4px]" data-name="Days">
      <div className="absolute flex flex-col font-['Poppins:Regular',_sans-serif] inset-0 justify-center leading-[0] not-italic text-[#6c727f] text-[14px] text-center">
        <p className="leading-[1.4]">4</p>
      </div>
    </div>
  );
}

function Days4() {
  return (
    <div className="absolute left-[calc(91.667%-9.493px)] size-[17.986px] top-[465.4px]" data-name="Days">
      <div className="absolute flex flex-col font-['Poppins:Regular',_sans-serif] inset-0 justify-center leading-[0] not-italic text-[#6c727f] text-[14px] text-center">
        <p className="leading-[1.4]">5</p>
      </div>
    </div>
  );
}

function Days5() {
  return (
    <div className="absolute left-[calc(91.667%+19.985px)] size-[17.986px] top-[465.4px]" data-name="Days">
      <div className="absolute flex flex-col font-['Poppins:Regular',_sans-serif] inset-0 justify-center leading-[0] not-italic text-[#6c727f] text-[14px] text-center">
        <p className="leading-[1.4]">6</p>
      </div>
    </div>
  );
}

function Days6() {
  return (
    <div className="absolute left-[calc(91.667%+49.462px)] size-[17.986px] top-[465.4px]" data-name="Days">
      <div className="absolute flex flex-col font-['Poppins:Regular',_sans-serif] inset-0 justify-center leading-[0] not-italic text-[#6c727f] text-[14px] text-center">
        <p className="leading-[1.4]">7</p>
      </div>
    </div>
  );
}

function Days7() {
  return (
    <div className="absolute left-[calc(75%+52.46px)] size-[17.986px] top-[495.37px]" data-name="Days">
      <div className="absolute flex flex-col font-['Poppins:Regular',_sans-serif] inset-0 justify-center leading-[0] not-italic text-[#6c727f] text-[14px] text-center">
        <p className="leading-[1.4]">8</p>
      </div>
    </div>
  );
}

function Days8() {
  return (
    <div className="absolute left-[calc(83.333%-7.994px)] size-[17.986px] top-[495.37px]" data-name="Days">
      <div className="absolute flex flex-col font-['Poppins:Regular',_sans-serif] inset-0 justify-center leading-[0] not-italic text-[#6c727f] text-[14px] text-center">
        <p className="leading-[1.4]">9</p>
      </div>
    </div>
  );
}

function Days9() {
  return (
    <div className="absolute left-[calc(83.333%+21.484px)] size-[17.986px] top-[495.37px]" data-name="Days">
      <div className="absolute flex flex-col font-['Poppins:Regular',_sans-serif] inset-0 justify-center leading-[0] not-italic text-[#6c727f] text-[14px] text-center">
        <p className="leading-[1.4]">10</p>
      </div>
    </div>
  );
}

function Days10() {
  return (
    <div className="absolute left-[calc(83.333%+50.961px)] size-[17.986px] top-[495.37px]" data-name="Days">
      <div className="absolute flex flex-col font-['Poppins:Regular',_sans-serif] inset-0 justify-center leading-[0] not-italic text-[#6c727f] text-[14px] text-center">
        <p className="leading-[1.4]">11</p>
      </div>
    </div>
  );
}

function Days11() {
  return (
    <div className="absolute bg-white left-[calc(91.667%-9.493px)] size-[17.986px] top-[495.37px]" data-name="Days">
      <div className="absolute flex flex-col font-['Poppins:Regular',_sans-serif] inset-0 justify-center leading-[0] not-italic text-[#6c727f] text-[14px] text-center">
        <p className="leading-[1.4]">12</p>
      </div>
    </div>
  );
}

function Days12() {
  return (
    <div className="absolute left-[calc(91.667%+19.985px)] size-[17.986px] top-[495.37px]" data-name="Days">
      <div className="absolute flex flex-col font-['Poppins:Regular',_sans-serif] inset-0 justify-center leading-[0] not-italic text-[#6c727f] text-[14px] text-center">
        <p className="leading-[1.4]">13</p>
      </div>
    </div>
  );
}

function Days13() {
  return (
    <div className="absolute left-[calc(91.667%+49.462px)] size-[17.986px] top-[495.37px]" data-name="Days">
      <div className="absolute flex flex-col font-['Poppins:Regular',_sans-serif] inset-0 justify-center leading-[0] not-italic text-[#6c727f] text-[14px] text-center">
        <p className="leading-[1.4]">14</p>
      </div>
    </div>
  );
}

function Days14() {
  return (
    <div className="absolute left-[calc(75%+52.46px)] size-[17.986px] top-[525.35px]" data-name="Days">
      <div className="absolute flex flex-col font-['Poppins:Regular',_sans-serif] inset-0 justify-center leading-[0] not-italic text-[#6c727f] text-[14px] text-center">
        <p className="leading-[1.4]">15</p>
      </div>
    </div>
  );
}

function Days15() {
  return (
    <div className="absolute left-[calc(83.333%-7.994px)] size-[17.986px] top-[525.35px]" data-name="Days">
      <div className="absolute flex flex-col font-['Poppins:Regular',_sans-serif] inset-0 justify-center leading-[0] not-italic text-[#6c727f] text-[14px] text-center">
        <p className="leading-[1.4]">16</p>
      </div>
    </div>
  );
}

function Days16() {
  return (
    <div className="absolute bg-white left-[calc(83.333%+21.484px)] size-[17.986px] top-[525.35px]" data-name="Days">
      <div className="absolute flex flex-col font-['Poppins:Regular',_sans-serif] inset-0 justify-center leading-[0] not-italic text-[#6c727f] text-[14px] text-center">
        <p className="leading-[1.4]">17</p>
      </div>
    </div>
  );
}

function Days17() {
  return (
    <div className="absolute left-[calc(83.333%+50.961px)] size-[17.986px] top-[525.35px]" data-name="Days">
      <div className="absolute flex flex-col font-['Poppins:Regular',_sans-serif] inset-0 justify-center leading-[0] not-italic text-[#6c727f] text-[14px] text-center">
        <p className="leading-[1.4]">18</p>
      </div>
    </div>
  );
}

function Days18() {
  return (
    <div className="absolute left-[calc(91.667%-9.493px)] size-[17.986px] top-[525.35px]" data-name="Days">
      <div className="absolute flex flex-col font-['Poppins:Regular',_sans-serif] inset-0 justify-center leading-[0] not-italic text-[#6c727f] text-[14px] text-center">
        <p className="leading-[1.4]">19</p>
      </div>
    </div>
  );
}

function Days19() {
  return (
    <div className="absolute left-[calc(91.667%+19.985px)] size-[17.986px] top-[525.35px]" data-name="Days">
      <div className="absolute flex flex-col font-['Poppins:Regular',_sans-serif] inset-0 justify-center leading-[0] not-italic text-[#6c727f] text-[14px] text-center">
        <p className="leading-[1.4]">20</p>
      </div>
    </div>
  );
}

function Days20() {
  return (
    <div className="absolute left-[calc(91.667%+49.462px)] size-[17.986px] top-[525.35px]" data-name="Days">
      <div className="absolute flex flex-col font-['Poppins:Regular',_sans-serif] inset-0 justify-center leading-[0] not-italic text-[#6c727f] text-[14px] text-center">
        <p className="leading-[1.4]">21</p>
      </div>
    </div>
  );
}

function Days21() {
  return (
    <div className="absolute left-[calc(75%+52.46px)] size-[17.986px] top-[555.33px]" data-name="Days">
      <div className="absolute flex flex-col font-['Poppins:Regular',_sans-serif] inset-0 justify-center leading-[0] not-italic text-[#6c727f] text-[14px] text-center">
        <p className="leading-[1.4]">22</p>
      </div>
    </div>
  );
}

function Days22() {
  return (
    <div className="absolute left-[calc(83.333%-7.994px)] size-[17.986px] top-[555.33px]" data-name="Days">
      <div className="absolute flex flex-col font-['Poppins:Regular',_sans-serif] inset-0 justify-center leading-[0] not-italic text-[#6c727f] text-[14px] text-center">
        <p className="leading-[1.4]">23</p>
      </div>
    </div>
  );
}

function Days23() {
  return (
    <div className="absolute left-[calc(83.333%+21.484px)] size-[17.986px] top-[555.33px]" data-name="Days">
      <div className="absolute flex flex-col font-['Poppins:Regular',_sans-serif] inset-0 justify-center leading-[0] not-italic text-[#6c727f] text-[14px] text-center">
        <p className="leading-[1.4]">24</p>
      </div>
    </div>
  );
}

function Days24() {
  return (
    <div className="absolute left-[calc(83.333%+50.961px)] size-[17.986px] top-[555.33px]" data-name="Days">
      <div className="absolute flex flex-col font-['Poppins:Regular',_sans-serif] inset-0 justify-center leading-[0] not-italic text-[#6c727f] text-[14px] text-center">
        <p className="leading-[1.4]">25</p>
      </div>
    </div>
  );
}

function Days25() {
  return (
    <div className="absolute left-[calc(91.667%-9.493px)] size-[17.986px] top-[555.33px]" data-name="Days">
      <div className="absolute flex flex-col font-['Poppins:Regular',_sans-serif] inset-0 justify-center leading-[0] not-italic text-[#6c727f] text-[14px] text-center">
        <p className="leading-[1.4]">26</p>
      </div>
    </div>
  );
}

function Days26() {
  return (
    <div className="absolute left-[calc(91.667%+19.985px)] size-[17.986px] top-[555.33px]" data-name="Days">
      <div className="absolute flex flex-col font-['Poppins:Regular',_sans-serif] inset-0 justify-center leading-[0] not-italic text-[#6c727f] text-[14px] text-center">
        <p className="leading-[1.4]">27</p>
      </div>
    </div>
  );
}

function Days27() {
  return (
    <div className="absolute left-[calc(91.667%+49.462px)] size-[17.986px] top-[555.33px]" data-name="Days">
      <div className="absolute flex flex-col font-['Poppins:Regular',_sans-serif] inset-0 justify-center leading-[0] not-italic text-[#6c727f] text-[14px] text-center">
        <p className="leading-[1.4]">28</p>
      </div>
    </div>
  );
}

function Days28() {
  return (
    <div className="absolute left-[calc(75%+52.46px)] size-[17.986px] top-[585.3px]" data-name="Days">
      <div className="absolute flex flex-col font-['Poppins:Regular',_sans-serif] inset-0 justify-center leading-[0] not-italic text-[#6c727f] text-[14px] text-center">
        <p className="leading-[1.4]">29</p>
      </div>
    </div>
  );
}

function Days29() {
  return (
    <div className="absolute left-[calc(83.333%-7.994px)] size-[17.986px] top-[585.3px]" data-name="Days">
      <div className="absolute flex flex-col font-['Poppins:Regular',_sans-serif] inset-0 justify-center leading-[0] not-italic text-[#6c727f] text-[14px] text-center">
        <p className="leading-[1.4]">30</p>
      </div>
    </div>
  );
}

function Days30() {
  return (
    <div className="absolute left-[calc(83.333%+21.484px)] size-[17.986px] top-[585.3px]" data-name="Days">
      <div className="absolute flex flex-col font-['Poppins:Regular',_sans-serif] inset-0 justify-center leading-[0] not-italic text-[#6c727f] text-[14px] text-center">
        <p className="leading-[1.4]">31</p>
      </div>
    </div>
  );
}

function Days31() {
  return (
    <div className="absolute left-[calc(83.333%+50.961px)] size-[17.986px] top-[585.3px]" data-name="Days">
      <div className="absolute flex flex-col font-['SF_Pro_Display:Medium',_sans-serif] inset-0 justify-center leading-[0] not-italic text-[10.492px] text-[rgba(15,37,82,0)] text-center uppercase">
        <p className="leading-[normal]">25</p>
      </div>
    </div>
  );
}

function Days32() {
  return (
    <div className="absolute left-[calc(91.667%-9.493px)] size-[17.986px] top-[585.3px]" data-name="Days">
      <div className="absolute flex flex-col font-['SF_Pro_Display:Medium',_sans-serif] inset-0 justify-center leading-[0] not-italic text-[10.492px] text-[rgba(15,37,82,0)] text-center uppercase">
        <p className="leading-[normal]">26</p>
      </div>
    </div>
  );
}

function Days33() {
  return (
    <div className="absolute left-[calc(91.667%+19.985px)] size-[17.986px] top-[585.3px]" data-name="Days">
      <div className="absolute flex flex-col font-['SF_Pro_Display:Medium',_sans-serif] inset-0 justify-center leading-[0] not-italic text-[10.492px] text-[rgba(15,37,82,0)] text-center uppercase">
        <p className="leading-[normal]">27</p>
      </div>
    </div>
  );
}

function Days34() {
  return (
    <div className="absolute left-[calc(91.667%+49.462px)] size-[17.986px] top-[585.3px]" data-name="Days">
      <div className="absolute flex flex-col font-['SF_Pro_Display:Medium',_sans-serif] inset-0 justify-center leading-[0] not-italic text-[10.492px] text-[rgba(15,37,82,0)] text-center uppercase">
        <p className="leading-[normal]">28</p>
      </div>
    </div>
  );
}

function Group54() {
  return (
    <div className="absolute contents left-[calc(75%+52.46px)] top-[394.95px]">
      <div className="absolute flex flex-col font-['Poppins:Bold',_sans-serif] justify-center leading-[0] left-[calc(75%+105.67px)] not-italic text-[#063852] text-[13.49px] text-center top-[404.95px] tracking-[-0.0674px] translate-x-[-50%] translate-y-[-50%] w-[106.419px]">
        <p className="leading-[1.45]">December 2021</p>
      </div>
      <Frame3 />
      <div className="absolute h-0 left-[calc(75%+56.207px)] top-[426.43px] w-[188.107px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-0.6px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 189 1">
            <line id="Line 1" stroke="var(--stroke-0, #E4E5E7)" strokeWidth="0.599544" x2="188.107" y1="0.700228" y2="0.700228" />
          </svg>
        </div>
      </div>
      <WeekBase />
      <WeekBase1 />
      <WeekBase2 />
      <WeekBase3 />
      <WeekBase4 />
      <WeekBase5 />
      <WeekBase6 />
      <Days />
      <Days1 />
      <Days2 />
      <Days3 />
      <Days4 />
      <Days5 />
      <Days6 />
      <Days7 />
      <Days8 />
      <Days9 />
      <Days10 />
      <Days11 />
      <Days12 />
      <Days13 />
      <Days14 />
      <Days15 />
      <Days16 />
      <Days17 />
      <Days18 />
      <Days19 />
      <Days20 />
      <Days21 />
      <Days22 />
      <Days23 />
      <Days24 />
      <Days25 />
      <Days26 />
      <Days27 />
      <Days28 />
      <Days29 />
      <Days30 />
      <Days31 />
      <Days32 />
      <Days33 />
      <Days34 />
    </div>
  );
}

function Group83() {
  return (
    <div className="absolute contents left-[calc(83.333%+7.494px)] not-italic text-nowrap top-[653.5px] whitespace-pre">
      <p className="absolute font-['Poppins:Medium',_sans-serif] leading-[1.5] left-[calc(83.333%+7.494px)] text-[#063852] text-[11.991px] top-[653.5px]">UI Styleguide Tests</p>
      <p className="absolute font-['Poppins:Regular',_sans-serif] leading-[1.35] left-[calc(83.333%+7.494px)] text-[#9ea3ae] text-[8.993px] top-[672.99px]">12 December 2022</p>
    </div>
  );
}

function AngleRight2() {
  return (
    <div className="absolute left-[calc(91.667%+47.963px)] size-[8.993px] top-[664.74px]" data-name="angle-right 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
        <g clipPath="url(#clip0_1_613)" id="angle-right 2">
          <path d={svgPaths.p266bdc00} fill="var(--fill-0, #063852)" id="Vector" stroke="var(--stroke-0, #063852)" strokeWidth="0.299772" />
        </g>
        <defs>
          <clipPath id="clip0_1_613">
            <rect fill="white" height="8.99315" width="8.99315" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Diploma1() {
  return (
    <div className="absolute left-[calc(83.333%-23.232px)] size-[11.991px] top-[663.25px]" data-name="diploma 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_1_631)" id="diploma 1">
          <path d={svgPaths.p176c1c00} fill="var(--fill-0, white)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_631">
            <rect fill="white" height="11.9909" width="11.9909" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group85() {
  return (
    <div className="absolute contents left-[calc(75%+60.704px)] top-[657.25px]">
      <div className="absolute bg-[#2374ee] left-[calc(75%+60.704px)] rounded-[3.747px] size-[23.982px] top-[657.25px]" />
      <Diploma1 />
    </div>
  );
}

function Group88() {
  return (
    <div className="absolute contents left-[calc(75%+60.704px)] top-[653.5px]">
      <Group83 />
      <AngleRight2 />
      <Group85 />
    </div>
  );
}

function Group84() {
  return (
    <div className="absolute contents left-[calc(83.333%+7.494px)] not-italic text-nowrap top-[693.97px] whitespace-pre">
      <p className="absolute font-['Poppins:Medium',_sans-serif] leading-[1.5] left-[calc(83.333%+7.494px)] text-[#063852] text-[11.991px] top-[693.97px]">Color Matching Tests</p>
      <p className="absolute font-['Poppins:Regular',_sans-serif] leading-[1.35] left-[calc(83.333%+7.494px)] text-[#9ea3ae] text-[8.993px] top-[713.46px]">17 December 2022</p>
    </div>
  );
}

function AngleRight3() {
  return (
    <div className="absolute left-[calc(91.667%+47.963px)] size-[8.993px] top-[705.21px]" data-name="angle-right 3">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
        <g clipPath="url(#clip0_1_697)" id="angle-right 3">
          <path d={svgPaths.p18558100} fill="var(--fill-0, #063852)" id="Vector" stroke="var(--stroke-0, #063852)" strokeWidth="0.299772" />
        </g>
        <defs>
          <clipPath id="clip0_1_697">
            <rect fill="white" height="8.99315" width="8.99315" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Diploma2() {
  return (
    <div className="absolute left-[calc(83.333%-23.232px)] size-[11.991px] top-[703.71px]" data-name="diploma 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_1_566)" id="diploma 2">
          <path d={svgPaths.p810dc80} fill="var(--fill-0, white)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_566">
            <rect fill="white" height="11.9909" width="11.9909" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group86() {
  return (
    <div className="absolute contents left-[calc(75%+60.704px)] top-[697.72px]">
      <div className="absolute bg-[#2374ee] left-[calc(75%+60.704px)] rounded-[3.747px] size-[23.982px] top-[697.72px]" />
      <Diploma2 />
    </div>
  );
}

function Group87() {
  return (
    <div className="absolute contents left-[calc(75%+60.704px)] top-[693.97px]">
      <Group84 />
      <AngleRight3 />
      <Group86 />
    </div>
  );
}

function Group82() {
  return (
    <div className="absolute contents left-[calc(91.667%+23.232px)] top-[627.27px]">
      <p className="absolute font-['Poppins:Medium',_sans-serif] leading-[1.4] left-[calc(91.667%+59.954px)] not-italic text-[#063852] text-[10.492px] text-right top-[627.27px] translate-x-[-100%] w-[36.722px]">See all</p>
      <div className="absolute h-0 left-[calc(91.667%+24.731px)] top-[642.26px] w-[35.973px]">
        <div className="absolute bottom-[-0.37px] left-0 right-0 top-[-0.37px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 2">
            <path d="M0 1H35.9726" id="Vector 17" stroke="var(--stroke-0, #063852)" strokeWidth="0.74943" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group89() {
  return (
    <div className="absolute contents left-[calc(75%+59.954px)] top-[625.02px]">
      <Group82 />
      <p className="absolute font-['Poppins:Medium',_sans-serif] leading-[1.6] left-[calc(75%+59.954px)] not-italic text-[#9ea3ae] text-[11.991px] text-nowrap top-[625.02px] whitespace-pre">Next Exam</p>
    </div>
  );
}

function Group90() {
  return (
    <div className="absolute contents left-[calc(75%+44.966px)] top-[616.03px]">
      <div className="absolute bg-white h-[124.405px] left-[calc(75%+44.966px)] rounded-[11.241px] top-[616.03px] w-[209.84px]">
        <div aria-hidden="true" className="absolute border-[#d3d5da] border-[0.3px] border-solid inset-0 pointer-events-none rounded-[11.241px]" />
      </div>
      <Group88 />
      <Group87 />
      <Group89 />
    </div>
  );
}

function Group94() {
  return (
    <div className="absolute contents left-[calc(75%+29.977px)] top-0">
      <div className="absolute bg-white h-[767.416px] left-[calc(75%+29.977px)] top-0 w-[239.817px]">
        <div aria-hidden="true" className="absolute border-[#d3d5da] border-[0.3px] border-solid inset-0 pointer-events-none" />
      </div>
      <p className="absolute font-['Poppins:Bold',_sans-serif] leading-[1.5] left-[calc(75%+44.966px)] not-italic text-[#063852] text-[17.986px] text-nowrap top-[80.19px] tracking-[-0.1799px] whitespace-pre">Upcoming Classes</p>
      <Group46 />
      <Group71 />
      <Group91 />
      <Group54 />
      <Group90 />
    </div>
  );
}

function Group95() {
  return (
    <div className="absolute contents left-0 top-0">
      <Group78 />
      <Group93 />
      <Group94 />
    </div>
  );
}

export default function Dashboard1() {
  return (
    <div className="bg-[#f6f6f6] overflow-clip relative rounded-[25.752px] size-full" data-name="Dashboard">
      <Group95 />
    </div>
  );
}