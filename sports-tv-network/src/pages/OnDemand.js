// pages/OnDemand.js
import React from 'react';
import styled from 'styled-components';

const OnDemandContainer = styled.div`
  padding: 1rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;
`;

function OnDemand() {
    return (
        <OnDemandContainer>
            <Title>ON DEMAND</Title>
            <p>This is where the on-demand content would be displayed.</p>
        </OnDemandContainer>
    );
}

export default OnDemand;