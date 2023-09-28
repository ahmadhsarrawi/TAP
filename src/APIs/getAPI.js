import axios from "axios";

const BACKEND_URL = "https://tap-web-1.herokuapp.com/topics/";

export async function loadTopics( searchPhrase) {
  const searchParams = new URLSearchParams();

  // searchParams.set("phrase", searchPhrase ? `phrase=${searchPhrase}` : "");
  searchParams.set("phrase", searchPhrase ? searchPhrase : "");
  // console.log(searchParams.get("phrase"));
  // console.log(BACKEND_URL + searchParams.get("phrase")||'');
  return await axios
    .get(BACKEND_URL +  searchParams.get("phrase"))
    .then((response) => response.data);
}
