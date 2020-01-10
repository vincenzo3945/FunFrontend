import React from 'react';
import ReactDOM from 'react-dom';

import { cleanup} from "@testing-library/react";
import { shallow, mount, render } from 'enzyme';

import Home from './Home';
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
       
       shallow(<Home/>);
    });
 });