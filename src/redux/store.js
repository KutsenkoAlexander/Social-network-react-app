import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";
import sidebarReducer from "./sidebarReducer";

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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogPage = dialogReducer(this._state.dialogPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber();
    }
}

export default store;