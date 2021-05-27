import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Destino } from 'src/app/models/destino';

@Component({
  selector: 'app-confirmar',
  templateUrl: './confirmar.component.html',
  styleUrls: ['./confirmar.component.css']
})
export class ConfirmarComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<ConfirmarComponent>,
    @Inject(MAT_DIALOG_DATA) public data:Destino
  ) { }

  ngOnInit(): void {
  }

  eliminar(){
    this.dialogRef.close(true)
  }

  cerrar(){
    this.dialogRef.close()
  }

}
