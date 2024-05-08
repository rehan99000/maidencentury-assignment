import React from "react";
import { Chip } from "@mui/material";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    align-items: center;
    justify content: space-between;
    padding: 10px;
    height: 80px;
    border-bottom: 1px solid #ccc;
    //border-bottom: 1px solid #D4D8E4;

    &:hover {
        & .header {
            transform: translateX(16px);
        }
        transition: 0.3s ease-in-out;
        background-color: #f6f8fc;
    }
`;

const Header = styled.div`
    display: flex;
    transition: all 0.3s
`

const Logo = styled.div`
    width: 50px;
    height: 50px;
    margin-right: 15px;
`;

const Details = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 60px;
`;

const Title = styled.p`
    margin: 0;
    font-size: 18px;
    font-weight: 500;
    color: black;
    margin-bottom: 5px;
`;

const Date = styled.p`
    margin: 0;
    font-size: 16px;
    font-weight: 500;
    color: #9699A3;
`;

const Tag = styled(Chip)`
    border-radius: 2px !important;
    background-color: #F7F8FC !important;
    font-weight: 600 !important;
    font-size: 16px !important;
    color: #092139 !important;
    margin-right: 200px;
`;

const Amount = styled.p`
    margin: 0;
    color: ${p => p.isCredit ? '#346257' : 'black'};
    font-size: 18px;
    font-weight: 500;
`

export const TransactionRow = ({
    logo,
    title,
    date,
    tag,
    amount
}) => {
    return (
        <Container>
            <Header className='header'>
                <Logo>
                    { logo }
                </Logo>
                <Details>
                    <Title>{ title }</Title>
                    <Date>{ date }</Date>
                </Details>
            </Header>
            <Tag label={ tag } size="medium" variant="filled" />
            <Amount isCredit={ amount > 0 }>{ `${amount > 0 ? '+' : '-'}$${Math.abs(amount).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` }</Amount>
        </Container>
    );
}
