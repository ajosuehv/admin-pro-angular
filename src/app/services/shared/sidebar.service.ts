import { Injectable } from '@angular/core';

@Injectable()
export class SidebarService {

  menu: any = [
    {
      title: 'Main',
      icon: 'mdi mdi-gauge',
      submenu: [
        {
          title: 'Dashboard',
          url: '/dashboard'
        },
        {
          title: 'Progress',
          url: '/progress'
        },
        {
          title: 'Graph',
          url: '/graph1'
        },
        {
          title: 'Promises',
          url: '/promises'
        },
        {
          title: 'RxJs',
          url: '/rxjs'
        }
      ],
    }
  ];

  constructor() { }

}
