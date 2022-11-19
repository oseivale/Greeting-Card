import { useState, useEffect } from 'react'
import {Button} from "react-bootstrap"
import './App.css';

import FormModal from './components/FormModal/FormModal'
import Form from './components/Form/Form';

import Card from './components/Card/Card'

function App() {
  const [ showModal, setShowModal ] = useState(false)
  const [ cardDetails, setCardDetails ] = useState({
    holiday: '',
    senderName: '',
    recipientName: '',
    customMessage: '',
    message: 'Happy Holidays',
    messageType: '',
    imageUpload: ''
  })

  const handleUpload = (event) => {
    console.log(event.target.files[0].name)
    setCardDetails({
      ...cardDetails, 
      imageUpload: URL.createObjectURL(event.target.files[0])
    })
}

  const handleInputChange = (event) => {
    setCardDetails({
      ...cardDetails,
      [event.target.name]: event.target.value
    })
  }

  const handleShow = () => {
    setShowModal(true)
  }

  useEffect(() => {
    // setShowModal(true)
  }, [])

  const closeModal = () => {
    setShowModal(false)
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    setShowModal(false)
    // Submit form data and redirect to page with the greeting card component displayed
    setCardDetails({
      ...cardDetails,
      [event.target.name]: event.target.value
    })

    console.log(cardDetails)  
  }

  return (
    <div className="App">
      <h1 style={{margin: '2rem 0', fontFamily: `'Abel', sans-serif`}}>Click to create your own greeting card</h1>
      <Button variant="primary" onClick={handleShow}>
        Create your custom greeting card!
      </Button>
        <Card cardInfo={cardDetails} />
      <FormModal
        show={showModal}
        handleClose={closeModal}
        handleSubmit={handleSubmit}
      >
        <Form 
        handleSubmit={handleSubmit} 
        cardDetails={cardDetails} handleInputChange={handleInputChange}
        handleUpload={handleUpload}
         />
      </FormModal>
     
    </div>
  );
}

export default App;
