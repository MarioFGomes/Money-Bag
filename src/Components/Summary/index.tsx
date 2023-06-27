import {Container} from './style'
import entradas from '../../assets/entradas.svg'
import saidas from '../../assets/saidas.svg'
import total from '../../assets/total.svg'
export function Summary(){
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={entradas} alt="entradas" />
                </header>
                <strong>kz 100.000,00</strong>
            </div>

            <div>
                <header>
                    <p>Saídas</p>
                    <img src={saidas} alt="saídas" />
                </header>
                <strong>kz -50.000,00</strong>
            </div>

            <div>
                <header>
                    <p>Total</p>
                    <img src={total} alt="total" />
                </header>
                <strong>kz 50.000,00</strong>
            </div>
        </Container>
    )
}