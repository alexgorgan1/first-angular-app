import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  templateUrl: 'servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationstatus = 'No server was created';
  serverName = 'Testserver';
  serverCreated = false;
  servers = ['Testserver', 'Tesserve2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    
    }, 2000);
  }
  
  ngOnInit() {
    
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationstatus = 'Server was created! Name is ' + this.serverName;
  }
  onUpdateserverName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;

  }

  

}
