import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { PostsService } from '../../servicos/posts.service';
import { MensagemSucessoService } from '../../servicos/mensagem-sucesso.service';
import { Observable } from 'rxjs';
import { GetsService } from '../../servicos/gets.service';

@Component({
  selector: 'app-comentarios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comentarios.component.html',
  styleUrl: './comentarios.component.scss'
})
export class ComentariosComponent {


  postCreationDate = ''
  @ViewChild('commentField') comentariosField!: ElementRef;
  comentarios: any[] = [];

  constructor(@Inject(MAT_DIALOG_DATA,) public data: any,
    private postServ: PostsService,
    private getServ: GetsService,
    private fechar: MatDialog,
    public dialogRef: MatDialogRef<ComentariosComponent>,
    private msnSucesso: MensagemSucessoService
  ) {



  }



  enviarComentario() {

    let response$: Observable<any>;
    if (this.comentariosField.nativeElement.value && this.comentariosField.nativeElement.value.trim() != '') {
      response$ = this.postServ.ComentarAnuncio({ id_anuncio: this.data.id, id_user: this.data.meuId, comentario: this.comentariosField.nativeElement.value })
      response$.subscribe({
        next: () => {
          this.receberComentarios()
          this.msnSucesso.openSuccessSnackBar('Sucesso')
        },
        error: (err) => {
          this.msnSucesso.openSuccessSnackBar(err)
        }
      })
    }
  }

  async receberComentarios() {

    let comentarios = await this.obterComentariosPost();

    let i = 0;
    this.comentarios = comentarios;


    for (let cm of this.comentarios) {

      let autor = await this.obterAutor(cm.id_user)

          let nome: string = autor[0].nome;
          let id: number = autor[0].id;
          let id_dist: number = autor[0].id_dist;
          let id_munic: number = autor[0].id_munic;
          let coordenadasmorada: string = autor[0].coordenadasmorada;
          let email: string = autor[0].email;
          let nif: string = autor[0].nif;
          let tipouser: string = autor[0].tipouser;


          this.comentarios[i] = {
            ...this.comentarios[i], nomeAutor: nome,
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


  }

  async obterComentariosPost() {

    return new Promise<any>(
      (resolve, reject) => {
        let result: Observable<any> = this.getServ.obterComentarioDoPost(this.data.id);
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
  ngAfterViewInit() {
    this.dialogRef.afterOpened().subscribe(() => {
      this.receberComentarios()

    });
  }





  close() {
    this.fechar.closeAll();

  }

}
