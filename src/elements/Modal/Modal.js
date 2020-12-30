import React, { useEffect } from 'react'
import * as Styled from './Modal.styled'

function Modal({ className, show, onCancel, onConfirm, children }) {
  useEffect(() => {
    if (show) {
      document.body.style = `overflow: hidden;`
    } else {
      document.body.style = `overflow: auto;`
    }
  }, [show])

  if (!show) return null

  return (
    <>
      <Styled.ModalOverlay />
      <Styled.ModalWrapper className={className} tabIndex="-1">
        <Styled.ModalInner tabIndex="0">
          <Styled.ContentWrapper>{children}</Styled.ContentWrapper>
          <Styled.ButtonWrapper>
            <Styled.CloseButton type="button" onClick={onCancel}>
              취소
            </Styled.CloseButton>
            <Styled.SubmitButton type="submit" onClick={onConfirm}>
              확인
            </Styled.SubmitButton>
          </Styled.ButtonWrapper>
        </Styled.ModalInner>
      </Styled.ModalWrapper>
    </>
  )
}

export default Modal
