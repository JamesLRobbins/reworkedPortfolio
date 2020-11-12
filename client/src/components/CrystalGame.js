import React from 'react';
import { Image, Grid, Container } from 'semantic-ui-react'

function CrystalGame() {
    return(
        <Container>
        <Grid columns={1}>
            <Grid.Row>
                <Grid.Column>
                    <Image src={require("../images/Crystal_Game.png")} size="massive" rounded href="https://jameslrobbins.github.io/unit-4-game/" target="_blank" rel="noopener noreferrer"/> <br />      
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <b>Description: </b>Can you figure out what each crystal is worth without going over the limit? 
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <b>Languages: </b>HTML, CSS, Javascript, JQuery
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Container>
    )
}

export default CrystalGame;