import React, { useCallback, useEffect } from 'react';
import { Modal, ModalHeader, ModalContent, ModalBody, ModalFooter, CloseButton } from './style'

const ModalView = ({ children, title, show, onClose }) => {

	const clickListener = useCallback((e) => {
		if (show) {
			const isModal = e.target.getAttribute('data-id') === 'modal';

			if (isModal) {
				onClose()
			}
		}
	}, [show])

	useEffect(() => {
		if (show) {
			document.addEventListener('click', clickListener);
		} else {
			document.removeEventListener('click', clickListener);
		}
	}, [show]);

	return (
  <Modal show={show} data-id="modal">
    <ModalContent>
      <ModalHeader>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <h2>{title}</h2>
      </ModalHeader>
      <ModalBody>{children}</ModalBody>
      <ModalFooter />
    </ModalContent>
  </Modal>
	)
};

export default ModalView;
