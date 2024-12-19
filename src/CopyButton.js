import React, { useState } from "react";

const CopyButton = ({ text }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
    });
  };

  return (
    <button onClick={handleCopy} className="copy-button">
      {isCopied ? "Copied!" : "Copy"}
    </button>
  );
};

export default CopyButton;