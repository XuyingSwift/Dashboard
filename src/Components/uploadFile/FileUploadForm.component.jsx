import React from 'react';

import * as s from './FileUploadForm.styles';

class FileUploadForm extends React.Component {
    piqueTreeData;
    constructor(props) {
        super(props);
        this.state = {
            projectName: '',
            piqueTreeJson: ''
        }
    }

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('piqueJson', JSON.stringify(this.state))
    }

    componentDidMount() {
        this.piqueTreeData = JSON.parse(localStorage.getItem('piqueJson'));
        if (localStorage.getItem('piqueJson')) {
            this.setState({
                projectName: this.piqueTreeData.projectName,
                piqueTreeJson: this.piqueTreeData.piqueTreeJson
            })
        }else {
            this.setState({
                projectName:'',
                piqueTreeJson:''
            })
        }
    }

    render() {
        const {projectName, piqueTreeJson} = this.state;
        return(

            <s.FileUploadFormContainer>
                <form onSubmit={this.handleSubmit}>
                    <s.FormGroup>
                        <s.Label>Project Name</s.Label>
                        <s.Input type='text' name='projectName' value={projectName} onChange={this.handleChange}/>
                    </s.FormGroup>

                    <s.FormGroup>
                        <s.Label>Pique Output Json</s.Label>
                        <s.Input type='file' name='piqueTreeJson' value={piqueTreeJson} onChange={this.handleChange}/>
                    </s.FormGroup>
                    <button type='submit'>Upload File</button>
                </form>
            </s.FileUploadFormContainer>
        
        ) 
            
    }
}

export default FileUploadForm;