// Adds a copy button to every install command. Without JS the commands stay selectable.
document.querySelectorAll('[data-copy]').forEach(function (block) {
  if (!navigator.clipboard) return;
  var button = document.createElement('button');
  button.type = 'button';
  button.className = 'copy';
  button.textContent = 'Copy';
  button.setAttribute('aria-label', 'Copy command');
  button.addEventListener('click', function () {
    navigator.clipboard.writeText(block.dataset.copy).then(function () {
      button.textContent = 'Copied';
      setTimeout(function () { button.textContent = 'Copy'; }, 1500);
    }).catch(function () {
      button.textContent = 'Failed';
      setTimeout(function () { button.textContent = 'Copy'; }, 1500);
    });
  });
  block.appendChild(button);
});
