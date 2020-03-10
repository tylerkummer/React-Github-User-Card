import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
  } from 'reactstrap';

  const imgStyle = {
    width: '200px',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingTop: '20px'
  }

  const titleStyle= {
      color: 'white',
      textAlign: 'center'
  }

  const bodyStyle ={
      backgroundColor: 'gray'
  }

  const cardStyle = {
      width: '15%',
      margin: '15px auto'
  }

function Followers(props) {
    return (
        <div>
            {props.followers.map(followers => (
                <Card style={cardStyle} key={followers.id}>
                    <CardBody style={bodyStyle}>
                        <CardImg style={imgStyle} src={followers.avatar_url} alt={'Follower'} />
                        <CardTitle style={titleStyle} >{followers.login}</CardTitle>
                    </CardBody>
                    
                </Card>
            ))}
        </div>
    )
}

export default Followers