function runSink(input) {
    try {
        let str = `alert("${input}")`
        eval(str);
    } catch (e) {
        console.error('Eval error:', e);
    }
}