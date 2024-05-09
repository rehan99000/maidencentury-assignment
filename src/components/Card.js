import React from 'react';
import styled from 'styled-components';
import { Button, IconButton as MIconButton } from '@mui/material';
import { BsGraphUp } from "react-icons/bs";
import LineChart from './LineChart';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const Box = styled.div`
  flex: 1;
  min-width: ${({ expanded }) => expanded ? '60%' : '300px'};
  padding: ${({ expanded }) => expanded ? '20px 0px 20px 30px' : '20px 30px'};
  background-color: white;
  margin-right: ${({ isLast }) => isLast ? 0 : '40px'};
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  transition: all  0.5s ease-in-out;
  display: flex;
  border-bottom: ${({ expanded }) => expanded ? '4px solid #B9ABF7' : '0px solid #ffffff'};
`;

const TitleText = styled.div`
  flex: 1;
  display: flex;
  margin: 0;
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  color: #2E2F38;
  gap: 8px;
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

const ShrinkButton = styled(MIconButton)`
  && {
    border-radius: 0;
    color: #62666F;
    background-color: #d7d9da4a;
    margin-left: auto;
    padding-right: 0;

    &:hover {
      background-color: #d7d9da91;
    }
  }
`

const ChartContainer = styled.div`
  display: flex;
  flex: 1;
  transition: all  0.5s ease-in-out;
  opacity: ${({ show }) => show ? 1 : 0};
  max-width: ${({ show }) => show ? '50%' : '1px'};
`;


const Card = ({ icon, text, largeText, trend, trendSuffix, isLast = false }) => {
  const [hover, setHover] = React.useState(false);
  const [expanded, setExpanded] = React.useState(false);
  return (
    <Box expanded={expanded} isLast={ isLast }>
    <div style={{flex: 1}}>
        <IconWrapper hover={ hover || expanded }>
          {icon}
        </IconWrapper>
        <div style={{ marginTop: '35px' }}></div>
        <TitleText>{text} {trend} {trendSuffix} {expanded && <div style={{color: '#9699A3', fontWeight: 500}}>VS. LAST WEEK</div>}</TitleText>
        <div style={{ position: 'relative', overflow: 'hidden' }} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
          <Original hover={ hover && !expanded }>
            <SubTitleText>{largeText}</SubTitleText>
          </Original>
          <Replacement style={{ top: hover && !expanded ? '0%' : '100%', opacity: hover && !expanded ? '100%' : '0%' }}>
            <div style={{ flex: 1, display: 'flex', gap: '12px' }}>
              <IconButton style={ {flex: 1 }}> View Account Details</IconButton>
              <RoundIcon onClick={() => setExpanded(true)}><BsGraphUp /></RoundIcon>
            </div>
          </Replacement>
        </div>
        </div>
      <ChartContainer show={expanded}>
        <LineChart />
        <ShrinkButton  onClick={() => setExpanded(false)}><ArrowBackIosIcon /></ShrinkButton>

      </ChartContainer>
    </Box>
  );
}

export default Card;
