import md5 from 'md5';

const gravatar = (email) => {
  const BASE = 'https://gravatar.com/avatar/';
  const formattedEmail = email.trim().toLowerCase();
  const hash = md5(formattedEmail, { encoding: 'binary' });
  return `${BASE}${hash}`;
};

export default gravatar;