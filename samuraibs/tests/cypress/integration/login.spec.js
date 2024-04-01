import loginPage from '../support/pages/login'
import dashPage from '../support/pages/dashboard'

describe('Login', function() {

    context('Quando o usuário é muito bom', function () {
        const user = {
            name: 'Robson Jassa',
            email: 'jassa@samuraibs.com',
            password: 'pwd123'
        }

        it('Deve logar com sucesso', function () {
            loginPage.go()
            loginPage.form(user)
            loginPage.submit()

            dashPage.header.userLoggedIn(user.name)
        })
    })
})