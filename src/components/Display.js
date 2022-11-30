import React from 'react'
import ListItem from './ListItem';

const Display = (props) => {
  return (
      <ul>
        <h4>{props.title}</h4>
          <ListItem content={props.author} />
          <ListItem content={props.url} />
          <ListItem content={props.likes} />
      </ul>
    
  )
}

export default Display