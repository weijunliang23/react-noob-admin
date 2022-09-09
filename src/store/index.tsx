import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './test'
// ...
// import additionalMiddleware from 'additional-middleware'
//@ts-ignore

export const store: any = configureStore({
  reducer: {
    count: counterReducer
    // posts: postsReducer,
    // comments: commentsReducer,
    // users: usersReducer,
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch