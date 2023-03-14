import { UserCardList, Container } from "./RoomList.styled";
import Cards from "./RoomCard";

export const CardList = ({ users }) => {
  return (
    <Container>
      <UserCardList>
        {users.map(({ id, price, detalis, img, square, name}) => (
          <Cards
                id={id}
                name={name}
                square={square}
            price={price}
            detalis={detalis}
            img={img}
          />
        ))}
         
      </UserCardList>
    </Container>
  );
};