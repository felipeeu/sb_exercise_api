import { contactFilters } from "./contact";
const db = [
  {
    _id: "625d2a35623ed67495c8a107",
    picture: "image2.png",
    birthday: "2020-12-23T02:44:26 +03:00",
    name: "Erickson Bender",
    address: "193 Corbin Place, Vernon, Georgia, 7128",
    phone_number: "(053) 1504337",
  },
  {
    _id: "625d2a35ddbfa96796d99439",
    picture: "image1.png",
    birthday: "1964-06-21T11:03:17 +03:00",
    name: "Cleveland Cross",
    address: "684 Belvidere Street, Shelby, Puerto Rico, 2685",
    phone_number: "(052) 6258302",
  },
  {
    _id: "625d2a3581bdecee18513909",
    picture: "image4.png",
    birthday: "2021-03-17T01:46:04 +03:00",
    name: "Mann Shepard",
    address: "174 Hastings Street, Bergoo, Texas, 1648",
    phone_number: "(053) 7779674",
  },
  {
    _id: "625d2a351220e20b62e03cf6",
    picture: "image10.png",
    birthday: "1954-09-11T03:05:59 +03:00",
    name: "Lynnette Strong",
    address: "438 Bushwick Place, Williston, Arkansas, 2562",
    phone_number: "(053) 6769568",
  },
  {
    _id: "625d2a35d7537d4670b1ff06",
    picture: "image7.png",
    birthday: "1937-05-25T02:44:00 +03:00",
    name: "Melody Booker",
    address: "419 Linden Boulevard, Fresno, Michigan, 5602",
    phone_number: "(054) 2982820",
  },
  {
    _id: "625d2a35a19955981812329e",
    picture: "image10.png",
    birthday: "1959-07-25T01:27:11 +03:00",
    name: "Eula Dominguez",
    address: "980 Williams Court, Ogema, Nebraska, 3031",
    phone_number: "(054) 9194510",
  },
];

test("Testing filters", () => {
  expect(contactFilters(db, "68")).toStrictEqual([
    {
      _id: "625d2a351220e20b62e03cf6",
      picture: "image10.png",
      birthday: "1954-09-11T03:05:59 +03:00",
      name: "Lynnette Strong",
      address: "438 Bushwick Place, Williston, Arkansas, 2562",
      phone_number: "(053) 6769568",
    },
  ]);
});
