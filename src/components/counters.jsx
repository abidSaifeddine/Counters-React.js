import * as React from 'react';
import CounterComponent from "./counterComponent";

export class Counters extends React.Component{

    render() {
        const { onReset, counters, onDelete, onIncrement } = this.props;
        return (
            <div>
                <button onClick={onReset} className="btn btn-primary m-2 btn-sm">Reset</button>
                { counters.map(c=>
                    <CounterComponent
                    key={c.id}
                    onDelete={onDelete}
                    onIncrement={onIncrement}
                    counter={c}
                     />)}
            </div>
        );
    };


}
