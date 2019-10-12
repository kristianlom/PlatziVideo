import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getVideoSource } from '../actions';
import '../assets/styles/components/Player.scss';
import NotFound from './NotFound';

const Player = (props) => {

  const pro = props;

  const { id } = pro.match.params;

  const hasPlaying = Object.keys(pro.playing).length > 0;

  useEffect(() => {
    pro.getVideoSource(id);
  }, []);

  return hasPlaying ? (
    <div className='Player'>
      <video controls autoPlay>
        <source src={pro.playing.source} type='video/mp4' />
      </video>
      <div className='Player-back'>
        <button type='button' onClick={() => props.history.goBack()}>
          Regresar
        </button>
      </div>
    </div>
  ) :
    <NotFound />;
};

const mapStateToProps = (state) => {
  return {
    playing: state.playing,
  };
};

const mapDispatchToProps = {
  getVideoSource,
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
