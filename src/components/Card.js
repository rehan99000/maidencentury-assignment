import React from 'react';
import styled, { keyframes } from 'styled-components';

const slideUp = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;

const slideDown = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(100%);
  }
`;

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
`;

const Original = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s ease-in-out;
  animation: ${({ hover }) => hover ? slideDown : slideUp} 0.5s ease forwards;
  opacity: ${({ hover }) => hover ? 0 : 1};
`;

const Replacement = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${({ hover }) => hover ? slideUp : slideDown} 0.5s ease forwards;
  opacity: ${({ hover }) => hover ? 1 : 0};
`;

const Card = ({ icon, text, largeText, trend, trendSuffix }) => {
  const [hover, setHover] = React.useState(false);
  return (
    <Box>
        <IconWrapper>
          {icon}
        </IconWrapper>
        <div style={{ marginTop: '35px' }}></div>
        <TitleText>{text} {trend} {trendSuffix} </TitleText>
        <div style={{ marginTop: '35px' }}></div>
        <div  onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
          <Original hover={ hover }>
            <SubTitleText>{largeText}</SubTitleText>
          </Original>
          <Replacement>
            New Content
          </Replacement>
        </div>
    </Box>
  );
}

export default Card;
