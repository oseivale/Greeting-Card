import styled from 'styled-components';

export const GreetingCard = styled.div`
    background-image: url(${props => props.bgImg}); 
    padding: 3rem 1rem;
    width: 60%;
    margin: 0 auto;
    background-size: cover;
    border-radius: 10px;
`

export const MessageContainer = styled.div`
    background-image: url(${props => props.messageBg});
    width: 50%;
    margin: ${props => props.marginSetting ? props.marginSetting : '3rem auto'};
    padding: 3rem;
    border: 3px dashed ${props => props.color};
`

export const MessageContent = styled.p`
    width: 90%;
    overflow-wrap: break-word;
    margin: 1rem auto;
`

export const MainHeader = styled.h6`
    font-family: ${props => props.headerFont};
    font-size: ${props => props.fontSize ? props.fontSize : "2rem"};
`

export const SubHeader = styled.h1`
    font-family: ${props => props.subHeader};
    font-size: ${props => props.fontSize};
`

export const Greeting = styled.h5`
    font-family: 'Abel', sans-serif;
`

export const Recipient = styled.p`
    margin-top: 2rem;
    font-size: 2rem;
    font-family: 'Corinthia', cursive;

`