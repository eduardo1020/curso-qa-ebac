# TDD e BDD

- Behaviour Driven Development (Desenvolvimento orientado a comportamento
- criado por Dan North
- Abordagem para desenvolvimento de software que se apoia em testes e comportamentos do usuário ou sistema
- o BDD é uma evolução feita a partir da implantação de técnicas TDD (Test Driven Development).

## Mas o que é TDD?

- TDD é uma técnica de desenvolvimento
    - escrevemos o teste e ele falha porque não tem uma implementação da regra do método
    - desenvolvemos a função e o teste passa (dessa forma atendemos os critérios do passo anterior
    - refatoramos a função (melhoramos o código)

## Por que utilizar BDD?

- melhora a comunicação entre desenvolvedores e a área de negócio
- assegura que toda a equipe esteja focada em entregar o necessário para alcançar seus objetivos
- DevTeam como dono da solução, pois o time prover a solução técnica
- Acelera a criação dos testes automatizados
- documentação viva

![Untitled](TDD%20e%20BDD%2085a487ac66cf4252a0a88b7c99c5f8c0/Untitled.png)

## BDD - Como é?

![Untitled](TDD%20e%20BDD%2085a487ac66cf4252a0a88b7c99c5f8c0/Untitled%201.png)

## “Os três amigos” - Técnica do BDD

- Os três amigos refere-se a uma reunião dos três principais papéis envolvidos no desenvolvimento de software:
    - Conversa do usuário → P.O (Que problema estamos tentando resolver?) + Dev (como podemos construir uma solução para resolver esse problema?) + QA (e quanto a isso, o que poderia acontecer?) (conversa para atingir o mesmo objetivo) = Histórias bem definidas e critérios de aceitação
    
    ![Untitled](TDD%20e%20BDD%2085a487ac66cf4252a0a88b7c99c5f8c0/Untitled%202.png)
    
- Podemos dividir o uso do BDD em duas grandes partes:
    - 1 - Como uma linguagem ubíqua para ilustrar o comportamento do usuário na aplicação;
    - 2 - Como base para automação de testes, garantindo que a aplicação funcione como previsto por todos;
- Juntando essas duas partes temos uma documentação viva, que não só explica o comportamento do software, mas também executa testes, documenta código e auxilia na validação do produto.