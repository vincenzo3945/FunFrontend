import React from "react";
import  { Redirect } from 'react-router-dom'
import Axios from "axios";


import {Cookies} from "react-cookie";

const cookie = new Cookies();

var moment = require('moment');
//var formatDate = 0;

var workDayList = [{
    workDayId: 1,
    workDate: "27-06-2019",
    beginTime: "12:00",
    endTime: "22:00"
},{
    workDayId: 2,
    workDate: "28-06-2019",
    beginTime: "15:00",
    endTime: "01:00"
}
];


var user;

var currentDate = moment().format("DD MMM");
var workDate = moment().format("MM DD");
var workDateString = currentDate;
var weekday = moment().week();

//const state = {redirect: false}

//const state = {workdayslist: []};

class Beschikbaarheid extends React.Component
{
    constructor(){
        super()
        
        this.redirectTo = this.redirectTo.bind(this);
        this.getSchedule = this.getSchedule.bind(this);
        this.addWeekToDate = this.addWeekToDate.bind(this);
        this.state = {date: this.workDateString};
        this.loadSchedule = this.loadSchedule.bind(this);
        this.workDayList = workDayList;
        
        this.redirect = false;
        this.logout = this.logout.bind(this);

        //Dates
        this.formatDate = moment().format("DD MMM");
        this.workDateString = workDateString;
        this.weekNumber = weekday;
        this.workDate = workDate;

        this.check();
    }
    
    check(){
        if(!window.localStorage.user)
        {
            this.props.history.push({pathname: "/"});
            //props.history.push({pathname: "/"});
        }
        else
        {
            user = JSON.parse(window.localStorage.user);

            ///Waarom type error bij deze if statement

            //console.log(user);
            //console.log(cookie.get('token'));
            //console.log(user.token);

        if(user.token !== cookie.get('token'))
        {
            //console.log("nope");
            this.redirect = true;
        }
        }
    }

    addWeekToDate = (date) =>
    {
        //console.log(currentDate + " var");
        //this.workDate = moment(this.workDate).add('days', 7);
        this.workDateString = moment(this.workDateString, "DD MMM").add('w', 1).format("DD MMM");
        //console.log(this.workDate + " work");
        this.setState({date: this.workDateString});
        //console.log(this.workDateString + " work string");
        //this.weekNumber = moment(this.workDateString, "DD-MM-YYYY").isoWeek();
        //this.weekNumber = moment(this.weekNumber).add("w",1).week();
        this.weekNumber = moment().day("Monday").week(this.weekNumber).add("w", 1).week();
        //console.log(this.weekNumber);

        this.getSchedule(this.weekNumber, user.personId)
        
    }

    subtractWeekOffDate = (workdays) =>
    {
        this.workDateString = moment(this.workDateString, "DD MMM").subtract('w', 1).format("DD MMM");
        //this.workDate = moment(workDate).subtract('days', 7).format("DD-MM-YYYY");
        this.setState({date: this.workDateString});
        //console.log(this.workDateString + " substract");
        //this.weekNumber = moment(this.workDateString, "DD-MM-YYYY").isoWeek();
        //this.weekNumber = moment(this.weekNumber).subtract("w",1).week();
        this.weekNumber = moment().day("Monday").week(this.weekNumber).subtract("w", 1).week();
        //console.log(this.weekNumber);

        this.getSchedule(this.weekNumber, user.personId)
        //this.loadSchedule(this.workDayList);
    }

    
    

    getSchedule = (weekNumber, employeId) =>{
        //console.log("in getSchedule " + weekNumber + " " + employeId)
        employeId = 1;
        
        if (!weekNumber || !employeId) {
            alert("An error accured, please login agian")
        }
        else
        {
            Axios.post('http://localhost:4567/work/',{
                workDayId: null,
                personId: employeId,
                weekNumber: weekNumber,
                beginTime: null,
                endTime: null,
            })
            .then((Response) =>{
                //console.log(Response);
                if (Response.data) {
                    //console.log(Response.data)
                    workDayList = Response.data;  
                    //this.loadSchedule(Response.data);  
                    return Response.data;                
                }
                else
                {
                    this.workDayList = "No data";
                }
            }).then(workdayslist => this.setState({workdayslist}));
        }
    }

