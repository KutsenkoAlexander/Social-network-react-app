import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, text: 'Hello World!', likeCount: 10},
            {id: 2, text: 'It\'s second post.', likeCount: 3}
        ]
    },
    dialogPage: {
        dialogs: [
            {id: 1, name: 'Bob', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7IdJ1FLinVuz9qnO_OkkJArH8xsRkXIOv8w&usqp=CAU'},
            {id: 2, name: 'Marty', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7IdJ1FLinVuz9qnO_OkkJArH8xsRkXIOv8w&usqp=CAU'},
            {id: 3, name: 'Tom', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7IdJ1FLinVuz9qnO_OkkJArH8xsRkXIOv8w&usqp=CAU'},
            {id: 4, name: 'Jerry', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7IdJ1FLinVuz9qnO_OkkJArH8xsRkXIOv8w&usqp=CAU'},
            {id: 5, name: 'Barbara', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7IdJ1FLinVuz9qnO_OkkJArH8xsRkXIOv8w&usqp=CAU'}
        ],
        messages: [
            {id: 1, text: 'Hello'},
            {id: 2, text: 'Morning!'},
            {id: 3, text: 'Yo'}
        ]
    },
    sidebar: {
        navigation: [
            {path: '/profile', name: 'Profile'},
            {path: '/dialogs', name: 'Dialogs'},
            {path: '/news', name: 'News'},
            {path: '/music', name: 'Music'},
            {path: '/settings', name: 'Settings'}
        ],
        friends: [
            {id: 1, name: 'Kim', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7IdJ1FLinVuz9qnO_OkkJArH8xsRkXIOv8w&usqp=CAU'},
            {id: 2, name: 'Tom', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7IdJ1FLinVuz9qnO_OkkJArH8xsRkXIOv8w&usqp=CAU'},
            {id: 3, name: 'Rich', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7IdJ1FLinVuz9qnO_OkkJArH8xsRkXIOv8w&usqp=CAU'},
            {id: 4, name: 'Mike', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7IdJ1FLinVuz9qnO_OkkJArH8xsRkXIOv8w&usqp=CAU'}
        ]
    }
}

export let addPost = (text) => {
    let posts = state.profilePage.posts;
    let newPost = {
        id: posts.length + 1,
        text: text,
        likeCount: 0
    };
    posts.push(newPost);
    rerenderEntireTree(state);
};

export let sendMessage = (text) => {
    let messages = state.dialogPage.messages;
    let newMessage = {
        id: messages.length + 1,
        text: text
    };
    messages.push(newMessage);
    rerenderEntireTree(state);
}

export default state;