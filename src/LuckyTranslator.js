import React, { useState } from 'react';
import axios from 'axios';
import { API_URL, APP_KEY } from "./config"
const LuckyTranslator = () => {
    let [rawText, setRawText] = useState("");
    let [transText, setTransText] = useState("");
    const bindInput = event => setRawText(event.target.value);
    const fetchResult = async () => {
        const result = await axios.get(
            `https://${API_URL}/tr.json/translate?key=${APP_KEY}&lang=zh&text=${rawText}`
        );
        if (result) {
            setTransText(result["data"]["text"][0]);
        }
    };
    return (
        <div>
            <input type="text" onChange={bindInput} />
            <button onClick={fetchResult}>翻译</button>
            <br />
            {transText}
        </div>
    );
};

export default LuckyTranslator;
