class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: exampleVideoData,
      videoObj: exampleVideoData[0],
    };
  }
  
  componentDidMount() {
    this.props.searchYouTube(null, this.setSearchState.bind(this));
  }
  
  changeVideo(video) {
    this.setState({videoObj: video});
  }
  
  setSearchState(data) {
    this.setState({
      videos: data,
      videoObj: data[0]
    });
  }
  
  searchVideo(event) {
    var options = {
      query: event.target.value,
    };
    var search = function () {
      this.props.searchYouTube(options, this.setSearchState.bind(this));
    };
    _.debounce(search.bind(this), 500)();
  }
  
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><Search searchVideo={this.searchVideo.bind(this)}/></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.videoObj} />
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videos} changeState={this.changeVideo.bind(this)} />
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;