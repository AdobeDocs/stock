"use strict";(self.webpackChunkdev_site_platform_template=self.webpackChunkdev_site_platform_template||[]).push([[233],{65480:function(e,l,a){a.d(l,{Z:function(){return _}});var t=a(15785),s=a(15007),o=a(95223),n=a(75900),r=a.n(n),i=a(62802),c=a.n(i),d=a(95083),p=a.n(d),u=a(32956),m=a(68457),v=a(53971),g=a(78980),f=a(52078),y=a(24808),w=a(48788),h=a(23766),b=a(47549),x=a(65034),C=a(11490);var Z={name:"1a50hjl",styles:"border:none;padding:0;font-family:'adobe-clean';background:transparent;color:var(--spectrum-global-color-gray-800);text-decoration:underline;cursor:pointer;&:hover{color:var(--spectrum-global-color-gray-900);}"},k={name:"181f1kw",styles:"font-weight:700;color:var(--spectrum-global-color-gray-900)"},N={name:"wwrf8h",styles:"display:flex;flex-direction:column;gap:8px;width:80%"},D={name:"1swkvfk",styles:"padding:0;font-family:'adobe-clean';border:none;background:transparent;margin-left:10px;cursor:pointer;text-decoration:underline;color:rgb(0, 84, 182);&:hover{color:rgb(2, 101, 220);}"},S={name:"1f2v555",styles:"color:var(--spectrum-global-color-gray-900)"},z={name:"1f2v555",styles:"color:var(--spectrum-global-color-gray-900)"},P={name:"ti75j2",styles:"margin:0"},L={name:"a29rn1",styles:"display:flex;text-align:center;align-items:center;gap:10px"},B={name:"181f1kw",styles:"font-weight:700;color:var(--spectrum-global-color-gray-900)"},j={name:"1xg43bt",styles:"display:flex;gap:20px;align-items:baseline"},A={name:"6apepd",styles:"display:flex;flex-direction:column;gap:48px"};const _=e=>{var l,a;let{formData:n,response:i,handleRestart:d}=e;const{getCredentialData:M,selectedOrganization:E}=(0,s.useContext)(x.Z),I=M,{0:U,1:F}=(0,s.useState)(),{0:H,1:R}=(0,s.useState)(""),O={},T={label:"products",productList:[]};null==I||null===(l=I[_])||void 0===l||l.children.forEach((e=>{let{type:l,props:a}=e;var s,o;(O[l]=a,a.children&&l===h._)&&(O[l]=a,null==a||null===(s=a.children)||void 0===s||s.forEach((e=>{let{type:l,props:a}=e;O[l]=a})));l===g.bi&&null!=a&&a.children&&(o=T.productList).push.apply(o,(0,t.Z)([].concat(a.children).map((e=>{let{props:{label:l,icon:a}}=e;return{label:l,icon:a}}))))}));const J=null==T?void 0:T.productList;(0,s.useEffect)((()=>{n.Downloads&&W("/console/api/organizations/"+(null==E?void 0:E.id)+"/projects/"+i.projectId+"/workspaces/"+i.workspaceId+"/download",n.Download,n.zipUrl)}),[]);const G=null==I?void 0:I[_],W=async function(e,l,a){void 0===l&&(l="download"),F(!0);try{var t,s,o,n,r;const i=await p().getBinaryContent(a),d=new Uint8Array(i).buffer,m=new(c());await m.loadAsync(d);const v={method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer "+(null===(t=window.adobeIMS)||void 0===t||null===(s=t.getTokenFromStorage())||void 0===s?void 0:s.token),"x-api-key":null===(o=window)||void 0===o||null===(n=o.adobeIMS)||void 0===n||null===(r=n.adobeIdData)||void 0===r?void 0:r.client_id}},g=await fetch(e,v);if(200===g.status){const e=await g.json();m.file("credential.json",JSON.stringify(e));const a=await m.generateAsync({type:"blob"});(0,u.saveAs)(a,l+".zip")}else console.error("Failed to fetch additional data. Response status:",g.status)}catch(i){console.error("An error occurred:",i)}finally{F(!1)}};return(0,o.tZ)("div",{className:r()(null==G?void 0:G.className),css:A},(0,o.tZ)("div",{className:r()(null==G?void 0:G.className),css:(0,o.iv)("display:flex;flex-direction:column;gap:16px;color:var(--spectrum-global-color-gray-800);width:100%;height:100%;text-align:left;@media screen and (min-width: ",m.xU,") and (max-width: ",m.Ey,"){padding:0;width:100%;}","")},(0,o.tZ)("div",{css:j},(null==G?void 0:G.title)&&(0,o.tZ)("h2",{className:"spectrum-Heading spectrum-Heading--sizeL",css:B},null==G?void 0:G.title),U&&(0,o.tZ)("div",{css:L},(0,o.tZ)("div",{className:"spectrum-ProgressCircle spectrum-ProgressCircle--indeterminate spectrum-ProgressCircle--small"},(0,o.tZ)("div",{className:"spectrum-ProgressCircle-track"}),(0,o.tZ)("div",{className:"spectrum-ProgressCircle-fills"},(0,o.tZ)("div",{className:"spectrum-ProgressCircle-fillMask1"},(0,o.tZ)("div",{className:"spectrum-ProgressCircle-fillSubMask1"},(0,o.tZ)("div",{className:"spectrum-ProgressCircle-fill"}))),(0,o.tZ)("div",{className:"spectrum-ProgressCircle-fillMask2"},(0,o.tZ)("div",{className:"spectrum-ProgressCircle-fillSubMask2"},(0,o.tZ)("div",{className:"spectrum-ProgressCircle-fill"}))))),(0,o.tZ)("p",{css:P},"Downloading..."))),n.Downloads&&(null==G?void 0:G.paragraph)&&(0,o.tZ)("p",{className:"spectrum-Body spectrum-Body--sizeL",css:z},null==G?void 0:G.paragraph),n.Downloads&&(0,o.tZ)("p",{className:"spectrum-Body spectrum-Body--sizeS",css:S},"Download not working?",(0,o.tZ)("button",{css:D,onClick:()=>W("/console/api/organizations/"+(null==E?void 0:E.id)+"/projects/"+i.projectId+"/workspaces/"+i.workspaceId+"/download",n.Download,n.zipUrl),"data-cy":"restart-download"},"Restart download"))),(0,o.tZ)("div",{css:(0,o.iv)("display:flex;gap:35px;@media screen and (min-width: ",m.xU,") and (max-width: ",m.Ey,"){flex-direction:column;padding-left:0;}","")},(0,o.tZ)("div",{css:(0,o.iv)("display:flex;flex-direction:column;gap:35px;width:50%;@media screen and (min-width: ",m.xU,") and (max-width: ",m.Ey,"){width:100%;}","")},(0,o.tZ)(C.W,{credentialName:n.CredentialName,productList:J,ProductComponent:g.bi,AccessTokenComponent:y.J,DevConsoleLinkComponent:w.A,ClientDetailsComponent:h._,allowedOriginsDetails:n.AllowedOrigins,organizationName:E,response:i,nextButtonLink:null==G?void 0:G.nextStepsHref,nextButtonLabel:null==G?void 0:G.nextStepsLabel,devConsoleLink:null==G?void 0:G.devConsoleDirection,developerConsoleManage:null==G?void 0:G.developerConsoleManage,myCredentialFields:O,collapse:null==G?void 0:G.isCollapsable}),(0,o.tZ)("div",{css:N},(0,o.tZ)("h4",{className:"spectrum-Heading spectrum-Heading--sizeXS",css:k},"Need another credential"),(0,o.tZ)("p",{className:"spectrum-Body spectrum-Body--sizeS"},(0,o.tZ)("button",{onClick:d,css:Z,"data-cy":"Restart-new-credential"},"Restart and create a new credential")))),null!=G&&G.children?(0,o.tZ)(b.c,{sideContent:null===(a=O[f.v])||void 0===a?void 0:a.children,SideComp:f.v}):null),H&&(0,o.tZ)(v.F,{variant:"success",message:"Copied to clipboard",disable:1e3,customDisableFunction:R}))}}}]);
//# sourceMappingURL=862bb76f-5fbb9e7131a273dff126.js.map