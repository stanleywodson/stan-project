import{r as l,j as e,d as u,e as n,q as z}from"./app-4acfaa98.js";import{e as $}from"./transition-768d8b08.js";const p=l.createContext({open:!1,setOpen:()=>{},toggleOpen:()=>{}}),x=({children:r})=>{const[a,t]=l.useState(!1),s=()=>{t(o=>!o)};return e.jsx(p.Provider,{value:{open:a,setOpen:t,toggleOpen:s},children:e.jsx("div",{className:"relative",children:r})})},D=({children:r})=>{const{open:a,setOpen:t,toggleOpen:s}=l.useContext(p);return e.jsxs(e.Fragment,{children:[e.jsx("div",{onClick:s,children:r}),a&&e.jsx("div",{className:"fixed inset-0 z-40",onClick:()=>t(!1)})]})},S=({align:r="right",width:a="48",contentClasses:t="py-1 bg-white dark:bg-gray-700",children:s})=>{const{open:o,setOpen:i}=l.useContext(p);let d="origin-top";r==="left"?d="ltr:origin-top-left rtl:origin-top-right start-0":r==="right"&&(d="ltr:origin-top-right rtl:origin-top-left end-0");let g="";return a==="48"&&(g="w-48"),e.jsx(e.Fragment,{children:e.jsx($,{as:l.Fragment,show:o,enter:"transition ease-out duration-200",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:e.jsx("div",{className:`absolute z-50 mt-2 rounded-md shadow-lg ${d} ${g}`,onClick:()=>i(!1),children:e.jsx("div",{className:"rounded-md ring-1 ring-black ring-opacity-5 "+t,children:s})})})})},R=({className:r="",children:a,...t})=>e.jsx(u,{...t,className:"block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 transition duration-150 ease-in-out "+r,children:a});x.Trigger=D;x.Content=S;x.Link=R;const c=x;function m({active:r=!1,className:a="",children:t,...s}){return e.jsx(u,{...s,className:`w-full flex items-start ps-3 pe-4 py-2 border-l-4 ${r?"border-indigo-400 dark:border-indigo-600 text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-900/50 focus:text-indigo-800 dark:focus:text-indigo-200 focus:bg-indigo-100 dark:focus:bg-indigo-900 focus:border-indigo-700 dark:focus:border-indigo-300":"border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600 focus:text-gray-800 dark:focus:text-gray-200 focus:bg-gray-50 dark:focus:bg-gray-700 focus:border-gray-300 dark:focus:border-gray-600"} text-base font-medium focus:outline-none transition duration-150 ease-in-out ${a}`,children:e.jsx("div",{className:"flex items-center",children:t})})}const B=l.createContext({color:"currentColor",size:"1em",weight:"regular",mirrored:!1});var T=Object.defineProperty,h=Object.getOwnPropertySymbols,N=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable,y=(r,a,t)=>a in r?T(r,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[a]=t,v=(r,a)=>{for(var t in a||(a={}))N.call(a,t)&&y(r,t,a[t]);if(h)for(var t of h(a))Z.call(a,t)&&y(r,t,a[t]);return r},j=(r,a)=>{var t={};for(var s in r)N.call(r,s)&&a.indexOf(s)<0&&(t[s]=r[s]);if(r!=null&&h)for(var s of h(r))a.indexOf(s)<0&&Z.call(r,s)&&(t[s]=r[s]);return t};const C=l.forwardRef((r,a)=>{const t=r,{alt:s,color:o,size:i,weight:d,mirrored:g,children:M,weights:E}=t,H=j(t,["alt","color","size","weight","mirrored","children","weights"]),f=l.useContext(B),{color:A="currentColor",size:b,weight:L="regular",mirrored:P=!1}=f,F=j(f,["color","size","weight","mirrored"]);return n.createElement("svg",v(v({ref:a,xmlns:"http://www.w3.org/2000/svg",width:i??b,height:i??b,fill:o??A,viewBox:"0 0 256 256",transform:g||P?"scale(-1, 1)":void 0},F),H),!!s&&n.createElement("title",null,s),M,E.get(d??L))});C.displayName="IconBase";const W=new Map([["bold",n.createElement(n.Fragment,null,n.createElement("path",{d:"M152,80a12,12,0,0,1,12-12h80a12,12,0,0,1,0,24H164A12,12,0,0,1,152,80Zm92,36H164a12,12,0,0,0,0,24h80a12,12,0,0,0,0-24Zm0,48H188a12,12,0,0,0,0,24h56a12,12,0,0,0,0-24Zm-88.38,25a12,12,0,1,1-23.24,6c-5.72-22.23-28.24-39-52.38-39s-46.66,16.76-52.38,39a12,12,0,1,1-23.24-6c5.38-20.9,20.09-38.16,39.11-48a52,52,0,1,1,73,0C135.53,150.85,150.24,168.11,155.62,189ZM80,132a28,28,0,1,0-28-28A28,28,0,0,0,80,132Z"}))],["duotone",n.createElement(n.Fragment,null,n.createElement("path",{d:"M120,104A40,40,0,1,1,80,64,40,40,0,0,1,120,104Z",opacity:"0.2"}),n.createElement("path",{d:"M144,80a8,8,0,0,1,8-8h96a8,8,0,0,1,0,16H152A8,8,0,0,1,144,80Zm104,40H152a8,8,0,0,0,0,16h96a8,8,0,0,0,0-16Zm0,48H176a8,8,0,0,0,0,16h72a8,8,0,0,0,0-16Zm-96.25,22a8,8,0,0,1-5.76,9.74,7.55,7.55,0,0,1-2,.26,8,8,0,0,1-7.75-6c-6.16-23.94-30.34-42-56.25-42s-50.09,18.05-56.25,42a8,8,0,0,1-15.5-4c5.59-21.71,21.84-39.29,42.46-48a48,48,0,1,1,58.58,0C129.91,150.71,146.16,168.29,151.75,190ZM80,136a32,32,0,1,0-32-32A32,32,0,0,0,80,136Z"}))],["fill",n.createElement(n.Fragment,null,n.createElement("path",{d:"M144,80a8,8,0,0,1,8-8h96a8,8,0,0,1,0,16H152A8,8,0,0,1,144,80Zm104,40H152a8,8,0,0,0,0,16h96a8,8,0,0,0,0-16Zm0,48H176a8,8,0,0,0,0,16h72a8,8,0,0,0,0-16ZM109.29,142a48,48,0,1,0-58.58,0c-20.62,8.73-36.87,26.3-42.46,48A8,8,0,0,0,16,200H144a8,8,0,0,0,7.75-10C146.16,168.29,129.91,150.72,109.29,142Z"}))],["light",n.createElement(n.Fragment,null,n.createElement("path",{d:"M146,80a6,6,0,0,1,6-6h96a6,6,0,0,1,0,12H152A6,6,0,0,1,146,80Zm102,42H152a6,6,0,0,0,0,12h96a6,6,0,0,0,0-12Zm0,48H176a6,6,0,0,0,0,12h72a6,6,0,0,0,0-12Zm-98.19,20.5a6,6,0,1,1-11.62,3C131.7,168.29,107.23,150,80,150s-51.7,18.29-58.19,43.49a6,6,0,1,1-11.62-3c5.74-22.28,23-40.07,44.67-48a46,46,0,1,1,50.28,0C126.79,150.43,144.08,168.22,149.81,190.5ZM80,138a34,34,0,1,0-34-34A34,34,0,0,0,80,138Z"}))],["regular",n.createElement(n.Fragment,null,n.createElement("path",{d:"M144,80a8,8,0,0,1,8-8h96a8,8,0,0,1,0,16H152A8,8,0,0,1,144,80Zm104,40H152a8,8,0,0,0,0,16h96a8,8,0,0,0,0-16Zm0,48H176a8,8,0,0,0,0,16h72a8,8,0,0,0,0-16Zm-96.25,22a8,8,0,0,1-5.76,9.74,7.55,7.55,0,0,1-2,.26,8,8,0,0,1-7.75-6c-6.16-23.94-30.34-42-56.25-42s-50.09,18.05-56.25,42a8,8,0,0,1-15.5-4c5.59-21.71,21.84-39.29,42.46-48a48,48,0,1,1,58.58,0C129.91,150.71,146.16,168.29,151.75,190ZM80,136a32,32,0,1,0-32-32A32,32,0,0,0,80,136Z"}))],["thin",n.createElement(n.Fragment,null,n.createElement("path",{d:"M148,80a4,4,0,0,1,4-4h96a4,4,0,0,1,0,8H152A4,4,0,0,1,148,80Zm100,44H152a4,4,0,0,0,0,8h96a4,4,0,0,0,0-8Zm0,48H176a4,4,0,0,0,0,8h72a4,4,0,0,0,0-8ZM147.87,191a4,4,0,0,1-2.87,4.87,3.87,3.87,0,0,1-1,.13,4,4,0,0,1-3.87-3c-6.71-26.08-32-45-60.13-45s-53.41,18.92-60.13,45a4,4,0,1,1-7.74-2c5.92-23,24.57-41.14,47.52-48a44,44,0,1,1,40.7,0C123.3,149.86,142,168,147.87,191ZM80,140a36,36,0,1,0-36-36A36,36,0,0,0,80,140Z"}))]]);var I=Object.defineProperty,U=Object.defineProperties,q=Object.getOwnPropertyDescriptors,k=Object.getOwnPropertySymbols,G=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable,w=(r,a,t)=>a in r?I(r,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[a]=t,K=(r,a)=>{for(var t in a||(a={}))G.call(a,t)&&w(r,t,a[t]);if(k)for(var t of k(a))J.call(a,t)&&w(r,t,a[t]);return r},Q=(r,a)=>U(r,q(a));const O=l.forwardRef((r,a)=>n.createElement(C,Q(K({ref:a},r),{weights:W})));O.displayName="UserList";function V({active:r=!1,className:a="",children:t,...s}){return e.jsx(u,{...s,className:"inline-flex items-center px-1 pt-1 border-b-2 font-semibold text-xs text-white uppercase tracking-widest leading-5 transition duration-150 ease-in-out focus:outline-none "+(r?"border-indigo-400 dark:border-indigo-600 text-gray-900 dark:text-gray-100 focus:border-indigo-700 ":"border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700 focus:text-gray-700 dark:focus:text-gray-300 focus:border-gray-300 dark:focus:border-gray-700 ")+a,children:t})}const X=()=>{const{sidebarMenus:r,auth:a}=z().props;return e.jsx("aside",{className:"fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700","aria-label":"Sidebar",children:e.jsx("div",{className:"h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800",children:e.jsx("div",{className:"flex flex-col mt-6",children:e.jsx("div",{children:r.map(t=>e.jsxs("div",{children:[e.jsx("h1",{className:"text-gray-500 text-base  uppercase tracking-widest font-thin leading-7 border-gray-700 px-2 py-2 ",children:t.title},t.title),e.jsx("div",{className:"mb-4",children:t.items.map(({label:s,url:o},i)=>e.jsxs("div",{className:"p-2 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group",children:[e.jsx(V,{href:route(o),active:route().current(o),children:e.jsx("div",{className:"flex items-center",children:s})}),s==="Permissões"&&a.countUserWithoutPermission?e.jsx("span",{className:"bg-red-100 ml-4 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-gray-200",children:a.countUserWithoutPermission}):""]},i))})]},t.title))})})})})},Y="/build/assets/white-68dd1da0.svg";function re({user:r,header:a,children:t}){const[s,o]=l.useState(!1);return e.jsxs("div",{className:"min-h-screen bg-gray-100 dark:bg-gray-900",children:[e.jsxs("nav",{className:"fixed w-full top-0 z-50 bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700",children:[e.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"flex justify-between h-16",children:[e.jsx("div",{className:"flex",children:e.jsx("div",{className:"shrink-0 flex items-center",children:e.jsx("img",{src:Y,alt:"Amor Mairo Logo",className:" bg-gray-500 w-14 p-1 rounded-md "})})}),e.jsx("div",{className:"hidden sm:flex sm:items-center sm:ms-6",children:e.jsx("div",{className:"ms-3 relative",children:e.jsxs(c,{children:[e.jsx(c.Trigger,{children:e.jsx("span",{className:"inline-flex rounded-md",children:e.jsxs("button",{type:"button",className:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none transition ease-in-out duration-150",children:[r.name,e.jsx("svg",{className:"ms-2 -me-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:e.jsx("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})]})})}),e.jsxs(c.Content,{children:[e.jsx(c.Link,{href:route("profile.edit"),children:"Perfil"}),e.jsx(c.Link,{href:route("logout"),method:"post",as:"button",children:"Sair"})]})]})})}),e.jsx("div",{className:"-me-2 flex items-center sm:hidden",children:e.jsx("button",{onClick:()=>o(i=>!i),className:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-900 focus:text-gray-500 dark:focus:text-gray-400 transition duration-150 ease-in-out",children:e.jsxs("svg",{className:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24",children:[e.jsx("path",{className:s?"hidden":"inline-flex",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"}),e.jsx("path",{className:s?"inline-flex":"hidden",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})]})})})]})}),e.jsxs("div",{className:(s?"block":"hidden")+" sm:hidden",children:[e.jsxs("div",{className:"pt-2 pb-3 space-y-1",children:[e.jsx(m,{href:route("dashboard"),active:route().current("dashboard"),children:"Dashboard"}),e.jsxs(m,{href:route("users.index"),children:[e.jsx(O,{})," ",e.jsx("span",{className:"ml-1",children:"Usuários"})]})]}),e.jsxs("div",{className:"pt-4 pb-1 border-t border-gray-200 dark:border-gray-600",children:[e.jsxs("div",{className:"px-4",children:[e.jsx("div",{className:"font-medium text-base text-gray-800 dark:text-gray-200",children:r.name}),e.jsx("div",{className:"font-medium text-sm text-gray-500",children:r.email})]}),e.jsxs("div",{className:"mt-3 space-y-1",children:[e.jsx(m,{href:route("profile.edit"),children:"Profile"}),e.jsx(m,{method:"post",href:route("logout"),as:"button",children:"Sair"})]})]})]})]}),r.status==="active"&&e.jsx(X,{}),e.jsx("div",{className:"p-4 sm:ml-64",children:e.jsx("div",{className:"p-4 border-gray-200 dark:border-gray-700 mt-14",children:e.jsx("main",{children:t})})})]})}export{re as A};
