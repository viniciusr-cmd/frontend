import { Component } from '@angular/core';
import { PersonsService } from '../../persons.service';
import { Router } from '@angular/router';
import Person from '../../Person';

@Component({
  selector: 'app-view-persons',
  templateUrl: './view-persons.component.html',
  styleUrl: './view-persons.component.css'
})
export class ViewPersonsComponent {
  persons: any | undefined;
  data: any;
  form: any;

  constructor(private personService: PersonsService, private router: Router) { }

  ngOnInit(): void {
    this.personService.getPersons().subscribe((data: any) => {
      this.persons = data.person;
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

    this.router.navigateByUrl('/');
    this.ngOnInit();
  }

  filterResults(text: string) {
    this.personService.getPersons().subscribe((data: any) => {
      this.persons = data.person.filter((person: any) => person.nome.toLowerCase().includes(text.toLowerCase()));
      console.log(data.person)
    });
  }
}

