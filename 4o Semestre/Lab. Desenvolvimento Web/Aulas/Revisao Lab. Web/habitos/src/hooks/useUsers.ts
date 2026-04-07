import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../store'
import { addUser, removeUser } from '../slices/userSlice'

export const useUsers = () => {
  const users = useSelector((state: RootState) => state.users.users)
  const dispatch = useDispatch()

  return {
    getUsers: () => users,
    addUser: (user: any) => dispatch(addUser(user)),
    removeUser: (id: number) => dispatch(removeUser(id))
  }
}