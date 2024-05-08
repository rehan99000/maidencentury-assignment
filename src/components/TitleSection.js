import React from 'react';
import styled from 'styled-components';
import {
  Visibility,
  ArrowOutward,
  Add,
  MoreHoriz,
} from '@mui/icons-material'
import { Button } from '@mui/material';

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 70px 100px 30px 100px;
  background-color: #060A20;
`;

const LeftContent = styled.div`
  display: flex;
  align-items: flex-end;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const SuperscriptText = styled.div`
  font-size: 11px;
  color: #E6E7F1;
  text-transform: uppercase;
`;

const BalanceText = styled.div`
  font-size: 52px;
  color: white;
  margin-right: 10px;
`;

const SubtitleText = styled.div`
  font-size: 14px;
  color: #E6E7F1;
  margin-bottom: 5px;
  margin-left: 20px;
  font-weight: 500;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const IconButton = styled(Button)`
  && {
    display: flex;
    align-items: center;
    background-color: ${({ isSelected }) => (isSelected ? '#5E2EF4' : '#131527')};
    color: white; //${({ isSelected }) => (isSelected ? '#ffffff' : '#81869C')};
    cursor: pointer;
    padding: 5px 15px;
    text-transform: capitalize;
    &:hover {
      background-color: #5E2EF4;
    }
  }
`;

const Separator = styled.div`
  width: 2px;
  height: 34px;
  background-color: #0E1327; 
  margin: 0 8px;
`;

const TitleSection = () => {
  return (
    <TitleContainer>
      <LeftContent>
        <TextWrapper>
          <SuperscriptText>Total balance</SuperscriptText>
          <BalanceText>$36,254</BalanceText>
        </TextWrapper>
        <SubtitleText>$328.32 Today, Feb 15</SubtitleText>
      </LeftContent>
      <ButtonGroup>
        <IconButton startIcon={<Visibility />} > View Analytics</IconButton> 
        <Separator />
        <IconButton startIcon={<ArrowOutward />} isSelected> Send Money</IconButton>
        <IconButton startIcon={<Add />}> Add Money</IconButton>
        <IconButton endIcon={<MoreHoriz />}></IconButton>
      </ButtonGroup>
    </TitleContainer>
  );
};

export default TitleSection;
