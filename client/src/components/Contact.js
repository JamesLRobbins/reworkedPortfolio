import React from 'react';
import emailjs from 'emailjs-com';
import { Form, Button, Container, Icon } from 'semantic-ui-react'

class Contact extends React.Component {

  sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_2fq9q6k', 'template_wd63p6p', e.target, 'user_Y82jhxjxWDXbp8YZSuP8S')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }

  render() {

  return (
      <Container>
        <Form onSubmit={this.sendEmail} size="large">
            <Form.Field>
                <label>Name</label>
                <input placeholder='Name' type="text" name="name" />
            </Form.Field>
        <Form.Field>
                <label>Email</label>
                <input placeholder='Email' type="email" name="email" />
        </Form.Field>
        <Form.Field>
                <label>Message</label>
                <input placeholder='Message' type="text" name="message" />
        </Form.Field>
            <Button type='submit' color="primary"><Icon name="mail" />Submit</Button>
        </Form>
        </Container>
  );
}
}

export default Contact