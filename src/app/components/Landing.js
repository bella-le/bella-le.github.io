import React from 'react';
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import Emoji from './Emoji';

const StyledCard = styled(Card)`
    width: 18rem;
`;

const Landing = () => (
    <StyledCard>
        <Card.Body>
            <Card.Title><Emoji symbol="👑" /></Card.Title>
            under construction once again
        </Card.Body>
    </StyledCard>
);

export default Landing;
