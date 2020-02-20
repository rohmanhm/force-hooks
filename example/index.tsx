import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import withForceHooks from '../.'

class App extends React.Component {
  render() {
    const btnRef = React.useRef(null)
    const [count, setCount] = React.useState(0)

    React.useEffect(() => {
      console.log('mounted')
      console.log('btnRef value:', btnRef)
    }, [])

    return (
      <div>
        Count: {count}
        <button ref={btnRef} onClick={() => setCount(c => c + 1)}>
          Increase
        </button>
      </div>
    )
  }
}

const EnhancedApp = withForceHooks(App)

ReactDOM.render(<EnhancedApp />, document.getElementById('root'))
