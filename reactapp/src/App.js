import React from 'react';
import axios from 'axios';
import {Routes, Route, Link} from 'react-router-dom'
import Foods from './components/Foods'
import Food from './components/Food'



class App extends React.Component {
    state = { details:[], }

    componentDidMount(){
        let data;
        axios.get('http://localhost:8000')
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
                <div>{this.state.details.map((output, id) => (
                    <div key={id}> 
                        <Link to={'category/?category=' + output.name}> { output.name } </Link>
                    </div>
                ))}
                </div>
                <Routes>
                    <Route path='/category' element={ <Foods/> }/>
                    <Route path='/food/*' element={ <Food/> }/>
                </Routes>
            </>
        )
    }}

export default App;
