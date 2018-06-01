import React, { Component } from 'react';
import axios from 'axios';


class Apartments extends Component {
    constructor(){
        super();

        this.state = {
             apartments: []
        }
    }

    getAllApartments = () => {
        axios.get('/apartments/Sparks Tower')
            .then(res => {
                console.log(`what do I have here`, res.data.data)
                this.setState({
                    apartments: res.data.data
                })
            })
            .catch(error => {
                console.log(error);
            });
    }

    componentDidMount() {
        console.log('Everything has been loaded to the DOM')
        this.getAllApartments()
    }

    render(){
        const { apartments } = this.state;
        console.log(``, apartments)
        return(
            <div>
                <h1>All Apartments</h1>
                {apartments.apt_name}
                {apartments.apt_address}

            </div>
        )
    }

}

export default Apartments;