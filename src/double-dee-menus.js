/**
 * Easy wrapper for opening and closing menu items
 *
 * @param button
 * @param menu
 * @returns {{open: open, close: (close|Function|Window.close)}}
 */
function doubleDeeMenu(button, menu) {

    /**
     * Check for button clicks and handle them
     */
    if (button.addEventListener) {
        button.addEventListener('click', toggleMenu);
    } else {
        button.attachEvent('on' + 'click', function(){
            toggleMenu.call();
        });
    }

    /**
     * Private function used to toggle the menu on click
     *
     * @param event
     */
    function toggleMenu(event) {
        event.preventDefault();

        if (menu.classList) {
            menu.classList.toggle('open');
        } else {
            var classes = menu.className.split(' ');
            var existingIndex = -1;
            for (var i = classes.length; i--;) {
                if (classes[i] === 'open')
                    existingIndex = i;
            }

            if (existingIndex >= 0)
                classes.splice(existingIndex, 1);
            else
                classes.push('open');

            menu.className = classes.join(' ');
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
        close: close,
    }
}