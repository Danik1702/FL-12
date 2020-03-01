const loader = () => {
    const loader = document.createElement('div');
    loader.className = 'ui segment spinner';
    loader.innerHTML = `
    <div class="ui active dimmer">
        <div class="ui massive text loader">Loading</div>
    </div>
    `;

    return loader;
}

const fetchListOfUsers = () => {
    document.querySelector('#root').append(loader());

    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => {
            document.querySelector('.spinner').remove();

            const list = document.createElement('div');
            list.className = 'list-container';

            json.forEach(user => {
                const listItem = document.createElement('ul');
                listItem.className = 'list';

                getListOfProps(user, listItem);
                list.append(listItem);
            });

            document.querySelector('#root').append(list);

            return list;
        })
        .catch(error => console.error(error));
};

const getListOfProps = (obj, parrent) => {
    for (key in obj) {
        const listItem = document.createElement('li');
        
        if (typeof obj[key] === 'object') {
            listItem.innerHTML = `${key} :`;

            const childList = document.createElement('ul');
            
            listItem.append(childList);

            getListOfProps(obj[key], childList);
        } else {
            listItem.innerHTML = `${key} : ${obj[key]}`;
        }

        parrent.append(listItem);
    }
};

const renderButtons = () => {
    fetchListOfUsers()
        .then(list => {
            list.addEventListener('click', onClick);

            for (li of list.children) {
                const editButton = document.createElement('button');
                editButton.innerHTML = 'Edit';
                editButton.className = 'button edit-button';

                const deleteButton = document.createElement('button');
                deleteButton.innerHTML = 'Delete';
                deleteButton.className = 'button delete-button';

                li.append(editButton, deleteButton);
            }
        });
};

const onClick = (e) => {
    if (e.target.tagName === 'BUTTON' && e.target.innerHTML === 'Delete') {
        const elementId = +e.path[1].firstElementChild.innerHTML.match(/\d+/g)[0];
        e.path[1].replaceWith(loader());

        fetch(`https://jsonplaceholder.typicode.com/users/${elementId}`)
            .then(() => {
                document.querySelector('.spinner').remove();
            })
            .catch(error => console.log(error));
    } else if (e.target.tagName === 'BUTTON' && e.target.innerHTML === 'Edit') {
        const elementId = +e.path[1].firstElementChild.innerHTML.match(/\d+/g)[0];

        if (e.path[1].lastElementChild.tagName === 'FORM') {
            e.path[1].lastElementChild.remove();
        } else {
            e.path[1].append(renderEditForm());
            
            e.path[1].lastElementChild.addEventListener('submit', (event) => { onFormSubmit(event, elementId, e.path[1]) });
        }
    } else if (e.target.tagName === "LI" && e.target.innerHTML.startsWith('name')) {
        const userId = +e.path[1].firstElementChild.innerHTML.match(/\d+/g)[0];
        const details = document.querySelector('#details');
        const root = document.querySelector('#root');
        root.className = 'hidden';
        details.append(loader());

        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
            .then(response => response.json())
            .then(json => {
                document.querySelector('.spinner').remove();

                const list = document.createElement('ul');
                list.className = 'list-container';

                json.forEach(user => {
                    const listItem = document.createElement('li');
                    listItem.className = 'list';

                    getListOfProps(user, listItem);
                    list.append(listItem);
                });

                details.append(list);

                return list;
            })
            .catch(error => console.log(error));
    }
};

const renderEditForm = () => {
    const form = document.createElement('form');
    form.className = 'form';
    form.innerHTML = `
    <label>name:</label>
    <input class="form-input" placeholder="name" /><br />
    <label>username:</label>
    <input class="form-input" placeholder="username" /><br />
    <label>Email:</label>
    <input class="form-input" type="email" placeholder="email" /><br />
    <input class="form-submit button" type="submit" value="submit"/>
    `

    return form;
}

const onFormSubmit = async (e, id, replaceElement) => {
    e.preventDefault();

    replaceElement.replaceWith(loader());

    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({
            id,
            name: e.target.elements[0].value,
            username: e.target.elements[1].value,
            email: e.target.elements[2].value
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })

    const json = await res.json();

    document.querySelector('.spinner').remove();

    getListOfProps(json, document.querySelector('.list-container'));
    document.querySelector('.list-container').lastElementChild.className = 'list';
};

renderButtons();
