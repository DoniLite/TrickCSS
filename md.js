
window.onload = () => {
  document.querySelectorAll('pre').forEach((pre) => {
    const codeBlock = pre.querySelector('code');
    if (codeBlock) {
      const btn = document.createElement('button');
      btn.classList.add('copy-btn');
      btn.innerText = 'copy';
      pre.style.position = 'relative'; 
      btn.style.position = 'absolute';
      btn.style.top = '5px';
      btn.style.right = '5px';
      pre.appendChild(btn);

      btn.addEventListener('click', function () {
        const textToCopy = codeBlock.innerText;

        navigator.clipboard
          .writeText(textToCopy)
          .then(() => {
            btn.textContent = 'copied !';
            setTimeout(() => {
              btn.textContent = 'copy';
            }, 2000);
          })
          .catch((err) => {
            console.error('failed to copy', err);
          });
      });
    }
  });

  hljs.highlightAll();
};
