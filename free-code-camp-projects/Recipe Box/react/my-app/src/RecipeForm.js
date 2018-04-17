import React from "react";

export default class RecipeForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            recipeName: '',
            ingredients: '',
            recipes: [{
                recipeName: 'cake',
                ingredients: 'flower, baking powder, butter, milk, vanila'
            }]
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
        var newEntry ={name: this.state.recipeName,
            Ingredients: this.state.ingredients
        };
        
        this.setState({ recipes: currentRecipes.splice(1,0,newEntry)});
        console.log('newRecipes', this.state.recipes);
        this.store()
        this.props.addDataProp(this.state.recipeName, this.state.ingredients)
    }
    
    store(){
         localStorage.setItem('OBJ', JSON.stringify(this.state.recipes));
         var fromLS = JSON.parse(localStorage.getItem('OBJ'));
         this.setState({recipes:fromLS});
    }

    

    handleDelete(recipeName, ingredients) {
        const newData = this.state.data;
        const data = this.state.data;
        data.splice(recipeName, 1);
        data.splice(ingredients, 1);
        this.setState({ data: newData })
    }

    editRecipe(recipeName, ingredients) {
        const newData = this.state.data;
        var recipes = this.state.recipes;
        var newRecipe = {
            recipeName: recipeName,
            ingredients: ingredients.split(",")
        };
        var i = newData.find();
        newData.splice(i, 1, newData);
        this.setState({ data: newData });
    }
    render() {
        return (
            <div>
                <div className="form-group">
                    <label>Recipe</label>
                    <input className="form-control" value={this.state.recipeName} onChange={this.changeRecipeName.bind(this)} placeholder="Recipe Name"></input>
                </div>
                <div className="form-group">
                    <label>Ingredients</label>
                    <input className="form-control" placeholder="Ingredients,separated by commas" value={this.state.ingredients} onChange={this.changeRecipeIngredients}></input>
                </div>
                <button className="addButton" onClick={() => this.submitRecipe(this.state.recipes)}>Add Recipe</button>
                <button className="editButton" onClick={this.edit}>edit</button>
                <button className="deleteButton" onClick={this.handleDelete} value={this.value} >delete</button>
            </div>
        );
    }
}