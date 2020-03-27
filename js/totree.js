// 循环出父节点
function toTreeData(data, id, pid, name) {
	// 建立个树形结构,需要定义个最顶层的父节点，pId是1
	let parent = [];
	for(let i = 0; i < data.length; i++) {

		if(data[i][pid] !== "0") {} else {
			let obj = {
				label: data[i][name],
				id: data[i][id],
				children: []
			};
			parent.push(obj); //数组加数组值
		}
		// console.log(obj);
		//  console.log(parent,"bnm");

	}
	children(parent);

	// 调用子节点方法,参数为父节点的数组
	function children(parent) {
		//console.log(parent)
		if(data.length !== 0) {
			for(let i = 0; i < parent.length; i++) {
				for(let j = 0; j < data.length; j++) {
					if(parent[i].id == data[j][pid]) {
						let obj = {
							label: data[j][name],
							id: data[j][id],
							children: []
						};
						parent[i].children.push(obj);
					}
				}
				children(parent[i].children);
			}
		}
	}
	return parent;
}