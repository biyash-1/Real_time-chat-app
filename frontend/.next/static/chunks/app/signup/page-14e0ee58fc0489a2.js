(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[879],{9031:(e,a,r)=>{Promise.resolve().then(r.bind(r,7549))},7549:(e,a,r)=>{"use strict";r.r(a),r.d(a,{default:()=>m});var s=r(5155),t=r(2115),l=r(2651),n=r(5007),i=r(4085),o=r(4352),d=r(2336),u=r(6046),c=r(5037);let m=()=>{let e=(0,u.useRouter)(),[a,r]=(0,t.useState)({username:"",email:"",password:"",image:null}),[m,f]=(0,t.useState)(!1),[p,g]=(0,t.useState)("/");(0,t.useEffect)(()=>{g("/")},[]);let x=e=>{let{name:a,value:s}=e.target;r(e=>({...e,[a]:s}))},h=async()=>{if(!a.image){alert("Please upload an image.");return}try{f(!0);let r=new FormData;r.append("file",a.image),r.append("upload_preset","userimage"),r.append("folder","users");let s=(await l.A.post("https://api.cloudinary.com/v1_1/dr8hssrjw/upload",r)).data.secure_url,t={username:a.username,email:a.email,password:a.password,imageUrl:s};console.log("User Data:",t),await l.A.post("".concat(p,"/api/user/signup"),t),e.push("/chatpage"),c.oR.success("User created successfully")}catch(e){console.error("Error uploading image or signing up:",e),alert("Error signing up. Please try again.")}finally{f(!1)}};return(0,s.jsx)("div",{className:"h-screen flex items-center justify-center mx-auto p-20",children:(0,s.jsxs)(n.Zp,{className:"p-4 flex flex-col items-start justify-center gap-6 w-1/4",children:[(0,s.jsx)(n.aR,{className:"text-2xl font-bold text-center mx-auto",children:"Create an account"}),(0,s.jsxs)("div",{className:"w-full",children:[(0,s.jsx)(o.J,{htmlFor:"username",className:"mb-1 block",children:"Username:"}),(0,s.jsx)(d.p,{id:"username",name:"username",value:a.username,onChange:x,placeholder:"Enter your username",className:"w-full"})]}),(0,s.jsxs)("div",{className:"w-full",children:[(0,s.jsx)(o.J,{htmlFor:"email",className:"mb-1 block",children:"Email:"}),(0,s.jsx)(d.p,{id:"email",name:"email",value:a.email,onChange:x,placeholder:"Enter your email",className:"w-full"})]}),(0,s.jsxs)("div",{className:"w-full",children:[(0,s.jsx)(o.J,{htmlFor:"password",className:"mb-1 block",children:"Password:"}),(0,s.jsx)(d.p,{id:"password",type:"password",name:"password",value:a.password,onChange:x,placeholder:"Enter your password",className:"w-full"})]}),(0,s.jsxs)("div",{className:"w-full",children:[(0,s.jsx)(o.J,{htmlFor:"image",className:"mb-1 block",children:"Upload Image:"}),(0,s.jsx)(d.p,{id:"image",type:"file",accept:"image/*",onChange:e=>{e.target.files&&e.target.files[0]&&r(a=>({...a,image:e.target.files[0]}))},className:"w-full"})]}),(0,s.jsx)(n.wL,{className:"flex flex-col w-full",children:(0,s.jsxs)("div",{className:"flex flex-col justify-between gap-2 w-full",children:[(0,s.jsx)(i.$,{className:"w-full",onClick:h,disabled:m,children:m?"Uploading...":"Signup"}),(0,s.jsx)("p",{className:"text-sm mt-2",children:"Already have an account?"}),(0,s.jsx)(i.$,{className:"w-full",variant:"outline",onClick:()=>{e.push("/login")},children:"Login"})]})})]})})}},4085:(e,a,r)=>{"use strict";r.d(a,{$:()=>d});var s=r(5155),t=r(2115),l=r(1290),n=r(652),i=r(9602);let o=(0,n.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),d=t.forwardRef((e,a)=>{let{className:r,variant:t,size:n,asChild:d=!1,...u}=e,c=d?l.DX:"button";return(0,s.jsx)(c,{className:(0,i.cn)(o({variant:t,size:n,className:r})),ref:a,...u})});d.displayName="Button"},5007:(e,a,r)=>{"use strict";r.d(a,{Zp:()=>n,aR:()=>i,wL:()=>o});var s=r(5155),t=r(2115),l=r(9602);let n=t.forwardRef((e,a)=>{let{className:r,...t}=e;return(0,s.jsx)("div",{ref:a,className:(0,l.cn)("rounded-xl border bg-card text-card-foreground shadow",r),...t})});n.displayName="Card";let i=t.forwardRef((e,a)=>{let{className:r,...t}=e;return(0,s.jsx)("div",{ref:a,className:(0,l.cn)("flex flex-col space-y-1.5 p-6",r),...t})});i.displayName="CardHeader",t.forwardRef((e,a)=>{let{className:r,...t}=e;return(0,s.jsx)("div",{ref:a,className:(0,l.cn)("font-semibold leading-none tracking-tight",r),...t})}).displayName="CardTitle",t.forwardRef((e,a)=>{let{className:r,...t}=e;return(0,s.jsx)("div",{ref:a,className:(0,l.cn)("text-sm text-muted-foreground",r),...t})}).displayName="CardDescription",t.forwardRef((e,a)=>{let{className:r,...t}=e;return(0,s.jsx)("div",{ref:a,className:(0,l.cn)("p-6 pt-0",r),...t})}).displayName="CardContent";let o=t.forwardRef((e,a)=>{let{className:r,...t}=e;return(0,s.jsx)("div",{ref:a,className:(0,l.cn)("flex items-center p-6 pt-0",r),...t})});o.displayName="CardFooter"},2336:(e,a,r)=>{"use strict";r.d(a,{p:()=>n});var s=r(5155),t=r(2115),l=r(9602);let n=t.forwardRef((e,a)=>{let{className:r,type:t,...n}=e;return(0,s.jsx)("input",{type:t,className:(0,l.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",r),ref:a,...n})});n.displayName="Input"},9602:(e,a,r)=>{"use strict";r.d(a,{cn:()=>l});var s=r(3463),t=r(9795);function l(){for(var e=arguments.length,a=Array(e),r=0;r<e;r++)a[r]=arguments[r];return(0,t.QP)((0,s.$)(a))}},6046:(e,a,r)=>{"use strict";var s=r(6658);r.o(s,"useRouter")&&r.d(a,{useRouter:function(){return s.useRouter}})},4352:(e,a,r)=>{"use strict";r.d(a,{J:()=>i,b:()=>o});var s=r(2115);r(7650);var t=r(1290),l=r(5155),n=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,a)=>{let r=s.forwardRef((e,r)=>{let{asChild:s,...n}=e,i=s?t.DX:a;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,l.jsx)(i,{...n,ref:r})});return r.displayName=`Primitive.${a}`,{...e,[a]:r}},{}),i=s.forwardRef((e,a)=>(0,l.jsx)(n.label,{...e,ref:a,onMouseDown:a=>{var r;a.target.closest("button, input, select, textarea")||(null===(r=e.onMouseDown)||void 0===r||r.call(e,a),!a.defaultPrevented&&a.detail>1&&a.preventDefault())}}));i.displayName="Label";var o=i}},e=>{var a=a=>e(e.s=a);e.O(0,[135,627,441,517,358],()=>a(9031)),_N_E=e.O()}]);