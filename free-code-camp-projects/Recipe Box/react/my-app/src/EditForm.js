
import React from "react"

export default class EditForm extends React.Component {
    constructor(props) {
        console.log('edit', props);
        super(props);
        this.state = {
            data: props.recipes,
            ingredients: props.ingredients,
            recipeName: props.recipeName,
        }
        this.editRecipeName = this.editRecipeName.bind(this);
        this.editIngredients = this.editIngredients.bind(this);
    }

    editRecipeName(e) {
        this.setState({
            recipeName: e.target.value
        });
    }

    editIngredients(e) {
        this.setState({
            ingredients: e.target.value

        });
        console.log(this.state.ingredients);
    }

    save() {
        var recipes = this.state.data;
        var currentRecipe = { recipeName: this.state.recipeName, ingredients: this.state.ingredients }
        recipes[this.props.index] = currentRecipe;
        this.setState({
            data: recipes
        })
        this.props.hideEditing(currentRecipe.recipeName, currentRecipe.ingredients);
        localStorage.setItem('OBJ', JSON.stringify(recipes));
    }

    render() {
        return (
            <div>
                <div className="form-group">
                    <label>RecipeName</label>
                    <input className="form-control" value={this.state.recipeName} onChange={this.editRecipeName.bind(this)} placeholder="Recipe Name"></input>
                </div>
                <div className="form-group">
                    <label>Ingredients</label>
                    <textarea className="form-control" placeholder="Ingredients,separated by commas" value={this.state.ingredients} onChange={this.editIngredients}></textarea>
                </div>
                <button className="addButton" onClick={this.save.bind(this)}>Save</button>
            </div>
        );
    }
}