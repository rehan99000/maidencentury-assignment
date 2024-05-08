import { Avatar, LinearProgress, Tab, linearProgressClasses } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { IoMdArrowDropdownCircle } from "react-icons/io";


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify content: space-between;
    padding: 10px;
    height: 120px;
    border-bottom: 1px solid #ccc;
    //border-bottom: 1px solid #D4D8E4;
`;

const Details = styled.div`
    display: flex;
    align-items: center;
`;

const Logo = styled(Avatar)`
    width: 50px;
    height: 50px;
    margin-right: 10px;
`;

const Title = styled.p`
    margin: 0;
    font-size: 18px;
    font-weight: 400;
    color: black;
`;

const Tag = styled(Tab)`
`;

const Progress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
  }));

const Amount = styled.p`
    margin: 0;
    color: ${p => p.isCredit ? '#346257' : 'black'};
    font-size: 16px;
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
                <Logo src={ <IoMdArrowDropdownCircle /> } color={ color } />
                <Title>{ title }</Title>
                <Tag title={ percentage } />
                <Amount>{ amount }</Amount>
            </Details>
            <Progress variant="determinate" value={ percentage } color={ color } />
        </Container>
    );
}
