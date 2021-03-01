import React from 'react';

function Button(props) {
  return (
      <button id={"button", props.id} value={props.value} onClick={props.callback}>{props.value}</button>
  )
}

export default Button;