import sendRequest from "./send-request";
const BASE_URL = "/api/notes";

export function addNote(notes) {
    return sendRequest(`${BASE_URL}/new`, "POST", notes);
  }
  
  export function getAll() {
    return sendRequest(BASE_URL);
  }