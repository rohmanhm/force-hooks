# React Force Hooks

> Force class component to be able use React Hooks.

## Motivation

We love React Hooks and most of the current project components is still used the class component. This package exposes an HOC `withForceHooks`, that allows any hook to be used inside of a class component.

## Installation

```bash
$ yarn add force-hooks
```

### Usage

```ts
import * as React from 'react';
import withForceHooks from 'force-hooks';

class App extends React.Component {
  render() {
    const btnRef = React.useRef(null);
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
      console.log('mounted');
      console.log('btnRef value:', btnRef);
    }, []);

    return (
      <div>
        Count: {count}
        <button ref={btnRef} onClick={() => setCount(c => c + 1)}>
          Increase
        </button>
      </div>
    );
  }
}

const EnhancedApp = withForceHooks(App);
```
