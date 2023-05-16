import { aluno } from './form/aluno';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  url = "http://localhost:3000/aluno";
  constructor(private http: HttpClient) { }


  getAluno(): Observable<aluno[]> {

      return this.http.get<aluno[]>(this.url);
  }

  save(newaluno:aluno): Observable<aluno>{
    return this.http.post<aluno>(this.url, newaluno);
  }

  remove(aluno:aluno): Observable<void>{
   // return this.http.delete<void>(`${this.url}/${client.id}`);
    return this.http.delete<void>(this.url + "/" + aluno.id);

  }

  update(aluno:aluno): Observable<aluno>{
    // return this.http.delete<void>(`${this.url}/${client.id}`);
     return this.http.put<aluno>(`${this.url}/${aluno.id}`, aluno);

   }
}
