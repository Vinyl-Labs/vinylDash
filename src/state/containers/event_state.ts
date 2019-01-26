import { Maybe } from "ramda-fantasy";
import { IEvent, IEventTracks } from "src/helpers/events";
import { Container } from "unstated";
import db from "../firebase_adapter";

const { Just, Nothing } = Maybe;

interface IEventContext {
  events: Maybe<IEvent[]>;
  selectedEvent: Maybe<IEvent>;
  tracks: Maybe<IEventTracks[]>;
}

class EventContext extends Container<IEventContext> {
  public state = {
    events: Nothing(),
    selectedEvent: Nothing(),
    tracks: Nothing()
  };
  public setEventListener() {
    if (Maybe.isNothing(this.state.events)) {
      db.collection("events").onSnapshot(querySnapshot => {
        const events = [] as any;
        querySnapshot.forEach(doc => {
          const event = doc.data() as IEvent;

          const tracks = this.getTracks(doc.id);
          // tslint:disable-next-line:no-console
          console.log("Tracks", tracks);
          event.eventTracks = Maybe(tracks);
          // tslint:disable-next-line:no-console
          console.log(event);

          events.push(event);
        });
        const data = events;
        // tslint:disable-next-line:no-console
        console.log(data);
        this.setState({ events: Just(data) });
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
    this.setState({
      tracks: Just(tracks)
    });
    return tracks;
  }

  public selectEvent(event: IEvent) {
    this.setState({
      selectedEvent: Just(event)
    });
  }
}

export default EventContext;
export { IEventContext };
