import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-coas',
  templateUrl: './list-coas.component.html',
  styleUrls: ['./list-coas.component.scss']
})
export class ListCoasComponent implements OnInit {

  constructor() { }

  coas = [
    new coa(1,'A0001','Aktiva',true,new Date()),
    new coa(2,'P0001','Passiva',true,new Date()),
    new coa(3,'L0001','Laba Rugi',true,new Date()),
    
    /*
    {id:1, kode_coa: 'A0001', nama_coa:'Aktiva'},
    {id:2, kode_coa: 'P0001', nama_coa:'Pasiva'},
    {id:3, kode_coa: 'L0001', nama_coa:'Laba Rugi'},
    */
  ]
  coa = {
    id:1,
    kode_coa: 'A0001',
    nama_coa: 'Aktiva',
  }

  ngOnInit() {
  }

}

export class coa{
  constructor(
    public id: number,
    public kode_coa: string,
    public nama_coa: string,
    public active: boolean,
    public created_date: Date
  ){

  }
}
