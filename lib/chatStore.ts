export type Message = {
  sender: string
  text: string
}

export type Chat = {
  users: string[]
  messages: Message[]
}

export let chats: Chat[] = []