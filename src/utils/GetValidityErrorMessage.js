import { Constants } from 'commons';

const getValidityErrorMessage = elem => {
  const { validity, name } = elem;
  const invalidKey = Constants.ValidityKeys.find(key => validity[key]);

  if (!invalidKey) return '';

  return Constants.PatternInvalidMessages[name] || '';
};

export default getValidityErrorMessage;
