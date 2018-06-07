import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const Cards = () => (
  <Card>
    <Image src='/images/Candace.jpg' />
    <Card.Content>
      <Card.Header>Candace</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>Candace appreciates long walks on the beach.</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content>
  </Card>
)

export default Cards