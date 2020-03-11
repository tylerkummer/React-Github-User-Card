import React from 'react';
import { Card, CardImg, CardBody, CardTitle } from 'reactstrap';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Followers(props) {
    return (
        <div>
            {props.followers.map(followers => (
                <Card className="cardStyle" key={followers.id}>
                    <CardBody className="bodyStyle">
                        <CardImg className="imgStyle" src={followers.avatar_url} alt={'Follower'} />
                        <CardTitle className="titleStyle" >{followers.login}</CardTitle>
                    </CardBody>
                    
                </Card>
            ))}
        </div>
    )
}

export default Followers