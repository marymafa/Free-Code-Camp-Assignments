import React from "react";
import ReactDOM from "react-dom";
import './index.css'
import Modal from 'react-modal';


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

class Recipes extends React.Component {

    constructor() {
        super();

        this.state = {
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
    render() {
        return (
            <div>
                <div>
                    <h1>Recipe Box</h1>
                    <textArea></textArea>
                </div>
                <button onClick={this.openModal}>Add Recipe</button>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <div>
                        <h2 ref={subtitle => this.subtitle = subtitle}>Recipe name</h2>
                        <input />
                        <h2 ref={subtitle => this.subtitle = subtitle}>Ingredients</h2>
                        <input />
                    </div>
                    <div>
                        <button>Add Recipe</button>
                        <button>delete</button>
                        <button onClick={this.closeModal}>close</button>
                    </div>
                </Modal>
            </div>

        )
    }
}

ReactDOM.render(<Recipes />, document.getElementById('root'))