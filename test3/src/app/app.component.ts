import axios from "axios";
import { AxiosInstance } from "axios";

import { Component, OnInit } from '@angular/core';
// import {Module} from 'path-to-source';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test3';


super(){
// axios.get('http://gitlab.angecom.cl/api/v4/user?private_token=QyBQYquP66iNrN8-XSoz')
//    .then(function (response) {
//      // handle success
//      console.log("Entre");
//      console.log(response);
//      console.log("Sali");
//    })
//    .catch(function (error) {
//      // handle error
//
//      console.log(error);
//    })
//    .finally(function () {
//
//      // always executed
//
//    });

  axios.get('http://gitlab.angecom.cl/api/v4/user?private_token=QyBQYquP66iNrN8-XSoz')
       .then(function (response) {
         // handle success
         console.log("Entre 12");
         console.log(response.data);

       })
       .catch(function (error) {
         // handle error
         console.log(error);
       })
       .finally(function () {
         // always executed
       });

   }


 }
