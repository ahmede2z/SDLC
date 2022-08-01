import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';
import { InteractionService } from 'src/app/core/services/interaction.service';

@Component({
  selector: 'app-req-phase-img-view',
  templateUrl: './req-phase-img-view.component.html',
  styleUrls: ['./req-phase-img-view.component.css']
})
export class ReqPhaseImgViewComponent implements OnInit {
  visible: boolean = false;
  reqData: any = {};
  imageURL: string = '';

  constructor(private _interaction: InteractionService, private _data: DataService) { }

  ngOnInit(): void {
    this._data.requirementsImgData.subscribe(m =>{
      this.reqData = m;
      this.display();
    })

    this._interaction.viewStatus.subscribe(m =>{
      this.visible = false;
    })
  }

  display(){
    this.readImgURL();
    this.visible = true;
  }

  readImgURL(){
    const reader = new FileReader();
    reader.onload = () => {
      this.imageURL = reader.result as string;
    }
    reader.readAsDataURL(this.reqData.useCase.files[0])
  }

  closeView(){
    this.visible = false;
  }
}
