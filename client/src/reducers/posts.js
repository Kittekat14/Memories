import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  LIKE,
} from "../constants/actionTypes";

const posts = (posts = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...posts, action.payload];
    case UPDATE:
    case LIKE:
      return posts.map(
        (post) =>
          post._id === action.payload._id
            ? action.payload
            : post /*if in the action.payload is the _id, use that new payload, otherwise old post-payload */
      );
    case DELETE:
      return posts.filter((post) => post._id !== action.payload); // keep all posts except one inside action.payload!
    default:
      return posts;
  }
};

export default posts;
