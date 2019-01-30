// tslint:disable:no-console

import { Maybe } from "ramda-fantasy";
import { IEvent, IEventTracks } from "src/helpers/events";
import { Container } from "unstated";
import { db } from "../firebase_adapter";

const { Just, Nothing } = Maybe;

interface IEventState {
  events: Maybe<IEvent[]>;
  selectedEvent: Maybe<IEvent>;
}

class EventState extends Container<IEventState> {
  public state = {
    events: Nothing(),
    selectedEvent: Nothing()
  };

  public setEventListener() {
    if (Maybe.isNothing(this.state.events)) {
      db.collection("events").onSnapshot(querySnapshot => {
        const events = [] as any;
        querySnapshot.forEach(doc => {
          const event = doc.data() as IEvent;

          const tracks = this.getTracks(doc.id);

          event.eventTracks = Maybe(tracks);

          console.log(event);
          events.push(event);
        });
        const data = events;

        console.log("Events: ", data);
        this.setState({ events: Just(data), selectedEvent: Just(data[0]) });
      });
    }
  }

  public getTracks(eventId: string): IEventTracks[] {
    const tracks = [] as IEventTracks[];
    db.collection("events")
      .doc(eventId)
      .collection("songs")
      .onSnapshot(querySnapshot => {
        querySnapshot.forEach(doc => {
          const track = doc.data() as IEventTracks;
          tracks.push(track);
        });
      });
    return tracks;
  }

  public selectEvent(event: IEvent) {
    this.setState({
      selectedEvent: Just(event)
    });
  }
}

export default EventState;
export { IEventState };
