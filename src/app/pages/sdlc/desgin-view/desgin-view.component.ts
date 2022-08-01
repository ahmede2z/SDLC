import { Component, OnInit } from '@angular/core';
import { InteractionService } from 'src/app/core/services/interaction.service';
import { DataService } from 'src/app/core/services/data.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-desgin-view',
  templateUrl: './desgin-view.component.html',
  styleUrls: ['./desgin-view.component.css']
})
export class DesginViewComponent implements OnInit {
  visible: boolean = false;
  designData: any = {};
  index: any = {};
  imageURL: Array<string> = [];
  dialogRef?: any;

  constructor(
    private _interaction: InteractionService,
    private _data: DataService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this._data.designData.subscribe(m =>{
      this.designData = m[0];
      this.index = m[1];
      console.log(this.designData);
      
      this.display();
    })
    
    this._interaction.viewStatus.subscribe(m =>{
      this.closeView();
    })
  }

  closeView(){
    this.visible = false;
  }

  display(){
    this._interaction.toggleVisible(false);
    this._interaction.sendSelectedForm('');
    this.readImgURL();
    this.visible = true;
  }

  readImgURL(){
    (this.designData.files).forEach((element: any, index: number) => {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageURL[index] = reader.result as string;
      }
      reader.readAsDataURL(element.fileImg.files[0]);
    });
  }

  deleteItem(index: number): void {
    this.dialogRef = this.dialog.open(DialogComponent, {
      width: '450px'
    });

    this.dialogRef.afterClosed().subscribe((result: any) => {
      if(result){
        this._data.deleteProjDesignData(index);
        this._snackBar.open("Item is deleted successfully!", "close",{
          duration: 2000,
        });
        this.closeView();
      }
    });
  }

  updateItem(data:object, index: number){
    let newData: Array<object> = [];
    newData.push(data);
    newData.push({'index': index});
    this._data.sendProjDesignUpdateData(newData);
    this._interaction.sendSelectedUpdateForm("D");
    this.closeView();
  }

}
