import { Component, OnInit } from '@angular/core';
import articulo from 'src/assets/json/articulos.json';
import contacto from 'src/assets/json/info-contacto.json';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.scss']
})
export class ArticuloComponent implements OnInit {

  //Info de contacto
  contactos: any = contacto;
  public ubicacionDir: string = "";
  public ubicacionCity: string = "";
  public correoElectronico: string = "";
  public sitioWeb: string = "";
  public redInst: string = "";
  public redLink: string = "";
  public correspondenciaDir: string = "";
  public correspondenciaCity: string = "";
  public telefonoFijo: string = "";
  public telefonoCel: string = "";

  //Artículos
  articulos: any = articulo;
  public imagen: string = "";
  public titulo: string = "";
  public descripcion: string = "";

  constructor() { }

  ngOnInit(): void {
    this.ubicacionDir = this.contactos[0].ubicacion.direccion;
    //console.log(this.ubicacionDir);
    this.ubicacionCity = this.contactos[0].ubicacion.ubicacion;
    this.correoElectronico = this.contactos[0].correoElectronico;
    this.sitioWeb = this.contactos[0].sitioWeb;
    this.redInst = this.contactos[0].redSocial.instagram;
    this.redLink = this.contactos[0].redSocial.linkedin;
    this.correspondenciaDir = this.contactos[0].correspondencia.direccion;
    this.correspondenciaCity = this.contactos[0].correspondencia.ubicacion;
    this.telefonoFijo = this.contactos[0].telefonos.fijo;
    this.telefonoCel = this.contactos[0].telefonos.celular;

  }

  

}
