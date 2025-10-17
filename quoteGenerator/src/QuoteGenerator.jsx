import React, {useState, useEffect} from 'react';
import axios from 'axios';

function QuoteGenerator() {

   const [quote, setQuote] = useState('');
   const [author, setAuthor] = useState('');
   
   const GenerateQuote = async () => {
      axios.get('https://api.api-ninjas.com/v1/quotes', {
         method: 'GET',
         headers: {
            'X-Api-Key': 'Dv2bJ2q6yW2Y2x1Z7mY2gA==b0X9Q4VwKZ3r7w5L',
            'Content-Type': 'application/json'
         }
      })
      .then((response) => {
         setQuote(data[0].quote);
         setAuthor(data[0].quote);
         setGenerateQuote(response.data[Math.floor(Math.random() * response.data.length)]);
      })
      .catch((error) => {
         console.error('Error fetching quotes:', error);
      });
   }

  useEffect(() => {
   GenerateQuote();
  }, [])

   return (
   <>
    <h1 id="title">Quote Generator</h1>

    <div className="border">
      <p id="quote">{quote}</p>
      <p id="author">{author}</p>
    </div>

     <center><button id="getQuote" onClick={GenerateQuote}>GenerateQuote</button></center> 
    </>
   )
}

export default QuoteGenerator;
