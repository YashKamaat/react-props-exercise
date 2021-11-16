import Bonus from "../bonus/Bonus";
//1a-3c. Create a function component called Exercise
function Exercise({good="Great", bad="Semi  Fab"}
){
    return (
        <div>
        <h1>{good}</h1>
        <h1>{bad}</h1>
        <Bonus />
        </div>

    );
}

//=========
//1b. Add the export line at the bottom of the file
//Below
//===========
//2a. Inside the Exercise function component, use the RETURN keyword with parentheses to have the Exercise function component return two h1s with the following text in each. First h1: "Great". Second h1: "Not Great". (HINT: Remember only one parent/top element can be returned from a component)
//Above
//============
//2b. Open the App.js file and add the necessary import line at the top of the file that allows the Exercise component to be used in the App.js file
//on App.js
//============
//2c. Inside the return for the App component, pass in the Exercise component so it will render to the browser (AKA. Display in the browser)
//on App.js 
//============
//3a. Below the Exercise component in the App component, pass in another Exercise component with the following props and values:
//1st Prop: Set the name of the prop to "good". Set the value to the following string value "Awesome"
//2nd Prop: Set the name of the prop to "bad". Set the value to the following string value "Terrible"

//3b. Back to the Exercise.js file, use destructuring in the Exercise function component to set each prop (AKA Property) to the name of the property.

//3c. In the Exercise function component, replace the text of "Great" in the first h1 with the "good" property/parameter. Also, replace the text of "Not Great" in the 2nd h1 with the "bad" property/parameter. (HINT: Remember to use brackets {}) (NOTE: If this is done correctly, then "Awesome" & "Terrible" should display in the browser)

//3d. Set the following preset values for the "good" and "bad" properties/parameters...
//Preset value for good: "Great"
//Preset value for bad: "Not Great"
//(NOTE: If this is done correctly, then "Great" & "Not Great" should display in the browser above "Awesome" & "Terrible")

export default Exercise;