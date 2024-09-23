/*!
# blueprint-loader

`<xin-bp>` is a simple element provided by `xinjs` for the dynamic loading
of component **blueprints**.

```html
<xin-bp
  blueprint="https://loewald.com/lib/swiss-clock"
>
  <code style="color: var(--brand-color)">xinjs</code> rules!
</xin-bp>
```

## Attributes

- `blueprint` is the url of the `blueprint` javascript module (required)
- `tag` is the tagName you wish to use. If the name of the blueprint is
  hyphenated, then that will be used by default
- `property` if the blueprint module exports the blueprint function as
  a property, you can specify the property here.
*/
