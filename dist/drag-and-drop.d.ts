/*!
# drag & drop

> **Note** this library is a modernized version of the [b8rjs](https://b8rjs.com) drag-and-drop.js library.
> It removes all usage of b8rjs and has no dependencies.

A lightweight library building on top of HTML5 drag and drop behavior.

This module sets up some global event handlers and *just works*&trade; (arguably, it merely does things
that the browser should do, such as add a CSS selector for drop zones that are compatible
with what's being dragged).

This module uses but *does not define* the following class selectors:

- `.drag-source` an element being dragged
- `.drag-target` an element on which the dragged object may be dropped
- `.drag-over` a `.drag-target` which the object is currently over

You may also wish to create style rules for:

- `[draggable="true"]` anything other than a `<a>` (and perhaps an `<img>`) that can be dragged
- `[data-drag]` indicates *types* of draggable things that can be dropped on them.
- `[data-drop]` indicates potential *drop zones*.

> **Note** `draggable` is has to be set to "true", [see documentation on draggable](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/draggable).

## Draggable Objects

To create a draggable element, add `draggable="true"`.

    <div draggable="true">Drag Me</div>

To specify the type(s) of content that will be dragged, use the `data-drag` attribute:

    <div draggable="true" data-drag="text/plain">Drag Me</div>

To specify the content dragged, use a `data-drag-content` attribute.

    <div
      draggable="true"
      data-drag="text/plain"
      data-drag-content="Surprise!"
    >Drag Me</div>

## Drop Zones

To create a drop zone, use the data-drop attribute set to a semicolon-delimited list
of mime types:

    <div data-drop="text/plain">
      Drop plain text here
    </div>
    <div data-drop="text/plain;text/html">
      Drop html or plain text here
    </div>

Finally, you can override default drop behavior (which is to copy the dragged node into
the drop zone node) simply using data-event="drop:path.to.drop_handler" as usual.

    <div
      data-drop="custom"
      data-event="drop:path.to.drop_handler"
    >
      Drop some custom thing here
    </div>

### Typed Drop Zones Example

```html
<div style="display: grid; grid-template-columns: 50% 50%">
  <div>
    <h4>Draggable</h4>
    <a class="drag" href="javascript: alert('I don't do anything)">Links are draggable by default</a>
    <p draggable="true">
      Just adding the <code>draggable="true"</code>
      makes this paragraph draggable (as text/html by default)
    </p>
    <p draggable="true" data-drag="text/html">
      Draggable as <i>text/html</i>
    </p>
    <p draggable="true" data-drag="text/plain" data-drag-content="Surprise!">
      Draggable as <i>text/plain</i>, with <b>custom content</b>
    </p>
    <p draggable="true" data-drag="text/html;text/plain">
      Draggable as <i>text/html</i> or <i>text/plain</i>
    </p>
    <p draggable="true" data-drag="text/plain">
      Draggable as <i>text/plain</i>
    </p>
  </div>
  <div>
    <h4>Drop Targets</h4>
    <div data-drop="text/html">
      You can drop stuff here
    </div>
    <div data-drop="text/html">
      You can drop HTML here
    </div>
    <div data-drop="text/*">
      You can drop any text
    </div>
    <div data-drop="text/html;url">
      You can drop HTML or urls here
    </div>
    <div
      data-drop="special/any"
      data-event="drop:_component_.drop"
    >
      I accept anything and have special drop handling
    </div>
  </div>
</div>
```
```css
.drag-source {
  box-shadow: 0 0 2px 2px orange;
  opacity: 0.5;
}
.drag-target {
  min-height: 10px;
  background: rgba(0,0,255,0.25);
}
.drag-target.drag-over {
  background: rgba(0,0,255,0.5);
}
:not([data-drop]) > .drag,
[draggable="true"] {
  border: 1px solid rgba(255,192,0,0.5);
  cursor: pointer;
  display: block;
}

:not([data-drop]) > .drag,
[data-drop],
[draggable="true"] {
  padding: 4px;
  margin: 4px;
  border-radius: 5px;
}
```

### Reorderable List Example

```js
const { elements, xinProxy, getListItem } = xinjs

const shuffle = (deck) => {
  var shuffled = [];
  for( const card of deck ){
    shuffled.splice( Math.floor( Math.random() * (1 + shuffled.length) ), 0, card );
  }
  return shuffled;
}

const colors = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'indigo',
  'violet',
]
const { spectrum } = xinProxy({
  spectrum: shuffle(colors).map(color => ({color}))
}, true)

const { div, template } = elements

let dragged = null

const dropColor = (event) => {
  const dropped = getListItem(event.target)
  console.log(dragged, dropped)
  if (dragged !== dropped) {
    const draggedIndex = spectrum.indexOf(dragged)
    spectrum.splice(draggedIndex, 1)
    if (!dropped) {
      spectrum.push(dragged)
    } else {
      const droppedIndex = spectrum.indexOf(dropped)
      spectrum.splice(droppedIndex, 0, dragged)
    }
  }

  event.preventDefault()
  event.stopPropagation()
}

preview.append(
  div(
    {
      bindList: { value: spectrum, idPath: 'color' }
    },
    template(
      div(
        div({
          dataDrop: 'reorderable/spectrum',
          onDrop: dropColor
        }),
        div({
          bindText: '^.color',
          draggable: 'true',
          dataDrag: 'reorderable/spectrum',
          bind: {
            value: '^.color',
            binding(element, value) {
              element.style.backgroundColor = value
            }
          },
          onDragstart(event) {
            dragged = getListItem(event.target)
          }
        })
      )
    )
  ),
  div({
    dataDrop: 'reorderable/spectrum',
    onDrop: dropColor
  }),
)
```
```css
[data-drop="reorderable/spectrum"] {
  height: 12px;
  z-index: 10;
  margin: -4px 4px;
}
```
*/
export declare function start(evt: DragEvent): void;
export declare function drag(evt: DragEvent): void;
export declare function leave(): void;
export declare function drop(evt: DragEvent): void;
export declare const draggedElement: () => Element;
