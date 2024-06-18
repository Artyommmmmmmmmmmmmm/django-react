import React from 'react';
import axios from 'axios';
import {Routes, Route, Link} from 'react-router-dom'
import { useLocation } from "react-router-dom";
import { withLocation } from './HOC';


class Foods extends React.Component {
    state = { details:[], }
    
    componentDidMount(){

        let data;

        axios.get('http://localhost:8000/category/')
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
        const { location } = this.props;
        console.log(location)
        const search = location.search;
        const query = new URLSearchParams(search)
        const category = query.get('category')
        return(
            <>
                <h1>{category}</h1>
                <div>{this.state.details.map((output, id) => (
                    output.category.name == category ?
                        <div key={id}> 

                            <div>-{output.name}</div>
                            <Link to={'/food/' + (id + 1)}>подробнее о {output.name}</Link>
                        </div>
                    : null
                ))}
                </div>
            </>
        )
    }}
// output.category.name == this.query.get('category'
export default withLocation(Foods);