import React from 'react';
import styled from 'styled-components';

const LiveContainer = styled.div`
  display: flex;
  min-height: calc(100vh - 60px);
`;

const MainContent = styled.div`
  flex: 3;
  padding: 1rem;
`;

const Sidebar = styled.div`
  flex: 1;
  background: #f8f8f8;
  padding: 1rem;
`;

const VideoPlayer = styled.div`
  background: #000;
  height: 400px;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

const PlayerControls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const TimeDisplay = styled.div`
  color: #666;
`;

const SubscribeButton = styled.button`
  background: #e50914;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
`;

const ChatContainer = styled.div`
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 4px;
`;

const ChatInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-top: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const RelatedMatches = styled.div`
  margin-top: 2rem;
`;

const RelatedTitle = styled.h3`
  font-size: 1.2rem;
  color: #444;
  margin-bottom: 1rem;
`;

function Live() {
    return (
        <LiveContainer>
            <MainContent>
                <VideoPlayer>LIVE STREAMING VIDEO PLAYER</VideoPlayer>

                <PlayerControls>
                    <TimeDisplay>0:00/0:00</TimeDisplay>
                    <SubscribeButton>SUBSCRIBE</SubscribeButton>
                </PlayerControls>

                <ChatContainer>
                    <h3>CHAT</h3>
                    <div>Add a comment...</div>
                    <ChatInput placeholder="Type your message..." />
                </ChatContainer>
            </MainContent>

            <Sidebar>
                <RelatedMatches>
                    <RelatedTitle>RELATED MATCHES</RelatedTitle>
                    {/* You would map through related matches here */}
                </RelatedMatches>
            </Sidebar>
        </LiveContainer>
    );
}

export default Live;