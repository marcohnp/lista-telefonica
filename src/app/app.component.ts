import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'lista-telefonica';

  services: Array<{ nome: string; telefone: string; categoria: string; descricao: string }> = [
    {
      nome: 'João da Silva',
      telefone: '(11) 98765-4321',
      categoria: 'Pintura',
      descricao: 'Pintor de casas e apartamentos.',
    },
    {
      nome: 'Maria Oliveira',
      telefone: '(21) 91234-5678',
      categoria: 'Manutenção Elétrica',
      descricao: 'Serviços elétricos residenciais.',
    },
    {
      nome: 'Carlos Almeida',
      telefone: '(31) 99876-5432',
      categoria: 'Poda de Árvores',
      descricao: 'Serviço especializado em poda de árvores e jardins.',
    },
    {
      nome: 'Ana Costa',
      telefone: '(47) 97654-3210',
      categoria: 'Limpeza',
      descricao: 'Limpeza doméstica e comercial.',
    },
    {
      nome: 'Pedro Santos',
      telefone: '(48) 91234-5678',
      categoria: 'Manutenção de Computadores',
      descricao: 'Conserto e manutenção de computadores e notebooks.',
    },
  ];

  novoServico = {
    nome: '',
    telefone: '',
    categoria: '',
    descricao: '',
  };

  ngOnInit() {
    this.carregarCache();
  }

  adicionarServico() {
    this.services.push({ ...this.novoServico });
    this.novoServico = {
      nome: '',
      telefone: '',
      categoria: '',
      descricao: '',
    };
    this.salvarCache();
  }

  salvarCache() {
    if (this.isBrowser()) {
      localStorage.setItem('services', JSON.stringify(this.services));
    }
  }

  carregarCache() {
    if (this.isBrowser()) {
      const cachedServices = localStorage.getItem('services');
      if (cachedServices) {
        this.services = JSON.parse(cachedServices);
      } else {
        this.salvarCache();
      }
    }
  }

  isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }
}
