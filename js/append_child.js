function runSink(input) {
    const frag = document.createRange().createContextualFragment(input);
    let out = document.getElementById('out');
    if (!out) {
        out = document.createElement('div');
        out.id = 'out';
        document.body.appendChild(out);
    }
    out.appendChild(frag);
}