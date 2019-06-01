import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-coas',
  templateUrl: './list-coas.component.html',
  styleUrls: ['./list-coas.component.scss']
})
export class ListCoasComponent implements OnInit {

  constructor() { }

  coas = [
    {id:1, kode_coa: 'A0001', nama_coa:'Aktiva'},
    {id:2, kode_coa: 'P0001', nama_coa:'Pasiva'},
    {id:3, kode_coa: 'L0001', nama_coa:'Laba Rugi'},
    
  ]
  coa = {
    id:1,
    kode_coa: 'A0001',
    nama_coa: 'Aktiva',
  }

  ngOnInit() {
  }

}
