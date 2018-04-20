import React from "react"

export default class EditForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
        var newRecipe = this.state.data;
        console.log("newrecipe", newRecipe)
        if (this.props.editing) {
            newRecipe.push({
                ingredients: this.props.ingredients,
                recipeName: this.props.recipeName,
            });

        }

        this.setState({ data: newRecipe })
        localStorage.setItem('OBJ', JSON.stringify(newRecipe));
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
