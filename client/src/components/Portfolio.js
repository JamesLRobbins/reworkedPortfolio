import React, { Component } from 'react'
import { Grid, Menu, Container } from 'semantic-ui-react'
import WordGuess from './WordGuess';
import TriviaGame from './TriviaGame';
import CrystalGame from './CrystalGame';
import FriendFinder from './FriendFinder';
import MemoryGame from './MemoryGame';
import Nerdstillery from './Nerdstillery';
import DefaultProject from './DefaultProject';

export default class Portfolio extends Component {
  state = { activeItem: 'DefaultProject' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Container className="portfolio">
      <Grid>
        <Grid.Column width={4} textAlign="justified">
          <Menu fluid vertical tabular size='large'>
            <Menu.Item
              name='Word Guess'
              active={activeItem === 'Word Guess'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='Trivia Game'
              active={activeItem === 'Trivia Game'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='Crystal Game'
              active={activeItem === 'Crystal Game'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='Friend Finder'
              active={activeItem === 'Friend Finder'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='Memory Game'
              active={activeItem === 'Memory Game'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='Nerdstillery'
              active={activeItem === 'Nerdstillery'}
              onClick={this.handleItemClick}
            />
          </Menu>
        </Grid.Column>

        <Grid.Column stretched width={12}>
          <div>
          { this.state.activeItem === "Word Guess" ? <WordGuess /> : "" }
          { this.state.activeItem === "Trivia Game" ? <TriviaGame /> : "" }
          { this.state.activeItem === "Crystal Game" ? <CrystalGame /> : "" }
          { this.state.activeItem === "Friend Finder" ? <FriendFinder /> : "" }
          { this.state.activeItem === "Memory Game" ? <MemoryGame /> : "" }
          { this.state.activeItem === "Nerdstillery" ? <Nerdstillery /> : "" }
          { this.state.activeItem === "DefaultProject" ? <DefaultProject /> : ""}
          </div>
        </Grid.Column>
      </Grid>
      </Container>
    )
  }
}