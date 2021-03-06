import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PlaylistsActions } from '../../store/ducks/playlists';

import Loading from '../../components/Loding';

import {
  Container, Title, List, Playlist,
} from './styles';

class Browse extends Component {
  static propTypes = {
    getPlaylistsRequest: PropTypes.func.isRequired,
    playlists: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        thumbnail: PropTypes.string,
        description: PropTypes.string,
      }),
    ).isRequired,
    loading: PropTypes.bool.isRequired,
  };

  componentDidMount() {
    const { getPlaylistsRequest } = this.props;
    getPlaylistsRequest();
  }

  render() {
    const { playlists, loading } = this.props;
    return (
      <Container>
        <Title>
          Navegar
          {loading && <Loading />}
        </Title>

        <List>
          {playlists.map(playlist => (
            <Playlist key={playlist.id} to={`/playlists/${playlist.id}`}>
              <img src={playlist.thumbnail} alt={playlist.title} />
              <strong>{playlist.title}</strong>
              <p>{playlist.description}</p>
            </Playlist>
          ))}
        </List>
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  playlists: state.playlists.data,
  loading: state.playlists.loading,
});

const mapDispatchToProps = dispatch => bindActionCreators(PlaylistsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Browse);
