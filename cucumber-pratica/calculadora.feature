            #language: pt

            Funcionalidade: Calculadora
            Como não sei fazer conta de cabeça
            Quero usar a calculadora do sistema
            Para somar dois números

            Cenário: Soma de dois números
            Dado que eu acesse a calculadora
            Quando eu somar <numero1> + <numero2>
            Então o resultado deve ser <resultado>

            Esquema do Cenário: Soma de 2 números
            | numero1 | numero2 | resultado |
            | 1       | 1       | 2         |
            | 2       | 3       | 5         |
            | 7       | 7       | 14        |
            | 10      | 19      | 29        |
            | 53      | 27      | 80        |
            | 110     | 14      | 124       |
            | 284     | 71      | 358       |
            | 1144    | 1576    | 2720      |
            | 10390   | 9876    | 20266     |
            | 1546234 | 2356789 | 3903023   |