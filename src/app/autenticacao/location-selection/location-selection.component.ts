import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';

interface Distrito {
  value: string;
  viewValue: string;
  municipios: Municipio[];
}

interface Municipio {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-location-selection',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule, FontAwesomeModule,CommonModule],
  templateUrl: './location-selection.component.html',
  styleUrls: ['./location-selection.component.scss']
})
export class LocationSelectionComponent {

  faLock = faLock;

  distritos: Distrito[] = [
    {
      value: 'aveiro',
      viewValue: 'Aveiro',
      municipios: [
        { value: 'águeda', viewValue: 'Águeda' },
        { value: 'albergaria-a-velha', viewValue: 'Albergaria-a-Velha' },
        { value: 'anseio', viewValue: 'Anseio' },
        { value: 'avedonha', viewValue: 'Avedonha' },
        { value: 'aveiro', viewValue: 'Aveiro' },
        { value: 'branca', viewValue: 'Branca' },
        { value: 'castelo de paiva', viewValue: 'Castelo de Paiva' },
        { value: 'espinho', viewValue: 'Espinho' },
        { value: 'estarreja', viewValue: 'Estarreja' },
        { value: 'êxito', viewValue: 'Êxito' },
        { value: 'ilha', viewValue: 'Ilha' },
        { value: 'mealhada', viewValue: 'Mealhada' },
        { value: 'murtosa', viewValue: 'Murtosa' },
        { value: 'oliveira de azemeis', viewValue: 'Oliveira de Azeméis' },
        { value: 'oliveira do bairro', viewValue: 'Oliveira do Bairro' },
        { value: 'ovar', viewValue: 'Ovar' },
        { value: 'são joão da madeira', viewValue: 'São João da Madeira' },
        { value: 'sever do vouga', viewValue: 'Sever do Vouga' },
        { value: 'vagos', viewValue: 'Vagos' }
      ]},

      {
        value: 'beja',
        viewValue: 'Beja',
        municipios: [
          { value: 'aljustrel', viewValue: 'Aljustrel' },
          { value: 'almodôvar', viewValue: 'Almodôvar' },
          { value: 'alvito', viewValue: 'Alvito' },
          { value: 'barrancos', viewValue: 'Barrancos' },
          { value: 'beja', viewValue: 'Beja' },
          { value: 'castro verde', viewValue: 'Castro Verde' },
          { value: 'cuba', viewValue: 'Cuba' },
          { value: 'ferreira do alentejo', viewValue: 'Ferreira do Alentejo' },
          { value: 'mértola', viewValue: 'Mértola' },
          { value: 'moura', viewValue: 'Moura' },
          { value: 'odemira', viewValue: 'Odemira' },
          { value: 'ourique', viewValue: 'Ourique' },
          { value: 'serpa', viewValue: 'Serpa' },
          { value: 'vidigueira', viewValue: 'Vidigueira' }
        ]},
        {
          value: 'braga',
          viewValue: 'Braga',
          municipios: [
            { value: 'amares', viewValue: 'Amares' },
            { value: 'barcelos', viewValue: 'Barcelos' },
            { value: 'braga', viewValue: 'Braga' },
            { value: 'cabeceiras de basto', viewValue: 'Cabeceiras de Basto' },
            { value: 'celorico de basto', viewValue: 'Celorico de Basto' },
            { value: 'esposende', viewValue: 'Esposende' },
            { value: 'fafe', viewValue: 'Fafe' },
            { value: 'guimarães', viewValue: 'Guimarães' },
            { value: 'póvoa de lanhoso', viewValue: 'Póvoa de Lanhoso' },
            { value: 'terrastre', viewValue: 'Terrastre' },
            { value: 'vila nova de famalicão', viewValue: 'Vila Nova de Famalicão' },
            { value: 'vila verde', viewValue: 'Vila Verde' },
            { value: 'vizela', viewValue: 'Vizela' }
          ]
        },
        {
          value: 'bragança',
          viewValue: 'Bragança',
          municipios: [
            { value: 'alfândega da fé', viewValue: 'Alfândega da Fé' },
            { value: 'bragança', viewValue: 'Bragança' },
            { value: 'carrazeda de ansiaes', viewValue: 'Carrazeda de Ansiães' },
            { value: 'freixo de espada à cinta', viewValue: 'Freixo de Espada à Cinta' },
            { value: 'macedo de cavaleiros', viewValue: 'Macedo de Cavaleiros' },
            { value: 'miranda do douro', viewValue: 'Miranda do Douro' },
            { value: 'mirandela', viewValue: 'Mirandela' },
            { value: 'moncorvo', viewValue: 'Moncorvo' },
            { value: 'mogadouro', viewValue: 'Mogadouro' },
            { value: 'torre de moncorvo', viewValue: 'Torre de Moncorvo' },
            { value: 'vila flor', viewValue: 'Vila Flor' },
            { value: 'vimioso', viewValue: 'Vimioso' },
            { value: 'vinhais', viewValue: 'Vinhais' }
          ]
        },
        {
          value: 'castelo branco',
          viewValue: 'Castelo Branco',
          municipios: [
            { value: 'belmonte', viewValue: 'Belmonte' },
            { value: 'castelo branco', viewValue: 'Castelo Branco' },
            { value: 'covilhã', viewValue: 'Covilhã' },
            { value: 'fundão', viewValue: 'Fundão' },
            { value: 'idães', viewValue: 'Idães' },
            { value: 'oleiros', viewValue: 'Oleiros' },
            { value: 'penamacor', viewValue: 'Penamacor' },
            { value: 'proença-a-nova', viewValue: 'Proença-a-Nova' },
            { value: 'sertã', viewValue: 'Sertã' },
            { value: 'vila de rei', viewValue: 'Vila de Rei' },
            { value: 'vila velha de rodão', viewValue: 'Vila Velha de Ródão' }
          ]
        },
        {
          value: 'coimbra',
          viewValue: 'Coimbra',
          municipios: [
            { value: 'arganil', viewValue: 'Arganil' },
            { value: 'cantanhede', viewValue: 'Cantanhede' },
            { value: 'coimbra', viewValue: 'Coimbra' },
            { value: 'condeixa-a-nova', viewValue: 'Condeixa-a-Nova' },
            { value: 'figueira da foz', viewValue: 'Figueira da Foz' },
            { value: 'góis', viewValue: 'Góis' },
            { value: 'lousã', viewValue: 'Lousã' },
            { value: 'mira', viewValue: 'Mira' },
            { value: 'miranda do corvo', viewValue: 'Miranda do Corvo' },
            { value: 'montemor-o-velho', viewValue: 'Montemor-o-Velho' },
            { value: 'oliveira do hospital', viewValue: 'Oliveira do Hospital' },
            { value: 'penacova', viewValue: 'Penacova' },
            { value: 'penela', viewValue: 'Penela' },
            { value: 'são pedro de alva', viewValue: 'São Pedro de Alva' },
            { value: 'são pedro do sul', viewValue: 'São Pedro do Sul' },
            { value: 'sardoal', viewValue: 'Sardoal' },
            { value: 'seia', viewValue: 'Seia' },
            { value: 'tábua', viewValue: 'Tábua' },
            { value: 'tondela', viewValue: 'Tondela' },
            { value: 'vila nova de poiares', viewValue: 'Vila Nova de Poiares' }
          ]
        },
    
        {
          value: 'evora',
          viewValue: 'Évora',
          municipios: [
            { value: 'alandroal', viewValue: 'Alandroal' },
            { value: 'arraiolos', viewValue: 'Arraiolos' },
            { value: 'borba', viewValue: 'Borba' },
            { value: 'estremoz', viewValue: 'Estremoz' },
            { value: 'évora', viewValue: 'Évora' },
            { value: 'montemor-o-novo', viewValue: 'Montemor-o-Novo' },
            { value: 'mora', viewValue: 'Mora' },
            { value: 'mourão', viewValue: 'Mourão' },
            { value: 'portel', viewValue: 'Portel' },
            { value: 'redondo', viewValue: 'Redondo' },
            { value: 'reguengos de monsaraz', viewValue: 'Reguengos de Monsaraz' },
            { value: 'vendas novas', viewValue: 'Vendas Novas' },
            { value: 'viana do alentejo', viewValue: 'Viana do Alentejo' },
            { value: 'vimieiro', viewValue: 'Vimieiro' }
          ]
        },
        {
          value: 'faro',
          viewValue: 'Faro',
          municipios: [
            { value: 'albufeira', viewValue: 'Albufeira' },
            { value: 'alcoutim', viewValue: 'Alcoutim' },
            { value: 'aljezur', viewValue: 'Aljezur' },
            { value: 'castro marim', viewValue: 'Castro Marim' },
            { value: 'faro', viewValue: 'Faro' },
            { value: 'lagos', viewValue: 'Lagos' },
            { value: 'loulé', viewValue: 'Loulé' },
            { value: 'monchique', viewValue: 'Monchique' },
            { value: 'olhão', viewValue: 'Olhão' },
            { value: 'portimão', viewValue: 'Portimão' },
            { value: 'são brás de alportel', viewValue: 'São Brás de Alportel' },
            { value: 'silves', viewValue: 'Silves' },
            { value: 'tavira', viewValue: 'Tavira' },
            { value: 'vila do bispo', viewValue: 'Vila do Bispo' },
            { value: 'vila real de santo antónio', viewValue: 'Vila Real de Santo António' }
          ]
        },
        {
          value: 'guarda',
          viewValue: 'Guarda',
          municipios: [
            { value: 'aguiar da beira', viewValue: 'Aguiar da Beira' },
            { value: 'almeida', viewValue: 'Almeida' },
            { value: 'belmonte', viewValue: 'Belmonte' },
            { value: 'celorico da beira', viewValue: 'Celorico da Beira' },
            { value: 'figueira de castelo rodrigo', viewValue: 'Figueira de Castelo Rodrigo' },
            { value: 'foios', viewValue: 'Foios' },
            { value: 'fundão', viewValue: 'Fundão' },
            { value: 'guarda', viewValue: 'Guarda' },
            { value: 'manteigas', viewValue: 'Manteigas' },
            { value: 'meimão', viewValue: 'Meimão' },
            { value: 'pinhel', viewValue: 'Pinhel' },
            { value: 'sabugal', viewValue: 'Sabugal' },
            { value: 'seia', viewValue: 'Seia' },
            { value: 'trancoso', viewValue: 'Trancoso' },
            { value: 'vila nova de foz côa', viewValue: 'Vila Nova de Foz Côa' }
          ]
        },
        {
          value: 'leiria',
          viewValue: 'Leiria',
          municipios: [
            { value: 'alcobaça', viewValue: 'Alcobaça' },
            { value: 'ansião', viewValue: 'Ansião' },
            { value: 'batalha', viewValue: 'Batalha' },
            { value: 'bombarral', viewValue: 'Bombarral' },
            { value: 'caldas da rainha', viewValue: 'Caldas da Rainha' },
            { value: 'castanheira de pera', viewValue: 'Castanheira de Pêra' },
            { value: 'figueiró dos vinhos', viewValue: 'Figueiró dos Vinhos' },
            { value: 'leiria', viewValue: 'Leiria' },
            { value: 'marinha grande', viewValue: 'Marinha Grande' },
            { value: 'nazaré', viewValue: 'Nazaré' },
            { value: 'óbidos', viewValue: 'Óbidos' },
            { value: 'pedrógão grande', viewValue: 'Pedrógão Grande' },
            { value: 'peniche', viewValue: 'Peniche' },
            { value: 'pombal', viewValue: 'Pombal' },
            { value: 'port vieira', viewValue: 'Port Vieira' },
            { value: 'portalegre', viewValue: 'Portalegre' },
            { value: 'vila nova de ourém', viewValue: 'Vila Nova de Ourém' }
          ]
        },
        {
          value: 'lisboa',
          viewValue: 'Lisboa',
          municipios: [
            { value: 'amadora', viewValue: 'Amadora' },
            { value: 'arruda dos vinhos', viewValue: 'Arruda dos Vinhos' },
            { value: 'azambuja', viewValue: 'Azambuja' },
            { value: 'cadaval', viewValue: 'Cadaval' },
            { value: 'cascais', viewValue: 'Cascais' },
            { value: 'lisboa', viewValue: 'Lisboa' },
            { value: 'lourinhã', viewValue: 'Lourinhã' },
            { value: 'loures', viewValue: 'Loures' },
            { value: 'mafrense', viewValue: 'Mafrense' },
            { value: 'odivelas', viewValue: 'Odivelas' },
            { value: 'oeiras', viewValue: 'Oeiras' },
            { value: 'sintra', viewValue: 'Sintra' },
            { value: 'sobral de monte agraço', viewValue: 'Sobral de Monte Agraço' },
            { value: 'torres vedras', viewValue: 'Torres Vedras' },
            { value: 'vila franca de xira', viewValue: 'Vila Franca de Xira' },
            { value: 'arruda dos vinhos', viewValue: 'Arruda dos Vinhos' },
            { value: 'mafra', viewValue: 'Mafra' },
            { value: 'azambuja', viewValue: 'Azambuja' }
          ]
        },
        {
          value: 'portalegre',
          viewValue: 'Portalegre',
          municipios: [
            { value: 'alter do chão', viewValue: 'Alter do Chão' },
            { value: 'arronches', viewValue: 'Arronches' },
            { value: 'avis', viewValue: 'Avis' },
            { value: 'campo maior', viewValue: 'Campo Maior' },
            { value: 'castelo de vide', viewValue: 'Castelo de Vide' },
            { value: 'crato', viewValue: 'Crato' },
            { value: 'elvas', viewValue: 'Elvas' },
            { value: 'fronteira', viewValue: 'Fronteira' },
            { value: 'gomil', viewValue: 'Gomil' },
            { value: 'marvão', viewValue: 'Marvão' },
            { value: 'monforte', viewValue: 'Monforte' },
            { value: 'nisa', viewValue: 'Nisa' },
            { value: 'ponte de sor', viewValue: 'Ponte de Sor' },
            { value: 'portalegre', viewValue: 'Portalegre' },
            { value: 'sousel', viewValue: 'Sousel' }
          ]
        },
        {
          value: 'porto',
          viewValue: 'Porto',
          municipios: [
            { value: 'amarante', viewValue: 'Amarante' },
            { value: 'baião', viewValue: 'Baião' },
            { value: 'felgueiras', viewValue: 'Felgueiras' },
            { value: 'gondomar', viewValue: 'Gondomar' },
            { value: 'lousada', viewValue: 'Lousada' },
            { value: 'maia', viewValue: 'Maia' },
            { value: 'marco de canaveses', viewValue: 'Marco de Canaveses' },
            { value: 'matosinhos', viewValue: 'Matosinhos' },
            { value: 'paços de ferreira', viewValue: 'Paços de Ferreira' },
            { value: 'paredes', viewValue: 'Paredes' },
            { value: 'penafiel', viewValue: 'Penafiel' },
            { value: 'porto', viewValue: 'Porto' },
            { value: 'póvoa de varzim', viewValue: 'Póvoa de Varzim' },
            { value: 'santo tirso', viewValue: 'Santo Tirso' },
            { value: 'trofa', viewValue: 'Trofa' },
            { value: 'valongo', viewValue: 'Valongo' },
            { value: 'vila do conde', viewValue: 'Vila do Conde' },
            { value: 'vila nova de gaia', viewValue: 'Vila Nova de Gaia' }
          ]
        },
        {
          value: 'santarem',
          viewValue: 'Santarém',
          municipios: [
            { value: 'abitureiras', viewValue: 'Abitureiras' },
            { value: 'alcanede', viewValue: 'Alcanede' },
            { value: 'alcanena', viewValue: 'Alcanena' },
            { value: 'almeirim', viewValue: 'Almeirim' },
            { value: 'alpiarça', viewValue: 'Alpiarça' },
            { value: 'azambuja', viewValue: 'Azambuja' },
            { value: 'benavente', viewValue: 'Benavente' },
            { value: 'cartaxo', viewValue: 'Cartaxo' },
            { value: 'chamusca', viewValue: 'Chamusca' },
            { value: 'constância', viewValue: 'Constância' },
            { value: 'coruche', viewValue: 'Coruche' },
            { value: 'entroncamento', viewValue: 'Entroncamento' },
            { value: 'fátima', viewValue: 'Fátima' },
            { value: 'ferreira do zêzere', viewValue: 'Ferreira do Zêzere' },
            { value: 'golegã', viewValue: 'Golegã' },
            { value: 'mação', viewValue: 'Mação' },
            { value: 'rio maior', viewValue: 'Rio Maior' },
            { value: 'salvaterra de magos', viewValue: 'Salvaterra de Magos' },
            { value: 'santarém', viewValue: 'Santarém' },
            { value: 'sardoal', viewValue: 'Sardoal' },
            { value: 'tomar', viewValue: 'Tomar' },
            { value: 'torres novas', viewValue: 'Torres Novas' },
            { value: 'vingada', viewValue: 'Vingada' },
          ]
        }
        ,
        {
          value: 'setubal',
          viewValue: 'Setúbal',
          municipios: [
            { value: 'alcochete', viewValue: 'Alcochete' },
            { value: 'almada', viewValue: 'Almada' },
            { value: 'barreiro', viewValue: 'Barreiro' },
            { value: 'moita', viewValue: 'Moita' },
            { value: 'montijo', viewValue: 'Montijo' },
            { value: 'palmela', viewValue: 'Palmela' },
            { value: 'seixal', viewValue: 'Seixal' },
            { value: 'sesimbra', viewValue: 'Sesimbra' },
            { value: 'setúbal', viewValue: 'Setúbal' },
            { value: 'santiago do cacém', viewValue: 'Santiago do Cacém' },
            { value: 'sertã', viewValue: 'Sertã' },
            { value: 'sines', viewValue: 'Sines' },
            { value: 'odemira', viewValue: 'Odemira' }
          ]
        },
        {
          value: 'viana do castelo',
          viewValue: 'Viana do Castelo',
          municipios: [
            { value: 'arcos de valdevez', viewValue: 'Arcos de Valdevez' },
            { value: 'caminha', viewValue: 'Caminha' },
            { value: 'melgaço', viewValue: 'Melgaço' },
            { value: 'monção', viewValue: 'Monção' },
            { value: 'paredes de coura', viewValue: 'Paredes de Coura' },
            { value: 'ponte da barca', viewValue: 'Ponte da Barca' },
            { value: 'ponte de lima', viewValue: 'Ponte de Lima' },
            { value: 'valença', viewValue: 'Valença' },
            { value: 'viana do castelo', viewValue: 'Viana do Castelo' },
            { value: 'vila nova de cerveira', viewValue: 'Vila Nova de Cerveira' }
          ]
        },
        {
          value: 'vila real',
          viewValue: 'Vila Real',
          municipios: [
            { value: 'alijó', viewValue: 'Alijó' },
            { value: 'boticas', viewValue: 'Boticas' },
            { value: 'chaves', viewValue: 'Chaves' },
            { value: 'mesão frio', viewValue: 'Mesão Frio' },
            { value: 'Mondim de Basto', viewValue: 'Mondim de Basto' },
            { value: 'montalegre', viewValue: 'Montalegre' },
            { value: 'murça', viewValue: 'Murça' },
            { value: 'peso da régua', viewValue: 'Peso da Régua' },
            { value: 'régua', viewValue: 'Régua' },
            { value: 'Ribeira de Pena', viewValue: 'Ribeira de Pena' },
            { value: 'sabrosa', viewValue: 'Sabrosa' },
            { value: 'Santa Marta de Penaguião', viewValue: 'Santa Marta de Penaguião' },
            { value: 'valpaços', viewValue: 'Valpaços' },
            { value: 'vila pouca de aguiar', viewValue: 'Vila Pouca de Aguiar' },
            { value: 'vila real', viewValue: 'Vila Real' }
          ]
        },
        {
          value: 'viseu',
          viewValue: 'Viseu',
          municipios: [
            { value: 'armamar', viewValue: 'Armamar' },
            { value: 'carregal do sal', viewValue: 'Carregal do Sal' },
            { value: 'castro daire', viewValue: 'Castro Daire' },
            { value: 'cinfães', viewValue: 'Cinfães' },
            { value: 'lamego', viewValue: 'Lamego' },
            { value: 'mangualde', viewValue: 'Mangualde' },
            { value: 'moimenta da beira', viewValue: 'Moimenta da Beira' },
            { value: 'mortágua', viewValue: 'Mortágua' },
            { value: 'nelas', viewValue: 'Nelas' },
            { value: 'oliveira de frades', viewValue: 'Oliveira de Frades' },
            { value: 'penalva do castelo', viewValue: 'Penalva do Castelo' },
            { value: 'penedono', viewValue: 'Penedono' },
            { value: 'resende', viewValue: 'Resende' },
            { value: 'santa comba dão', viewValue: 'Santa Comba Dão' },
            { value: 'são joão da pesqueira', viewValue: 'São João da Pesqueira' },
            { value: 'são pedro do sul', viewValue: 'São Pedro do Sul' },
            { value: 'sátão', viewValue: 'Sátão' },
            { value: 'sernancelhe', viewValue: 'Sernancelhe' },
            { value: 'tarouca', viewValue: 'Tarouca' },
            { value: 'tondela', viewValue: 'Tondela' },
            { value: 'vila nova de paiva', viewValue: 'Vila Nova de Paiva' },
            { value: 'viseu', viewValue: 'Viseu' },
            { value: 'vouzela', viewValue: 'Vouzela' },
            { value: 'tabuaço', viewValue: 'Tabuaço' },
            { value: 'armamar', viewValue: 'Armamar' }
          ]
        },
    
  ];
  

  municipios: Municipio[] = [];

  updateMunicipios(distrito: string) {
    this.municipios = this.distritos.find(d => d.value === distrito)?.municipios || [];
  }
}