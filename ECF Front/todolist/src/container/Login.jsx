import { Form } from '../style/style'

const Login = () => {

    return(
        <>
            <h3>Page de Connexion</h3>
            <Form >
                <p>Email: <input type="email" placeholder="Veuillez entre votre mail" /></p>
                <p>Mot de passe: <input type="password" placeholder="***********" /></p>
                
                <input type="Submit" />
            </Form>
        </>
        
    )
}

export default Login;