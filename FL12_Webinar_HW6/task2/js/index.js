const $list = $(".list");
const $input = $("#add-input");
const $add = $("#add-submit");

const todos = [
  {
    text: "Buy milk",
    done: false
  },
  {
    text: "Play with dog",
    done: true
  }
];

let newTask;
let taskText;

const onInputChange = event => {
  newTask = $('<li class="item"></li>').html(
  `<span class="item-text">${event.target.value}</span>
  <button class="item-remove">Remove</button>`
  );
  taskText = {text: event.target.value, done: false};
};

$('form').submit(event => event.preventDefault());

const onAddButtonClick = () => {
  $list.append(newTask);

  todos.push(taskText);

  taskText = {};

  $input.val('');
};

const onListItemClick = event => {
  if (event.target.tagName === 'BUTTON') {
    const item = $(event.target.parentElement);

    todos.splice($('.item').index(item), 1);

    item.remove();
  }

  if (event.target.tagName === 'SPAN') {
    const item = $(event.target);

    item.toggleClass('done');

    if (todos[$('.item').index(item.parent())].done) {
      todos[$('.item').index(item.parent())].done = false;
    } else {
      todos[$('.item').index(item.parent())].done = true;
    }  
  }
};

$input.change(onInputChange);
$add.click(onAddButtonClick);
$list.click(onListItemClick);


// Todolist plugin

$.fn.todoList = function() {
  const label = $('<label for="add-input">New task: </label>');
  const input = $('<input type="text" id="add-input" />');
  const button = $('<button id="add-submit">Add</button>');
  const form = $('<form>').append(label, input, button);
  const list = $('<ul class="list">');

  const todos = [];

  this.append(form, list);

  let newTask;
  let taskText; 

  const onInputChange = event => {
    newTask = $('<li class="item"></li>').html(
    `<span class="item-text">${event.target.value}</span>
    <button class="item-remove">Remove</button>`
    );
    taskText = {text: event.target.value, done: false};
  };

  form.submit(event => event.preventDefault());

  const onAddButtonClick = () => {
    list.append(newTask);
  
    todos.push(taskText);
  
    taskText = {};
  
    input.val('');
  };

  const onListItemClick = event => {
    if (event.target.tagName === 'BUTTON') {
      const item = $(event.target.parentElement);

      console.log(list.children().index(item));

      todos.splice(list.children().index(item), 1);
  
      item.remove();
    }
  
    if (event.target.tagName === 'SPAN') {
      const item = $(event.target);

      item.toggleClass('done');
  
      if (todos[list.children().index(item.parent())].done) {
        todos[list.children().index(item.parent())].done = false;
      } else {
        todos[list.children().index(item.parent())].done = true;
      }  
    }
  };

  input.change(onInputChange);
  button.click(onAddButtonClick);
  list.click(onListItemClick);
};