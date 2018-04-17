
import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import RecipeItem from './RecipeItem';
import RecipeForm from './RecipeForm';

class RecipeBox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [
                {
                    recipe: "cake",
                    ingredients: "flower, baking powder, butter, milk, vanila"
                }
            ]
        }
    }

    addData(recipeName, ingredients) {
        const currentData = this.state.data;
        var items = ingredients.split(",");
        console.log(currentData);
        
        currentData.push({
            recipe: recipeName,
            ingredients: items
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

ReactDOM.render(<RecipeBox />, document.getElementById('root'));