import React from "react"

export default class EditForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{ recipeName: this.props.recipeName, ingredients: this.props.ingredients }],
            ingredients: props.ingredients,
            recipeName: props.recipeName,
        }
        this.changeRecipeName = this.changeRecipeName.bind(this);
        this.changeRecipeIngredients = this.changeRecipeIngredients.bind(this);
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

    save(data) {
        var recipes = this.state.data;
        console.log("recipes", recipes)
        var currentRecipe = { recipeName: this.props.recipeName, ingredients: this.props.ingredients }
        console.log("currentRecipe", currentRecipe)
        var editingRecipe = recipes.find(function (val) { val === currentRecipe })
        console.log("editingRecipe", recipes)
        this.setState({ data: currentRecipe })
        localStorage.setItem('OBJ', JSON.stringify(editingRecipe));

    }

    render() {
        return (
            <div>
                <div className="form-group">
                    <label>RecipeName</label>
                    <input className="form-control" value={this.state.recipeName} onChange={this.changeRecipeName.bind(this)} placeholder="Recipe Name"></input>
                </div>
                <div className="form-group">
                    <label>Ingredients</label>
                    <textarea className="form-control" placeholder="Ingredients,separated by commas" value={this.state.ingredients} onChange={this.changeRecipeIngredients}></textarea>
                </div>
                <button className="addButton" onClick={this.save.bind(this)}>Save</button>
            </div>
        );
    }
}