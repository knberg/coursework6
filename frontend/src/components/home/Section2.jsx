import React from 'react';

const Section2 = (props) => {
    return (
      <div className="section-2">
        <h3 className="title">{props.title}</h3>
        {props.children}
      </div>
    );
}

export default Section2;