import AuthenticationClient from '@/api/clients/AuthenticationClient';

const client = new AuthenticationClient('https://apistaging.polahrisokto.com/api');

const state = {
  authToken: localStorage.getItem('authToken'),
  authUser: JSON.parse(localStorage.getItem('authUser')),
};

const getters = {
  authUserObj (state) {
    return state.authUser;
  },
  authUserName (state) {
    return state.authUser ? `${state.authUser.firstname} ${state.authUser.lastname}` : '';
  },
  authUserAvatar (state) {
    return state.authUser && state.authUser.avatar;
  },
  authUserEmail (state) {
    return state.authUser && state.authUser.email;
  },
};

const mutations = {
  SET_AUTH_TOKEN (state, token) {
    state.authToken = token;
    localStorage.setItem('authToken', token);
  },
  SET_AUTH_USER (state, user) {
    state.authUser = user;
    localStorage.setItem('authUser', JSON.stringify(user));
  },
  CLEAR_AUTH_USER (state) {
    state.authUser = null;
    state.authToken = null;
    localStorage.removeItem('authToken');
    localStorage.removeItem('authUser');
  },
};

const actions = {
  async login ({ commit }, payload) {
    const { status, data: { token, user } } = await client.login(payload);
    if (status !== 200) {
      console.error('login failed');
      return false;
    }
    commit('SET_AUTH_TOKEN', token);
    commit('SET_AUTH_USER', user);
    return true;
  },
  logout ({ commit }) {
    commit('CLEAR_AUTH_USER');
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
