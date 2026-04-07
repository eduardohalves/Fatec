import { useUsers } from '../hooks/useUsers'

export default function UserManager() {
  const { getUsers, addUser, removeUser } = useUsers()
  const users = getUsers()

  return (
    <div>
      <h2>Gerenciar Usuários</h2>

      <button
        onClick={() =>
          addUser({ id: Date.now(), name: 'Usuário ' + users.length })
        }
      >
        Adicionar Usuário
      </button>

      <ul>
        {users.map((u: any) => (
          <li key={u.id}>
            {u.name}
            <button onClick={() => removeUser(u.id)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  )
}