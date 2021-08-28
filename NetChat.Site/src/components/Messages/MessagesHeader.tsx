import React from 'react'
import { Header, Icon, Segment } from 'semantic-ui-react';
import SearchImput from './SearchImput';

const MessagesHeader = () => {
    return (
        <Segment clearing>
            <Header 
             fluid="true"
             floated ="left"
             style={{marginBotton:0}}
            >
                <span>
                    Channel 
                    <Icon name={'star outline'} color="black"/>
                </span>
                <Header.Subheader>4 users</Header.Subheader>
            </Header>
            <SearchImput/> 
        </Segment>
    )
}

export default MessagesHeader
