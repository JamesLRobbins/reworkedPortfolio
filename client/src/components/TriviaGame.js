import React from 'react';
import { Image, Container, Grid } from 'semantic-ui-react';
import TriviaGameImage from '../images/Trivia_Game.png';

function TriviaGame() {
    return(
        <Container>
        <Grid columns={1}>
            <Grid.Row>
                <Grid.Column>
                    <Image src={TriviaGameImage} size="massive" rounded href="https://jameslrobbins.github.io/TriviaGame/" target="_blank" rel="noopener noreferrer"/> <br />      
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <b>Description: </b>How well do you know 90's Nickelodeon?
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <b>Languages: </b>HTML, CSS, Javascript
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Container>
    )
}

export default TriviaGame;