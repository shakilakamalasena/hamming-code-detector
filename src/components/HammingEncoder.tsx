import React, { useState } from "react";
import { encodeHammingCode } from "../utils/hammingCode";

const HammingEncoder: React.FC = () => {
    const [message, setMessage] = useState("");
    const [encodedMessage, setEncodedMessage] = useState("");

    const handleEncode = () => {
        const result = encodeHammingCode(message);
        setEncodedMessage(result);
    };

    return (
        <div>
            <h2>Hamming Code Encoder</h2>
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter binary message"
            />
            <button onClick={handleEncode}>Encode</button>
            {encodedMessage && <p>Encoded Message: {encodedMessage}</p>}
        </div>
    );
};

export default HammingEncoder;
