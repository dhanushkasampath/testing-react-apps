//here were are trying to test whether we have hello world on the screen

import Greeting from "./Greeting";
import {render, screen} from "@testing-library/react";

describe('Greeting component', () => {
    test('renders Hello World as a test', () => {
        //Arrange
        render(<Greeting />);

        //Act
        //... nothing

        //Asert
        const hellowWorldElement = screen.getByText('Hellow World!', {exact: true});
        expect(hellowWorldElement).toBeInTheDocument();
        // expect(hellowWorldElement).not.toBeInTheDocument();
    });
})


//get functions-> return error if not found
//query functions-> does not return error
//find functions-> want a promise