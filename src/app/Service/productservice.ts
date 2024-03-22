import { Injectable } from '@angular/core';
    
@Injectable()
export class ProductService {
    getProductsData() {
        return [
            {
                "id": "1001",
                "paciente": "Ana Silva",
                "status": true,
                "diagnostico": "Hipertensão",
                "medicamento": "Losartana",
                "planodesaude": "Bradesco Saúde",
                "ultimasolicitacao": "05/03/2024"
              },
              {
                "id": "1002",
                "paciente": "João Oliveira",
                "status": true,
                "diagnostico": "Diabetes tipo 2",
                "medicamento": "Metformina",
                "planodesaude": "Amil",
                "ultimasolicitacao": "10/02/2024"
              },
              {
                "id": "1003",
                "paciente": "Maria Santos",
                "status": false,
                "diagnostico": "Asma",
                "medicamento": "Salmeterol",
                "planodesaude": "Unimed",
                "ultimasolicitacao": "20/01/2024"
              },
              {
                "id": "1004",
                "paciente": "Pedro Almeida",
                "status": true,
                "diagnostico": "Depressão",
                "medicamento": "Sertralina",
                "planodesaude": "SulAmérica",
                "ultimasolicitacao": "15/04/2024"
              },
              {
                "id": "1005",
                "paciente": "Carla Souza",
                "status": true,
                "diagnostico": "Enxaqueca",
                "medicamento": "Sumatriptana",
                "planodesaude": "Porto Seguro",
                "ultimasolicitacao": "03/06/2024"
              },
              {
                "id": "1006",
                "paciente": "Ricardo Nunes",
                "status": false,
                "diagnostico": "Gastrite",
                "medicamento": "Omeprazol",
                "planodesaude": "Unimed",
                "ultimasolicitacao": "22/05/2024"
              },
              {
                "id": "1007",
                "paciente": "Fernanda Costa",
                "status": true,
                "diagnostico": "Insônia",
                "medicamento": "Zolpidem",
                "planodesaude": "SulAmérica",
                "ultimasolicitacao": "30/07/2024"
              },
              {
                "id": "1008",
                "paciente": "Lucas Rodrigues",
                "status": true,
                "diagnostico": "Rinite alérgica",
                "medicamento": "Desloratadina",
                "planodesaude": "Amil",
                "ultimasolicitacao": "18/08/2024"
              },
              {
                "id": "1009",
                "paciente": "Juliana Lima",
                "status": false,
                "diagnostico": "Fibromialgia",
                "medicamento": "Pregabalina",
                "planodesaude": "Bradesco Saúde",
                "ultimasolicitacao": "12/09/2024"
              },
              {
                "id": "1010",
                "paciente": "André Santos",
                "status": true,
                "diagnostico": "Doença de Crohn",
                "medicamento": "Mesalazina",
                "planodesaude": "Unimed",
                "ultimasolicitacao": "25/10/2024"
              },
              {
                "id": "1011",
                "paciente": "Mariana Oliveira",
                "status": true,
                "diagnostico": "Ansiedade",
                "medicamento": "Alprazolam",
                "planodesaude": "SulAmérica",
                "ultimasolicitacao": "02/11/2024"
              },
              {
                "id": "1012",
                "paciente": "Rodrigo Silva",
                "status": false,
                "diagnostico": "Osteoporose",
                "medicamento": "Alendronato",
                "planodesaude": "Porto Seguro",
                "ultimasolicitacao": "08/12/2024"
              },
              {
                "id": "1013",
                "paciente": "Camila Martins",
                "status": true,
                "diagnostico": "Lúpus",
                "medicamento": "Hidroxicloroquina",
                "planodesaude": "Amil",
                "ultimasolicitacao": "14/01/2025"
              },
              {
                "id": "1014",
                "paciente": "Eduardo Nunes",
                "status": true,
                "diagnostico": "Hipotireoidismo",
                "medicamento": "Levotiroxina",
                "planodesaude": "Unimed",
                "ultimasolicitacao": "20/02/2025"
              },
              {
                "id": "1015",
                "paciente": "Patrícia Alves",
                "status": false,
                "diagnostico": "DPOC",
                "medicamento": "Tiotrópio",
                "planodesaude": "Bradesco Saúde",
                "ultimasolicitacao": "27/03/2025"
              },
              {
                "id": "1016",
                "paciente": "Gustavo Costa",
                "status": true,
                "diagnostico": "Artrite Reumatoide",
                "medicamento": "Metotrexato",
                "planodesaude": "SulAmérica",
                "ultimasolicitacao": "04/04/2025"
              },
              {
                "id": "1017",
                "paciente": "Luana Pereira",
                "status": true,
                "diagnostico": "Obesidade",
                "medicamento": "Orlistate",
                "planodesaude": "Porto Seguro",
                "ultimasolicitacao": "10/05/2025"
              },
              {
                "id": "1018",
                "paciente": "Rafaela Fernandes",
                "status": false,
                "diagnostico": "Epilepsia",
                "medicamento": "Ácido Valproico",
                "planodesaude": "Amil",
                "ultimasolicitacao": "17/06/2025"
              }
        ];
    }

    getProductsMini() {
        return Promise.resolve(this.getProductsData().slice(0, 10));
    }

    getProductsSmall() {
        return Promise.resolve(this.getProductsData().slice(0, 10));
    }

    getProducts() {
        return Promise.resolve(this.getProductsData());
    }

    // getProductsWithOrdersSmall() {
    //     return Promise.resolve(this.getProductsWithOrdersData().slice(0, 10));
    // }

    // getProductsWithOrders() {
    //     return Promise.resolve(this.getProductsWithOrdersData());
    // }
};