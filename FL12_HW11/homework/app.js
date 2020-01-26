const structure = [
    {
      'folder': true,
      'title': 'Films',
      'children': [
        {
          'title': 'Iron Man.avi'
        },
        {
          'folder': true,
          'title': 'Fantasy',
          'children': [
            {
              'title': 'The Lord of the Rings.avi'
            },
            {
              'folder': true,
              'title': 'New folder 1',
              'children': false
            }
          ]
        }
      ]
    },
    {
      'folder': true,
      'title': 'Documents',
      'children': [
        {
          'folder': true,
          'title': 'EPAM Homework answers',
          'children': null
        }
      ]
    }
];

const rootNode = document.getElementById('root');

const addMainNodes = (tree) => {
  for (let i = 0; i < tree.length; i++) {
    let mainNode = document.createElement('div');

    if (tree[i].folder) {
      mainNode.setAttribute('class', `main-node-${i + 1} node`);
      mainNode.innerHTML = `<i class="material-icons icon-folder">folder</i><p class="title">${tree[i].title}</p>`;
    } else {
      mainNode.setAttribute('class', `main-node-${i + 1} node`);
      mainNode.innerHTML = `<i class="material-icons icon-file">
                              insert_drive_file
                            </i>
                            <p class="title">
                              ${tree[i].title}
                            </p>`;
    }

    rootNode.appendChild(mainNode);
  }
};

const workWithChildrenNodes = (childrenArray, parrent) => {
  for (let i = 0; i < childrenArray.length; i++) {
    let node = document.createElement('div');

    if (childrenArray[i].folder) {
      node.setAttribute('class', 'node hidden');
      node.innerHTML = `<i class="material-icons icon-folder">folder</i><p class="title">${childrenArray[i].title}</p>`;
    } else {
      node.setAttribute('class', 'node hidden');
      node.innerHTML = `<i class="material-icons icon-file">
                          insert_drive_file
                        </i>
                        <p class="title">
                          ${childrenArray[i].title}
                        </p>`;
    }

    parrent.appendChild(node);

    if (childrenArray[i].children) {
      workWithChildrenNodes(childrenArray[i].children, node);
    }
  }

}

const addAllNodes = (tree) => {
  for (let i = 0; i < tree.length; i++) {
    if (tree[i].children) {
      workWithChildrenNodes(tree[i].children, document.getElementsByClassName(`main-node-${i + 1}`)[0])
    }
  }
}

const makeNodesClicks = () => {
  const allNodes = document.getElementsByClassName('node');

  for (let i = 0; i < allNodes.length; i++) {
    let children = allNodes[i].childNodes;
    
    allNodes[i].addEventListener('click', (e) => {
      e.stopPropagation();

      for (let j = 0; j < children.length; j++) {
        if(children[j].localName === 'div') {
          if (children[j].getAttribute('class') === 'node hidden') {
            children[j].setAttribute('class', 'node visible');
          } else {
            children[j].setAttribute('class', 'node hidden');
          }
        }
        
      }
    });
  }
}

addMainNodes(structure);
addAllNodes(structure);
makeNodesClicks();
