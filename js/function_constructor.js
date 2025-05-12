function runSink(input) {
    try {
        let str = `alert("${input}")`
        const fn = new Function(str);
        fn();
    } catch (e) {
        console.error('Function constructor error:', e);
    }
}