import React from 'react';

import { CustomButtonContainer } from './CustomButtom.styles';

const CustomButton = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

export default CustomButton