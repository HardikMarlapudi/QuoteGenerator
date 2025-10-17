import React, {useState} from 'react';
import axios from 'axios';

function QuoteGenerator() {

   const [quote, setQuote] = useState('');
   const [author, setAuthor] = useState('');
   
   const generateQuote = async () => {
      try {
         const response = await axios.get('https://api.api-ninjas.com/v1/quotes', {
            headers: {
               'X-Api-Key': '1QaEXXiMr42UQHgffVLNDA==uoRjZZaDnhJg5v1O',
               'Content-Type': 'application/json'
            }
         });
         const quoteData = response.data[0];
         setQuote(quoteData.quote);
         setAuthor(quoteData.author);
      } catch (error) {
         console.error("Error cannot fetch quote: ", error);
         return;
      }
   }

   return (
      <>
      <h1 id="title">Quote Generator</h1>

      <div className="border">
         <p id="quote">"{quote}"</p>
         <p id="author">"{author}"</p>
      </div>

      <center><button id="getQuote" onClick={generateQuote}>GenerateQuote</button></center> 
      </>
      )
}

export default QuoteGenerator;
