export const getDesigners = (state) => {
   return  state.teamPage.designers
}

export const getPageSize = (state) => {
   return  state.teamPage.pageSize
}

export const getTotalUsersCount = (state) => {
   return  state.teamPage.totalUsersCount
}

export const getCurrentPage = (state) => {
   return  state.teamPage.currentPage
}

export const getIsFetching = (state) => {
   return  state.teamPage.isFetching
}

export const getFollowingInProgress = (state) => {
   return  state.teamPage.followingInProgress
}

