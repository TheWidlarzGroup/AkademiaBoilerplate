# FAQ

1. Don't type things as `any`
2. Don't use default exports
3. We prefer `type` over `interface`
4. Don't use prefix **I** in type name
5. Destructure props only when its necessary
6. Please add <b>unit tests</b> for functions you wrote
7. Use naming convention `feature/my-awesome-feature` and `bugfix/some-bug` for <b>branches</b>
8. Use [this style guide](https://gist.github.com/robertpainsi/b632364184e70900af4ab688decf6f53) in commits
9. Commit only code that successfully passes 'yarn full'
10. Don't use hardcoded strings, use <b>i18n</b>
11. Use <b>meaningful names</b> for variables and components
12. Try to write <b>reusable</b> code

Please Don't use [FC](https://fettblog.eu/typescript-react-why-i-dont-use-react-fc) to type React Components without
children.
<br/>
instead do sth like this

```tsx
type ComponentProps = {
  label: string
}

export const Component = (props: ComponentProps) => {
  //...
}
```

# Links

[FIGMA](https://www.figma.com/file/eL0JsIEwtlNm7ozzFK3HOY/Akademia-vol.-2?node-id=0%3A1)

# BACKEND

- Docs:
  `https://akademia.danielgrychtol.com/api/docs`
- Base URL:
  `https://akademia.danielgrychtol.com/api`
