import React from 'react';

const Section1 = (props) => {
    return (
      <div className="section-1">
        <h2 className="title">{props.title}</h2>
        {props.children}
      </div>
    );
}

export default Section1;