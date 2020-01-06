import React from "react";
import { Redirect } from 'react-router-dom'
import Axios from "axios";

import {Cookies} from "react-cookie";

const cookie = new Cookies();

var user;
var userID;
var old_password;
var new_password;
var confirmed_new_password;
var result = null;

class Account extends React.Component
{

    constructor(props){
        super(props)
        
        this.redirect = false;
        this.logout = this.logout.bind(this);
        
        this.redirectTo = this.redirectTo.bind(this);
        this.changePasswordInfo = this.changePasswordInfo.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.result = result;
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

            console.log(user);
            console.log(cookie.get('token'));
            console.log(user.token);

        if(user.token !== cookie.get('token'))
        {
            console.log("nope");
            this.redirect = true;
        }
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

    changePasswordInfo(){
        userID = user.userId;
        old_password = document.getElementById("oldPassword").value;
        new_password = document.getElementById("newPassword").value;
        confirmed_new_password = document.getElementById("confirmNewPassword").value;
    

        console.log(old_password);
        console.log(new_password);
        console.log(confirmed_new_password);

        this.result = this.changePassword(userID ,old_password, new_password, confirmed_new_password);
        
        //TODO: Testen feedback systeem

        if (this.result === "True") {
            alert("Password changed succesfull")
        }
        else
        {
            alert("Failed to changed password")
        }
        
    }

    changePassword = (userID, oldPass, newPass, confPass) => {

        console.log(oldPass, newPass, confPass);

        if (!oldPass) {
            alert("Old password is empty")
        }
        else if(!newPass)
        {
            alert("New password is empty")
        }
        else if(!confPass)
        {
            alert("Confirm password is empty")
        }
        else
        {
            /*const changePassModel = {
                userId: userID,
                oldPassword: oldPass,
                newPassword: newPass,
                confNewPassword: confPass,
            }*/

            Axios.put('http://localhost:4567/user/changepassword', {
                userId: userID,
                oldPassword: oldPass,
                newPassword: newPass,
                confNewPassword: confPass,

                
            }).then((Response) => {
                
                console.log(Response.data)

                if (Response.data)
                {
                    return Response.data;
                }
            })
            
        }

    }

    render() {

        //TODO: Create add user if admin

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

                <div id="input-center" class="input-center">

                        <div className="login-center">
                            <p>Change password</p>
                        </div>

                        <div className="text-input">
                            <input name="oldPassword" type="password" placeholder="Enter old password" class="text-line" id="oldPassword" required pattern="\S+"></input> {/*pattern == cant have white space*/}
                        </div>

                        <br></br>

                        <div className="text-input">
                            <input name="newPassword" type="password" placeholder="Enter new password" class="text-line" id="newPassword" required pattern="\S+"></input> 
                        </div>

                        <br></br>

                        <div className="text-input">
                            <input name="confirmNewPassword" type="password" placeholder="Confirm new password" class="text-line" id="confirmedNewPassword" required pattern="\S+"></input> 
                        </div>
                        <div className="login-center">
                            {//<button type="button" className="login-button" onClick = {function(event) {login_info()}}>Login </button>*/
                                //<button type="button" className="login-button" onClick={function () { alert('Dit is een login button'); }}>Login </button>*/
                                //<button type="button" className="login-button" onClick="loginInfo()" id="loginButton">Login </button>*/
                            }
                            <button type="button" className="login-button" onClick={this.changePasswordInfo}>Login</button>

                        </div>
                    </div>

           </view>
        )
        }
    }
}

export default Account