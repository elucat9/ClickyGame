(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,a,t){e.exports=t(16)},16:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(4),o=t.n(r),i=t(5),l=t(6),s=t(8),u=t(7),m=t(9),k=t(1),d=(t(2),function(e){var a=e.source;return c.a.createElement("img",{src:"./images/".concat(a),alt:"Luka",className:"lukas"})}),g=["TakoLuka.jpg","TakoLuka1.jpg","TakoLuka2.jpg","TakoLuka3.jpg","TakoLuka4.jpg","TakoLuka5.jpg","TakoLuka6.jpg","TakoLuka7.jpg","TakoLuka8.jpg"];var p=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(s.a)(this,Object(u.a)(a).call(this,e))).state={score:9,images:!1},t.updateState=t.updateState.bind(Object(k.a)(Object(k.a)(t))),t}return Object(m.a)(a,e),Object(l.a)(a,[{key:"updateState",value:function(){this.setState({score:this.state.score-1}),this.setState({images:!0}),console.log(this.state.images),function(e){for(var a=e.length-1;a>0;a--){var t=Math.floor(Math.random()*(a+1)),n=[e[t],e[a]];e[a]=n[0],e[t]=n[1]}}(g)}},{key:"handleWinGame",value:function(){this.state={score:0},alert("Congratulations! You win!")}},{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement("p",{className:"header"},"Clicky ",c.a.createElement("div",{className:"score"}," ",this.state.score)),c.a.createElement("div",{className:"grid-container"},g.map(function(a){return c.a.createElement("div",{onClick:e.updateState},c.a.createElement(d,{source:a,key:a}," ",e.state.images," "))})))}}]),a}(c.a.Component);var h=function(){return c.a.createElement("div",{className:"Description"},c.a.createElement("h4",null,"Click on an image. Click on a different image. BUT do not click on the same image twice! Can you click on all nine only once?"))};var v=function(){return c.a.createElement("div",null,c.a.createElement(p,null),c.a.createElement(h,null),c.a.createElement(d,null))};o.a.render(c.a.createElement(v,null),document.getElementById("root"))},2:function(e,a,t){}},[[10,1,2]]]);
//# sourceMappingURL=main.7e959e69.chunk.js.map