import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, text: 'Hello World!', likeCount: 10},
            {id: 2, text: 'It\'s second post.', likeCount: 3}
        ],
        newPostText: ''
    },
    dialogPage: {
        dialogs: [
            {
                id: 1,
                name: 'Bob',
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7IdJ1FLinVuz9qnO_OkkJArH8xsRkXIOv8w&usqp=CAU'
            },
            {
                id: 2,
                name: 'Marty',
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7IdJ1FLinVuz9qnO_OkkJArH8xsRkXIOv8w&usqp=CAU'
            },
            {
                id: 3,
                name: 'Tom',
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7IdJ1FLinVuz9qnO_OkkJArH8xsRkXIOv8w&usqp=CAU'
            },
            {
                id: 4,
                name: 'Jerry',
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7IdJ1FLinVuz9qnO_OkkJArH8xsRkXIOv8w&usqp=CAU'
            },
            {
                id: 5,
                name: 'Barbara',
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7IdJ1FLinVuz9qnO_OkkJArH8xsRkXIOv8w&usqp=CAU'
            }
        ],
        messages: [
            {id: 1, text: 'Hello'},
            {id: 2, text: 'Morning!'},
            {id: 3, text: 'Yo'}
        ],
        newMessageText: ''
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
            {
                id: 1,
                name: 'Kim',
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7IdJ1FLinVuz9qnO_OkkJArH8xsRkXIOv8w&usqp=CAU'
            },
            {
                id: 2,
                name: 'Tom',
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7IdJ1FLinVuz9qnO_OkkJArH8xsRkXIOv8w&usqp=CAU'
            },
            {
                id: 3,
                name: 'Rich',
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7IdJ1FLinVuz9qnO_OkkJArH8xsRkXIOv8w&usqp=CAU'
            },
            {
                id: 4,
                name: 'Mike',
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7IdJ1FLinVuz9qnO_OkkJArH8xsRkXIOv8w&usqp=CAU'
            }
        ]
    }
}

//--------------------------
//---------- Post ----------
//--------------------------
export let addPost = () => {
    let posts = state.profilePage.posts;
    let newPost = {
        id: posts.length + 1,
        text: state.profilePage.newPostText,
        likeCount: 0
    };
    posts.push(newPost);
    updateNewPostText('');
};

export let updateNewPostText = (text) => {
    state.profilePage.newPostText = text;
    rerenderEntireTree(state);
}

//--------------------------
//-------- Message ---------
//--------------------------
export let sendMessage = () => {
    let messages = state.dialogPage.messages;
    let newMessage = {
        id: messages.length + 1,
        text: state.dialogPage.newMessageText
    };
    messages.push(newMessage);
    updateNewMessageText('');
}

export let updateNewMessageText = (text) => {
    state.dialogPage.newMessageText = text;
    rerenderEntireTree(state);
}

export default state;