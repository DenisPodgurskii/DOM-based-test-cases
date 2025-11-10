# DOM-Based Test Cases

A collection of interactive HTML test pages demonstrating various DOM-based XSS and open-redirect sinks. Each page exercises a different sink method (e.g., `appendChild`, `document.write`, `eval`, etc.) across multiple common attacker-controlled sources (inline inputs, query parameters, URL hash, cookies, Web Storage, `window.name`, and `document.referrer`).

## Repository Structure

```
DOM-based-test-cases/
├── index.html                  # Home page linking to all test cases
├── append_child.html           # Test for appendChild sink
├── document_write.html         # Test for document.write/document.writeln sinks
├── eval.html                   # Test for eval() sink
├── function_constructor.html   # Test for Function constructor sink
├── inner_html.html             # Test for innerHTML/outerHTML sinks
├── insert_adjacent_html.html   # Test for insertAdjacentHTML sink
├── open_redirect.html          # Test for open-redirect sinks (window.open, location.assign, etc.)
├── link_manipulation.html       # Test for anchor/link manipulation sinks
├── post_message.html           # Test for postMessage() sink
└── js/                         # Supporting JavaScript for test pages
    ├── lib.js                  # Shared utility library (cookie/helpers, common functions)
    ├── append_child.js         # Handler for appendChild test
    ├── document_write.js       # Handler for document.write test
    ├── eval.js                 # Handler for eval test
    ├── function_constructor.js # Handler for Function constructor test
    ├── inner_html.js           # Handler for innerHTML test
    ├── insert_adjacent_html.js # Handler for insertAdjacentHTML test
    ├── open_redirect.js        # Handler for open-redirect test
    ├── link_manipulation.js    # Handler for link manipulation test
    └── post_message.js         # Handler for postMessage test
```

## Getting Started

To use these test cases locally:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/DenisPodgurskii/DOM-based-test-cases.git
   cd DOM-based-test-cases
   ```

2. **Serve over HTTP:** Some tests rely on query parameters or `document.referrer`. Use a simple HTTP server:

   * **Python 3**:

     ```bash
     python -m http.server 8000
     ```

   * **Node.js (http-server)**:

     ```bash
     npx http-server -p 8000
     ```

3. **Open **\`\`**:** Visit [http://localhost:8000/index.html](http://localhost:8000/index.html) in your browser to see the list of available test cases.

4. **Run a Test:** Select a test page, enter a payload (e.g., `<script>alert(1)</script>` or `http://evil.com` for redirects), and click the **Run**/**Open** button. Check your browser’s console or network inspector to observe the behavior.

## Test Case Overview

Each test page follows the same pattern:

* **Sources Tested:**

  * **Inline input:** Manually entered in the page
  * **Query Parameter:** `?payload=` in the URL
  * **Fragment Identifier:** `#payload`
  * **Cookie:** Stored under `payload`
  * **Local Storage:** `localStorage.getItem('payload')`
  * **Session Storage:** `sessionStorage.getItem('payload')`
  * **window\.name**
  * **document.referrer**

* **Sink Method:** The specific API or property being tested (e.g., `appendChild`, `eval`, `window.open`).

Behavior is logged to the console for visual confirmation and to aid in validating instrumentation (e.g., IAST agents).

## Contribution

Contributions are welcome! To add a new test case:

1. Add a new HTML file in the root following the same structure as existing tests.
2. Add a corresponding script in the `js/` directory.
3. Update `index.html` to include a link to your new test.
4. Submit a pull request describing your test case and sink.

## License

This project is provided under the [MIT License](LICENSE) unless otherwise specified.
