import React from 'react';
import { Grid, Container } from 'semantic-ui-react';

function JobTitle() {
    return (
        <Container>
            <Grid>
                <Grid.Row columns={1}>
                    <Grid.Column textAlign="center">
                    <h1 className="title">Web Developer and Audio Engineer</h1>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    )
}

export default JobTitle;
