(this["webpackJsonpprojet-film"]=this["webpackJsonpprojet-film"]||[]).push([[0],{134:function(e,t){},148:function(e,t){},189:function(e,t,a){e.exports=a(357)},202:function(e,t,a){},357:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"handeleDislike",(function(){return x})),a.d(n,"filterList",(function(){return C})),a.d(n,"onChangeDisplay",(function(){return S})),a.d(n,"changePage",(function(){return _}));var l={};a.r(l),a.d(l,"handleClick",(function(){return V}));var r={};a.r(r),a.d(r,"handleClickBar",(function(){return A})),a.d(r,"addList",(function(){return Q})),a.d(r,"deleteList",(function(){return W})),a.d(r,"updateList",(function(){return H}));var i=a(0),c=a.n(i),o=a(9),s=a.n(o),u=a(26),m=a(27),g=a(29),p=a(31),d=a(28),f=a(69),h=a(49),E=a(70),y=a(160),v="sideBar/add_list",b=a(53),j=[{title:"Spectre (VF)",imgUrl:"https://i.ytimg.com/vi/EDC4q5Bw2QE/movieposter.jpg",catalogue:"action"},{title:"Jason",imgUrl:"https://i.ytimg.com/vi/GRW2UMSYX4o/movieposter.jpg",catalogue:"action"},{title:"Contagion",imgUrl:"https://i.ytimg.com/vi/wMDoUFajq1I/movieposter.jpg",catalogue:"amour"},{title:"La vie",imgUrl:"https://i.ytimg.com/vi/04Cx-i2k-8M/movieposter.jpg",catalogue:"famille"},{title:"ROBO",imgUrl:"https://i.ytimg.com/vi/W4jt3Gp98jI/movieposter.jpg",catalogue:"faction"},{title:"JOKER",imgUrl:"https://i.ytimg.com/vi/UvuS3Q0yzLk/movieposter.jpg",catalogue:"horrible"},{title:"Les Miserables",imgUrl:"https://i.ytimg.com/vi/4NVTKmoQ98E/movieposter.jpg",catalogue:"action"},{title:"Inseparable",imgUrl:"https://i.ytimg.com/vi/aIVXeqgxyJA/movieposter.jpg",catalogue:"faction"},{title:"Car-Quatre roues",imgUrl:"https://i.ytimg.com/vi/_cfMFdsJytA/movieposter.jpg",catalogue:"cartoon"},{title:"Mister Babadook",imgUrl:"https://i.ytimg.com/vi/cWnER_z7pwU/movieposter.jpg",catalogue:"horrible"},{title:"La Reine de Neiges",imgUrl:"https://i.ytimg.com/vi/5rIxR2KUhEg/movieposter.jpg",catalogue:"cartoon"},{title:"Fast & Furious",imgUrl:"https://i.ytimg.com/vi/m0bGgPiCs-k/movieposter.jpg",catalogue:"action"},{title:"FAHIM",imgUrl:"https://i.ytimg.com/vi/djiIoX3O_-c/movieposter.jpg",catalogue:"famille"},{title:"Emma",imgUrl:"https://i.ytimg.com/vi/E42CvUIcjtA/movieposter.jpg",catalogue:"comedy"}],k=Object(b.fromJS)({totalList:j,dislike:[],changedList:j,chosenTag:["all"],display:"4",currentPage:1}),O=function(e,t){if(t.length>0){return t.filter((function(t){return e.indexOf(t.catalogue)<0}))}return t},L=function(e,t){var a=t.filter((function(t){return e.indexOf(t.catalogue)>=0}));return console.log("after filter"+a),a},x=function(e){return{type:"list/handle_dislike",catalogue:e}},C=function(){return{type:"list/filter_list"}},S=function(e){return{type:"list/on_change_display",displayNumber:e}},_=function(e){return{type:"list/change_page",pageNumber:e}},I=Object(y.combineReducers)({list:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"list/handle_dislike":return e.set("dislike",e.get("dislike").push(t.catalogue));case"list/filter_list":var a=O(e.get("dislike").toJS(),e.get("changedList").toJS());return e.set("changedList",Object(b.fromJS)(a));case"list/on_change_display":return e.set("display",t.displayNumber);case"list/change_page":return e.set("currentPage",t.pageNumber);case"header/handle_click":if("all"===t.item)return e.set("changedList",e.get("totalList"));var n=L([t.item],e.get("totalList").toJS());return e.set("changedList",Object(b.fromJS)(n));case v:return e.set("chosenTag",e.get("chosenTag").push(t.item));case"sideBar/delete_list":var l=e.get("chosenTag").indexOf(t.item);return e.set("chosenTag",e.get("chosenTag").splice(l,1));case"sideBar/update_list":var r=e.get("chosenTag").toJS();if(0===r.length)return console.log(1),e.set("changedList",[]);if(-1!==r.indexOf("all"))return e.set("changedList",e.get("totalList"));console.log(3);var i=L(r,e.get("totalList").toJS());return e.set("changedList",Object(b.fromJS)(i));default:return e}}}),U=a(161),w=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||E.c,B=Object(E.d)(I,w(Object(E.a)(U.a))),J=(a(202),a(72)),T=a(23),P=a(363),D=a(358),R=a(367),N=a(368),z=a(58),M=a(362),F=a(364),V=(a(134),function(e){return{type:"header/handle_click",item:e}}),q=P.a.Search,G=function(e){Object(p.a)(a,e);var t=Object(g.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props,t=e.totalList,a=e.handleClick,n=function(e){var t=["all"];return e.forEach((function(e){t.indexOf(e.catalogue)<0&&t.push(e.catalogue)})),t}(t.toJS()),l=c.a.createElement(M.a,null,n.map((function(e){return c.a.createElement(M.a.Item,{key:e,onClick:function(){a(e)}},c.a.createElement("a",{href:"#"},e))})));return c.a.createElement(J.a,{align:"middle"},c.a.createElement(T.a,{md:{span:4},xs:{span:0}},c.a.createElement(R.a,{style:{fontSize:"20px",paddingLeft:"10px"}})),c.a.createElement(T.a,{xs:{span:4},md:{span:0}},c.a.createElement(F.a,{overlay:l,trigger:["click"]},c.a.createElement("a",{className:"ant-dropdown-link",onClick:function(e){return e.preventDefault()}},c.a.createElement(R.a,{style:{fontSize:"20px",paddingLeft:"10px"}})))),c.a.createElement(T.a,{xs:{span:12},lg:{span:8}},c.a.createElement(q,{placeholder:"input search text",onSearch:function(e){return console.log(e)},enterButton:!0})),c.a.createElement(T.a,{xs:{span:4,offset:4},lg:{span:4,offset:8},xl:{span:0}},c.a.createElement(z.a,{type:"primary",style:{marginRight:"5px"}},"Login")),c.a.createElement(T.a,{xs:{span:0},xl:{span:4,offset:8}},c.a.createElement(D.a,{icon:c.a.createElement(N.a,null),style:{marginRight:"10px"}}),c.a.createElement(f.b,{to:"/login"},c.a.createElement(z.a,{type:"primary",style:{marginRight:"5px"}},"Login")),c.a.createElement(z.a,null,"Register")))}}]),a}(i.Component);var K=Object(d.b)((function(e){return{totalList:e.getIn(["list","totalList"])}}),(function(e){return{handleClick:function(t){e(l.handleClick(t))}}}))(G),X=a(369),A=(a(148),function(e){return{type:"sideBar/handle_click_bar",item:e}}),Q=function(e){return{type:v,item:e}},W=function(e){return{type:"sideBar/delete_list",item:e}},H=function(){return{type:"sideBar/update_list"}},Y=M.a.SubMenu,Z=function(e){Object(p.a)(a,e);var t=Object(g.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props,t=e.totalList,a=e.chosenTag,n=e.deleteList,l=e.addList,r=e.updateList,i=function(e){var t=["all"];return e.forEach((function(e){t.indexOf(e.catalogue)<0&&t.push(e.catalogue)})),t}(t.toJS());return c.a.createElement(M.a,{onClick:this.handleClick,style:{width:"100%"},defaultSelectedKeys:["1"],defaultOpenKeys:["sub1"],mode:"inline"},c.a.createElement(Y,{key:"sub1",title:c.a.createElement("span",null,c.a.createElement(X.a,null),c.a.createElement("span",null,"Film Catalogues"))},c.a.createElement(M.a.ItemGroup,{key:"g1",title:"Catalogues"},i.map((function(e){return a.indexOf(e)>=0?c.a.createElement(M.a.Item,{key:e},c.a.createElement("label",null,c.a.createElement("input",{type:"checkbox",name:"catalogue",value:e,checked:!0,onChange:function(){n(e),r()}}),e)):c.a.createElement(M.a.Item,{key:e},c.a.createElement("label",null,c.a.createElement("input",{type:"checkbox",name:"catalogue",value:e,onChange:function(){l(e),r()}}),e),c.a.createElement("br",null))})))))}}]),a}(i.Component);var $=Object(d.b)((function(e){return{totalList:e.getIn(["list","totalList"]),changedList:e.getIn(["list","changedList"]),chosenTag:e.getIn(["list","chosenTag"])}}),(function(e){return{handleClickBar:function(t){e(r.handleClickBar(t.item))},addList:function(t){e(r.addList(t))},deleteList:function(t){e(r.deleteList(t))},updateList:function(t){e(r.updateList(t))}}}))(Z),ee=a(360),te=a(370),ae=a(371),ne=a(129),le=a(130);function re(){var e=Object(ne.a)(["\n    font-size: 14px;\n    font-weight:bolder;\n    text-align:center;\n"]);return re=function(){return e},e}function ie(){var e=Object(ne.a)(["\n    font-size:12px;\n    font-weight:bolder;\n    text-align:center;\n"]);return ie=function(){return e},e}var ce=le.a.div(ie()),oe=le.a.div(re()),se=a(365),ue=a(361),me=function(e){Object(p.a)(a,e);var t=Object(g.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props,t=e.changePage,a=e.onChangeDisplay,n=e.display,l=e.changedList,r=e.currentPage,i=e.handeleDislike,o=e.filterList,s=e.chosenTag;return c.a.createElement("div",{className:"site-card-wrapper"},c.a.createElement(J.a,{gutter:16,justify:"center",style:{padding:"10px 0"}},c.a.createElement(T.a,{xl:{span:16,offset:8},xs:{span:22,offset:2}},c.a.createElement(se.a.Group,{onChange:function(e){t(1),a(e)},defaultValue:"a"},"4"===n?c.a.createElement(se.a.Button,{value:"4",checked:!0},"4 elements"):c.a.createElement(se.a.Button,{value:"4"},"4 elements"),"8"===n?c.a.createElement(se.a.Button,{value:"8",checked:!0},"8 elements"):c.a.createElement(se.a.Button,{value:"8"},"8 elements"),"12"===n?c.a.createElement(se.a.Button,{value:"12",checked:!0},"12 elements"):c.a.createElement(se.a.Button,{value:"12"},"12 elements")))),c.a.createElement(J.a,{gutter:16,justify:"center"},l===[]?c.a.createElement("div",null,"no data"):l.map((function(e,t){for(var a=t;a<r*n&&a>=(r-1)*n;a++)return c.a.createElement(T.a,{xl:{span:6,offset:0},lg:{span:8,offset:0},md:{span:12,offset:0},sm:{span:12,offset:0},key:e.get("title")},c.a.createElement(ee.a,{hoverable:!0,style:{width:240},cover:c.a.createElement("img",{alt:"example",src:e.get("imgUrl")})},c.a.createElement(J.a,{align:"bottom"},c.a.createElement(T.a,{span:16},c.a.createElement(oe,null,e.get("title"))),c.a.createElement(T.a,{span:8},c.a.createElement(ce,null,e.get("catalogue")))),c.a.createElement(J.a,{style:{padding:"10px 0"}},c.a.createElement(T.a,{span:12,align:"center",justify:"center"},c.a.createElement(te.a,{style:{fontSize:"23px"},onClick:function(){i(e.get("catalogue")),o()}})),c.a.createElement(T.a,{span:12,align:"center",justify:"center"},c.a.createElement(ae.a,{style:{fontSize:"23px"}})))));return null}))),c.a.createElement(J.a,{justify:"center",style:{margin:"10px 0"}},0===s.toJS().length?c.a.createElement(ue.a,{defaultCurrent:1,total:1,pageSize:1}):c.a.createElement(ue.a,{current:r,total:l.toJS().length,pageSize:n,onChange:function(e){t(e)}})))}}]),a}(i.Component);var ge=Object(d.b)((function(e){return{changedList:e.getIn(["list","changedList"]),dislike:e.getIn(["list","dislike"]),display:e.getIn(["list","display"]),currentPage:e.getIn(["list","currentPage"]),chosenTag:e.getIn(["list","chosenTag"])}}),(function(e){return{handeleDislike:function(t){e(n.handeleDislike(t))},filterList:function(){e(n.filterList())},onChangeDisplay:function(t){e(n.onChangeDisplay(t.target.value))},changePage:function(t){e(n.changePage(t))}}}))(me),pe=a(359),de=a(366),fe={labelCol:{span:8},wrapperCol:{span:8}},he={wrapperCol:{offset:8,span:8}},Ee=function(e){Object(p.a)(a,e);var t=Object(g.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return c.a.createElement(pe.a,Object.assign({},fe,{name:"basic",initialValues:{remember:!0},style:{paddingTop:"220px"}}),c.a.createElement(pe.a.Item,{label:"Username",name:"username",rules:[{required:!0,message:"Please input your username!"}]},c.a.createElement(P.a,null)),c.a.createElement(pe.a.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your password!"}]},c.a.createElement(P.a.Password,null)),c.a.createElement(pe.a.Item,Object.assign({},he,{name:"remember",valuePropName:"checked"}),c.a.createElement(de.a,null,"Remember me")),c.a.createElement(pe.a.Item,he,c.a.createElement(f.b,{to:"/"},c.a.createElement(z.a,{type:"primary",htmlType:"button"},"Submit"))))}}]),a}(i.Component),ye=Object(d.b)(null,null)(Ee),ve=function(e){Object(p.a)(a,e);var t=Object(g.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return c.a.createElement(i.Fragment,null,c.a.createElement(d.a,{store:B},c.a.createElement(f.a,null,c.a.createElement(h.a,{path:"/",exact:!0},c.a.createElement(J.a,{style:{padding:"10px 0",backgroundColor:"#fff"}},c.a.createElement(T.a,{span:24},c.a.createElement(K,null))),c.a.createElement(J.a,null,c.a.createElement(T.a,{xs:{span:0},md:{span:4}},c.a.createElement($,null)),c.a.createElement(T.a,{xs:{span:24},md:{span:20},style:{paddingLeft:"20px"}},c.a.createElement(ge,null)))),c.a.createElement(h.a,{path:"/login",exact:!0,component:ye}))))}}]),a}(i.Component);s.a.render(c.a.createElement(ve,null),document.getElementById("root"))}},[[189,1,2]]]);
//# sourceMappingURL=main.14ef0996.chunk.js.map