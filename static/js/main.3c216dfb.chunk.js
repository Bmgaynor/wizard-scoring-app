(this["webpackJsonpwizard-scoring-app"]=this["webpackJsonpwizard-scoring-app"]||[]).push([[0],{102:function(e,t,n){"use strict";n.r(t);var r,a=n(0),c=n.n(a),s=n(29),u=n.n(s),i=(n(94),n(13)),j=(n(95),n(4)),o=n(14),d=n(16);!function(e){e[e.ADD_PLAYER=0]="ADD_PLAYER",e[e.REMOVE_PLAYER=1]="REMOVE_PLAYER",e[e.ADD_PLAYER_GUESS=2]="ADD_PLAYER_GUESS",e[e.ADD_PLAYER_ACTUAL=3]="ADD_PLAYER_ACTUAL",e[e.NEW_GAME=4]="NEW_GAME"}(r||(r={}));var l={players:[]},b=Object(a.createContext)({state:l,dispatch:function(e){}});function O(e,t){switch(console.log({state:e,action:t}),t.type){case r.ADD_PLAYER:var n=t.value;return Object(d.a)(Object(d.a)({},e),{},{players:[].concat(Object(o.a)(e.players),[{name:n,rounds:{}}])});case r.REMOVE_PLAYER:var a=t.value;return Object(d.a)(Object(d.a)({},e),{},{players:e.players.splice(a+1,1)});case r.ADD_PLAYER_ACTUAL:return Object(d.a)(Object(d.a)({},e),{},{players:e.players.map((function(e,n){return n!==t.value.playerIndex?e:Object(d.a)(Object(d.a)({},e),{},{rounds:Object(d.a)(Object(d.a)({},e.rounds),{},Object(j.a)({},t.value.roundNumber,Object(d.a)(Object(d.a)({},e.rounds[t.value.roundNumber]),{},{actual:t.value.number})))})}))});case r.ADD_PLAYER_GUESS:return Object(d.a)(Object(d.a)({},e),{},{players:e.players.map((function(e,n){return n!==t.value.playerIndex?e:Object(d.a)(Object(d.a)({},e),{},{rounds:Object(d.a)(Object(d.a)({},e.rounds),{},Object(j.a)({},t.value.roundNumber,Object(d.a)(Object(d.a)({},e.rounds[t.value.roundNumber]),{},{guess:t.value.number,number:t.value.roundNumber})))})}))});case r.NEW_GAME:return{players:e.players.map((function(e){return Object(d.a)(Object(d.a)({},e),{},{rounds:{}})}))};default:throw new Error}}var x=n(153),p=n(152),h=n(151),v=n(2);function m(e){var t=e.roundNumber,n=e.playerIndex,c=Object(a.useContext)(b).dispatch;return Object(v.jsxs)("div",{children:[Object(v.jsx)(h.a,{sx:{fontSize:14},color:"text.secondary",gutterBottom:!0,children:"guess"}),Object(v.jsx)(p.a,{variant:"contained","aria-label":"Create new round",children:Array.from(Array(t+1).keys()).map((function(e,a){return Object(v.jsx)(x.a,{onClick:function(){c({type:r.ADD_PLAYER_GUESS,value:{roundNumber:t,playerIndex:n,number:e}})},children:e},e)}))})]})}var y=n(75),A=n.n(y),f=n(158),E=n(149),g=n(154),_=n(156),D=n(157);function C(e){var t=e.roundNumber,n=e.playerIndex,c=e.actual,s=Object(a.useContext)(b).dispatch;return Object(v.jsxs)("div",{children:[Object(v.jsx)("div",{children:"Actual"}),Object(v.jsx)(p.a,{variant:"contained","aria-label":"Add Actual score",children:Array.from(Array(t+1).keys()).map((function(e,a){return Object(v.jsx)(x.a,{onClick:function(){s({type:r.ADD_PLAYER_ACTUAL,value:{roundNumber:t,playerIndex:n,number:e}})},disabled:e===c,children:e},e)}))})]})}function L(e){var t=e.round,n=e.playerIndex;return Object(v.jsxs)(E.a,{item:!0,xs:4,children:[Object(v.jsxs)("div",{children:["Round: ",t.number]}),Object(v.jsxs)("div",{children:["Guess: ",t.guess]}),Number.isInteger(null===t||void 0===t?void 0:t.actual)?Object(v.jsxs)("div",{children:["Actual: ",t.actual]}):Object(v.jsx)(C,{roundNumber:t.number,playerIndex:n,actual:t.actual})]})}var P=n(142);function R(e){var t=e.player,n=e.index,a=c.a.useContext(b).dispatch,s=Object.keys(t.rounds).length,u=t.rounds[s],i=0===s,j=Number.isInteger(null===u||void 0===u?void 0:u.actual)||i,o=!i&&!j;return Object(v.jsx)(E.a,{item:!0,xs:12,children:Object(v.jsx)(P.a,{sx:{minWidth:275},children:Object(v.jsx)(g.a,{variant:"outlined",children:Object(v.jsxs)(c.a.Fragment,{children:[Object(v.jsxs)(_.a,{children:[Object(v.jsx)(h.a,{sx:{fontSize:14},color:"text.secondary",gutterBottom:!0,children:"player"}),Object(v.jsx)(h.a,{variant:"h5",component:"div",children:t.name})]}),Object(v.jsxs)(D.a,{children:[j&&Object(v.jsx)(m,{playerIndex:n,roundNumber:s+1}),o&&Object(v.jsx)(L,{round:t.rounds[s],playerIndex:n}),Object(v.jsx)(f.a,{onClick:function(){a({type:r.REMOVE_PLAYER,value:n})},children:Object(v.jsx)(A.a,{})})]})]})})})})}function N(){var e=c.a.useContext(b).state;return Object(v.jsxs)("div",{children:[Object(v.jsx)(h.a,{variant:"h4",component:"div",children:"Players"}),Object(v.jsx)(E.a,{container:!0,children:e.players.map((function(e,t){return Object(v.jsx)(R,{index:t,player:e},t)}))})]})}var I=n(76),S=n.n(I),Y=n(146),w=n(159);function G(){var e=c.a.useState(""),t=Object(i.a)(e,2),n=t[0],s=t[1],u=Object(a.useContext)(b).dispatch;return Object(v.jsx)(g.a,{children:Object(v.jsxs)("form",{onSubmit:function(e){e.preventDefault(),u({type:r.ADD_PLAYER,value:n}),s("")},children:[Object(v.jsx)(_.a,{children:Object(v.jsx)(Y.a,{id:"newPlayerName",label:"Add Player",variant:"outlined",value:n,onChange:function(e){return s(e.target.value)}})}),Object(v.jsx)(w.a,{children:Object(v.jsx)(f.a,{type:"submit",children:Object(v.jsx)(S.a,{})})})]})})}function M(e){return Object.values(e).reduce((function(e,t){return e+function(e){return"number"!==typeof e.actual||"number"!==typeof e.guess?0:e.guess===e.actual?20+10*e.guess:-10*Math.abs(e.guess-e.actual)}(t)}),0)}function k(e){var t=e.player;return Object(v.jsxs)("li",{children:[Object(v.jsx)("div",{children:t.name}),Object(v.jsxs)("div",{children:["Score: ",M(t.rounds)]})]})}function U(){var e=c.a.useContext(b).state;return Object(v.jsxs)("ul",{children:[Object(v.jsx)("div",{children:"Scores"}),e.players.map((function(e,t){return Object(v.jsx)(k,{player:e},t)}))]})}function W(){var e=Object(a.useContext)(b).dispatch;return Object(v.jsx)(x.a,{onClick:function(){e({type:r.NEW_GAME,value:{}})},children:"New Game"})}var T=n(144),B=n(145),F=n(150);function z(e){var t=e.rounds,n=e.playerIndex;return Object(v.jsx)(E.a,{container:!0,children:Object.values(t).map((function(e,t){return Object(v.jsx)(L,{round:e,playerIndex:n},t)}))})}function V(){var e=c.a.useContext(b).state;return Object(v.jsxs)("div",{children:[Object(v.jsx)("div",{children:"History"}),Object(v.jsx)(E.a,{container:!0,children:e.players.map((function(e,t){return Object(v.jsxs)(E.a,{item:!0,xs:12,children:[Object(v.jsx)("div",{children:e.name}),Object(v.jsx)(z,{playerIndex:t,rounds:e.rounds},t)]})}))})]})}var H=n(160),J=n(161);var q=function(){var e=c.a.useReducer(O,l),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(v.jsx)(b.Provider,{value:{state:n,dispatch:r},children:Object(v.jsxs)(c.a.Fragment,{children:[Object(v.jsx)(T.a,{}),Object(v.jsx)(H.a,{position:"absolute",color:"transparent",elevation:0,sx:{position:"relative",borderBottom:function(e){return"1px solid ".concat(e.palette.divider)}},children:Object(v.jsx)(J.a,{children:Object(v.jsx)(h.a,{variant:"h6",color:"inherit",noWrap:!0,children:"Wizard Scoring App"})})}),Object(v.jsx)(F.a,{maxWidth:"lg",children:Object(v.jsx)(B.a,{sx:{bgcolor:"white",minHeight:"100vh",paddingTop:"1rem",paddingBottom:"1rem"},children:Object(v.jsxs)(E.a,{container:!0,children:[Object(v.jsxs)(E.a,{item:!0,xs:12,md:2,children:[Object(v.jsx)(G,{}),Object(v.jsx)(W,{}),Object(v.jsx)(U,{})]}),Object(v.jsxs)(E.a,{item:!0,xs:12,md:8,children:[Object(v.jsx)(N,{}),Object(v.jsx)(V,{})]})]})})})]})})},K=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,162)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};u.a.render(Object(v.jsx)(c.a.StrictMode,{children:Object(v.jsx)(q,{})}),document.getElementById("root")),K()},94:function(e,t,n){},95:function(e,t,n){}},[[102,1,2]]]);
//# sourceMappingURL=main.3c216dfb.chunk.js.map