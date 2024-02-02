export default function render(container: HTMLElement) {
  const a = [12];
  console.log(a);
  console.log(a.at(0));
  container.innerHTML =
`<div style="width: 100px; height: 100px; background-color: red">
  <button>click</button>
</div>`;
}
