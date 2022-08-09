import { useState } from "react";
import QRCode from "react-qr-code";

import "./style.css";

export function Application() {
  const [inputText, setInputText] = useState("");

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div className="container">
      <input
        type="text"
        id="text"
        placeholder="Write something here..."
        onChange={handleChange}
        value={inputText}
      />

      <QRCode value={inputText} id="qr" />
    </div>
  );
}
