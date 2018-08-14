// var App = () => (
//   <div>
//     <nav className="navbar">
//       <div className="col-md-6 offset-md-3">
//         <div><h5><em>search</em> view goes here</h5></div>
//       </div>
//     </nav>
//     <div className="row">
//       <div className="col-md-7">
//         <VideoPlayer video={exampleVideoData[0]} />
//       </div>
//       <div className="col-md-5">
//         <VideoList videos={exampleVideoData} />
//       </div>
//     </div>
//   </div>
// );

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      videoObj: exampleVideoData[0]
    }
  }
  
  changeVideo(video) {
    this.setState({videoObj: video});
  }
  
  render() {
    return (<div>
    <nav className="navbar">
      <div className="col-md-6 offset-md-3">
        <div><Search /></div>
      </div>
    </nav>
    <div className="row">
      <div className="col-md-7">
        <VideoPlayer video={this.state.videoObj} />
      </div>
      <div className="col-md-5">
        <VideoList videos={exampleVideoData} state={this.changeVideo.bind(this)} />
      </div>
    </div>
  </div>)
  }
}



// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;

