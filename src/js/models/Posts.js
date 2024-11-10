import { Post } from './Post';

export class Posts {
  constructor(posts = []) {
    this.posts = posts.map(
      (post) =>
        new Post(
          post._count,
          post.author,
          post.body,
          post.created,
          post.id,
          post.media,
          post.tags,
          post.title,
          post.updated,
          post.comments,
        )
    );
  }
}
