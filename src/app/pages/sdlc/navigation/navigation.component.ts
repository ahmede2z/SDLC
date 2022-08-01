import { InteractionService } from 'src/app/core/services/interaction.service';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  dialogRef?: any;
  projectInitData: Array<any> = [];
  projectReqData: Array<any> = [];
  projectDesignData: Array<any> = [];

  constructor(
    private _interaction: InteractionService,
    private _data: DataService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.projectInitData = this._data.ProInitData;
    this.projectReqData = this._data.ProjReqData;
    this.projectDesignData = this._data.ProjDesignData;

    this._data.projInit.subscribe(m => {
      this.projectInitData = m;
    });

    this._data.requirements.subscribe(m => {
      this.projectReqData = m;
    });

    this._data.design.subscribe(m => {
      this.projectDesignData = m;
    });
  }

  setPhasesVisible(){
    this._interaction.hideViews(true);
    this._interaction.toggleVisible(true);
  }

  sendInitData(data: object, index: number){
    let newData: Array<object> = [];
    newData.push(data);
    newData.push({'index': index});
    this._interaction.hideViews(true);
    this._data.sendProjInitData(newData);
  }

  sendReqData(data: object, index: number){
    let newData: Array<object> = [];
    newData.push(data);
    newData.push({'index': index});
    this._interaction.hideViews(true);
    this._data.sendProjReqData(newData);
  }

  sendDesignData(data: object, index: number){
    let newData: Array<object> = [];
    newData.push(data);
    newData.push({'index': index});
    this._interaction.hideViews(true);
    this._data.sendProjDesignData(newData);
  }

  deleteItem(form: number, index: number): void {
    this.dialogRef = this.dialog.open(DialogComponent, {
      width: '450px'
    });

    this.dialogRef.afterClosed().subscribe((result: any) => {
      if(result){
        switch(form){
          case 1:
            this._data.deleteProjInitData(index);
            this._snackBar.open("Item is deleted successfully!", "close",{
              duration: 2000,
            });
            break;
          case 2:
            this._data.deleteProjReqData(index);
            this._snackBar.open("Item is deleted successfully!", "close",{
              duration: 2000,
            });
            break;
          case 3:
            this._data.deleteProjDesignData(index);
            this._snackBar.open("Item is deleted successfully!", "close",{
              duration: 2000,
            });
            break;
          default:
        }
      }
    });
  }

  
}
