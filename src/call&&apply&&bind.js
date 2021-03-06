// 有只猫叫小黑，小黑会吃鱼
const cat = {
	name: '小黑',
	eatFish(...args) {
		console.log('this指向=>', this);
		console.log('...args', args);
		console.log(this.name + '吃鱼');
	},
}
// 有只狗叫大毛，大毛会吃骨头
const dog = {
	name: '大毛',
	eatBone(...args) {
		console.log('this指向=>', this);
		console.log('...args', args);
		console.log(this.name + '吃骨头');
	},
}

console.log('=================== call =========================');
// 有一天大毛想吃鱼了，可是它不知道怎么吃。怎么办？小黑说我吃的时候喂你吃
cat.eatFish.call(dog, '汪汪汪', 'call')
// 大毛为了表示感谢，决定下次吃骨头的时候也喂小黑吃
dog.eatBone.call(cat, '喵喵喵', 'call')

console.log('=================== apply =========================');
cat.eatFish.apply(dog, ['汪汪汪', 'apply'])
dog.eatBone.apply(cat, ['喵喵喵', 'apply'])

console.log('=================== bind =========================');
// 有一天他们觉得每次吃的时候再喂太麻烦了。干脆直接教对方怎么吃
const test1 = cat.eatFish.bind(dog, '汪汪汪', 'bind')
const test2 = dog.eatBone.bind(cat, '喵喵喵', 'bind')
test1();
test2();

// https://segmentfault.com/a/1190000012772040  聊一聊call、apply、bind的区别
