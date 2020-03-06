import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Counter from './counter';
import {addCount} from '../actions/countActions';

export class CountPage extends Component {

    //Lifecycle method to call increment number action
    componentDidMount(){
        this.props.addCount(this.props.count.number);
    };

    render() {
        return (
            <div className="container text-center">
                <h1>Count Page</h1>
                <Link to="/">
                    <button className="btn btn-outline-primary">Home Page</button>
                </Link>
                <Counter value={this.props.count.number}/>
            </div>
        )
    }
}

//Get countReducer state object into props
const mapStateToProps = (state) => {
    return{
        count: state.count
    };
};

//Get required actions from countActions into props
const mapDispatchToProps = (dispatch) => {
    return{
        addCount: (number) => dispatch(addCount(number))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CountPage)
