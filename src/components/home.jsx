import React, { Component } from 'react';
import logo from '../images/bg.png';
import '../App.css';
import ReactSearchBox from 'react-search-box'
import Header from './header'
class home extends Component {
    state = {}
    styles = {
        a: {
            textAlign: 'center', color: 'black', textDecoration: 'none'
        },
        span: {
            color: 'white',
            font: 'bold, Helvetica, SansSerif',
            letterSpacing: -1,
            background: '#0220000',
            padding: 10
        }
    };
    render() {
        return (<React.Fragment>
            <Header />
            <div>
                <img src={logo} className="bg" alt="Home Pic" />
                <a href='/' style={this.styles.a}><span style={{
                    fontFamily: 'American Typewriter,serif',
                    marginLeft: 630, backgroundColor: 'white', fontSize: 20,
                }}>new tracks </span></a>
            </div>
            <br />
            <br />
            <br />
            <a href='/' style={{ textDecoration: 'none' }}>
                <span style={{ backgroundColor: 'white', fontFamily: 'American Typewriter,serif', fontSize: 20, color: 'black', marginLeft: 870 }}> new releases </span></a>
            <br />
            <br />
            <br />
            <br />
            <br />
            <a href='/' style={{ textDecoration: 'none' }}>
                <span style={{ backgroundColor: 'white', fontFamily: 'American Typewriter,serif', fontSize: 20, color: 'black', marginLeft: 130 }}> 4 &#10005; 4 </span></a>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <a href='/' style={{ textDecoration: 'none' }}>
                <span style={{ fontFamily: 'American Typewriter,serif', fontSize: 15, fontWeight: 'bold', color: 'white' }}> US</span></a>
            <a href='/' style={{ textDecoration: 'none' }}>
                <span style={{ fontFamily: 'American Typewriter,serif', fontSize: 18, fontWeight: 'bold', color: 'white', marginLeft: 1130 }}> login</span></a>
            <br />



        </React.Fragment >);
    }
}

export default home;