import "server-only";
// Runs only on server

const Users = [
  {
    id: "1",
    email: "user1@gmail.com",
    password: "password1",
  },
  {
    id: "2",
    email: "user2@gmail.com",
    password: "password2",
  },
];

const findUser = (email: string, password: string) => {
  return Users.find(
    (user) => user.email === email && user.password === password
  );
};

// Mock signin function
export const signin = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const match = findUser(email, password);

  if (!match) throw new Error("invalid user");

  const { password: pw, ...user } = match;
  const token = "user-token" + user.id;

  return { user, token };
};
