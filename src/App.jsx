import { useEffect, useReducer } from "react";
import { ERROR, LOADING, SUCCESS } from "./const";

function App() {
  const initState = {
    //api를 호출했을때 로딩 유무
    loading: false,
    //api를 호출했을때 에러 확인
    error: null,
    //api를 호출했을때 데이터 넣기
    data: null,
  };
  const [state, dispatch] = useReducer(reducer, initState);
  useEffect(() => {
    async function getUser() {
      dispatch({ type: LOADING });
      try {
        const key = import.meta.env.VITE_GITHUB_API_KEY;
        console.log(key);
        const response = await fetch("https://api.github.com/users/heun9912", {
          headers: {
            Authorization: `${key}`,
            "user-Agent": "github-profile",
          },
        });
        const data = await response.json();
        dispatch({ type: SUCCESS, data: data });
      } catch (e) {
        dispatch({ type: ERROR, error: e.massage });
      }
    }
    getUser();
  }, []);
  const [state2, dispatch2] = useReducer(reducer, initState);
  console.log(state2);
  useEffect(() => {
    async function getUser() {
      dispatch2({ type: LOADING });
      try {
        const key = import.meta.env.VITE_GITHUB_API_KEY;
        const response = await fetch(
          "https://api.github.com/users/heun9912/repos",
          {
            headers: {
              Authorization: `${key}`,
              "user-Agent": "github-profile",
            },
          }
        );
        const data2 = await response.json();
        dispatch2({ type: SUCCESS, data: data2 });
      } catch (e) {
        dispatch2({ type: ERROR, error: e.massage });
      }
    }
    getUser();
  }, []);

  // 3가지 액션 생성
  // LOADING : 데이터를 가져오는 중
  // SUCCESS : 데이터를 가져오는데 성공
  // ERROR : 데이터를 가져오는데 실패
  function reducer(state, action) {
    switch (action.type) {
      case SUCCESS:
        return { ...state, loading: false, data: action.data };
      case LOADING:
        return { ...state, loading: true, error: null };
      case ERROR:
        return { ...state, error: action.error, loading: false };
      default:
        throw new Error("에러");
    }
  }
  return (
    <div>
      <h2>프로필</h2>
      {/* 현재상태가 로딩중일때 */}
      {state.loading && <p>로딩중...</p>}
      {/* 에러가 존재할때 */}
      {state.error && <p>{state.error} </p>}
      {!state.loading && !state.error && state.data && (
        <>
          <img src={state.data.avatar_url} alt="" />
          <p>아이디 : {state.data.login}</p>
          <p>팔로워 : {state.data.followers}</p>
          <p>팔로우 : {state.data.following}</p>
          <div>
            <h3>저장소</h3>
            {state2.data.map((item, index) => (
              <p key={index}>{item.url}</p>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
export default App;
