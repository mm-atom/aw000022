import global from '@mmstudio/global';

/**
 * 获取图片地址
 * @param field_name 数据中图片地址的字段名
 * @param data 数据
 * ```ts
 */
export default function generate_file_url(field_name: string, data: { [field_name: string]: number | string | boolean }[]) {
	return data.map((it) => {
		return {
			...it,
			[field_name]: `${global('host', '.')}/fsweb/getfile?id=${it[field_name]}`
		};
	});
}
