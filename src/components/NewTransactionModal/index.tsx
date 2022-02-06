import Modal from 'react-modal';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg'
import { Container, RadioBox, TransactionTypeContainer } from './styles';
import closeImg from '../../assets/close.svg'
import { useState } from 'react';

interface NewTransactionModalProps {

    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
    const [type, setType] = useState('deposit');

    return (
        
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
            >
            <button type="button">
                <img src={closeImg} alt="Fechar modal" onClick={onRequestClose} className="react-modal-close"/>
            </button>
            <Container>
                <h2>Cadastrar Transação</h2>
                <input type="text" placeholder="Título" name="" id="" />
                <input type="number" placeholder="Valor"name="" id="" />
                <TransactionTypeContainer>
                    <RadioBox
                        type="button"
                        onClick={() => {setType('deposit')}}
                        isActive={type === 'deposit'}
                    >
                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>
                    </RadioBox>
                    <RadioBox
                        type="button"
                        onClick={() => {setType('withdraw')}}
                        isActive={type === 'withdraw'}
                    >
                        <img src={outcomeImg} alt="Saída" />
                        <span>Saída</span>
                    </RadioBox>
                </TransactionTypeContainer>
                <input type="text" placeholder="Categoria"name="" id="" />
                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    )
}