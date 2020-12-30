import styled from 'styled-components'

export const ModalWrapper = styled.div`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  outline: 0;
`

export const ModalOverlay = styled.div`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`

export const ModalInner = styled.div`
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  border-radius: 5px;
  width: 100%;
  max-width: 300px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
`

export const ContentWrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  flex-direction: row;
`

export const CloseButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  flex: 1;
  border-top: 1px solid lightgray;
  border-right: 1px solid lightgray;
`

export const SubmitButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  flex: 1;
  border-top: 1px solid lightgray;
`
