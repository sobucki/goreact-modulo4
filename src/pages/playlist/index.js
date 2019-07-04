import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PlaylistDetailsActions } from '../../store/ducks/playlistDetails';
import { Creators as PlayerActions } from '../../store/ducks/player';

import Loading from '../../components/Loding';
import { Container, Header, SongList } from './styles';
import ClockIcon from '../../assets/images/clock.svg';
import PlusIcon from '../../assets/images/plus.svg';

class Playlist extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string,
      }),
    }).isRequired,
    getPlaylistDetailsRequest: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    playlistDetails: PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      description: PropTypes.string,
      thumbnail: PropTypes.string,
      songs: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          title: PropTypes.string,
          author: PropTypes.string,
          album: PropTypes.string,
          file: PropTypes.string,
          thumbnail: PropTypes.string,
          playlistId: PropTypes.number,
        }),
      ),
    }).isRequired,
    loadSong: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.loadPlaylistDetails();
  }

  componentDidUpdate(prevProps) {
    const { match } = this.props;
    if (prevProps.match.params.id !== match.params.id) {
      this.loadPlaylistDetails();
    }
  }

  loadPlaylistDetails = () => {
    // eslint-disable-next-line react/destructuring-assignment
    const { id } = this.props.match.params;
    const { getPlaylistDetailsRequest } = this.props;
    getPlaylistDetailsRequest(id);
  };

  renderDetails = () => {
    const { playlistDetails, loadSong } = this.props;

    return (
      <Container>
        <Header>
          <img src={playlistDetails.thumbnail} alt={playlistDetails.description} />
          <div>
            <span>PLAYLIST</span>
            <h1>{playlistDetails.title}</h1>
            {!!playlistDetails.songs && (
            <p>
              {playlistDetails.songs.length}
              {' '}
músicas
            </p>
            )}

            <button type="button">PLAY</button>
          </div>
        </Header>

        <SongList cellPadding={0} cellSpacing={0}>
          <thead>
            <tr>
              <th />
              <th>Título</th>
              <th>Artista</th>
              <th>Álbum</th>
              <th>
                <img src={ClockIcon} alt="Duração" />
              </th>
            </tr>
          </thead>

          <tbody>
            {!playlistDetails.songs ? (
              <tr>
                <td colSpan={5}>Nenhuma música cadastrada</td>
              </tr>
            ) : (
              playlistDetails.songs.map(song => (
                <tr key={song.id} onDoubleClick={() => loadSong(song)}>
                  <td>
                    <img src={PlusIcon} alt="Adicionar a playlist" />
                  </td>
                  <td>{song.title}</td>
                  <td>{song.author}</td>
                  <td>{song.album}</td>
                  <td>5:48</td>
                </tr>
              ))
            )}
          </tbody>
        </SongList>
      </Container>
    );
  };

  render() {
    const { loading } = this.props;
    return loading ? (
      <Container loading="true">
        <Loading />
      </Container>
    ) : (
      this.renderDetails()
    );
  }
}

const mapStateToProps = state => ({
  playlistDetails: state.playlistDetails.data,
  loading: state.playlistDetails.loading,
  teste: state.playlistDetails,
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...PlaylistDetailsActions, ...PlayerActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Playlist);
