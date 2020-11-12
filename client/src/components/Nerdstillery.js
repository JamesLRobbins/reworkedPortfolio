import React from 'react';
import { Image, Container, Grid } from 'semantic-ui-react'

function Nerdstillery() {
    return(
        <Container>
        <Grid columns={1}>
            <Grid.Row>
                <Grid.Column>
                    <Image src={require("../images/nerdstillery.png")} size="massive" rounded href="http://nerdstillery.com/" target="_blank" rel="noopener noreferrer"/> <br />      
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <b>Description: </b>A website for not only my projects, but friends as well. 
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <b>Languages: </b>HTML, CSS, Javascript, React, Node, MongoDB
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Container>
    )
}

export default Nerdstillery;