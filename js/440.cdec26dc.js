"use strict";(globalThis["webpackChunkultimavez"]=globalThis["webpackChunkultimavez"]||[]).push([[440],{4440:(e,a,t)=>{t.r(a),t.d(a,{default:()=>_});var l=t(9835),s=t(1957),n=t(6970);const o={class:"row q-p-sm.bg-primary"},i={key:0,class:"no-tasks absolute-center"},d=(0,l._)("div",{class:"text-h5 text-primary text-center"},"Sem tarefas",-1);function c(e,a,t,c,u,r){const p=(0,l.up)("q-btn"),k=(0,l.up)("q-input"),m=(0,l.up)("q-checkbox"),w=(0,l.up)("q-item-section"),h=(0,l.up)("q-item-label"),g=(0,l.up)("q-item"),b=(0,l.up)("q-list"),f=(0,l.up)("q-icon"),q=(0,l.up)("q-page"),y=(0,l.Q2)("ripple");return(0,l.wg)(),(0,l.j4)(q,{class:"bg-grey-3 column"},{default:(0,l.w5)((()=>[(0,l._)("div",o,[(0,l.Wm)(k,{modelValue:e.newTask,"onUpdate:modelValue":a[0]||(a[0]=a=>e.newTask=a),onKeyup:(0,s.D2)(e.addTask,["enter"]),class:"col",square:"",filled:"","bg-color":"white",placeholder:"Adicionar tarefa",dense:""},{append:(0,l.w5)((()=>[(0,l.Wm)(p,{onClick:e.addTask,round:"",dense:"",flat:"",icon:"add"},null,8,["onClick"])])),_:1},8,["modelValue","onKeyup"])]),(0,l.Wm)(b,{class:"bg-white",separator:"",bordered:""},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.tasks,((a,t)=>(0,l.wy)(((0,l.wg)(),(0,l.j4)(g,{key:a.title,onClick:e=>a.done=!a.done,class:(0,n.C_)({"done bg-blue-1":a.done}),clickable:""},{default:(0,l.w5)((()=>[(0,l.Wm)(w,{avatar:""},{default:(0,l.w5)((()=>[(0,l.Wm)(m,{modelValue:a.done,"onUpdate:modelValue":e=>a.done=e,class:"no-pointer-events",color:"primary"},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024),(0,l.Wm)(w,null,{default:(0,l.w5)((()=>[(0,l.Wm)(h,null,{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(a.title),1)])),_:2},1024)])),_:2},1024),(0,l.Wm)(w,{side:""},{default:(0,l.w5)((()=>[a.done?((0,l.wg)(),(0,l.j4)(p,{key:0,onClick:(0,s.iM)((a=>e.deletetask(t)),["stop"]),flat:"",round:"",dense:"",color:"primary",icon:"delete"},null,8,["onClick"])):(0,l.kq)("",!0)])),_:2},1024)])),_:2},1032,["onClick","class"])),[[y]]))),128))])),_:1}),e.tasks.length?(0,l.kq)("",!0):((0,l.wg)(),(0,l.iD)("div",i,[(0,l.Wm)(f,{name:"check",size:"100px",color:"primary"}),d]))])),_:1})}t(9665);const u=(0,l.aZ)({data(){return{newTask:"",tasks:[]}},methods:{deletetask(e){this.$q.dialog({title:"Confirmar",message:"Deseja apagar?",cancel:!0,persistent:!0}).onOk((()=>{this.tasks.splice(e,1),this.$q.notify("Tarefa apagada")}))},addTask(){this.tasks.push({title:this.newTask,done:!1}),this.newTask=""}}});var r=t(1639),p=t(9885),k=t(1169),m=t(4455),w=t(3246),h=t(490),g=t(1233),b=t(1221),f=t(3115),q=t(2857),y=t(1136),Z=t(9984),C=t.n(Z);const T=(0,r.Z)(u,[["render",c]]),_=T;C()(u,"components",{QPage:p.Z,QInput:k.Z,QBtn:m.Z,QList:w.Z,QItem:h.Z,QItemSection:g.Z,QCheckbox:b.Z,QItemLabel:f.Z,QIcon:q.Z}),C()(u,"directives",{Ripple:y.Z})}}]);