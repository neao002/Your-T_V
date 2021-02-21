import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
//! npm i axios and import axios
import Axios from "axios";
//! Api
//? API URL :https://api.themoviedb.org/3/tv/airing_today?page=1&language=en-US&api_key=61f7ba464304e92aa6c63502caee9834
//!  Components
import Navbar from "./Components/navbar";
import Announcement from "./Components/announcement";
import Like from "./Components/like";
import Footer from "./Components/footer";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 1,
      moviesData: [],
      show: true,
    };
  }
  showHideHandler = () => {
    this.setState({
      show: false,
    });
  };
  //! Calling API always inside of "ComponentDidMount"
  componentDidMount() {
    //! 2-Axios way
    Axios.get(
      "https://api.themoviedb.org/3/tv/airing_today?page=1&language=en-US&api_key=61f7ba464304e92aa6c63502caee9834"
    )
      .then((response) => {
        this.setState({
          id: 1,
          //! "parameter name".data => access to JSON object
          //! data is the only element inside of JSON object
          moviesData: response.data.results,
          isLoaded: true,
          show: this.state.show,
        });
      })
      .catch((error) => {
        console.log("Data could not be downloaded");
      });

    //! 1-Fetch method way
    // fetch(
    //   "https://api.themoviedb.org/3/tv/airing_today?page=1&language=en-US&api_key=61f7ba464304e92aa6c63502caee9834"
    // )
    //   .then((res) => res.json())
    //   .then((response) => {
    //     this.setState({
    //       id: 1,
    //       moviesData: response.results,
    //       isLoaded: true,
    //       show: this.state.show,
    //     });
    //   })
    //   .catch((error) => {
    //     this.setState({
    //       id: 1,
    //       data: [],
    //       isLoaded: false,
    //       show: this.state.show,
    //     });
    //   });
  }

  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
        {this.state.show ? (
          <Announcement clickHandler={this.showHideHandler}></Announcement>
        ) : null}
        <div className="d-flex flex-wrap justify-content-around mx-auto">
          {this.state.moviesData.map((movie, index) => {
            return (
              <div key={movie.id} className="episode">
                <div className="ashowbox">
                  <h1 className="showtitle">{movie.name}</h1>
                  <img
                    className="showimg"
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  ></img>
                  <Like></Like>
                </div>
                <div className="ashowbox right">
                  <h2>Overview</h2>
                  <p className="overview">{movie.overview}</p>
                  <p className="info">Country Origin: {movie.origin_country}</p>
                  <p className="info">Language: {movie.original_language}</p>
                  <p className="info">Rate: {movie.vote_average}</p>
                </div>
              </div>
            );
          })}
        </div>

        <Footer></Footer>
      </div>
    );
  }
}

export default App;
