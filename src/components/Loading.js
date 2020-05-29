import React from "react"
import styled from "styled-components"

const LoadingWrapper = styled.div`
  background: #fafafa;
  justify-content: center;
  display: flex;
  position: absolute;
  top: 0;
  left: inherit;
  left: 0;
  right: 0;
  border: 0;
  height: 100%;
  z-index: 999;
  align-items: center;
  @keyframes ripple {
    0% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: 0px;
      left: 0px;
      width: 72px;
      height: 72px;
      opacity: 0;
    }
  }
  .ripple {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
    div {
      position: absolute;
      border: 4px solid #000;
      opacity: 1;
      border-radius: 50%;
      animation: ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
      &:nth-child(2) {
        animation-delay: -0.5s;
      }
    }
  }
`

const Loading = () => {
  return (
    <LoadingWrapper>
      <div className="ripple">
        <div></div>
        <div></div>
      </div>
    </LoadingWrapper>
  )
}

export default Loading
