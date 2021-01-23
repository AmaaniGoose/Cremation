import React, { Component } from 'react';
import axios from 'axios';
class Death extends Component {
    constructor(props) {
        super(props);

        this.state = {
            result: {}
        }
    }

    componentDidMount() {
        axios.get('/api/users')
            .then((response) => {
                console.log(response.data[response.data.length-1]);
                console.log(response.status);
                console.log(response.statusText);
                console.log(response.headers);
                console.log(response.config);

                this.setState({result : response.data[response.data.length-1]});
            });

     }
    render() {
        return (
            <div class="container vertical center">
                <div class="row row-header">
                    <div class="col mx-auto p-3">
                        <img src="./placeholder.jpg" class="img-fluid img-thumbnail"></img>
                    </div>
                </div>
                <div class="row row-header">
                    <div class="col mx-auto p-3">
                        <div class="card text-white bg-dark mb-3">
                            <div class="card-header">In Loving Memory Of</div>
                            <div class="card-body">
                                <h5 class="card-title">{this.state.result["cremate"]}</h5>
                                <p class="card-text">Remembered by {this.state.result["name"]}</p>
                            </div>
                        </div>
                        {"\n"}
                       
                    </div>
                </div>
            </div>


        );
    }
}
export default Death;
