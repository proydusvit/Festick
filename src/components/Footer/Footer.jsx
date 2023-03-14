import {
    Logo, Item, Footer, FooterBox, SocialBox,
    SocialTitle, ListSocial, LinkTel, ListFot,
    ItemFot, LinkFoot, Div
} from "../../components/Footer/FooterStyled"
import Container from 'react-bootstrap/Container';
import {ReactComponent as InstLogo} from "../../images/svg/inst.svg"
import {ReactComponent as FaceLogo} from "../../images/svg/facebook.svg"
import {ReactComponent as TelegaLogo} from "../../images/svg/telega.svg"
import { ReactComponent as TikLogo } from "../../images/svg/tiktok.svg"
import { ReactComponent as FestikLogo } from "../../images/svg/festik.svg"
const FooterM = () => {

            return (
          
          <Footer>
     <Container fluid>
       <FooterBox>
        
            <Div>
            <Logo> <FestikLogo/></Logo>
            <SocialBox>
               <SocialTitle>Наші соціальні мережі</SocialTitle>
          <ListSocial>
             <Item> <LinkTel href="https://www.instagram.com/festi.top/">  <InstLogo/></LinkTel> </Item>
               <Item> <LinkTel href="https://www.facebook.com/profile.php?id=100088114441559"> <FaceLogo/> </LinkTel> </Item>
               <Item> <LinkTel href="https://t.me/+nruRcX6zBzc1NmIy"> <TelegaLogo/></LinkTel> </Item>
                 <Item> <LinkTel href="https://www.tiktok.com/@festi.top"> <TikLogo/></LinkTel> </Item>
              
              </ListSocial>
              </SocialBox>
              </Div> 
        
       
             <div>
            <ListFot>
                <ItemFot><LinkFoot href="https://goo.gl/maps/mXdp6HvCmMjoRVFL8">Київ, проспект Червоної Калини, 43/2, 3-й поверх</LinkFoot></ItemFot>
                  <ItemFot><LinkFoot href="tel:+380968264130"> +380 96 826 41 30	</LinkFoot></ItemFot>
            <ItemFot><LinkFoot href="mailto:festivalnyy@gmail.com">festivalnyy@gmail.com</LinkFoot></ItemFot>
          
            </ListFot>
            </div>
            </FooterBox>
 </Container>
        </Footer>
   )

}
export default FooterM;