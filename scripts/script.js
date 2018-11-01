$(function () {
    var options = {
        width: 12,
        float: false,
        removable: true,
        removeTimeout: 100,
        acceptWidgets: '.grid-stack-item',
        disableResize: true
    };
    $('#grid-0').gridstack(options);
    $('#grid-1').gridstack(options);
    $('#grid-2').gridstack(options);
    $('#grid-3').gridstack(options);
    $('#grid-4').gridstack(options);
    $('#grid-5').gridstack(options);
    $('#grid-6').gridstack(options);
    $('#grid-null').gridstack(options);
    var items = [
        //{x: 0, y: 0, width: 1, height: 1},
    ];

    $('.grid-stack').each(function () {
        var grid = $(this).data('gridstack');

        _.each(items, function (node) {
            grid.addWidget($('<div><div class="grid-stack-item-content" /><div/>'),
                node.x, node.y, node.width, node.height);
        }, this);
    });

    $('#new-task-container .grid-stack-item').draggable({
        revert: 'invalid',
        handle: '.grid-stack-item-content',
        scroll: false,
        appendTo: 'body'
    });

    function addOnRemoveAddNewTask(selector) {
      $(''+selector).on("remove", function () {

        let innerElement = document.createElement('div');
        innerElement.setAttribute('class', 'grid-stack-item-content');
        innerElement.appendChild(document.createTextNode('New task'));

        let newTaskElement = document.createElement('div');
        newTaskElement.setAttribute('class', 'grid-stack-item');
        newTaskElement.appendChild(innerElement);
        document.getElementById('new-task-container').append(newTaskElement);
        addOnRemoveAddNewTask(selector);

        $(''+selector).draggable({
            revert: 'invalid',
            handle: '.grid-stack-item-content',
            scroll: false,
            appendTo: 'body'
        });
      });
    }

    addOnRemoveAddNewTask('#new-task-container .grid-stack-item')
});
