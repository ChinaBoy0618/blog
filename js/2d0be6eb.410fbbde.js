(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d0be6eb"],{"2fde":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-page",{attrs:{padding:""}},[e("div",{staticClass:"q-mt-lg",domProps:{innerHTML:t._s(t.data.body_html)}}),e("div",t._l(t.data.labels,function(a){return e("q-chip",{key:a.index,staticClass:"label",style:"border-color: #"+a.color+"; color: #"+a.color+";",attrs:{dense:"",outline:"",square:"",clickable:""}},[t._v("\n      "+t._s(a.name)+"\n    ")])}),1)])},s=[],o=e("bd4c"),c=e("758b"),d={name:"Post",data:function(){return{data:[]}},methods:{getIssue:function(){var t=this;c["a"].get("/repos/".concat(this.$store.getters.repo,"/issues/").concat(this.$route.params.id)).then(function(a){console.log(a.data),a.data.body_html='\n            <div class="q-mb-lg">\n              <h1 class="text-cyan-9">'.concat(a.data.title,'</h1>\n              <code class="text-italic">\n                Updated at ').concat(t.dateFormate(a.data.updated_at)," by ").concat(t.$store.getters.username,"\n              </code>\n            </div>\n            ").concat(a.data.body_html,"\n            "),t.$set(t,"data",a.data),t.$q.loading.hide()})},dateFormate:function(t){return o["a"].formatDate(t,"YYYY-MM-DD")}},created:function(){this.$q.loading.show({delay:250}),this.getIssue()}},l=d,r=e("2877"),i=Object(r["a"])(l,n,s,!1,null,null,null);a["default"]=i.exports}}]);