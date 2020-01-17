import React from "react";
import  { Redirect } from 'react-router-dom'

import homeImage from "./resources/building.png";
import beschikbaarheidImage from "./resources/clock.png";
import groepsRoosterImage from "./resources/calendar.png";
import verlofImage from "./resources/plane.png";
import accountImage from "./resources/account.png";

import {Cookies} from "react-cookie";

const cookie = new Cookies();

var user;

class Home extends React.Component
{

    constructor(){
        super()
        this.redirectTo = this.redirectTo.bind(this);
        this.logout = this.logout.bind(this);
        this.redirect = false;
        this.check();
    }

    check(){
        if((!window.localStorage.user))
        {
            this.redirect = true;
            
            //props.history.push({pathname: "/"});
        }
        else
        {
        user = JSON.parse(window.localStorage.user);

        //console.log(user.personId);

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

    redirectTo = (path) =>{
        this.props.history.push({pathname: "/"+path});
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
                        </div>    
                    </div>
                    
                    <div className="row"> 
                        <div className="item">
                            
                            <a>
                            <img alt="HomeImage" src={homeImage} height="120" width="120" onClick={ () => this.redirectTo("home")}></img>      
                            </a> 
                            Home          
                        </div>
            
                        <div className="item">
                            <a>
                            <img alt="beschikbaarheidImage" src={beschikbaarheidImage} height="120" width="120" onClick={ () => this.redirectTo("beschikbaarheid")}></img>
                            </a>
                            Beschikbaarheid
                        </div>
                        <div className="item">
                            <a>
                            <img alt="groepsRoosterImage" src={groepsRoosterImage} height="120" width="120" onClick={ () => this.redirectTo("groepsrooster")}></img>               
                            </a>
                            Groepsrooster
                        </div>
                        <div className="item">
                            <a>
                            <img alt="verlofImage" src={verlofImage} height="120" width="120" onClick={ () => this.redirectTo("verlof")}></img>                
                            </a>
                            Verlof
                        </div>
                        <div className="item">
                            <a>
                            <img alt="accountImage" src={accountImage} height="120" width="120" onClick={ () => this.redirectTo("account")}></img>                        
                            </a>
                            Account
                        </div>
                    </div>
                    
                    <footer>
                        <p className="footer-text">Created by Vincenzo Salden      -    Semester 4 Fun project </p>
                    </footer>
                    
                </view>
            )
        }

        
    }
}

export default Home

