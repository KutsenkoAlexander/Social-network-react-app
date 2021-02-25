const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {
    _state: {
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

    _callSubscriber() {
        console.log("State updated");
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let posts = this._state.profilePage.posts;
            let newPost = {
                id: posts.length + 1,
                text: this._state.profilePage.newPostText,
                likeCount: 0
            };
            posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber();
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.text;
            this._callSubscriber();
        } else if (action.type === SEND_MESSAGE) {
            let messages = this._state.dialogPage.messages;
            let newMessage = {
                id: messages.length + 1,
                text: this._state.dialogPage.newMessageText
            };
            messages.push(newMessage);
            this._state.dialogPage.newMessageText = '';
            this._callSubscriber();
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogPage.newMessageText = action.text;
            this._callSubscriber();
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    text: text
});

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});

export const updateNewMessageTextActionCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    text: text
});

export default store;