import React from 'react';
import { connect } from 'react-redux';
import Modal from '../Modal';
import { fetchStream, deleteStream } from '../../actions';

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.id);
  }

  onSubmit(id) {
    this.props.deleteStream(id);
    this.props.onDismiss();
  }

  handleKeypress = e => {
    if (e.key === 'Enter') {
      this.onSubmit(this.props.id);
    }
  };

  actions() {
    return (
      <>
        <button
          onClick={() => this.onSubmit(this.props.id)}
          className="ui button negative"
        >
          Delete
        </button>
        <button onClick={() => this.props.onDismiss()} className="ui button">
          Cancel
        </button>
      </>
    );
  }

  render() {
    return (
      <Modal
        onKeyDown={() => this.onSubmit(this.props.id)}
        title="Delete Stream"
        content={`Are you sure you want to delete this stream ${
          this.props.stream !== undefined
            ? `with title: ${this.props.stream.title}`
            : ''
        }`}
        actions={this.actions()}
        onDismiss={() => this.props.onDismiss()}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.id] };
};

export default connect(
  mapStateToProps,
  { fetchStream, deleteStream },
)(StreamDelete);
