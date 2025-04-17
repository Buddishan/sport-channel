import React from 'react';
import styled from 'styled-components';

const FeaturedContainer = styled.section`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
  border-bottom: 2px solid #e50914;
  padding-bottom: 0.5rem;
`;

const LiveNowBadge = styled.span`
  background: #e50914;
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 4px;
  font-size: 0.8rem;
  margin-left: 1rem;
`;

const FeaturedEvent = styled.div`
  background: #f8f8f8;
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const EventImage = styled.div`
  width: 150px;
  height: 100px;
  background: #ddd;
  margin-right: 1rem;
  border-radius: 4px;
`;

const EventInfo = styled.div`
  flex: 1;
`;

const EventTitle = styled.h3`
  margin: 0 0 0.5rem 0;
  color: #333;
`;

const EventLeague = styled.p`
  margin: 0;
  color: #666;
  font-size: 0.9rem;
`;

function Featured() {
    return (
        <FeaturedContainer>
            <SectionTitle>
                FEATURED
                <LiveNowBadge>LIVE NOW</LiveNowBadge>
            </SectionTitle>

            <FeaturedEvent>
                <EventImage />
                <EventInfo>
                    <EventTitle>TEAM A vs TEAM B</EventTitle>
                    <EventLeague>SportsCenter • LEAGUE MATCH</EventLeague>
                </EventInfo>
            </FeaturedEvent>
        </FeaturedContainer>
    );
}

export default Featured;