import React from 'react';

// No state of it's own, so no need for a class. Only use class level components when you need personalised event handlers, or need to manage state.
const Result = (props) => {
  return(
    <div>{props.counter}</div>
  );
};

export default Result;