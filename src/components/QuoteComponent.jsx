import { useState, useEffect } from 'react';
import { QuoteViewComponent } from './QuoteViewComponent';

export const QuoteComponent = () => {
    const [quote, setQuote] = useState('This will be a quote');

    useEffect(() => {
        const apiUrl = "https://api.chucknorris.io/jokes/random?category=dev";

        const getQuote = async () => {
            const response = await fetch(apiUrl);
            const data = await response.json();
            setQuote(data.value);
        }

        getQuote();

    }, []);

    return <QuoteViewComponent quote={quote} />
}