import {Form, FormContent, H1} from '../style/style'

const Login = () => {

    return(
        <FormContent>        
        <H1>Page de connexion</H1>
        <Form >
            <p>Mail: <input type="email" placeholder="Veuillez entre votre email" /></p>
            <p>Password: <input type="password" placeholder="Veuillez entre un mdp" /></p>
            <input type="submit" />
        </Form>
        
        </FormContent>
        
    )
}

export default Login