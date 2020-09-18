This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This application demonstrates a potential leak when using Portals.

The following steps demonstrate the leak:

- take a snapshot (or several until the memory footprint stabilises)
- click "Create Portal"
- click "Delete Portal"

If you now take another snapshot and compare against the first one you'll see a "Detached HTMLDivElement", as well as the supplied "TestComponent"
