import * as Enzyme from 'enzyme';
import enzymeAdapterReact16 from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new enzymeAdapterReact16() });

window.alert = () => {};
process.env.NODE_ENV = 'test';
