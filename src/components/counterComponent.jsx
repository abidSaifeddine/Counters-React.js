import React,{Component} from "react";

class CounterComponent extends Component {
    render() {
        let classes = this.getClasses();
        return (
            <div>
                <span className={classes}>{this.formatCounter()}</span>
                <button onClick={ () => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Increment</button>
                <button onClick={()=> this.props.onDelete(this.props.counter.id) } className="btn btn-danger m-2 btn-sm">Delete</button>
            </div>
        );
    }

    getClasses(){
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? 'warning': 'primary';
        return classes;
    }

    formatCounter(){
        const { value } = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }


}

export default CounterComponent;
