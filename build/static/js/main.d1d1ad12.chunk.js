(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,n,t){e.exports=t(47)},33:function(e,n,t){},34:function(e,n,t){},40:function(e,n,t){},41:function(e,n,t){},42:function(e,n,t){},43:function(e,n,t){},44:function(e,n,t){},45:function(e,n,t){},46:function(e,n,t){},47:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),i=t(13),o=t.n(i),c=(t(33),t(34),t(48)),l=t(4),u=t(5),s=t(7),d=t(6),m=t(8),p=t(2),h=t(3);function b(){var e=Object(p.a)(["\n  font-size: 16px;\n  font-weight: 500;\n  color: ",";\n  text-decoration: none;\n  cursor: pointer;\n\n  &:hover {\n    color: ",";\n  }\n\n  &:active {\n    color: ",";\n  }\n"]);return b=function(){return e},e}function f(){var e=Object(p.a)(["\n  display: flex;\n"]);return f=function(){return e},e}function g(){var e=Object(p.a)(["\n  // position: relative;\n  display: flex;\n  margin: 0 auto;\n  padding-right: 20px;\n  padding-left: 20px;\n  max-width: 980px;\n  align-items: center;\n  height: 58px;\n\n  @media (max-width: 769px) {\n    padding-right: 30px;\n    padding-left: 30px;\n  }\n"]);return g=function(){return e},e}function v(){var e=Object(p.a)(["\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 100%;\n"]);return v=function(){return e},e}function x(){var e=Object(p.a)([""]);return x=function(){return e},e}function E(){var e=Object(p.a)(["\n  flex: 1;\n"]);return E=function(){return e},e}function _(){var e=Object(p.a)([""]);return _=function(){return e},e}function k(){var e=Object(p.a)([""]);return k=function(){return e},e}function w(){var e=Object(p.a)(["\n  border-bottom: rgb(223, 221, 221) solid 1px;\n\n  // &.is-not-mobile and mobile\n  position: sticky;\n  top: 0;\n  left: 0;\n  width: 100%;\n  background-color: ",";\n  z-index: 10;\n  height: ",";\n\n  -webkit-transition: background 0.53s, height 0.1s;\n  transition: background 0.53s, height 0.1s;\n"]);return w=function(){return e},e}var O=h.b.header(w(),function(e){return e.headerColor},function(e){return e.headerHeight}),j=(h.b.nav(k()),h.b.div(_()),h.b.div(E())),y=(h.b.div(x()),h.b.div(v())),N=h.b.div(g()),M=h.b.div(f()),S=h.b.a(b(),function(e){return e.linkColor},function(e){return e.hoverColor},function(e){return e.activeColor});function C(){var e=Object(p.a)(["\n  flex: 0 0 40px;\n  padding: 0 25px;\n  display: flex;\n  align-items: center;\n  color: #006aff;\n  // background: blue;\n  // border-left: black solid 1px;\n\n  &:before {\n    content: \"\";\n    // background: blue;\n    display: inline-block;\n    background-image: url('/src/static/images/arrow.svg');\n    background-size: 28px 28px;\n  }\n"]);return C=function(){return e},e}function P(){var e=Object(p.a)(["\n  margin: 0;\n  padding: 0;\n  display: list-item;\n  padding-bottom: 8px;\n  line-height: 18px;\n\n  &:first-child {\n    padding-top: 2px;\n  }\n\n  a {\n    padding: 0;\n    margin: 0;\n    color: #0560b3;\n    // color: #313131;\n    font-size: 13px;\n    font-weight: 400px;\n  }\n\n  // @media (max-width: 769px) {\n  //   background: red;\n  // }\n"]);return P=function(){return e},e}function z(){var e=Object(p.a)([""]);return z=function(){return e},e}function D(){var e=Object(p.a)(["\n      color: green;\n    "]);return D=function(){return e},e}function T(){var e=Object(p.a)(["\n  margin: 0;\n  padding: 0;\n  font-size: 15px;\n  line-height: 40px;\n  font-weight: 600;\n  color: ",";\n"]);return T=function(){return e},e}function U(){var e=Object(p.a)(["\n  ",".is-mobile & {\n    margin: 0;\n  }\n\n  ",".not-mobile & {\n    margin: 25px 40px 24px 0;\n  }\n"]);return U=function(){return e},e}function L(){var e=Object(p.a)(["\n  display: flex;\n\n  ",".is-mobile & {\n    flex-direction: column;\n  }\n\n  ",".not-mobile & {\n    flex-direction: row;\n  }\n"]);return L=function(){return e},e}function A(){var e=Object(p.a)(["\n  display: flex;\n  margin: 0 auto;\n  // padding: 10px;\n  max-width: 980px;\n  padding: 10px 0;\n"]);return A=function(){return e},e}function H(){var e=Object(p.a)(["\n  display: none;\n\n  padding: 0 30px;\n  &.not-mobile {\n    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.175);\n    left: 0;\n    position: absolute;\n    text-align: left;\n    width: 100%;\n    z-index: 20;\n    background-color: white;\n  }\n\n  ",".is-active.has-items & {\n    display: block;\n    border-top: rgb(223, 221, 221) solid 1px;\n\n    opacity: 1;\n    transition: opacity 0.1s, visibility 0.1s;\n    transition-delay: 0.3s;\n  }\n\n  &.is-mobile {\n    width: 100%;\n    background-color: #fbfbff;\n  }\n"]);return H=function(){return e},e}function I(){var e=Object(p.a)(["\n  flex-wrap: wrap;\n  outline: none;\n\n  // background: blue;\n  &.nav-link {\n    line-height: 58px;\n  }\n\n  a {\n    font-size: 15px;\n    font-weight: 400;\n    padding: 0 30px;\n    color: black;\n\n    &:hover {\n      color: #505050;\n    }\n\n    &:hover, &:focus, &:active {\n      outline: none;\n    }\n    \n  }\n\n  @media (max-width: 769px) {\n    border-bottom: 1px solid #e2e2e2;\n    display: flex;\n\n    a {\n      padding: 0;\n      margin: 12px 0 13px 30px;\n      font-size: 15px;\n\n      -ms-flex: 1 0 50%;\n      flex: 1 0 50%;\n      line-height: 28px;\n    }  \n  }\n"]);return I=function(){return e},e}function W(){var e=Object(p.a)(["\n  display: flex;\n  flex-direction: row;\n  height: 100%;\n  margin: 0;\n\n  @media (max-width: 769px) {\n    flex-direction: column;\n    width: 100%;\n    padding: 90px 0;\n  }\n"]);return W=function(){return e},e}function X(){var e=Object(p.a)(["\n  display: flex;\n  // flex-direction: row;\n  @media (max-width: 769px) {\n    // background: blue !important;\n    display: none;\n    position: fixed;\n    top: 0;\n    right: 0;\n    // flex-direction: column;\n    height: 100%;\n    width: 100%;\n    background: #fff;\n    margin-top: 1px;\n    z-index: 20;\n\n    &.is-mobile {\n      display: flex;\n    }\n  }\n"]);return X=function(){return e},e}function F(){var e=Object(p.a)(["\n  &,\n  &:before,\n  &:after {\n    width: 24px;\n    height: 1px;\n    border-radius: 2px;\n    display: block;\n    position: absolute;\n    background: ",';\n    z-index: 25;\n\n    transition: all 200ms ease-in-out;\n  }\n\n  &:before {\n    content: "";\n    top: -8px;\n  }\n\n  &:after {\n    content: "";\n    bottom: -8px;\n  }\n\n  // animation\n  &.active {\n    background-color: transparent;\n\n    &:before,\n    &:after {\n      top: 0;\n    }\n\n    &:before {\n      transform: rotate(45deg);\n    }\n\n    &:after {\n      transform: rotate(-45deg);\n    }\n  }\n']);return F=function(){return e},e}function V(){var e=Object(p.a)(["\n  position: absolute;\n  right: 0;\n\n  margin-right: 20px;\n  height: 24px;\n  width: 24px;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n  box-sizing: border-box;\n\n  &:focus {\n    outline: none;\n  }\n"]);return V=function(){return e},e}function R(){var e=Object(p.a)(["\n  color: darkred;\n"]);return R=function(){return e},e}function B(){var e=Object(p.a)(["\n  position: relative;\n  z-index: 50;\n"]);return B=function(){return e},e}var G=h.b.div(B()),q=Object(h.b)(S)(R()),J=h.b.button(V()),$=h.b.span(F(),function(e){return e.color}),K=h.b.div(X()),Q=h.b.ul(W()),Y=h.b.li(I()),Z=h.b.div(H(),Y),ee=h.b.div(A()),ne=h.b.ul(L(),Z,Z),te=h.b.li(U(),Z,Z),re=h.b.h6(T(),function(e){return e.color&&Object(h.a)(D())}),ae=h.b.ul(z()),ie=h.b.li(P()),oe=h.b.span(C()),ce=function(e){var n=e.linkColor,t=e.hoverColor,r=e.activeColor,i=e.link;return a.a.createElement(G,null,a.a.createElement(q,{linkColor:n,hoverColor:t,activeColor:r,href:i},"THE LOGO"))},le=t(50),ue=function(e){var n=e.dropdownSectionlinks,t=e.title,r=n.map(function(e,n){return a.a.createElement(ie,{key:n},a.a.createElement(le.a,{to:e.url},e.name))});return a.a.createElement(te,null,a.a.createElement(re,null,t),a.a.createElement(ae,null,r))},se=function(e){var n=e.isMobile,t=e.hasItems,r=e.onClick;return t&&n?a.a.createElement(oe,{onClick:r}):null},de=function(e){function n(e){var t;return Object(l.a)(this,n),(t=Object(s.a)(this,Object(d.a)(n).call(this,e))).onMouseEnterHandler=function(){t.props.isMobile||(console.log("on mouse enter"),t.setState({isActive:!0}))},t.onMouseLeaveHandler=function(){t.props.isMobile||(console.log("on mouse leve"),t.setState({isActive:!1}))},t.isActiveToggle=function(){console.log("is active enter"),t.setState({isActive:!t.state.isActive})},t.state={isActive:!1},t}return Object(m.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){var e=this.props,n=e.dropdown,t=e.category,i=(e.className,e.onClick,e.isMobile);console.log("ismobile?",i);var o=n.map(function(e,n){return a.a.createElement(ue,{key:n,title:e.name,dropdownSectionlinks:e.categories})}),c=o.length>0;return a.a.createElement(Y,{onMouseEnter:this.onMouseEnterHandler,onMouseLeave:this.onMouseLeaveHandler,onMouseUp:this.onMouseLeaveHandler,className:"nav-link"+(this.state.isActive?" is-active":"")+(c?" has-items":"")},a.a.createElement(le.a,{to:t.url},t.name),a.a.createElement(r.Fragment,null,a.a.createElement(se,{onClick:this.isActiveToggle,isMobile:i,hasItems:c}),a.a.createElement(Z,{className:i?"is-mobile":" not-mobile"},a.a.createElement(ee,null,a.a.createElement(ne,null,o)))))}}]),n}(a.a.Component),me=function(e){function n(){return Object(l.a)(this,n),Object(s.a)(this,Object(d.a)(n).apply(this,arguments))}return Object(m.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){var e=this.props,n=e.categories,t=e.onClick,r=e.className,i=e.isMobile;console.log("cat",n);var o=n.map(function(e,n){return a.a.createElement(de,{key:n,category:e,dropdown:e.dropdown,onClick:t,isMobile:i,className:r})});return a.a.createElement(K,{className:r},a.a.createElement(Q,null,o))}}]),n}(a.a.PureComponent),pe=function(e){var n=e.onClick,t=e.isActive;return a.a.createElement(J,{onClick:n},a.a.createElement($,{className:t?"active":"",color:"black"}))},he=function(e){function n(){var e;return Object(l.a)(this,n),(e=Object(s.a)(this,Object(d.a)(n).call(this))).handleWindowSizeChange=function(){e.setState({width:window.innerWidth})},e.menuToggle=function(){e.setState(function(e){return{mobileMenuIsActive:!e.mobileMenuIsActive}}),document.body.classList.toggle("noscroll")},e.menuCloser=function(){e.setState({mobileMenuIsActive:!1})},e.state={width:window.innerWidth,mobileMenuIsActive:!1,categories:[{name:"Men",url:"/men",dropdown:[{name:"Men subcategory1",url:"/men_subcategory",categories:[{name:"Subcategory1",url:"/men"},{name:"Subcategory2",url:"/men"},{name:"Subcategory3",url:"/men"}]},{name:"Men subcategory2",url:"/men_subcategory",categories:[{name:"Subcategory1",url:"/men"},{name:"Subcategory2",url:"/men"},{name:"Subcategory3",url:"/men"}]}]},{name:"Women",url:"/women",dropdown:[{name:"Women subcategory1",url:"/men_subcategory",categories:[{name:"Subcategory1",url:"/men"},{name:"Subcategory2",url:"/men"},{name:"Subcategory3",url:"/men"}]},{name:"Men subcategory2",url:"/men_subcategory",categories:[{name:"Subcategory1",url:"/men"},{name:"Subcategory2",url:"/men"},{name:"Subcategory3",url:"/men"}]}]},{name:"My Cart",url:"/mycart",dropdown:[]},{name:"Sign in",url:"/signin",dropdown:[]}]},e}return Object(m.a)(n,e),Object(u.a)(n,[{key:"componentWillMount",value:function(){window.addEventListener("resize",this.handleWindowSizeChange)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleWindowSizeChange)}},{key:"render",value:function(){var e=this.state,n=e.width,t=e.categories,r=n<=768;return a.a.createElement(O,{className:this.state.mobileMenuIsActive?"is-mobile":"is-not-mobile",headerColor:"#fff",headerHeight:"58px"},a.a.createElement(y,null,a.a.createElement(N,null,a.a.createElement(M,null,a.a.createElement(ce,{linkColor:"rgb(27, 27, 27)",hoverColor:"rgb(27, 27, 27)",link:"/"}),r&&a.a.createElement(pe,{onClick:this.menuToggle,isActive:this.state.mobileMenuIsActive})),a.a.createElement(j,null),a.a.createElement(me,{categories:t,className:this.state.mobileMenuIsActive?"is-mobile":"is-not-mobile",isMobile:r}))))}}]),n}(a.a.Component),be=t(16),fe=t(24),ge=(t(40),t(41),function(e){return a.a.createElement("div",{className:"form-group"},a.a.createElement("select",{id:e.name,name:e.name,value:e.value,onChange:e.handleChange,className:"form-control"},a.a.createElement("option",{className:"option",value:""},e.placeholder),e.options.map(function(e){return a.a.createElement("option",{className:"option",key:e,value:e,label:e},e)})))}),ve=[{url:"Url1",text:"Link1"},{url:"Url2",text:"Link2"},{url:"Url3",text:"Link3"},{url:"Url4",text:"Link4"},{url:"Url4",text:"Link4"}],xe=function(e){function n(){var e;return Object(l.a)(this,n),(e=Object(s.a)(this,Object(d.a)(n).call(this))).handleFormInput=function(n){var t=n.target.value,r=n.target.name;e.setState(function(e){return{newUserOptions:Object(fe.a)({},e.newUserOptions,Object(be.a)({},r,t))}},console.log(e.state.newUserOptions))},e.state={newUserOptions:{currency:"",language:""},languageOptions:["English","Russian","Ukrainian"],currencyOptions:["USD","HRV","EUR"]},e}return Object(m.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){return a.a.createElement("div",{className:"footer-section"},a.a.createElement("div",{className:"footer-wrapper"},a.a.createElement("div",{className:"footer-container"},a.a.createElement("footer",null,a.a.createElement("div",{className:"footer-menu"},a.a.createElement(Ee,{title:"Title",items:ve}),a.a.createElement(Ee,{title:"Title",items:ve}),a.a.createElement(Ee,{title:"Title",items:ve}),a.a.createElement(Ee,{title:"Title",items:ve})),a.a.createElement("div",{className:"footer-info-wrapper"},a.a.createElement("div",{className:"footer-info-container"},a.a.createElement("div",{className:"footer-logo-wrapper"},a.a.createElement("a",{href:"/"},"THE LOGO")),a.a.createElement("div",{className:"footer-info"},a.a.createElement("div",{className:"footer-info-form"},a.a.createElement(ge,{title:"Language",name:"language",options:this.state.languageOptions,value:this.state.newUserOptions.language,placeholder:"Language",handleChange:this.handleFormInput})),a.a.createElement("div",{className:"footer-info-form"},a.a.createElement(ge,{title:"Currency",name:"currency",options:this.state.currencyOptions,value:this.state.newUserOptions.currency,placeholder:"Currency",handleChange:this.handleFormInput})))))))))}}]),n}(a.a.Component),Ee=(t(42),function(e){function n(e){var t;return Object(l.a)(this,n),(t=Object(s.a)(this,Object(d.a)(n).call(this,e))).state={footerData:{header:"header_name",sections:[{url:"Url1",text:"Link1"},{url:"Url2",text:"Link2"},{url:"Url3",text:"Link3"},{url:"Url4",text:"Link4"}]}},t}return Object(m.a)(n,e),Object(u.a)(n,[{key:"componentDidMount",value:function(){}},{key:"getData",value:function(){var e=this,n=new Request("websiteUrl");fetch(n).then(function(e){return e.json()}).then(function(n){e.setState({footerData:n})})}},{key:"render",value:function(){var e=this.props,n=e.title,t=e.items,r=null;return console.log(t),t&&t.length>0&&(r=t.map(function(e,n){return a.a.createElement("li",{key:n,className:"menu-list"},a.a.createElement("a",{href:e.url||"",className:"menu-list-item"},e.text))})),a.a.createElement("div",{className:"footer-submenu-container"},a.a.createElement("section",null,a.a.createElement("h4",{className:"submenu-header"},n),a.a.createElement("ul",{className:"submenu-list-section"},r)))}}]),n}(a.a.Component)),_e=function(e){return a.a.createElement(r.Fragment,null,a.a.createElement(he,null),e.children,a.a.createElement(xe,null))},ke=function(e){return a.a.createElement("div",null,a.a.createElement("h1",null,"ProductContainer"))},we=(t(43),t(49));t(44);function Oe(){var e=Object(p.a)(["\n  outline: none;\n  text-decoration: none;\n  &:hover {\n    cursor: pointer;\n    z-index: 5;\n    opacity: 0.2;\n    -webkit-transition: all 500ms ease;\n    -moz-transition: all 500ms ease;\n    -ms-transition: all 500ms ease;\n    -o-transition: all 500ms ease;\n    transition: all 500ms ease;\n  }\n"]);return Oe=function(){return e},e}var je=h.b.a(Oe()),ye=function(e){e.imageUrl;var n=e.className;return a.a.createElement("div",{className:"image-wrap "+n},a.a.createElement(je,null,a.a.createElement("img",{className:"image-content",src:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",alt:"New Product"})),a.a.createElement("div",{className:"image-description-wrap"},a.a.createElement("h3",{className:"image-title"},"Sport time"),a.a.createElement("h4",{className:"image-subtitle"},"Special offer for all sports wear")),a.a.createElement(Me,{className:"btn-visibility",buttonText:"Button text",buttonUrl:"/url"}))},Ne={fontWeight:"300",fontSize:"15px",position:"relative",top:"45%",left:"40%",background:"#fff",color:"black",zIndex:"1",width:"160px",height:"32px",paddingLeft:"25px",paddingRight:"25px",paddingTop:"10px",paddingBottom:"10px",textAlign:"center"},Me=function(e){var n=e.buttonUrl,t=e.buttonText,r=e.className;return a.a.createElement("a",{className:r,href:n,style:Ne},t)},Se=function(e){function n(e){var t;return Object(l.a)(this,n),(t=Object(s.a)(this,Object(d.a)(n).call(this,e))).clickHandler=function(){t.setState({redirect:!t.redirect}),console.log("Btn clicked")},t.state={redirect:!1},t}return Object(m.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){return this.state.redirect?a.a.createElement(we.a,{to:"/prop"}):a.a.createElement("div",{className:"gallery"},a.a.createElement("div",{className:"column left"},a.a.createElement(ye,{className:"wrap-left"}),a.a.createElement(ye,{className:"wrap-left buto"})),a.a.createElement("div",{className:"column right"},a.a.createElement(ye,{className:"wrap-big"})))}}]),n}(a.a.Component),Ce=(t(45),function(e){function n(e){var t;return Object(l.a)(this,n),(t=Object(s.a)(this,Object(d.a)(n).call(this,e))).handleFormInput=function(e){var n=e.target.value;t.setState({userEmail:n})},t.onFormSubmit=function(e){e.preventDefault();var n=t.state.userEmail;console.log("user email: ",n)},t.state={userEmail:""},t}return Object(m.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){return a.a.createElement("div",{className:"email-section"},a.a.createElement("div",{className:"email-section-container"},a.a.createElement("div",{className:"form-header-container inline-section"},a.a.createElement("h4",{className:"form-header"},"SIGN UP FOR NEWS & GET 15% OFF"),a.a.createElement("h3",{className:"form-subheader"},"Subscibe to get latest information about new products")),a.a.createElement("div",{className:"form-wrapper inline-section"},a.a.createElement("form",{className:"form-container",onSubmit:this.onFormSubmit},a.a.createElement("label",{className:"form-label"}),a.a.createElement("input",{className:"input-form",placeholder:"Enter your email",name:"email",type:"text",onChange:this.handleFormInput}),a.a.createElement("button",{className:"form-btn"},"Subscribe")))))}}]),n}(a.a.Component));function Pe(){var e=Object(p.a)(["\n  margin: 0;\n  margin-bottom: 2px;\n  padding: 0;\n  color: red;\n\n  font-size: 13px;\n  font-weight: 400;\n  line-height: 1.2;\n\n  color: #8e8e8e;\n"]);return Pe=function(){return e},e}function ze(){var e=Object(p.a)(["\n  margin: 0;\n  margin-bottom: 2px;\n  padding: 0;\n  color: red;\n\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 1.5;\n  color: #3e3e3e;\n"]);return ze=function(){return e},e}function De(){var e=Object(p.a)(["\n  margin-top: 15px;\n"]);return De=function(){return e},e}var Te=h.b.div(De()),Ue=h.b.h4(ze()),Le=h.b.h5(Pe()),Ae=function(e){var n=e.headerText,t=e.subHeaderText,r=e.priceText;return a.a.createElement(Te,null,a.a.createElement(Ue,null,n),a.a.createElement(Le,null,t),r&&a.a.createElement(Le,null,r))};function He(){var e=Object(p.a)(["\n  background: darkred;\n  text-align: center;\n  // padding: 100px 30px;\n  width: 230px;\n  height: 300px;\n\n  color: white;\n  position: relative;\n  // background-image: url(",");\n  background-color: blue;\n  background-size: cover;\n"]);return He=function(){return e},e}var Ie=h.b.div(He(),function(e){return e.image}),We={textDecoration:"none",color:"black"},Xe=function(e){function n(e){var t;return Object(l.a)(this,n),(t=Object(s.a)(this,Object(d.a)(n).call(this,e))).state={sliderData:[{image_id:"1",image_alt:"image_alt",image_href:"https://a.lmcdn.ru/img389x562/M/P/MP002XM2482V_8161226_1_v1.jpeg",redirect_link:"/path/to/redirect",description:{header:"Product header",subheader:"Description subheader",product_price:"2308",product_currency_name:"\u0433\u0440\u043d"}},{image_id:"2",image_alt:"image_alt",image_href:"https://a.lmcdn.ru/img389x562/M/P/MP002XM2482V_8161226_1_v1.jpeg",redirect_link:"/path/to/redirect",description:{header:"Product header",subheader:"Description subheader",product_price:"2308",product_currency_name:"\u0433\u0440\u043d"}},{image_id:"3",image_alt:"image_alt",image_href:"https://a.lmcdn.ru/img389x562/M/P/MP002XM2482V_8161226_1_v1.jpeg",redirect_link:"/path/to/redirect",description:{header:"Product header",subheader:"Description subheader",product_price:"2308",product_currency_name:"\u0433\u0440\u043d"}},{image_id:"4",image_alt:"image_alt",image_href:"https://a.lmcdn.ru/img389x562/M/P/MP002XM2482V_8161226_1_v1.jpeg",redirect_link:"/path/to/redirect",description:{header:"Product header",subheader:"Description subheader",product_price:"2308",product_currency_name:"\u0433\u0440\u043d"}},{image_id:"5",image_alt:"image_alt",image_href:"https://a.lmcdn.ru/img389x562/M/P/MP002XM2482V_8161226_1_v1.jpeg",redirect_link:"/path/to/redirect",description:{header:"Product header",subheader:"Description subheader",product_price:"2308",product_currency_name:"\u0433\u0440\u043d"}},{image_id:"6",image_alt:"image_alt",image_href:"https://a.lmcdn.ru/img389x562/M/P/MP002XM2482V_8161226_1_v1.jpeg",redirect_link:"/path/to/redirect",description:{header:"Product header",subheader:"Description subheader",product_price:"2308",product_currency_name:"\u0433\u0440\u043d"}},{image_id:"7",image_alt:"image_alt",image_href:"https://a.lmcdn.ru/img389x562/M/P/MP002XM2482V_8161226_1_v1.jpeg",redirect_link:"/path/to/redirect",description:{header:"Product header",subheader:"Description subheader",product_price:"2308",product_currency_name:"\u0433\u0440\u043d"}},{image_id:"8",image_alt:"image_alt",image_href:"https://a.lmcdn.ru/img389x562/M/P/MP002XM2482V_8161226_1_v1.jpeg",redirect_link:"/path/to/redirect",description:{header:"Product header",subheader:"Description subheader",product_price:"2308",product_currency_name:"\u0433\u0440\u043d"}},{image_id:"9",image_alt:"image_alt",image_href:"https://a.lmcdn.ru/img389x562/M/P/MP002XM2482V_8161226_1_v1.jpeg",redirect_link:"/path/to/redirect",description:{header:"Product header",subheader:"Description subheader",product_price:"2308",product_currency_name:"\u0433\u0440\u043d"}},{image_id:"10",image_alt:"image_alt",image_href:"https://a.lmcdn.ru/img389x562/M/P/MP002XM2482V_8161226_1_v1.jpeg",redirect_link:"/path/to/redirect",description:{header:"Product header",subheader:"Description subheader",product_price:"2308",product_currency_name:"\u0433\u0440\u043d"}}]},t}return Object(m.a)(n,e),Object(u.a)(n,[{key:"componentDidMount",value:function(){}},{key:"getData",value:function(){var e=this,n=new Request("websiteUrl");fetch(n).then(function(e){return e.json()}).then(function(n){e.setState({sliderData:n})})}},{key:"render",value:function(){var e=this.state.sliderData,n=null;return console.log(e),e&&e.length>0?(n=e.map(function(e,n){return a.a.createElement("a",{key:n,className:"item-wrapper",href:e.redirect_link,style:We},a.a.createElement(Ie,{image:e.image_href}),a.a.createElement(Ae,{headerText:e.description.header,subHeaderText:e.description.subheader,priceText:e.description.product_price+" "+e.description.product_currency_name}))}),a.a.createElement(Be,{title:"Recomendations",subTitle:"Top product in this section"},n)):a.a.createElement("div",null)}}]),n}(r.Component);t(46);function Fe(){var e=Object(p.a)(["\n  h3,\n  h4 {\n    margin: 0;\n  }\n\n  margin-top: 30px;\n  margin-bottom: 20px;\n  text-align: left;\n\n  .section-main-header {\n    font-size: 18px;\n    font-weight: 600;\n    line-height: 1.5;\n    color: #3e3e3e;\n  }\n\n  .section-subheader {\n    font-size: 13px;\n    font-weight: 500;\n    line-height: 1.2;\n\n    color: #696969;\n  }\n"]);return Fe=function(){return e},e}var Ve=h.b.div(Fe()),Re=function(e){return a.a.createElement(Ve,null,a.a.createElement("h3",{className:"section-main-header"},e.header),a.a.createElement("h4",{className:"section-subheader"},e.subHeader))},Be=function(e){function n(e){var t;return Object(l.a)(this,n),(t=Object(s.a)(this,Object(d.a)(n).call(this,e))).nextSlide=function(){var e=t.state.position,n=t.props.children.length||1;t.doSliding("next",e===n-1?0:e+1)},t.prevSlide=function(){var e=t.state.position,n=t.props.children.length;t.doSliding("prev",0===e?n-1:e-1)},t.doSliding=function(e,n){console.log("Sliding status before: ",t.state.sliding),t.setState({sliding:!0,direction:e,position:n}),console.log("Sliding status after: ",t.state.sliding),setTimeout(function(){t.setState({sliding:!1})},50)},t.style="",t.state={position:0,direction:"next",sliding:!1},t}return Object(m.a)(n,e),Object(u.a)(n,[{key:"getOrder",value:function(e){var n=this.state.position,t=this.props.children.length||1;return e-n<0?t-Math.abs(e-n):e-n}},{key:"render",value:function(){var e=this,n=this.state,t=n.sliding,r=n.direction,i=this.props,o=i.title,c=i.subTitle,l=i.children;return a.a.createElement("div",null,a.a.createElement(Re,{header:o,subHeader:c}),a.a.createElement(Qe,null,a.a.createElement(qe,{sliding:t,direction:r},l.map(function(n,t){return a.a.createElement($e,{key:t,order:e.getOrder(t)},n)}))),a.a.createElement(Ze,{className:"prev-slider-btn",onClick:this.nextSlide},a.a.createElement(nn,{height:"20px",width:"20px",transform:"rotate(180)"})),a.a.createElement(Ze,{className:"next-slider-btn",onClick:this.prevSlide},a.a.createElement(nn,{height:"20px",width:"20px"})))}}]),n}(a.a.Component);function Ge(){var e=Object(p.a)(["\n  display: flex;\n  // margin: 0 0 20px 20px;\n  transition: ",";\n  transform: ",";\n"]);return Ge=function(){return e},e}var qe=h.b.div(Ge(),function(e){return e.sliding?"none":"transform 1.2s ease"},function(e){return e.sliding?"prev"===e.direction?"translateX(calc(2 * (-20% - 5px)))":"translateX(0%)":"translateX(calc(-20% - 2px))"});function Je(){var e=Object(p.a)(["\n  flex: 1 0 100%;\n  flex-basis: 19%;\n  margin-right: 5px;\n  order: ",";\n  opacity: ",";\n  transition: opacity 1s ease;\n"]);return Je=function(){return e},e}var $e=h.b.div(Je(),function(e){return e.order},function(e){return 1===e.order?.95:1});function Ke(){var e=Object(p.a)(["\n  width: 100%;\n  overflow: hidden;\n"]);return Ke=function(){return e},e}var Qe=h.b.div(Ke());function Ye(){var e=Object(p.a)(["\n  position: absolute;\n  top: 50%;\n  cursor: pointer;\n  z-index: 1;\n  cursor: pointer;\n  width: 40px;\n  height: 40px;\n  background-color: white;\n  border-radius: 32px;\n  box-shadow: rgba(0, 0, 0, 0.14) 0px 1px 1px 1px;\n  transition: .2s ease .1s;\n"]);return Ye=function(){return e},e}var Ze=h.b.div(Ye()),en={display:"inline-block",width:"20px",height:"20px",position:"absolute",top:"52%",left:"52%",transform:"translate(-50%, -50%)"},nn=function(e){return a.a.createElement("span",{className:e.className,style:en},a.a.createElement("svg",{viewBox:"0 0 18 18",role:"img","aria-label":"\u0414\u0430\u043b\u0435\u0435",focusable:"false",width:e.width,height:e.height,transform:e.transform},a.a.createElement("path",{d:"m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z","fill-rule":"evenodd"})))};function tn(){var e=Object(p.a)(["\n  position: relative;\n  max-width: 1200px;\n  margin: 0 auto;\n  padding-left: 20px;\n  padding-right: 20px;\n  margin-bottom: 30px;\n"]);return tn=function(){return e},e}var rn=h.b.div(tn()),an=function(e){var n=e.products;return n&&n.length>0?a.a.createElement("div",null,a.a.createElement(Re,{header:"Get more information",subHeader:"Products that makes you better"}),a.a.createElement(pn,null,n.map(function(e,n){return a.a.createElement(dn,{key:n},a.a.createElement(je,null,a.a.createElement(cn,null,a.a.createElement(un,{image:e.image})),a.a.createElement(Ae,{headerText:e.description.header,subHeaderText:e.description.subheader})))}))):null};function on(){var e=Object(p.a)(["\n  position: relative;\n  background-size: 100%;\n\n  // pseudo\n  ",' &:after {\n    content: "";\n    transition: opacity 0.2s ease;\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.2);\n    opacity: 0;\n  }\n']);return on=function(){return e},e}var cn=h.b.div(on(),dn);function ln(){var e=Object(p.a)(["\n  background-color: grey;\n  background-image: url(",");\n  z-index: 0;\n  padding-top: 120%;\n  background-position: center top;\n  background-size: cover;\n  background-repeat: no-repeat;\n  position: relative;\n  width: 100%;\n"]);return ln=function(){return e},e}var un=h.b.div(ln(),function(e){return e.image});function sn(){var e=Object(p.a)(["\n  display: inline-block;\n  vertical-align: top;\n  margin-left: 5px;\n  width: 24%;\n\n  &:first-child {\n    margin-left: 0\n  }\n\n  @media (max-width: 969px) {\n    width: 49%;\n  }\n\n  @media (min-width: 1440px) {\n    width: 24%;\n  }\n\n  &:hover ",":after {\n    opacity: 1;\n  }\n"]);return sn=function(){return e},e}var dn=h.b.div(sn(),cn);function mn(){var e=Object(p.a)(["\n  justify-content: space-between;\n  display: flex;\n"]);return mn=function(){return e},e}var pn=h.b.div(mn());function hn(){var e=Object(p.a)(["\n  margin-top: 20px;\n"]);return hn=function(){return e},e}var bn=h.b.div(hn()),fn=function(e){function n(e){var t;return Object(l.a)(this,n),(t=Object(s.a)(this,Object(d.a)(n).call(this,e))).state={products:[{product_id:"1",image:"https://i.pinimg.com/originals/ee/47/a1/ee47a1b83a2f4fd9782adb579dea7fb4.jpg",redirect_link:"/path/to/redirect",description:{header:"Product header",subheader:"Description subheader"}},{product_id:"1",image:"https://i.pinimg.com/originals/ee/47/a1/ee47a1b83a2f4fd9782adb579dea7fb4.jpg",redirect_link:"/path/to/redirect",description:{header:"Product header",subheader:"Description subheader"}},{product_id:"1",image:"https://i.pinimg.com/originals/ee/47/a1/ee47a1b83a2f4fd9782adb579dea7fb4.jpg",redirect_link:"/path/to/redirect",description:{header:"Product header",subheader:"Description subheader"}},{product_id:"1",image:"https://i.pinimg.com/originals/ee/47/a1/ee47a1b83a2f4fd9782adb579dea7fb4.jpg",redirect_link:"/path/to/redirect",description:{header:"Product header",subheader:"Description subheader"}}]},t}return Object(m.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){return a.a.createElement(bn,null,a.a.createElement(rn,null,a.a.createElement(Se,null)),a.a.createElement(rn,null,a.a.createElement(Ce,null)),a.a.createElement(rn,null,a.a.createElement(Xe,null)),a.a.createElement(rn,null,a.a.createElement(an,{products:this.state.products})))}}]),n}(a.a.Component),gn=t(51),vn=t(26),xn=function(e){return a.a.createElement("main",null,a.a.createElement(gn.a,null,a.a.createElement(vn.a,{exact:!0,path:"/",component:fn}),a.a.createElement(vn.a,{path:"/product",component:ke})))},En=function(){return a.a.createElement(c.a,null,a.a.createElement(_e,null,a.a.createElement(xn,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(En,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[27,1,2]]]);
//# sourceMappingURL=main.d1d1ad12.chunk.js.map