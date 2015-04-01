/**
 * Easy wrapper for opening and closing menu items
 *
 * @param button
 * @param menu
 * @param childMenuClass
 * @returns {{open: open, close: (close|Function|Window.close)}}
 */
function doubleDeeMenu(button, menu, childMenuClass) {

    /**
     * Check for presence of child menu
     */
    childMenuClass = typeof childMenuClass !== 'undefined' ? childMenuClass : false;

    /**
     * Check for button clicks and handle them
     */
    if (button.addEventListener) {
        button.addEventListener('click', function() {
            toggleMenu(menu);
        });
    } else {
        button.attachEvent('on' + 'click', function(){
            toggleMenu(menu);
        });
    }

    /**
     * Bind the toggle event to any child menus if present
     */
    if (childMenuClass !== false) {
        forEach(childMenuClass, function(el, i){
            if (el.addEventListener) {
                el.addEventListener('click', function() {
                    toggleMenu(el);
                });
            } else {
                el.attachEvent('on' + 'click', function() {
                    toggleMenu(el);
                });
            }
        });
    }

    /**
     * Private for each function
     *
     * @param array
     * @param fn
     */
    function forEach(array, fn) {
        for (i = 0; i < array.length; i++)
            fn(array[i], i);
    }

    /**
     * Private function used to toggle the menu on click
     *
     * @param item
     */
    function toggleMenu(item) {
        //console.log(item);
        event.preventDefault();

        if (item.classList) {
            item.classList.toggle('open');
        } else {
            var classes = item.className.split(' ');
            var existingIndex = -1;
            for (var i = classes.length; i--;) {
                if (classes[i] === 'open')
                    existingIndex = i;
            }

            if (existingIndex >= 0)
                classes.splice(existingIndex, 1);
            else
                classes.push('open');

            item.className = classes.join(' ');
        }
    }

    /**
     * Manually open the menu
     */
    function open() {
        if (menu.classList)
            menu.classList.add('open');
        else
            menu.className += ' ' + 'open';
    }

    /**
     * Manually close the menu
     */
    function close() {
        if (menu.classList)
            menu.classList.remove('open');
        else
            menu.className = menu.className.replace(new RegExp('(^|\\b)' + 'open'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }

    return {
        open: open,
        close: close
    }
}