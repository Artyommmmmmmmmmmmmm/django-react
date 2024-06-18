import React from 'react';
import axios from 'axios';
import {Routes, Route} from 'react-router-dom'
import { useLocation } from "react-router-dom";
import { withLocation } from './HOC';


class Food extends React.Component {
    state = { details:[], }
    
    componentDidMount(){

        let data;

        axios.get('http://localhost:8000' + this.props.location.pathname)
         .then(res => {
            data = res.data;
            this.setState({
                details:data
            })
         })
         .catch(arr => {
            console.log(arr)
         })}

    render() {

        return(
            <>
                <h1>{this.state.details.name}</h1>
            </>
        )
    }}
// output.category.name == this.query.get('category'
export default withLocation(Food);
