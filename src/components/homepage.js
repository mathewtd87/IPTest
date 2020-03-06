import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Counter from './counter';
import {addCount} from '../actions/countActions';

export class HomePage extends Component {
    //Lifecycle method to call increment number action
    componentDidMount(){
        if(this.props.count.number > 0){
            this.props.addCount(this.props.count.number);
        };
        
    }
    
    render() {
        //deconstruct props to get number attribute
        const {number} = this.props.count;
        return (
            <div className="container text-center">
                <h1>Home Page</h1>
                <Link to="/counter">
                    <button className="btn btn-outline-primary">Count Page</button>
                </Link>
                <Counter value={number}/>
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
    return({
        addCount: (number) => dispatch(addCount(number))
    });
};


export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
