export const accessTokenName = 'access_token';
export const refreshTokenName = 'refresh_token';

export const refreshCookieUtil = () => {
  return {
    httpOnly: true,
  };
};

export const accessCookieUtil = () => {
  return {
    httpOnly: true,
  };
};
