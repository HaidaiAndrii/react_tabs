(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{13:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),c=a(7),l=a.n(c),o=a(1),s=a(2),u=a(4),b=a(3),i=(a(6),function(t){Object(u.a)(a,t);var e=Object(b.a)(a);function a(){var t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={tabId:0},t.selectTab=function(e){t.setState({tabId:+e.target.value})},t}return Object(s.a)(a,[{key:"render",value:function(){var t=this,e=this.props.tabs,a=this.state.tabId;return r.a.createElement("div",null,e.map((function(e,n){return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{type:"button",onClick:t.selectTab,value:n,className:n===a?"selected btn":"btn"},e.title))})),r.a.createElement("p",{className:"text"},e[a].content))}}]),a}(r.a.Component)),m=[{title:"Tab 1",content:"Some text 1"},{title:"Tab 2",content:"Some text 2"},{title:"Tab 3",content:"Some text 3"}],p=function(t){Object(u.a)(a,t);var e=Object(b.a)(a);function a(){var t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={},t}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"React tabs"),r.a.createElement(i,{tabs:m}))}}]),a}(r.a.Component);l.a.render(r.a.createElement(p,null),document.getElementById("root"))},6:function(t,e,a){},8:function(t,e,a){t.exports=a(13)}},[[8,1,2]]]);
//# sourceMappingURL=main.3a85cbbb.chunk.js.map