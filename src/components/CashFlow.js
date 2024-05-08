import React, { useState } from "react";
import { Tab, Tabs } from "@mui/material";
import styled from "styled-components";
import {
    Container,
    Header,
    HeaderLeftSection,
    HeaderRightSection,
    Title,
    Subtitle
} from "./styled";
import { CashFlowRow } from "./CashFlowRow";
import CashFlowIcon from '../assets/cash-flow.png'
import MoneyInIcon from '../assets/money-in.png';
import MoneyOutIcon from '../assets/money-out.png';

const LabelContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const TabTitle = styled.p`
    margin: 0;
    font-size: 14px;
    font-weight: 600;
    text-align: left;
    letter-spacing: -0.2px;
    color: ${({ selected }) => selected ? 'black' : '#606674'};
`;

const TabSubTitle = styled.p`
    margin: 0;
    font-size: 32px;
    font-weight: 500;
    margin-top: 5px;
    text-align: left;
    letter-spacing: 0.2px;
    color: ${({ selected }) => selected ? 'black' : '#606674'};
`;

const TabLabel = ({ selected, title, subtitle }) => {
    return (
        <LabelContainer>
            <TabTitle selected={selected}>{title}</TabTitle>
            <TabSubTitle selected={selected}>{subtitle}</TabSubTitle>
        </LabelContainer>
    )
}

export const CashFlow = () => {
    const items = [
        { title: 'Stripe', color: '#B9ABF7', percentage: 70, amount: 3514.72},
        { title: 'Crypto Academy', color: '#93E5FA', percentage: 20, amount: 1017.49},
        { title: 'Wire Return', color: '#F6B8D4', percentage: 6, amount: 318.44},
    ]
    const [tab, setTab] = useState(0);
    return (
        <Container>
            <Header>
                <HeaderLeftSection>
                    <img src={ CashFlowIcon } height={ 35 } width={ 35 } />
                    <Title>Recent Transactions</Title>
                    <Subtitle>Last 30 days</Subtitle>
                </HeaderLeftSection>
                <HeaderRightSection>See all</HeaderRightSection>
            </Header>
            <Tabs
                value={ tab }
                onChange={ setTab }
                sx={{
                    width: '100%',
                    height: '120px',
                }}
            >
                <Tab
                    icon={ <img src={ MoneyInIcon } height={ 60 } width={ 60 } /> }
                    iconPosition="start"
                    label={
                        <TabLabel title='Money In' subtitle='$5,083' selected={ tab === 0 }/>
                    }
                    sx={{
                        width: '100%',
                        height: '120px',
                    }}
                />
                <Tab
                    icon={ <img src={ MoneyOutIcon } height={ 60 } width={ 60 } />}
                    iconPosition="start"
                    label={
                        <TabLabel title='Money Out' subtitle='$485.64' selected={ tab === 1 } />
                    }
                    sx={{
                        width: '100%',
                        justifyContent: 'flex-start',
                        marginLeft: '20px',
                    }}
                />
            </Tabs>
            {/* {
                tab === 1 ? (
                    <>
                        {
                            items.map(item => (
                                <CashFlowRow {...item} />
                            ))
                        }
                    </>
                ) : (
                    <>
                        {
                            items.map(item => (
                                <CashFlowRow {...item} />
                            ))
                        }
                    </>
                )
            } */}
        </Container>
    );
}
