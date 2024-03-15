// import React from 'react';
// import styled from 'styled-components';


// const ButtonComponent = styled.button`
//     position : releative;
//     display : inline-flex;
//     align-items: center;
//     justift-content : center;
//     text-align:center;
//     text-decoration : center;
//     vertical-align : center;
//     curosr : pointer;
//     user-select : none;
//     border-radius : 0.3 rem;
//     `

// const Button = ({type,varient,className,id,onClick,childern, size}) => {
//   return (
//     <ButtonComponent 
//     type={type ? type : "button"}
//      varient={varient} 
//      className={className ? `btn-component ${className}`: "btn-component"} 
//      id={id} 
//      onClick={onClick}
//      size={size}>
//         {childern}
//     </ButtonComponent>
//   )
// }
// export default Button;



import React from 'react';
import styled from 'styled-components';

// Create a styled component
const StyledButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// Example functional component using the styled component
const MyComponent = () => {
  return (
    <div>
      <StyledButton>Click me</StyledButton>
    </div>
  );
};

export default MyComponent;
