(function(){"use strict";var t={1746:function(t,e,n){var a=n(9242),r=n(3396);const o={class:"card-container"};function i(t,e,n,i,c,u){const l=(0,r.up)("ModalData"),d=(0,r.up)("alertWindow"),s=(0,r.up)("CaRd");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(a.uT,{name:"fade"},{default:(0,r.w5)((()=>[(0,r.Wm)(l,{data:c.jdata[c.selected],modalwin:c.modal,onModalClose:e[0]||(e[0]=t=>c.modal=!1)},null,8,["data","modalwin"])])),_:1}),(0,r.Wm)(a.uT,{name:"sale"},{default:(0,r.w5)((()=>[1==c.saleWindow?((0,r.wg)(),(0,r.j4)(d,{key:0})):(0,r.kq)("",!0)])),_:1}),(0,r._)("div",o,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(c.jdata,((t,n)=>((0,r.wg)(),(0,r.j4)(s,{data:c.jdata[t.id],key:n,onSelected:e[1]||(e[1]=t=>{c.modal=!0,c.selected=t})},null,8,["data"])))),128))])],64)}const c=[{id:"0",title:"first one",img:"https://search.pstatic.net/sunny/?src=https%3A%2F%2Fae01.alicdn.com%2Fkf%2FHb381a6a752604ca09e1ed431184f0543p%2FTransparent-Sexy-Underwear-Women-Sexy-Lace-Bodysuit-Lingerie-Hot-Erotic-Porno-Sex-Lenceria-Mujer-Erotica-Femme.jpg&type=sc960_832",video:"https://www.youtube.com/embed/gZ41qxXGvPQ"},{id:"1",title:"second one",img:"https://search.pstatic.net/common/?src=http%3A%2F%2Fshopping.phinf.naver.net%2Fmain_2642297%2F26422975734.20210319191701.jpg&type=sc960_832",video:"https://www.youtube.com/embed/lKq7IdtGqXE"},{id:"2",title:"third one",img:"https://search.pstatic.net/common/?src=http%3A%2F%2Fshop1.phinf.naver.net%2F20220321_198%2F1647869995701bcmMx_JPEG%2F49005775425265482_340761808.jpeg&type=sc960_832",video:"https://www.youtube.com/embed/wdNzm4WFnrc?list=RDGMEMCMFH2exzjBeE_zAHHJOdxg"}];var u=c,l=n(7139);const d={class:"card"},s=["src"],p={class:"card-body"};function m(t,e,n,a,o,i){return(0,r.wg)(),(0,r.iD)("div",d,[(0,r._)("img",{class:"card-img-top",src:n.data.img,onClick:e[0]||(e[0]=e=>t.$emit("selected",n.data.id))},null,8,s),(0,r._)("div",p,[(0,r._)("h3",null,(0,l.zw)(n.data.title),1)])])}var f={name:"CaRd",props:{data:Object}},w=n(89);const v=(0,w.Z)(f,[["render",m]]);var h=v;const b={key:0,class:"bg-black"},g={class:"bg-white"},y=["src"];function _(t,e,n,o,i,c){return 1==n.modalwin?((0,r.wg)(),(0,r.iD)("div",b,[(0,r._)("div",g,[(0,r._)("iframe",{width:"100%",src:n.data.video,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""},null,8,y),(0,r._)("h3",null,(0,l.zw)(n.data.title),1),(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>i.inputText=t)},null,512),[[a.nr,i.inputText,void 0,{number:!0}]]),(0,r.Uk)(" "+(0,l.zw)(i.inputText)+" ",1),(0,r._)("p",null,[(0,r._)("button",{onClick:e[1]||(e[1]=e=>t.$emit("modalClose"))}," 닫기 ")])])])):(0,r.kq)("",!0)}var j={name:"ModalData",data(){return{inputText:""}},watch:{inputText(t){Number(t)>13?(alert("error occurse"),this.inputText=""):1==isNaN(t)&&(alert("no string"),this.inputText="")}},props:{modalwin:Boolean,data:Object}};const x=(0,w.Z)(j,[["render",_]]);var F=x;const k={class:"alert"},O=(0,r._)("a",null," Big Sales~ ",-1),T=[O];function W(t,e,n,a,o,i){return(0,r.wg)(),(0,r.iD)("div",k,T)}var C={name:"AlertWindow"};const M=(0,w.Z)(C,[["render",W]]);var D=M,E={name:"App",data(){return{saleWindow:!0,jdata:u,modal:!1,inputText:0,itemNunmber:0,selected:0}},mounted(){setInterval((()=>{this.saleWindow=!1}),1e3)},components:{CaRd:h,ModalData:F,alertWindow:D}};const H=(0,w.Z)(E,[["render",i]]);var z=H;(0,a.ri)(z).mount("#app")}},e={};function n(a){var r=e[a];if(void 0!==r)return r.exports;var o=e[a]={exports:{}};return t[a](o,o.exports,n),o.exports}n.m=t,function(){var t=[];n.O=function(e,a,r,o){if(!a){var i=1/0;for(d=0;d<t.length;d++){a=t[d][0],r=t[d][1],o=t[d][2];for(var c=!0,u=0;u<a.length;u++)(!1&o||i>=o)&&Object.keys(n.O).every((function(t){return n.O[t](a[u])}))?a.splice(u--,1):(c=!1,o<i&&(i=o));if(c){t.splice(d--,1);var l=r();void 0!==l&&(e=l)}}return e}o=o||0;for(var d=t.length;d>0&&t[d-1][2]>o;d--)t[d]=t[d-1];t[d]=[a,r,o]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,a){var r,o,i=a[0],c=a[1],u=a[2],l=0;if(i.some((function(e){return 0!==t[e]}))){for(r in c)n.o(c,r)&&(n.m[r]=c[r]);if(u)var d=u(n)}for(e&&e(a);l<i.length;l++)o=i[l],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(d)},a=self["webpackChunkvue_001"]=self["webpackChunkvue_001"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(1746)}));a=n.O(a)})();
//# sourceMappingURL=app.0053b162.js.map