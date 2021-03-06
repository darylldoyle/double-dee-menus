# Double-Dee-Menus

A basic wrapper for adding and removing an open class to elements based upon a click

## Usage

Pass in your two elements, first the click object and second the menu object

```html
    <a href="" id="MenuButton">Book With Us</a>
    
    <ul id="menu-ul">
        <li><a href="#">Item One</a></li>
        <li><a href="#">Item Two</a></li>
        <li><a href="#">Item Three</a></li>
    </ul>
```

```javascript
    var headerMenu = doubleDeeMenu(document.getElementById('MenuButton'), document.getElementById('menu-ul'));
```


You can also programmatically toggle the menu using the public API

```
    var headerMenu = doubleDeeMenu(document.getElementById('MenuButton'), document.getElementById('menu-ul'));
   
    // Add the open class
    headerMenu.open();
    
    // Remove the open class
    headerMenu.close();
```

**Child/Sub Menus**

You can now bind to child menus too, for dropdowns etc. by passing a selector for your child class in as the third parameter.

```html
    <a href="" id="MenuButton">Book With Us</a>
    
    <ul id="menu-ul">
        <li><a href="#">Item One</a></li>
        <li class="has-child">
            <a href="#">Item Two</a>
            <ul>
                <li><a href="#">Sub-link 1</a></li>
                <li><a href="#">Sub-link 2</a></li>
                <li><a href="#">Sub-link 3</a></li>
            </ul>
        </li>
        <li><a href="#">Item Three</a></li>
    </ul>
```

```javascript
    var headerMenu = doubleDeeMenu(document.getElementById('MenuButton'), document.getElementById('menu-ul'), document.querySelectorAll('.has-child'));
```

## Contributing

If you feel like contributing, add any issues you run across or even better, submit a PR :)