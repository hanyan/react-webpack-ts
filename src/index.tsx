import styles from './index.module.less'
import React from 'react'
import ReactDOM from 'react-dom'
import Logo from './logo.png'


const container = document.getElementById('root');

const App = () => {
    return (<div className={styles.container}>
        <h1>Hello React</h1>
        <img src={Logo} />
    </div>)
}

ReactDOM.render(<App />, container)


console.log('Hello webpack')
