import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { email } from '@config';
import { navDelay, loaderDelay } from '@utils';
import { StyledText } from "./about";

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;

  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 10px;
    color: var(--slate);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 500px;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const skills = ['Scientific Machine Learning', 'Financial Derivatives', 'Astrophysics', 'Deep Learning', 'Wildlife Conservation']

  const one = <h1>Hi, my name is</h1>;
  const two = <h2 className="big-heading">Matias Borghi.</h2>;
  const three = <h3 className="medium-heading">Wherever curiosity leads me.</h3>;
  const four = (
    <p>
      I am a physicist working as a Quantitative Researcher at <a href="https://www.crisil.com/" target="_blank" rel="noreferrer">Crisil</a> since 2017.
    </p>
  );
  const five = (
    <p>
      Some of my interests are:
    </p>
  )
  const six = (
    <StyledText>
      <ul className="skills-list">
        {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
      </ul>
    </StyledText>
  )
  const seven = (
    <a href={`mailto:${email}`} className="email-link">
      Get In Touch
    </a>
  );

  const items = [one, two, three, four, five, six, seven];

  return (
    <StyledHeroSection>
      <TransitionGroup component={null}>
        {isMounted &&
          items.map((item, i) => (
            <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
              <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
            </CSSTransition>
          ))}
      </TransitionGroup>
    </StyledHeroSection>
  );
};

export default Hero;
