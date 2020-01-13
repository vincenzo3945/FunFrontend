import React from 'react';
import ReactDOM from 'react-dom';

import { cleanup} from "@testing-library/react";
import { shallow, mount, render } from 'enzyme';

//const wrapper = shallow(<App />);
//import App from './App';
import Account from './Account';
import {Cookies} from "react-cookie";

const cookie = new Cookies();


afterEach(cleanup);

var testUser = {
   personId: 1,
   firstName: "test",
   lastName: "user",
   emailAddress: null,
   age: null,
   address: null,
   houseNumber: null,
   zipcode: null,
   city: null,
   country: null,
   toke: "null"
}

describe('Full page render', () => {
    it('renders without crashing', () => {
       //window.sessionStorage.setItem("loggedinuser",  JSON.stringify(loggedInUser));
        window.localStorage.setItem("user", JSON.stringify(testUser));
         cookie.set("token","null");
       shallow(<Account/>);
    });
 });


<reference path="src/Verlof.js" />

 describe('Reset Password Test', () => {


    it('trows alert old password null', () => {

      window.localStorage.setItem("user", JSON.stringify(testUser));
      cookie.set("token","null");
      const component = shallow(<Account/>);

      component.instance().changePassword(1, null, "password", "password");

      expect(component.state("test")).toEqual(0);

    })

    it('trows alert new password null', () => {

      window.localStorage.setItem("user", JSON.stringify(testUser));
      cookie.set("token","null");
      const component = shallow(<Account/>);

      component.instance().changePassword(1, "password", null, "password");

      expect(component.state("test")).toEqual(0);

    })

    it('trows alert conf password null', () => {

      window.localStorage.setItem("user", JSON.stringify(testUser));
      cookie.set("token","null");
      const component = shallow(<Account/>);

      component.instance().changePassword(1, "password", "newPass", null);

      expect(component.state("test")).toEqual(0);

    })

 })