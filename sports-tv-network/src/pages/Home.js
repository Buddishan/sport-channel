import React from 'react';
import styled from 'styled-components';
import Featured from '../components/Featured';
import UpcomingMatches from '../components/UpcomingMatches';
import TrendingEvents from '../components/TrendingEvents';

const HomeContainer = styled.div`
  padding: 1rem;
`;

const HeroSection = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), 
              url('https://via.placeholder.com/1200x400') no-repeat center center;
  background-size: cover;
  color: white;
  padding: 3rem 1rem;
  text-align: center;
  margin-bottom: 2rem;
`;

const HeroTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;

const WatchNowButton = styled.button`
  background: #e50914;
  color: white;
  border: none;
  padding: 0.8rem 2rem;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    background: #f40612;
  }
`;

function Home() {
    return (
        <HomeContainer>
            <HeroSection>
                <HeroTitle>STREAM YOUR FAVORITE SPORTS</HeroTitle>
                <HeroSubtitle>Never miss a moment of the action</HeroSubtitle>
                <WatchNowButton>WATCH NOW</WatchNowButton>
            </HeroSection>

            <Featured />
            <UpcomingMatches />
            <TrendingEvents />
        </HomeContainer>
    );
}

export default Home;