(self.webpackChunkflashscore=self.webpackChunkflashscore||[]).push([[4500],{77699:(e,t,n)=>{"use strict";var a=n(67294),r=n(73935);function s({participant:e,handler:t,title:n,tooltip:r}){const s="team"==e.getLogoPath()?"empty-logo-team-small.png":"data/"+e.getLogoPath(),o=["men","women"].includes(e.getLogoPath()),l={backgroundImage:`url(/res/image/${s})`};return a.createElement("li",{title:e.getTitle()},a.createElement("span",{className:"toggleMyTeam active "+e.getKey(),title:n,onClick:n=>{t(e.getKey()),n.stopPropagation(),r.hide(n.target,n)},onMouseEnter:e=>{r.show(e.target,e)},onMouseLeave:e=>{r.hide(e.target,e)}}),a.createElement("a",{href:e.getUrl()},o?a.createElement("span",{className:"flag fl_"+e.getCountryId()}):a.createElement("span",{style:l,className:"team-logo"}),e.getName()))}const o={myTeamsMenuSport:"myTeamsMenuSport___3zmH-tk",myTeamsMenuSportIcon:"myTeamsMenuSportIcon___2VZ403Z"};function l({originName:e,title:t}){return a.createElement("div",{key:e,className:[o.myTeamsMenuSport,"sportHeader",e].join(" ")},a.createElement("div",{className:[o.myTeamsMenuSportIcon,"sportIcon","sportIcon--"+e].join(" ")}),a.createElement("span",null,t))}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,s=void 0;try{for(var o,l=e[Symbol.iterator]();!(a=(o=l.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(e){r=!0,s=e}finally{try{a||null==l.return||l.return()}finally{if(r)throw s}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function m({myTeams:e,translator:t,sportId:n,reload:r,isMyFs:o,tooltip:c}){const m=i((0,a.useState)(e.getParticipants(n)),2),u=m[0],p=m[1],g=i((0,a.useState)(!1),2),y=g[0],d=g[1],f=o?e.getParticipantsBySports():[],h=t=>{e.toggle(t),p(e.getParticipants(n))};r.refresh=(t=!1)=>{d(t),p(e.getParticipants(n))};const E={__html:t.translate("TRANS_MY_TEAMS_LEFT_MENU_TEXT").replace("[*]",'<span class="toggleMyTeam--text toggleMyTeam"></span>')};return a.createElement("ul",{className:"menu country-list my-teams"},a.createElement("li",{className:"head"},a.createElement("span",{className:"toggleMyTeam sportIcon sportIcon--soccer"}),a.createElement("span",{className:"head__title"},t.translate("TRANS_MY_TEAMS_LABEL"))),y?a.createElement("li",null,a.createElement("div",{className:"menu_loading"}," ")):a.createElement("ul",{id:"my-teams-list",className:"menu"},o?f.length?f.map((e=>{const n=e.getParticipants();return a.createElement(a.Fragment,{key:e.getId()},a.createElement(l,{key:e.getId(),originName:e.getOriginName(),title:e.getName()}),n.length?n.map((e=>a.createElement(s,{key:e.getKey(),participant:e,handler:h,title:t.translate("TRANS_MY_TEAMS_REMOVE"),tooltip:c}))):"")})):a.createElement("li",{className:"last myTeamInfo",dangerouslySetInnerHTML:E}):u.length?u.map((e=>a.createElement(s,{key:e.getKey(),participant:e,handler:h,title:t.translate("TRANS_MY_TEAMS_REMOVE"),tooltip:c}))):a.createElement("li",{className:"last myTeamInfo",dangerouslySetInnerHTML:E})))}var u=n(50415);const p=new class{constructor(e,t){this.trans=new u.d(e),this.tooltip=t}getTrans(){return this.trans}getTooltip(){return this.tooltip}}(window.leftMenuEnvironment&&window.leftMenuEnvironment.trans||{},cjs.dic.get("utilEnviroment").getTooltipObject()),g=p.getTrans(),y=p.getTooltip(),d=parseInt(window.sport_id||0),f=document.getElementById("my-teams-left-menu"),h=Boolean(f&&f.dataset.myfs);f&&cjs.Api.loader.get("xMyTeamsInstance").call((e=>{const t=a.createElement(m,{myTeams:e,translator:g,sportId:d,reload:{refresh:()=>{}},isMyFs:h,tooltip:y});window.componentRefresh.myTeamsMenu=t.props.reload,r.render(t,f)}))},50415:(e,t,n)=>{"use strict";n.d(t,{d:()=>a});class a{constructor(e){this.translates=e}translate(e,t=[]){let n=e;if(e in this.translates&&(n=this.translates[e],t&&t.length>0))for(const e of t)n=n.replace(/%s/,e);return n}}}},0,[[77699,3666,1216]]]);