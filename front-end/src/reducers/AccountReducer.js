import { SIGN_IN, SIGN_UP, SIGN_OUT } from '../actions/AccountActions'
import { setAccount, setToken, setRefreshToken, removeAccount, removeToken, removeRefreshToken } from '../helpers/account'


const initialState = {
    account: null,
}

export default function(state = initialState, action) {
    const { type, payload } = action
    switch(type) {
        case SIGN_IN:
        case SIGN_UP:
            const response = payload ? payload.data : null
            const account = response ? response.data : null
            const metadata = payload ? response.metadata : null

            const token = metadata ? metadata.token : null
            const refreshToken = metadata ? metadata.refreshToken : null

            if(account) setAccount(account)
            if(token) setToken(token)
            if(refreshToken) setRefreshToken(refreshToken)

            return {...initialState, account}
        case SIGN_OUT: {

            removeAccount()
            removeToken()
            removeRefreshToken()

            return {...initialState, account: null}
        }
        default:
            return state;
    }
}