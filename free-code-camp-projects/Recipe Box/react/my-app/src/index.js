import React from "react";
import ReactDOM from "react-dom";
import './index.css'
import Modal from 'react-modal';


class Recipes extends React.Component {

    constructor() {
        super();

        this.state = {
            recipe: [],
            ingredients: "",
            modalIsOpen: false
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
        this.setState({ recipe: e.target.value });
        this.setState({ ingredients: e.target.value })

    }

    handleAddRecipe(event) {
        event.preventDefault();
        this.setState({
            showModal: true,
            modalType: "Add a Recipe",
            recipe: "",
            ingredients: "",
            
            
        })
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
                        <h2 ref={subtitle => this.subtitle = subtitle}>Recipe name</h2>
                        <input placeholder="enter your recipe name here" recipe={this.state.refcipe} onChange={this.handleChange.bind(this)} />
                        <h2 ref={subtitle => this.subtitle = subtitle}>Ingredients</h2>
                        <textarea placeholder="enter your ingredients here, separated by commas" recipe={this.state.refcipe} onChange={this.handleChange.bind(this)} />
                    </div>
                    <div>
                        <button onClick={this.handleAddRecipe.bind(this)}>Add Recipe</button>
                        <button >delete</button>
                        <button onClick={this.closeModal}>close</button>
                    </div>
                </Modal>
            </div>

        )
    }
}

ReactDOM.render(<Recipes />, document.getElementById('root'))