
import React from "react";
import ReactDOM from "react-dom";
import RecipeItem from './RecipeItem';
import RecipeForm from './RecipeForm';
// import EditForm from "./EditForm";
import './index.css';

class RecipeBox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [
                {
                    recipeName: "cake",
                    ingredients: "flower, baking powder, butter, milk, vanila"
                }
            ]
        }
    }

    addData(recipeName, ingredients) {
        const currentData = this.state.data;
        this.ingredients = ingredients.split(",");
        console.log(currentData);

        currentData.push({
            recipeName: recipeName,
            ingredients: ingredients
        });
        this.setState({
            data: currentData
        });

        localStorage.setItem('OBJ', JSON.stringify(currentData));
    }

    componentWillMount() {
        var parsedItems = JSON.parse(localStorage.getItem('OBJ'));
        if (parsedItems) {
            this.setState(
                {
                    data: parsedItems
                }
            )
        }
    }
delete(value){

}
    edit(value) {

    }
    render() {
        return (
            <div >
                <RecipeForm addDataProp={this.addData.bind(this)} />

                <h1>List of Recipes</h1>
                <div id="accordion">
                    {
                        this.state.data.map((value, index) => {
                            return (
                                <RecipeItem key={this.recipeName} collection={this.state.data} delete={()=> this.delete(value)} edit={() => this.edit(value)} recipeName={value.recipeName} ingredients={value.ingredients} />
                            )
                        })
                    }
                </div>
            </div>

        );
    }
}

ReactDOM.render(<RecipeBox />, document.getElementById('root'));