const form = document.querySelector('#contact-form[data-preview]');
if (form) {
  const preview = document.getElementById('message-preview');
  const showPreview = () => {
    if (!form.reportValidity()) return;
    const fields = new FormData(form);
    preview.textContent = `Message preview — not sent\n\nFrom: ${fields.get('name')} (${fields.get('email')})\nTopic: ${fields.get('topic')}\n\n${fields.get('message')}`;
    preview.hidden = false;
  };
  form.addEventListener('submit', event => { event.preventDefault(); showPreview(); });
  document.getElementById('preview-message').addEventListener('click', showPreview);
}
