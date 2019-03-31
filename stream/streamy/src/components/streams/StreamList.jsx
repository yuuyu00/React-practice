import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStreams, deleteStream } from '../../actions';
import StreamDelete from './StreamDelete';

class StreamList extends React.Component {
  state = {};

  componentDidMount() {
    this.props.fetchStreams();
  }

  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: 'right' }}>
          <Link to="/streams/new" className="ui button primary">
            Create Stream
          </Link>
        </div>
      );
    }

    return null;
  }

  renderAdmin(stream) {
    if (stream.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <Link to={`/streams/edit/${stream.id}`} className="ui button primary">
            Edit
          </Link>
          <button
            onClick={() =>
              this.setState({ isModalShown: true, modalId: stream.id })
            }
            className="ui button negative"
          >
            Delete
          </button>
        </div>
      );
    }

    return null;
  }

  renderList() {
    return this.props.streams.map(stream => {
      return (
        <div className="item" key={stream.id}>
          {this.renderAdmin(stream)}
          <i className="large middle aligned icon camera" />
          <div className="content">
            <Link to={`/streams/${stream.id}`} className="header">
              {stream.title}
            </Link>
            <div className="description">{stream.description}</div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celles list">{this.renderList()}</div>
        {this.renderCreate()}
        {this.state.isModalShown && (
          <StreamDelete
            id={this.state.modalId}
            onDismiss={() => this.setState({ isModalShown: false })}
          />
        )}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(
  mapStateToProps,
  { fetchStreams, deleteStream },
)(StreamList);
