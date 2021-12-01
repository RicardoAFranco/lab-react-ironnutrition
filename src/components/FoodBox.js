// import React from "react";
import { Card, Col, Button } from "antd";

function FoodBox({ foodObj, deleteFood }) {
    return (
        < Col >
            <Card
                title={foodObj.name}
                style={{ width: 230, height: 300, margin: 10 }}
            >
                <img src={foodObj.image} height={60} alt="" />
                <p>Calories: {foodObj.calories}</p>
                <p>Servings: {foodObj.servings}</p>
                <p>
                    <b>Total Calories: {foodObj.calories} * {foodObj.servings} </b> kcal
                </p>
                <Button onClick={() => deleteFood(foodObj.name)}>Delete</Button>
            </Card>
        </Col >
    );
}

export default FoodBox;