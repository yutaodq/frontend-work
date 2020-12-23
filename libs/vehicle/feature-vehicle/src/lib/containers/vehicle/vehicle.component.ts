import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VehiclesFaceade } from '@zy/shared/vehicle/data-acces-facade';
import { TranslateService } from "@ngx-translate/core";
@Component({
  selector: 'zy-vehicle-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss'],
})

export class VehicleComponent implements OnInit {
  private url = 'http://localhost:8080/users';
  columnDefs = [
    {
      headerName: "标识",
      field: "id",
      editable:true,
      colId: "square",
      width: 175
    },
    {
      headerName: "车辆名称",
      field: "name",
      editable:true,
      colId: "square",
      width: 175
    }
  ];
  constructor(private http: HttpClient,
              public vehiclesSandbox: VehiclesFaceade,
              private i18n: TranslateService
  ) {}

  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    // const options = createRequestOption(req);
    // return this.http.get<User[]>(this.url).subscribe(data => console.log(data));
  }

}
