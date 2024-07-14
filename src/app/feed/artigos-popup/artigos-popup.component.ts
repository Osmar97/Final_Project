import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterresadosComponent } from '../interresados/interresados.component';
import { ComentariosComponent } from '../comentarios/comentarios.component';
import { LocalStorageService } from '../../servicos/local-storage.service';
import { GetsService } from '../../servicos/gets.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-artigos-popup',
  standalone: true,
  imports: [CommonModule, InterresadosComponent],
  templateUrl: './artigos-popup.component.html',
  styleUrl: './artigos-popup.component.scss'
})
export class ArtigosPopupComponent {


  selectedOption: string;
  posts: any[] = []
  myPosts: any[] = []
  postsAtivos: any[] = []


  constructor(@Inject(MAT_DIALOG_DATA,) public data: any,
    private fecha: MatDialog,
    private comentarios: MatDialog,
    private getServ: GetsService,
    private localStore: LocalStorageService,
    public dialogRef: MatDialogRef<ComentariosComponent>,
  ) {

    this.selectedOption = 'pedido';

  }

  ngAfterViewInit() {
    this.getPosts()
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

  close() {
    this.fecha.closeAll();

  }

  async getPosts() {
    let userdata = String(this.localStore.getItem('user'))
    if (userdata) {

      let data = JSON.parse(userdata)
      let anuncios = await this.obterAnunciosMunic(data.id_munic)


      this.posts = anuncios
      let i = 0;

      for (let post of this.posts) {

        let autor = await this.obterAutor(post.id_user)


            let nome: string = autor[0].nome;
            let id: number = autor[0].id;
            let id_dist: number = autor[0].id_dist;
            let id_munic: number = autor[0].id_munic;
            let coordenadasmorada: string = autor[0].coordenadasmorada;
            let email: string = autor[0].email;
            let nif: string = autor[0].nif;
            let tipouser: string = autor[0].tipouser;


            this.posts[i] = {
              ...this.posts[i], nomeAutor: nome,
              meuId: data.id,
              idAutor: id,
              id_distAutor: id_dist,
              id_municAutor: id_munic,
              coordenadasmoradaAutor: coordenadasmorada,
              emailAutor: email,
              nifAutor: nif,
              tipoUserAutor: tipouser,
              meuPost: data.id == id

            }
            i++;

            this.myPosts = this.filterPosts(data.id)


            this.selectOption(this.selectedOption)
     
      }

      console.log(this.posts,"33")


}
  }
  async obterAnunciosMunic(id: any) {

  return new Promise<any>(
    (resolve, reject) => {
      let result: Observable<any> = this.getServ.verAnunciosDoMunicipio(id)
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

filterPosts(myid: any) {
  return this.posts.filter((val) => val.idAutor == myid)
}


verInteressados() {
  (document.getElementById('interessados-popup') as HTMLElement).style.display = 'block';
  this.fecha.closeAll();

}

openComentarios(post: any) {
  this.fecha.closeAll();
  this.comentarios.open(ComentariosComponent, {
    data: post
  })
}

}
