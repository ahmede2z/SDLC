import { Component, OnInit } from '@angular/core';
import { InteractionService } from 'src/app/core/services/interaction.service';
import { DataService } from 'src/app/core/services/data.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-project-init-view',
  templateUrl: './project-init-view.component.html',
  styleUrls: ['./project-init-view.component.css']
})
export class ProjectInitViewComponent implements OnInit {
  visible: boolean = false;
  proInitData: any = {};
  index: any = {};
  dialogRef?: any;

  constructor(
    private _interaction: InteractionService,
    private _data: DataService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this._data.projInitData.subscribe(m =>{
      this.proInitData = m[0];
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
    this.visible = true;
  }

  deleteItem(index: number): void {
    this.dialogRef = this.dialog.open(DialogComponent, {
      width: '450px'
    });

    this.dialogRef.afterClosed().subscribe((result: any) => {
      if(result){
        this._data.deleteProjInitData(index);
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
    this._data.sendProjInitUpdateData(newData);
    this._interaction.sendSelectedUpdateForm("PI");
    this.closeView();
  }

}
