import { AlunoService } from './../aluno.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { aluno } from './aluno';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  aluno: aluno[] = [];
  formGroupAluno!: FormGroup;
  isEditing: boolean = false;

  constructor (private AlunoService: AlunoService, private formBuilder: FormBuilder){
    this.formGroupAluno = formBuilder.group({
      id: [''],
      nome: [''],
      responsavel: [''],
      email: [''],
      sala: ['']
    })
  }

  ngOnInit(): void {
    this.loadClients();
  }

  loadClients(){
      this.AlunoService.getAluno().subscribe(
        {
            next:  data =>  this.aluno = data,
            error: msg  => console.log("Erro ao chamar o endpont " + msg)
        }
      )
  }

  Save(){
    
    this.AlunoService.save(this.formGroupAluno.value).subscribe(
      {
        next: data =>{
          this.aluno.push(data);
        }
      }
    )


    this.loadClients();
  }


}



