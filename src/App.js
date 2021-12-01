// src/App.js
import React from "react";
import { useState } from "react";
import "./App.css";
import FoodBox from "./components/FoodBox";
import foods from "./foods.json";
import { Row } from "antd";
import AddFood from "./components/AddFood";
import SearchFood from "./components/SearchFood";


function App() {
  const [allFood, setAllFood] = useState(foods);
  const [food, setFood] = useState(foods);
  const [isShowing, setIsShowing] = useState(true);

  const addFoodForm = (foodObj) => {
    // update the array of food shown
    const updatedFood = [foodObj, ...food];
    // update the master array with all the food
    const updatedAllFood = [foodObj, ...allFood];
    // update the state
    setFood(updatedFood);
    // setAllFood(updatedAllFood);
    setAllFood(updatedAllFood);
  }

  const searchFoodList = (char) => {
    let searchedFood;
    if (char === "") {
      searchedFood = allFood;
    }
    else {
      searchedFood = allFood.filter((oneFood) => {
        return oneFood.name.toLowerCase().includes(char.toLowerCase());
      })
    }

    setFood(searchedFood);
  }

  function deleteFood(name) {
    const filteredArr = food.filter((food) => {
      return food.name !== name;
    });
    setFood(filteredArr);
  }

  const toggleFoodList = () => {
    setIsShowing(!isShowing)
  }


  return (
    <div className="App">
      <h2>Food List</h2>
      <button onClick={toggleFoodList}>
        {isShowing ? "Hide" : "Show"}
      </button>
      <AddFood addFoodForm={addFoodForm} />
      <SearchFood searchFoodList={searchFoodList} />
      <Row>
        {food.map((eachFood) => {
          return <FoodBox key={eachFood.name} foodObj={eachFood} deleteFood={deleteFood} />;
        })}
      </Row>
    </div>
  );
}


export default App;