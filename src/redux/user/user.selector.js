import { createSelector } from 'reselect';

const selectUser = state => state.user;

export const selectCurrenctUser = createSelector(
    [selectUser],
    (user) => user.currentUser
)
