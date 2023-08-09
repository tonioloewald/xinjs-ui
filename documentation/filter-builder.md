# `<filter-builder>`

This component is designed for use with `<data-table>` but can be used independently if so-desired. It turns
a `query` string into an `filter` of type `ArrayFilter`.

## Customizing Filters

As well as `filterBuilder`, the `availableFilters` collection is exported and can be customized directly. By default,
each `<filter-builder>` element's `filters` property defaults to `availableFilters` but you can augment it or
individually set.

The filters need to be ordered from strictest `token` to least-strict `token` where tokens have a chance of
overlapping. E.g. the `>>` (before) token has to be before the `>` (greater than) token

I just needed the new capabilities for the project I'm working on and figured they were probably pretty likely to be useful to other people.

A filter is just an object that conforms to the `FilterMaker` interface. E.g. the "contains" filter looks like this:

```
{
 hint: 'field:value',
 explanation: 'field contains value, ignoring case',
 description: (field: string, value: string) =>
   `${field} contains "${value}"`,
 token: /^([^\s]+?):(.+)$/,
 makeFilter: (field: string, value: string) => {
   value = value.toLocaleLowerCase()
   return (obj: any) =>
     String(obj[field]).toLocaleLowerCase().includes(value)
 },
}
```

This is sufficient to make each filter atom composable and self-documenting as a text `hint`, in general `explanation`, and in particular `description`.

Tokens are matched against a term, and must return enough values to drive `makeFilter`. A **term** currently looks like:

`query.match(/[^\s"]+("[^"]+")?/g)`

I.e. a bunch of non-whitespace characters optionally followed directly by a double-quoted string (containing not double-quotes). E.g. `foo` `$$foo:bar!><` or `foo"bar baz"`.

Filters need to be inserted in the list in order of decreasing strictness of token, so the `>>` filter needs to precede the `>` filter or the latter would consume the former's terms.
