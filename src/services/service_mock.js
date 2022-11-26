// async function login(email, password) {
//     return { user: { name: email }, accessToken: '123456789', password: password }
// }

import validUsersMock from '../mocks/mock_user';
import validMateriasMock from '../mocks/mock_materias';


async function login(email, password) {

    const [auth, setAuth] = useState(false);

    const authenticate = (email, password) => {
        const user = validUsersMock.find(user => user.email === email && user.password === password);
        if (user) {
            setAuth(true);
            console.log(true);
            return user;
        }
        return null;
    }

    const signout = () => {
        setAuth(false);
    }

    return { auth, authenticate, signout }

}

async function materias() {

    try {
        return validMateriasMock;
    } catch(e) {
        console.log(e)
    }
}

export const serviceMock = {
    login,
    materias
}