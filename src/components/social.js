import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { socialMedia } from '@config';
import { Side } from '@components';
import { Icon } from '@components/icons';

const StyledSocialList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;

  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: var(--light-slate);
  }

  li {
    &:last-of-type {
      margin-bottom: 20px;
    }

    a {
      padding: 10px;

      &:hover,
      &:focus {
        transform: translateY(-3px);
      }

      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
  // Tooltip
  .tooltip {
    position: relative;
    display: inline-block;
  }

  .tooltip .tooltiptext {
    visibility: hidden;
    width: 120px;
    background-color: rgba(0,0,0,0.3);
    color: #fff;
    text-align: center;
    border-radius: 12px;
    padding: 6px 0;
    // font-family: "";

    /* Position the tooltip */
    position: absolute;
    z-index: 1;
    top: 0px;
    left: 108%;
  }

  .tooltip:hover .tooltiptext {
    visibility: visible;
  }
`;

const Social = ({ isHome }) => (
  <Side isHome={isHome} orientation="left">
    <StyledSocialList>
      {socialMedia &&
        socialMedia.map(({ url, name, tooltip }, i) => (
          <div key={i} className="tooltip">
            <li key={i}>
              <a href={url} aria-label={name} target="_blank" rel="noreferrer">
                <Icon name={name} />
              </a>
            </li>
            <span className="tooltiptext">{tooltip}</span>
          </div>
        ))}
    </StyledSocialList>
  </Side>
);

Social.propTypes = {
  isHome: PropTypes.bool,
};

export default Social;
