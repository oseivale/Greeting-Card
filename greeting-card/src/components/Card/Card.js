import './styles'
import { GreetingCard, MessageContainer, Greeting, MainHeader, SubHeader } from './styles'

import christmasImg from '../../images/davies-designs-studio-PvGt65_l0FU-unsplash.jpg';
import birthdayImg from '../../images/adi-goldstein-Hli3R6LKibo-unsplash.jpg'
import fathersDayImg from '../../images/tim-mossholder-goIMPtdFmig-unsplash.jpg';
import mothersDay from '../../images/leonardo-wong-7pGehyH7o64-unsplash.jpg';
import thankYou from '../../images/thank-you-bg.jpg';
import paperBg from '../../images/olga-thelavart-HZm2XR0whdw-unsplash.jpg'

const Card = ({ mainHeader, subHeader, cardInfo }) => {

    const getCardTemplate = (card) => {
        switch (card.holiday){
            case 'christmas':
                return (
                    <GreetingCard bgImg={cardInfo.imageUpload ? cardInfo.imageUpload : christmasImg }>
                        <MessageContainer color={"#0B5345"} messageBg={paperBg} marginSetting="3rem auto">
                            <MainHeader>Wishing you a Merry</MainHeader>
                            <SubHeader>
                                Christmas
                            </SubHeader>
                            <Greeting>
                                Hey {card.senderName},
                            </Greeting>
                            {card.messageType === 'custom' ? card.customMessage : card.message}
                        </MessageContainer>
                    </GreetingCard>
                );
            case 'birthday':
                return (
                    <GreetingCard bgImg={cardInfo.imageUpload ? cardInfo.imageUpload : birthdayImg}>
                        <MessageContainer messageBg={paperBg}>
                        <MainHeader>Wishing you a Happy</MainHeader>
                            <SubHeader>
                                Birthday
                            </SubHeader>
                            <Greeting>
                                Hey {card.senderName},
                            </Greeting>
                            {card.messageType === 'custom' ? card.customMessage : card.message}
                        </MessageContainer>
                    </GreetingCard>
            );
            case 'mothers-day':
                return (
                    <GreetingCard bgImg={cardInfo.imageUpload ? cardInfo.imageUpload : mothersDay}>
                        <MessageContainer messageBg={paperBg} marginSetting="3rem 0">
                        <MainHeader>Wishing you a Happy</MainHeader>
                            <SubHeader>
                                Mothers Day
                            </SubHeader>
                            <Greeting>
                                Hey {card.senderName},
                            </Greeting>
                            {card.messageType === 'custom' ? card.customMessage : card.message}
                        </MessageContainer>
                    </GreetingCard>
            );
            case 'fathers-day':
                return (
                    <GreetingCard bgImg={cardInfo.imageUpload ? cardInfo.imageUpload : fathersDayImg}>
                        <MessageContainer messageBg={paperBg} marginSetting="15rem auto 1rem">
                        <MainHeader>Wishing you a Happy</MainHeader>
                            <SubHeader>
                                Fathers Day
                            </SubHeader>
                            <Greeting>
                                Hey {card.senderName},
                            </Greeting>
                            {card.messageType === 'custom' ? card.customMessage : card.message}
                        </MessageContainer>
                    </GreetingCard>
            );
            case 'thank-you':
                return (
                    <GreetingCard bgImg={cardInfo.imageUpload ? cardInfo.imageUpload : thankYou}>
                        <MessageContainer messageBg={paperBg} marginSetting="3rem 0">
                        <MainHeader>I appreciate you</MainHeader>
                            <SubHeader>
                            {card.senderName}
                            </SubHeader>
                            {card.messageType === 'custom' ? card.customMessage : card.message}
                        </MessageContainer>
                    </GreetingCard>
            );
            default: 
            <div></div>
        }
    }
    return (
        <div>
            {getCardTemplate(cardInfo)}
        </div>
        // <div className="card-container">
        //     <div className="content-wrapper">
        //         <div className="main-header">
        //             <h3>{mainHeader}</h3>
        //         </div>
        //         <div className="sub-header">
        //             <h1>{subHeader}</h1>
        //         </div>
        //         <div>
        //             <p>Hey {recipientName},</p>
        //         </div>
        //         <div className="greeting-message">
        //             {message}
        //         </div>
        //         <div className="sender-name">
        //             <p>- {senderName}</p>
        //         </div>
        //     </div>
        // </div> 
    )
}

export default Card;