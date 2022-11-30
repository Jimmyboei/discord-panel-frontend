
// currently using mock token for login
// the token is hello123

const loginWithBotTokenData = {
  "token": "validToken"
};

export const loginWithBotToken = async (token) => {

  if (token === 'hello123') {
    return loginWithBotTokenData;
  }

  throw new Error(`Invalid login token`);
};;
