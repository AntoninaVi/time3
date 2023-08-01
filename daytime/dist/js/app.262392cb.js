(function(){"use strict";var t={375:function(t,e,o){var i=o(144),n=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"main"},[e("div",{staticClass:"background-image",class:{"day-image":t.isMorning||t.isDay,"night-image":t.isEvening||t.isNight}}),e("div",{staticClass:"quote"},[e("div",{staticClass:"quote-content"},[e("p",{staticClass:"quote-text"},[t._v(t._s(t.quote))]),e("p",{staticClass:"quote-author"},[t._v(t._s(t.author))])]),e("button",{staticClass:"quote-button",on:{click:t.changeQuote}}),e("audio",{ref:"audio",attrs:{src:o(661),loop:""}}),e("button",{staticClass:"play-button",on:{click:t.playAudio}}),e("button",{staticClass:"stop-button",on:{click:t.stopAudio}})]),e("div",{staticClass:"greeting-text"},[e("div",{staticClass:"greeting-main-title"},[e("div",{class:{"sun-icon":t.isMorning||t.isDay,"moon-icon":t.isEvening||t.isNight},attrs:{id:"greeting-symbol"}}),e("h1",{staticClass:"greeting-title"},[t._v(t._s(t.greeting))])]),e("div",{staticClass:"clock"},[e("h2",{staticClass:"clock-time"},[t._v(t._s(t.time)+" "),e("span",{staticClass:"clock-time-zone"},[t._v(t._s(t.timeZoneAbbr))])]),t.timezone?e("p",{staticClass:"clock__timezone"},[t._v(" in "+t._s(t.timezone.split("/")[1].replace("_"," "))+", "+t._s(t.timezone.split("/")[0].replace("_"," "))+" ")]):t._e()])])]),e("div",{staticClass:"more"},[e("div",{staticClass:"button-content"},[e("div",{staticClass:"more-button",class:{open:t.showMore},attrs:{role:"button","aria-haspopup":"true","aria-expanded":"false",tabindex:"0"},on:{click:t.toggleMore}},[t._v(" "+t._s(t.moreButtonText)+" "),e("span",{staticClass:"more-button-arrow",class:{"more-button-arrow-open":t.showMore},staticStyle:{"pointer-events":"none"}})])]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.showMore,expression:"showMore"}],staticClass:"more-content",class:{"more-content-light":t.isMorning||t.isDay}},[e("div",{staticClass:"more-content-item",class:{"more-content-item-light":t.isMorning||t.isDay}},[e("p",{staticClass:"more-content-paragraph"},[t._v("Current timezone:")]),e("h2",{staticClass:"more-content-info"},[t._v(t._s(t.timezone))])]),e("div",{staticClass:"more-content-item",class:{"more-content-item-light":t.isMorning||t.isDay}},[e("p",{staticClass:"more-content-paragraph"},[t._v("Day of the week")]),e("h2",{staticClass:"more-content-info"},[t._v(" "+t._s((new Date).getDay())+" ")])]),e("div",{staticClass:"more-content-item",class:{"more-content-item-light":t.isMorning||t.isDay}},[e("p",{staticClass:"more-content-paragraph"},[t._v("Day of the year")]),e("h2",{staticClass:"more-content-info"},[t._v(t._s((new Date).getDayOfYear()))])]),e("div",{staticClass:"more-content-item",class:{"more-content-item-light":t.isMorning||t.isDay}},[e("p",{staticClass:"more-content-paragraph"},[t._v("Week number")]),e("h2",{staticClass:"more-content-info"},[t._v(t._s((new Date).getWeek()))])])])])])},s=[],a={data(){return{greeting:"",quote:"",author:"",time:"",timezone:"",showMore:!1,moreButtonText:"More",timeZoneAbbr:""}},computed:{isMorning(){const t=(new Date).getHours();return t>=6&&t<10},isDay(){const t=(new Date).getHours();return t>=10&&t<18},isEvening(){const t=(new Date).getHours();return t>=18&&t<22},isNight(){const t=(new Date).getHours();return t>=22||t<6},greetingSymbolSrc(){(new Date).getHours();const t=document.getElementById("greeting-symbol");this.isMorning||this.isDay?t.classList.add("sun-icon"):t.classList.add("moon-icon")}},methods:{playAudio(){this.$refs.audio.play()},stopAudio(){this.$refs.audio.pause()},getTime(){const t=new Date,e=t.getHours().toString().padStart(2,"0"),o=t.getMinutes().toString().padStart(2,"0"),i=new Intl.DateTimeFormat("en",{timeZoneName:"short"}),n=i.format(t).split(" ").pop();this.time=`${e}:${o}`,this.timeZoneAbbr=n},changeQuote(){const t=[{text:"Life is like riding a bicycle. To keep your balance, you must keep moving.",author:"Albert Einstein"},{text:"The works must be conceived with fire in the soul but executed with clinical coolness.",author:"Joan Miro"},{text:"Your time is limited, don't waste it living someone else's life.",author:"Steve Jobs"},{text:"Knowledge is power.",author:"Francis Bacon"},{text:"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",author:"Oprah Winfrey"},{text:"It is during our darkest moments that we must focus to see the light.",author:"Aristotle"},{text:"Let's not talk about Communism. Communism was just an idea, just pie in the sky.",author:"Boris Yeltsin"},{text:"Somewhere, something incredible is waiting to be known.",author:"Carl Sagan"},{text:"Knowledge is of no value unless you put it into practice.",author:"Anton Chekhov"}],e=Math.floor(Math.random()*t.length),o=t[e];this.quote=o.text,this.author=o.author},toggleMore(){this.showMore=!this.showMore,this.moreButtonText=this.showMore?"Less":"More"},updated(){const t=document.querySelector(".more-button-arrow");t&&(this.showMore?t.style.transform="rotate(180deg)":t.style.transform="rotate(0deg)")}},mounted(){this.changeQuote();document.getElementById("greeting-symbol");const t=(new Date).getHours();this.greeting=t>=6&&t<10?"GOOD MORNING, IT’S CURRENTLY":t>=10&&t<16?"GOOD DAY, IT’S CURRENTLY":t>=16&&t<22?"GOOD EVENING, IT’S CURRENTLY":"GOOD NIGHT, IT’S CURRENTLY";const e=document.querySelector("body");this.isMorning||this.isDay?e.classList.add("day-image"):e.classList.add("night-image"),this.getTime(),setInterval((()=>{this.getTime()}),1e3),this.timezone=Intl.DateTimeFormat().resolvedOptions().timeZone}};Date.prototype.getDayOfYear=function(){var t=new Date(this.getFullYear(),0,1);return Math.ceil((this-t)/864e5)},Date.prototype.getWeek=function(){var t=new Date(this.getTime());t.setHours(0,0,0,0),t.setDate(t.getDate()+3-(t.getDay()+6)%7);var e=new Date(t.getFullYear(),0,4);return 1+Math.round(((t.getTime()-e.getTime())/864e5-3+(e.getDay()+6)%7)/7)};var r=a,c=o(1),u=(0,c.Z)(r,n,s,!1,null,null,null),l=u.exports;i.ZP.config.productionTip=!1,new i.ZP({render:t=>t(l)}).$mount("#app")},661:function(t,e,o){t.exports=o.p+"media/Soul_Alphabet.f374e923.mp3"}},e={};function o(i){var n=e[i];if(void 0!==n)return n.exports;var s=e[i]={exports:{}};return t[i](s,s.exports,o),s.exports}o.m=t,function(){var t=[];o.O=function(e,i,n,s){if(!i){var a=1/0;for(l=0;l<t.length;l++){i=t[l][0],n=t[l][1],s=t[l][2];for(var r=!0,c=0;c<i.length;c++)(!1&s||a>=s)&&Object.keys(o.O).every((function(t){return o.O[t](i[c])}))?i.splice(c--,1):(r=!1,s<a&&(a=s));if(r){t.splice(l--,1);var u=n();void 0!==u&&(e=u)}}return e}s=s||0;for(var l=t.length;l>0&&t[l-1][2]>s;l--)t[l]=t[l-1];t[l]=[i,n,s]}}(),function(){o.d=function(t,e){for(var i in e)o.o(e,i)&&!o.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){o.p="/daytime/"}(),function(){var t={143:0};o.O.j=function(e){return 0===t[e]};var e=function(e,i){var n,s,a=i[0],r=i[1],c=i[2],u=0;if(a.some((function(e){return 0!==t[e]}))){for(n in r)o.o(r,n)&&(o.m[n]=r[n]);if(c)var l=c(o)}for(e&&e(i);u<a.length;u++)s=a[u],o.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return o.O(l)},i=self["webpackChunkdaytime"]=self["webpackChunkdaytime"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=o.O(void 0,[998],(function(){return o(375)}));i=o.O(i)})();
//# sourceMappingURL=app.262392cb.js.map