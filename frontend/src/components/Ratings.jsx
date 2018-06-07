import React, { Component } from 'react';
import axios from 'axios';




class Ratings extends Component {
    constructor(props){
        super(props);

        this.state = {
          ratings: [],
      }
    }


    getAllRatings = () => {
      axios.get('users/getallratings')
          .then(res => {
            debugger
              console.log(`tell me the ratingss`, res.data.data)
              this.setState({
                  ratings: res.data.data
              })
          })
          .catch(error => {
              console.log(error);
          });
  }


    getUserRating = () => {
      console.log("UserRating function is being fired.")
      const { userRating } = this.state;
      axios.get(`/users/getuserrating/${userRating}`)
          .then(res => {
              console.log(`tell me what's really going on`, res.data.userRating)
              this.setState({
                  userRating: res.data.userRating
              })
          })
          .catch(error => {
              console.log(error);
          });
  }

  componentDidMount() {
    console.log('Everything has been loaded to the DOM')
    this.getUserRating();
    this.getUserRating()
}
    render(){
      const { ratings } = this.state;
        return(
            <div> 
              {ratings}
            </div>
        )
    }

   
}

export default Ratings;