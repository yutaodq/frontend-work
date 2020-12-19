import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '@zy/model';

@Component({
  selector: 'zy-vehicle-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})
export class VehicleComponent implements OnInit {
  private url = "http://localhost:8080/users";

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    console.log(`在控制台打印:`);
      // const options = createRequestOption(req);
    return this.http.get<User[]>(this.url).subscribe(data => console.log(data));
  }

}
