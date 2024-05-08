import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0 25px 0;
    border-bottom: 1px solid #D4D8E4;
`;

export const HeaderLeftSection = styled.div`
    display: flex;
    align-items: center;
    margin: 10px 0;
`;

export const HeaderRightSection = styled.div`
    display: flex;
    align-items: center;
    font-size: 18px;
    font-weight: 600;
    color: #5631C1;
`;

export const Title = styled.p`
    margin: 0;
    font-size: 24px;
    font-weight: 500;
    color: black;
    margin-left: 10px;
`;

export const Subtitle = styled.p`
    margin: 0;
    font-size: 18px;
    font-weight: 400;
    color: #62666F;
    margin-left: 15px;
`;