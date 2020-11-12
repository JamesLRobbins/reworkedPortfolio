import React from 'react';
import { Image, Container, Grid } from 'semantic-ui-react';
import WordGuessImage from '../images/Word_Guess.png'

function WordGuess() {
    return(
    <Container>
        <Grid columns={1}>
            <Grid.Row>
                <Grid.Column>
                    <Image src={WordGuessImage} size="massive" rounded href="https://jameslrobbins.github.io/Word_Guess_Game/" target="_blank" rel="noopener noreferrer"/> <br />      
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <b>Description: </b>Can you guess the correct classic video game?  
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

export default WordGuess;
                        