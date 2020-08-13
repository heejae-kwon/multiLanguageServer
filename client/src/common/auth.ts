import User from './user'
const users : Array<User>= [
  { email: "kim@test.com", password: "123", name: "Kim" },
  { email: "lee@test.com", password: "456", name: "Lee" },
  { email: "park@test.com", password: "789", name: "Park" },
]

export function signIn({ email, password }: User) {
  const user = users.find(
    (user) => user.email === email && user.password === password
  )
  if (!user) throw new Error()
  return user
}