    loadSchedule = (items) => {
        //console.log("in loadSchedule");
        
        //console.log(items);

        if (!items || items.lenght === 0) {
            return("No data")
        }
        else
        {
            //console.log("na eerste if")

        return (
            <table>
            <tbody>{items.map(function(item) {
                   
                     return (
                        <tr key = {item.workDayId}>
                            <td> {"Avalible"} </td>
                            <td>{item.workDate}</td>
                            <td>{item.beginTime}</td>
                            <td>{item.endTime}</td>
                        </tr>
                      )
                   
                   })}</tbody>
             </table>
          )
        }
    }

    redirectTo = (props) =>{
        this.props.history.push({pathname: "/"+props});
    }

    logout = () =>{
        cookie.remove('token');
        localStorage.clear();
        this.redirectTo("");
    }

    render() {  

        if(this.redirect)
        {
            return <Redirect push to='/' />
        }
        else
        {

        const worklist = workDayList.map(day => {
           //console.log(day.workDate, day.workDayId);
           return(
               /*<li key={day.workDayId}>{day.workDate} , {day.workDayId}</li>*/
                <tr className="table-row"> 
                       <td><input type="checkbox" name="toggleSwitch" id="toggleSwitch" />
                       <label class="toggle-switch-label" for="toggleSwitch" >
                       True </label>
                       <span class="toggle-switch-inner"></span>
                       <span class="toggle-switch-switch"></span>
                </td>
                   <td className="table-column">{day.workDate}</td>
                   <td className="table-column">{day.beginTime}</td>
                   <td className="table-column">{day.endTime}</td> 
                </tr>
           ) 
        })

        return(
            <view>
                <div className="topnavbar">
                    <div className="topnavbar-button" className="whiteText">
                        <a id="hover" onClick={ () => this.logout()}>Uitloggen</a>
                        <a id="hover" onClick={ () => this.redirectTo("account")}>Account</a>
                        <a id="hover" onClick={ () => this.redirectTo("verlof")}>Verlof</a>
                        <a id="hover" onClick={ () => this.redirectTo("groepsrooster")}>Groepsrooster</a>
                        <a id="hover" onClick={ () => this.redirectTo("rooster")}>Rooster</a>
                        <a id="hover" onClick={ () => this.redirectTo("beschikbaarheid")}>Beschibaarheid</a>
                        <a id="hover" onClick={ () => this.redirectTo("home")}>Home</a>  
                        <b className="font-size">User: {user.firstName}</b>
                  
                    </div>    
                </div>

                <div className="container-center">
                    <div className="item-center">
                        <button className="beschikbaarheid-button" onClick={ () => this.subtractWeekOffDate(this.workDayList)}> {" < "} </button>
                        <button type="button" className="beschikbaarheid-button" onClick={this.addWeekToDate}>  >  </button>
                        
                        <div className="text-center-padding">
                            <h3 className="whiteText">Week van {this.state.date}</h3>
                        </div> 
                        
                        <div className="item-center">
                        
                        <table className="table-row"> {/* center table */}
                            <tr className="row-table">
                                <th className="table-column">Date</th>
                                <th className="table-column">Begin</th>
                                <th className="table-column">End</th>
                            </tr>
                            {this.getSchedule, worklist}
                        </table>
                         
                    
                        </div>
                    </div>
                                      
                </div>
                
                {/*<h1>{this.props.location.state.LoggedInUser.firstName}</h1>*/}
           </view>
        )
        }
    }
}

export default Beschikbaarheid

