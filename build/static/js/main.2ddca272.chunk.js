(this.webpackJsonpbeads=this.webpackJsonpbeads||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(6),c=a.n(r),l=(a(13),a(1)),s=a(2),o=a(4),u=a(3),d=(a(14),a(15),function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={},n}return Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{class:"grid-y grid-padding-y grid-padding-x align-center-middle",style:{height:"100%"}},i.a.createElement("div",{class:"cell small-1 text-left"},i.a.createElement("button",{type:"button",class:"alert button",onClick:this.props.goHome},i.a.createElement("i",{className:"fi-home"}))),i.a.createElement("div",{class:"cell auto"},this.props.gridSize))}}]),a}(i.a.Component)),m=a(7),g=(a(16),function(e){var t=e.submitSliderValue,a=i.a.useState(5),n=Object(m.a)(a,2),r=n[0],c=n[1];return i.a.createElement("div",{class:"grid-y grid-padding-y align-center-middle text-center",style:{height:"100%"}},i.a.createElement("div",{class:"cell small-1"},i.a.createElement("p",null,"Pick grid size")),i.a.createElement("div",{class:"cell small-2"},i.a.createElement("input",{id:"grid-size-picker",className:"slider",type:"range",min:"5",max:"50",step:"1",value:r,onChange:function(e){c(e.target.value)}}),i.a.createElement("br",null),r," x ",r),i.a.createElement("div",{class:"cell small-1"},i.a.createElement("button",{type:"button",class:"success button",onClick:function(){t(r)}},"Let's go!")))}),h=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={gridSize:0},n}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.state.gridSize;return i.a.createElement("div",{className:"App",style:{height:"100%"}},t>0?i.a.createElement(d,{gridSize:t,goHome:function(){e.setState({gridSize:0})}}):i.a.createElement(g,{submitSliderValue:function(t){e.setState({gridSize:t})}}))}}]),a}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.2ddca272.chunk.js.map