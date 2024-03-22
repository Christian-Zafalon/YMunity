import { Component } from '@angular/core';
import { Paciente } from 'src/app/Domain/paciente';
import { ProductService } from 'src/app/Service/productservice';

interface Column {
  field: string;
  header: string;
}
interface City {
  name: string;
  code: string;
}
@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.scss']
})
export class PacientesComponent {
  paciente!: Paciente[];
  cols!: Column[];
  value: string | undefined;
  value2: string | undefined;
  
  constructor(private productService: ProductService) {}
  cities: City[] | undefined;

  selectedCity: City | undefined;
  ngOnInit() {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
  ];

      this.productService.getProductsMini().then((data) => {
          this.paciente = data;
      });

      this.cols = [
          { field: 'paciente', header: 'Paciente' },
          { field: 'status', header: 'Status' },
          { field: 'diagnostico', header: 'Diagnostico' },
          { field: 'medicamento', header: 'Medicamento' },
          { field: 'planodesaude', header: 'Plano de Saúde' },
          { field: 'ultimasolicitacao', header: 'Última Solicitação' }
      ];
      console.log(this.cols)
  }
}
