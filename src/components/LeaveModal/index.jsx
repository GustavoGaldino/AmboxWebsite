import React from 'react'

import {Modal} from 'react-bootstrap'

import './styles.css'

import {Link} from 'react-router-dom'

export default function LeaveModal() {

    const [show, setShow] = React.useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <div>

        <button onClick={handleShow} className="leave-btn">
            <span>
                Sair
            </span>
        </button>
  
        <Modal show={show} onHide={handleClose}>
            <div className="modal-div">
                <div className="modal-title-div">
                    <h1>Você tem certeza que deseja sair?</h1>
                </div>
                <div class="first-modal-btn purple-btn modal-btn">
                    <button onClick={handleClose} class="">
                        <span class="modal-btn-text">
                            Não
                        </span>
                    </button>
                </div>
                <div class="second-modal-btn modal-btn">
                    <Link to='/AmboxWebsite/'>
                        <button class="">
                            <span className="modal-btn-text">
                                Sim
                            </span>
                        </button>
                    </Link>
                </div>
            </div>
        </Modal>
      </div>
    );
  }