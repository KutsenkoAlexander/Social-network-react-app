import React from 'react'
import { connect } from 'react-redux'
import { getFormState } from '../../../redux/formReducer'

const FormStateFromRedux = ({ state }) => (
    // <pre>{JSON.stringify(state, 0, 2)}</pre>
    <div></div>
)

export default connect((state, ownProps) => ({
    state: getFormState(state, ownProps.form)
}))(FormStateFromRedux)
