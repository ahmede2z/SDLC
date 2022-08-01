import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataService } from 'src/app/core/services/data.service';
import { InteractionService } from 'src/app/core/services/interaction.service';

@Component({
  selector: 'app-design-form',
  templateUrl: './design-form.component.html',
  styleUrls: ['./design-form.component.css']
})
export class DesignFormComponent implements OnInit {
  visible: boolean = false;
  imageURL: Array<string>;
  designForm: FormGroup;

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
    this._interaction.selectedForm.subscribe(m => {
      if(m == 'D')
        this.visible = true;
      else
        this.visible = false;
    });
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

  onSubmit(){
    console.log(this.designForm.value);
    // console.log(this.designForm);
    if(this.designForm.status == 'VALID'){
      this._data.addProjDesign(this.designForm.value);
      this.closeForm();
      this._interaction.toggleVisible(false);
      this.resetForm();
      this._snackBar.open("Item is added successfully!", "close",{
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
    this._interaction.sendSelectedForm('');
  }
}
