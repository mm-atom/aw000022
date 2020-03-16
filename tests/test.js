import { expect } from 'chai';
import t from '../dist/index';

const data = [{
	name: 'foo',
	id: 'id1'
}, {
	name: 'bar',
	id: 'id2'
}];

describe('文件id拼接url', () => {
	it('部署', () => {
		const v = t('id', data);
		expect(v).deep.eq([{
			name: 'foo',
			id: './fsweb/getfile?id=id1'
		}, {
			name: 'bar',
			id: './fsweb/getfile?id=id2'
		}]);
	});
	it('开发', () => {
		window.host = 'http://127.0.0.1:8889'
		const v = t('id', data);
		expect(v).deep.eq([{
			name: 'foo',
			id: 'http://127.0.0.1:8889/fsweb/getfile?id=id1'
		}, {
			name: 'bar',
			id: 'http://127.0.0.1:8889/fsweb/getfile?id=id2'
		}]);
	});
});
