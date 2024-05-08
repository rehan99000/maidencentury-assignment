import React from "react";
import {
    Container,
    Header,
    HeaderLeftSection,
    HeaderRightSection,
    Title,
    Subtitle
} from "./styled";
import { TransactionRow } from "./TransactionRow";
import { GrStripe } from "react-icons/gr";
import { AiFillDropboxSquare } from "react-icons/ai";
import { SiZendesk } from "react-icons/si";
import { FaSpotify } from "react-icons/fa";
import RecentTransactionIcon from '../assets/recent-transactions.png'


export const RecentTransactions = () => {
    const items = [
        { logo: <GrStripe size={ 45 } />, title: 'Stripe', date: 'Wed, 16 Feb, 18:11', tag: 'Business', amount: 1223.00 },
        { logo: <AiFillDropboxSquare size={ 50 } />, title: 'Dropbox', date: 'Tue, 15 Feb, 14:24', tag: 'Equipment', amount: -200.00 },
        { logo: <SiZendesk size={ 25 } color="white" style={{ backgroundColor: '#023036', padding: '10px' }} />, title: 'Zendesk', date: 'Wed, 16 Feb, 18:11', tag: 'Marketing', amount: -1223.18 },
        { logo: <FaSpotify size={ 25 } color="white" style={{ backgroundColor: 'black', padding: '10px' }} />, title: 'Spotify', date: 'Mon, 14 Feb, 16:40', tag: 'Entertainment', amount: -19.00 },
    ];
    return (
        <Container>
            <Header>
                <HeaderLeftSection>
                    <img src={ RecentTransactionIcon } height={ 35 } width={ 35 } />
                    <Title>Recent Transactions</Title>
                    <Subtitle>Last 5 activity</Subtitle>
                </HeaderLeftSection>
                <HeaderRightSection>See all</HeaderRightSection>
            </Header>
            {
                items.map(item => (
                    <TransactionRow {...item} />
                ))
            }
        </Container>
    );
}
