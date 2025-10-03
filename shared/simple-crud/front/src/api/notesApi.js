import { sendRequest } from "./global";


export const notesApi = {
  fetchNotes: () => sendRequest("/notes"),

  create: (note) =>
    sendRequest("/notes", {
      method: "POST",
      body: JSON.stringify({ text: note }),
    }),

  delete: (id) =>
    sendRequest(`/notes/${id}`, {
      method: "DELETE",
    }),
};
