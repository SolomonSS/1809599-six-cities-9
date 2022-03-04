import {Comment} from "../types/types";

const comment: Comment = {
    "comment": "A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.",
    "date": "Wed Mar 02 2022 19:54:20 GMT+0300 (Москва, стандартное время)",
    'id': 1,
    'offerId': 2,
    "rating": 4,
    "user": {
      "avatarUrl": "img/1.png",
      "id": 1,
      "isPro": false,
      "name": "Oliver.conner"
    }
  };

const comments:Comment[] = [comment, comment, comment];

export {comments};
