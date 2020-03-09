import React, {Component} from 'react';
import './App.css';
import {Navbar} from "./components/navbar";
import {Counters} from "./components/counters";

class App extends Component{

    state = {
        counters: [
            {
                id: 1,
                value: 0
            },
            {
                id: 2,
                value: 4
            },
            {
                id: 3,
                value: 2
            }
        ]
    };

    handleDelete = id =>{
        const counters = this.state.counters.filter(e => e.id !== id );
        this.setState({ counters })
    };

    handleIncrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value++;
        this.setState({counters});
    };

    handleReset = () => {
        const counters = this.state.counters.map( c => {
            c.value = 0;
            return c;
        });
        this.setState({ counters })
    };
    render() {
        return (
            <React.Fragment>
                <Navbar totalCounters={this.state.counters.filter(c=>c.value > 0).length}/>
                <main role="main" className="container">
                    <Counters
                        counters={this.state.counters}
                        onDelete={this.handleDelete}
                        onIncrement={this.handleIncrement}
                        onReset={this.handleReset}
                    />
                </main>
            </React.Fragment>

        );
    }


}

export default App;
