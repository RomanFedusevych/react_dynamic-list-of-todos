(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var c=n(9),r=n.n(c),s=n(1),a=n.n(s),i=n(3),l=n(4),o=n(5),u=n(7),d=n(6),h=n(2),p=n.n(h),j=(n(15),n(16),n(17),n(0)),f=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var c=arguments.length,r=new Array(c),s=0;s<c;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={query:"",filteredBySelect:"all"},e.changeQuery=function(t){e.setState({query:t.target.value})},e.changeFilteredBySelect=function(t){e.setState({filteredBySelect:t.target.value})},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.todos,n=e.selectUser,c=e.selectedUserId,r=this.state,s=r.query,a=r.filteredBySelect,i=t.filter((function(e){return e.title.toLowerCase().includes(s.toLowerCase())}));return"completed"===this.state.filteredBySelect&&(i=i.filter((function(e){return e.completed}))),"active"===this.state.filteredBySelect&&(i=i.filter((function(e){return!e.completed}))),Object(j.jsxs)("div",{className:"TodoList",children:[Object(j.jsx)("h2",{children:"Todos:"}),Object(j.jsxs)("div",{className:"TodoList__list-container",children:[Object(j.jsx)("input",{type:"text",value:s,onChange:this.changeQuery,className:"form-control",placeholder:"Enter text here"}),Object(j.jsxs)("select",{name:"filteredBySelect",value:a,onChange:this.changeFilteredBySelect,className:"form-select","aria-label":"Default select example",children:[Object(j.jsx)("option",{value:"all",children:"all"}),Object(j.jsx)("option",{value:"active",children:"active"}),Object(j.jsx)("option",{value:"completed",children:"completed"})]}),Object(j.jsx)("ul",{className:"TodoList__list",children:i.map((function(e){return Object(j.jsxs)("li",{className:"\n                TodoList__item \n                TodoList__item".concat(e.completed?"--checked":"--unchecked"),children:[Object(j.jsxs)("label",{children:[Object(j.jsx)("input",{type:"checkbox",checked:e.completed,readOnly:!0}),Object(j.jsx)("p",{children:e.title})]}),Object(j.jsxs)("button",{className:e.userId===c?"TodoList__user-button--selected button":"button",type:"button",onClick:function(){n(e.userId)},children:["User\xa0#",e.userId]})]},e.id)}))})]})]})}}]),n}(p.a.Component),b="https://mate.academy/students-api",m=function(){var e=Object(i.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(b,"/users/").concat(t));case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=(n(19),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var c=arguments.length,r=new Array(c),s=0;s<c;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={selectedUser:null},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=Object(i.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.loadUsers();case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(e){e.selectedUserId!==this.props.selectedUserId&&this.loadUsers()}},{key:"loadUsers",value:function(){var e=Object(i.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m(this.props.selectedUserId);case 2:t=e.sent,this.setState({selectedUser:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.selectedUser;return e&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"CurrentUser",children:[Object(j.jsx)("h2",{className:"CurrentUser__title",children:Object(j.jsx)("span",{children:e.id})}),Object(j.jsx)("h3",{className:"CurrentUser__name",children:e.name}),Object(j.jsx)("p",{className:"CurrentUser__email",children:e.email}),Object(j.jsx)("p",{className:"CurrentUser__phone",children:e.phone})]}),Object(j.jsx)("button",{type:"button",className:"btn btn-primary",onClick:this.props.clear,children:"Clear"})]})}}]),n}(p.a.Component)),O=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var c=arguments.length,r=new Array(c),s=0;s<c;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={todos:[],selectedUserId:0},e.selectUser=function(t){e.setState({selectedUserId:t})},e.clearUser=function(){e.setState({selectedUserId:0})},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=Object(i.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(b,"/todos")).then((function(e){return e.json()}));case 2:t=e.sent,this.setState({todos:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.todos,n=e.selectedUserId;return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("div",{className:"App__sidebar",children:Object(j.jsx)(f,{todos:t,selectUser:this.selectUser,selectedUserId:n})}),Object(j.jsx)("div",{className:"App__content",children:Object(j.jsx)("div",{className:"App__content-container",children:n?Object(j.jsx)(v,{selectedUserId:n,clear:this.clearUser}):"No user selected"})})]})}}]),n}(p.a.Component),x=O;r.a.render(Object(j.jsx)(x,{}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.229877db.chunk.js.map