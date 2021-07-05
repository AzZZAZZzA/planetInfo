import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {HttpClient} from '@angular/common/http'
import {tap} from 'rxjs/operators'

export interface Planet{
   name:string
   diameter:string
   climate: string 
   population: string
   residents: string[]
 }

export interface Request{
   count: number, 
   next: string,
   previous: any, 
   results: Planet[]
 }
 export interface PopulationUnit{
   name:string
   height:string 
   birth_year:string
 }


@Injectable({providedIn: 'root' })
export class Fetch{
   
   constructor(private http:HttpClient){}
   fetchPlanet(url):Observable<any>{
      return this.http.get(url)
   }
}