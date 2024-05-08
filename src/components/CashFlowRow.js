import React from "react";
import { LinearProgress, linearProgressClasses, Chip } from "@mui/material";
import styled from "styled-components";
import { IoMdArrowDropdownCircle } from "react-icons/io";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 10px;
`;

const Details = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between
`;

const Header = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`

const Title = styled.p`
    margin: 0;
    font-size: 18px;
    font-weight: 500;
    color: black;
`;
const Tag = styled(Chip)`
    border-radius: 2px !important;
    background-color: #F7F8FC !important;
    font-weight: 600 !important;
    font-size: 14px !important;
    color: #092139 !important;
    margin-right: 70px;
`;

const Progress = styled(LinearProgress)(({ progressColor }) => ({
    height: '10px !important',
    width: '100%',
    borderRadius: 0,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        background: `repeating-linear-gradient(-45deg,#d7d9da 1px,#d7d9da 3px,transparent 1px,transparent 8px)`
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 0,
      backgroundColor: progressColor,
    },
  }));
  
const Amount = styled.p`
    margin: 0;
    color: ${p => p.isCredit ? '#346257' : 'black'};
    font-size: 20px;
    font-weight: 500;
`

export const CashFlowRow = ({
    title,
    color,
    percentage,
    amount
}) => {
    return (
        <Container>
            <Details>
                <Header>
                    <IoMdArrowDropdownCircle fill={ color } size={ 40 } />
                    <Title>{ title }</Title>
                    <Tag label={ `%${percentage}` } size="medium" variant="filled" />
                </Header>
                <Amount>{ '$' + amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }</Amount>
            </Details>
            <Progress variant='determinate' value={ percentage } progressColor={ color } />
        </Container>
    );
}
