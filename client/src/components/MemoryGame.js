import React from 'react';
import { Image, Grid, Container } from 'semantic-ui-react'

function MemoryGame() {
    return(
        <Container>
        <Grid columns={1}>
            <Grid.Row>
                <Grid.Column>
                    <Image src={require("../images/memoryGame.png")} size="massive" rounded href="https://jameslrobbins.github.io/clickyGame/" target="_blank" rel="noopener noreferrer"/> <br />      
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <b>Description: </b>Don't click the same image twice
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <b>Languages: </b>HTML, CSS, Javascript, React
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Container>
    )
}

export default MemoryGame;