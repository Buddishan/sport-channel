// pages/Schedule.js
import React from 'react';
import styled from 'styled-components';

const ScheduleContainer = styled.div`
  padding: 1rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;
`;

function Schedule() {
    return (
        <ScheduleContainer>
            <Title>SCHEDULE</Title>
            <p>This is where the schedule of upcoming events would be displayed.</p>
        </ScheduleContainer>
    );
}

export default Schedule;