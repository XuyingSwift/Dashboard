import React from 'react';
import FileUploadForm from '../../components/uploadFile/FileUploadForm.component';
import { PiquetreeContainer } from './PiqueTree.styles';

const PiqueTree = () => {
    return (
        <PiquetreeContainer>
            <h1>Pique Tree</h1>
            <FileUploadForm/>
        </PiquetreeContainer>
    )
}

export default PiqueTree;