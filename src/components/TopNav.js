import React from 'react';
import styled from 'styled-components';
import { Button, IconButton } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import { RiSettingsLine } from "react-icons/ri";
import { LuSearch } from "react-icons/lu";
import { PiBellSimple } from "react-icons/pi";
import Logo1 from '../assets/logo1.png'
import Logo2 from '../assets/logo2.png'

const TopNavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 50px;
  background-color: #060A20;
  color: #ffffff;
`;

const Logo = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain;
`;

const NavButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const NavButton = styled(Button)`
  && {
    background-color: ${({ isSelected }) => (isSelected ? '#5E2EF4' : 'transparent')};
    color: ${({ isSelected }) => (isSelected ? '#ffffff' : '#81869C')};
    margin-right: 10px;
    padding: 5px 10px;
    text-transform: capitalize;
    &:hover {
      color: #ffffff;
      background-color: ${({ isSelected }) => (isSelected ? '#5E2EF4' : '#5E2EF4')};
    }
  }
`;

const NavIconButton = styled(IconButton)`
  && {
    color: #ffffff;
    width: 50px;
    height: 50px;
  }
`;

const RightAlignedButtonsContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Separator = styled.div`
  width: 3px;
  height: 24px;
  background-color: #0E1327;
  margin: 0 10px;
`;

const TopNav = () => {
  return (
    <TopNavContainer>
      <div>
        <Logo src={Logo1} alt="Logo 1" />
        <Logo src={Logo2} alt="Logo 2" />
      </div>
      <NavButtonsContainer>
        <NavButton isSelected>Dashboard</NavButton>
        <NavButton>Payment</NavButton>
        <NavButton>Transaction</NavButton>
        <NavButton>Cards</NavButton>
        <NavButton>Invoices</NavButton>
        <NavButton>Insights</NavButton>
      </NavButtonsContainer>
      <RightAlignedButtonsContainer>
        <NavIconButton><LuSearch /></NavIconButton>
        <NavIconButton><PiBellSimple /></NavIconButton>
        <Separator />
        <NavIconButton><RiSettingsLine /></NavIconButton>
        <NavIconButton><AccountCircle /></NavIconButton>
      </RightAlignedButtonsContainer>
    </TopNavContainer>
  );
};

export default TopNav;
