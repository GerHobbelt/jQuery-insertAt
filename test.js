// via http://stackoverflow.com/questions/391314/jquery-insertat 


test('can insert into empty list', function() {
    var list = $('<ul></ul>');
    var newItem = $('<li></li>');

    newItem.insertAt(0, list);

    var items = list.children();
    equal(items.length, 1);
});

test('can insert at first position in non-empty list', function(){
    var oldItem = $('<li>old item</li>');
    var list = $('<ul></ul>').append(oldItem);
    var newItem = $('<li>new item</li>');
    
    newItem.insertAt(0, list);

    var items = list.children();
    equal(items.length, 2);
    equal(items.eq(0).text(), newItem.text());
    equal(items.eq(1).text(), oldItem.text());
});

test('can insert at non-first position in non-empty list', function(){
    var oldItem = $('<li>old item</li>');
    var list = $('<ul></ul>').append(oldItem);
    var newItem = $('<li>new item</li>');
    
    newItem.insertAt(1, list);

    var items = list.children();
    equal(items.length, 2);
    equal(items.eq(0).text(), oldItem.text());
    equal(items.eq(1).text(), newItem.text());
});

test('can insert beyond end in non-empty list', function(){
    var oldItem = $('<li>old item</li>');
    var list = $('<ul></ul>').append(oldItem);
    var newItem = $('<li>new item</li>');
    
    newItem.insertAt(7, list);

    var items = list.children();
    equal(items.length, 2);
    equal(items.eq(0).text(), oldItem.text());
    equal(items.eq(1).text(), newItem.text());
});

test('can insert beyond end in empty list', function(){
    var list = $('<ul></ul>');
    var newItem = $('<li>new item</li>');
    
    newItem.insertAt(7, list);

    var items = list.children();
    equal(items.length, 1);
    equal(items.eq(0).text(), newItem.text());
});

test('can insert before start in non-empty list using negative index', function(){
    var oldItem = $('<li>old item</li>');
    var list = $('<ul></ul>').append(oldItem);
    var newItem = $('<li>new item</li>');
    
    newItem.insertAt(-7, list);

    var items = list.children();
    equal(items.length, 2);
    equal(items.eq(0).text(), newItem.text());
    equal(items.eq(1).text(), oldItem.text());
});

test('can insert before start in empty list using negative index', function(){
    var list = $('<ul></ul>');
    var newItem = $('<li>new item</li>');
    
    newItem.insertAt(-7, list);

    var items = list.children();
    equal(items.length, 1);
    equal(items.eq(0).text(), newItem.text());
});
