import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): any => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            let sorbByName;
            if (action.payload === 'up') {
                sorbByName = state.sort((a: UserType, b: UserType) => a.name.localeCompare(b.name));
            } else if (action.payload === 'down') {
                sorbByName = state.sort((a: UserType, b: UserType) => b.name.localeCompare(a.name));
            }
            return sorbByName // need to fix
        }
        case 'check': {

            return state.filter(u => u.age >= 18).reverse() // need to fix
        }
        default:
            return state
    }
}
