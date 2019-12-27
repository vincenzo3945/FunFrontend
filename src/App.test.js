import React from 'react';
import ReactDOM from 'react-dom';

import { cleanup} from "@testing-library/react";
import { shallow, mount, render } from 'enzyme';

const wrapper = shallow(<App />);
import App from './App';


afterEach(cleanup);

it("render without crash", () => {
    const div = document.createElement("div");
    ReactDOM.render(<button></button>, div)
})

describe('Full page render', () => {
    it('renders without crashing', () => {
       //window.sessionStorage.setItem("loggedinuser",  JSON.stringify(loggedInUser));
       
       shallow(<App/>);
    });
 });