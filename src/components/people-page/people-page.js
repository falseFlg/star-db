import React, { Component } from 'react'

import './people-page.css'
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import ErrorIndicator from '../error-indicator/error-indicator';

export default class PeoplePage extends Component {
    state = {
        selectedPerson: 3,
        hasErr: false
    }

    componentDidCatch() {
        this.setState({
            hasErr: true
        })
    }

    onPersonSelected = (selectedPerson) => {
        this.setState({
            selectedPerson
        })
    }

    render() {
        if (this.state.hasErr) {
            return <ErrorIndicator />
        }
        return (
            <div className="row mb2">
                <div className="col-md-6">
                <ItemList onItemSelected={this.onPersonSelected}/>
                </div>
                <div className="col-md-6">
                <PersonDetails personId={this.state.selectedPerson}/>
                </div>
            </div>
        )
    }
}