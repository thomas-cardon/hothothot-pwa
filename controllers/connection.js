function start() {
    const term = document.getElementById('term');
    term.innerText += '\n';

    const socket = new WebSocket('wss://ws.hothothot.dog:9502');

    socket.onopen = function () {
        term.innerText += '\nConnecté au serveur\n';
    }

    socket.onmessage = function (event) {
        term.innerText += event.data + '\n';
    }

    socket.onclose = function () {
        term.innerText += '\nDéconnecté du serveur';
    }

    socket.onerror = function (error) {
        term.innerText += '\nErreur : ' + error;
    }
}

HotSDK.connect = start;