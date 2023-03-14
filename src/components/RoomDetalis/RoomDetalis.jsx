import { useParams,  useLocation} from "react-router-dom";
import {Carousel} from 'react-bootstrap';
import { Img,  TitleDetalis } from "./RoomDet.style";
import { getRoomById } from '../../room';
import {LinkFoot} from "../../components/Footer/FooterStyled"
import CallIcon from '@mui/icons-material/Call';
import {blueGrey } from '@mui/material/colors';

function RoomDetalis() {
     const primary = blueGrey[50] ; 
    const { id } = useParams();
  const room = getRoomById(id);

     return (
         <>
             
             <h2> {room.name} </h2> 

    <Carousel>
      <Carousel.Item>
        <Img 
          
          src={room.img.map((foto) => foto.original)}
                  alt="First slide"
                   width={"100%"}
           
        />
        <Carousel.Caption>
                  <h3>{room.price}</h3>
          <h3>{room.square}</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Img 
         
          src={room.img.map((foto) => foto.preview)}
                  alt="Second slide"
                   width={"100%"}
          
        />

        <Carousel.Caption>
          <h3>{room.price}</h3>
          <h3>{room.square}</h3>
        </Carousel.Caption>
      </Carousel.Item>
             </Carousel>
              <TitleDetalis> {room.detalisTwo} </TitleDetalis>

                <LinkFoot href="tel:+380968264130">  <div style={{
              
        padding: "12px 16px",
        borderRadius: 4,
        backgroundColor: "rgb(248, 171, 235)",
                color: "white",
                textAlign: "center",
                justifyContent:"center",
                marginRight: "auto",
                marginLeft: "auto",
                marginBottom: 30,
                marginTop:30,
       width: 270,
      }}>
Забронювати зараз<CallIcon sx={{ color: primary }} />
           </div></LinkFoot>
  </>
  );
};

export default RoomDetalis;