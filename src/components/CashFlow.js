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
import MoneyInSelectedIcon from '../assets/money-in-sel.png';
import MoneyOutSelectedIcon from '../assets/money-out-sel.png';
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

const MyTabs = styled(Tabs)`
    & div {
        & .MuiTabs-indicator {
            background-color: black !important;
        }
    }
`

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
        <Container style={{ gap: '12px' }}>
            <Header>
                <HeaderLeftSection>
                    <img src={ CashFlowIcon } height={ 35 } width={ 35 } alt="cashflow" />
                    <Title>Cash Flow</Title>
                    <Subtitle>Last 30 days</Subtitle>
                </HeaderLeftSection>
                <HeaderRightSection>See all</HeaderRightSection>
            </Header>
            <MyTabs
                value={ tab }
                onChange={ (e, value) => setTab(value) }
                indicatorColor="secondary"
                sx={{
                    width: '100%',
                    height: '120px',
                    borderBottom: '1px solid #E9ECF5'
                }}
            >
                <Tab
                    icon={ <img src={ tab === 0 ? MoneyInSelectedIcon : MoneyInIcon } height={ 60 } width={ 60 } alt="money-in-icon" /> }
                    iconPosition="start"
                    label={
                        <TabLabel title='Money In' subtitle='$5,083' selected={ tab === 0 }/>
                    }
                    sx={{
                        flex: '1',
                        justifyContent: 'flex-start',
                        height: '120px',
                    }}
                />
                <Tab
                    icon={ <img src={ tab === 1 ? MoneyOutSelectedIcon : MoneyOutIcon } height={ 60 } width={ 60 } alt="money-out-icon" />}
                    iconPosition="start"
                    label={
                        <TabLabel title='Money Out' subtitle='$485.64' selected={ tab === 1 } />
                    }
                    sx={{
                        flex: '1',
                        justifyContent: 'flex-start',
                        marginLeft: '20px',
                    }}
                />
            </MyTabs>
            {
                tab === 0 ? (
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
            }
        </Container>
    );
}
