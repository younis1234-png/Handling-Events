import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService"

class Movies extends Component {
    state = {  
        movies: getMovies()
    }

    // Handel Delete
    handelDelete = (movie) =>
    {
        console.log( movie )
        // update our state of our component, and removie the movie from our movie array 
        // we do this by creating new movie array 
        // m equal to m_.id not equal to movie._id => this will filter out the one we clikc on 
        const movies = this.state.movies.filter( m => m._id !== movie._id )
        // now we have a new array of movies => we gonna call setSate to set our new array ({movies property to the movies object(our new array const)})
        //  this will over writ the property of our state object 
        // since the property and the value is the same we can remove one 
        this.setState({movies: movies})
    }

    render ()
    {
        // refactoring an expression 
        const { length: count } = this.state.movies
        
        // condition statement 
        if ( count === 0 ) return <p>There are no movies in the database </p>
        
        return (
            <React.Fragment>
                {/* // show the number of the movies in our data based,WE HAVE TO ADD REACT.FRAGMENT = because WERE RENDERING MORE THAN ONE ELEMENT   */ }
                {/* // show the number of the movies in our data based  */ }
                <p>Showing { count } movies are in the database</p>
                <table className="table">

                                    
                                    
                    <thead>

                        <tr>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Stock</th>
                            <th>Rate</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        { this.state.movies.map( ( movie =>
                            // assign a specific id for eah movie 
                            <tr key={ movie._id }>
                                            
                                <td>{ movie.title }</td>
                                <td>{ movie.genre.name }</td>
                                <td>{ movie.numberInStock }</td>
                                <td>{ movie.dailyRentalRate }</td>
                                {/* assign a buttons the id is the way to identify each object */ }
                                <td>
                                    <button onClick={ () => this.handelDelete( movie ) } className="btn btn-danger btn-sm">Delete</button>
                                </td>
                            </tr>
                        ) ) }
                        {/* <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr> */}
                    </tbody>

                </table> 

            </React.Fragment>
        );
    }
}
 
export default Movies;



// imcr 
// cc

