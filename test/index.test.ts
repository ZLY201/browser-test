import { expect } from 'chai';
import render from 'src/index';

before(function () {
  const root = document.createElement('div');
  root.id = 'root';
  document.body.append(root);
});

describe('Test Demo', function () {
  it('Unit Test 1', function () {
    const root = document.getElementById('root')!;
    expect(typeof root).to.equal('object');
    render(root);
    const div = root.children[0];
    expect(typeof div).to.equal('object');
    const divCss = window.getComputedStyle(div);
    expect(divCss.width).to.equal('100px');
    expect(divCss.height).to.equal('100px');
    const button = div.children[0];
    expect(typeof button).to.equal('object');
    expect(button.innerHTML).to.equal('click');
  });
});
