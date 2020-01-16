import React from 'react';
//import {Redirect} from 'react-router-dom';
//import {Redirect} from 'react-router';
import {withRouter} from 'react-router-dom';
//import ReactDOM from 'react-dom';
import './index.css';



//Rest
import Axios from "axios";

//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import {Cookies} from "react-cookie";

const cookie = new Cookies();

var user_name;
var pass_word;

//const state = {redirect: false}



var LoggedInUser = {
    personId: null,
    firstName: null,
    lastName: null,
    emailAddress: null,
    age: null,
    address: null,
    houseNumber: null,
    zipcode: null,
    city: null,
    Country: null,
    token: null
}



class App extends React.Component {

    constructor(){
        super()
        this.redirectTo = this.redirectTo.bind(this);
        this.Login = this.Login.bind(this);
        this.LoginInfo = this.LoginInfo.bind(this);
    }

    redirectTo = () =>{
        this.props.history.push({pathname: "/Home"});
    }

    LoginInfo() {
        user_name = document.getElementById("username").value;
        pass_word = document.getElementById("password").value;
        //console.log(user_name);
        //console.log(pass_word);
        this.Login(user_name, pass_word);
    }

   

    Login = (uname, pword) => {

        //console.log(uname);
    
        if(!uname)
        {
            alert("Username is empty")
        }
        if(!pword)
        {
            alert("Password is empty")
        }
        else
        {
            const LoginModel = {
                username: uname,
                password: pword,
            }
    
            Axios.post('http://localhost:4567/user/login', {
            username: LoginModel.username,
            password: LoginModel.password,
        })
            .then((response) => {
                //console.log(response);
                if(response.data)
                {
                    LoggedInUser = response.data;

                    window.localStorage.setItem("user", JSON.stringify(LoggedInUser));

                    //console.log(LoggedInUser)

                    cookie.set("token",LoggedInUser.token);
                    //console.log(cookie.get('token'));
            

                    //console.log(LoggedInUser.firstName)
                    this.redirectTo()
                    //alert("Login successful")
                }
            })
        
            .catch(function (error) {
                console.log(error);
            });
        } 
    }

    

    render() {

        return (

            <view>

                <div>
                    <div className="header">
                        <h1 class="removeWhiteSpace">Welkom to CEAS (Company and Employee Administration Software)</h1>
                 
                    </div>

                    <div id="input-center" class="input-center">

                        <div className="login-center">
                            <p>Login</p>
                        </div>

                        <div className="text-input">
                            {/*<label className="UnamePadding">Username</label>*/}
                            <input name="username" type="username" placeholder="Enter username" class="text-line" id="username" required pattern="\S+"></input> {/*pattern = cant have white space*/}
                        </div>

                        <br></br>

                        <div className="text-input">
                            {/*<label className="PwordPadding">Password</label>*/}
                            <input name="password" type="password" placeholder="Enter password" class="text-line" id="password" required pattern="\S+"></input> 
                        </div>
                        <div className="login-center">
                            {//<button type="button" className="login-button" onClick = {function(event) {login_info()}}>Login </button>*/
                                //<button type="button" className="login-button" onClick={function () { alert('Dit is een login button'); }}>Login </button>*/
                                //<button type="button" className="login-button" onClick="loginInfo()" id="loginButton">Login </button>*/
                            }
                            <button type="button" className="login-button" onClick={this.LoginInfo}>Login</button>

                        </div>
                    </div>
                </div>

                <footer>
                    <p className="footer-text">Created by Vincenzo Salden      -    Semester 4 Fun project </p>
                </footer>

            </view>
        )
    }
}


export default withRouter(App);
