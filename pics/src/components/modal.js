import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const customStyles = {
  overlay: {
    zIndex: "100",
    backgroundColor: "rgba(0, 0, 0, 0.5)"
  },
  content: {
    top: "30%",
    left: "30%",
    padding: "0",
    transform: "translate(-20%, -20%)"
  }
};

class ModalWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  componentDidMount() {
    console.log(this.props.modalIsOpen);
    this.props.modalIsOpen === true
      ? this.setState({ modalIsOpen: true })
      : this.setState({ modalIsOpen: false });
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {}

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <div>
        <button onClick={this.openModal}>open modal window</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          onAfterOpen={this.afterOpenModal}
          style={customStyles}
        >
          <div
            className="ui segment"
            style={{
              width: "90%",
              height: "90%",
              margin: "auto",
              marginTop: "20px"
            }}
          >
            <button onClick={this.closeModal}>Close Modal Window</button>
          </div>
        </Modal>
      </div>
    );
  }
}

export default ModalWindow;
