(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{1009:function(t,e,a){"use strict";var n=a(994);a.n(n).a},1010:function(t,e,a){var n=a(987);(t.exports=a(75)(!1)).push([t.i,"\n.ant-layout-header,.ant-menu-dark{background:#0063d4\n}\n.ant-layout-header .ant-input-affix-wrapper .ant-input-prefix{color:#fff\n}\n.ant-menu-submenu-popup.ant-menu-dark .ant-menu-item-selected,.ant-menu.ant-menu-dark .ant-menu-item-selected{background-color:#0063d4\n}\n.ant-layout-header input{background-color:#408adf;border:none\n}\n.logo{width:120px;height:31px;background:url("+n(a(988))+");margin:16px 28px 16px 0;float:left\n}\n.left-menu h3{padding-left:24px;text-transform:uppercase;color:#97b1c7\n}\n.left-menu .ant-menu-item{margin-bottom:0;line-height:24px;height:24px\n}\n.left-menu .ant-menu-item>span{font-weight:700\n}",""])},1013:function(t,e,a){"use strict";a.r(e);a(985);var n=a(996),i=a(986),s=[{name:"",list:[{name:"Home",icon:"home"},{name:"Live",icon:"wifi"},{name:"Orders",icon:"schedule"},{name:"Fleet",icon:"car"},{name:"Customers",icon:"team"},{name:"Analytics",icon:"line-chart"},{name:"Chats",icon:"message"},{name:"Scan",icon:"barcode"}]},{name:"Services",list:[{name:"Services",icon:"gift"},{name:"Coverages",icon:"environment-o"},{name:"Consignments",icon:"solution"},{name:"Items",icon:"database"}]},{name:"Finances",list:[{name:"Billing",icon:"form"},{name:"Discounts",icon:"wallet"},{name:"Referral",icon:"usergroup-add"},{name:"Campaigns",icon:"sound"}]},{name:"Settings",list:[{name:"Settings",icon:"setting"},{name:"Apps",icon:"cloud-download-o"}]}],o={components:{Account:n.a},props:["props"],beforeCreate:function(){},created:function(){},data:function(){return{collapsed:!1,q:"",links:s,data:i}},methods:{info:function(t){this.$message.info(t||"test")},onSearch:function(){this.$message.info("searching...")}},computed:{cache:function(){return{}}}},r=(a(1009),a(53)),c=Object(r.a)(o,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-layout",{attrs:{id:"app"}},[a("a-layout-header",{staticClass:"header"},[a("div",{staticClass:"logo"}),t._v(" "),a("a-menu",{style:{lineHeight:"64px"},attrs:{theme:"dark",mode:"horizontal",defaultSelectedKeys:["2"]}},[a("a-menu-item",{key:"search"},[a("a-input",{ref:"q",staticClass:"mr-3",attrs:{placeholder:"Search",size:"large"},model:{value:t.q,callback:function(e){t.q=e},expression:"q"}},[a("a-icon",{attrs:{slot:"prefix",type:"search"},slot:"prefix"})],1),t._v(" "),a("a-button",{attrs:{type:"primary",shape:"circle",icon:"plus"}})],1),t._v(" "),a("a-menu-item",{key:"1"})],1)],1),t._v(" "),a("a-layout",[a("a-layout-sider",{staticStyle:{background:"#fff"},attrs:{width:"200"}},t._l(t.links,function(e){return a("div",{staticClass:"left-menu mt-5 mb-10"},["string"==typeof e.name&&e.name.length>0?a("h3",[t._v(t._s(e.name))]):t._e(),t._v(" "),a("a-menu",{style:{borderRight:0},attrs:{mode:"inline"}},t._l(e.list,function(e){return a("a-menu-item",{key:e.name},[a("a-icon",{attrs:{type:e.icon}}),t._v(" "),a("span",[t._v(t._s(e.name))])],1)}),1)],1)})),t._v(" "),a("a-layout",{staticStyle:{padding:"0 24px 24px"}},[a("a-breadcrumb",{staticStyle:{margin:"16px 0"}},[a("a-breadcrumb-item",[t._v("Home")]),t._v(" "),a("a-breadcrumb-item",[a("a",{attrs:{href:""}},[t._v("Settings")])]),t._v(" "),a("a-breadcrumb-item",[t._v("Account")])],1),t._v(" "),a("div",{staticClass:"mb-3"},[a("div",{staticClass:"float-right"},[a("a-button",{staticClass:"mr-3",attrs:{htmlType:"button"}},[t._v("Cancel")]),t._v(" "),a("a-button",{attrs:{type:"primary",htmlType:"submit"}},[t._v("Save")])],1),t._v(" "),a("h1",[t._v("Account")])]),t._v(" "),a("div",{staticClass:"mb-5"},[a("a-layout-content",{style:{background:"#fff",margin:0,minHeight:"280px"}},[a("account",{attrs:{props:{data:t.data}}})],1)],1),t._v(" "),a("div",{staticClass:"mb-3"},[a("div",{staticClass:"float-right"},[a("a-button",{staticClass:"mr-3",attrs:{htmlType:"button"}},[t._v("Cancel")]),t._v(" "),a("a-button",{attrs:{type:"primary",htmlType:"submit"}},[t._v("Save")])],1)])],1)],1)],1)},[],!1,null,null,null);c.options.__file="test.vue";e.default=c.exports},994:function(t,e,a){var n=a(1010);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,a(76).default)("67183638",n,!0,{})}}]);