import React, { Component } from 'react'
import { Menu, Icon } from 'semantic-ui-react'

export default class NavBar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div className="navbar">
      <Menu secondary inverted icon>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick && this.props.home}
        />
        <Menu.Item
          name='about'
          active={activeItem === 'about'}
          onClick={this.handleItemClick && this.props.about}
        />
        <Menu.Item
          name='portfolio'
          active={activeItem === 'portfolio'}
          onClick={this.handleItemClick && this.props.portfolio}
        />
         <Menu.Item
          name='contact'
          active={activeItem === 'contact'}
          onClick={this.handleItemClick && this.props.contact}
        />
        <Menu.Menu position='right'>
          <Menu.Item
            name="linkedin"
            onClick={this.handleItemClick}
            icon="linkedin"
            href="https://www.linkedin.com/in/james-robbins-08750953/" 
            target="_blank" rel="noopener noreferrer"
            >
              <Icon name="linkedin" />
            </Menu.Item>
          <Menu.Item
            name="github"
            onClick={this.handleItemClick}
            icon="github"
            href="https://github.com/JamesLRobbins" 
            target="_blank" rel="noopener noreferrer"
            >
              <Icon name="github" />
            </Menu.Item>
          <Menu.Item
            name="email"
            onClick={this.handleItemClick}
            icon="mail" 
            >
              <Icon name="mail" />
            </Menu.Item>
        </Menu.Menu>
      </Menu>
      </div>
    )
  }
}