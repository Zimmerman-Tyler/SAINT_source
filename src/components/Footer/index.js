import React from 'react'
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
} from './FooterElements'
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>USEFUL LINKS AND PATHS</FooterLinkTitle>
                        <FooterLink to='/'>Filler Path1</FooterLink>
                        <FooterLink to='/'>Filler Path2</FooterLink>
                        <FooterLink to='/'>Filler Path3</FooterLink>
                        <FooterLink to='/'>Filler Path4</FooterLink>
                        <FooterLink to='/'>Filler Path5</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>USEFUL LINKS AND PATHS</FooterLinkTitle>
                        <FooterLink to='/'>Filler Path1</FooterLink>
                        <FooterLink to='/'>Filler Path2</FooterLink>
                        <FooterLink to='/'>Filler Path3</FooterLink>
                        <FooterLink to='/'>Filler Path4</FooterLink>
                        <FooterLink to='/'>Filler Path5</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>USEFUL LINKS AND PATHS</FooterLinkTitle>
                        <FooterLink to='/'>Filler Path1</FooterLink>
                        <FooterLink to='/'>Filler Path2</FooterLink>
                        <FooterLink to='/'>Filler Path3</FooterLink>
                        <FooterLink to='/'>Filler Path4</FooterLink>
                        <FooterLink to='/'>Filler Path5</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>USEFUL LINKS AND PATHS</FooterLinkTitle>
                        <FooterLink to='/'>Filler Path1</FooterLink>
                        <FooterLink to='/'>Filler Path2</FooterLink>
                        <FooterLink to='/'>Filler Path3</FooterLink>
                        <FooterLink to='/'>Filler Path4</FooterLink>
                        <FooterLink to='/'>Filler Path5</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <WebsiteRights to='/'>poopie {new Date().getFullYear()} All Rights Reserved</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href='//facebook.com' target='_black' aria-label='facebook'><FaFacebook /></SocialIconLink>
                        <SocialIconLink href='/' target='_black' aria-label='testIcon'><FaFacebook /></SocialIconLink>
                        <SocialIconLink href='/' target='_black' aria-label='testIcon'><FaFacebook /></SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer