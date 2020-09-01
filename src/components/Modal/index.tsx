import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from 'actionTypes';
import BModal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { AppState } from 'reducers';

interface Props {
  // not needed, remove
  onClose?: Function;
  disableOutsideClick?: boolean;
  closeBtn?: boolean;
  component?: React.FC<any> | React.Component;
}

const selector = (state: AppState) => state.modal;

const Modal: React.FC<Props> = props => {
  const dispatch = useDispatch();
  const { show, data } = useSelector(selector);
  const hideModal = () => {
    if (props.onClose) {
      props.onClose();
    }
    dispatch({ type: actions.HIDE_MODAL });
  };
  React.useEffect(() => hideModal, []);

  return (
    <BModal
      size="sm"
      show={show}
      onHide={hideModal}
      aria-labelledby="contained-modal-title-vcenter"
      centered={data.centered}
      animation
    >
      {data.heading && (
        <BModal.Header closeButton={props.closeBtn}>
          <BModal.Title id="contained-modal-title-vcenter">{data.heading}</BModal.Title>
        </BModal.Header>
      )}

      <BModal.Body>
        {data.component && React.createElement(data.component as any, { ...(data.props || {}) })}
      </BModal.Body>

      <BModal.Footer>
        <Button onClick={hideModal}>Close</Button>
      </BModal.Footer>
    </BModal>
  );
};

Modal.defaultProps = {
  // not needed, remove
  closeBtn: false,
  disableOutsideClick: false,
  onClose: () => {},
};

export default Modal;
