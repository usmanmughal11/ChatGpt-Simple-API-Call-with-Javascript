
(async function sendRequestToChatGpt() {
    const apiUrl = 'https://api.openai.com/v1/chat/completions';
    const apiKey = 'YOUR API KEY';

    let payload = {
       model: 'gpt-3.5-turbo',
         messages: [{
            role: 'system',
            content: 'You are a helpful assistant.'
         }, {
            role: 'user',
            content: 'write possible nick names for name "John Doe"'
         }],
       max_tokens: 100,
       temperature: 0.7
    }


async function chatWithGpt() {
    console.log(payload);
    const response = await fetch(apiUrl, {
       method: 'POST',
       headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
       },
       body: JSON.stringify(payload)
    });

    const data = await response.json();
    console.log(data);

 }
 try {
    chatWithGpt();
 }
 catch (error) {
    console.error(error);
 }
})();
