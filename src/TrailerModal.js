import React from "react";
import ReactModal from "react-modal";
import YouTube from "@u-wave/react-youtube";
import "./TrailerModal.css";

class TrailerModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false, isLoading: true, videos: [] };
  }

  getTrailers() {
    const API_KEY = "24a6dd0cb86858abd356f876cfedaaca";
    const videoAPI = `https://api.themoviedb.org/3/movie/${
      this.props.id
    }/videos?api_key=${API_KEY}&language=en-US`;

    fetch(videoAPI)
      .then(response => response.json())
      .then(data => {
        this.setState({
          videos: data.results,
          isLoading: false
        });
      });
  }

  openModal = () => {
    this.setState({ isOpen: true });
  };

  closeModal = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const { videos } = this.state;
    return (
      <div class="text-center">
        <button
          className="btn btn-block cardFooter-btn"
          onClick={e => {
            this.openModal(e);
            this.getTrailers(e);
          }}
        >
          Show Trailer
        </button>
        <ReactModal
          className={{
            base: "Modal",
            afterOpen: "Modal-afterOpen",
            beforeClose: "Modal-beforeClose",
          }}
          overlayClassName="Overlay"
          onRequestClose={this.closeModal}
          closeTimeoutMS={2000}
          isOpen={this.state.isOpen}
        >
          <div className="container-fluid p-5">
            <div>
              <h2>{this.props.title}</h2>
              <small className="lead">Recommended trailers for you</small>
              <button className="btn btn-exit" onClick={this.closeModal}>
                X
              </button>
            </div>
            <div className="d-flex flex-wrap box">
              {videos.map(video => (
                <div className="m-3">
                  <YouTube video={video.key} width="300px" height="200px" />
                </div>
              ))}
            </div>
          </div>
        </ReactModal>
      </div>
    );
  }
}

export default TrailerModal;
