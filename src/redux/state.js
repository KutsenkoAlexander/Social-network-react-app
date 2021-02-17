let store = {
    rerenderEntireTree() {
        console.log("State updated");
    },

    subscribe(observer) {
        this.rerenderEntireTree = observer;
    },

    state: {
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
    },

//--------------------------
//---------- Post ----------
//--------------------------
    addPost() {
        let posts = store.state.profilePage.posts;
        let newPost = {
            id: posts.length + 1,
            text: store.state.profilePage.newPostText,
            likeCount: 0
        };
        posts.push(newPost);
        store.updateNewPostText('');
    },

    updateNewPostText(text) {
        store.state.profilePage.newPostText = text;
        store.rerenderEntireTree();
    },

//--------------------------
//-------- Message ---------
//--------------------------
    sendMessage() {
        let messages = this.state.dialogPage.messages;
        let newMessage = {
            id: messages.length + 1,
            text: this.state.dialogPage.newMessageText
        };
        messages.push(newMessage);
        this.updateNewMessageText('');
    },

    updateNewMessageText(text) {
        this.state.dialogPage.newMessageText = text;
        this.rerenderEntireTree();
    }
}

export default store;