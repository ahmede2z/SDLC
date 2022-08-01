import { Component, OnInit } from '@angular/core';
import { InteractionService } from 'src/app/core/services/interaction.service';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-navigate',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.css']
})
export class NavigateComponent implements OnInit {
  projectReqData: Array<any> = [];
  projectDesignData: Array<any> = [];

  constructor(private _interaction: InteractionService, private _data: DataService) { }

  ngOnInit(): void {
    this.projectReqData = this._data.ProjReqData;
    this.projectDesignData = this._data.ProjDesignData;

    this._data.requirements.subscribe(m => {
      this.projectReqData = m;
    });

    this._data.design.subscribe(m => {
      this.projectDesignData = m;
    });
  }

  sendReqData(data: object){
    this._interaction.hideViews(true);
    this._data.sendReqImgData(data);
  }

  sendDesignData(data: object){
    this._interaction.hideViews(true);
    this._data.sendDesignImgData(data);
  }

}
