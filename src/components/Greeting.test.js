//here were are trying to test whether we have hello world on the screen

import Greeting from "./Greeting";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";//this is an object that helps us to trigger user events

describe('Greeting component', () => {
    test('renders Hello World as a test', () => {
        //Arrange
        render(<Greeting />);//this renders the entire component tree that is needed

        //Act
        //... nothing

        //Assert
        const hellowWorldElement = screen.getByText('Hellow World!', {exact: true});
        expect(hellowWorldElement).toBeInTheDocument();
        // expect(hellowWorldElement).not.toBeInTheDocument();
    });

    test('renders good to see you when button NOT clicked', () => {
        //Arrange
        render(<Greeting/>);

        //Act: No Action needs to be done by user in this test case

        //Assert
        const goodToSeeYouTextElement = screen.getByText('Its good to see you', {exact: false});
        expect(goodToSeeYouTextElement).toBeInTheDocument();
    });

    test('renders good to see you when button clicked', () => {
        //Arrange
        render(<Greeting/>);

        //Act: now here we need to click the button as user do
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);//this simulate the button click

        //Assert
        const changedTextElement = screen.getByText('Changed');
        expect(changedTextElement).toBeInTheDocument();
    });

    //below test is a negative scenario. it checks whether "good to see you" is there after the button click.
    // ideally it should not be there. so that also a test case.
    test('does not render "good to see you" if the button was clicked', () => {
        //Arrange
        render(<Greeting/>);

        //Act: now here we need to click the button as user do
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);//this simulate the button click

        //Assert
        const outputElement = screen.queryByText('good to see you', {exact: false});
        expect(outputElement).toBeNull();
    });
})


//get functions-> return error if not found
//query functions-> does not return error
//find functions-> want a promise