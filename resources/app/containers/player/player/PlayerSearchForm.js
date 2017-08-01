import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchEquipes, filterEquipes } from './actions/actions_equipe';
import { reduxForm, Field } from 'redux-form';
import { renderField } from '../../components/FieldHelper';

class EquipeSearchForm extends Component {

    constructor(props) {
        super(props);
        this.state = {showMessageDialog: false, message:''};
    }

    formSubmit(props){
        this.props.searchEquipes(props)
            .then((response) => {
                if(response.error) throw response.payload
            }).catch((error) => {
                console.log(error)
            });
    }

    handleKeyPress(props){
        const {name , value} = props.target;
        this.props.filterEquipes(this.props.equipes, {[name]: value});
    }

    render(){

        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit((props) => this.formSubmit(props))}>

                <Field name="name" type="text" onBlur={()=>{}} onFocus={()=>{}}
                    component={renderField} label="Equipe Name"
                       onChange={(props) => this.handleKeyPress(props)}/>

                <Field name="description" type="text" onBlur={()=>{}} onFocus={()=>{}}
                    component={renderField} label="Equipe Description"
                       onChange={(props) => this.handleKeyPress(props)}/>

                <br/>

            </form>
        )
    }

    componentDidMount(){
        try{componentHandler.upgradeAllRegistered();}catch (e){}
    }

}

EquipeSearchForm = reduxForm({ form:'SearchForm'})(EquipeSearchForm);

function mapStateToProps(state){

    if(state.equipesState.holdEquipes)
        return {equipes: state.equipesState.holdEquipes}

    if(state.equipesState.all)
        return {equipes: state.equipesState.all}

    return {equipes:[]};
}

export default connect(mapStateToProps, { searchEquipes, filterEquipes })(EquipeSearchForm);
