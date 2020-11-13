(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{1087:function(e,t,a){},1106:function(e,t,a){},1107:function(e,t,a){},1108:function(e,t,a){},1114:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(33),s=a.n(c),i=a(10),l=a(1),m=a(12),o=a(13),u=a(17),p=a(16),d=a(34),E=a.n(d),v=function(e){var t=e.author,a=e.meta,n=e.comment;return r.a.createElement("section",{className:"comment"},r.a.createElement("a",{href:"/",className:"avatar"},r.a.createElement("img",{alt:"avatar",src:E.a.image.avatar()})),r.a.createElement("section",{className:"content"},r.a.createElement("a",{href:"/",className:"author"},t),r.a.createElement("p",{className:"metadata"},r.a.createElement("span",{className:"date"},a)),r.a.createElement("p",{className:"text"},n)))},f=function(e){var t=e.children;return r.a.createElement("section",{className:"ui card"},r.a.createElement("section",{className:"content"},t),r.a.createElement("section",{className:"extra content"},r.a.createElement("div",{className:"ui two buttons"},r.a.createElement("button",{className:"ui basic green button"},"Approve"),r.a.createElement("button",{className:"ui basic red button"},"Reject"))))},h=(a(1087),{summer:{text:"nice and warm! Let's hit the beach!",icon:"sun"},winter:{text:"chilly, burr! Go grab a jumper and a blanket!",icon:"snowflake"}}),b=function(e){var t=function(e,t){return t>2&&t<9?e>0?"summer":"winter":e>0?"winter":"summer"}(e.lat,(new Date).getMonth()),a=h[t],n=a.text,c=a.icon;return r.a.createElement("section",{className:"".concat(t," season-display")},r.a.createElement("i",{className:"".concat(c," massive icon-left icon")}),r.a.createElement("h1",null,"It's ",n),r.a.createElement("i",{className:"".concat(c," massive icon-right icon")}))},g=function(e){var t=e.message;return r.a.createElement("div",{className:"ui active dimmer"},r.a.createElement("div",{className:"ui big text loader"},t))};g.defaultProps={message:"Loading..."};var N=g,y=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).state={lat:null,errorMessage:""},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;window.navigator.geolocation.getCurrentPosition((function(t){return e.setState({lat:t.coords.latitude})}),(function(t){return e.setState({errorMessage:t.message})}))}},{key:"getDisplay",value:function(){var e=this.state,t=e.lat,a=e.errorMessage;return t&&!a?r.a.createElement(b,{lat:t}):!t&&a?r.a.createElement("h4",null,"Error: ",a):r.a.createElement(N,{message:"Please accept location request"})}},{key:"render",value:function(){return r.a.createElement("section",{className:"ui container comments"},this.getDisplay(),r.a.createElement(f,null,r.a.createElement(v,{author:"Sam Snubbs",meta:"Yesterday at 02:31",comment:"I love this, lol"})))}}]),a}(r.a.Component),w=a(9),S=a.n(w),j=a(14),O=a(15),x=a.n(O),k=x.a.create({baseURL:"https://api.unsplash.com",headers:{Authorization:"Client-ID -f-xWkmfLsII02rsfr_IJNSAswufGeXkp3oI5rCBLss"}}),I=a(7),D=function(e){var t=e.type,a=e.searchSubmit,c=Object(n.useState)(""),s=Object(I.a)(c,2),i=s[0],l=s[1];return r.a.createElement("section",{className:"search-bar ui segment"},r.a.createElement("form",{onSubmit:function(e){return function(e){e.preventDefault(),a(i)}(e)},className:"ui form"},r.a.createElement("section",{className:"field"},r.a.createElement("label",{htmlFor:"search"},t," Search"),r.a.createElement("input",{value:i,name:"search",id:"search",type:"search",placeholder:"Enter a term to search...",onChange:function(e){return l(e.target.value)}}))))},A=(a(1106),function(e){var t=e.image;return r.a.createElement("img",{alt:t.description,src:t.urls.regular})}),C=(a(1107),function(e){var t=e.video,a=e.onSelect;return r.a.createElement("div",{className:"video-item item",onClick:function(){return a(t)}},r.a.createElement("img",{className:"ui image",alt:t.snippet.title,src:t.snippet.thumbnails.medium.url}),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"header"},t.snippet.title)))}),M=function(e){var t=e.media,a=e.type,n=e.onSelect,c=t.map((function(e,t){return"video"===a?r.a.createElement(C,{key:t,video:e,onSelect:n}):r.a.createElement(A,{key:t,image:e})}));return r.a.createElement("div",{className:"video"===a?"ui relaxed divided list":"media-list"},c)},L=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={images:[]},e.onSearchSubmit=function(){var t=Object(j.a)(S.a.mark((function t(a){var n;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.get("/search/photos",{params:{query:a}});case 2:n=t.sent,e.setState({images:n.data.results});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("main",{className:"ui container",style:{marginTop:10}},r.a.createElement(D,{type:"Image",searchSubmit:this.onSearchSubmit}),r.a.createElement(M,{media:this.state.images}))}}]),a}(r.a.Component),G=function(e){var t=e.video;if(!t)return r.a.createElement("div",null,"Loading...");var a="https://www.youtube.com/embed/".concat(t.id.videoId);return r.a.createElement("div",null,r.a.createElement("div",{className:"ui embed"},r.a.createElement("iframe",{src:a,title:t.snippet.title})),r.a.createElement("div",{className:"ui segment"},r.a.createElement("h4",{className:"ui header"},t.snippet.title),r.a.createElement("p",null,t.snippet.description)))},Y=function(e){var t=Object(n.useState)([]),a=Object(I.a)(t,2),r=a[0],c=a[1];Object(n.useEffect)((function(){s(e)}),[e]);var s=function(){var e=Object(j.a)(S.a.mark((function e(t){var a;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("https://www.googleapis.com/youtube/v3/search",{params:{q:t,part:"snippet",maxResults:5,key:"AIzaSyDYYXnUMSmA6ZIGfnYHtWobSADVZ0M1Za4"}});case 2:a=e.sent,c(a.data.items);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return[r,s]},q=function(){var e=Object(n.useState)(null),t=Object(I.a)(e,2),a=t[0],c=t[1],s=Y("cthun"),i=Object(I.a)(s,2),l=i[0],m=i[1];return Object(n.useEffect)((function(){c(l[0])}),[l]),r.a.createElement("main",{className:"ui container",style:{marginTop:10}},r.a.createElement(D,{type:"Video",searchSubmit:m}),r.a.createElement("div",{className:"ui grid"},r.a.createElement("div",{className:"ui row"},r.a.createElement("div",{className:"eleven wide column"},r.a.createElement(G,{video:a})),r.a.createElement("div",{className:"five wide column"},r.a.createElement(M,{media:l,type:"video",onSelect:c})))))},J=(a(1108),function(){return r.a.createElement("main",null,r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(i.b,{to:"/geo"},"Geolocater")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/imagesearch"},"Image Searcher")),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/videos"},"Videos")))),r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:"/",component:q}),r.a.createElement(l.a,{exact:!0,path:"/geo",component:y}),r.a.createElement(l.a,{exact:!0,path:"/imagesearch",component:L}),r.a.createElement(l.a,{exact:!0,path:"/videos",component:q})))});s.a.render(r.a.createElement(i.a,null,r.a.createElement(J,null)),document.getElementById("root"))},36:function(e,t,a){e.exports=a(1114)}},[[36,1,2]]]);
//# sourceMappingURL=main.4c9512a7.chunk.js.map