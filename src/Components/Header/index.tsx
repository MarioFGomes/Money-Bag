
import logo from '../../assets/wallet2.svg'
import{Container,Content} from './style'

interface HeaderProps{
    OnopenTransictionModal:()=>void;
}
export function Header({OnopenTransictionModal}:HeaderProps){
   
    return (
        <Container>
            <Content>
            <img src={logo} alt="money bag" />
            <span>Wallet Money</span>
            <button type="button" onClick={OnopenTransictionModal}>Nova Transação</button>
            </Content>
        </Container>
    )
}