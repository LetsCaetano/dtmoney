import Modal from 'react-modal';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg'
import { Container, TransactionTypeContainer } from './styles';
import closeImg from '../../assets/close.svg'

interface NewTransactionModalProps {

    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
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
                    <button
                        type="button" 
                    >
                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>
                    </button>
                    <button
                        type="button" 
                    >
                        <img src={outcomeImg} alt="Saída" />
                        <span>Saída</span>
                    </button>
                </TransactionTypeContainer>
                <input type="text" placeholder="Categoria"name="" id="" />
                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    )
}