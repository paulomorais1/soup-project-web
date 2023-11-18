/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IBeneficiary } from 'app/resources/models/beneficiary.models';
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
  displayedColumns: string[] = ['name', 'phoneNumber', 'dateOfBirth', 'street', 'details'];

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
    console.log('Carregando beneficiários...');

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
      (beneficiaries: IBeneficiary[]) => {
        console.log('Beneficiários recebidos:', beneficiaries);
        this.dataSource.data = beneficiaries;
        this.loadingError = false;
        
        console.log('Beneficiários no componente:', this.dataSource.data);
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
}
