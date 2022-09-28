import { Component, OnInit } from '@angular/core';
import { PrincipalService } from '../../services/principal.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private principalService: PrincipalService) { }

  ngOnInit(): void {
    this.principalService.getUsuarios().subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }

}
