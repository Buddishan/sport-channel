import React from 'react';
import styled from 'styled-components';

const TrendingContainer = styled.section`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
  border-bottom: 2px solid #e50914;
  padding-bottom: 0.5rem;
`;

const Categories = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
`;

const Category = styled.span`
  background: #f0f0f0;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
`;

const TrendingSection = styled.div`
  margin-bottom: 1.5rem;
`;

const TrendingTitle = styled.h3`
  font-size: 1.2rem;
  color: #444;
  margin-bottom: 0.5rem;
`;

const EventName = styled.p`
  background: #f8f8f8;
  padding: 0.8rem;
  border-radius: 4px;
  margin: 0;
`;

function TrendingEvents() {
    const categories = ['Rugby', 'Football', 'Cricket', 'Basketball', 'Other Sports'];

    return (
        <TrendingContainer>
            <SectionTitle>TRENDING EVENTS</SectionTitle>

            <Categories>
                {categories.map((category, index) => (
                    <Category key={index}>{category}</Category>
                ))}
            </Categories>

            <TrendingSection>
                <TrendingTitle>Most Viewed</TrendingTitle>
                <EventName>Event Name</EventName>
            </TrendingSection>

            <TrendingSection>
                <TrendingTitle>Most Subscribed</TrendingTitle>
                <EventName>Event Name</EventName>
            </TrendingSection>
        </TrendingContainer>
    );
}

export default TrendingEvents;