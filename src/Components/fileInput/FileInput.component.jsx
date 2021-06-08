import React, { Component } from 'react';

import * as s from './FileInput.styles';

import CustomButton from '../customButton/CustomButton.component';
import FormInput from '../formInput/FormInput.component';
 
export default class FileInput extends Component {
    documentData;
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.state = {
            projectName: '',
            selectedFile: null
        }
    }
 
    handleChange= (e)=> {
        this.setState({projectName:e.target.value});
    }

    handleselectedFile = (e) => {
        this.setState({selectedFile: e.target.files[0].toString()})
    }
// on form submit...
    handleFormSubmit(e) {
        e.preventDefault()
        localStorage.setItem('document',JSON.stringify(this.state));
    }
 
// React Life Cycle
    componentDidMount() {
        this.documentData = JSON.parse(localStorage.getItem('document'));
 
        if (localStorage.getItem('document')) {
            this.setState({
                projectName: this.documentData.projectName,
                selectedFile: this.documentData.selectedFile
        })
        } else {
            this.setState({
            projectName: '',
            selectedFile: null
        })
        }
    }
 
    render() {
        const {projectName} = this.state;
        return (
            <s.FileUploadFormContainer>
                <s.Title>Upload Pique Model Output Json File Here</s.Title>                           
                <form>
                    <FormInput type='text' name='projectName' label='Project Name' value={projectName} onChange={this.handleChange}/>
                    <FormInput type='file' onChange={this.handleselectedFile}/>
                </form>
                <CustomButton type='submit'>upload</CustomButton>
            </s.FileUploadFormContainer>
        )
    }
}