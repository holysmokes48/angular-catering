import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-services",
  templateUrl: "./services.component.html",
  styleUrls: ["./services.component.css"],
})
export class ServicesComponent implements OnInit {
  serviceList = [
    {
      url: "https://images.unsplash.com/photo-1480455454781-1af590be2a58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      altName: "onsite",
      caterType: "On-Site Catering",
    },
    {
      url: "https://images.unsplash.com/photo-1576842546422-60562b9242ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=858&q=80",
      altName: "personal",
      caterType: "Personal Catering",
    },
    {
      url: "https://images.unsplash.com/photo-1518619745898-93e765966dcd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2F0ZXJpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
      altName: "corporate",
      caterType: "Corporate Catering",
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
