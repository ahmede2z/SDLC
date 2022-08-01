import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  // Phase Nav Component Visibility
  private _phasesNavVisibility = new Subject<boolean>();
  phasesNavVisibility = this._phasesNavVisibility.asObservable();

  // Phase Nav forms selection Visibility
  private _selectedForm = new Subject<string>();
  selectedForm = this._selectedForm.asObservable();

  // View Status Visibility
  private _viewStatus = new Subject<boolean>();
  viewStatus = this._viewStatus.asObservable();

  // Phase Update forms selection Visibility
  private _selectedUpdateForm = new Subject<string>();
  selectedUpdateForm = this._selectedUpdateForm.asObservable();

  constructor() { }

  // Phase Nav Component Visibility
  toggleVisible(vis: boolean){
    this._phasesNavVisibility.next(vis);
  }

  // Phase Nav forms selection Visibility
  sendSelectedForm(form: string){
    this._selectedForm.next(form);
  }

  // View Status Visibility
  hideViews(vis: boolean){
    this._viewStatus.next(vis);
  }

  // Phase Nav forms selection Visibility
  sendSelectedUpdateForm(form: string){
    this._selectedUpdateForm.next(form);
  }
}
