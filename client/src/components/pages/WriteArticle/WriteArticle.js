import React, { useState } from 'react';
import { Button } from 'kc-react-widgets';
import './WriteArticle.css';
import logo from './logo2.png';
import TextareaAutosize from 'react-textarea-autosize';

function WriteArticle(props) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  function onChangeContent(ev) {
    setContent(ev.target.value);
  }

  

  function submit() {
    const formData = {
      title: title,
      text: content,
    };
    // Can also be written:
    // const formData = {title, text: content};

    fetch('/api/mongodb/templates/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Got this back', data);

        // Redirect to blog
        props.history.push('/blog/');
      });
  }

  return (
    <div className="WriteArticle">
      <header className="template-header">
      <img src={logo} className="templatePage-logo" alt="Concerned Citizens Logo"/>
      <p><strong>Compose Your Template</strong></p>
      </header>
      <div className="subHeader">
      <p>Start typing below to share with your connections and begin your campaign</p>
      </div>

      <br />

      <TextareaAutosize
      name="content"
      style= {{borderColor: "black", backgroundColor: "white", color: "black", fontSize: 20}}
      minRows={10}
      onChange={onChangeContent}
      value={content}
      defaultValue="type your template here..."
     />

      <br />
      <div className="template-button">
        <Button
          type = "default"
          size = "large"
          depth = "tall"
          shape = "square"
          onClick={submit}
          >Share
        </Button>
      </div>

    </div>
  );
}

export default WriteArticle;
