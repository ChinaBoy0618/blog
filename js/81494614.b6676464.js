(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["81494614"],{6389:function(t,e,a){},8090:function(t,e,a){"use strict";var s=a("6389"),n=a.n(s);n.a},e00c:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{attrs:{padding:""}},[a("q-list",{staticClass:"rounded-borders",attrs:{padding:""}},[a("Item",{attrs:{data:t.data}})],1)],1)},n=[],i=a("758b"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",t._l(t.data,function(e){return a("div",{key:e.index},[a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"q-mt-md",attrs:{clickable:""}},[a("q-item-section",{on:{click:function(a){return t.toPostDetail(e.number)}}},[a("q-item-label",[a("div",{staticClass:"text-h6 text-cyan-9"},[t._v(t._s(e.title))])]),a("q-item-label",{staticClass:"text-body1 text-gray-light",attrs:{lines:"4"}},[t._v("\n          "+t._s(t._f("htmlToText")(e.body_html))+"\n        ")])],1),a("q-item-section",{attrs:{side:"",top:""}},t._l(e.labels,function(e){return a("q-chip",{key:e.index,staticClass:"label",style:"border-color: #"+e.color+"; color: #"+e.color+";",attrs:{dense:"",outline:"",square:"",clickable:""},on:{click:function(a){return t.chipClickHandler(e.name)}}},[t._v("\n          "+t._s(e.name)+"\n        ")])}),1),a("q-item-section",{staticClass:"q-pt-sm created-at",attrs:{side:"",top:""}},[a("q-item-label",{attrs:{caption:""}},[t._v(t._s(t._f("dateFormate")(e.created_at)))])],1)],1),a("q-separator",{attrs:{spaced:"",inset:""}})],1)}),0)},o=[],c=(a("a481"),a("bd4c")),l={name:"Item",props:{data:{type:Array,required:!0}},filters:{dateFormate:function(t){return c["a"].formatDate(t,"YYYY-MM-DD")},htmlToText:function(t){return t.replace(/<\/?.+?>/g,"")}},methods:{toPostDetail:function(t){this.$router.push("/posts/".concat(t))},chipClickHandler:function(t){console.log(t)}}},d=l,u=(a("8090"),a("2877")),p=Object(u["a"])(d,r,o,!1,null,"55a833d0",null),m=p.exports,f={name:"List",components:{Item:m},data:function(){return{data:[]}},methods:{getIssueList:function(){var t=this;i["a"].get("/repos/".concat(this.$store.getters.repo,"/issues")).then(function(e){console.log(e.data),t.$set(t,"data",e.data),t.$q.loading.hide()})}},created:function(){this.$q.loading.show({delay:250}),this.getIssueList()}},h=f,b=Object(u["a"])(h,s,n,!1,null,null,null);e["default"]=b.exports}}]);