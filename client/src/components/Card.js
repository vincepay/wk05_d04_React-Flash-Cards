import React from 'react';

const styles = {
  complete: {
    display: 'none',
    textDecoration: 'line-through',
    color: 'grey'
  },
  pointer: { cursor: 'pointer' }
}

const Card = ({ id, complete=true, front, back, updateCard, deleteCard }) => (
  <div className="col s12">
    <div className="col m8 card">
      <div className="left">
        {front}
      </div>
      <div style={ complete ? styles.complete : {} } className="center">
        {back}
      </div>
    </div>
    <div className="col m2">
      <input
        id={`item-${id}`}
        type="checkbox"
        defaultChecked={complete}
        onClick={() => updateCard(id)}
      />
      { complete === true ? 
        <label htmlFor={`item-${id}`} className="btn small">Show Back</label>
        :
        <label htmlFor={`item-${id}`} className="small btn">Hide Back</label>
      }
    </div>
    <div style={ styles.pointer } className="red btn" onClick={() => deleteCard(id)}>
      X
    </div>
  </div>
)

export default Card;