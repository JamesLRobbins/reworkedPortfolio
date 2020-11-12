import React from 'react'
import { Image, Grid } from 'semantic-ui-react';
import James from '../images/james.jpg'

function JamesImage() {
    return (
        <div>
            <Grid>
                <Grid.Row columns={1}>
                    <Grid.Column>
                        <Image src={James} alt='image' size="tiny" centered className="jamesImg"/>
                    </Grid.Column>
                </Grid.Row>
            
                
            </Grid>
        </div>
    )
}

export default JamesImage;
