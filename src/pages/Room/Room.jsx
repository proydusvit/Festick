import { DefaultPage } from "../../components/DefaultPage/DefaulPage"
import { CardList } from "../../components/Room/RoomList"
import { getRoom } from "../../room"

export default function Room() {
   const room = getRoom()

    return (
        <DefaultPage title="Оренда">
            <CardList users={room}/> 
       </DefaultPage>

    )

}