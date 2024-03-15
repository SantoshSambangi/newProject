import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./styles.module.css";

const Modal = (props) => {
  const {
    isOpen,
    onClose = () => {},
    customModalContentStyles,
    customModalContainerStyles,
    children,
  } = props;

  return (
    <>
      {isOpen && (
        <div
          //   className={classNames(
          //     styles.modalContainerStyles,
          //     customModalContainerStyles
          //   )}
          className={[
            styles.modalContainerStyles,
            customModalContainerStyles,
          ].join(" ")}
        >
          <div
            // className={classNames(
            //   styles.modalContentStyles,
            //   customModalContentStyles
            // )}
            className={[
              styles.modalContentStyles,
              customModalContentStyles,
            ].join(" ")}
            onClick={onClose}
          >
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
//interfaces
Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
};
