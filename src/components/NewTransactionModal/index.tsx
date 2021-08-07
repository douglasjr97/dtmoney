import Modal from 'react-modal'
import { Container, TransactionTypeContainer, RadioBox } from './styles'
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { useState } from 'react'



interface NewTransactionModalProps{
    isOpen:boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose}: NewTransactionModalProps){
    const [type, setType] = useState('deposit');

    function handleSetTypeDeposit(){}

    return(
        <Modal 
                isOpen={isOpen}
                onRequestClose={onRequestClose}
                overlayClassName="react-modal-overlay"
                className="react-modal-content"
            >

                <RadioBox type="button" onClick={onRequestClose} className="react-modal-close">
                    <img src={closeImg} alt="Fechar modal" />
                </RadioBox>

                <Container>
                <h2>Cadastrar Transacao</h2>
               

                <input 
                placeholder="Titulo" 
                />
                

                 <input 
                 type="number"
                placeholder="Valor" 
                />

                <TransactionTypeContainer>
                    <button
                    type="button"
                    className={type === 'deposit' ? 'active' : ''}
                    onClick={() => { setType('deposit');}}
                    >
                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>

                    </button>

                    <button
                    type="button"
                    onClick={() => { setType('withdraw');}}
                    >
                        <img src={outcomeImg} alt="Saida" />
                        <span>Entrada</span>

                    </button>
                </TransactionTypeContainer>
                
                <input 
                placeholder="Categoria" 
                
                />

                <button type="submit">Cadastrar</button>
                </Container>
            </Modal>
    )
}