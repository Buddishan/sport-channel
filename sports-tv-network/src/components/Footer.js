import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: #1a1a1a;
  color: white;
  padding: 2rem 1rem;
  text-align: center;
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 1.5rem;
`;

const FooterLink = styled.a`
  color: white;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

const AppStores = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const AppStoreButton = styled.div`
  background: #333;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const CtaButton = styled.button`
  background: #e50914;
  color: white;
  border: none;
  padding: 0.8rem 2rem;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 1rem;
`;

function Footer() {
    return (
        <FooterContainer>
            <CtaButton>START WATCHING NOW</CtaButton>
            <p>BECOME A CONTENT PROVIDER</p>

            <FooterLinks>
                <FooterLink href="#">CONTACT INFO</FooterLink>
                <FooterLink href="#">PRIVACY POLICY</FooterLink>
            </FooterLinks>

            <AppStores>
                <AppStoreButton>
                    <span>Download on the</span>
                    <span>App Store</span>
                </AppStoreButton>
                <AppStoreButton>
                    <span>GET IT ON</span>
                    <span>Google Play</span>
                </AppStoreButton>
            </AppStores>
        </FooterContainer>
    );
}

export default Footer;