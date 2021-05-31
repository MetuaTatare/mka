import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-root',
    template: `<home-component> My first home component </home-component>`,
    styles: [`
        .home {
            height: 100px
        }
    `]
})

export class AppNameMainComponent implements OnInit {
    ngOnInit(){
        console.log("Just another quick hello from the main application..........")
    }
}