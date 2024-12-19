import React, { useState, useEffect } from "react";
import { marked } from "marked";
import DOMPurify from "dompurify";
import CopyButton from "./CopyButton";

// Set marked options to support GitHub-flavored Markdown and line breaks
marked.setOptions({
  gfm: true,
  breaks: true,
});

const MarkdownPreviewer = () => {
  const [markdown, setMarkdown] = useState(`
# Heading (H1 size)
## Subheading (H2 size)
[Link](https://www.example.com)

\`inline code\`

\`\`\`
// code block
const example = "Hello, World!";
console.log(example);
\`\`\`

- List item

> Blockquote

![Image](https://via.placeholder.com/150)

**Bolded text**
  `);

  useEffect(() => {
    // Render the default markdown when the component loads
    document.getElementById("preview").innerHTML = DOMPurify.sanitize(
      marked.parse(markdown)
    );
  }, []);

  const handleInputChange = (e) => {
    const input = e.target.value;
    setMarkdown(input);
    document.getElementById("preview").innerHTML = DOMPurify.sanitize(
      marked.parse(input)
    );
  };

  // Function to export the rendered Markdown as an HTML file
  const exportHtml = () => {
    const htmlContent = document.getElementById("preview").innerHTML;
    const blob = new Blob([htmlContent], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "markdown-preview.html";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="markdown-previewer">
      <div className="editor-preview-container">
        <div className="editor-section">
          <textarea
            id="editor"
            value={markdown}
            onChange={handleInputChange}
            placeholder="Enter Markdown here..."
          />
          <CopyButton text={markdown} />
        </div>
        <div className="preview-section">
          <div id="preview"></div>
          <button onClick={exportHtml} className="export-button">
            Export as HTML
          </button>
        </div>
      </div>
    </div>
  );
};

export default MarkdownPreviewer;