async function apiRequest(method, body = {}) {
    const idInstance = document.getElementById('idInstance').value;
    const apiTokenInstance = document.getElementById('apiTokenInstance').value;
    body.idInstance = idInstance;
    body.apiTokenInstance = apiTokenInstance;

    const response = await fetch(`/api/${method}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });

    const data = await response.json();
    document.getElementById('response').innerText = JSON.stringify(data, null, 2);
}

function getSettings() {
    apiRequest('getSettings');
}

function getStateInstance() {
    apiRequest('getStateInstance');
}

function sendMessage() {
    const phoneNumber = document.getElementById('phoneNumber').value;
    const message = document.getElementById('message').value;
    apiRequest('sendMessage', { phoneNumber, message });
}

function sendFileByUrl() {
    const phoneNumber = document.getElementById('phoneNumber').value;
    const fileUrl = document.getElementById('fileUrl').value;
    apiRequest('sendFileByUrl', { phoneNumber, fileUrl });
}
