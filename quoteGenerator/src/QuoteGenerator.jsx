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
         console.error("Error cannot fetch quote", error);
         return;
      }
   }

   const copyQuote = async () => {
      try {
      navigator.clipboard.writeText(`${quote} - ${author}`);
      alert("Quote copied to clipboard");
   } catch (error) {
      console.error("Error copying quote", error);
      return;
   }
}

   return (
      <>
      <h1 id="title">Random Quote Generator</h1>

      <div className="border">
         <p id="quote">{quote}</p>
         <p id="author">- {author}</p>

         <button id="copyQuote" onClick={copyQuote}>Copy</button>
         <center><button id="getQuote" onClick={generateQuote}>Get New Quote</button></center> 
      </div>
      </>
      )
   }

export default QuoteGenerator;
