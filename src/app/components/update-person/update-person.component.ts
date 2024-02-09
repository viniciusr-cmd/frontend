import { Component } from '@angular/core';
import { PersonsService } from '../../persons.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-person',
  templateUrl: './update-person.component.html',
  styleUrl: './update-person.component.css'
})
export class UpdatePersonComponent {
  persons: any
  data: any

  constructor(private personService: PersonsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id']

    this.personService.getPersonById(id).subscribe(data => {
      this.persons = data
      console.log(data)
    })
  }

  form = new FormGroup({
    nome: new FormControl('', Validators.required),
    data_nasc: new FormControl('', Validators.required),
    cpf: new FormControl('', Validators.required),
    sexo: new FormControl('', Validators.required),
    altura: new FormControl('', Validators.required),
    peso: new FormControl('', Validators.required),
  })

  submit() {
    this.data = this.form.value
    this.persons.nome = this.data.nome
    this.persons.data_nasc = this.data.data_nasc
    this.persons.cpf = this.data.cpf
    this.persons.sexo = this.data.sexo
    this.persons.altura = this.data.altura
    this.persons.peso = this.data.peso
    
    this.personService.updatePerson(this.persons?.id, this.data).subscribe(data => {
      console.log('Person updated!')
      this.router.navigateByUrl('/')
      console.log(data)
    })

    this.router.navigateByUrl('/')
  }
}
