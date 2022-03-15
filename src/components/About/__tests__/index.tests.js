import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';


afterEach(cleanup); //This will ensure that after each test, we won't have any leftover memory data that could give us false results.
describe('About component', () => {   //the describe function to declare the component we're testing,
    //renders about test
    //First test
    it('renders', () => {   //Notice in the preceding code block that we use the it function. In the first argument, a string declares what is being tested. In the second argument, a callback function runs the test.  This is where we'll use the render function to render the About component using JSX. Alternatively, test can also be used interchangeably with it to create a test.
        render(<About />);
    });

    //Second test
    it('marches snapshot DOM node structure', () => {
        //render about
        const {asFragment} = render(<About/>);
        expect(asFragment()).toMatchSnapshot();
    })


})