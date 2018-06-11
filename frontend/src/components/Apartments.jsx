import React, { Component } from 'react';
import axios from 'axios';
import { Card, Icon, Image } from 'semantic-ui-react';



class Apartments extends Component {
    constructor(){
        super();

        this.state = {
             apartments: []
        }
    }

    getAllApartments = () => {
        axios.get('/users/apartments')
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
        console.log(`Here are your apartments: `, apartments)
        return(
            <div className="mainDiv">
                <div>
                    <h1>All Apartments</h1>
                </div>
                <div className="cardContainer">
                {apartments.map(apartment => {
                    return (
                            <Card>
                                        <Image src={apartment.imgurl} size='massive' />
                                        <Card.Content>
                                        <Card.Header>{apartment.apt_name}</Card.Header>
                                        <Card.Meta>
                                            <span className='date'>Constructed in 2001</span>
                                        </Card.Meta>
                                        <Card.Description>{apartment.apt_address}</Card.Description>
                                        </Card.Content>
                                        <Card.Content extra>
                                        <a>
                                            <Icon name='user' />
                                            125 Tenants
                                        </a>
                                        </Card.Content>
                                    </Card>
                    )
                })}
                

            </div>
        </div>
        )
    }

}

export default Apartments;