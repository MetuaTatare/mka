import { Component, OnInit } from "@angular/core";


@Component({
    selector: 'home-component',
    template: './home.component.html',
    styleUrls: ["home.component.scss"]
})
export class HomeComponent implements OnInit{

    constructor(){}

    ngOnInit(){
        console.log("Welcome to the MKA project...  If you have any feedback, let me know on my github!  :)");
    }
}