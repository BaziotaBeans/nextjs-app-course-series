[] Perguntas Gerais sobre React e React Native

1. Explique o que é o React e como ele funciona.

   O React é uma biblioteca JavaScript para construir interfaces de usuário. Ele funciona através de um conceito chamado "Virtual DOM" que otimiza as atualizações de interface ao manipular uma cópia do DOM real na memória, aplicando apenas as mudanças necessárias no DOM real.

2. Qual a diferença entre React e React Native?

   O React é usado para construir aplicações web, enquanto o React Native é usado para construir aplicações móveis nativas. O React Native permite escrever código em JavaScript e renderizar componentes nativos em vez de usar HTML.

3. O que é o JSX e por que ele é usado no React?

   JSX é uma extensão de sintaxe que permite escrever HTML dentro do JavaScript. Ele torna o código mais legível e expressivo, permitindo que você escreva componentes de forma declarativa.

4. Como funciona o ciclo de vida de um componente no React?

   O ciclo de vida de um componente React é dividido em três fases principais: Montagem, Atualização e Desmontagem. Hooks como useEffect podem ser usados para gerenciar esses ciclos em componentes funcionais.

5. O que são hooks no React? Pode me dar alguns exemplos?

   Hooks são funções que permitem usar estado e outras funcionalidades do React em componentes funcionais. Exemplos incluem useState, useEffect, useContext, useReducer, e useMemo.

6. Como funciona a navegação em uma aplicação React Native?

   A navegação em React Native é geralmente gerenciada por bibliotecas como React Navigation. Ela permite criar pilhas de navegação, abas, e outros tipos de navegadores.

7. Quais são as diferenças entre componentes de classe e componentes funcionais?

   Componentes de classe utilizam a sintaxe de classes do ES6 e possuem métodos de ciclo de vida. Componentes funcionais são funções que podem usar hooks para gerenciar estado e efeitos colaterais.

8. O que é o Virtual DOM e por que ele é importante no React?

   O Virtual DOM é uma representação leve do DOM real que permite ao React aplicar mudanças de forma eficiente. Ele minimiza as operações de manipulação do DOM, melhorando a performance da aplicação.

[] Perguntas sobre Estado e Contexto

1. Como você gerencia o estado em uma aplicação React?

   O estado pode ser gerenciado usando hooks como useState para estados locais e useReducer ou bibliotecas como Redux para estados globais.

2. O que é o Context API e quando você o utilizaria?

   O Context API é uma forma de passar dados através da árvore de componentes sem precisar passar props manualmente em cada nível. É útil para dados globais como o tema ou a autenticação do usuário.

3. Pode explicar o uso do hook useState?

   `useState` é um hook que permite adicionar estado a componentes funcionais. Ele retorna um array com o estado atual e uma função para atualizá-lo.

4. Como você lidaria com estados globais em uma aplicação React?

   Estados globais podem ser gerenciados usando Context API ou bibliotecas como Redux, Recoil ou Zustand.

5. O que são props e como você as utiliza em um componente?

   Props são argumentos passados para componentes para configurar seu comportamento e aparência. Elas são recebidas como um objeto no componente e podem ser usadas para renderizar conteúdo dinâmico.

6. Como você compartilharia dados entre componentes irmãos?

   Dados podem ser compartilhados entre componentes irmãos elevando o estado para um componente pai comum e passando os dados como props para os componentes irmãos.

[] Perguntas sobre Estilização e Layout

1. Como você aplica estilos em componentes React?

   Estilos podem ser aplicados usando CSS tradicional, CSS-in-JS (como styled-components), ou bibliotecas utilitárias como TailwindCSS.

2. O que é o TailwindCSS e como ele pode ser utilizado em um projeto React?

   TailwindCSS é uma biblioteca de utilitários CSS que permite aplicar estilos diretamente no markup usando classes predefinidas. Em um projeto React, pode ser configurado via PostCSS ou usado com bibliotecas como twin.macro para estilos condicionais.

3. Explique a diferença entre CSS Modules e styled-components.

   CSS Modules são arquivos CSS que são escopados localmente por padrão, prevenindo colisões de nome. Styled-components é uma biblioteca que permite escrever CSS dentro de arquivos JavaScript usando a sintaxe de template literals.

4. Como você criaria um layout responsivo em React Native?

   Layouts responsivos em React Native podem ser criados usando o Flexbox, media queries via react-native-responsive-screen, ou usando hooks como useWindowDimensions para obter tamanhos de tela e ajustar estilos dinamicamente.

5. Quais são os benefícios de usar TailwindCSS em vez de CSS tradicional?

   TailwindCSS promove a criação de componentes altamente reutilizáveis e consistentes, reduz a escrita de CSS personalizado, e facilita a manutenção e escalabilidade dos estilos.

[ ] Perguntas sobre Performance e Otimização

1. Quais são algumas maneiras de otimizar a performance de uma aplicação React?

   Algumas maneiras incluem: usar React.memo para componentes de função, PureComponent para componentes de classe, o hook useMemo para memorização de valores calculados, e useCallback para memorização de funções.

2. Como você evitaria renders desnecessários em um componente React?

   Evite renders desnecessários usando React.memo, otimize o uso de estados e props, e utilize hooks como useMemo e useCallback.

