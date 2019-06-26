import React, { Component } from 'react';
import logo from '../images/buildings.jpeg';
import '../App.css';
import ReactSearchBox from 'react-search-box'
import FontAwesomeIcon from 'react-fontawesome'
// var FontAwesomeIcon = require('fortawesome/react-fontawesome');
class home extends Component {
    render() {
        return (<React.Fragment>

            <div >

                <FontAwesomeIcon icon="coffee" />
                {/* <ReactSearchBox
                    placeholder="Search"
                    value="Doe"
                    data={this.data}
                    callback={record => console.log(record)}
                    style={{ textAlign: '-webkit-right', background: '#0000001c' }}
                /> */}
                {/* <form class="form-inline md-form form-sm mt-0">

                    <i class="fas fa-search" aria-hidden="true"></i>
                    <input class="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search"
                        aria-label="Search" />
                </form> */}
            </div>
            <span>
                <img src={require('../images/logo.png')} style={{ width: 35, marginTop: 23, marginLeft: 1170 }} alt="Home Pic" />
            </span>
        </React.Fragment >);
    }
}

export default home;