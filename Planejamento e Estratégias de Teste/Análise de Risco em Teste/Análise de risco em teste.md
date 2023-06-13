# Análise de risco em teste

## Risco

- o risco envolve a possibilidade da ocorrência futura de um evento com consequências negativas (bugs, defeitos em produção).
- o nível de risco é determinado pela **probabilidade** do evento e pelo **impacto** desse evento.

## Risco de produtos e projetos

- O software pode não executar as funções de acordo com a sua especificação ou necessidade do usuário.
- **Uma infraestrutura pode não suportar** adequadamente alguns requisitos “não funcionais”. (Ex: um grande volume de usuários acessando seu sistema).
- Os **tempos de resposta podem ser inadequados** para um sistema de processamento de transações de alta performance.
    - Ex: usuários ter o tempo de resposta alto enquanto navegar no seu site. Experiência ruim para o cliente e ele deixa de comprar no site.
- Um cálculo específico pode ser **executado incorretamente** em algumas circunstâncias.
- Um estrutura de controle de loop pode ser **codificada incorretamente**.
    - Ex: o sistema pode gerar um loop e travar todo o sistema.

## Fatores de risco

- O risco do projeto envolve situações que, caso ocorram, podem ter um **efeito negativo** na capacidade de um projeto atingir seus objetivos. Exemplos de riscos incluem questões como:

![Untitled](Ana%CC%81lise%20de%20risco%20em%20teste%205f9b6886bb6e4927a1af07d9d50be2fb/Untitled.png)

## Teste baseado em risco

### Relação entre risco e teste

| Risco | Teste |
| --- | --- |
| O risco é usado para concentrar o esforço necessário durante o teste. | O teste é usado para reduzir a probabilidade da ocorrência de um evento adverso ou para reduzir o seu impacto. |
| Ajuda a decidir por onde e quando começar a testar e identificar áreas que precisam de mais atenção. | O teste é usado como uma atividade de mitigação de risco, para fornecer feedback sobre os riscos identificados, bem como sobre os riscos não resolvidos. |

### Probabilidade e Impacto

![Untitled](Ana%CC%81lise%20de%20risco%20em%20teste%205f9b6886bb6e4927a1af07d9d50be2fb/Untitled%201.png)

### Matriz de risco

- forma colaborativa que pode ajudar o time a definir os casos de risco
- onde o QA mapeia os cenários de teste junto ao time (ex: cenários do caminho feliz e fluxos alternativos/negativos).
- Jogamos os casos de teste na matriz de risco para definir a probabilidade de acontecer e o impacto que irá causar.

![Untitled](Ana%CC%81lise%20de%20risco%20em%20teste%205f9b6886bb6e4927a1af07d9d50be2fb/Untitled%202.png)

- para definir em qual quadrante o caso de teste irá ficar, precisamos analisar a probabilidade do cenário dar erro através de históricos, análises e acontecimentos anteriores, além de analisar também o impacto que ele irá causar se o erro vier a acontecer.
- Como analisar os casos de risco com o time?
    - juntamos o time (presencial ou online)
    - Time presencial
        - desenhamos o quadrante na parede durante a reunião
        - explicar para o time o que irá acontecer na reunião e os conceitos
            - o que é risco
            - matriz de risco
            - probabilidade
            - impacto
            - o que significa os quadrantes
            - cenários de teste
        - Se for em um time presencial, devemos distribuir post its para colarem nos quadrantes
        - Se for o time online, podemos utilizar ferramentas para isso
            - ferramenta: ideaflip.com
            
            ![Untitled](Ana%CC%81lise%20de%20risco%20em%20teste%205f9b6886bb6e4927a1af07d9d50be2fb/Untitled%203.png)