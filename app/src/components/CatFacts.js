import React from 'react'
import {connect} from 'react-redux'
import Fact from './Fact'

function CatFacts(props) {
    console.log(props)
    return (
        <div>
            <h1>Cat Facts</h1>
            {props.facts.map((fact)=> {
                return <Fact key={fact._id} fact={fact}/>
            })}
            
        </div>
    )
}

function mapStateToProps(state) {
    return {
        facts: state.facts
    }
}


export default connect(mapStateToProps, {})(CatFacts)
