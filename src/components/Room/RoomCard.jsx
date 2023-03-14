import { useLocation } from "react-router-dom";
import { Lin,Btn, Box, CardBox} from "./RoomCard.style";

 const Cards = ({id, price, detalis, img, square, name}) => {
     const location = useLocation();
     

  return (
      <Lin to={`${id}`} state={{ from: location }}>
  <CardBox key={id} >
          <CardBox.Img variant="top" src={img.map((imgs) => (imgs.preview))} alt="foto" height="250px" />
          
              <CardBox.Body>
                  <Box>
              <CardBox.Title style={{color: "rgb(248, 171, 235)" }}>{name} - {price}</CardBox.Title>
        <CardBox.Text>
          {detalis}
                      </CardBox.Text>
                     
                  </Box>
        
              <Btn>Деталі</Btn>
                  
              </CardBox.Body>
             
          </CardBox>
      
    </Lin>
  );
};

export default Cards;