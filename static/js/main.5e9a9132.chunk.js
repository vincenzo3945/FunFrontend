(this.webpackJsonpfunapplicatie=this.webpackJsonpfunapplicatie||[]).push([[0],{32:function(e,t,a){},48:function(e,t,a){e.exports=a.p+"static/media/building.b80a4a2e.png"},49:function(e,t,a){e.exports=a.p+"static/media/clock.aa482cab.png"},50:function(e,t,a){e.exports=a.p+"static/media/calendar.433b4564.png"},51:function(e,t,a){e.exports=a.p+"static/media/plane.62cfb823.png"},52:function(e,t,a){e.exports=a.p+"static/media/account.047a99af.png"},53:function(e,t,a){e.exports=a(92)},58:function(e,t){},59:function(e,t){},92:function(e,t,a){"use strict";a.r(t);var n,r,o,l,c,i,s,d,u,m,h,g,b=a(0),k=a.n(b),E=a(45),p=a.n(E),w=a(15),f=a(16),D=a(3),v=a(4),N=a(6),y=a(5),T=a(1),S=a(7),O=(a(32),a(58),a(59),a(11)),C=a.n(O),j=(a(41),a(42),a(93)),M=new j.a,I={personId:null,firstName:null,lastName:null,emailAddress:null,age:null,address:null,houseNumber:null,zipcode:null,city:null,Country:null,token:null},B=function(e){function t(){var e;return Object(D.a)(this,t),(e=Object(N.a)(this,Object(y.a)(t).call(this))).redirectTo=function(){e.props.history.push({pathname:"/Home"})},e.Login=function(t,a){if(console.log(t),t||alert("Username is empty"),a){var n={username:t,password:a};C.a.post("http://localhost:4567/user/login",{username:n.username,password:n.password}).then((function(t){console.log(t),t.data&&(I=t.data,window.localStorage.setItem("user",JSON.stringify(I)),console.log(I),M.set("token",I.token),console.log(M.get("token")),console.log(I.firstName),e.redirectTo())})).catch((function(e){console.log(e)}))}else alert("Password is empty")},e.redirectTo=e.redirectTo.bind(Object(T.a)(e)),e.Login=e.Login.bind(Object(T.a)(e)),e.LoginInfo=e.LoginInfo.bind(Object(T.a)(e)),e}return Object(S.a)(t,e),Object(v.a)(t,[{key:"LoginInfo",value:function(){n=document.getElementById("username").value,r=document.getElementById("password").value,console.log(n),console.log(r),this.Login(n,r)}},{key:"render",value:function(){return k.a.createElement("view",null,k.a.createElement("div",null,k.a.createElement("div",{className:"header"},k.a.createElement("h1",{class:"removeWhiteSpace"},"Welkom to CEAS (Company and Employee Administration Software)")),k.a.createElement("div",{id:"input-center",class:"input-center"},k.a.createElement("div",{className:"login-center"},k.a.createElement("p",null,"Login")),k.a.createElement("div",{className:"text-input"},k.a.createElement("input",{name:"username",type:"username",placeholder:"Enter username",class:"text-line",id:"username",required:!0,pattern:"\\S+"})," "),k.a.createElement("br",null),k.a.createElement("div",{className:"text-input"},k.a.createElement("input",{name:"password",type:"password",placeholder:"Enter password",class:"text-line",id:"password",required:!0,pattern:"\\S+"})),k.a.createElement("div",{className:"login-center"},k.a.createElement("button",{type:"button",className:"login-button",onClick:this.LoginInfo},"Login")))),k.a.createElement("footer",null,k.a.createElement("p",{className:"footer-text"},"Created by Vincenzo Salden      -    Semester 4 Fun project ")))}}]),t}(k.a.Component),x=Object(f.f)(B),L=a(12),P=a(48),Y=a.n(P),W=a(49),G=a.n(W),A=a(50),q=a.n(A),U=a(51),V=a.n(U),H=a(52),J=a.n(H),R=new j.a,z=function(e){function t(){var e;return Object(D.a)(this,t),(e=Object(N.a)(this,Object(y.a)(t).call(this))).redirectTo=function(t){e.props.history.push({pathname:"/"+t})},e.logout=function(){R.remove("token"),localStorage.clear(),e.redirectTo("")},e.redirectTo=e.redirectTo.bind(Object(T.a)(e)),e.logout=e.logout.bind(Object(T.a)(e)),e.redirect=!1,e.check(),e}return Object(S.a)(t,e),Object(v.a)(t,[{key:"check",value:function(){window.localStorage.user?(o=JSON.parse(window.localStorage.user),console.log(o.personId),console.log(o),console.log(R.get("token")),console.log(o.token),o.token!==R.get("token")&&(console.log("nope"),this.redirect=!0)):this.redirect=!0}},{key:"render",value:function(){var e=this;return this.redirect?k.a.createElement(f.a,{push:!0,to:"/"}):k.a.createElement("view",null,k.a.createElement("div",{className:"topnavbar"},k.a.createElement("div",Object(L.a)({className:"topnavbar-button"},"className","whiteText"),k.a.createElement("a",{id:"hover",onClick:function(){return e.logout()}},"Uitloggen"),k.a.createElement("a",{id:"hover",onClick:function(){return e.redirectTo("account")}},"Account"),k.a.createElement("a",{id:"hover",onClick:function(){return e.redirectTo("verlof")}},"Verlof"),k.a.createElement("a",{id:"hover",onClick:function(){return e.redirectTo("groepsrooster")}},"Groepsrooster"),k.a.createElement("a",{id:"hover",onClick:function(){return e.redirectTo("rooster")}},"Rooster"),k.a.createElement("a",{id:"hover",onClick:function(){return e.redirectTo("beschikbaarheid")}},"Beschibaarheid"),k.a.createElement("a",{id:"hover",onClick:function(){return e.redirectTo("home")}},"Home"))),k.a.createElement("div",{className:"row"},k.a.createElement("div",{className:"item"},k.a.createElement("a",null,k.a.createElement("img",{src:Y.a,height:"120",width:"120",onClick:function(){return e.redirectTo("home")}})),"Home"),k.a.createElement("div",{className:"item"},k.a.createElement("a",null,k.a.createElement("img",{src:G.a,height:"120",width:"120",onClick:function(){return e.redirectTo("beschikbaarheid")}})),"Beschikbaarheid"),k.a.createElement("div",{className:"item"},k.a.createElement("a",null,k.a.createElement("img",{src:q.a,height:"120",width:"120",onClick:function(){return e.redirectTo("groepsrooster")}})),"Groepsrooster"),k.a.createElement("div",{className:"item"},k.a.createElement("a",null,k.a.createElement("img",{src:V.a,height:"120",width:"120",onClick:function(){return e.redirectTo("verlof")}})),"Verlof"),k.a.createElement("div",{className:"item"},k.a.createElement("a",null,k.a.createElement("img",{src:J.a,height:"120",width:"120",onClick:function(){return e.redirectTo("account")}})),"Account")),k.a.createElement("footer",null,k.a.createElement("p",{className:"footer-text"},"Created by Vincenzo Salden      -    Semester 4 Fun project ")))}}]),t}(k.a.Component),F=new j.a,K=a(26),Q=[{workDayId:1,workDate:"27-06-2019",beginTime:"12:00",endTime:"22:00"},{workDayId:2,workDate:"28-06-2019",beginTime:"15:00",endTime:"01:00"}],X=K().format("DD MMM"),Z=K().format("MM DD"),$=X,_=K().week(),ee=function(e){function t(){var e;return Object(D.a)(this,t),(e=Object(N.a)(this,Object(y.a)(t).call(this))).addWeekToDate=function(t){e.workDateString=K(e.workDateString,"DD MMM").add("w",1).format("DD MMM"),e.setState({date:e.workDateString}),console.log(e.workDateString+" work string"),e.weekNumber=K().day("Monday").week(e.weekNumber).add("w",1).week(),console.log(e.weekNumber),e.getSchedule(e.weekNumber,l.personId)},e.subtractWeekOffDate=function(t){e.workDateString=K(e.workDateString,"DD MMM").subtract("w",1).format("DD MMM"),e.setState({date:e.workDateString}),console.log(e.workDateString+" substract"),e.weekNumber=K().day("Monday").week(e.weekNumber).subtract("w",1).week(),console.log(e.weekNumber),e.getSchedule(e.weekNumber,l.personId)},e.getSchedule=function(t,a){console.log("in getSchedule "+t+" "+a),a=1,t&&a?C.a.post("http://localhost:4567/work",{workDayId:null,personId:a,weekNumber:t,beginTime:null,endTime:null}).then((function(t){if(t.data)return Q=t.data,t.data;e.workDayList="No data"})).then((function(t){return e.setState({workdayslist:t})})):alert("An error accured, please login agian")},e.loadSchedule=function(e){return console.log("in loadSchedule"),console.log(e),e&&0!==e.lenght?(console.log("na eerste if"),k.a.createElement("table",null,k.a.createElement("tbody",null,e.map((function(e){return k.a.createElement("tr",{key:e.workDayId},k.a.createElement("td",null," ","Avalible"," "),k.a.createElement("td",null,e.workDate),k.a.createElement("td",null,e.beginTime),k.a.createElement("td",null,e.endTime))}))))):"No data"},e.redirectTo=function(t){e.props.history.push({pathname:"/"+t})},e.logout=function(){F.remove("token"),localStorage.clear(),e.redirectTo("")},e.redirectTo=e.redirectTo.bind(Object(T.a)(e)),e.getSchedule=e.getSchedule.bind(Object(T.a)(e)),e.addWeekToDate=e.addWeekToDate.bind(Object(T.a)(e)),e.state={date:e.workDateString},e.loadSchedule=e.loadSchedule.bind(Object(T.a)(e)),e.workDayList=Q,e.redirect=!1,e.logout=e.logout.bind(Object(T.a)(e)),e.formatDate=K().format("DD MMM"),e.workDateString=$,e.weekNumber=_,e.workDate=Z,e.check(),e}return Object(S.a)(t,e),Object(v.a)(t,[{key:"check",value:function(){window.localStorage.user?(l=JSON.parse(window.localStorage.user),console.log(l),console.log(F.get("token")),console.log(l.token),l.token!==F.get("token")&&(console.log("nope"),this.redirect=!0)):this.props.history.push({pathname:"/"})}},{key:"render",value:function(){var e=this;if(this.redirect)return k.a.createElement(f.a,{push:!0,to:"/"});var t=Q.map((function(e){return console.log(e.workDate,e.workDayId),k.a.createElement("tr",{className:"table-row"},k.a.createElement("td",null,k.a.createElement("input",{type:"checkbox",name:"toggleSwitch",id:"toggleSwitch"}),k.a.createElement("label",{class:"toggle-switch-label",for:"toggleSwitch"},"True "),k.a.createElement("span",{class:"toggle-switch-inner"}),k.a.createElement("span",{class:"toggle-switch-switch"})),k.a.createElement("td",{className:"table-column"},e.workDate),k.a.createElement("td",{className:"table-column"},e.beginTime),k.a.createElement("td",{className:"table-column"},e.endTime))}));return k.a.createElement("view",null,k.a.createElement("div",{className:"topnavbar"},k.a.createElement("div",Object(L.a)({className:"topnavbar-button"},"className","whiteText"),k.a.createElement("a",{id:"hover",onClick:function(){return e.logout()}},"Uitloggen"),k.a.createElement("a",{id:"hover",onClick:function(){return e.redirectTo("account")}},"Account"),k.a.createElement("a",{id:"hover",onClick:function(){return e.redirectTo("verlof")}},"Verlof"),k.a.createElement("a",{id:"hover",onClick:function(){return e.redirectTo("groepsrooster")}},"Groepsrooster"),k.a.createElement("a",{id:"hover",onClick:function(){return e.redirectTo("rooster")}},"Rooster"),k.a.createElement("a",{id:"hover",onClick:function(){return e.redirectTo("beschikbaarheid")}},"Beschibaarheid"),k.a.createElement("a",{id:"hover",onClick:function(){return e.redirectTo("home")}},"Home"),k.a.createElement("b",{className:"font-size"},"User: ",l.firstName))),k.a.createElement("div",{className:"container-center"},k.a.createElement("div",{className:"item-center"},k.a.createElement("button",{className:"beschikbaarheid-button",onClick:function(){return e.subtractWeekOffDate(e.workDayList)}}," "," < "," "),k.a.createElement("button",{type:"button",className:"beschikbaarheid-button",onClick:this.addWeekToDate},"  >  "),k.a.createElement("div",{className:"text-center-padding"},k.a.createElement("h3",{className:"whiteText"},"Week van ",this.state.date)),k.a.createElement("div",{className:"item-center"},k.a.createElement("table",{className:"table-row"}," ",k.a.createElement("tr",{className:"row-table"},k.a.createElement("th",{className:"table-column"},"Date"),k.a.createElement("th",{className:"table-column"},"Begin"),k.a.createElement("th",{className:"table-column"},"End")),(this.getSchedule,t))))))}}]),t}(k.a.Component),te=new j.a,ae=a(26),ne=[{workDayId:1,workDate:"27-06-2019",beginTime:"12:00",endTime:"22:00"},{workDayId:2,workDate:"28-06-2019",beginTime:"15:00",endTime:"01:00"}],re=ae().format("DD MMM"),oe=ae().format("MM DD"),le=re,ce=ae().week(),ie=function(e){function t(){var e;return Object(D.a)(this,t),(e=Object(N.a)(this,Object(y.a)(t).call(this))).addWeekToDate=function(t){e.workDateString=ae(e.workDateString,"DD MMM").add("w",1).format("DD MMM"),e.setState({date:e.workDateString}),console.log(e.workDateString+" work string"),e.weekNumber=ae().day("Monday").week(e.weekNumber).add("w",1).week(),console.log(e.weekNumber),e.getSchedule(e.weekNumber,c.employeId)},e.subtractWeekOffDate=function(t){e.workDateString=ae(e.workDateString,"DD MMM").subtract("w",1).format("DD MMM"),e.setState({date:e.workDateString}),console.log(e.workDateString+" substract"),e.weekNumber=ae().day("Monday").week(e.weekNumber).subtract("w",1).week(),console.log(e.weekNumber),e.getSchedule(e.weekNumber,c.employeId)},e.getSchedule=function(t,a){console.log("in getSchedule "+t+" "+a),a=1,t&&a?C.a.post("http://localhost:4567/work",{workDayId:null,personId:a,weekNumber:t,beginTime:null,endTime:null}).then((function(t){if(t.data)return ne=t.data,t.data;e.workDayList="No data"})).then((function(t){return e.setState({workdayslist:t})})):alert("An error accured, please login agian")},e.loadSchedule=function(e){return console.log("in loadSchedule"),console.log(e),e&&0!==e.lenght?(console.log("na eerste if"),k.a.createElement("table",null,k.a.createElement("tbody",null,e.map((function(e){return k.a.createElement("tr",{key:e.workDayId},k.a.createElement("td",null,e.workDate),k.a.createElement("td",null,e.beginTime),k.a.createElement("td",null,e.endTime))}))))):"No data"},e.redirectTo=function(t,a){e.props.history.push({pathname:"/"+t})},e.logout=function(){te.remove("token"),localStorage.clear(),e.redirectTo("")},e.formatDate=ae().format("DD MMM"),e.workDateString=le,e.weekNumber=ce,e.workDate=oe,e.redirect=!1,e.logout=e.logout.bind(Object(T.a)(e)),e.redirectTo=e.redirectTo.bind(Object(T.a)(e)),e.getSchedule=e.getSchedule.bind(Object(T.a)(e)),e.addWeekToDate=e.addWeekToDate.bind(Object(T.a)(e)),e.state={date:e.workDateString},e.loadSchedule=e.loadSchedule.bind(Object(T.a)(e)),e.workDayList=ne,e.check(),e}return Object(S.a)(t,e),Object(v.a)(t,[{key:"check",value:function(){window.localStorage.user?(c=JSON.parse(window.localStorage.user),console.log(c),console.log(te.get("token")),console.log(c.token),c.token!==te.get("token")&&(console.log("nope"),this.redirect=!0)):this.redirect=!0}},{key:"testtable",value:function(){var e=this.getSchedule(this.weekNumber,c.employeId);return k.a.createElement("table",null,k.a.createElement("tbody",null,e.map((function(e){return k.a.createElement("tr",{key:e.workDayId},k.a.createElement("td",null,e.workDate),k.a.createElement("td",null,e.beginTime),k.a.createElement("td",null,e.endTime))}))))}},{key:"render",value:function(){var e=this;if(this.redirect)return k.a.createElement(f.a,{push:!0,to:"/"});var t=ne.map((function(e){return console.log(e.workDate,e.workDayId),k.a.createElement("tr",{className:"table-row"},k.a.createElement("td",{className:"table-column"},e.workDate),k.a.createElement("td",{className:"table-column"},e.beginTime),k.a.createElement("td",{className:"table-column"},e.endTime))}));return k.a.createElement("view",null,k.a.createElement("div",{className:"topnavbar"},k.a.createElement("div",Object(L.a)({className:"topnavbar-button"},"className","whiteText"),k.a.createElement("a",{id:"hover",onClick:function(){return e.logout()}},"Uitloggen"),k.a.createElement("a",{id:"hover",onClick:function(){return e.redirectTo("account")}},"Account"),k.a.createElement("a",{id:"hover",onClick:function(){return e.redirectTo("verlof")}},"Verlof"),k.a.createElement("a",{id:"hover",onClick:function(){return e.redirectTo("groepsrooster")}},"Groepsrooster"),k.a.createElement("a",{id:"hover",onClick:function(){return e.redirectTo("rooster")}},"Rooster"),k.a.createElement("a",{id:"hover",onClick:function(){return e.redirectTo("beschikbaarheid")}},"Beschibaarheid"),k.a.createElement("a",{id:"hover",onClick:function(){return e.redirectTo("home")}},"Home"),k.a.createElement("b",{className:"font-size"},"User: ",c.firstName))),k.a.createElement("div",{className:"container-center"},k.a.createElement("div",{className:"item-center"},k.a.createElement("button",{className:"beschikbaarheid-button",onClick:function(){return e.subtractWeekOffDate(e.workDayList)}}," "," < "," "),k.a.createElement("button",{type:"button",className:"beschikbaarheid-button",onClick:this.addWeekToDate},"  >  "),k.a.createElement("div",{className:"text-center-padding"},k.a.createElement("h3",{className:"whiteText"},"Week van ",this.state.date)),k.a.createElement("div",{className:"item-center"},k.a.createElement("center",null,k.a.createElement("table",{className:"table-row"}," ",k.a.createElement("tr",{className:"row-table"},k.a.createElement("th",{className:"table-column"},"Date"),k.a.createElement("th",{className:"table-column"},"Begin"),k.a.createElement("th",{className:"table-column"},"End")),(this.getSchedule,t)))))))}}]),t}(k.a.Component),se=a(31),de=a.n(se),ue=(a(91),new j.a),me=[{personId:1,beginDate:"27-06-2020",endDate:"28-06-2020"}],he=function(e){function t(){var e;return Object(D.a)(this,t),(e=Object(N.a)(this,Object(y.a)(t).call(this))).redirectTo=function(t){e.props.history.push({pathname:"/"+t})},e.logout=function(){ue.remove("token"),localStorage.clear(),e.redirectTo("")},e.redirectTo=e.redirectTo.bind(Object(T.a)(e)),e.redirect=!1,e.logout=e.logout.bind(Object(T.a)(e)),e.request=e.request.bind(Object(T.a)(e)),e.handleBeginDayChange=e.handleBeginDayChange.bind(Object(T.a)(e)),e.handleEndDayChange=e.handleEndDayChange.bind(Object(T.a)(e)),e.selectedBeginDate=void 0,e.selectedEndDate=void 0,e.state={selectedDay:void 0,test:1},e.verlofList=me,e.check(),e}return Object(S.a)(t,e),Object(v.a)(t,[{key:"check",value:function(){window.localStorage.user?(i=JSON.parse(window.localStorage.user),console.log(i),console.log(ue.get("token")),console.log(i.token),i.token!==ue.get("token")&&(console.log("nope"),this.redirect=!0)):this.props.history.push({pathname:"/"})}},{key:"request",value:function(e,t){var a=this;console.log(e,t);var n=new Date(e),r=new Date,o=new Date(t);console.log(n),console.log(o),console.log(r);var l=i.personId;e?t?n<r?(alert("Begin date can't be in the past"),this.state.test=0):o<r?(alert("End date can't be in the past"),this.state.test=0):n<o?(alert("End date can't be before the begin date"),this.state.test=0):C.a.post("http://localhost:4567/vacation",{personId:l,beginDate:e,endDate:t}).then((function(e){if(e.data)return me=e.data,e.data;a.verlofList="no data"})).then((function(e){return a.setState({verlofList:e})})):(alert("End date not set"),this.state.test=0):(alert("Begin date not set"),this.state.test=0)}},{key:"handleBeginDayChange",value:function(e,t,a){var n=a.getInput();this.setState({selectedBeginDate:e,isEmptyBeginDate:!n.value.trim(),isDisabledBeginDate:!0===t.disabled}),this.selectedBeginDate=e.toLocaleDateString(),console.log(this.selectedBeginDate)}},{key:"handleEndDayChange",value:function(e,t,a){var n=a.getInput();console.log(e.toLocaleDateString());var r=new Date(e.toLocaleDateString()),o=new Date;console.log(r),console.log(o),this.setState({selectedEndDate:e,isEmptyEndDate:!n.value.trim(),isDisabledEndDate:!0===t.disabled}),this.selectedEndDate=e.toLocaleDateString(),console.log(this.selectedEndDate)}},{key:"render",value:function(){var e=this;if(this.redirect)return k.a.createElement(f.a,{push:!0,to:"/"});var t=this.state,a=t.selectedBeginDate,n=(t.isDisabledBeginDate,t.isEmptyBeginDate),r=this.state,o=r.selectedEndDate,l=(r.isDisabledEndDate,r.isEmptyEndDate),c=me.map((function(e){return console.log(e.personId,e.beginDate,e.endDate),k.a.createElement("tr",{className:"table-row"},k.a.createElement("td",{className:"table-column"}," ",e.beginDate),k.a.createElement("td",{className:"table-column"}," ",e.endDate))}));return k.a.createElement("view",null,k.a.createElement("div",{className:"topnavbar"},k.a.createElement("div",Object(L.a)({className:"topnavbar-button"},"className","whiteText"),k.a.createElement("a",{id:"hover",onClick:function(){return e.logout()}},"Uitloggen"),k.a.createElement("a",{id:"hover",onClick:function(){return e.redirectTo("account")}},"Account"),k.a.createElement("a",{id:"hover",onClick:function(){return e.redirectTo("verlof")}},"Verlof"),k.a.createElement("a",{id:"hover",onClick:function(){return e.redirectTo("groepsrooster")}},"Groepsrooster"),k.a.createElement("a",{id:"hover",onClick:function(){return e.redirectTo("rooster")}},"Rooster"),k.a.createElement("a",{id:"hover",onClick:function(){return e.redirectTo("beschikbaarheid")}},"Beschibaarheid"),k.a.createElement("a",{id:"hover",onClick:function(){return e.redirectTo("home")}},"Home"))),k.a.createElement("div",{className:"container-center"},k.a.createElement("div",{className:"item-center"},k.a.createElement("center",null,k.a.createElement("table",null,k.a.createElement("tr",null,k.a.createElement("td",{className:"table-column-verlof"},k.a.createElement("p",null,n&&"Please type or pick a day",!n&&!a&&"This day is invalid",a&&"From ".concat(a.toLocaleDateString())),k.a.createElement(de.a,{format:"NL",value:a,onDayChange:this.handleBeginDayChange,dayPickerProps:{selectedDays:a}})),k.a.createElement("td",{className:"table-column-verlof"},k.a.createElement("p",null,l&&"Please type or pick a day",!l&&!o&&"This day is invalid",o&&"Till ".concat(o.toLocaleDateString())),k.a.createElement(de.a,{format:"NL",value:o,onDayChange:this.handleEndDayChange,dayPickerProps:{selectedDays:o}})),k.a.createElement("td",null,k.a.createElement("div",{className:"top-space"},k.a.createElement("a",null,k.a.createElement("button",{className:"verlof-button",onClick:function(){return e.request(e.selectedBeginDate,e.selectedEndDate)}},"Request"))))),k.a.createElement("table",null,k.a.createElement("tr",{className:"row-table"},k.a.createElement("th",{className:"table-column"},"From"),k.a.createElement("th",{className:"table-column"},"Till")),c))))))}}]),t}(k.a.Component),ge=new j.a,be=function(e){function t(e){var a;return Object(D.a)(this,t),(a=Object(N.a)(this,Object(y.a)(t).call(this,e))).redirectTo=function(e){a.props.history.push({pathname:"/"+e})},a.logout=function(){ge.remove("token"),localStorage.clear(),a.redirectTo("")},a.changePassword=function(e,t,n,r){console.log(t,n,r),t?n?r?C.a.put("http://localhost:4567/changepassword",{userId:e,oldPassword:t,newPassword:n,confNewPassword:r}).then((function(e){if(console.log(e.data),e.data)return e.data})):(alert("Confirm password is empty"),a.state.test=0):(alert("New password is empty"),a.state.test=0):(alert("Old password is empty"),a.state.test=0)},a.redirect=!1,a.logout=a.logout.bind(Object(T.a)(a)),a.redirectTo=a.redirectTo.bind(Object(T.a)(a)),a.changePasswordInfo=a.changePasswordInfo.bind(Object(T.a)(a)),a.changePassword=a.changePassword.bind(Object(T.a)(a)),a.state={test:1},a.result=null,a.check(),a}return Object(S.a)(t,e),Object(v.a)(t,[{key:"check",value:function(){window.localStorage.user?(s=JSON.parse(window.localStorage.user),console.log(s),console.log(ge.get("token")),console.log(s.token),s.token!==ge.get("token")&&(console.log("nope"),this.redirect=!0)):this.redirect=!0}},{key:"changePasswordInfo",value:function(){d=s.userId,u=document.getElementById("oldPassword").value,m=document.getElementById("newPassword").value,h=document.getElementById("confirmNewPassword").value,console.log(u),console.log(m),console.log(h),this.result=this.changePassword(d,u,m,h),"True"===this.result?alert("Password changed succesfull"):alert("Failed to changed password")}},{key:"render",value:function(){var e=this;return this.redirect?k.a.createElement(f.a,{push:!0,to:"/"}):k.a.createElement("view",null,k.a.createElement("div",{className:"topnavbar"},k.a.createElement("div",Object(L.a)({className:"topnavbar-button"},"className","whiteText"),k.a.createElement("a",{id:"hover",onClick:function(){return e.logout()}},"Uitloggen"),k.a.createElement("a",{id:"hover",onClick:function(){return e.redirectTo("account")}},"Account"),k.a.createElement("a",{id:"hover",onClick:function(){return e.redirectTo("verlof")}},"Verlof"),k.a.createElement("a",{id:"hover",onClick:function(){return e.redirectTo("groepsrooster")}},"Groepsrooster"),k.a.createElement("a",{id:"hover",onClick:function(){return e.redirectTo("rooster")}},"Rooster"),k.a.createElement("a",{id:"hover",onClick:function(){return e.redirectTo("beschikbaarheid")}},"Beschibaarheid"),k.a.createElement("a",{id:"hover",onClick:function(){return e.redirectTo("home")}},"Home"))),k.a.createElement("div",{id:"input-center",class:"input-center"},k.a.createElement("div",{className:"login-center"},k.a.createElement("p",null,"Change password")),k.a.createElement("div",{className:"text-input"},k.a.createElement("input",{name:"oldPassword",type:"password",placeholder:"Enter old password",class:"text-line",id:"oldPassword",required:!0,pattern:"\\S+"})," "),k.a.createElement("br",null),k.a.createElement("div",{className:"text-input"},k.a.createElement("input",{name:"newPassword",type:"password",placeholder:"Enter new password",class:"text-line",id:"newPassword",required:!0,pattern:"\\S+"})),k.a.createElement("br",null),k.a.createElement("div",{className:"text-input"},k.a.createElement("input",{name:"confirmNewPassword",type:"password",placeholder:"Confirm new password",class:"text-line",id:"confirmedNewPassword",required:!0,pattern:"\\S+"})),k.a.createElement("div",{className:"login-center"},k.a.createElement("button",{type:"button",className:"login-button",onClick:this.changePasswordInfo},"Login"))))}}]),t}(k.a.Component),ke=new j.a,Ee=a(26),pe=[{workDayId:1,workDate:"27-06-2019",beginTime:"12:00",endTime:"22:00",firstName:"Medewerker",lastName:"1"},{workDayId:2,workDate:"28-06-2019",beginTime:"15:00",endTime:"01:00",firstName:"Medewerker",lastName:"2"}],we=Ee().format("DD-MM-YYYY"),fe=Ee().format("MM-DD-YYYY"),De=we,ve=Ee().week(),Ne=function(e){function t(){var e;return Object(D.a)(this,t),(e=Object(N.a)(this,Object(y.a)(t).call(this))).addDayToDate=function(t){e.workDateString=Ee(e.workDateString,"DD MM YYYY").add("d",1).format("DD-MM-YYYY"),e.setState({date:e.workDateString}),console.log(e.workDateString+" work string"),e.getGroupSchedule(e.workDateString,g.personId)},e.subtractDayOffDate=function(t){e.workDateString=Ee(e.workDateString,"DD MM YYYY").subtract("d",1).format("DD-MM-YYYY"),e.setState({date:e.workDateString}),console.log(e.workDateString+" substract"),e.getGroupSchedule(e.workDateString,g.personId)},e.getGroupSchedule=function(t,a){console.log("in getGroupSchedule "+t+" "+a),t&&a?C.a.post("http://localhost:4567/group",{workDayId:null,personId:a,weekNumber:null,workDate:t,beginTime:null,endTime:null}).then((function(t){if(console.log(t),t.data)return pe=t.data,t.data;e.workDayList="No data"})).then((function(t){return e.setState({workdayslist:t})})):alert("An error accured, please login agian")},e.loadSchedule=function(e){return console.log("in loadSchedule"),console.log(e),e&&0!==e.lenght?(console.log("na eerste if"),k.a.createElement("table",null,k.a.createElement("tbody",null,e.map((function(e){return k.a.createElement("tr",{key:e.workDayId},k.a.createElement("td",null,e.workDate),k.a.createElement("td",null,e.beginTime),k.a.createElement("td",null,e.endTime),k.a.createElement("td",null,e.lastName,", ",e.firstName))}))))):"No data"},e.redirectTo=function(t,a){e.props.history.push({pathname:"/"+t})},e.logout=function(){ke.remove("token"),localStorage.clear(),e.redirectTo("")},e.formatDate=Ee().format("DD MM-YYYY"),e.workDateString=De,e.weekNumber=ve,e.workDate=fe,e.redirect=!1,e.logout=e.logout.bind(Object(T.a)(e)),e.redirectTo=e.redirectTo.bind(Object(T.a)(e)),e.getGroupSchedule=e.getGroupSchedule.bind(Object(T.a)(e)),e.addDayToDate=e.addDayToDate.bind(Object(T.a)(e)),e.state={date:e.workDateString},e.loadSchedule=e.loadSchedule.bind(Object(T.a)(e)),e.workDayList=pe,e.check(),e}return Object(S.a)(t,e),Object(v.a)(t,[{key:"check",value:function(){window.localStorage.user?(g=JSON.parse(window.localStorage.user),console.log(g),console.log(ke.get("token")),console.log(g.token),g.token!==ke.get("token")&&(console.log("nope"),this.redirect=!0)):this.redirect=!0}},{key:"testtable",value:function(){var e=this.getGroupSchedule(this.workDateString,1);return k.a.createElement("table",null,k.a.createElement("tbody",null,e.map((function(e){return k.a.createElement("tr",{key:e.workDayId},k.a.createElement("td",null,e.workDate),k.a.createElement("td",null,e.beginTime),k.a.createElement("td",null,e.endTime),k.a.createElement("td",null,e.lastName,", ",e.firstName))}))))}},{key:"render",value:function(){var e=this;if(this.redirect)return k.a.createElement(f.a,{push:!0,to:"/"});var t=pe.map((function(e){return console.log(e.workDate,e.workDayId),k.a.createElement("tr",{className:"table-row"},k.a.createElement("td",{className:"table-column"},e.workDate),k.a.createElement("td",{className:"table-column"},e.beginTime),k.a.createElement("td",{className:"table-column"},e.endTime),k.a.createElement("td",{className:"table-column"},e.lastName,", ",e.firstName))}));return k.a.createElement("view",null,k.a.createElement("div",{className:"topnavbar"},k.a.createElement("div",Object(L.a)({className:"topnavbar-button"},"className","whiteText"),k.a.createElement("a",{id:"hover",onClick:function(){return e.logout()}},"Uitloggen"),k.a.createElement("a",{id:"hover",onClick:function(){return e.redirectTo("account")}},"Account"),k.a.createElement("a",{id:"hover",onClick:function(){return e.redirectTo("verlof")}},"Verlof"),k.a.createElement("a",{id:"hover",onClick:function(){return e.redirectTo("groepsrooster")}},"Groepsrooster"),k.a.createElement("a",{id:"hover",onClick:function(){return e.redirectTo("rooster")}},"Rooster"),k.a.createElement("a",{id:"hover",onClick:function(){return e.redirectTo("beschikbaarheid")}},"Beschibaarheid"),k.a.createElement("a",{id:"hover",onClick:function(){return e.redirectTo("home")}},"Home"),k.a.createElement("b",{className:"font-size"},"User: ",g.firstName))),k.a.createElement("div",{className:"container-center"},k.a.createElement("div",{className:"item-center"},k.a.createElement("button",{className:"beschikbaarheid-button",onClick:function(){return e.subtractDayOffDate(e.workDayList)}}," "," < "," "),k.a.createElement("button",{type:"button",className:"beschikbaarheid-button",onClick:this.addDayToDate},"  >  "),k.a.createElement("div",{className:"text-center-padding"},k.a.createElement("h3",{className:"whiteText"},this.state.date)),k.a.createElement("div",{className:"item-center"},k.a.createElement("center",null,k.a.createElement("table",{className:"table-row"}," ",k.a.createElement("tr",{className:"row-table"},k.a.createElement("th",{className:"table-column"},"Date"),k.a.createElement("th",{className:"table-column"},"Begin time"),k.a.createElement("th",{className:"table-column"},"End time"),k.a.createElement("th",{className:"table-column"},"Worker")),(this.getGroupSchedule,t)))))))}}]),t}(k.a.Component),ye=k.a.createElement(w.a,null,k.a.createElement("div",null,k.a.createElement(f.b,{exact:!0,path:"/",component:x}),k.a.createElement(f.b,{path:"/Home",component:z}),k.a.createElement(f.b,{path:"/Beschikbaarheid",component:ee}),k.a.createElement(f.b,{path:"/Rooster",component:ie}),k.a.createElement(f.b,{path:"/Groepsrooster",component:Ne}),k.a.createElement(f.b,{path:"/Verlof",component:he}),k.a.createElement(f.b,{path:"/Account",component:be})));p.a.render(ye,document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.5e9a9132.chunk.js.map