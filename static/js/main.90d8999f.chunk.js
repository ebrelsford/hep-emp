(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{168:function(e,t,a){e.exports=a.p+"static/media/programs.dd3eaab0.csv"},169:function(e,t,a){e.exports=a.p+"static/media/about-data.f5674aaf.md"},170:function(e,t,a){e.exports=a.p+"static/media/about-plan.3296b9e7.md"},171:function(e,t,a){e.exports=a.p+"static/media/about-program.561abcd9.md"},172:function(e,t,a){e.exports=a.p+"static/media/about-this-map.49bbb5c9.md"},173:function(e,t,a){e.exports=a.p+"static/media/acknowledgements.5d2749e6.md"},174:function(e,t,a){e.exports=a.p+"static/media/how-to-use.9e6f76a5.md"},179:function(e,t,a){e.exports=a.p+"static/media/community-engagement-active.dcef4170.svg"},180:function(e,t,a){e.exports=a.p+"static/media/community-engagement-inactive.b5f1047b.svg"},181:function(e,t,a){e.exports=a.p+"static/media/habitat-active.24e0cfb2.svg"},182:function(e,t,a){e.exports=a.p+"static/media/habitat-inactive.a8f97c48.svg"},183:function(e,t,a){e.exports=a.p+"static/media/port-maritime-active.77c99036.svg"},184:function(e,t,a){e.exports=a.p+"static/media/port-maritime-inactive.dd9be98a.svg"},185:function(e,t,a){e.exports=a.p+"static/media/public-access-active.39246f2f.svg"},186:function(e,t,a){e.exports=a.p+"static/media/public-access-inactive.1e8d0962.svg"},187:function(e,t,a){e.exports=a.p+"static/media/water-quality-active.c39ba3ed.svg"},188:function(e,t,a){e.exports=a.p+"static/media/water-quality-inactive.dd7114a8.svg"},194:function(e,t,a){e.exports=a.p+"static/media/logo-hep.e3bcad89.svg"},195:function(e,t,a){e.exports=a.p+"static/media/logo-hrf.36a90dd3.svg"},199:function(e,t,a){e.exports=a(515)},374:function(e,t,a){},376:function(e,t,a){},457:function(e,t,a){},486:function(e,t,a){},488:function(e,t,a){},490:function(e,t,a){},500:function(e,t,a){},502:function(e,t,a){},511:function(e,t,a){},513:function(e,t,a){},515:function(e,t,a){"use strict";a.r(t);a(200),a(366);var n=a(0),o=a.n(n),r=a(43),i=a.n(r),l=a(20),c=a(53),s=a(167),u=(a(374),a(9)),m=a(10),p=a(12),f=a(11),d=a(13),b=(a(376),a(197)),v=a(168),g=a.n(v),h=a(169),E=a.n(h),O=a(170),y=a.n(O),j=a(171),N=a.n(j),S=a(172),P=a.n(S),M=a(173),C=a.n(M),F=a(174),k=a.n(F),w=[{name:"aboutThisMap",url:P.a},{name:"howToUse",url:k.a},{name:"aboutData",url:E.a},{name:"aboutPlan",url:y.a},{name:"aboutProgram",url:N.a},{name:"acknowledgements",url:C.a}],x=function(e){return{type:"SHOW_ABOUT_MODAL_TAB",index:e}},A=function(){return{type:"REQUEST_PROGRAMS"}},I=function(e){return{type:"RECEIVE_PROGRAMS",csv:e}};var T=function(){return{type:"REQUEST_CONTENT"}},_=function(e){return{type:"RECEIVE_CONTENT",content:e}};var R=a(175),L=a.n(R),D=a(116),V=a(54),H=a.n(V),z=a(19),U=(a(457),function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentWillReceiveProps",value:function(e){if("Escape"===e.keyValue&&this.props.hideAboutModal(),e.tabScrollSection){var t=document.querySelector("#".concat(e.tabScrollSection));t&&t.scrollIntoView()}}},{key:"render",value:function(){var e=this.props,t=e.content,a=e.hideAboutModal,n=e.showAboutModalTab,r=e.tabIndex;return o.a.createElement(L.a,{handle:".AboutModal-header"},o.a.createElement("div",{className:"AboutModal"},o.a.createElement("button",{className:"AboutModal-close",onClick:a},"\xd7"),o.a.createElement("div",{className:"AboutModal-header"},o.a.createElement("h2",null,"The Environmental Monitoring Plan Map")),o.a.createElement("div",{className:"AboutModal-body"},o.a.createElement(z.d,{onSelect:function(e){return n(e)},selectedIndex:r},o.a.createElement(z.b,null,o.a.createElement(z.a,null,"About this Map"),o.a.createElement(z.a,null,"How to Use the Map"),o.a.createElement(z.a,null,"About the Data"),o.a.createElement(z.a,null,"About the Environmental Monitoring Plan"),o.a.createElement(z.a,null,"About the Harbor Estuary Program"),o.a.createElement(z.a,null,"Credits")),o.a.createElement(z.c,null,o.a.createElement(H.a,{escapeHtml:!1,source:t.content.aboutThisMap})),o.a.createElement(z.c,null,o.a.createElement(H.a,{escapeHtml:!1,source:t.content.howToUse})),o.a.createElement(z.c,null,o.a.createElement(H.a,{escapeHtml:!1,source:t.content.aboutData})),o.a.createElement(z.c,null,o.a.createElement(H.a,{escapeHtml:!1,source:t.content.aboutPlan})),o.a.createElement(z.c,null,o.a.createElement(H.a,{escapeHtml:!1,source:t.content.aboutProgram})),o.a.createElement(z.c,null,o.a.createElement(H.a,{escapeHtml:!1,source:t.content.acknowledgements}))))))}}]),t}(n.Component)),G=Object(D.b)({keyEventName:D.a,keyValue:"Escape"})(U),B=Object(l.b)(function(e){return{content:e.content,tabIndex:e.aboutModal.tabIndex,tabScrollSection:e.aboutModal.tabScrollSection,visible:e.aboutModal.visible}},function(e){return{hideAboutModal:function(){return e({type:"HIDE_ABOUT_MODAL"})},showAboutModalTab:function(t){return e(x(t))}}})(G),q=a(44),W=a(118),Q=a.n(W),J=a(18),Y=a.n(J),Z=a(176),K=a.n(Z),X=a(177),$=a.n(X),ee=a(178),te=a.n(ee),ae=a(65),ne=a.n(ae),oe=a(179),re=a.n(oe),ie=a(180),le=a.n(ie),ce=a(181),se=a.n(ce),ue=a(182),me=a.n(ue),pe=a(183),fe=a.n(pe),de=a(184),be=a.n(de),ve=a(185),ge=a.n(ve),he=a(186),Ee=a.n(he),Oe=a(187),ye=a.n(Oe),je=a(188),Ne=a.n(je),Se="pk.eyJ1IjoiaHVkc29ucmYiLCJhIjoiY2ptcWsybmN0MXF5azN2bWw0emxvdmI2aSJ9.lFisgR_vLsqNOMgusrDIhA",Pe={monitoringLines:{name:"monitoring-lines",defaultFilter:["all"],goalStyleFields:["line-color"]},monitoringPointsActive:{name:"monitoring-points-active",defaultFilter:["all",["in","Legend","Active"]],goalStyleFields:["circle-color","circle-stroke-color"]},monitoringPointsNonActive:{name:"monitoring-points-non-active",defaultFilter:["all",["in","Legend","Historic/Nonactive"]],goalStyleFields:["circle-stroke-color"]},monitoringPointsContinuous:{name:"monitoring-points-continuous",defaultFilter:["all",["in","Legend","Continuous"]],goalStyleFields:[]},monitoringPolygons:{name:"monitoring-polygons",defaultFilter:["all"],goalStyleFields:["fill-color"]}},Me="mapbox://styles/hudsonrf/cjms1gyqra6172smzt8x1mfg3",Ce={center:[-73.85,41.13],featureColor:"#817a6a",maxBounds:[[-75.992432,39.774769],[-71.488037,42.932296]],maxZoom:12,minZoom:7,zoom:[8]},Fe=[{name:"Water Quality",featureColor:"#0072B5",filterValue:"Water Quality",activeIcon:ye.a,inactiveIcon:Ne.a,continuousMapIcon:"square-water-quality",tooltip:"Reduce the sources of pollution so that the waters of the Harbor Estuary will meet the fishable/swimmable goal of the Clean Water Act."},{name:"Habitat and Ecological Health",featureColor:"#5CAA46",filterValue:"Habitat and Ecological Health",activeIcon:se.a,inactiveIcon:me.a,continuousMapIcon:"square-habitat",tooltip:"Protect and restore the vital habitat, ecological function, and biodiversity that provide society with renewed and increased benefits."},{name:"Port and Maritime",featureColor:"#893684",filterValue:"Port and Maritime",activeIcon:fe.a,inactiveIcon:be.a,continuousMapIcon:"square-port-maritime",tooltip:"Support port and associated maritime operations so that they are both economically and ecologically viable."},{name:"Public Access",featureColor:"#7E4B31",filterValue:"Public Access and Stewardship",activeIcon:ge.a,inactiveIcon:Ee.a,continuousMapIcon:"square-public-access",tooltip:"Improve public access to the waters of the Estuary and the quality of experience at public spaces along the waterfront."},{name:"Community Engagement",featureColor:"#ED861D",filterValue:"Community Engagement",activeIcon:re.a,inactiveIcon:le.a,continuousMapIcon:"square-community-engagement",tooltip:"Foster community stewardship and involvement in decisions about the Harbor Estuary."}],ke=[{label:"Active",filterValue:"Active",layers:["monitoring-points-active"],tooltip:"Sites that are actively monitored",value:"active"},{label:"Continuous",filterValue:"Continuous",layers:["monitoring-points-continuous"],defaultMapIcon:"square-default",tooltip:"Sites that are continuously monitored",value:"continuous"},{label:"Non-Active",filterValue:"Historic/Nonactive",layers:["monitoring-points-non-active"],tooltip:"Sites that are no longer monitored",value:"non-active"}];function we(e){var t=e.reduce(function(e,t){return e.concat(t.indicators)},[]);return ne()(t).sort().filter(function(e){return""!==e})}function xe(e){var t=e.reduce(function(e,t){return e.concat(t.organizations)},[]);return ne()(t).sort().filter(function(e){return""!==e})}function Ae(e,t){return e.filter(function(e){return e.ProgID===t})}function Ie(e,t,a,n){return e.filter(function(e){return(!t.length||0!==e.goals.filter(function(e){return t.indexOf(e)>=0}).length)&&((!a.length||0!==e.indicators.filter(function(e){return a.indexOf(e)>=0}).length)&&(!n.length||0!==e.organizations.filter(function(e){return n.indexOf(e)>=0}).length))})}a(486);var Te=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.children,a=e.left,n=e.orientation,r=e.top,i="top";return n&&(i=n),o.a.createElement("div",{className:Y()("Tooltip","orientation-arrow-".concat(i)),style:{left:a,top:r}},o.a.createElement("div",{className:"Tooltip-arrow"}),t)}}]),t}(n.Component),_e=(a(488),function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"getMouseOverPrograms",value:function(e,t){return Ae(e,t[0].properties.ProgID)}},{key:"render",value:function(){var e=this.props,t=e.features,a=e.position,n=e.programs,r=[];return t.length&&(r=this.getMouseOverPrograms(n,t)),o.a.createElement(Te,{left:a.left-10,top:a.top+20},o.a.createElement("div",{className:"MapTooltip-section"},o.a.createElement("label",{className:"MapTooltip-label"},"Organization"),r[0].OrgName),o.a.createElement("div",{className:"MapTooltip-section"},o.a.createElement("label",{className:"MapTooltip-label"},"Indicator Groups"),r[0].IndicGrp),o.a.createElement("div",{className:"MapTooltip-more"},"Click site for more information"))}}]),t}(n.Component)),Re=(a(490),Q()({accessToken:Se,minZoom:Ce.minZoom,maxZoom:Ce.maxZoom})),Le=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(f.a)(t).call(this,e))).state={mousePosition:null},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentWillReceiveProps",value:function(e){(this.props.filters.goals!==e.filters.goals||this.props.filters.indicatorCategory!==e.filters.indicatorCategory||this.props.filters.monitoringStatuses!==e.filters.monitoringStatuses||this.props.filters.organizationName!==e.filters.organizationName)&&this.handleUpdatedFilters(e.filters)}},{key:"handleUpdatedFilters",value:function(e){var t=this,a={};Object.values(Pe).forEach(function(e){a[e.name]=Object(q.a)(e.defaultFilter)});var n=Object.keys(e.goals).filter(function(t){return e.goals[t]}),o=Ie(this.props.programs,n,e.indicatorCategory?[e.indicatorCategory.value]:[],e.organizationName?[e.organizationName.value]:[]);if(n.length>0){var r=Fe.filter(function(e){return n.indexOf(e.filterValue)>=0});this.setMonitoringStatusStyles(r,o,e.goalClickOrder)}else this.resetMonitoringStatusStyles();var i=["in","ProgID"].concat(o.map(function(e){return e.ProgID}));Object.values(Pe).forEach(function(e){a[e.name].push(i)});var l=e.monitoringStatuses;ke.forEach(function(e){l.indexOf(e.value)>=0?e.layers.forEach(function(e){t.map.setLayoutProperty(e,"visibility","visible")}):e.layers.forEach(function(e){t.map.setLayoutProperty(e,"visibility","none")})});var c=ke.filter(function(e){return l.indexOf(e.value)>=0}).map(function(e){return e.filterValue});["monitoring-lines","monitoring-polygons"].forEach(function(e){a[e].push(["in","Legend"].concat(Object(q.a)(c)))}),Object.keys(a).forEach(function(e){t.map.setFilter(e,a[e])})}},{key:"setMonitoringStatusStyles",value:function(e,t,a){var n=this;if(this.map){var o={};if(e.forEach(function(e){o[e.filterValue]=ne()(function(e,t){return e.filter(function(e){return e.goals.indexOf(t)>=0})}(t,e.filterValue).map(function(e){return e.ProgID}))}),e.length>1){var r=K()(te()(Object.values(o))),i=Object.keys(r).filter(function(e){return r[e]>1});i.length>0&&(Object.keys(o).forEach(function(e){o[e]=$()(o[e],i)}),i.forEach(function(e){var n=t.filter(function(t){return t.ProgID===e})[0].goals.map(function(e){return a.indexOf(e)}).filter(function(e){return!isNaN(e)}),r=a[Math.max.apply(Math,Object(q.a)(n))];o[r].push(e)}))}var l=["match",["get","ProgID"]];Object.keys(o).forEach(function(t){0!==o[t].length&&(l.push(o[t]),"multiple"===t?l.push("black"):l.push(e.filter(function(e){return e.filterValue===t})[0].featureColor))}),l.push("black"),Object.values(Pe).forEach(function(e){e.goalStyleFields.forEach(function(t){n.map.setPaintProperty(e.name,t,l)})});var c=["match",["get","ProgID"]],s=ke.filter(function(e){return"Continuous"===e.label})[0].defaultMapIcon;Object.keys(o).forEach(function(t){0!==o[t].length&&(c.push(o[t]),"multiple"===t?c.push(s):c.push(e.filter(function(e){return e.filterValue===t})[0].continuousMapIcon))}),c.push(s),this.map.setLayoutProperty(Pe.monitoringPointsContinuous.name,"icon-image",c)}}},{key:"resetMonitoringStatusStyles",value:function(){var e=this;if(this.map){Object.values(Pe).forEach(function(t){t.goalStyleFields.forEach(function(a){e.map.setPaintProperty(t.name,a,Ce.featureColor)})});var t=ke.filter(function(e){return"Continuous"===e.label})[0].defaultMapIcon;this.map.setLayoutProperty(Pe.monitoringPointsContinuous.name,"icon-image",t)}}},{key:"findFeatures",value:function(e,t){var a=Object.values(Pe).map(function(e){return e.name});return e.queryRenderedFeatures(t,{layers:a})}},{key:"onClick",value:function(e,t){this.setState({mousePosition:{left:t.originalEvent.clientX,top:t.originalEvent.clientY}}),this.props.setClickedFeatures(this.findFeatures(e,t.point))}},{key:"onMouseMove",value:function(e,t){this.setState({mousePosition:{left:t.originalEvent.clientX,top:t.originalEvent.clientY}}),this.props.setMouseOverFeatures(this.findFeatures(e,t.point))}},{key:"onStyleLoad",value:function(e){this.map=e}},{key:"render",value:function(){var e=this.props,t=e.mouseOverFeatures,a=e.programs,n=this.state.mousePosition;return o.a.createElement("div",{className:Y()("MapboxMap-container",{"over-feature":t.length>0})},o.a.createElement(Re,{style:Me,containerStyle:{height:"100%",width:"100%"},center:Ce.center,maxBounds:Ce.maxBounds,onClick:this.onClick.bind(this),onMouseMove:this.onMouseMove.bind(this),onStyleLoad:this.onStyleLoad.bind(this),zoom:Ce.zoom},o.a.createElement(W.ZoomControl,null)),n&&t.length?o.a.createElement(_e,{features:t,position:n,programs:a}):null)}}]),t}(n.Component),De=Object(l.b)(function(e){return{filters:e.filters,mouseOverFeatures:e.mapfeatures.mouseOverFeatures,programs:e.programs.programs}},function(e){return{setClickedFeatures:function(t){return e({type:"SET_CLICKED_FEATURES",clickedFeatures:t})},setMouseOverFeatures:function(t){return e({type:"SET_MOUSE_OVER_FEATURES",mouseOverFeatures:t})}}})(Le),Ve=a(189),He=a.n(Ve),ze=a(32),Ue=a(198),Ge={control:function(e){return Object(ze.a)({},e,{"&:hover":{borderColor:"transparent"},backgroundColor:"#F4F4F0",border:"none",borderColor:"transparent",borderRadius:0,boxShadow:"none",fontSize:"12px",height:"24px",minHeight:"24px",outline:"none"})},indicatorSeparator:function(e){return Object(ze.a)({},e,{display:"none"})},option:function(e){return Object(ze.a)({},e,{fontSize:"12px",padding:"2px"})},menu:function(e){return Object(ze.a)({},e,{backgroundColor:"#F4F4F0",border:"none",borderColor:"transparent",borderRadius:0,boxShadow:"none",margin:0})},clearIndicator:function(e){return Object(ze.a)({},e,{height:"24px",padding:"2px"})},dropdownIndicator:function(e){return Object(ze.a)({},e,{height:"24px",padding:"2px"})},input:function(e){return Object(ze.a)({},e,{height:"24px"})},singleValue:function(e){return Object(ze.a)({},e,{height:"20px"})},valueContainer:function(e){return Object(ze.a)({},e,{height:"24px"})}},Be=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.onChange,a=e.options,n=e.value;return o.a.createElement(Ue.a,{className:"Filter-input",isClearable:!0,styles:Ge,value:n,onChange:t,options:a})}}]),t}(n.Component),qe=(a(500),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(f.a)(t).call(this,e))).parentRef=o.a.createRef(),a.state={tooltipVisible:!1},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"onMouseOver",value:function(){var e=this.parentRef.current.getBoundingClientRect();this.setState({tooltipLeft:e.x+e.width/4,tooltipTop:e.y+e.height,tooltipVisible:!0})}},{key:"onMouseOut",value:function(){this.setState({tooltipVisible:!1})}},{key:"render",value:function(){var e=this.props,t=e.active,a=e.onClick,n=this.props.goal,r=n.activeIcon,i=n.inactiveIcon,l=n.name,c=n.tooltip,s=this.state,u=s.tooltipLeft,m=s.tooltipTop,p=s.tooltipVisible;return o.a.createElement("div",{className:Y()("Filters-goal",He()(l).toLowerCase(),{active:t}),onClick:a,onMouseOut:this.onMouseOut.bind(this),onMouseOver:this.onMouseOver.bind(this),ref:this.parentRef},o.a.createElement("img",{className:"Filters-goal-icon",src:t?r:i,alt:l}),o.a.createElement("div",{className:"Filters-goal-name"},l),p&&c?o.a.createElement(Te,{left:u,top:m},c):null)}}]),t}(n.Component)),We=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(f.a)(t).call(this,e))).parentRef=o.a.createRef(),a.state={tooltipVisible:!1},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"onMouseOver",value:function(){var e=this.parentRef.current.getBoundingClientRect();this.setState({tooltipLeft:e.x+e.width+10,tooltipTop:e.y-e.height/2+5,tooltipVisible:!0})}},{key:"onMouseOut",value:function(){this.setState({tooltipVisible:!1})}},{key:"render",value:function(){var e=this.props,t=e.active,a=e.label,n=e.name,r=e.onChange,i=e.tooltip,l=this.state,c=l.tooltipLeft,s=l.tooltipTop,u=l.tooltipVisible;return o.a.createElement("span",{className:Y()("monitoring-status",{active:t}),onMouseOut:this.onMouseOut.bind(this),onMouseOver:this.onMouseOver.bind(this),ref:this.parentRef},o.a.createElement("input",{type:"checkbox",id:n,checked:t,onChange:r}),o.a.createElement("label",{htmlFor:n},o.a.createElement("span",{className:Y()("monitoring-status-icon","status-".concat(n))}),a),u&&i?o.a.createElement(Te,{left:c,orientation:"left",top:s},i):null)}}]),t}(n.Component),Qe=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"updateGoals",value:function(e){var t=Object.assign({},this.props.filters.goals);t[e]=!t[e],t[e]?this.props.addGoalFilter(e):this.props.removeGoalFilter(e),this.props.updateFilter("goals",t)}},{key:"toggleMonitoringStatus",value:function(e){var t=Object(q.a)(this.props.filters.monitoringStatuses);t.indexOf(e)>=0?t=t.filter(function(t){return t!==e}):t.push(e),this.props.updateFilter("monitoringStatuses",t)}},{key:"render",value:function(){var e=this,t=this.props,a=t.filters,n=t.programs,r=t.scrollToModalSection,i=t.showAboutModal,l=t.showAboutModalTab,c=a.goals,s=a.monitoringStatuses,u=Ie(n,Object.keys(c).filter(function(e){return c[e]}),[],[]),m=xe(u).map(function(e){return{label:e,value:e}}),p=we(u).map(function(e){return{label:e,value:e}});return o.a.createElement("div",{className:"Filters"},o.a.createElement("div",{className:"Filters-goals"},o.a.createElement("h2",{className:"Filter-goals-label"},"Filter by Goal"),o.a.createElement("div",{className:"Filters-goal-pickers"},Fe.map(function(t){return o.a.createElement(qe,{key:t.name,goal:t,active:c[t.filterValue],onClick:function(){return e.updateGoals(t.filterValue)}})}))),o.a.createElement("div",{className:"Filters-monitoring-status Filters-filter"},o.a.createElement("h2",{className:"Filter-label"},"Monitoring Status"),o.a.createElement("div",{className:"Filter-input"},o.a.createElement("ul",null,ke.map(function(t){return o.a.createElement("li",{key:t.value},o.a.createElement(We,{active:s.indexOf(t.value)>=0,label:t.label,onChange:function(){return e.toggleMonitoringStatus(t.value)},name:t.value,tooltip:t.tooltip}))})))),o.a.createElement("div",{className:"Filters-indicator Filters-filter"},o.a.createElement("label",{className:"Filter-label"},"Indicator Category",o.a.createElement("button",{className:"help-button",onClick:function(){i(),l(1),r("indicator-categories")}},"?")),o.a.createElement(Be,{value:a.indicatorCategory,onChange:function(t){e.props.updateFilter("indicatorCategory",t)},options:p})),o.a.createElement("div",{className:"Filters-organization Filters-filter"},o.a.createElement("label",{className:"Filter-label"},"Organization Name"),o.a.createElement(Be,{value:a.organizationName,onChange:function(t){e.props.updateFilter("organizationName",t)},options:m})))}}]),t}(n.Component),Je=Object(l.b)(function(e){return{filters:e.filters,indicators:e.programs.indicators,programs:e.programs.programs,organizations:e.programs.organizations}},function(e){return{addGoalFilter:function(t){return e(function(e){return{type:"ADD_GOAL_FILTER",name:e}}(t))},removeGoalFilter:function(t){return e(function(e){return{type:"REMOVE_GOAL_FILTER",name:e}}(t))},scrollToModalSection:function(t){return e({type:"SCROLL_TO_MODAL_SECTION",tabScrollSection:t})},showAboutModal:function(){return e({type:"SHOW_ABOUT_MODAL"})},showAboutModalTab:function(t){return e(x(t))},updateFilter:function(t,a){return e(function(e,t){return{type:"UPDATE_FILTER",name:e,value:t}}(t,a))}}})(Qe),Ye=(a(502),function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.showAboutModal;return o.a.createElement("div",{className:"Footer"},o.a.createElement("div",{className:"Footer-left"},o.a.createElement("button",{className:"Footer-button",onClick:e},"Learn About the Map")),o.a.createElement("div",{className:"Footer-right"},o.a.createElement("a",{href:"https://docs.google.com/spreadsheets/d/1k3D3xxKq3zxOnzCUhFOPT5jdkwoAFdWKr0OSm14BHXY/edit#gid=0",className:"Footer-button",target:"_blank",rel:"noopener noreferrer"},"Download the Program Database")))}}]),t}(n.Component)),Ze=Object(l.b)(function(e){return{}},function(e){return{showAboutModal:function(){return e({type:"SHOW_ABOUT_MODAL"})}}})(Ye),Ke=a(193),Xe=a.n(Ke),$e=(a(511),function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.program,t=e.Contact,a=e.Freq,n=e.HEPgoal,r=e.IndicGrp,i=e.Indicator,l=e.OrgName,c=e.ProgName,s=e.ProgObjectv,u=e.QAPP,m=e.Reference,p=e.SpatExtnt,f=e.status,d=e.TempExtnt;return o.a.createElement("div",{className:"Popup-section"},o.a.createElement("div",{className:"Popup-row"},o.a.createElement("div",{className:"Popup-label"},"Organization Name"),o.a.createElement("div",{className:"Popup-value"},l)),o.a.createElement("div",{className:"Popup-row"},o.a.createElement("div",{className:"Popup-label"},"Goal Addressed"),o.a.createElement("div",{className:"Popup-value"},n)),o.a.createElement("div",{className:"Popup-row"},o.a.createElement("div",{className:"Popup-label"},"Indicator Category"),o.a.createElement("div",{className:"Popup-value"},r)),o.a.createElement("div",{className:"Popup-row"},o.a.createElement("div",{className:"Popup-label"},"Indicators"),o.a.createElement("div",{className:"Popup-value"},i)),o.a.createElement("div",{className:"Popup-row"},o.a.createElement("div",{className:"Popup-label"},"Program Name"),o.a.createElement("div",{className:"Popup-value"},c)),o.a.createElement("div",{className:"Popup-row"},o.a.createElement("div",{className:"Popup-label"},"Program Objective"),o.a.createElement("div",{className:"Popup-value"},s)),o.a.createElement("div",{className:"Popup-row"},o.a.createElement("div",{className:"Popup-label"},"Monitoring Status"),o.a.createElement("div",{className:"Popup-value"},f)),o.a.createElement("div",{className:"Popup-row"},o.a.createElement("div",{className:"Popup-label"},"Quality Assurance Protocol"),o.a.createElement("div",{className:"Popup-value"},u)),o.a.createElement("div",{className:"Popup-row"},o.a.createElement("div",{className:"Popup-label"},"Spatial Extent"),o.a.createElement("div",{className:"Popup-value"},p)),o.a.createElement("div",{className:"Popup-row"},o.a.createElement("div",{className:"Popup-label"},"Temporal Extent"),o.a.createElement("div",{className:"Popup-value"},d)),o.a.createElement("div",{className:"Popup-row"},o.a.createElement("div",{className:"Popup-label"},"Sampling Frequency"),o.a.createElement("div",{className:"Popup-value"},a)),o.a.createElement("div",{className:"Popup-row"},o.a.createElement("div",{className:"Popup-label"},"Reference"),o.a.createElement("div",{className:"Popup-value"},o.a.createElement(Xe.a,{properties:{target:"_blank"}},m))),o.a.createElement("div",{className:"Popup-row"},o.a.createElement("div",{className:"Popup-label"},"Contact"),o.a.createElement("div",{className:"Popup-value"},t)))}}]),t}(n.Component)),et=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"getStatusLabel",value:function(e){return"Historic/Nonactive"===e?"Non-active":e}},{key:"getSelectedPrograms",value:function(e,t){var a=this,n=t[0];return Ae(e,n.properties.ProgID).map(function(e){return Object.assign({},e,{status:a.getStatusLabel(n.properties.Legend)})})}},{key:"render",value:function(){var e=this.props,t=e.clickedFeatures,a=e.programs,n=[];return t&&t.length&&a&&a.length&&(n=this.getSelectedPrograms(a,t)),o.a.createElement("div",{className:"Popup"},n.map(function(e){return o.a.createElement($e,{key:e.ProgID,program:e})}))}}]),t}(n.Component),tt=Object(l.b)(function(e){return{clickedFeatures:e.mapfeatures.clickedFeatures,programs:e.programs.programs}},function(e){return{}})(et),at=(a(513),a(194)),nt=a.n(at),ot=a(195),rt=a.n(ot),it=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"Sidebar"},o.a.createElement("div",{className:"Sidebar-logos"},o.a.createElement("a",{className:"Sidebar-logo",href:"http://www.hudsonriver.org/",target:"_blank",rel:"noopener noreferrer"},o.a.createElement("img",{src:nt.a,alt:"NY/NJ Harbor & Estuary Project"})),o.a.createElement("a",{className:"Sidebar-logo",href:"http://www.hudsonriver.org/",target:"_blank",rel:"noopener noreferrer"},o.a.createElement("img",{src:rt.a,alt:"Hudson River Foundation"}))),o.a.createElement("div",{className:"Sidebar-main"},o.a.createElement("h1",{className:"Sidebar-header"},o.a.createElement("div",{className:"Sidebar-header-organization"},"NY-NJ Harbor & Estuary"),o.a.createElement("div",{className:"Sidebar-header-project"},"Environmental Monitoring Sites")),o.a.createElement(Je,null),o.a.createElement(tt,null),o.a.createElement(Ze,null)))}}]),t}(n.Component),lt=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentWillMount",value:function(){this.props.fetchContent(),this.props.fetchPrograms()}},{key:"render",value:function(){var e=this.props.aboutModal;return o.a.createElement("div",{className:"App"},o.a.createElement(it,null),o.a.createElement(De,null),e.visible?o.a.createElement(B,null):null)}}]),t}(n.Component),ct=Object(l.b)(function(e){return{aboutModal:e.aboutModal}},function(e){return{fetchContent:function(){return e(function(e){e(T());var t=w.map(function(e){return fetch(e.url).then(function(e){return e.text()})});return Promise.all(t).then(function(t){var a={};t.forEach(function(e,t){a[w[t].name]=e}),e(_(a))})})},fetchPrograms:function(){return e(function(e){return e(A()),fetch(g.a).then(function(e){return e.text()}).then(function(t){return e(I(Object(b.a)(t)))})})}}})(lt),st={tabIndex:1,tabScrollSection:null,visible:!0},ut=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:st,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"HIDE_ABOUT_MODAL":return Object.assign({},e,{tabScrollSection:null,visible:!1});case"SHOW_ABOUT_MODAL":return Object.assign({},e,{visible:!0});case"SHOW_ABOUT_MODAL_TAB":return Object.assign({},e,{tabIndex:t.index});case"SCROLL_TO_MODAL_SECTION":return Object.assign({},e,{tabScrollSection:t.tabScrollSection});default:return e}},mt={content:{},loading:!1},pt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:mt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REQUEST_CONTENT":return Object.assign({},e,{content:{},loading:!0});case"RECEIVE_CONTENT":return Object.assign({},e,{content:t.content,loading:!1});default:return e}},ft=a(79),dt={goals:{},goalClickOrder:[],monitoringStatuses:["active","continuous","non-active"],indicatorCategory:"",organizationName:""},bt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:dt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_FILTER":return Object.assign({},e,Object(ft.a)({},t.name,t.value));case"ADD_GOAL_FILTER":return Object.assign({},e,{goalClickOrder:Object(q.a)(e.goalClickOrder).concat([t.name])});case"REMOVE_GOAL_FILTER":return Object.assign({},e,{goalClickOrder:e.goalClickOrder.filter(function(e){return e!==t.name})});default:return e}},vt={mouseOverFeatures:[]},gt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:vt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CLICKED_FEATURES":return Object.assign({},e,{clickedFeatures:t.clickedFeatures});case"SET_MOUSE_OVER_FEATURES":return Object.assign({},e,{mouseOverFeatures:t.mouseOverFeatures});default:return e}},ht={programs:[],loading:!1},Et=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ht,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REQUEST_PROGRAMS":return Object.assign({},e,{indicators:[],loading:!0,organizations:[],programs:[]});case"RECEIVE_PROGRAMS":var a=t.csv.map(function(e){return Object.assign({},e,{goals:(t=e,t.HEPgoal.split(",").map(function(e){return e.trim()})),indicators:function(e){return e.IndicGrp.split(",").map(function(e){return e.trim()})}(e),organizations:function(e){return e.OrgName.split(",").map(function(e){return e.trim()})}(e)});var t});return Object.assign({},e,{indicators:we(a),loading:!1,organizations:xe(a),programs:a});default:return e}},Ot=Object(c.c)({aboutModal:ut,content:pt,filters:bt,mapfeatures:gt,programs:Et});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var yt=Object(c.d)(Ot,Object(c.a)(s.a));i.a.render(o.a.createElement(l.a,{store:yt},o.a.createElement(ct,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[199,2,1]]]);
//# sourceMappingURL=main.90d8999f.chunk.js.map