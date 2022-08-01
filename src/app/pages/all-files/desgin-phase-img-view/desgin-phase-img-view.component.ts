import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';
import { InteractionService } from 'src/app/core/services/interaction.service';

@Component({
  selector: 'app-desgin-phase-img-view',
  templateUrl: './desgin-phase-img-view.component.html',
  styleUrls: ['./desgin-phase-img-view.component.css']
})
export class DesginPhaseImgViewComponent implements OnInit {
  visible: boolean = false;
  designData: any = {};
  imageURL: string = '';

  constructor(private _interaction: InteractionService, private _data: DataService) { }

  ngOnInit(): void {
    this._data.designImgData.subscribe(m =>{
      this.designData = m;
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
    reader.readAsDataURL(this.designData.fileImg.files[0])
  }

  closeView(){
    this.visible = false;
  }
}
