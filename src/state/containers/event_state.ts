import { Maybe } from "ramda-fantasy";
import { IEvent } from "src/helpers/events";
import { Container } from "unstated";
import db from "../firebase_adapter";

const { Just, Nothing } = Maybe;

interface IEventState {
  events: Maybe<IEvent[]>;
  selectedEvent: Maybe<IEvent>;
}

class EventContainer extends Container<IEventState> {
  public state = {
    events: Nothing(),
    selectedEvent: Nothing()
  };
  public getEvents() {
    db.collection("events").onSnapshot(querySnapshot => {
      const events = [] as any;
      querySnapshot.forEach((doc: firebase.firestore.QueryDocumentSnapshot) => {
        events.push(doc.data());
      });
      const data = events as IEvent[];
      // tslint:disable-next-line:no-console
      console.log(data);
      this.setState({ events: Just(data) });
    });
  }
}

export default EventContainer;
export { IEventState };
