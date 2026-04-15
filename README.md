# 🌌 Astra - Space Dashboard

Dashboard interativo desenvolvido para visualização de dados espaciais em tempo real, consumindo a API oficial da NASA (**APOD** - _Astronomy Picture of the Day_). O projeto foi construído com foco em arquitetura moderna, performance e segurança.

---

## 🛠️ Diferenciais Técnicos (Stack)

- **Angular 18**: Uso da versão mais recente do framework, aproveitando as melhorias de performance e tipagem.
- **Signals**: Gerenciamento de estado reativo para otimização de detecção de mudanças e renderização granular.
- **Control Flow (@if, @for)**: Implementação da nova sintaxe nativa do Angular para templates mais limpos e performáticos.
- **Standalone Components**: Arquitetura moderna e modular, eliminando a necessidade de NgModules.
- **Services & HttpClient**: Arquitetura de consumo de API REST utilizando injeção de dependência e tratamento de dados assíncronos.
- **Segurança**: Gerenciamento de credenciais sensíveis através de variáveis de ambiente (`environments`) e proteção de dados via `.gitignore`.
- **SCSS Avançado**: Estilização profissional utilizando metodologias modernas, variáveis e seletores dinâmicos.

---

## 🚀 Funcionalidades

- **Integração com NASA API**: Interface direta com os servidores da NASA para busca de dados astronômicos oficiais.
- **Busca Parametrizada**: Sistema de filtro por data que permite ao usuário navegar por todo o histórico da base de dados.
- **Tratamento de Mídia**: Lógica inteligente para renderização de diferentes formatos de mídia (Imagens em HD ou Vídeos incorporados).
- **Validação de Data**: Controle de regras de negócio para impedir requisições inválidas ou datas futuras.
- **Feedback de UI**: Gerenciamento de estados de carregamento (_loading_) e tratamento amigável de erros de resposta.

---

## 🔧 Como rodar o projeto

1.  **Clone este repositório:**

    ```bash
    git clone [https://github.com/SEU_USUARIO/astra-space-dashboard.git](https://github.com/SEU_USUARIO/astra-space-dashboard.git)
    ```

2.  **Instale as dependências:**

    ```bash
    npm install
    ```

3.  **Configure a API Key:**
    - Navegue até `src/environments/`.
    - Renomeie o arquivo `environment.example.ts` para `environment.ts`.
    - Insira sua chave da NASA na constante `nasaApiKey`.

4.  **Execute o servidor de desenvolvimento:**
    ```bash
    ng serve
    ```
    Acesse `http://localhost:4200` no seu navegador.
