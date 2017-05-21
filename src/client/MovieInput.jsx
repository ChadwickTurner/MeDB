import React from 'react';

export default class HomePanel extends React.Component {
    constructor() {
        super();

        this.state = {
            movies: [],
            categories: [{name: 'Movies'}, 
                            {name: 'TV Shows'},
                            {name: 'Books'},
                            {name: 'Board Games'}]
        }
    }
    submitMovie(name, rating) {
        const movie = {name: name, rating: rating, id: window.id++};
        this.state.movies.push(movie);
        this.setState({movies: this.state.movies});
    }
    render() {
        return (
            <div id='HomePanel'>
                <SidePanel categories={this.state.categories} />
                <MovieInput submitMovie={this.submitMovie.bind(this)}/>
                <MovieOutput movies={this.state.movies}/>
            </div>
        );
    }
}

class SidePanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: this.props.categories,
        }
    }
    render() {
        let cats = this.state.categories.map((category) => {
            return <Category name={category.name} key={category.name} />
        })
        return (
            <div id='SidePanel'>
                <ul id='SidePanelCategories'>{cats}</ul>
            </div>
        );
    }
}

class Category extends React.Component {
    render() {        
        return(<li className='Category'>{this.props.name}</li>);
    }
}

class MovieInput extends React.Component {
    handleMovieNameChange(e) {
        this.setState({movieName: e.target.value});
    }
    handleRatingChange(e) {
        this.setState({rating: e.target.value});
    }
    render() {
        return (
            <div id='MovieInput'>
                <p> Movie Name: </p>
                <input type="text" name="MovieName" onChange={this.handleMovieNameChange.bind(this)} />
                <p> Rating: </p>
                <input type="text" name="Rating" onChange={this.handleRatingChange.bind(this)}/>
                <button onClick={()=> {this.props.submitMovie(this.state.movieName, this.state.rating);}}> Submit </button>
            </div>
        );
    }
}

class Movie extends React.Component {
    render() {
        return (<li>{"Name: " + this.props.movie.name + ", Rating: " + this.props.movie.rating} </li>);
    }
}

class MovieOutput extends React.Component {
    render() {
        let moviesList = this.props.movies.map((movie) => {
            return(<Movie movie={movie} key={movie.id}/>)
        });
        return (
            <ul id='MovieOutput'>{moviesList}</ul>
        );
    }
}