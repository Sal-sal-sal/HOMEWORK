interface Message {
    text: string;
    sender: "me" | "other";
}

interface ChatData {
    id: string;
    messages: Message[];
}


interface ChatManagerState {
    [chatId: string]: ChatData;
  }
