import { useNavigate } from "react-router-dom";
import logo from '../../assets/logo.svg';
import shootingStar from "../../assets/shooting-star.svg";
import Button from '../Button';
import { HeaderBox, HeaderContainer, Image, Logo, WishWallet } from './styles';

interface IHeaderProps {
  hasAddButton: boolean;
}

function HeaderComponent(props: IHeaderProps) {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <Logo alt="logo klever" src={logo}></Logo>
      <HeaderBox>
        <WishWallet>
          <Image alt="shooting star" src={shootingStar}></Image>
          <h1>Wish Wallet</h1>
        </WishWallet>
        {props.hasAddButton && (
          <Button
            backgroundColor="#AA33B5"
            color="white"
            content="Add Token"
            onClick={() => { navigate('/add-token') }}
          ></Button>
        )}
      </HeaderBox>
    </HeaderContainer>



  );
}

export default HeaderComponent;
