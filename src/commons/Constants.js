// eslint-disable-next-line import/no-anonymous-default-export
export default {
  BASE_URL: 'https://pre-onboarding-selection-task.shop',
  AuthTokenName: 'access_token',

  ValidityKeys: [
    'badInput',
    'patternMismatch',
    'rangeOverflow',
    'rangeUnderflow',
    'stepMismatch',
    'tooLong',
    'tooShort',
    'typeMismatch',
    'valueMissing',
  ],
  PatternInvalidMessages: {
    email: '이메일 형식의 맞게 작성해주세요.',
    password: '비밀번호는 최소 8자 이상, 하나 이상의 문자와 하나의 숫자여야 합니다.',
  },
};
