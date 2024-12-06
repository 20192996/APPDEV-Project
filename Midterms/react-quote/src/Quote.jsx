import React,{useState} from "react";
const quotess = ["Pleasure in the job puts perfection in the work. by: Aristotle", 
"Dignity does not consist in possessing honors, but in deserving them. by: Aristotle", 
"You will never do anything in this world without courage. It is the greatest quality of the mind next to honor. by: Aristotle", 
"It is just that we should be grateful, not only to those with whose views we may agree, but also to those who have expressed more superficial views; for these also contributed something, by developing before us the powers of thought. by: Aristotle", 
"Persuasion is achieved by the speaker's personal character when the speech is spoken as to make us think him credible. We believe good men more fully and more readily than others. This is true generally whatever the question is, and absolutely true where exact certainty is impossible and opinions are divided. by: Aristotle", 

"He who will not economize will have to agonize. by: Confucius", 
"It does not matter how slowly you go as long as you do not stop. by: Confucius", 
"Choose a job you love and you will never have to work a day in your life. by: Confucius", 
"The will to win, the desire to succeed, the urge to reach your full potential...these are the keys that will unlock the door to personal excellence. by: Confucius", 
"Our greatest glory is not in never failing, but in rising every time we fall. by: Confucius"]

export default function Quote(){
    const [quotes, setQuotes] = useState(quotess[0]);

    function getRandomQuotes() {
        const randomQuotes = Math.floor(Math.random()*quotess.length);
        return quotess [randomQuotes];
    }

    function randomQuotesChange(){
        setQuotes(getRandomQuotes());
    }

    return(
        <>
        <div className="color-picker-container">
            <h1>Quote Generator</h1>
            <div className="color-display">
                <p>{quotes}</p>
                </div>
                <br />
                <button className="randomize" onClick={randomQuotesChange}>Generate Quote</button>
            
        </div>
        </>
    )
}