import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimalesService {
  palabras: Array<any>;

  constructor() { 
    this.palabras = new Array();
  }

  cargarPalabras() {
    this.palabras.push({ palabra: 'leon', palabraIngles: 'lion', url: 'https://vignette.wikia.nocookie.net/reinoanimalia/images/b/b5/Le%C3%B3n_wiki2.png/revision/latest?cb=20130303082204&path-prefix=es' })
    this.palabras.push({ palabra: 'koala', palabraIngles: 'koala', url: 'https://m.eltiempo.com/uploads/2020/01/10/5e1935f28232b.jpeg' })
    this.palabras.push({ palabra: 'mono', palabraIngles: 'monkey', url: 'https://estaticos.muyinteresante.es/uploads/images/article/5536592a70a1ae8d775df846/dia-del-mono.jpg' })
    this.palabras.push({ palabra: 'perro', palabraIngles: 'dog', url: 'https://http2.mlstatic.com/zapatos-para-perritos-chicos-chihuahua-y-yorkshire-D_NQ_NP_357305-MLC20871271718_092016-F.jpg' })
    this.palabras.push({ palabra: 'gato', palabraIngles: 'cat', url: 'https://misanimales.com/wp-content/uploads/2016/10/crecen-los-gatos.jpg' })
    this.palabras.push({ palabra: 'tigre', palabraIngles: 'tiger', url: 'https://vignette.wikia.nocookie.net/reinoanimalia/images/5/58/Tigre_de_bengala_wiki.png/revision/latest/top-crop/width/360/height/450?cb=20130303105615&path-prefix=es' })
    this.palabras.push({ palabra: 'oso', palabraIngles: 'bear', url: 'https://i.blogs.es/9638f5/osete/450_1000.jpg' })
    this.palabras.push({ palabra: 'vaca', palabraIngles: 'cow', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQWzdvFuZ1lGNhYdPbCk5An0mQl9qUh6L01cUKob7e02gRY6iDw&usqp=CAU' })
    this.palabras.push({ palabra: 'cebra', palabraIngles: 'zebra', url: 'https://okdiario.com/img/2019/07/01/cebra-domesticada-655x368.jpg' })
    this.palabras.push({ palabra: 'bufalo', palabraIngles: 'buffalo', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTM0rOnH-ihvNb3vG-76n83kwLTPMOa4YE1bbulCQYbs6BIAUA2&usqp=CAU' })
  }

  listarPalabras() {
    return this.palabras;
  }
}
