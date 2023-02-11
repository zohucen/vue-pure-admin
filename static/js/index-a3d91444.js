import{t as N}from"./index-2a7d7e76.js";import{e as Ae,m as Me,o as Fe}from"./index-5270accb.js";import{h as H,r as v,a as r,j as $,k as O,u as e,q as g,n as le,m as Y,A as ae,l as h,I as $e,J as Oe,a3 as X,v as He,x,D as F,X as Pe,F as je,b6 as De,b4 as qe,C as ze}from"./runtime-core.esm-bundler-1f6332ae.js";import{g as Be}from"./index-e24b4c59.js";import{_ as Ee}from"./_plugin-vue_export-helper-c27b6911.js";import"./vue.runtime.esm-bundler-7c6ab200.js";import"./runtime-dom.esm-bundler-7421a035.js";const Re=()=>{window.cancelAnimationFrame=(()=>window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.oCancelAnimationFrame||window.msCancelAnimationFrame||function(l){return window.clearTimeout(l)})(),window.requestAnimationFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(l){return window.setTimeout(l,1e3/60)}}()},We=(l,d)=>{if(l===d)return!0;if(l.length!==d.length)return!1;for(let a=0;a<l.length;++a)if(l[a]!==d[a])return!1;return!0};function re(){Array.isArray||(Array.isArray=function(f){return Object.prototype.toString.call(f)==="[object Array]"});let l,d,a,u,m,S,t=1,n=arguments[0]||{},p=!1,_=arguments.length;if(typeof n=="boolean"&&(p=n,n=arguments[1]||{},t++),typeof n!="object"&&typeof n!="function"&&(n={}),t===_)return n;for(;t<_;t++)if((d=arguments[t])!=null)for(l in d)a=n[l],u=d[l],m=Array.isArray(u),p&&u&&(typeof u=="object"||m)?(m?(m=!1,S=a&&Array.isArray(a)?a:[]):S=a&&typeof a=="object"?a:{},n[l]=re(p,S,u)):u!==void 0&&(n[l]=u);return n}const Ie=Object.freeze(Object.defineProperty({__proto__:null,animationFrame:Re,arrayEqual:We,copyObj:re},Symbol.toStringTag,{value:"Module"})),Le=["innerHTML"],Ne=H({name:"ReSeamlessScroll"}),Ye=H({...Ne,props:{data:{type:Array},classOption:{type:Object}},emits:["scrollEnd"],setup(l,{expose:d,emit:a}){const u=l,{animationFrame:m,copyObj:S}=Ie;m();const t=v(0),n=v(0),p=v(0),_=v(0),f=v(0),b=v(0),P=v(0),j=v("");let C=null,U=null,D=null,V=null,J=null,q=!1,z="ease-in";const{classOption:w}=u;w.key===void 0&&(w.key=0);const G=N(`wrap${w.key}`,null),K=N(`slotList${w.key}`,null),Q=N(`realBox${w.key}`,null),Z=r(()=>e(t)<0),ee=r(()=>Math.abs(e(t))<e(b)-e(f)),ce=r(()=>({step:1,limitMoveNum:5,hoverStop:!0,direction:"top",openTouch:!0,singleHeight:0,singleWidth:0,waitTime:1e3,switchOffset:30,autoPlay:!0,navigation:!1,switchSingleStep:134,switchDelay:400,switchDisabledClass:"disabled",isSingleRemUnit:!1})),i=r(()=>S({},e(ce),w)),ue=r(()=>e(Z)?"":e(i).switchDisabledClass),fe=r(()=>e(ee)?"":e(i).switchDisabledClass),de=r(()=>({position:"absolute",margin:`${e(_)/2}px 0 0 -${e(i).switchOffset}px`,transform:"translate(-100%,-50%)"})),pe=r(()=>({position:"absolute",margin:`${e(_)/2}px 0 0 ${e(f)+e(i).switchOffset}px`,transform:"translateY(-50%)"})),B=r(()=>e(i).direction!=="bottom"&&e(i).direction!=="top"),te=r(()=>e(B)?{float:"left",overflow:"hidden"}:{overflow:"hidden"}),me=r(()=>({transform:`translate(${e(t)}px,${e(n)}px)`,transition:`all ${z} ${e(p)}ms`,overflow:"hidden"})),E=r(()=>e(i).navigation),R=r(()=>e(E)?!1:e(i).autoPlay),ne=r(()=>u.data.length>=e(i).limitMoveNum),oe=r(()=>e(i).hoverStop&&e(R)&&e(ne)),W=r(()=>e(i).openTouch),ie=r(()=>e(i).isSingleRemUnit?parseInt(window.getComputedStyle(document.documentElement,null).fontSize):1),I=r(()=>e(i).singleWidth*e(ie)),L=r(()=>e(i).singleHeight*e(ie)),k=r(()=>{let o;const s=e(i).step;if(e(B)?o=e(I):o=e(L),o>0&&o%s>0)throw"如果设置了单步滚动，step需是单步大小的约数，否则无法保证单步滚动结束的位置是否准确";return s});function he(){t.value=0,n.value=0,A(),se()}function ve(){if(e(Z)){if(Math.abs(e(t))<e(i).switchSingleStep){t.value=0;return}t.value+=e(i).switchSingleStep}}function we(){if(e(ee)){if(e(b)-e(f)+e(t)<e(i).switchSingleStep){t.value=e(f)-e(b);return}t.value-=e(i).switchSingleStep}}function A(){cancelAnimationFrame(U||"")}function ye(o){if(!e(W))return;let s;const c=o.targetTouches[0],{waitTime:y,singleHeight:M,singleWidth:Ce}=e(i);D={x:c.pageX,y:c.pageY},V=e(n),J=e(t),M&&Ce?(s&&clearTimeout(s),s=setTimeout(()=>{A()},y+20)):A()}function ge(o){if(!e(W)||o.targetTouches.length>1||o.scale&&o.scale!==1)return;const s=o.targetTouches[0],{direction:c}=e(i),y={x:s.pageX-D.x,y:s.pageY-D.y};o.preventDefault();const M=Math.abs(y.x)<Math.abs(y.y)?1:0;M===1&&c==="bottom"||M===1&&c==="top"?n.value=V+y.y:(M===0&&c==="left"||M===0&&c==="right")&&(t.value=J+y.x)}function Se(){if(!e(W))return;let o;const s=e(i).direction;if(p.value=50,s==="top")e(n)>0&&(n.value=0);else if(s==="bottom"){const c=e(P)/2*-1;e(n)<c&&(n.value=c)}else if(s==="left")e(t)>0&&(t.value=0);else if(s==="right"){const c=e(b)*-1;e(t)<c&&(t.value=c)}o&&clearTimeout(o),o=setTimeout(()=>{p.value=0,T()},e(p))}function _e(){e(oe)&&Te()}function be(){e(oe)&&ke()}function T(){q||(U=requestAnimationFrame(function(){const o=e(P)/2,s=e(b)/2,{direction:c,waitTime:y}=e(i);c==="top"?(Math.abs(e(n))>=o&&(a("scrollEnd"),n.value=0),n.value-=k.value):c==="bottom"?(e(n)>=0&&(a("scrollEnd"),n.value=o*-1),n.value+=k.value):c==="left"?(Math.abs(e(t))>=s&&(a("scrollEnd"),t.value=0),t.value-=k.value):c==="right"&&(e(t)>=0&&(a("scrollEnd"),t.value=s*-1),t.value+=k.value),C&&clearTimeout(C),e(L)?Math.abs(e(n))%e(L)<e(k)?C=setTimeout(()=>{T()},y):T():e(I)&&Math.abs(e(t))%e(I)<e(k)?C=setTimeout(()=>{T()},y):T()}))}function se(){$e(()=>{const{switchDelay:o}=e(i);if(j.value="",e(B)){_.value=e(G).offsetHeight,f.value=e(G).offsetWidth;let s=e(K).offsetWidth;e(R)&&(s=s*2+1),e(Q).style.width=s+"px",b.value=s}if(e(R))z="ease-in",p.value=0;else{z="linear",p.value=o;return}e(ne)?(j.value=e(K).innerHTML,setTimeout(()=>{var s;P.value=(s=e(Q))==null?void 0:s.offsetHeight,T()},0)):(A(),n.value=t.value=0)})}function ke(){q=!1,T()}function Te(){q=!0,C&&clearTimeout(C),A()}function xe(o){e(i).direction==="left"||e(i).direction==="right"||Me(()=>{o.deltaY>0?n.value-=k.value:n.value+=k.value},50)()}return Ae(()=>{se()}),Fe(()=>{A(),clearTimeout(C)}),d({reset:he}),(o,s)=>($(),O("div",{ref:"wrap"+e(w).key},[e(E)?($(),O("div",{key:0,style:g(e(de)),class:le(e(ue)),onClick:ve},[Y(o.$slots,"left-switch")],6)):ae("",!0),e(E)?($(),O("div",{key:1,style:g(e(pe)),class:le(e(fe)),onClick:we},[Y(o.$slots,"right-switch")],6)):ae("",!0),h("div",{ref:"realBox"+e(w).key,style:g(e(me)),onMouseenter:_e,onMouseleave:be,onTouchstartPassive:ye,onTouchmovePassive:ge,onTouchend:Se,onMousewheelPassive:xe},[h("div",{ref:"slotList"+e(w).key,style:g(e(te))},[Y(o.$slots,"default")],4),h("div",{innerHTML:j.value,style:g(e(te))},null,12,Le)],36)],512))}}),Xe=Be(Ye),Ue=Xe,Ve=l=>(De("data-v-df760ae6"),l=l(),qe(),l),Je={class:"card-header"},Ge=Ve(()=>h("span",null,"无缝滚动示例",-1)),Ke={class:"item"},Qe=["textContent"],Ze=H({name:"SeamlessScroll"}),et=H({...Ze,setup(l){const d=v(),a=v([{title:"无缝滚动第一行无缝滚动第一行！！！！！！！！！！"},{title:"无缝滚动第二行无缝滚动第二行！！！！！！！！！！"},{title:"无缝滚动第三行无缝滚动第三行！！！！！！！！！！"},{title:"无缝滚动第四行无缝滚动第四行！！！！！！！！！！"},{title:"无缝滚动第五行无缝滚动第五行！！！！！！！！！！"},{title:"无缝滚动第六行无缝滚动第六行！！！！！！！！！！"},{title:"无缝滚动第七行无缝滚动第七行！！！！！！！！！！"},{title:"无缝滚动第八行无缝滚动第八行！！！！！！！！！！"},{title:"无缝滚动第九行无缝滚动第九行！！！！！！！！！！"}]),u=Oe({direction:"top"});function m(S){e(d).reset(),e(u).direction=S}return(S,t)=>{const n=X("el-button"),p=X("el-card"),_=X("el-space");return $(),He(_,{wrap:""},{default:x(()=>[F(p,{class:"box-card",shadow:"never"},{header:x(()=>[h("div",Je,[Ge,F(n,{class:"button",link:"",type:"primary",onClick:t[0]||(t[0]=f=>m("top"))},{default:x(()=>[h("span",{style:g({color:u.direction==="top"?"red":""})}," 向上滚动 ",4)]),_:1}),F(n,{class:"button",link:"",type:"primary",onClick:t[1]||(t[1]=f=>m("bottom"))},{default:x(()=>[h("span",{style:g({color:u.direction==="bottom"?"red":""})}," 向下滚动 ",4)]),_:1}),F(n,{class:"button",link:"",type:"primary",onClick:t[2]||(t[2]=f=>m("left"))},{default:x(()=>[h("span",{style:g({color:u.direction==="left"?"red":""})}," 向左滚动 ",4)]),_:1}),F(n,{class:"button",link:"",type:"primary",onClick:t[3]||(t[3]=f=>m("right"))},{default:x(()=>[h("span",{style:g({color:u.direction==="right"?"red":""})}," 向右滚动 ",4)]),_:1})])]),default:x(()=>[F(e(Ue),{ref_key:"scroll",ref:d,data:a.value,"class-option":u,class:"warp"},{default:x(()=>[h("ul",Ke,[($(!0),O(je,null,Pe(a.value,(f,b)=>($(),O("li",{key:b},[h("span",{class:"title",textContent:ze(f.title)},null,8,Qe)]))),128))])]),_:1},8,["data","class-option"])]),_:1})]),_:1})}}});const rt=Ee(et,[["__scopeId","data-v-df760ae6"]]);export{rt as default};
