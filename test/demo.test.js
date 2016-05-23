import { mount, shallow } from 'enzyme';
import MyButtonBox from '../public/scripts/demo';

describe('test MyButtonBox',() => {
	it('should have a button id button box',() => {
		const myButtonBox = mount(
			<MyButtonBox />
		);
		except(myButtonBox.find('#button')).to.have.length(1);
	});
})