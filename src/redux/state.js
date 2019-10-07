let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', numberLikes: 15},
            {id: 2, message: 'This is my first post :)', numberLikes: 22}
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Alex'},
            {id: 2, name: 'John'},
            {id: 3, name: 'Bob'},
            {id: 4, name: 'Jim'}
        ],
        messages: [
            {id: 1, text: 'Hello', from: 1, to: 2},
            {id: 2, text: 'Hi', from: 1, to: 2},
            {id: 3, text: 'Yo!', from: 2, to: 1},
            {id: 4, text: 'How are you doing?', from: 1, to: 2}
        ]
    }
};

export default state;