import { loadingReducer } from './loadingReducer'
import { combineReducers, legacy_createStore } from 'redux'
import { themeReducer } from '../../hw12/bll/themeReducer'
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

const reducers = combineReducers({
    loading: loadingReducer, // hw10
    theme: themeReducer, // hw12
})

const store = legacy_createStore(reducers)

export default store

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// @ts-ignore
window.store = store // for dev // для того чтобы автотесты видели состояние данных
