(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[4],{429:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return J}));var c=a(22),n=a(0),r=a.n(n),o={actualScreen:"selectLocation",typeDate:"hour",location:{lat:0,lng:0},actualLocation:{lat:0,lng:0},zoom:4,request:{loading:!1,success:!1,error:null,data:null},fetchData:{start:"",end:"",url:""}},l=a(145),s="SET_LOCATION",i="SET_ACTUAL_LOCATION",u="RESULTS_FETCH_REQUEST",d="RESULTS_FETCH_SUCCESS",j="RESULTS_FETCH_FAILURE",b="RESET_STATE",h="SET_ZOOM",p="SET_SCREEN",O="SET_FETCH_DATA",y="RESET_FETCH_DATA",m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(l.a)(Object(l.a)({},e),{},{zoom:t.payload.zoom});case s:return Object(l.a)(Object(l.a)({},e),{},{location:t.payload});case i:return Object(l.a)(Object(l.a)({},e),{},{actualLocation:t.payload});case u:return Object(l.a)(Object(l.a)({},e),{},{request:Object(l.a)(Object(l.a)({},e.request),{},{loading:!0})});case d:return Object(l.a)(Object(l.a)({},e),{},{request:Object(l.a)(Object(l.a)({},e.request),{},{loading:!1,success:!0,data:t.payload})});case j:return Object(l.a)(Object(l.a)({},e),{},{request:Object(l.a)(Object(l.a)({},e.request),{},{loading:!1,success:!1,error:t.payload})});case b:return Object(l.a)({},o);case p:return Object(l.a)(Object(l.a)({},e),{},{actualScreen:t.payload,request:Object(l.a)(Object(l.a)({},e.request),{},{success:!1})});case O:return Object(l.a)(Object(l.a)({},e),{},{fetchData:Object(l.a)(Object(l.a)({},e.fetchData),t.payload)});case y:return Object(l.a)(Object(l.a)({},e),{},{fetchData:Object(l.a)({},o.fetchData)})}},f=a(426),g=a(147),x=a(64),v=a(148),S=a(146),L=a.p+"static/media/sun.1eeab01a.png",T=a(9),E=["places"],C={width:"100vw",height:"100vh"},D={styles:[{featureType:"administrative",elementType:"all",stylers:[{visibility:"on"},{lightness:33}]},{featureType:"landscape",elementType:"all",stylers:[{color:"#f2e5d4"}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#c5dac6"}]},{featureType:"poi.park",elementType:"labels",stylers:[{visibility:"on"},{lightness:20}]},{featureType:"road",elementType:"all",stylers:[{lightness:20}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#c5c6c6"}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#e4d7c6"}]},{featureType:"road.local",elementType:"geometry",stylers:[{color:"#fbfaf7"}]},{featureType:"water",elementType:"all",stylers:[{visibility:"on"},{color:"#acbcc9"}]}],disableDefaultUI:!0,zoomControl:!0},_=function(e){var t=e.state,a=e.dispatch,n=r.a.useState(),o=Object(c.a)(n,2),u=(o[0],o[1]);r.a.useEffect((function(){d()}),[]);var d=function(){navigator.geolocation.getCurrentPosition((function(e){0==t.location.lat&&(u({lat:e.coords.latitude,lng:e.coords.longitude}),a({type:i,payload:{lat:e.coords.latitude,lng:e.coords.longitude,nameLocation:"My Location"}}),a({type:s,payload:{lat:e.coords.latitude,lng:e.coords.longitude,nameLocation:"My Location"}}))}))},j=Object(f.c)({googleMapsApiKey:"AIzaSyD2_N9L9MJjiIgQxhEOQx7AMIunkoIiZtA",libraries:E}),b=j.isLoaded,O=j.loadError;return Object(T.jsxs)("div",{style:{marginTop:"13vh",overflowX:"hidden",textAlign:"center"},children:[Object(T.jsx)(x.a,{modifiers:["h3"],children:"Get information about sunshine in your area."}),Object(T.jsx)("br",{}),Object(T.jsx)(x.a,{modifiers:["h4"],children:"Select your location on the map"}),O?Object(T.jsx)("div",{children:"Error al cargar el mapa"}):b?Object(T.jsxs)("div",{className:"map_container",children:[Object(T.jsxs)("div",{className:"search_container",children:[Object(T.jsx)("div",{className:"search_input",children:Object(T.jsx)(g.e,{center:t.actualLocation,changeLocation:function(e,t){var c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";v.b.success("Location changed",Object(l.a)({},S.b)),a({type:s,payload:{lat:e,lng:t,nameLocation:c}}),a({type:i,payload:{lat:e,lng:t,nameLocation:c}}),setTimeout((function(){a({type:h,payload:{zoom:15}})}),200)}})}),Object(T.jsx)(x.b,{className:"my_button small_button",disabled:t.request.loading||null===t.location.lat,onClick:function(){d()},children:"Go to my location"})]}),Object(T.jsx)(f.a,{options:D,mapContainerStyle:C,zoom:t.zoom,onClick:function(e){t.request.loading||(v.b.success("Location changed",Object(l.a)({},S.b)),a({type:s,payload:{lat:e.latLng.lat(),lng:e.latLng.lng()}}))},center:t.actualLocation,children:Object(T.jsx)(f.b,{position:t.location,icon:{url:L,scaledSize:new window.google.maps.Size(50,50)}},t.actualLocation.lat)}),Object(T.jsx)("div",{className:"next_step_container",children:Object(T.jsx)(x.b,{className:"my_button",disabled:t.request.loading||null===t.location.lat,onClick:function(){a({type:p,payload:"formParameters"})},children:"Next step"})})]}):Object(T.jsx)("div",{children:"Cargando mapa"})]})},w=a(101),N=a(383),q="https://spaceappsk.azurewebsites.net/api/nasa/",k=a(65),A=a.n(k),M=a(153),F=a(408),R=a.n(F);function G(){return(G=Object(M.a)(A.a.mark((function e(t,a,c){var n,r,o,l,s,i;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.REQUEST,r=a.SUCCESS,o=a.FAILURE,console.log("callApi",t),e.prev=2,c({type:n}),e.next=6,R()({method:"GET",url:q+t});case 6:l=e.sent,s=l.data,c({type:r,payload:s}),e.next=15;break;case 11:throw e.prev=11,e.t0=e.catch(2),c({type:o,payload:e.t0}),(null===(i=e.t0.response)||void 0===i?void 0:i.data)?e.t0.response.data:e.t0.message;case 15:case"end":return e.stop()}}),e,null,[[2,11]])})))).apply(this,arguments)}var U=["January","February","March","April","May","June","July","August","September","October","November","December"],I=[{value:"day",label:"Custom date"},{value:"month",label:"Month"},{value:"year",label:"Year"},{value:"oneDay",label:"One Day"}];function z(e){var t=e.state,a=e.dispatch,n=r.a.useState("day"),o=Object(c.a)(n,2),s=o[0],i=o[1],b=function(e){a({type:O,payload:{start:e.start,end:e.end,url:e.url}})};return r.a.useEffect((function(){t.request.success&&a({type:p,payload:"results"})}),[t.request.success]),Object(T.jsxs)(N.a,{className:"form_parameters",children:[Object(T.jsx)(x.b,{onClick:function(){a({type:p,payload:"selectLocation"})},className:"my_button mb-4",children:"Go back to the map"}),Object(T.jsx)(x.a,{modifiers:["h3"],children:"Parameters"}),Object(T.jsx)(x.d,{children:"Select the type of date you want to see the data of the sunshine"}),Object(T.jsxs)(x.e,{onSubmit:function(e){e.preventDefault(),v.b.promise(function(e,t,a){return G.apply(this,arguments)}("?start=".concat(t.fetchData.start,"&end=").concat(t.fetchData.end,"&latitude=").concat(t.location.lat,"&longitude=").concat(t.location.lng,"&resolution=").concat(t.fetchData.url,"&comunity=SB"),{REQUEST:u,SUCCESS:d,FAILURE:j},a),{loading:"Loading...",success:"Success!",error:"There was an error, please try again."},Object(l.a)({},S.b))},children:[Object(T.jsxs)(x.e.Group,{children:[Object(T.jsx)(x.e.Label,{children:"Select type of date"}),Object(T.jsx)(x.e.Control,{as:"select",onChange:function(e){i(e.target.value),a({type:y})},children:I.map((function(e,a){return Object(T.jsx)("option",{value:e.value,selected:t.typeDate===e.value,children:e.label},a)}))})]}),function(){var e;switch(s){case"year":return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsxs)(x.e.Group,{children:[Object(T.jsx)(x.e.Label,{children:"Select Year initial"}),Object(T.jsx)(x.e.Control,{type:"number",placeholder:"Enter Year initial",onChange:function(e){b({start:e.target.value,end:t.fetchData.end,url:"yearly"})}})]}),Object(T.jsxs)(x.e.Group,{children:[Object(T.jsx)(x.e.Label,{children:"Select Year final"}),Object(T.jsx)(x.e.Control,{type:"number",placeholder:"Enter Year final",onChange:function(e){b({start:t.fetchData.start,end:e.target.value,url:"yearly"})}})]})]});case"month":return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsxs)(x.e.Group,{children:[Object(T.jsx)(x.e.Label,{children:"Select year initial"}),Object(T.jsx)(x.e.Control,{type:"number",placeholder:"Enter year",id:"year"})]}),Object(T.jsxs)(x.e.Group,{children:[Object(T.jsx)(x.e.Label,{children:"Select Month initial"}),Object(T.jsx)(x.e.Control,{as:"select",onChange:function(e){var a=document.getElementById("year").value,c=e.target.value<10?"0"+e.target.value:e.target.value;b({start:a+c+"01",end:t.fetchData.end,url:"daily"})},children:U.map((function(e,t){return Object(T.jsx)("option",{value:t+1,children:e},t)}))})]}),Object(T.jsxs)(x.e.Group,{children:[Object(T.jsx)(x.e.Label,{children:"Select Month final"}),Object(T.jsx)(x.e.Control,(e={as:"select"},Object(w.a)(e,"as","select"),Object(w.a)(e,"onChange",(function(e){var a=document.getElementById("year").value,c=e.target.value<10?"0"+e.target.value:e.target.value;b({start:t.fetchData.start,end:a+c+"01",url:"daily"})})),Object(w.a)(e,"children",U.map((function(e,t){return Object(T.jsx)("option",{value:t+1,children:e},t)}))),e))]})]});case"day":return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsxs)(x.e.Group,{children:[Object(T.jsx)(x.e.Label,{children:"Select Day initial"}),Object(T.jsx)(x.e.Control,{type:"date",onSelect:function(e){var a=new Date(e.target.value).getFullYear(),c=new Date(e.target.value).getMonth()+1,n=new Date(e.target.value).getDate(),r=c<10?"0"+c:c,o=n<10?"0"+n:n;b({start:"".concat(a).concat(r).concat(Math.abs(o)+1),end:t.fetchData.end,url:"daily"})}})]}),Object(T.jsxs)(x.e.Group,{children:[Object(T.jsx)(x.e.Label,{children:"Select Day final"}),Object(T.jsx)(x.e.Control,{type:"date",onSelect:function(e){var a=new Date(e.target.value).getFullYear(),c=new Date(e.target.value).getMonth()+1,n=new Date(e.target.value).getDate(),r=c<10?"0"+c:c,o=n<10?"0"+n:n;b({start:t.fetchData.start,end:"".concat(a).concat(r).concat(Math.abs(o)+1),url:"daily"})}})]})]});case"oneDay":return Object(T.jsx)(T.Fragment,{children:Object(T.jsxs)(x.e.Group,{children:[Object(T.jsx)(x.e.Label,{children:"Select Day"}),Object(T.jsx)(x.e.Control,{type:"date",onSelect:function(e){var t=new Date(e.target.value).getFullYear(),a=new Date(e.target.value).getMonth()+1,c=new Date(e.target.value).getDate(),n=a<10?"0"+a:a,r=c<10?"0"+c:c;b({start:"".concat(t).concat(n).concat(Math.abs(r)+1),end:"".concat(t).concat(n).concat(Math.abs(r)+1),url:"daily"})}})]})});default:return null}}(),""!=t.location.nameLocation&&Object(T.jsxs)(x.d,{children:[Object(T.jsx)("b",{children:"Location:"})," ",t.location.nameLocation?t.location.nameLocation:"No location name"]}),Object(T.jsx)("br",{}),Object(T.jsxs)(x.d,{children:[Object(T.jsx)("b",{children:"Current coordinates selected:"}),Object(T.jsx)("br",{}),Object(T.jsx)("b",{children:"Latitude: "}),t.location.lat,Object(T.jsx)("br",{}),Object(T.jsx)("b",{children:"Longitude: "}),t.location.lng]}),Object(T.jsx)("br",{}),0!=t.location.lng?Object(T.jsx)(x.c,{className:"my_button mt-4",type:"submit",disabled:t.request.loading,children:"Submit parameters"}):Object(T.jsx)(x.c,{className:"my_button mt-4",onClick:function(){a({type:p,payload:"selectLocation"})},children:"Please select a location on the map"})]})]})}var Y=a(427),P=function(e){var t=e.state,a=e.dispatch,n=r.a.useState([]),o=Object(c.a)(n,2),l=o[0],s=o[1],i=r.a.useState(""),u=Object(c.a)(i,2),d=u[0],j=u[1],b=r.a.useState([]),h=Object(c.a)(b,2),O=h[0],y=h[1],m=r.a.useState([]),f=Object(c.a)(m,2);f[0],f[1];return r.a.useEffect((function(){console.log(t.fetchData),Object.keys(t.request.data).map((function(e,a){Object.keys(t.request.data[e]).map((function(a){Object.keys(t.request.data[e][a]).map((function(c){console.log(t.request.data[e][a][c]),y((function(n){return[].concat(Object(Y.a)(n),[t.request.data[e][a][c].title])}));var n=[];t.request.data[e][a][c].values.map((function(e,a){n.push({value:e,name:Math.floor(t.fetchData.start.substring(0,4))+a})})),s((function(e){return[].concat(Object(Y.a)(e),[n])}))}))}))}))}),[]),Object(T.jsxs)(N.a,{className:"results",children:[Object(T.jsx)(g.d,{className:"my_button mb-4",onClick:function(){return a({type:p,payload:"formParameters"})},children:"Go back"}),Object(T.jsx)(g.b,{modifiers:["h3"],children:"Results"}),""!=t.location.nameLocation&&Object(T.jsxs)(g.f,{children:[Object(T.jsx)("b",{children:"Location:"})," ",t.location.nameLocation?t.location.nameLocation:"No location name"]}),Object(T.jsx)("br",{}),Object(T.jsxs)(g.f,{children:[Object(T.jsx)("b",{children:"Current coordinates selected:"}),Object(T.jsx)("br",{}),Object(T.jsx)("b",{children:"Latitude: "}),t.location.lat,Object(T.jsx)("br",{}),Object(T.jsx)("b",{children:"Longitude: "}),t.location.lng]}),Object(T.jsx)("br",{}),Object(T.jsx)("div",{className:"mt-4"}),Object(T.jsx)(g.f,{children:Object(T.jsx)("b",{children:"Please select the radiation you want to see:"})}),Object(T.jsxs)("select",{className:"custom-select",onChange:function(e){return j(e.target.value)},children:[Object(T.jsx)("option",{value:"",children:"Select radiation"}),O.map((function(e,t){return Object(T.jsx)("option",{value:e,children:e},t)}))]}),Object(T.jsx)("br",{}),Object(T.jsx)(g.f,{children:"Radiation levels for the selected period of time."}),l.map((function(e,t){return Object(T.jsx)("div",{className:d==O[t]?"d-block":"d-none",children:Object(T.jsx)(g.a,{data:e,xName:"name",name:"value"})},t)}))]})};function J(){var e=r.a.useReducer(m,o),t=Object(c.a)(e,2),a=t[0],n=t[1];return Object(T.jsx)(T.Fragment,{children:function(){switch(null===a||void 0===a?void 0:a.actualScreen){default:return Object(T.jsx)(_,{state:a,dispatch:n});case"formParameters":return Object(T.jsx)(z,{state:a,dispatch:n});case"results":return Object(T.jsx)(P,{state:a,dispatch:n})}}()})}}}]);
//# sourceMappingURL=4.738777cf.chunk.js.map