# Trying out Redux-Toolkit

To use Redux Toolkit, you'd first need to create a store.

```
export const store = configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer,
    todo: todoReducer,
  },
});
```
