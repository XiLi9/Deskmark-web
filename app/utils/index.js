import uuid from 'uuid';

const STORAGE = window.localStorage;
const STORAGE_KEY = 'deskmark';

// 获取所有的文档
export function getAll(){
	return new Promise((resolve) => {
		const results = STORAGE.getItem(STORAGE_KEY);
		try{
			resolve(
				results ? JSON.parse(results) : []
			);
		}catch(e){
			resolve([]);
		}
	})
}

// 保存所有的文档
export function saveAll(results){
	return new Promise((resolve) => {
		STORAGE.setItem(
			STORAGE_KEY,
			JSON.stringify(results)
		);
		resolve();
	});
}

// 根据ID获取相应的文档 ID是唯一的
export function getEntry(id){
	return getAll().then(
			results => results.find(
				result => result.id === id
			)
		);
}

// 新建插入新的文档，包含标题title和内容content
export function insertEntry(title, content){
	const entry = {
		title,
		content,
		//随机生成唯一的ID ， uuid.v1()可以生成基于时间戳的唯一的id
		id: uuid.v4(),  
		time: new Date().getTime(), // 当前时间的时间戳
	};
	return getAll().then(
			results => [...results, entry]
		).then(
			saveAll
		).then(
			() => entry
		);
}

// 根据ID删除文档
export function deleteEntry(id){
	return getAll().then(
				results => results.filter(
					result => { return result.id !== id}
				)
			).then(
				saveAll		
			);
}

// 更新文档
export function updateEntry(id, title, content){
	let entry;
	return getAll().then(
			results => results.map(
				result => (
					result.id === id ? (entry ={
						...result,
						title,
						content
					}): result
				)
			)
		).then(
			saveAll
		).then(
			() => entry
		)
}