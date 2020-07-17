(this["webpackJsonpeverything-twitch"]=this["webpackJsonpeverything-twitch"]||[]).push([[0],{110:function(e,t,a){e.exports=a.p+"static/media/citi-field.b16487a2.jpg"},113:function(e,t,a){e.exports=a.p+"static/media/fortnite.d8436339.jpg"},120:function(e,t,a){e.exports=a(244)},125:function(e,t,a){},126:function(e,t,a){},151:function(e,t,a){},244:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(7),l=a.n(o),s=(a(125),a(33)),i=a(20),c=a(47),u=a(48),m=a(54),d=(a(126),a(110)),h=a.n(d),p=a(287),f=a(291),g=a(290),b=a(284),w=a(288),v=a(289);function y(e,t){return{command:e,description:t}}var E=[y("!date","Tells the user what today's date is"),y("!followed","Tells the user when they followed my channel"),y("!followers","Gives the count of current channel followers"),y("!following","Gives the user how long the you've been following my channel"),y("!give <username> <number>","Allows the user to give another user channel points"),y("!headset","A description of my current gaming headset"),y("!keyboard","A description of my current gaming keyboard"),y("!mouse","A description of my current gaming mouse"),y("!nextsong","Tells the user what the next song in the queue is"),y("!recentfollowers","Tells the 3 most recent followers"),y("!song","Tells user what song is currently playing"),y("!specs","Tells the user what my PC specs are"),y("!stats","Gives stats about stream: Game, title, Uptime, viewers"),y("!time","Gives the current time"),y("!top5points","Top 5 users based on channel points"),y("!top5time","Top 5 users based on hours watched"),y("!uptime","How long the current stream has been live"),y("!yeet","A sound"),y("!sr <youtube url>","Allows users to play a song on stream"),y("!songrequest <youtube url>","Allows users to play a song on stream"),y("!commands","Gives user a link to a website with all the commands listed"),y("!fk","A sound for when Mint Patty dies"),y("f","A sound for when Mint Patty dies"),y("!win","A sound for when Mint Patty wins"),y("b","A sound for when Mint Patty gets a kill"),y("!kill","A sound for when Mint Patty gets a kill")];function k(){var e=0;return r.a.createElement(b.a,null,r.a.createElement(p.a,null,r.a.createElement(w.a,null,r.a.createElement(v.a,null,r.a.createElement(g.a,null,"Command"),r.a.createElement(g.a,null,"Description"))),r.a.createElement(f.a,null,E.map((function(t){return r.a.createElement(v.a,{key:e++},r.a.createElement(g.a,null,t.command),r.a.createElement(g.a,null,t.description))})))))}var x=a(111),T=a.n(x);function M(){return r.a.createElement("div",{style:{width:"100%",marginTop:"25px"}},r.a.createElement(T.a,{url:"https://www.twitch.tv/mintpatty17",style:{margin:"auto"},controls:!0}))}var C=a(112),S=a.n(C),A=(a(151),a(113)),N=a.n(A),O=a(69),j=a.n(O),D=a(114),P=a(292),I=a(293),G=a(294),K=a(295),L=a(305),B=a(29),F=a(5),R=j.a.apiKey,W=j.a.epicNickname,$=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={error:null,isLoaded:!1,stats:null,recentMatchData:{labels:[],datasets:[{label:"Kills",backgroundColor:"rgba(0, 0, 180, 0.3)",borderColor:"rgba(0, 0, 180, 0.3)",data:[]}]}},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.retrieveFortniteTrackingInfo("profile/kbm/"+W)}},{key:"retrieveFortniteTrackingInfo",value:function(e){var t=this,a="https://cors-anywhere.herokuapp.com/https://api.fortnitetracker.com/v1/"+e,n={method:"GET",headers:{"TRN-Api-Key":R}};this.setState({isLoaded:!1,stats:null,error:null}),S.a.get(a,n).then((function(e){t.setState({isLoaded:!0,stats:e.data,recentMatchData:{datasets:[{label:"Kills",backgroundColor:"rgba(0, 0, 180, 0.3)",borderColor:"rgba(0, 0, 132, 0.3)",data:e.data.recentMatches.map((function(e){return{x:t.convertDate(e.dateCollected),y:e.kills}}))}]}})}),(function(e){t.setState({isLoaded:!1,error:e,recentMatchData:{datasets:[{label:"Kills",backgroundColor:"rgba(0, 0, 180, 0.3)",borderColor:"rgba(0, 0, 180, 0.3)",data:[]}]}})}))}},{key:"convertDate",value:function(e){e=new Date(e);var t=(new Date).getTimezoneOffset();return e.setMinutes(e.getMinutes()-t)}},{key:"render",value:function(){var e=this.props.classes,t=this.state,a=t.isLoaded,n=t.stats,o=t.recentMatchData;t.error;return r.a.createElement("div",null,r.a.createElement("header",{className:"aboutMeHeader"},"Mint Patty 17"),r.a.createElement("div",{className:"aboutMeBody"},r.a.createElement(P.a,{className:e.root},r.a.createElement(I.a,{avatar:r.a.createElement(L.a,{alt:"fortnite",src:N.a}),title:"Fortnite"}),r.a.createElement(G.a,null,r.a.createElement(D.a,{data:o,options:{title:{display:!0,text:"Recent Matches",fontSize:20},legend:{display:!0,position:"right"},scales:{xAxes:[{type:"time",time:{unit:"hour"},ticks:{source:"auto"}}]}}})),r.a.createElement(K.a,null,r.a.createElement(B.a,{variant:"body2",color:"textSecondary",component:"p"},"Total Fortnite Wins: ",a?n.lifeTimeStats[8].value:null,r.a.createElement("br",null),"Overall Fortnite K/D: ",a?n.lifeTimeStats[11].value:null)))))}}]),t}(n.Component),q=Object(F.a)((function(e){return{root:{maxWidth:690},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"}}}))($),z=a(70),H=a(6),J=a(297),U=a(298),Q=a(303),V=a(296),X=a(300),Y=a(299),Z=a(304),_=a(301),ee=a(302),te=[{text:"About Me",icon:"fi-nnsuxx-home",linkTo:"/"},{text:"Commands",icon:"fi-cnluxx-pen",linkTo:"/commands"},{text:"Stream",icon:"fi-nnsuxx-twitch-glitch",linkTo:"/stream"}],ae=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={selected:0},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"updateSelected",value:function(e,t){this.setState({selected:t})}},{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement("div",{className:t.root},r.a.createElement(V.a,null),r.a.createElement(J.a,{position:"fixed",className:t.appBar},r.a.createElement(U.a,null)),r.a.createElement(z.a,{basename:"/Everything-Twitch"},r.a.createElement(Q.a,{className:t.drawer,variant:"permanent",classes:{paper:t.drawerPaper},anchor:"left"},r.a.createElement("span",{className:"Main-name"},"Mint Patty 17"),r.a.createElement(Y.a,{className:t.dividerColor}),r.a.createElement(X.a,{disablePadding:!0},te.map((function(a,n){return r.a.createElement(Z.a,{component:z.b,to:a.linkTo,classes:{root:t.menuItemRoot,selected:t.menuItemSelected},selected:n===e.state.selected,onClick:function(t){return e.updateSelected(t,n)}},r.a.createElement(_.a,null,r.a.createElement("i",{className:a.icon,style:{color:"white"}})),r.a.createElement(ee.a,{className:"Drawer-text"},a.text))})))),r.a.createElement("main",{className:t.content},r.a.createElement("div",{className:t.toolbar}),r.a.createElement(H.a,{exact:!0,path:"/",component:q}),r.a.createElement(H.a,{path:"/commands",component:k}),r.a.createElement(H.a,{path:"/stream",component:M}))))}}]),t}(n.Component),ne=Object(F.a)((function(e){return{root:{display:"flex"},appBar:{width:"calc(100% - ".concat(240,"px)"),marginLeft:240,backgroundColor:"black",borderBottom:"1px solid white"},drawer:{width:240,flexShrink:0},drawerPaper:{width:240,backgroundImage:"url("+h.a+")"},dividerColor:{backgroundColor:"white"},toolbar:e.mixins.toolbar,content:{flexGrow:1,backgroundColor:e.palette.background.default},menuItemRoot:{"&$menuItemSelected, &$menuItemSelected:focus, &$menuItemSelected:hover":{backgroundColor:"rgb(60,60,60)"}},menuItemSelected:{}}}))(ae);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(ne,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},69:function(e,t){e.exports={apiKey:"2b19e9ac-9f31-44c5-ac10-02c6127fc63d",epicNickname:"MintPatty17.tv \u03a8"}}},[[120,1,2]]]);
//# sourceMappingURL=main.3c50cb0c.chunk.js.map