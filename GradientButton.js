import React from "react"
import styled from "styled-components"

const Wrapper = styled.button`
 /* Remove standard style */
  padding: 0;
  border: none;
  background: none;
  // margin: 20px;

  /* fixed properties */
  text-transform: uppercase;
  cursor: pointer;
  border-radius: ${props => props.borderRadius ? `${props.borderRadius}px` : "50px"};
  color: white;
  font-weight: 600;

  font-size: ${props => `${props.fontSize}px`}
  padding: ${props => {
    if (props.fontSize) {
      const paddingSize = props.fontSize * 2
      return `20px ${paddingSize}px`
    } else {
      return "40px 70px"
    }
  }};
  font-family: ${props => props.fontFamily ? props.fontFamily : "Arial"}

  background: ${props => {
    if (props.gradientColor.left && props.gradientColor.mid && props.gradientColor.right) {
      const {left, mid, right} = props.gradientColor
      return `linear-gradient(to right,hsla(${left},100%,45%,1) 0%,hsla(${mid},100%,45%,1) 52%,hsla(${right},100%,45%,1) 100%)`
    } else {
      const {left} = props.gradientColor
      return `linear-gradient(to right,hsla(${left},100%,45%,1) 0%,hsla(${left + 30},100%,45%,1) 52%,hsla(${left + 60},100%,45%,1) 100%)`
    }
  }};
  background-size: 200% 100%;

  transition: all 0.4s ease 0s, box-shadow 0.1s ease 0s;

  box-shadow: ${props => `0px 2px 12px hsla(${props.gradientColor.left}, 100%, 50%, 1)`};


  &:hover {
    background-position: 100% 0%;
    box-shadow: ${props => `0px 2px 20px hsla(${props.gradientColor.right ? props.gradientColor.right : props.gradientColor.left + 60}, 100%, 50%, 1)`};
  }
  //
  // &:active {
  //   box-shadow: ${props => `0px 2px 20px hsla(${props.gradientColor.left}, 100%, 50%, 1)`};
  // }

  &:focus {
    outline: none;
  }
`

const GradientButton = (props) => {
  console.log(props)
  return (
    <Wrapper
       fontSize={props.fontSize ? props.fontSize : 20}
       fontFamily={props.fontFamily}
       borderRadius={props.borderRadius}
       gradientColor={{
         left: props.gradientColor.left ? props.gradientColor.left : null,
         mid: props.gradientColor.mid ? props.gradientColor.mid : null,
         right: props.gradientColor.right ? props.gradientColor.right : null,
       }}
       >
      {props.text ? props.text : "Dummy"}
    </Wrapper>
  )
}

export default GradientButton
