import profileReducer, {addPost, deletePost} from "./profileReducer";

let state = {
    posts: [
        {id: 1, text: 'Hello World!', likeCount: 10},
        {id: 2, text: 'It\'s second post.', likeCount: 3}
    ]
}

test('length posts should be incremented', () => {
    let action = addPost("Foo")
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(3);
});

test('should be correct new text post', () => {
    let action = addPost("Foo")
    let newState = profileReducer(state, action);
    expect(newState.posts[2].text).toBe("Foo");
});

test('length posts should be decremented after deleting post', () => {
    const postId = 1;
    let action = deletePost(postId);
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(1);
});