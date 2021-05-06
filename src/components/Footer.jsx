import React from "react";
import { socialsList } from "../data/footerData";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../styles.css";

const FooterContainer = styled.div`
  background: #111;
  position: relative;
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  color: var(--clr-accent);
  text-align: center;
  padding: 2.5rem 0;
  font-size: var(--fs-h3);
`;

const MailLink = styled.div`
  a {
    color: inherit;
    text-decoration: none;
    &:hover {
      opacity: 0.7;
    }
  }
`;

const FooterList = styled.div`
  list-style: none;
  display: flex;
  justify-content: center;
  padding: 0;
  margin: 2em 0 0;
`;

const SocialMediaLink = styled.div`
  a {
    margin: 0 0.5em;
    color: inherit;

    &:hover {
      opacity: 0.7;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <MailLink>
        <a href="mailto:ghunney10@gmail.com">hello@ghunney.dev</a>
      </MailLink>
      <FooterList>
        {socialsList.map((social, index) => {
          const { name, path, icon } = social;
          return (
            <SocialMediaLink key={index}>
              <Link target="_blank" to={{ pathname: path }}>
                {icon}
              </Link>
            </SocialMediaLink>
          );
        })}
      </FooterList>
    </FooterContainer>
  );
};

export default Footer;
