import 'semantic-ui-css/semantic.min.css';
import NavBar from "./components/NavBar";
import JamesImage from './components/JamesImage';
import JobTitle from './components/JobTitle';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

import './style.css';
import { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props)

    this.toggleHome = this.toggleHome.bind(this);
    this.toggleAbout = this.toggleAbout.bind(this);
    this.togglePortfolio = this.togglePortfolio.bind(this);
    this.toggleContact = this.toggleContact.bind(this);

    this.state = {
      showHome: false,
      showAbout: true,
      showPortfolio: false,
      showContact: false
    }
  }

  toggleHome (event) {
    event.preventDefault()
    this.setState({
      showHome: true,
      showAbout: false,
      showPortfolio: false,
      showContact: false
    })
  }

  toggleAbout (event) {
    event.preventDefault()
    this.setState({
      showHome: false,
      showAbout: true,
      showPortfolio: false,
      showContact: false
    })
  }

  togglePortfolio (event) {
    event.preventDefault()
    this.setState({
      showHome: false,
      showAbout: false,
      showPortfolio: true,
      showContact: false
    })
  }

  toggleContact (event) {
    event.preventDefault()
    this.setState({
      showHome: false,
      showAbout: false,
      showPortfolio: false,
      showContact: true
    })
  }

  render() {
    const { showAbout } = this.state;
    const { showPortfolio } = this.state;
    const { showContact } = this.state
  return (
    <div>
      <NavBar 
        home = { this.onClick=this.toggleHome }
        about = { this.onClick=this.toggleAbout } 
        portfolio = { this.onClick=this.togglePortfolio } 
        contact = { this.onClick=this.toggleContact }
      />
      <JamesImage />
      <JobTitle />

      { showAbout === true ? <About /> : "" }
      { showPortfolio === true ? <Portfolio /> : "" }
      { showContact === true ? <Contact /> : "" }
   </div>
  );
}
}