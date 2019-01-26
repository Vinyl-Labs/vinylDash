import { Maybe } from "ramda-fantasy";

interface IEvent {
  title: string;
  venue: string;
  date: string;
  id: string;
  uId: string;
  eventTracks: Maybe<IEventTracks[]>;
}

interface IEventTracks {
  id: string;
  artist: string;
  title: string;
  artwork: string;
  genre: IGenre;
  mood: IMood;
  tempo: string;
  timestamp: Date;
}

interface IGenre {
  genre_1: string;
  genre_2: string;
}

interface IMood {
  mood_1: string;
  mood_2: string;
}

export { IEvent, IEventTracks };
