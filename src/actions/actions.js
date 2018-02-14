export const ACTION_TYPE = 'ACTION_TYPE';

export function doAction({ args }) {
  return {
    type: ACTION_TYPE,
    args
  }
}


/*
*
* THUNK ASYNC EXAMPLES
*
*/

// // Basic fetchPosts function
// export function fetchPosts(category) {
//   return function(dispatch) {
    
//     dispatch(requestPosts(category))

//     if (category === 'All') {
//       return getPosts(category)
//       .then(posts =>
//         dispatch(receivePosts(category, posts))
//       )
//     }

//     return getCatPosts(category)
//       .then(posts =>
//         dispatch(receivePosts(category, posts))
//       )

//   }
// }


// // Tells below function whether it needs to fetch posts
// export function shouldFetchPosts(state, category) {
//   const posts = state.postsByCategory[category]

//   if (!posts) {
//     return true
//   } else if (posts.isFetching) {
//     return false
//   } else {
//     return posts.didInvalidate
//   }
// }

// // Fetches posts dependind on whether shouldFetchPosts returns true
// export function fetchPostsIfNeeded(category) {
//   return (dispatch, getState) => {
//     if (shouldFetchPosts(getState(), category)) {
//       return dispatch(fetchPosts(category))
//     } else {
//       return Promise.resolve()
//     }
//   }
// }


