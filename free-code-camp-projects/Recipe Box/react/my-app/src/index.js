
import React from "react";
import ReactDOM from "react-dom";
import './index.css'
import Modal from 'react-modal';



class Recipes extends React.Component {

  constructor() {
    super();

    this.state = {
      recipes: [],
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

  handleChange(e) {
    this.setState({ recipeName: e.target.value })
    this.setState({ ingredients: e.target.value })
    // Set some data
    //localStorage.setItem("key", "value");

    // Get some data 
    //localStorage.getItem("key");
  }

  handleAddRecipe() {
    this.setState({
      showmodal: true,
      modalType: "Add a recipe name:'',ingredients:'' "
    });
    localStorage.setItem('OBJ', JSON.stringify(this.state));
    var results = JSON.parse(localStorage.getItem('OBJ'))
    let recipes = []
    let ingredients = []
    recipes.push({ recipes })
    this.setState({ recipes: recipes })
    this.setState({ ingredients: ingredients })
    this.setState({ recipeName: '', ingredients: '' })
    this.closeModal()

  }
  componentWillMount() {
    Modal.setAppElement('body');
  }
  render() {
    return (
      <div>
        <div>
          <h1>Recipe Box</h1>
          <textarea />
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
            <h2 ref={subtitle => this.subtitle = subtitle} onChange={this.componentWillMount.bind(this)}>Ingredients</h2>
            <textarea placeholder="enter your ingredientes here, separated by commas" />
          </div>
          <div>
            <button onClick={this.handleAddRecipe.bind(this)}>Add Recipe</button>
            <button>delete</button>
            <button onClick={this.closeModal}>close</button>
          </div>
        </Modal>
      </div>

    )
  }
}

ReactDOM.render(<Recipes />, document.getElementById('root'))