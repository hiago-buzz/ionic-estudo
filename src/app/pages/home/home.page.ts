import { Component } from '@angular/core';
import { ComponentsService } from './../../services/index';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  dados = {
    cep: ''
  }
  constructor(private components: ComponentsService) { 
    // this.consultarCEP();
  }

  consultarCEP() {
    console.log(this.dados.cep)
  }

}
