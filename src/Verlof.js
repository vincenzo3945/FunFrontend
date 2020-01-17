import React from "react";
import  { Redirect } from 'react-router-dom'
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

import Axios from "axios";

import {Cookies} from "react-cookie";

const cookie = new Cookies();


var user;



var verlofList = [{
    personId: 1,
    beginDate: "27-06-2020",
    endDate: "28-06-2020"
}];

const selectedBeginDate = undefined;
const selectedEndDate = undefined;


class Verlof extends React.Component {

    constructor() {
        super()


        this.redirectTo = this.redirectTo.bind(this);

        this.redirect = false;
        this.logout = this.logout.bind(this);

        this.request = this.request.bind(this);
        this.handleBeginDayChange = this.handleBeginDayChange.bind(this);
        this.handleEndDayChange = this.handleEndDayChange.bind(this);
        this.selectedBeginDate = selectedBeginDate;
        this.selectedEndDate = selectedEndDate;
        this.state = {
            selectedDay: undefined,
            test: 1
        };

        this.verlofList = verlofList;
        this.check();
    }
    
    check(){
        if(!window.localStorage.user)
        {
            this.props.history.push({pathname: "/"});
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

    request(beginDate, endDate)
    {
        //console.log(beginDate, endDate);

        var selectedBegin = new Date(beginDate);
        var now = new Date();
        var selectedEnd = new Date(endDate);

        //console.log(selectedBegin);
        //console.log(selectedEnd);
        //console.log(now);

        var personID = user.personId;
        if (!beginDate) {
            alert("Begin date not set")
            this.state.test = 0;
        }
        else if (!endDate) {
            alert("End date not set")
            this.state.test = 0;
        }
        else if (selectedBegin < now)
        {
            alert("Begin date can't be in the past")
            this.state.test = 0;
        }
        else if (selectedEnd < now)
        {
            alert("End date can't be in the past")
            this.state.test = 0;
        }
        /*else if (selectedBegin < selectedEnd)
        {
            alert("End date can't be before the begin date")
            this.state.test = 0;
        }*/
        /*else if (!personID)
        {
            this.redirectTo("uitloggen", this.props.location.state.LoggedInUser)
        }*/
        else
        {
            Axios.post('http://localhost:4567/vacation/', {
                personId: personID,
                beginDate: beginDate,
                endDate: endDate

            }).then((Response) => {
                if  (Response.data)
                {
                    verlofList = Response.data;
                    return Response.data;
                }
                else
                {
                    this.verlofList = "no data";
                }
                
            })
            .then(verlofList => this.setState({verlofList}));

        }
    }


    handleBeginDayChange(selectedBeginDate, modifiers, DayPickerInput) {
        const input = DayPickerInput.getInput();
        this.setState({
            selectedBeginDate,
            isEmptyBeginDate: !input.value.trim(),
            isDisabledBeginDate: modifiers.disabled === true,
        })

        this.selectedBeginDate = selectedBeginDate.toLocaleDateString();
        //console.log(this.selectedBeginDate);
    }

    handleEndDayChange(selectedEndDate, modifiers, DayPickerInput) {
        const input = DayPickerInput.getInput();

        //console.log(selectedEndDate.toLocaleDateString());
        
        var selected = new Date(selectedEndDate.toLocaleDateString());
        var now = new Date()
        //console.log(selected);
        //console.log(now);


            this.setState({
            selectedEndDate,
            isEmptyEndDate: !input.value.trim(),
            isDisabledEndDate: modifiers.disabled === true,
        })

        this.selectedEndDate = selectedEndDate.toLocaleDateString();
        //console.log(this.selectedEndDate);
        
        
        
    }


    redirectTo = (props) => {
        this.props.history.push({ pathname: "/" + props});
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

        const { selectedBeginDate, isDisabledBeginDate, isEmptyBeginDate } = this.state;
        const { selectedEndDate, isDisabledEndDate, isEmptyEndDate } = this.state;

        const verlof = verlofList.map(day => {
            //console.log(day.personId, day.beginDate, day.endDate);
            return(
                <tr className="table-row">
                    <td className="table-column"> {day.beginDate}</td>
                    <td className="table-column"> {day.endDate}</td>
                </tr>
            )
        })

        return (
            <view>
                <div className="topnavbar">
                    <div className="topnavbar-button" className="whiteText">
                        <a id="hover" onClick={() => this.logout()}>Uitloggen</a>
                        <a id="hover" onClick={() => this.redirectTo("account")}>Account</a>
                        <a id="hover" onClick={() => this.redirectTo("verlof")}>Verlof</a>
                        <a id="hover" onClick={() => this.redirectTo("groepsrooster")}>Groepsrooster</a>
                        <a id="hover" onClick={() => this.redirectTo("rooster")}>Rooster</a>
                        <a id="hover" onClick={() => this.redirectTo("beschikbaarheid")}>Beschibaarheid</a>
                        <a id="hover" onClick={() => this.redirectTo("home")}>Home</a>
                    </div>
                </div>

                <div className="container-center">
                    <div className="item-center">
                        <center>
                            <table>
                                <tr>
                                    <td className="table-column-verlof">
                                        <p>
                                            {isEmptyBeginDate && 'Please type or pick a day'}
                                            {!isEmptyBeginDate && !selectedBeginDate && 'This day is invalid'}
                                            {selectedBeginDate &&
                                                `From ${selectedBeginDate.toLocaleDateString()}`}
                                        </p>
                                        <DayPickerInput
                                            format="NL"
                                            value={selectedBeginDate}
                                            onDayChange={this.handleBeginDayChange}
                                            dayPickerProps={{
                                                selectedDays: selectedBeginDate,
                                            }}
                                        />
                                    </td>

                                    <td className="table-column-verlof">
                                        <p>
                                            {isEmptyEndDate && 'Please type or pick a day'}
                                            {!isEmptyEndDate && !selectedEndDate && 'This day is invalid'}
                                            {selectedEndDate &&
                                                `Till ${selectedEndDate.toLocaleDateString()}`}
                                        </p>
                                        <DayPickerInput
                                            format="NL"
                                            value={selectedEndDate}
                                            onDayChange={this.handleEndDayChange}
                                            dayPickerProps={{
                                                selectedDays: selectedEndDate,
                                            }}
                                        />
                                    </td>

                                    <td>
                                        <div className="top-space">
                                            <a>
                                                <button className="verlof-button" onClick={() => this.request(this.selectedBeginDate, this.selectedEndDate)}>Request</button>
                                            </a>
                                        </div>
                                    </td>

                                </tr>
                                <table>
                                    <tr className="row-table">
                                        <th className="table-column">From</th>
                                        <th className="table-column">Till</th>
                                    </tr>
                                    {verlof}
                                </table>
                                

                            </table>

                            {/*TODO:   Save button for verlof aanvragen
                                    Verlof ophalen bij inladen pagina van persoon
                                    (in table net als rooster laten zien)
                                    Verlof versturen naar back-end */}

                        </center>
                    </div>
                </div>
            </view>
        )
        }
    }
}

export default Verlof