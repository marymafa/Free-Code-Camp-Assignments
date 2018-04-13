
import React from "react";
import ReactDOM from "react-dom";
import './index.css'
import Modal from 'react-modal';

class Recipes extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      recipes: [{ recipeName: "cake", ingredients: "water,eggs" }],
      modalIsOpen: false,
      recipeName: "",
      ingredients: "",
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }
  closeEditModal() {
    this.setState({ showEditModal: false })
  }

  openEditModal(recipe) {
    this.setState({ showEditModal: true, recipeToEdit: recipe })
  }

  handleChange(event) {
    this.setState({ recipeName: event.target.value })

  }
  handleChangeIngredients(event) {
    this.setState({ ingredients: event.target.value })

  }


  handleAddRecipe(e) {
    var newItem = { recipeName: this.state.recipeName, ingredients: this.state.ingredients }
    this.setState({
      recipes: this.state.recipes.push(newItem),
      modalType: "Add a recipe name:'', ingredients:'' ",
      recipeName: "",
      ingredients: "",
      showmodal: true,
    });
    var results = JSON.parse(localStorage.getItem('OBJ'))
    localStorage.setItem('OBJ', JSON.stringify(this.state));
    this.closeModal()
    console.log(this.state)
  }

  clickDelete() {
    this.state.delete(this.recipes);
    this.closeModal()
  }
  editRecipe(recipeName, ingredients) {
    var recipes = this.state.recipes;
    var newRecipe = {
      recipeName: recipeName,
      ingredients: ingredients.split(",")
    };
    var i = recipes.find();
    recipes.splice(i, 1, newRecipe);
    console.log("edit: ", recipes);
    this.setState({ recipes: recipes });
    this.closeModal()
  }

  render() {
    // console.log(this.state.log)
    return (

      <div>

        <div>
          <h1>Recipe Box</h1>
        </div>
        <button onClick={this.openModal}>Add Recipe</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}

        >
          <div>
            <div ref={subtitle => this.subtitle = subtitle}>Recipe name</div>
            <input placeholder="enter your recipe name here" onChange={this.handleChange.bind(this)} />
            <h2 ref={subtitle => this.subtitle = subtitle} >Ingredients</h2>
            <textarea placeholder="enter your ingredientes here, separated by commas" onChange={this.handleChangeIngredients.bind(this)} />
          </div>
          <div>
            <button onClick={this.handleAddRecipe.bind(this)}>Add Recipe</button>
            <button onClick={this.clickDelete.bind(this)}>delete</button>
            <button onClick={this.editRecipe.bind(this)}>edit</button>
            <button onClick={this.closeModal}>close</button>
          </div>
        </Modal>
        {this.state.recipes.map(item =>
          <li>{item.recipeName}</li>
        )}

      </div>

    )
  }
}


ReactDOM.render(<Recipes />, document.getElementById('root'))