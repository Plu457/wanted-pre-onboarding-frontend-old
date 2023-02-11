# 원티드 프리온보딩 프론트엔드 - 선발 과제

## 목차

- [기술 스택](#기술-스택)
- [폴더 구조](#폴더-구조)
- [커밋 메세지 작성법](#커밋-메세지-작성법)
- [구현한 기능](#구현한-기능)

## 기술 스택

- React
- React Router
- Tailwind
- pretendard

## 실행 방법

```bash
yarn init
yarn start
```

## 폴더 구조

```
📦src
 ┣ 📂assets
 ┃ ┗ 📜logo.png
 ┃
 ┣ 📂commons
 ┃ ┣ 📜Constants.js
 ┃ ┣ 📜Images.js
 ┃ ┗ 📜index.js
 ┃
 ┣ 📂components
 ┃ ┗ 📜Input.jsx
 ┃
 ┣ 📂context
 ┃ ┣ 📜AuthContext.jsx
 ┃ ┗ 📜TodoContext.jsx
 ┃
 ┣ 📂hooks
 ┃ ┣ 📂Auth
 ┃ ┃ ┣ 📜useLogin.js
 ┃ ┃ ┗ 📜useSignUp.js
 ┃ ┃
 ┃ ┣ 📂Todos
 ┃ ┃ ┣ 📜useCreateTodo.js
 ┃ ┃ ┣ 📜useDeleteTodo.js
 ┃ ┃ ┣ 📜useGetTodos.js
 ┃ ┃ ┗ 📜useUpdateTodo.js
 ┃ ┃
 ┃ ┣ 📜index.js
 ┃ ┣ 📜useFetch.js
 ┃ ┗ 📜useMutaion.js
 ┃
 ┣ 📂pages
 ┃ ┣ 📜Home.jsx
 ┃ ┣ 📜Login.jsx
 ┃ ┗ 📜SignUp.jsx
 ┃
 ┣ 📂styles
 ┃ ┗ 📜global.css
 ┃
 ┣ 📂utils
 ┃ ┣ 📜Fetch.js
 ┃ ┣ 📜GetValidityErrorMessage.js
 ┃ ┣ 📜Storage.js
 ┃ ┗ 📜index.js
 ┃
 ┣ 📂views
 ┃ ┣ 📂LoginView
 ┃ ┃ ┗ 📜index.jsx
 ┃
 ┃ ┣ 📂SignUpView
 ┃ ┃ ┗ 📜index.jsx
 ┃
 ┃ ┗ 📂TodoView
 ┃ ┃ ┣ 📜TodoItem.jsx
 ┃ ┃ ┗ 📜index.jsx
 ┃
 ┣ 📜Router.js
 ┗ 📜index.js
```

---

## 커밋 메세지 작성법

| 태그         | 설명                                                  |
| ------------ | ----------------------------------------------------- |
| `Feat: `     | 새로운 기능을 추가할 경우                             |
| `Fix: `      | 버그를 고친 경우                                      |
| `Design: `   | CSS 등 사용자 UI 디자인 변경                          |
| `HOTFIX: `   | 급하게 치명적인 버그를 고쳐야하는 경우                |
| `Style: `    | 코드 포맷 변경, 세미 콜론 누락, 코드 수정이 없는 경우 |
| `Refactor: ` | 프로덕션 코드 리팩토링                                |
| `Comment: `  | 필요한 주석 추가 및 변경                              |
| `Docs: `     | 문서를 수정한 경우                                    |
| `Rename: `   | 파일 혹은 폴더명을 수정하거나 옮기는 작업만인 경우    |
| `Remove: `   | 파일을 삭제하는 작업만 수행한 경우                    |

---

## 구현한 기능

### 1. 로그인 / 회원가입

- 유효성 검사

  - 이메일: `@` 포함
  - 비밀번호: 8자 이상

- 유효성 검사 통과 못할 시 `로그인/회원가입` 불가

- 회원가입 성공시 `/signin` 경로 이동

- 로그인 성공시 `/` 경로 이동 `( /todo => / )`

- 토큰이 있는 상태로 `/signin` 또는 `/signup` 페이지에 접속한다면 `/` 경로로 리다이렉트
- 토큰이 없는 상태로 `/` 경로에 접근시 `/signin` 경로로 리다이렉트

<br />
<br />

### 2. TODO LIST

- `/` 경로로 접속시 투두 리스트의 목록 보여주기

- TODO를 추가할 시 해당 input의 내용이 추가됨

- `수정 / 삭제` 기능
