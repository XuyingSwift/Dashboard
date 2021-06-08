import styled from "styled-components";
import {LightBlue} from '../../ColorPalette';

export const FileUploadFormContainer = styled.div`
	background-color: ${LightBlue};
    display: flex;
    flex-direction: column;
    width: 350px;
    height: 100%;
    color: white;
    justify-content: center;
    align-items: center;
`

export const FormGroup = styled.div`
	color: palevioletred;
    display: block;
	width: 300px;
	margin: 50px auto;
`;

export const Label = styled.label`
	margin-bottom: 0.5em;
	color: palevioletred;
    display: block;
`;


export const Input = styled.input`
	padding: 0.5em;
	color: palevioletred;
	background: papayawhip;
	border: none;
	border-radius: 3px;
	width: 100%;
	margin-bottom: 0.5em;
`;

export const Title = styled.h5`
    margin: 10px 0;
`
