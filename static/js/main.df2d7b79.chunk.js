(this.webpackJsonpbeads=this.webpackJsonpbeads||[]).push([[0],[,,,,,,,,,,,,,function(e,t,a){e.exports=a(23)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),o=a.n(c),s=(a(18),a(1)),l=a(2),i=a(4),u=a(3),m=(a(19),a(8)),d=a(6),h=a(12),g=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={fill:"white"},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.x,a=e.y,n=e.number,c=e.color,o=e.paint,s=e.stopPainting,l=function(){return o(n)};return r.a.createElement("rect",{id:this.props.number,x:2*t,y:t%2?2*a+1.25:2*a+.25,width:"2",height:"2",fill:c,stroke:"black",strokeWidth:"0.1",style:{touchAction:"none"},onMouseDown:l,onMouseEnter:function(e){1===e.buttons&&l()},onTouchMove:function(e){o(document.elementFromPoint(e.touches[0].pageX,e.touches[0].pageY).id)},onTouchEnd:s,onMouseUp:s})}}]),a}(r.a.Component),v=function(e,t){return"linear-gradient(to right, hsl(".concat(e,", 0%, ").concat(t,"%), hsl(").concat(e,", 100%, ").concat(t,"%))")},f=function(e,t){return"linear-gradient(to right, hsl(".concat(e,", ").concat(t,"%, 0%), hsl(").concat(e,", ").concat(t,"%, 50%), hsl(").concat(e,", ").concat(t,"%, 100%))")},p=function(){function e(t,a,n){var r=this;Object(s.a)(this,e),this.slide=function(t,a){switch(t){case"H":return new e(a,r.S,r.L);case"S":return new e(r.H,a,r.L);case"L":return new e(r.H,r.S,a);default:return null}},this.equals=function(e){return r.H===e.H&&r.S===e.S&&r.L===e.L},this.H=t,this.S=a,this.L=n}return Object(l.a)(e,[{key:"CSS",get:function(){return"hsl(".concat(this.H,", ").concat(this.S,"%, ").concat(this.L,"%)")}}]),e}(),C=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).getFillColor=function(e){return n.props.beadColors["colorOfBead".concat(e)]||new p(0,0,100)},n.range=function(e){return Object(h.a)(Array(e).keys())},n.state={},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.props.onClickBead,a=this.props,n=a.size,c=a.paint,o=a.stopPainting,s="0 0 ".concat(2*n," ").concat(2*(n+1));return r.a.createElement("svg",{height:"95%",viewBox:s,style:{touchAction:"none"},onClick:t,onTouchStart:t},this.range(n).flatMap((function(t){return e.range(n).map((function(a){var s=n*t+a;return r.a.createElement(g,{key:"bead-".concat(s),number:s,x:t,y:a,color:e.getFillColor(s).CSS,paint:c,stopPainting:o})}))})))}}]),a}(r.a.Component),y=(a(20),a(21),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.props.setOneColorParam(e.target.name,parseFloat(e.target.value))},n.state={},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.color,t=e.H,a=e.S,n=e.L,c={background:v(t,n)},o={background:f(t,a)};return r.a.createElement("div",{className:"grid-y align-center-middle text-center"},r.a.createElement("div",{className:"cell small-4"},r.a.createElement("input",{className:"hsl-slider hue-gradient",name:"H",type:"range",min:"0",max:"360",step:"1",value:t,onChange:this.handleChange})),r.a.createElement("div",{className:"cell small-4"},r.a.createElement("input",{className:"hsl-slider",style:c,name:"S",type:"range",min:"0",max:"100",step:"1",value:a,onChange:this.handleChange})),r.a.createElement("div",{className:"cell small-4"},r.a.createElement("input",{className:"hsl-slider",style:o,name:"L",type:"range",min:"0",max:"100",step:"1",value:n,onChange:this.handleChange})))}}]),a}(r.a.Component)),b=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.currentColor,a=e.currentColorHistory,n=e.setCurrentColor,c=e.setOneColorParam;return r.a.createElement("div",{className:"grid-x grid-margin-x grid-margin-y align-center-middle",style:{height:"100%"}},r.a.createElement("div",{className:"cell small-5"},r.a.createElement(y,{color:t,setOneColorParam:c})),r.a.createElement("div",{className:"cell small-1 text-center text-middle",style:{height:"100%"}},r.a.createElement("svg",{style:{borderRadius:"100%",height:"5em",width:"5em"},viewBox:"0 0 1 1"},r.a.createElement("rect",{x:"0",y:"0",width:"1",height:"1",fill:t.CSS}))),r.a.createElement("div",{className:"cell small-6"},r.a.createElement("div",{className:"grid-x grid-margin-y"},a.map((function(e,t){return r.a.createElement("div",{key:"currentColorHistory-".concat(t),className:"cell small-1",style:{background:e.CSS,width:"2em",height:"2em",cursor:"pointer",borderRadius:"0.2em",margin:"0 0.5em"},onClick:function(){n(e)}})})))))}}]),a}(r.a.Component),E=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={},n}return Object(l.a)(a,[{key:"render",value:function(){var e={padding:"0 0.2em",fontSize:"3em",color:"grey",background:"none"};return r.a.createElement("div",{className:"grid-x align-center-middle"},r.a.createElement("div",{className:"cell small-6"},r.a.createElement("button",{type:"button",className:"button",style:e,disabled:!this.props.canUndo,onClick:this.props.undo},r.a.createElement("i",{className:"fi-arrow-left"}))),r.a.createElement("div",{className:"cell small-6"},r.a.createElement("button",{type:"button",className:"button",style:e,disabled:!this.props.canRedo,onClick:this.props.redo},r.a.createElement("i",{className:"fi-arrow-right"}))))}}]),a}(r.a.Component),N=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).setCurrentColor=function(e){n.setState({currentColor:e})},n.setOneColorParam=function(e,t){n.setState((function(a){var n=a.currentColor.slide(e,t);return n?{currentColor:n}:{}}))},n.updateCurrentColorHistory=function(){n.setState((function(e){return e.currentColorHistory.some((function(t){return t.equals(e.currentColor)}))?{}:{currentColorHistory:[e.currentColor].concat(e.currentColorHistory).slice(0,12)}}))},n.paint=function(e){n.state.paintBuffer.includes(e)||n.setState((function(t){return Object(d.a)({paintBuffer:t.paintBuffer.concat([e])},"colorOfBead".concat(e),t.currentColor)}))},n.stopPainting=function(){n.setState({paintBuffer:[]},(function(){n.commitCanvas(n.getColorState(n.state))}))},n.getColorState=function(e){return n.getColoredBeads(e).reduce((function(t,a){return t[a]=e[a],t}),{})},n.getColoredBeads=function(e){return Object.keys(e).filter((function(e){return"colorOfBead"===e.slice(0,11)}))},n.commitCanvas=function(e){n.setState((function(t){return function(e,t){var a=Object.keys(e),n=Object.keys(t);return a.length===n.length&&a.reduce((function(a,r,c){return a&&e[r]===t[n[c]]}),!0)}(t.canvasHistory[t.canvasHistoryCursor],e)?{}:{canvasHistoryCursor:t.canvasHistoryCursor+1,canvasHistory:t.canvasHistory.slice(0,t.canvasHistoryCursor+1).concat([e])}}))},n.newColorState=function(e,t){return Object.assign(n.getColoredBeads(t).reduce((function(e,t){return e[t]=null,e}),{}),e)},n.canUndo=function(){return n.state.canvasHistoryCursor>0},n.canRedo=function(){return n.state.canvasHistoryCursor<n.state.canvasHistory.length-1},n.undo=function(){return n.setState((function(e){return Object(m.a)({canvasHistoryCursor:e.canvasHistoryCursor-1},n.newColorState(e.canvasHistory[e.canvasHistoryCursor-1],e))}))},n.redo=function(){return n.setState((function(e){return Object(m.a)({canvasHistoryCursor:e.canvasHistoryCursor+1},n.newColorState(e.canvasHistory[e.canvasHistoryCursor+1],e))}))},n.state={currentColor:new p(190,80,60),currentColorHistory:[],paintBuffer:[],canvasHistory:[{}],canvasHistoryCursor:0},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.currentColorHistory,a=e.currentColor,n=this.getColorState(this.state);return r.a.createElement("div",{className:"grid-y align-center-middle",style:{width:"100%",height:"100%"}},r.a.createElement("div",{className:"cell small-2 text-center"},r.a.createElement("div",{className:"grid-x align-center-middle",style:{height:"100%"}},r.a.createElement("div",{className:"cell small-1"},r.a.createElement("button",{type:"button",className:"alert button",onClick:this.props.goHome},r.a.createElement("i",{className:"fi-home"}))),r.a.createElement("div",{className:"cell small-11"},r.a.createElement("div",{className:"grid-x grid-padding-x align-center-middle",style:{height:"100%"}},r.a.createElement("div",{className:"cell small-6"},r.a.createElement(b,{currentColor:a,currentColorHistory:t,setOneColorParam:this.setOneColorParam,setCurrentColor:this.setCurrentColor})),r.a.createElement("div",{className:"cell small-2"},r.a.createElement(E,{canUndo:this.canUndo(),canRedo:this.canRedo(),undo:this.undo,redo:this.redo})))))),r.a.createElement("div",{className:"cell small-10 align-center-middle"},r.a.createElement(C,{size:this.props.gridSize,beadColors:n,onClickBead:this.updateCurrentColorHistory,paint:this.paint,stopPainting:this.stopPainting})))}}]),a}(r.a.Component),O=a(11),S=(a(22),function(e){var t=e.submitSliderValue,a=r.a.useState(20),n=Object(O.a)(a,2),c=n[0],o=n[1];return r.a.createElement("div",{className:"grid-y align-center-middle",style:{height:"100%"}},r.a.createElement("div",{className:"cell small-2"},r.a.createElement("div",{className:"title"},r.a.createElement("span",{className:"letter-b"},"B"),r.a.createElement("span",{className:"letter-e"},"e"),r.a.createElement("span",{className:"letter-a"},"a"),r.a.createElement("span",{className:"letter-d"},"d"),r.a.createElement("span",{className:"letter-s"},"s"))),r.a.createElement("div",{className:"cell small-2"}),r.a.createElement("div",{className:"cell small-3"},r.a.createElement("div",{className:"grid-x grid-padding-x align-center-middle"},r.a.createElement("div",{className:"cell small-2 text-center"},r.a.createElement("div",{className:"slider-value"},r.a.createElement("span",null,c," x ",c)),r.a.createElement("input",{id:"grid-size-picker",className:"slider",type:"range",min:"5",max:"50",step:"1",value:c,onChange:function(e){o(e.target.value)}})),r.a.createElement("div",{className:"cell small-1"}),r.a.createElement("div",{className:"cell small-1"},r.a.createElement("button",{type:"button",className:"go-button",onClick:function(e){e.stopPropagation(),t(c)}},"Go!")))))}),H=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={gridSize:0},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.state.gridSize;return r.a.createElement("div",{className:"App",style:{height:"100%",width:"100%",touchAction:"none"}},t>0?r.a.createElement(N,{gridSize:t,goHome:function(){e.setState({gridSize:0})}}):r.a.createElement(S,{submitSliderValue:function(t){e.setState({gridSize:parseInt(t)})}}))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[13,1,2]]]);
//# sourceMappingURL=main.df2d7b79.chunk.js.map