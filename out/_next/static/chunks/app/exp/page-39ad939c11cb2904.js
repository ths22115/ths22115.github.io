(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[238],{1438:(e,t,a)=>{Promise.resolve().then(a.bind(a,5646))},5032:(e,t,a)=>{"use strict";a.d(t,{A:()=>d});var i=a(5155),s=a(2115);a(881);let n={src:"/ths22115.github.io/_next/static/media/miusMarkBlack.c166fb66.svg",height:182,width:216,blurWidth:0,blurHeight:0};var l=a(5565);let r=s.forwardRef((e,t)=>(0,i.jsx)(l.default,{className:"mark  mark-"+e.page+(e.focus>-1?" mark-focus":""),src:n,ref:t,alt:"Mius Thomas Logo",width:1e3}));r.displayName="Mark";var o=a(7396);a(3758);let c=e=>(0,i.jsxs)("div",{className:"nav",children:[(0,i.jsxs)("ul",{className:"nav-list",children:[(0,i.jsx)("li",{className:"nav-button "+("landing"==e.page?"active":""),children:(0,i.jsx)(o.default,{href:"/",children:"HOME"})}),(0,i.jsx)("li",{className:"nav-button "+("about"==e.page?"active":""),children:(0,i.jsx)(o.default,{href:"/about",children:"ABOUT"})}),(0,i.jsxs)("li",{className:"nav-button nested-button "+("exp"==e.page?"active":""),children:[(0,i.jsx)(o.default,{href:"/exp",children:"EXPERIENCE"}),"exp"==e.page?(0,i.jsxs)("ul",{className:"sublist exp-list",children:[(0,i.jsx)("li",{id:"exp-all",className:"tab exp-tab "+("all"==e.expFilter?"tab-active":""),onClick:e.updateExpFilter,children:"( ALL )"}),(0,i.jsx)("li",{id:"exp-swe",className:"tab exp-tab "+("swe"==e.expFilter?"tab-active":""),onClick:e.updateExpFilter,children:"( SWE )"}),(0,i.jsx)("li",{id:"exp-design",className:"tab exp-tab "+("design"==e.expFilter?"tab-active":""),onClick:e.updateExpFilter,children:"( DESIGN )"})]}):""]}),(0,i.jsxs)("li",{className:"nav-button nested-button "+("port"==e.page?"active":""),children:[(0,i.jsx)(o.default,{href:"/port",children:"PORTFOLIO"}),"port"==e.page?(0,i.jsxs)("ul",{className:"sublist port-list",children:[(0,i.jsx)("li",{id:"port-webdev",className:"tab port-tab "+("webdev"==e.portSection?"tab-active":""),onClick:e.updatePortSection,children:"( WEB DEV )"}),(0,i.jsx)("li",{id:"port-design",className:"tab port-tab "+("design"==e.portSection?"tab-active":""),onClick:e.updatePortSection,children:"( DESIGN )"})]}):""]}),(0,i.jsx)("li",{className:"nav-button "+("contact"==e.page?"active":""),children:(0,i.jsx)(o.default,{href:"/contact",children:"CONTACT"})})]}),(0,i.jsxs)("div",{className:"title mius",children:[(0,i.jsx)(o.default,{href:"/",children:"MIUS THOMAS"}),(0,i.jsx)("div",{className:"subtitle",children:"SWE • DESIGNER"})]})]});function d(e){let t=(0,s.useRef)(null),[a,n]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{if(window.innerWidth<=768){n(!0);let e=window.location.origin;window.location.replace(e+"/mobile")}if("about"==e.page){let e=window.innerWidth/2-500,a=window.innerHeight/2-421.5;t.current&&(t.current.style.left="".concat(e,"px"),t.current.style.top="".concat(a,"px"))}else if("exp"==e.page||"port"==e.page){let e=window.innerHeight/2-421.5;t.current&&(t.current.style.top="".concat(e,"px"))}!function e(){if(t.current){let a=3500*Math.random(),i=150*Math.random()*(.5>Math.random()?1:-1),s=150*Math.random()*(.5>Math.random()?1:-1);t.current.style.transform="translate(".concat(i,"px, ").concat(s,"px)"),setTimeout(function(){t.current.style.transform=""},50),setTimeout(e,a)}}()},[e.page,843,1e3]),(0,i.jsxs)("div",{className:"skeleton",children:[(0,i.jsx)("div",{className:"noise-wrapper"}),(0,i.jsx)(c,{page:e.page,expFilter:e.expFilter,updateExpFilter:e.updateExpFilter,portSection:e.portSection,updatePortSection:e.updatePortSection}),(0,i.jsx)(r,{ref:t,page:e.page,size:1e3,focus:"exp"==e.page?e.expFocus:e.portFocus})]})}},5646:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>r});var i=a(5155),s=a(2115);a(124);var n=a(5032);function l(e){let[t,a]=(0,s.useState)(!1),[n,l]=(0,s.useState)(!1);function r(){return e.focus==e.id}return(0,i.jsxs)("div",{id:e.id,className:"job "+("all"==e.type||"all"==e.filter||e.filter==e.type?"job-visible":""),onMouseEnter:function(e){a(!0)},onMouseLeave:function(e){a(!1)},onClick:e.onClick,children:[(0,i.jsx)("div",{className:"job-company",children:e.company}),(0,i.jsxs)("div",{className:"job-preview "+(t||r()?"job-preview-active":""),children:[(0,i.jsx)("div",{className:"job-title",children:e.title}),(0,i.jsxs)("div",{className:"job-date",children:["( ",(0,i.jsx)("div",{className:"job-start",children:e.start})," ~",(0,i.jsx)("div",{className:"job-end",children:e.end})," )"]})]}),(0,i.jsxs)("div",{className:"job-desc "+(r()?"job-desc-active":""),children:["Designed, developed, and deployed a fully documented AWS Lambda API to deliver cloud maturity metrics for all 30+ cloud infrastructure systems used at Capital One, to be adopted by over 11,000 software engineers organized in over 2,000 agile teams.",(0,i.jsx)("br",{}),"Collaborated with associate and senior engineers in a scrum-based agile environment, leveraging JIRA for issue tracking and sprint management, Python for software implementation, GraphQL for complex database queries, and Jenkins for seamless deployment.",(0,i.jsx)("br",{}),"Utilized the Pytest framework to implement and execute over 50 unit tests designed with both black-box and white-box testing methodologies to validate API functionality and robustness, providing over 90% statement coverage comprehensively."]})]})}function r(){let[e,t]=(0,s.useState)(-1),[a,r]=(0,s.useState)("all"),[o,c]=(0,s.useState)(!1);function d(a){var i=a.target;for(console.log(i),console.log(i.parentElement);"job"!==i.className.split(" ")[0];)i=i.parentElement;t(e==i.id?-1:i.id)}return(0,i.jsxs)("div",{children:[(0,i.jsx)(n.A,{page:"exp",expFocus:e,expFilter:a,updateExpFilter:function(e){c(!0),setTimeout(function(){r(e.target.id.split("-")[1]),c(!1)},200)}}),(0,i.jsx)("div",{className:"resume",children:(0,i.jsxs)("div",{className:"job-list "+(o?"filter-trans":""),children:[(0,i.jsx)(l,{id:0,onClick:d,focus:e,filter:a,type:"swe",company:"CAPITAL ONE",title:"SOFTWARE ENGINEERING INTERN",start:"MAY 2024",end:"AUG 2024"}),(0,i.jsx)(l,{id:1,onClick:d,focus:e,filter:a,type:"swe",company:"RENSSELAER UNION",title:"SYSTEM ADMINISTRATOR",start:"OCT 2023",end:"CURRENT"}),(0,i.jsx)(l,{id:2,onClick:d,focus:e,filter:a,type:"all",company:"SAMOTH",title:"FOUNDER, EXECUTIVE DIRECTOR",start:"AUG 2023",end:"CURRENT"}),(0,i.jsx)(l,{id:3,onClick:d,focus:e,filter:a,type:"design",company:"RPI BSA FASHION",title:"GRAPHIC DESIGNER",start:"OCT 2024",end:"CURRENT"})]})})]})}},3758:()=>{},881:()=>{},124:()=>{}},e=>{var t=t=>e(e.s=t);e.O(0,[789,746,264,441,517,358],()=>t(1438)),_N_E=e.O()}]);