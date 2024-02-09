import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonsService } from '../../persons.service';

@Component({
  selector: 'app-details-persons',
  templateUrl: './details-persons.component.html',
  styleUrl: './details-persons.component.css'
})
export class DetailsPersonsComponent {
  persons: any | undefined;
  person: any;
  response: any;

  constructor(private personService: PersonsService, private router: Router) { }

  ngOnInit(): void {
    this.personService.getPersons().subscribe((data: any) => {
      this.persons = data.person.filter((person: any) => person.id == this.router.url.split('/')[2]);
      console.log(data.person)
    });
  }

  deletePerson(id: number) {
    const response = window.confirm(' Tem certeza que deseja excluir? ');
    if (!response) {
      window.alert('Operação cancelada!');
      return;
    }

    this.personService.deletePerson(id).subscribe(res => {
      this.personService.getPersons().subscribe((data: any) => {
        this.persons = data.person;
        this.ngOnInit();
        this.router.navigateByUrl('/')
      });
    });

    this.ngOnInit();
    this.router.navigateByUrl('/');
  }

  calculateIdealWeight(id: number) {
    this.personService.calculateIdealWeight(id).subscribe(res => {
      this.response = res;
      // return this for the view html
      console.log(this.response.peso_ideal);
      return this.response;
    });
  }
}
