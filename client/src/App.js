import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Posts from "./components/Posts";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/posts")
      .then(res => {
        this.setState({ posts: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1> Node Express Posts</h1>
          <Posts posts={this.state.posts} />
        </header>
      </div>
    );
  }
}

export default App;
