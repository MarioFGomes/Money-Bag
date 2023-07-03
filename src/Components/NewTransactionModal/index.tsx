import { FormEvent, useContext, useState } from 'react';
import Modal from 'react-modal';
import { Container,TransationTypeContainer,RadioBox } from './style';
import entrada from '../../assets/entradas.svg';
import saida from '../../assets/saidas.svg';
import logo from '../../assets/close.svg';
import {api} from '../../services/api'
import { TransactionContext } from '../../TransactionContext';

Modal.setAppElement('#root');

interface NewTransactionModalProps{
    IsOpen: boolean;
    onRequestClose:() => void;
}
export function NewTransactionModal({IsOpen,onRequestClose}:NewTransactionModalProps){
const {createTransaction}=useContext(TransactionContext)
const [title,setTitle]=useState('');
const [valor,setValor]=useState(0);
const [categoria,setCategoria]=useState('');
const [type, setType]=useState('deposit');

  async function handleNewCreateTransaction(event:FormEvent){
    event.preventDefault()
   
    await createTransaction({
      title,
      valor,
      categoria,
      type
    });

    setTitle('');
    setValor(0);
    setCategoria('');
    setType('deposit');
    onRequestClose();

  }

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
                <Container onSubmit={handleNewCreateTransaction}>
                <h2>Cadastrar Transação</h2>
                <input 
                type="text" 
                placeholder='Title' 
                value={title}
                onChange={event =>setTitle(event.target.value)}
                />

                <input 
                 type="number" 
                 placeholder='Valor'
                 value={valor}
                onChange={event =>setValor(Number(event.target.value))}
                 />

                <TransationTypeContainer>

                  <RadioBox 
                  type='button' 
                  onClick={()=>setType('deposit')}
                  isactive={type === 'deposit'}
                  activecolor='green'
                  >
                    <img src={entrada} alt="entradas" />
                    <span>Entrada</span>
                  </RadioBox>

                  <RadioBox 
                  type='button' 
                  onClick={()=>setType('lifting')}
                  isactive={type === 'lifting'}
                  activecolor='red'
                  >
                  <img src={saida} alt="saida" />
                  <span>Saida</span>
                  </RadioBox>

                </TransationTypeContainer>

                <input 
                type="text"   
                placeholder='Categoria'
                value={categoria}
                onChange={event =>setCategoria(event.target.value)}
                />
                <button type="submit">Cadastrar</button>
                </Container>
        </Modal>
    )
}