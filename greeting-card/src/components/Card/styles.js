import styled from 'styled-components';
import christmasImg from '../../images/davies-designs-studio-PvGt65_l0FU-unsplash.jpg'

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
    border: 10px double ${props => props.color};
`

export const MainHeader = styled.h5`

`

export const SubHeader = styled.h1`

`

export const Greeting = styled.h5`

`