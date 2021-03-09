import React from 'react';
import emailjs from 'emailjs-com';
import { Form, Button, Container, Icon, Modal } from 'semantic-ui-react'

function Contact() {

    const [open, setOpen] = React.useState(false)

  function sendEmail(e) { 
    e.preventDefault();
    emailjs.sendForm('service_2fq9q6k', 'template_wd63p6p', e.target, 'user_Y82jhxjxWDXbp8YZSuP8S')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();

  }
  return (  
      <Container>
        <Form onSubmit={sendEmail} size="large">
            <Form.Field>
                <label>Name</label>
                <input placeholder='Name' type="text" name="name" />
            </Form.Field>
        <Form.Field>
                <label>Email</label>
                <input placeholder='Email' type="email" name="email" />
        </Form.Field>
        <Form.TextArea label="Message" />
        
        <Modal
      centered={false}
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      trigger={<Button type='submit' primary><Icon name="mail" />Submit</Button>}
    >
      <Modal.Header>Thank you!</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          I have received your message and will respond as soon as possible.
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setOpen(false)}>OK</Button>
      </Modal.Actions>
    </Modal>
            
        </Form>
        </Container>
  );
}



export default Contact

