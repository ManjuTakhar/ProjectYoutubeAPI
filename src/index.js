//Create a new Component ,which produce html
//take this component's

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';

import VideoList from './components/video_list';

import VideoDetail from './components/video_detail';




const API_KEY='AIzaSyAumOub64lobJ1ayJpln3OJ8-4pVwblcWU';
// const App=function(){
//   return <div>Hi </div>
// }
//new Syntax of the function
class App extends Component {
  constructor(props){
    super(props);

    this.state={
      videos: [] ,
      selectedVideo: null

    };

    YTSearch({key:API_KEY, term: 'Data Structure'},(videos) => {
      //this.setState({videos:data});
      //this.setState({videos:videos});
      this.setState({
        videos:videos,
        selectedVideo:videos[0]
      });
    });
  }
  render(){
  return (
    <div>
    <SearchBar />
    <VideoDetail
     video={this.state.selectedVideo} />
    <VideoList
    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
    videos={this.state.videos} />
   </div>
 );

 }
}

//ReactDOM.render(App);

// Error -pass an instance not the class App
//ReactDOM.render(<App/>)//not a dom element


ReactDOM.render(<App/>,document.querySelector('.container'))
