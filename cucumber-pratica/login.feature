            # language: pt

            Funcionalidade: Tela de login
            Como aluno da faculdade
            Quero me autenticar
            Para visualizar minhas notas

            Contexto:
            Dado que eu acesse a página de autenticação da faculdade

            Cenário: Autenticação válida
            Quando eu digitar o usuário "eduardo@faculdade.com.br"
            E a senha "senha@123"
            Então deve exibir uma mensagem de boas vindas "Olá Eduardo!"

            Cenário: Usuário inxistente
            Quando eu digitar o usuário "abcdef@faculdade.com.br"
            E a senha "senha@123"
            Então deve exibir uma mensagem de alerta: "Usuário inexistente!"

            Cenário: Usuário com senha inválida
            Quando eu digitar o usuário "eduardo@faculdade.com.br"
            E a senha "fhgkeood1234"
            Então deve exibir uma mensagem de alerta: "Usuário ou senha inválidos!"

            Esquema do Cenário: Autenticar múltiplos usuários
            Quando eu digitar <usuario>
            E a <senha>
            Então deve exibir a <mensagem> de sucesso

            Exemplos:
            | usuario                    | senha       | mensagem       |
            | "eduardo@faculdade.com.br" | "senha@123" | "Olá Eduardo!" |
            | "eduardo@faculdade.com.br" | "senha@123" | "Olá Eduardo!" |
            | "eduardo@faculdade.com.br" | "senha@123" | "Olá Eduardo!" |
            | "eduardo@faculdade.com.br" | "senha@123" | "Olá Eduardo!" |