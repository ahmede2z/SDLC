import { Component, OnInit } from '@angular/core';
import { InteractionService } from 'src/app/core/services/interaction.service';
import { DataService } from 'src/app/core/services/data.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-requiremet-view',
  templateUrl: './requiremet-view.component.html',
  styleUrls: ['./requiremet-view.component.css']
})
export class RequiremetViewComponent implements OnInit {
  visible: boolean = false;
  ReqData: any = {};
  index: any = {};
  imageURL: string = '';
  dialogRef?: any;

  constructor(
    private _interaction: InteractionService,
    private _data: DataService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this._data.requirementsData.subscribe(m =>{
      this.ReqData = m[0];
      this.index = m[1];
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
    const reader = new FileReader();
    reader.onload = () => {
      this.imageURL = reader.result as string;
    }
    reader.readAsDataURL(this.ReqData.useCase.files[0])
  }

  deleteItem(index: number): void {
    this.dialogRef = this.dialog.open(DialogComponent, {
      width: '450px'
    });

    this.dialogRef.afterClosed().subscribe((result: any) => {
      if(result){
        this._data.deleteProjReqData(index);
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
    this._data.sendProjReqUpdateData(newData);
    this._interaction.sendSelectedUpdateForm("R");
    this.closeView();
  }
}
