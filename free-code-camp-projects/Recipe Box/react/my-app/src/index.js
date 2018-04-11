
import React from "react";
import ReactDOM from "react-dom";
import './index.css'
import Modal from 'react-modal';



class Recipes extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      recipes: ["cake", "chicken polony", "green salad"],
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

  }

  handleAddRecipe() {
    localStorage.setItem('OBJ', JSON.stringify(this.state));
    var results = JSON.parse(localStorage.getItem('OBJ'))
    this.setState({
      modalType: "Add a recipe name:'', ingredients:'' ",
      showmodal: true,
    });
    // eslint-disable-next-line
    this.setState({ recipeName: '', ingredients: '' })
    this.closeModal()

  }
  componentDidMount() {
      var recipes = JSON.parse(localStorage.getItem('data'))
      if (recipes) {
      this.setState({ recipes: recipes })
    }
  }
  componentWillMount() {
    Modal.setAppElement('body');
  }
  render() {
    return (
      <div>
        <div>
          <h1>Recipe Box</h1>
          <textarea onChange={this.componentDidMountn}></textarea>
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