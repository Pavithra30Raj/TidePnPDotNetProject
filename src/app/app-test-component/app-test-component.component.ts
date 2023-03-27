import { Component } from '@angular/core';
import {TestServiceService} from '../test-service.service';
//import { Observable } from 'rxjs';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-app-test-component',
  templateUrl: './app-test-component.component.html',
  styleUrls: ['./app-test-component.component.css']
})

export class AppTestComponentComponent implements OnInit{
  title: any = "test";
  response: any;
  constructor(private testService: TestServiceService) { } 
  ngOnInit() { 
    this.test();
     //this.title = "Tide Angular";
    //  this.testService.getEmployees().subscribe((data) => {
    //   //this.title = data as unknown as string;
    // }, (error) => {
    //   this.title = error;
    // })

    // this.testService.getEmployees()
    //     .subscribe(response => 
    //       this.title = response;
    //     });
}
 
test(){
  this.title = "Tide Angular";
     this.testService.getEmployees().subscribe( {
      next: (v) => this.title = v,
      error: (e) => console.error(e),
      complete: () => console.info('complete') 
})
}
}
