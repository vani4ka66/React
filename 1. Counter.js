import React from 'react';
import './App.css';


class App extends React.Component {
    constructor(){
        super()

        this.state = {
            counter: 0,
            memoizer:[],
            name: 'Pesho'
        }
    }

    componentDidMount(){
        const { counter, memoizer} = this.state;

        if(counter === 5){
            this.setState({
                memoizer: [counter, ...memoizer]
            })
        }
        
        setInterval(() => {
            this.setState({
                counter: this.state.counter + 1
            })
        }, 1000)
    }

    render(){
        return(
            <div className="App">
                <header className="App-header">
                    {this.state.name}
                    <br></br>
                {this.state.counter}
                </header>
            </div>
        )
    }
}

export default App;
// export {App}
