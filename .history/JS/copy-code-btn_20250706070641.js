 document.querySelectorAll(".code").forEach((codeBlock) => {
        // Create copy button
        const btn = document.createElement("button");
        btn.className = "copy-btn";
        btn.textContent = "Copy";

        // Insert button into the code block
        codeBlock.style.position = "relative";
        codeBlock.appendChild(btn);

        // Copy logic
        btn.addEventListener("click", () => {
          const text = codeBlock.querySelector("p").innerText;
          navigator.clipboard.writeText(text).then(() => {
            btn.textContent = "✅ Copied!";
            setTimeout(() => (btn.textContent = "Copy"), 2000);
          });
        });
      });