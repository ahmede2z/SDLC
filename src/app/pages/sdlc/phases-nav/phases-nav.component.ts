import { Component, OnInit } from '@angular/core';
import { InteractionService } from 'src/app/core/services/interaction.service';

@Component({
  selector: 'app-phases-nav',
  templateUrl: './phases-nav.component.html',
  styleUrls: ['./phases-nav.component.css']
})
export class PhasesNavComponent implements OnInit {
  visible:boolean = false;
  selectedValue:string = "";
  SDLCs:Array<any> = [
    {viewValue: "Project Initiation Phase", value: "PI"},
    {viewValue: "Requirements Phase", value: "R"},
    {viewValue: "Design Phase", value: "D"},
  ]
  constructor(private _interaction: InteractionService) { }

  ngOnInit(): void {
    this._interaction.phasesNavVisibility.subscribe(
      m => {
        this.visible = m;
      }
    )

    this._interaction.selectedForm.subscribe(
      m => {
        this.selectedValue = m;
      }
    )
  }

  sendFormComp(){
    this._interaction.sendSelectedForm(this.selectedValue);
  }
}
