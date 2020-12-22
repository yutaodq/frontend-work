import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VehiclesFaceade } from '@zy/shared/vehicle/data-acces-facade';

@Component({
  selector: 'zy-vehicle-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss'],
})
export class VehicleComponent implements OnInit {
  private url = 'http://localhost:8080/users';

  constructor(private http: HttpClient, public vehiclesSandbox: VehiclesFaceade) {}

  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    // const options = createRequestOption(req);
    // return this.http.get<User[]>(this.url).subscribe(data => console.log(data));
  }

}
