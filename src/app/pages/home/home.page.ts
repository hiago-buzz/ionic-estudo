import { Component } from '@angular/core';
import { ComponentsService } from './../../services/index';
import { Http } from '@angular/http';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  
  dados = {
    nome: ""
  };
   
  baseURL: string = `https://swapi.co/api/people/?search=`;

  public personagens: Array<any>;
  public loading = '../../../assets/giphy.gif';

  constructor( public components: ComponentsService, public http: Http) {
    
  }

  buscarPersonagem () {
    this.components.openLoading();
    this.http.get(this.baseURL + `${this.dados.nome}&format=json`).subscribe(
      data => {
        const obj = (data as any);
        const obj_json = JSON.parse(obj._body);
        if(obj_json.results == ""){
          this.components.closeLoading();
          alert('Personagem Não encontrado!')
          this.personagens = obj_json.results;
        }
        else{
          this.components.closeLoading();
          this.personagens = obj_json.results;
        }
        
      }, error => {
        console.error(error)
      }
      
    )
  }

}
