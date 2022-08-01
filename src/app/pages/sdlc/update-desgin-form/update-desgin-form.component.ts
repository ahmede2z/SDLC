import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataService } from 'src/app/core/services/data.service';
import { InteractionService } from 'src/app/core/services/interaction.service';

@Component({
  selector: 'app-update-desgin-form',
  templateUrl: './update-desgin-form.component.html',
  styleUrls: ['./update-desgin-form.component.css']
})
export class UpdateDesginFormComponent implements OnInit {
  visible: boolean = false;
  imageURL: Array<string>;
  designForm: FormGroup;
  designOldData: any = {};
  index: any = {};

  constructor(private fb: FormBuilder, private _interaction: InteractionService, private _data: DataService,
    private _snackBar: MatSnackBar) { 
    this.designForm = this.fb.group({
      files: this.fb.array([
        this.fb.group({
          fileName: ['', Validators.required],
          fileImg: ['', Validators.required]
        })
      ])
    });

    this.imageURL = [''];
    console.log(this.files);
    
  }

  ngOnInit(): void {
    this._data.designUpdateData.subscribe(m =>{
      this.designOldData = m[0];
      this.index = m[1];
      console.log(this.designOldData);
      console.log(this.index);
      for (let i = 1; i < this.designOldData.files.length; i++) {
        this.addNewDocument();
      }
      this.fillImages();
      this.updateForm();
    })

    this._interaction.selectedUpdateForm.subscribe(m => {
      if(m == 'D'){
        this.display();
      }
      else{
        this.visible = false;
      }
    });
  }

  updateForm(){
    this.designForm.patchValue({
      files: this.designOldData.files
    })
  }

  display(){
    this._interaction.toggleVisible(false);
    this._interaction.sendSelectedForm('');
    this.visible = true;
  }

  get files() {
    return this.designForm.get('files') as FormArray;
  }

  addNewDocument() {
    this.files.push(
      this.fb.group({
        fileName: ['', Validators.required],
        fileImg: ['', Validators.required]
      })
    );

    this.imageURL.push('');
    console.log(this.imageURL);
    
  }
  
  removeDocument(index: number) {
    this.files.removeAt(index);
    this.imageURL.splice(index, 1);
  }

  showPreview(index: number, event: any) {
    const file = event.target.files[0];
    // File Preview
    const reader = new FileReader();
    reader.onload = () => {
      this.imageURL[index] = reader.result as string;
    }
    reader.readAsDataURL(file)
  }

  fillImages(){
    (this.designOldData.files).forEach((element: any, index: number) => {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageURL[index] = reader.result as string;
      }
      reader.readAsDataURL(element.fileImg.files[0]);
    });
  }

  onSubmit(){
    console.log(this.designForm.value);
    // console.log(this.designForm);
    if(this.designForm.status == 'VALID'){
      this._data.UpdateProjDesignData(this.designForm.value, this.index.index);
      this.closeForm();
      this._interaction.toggleVisible(false);
      this.resetForm();
      this._snackBar.open("Item is updated successfully!", "close",{
        duration: 2000,
      });
    }
  }

  resetForm(){
    this.designForm.reset();
    this.files.clear();
    this.imageURL = ['']
    this.addNewDocument();
  }

  closeForm(){
    this._interaction.sendSelectedUpdateForm('');
  }
}
