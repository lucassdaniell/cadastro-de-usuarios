import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "../../components/Button/styles"
import TopBackground from "../../components/TopBackground"
import api from "../../services/api"
import { Container, Title, ContainerUsers, CardUsers, Avatar, TrashIcon} from './styles'
import Lixeira from '../../assets/trash.png'

function ListUsers() {


  const navigate = useNavigate()

    const [users, setUsers] = useState([])

    useEffect(() => {

        async function getUsers() {
            const { data } = await api.get('/users')

            setUsers(data)
        }
        getUsers()
    }, [])


    async function deleteUsers(id) {
        await api.delete(`/users/${id}`)

        const updatedUser = users.filter( user => user.id !== id)
        
        setUsers(updatedUser)
    }


    return (
        <Container>

            <TopBackground />
           
            <Title>Lista de Usuários</Title>

            <ContainerUsers>
                {users.map((user) => (
                    <CardUsers key={user.id}>
                        <Avatar src={`https://avatar.iran.liara.run/public?username=${user.id}`} />
                        <div>
                            <h3>{user.name}</h3>
                            <p>{user.age}</p>
                            <p>{user.email}</p>
                        </div>
                        <TrashIcon src={Lixeira} onClick={() => deleteUsers(user.id)}/>
                    </CardUsers>
                ))}
            </ContainerUsers>

           

            <Button type="button" onClick={() => navigate('/')}>Voltar</Button>

        </Container>
    )

}

export default ListUsers