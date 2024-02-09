import { Component } from '@angular/core';
import { PersonsService } from '../../persons.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-add-person',
    templateUrl: './add-person.component.html',
    styleUrl: './add-person.component.css'
})
export class AddPersonComponent {
    constructor(private personService: PersonsService, private router: Router) { }
    data: any

    form = new FormGroup({
        nome: new FormControl('', Validators.required),
        data_nasc: new FormControl('', Validators.required),
        cpf: new FormControl('', Validators.required),
        sexo: new FormControl('', Validators.required),
        altura: new FormControl('', Validators.required),
        peso: new FormControl('', Validators.required),
    })

    addPerson() {
        this.data = this.form.value
        this.personService.addPerson(this.data).subscribe(data => {
            console.log('Person added!')
            this.router.navigateByUrl('/')
        })
    }
}
