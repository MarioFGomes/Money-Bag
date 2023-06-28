import { useState } from 'react';
import Modal from 'react-modal';
import { Container } from './style';
import logo from '../../assets/close.svg'

Modal.setAppElement('#root');

interface NewTransactionModalProps{
    IsOpen: boolean;
    onRequestClose:() => void;
}
export function NewTransactionModal({IsOpen,onRequestClose}:NewTransactionModalProps){


    return (
        <Modal 
            isOpen={IsOpen }
            onRequestClose={onRequestClose}
            overlayClassName='react-modal-overlay'
            className='react-modal-content'
            >
                <button type='button' onClick={onRequestClose} className='react-modal-close'>
                    <img src={logo} alt="Fechar Modal" />
                </button>
                <Container>
                <h2>Cadastrar Transação</h2>
                <input type="text" name="" id="" placeholder='Title' />
                <input type="number" name="" id="" placeholder='Valor'/>
                <input type="text" name="" id=""  placeholder='Categoria'/>
                <button type="submit">Cadastrar</button>
                </Container>
        </Modal>
    )
}