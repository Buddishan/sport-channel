import React from 'react';
import styled from 'styled-components';

const UpcomingContainer = styled.section`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
  border-bottom: 2px solid #e50914;
  padding-bottom: 0.5rem;
`;

const MatchList = styled.ul`
  list-style: none;
  padding: 0;
`;

const MatchItem = styled.li`
  background: #f8f8f8;
  padding: 1rem;
  margin-bottom: 0.5rem;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
`;

const MatchTeams = styled.span`
  font-weight: bold;
`;

const MatchTime = styled.span`
  color: #666;
`;

function UpcomingMatches() {
    const matches = [
        { id: 1, teams: 'Team A vs Team B', time: '11:00 AM' },
        { id: 2, teams: 'Team A vs Team B', time: '11:00 AM' },
        { id: 3, teams: 'Team A vs Team B', time: '16:00 PM' },
        { id: 4, teams: 'Team A vs Team B', time: '16:00 PM' },
    ];

    return (
        <UpcomingContainer>
            <SectionTitle>UPCOMING MATCHES</SectionTitle>
            <MatchList>
                {matches.map(match => (
                    <MatchItem key={match.id}>
                        <MatchTeams>{match.teams}</MatchTeams>
                        <MatchTime>{match.time}</MatchTime>
                    </MatchItem>
                ))}
            </MatchList>
        </UpcomingContainer>
    );
}

export default UpcomingMatches;