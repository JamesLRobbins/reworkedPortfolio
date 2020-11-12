import React, { Component } from 'react'
import { Grid, Icon } from 'semantic-ui-react'

export default class DefaultProject extends Component {
    render() {
        return (
                <Grid>
                    <Grid.Row>
                        <Grid.Column>
                            <Icon name="arrow left" /> Click a project on the left for more information   
                        </Grid.Column>
                    </Grid.Row>
                </Grid>  
        )
    }
}
