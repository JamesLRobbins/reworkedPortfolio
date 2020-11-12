import React from 'react';
import { Image, Container, Grid } from 'semantic-ui-react'

function FriendFinder() {
    return(
        <Container>
        <Grid columns={1}>
            <Grid.Row>
                <Grid.Column>
                    <Image src={require('../images/Friend-FInder.jpg')} size="massive" rounded href="https://stark-headland-85145.herokuapp.com/" target="_blank" rel="noopener noreferrer"/> <br />      
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <b>Description: </b>Which video game character would you be friends with? 
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <b>Languages: </b>HTML, CSS, Javascript, Node
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Container>
    )
}

export default FriendFinder;