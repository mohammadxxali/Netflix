import React, {
  Component
} from 'react';
import axios from 'axios';

import Layout from './Layout/Layout';
import MovieRow from '../components/MovieRow/MovieRow';

class App extends Component {

  state = {
    rows: []
  }

  makeAipCall = (searchItem) => {
    const url = "https://api.themoviedb.org/3/search/movie?api_key=224ce27b38a3805ecf6f6c36eb3ba9d0&page=1&query=" + searchItem;
    axios.get(url)
      .then(res => {
        const movies = res.data.results;
        let movieRows = [];
        let total = 0;
        movies.forEach((movie) => {
          movie.posterSrc = "https://image.tmdb.org/t/p/w185" + movie.poster_path;
          total += 1;

          const movieComponent = < MovieRow
          val = {
            total
          }
          key = {
            movie.id
          }
          movie = {
            movie
          }
          />
          movieRows.push(movieComponent);
        })
        this.setState({
          rows: movieRows
        });
      }).catch(error => {
        console.log(error);
      });
  }

  searchHandler = (event) => {
    const searchItem = event.target.value;
    this.makeAipCall(searchItem);
  }

  render() {
    return (
       <div>       
         <Layout />
          {/* <Search onSearch={this.searchHandler}/>
          {this.state.rows} */}
       </div>
       
    );
 }
}

export default App;
