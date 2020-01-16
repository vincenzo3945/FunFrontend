import React from "react";
import  { Redirect } from 'react-router-dom'
import Axios from "axios";

import {Cookies} from "react-cookie";

const cookie = new Cookies();

var moment = require('moment');

var workDayList = [{
    workDayId: 1,
    workDate: "27-06-2019",
    beginTime: "12:00",
    endTime: "22:00",
    firstName: "Medewerker",
    lastName: "1"
},{
    workDayId: 2,
    workDate: "28-06-2019",
    beginTime: "15:00",
    endTime: "01:00",
    firstName: "Medewerker",
    lastName: "2"
}
];

var user;

var currentDate = moment().format("DD-MM-YYYY");
var workDate = moment().format("MM-DD-YYYY");
var workDateString = currentDate;
var weekday = moment().week();


class Groepsrooster extends React.Component
{

    constructor(){
        super()


        //Dates
        this.formatDate = moment().format("DD MM-YYYY");
        this.workDateString = workDateString;
        this.weekNumber = weekday;
        this.workDate = workDate;

        this.redirect = false;
        this.logout = this.logout.bind(this);

        this.redirectTo = this.redirectTo.bind(this);
        this.getGroupSchedule = this.getGroupSchedule.bind(this);
        this.addDayToDate = this.addDayToDate.bind(this);
        this.state = {date: this.workDateString};
        this.loadSchedule = this.loadSchedule.bind(this);
        this.workDayList = workDayList;

        this.check();
    }

    check(){
        if(!window.localStorage.user)
        {
            this.redirect = true;
        }
        else
        {
            user = JSON.parse(window.localStorage.user);

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

    addDayToDate = (date) =>
    {
        this.workDateString = moment(this.workDateString, "DD MM YYYY").add('d', 1).format("DD-MM-YYYY");
        this.setState({date: this.workDateString});
        //console.log(this.workDateString + " work string");
        // this.weekNumber = moment().day("Monday").week(this.weekNumber).add("d", 1).week();
        // console.log(this.weekNumber);

        this.getGroupSchedule(this.workDateString, user.personId)
    }

    subtractDayOffDate = (workdays) =>
    {
        this.workDateString = moment(this.workDateString, "DD MM YYYY").subtract('d', 1).format("DD-MM-YYYY");
        this.setState({date: this.workDateString});
        //console.log(this.workDateString + " substract");
        // this.weekNumber = moment().day("Monday").week(this.weekNumber).subtract("d", 1).week();
        // console.log(this.weekNumber);

        this.getGroupSchedule(this.workDateString, user.personId)
    }

    testtable() {
        var workD = this.getGroupSchedule(this.workDateString , 1);
        
        return(
            <table>
                <tbody>{workD.map(function(item) {
                   
                    return (
                        <tr key = {item.workDayId}>
                            <td>{item.workDate}</td>
                            <td>{item.beginTime}</td>
                            <td>{item.endTime}</td>
                            <td>{item.lastName}, {item.firstName}</td>
                        </tr>
                    )
            })}</tbody>
            </table>
        )
    }
    

    getGroupSchedule = (workDay, employeId) =>{
       
        //console.log("in getGroupSchedule " + workDay + " " + employeId)

        if (!workDay || !employeId) {
            alert("An error accured, please login agian")
        }
        else
        {
            Axios.post('http://localhost:4567/group/',{
                workDayId: null,
                personId: employeId, 
                workDate: workDay,
                weekNumber: null,
                beginTime: null,
                endTime: null,
            })
            .then((Response) =>{
                //console.log(Response);
                if (Response.data) {
                    
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
                            <td>{item.workDate}</td>
                            <td>{item.beginTime}</td>
                            <td>{item.endTime}</td>
                            <td>{item.lastName}, {item.firstName}</td>
                        </tr>
                      )
                   
                   })}</tbody>
             </table>
          )
        }
    }

    redirectTo = (props, LoggedInUser) =>{
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
                   <td className="table-column">{day.workDate}</td>
                   <td className="table-column">{day.beginTime}</td>
                   <td className="table-column">{day.endTime}</td>
                   <td className="table-column">{day.lastName}, {day.firstName}</td>  
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
                        <button className="beschikbaarheid-button" onClick={ () => this.subtractDayOffDate(this.workDayList)}> {" < "} </button>
                        <button type="button" className="beschikbaarheid-button" onClick={this.addDayToDate}>  >  </button>
                        
                        <div className="text-center-padding">
                            <h3 className="whiteText">{this.state.date}</h3>
                        </div> 
                        
                        <div className="item-center">
                        <center>
                        <table className="table-row"> {/* center table */}
                            <tr className="row-table">
                                <th className="table-column">Date</th>
                                <th className="table-column">Begin time</th>
                                <th className="table-column">End time</th>
                                <th className="table-column">Worker</th>
                            </tr>
                            {this.getGroupSchedule, worklist}
                        </table>
                        </center>
                        </div>
                    </div>
                                      
                </div>
                
                {/*<h1>{this.props.location.state.LoggedInUser.firstName}</h1>*/}
           </view>
        )
        }
    }
}

export default Groepsrooster