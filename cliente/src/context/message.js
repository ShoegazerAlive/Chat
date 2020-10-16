
import React, { createContext, useReducer, useContext } from 'react'

const MessageStateContext = createContext()
const MessageDispatchContext = createContext()

const messageReducer = (state, action) => {
  let usersCopy, userIndex
  const { username, message, messages, reaction } = action.payload
  switch (action.type) {
    case 'SET_USERS':
      return {
        ...state,
        users: action.payload,
      }
    case 'SET_USER_MESSAGES':
      usersCopy = [...state.users]

      userIndex = usersCopy.findIndex((u) => u.username === username)

      usersCopy[userIndex] = { ...usersCopy[userIndex], messages }

      return {
        ...state,
        users: usersCopy,
      }
    case 'SET_SELECTED_USER':
      usersCopy = state.users.map((user) => ({
        ...user,
        selected: user.username === action.payload,
      }))

      return {
        ...state,
        users: usersCopy,
      }
    case 'ADD_MESSAGE':
      usersCopy = [...state.users]

      userIndex = usersCopy.findIndex((u) => u.username === username)

      message.reactions = []

      let newUser = {
        ...usersCopy[userIndex],
        messages: usersCopy[userIndex].messages
          ? [message, ...usersCopy[userIndex].messages]
          : null,
        latestMessage: message,
      }

      usersCopy[userIndex] = newUser

      return {
        ...state,
        users: usersCopy,
      }

    case 'ADD_REACTION':
      usersCopy = [...state.users]

      userIndex = usersCopy.findIndex((u) => u.username === username)

      let userCopy = { ...usersCopy[userIndex] }

      const messageIndex = userCopy.messages?.findIndex(
        (m) => m.uuid === reaction.message.uuid
      )

      if (messageIndex > -1) {
        // Haz una copia superficial de los mensajes del usuario
        let messagesCopy = [...userCopy.messages]

        // Haz una copia superficial de las reacciones a los menajaes del usuario
        let reactionsCopy = [...messagesCopy[messageIndex].reactions]

        //Encuentra el index del mensaje al que esta reacción pertenece
        const reactionIndex = reactionsCopy.findIndex(
          (r) => r.uuid === reaction.uuid
        )

        if (reactionIndex > -1) {
          // Si la reacción existe, actualiza
          reactionsCopy[reactionIndex] = reaction
        } else {
          // Si la reacción es nueva, agrégala
          reactionsCopy = [...reactionsCopy, reaction]
        }

        messagesCopy[messageIndex] = {
          ...messagesCopy[messageIndex],
          reactions: reactionsCopy,
        }

        userCopy = { ...userCopy, messages: messagesCopy }
        usersCopy[userIndex] = userCopy
      }

      return {
        ...state,
        users: usersCopy,
      }

    default:
      throw new Error(`Unknown action type: ${action.type}`)
  }
}

export const MessageProvider = ({ children }) => {
  const [state, dispatch] = useReducer(messageReducer, { users: null })

  return (
    <MessageDispatchContext.Provider value={dispatch}>
      <MessageStateContext.Provider value={state}>
        {children}
      </MessageStateContext.Provider>
    </MessageDispatchContext.Provider>
  )
}

export const useMessageState = () => useContext(MessageStateContext)
export const useMessageDispatch = () => useContext(MessageDispatchContext)