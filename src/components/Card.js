import React from 'react';
import styled from 'styled-components';
import { Button, IconButton as MIconButton } from '@mui/material';
import { MoreHoriz } from '@mui/icons-material'

const Box = styled.div`
  width: 390px;
  padding: 20px 30px;
  background-color: white;
  margin-right: 40px;
`;

const TitleText = styled.p`
  margin: 0;
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  color: #2E2F38;
`;

const SubTitleText = styled.p`
  margin: 0;
  font-size: 44px;
  font-weight: 400;
  text-transform: uppercase;
  color: #2E2F38;
  width: 100%;
`;

const IconWrapper = styled.div`
  margin-top: 20px;
  transition: 0.2s ease-in-out;
  align-self: flex-start;
  width: ${p => p.hover ? '40px' : '60px'};
  height: ${p => p.hover ? '40px' : '60px'};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50rem;
  padding: ${p => p.hover ? '10px' : '0px'};
  background-color: ${p => p.hover ? '#e1e3ec' : 'transparent'};
  color: ${p => p.hover ? '#4a2bd6' : 'black'}
`;

const Original = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s ease-in-out;
  opacity: ${({ hover }) => hover ? 0 : 1};
  &:hover {
    transform: ${({ hover }) => hover ? 'translateY(-100%)' : 'translateY(0)'};
  }
`;

const Replacement = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  transition: 0.2s ease-in-out;
`;

const IconButton = styled(Button)`
  && {
    display: flex;
    align-items: center;
    border: 1px solid #e1e3ec;
    color: black !important;
    cursor: pointer;
    padding: 5px 15px;
    text-transform: capitalize;
    &:hover {
      background-color: #e1e3ec;
    }
  }
`;

const RoundIcon = styled(MIconButton)`
  && {
    color: white;
    background-color: #5E2EF4;

    &:hover {
      background-color: #4a2bd6;
    }
  }
`

const Card = ({ icon, text, largeText, trend, trendSuffix }) => {
  const [hover, setHover] = React.useState(false);
  return (
    <Box>
        <IconWrapper hover={ hover }>
          {icon}
        </IconWrapper>
        <div style={{ marginTop: '35px' }}></div>
        <TitleText>{text} {trend} {trendSuffix} </TitleText>
        <div style={{ position: 'relative', overflow: 'hidden' }} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
          <Original hover={ hover }>
            <SubTitleText>{largeText}</SubTitleText>
          </Original>
          <Replacement style={{ top: hover ? '0%' : '100%', opacity: hover ? '100%' : '0%' }}>
            <div style={{ display: 'flex', gap: '12px' }}>
              <IconButton> View Account Details</IconButton>
              <RoundIcon><MoreHoriz /></RoundIcon>
            </div>
          </Replacement>
        </div>
    </Box>
  );
}

export default Card;
