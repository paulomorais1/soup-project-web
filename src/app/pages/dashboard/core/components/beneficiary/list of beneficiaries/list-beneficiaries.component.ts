import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IBeneficiary, IAddress } from 'app/resources/models/beneficiary.models';
import { MatTableDataSource } from '@angular/material/table';
import { BeneficiaryDetailsModalComponent } from './modal/beneficiary-details-modal.component';
import { catchError } from 'rxjs/operators';
import { GetAllBeneficiaryService } from 'app/resources/models/services/beneficiaries/get-all/getAll-beneficiary.service';

@Component({
  selector: 'app-list-beneficiaries',
  templateUrl: './list-beneficiaries.component.html',
  styleUrls: ['./list-beneficiaries.component.scss'],
})
export class BeneficiaryListComponent implements OnInit {
  // Colunas a serem exibidas na tabela
  displayedColumns: string[] = ['name', 'phoneNumber', 'dateOfBirth', 'address.street' , 'address.district'  ,'address.zipCode'];

  // Flag para controle de erro durante o carregamento
  loadingError: boolean = false;

  // Fonte de dados da tabela com tipo IBeneficiary
  dataSource: MatTableDataSource<IBeneficiary> = new MatTableDataSource<IBeneficiary>([]);

  constructor(
    private beneficiaryService: GetAllBeneficiaryService,
    private dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    // Carregar beneficiários na inicialização do componente
    this.loadBeneficiaries();
  }

  // Método para buscar beneficiários do serviço
  loadBeneficiaries(): void {
    // Buscar beneficiários usando o getAllBeneficiaries do serviço
    this.beneficiaryService.getAllBeneficiaries().pipe(
      catchError((error) => {
        console.error('Erro ao buscar beneficiários:', error);
        // Atualizar a flag de erro
        this.loadingError = true;
        // Propagar o erro para ser tratado em níveis superiores
        throw error;
      })
    ).subscribe(
      (result: any) => {
        // Certifique-se de que 'body' existe antes de acessá-lo
        const beneficiaries = result.body ? result.body as IBeneficiary[] : [];
        this.dataSource.data = beneficiaries;
        this.loadingError = false;
      },
      (error) => {
        // Tratamento de erro durante a subscrição
        console.error('Erro ao carregar beneficiários:', error);
        // Atualizar a flag de erro
        this.loadingError = true;
      }
    );
  }

  // Método para abrir o modal de detalhes de um beneficiário
  openDetailsModal(beneficiary: IBeneficiary): void {
    const dialogRef = this.dialog.open(BeneficiaryDetailsModalComponent, {
      data: beneficiary,
    });

    dialogRef.afterClosed().subscribe(result => {
      // Lógica a ser executada após o fechamento do modal, se necessário
    });
  }
getColumnValue(element: IBeneficiary, column: string): any {
  // Verifique se o elemento e a coluna são válidos
  if (!element || !column) {
    console.error('Elemento ou coluna inválidos:', element, column);
    return '';
  }

  // Divide a coluna em partes usando '.' como delimitador
  const columnParts = column.split('.');

  // Comece com o elemento principal
  let value: any = element;

  // Itera sobre as partes da coluna para acessar propriedades aninhadas
  for (const prop of columnParts) {
    // Verifica se a propriedade existe antes de acessá-la
    if (value && value.hasOwnProperty(prop)) {
      // Atualiza o valor para a próxima propriedade
      value = value[prop];

      // Adiciona lógica específica para ocultar dados do CPF e RG
      if (prop === 'cpf' || prop === 'rg') {
        value = 'Confidencial'; // Substitua por qualquer valor que você deseja exibir para esses campos
      }
    } else {
      // Se a propriedade não existir, define o valor como vazio e sai do loop
      value = '';
      // Remova o comentário da linha abaixo se quiser evitar mensagens de erro no console
      // console.error('Propriedade não encontrada:', prop, 'em', column, 'para', element);
      break;
    }
  }

  return value;
}

}
