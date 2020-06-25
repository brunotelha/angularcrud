import { HeaderData } from './header-data.model';
import { HeaderComponent } from './header.component';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root' //unica instancia do service
})
export class HeaderService {

  private _headerData = new BehaviorSubject<HeaderData>({

    title: 'Inicio',
    icon: 'home',
    routeUrl:""

  })

  constructor() {}

    get headerData(): HeaderData

    {
      return this._headerData.value;
    }

    set headerData (headerData:HeaderData){
      this._headerData.next(headerData);
    }

  
}
