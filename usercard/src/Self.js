import React from 'react';
import { Card, CardImg, CardBody, CardTitle } from 'reactstrap';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Self(props) {
    return (
        <div>
            <Card className="cardStyle" key={props.profile.id}>
                <CardBody className="bodyStyle">
                    <CardImg className="imgStyle" src={props.profile.avatar_url} alt={'User'} />
                    <CardTitle className="titleStyle" >{props.profile.login}</CardTitle>
                </CardBody>
            </Card>
        </div>
    )
}

export default Self