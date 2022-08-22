import renderer from 'react-test-renderer';
import Button from '.';
it('Button should trigger onClick() function', () => {
  const component = renderer.create(
    <Button
      color="#fff"
      backgroundColor="#aa33b5"
      content="Add Token"
      onClick={jest.fn}
    ></Button>,
  );
  const instance = component.root;
  const button = instance.findByType('button');
  button.props.onClick();
  expect(button.props.onClick).toBe(jest.fn);
});
