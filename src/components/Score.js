import React from 'react';
import { Header, Segment } from 'semantic-ui-react'

const square = { width: 175, height: 175 }

const Score = () => {

    return (
        <div>
            <Segment circular inverted style={square}>
                <Header as='h2' inverted>
                    Your Score
                    <Header.Subheader>1000</Header.Subheader>
                </Header>
            </Segment>
        </div>
    )
}

export default Score;