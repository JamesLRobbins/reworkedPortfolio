import React from "react";
import { Image, Container, Grid, Button } from 'semantic-ui-react'
import JamesPhoto from '../images/James Robbins.jpg';

function About() {    
    return (
    <Container className="about">
        <Image src={JamesPhoto} size="small" floated="left" alt="jamesBioPic" className="bioPic"/>
        <p> I was born and raised in Muncy, PA.  At the age of 8, my family and I moved to Tennessee where I've lived ever since.
            At the age of 10, I received my first guitar and started taking lessons at the age of 11.  Over the years, I picked up
            bass, drums, mandolins, and a little bit of piano as well.  I graduated with a degree in Audio Engineering and released
            my first album "Last Words" in 2016 which I wrote, recorded, and engineered on my own.  I'm currently working on a new
            musical project "Static Siren" which I plan on having an album out mid to late 2019.</p>

        <p> Aside from music, I'm also an avid video game collector.  I own around 1,500 games/consoles spanning from 1976 to now.  
            In 2017, I started a Youtube channel where I discuss my video game collection along with fun skits I do on my own or with
            friends.  I'm excited about starting a new career as a web developer.  I plan on having my own website up by the 
            beginning of next year that will include all of my music and video projects, along with some collaborations from friends
            as well.</p>

            <Grid>
                <Grid.Row columns={4} textAlign="center">
                    <Grid.Column>
                        <Button
                            content="Linkedin"
                            color="primary"
                            href="https://www.linkedin.com/in/james-robbins-08750953/" target="_blank" rel="noopener noreferrer"
                        />    
                    </Grid.Column>
                    <Grid.Column>
                        <Button
                        content="GitHub"
                        color="primary"
                        href="https://github.com/JamesLRobbins" target="_blank" rel="noopener noreferrer"
                      />
                    </Grid.Column>
                    <Grid.Column>
                        <Button
                        content="Resume"
                        color="primary"
                        href="https://pdfhost.io/v/YmWU++eGO_James_Robbins_Resume.pdf" target="_blank" rel="noopener noreferrer"
                        />
                    </Grid.Column>
                    <Grid.Column>
                        <Button
                        content="Contact"
                        color="primary"
                        href="https://pdfhost.io/v/YmWU++eGO_James_Robbins_Resume.pdf" target="_blank" rel="noopener noreferrer"
                        />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
    </Container>
    )
}

export default About