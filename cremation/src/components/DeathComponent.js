import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Death extends Component {
    constructor(props) {
        super(props);

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
                                <h5 class="card-title">[placeholder]</h5>
                                <p class="card-text">Placeholder</p>
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
