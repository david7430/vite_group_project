import{_,r as S,z as h,d as s,c as n,w as k,A as B,a as o,B as V,F as i,C as y,D as f,p as v,m as b,E as x}from"./index-DZXbCyXS.js";/* empty css                                                                  */import{I as U}from"./WB-Input-BHgXPrwK.js";const g={class:"select-container"},I={value:"",disabled:""},N=["value"],w={__name:"WB-Select",props:{modelValue:[String,Number],placeholder:String,options:{type:Array,required:!0}},emits:["update:modelValue"],setup(l,{emit:u}){const d=l,m=u,a=S(d.modelValue);return h(a,r=>{m("update:modelValue",r)}),h(()=>d.modelValue,r=>{a.value=r}),(r,c)=>(s(),n("div",g,[k(o("select",{"onUpdate:modelValue":c[0]||(c[0]=e=>a.value=e),class:"form-select"},[o("option",I,V(l.placeholder),1),(s(!0),n(i,null,y(l.options,e=>(s(),n("option",{key:e,value:e},V(e),9,N))),128))],512),[[B,a.value]])]))}},A=_(w,[["__scopeId","data-v-c51da1af"]]),C={class:"search-form"},D={class:"search-middle"},$={__name:"WB-Search",props:{fields:{type:Array,required:!0}},emits:["search"],setup(l,{emit:u}){const d=l,m=u,a=f(d.fields.reduce((c,e)=>(c[e.name]="",c),{})),r=()=>{m("search",a)};return(c,e)=>(s(),n("div",C,[e[1]||(e[1]=o("div",{class:"search-header"},[o("p",null,"搜尋")],-1)),o("div",D,[(s(!0),n(i,null,y(l.fields,t=>(s(),n(i,{key:t.name},[t.type==="input"?(s(),v(U,{key:0,modelValue:a[t.name],"onUpdate:modelValue":p=>a[t.name]=p,placeholder:t.placeholder},null,8,["modelValue","onUpdate:modelValue","placeholder"])):t.type==="select"?(s(),v(A,{key:1,modelValue:a[t.name],"onUpdate:modelValue":p=>a[t.name]=p,placeholder:t.placeholder,options:t.options},null,8,["modelValue","onUpdate:modelValue","placeholder","options"])):b("",!0)],64))),128))]),o("div",{class:"search-footer"},[o("div",{class:"button-container"},[o("button",{onClick:r,class:"search-button"},e[0]||(e[0]=[o("i",{class:"icon-search"},null,-1),x(" 查詢 ")]))])])]))}},W=_($,[["__scopeId","data-v-04fc57c2"]]);export{W as S};
