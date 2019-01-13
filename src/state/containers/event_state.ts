import { Maybe } from "ramda-fantasy";
import { IEvent } from "src/helpers/events";
import { Container } from "unstated";
// import db from "../firebase_adapter";

const { Just, Nothing } = Maybe;

const allEvents = [{ title: "The AC", venue: "Vinyl Labs", date: "12/22" }];

interface IEventState {
  events: Maybe<IEvent[]>;
  selectedEvent: Maybe<IEvent>;
}

class EventContainer extends Container<IEventState> {
  public state = {
    events: Just(allEvents),
    selectedEvent: Nothing()
  };

  // private getEvents = db.collection("cities").onSnapshot(querySnapshot => {
  //   const events = [] as firebase.firestore.DocumentData;
  //   querySnapshot.forEach((doc: firebase.firestore.QueryDocumentSnapshot) => {
  //     events.push(doc.data());
  //   });
  //   // tslint:disable-next-line:no-console
  //   const data = events as IEvent[];
  //   return data;
  // });
}

export default EventContainer;
export { IEventState };
