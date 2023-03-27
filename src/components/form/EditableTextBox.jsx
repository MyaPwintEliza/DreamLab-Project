import React, { useState } from "react";

function TextBox() {
  const [content, setContent] = useState("");

  const handleInput = (e) => {
    const { value, nodeName, tagName } = e.target;
    const selection = window.getSelection();

    // Check if the user has selected text
    if (!selection.isCollapsed) {
      // Get the selected range
      const range = selection.getRangeAt(0);

      // Create a new node with the desired format
      const node = document.createElement(tagName);
      node.appendChild(document.createTextNode(value));
      node[nodeName] = value;

      // Replace the selected text with the new node
      range.deleteContents();
      range.insertNode(node);

      // Update the selection to include the new node
      const newRange = document.createRange();
      newRange.setStart(node, 1);
      newRange.setEnd(node, 1);
      selection.removeAllRanges();
      selection.addRange(newRange);
    } else {
      setContent(value);
    }
  };

  return (
    <div
      dangerouslySetInnerHTML={{ __html: content }}
      contentEditable={true}
      onInput={handleInput}
      className="bg-red-100">
      {content}
    </div>
  );
}

export default TextBox;
