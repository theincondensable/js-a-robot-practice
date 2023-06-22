import { VillageState } from "./village/village-state.js";

let first = new VillageState(
    "Post Office",
    [{place: "Post Office", address: "Alice's House"}]
);

let next = first.move("Alice's House");

console.log(next.place);
console.log(next.parcels);
console.log(first.place);