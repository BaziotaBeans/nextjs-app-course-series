1. Testes Unitários

Objetivo: Verificar a funcionalidade de unidades individuais de código (como funções ou métodos).

- Escopo: Muito restrito, focando em pequenas unidades de código.
- Ambiente: Isolado, sem dependências externas.
- Ferramentas Comuns: Jest, Mocha, Jasmine.
- Exemplo: Testar uma função que soma dois números.

```
function soma(a, b) {
  return a + b;
}

test('soma 1 + 2 para ser igual a 3', () => {
  expect(soma(1, 2)).toBe(3);
});
```

2. Testes de Renderização

Objetivo: Verificar se um componente de UI renderiza corretamente.

- Escopo: Focado na renderização de componentes.
- Ambiente: Pode ser isolado ou com um contexto limitado (como contexto de React).
- Ferramentas Comuns: React Testing Library, Enzyme.
- Exemplo: Testar se um componente exibe o texto correto.

```
import React from 'react';
import { render } from '@testing-library/react';
import MeuComponente from './MeuComponente';

test('renderiza o texto correto', () => {
  const { getByText } = render(<MeuComponente texto="Olá, mundo!" />);
  expect(getByText('Olá, mundo!')).toBeInTheDocument();
});
```

3. Testes de Integração
Objetivo: Verificar a interação entre múltiplas unidades de código ou componentes.

- Escopo: Médio, cobrindo várias unidades ou componentes que funcionam juntos.
- Ambiente: Pode incluir alguns serviços externos ou simulações.
- Ferramentas Comuns: Jest, Mocha, frameworks de integração específicos.
- Exemplo: Testar a integração entre um componente de formulário e uma API de envio.

```
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Formulario from './Formulario';

test('envia os dados corretamente', async () => {
  const { getByLabelText, getByText } = render(<Formulario />);
  fireEvent.change(getByLabelText(/nome/i), { target: { value: 'João' } });
  fireEvent.click(getByText(/enviar/i));

  await waitFor(() => {
    expect(getByText(/sucesso/i)).toBeInTheDocument();
  });
});
```

4. Testes End-to-End (E2E)

Objetivo: Verificar o comportamento do sistema como um todo, simulando a experiência do usuário final.

- Escopo: Amplo, cobrindo todo o sistema de ponta a ponta.
- Ambiente: Completo, envolvendo todas as partes do sistema (front-end, back-end, banco de dados, etc.).
- Ferramentas Comuns: Cypress, Selenium, Puppeteer.
- Exemplo: Testar um fluxo de login completo.

```
describe('Fluxo de Login', () => {
  it('permite ao usuário fazer login', () => {
    cy.visit('/login');
    cy.get('input[name=username]').type('usuario');
    cy.get('input[name=password]').type('senha');
    cy.get('button[type=submit]').click();
    cy.url().should('include', '/dashboard');
    cy.contains('Bem-vindo, usuario');
  });
});
```

[] Resumo das Diferenças
- Testes Unitários: Focam em pequenas unidades de código de forma isolada.
- Testes de Renderização: Verificam a renderização de componentes de UI.
- Testes de Integração: Testam a interação entre várias unidades ou componentes.
- Testes End-to-End: Testam o sistema inteiro como um todo, simulando o comportamento real do usuário.
