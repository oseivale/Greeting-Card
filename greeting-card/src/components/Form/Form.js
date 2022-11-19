import { FormLabel, FormInput, FormHeader, DownLoad, Submit } from './styles';

const Form = ({ handleSubmit, cardDetails, handleInputChange, handleUpload }) => {
    return (
        <form onSubmit={handleSubmit}>
            <FormLabel>Sender name:
                <FormInput 
                name="senderName"
                type="text" 
                value={cardDetails.senderName}
                onChange={handleInputChange}
                 />
            </FormLabel>
            <FormLabel>Recipient name:
                <FormInput 
                    name="recipientName"
                    type="text"
                    value={cardDetails.recipientName}
                    onChange={handleInputChange} 
                />
            </FormLabel>
            <div>
               <div><FormHeader>What's the occasion?</FormHeader>
                   <div>
                        <FormLabel>
                            <FormInput 
                            type="radio" name="holiday"
                            value="birthday"
                            onChange={handleInputChange} />
                            Birthday   
                        </FormLabel>
                   </div>
                
                <div>
                    <FormLabel>
                       <FormInput 
                       type="radio" name="holiday"
                       value="christmas"
                       onChange={handleInputChange} />  
                       Christmas
                    </FormLabel>
                </div>
                <div>
                    <FormLabel>
                       <FormInput 
                       type="radio" value="mothers-day" name="holiday"
                       onChange={handleInputChange} />
                       Mother's Day   
                    </FormLabel>
                </div>
                <div>
                   <FormLabel>
                        <FormInput 
                        type="radio" value="fathers-day" name="holiday"
                        onChange={handleInputChange} /> 
                        Father's Day    
                    </FormLabel>
                </div>
                <div>
                    <FormLabel>
                        <FormInput type="radio" value="thank-you" name="holiday"
                        onChange={handleInputChange} />   
                        Thank You 
                    </FormLabel>
                </div>
            </div> 
            </div>
            
            <div><FormHeader>Choose a message:</FormHeader>
                <div>
                  <FormLabel>
                   <FormInput type="radio" value="pre-selected" name="messageType"
                   checked={cardDetails.messageType === 'pre-selected'}
                   onChange={handleInputChange} /> 
                   Pre-selected Template
                </FormLabel>  
                </div>
                <div>
                  <FormLabel>
                    <FormInput type="radio" value="custom" name="messageType"
                    checked={cardDetails.messageType === 'custom'}
                    onChange={handleInputChange} />  
                    Custom Greeting
                    </FormLabel>  
                </div>
                { cardDetails.messageType === 'custom' && (
                    <textarea 
                        type="textarea" 
                        name={cardDetails.messageType === "custom" ? "customMessage" : "message"}
                        value={cardDetails.messageType === "custom" ? cardDetails.customMessage : cardDetails.message}
                        onChange={handleInputChange} />
                    )}
            </div>
            <div>
                <DownLoad 
                    type="file" 
                    name="imageUpload" 
                    onChange={handleUpload} 
                />
            </div>
            <Submit type="submit" />
        </form>
    )
}

export default Form;