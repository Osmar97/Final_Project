import { Component, Inject, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Input } from '@angular/core';
import { ComentariosComponent } from '../comentarios/comentarios.component';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { GetsService } from '../../servicos/gets.service';
import { LocalStorageService } from '../../servicos/local-storage.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.scss'
})
export class PerfilComponent {


  selectedOption: string;
  posts: any[] = []
  myPosts: any[] = []
  postsAtivos: any[] = []

  constructor(@Inject(MAT_DIALOG_DATA,) public data: any,
    private fechar: MatDialog,
    private comentarios: MatDialog,
    private getServ: GetsService,
    private localStore: LocalStorageService,
    public dialogRef: MatDialogRef<ComentariosComponent>,) {

    this.selectedOption = 'pedido';

  }

  selectOption(option: string) {

    this.selectedOption = option;


    switch (option) {
      case 'alertas':
        this.postsAtivos = this.myPosts.filter((val) => val.tipoanuncio == 'Alerta' || val.tipoanuncio == 'alerta')
        break;
      case 'pedido':
        this.postsAtivos = this.myPosts.filter((val) => val.tipoanuncio == 'Solicitação de artigo' || val.tipoanuncio == 'solArt')

        break;
      case 'disponibilização':

        this.postsAtivos = this.myPosts.filter((val) => val.tipoanuncio == 'Disponibilização de artigo' || val.tipoanuncio == 'dispArt')

        break;
      case 'Evento':

        this.postsAtivos = this.data.evento.filter((val: any) => val.tipoanuncio == 'Evento' && val.id_user == this.data.post.id_user)

        break;

    }




  }

  verInteressados() {
    (document.getElementById('interessados-popup') as HTMLElement).style.display = 'block';
    this.fechar.closeAll();

  }
  ngAfterViewInit() {
    this.posts = []
    this.myPosts = []
    this.postsAtivos = []
    this.getPosts()
    console.log(this.data)
  }
  async getPosts() {

    let anuncios = await this.obterAnunciosMunic()


    this.posts = anuncios
    let i = 0;

    for (let post of this.posts) {


      let autor= await this.obterAutor(post.id_user)
   


            let nome: string = autor[0].nome;
            let id: number = autor[0].id;
            let id_dist: number = autor[0].id_dist;
            let id_munic: number = autor[0].id_munic;
            let coordenadasmorada: string = autor[0].coordenadasmorada;
            let email: string = autor[0].email;
            let nif: string = autor[0].nif;


            let tipouser: string = autor[0].tipouser;

            this.posts[i] = {
              ...this.posts[i],
              nomeAutor: nome,
              idAutor: id,
              id_distAutor: id_dist,
              id_municAutor: id_munic,
              coordenadasmoradaAutor: coordenadasmorada,
              emailAutor: email,
              nifAutor: nif,
              tipoUserAutor: tipouser,
            }
            i++;

 

 

    }


    this.myPosts = this.filterPosts(this.data.post.id_user)
    console.log(this.myPosts)
    console.log(this.data.post.id_user)
    this.selectOption(this.selectedOption)

  }

  async obterAnunciosMunic() {

    return new Promise<any>(
      (resolve, reject) => {
        let result: Observable<any> = this.getServ.verAnunciosDoMunicipio(this.data.post.id_munic)
        result.forEach((e) => {
          resolve(e)
        })


      },

    )
  }
  async obterAutor(idAutor: number) {

    return new Promise<any>(
      (resolve, reject) => {
        let result: Observable<any> = this.getServ.obterAutor(idAutor)
        result.forEach((e) => {
          resolve(e)
        })


      },

    )
  }

  filterPosts(id: any) {
    return this.posts.filter((val) => val.id_user == id)
  }

  openComentarios(post: any) {
    this.fechar.closeAll();
    this.comentarios.open(ComentariosComponent, {
      data: post
    })
  }
  close() {
    this.fechar.closeAll();

  }
}
