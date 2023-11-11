// import React from 'react';
// import { useModal } from '../../context/Modal';

// function OpenModalButton({
//   modalComponent, // component to render inside the modal
//   buttonText, // text of the button that opens the modal
//   onButtonClick, // optional: callback function that will be called once the button that opens the modal is clicked
//   onModalClose,
//   className,
//   style, // optional: callback function that will be called once the modal is closed
// }) {
//   const { setModalContent, setOnModalClose } = useModal();

//   const onClick = () => {
//     if (onModalClose) setOnModalClose(onModalClose);
//     setModalContent(modalComponent);
//     if (onButtonClick) onButtonClick();
//   };

//   return (
//     <button id='button' className={`menu-text ${className}`} style={style} onClick={onClick}>{buttonText}</button>
//   );
// }

// export default OpenModalButton;


import React from 'react';
import { useModal } from '../../context/Modal';

function OpenModalButton({
  modalComponent,
  buttonText,
  onButtonClick,
  onModalClose,
  className,
  style,
  isEditPostModalOpen, // new prop indicating whether the EditPost modal is open
}) {
  const { setModalContent, setOnModalClose } = useModal();

  const onClick = () => {
    if (onModalClose) setOnModalClose(onModalClose);
    setModalContent(modalComponent);
    if (onButtonClick) onButtonClick();
  };

  return (
    <button
      id='button'
      className={`menu-text ${className}`}
      style={style}
      onClick={onClick}
      disabled={isEditPostModalOpen} // disable the button when EditPost modal is open
    >
      {buttonText}
    </button>
  );
}

export default OpenModalButton;











// import React from 'react';
// import { useModal } from '../../context/Modal';

// function OpenModalButton({
//   modalComponent, // component to render inside the modal
//   buttonText, // text of the button that opens the modal
//   onButtonClick, // optional: callback function that will be called once the button that opens the modal is clicked
//   setOnButtonClick,
//   onModalClose,
//   className,
//   style // optional: callback function that will be called once the modal is closed
// }) {
//   const { setModalContent, setOnModalClose } = useModal();

//   const onClick = () => {
//     if (onModalClose) setOnModalClose(onModalClose);
//     setModalContent(modalComponent);
//     if (onButtonClick) onButtonClick();
//   };

//   return (
//     <button id='button' className={`menu-text ${className}`} style={style} onClick={onClick}>{buttonText}</button>
//   );
// }

// export default OpenModalButton;
