
const Form = ({ handleSubmit, cardDetails, handleInputChange, handleUpload }) => {
    return (
        <form onSubmit={handleSubmit}>
            <label>Sender name:
                <input 
                name="senderName"
                type="text" 
                value={cardDetails.senderName}
                onChange={handleInputChange}
                 />
            </label>
            <label>Recipient name:
                <input 
                    name="recipientName"
                    type="text"
                    value={cardDetails.recipientName}
                    onChange={handleInputChange} 
                />
            </label>
            <div>
               <div><h4>What's the occasion?</h4>
                   <div>
                        <label>
                            <input 
                            type="radio" name="holiday"
                            value="birthday"
                            onChange={handleInputChange} />
                            Birthday   
                        </label>
                   </div>
                
                <div>
                    <label>
                       <input 
                       type="radio" name="holiday"
                       value="christmas"
                       onChange={handleInputChange} />  
                       Christmas
                    </label>
                </div>
                <div>
                    <label>
                       <input 
                       type="radio" value="mothers-day" name="holiday"
                       onChange={handleInputChange} />
                       Mother's Day   
                    </label>
                </div>
                <div>
                   <label>
                        <input 
                        type="radio" value="fathers-day" name="holiday"
                        onChange={handleInputChange} /> 
                        Father's Day    
                    </label>
                </div>
                <div>
                    <label>
                        <input type="radio" value="thank-you" name="holiday"
                        onChange={handleInputChange} />   
                        Thank You 
                    </label>
                </div>
            </div> 
            </div>
            
            <div><h4>Choose a message:</h4>
                <div>
                  <label>
                   <input type="radio" value="pre-selected" name="messageType"
                   checked={cardDetails.messageType === 'pre-selected'}
                   onChange={handleInputChange} /> 
                   Pre-selected Template
                </label>  
                </div>
                <div>
                  <label>
                    <input type="radio" value="custom" name="messageType"
                    checked={cardDetails.messageType === 'custom'}
                    onChange={handleInputChange} />  
                    Custom Greeting
                    </label>  
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
                <input 
                type="file" 
                name="imageUpload" 
                onChange={handleUpload} />
            </div>
            <input type="submit" />
        </form>
    )
}

export default Form;