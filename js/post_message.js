window.addEventListener('message', e => {
    let out = document.getElementById('out');
    if (!out) {
        out = document.createElement('div');
        out.id = 'out';
        document.body.appendChild(out);
    }
    out.innerHTML = e.data;
});
function runSink(input) {
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    document.body.appendChild(iframe);
    iframe.contentWindow.postMessage(input, '*');
}