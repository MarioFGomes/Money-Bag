import {Container} from './style'
import entradas from '../../assets/entradas.svg'
import saidas from '../../assets/saidas.svg'
import total from '../../assets/total.svg'
import { useContext } from 'react'
import {useTransiction} from '../../hooks/TransactionContext'

export function Summary(){

    const {transactions}=useTransiction();

    const summary=transactions.reduce((acc,transaction)=>{
        if(transaction.type==='deposit'){
            acc.deposito+=transaction.valor;
            acc.total+=transaction.valor;
        }else{
            acc.saques+=transaction.valor;
            acc.total-=transaction.valor;
        }
        return acc;
    },{
        deposito:0,
        saques:0,
        total:0
    })

    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={entradas} alt="entradas" />
                </header>
                <strong>
                {
                    new Intl.NumberFormat('pt-BR',{
                        style:'currency',
                        currency:'AKZ'
                    }).format(summary.deposito)
                }
                </strong>
            </div>

            <div>
                <header>
                    <p>Saídas</p>
                    <img src={saidas} alt="saídas" />
                </header>
                <strong>-
                {
                    new Intl.NumberFormat('pt-BR',{
                        style:'currency',
                        currency:'AKZ'
                    }).format(summary.saques)
                }
                </strong>
            </div>

            <div>
                <header>
                    <p>Total</p>
                    <img src={total} alt="total" />
                </header>
                <strong>
                {
                    new Intl.NumberFormat('pt-BR',{
                        style:'currency',
                        currency:'AKZ'
                    }).format(summary.total)
                }
                </strong>
            </div>
        </Container>
    )
}