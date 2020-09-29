import React from 'react'
import { getFullDate, getDay } from '../util';
import randomQuote from 'rqg';

export const LandingPage = () => {
    const quote = randomQuote();
    return (
        <div>
            <h2>
                David's Accounting App
            </h2>
            <h3>
                {getFullDate()}
            </h3>
            <h5>
                {getDay()}
            </h5>
            <hr />
            <h5 className="quote">
                <blockquote>
                    {quote.body}
                </blockquote>
                <cite>{quote.author}</cite>
            </h5>
        </div>
    )
};
