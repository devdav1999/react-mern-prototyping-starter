import React from 'react';
import './Blog.css';

function Contents(props) {
	return (
      <div className="Contents">
        <textarea
           content="content"
           placeholder="Contents"
           value={props.content}
           onChange={props.inputContent}
        />
        <br />
        </div>
      
    );
}

export default Contents;