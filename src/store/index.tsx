import { configureStore, MiddlewareArray } from '@reduxjs/toolkit'
// ...
// import additionalMiddleware from 'additional-middleware'
import logger from 'redux-logger'

export const store: any = configureStore({
  reducer: {
    // posts: postsReducer,
    // comments: commentsReducer,
    // users: usersReducer,
  },
  middleware: new MiddlewareArray().concat(logger),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch