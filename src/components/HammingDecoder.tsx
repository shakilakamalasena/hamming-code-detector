import React, { useState } from "react";
import { decodeHammingCode } from "../utils/hammingCode";

const HammingDecoder: React.FC = () => {
    const [encodedMessage, setEncodedMessage] = useState("");
    const [decodedMessage, setDecodedMessage] = useState("");

    const handleDecode = () => {
        const result = decodeHammingCode(encodedMessage);
        setDecodedMessage(result);
    };

    return (
        <div>
            <h2>Hamming Code Decoder</h2>
            <input
                type="text"
                value={encodedMessage}
                onChange={(e) => setEncodedMessage(e.target.value)}
                placeholder="Enter encoded message"
            />
            <button onClick={handleDecode}>Decode</button>
            {decodedMessage && <p>Decoded Message: {decodedMessage}</p>}
        </div>
    );
};

export default HammingDecoder;
