import React, { useState } from 'react';
import { Header, Segment } from 'semantic-ui-react';

const square = { width: 175, height: 175 };

const Score = () => {
  return (
    <Segment circular inverted style={square}>
      <Header as='h2' inverted>
        Your Score
        <Header.Subheader>points go here</Header.Subheader>
      </Header>
    </Segment>
  );
};

export default Score;
