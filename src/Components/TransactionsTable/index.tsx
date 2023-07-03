import { useContext } from 'react'
import {Container} from './style'
import { useTransiction } from '../../hooks/TransactionContext'


export function TarnsictionTable(){
   const {transactions}=useTransiction();
    
    
    return (
        <Container>
            <table>
                <thead>
                    <tr>

                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>

                    </tr>
                </thead>

                <tbody>
                {transactions.map(transaction =>(
                    <tr key={transaction.id}>
                        <td>{transaction.title}</td>
                        <td className={transaction.type}>
                            {
                                new Intl.NumberFormat('pt-BR',{
                                    style:'currency',
                                    currency:'AKZ'
                                }).format(transaction.valor)
                            }
                        </td>
                        <td>{transaction.categoria}</td>
                        <td>
                            {
                            new Intl.DateTimeFormat('pt-BR').format(
                                new Date(transaction.createdAt)
                            )
                            }
                            </td>
                    </tr>
                ))}

                </tbody>
            </table>
        </Container>

    )
}