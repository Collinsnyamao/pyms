
export default {
    todoArray: [
        {
            "id": 0,
            "title": "Refactor Code",
            "desc": "Pie liquorice wafer cotton candy danish. Icing topping jelly-o halvah pastry lollipop.",
            "isImportant": true,
            "isStarred": false,
            "tags": ["doc", "backend"],
            "isDone": false,
            "isTrashed": false
        },
        {
            "id": 1,
            "title": "Submit Report",
            "desc": "Donut tart toffee cake cookie gingerbread. Sesame snaps brownie sugar plum candy canes muffin cotton candy.",
            "isImportant": false,
            "isStarred": true,
            "tags": ["frontend", "doc"],
            "isDone": false,
            "isTrashed": false
        },
        {
            "id": 2,
            "title": "Send PPT 🎁",
            "desc": "Dragée gummi bears tiramisu brownie cookie. Jelly beans pudding marzipan fruitcake muffin. Wafer gummi bears lollipop pudding lollipop biscuit.",
            "isImportant": true,
            "isStarred": true,
            "tags": ["backend", "doc"],
            "isDone": false,
            "isTrashed": false
        },
        {
            "id": 7,
            "title": "Fix Project",
            "desc": "Cookie fruitcake macaroon muffin apple pie chocolate bar toffee oat cake. Icing chocolate danish.",
            "isImportant": false,
            "isStarred": false,
            "tags": ["backend"],
            "isDone": false,
            "isTrashed": true
        },
        {
            "id": 8,
            "title": "Remove redundant files",
            "desc": "Brownie jelly beans tootsie roll brownie marshmallow. Sesame snaps halvah marzipan chocolate cake. Icing bear claw pie apple pie.",
            "isImportant": false,
            "isStarred": false,
            "tags": [],
            "isDone": true,
            "isTrashed": true
        },
        {
            "id": 9,
            "title": "Fix Responsiveness 💻",
            "desc": "Jelly topping toffee bear claw. Sesame snaps lollipop macaroon croissant cheesecake pastry cupcake.",
            "isImportant": true,
            "isStarred": false,
            "tags": ["frontend"],
            "isDone": false,
            "isTrashed": false
        },
    ],
    todoTags: [
        { text: 'Frontend' ,value : 'frontend', color: 'primary' },
        { text: 'Backend', value: 'backend', color: 'warning'},
        { text: 'Doc', value: 'doc', color: 'success'},
        { text: 'Bug', value: 'bug', color: 'danger' },
    ],
    todoFilter: 'all',
    todoSearchQuery: '',
}