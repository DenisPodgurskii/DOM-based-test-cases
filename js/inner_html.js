function runSink(input) {
    let out = document.getElementById('out');
    if (!out) {
        out = document.createElement('div');
        out.id = 'out';
        document.body.appendChild(out);
    }
    out.innerHTML = input;
}