
import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import RecipeItem from './RecipeItem';
import RecipeForm from './RecipeForm';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: []
        }
    }

    addData(recipeName, ingredients) {
        const currentData = this.state.data;
        var list = ingredients.split(",");
        console.log(currentData);
        currentData.push({
            recipe: recipeName,
            ingredients: list
        });
        this.setState({
            data: currentData
        });
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
                                <RecipeItem recipe={value.recipe} ingredients={value.ingredients} />
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));