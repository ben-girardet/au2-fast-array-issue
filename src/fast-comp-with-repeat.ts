import { html, repeat, customElement, FASTElement, observable } from '@microsoft/fast-element';

const template = html<FastCompWithRepeat>`
<div>Global part of component</div>
${repeat(x => x.values, html<string>`<div>Repeat part with ${x => x}</div>`)}
`;

@customElement({
  name: 'fast-comp-with-repeat',
  template,
})
export class FastCompWithRepeat extends FASTElement {
  @observable public values = ['value 1', 'value 2', 'value 3'];
}