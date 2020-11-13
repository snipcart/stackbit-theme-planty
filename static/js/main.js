const templateParams = document.getElementById('template-params').dataset;
const apiKey = templateParams.apiKey;
const templatesUrl = templateParams.templatesUrl

fetch(templatesUrl)
    .then(response => response.text())
    .then((htmlTemplate) => {
      const fragment = document.createElement('div');
      let html = htmlTemplate.replace(/__SNIPCART_API_KEY__/g, apiKey);
      fragment.innerHTML = html;
      document.body.appendChild(fragment);

      var script = document.createElement('script');
      script.src = 'https://cdn.snipcart.com/themes/v3.0.18/default/snipcart.js';
      document.body.appendChild(script);
    });
