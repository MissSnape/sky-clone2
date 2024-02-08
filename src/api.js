const getTrackList = async () => {
  const tracksResponse = await fetch(
    `https://skypro-music-api.skyeng.tech/catalog/track/all/`
  );
  const tracks = await tracksResponse.json();

  if (!tracksResponse) {
    throw new Error('Ошибка сервера');
  }

  return tracks;
};

export default getTrackList;
const registerUser = async ({ email, password }) => {
  const data = {
    method: 'POST',
    body: JSON.stringify({
      email: email,
      password: password,
      username: email,
    }),
    headers: {
      'content-type': 'application/json',
    },
  };
  const registerRequest = await fetch(
    `https://skypro-music-api.skyeng.tech/user/signup/`,
    data
  );
  const response = await registerRequest.json();
  if (registerRequest.status === 400) {
    alert('Легкий пароль');
    throw new Error(response.email);
  }

  return response;
};
const loginUser = async ({ email, password }) => {
  const data = {
    method: 'POST',
    body: JSON.stringify({
      email: email,
      password: password,
    }),
    headers: {
      'content-type': 'application/json',
    },
  };
  const registerRequest = await fetch(
    `https://skypro-music-api.skyeng.tech/user/login/`,
    data
  );
  const response = await registerRequest.json();
  console.log(response);
  if (registerRequest.status === 401) {
    throw new Error(response.detail);
  }

  return response;
};

export { registerUser, loginUser };
