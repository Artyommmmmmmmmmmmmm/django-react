import React from 'react';
import axios from 'axios';

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
                        <div> {output.name}</div>
                        <div> {output.category}</div>
                    </div>
                ))}
                </div>
            </>
        )
    }}

export default App;
