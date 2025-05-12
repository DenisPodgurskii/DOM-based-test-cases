function runSink(input) {
    let container = document.getElementById('out');
    if (!container) {
        container = document.createElement('div');
        container.id = 'out';
        document.body.appendChild(container);
    }
    container.insertAdjacentHTML('beforeend', input);
}