import UserList from "../components/UsersList";

async function getData() {
  const res = await fetch(process.env.NEXT_PUBLIC_URL + '/api/users', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    cache: "no-store"
  })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

export default async function Users() {
  const data = await getData();
  const users = data.users;
  return <UserList users={users} />
}
