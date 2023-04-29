import { useEffect, useState } from "react";
import { Router } from "./routes/router";
import { TOKEN_NAME } from "./constants/url";
import { BASE_URL } from "./constants/url";
import {GlobalContext} from "./contexts/GlobalContext"
import GlobalStyle from "./GlobalStyle.style";
import axios from "axios";

function App() {
  const [postList, setPostList] = useState([])

  useEffect(() => {
    const token = window.localStorage.getItem(TOKEN_NAME);

    if (token) {
      fetchPostList();
    }
  }, []);

  const fetchPostList = async () => {
    try {
      const token = window.localStorage.getItem(TOKEN_NAME)
      const config = {
        headers: {
          Authorization: token
        }
      };

      const response = await axios.get(BASE_URL + "/post", config);

      setPostList(response.data);
    } catch (error) {
      console.error(error?.response?.data)
      window.alert(error?.response?.data)
    }
  };

  const context = {
    postList,
    fetchPostList
  };

  return (<>
    <GlobalStyle />
    <GlobalContext.Provider value={context}>
      <Router />
    </GlobalContext.Provider>
  </>
  );
}

export default App;