3. O que é memoization e como ela pode ser usada no React?

   Memoization é a técnica de armazenar o resultado de funções caras de calcular para reutilizá-las sem recalcular. No React, hooks como useMemo e useCallback ajudam a memorização.

4. Pode explicar o hook useMemo e quando você o utilizaria?

   useMemo memoriza um valor calculado e só o recalcula quando as dependências mudam. É útil para otimizar cálculos caros ou operações que não precisam ser reexecutadas a cada render.

5. Como você identificaria e solucionaria problemas de performance em uma aplicação React Native?

   Ferramentas como o Profiler do React, Flipper para React Native, e o uso de técnicas como divisão de código e otimização de imagens podem ajudar a identificar e solucionar problemas de performance.

Perguntas sobre Ferramentas e Ecossistema

1. O que é o Create React App e como ele facilita o desenvolvimento?

   Create React App é uma ferramenta de linha de comando que configura automaticamente um novo projeto React com uma configuração padrão, incluindo Webpack, Babel, e outras ferramentas essenciais.

2. Você já usou o Vite para criar projetos React? Qual a diferença entre Vite e Create React App?

   Vite é uma ferramenta de build mais rápida que usa ESBuild para processamento. Ao contrário do Create React App, ele oferece tempos de inicialização e recarregamento mais rápidos devido ao uso de um servidor de desenvolvimento baseado em módulos ES.

3. Como você configuraria um projeto React com TypeScript?

   Um projeto React com TypeScript pode ser configurado usando create-react-app com o template TypeScript (npx create-react-app my-app --template typescript) ou configurando manualmente com Vite, incluindo pacotes typescript, @types/react, e @types/react-dom.

4. O que é o Next.js e quais são suas principais funcionalidades?

   Next.js é um framework React para produção, que oferece funcionalidades como renderização no servidor, geração de sites estáticos, roteamento baseado em arquivos, suporte a API Routes, e otimizações de performance.

5. Pode explicar como o TanStack Query (anteriormente React Query) é utilizado para fazer requisições HTTP?

   TanStack Query gerencia o estado da busca de dados de forma eficiente, facilitando o cache, sincronização, e atualização dos dados. Ele usa hooks como useQuery para fetch de dados e useMutation para operações de escrita.

[] Perguntas sobre Testes e Deploy

1.  Quais ferramentas você usaria para testar componentes React?

    Ferramentas populares incluem Jest para testes unitários, React Testing Library para testes de renderização e interação, e Cypress para testes end-to-end.

2.  Como você escreveria um teste para um componente React usando Jest?

    Um teste básico pode ser escrito importando Jest e React Testing Library:

        ```
            import { render, screen } from '@testing-library/react';

            import MyComponent from './MyComponent';

            test('renders the component', () => {
            render(<MyComponent />);
            expect(screen.getByText('Hello, World!')).toBeInTheDocument();
            });
        ```

3.  O que é o React Testing Library e como ele se compara ao Enzyme?

React Testing Library foca em testar a interface como o usuário final interage com ela, promovendo boas práticas de acessibilidade. Enzyme oferece mais controle sobre a instância do componente, mas pode levar a testes mais acoplados à implementação.

4. Como você faria o deploy de uma aplicação React?

    O deploy pode ser feito em várias plataformas, como Vercel, Netlify, ou configurando um servidor manualmente. Envolve a criação de um build otimizado (npm run build) e o upload dos arquivos estáticos resultantes para um servidor web.

5. Quais são as melhores práticas para garantir que uma aplicação React esteja pronta para produção?

    Otimizar o bundle (minificação, tree shaking), usar o serviço de deploy com CDN, implementar análises de performance, garantir que a aplicação seja responsiva e acessível, e configurar monitoramento de erros e logs.

[] Perguntas sobre Segurança

    1. Quais são as principais preocupações de segurança ao desenvolver uma aplicação React?

        Prevenção de XSS, proteção contra CSRF, validação e sanitização de dados de entrada, uso de HTTPS, e garantir a segurança na comunicação entre frontend e backend.

    2. Como você previne ataques XSS (Cross-Site Scripting) em uma aplicação React?

        Usar dangerouslySetInnerHTML com cuidado, sempre sanitizar entradas do usuário, e utilizar bibliotecas como DOMPurify para limpar o HTML.

    3. Quais práticas você adotaria para garantir a segurança da comunicação entre o frontend e o backend?

        Usar HTTPS, implementar tokens de autenticação seguros (JWTs), proteger rotas sensíveis com autenticação e autorização, e garantir que todas as requisições sejam validadas e autenticadas no backend.

[] Perguntas sobre Projetos e Experiência

1. Pode me falar sobre um projeto React/React Native que você desenvolveu?

2. Qual foi o maior desafio técnico que você enfrentou ao trabalhar com React/React Native e como você o superou?

3. Como você lida com a integração de APIs em uma aplicação React?

    Utilizo bibliotecas como Axios ou Fetch para fazer requisições HTTP. Gosto de gerenciar o estado das requisições e o cache de dados com TanStack Query para uma experiência de usuário mais fluida e eficiente.