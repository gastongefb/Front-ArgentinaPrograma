import { PersonaService } from './../../service/persona.service';
import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
persona: persona = new persona("","","");

constructor(public PersonaService: PersonaService){}

ngOnInit(): void {
  this.PersonaService.getPersona().subscribe(data => {this.persona=data})

}
}
