import { useState } from "react";
import React from "react";
import { Input } from "antd";

function AddFood({ addFoodForm }) {

    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [calories, setCalories] = useState("");
    const [servings, setServings] = useState("");

    const handleName = (event) => setName(event.target.value);
    const handleImage = (event) => setImage(event.target.value);
    const handleCalories = (event) => setCalories(event.target.value);
    const handleServings = (event) => setServings(event.target.value);

    const handleSubmit = (event) => {
        // Prevent the page reload (default behavior of the browser)
        event.preventDefault();

        // Get the data from the state/inputs
        const newFood = {
            name: name,
            image: image,
            calories: calories,
            servings: servings
        }

        addFoodForm(newFood);

        // Clear the inputs
        setName("");
        setImage("");
        setCalories("");
        setServings("");
    }

    return (
        <div className="AddFoodForm">
            <h4>Add Food Entry</h4>

            <form onSubmit={handleSubmit}>

                <label>Name:</label>
                <Input type="text" name="name" value={name} onChange={handleName} />

                <label>Image:</label>
                <Input type="text" name="image" value={image} onChange={handleImage} />

                <label>Calories:</label>
                <Input type="number" name="calories" value={calories} onChange={handleCalories} />

                <label>Servings:</label>
                <Input type="number" name="servings" value={servings} onChange={handleServings} />

                <button type="submit">Create</button>
            </form>
        </div>
    );
}

export default AddFood;