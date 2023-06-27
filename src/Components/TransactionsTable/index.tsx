import { useEffect } from 'react'
import {Container} from './style'
import {api} from '../../services/api'

export function TarnsictionTable(){
    useEffect(() =>{
        api.get('transactions')
        .then(response => console.log(response.data));
    },[])
    
    
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
                    <tr>
                        <td>Desenvolvimento de Software</td>
                        <td className='deposito'>+20.000,00 kz</td>
                        <td>Desenvolvimento</td>
                        <td>25/06/2023</td>
                    </tr>

                    <tr>
                        <td>Compra de Equipamento</td>
                        <td className='despesa'>-20.000,00 kz</td>
                        <td>Despesas</td>
                        <td>25/06/2023</td>
                    </tr>

                    <tr>
                        <td>Pagamento de Serviços</td>
                        <td className='despesa'>-10.000,00 kz</td>
                        <td>Serviços</td>
                        <td>25/06/2023</td>
                    </tr>

                    <tr>
                        <td>Consultoria</td>
                        <td className='deposito'>+20.000,00 kz</td>
                        <td>diversos</td>
                        <td>25/06/2023</td>
                    </tr>


                </tbody>
            </table>
        </Container>

    )
}