import React from "react";
import styled from "styled-components";
import { RecentTransactions } from "./RecentTransactions";
import { CashFlow } from "./CashFlow";

const BottomBox = styled.div`
    display: flex; 
    padding: 0 100px 30px 100px;
    margin-top: 40px;
    gap: 40px;
`

const BottomSection = () => {
    return (
        <BottomBox>
            <RecentTransactions />
            <CashFlow />
        </BottomBox>
    )
}

export default BottomSection;