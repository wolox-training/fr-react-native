export const createHeaderObject = (accessToken, client, uid) => ({
  'Access-Token': accessToken,
  Client: client,
  Uid: uid
});
