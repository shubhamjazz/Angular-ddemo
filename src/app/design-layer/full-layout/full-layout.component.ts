import { Component } from '@angular/core';

@Component({
  selector: 'app-full-layout',
  templateUrl: './full-layout.component.html',
  styleUrls: ['./full-layout.component.scss']
})
export class FullLayoutComponent {

  menu: Menu[]=[
    {
      url: 'data-binding-demo',
      name:'Data Binding',
      icon:'fa-home'
    },
    {
      url: 'derective-demo',
      name:'Directive Demo',
      icon:'fa-bar-chart'
    },
    {
      url: 'flex-demo',
      name:'Flex Demo',
      icon:'fa-tasks'
    },
    {
      url: 'material-demo',
      name:'Material Demo',
      icon:'fa-user'
    },
    {
      url: 'pipe-demo',
      name:'Pipes Demo',
      icon:'fa-cog'
    },
    {
      url: 'parent-demo',
      name:'Parent Demo',
      icon:'fa-calendar'
    },
    {
      url: 'observable-demo',
      name:'Observables Demo',
      icon:'fa-tasks'
    },
    {
      url: 'promise-demo',
      name:'Promise Demo',
      icon:'fa-user'
    },
    {
      url: 'service-demo',
      name:'Services Demo',
      icon:'fa-bar-chart'
    },
  ]
}

export class Menu{
  url?:string;
  name?:string;
  icon?:string;
}
