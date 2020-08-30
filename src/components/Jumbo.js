import React from 'react'
import { Jumbotron, Container } from 'reactstrap'
import styled from 'styled-components';
import solar from '../assets/solar.jpeg'

const Styles = styled.div`
.jumbotron{
    background:url(${solar}) no-repeat fixed bottom;
    backgroud-size:cover;
    color:#ccc;
    position:relative;
    z-index:-2;
}

.overlay{
    background-color:#000;
    opacity:0.6;
    position:absolute;
    top:0;
    left:0;
    bottom:0;
    right:0;
    z-index:-1

}
`



export const Jumbo = (props) => {
    return (
        <Styles>
            <Jumbotron fluid>
                <div className="overlay">  </div>
                <Container>
                    <h1 className="display-3">GoSolar</h1>
                    <p className="lead">The next revolution of smart energy technology</p>
                </Container>


            </Jumbotron>
        </Styles>
    );
};


