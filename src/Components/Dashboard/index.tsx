import {Container} from './style'
import {Summary} from '../Summary'
import {TarnsictionTable} from'../TransactionsTable'
export function Dashboard(){
    return (
        <Container>
            <Summary/>
            <TarnsictionTable />
        </Container>
    )
}