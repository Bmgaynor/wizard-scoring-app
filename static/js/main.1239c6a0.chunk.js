(this["webpackJsonpwizard-scoring-app"]=this["webpackJsonpwizard-scoring-app"]||[]).push([[0],{101:function(e,t,n){},102:function(e,t,n){},109:function(e,t,n){"use strict";n.r(t);var r,a=n(0),c=n.n(a),u=n(33),s=n.n(u),i=(n(101),n(13)),l=(n(102),n(3)),j=n(15),o=n(16);!function(e){e[e.ADD_PLAYER=0]="ADD_PLAYER",e[e.REMOVE_PLAYER=1]="REMOVE_PLAYER",e[e.ADD_PLAYER_GUESS=2]="ADD_PLAYER_GUESS",e[e.ADD_PLAYER_ACTUAL=3]="ADD_PLAYER_ACTUAL",e[e.NEW_GAME=4]="NEW_GAME"}(r||(r={}));var d={players:[]},b=Object(a.createContext)({state:d,dispatch:function(e){}});function x(e,t){switch(console.log({state:e,action:t}),t.type){case r.ADD_PLAYER:var n=t.value;return Object(o.a)(Object(o.a)({},e),{},{players:[].concat(Object(j.a)(e.players),[{name:n,rounds:{}}])});case r.REMOVE_PLAYER:var a=t.value;return Object(o.a)(Object(o.a)({},e),{},{players:e.players.splice(a+1,1)});case r.ADD_PLAYER_ACTUAL:return Object(o.a)(Object(o.a)({},e),{},{players:e.players.map((function(e,n){return n!==t.value.playerIndex?e:Object(o.a)(Object(o.a)({},e),{},{rounds:Object(o.a)(Object(o.a)({},e.rounds),{},Object(l.a)({},t.value.roundNumber,Object(o.a)(Object(o.a)({},e.rounds[t.value.roundNumber]),{},{actual:t.value.number})))})}))});case r.ADD_PLAYER_GUESS:return Object(o.a)(Object(o.a)({},e),{},{players:e.players.map((function(e,n){return n!==t.value.playerIndex?e:Object(o.a)(Object(o.a)({},e),{},{rounds:Object(o.a)(Object(o.a)({},e.rounds),{},Object(l.a)({},t.value.roundNumber,Object(o.a)(Object(o.a)({},e.rounds[t.value.roundNumber]),{},{guess:t.value.number,number:t.value.roundNumber})))})}))});case r.NEW_GAME:return{players:e.players.map((function(e){return Object(o.a)(Object(o.a)({},e),{},{rounds:{}})}))};default:throw new Error}}var O=n(168),h=n(167),m=n(163),p=n(166),v=n(169),A=n(160),y=n(157),f=n(159),E=n(1);function g(e){var t=e.roundNumber,n=e.playerIndex,c=Object(a.useContext)(b).dispatch;return Object(E.jsxs)(m.a,{children:[Object(E.jsx)(p.a,{sx:{fontSize:14},color:"text.secondary",gutterBottom:!0,children:"guess"}),Object(E.jsx)(h.a,{variant:"contained","aria-label":"Create new round",children:Array.from(Array(t+1).keys()).map((function(e,a){return a>5?Object(E.jsx)(E.Fragment,{}):Object(E.jsx)(O.a,{onClick:function(){c({type:r.ADD_PLAYER_GUESS,value:{roundNumber:t,playerIndex:n,number:e}})},children:e},e)}))}),t+1>5&&Object(E.jsxs)(v.a,{children:[Object(E.jsx)(A.a,{id:"".concat(t,"-Guess"),children:"Guess"}),Object(E.jsx)(y.a,{labelId:"".concat(t,"-Guess"),id:"".concat(t,"-Guess"),value:0,label:"Guess",onChange:function(e){return c({type:r.ADD_PLAYER_GUESS,value:{roundNumber:t,playerIndex:n,number:Number(e.target.value)}})},children:Array.from(Array(t+1).keys()).map((function(e,t){return Object(E.jsx)(f.a,{value:e,children:e},t)}))})]})]})}var _=n(173),D=n(174),C=n(175),L=n(154);function N(e){var t=e.roundNumber,n=e.playerIndex,c=e.actual,u=Object(a.useContext)(b).dispatch;return Object(E.jsxs)("div",{children:[Object(E.jsx)("div",{children:"Actual"}),Object(E.jsx)(h.a,{variant:"contained","aria-label":"Add Actual score",children:Array.from(Array(t+1).keys()).map((function(e,a){return a>5?Object(E.jsx)(E.Fragment,{}):Object(E.jsx)(O.a,{onClick:function(){u({type:r.ADD_PLAYER_ACTUAL,value:{roundNumber:t,playerIndex:n,number:e}})},disabled:e===c,children:e},e)}))}),t+1>5&&Object(E.jsxs)(v.a,{children:[Object(E.jsx)(A.a,{id:"".concat(t,"-Actual"),children:"Actual"}),Object(E.jsx)(y.a,{labelId:"".concat(t,"-Actual"),id:"".concat(t,"-Actual"),value:c||0,label:"Actual",onChange:function(e){return u({type:r.ADD_PLAYER_ACTUAL,value:{roundNumber:t,playerIndex:n,number:Number(e.target.value)}})},children:Array.from(Array(t+1).keys()).map((function(e,t){return Object(E.jsx)(f.a,{value:e,children:e},t)}))})]})]})}function P(e){var t=e.player,n=e.index,r=Object.keys(t.rounds).length,a=t.rounds[r],u=0===r,s=Number.isInteger(null===a||void 0===a?void 0:a.actual)||u,i=!u&&!s;return Object(E.jsx)(m.a,{item:!0,xs:12,children:Object(E.jsx)(L.a,{sx:{minWidth:275},children:Object(E.jsx)(_.a,{variant:"outlined",children:Object(E.jsxs)(c.a.Fragment,{children:[Object(E.jsxs)(D.a,{children:[Object(E.jsx)(p.a,{sx:{fontSize:14},color:"text.secondary",gutterBottom:!0,children:"player"}),Object(E.jsx)(p.a,{variant:"h5",component:"div",children:t.name})]}),Object(E.jsxs)(C.a,{children:[s&&Object(E.jsx)(g,{playerIndex:n,roundNumber:r+1}),i&&Object(E.jsx)(N,{playerIndex:n,roundNumber:r,actual:null===a||void 0===a?void 0:a.actual})]})]})})})})}function R(){var e=c.a.useContext(b).state;return Object(E.jsxs)("div",{children:[Object(E.jsx)(p.a,{variant:"h4",component:"div",children:"Players"}),Object(E.jsx)(m.a,{container:!0,children:e.players.map((function(e,t){return Object(E.jsx)(P,{index:t,player:e},t)}))})]})}var I=n(82),S=n.n(I),Y=n(177),G=n(161),k=n(176);function U(){var e=c.a.useState(""),t=Object(i.a)(e,2),n=t[0],u=t[1],s=Object(a.useContext)(b).dispatch;return Object(E.jsx)(_.a,{children:Object(E.jsxs)("form",{onSubmit:function(e){e.preventDefault(),s({type:r.ADD_PLAYER,value:n}),u("")},children:[Object(E.jsx)(D.a,{children:Object(E.jsx)(G.a,{id:"newPlayerName",label:"Add Player",variant:"outlined",value:n,onChange:function(e){return u(e.target.value)}})}),Object(E.jsx)(k.a,{children:Object(E.jsx)(Y.a,{type:"submit",children:Object(E.jsx)(S.a,{})})})]})})}function w(e){return"number"!==typeof e.actual||"number"!==typeof e.guess?0:e.guess===e.actual?20+10*e.guess:-10*Math.abs(e.guess-e.actual)}function M(e){var t,n=e.player;return Object(E.jsxs)("li",{children:[Object(E.jsx)("div",{children:n.name}),Object(E.jsxs)("div",{children:["Score: ",(t=n.rounds,Object.values(t).reduce((function(e,t){return e+w(t)}),0))]})]})}function W(){var e=c.a.useContext(b).state;return Object(E.jsxs)("ul",{children:[Object(E.jsx)("div",{children:"Scores"}),e.players.map((function(e,t){return Object(E.jsx)(M,{player:e},t)}))]})}function T(){var e=Object(a.useContext)(b).dispatch;return Object(E.jsx)(O.a,{onClick:function(){e({type:r.NEW_GAME,value:{}})},children:"New Game"})}var F=n(155),B=n(156),z=n(165);function V(e){var t=e.round,n=e.playerIndex,c=Object(a.useContext)(b).dispatch;return Object(E.jsx)(m.a,{item:!0,xs:4,children:Object(E.jsx)(_.a,{children:Object(E.jsxs)(D.a,{children:[Object(E.jsxs)(p.a,{variant:"h6",component:"div",children:["Round ",t.number," (",w(t),")"]}),Object(E.jsxs)(v.a,{fullWidth:!0,children:[Object(E.jsx)(A.a,{id:"".concat(t.number,"-guess"),children:"Guess"}),Object(E.jsx)(y.a,{labelId:"".concat(t.number,"-guess"),id:"".concat(t.number,"-guess"),value:t.guess,label:"Guess",onChange:function(e){return c({type:r.ADD_PLAYER_GUESS,value:{roundNumber:t.number,playerIndex:n,number:Number(e.target.value)}})},children:Array.from(Array(t.number+1).keys()).map((function(e,t){return Object(E.jsx)(f.a,{value:e,children:e},t)}))})]}),Object(E.jsxs)(v.a,{fullWidth:!0,children:[Object(E.jsx)(A.a,{id:"".concat(t.number,"-Actual"),children:"Actual"}),Object(E.jsx)(y.a,{labelId:"".concat(t.number,"-Actual"),id:"".concat(t.number,"-Actual"),value:t.actual||0,label:"Actual",onChange:function(e){return c({type:r.ADD_PLAYER_ACTUAL,value:{roundNumber:t.number,playerIndex:n,number:Number(e.target.value)}})},children:Array.from(Array(t.number+1).keys()).map((function(e,t){return Object(E.jsx)(f.a,{value:e,children:e},t)}))})]})]})})})}function H(e){var t=e.rounds,n=e.playerIndex;return Object(E.jsx)(m.a,{container:!0,children:Object.values(t).map((function(e,t){return Object(E.jsx)(V,{round:e,playerIndex:n},t)}))})}var J=n(83),q=n.n(J);function K(){var e=c.a.useContext(b).state,t=c.a.useContext(b).dispatch;return Object(E.jsxs)("div",{children:[Object(E.jsx)("div",{children:"History"}),Object(E.jsx)(m.a,{container:!0,children:e.players.map((function(e,n){return Object(E.jsxs)(m.a,{item:!0,xs:12,children:[Object(E.jsxs)(p.a,{variant:"h5",children:[e.name," ",Object(E.jsx)(Y.a,{onClick:function(){t({type:r.REMOVE_PLAYER,value:n})},children:Object(E.jsx)(q.a,{})})]}),Object(E.jsx)(H,{playerIndex:n,rounds:e.rounds},n)]},n)}))})]})}var Q=n(178),X=n(179),Z=n(84);var $=function(){var e=Object(Z.a)("store",d),t=Object(i.a)(e,2),n=t[0],r=t[1],a=c.a.useReducer(x,n),u=Object(i.a)(a,2),s=u[0],l=u[1];return c.a.useEffect((function(){r(s)}),[s,r]),Object(E.jsx)(b.Provider,{value:{state:s,dispatch:l},children:Object(E.jsxs)(c.a.Fragment,{children:[Object(E.jsx)(F.a,{}),Object(E.jsx)(Q.a,{position:"absolute",color:"transparent",elevation:0,sx:{position:"relative",borderBottom:function(e){return"1px solid ".concat(e.palette.divider)}},children:Object(E.jsx)(X.a,{children:Object(E.jsx)(p.a,{variant:"h6",color:"inherit",noWrap:!0,children:"Wizard Scoring App"})})}),Object(E.jsx)(z.a,{maxWidth:"lg",children:Object(E.jsx)(B.a,{sx:{bgcolor:"white",minHeight:"100vh",paddingTop:"1rem",paddingBottom:"1rem"},children:Object(E.jsxs)(m.a,{container:!0,children:[Object(E.jsxs)(m.a,{item:!0,xs:12,md:2,children:[Object(E.jsx)(U,{}),Object(E.jsx)(T,{}),Object(E.jsx)(W,{})]}),Object(E.jsxs)(m.a,{item:!0,xs:12,md:8,children:[Object(E.jsx)(R,{}),Object(E.jsx)(K,{})]})]})})})]})})},ee=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,180)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,u=t.getTTFB;n(e),r(e),a(e),c(e),u(e)}))};s.a.render(Object(E.jsx)(c.a.StrictMode,{children:Object(E.jsx)($,{})}),document.getElementById("root")),ee()}},[[109,1,2]]]);
//# sourceMappingURL=main.1239c6a0.chunk.js.map