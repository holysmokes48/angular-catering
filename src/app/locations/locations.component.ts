import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-locations",
  templateUrl: "./locations.component.html",
  styleUrls: ["./locations.component.css"],
})
export class LocationsComponent implements OnInit {
  locationLists = [
    {
      location: "Fishers Place",
      altName: "fishers",
      url: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      street: "123 Fisher St",
      city: "New York, NY 10013",
    },

    {
      location: "Alto Building",
      altName: "alto",
      url: "https://images.unsplash.com/photo-1494145904049-0dca59b4bbad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
      street: "4545 Altovue Square",
      city: "New York, NY 10007",
    },
    {
      location: "Seasons Square",
      altName: "seasons",
      url: "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=410&q=80",
      street: "628 Seasoning St",
      city: "New York, NY 10011",
    },
    {
      location: "Spices Building",
      altName: "spices",
      url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
      street: "345 Spice St",
      city: "New York, NY 10009",
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
