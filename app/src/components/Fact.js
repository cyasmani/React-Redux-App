import React from 'react'
import { Jumbotron} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Fact({fact}) {
    return <Jumbotron><blockquote>{fact.text}</blockquote></Jumbotron>
}

export default Fact