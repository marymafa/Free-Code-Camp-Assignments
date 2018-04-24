import React from "react";

export default class RecipeForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            recipeName: '',
            ingredients: ''
        }

        this.changeRecipeName = this.changeRecipeName.bind(this);
        this.changeRecipeIngredients = this.changeRecipeIngredients.bind(this);
        this.submitRecipe = this.submitRecipe.bind(this);
    }

    changeRecipeName(e) {
        this.setState({
            recipeName: e.target.value
        });
    }

    changeRecipeIngredients(e) {
        this.setState({
            ingredients: e.target.value
        });
    }



    submitRecipe(currentRecipes) {
        this.props.addDataProp(this.state.recipeName, this.state.ingredients);
    }
    render() {
        return (
            <div>
                <h1>Recipe Box</h1>
                <div className="form-group">
                    <label>RecipeName</label>
                    <input className="form-control" value={this.state.recipeName} onChange={this.changeRecipeName.bind(this)} placeholder="Recipe Name"></input>
                </div>
                <div className="form-group">
                    <label>Ingredients</label>
                    <input className="form-control" placeholder="Ingredients,separated by commas" value={this.state.ingredients} onChange={this.changeRecipeIngredients}></input>
                </div>
                <button className="addButton" onClick={() => this.submitRecipe(this.state.recipes)}>Add Recipe</button>
            </div>
        );
    }
}