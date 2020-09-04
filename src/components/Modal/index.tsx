import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { mergeRight } from 'ramda';
import { ModalPayload } from 'interface';
import * as actions from 'actionTypes';
import BModal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { AppState } from 'reducers';

const defaultData: ModalPayload = {
  centered: false,
  closeBtn: false,
  disableOutsideClick: true,
};

const selector = (state: AppState) => state.modal;

const Modal: React.FC = () => {
  const dispatch = useDispatch();
  let { show, data } = useSelector(selector);
  data = mergeRight(defaultData, data);

  const hideModal = () => {
    if (data.onClose) {
      data.onClose();
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
      backdrop={data.disableOutsideClick ? 'static' : undefined}
      animation
    >
      {data.heading && (
        <BModal.Header closeButton={data.closeBtn}>
          <BModal.Title id="contained-modal-title-vcenter">{data.heading}</BModal.Title>
        </BModal.Header>
      )}

      <BModal.Body>
        {data.component && React.createElement(data.component, { ...(data.props || {}) })}
      </BModal.Body>

      <BModal.Footer>
        <Button onClick={hideModal}>Close</Button>
      </BModal.Footer>
    </BModal>
  );
};

export default Modal;
