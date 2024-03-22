import { Component } from '@angular/core';
import { BlockableUI } from 'primeng/api';
import { Paciente } from 'src/app/Domain/paciente';
import { ProductService } from 'src/app/Service/productservice';

interface Column {
  field: string;
  header: string;
}
interface Pacientes {
  name: string;
  code: number;
}
@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.scss'],
})
export class PacientesComponent {
  paciente!: Paciente[];
  filtropacientes!: Paciente[];
  cols!: Column[];
  value: string | undefined;
  value2: string | undefined;

  constructor(private productService: ProductService) {}
  pacientes: Pacientes[] | undefined;

  opcaoSelecionada: Pacientes | undefined;
  ngOnInit() {
    this.pacientes = [
      { name: 'Ativos', code: 1 },
      { name: 'Inativos', code: 2 },
      { name: 'Todos pacientes', code: 3 }
    ];

    this.productService.getProductsMini().then((data) => {
      this.paciente = data;
      this.filtropacientes = this.paciente.filter(paciente => {
        return paciente.status === true;
      });
    });

    this.cols = [
      { field: 'paciente', header: 'Paciente' },
      { field: 'status', header: 'Status' },
      { field: 'diagnostico', header: 'Diagnostico' },
      { field: 'medicamento', header: 'Medicamento' },
      { field: 'planodesaude', header: 'Plano de Saúde' },
      { field: 'ultimasolicitacao', header: 'Última Solicitação' },
    ];
  }

  getSeverity(status: boolean) {
    return status ? 'success' : 'error';
  }

  onPacienteChange(){
    this.filtropacientes = this.opcaoSelecionada?.code === 3 ? this.paciente : this.paciente.filter(paciente => {
      return this.opcaoSelecionada?.code === 1 ? paciente.status === true : paciente.status === false;
    })

  }

  filterPacientes() {
    if (this.value) {
      this.filtropacientes = this.paciente.filter(paciente =>
        Object.values(paciente).some(val => val && val.toString().toLowerCase().includes(this.value?.toLowerCase()))
      );
    } else {
      // Se o campo de pesquisa estiver vazio, exiba todos os pacientes
      this.filtropacientes = this.paciente;
    }
  }
  
}
