import React from 'react';
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Emoji from './Emoji';
import * as ROUTES from '../constants/routes';

const StyledCard = styled(Card)`
    width: 18rem;
`;

const CardLink = styled(Link)`
    color: #000;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
    &:hover {
        color: #890067;
    }
`;

const Invalid = () => (
    <StyledCard>
        <Card.Body>
            <Card.Title>404 <Emoji symbol="💀" /></Card.Title>
            not supposed to be here
        </Card.Body>
        <Card.Footer><CardLink to={ROUTES.LANDING}>back</CardLink></Card.Footer>
    </StyledCard>
);

export default Invalid;
