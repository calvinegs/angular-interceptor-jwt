import { Component } from '@angular/core';
import { GetDataService } from 'src/app/services/get-data.service';

@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrls: ['./get-data.component.scss']
})
export class GetDataComponent {
  data: unknown;

  constructor(private _getData: GetDataService) {}

  getData() {
    this._getData.getData().subscribe( data => {
      this.data = data;
    })
  }
}
