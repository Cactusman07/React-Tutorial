import React from 'react';

const Card = (props) => {
  return(
    <div style={{margin: '1em'}}>
      <img alt="" width="75" src={props.avatar_url} />
      <div style={{display: 'inline-block', marginLeft: 10}}>
        <div style={{fontSize: '1.25em', fontWeight: 'bold'}}>{props.name}</div>
        <div>{props.company}</div>
      </div>
    </div>
  );
};

const CardList = (props) => {
  return(
    <div>
      {props.cards.map(card => <Card key={card.id} {...card} />) }
    </div>
  );
};

export default CardList;