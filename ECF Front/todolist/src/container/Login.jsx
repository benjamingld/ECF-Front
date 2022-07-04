import { Form } from '../style/style'


const Login = () => {

// Page login avec formulaire de connexion non utilisable (n'est pas relier à un contexte)

    return (
        <>
        
            <h3>Page de Connexion</h3>
            <Form>
                <p>
                    Email:{' '}
                    <input
                        type="email"
                        placeholder="Veuillez entre votre mail"
                    />
                </p>
                <p>
                    Mot de passe:{' '}
                    <input type="password" placeholder="***********" />
                </p>

                <input type="Submit" />
            </Form>
        </>
    )
}

export default Login
