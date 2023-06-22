import { RoadGraph } from "../roads/destinations-graph.js";

//enjoy not having Types and a not-type-safe Language. :)
export class VillageState {
  constructor(place, parcels) {
    this.place = place;
    this.parcels = parcels; //this fuckin confusing thing is actually an Array of "place" and "address" :)
  }

  move(destination) {
    if (!RoadGraph[this.place].includes(destination)) {
      return this;
    } else {
      let parcels = this.parcels
        .map((parcel) => {
          if (parcel.place != this.place) return parcel;
          return { place: destination, address: parcel.address };
        })
        .filter((parcel) => parcel.place != parcel.address);
      return new VillageState(destination, parcels);
    }
  }
}