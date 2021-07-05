import { Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { Fetch, Planet,PopulationUnit } from '../shared/fetch.service';
import {ModalService} from '../shared/modal.service'

@Component({
  selector: 'app-work-place',
  templateUrl: './work-place.component.html',
  styleUrls: ['./work-place.component.scss']
})



export class WorkPlaceComponent implements OnInit {

  public selectedPlanet:Planet
  public planet
  public planets:Planet
  public population=[]

  public loading: boolean =true
  private url='https://swapi.dev/api/planets'


  constructor(public fetch:Fetch,private modalService:ModalService) { }

ngOnInit(): void {
  
this.fetch.fetchPlanet(this.url).subscribe(data=>{
  this.planets=data.results
  this.loading= false
})
//this.planets= this.request.results
}


async open(){

    for (let iter = 0; iter < this.selectedPlanet.residents.length; iter++) {
      let residentsUrl = this.selectedPlanet.residents[iter];
        await this.fetch.fetchPlanet(residentsUrl)
        //.pipe(map({ name,height,birth_year}) => { name,height,birth_year})
        .subscribe(data=>{
          this.population[iter]=  JSON.stringify(iter+","+data.name+","+data.height+","+data.birth_year+";").replace(/"/g,"")
        })
    }
  if(this.selectedPlanet.residents.length===0){this.population=[]}
  this.modalService.open()
}

}
