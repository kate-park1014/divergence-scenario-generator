export const scenario_snowy_astrielle_sovereign_04 = {
	"scenario_id": "snowy_astrielle_sovereign_04",
	"order": 4,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"Astri": {
			"id": "actor_10",
			"name": {
				"korean": "아스트리",
				"english": "Astri",
				"japanese": "アストリ",
				"chinese": "阿斯特里",
				"french": "Astri",
				"spanish": "Astri",
				"vietnamese": "Astri",
				"thai": "อ스트리",
				"hindi": "अस्त्री"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/0496af1b-19c2-43b2-c579-38a283320a00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/537f5bb2-fba9-4781-36fc-489213dbff00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "공기는 더욱 차가웠다. 마치 얼음이 숨 쉬는 듯했다.",
						"english": "The air grew colder. As if ice itself was breathing.",
						"japanese": "空気はさらに冷たくなった。まるで氷が呼吸しているかのようだった。",
						"chinese": "空气更加寒冷。仿佛冰块在呼吸。",
						"french": "L'air devenait plus froid. Comme si la glace respirait.",
						"spanish": "El aire se volvió más frío. Como si el hielo respirara.",
						"vietnamese": "Không khí trở nên lạnh hơn. Như thể băng đang thở.",
						"thai": "อากาศเย็นลงเรื่อยๆ ราวกับน้ำแข็งกำลังหายใจ.",
						"hindi": "हवा और ठंडी हो गई। मानो बर्फ़ साँस ले रही हो।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "점점 더 추워지네.",
						"english": "It's getting colder.",
						"japanese": "だんだん寒くなってきた。",
						"chinese": "越来越冷了。",
						"french": "Il fait de plus en plus froid.",
						"spanish": "Cada vez hace más frío.",
						"vietnamese": "Càng lúc càng lạnh.",
						"thai": "หนาวขึ้นเรื่อยๆ เลย.",
						"hindi": "और ठंडा होता जा रहा है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "Astri",
					"spot": [
						4,
						2
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "Astri",
					"content": {
						"korean": "…아니, 이건 추위가 아냐.",
						"english": "...No, this isn't just cold.",
						"japanese": "…いや、これは寒さじゃない。",
						"chinese": "…不，这不止是寒冷。",
						"french": "…Non, ce n'est pas de la simple froideur.",
						"spanish": "…No, esto no es frío.",
						"vietnamese": "...Không, đây không phải lạnh.",
						"thai": "…ไม่สิ, นี่ไม่ใช่แค่ความหนาว.",
						"hindi": "…नहीं, यह सिर्फ ठंड नहीं है।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "Astri",
					"content": {
						"korean": "그때의 한기야. 내가 알던.",
						"english": "It's that chill. The one I knew.",
						"japanese": "あの時の、私が知っているあの寒気だ。",
						"chinese": "是那时的寒意。我所熟悉的。",
						"french": "C'est ce frisson. Celui que je connaissais.",
						"spanish": "Es ese escalofrío. El que yo conocía.",
						"vietnamese": "Đó là cái lạnh đó. Cái lạnh tôi biết.",
						"thai": "มันคือความเย็นยะเยือกนั้น. ที่ฉันรู้จัก.",
						"hindi": "वह वही ठंडक है। जिसे मैं जानता था।"
					},
					"type": "speech",
					"emotion": "sad"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"speaker": "Astri"
				},
				{
					"type": "speech",
					"speaker": "Astri",
					"content": {
						"korean": "기억나. 이 복도.",
						"english": "I remember. This corridor.",
						"japanese": "覚えてる。この廊下。",
						"chinese": "我记得。这条走廊。",
						"french": "Je me souviens. Ce couloir.",
						"spanish": "Lo recuerdo. Este pasillo.",
						"vietnamese": "Tôi nhớ. Hành lang này.",
						"thai": "ฉันจำได้. ทางเดินนี้.",
						"hindi": "मुझे याद है। यह गलियारा।"
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "아카데미 건물이랑 비슷해?",
						"english": "Is it similar to the Academy building?",
						"japanese": "アカデミーの建物と似てる？",
						"chinese": "和学院大楼很像吗？",
						"french": "C'est similaire au bâtiment de l'Académie ?",
						"spanish": "¿Es similar al edificio de la Academia?",
						"vietnamese": "Có giống tòa nhà Học viện không?",
						"thai": "คล้ายกับอาคารของสถาบันไหม?",
						"hindi": "क्या यह अकादमी की इमारत जैसा है?"
					}
				},
				{
					"emotion": "sad",
					"speaker": "Astri",
					"content": {
						"korean": "그때 그 사고가… 여기서 시작됐어.",
						"english": "That accident... it started here.",
						"japanese": "あの事故は…ここから始まったんだ。",
						"chinese": "那场事故…就是从这里开始的。",
						"french": "Cet accident… tout a commencé ici.",
						"spanish": "Ese accidente… empezó aquí.",
						"vietnamese": "Vụ tai nạn đó… đã bắt đầu từ đây.",
						"thai": "อุบัติเหตุครั้งนั้น... เริ่มต้นจากที่นี่เอง",
						"hindi": "वह दुर्घटना… यहीं से शुरू हुई थी।"
					},
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "Astri",
					"spot": [
						2,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"emotion": "sad",
					"speaker": "Astri",
					"content": {
						"korean": "여왕은… 내가 도망친 후에도 계속 여기에 있었구나.",
						"english": "The Queen... remained here even after I fled.",
						"japanese": "女王は…私が逃げた後も、ずっとここにいたのか。",
						"chinese": "女王…在我逃走后也一直在这里啊。",
						"french": "La Reine… est restée ici même après ma fuite.",
						"spanish": "La Reina… siguió aquí incluso después de que yo huyera.",
						"vietnamese": "Nữ hoàng… vẫn ở đây ngay cả sau khi tôi bỏ trốn.",
						"thai": "ราชินี... ยังคงอยู่ที่นี่ แม้หลังจากที่ฉันหนีไปแล้ว",
						"hindi": "रानी… मेरे भागने के बाद भी यहीं रही।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "무슨 소리야? 도망이라니?",
						"english": "What are you talking about? Fled?",
						"japanese": "何を言ってるの？逃げたって？",
						"chinese": "你在说什么？逃走？",
						"french": "De quoi parles-tu ? Fuir ?",
						"spanish": "¿De qué hablas? ¿Huir?",
						"vietnamese": "Anh đang nói gì vậy? Bỏ trốn?",
						"thai": "คุณกำลังพูดถึงอะไร? หนีไปแล้วเหรอ?",
						"hindi": "क्या कह रहे हो? भागना?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"speaker": "Astri",
					"content": {
						"korean": "그때, 난 혼자 도망쳤어.",
						"english": "Back then, I fled alone.",
						"japanese": "あの時、私は一人で逃げた。",
						"chinese": "那时，我独自逃走了。",
						"french": "À ce moment-là, je me suis enfui seul.",
						"spanish": "En ese momento, huí solo.",
						"vietnamese": "Lúc đó, tôi đã bỏ trốn một mình.",
						"thai": "ตอนนั้น ฉันหนีไปคนเดียว",
						"hindi": "उस वक्त, मैं अकेला भागा था।"
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "Astri",
					"content": {
						"korean": "친구를 버리고.",
						"english": "Abandoning my friend.",
						"japanese": "友を見捨てて。",
						"chinese": "抛弃了朋友。",
						"french": "Abandonnant mon ami.",
						"spanish": "Abandonando a mi amigo.",
						"vietnamese": "Bỏ rơi bạn bè.",
						"thai": "ทิ้งเพื่อนไป",
						"hindi": "दोस्त को छोड़कर।"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"speaker": "Astri",
					"type": "direction",
					"action": "enter"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "옥좌 방 앞. 벽에 두 개의 그림자 자국이 나란히 얼어붙어 있었다.",
						"english": "In front of the throne room. Two shadow imprints were frozen side by side on the wall.",
						"japanese": "玉座の間前。壁に二つの影の跡が並んで凍り付いていた。",
						"chinese": "宝座厅前。墙上并排冻结着两个影子痕迹。",
						"french": "Devant la salle du trône. Deux empreintes d'ombre étaient figées côte à côte sur le mur.",
						"spanish": "Frente a la sala del trono. Dos huellas de sombra estaban congeladas una al lado de la otra en la pared.",
						"vietnamese": "Trước phòng ngai vàng. Hai dấu vết bóng tối đông cứng song song trên tường.",
						"thai": "หน้าห้องบัลลังก์ รอยเงาสองรอยแข็งตัวอยู่ข้างกันบนกำแพง",
						"hindi": "सिंहासन कक्ष के सामने। दीवार पर दो छाया के निशान अगल-बगल जमे हुए थे।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "한쪽은 깊었고, 다른 한쪽은 얕았다.",
						"english": "One was deep, the other shallow.",
						"japanese": "片方は深く、もう片方は浅かった。",
						"chinese": "一个深，另一个浅。",
						"french": "L'une était profonde, l'autre peu profonde.",
						"spanish": "Una era profunda, la otra superficial.",
						"vietnamese": "Một cái sâu, cái còn lại thì cạn.",
						"thai": "รอยหนึ่งลึก อีกรอยหนึ่งตื้น",
						"hindi": "एक गहरा था, दूसरा उथला।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "Astri",
					"content": {
						"korean": "…이건 그날의 우리.",
						"english": "...These are us from that day.",
						"japanese": "…これは、あの日の私たち。",
						"chinese": "…这是那天的我们。",
						"french": "…C'est nous ce jour-là.",
						"spanish": "…Estos somos nosotros de aquel día.",
						"vietnamese": "…Đây là chúng ta của ngày hôm đó.",
						"thai": "...นี่คือเราในวันนั้น",
						"hindi": "…यह उस दिन के हम हैं।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "Astri",
					"content": {
						"korean": "깊은 건… 그녀의 그림자. 얕은 건….",
						"english": "The deep one... her shadow. The shallow one...",
						"japanese": "深いのは…彼女の影。浅いのは…。",
						"chinese": "深的那个是…她的影子。浅的那个是…。",
						"french": "La profonde… son ombre. La peu profonde…",
						"spanish": "La profunda… su sombra. La superficial…",
						"vietnamese": "Cái sâu… là bóng của cô ấy. Cái cạn…",
						"thai": "รอยลึก... เงาของเธอ รอยตื้น...",
						"hindi": "गहरा वाला… उसकी छाया। उथला वाला…।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "Astri",
					"content": {
						"korean": "돌아서서 도망친 나.",
						"english": "Me, who turned and fled.",
						"japanese": "背を向けて逃げた私。",
						"chinese": "转身逃跑的我。",
						"french": "Moi, qui me suis enfui en tournant le dos.",
						"spanish": "Yo, que me di la vuelta y huí.",
						"vietnamese": "Là tôi, kẻ đã quay lưng bỏ chạy.",
						"thai": "ฉันที่หันหลังและหนีไป",
						"hindi": "मैं, जो मुड़कर भाग गया।"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "아스트리….",
						"english": "Astry….",
						"japanese": "アストリ…",
						"chinese": "阿斯特丽…",
						"french": "Astry…",
						"spanish": "Astry…",
						"vietnamese": "Astry…",
						"thai": "แอสทรี…",
						"hindi": "एस्ट्रि…"
					},
					"type": "speech"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"emotion": "sad",
					"speaker": "random_boss",
					"content": {
						"korean": "…강해졌군. 하지만 아직 멀었어. 그녀는… 널 기다리고 있다.",
						"english": "…You've grown stronger. But you're not there yet. She… is waiting for you.",
						"japanese": "…強くなったな。だが、まだ遠い。彼女が… お前を待っている。",
						"chinese": "…你变强了。但还差得远。她… 在等着你。",
						"french": "…Tu es devenu plus fort. Mais ce n'est pas encore ça. Elle… t'attend.",
						"spanish": "…Te has vuelto más fuerte. Pero aún te queda. Ella… te está esperando.",
						"vietnamese": "…Ngươi đã mạnh hơn. Nhưng vẫn còn xa lắm. Nàng ta… đang đợi ngươi.",
						"thai": "…แกแข็งแกร่งขึ้นแล้ว แต่ยังอีกไกลนัก เธอผู้นั้น…กำลังรอแกอยู่",
						"hindi": "…तुम मजबूत हो गए हो। लेकिन अभी बहुत दूर हो। वह… तुम्हारा इंतजार कर रही है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "Astri",
					"content": {
						"korean": "더 이상 외면하지 않아. 친구에게 할 말이 있어.",
						"english": "I won't turn away anymore. I have something to tell my friend.",
						"japanese": "もう目を背けない。友に伝えたいことがある。",
						"chinese": "我不会再逃避了。我有话要对朋友说。",
						"french": "Je ne détournerai plus le regard. J'ai quelque chose à dire à mon ami.",
						"spanish": "No le daré la espalda más. Tengo algo que decirle a mi amiga.",
						"vietnamese": "Ta sẽ không quay lưng nữa. Ta có điều muốn nói với bạn mình.",
						"thai": "ฉันจะไม่หันหลังหนีอีกแล้ว ฉันมีเรื่องจะบอกเพื่อน",
						"hindi": "मैं अब और मुँह नहीं मोड़ूँगा। मुझे अपने दोस्त से कुछ कहना है।"
					},
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "아스트리는 과거의 그림자를 딛고 일어섰다.",
						"english": "Astry rose above the shadows of the past.",
						"japanese": "アストリは過去の影を乗り越えた。",
						"chinese": "阿斯特丽摆脱了过去的阴影，站了起来。",
						"french": "Astry s'est élevée au-dessus des ombres du passé.",
						"spanish": "Astry se alzó sobre las sombras del pasado.",
						"vietnamese": "Astry đã vượt lên trên bóng tối của quá khứ.",
						"thai": "แอสทรีได้ก้าวข้ามเงาของอดีตไปแล้ว",
						"hindi": "एस्ट्रि अतीत के साये से ऊपर उठ गई।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "이제, 여왕과의 재회만이 남았다.",
						"english": "Now, only a reunion with the Queen remains.",
						"japanese": "残るは、女王との再会のみだ。",
						"chinese": "现在，只剩下与女王的重逢了。",
						"french": "Désormais, seule la réunion avec la Reine demeure.",
						"spanish": "Ahora, solo queda el reencuentro con la Reina.",
						"vietnamese": "Giờ đây, chỉ còn lại cuộc hội ngộ với Nữ hoàng.",
						"thai": "ตอนนี้เหลือเพียงการพบกันอีกครั้งกับราชินีเท่านั้น",
						"hindi": "अब, केवल रानी से पुनर्मिलन बाकी है।"
					},
					"type": "speech"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 것. 그날처럼 무릎 꿇는군.",
						"english": "Foolish one. You kneel just like that day.",
						"japanese": "愚かな奴め。あの日のように膝をつくとはな。",
						"chinese": "愚蠢的东西。你像那天一样跪下了。",
						"french": "Stupide créature. Tu t'agenouilles comme ce jour-là.",
						"spanish": "Estúpido. Te arrodillas igual que aquel día.",
						"vietnamese": "Kẻ ngốc. Ngươi lại quỳ gối như ngày đó.",
						"thai": "เจ้าคนโง่เง่า แกคุกเข่าเหมือนวันนั้นเลย",
						"hindi": "मूर्ख। तुम उस दिन की तरह घुटने टेक रहे हो।"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "Astri",
					"content": {
						"korean": "…아직 끝나지 않았어. 포기하지 않아.",
						"english": "...It's not over yet. I won't give up.",
						"japanese": "…まだ終わってない。諦めない。",
						"chinese": "…还没结束。我不会放弃的。",
						"french": "...Ce n'est pas encore fini. Je n'abandonnerai pas.",
						"spanish": "...Todavía no ha terminado. No me rendiré.",
						"vietnamese": "...Chưa kết thúc đâu. Tôi sẽ không bỏ cuộc.",
						"thai": "...ยังไม่จบแค่นี้หรอกนะ ฉันจะไม่ยอมแพ้",
						"hindi": "...अभी खत्म नहीं हुआ है। मैं हार नहीं मानूंगा।"
					},
					"emotion": "angry"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "드디어 왔구나. 배신자.",
						"english": "You're finally here, traitor.",
						"japanese": "ようやく来たな、裏切り者め。",
						"chinese": "你终于来了，叛徒。",
						"french": "Te voilà enfin, traître.",
						"spanish": "Por fin has llegado, traidor.",
						"vietnamese": "Cuối cùng ngươi cũng đến rồi, kẻ phản bội.",
						"thai": "ในที่สุดแกก็มาจนได้นะ เจ้าคนทรยศ",
						"hindi": "आखिर तुम आ ही गए, गद्दार।"
					},
					"emotion": "angry"
				},
				{
					"speaker": "Astri",
					"content": {
						"korean": "…!",
						"english": "…!",
						"japanese": "…！",
						"chinese": "…！",
						"french": "… !",
						"spanish": "…!",
						"vietnamese": "…!",
						"thai": "…!",
						"hindi": "…!"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "그날처럼 도망칠 수 있을 것 같나? {random_boss}는 놓치지 않아.",
						"english": "Do you think you can escape like that day? {random_boss} won't let you go.",
						"japanese": "あの日のように逃げられると思うか？ {random_boss}は見逃さないぞ。",
						"chinese": "你以为还能像那天一样逃走吗？ {random_boss}可不会放过你。",
						"french": "Penses-tu pouvoir t'enfuir comme ce jour-là ? {random_boss} ne te laissera pas partir.",
						"spanish": "¿Crees que puedes escapar como aquel día? {random_boss} no te dejará ir.",
						"vietnamese": "Ngươi nghĩ mình có thể trốn thoát như ngày đó sao? {random_boss} sẽ không để ngươi đi đâu.",
						"thai": "คิดว่าจะหนีได้เหมือนวันนั้นรึไง? {random_boss} จะไม่ปล่อยแกไปหรอกนะ",
						"hindi": "क्या तुम्हें लगता है कि तुम उस दिन की तरह भाग सकते हो? {random_boss} तुम्हें नहीं छोड़ेगा।"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "Astri",
					"content": {
						"korean": "이젠 도망치지 않아. 절대로.",
						"english": "I won't run anymore. Never.",
						"japanese": "もう逃げない。決して。",
						"chinese": "我不会再逃了。绝不。",
						"french": "Je ne fuirai plus. Jamais.",
						"spanish": "Ya no huiré. Jamás.",
						"vietnamese": "Ta sẽ không chạy trốn nữa. Tuyệt đối không.",
						"thai": "ฉันจะไม่หนีอีกแล้ว ไม่มีวัน",
						"hindi": "मैं अब और नहीं भागूँगा। कभी नहीं।"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"얼어붙은 성의 심장부로 향하는 길.",
			"벽에 새겨진 문양, 바닥에 흩어진 파편들.",
			"외면했던 과거가 아스트리의 발목을 붙잡는다.",
			"폭풍은 이제, 오직 그녀만을 향해 불어왔다."
		],
		"english": [
			"The path to the heart of the frozen castle.",
			"Symbols carved on walls, fragments scattered on the floor.",
			"Astri's ignored past catches up to her.",
			"Now, the storm raged only for her."
		],
		"japanese": [
			"凍てついた城の心臓部へと続く道。",
			"壁に刻まれた紋様、床に散らばる破片。",
			"目を背けてきた過去が、アストリの足首を掴む。",
			"今、嵐はただ彼女だけに向かって吹き荒れる。"
		],
		"chinese": [
			"通往冰封城堡心脏的道路。",
			"墙上刻着符文，碎片散落在地板上。",
			"阿斯特丽被她曾逃避的过去所困。",
			"暴风雨如今，只为她一人而来。"
		],
		"french": [
			"Le chemin vers le cœur du château gelé.",
			"Symboles gravés sur les murs, fragments éparpillés sur le sol.",
			"Le passé ignoré d'Astri la rattrape.",
			"Désormais, la tempête ne soufflait que pour elle."
		],
		"spanish": [
			"El camino hacia el corazón del castillo congelado.",
			"Símbolos grabados en las paredes, fragmentos esparcidos por el suelo.",
			"El pasado ignorado de Astri la persigue.",
			"Ahora, la tormenta soplaba solo para ella."
		],
		"vietnamese": [
			"Con đường dẫn đến trái tim lâu đài băng giá.",
			"Biểu tượng khắc trên tường, mảnh vỡ rải rác trên sàn.",
			"Quá khứ bị lãng quên níu chân Astri.",
			"Giờ đây, cơn bão chỉ thổi về phía cô."
		],
		"thai": [
			"เส้นทางสู่ใจกลางปราสาทน้ำแข็ง.",
			"สัญลักษณ์สลักบนกำแพง, ชิ้นส่วนกระจัดกระจายบนพื้น.",
			"อดีตที่ถูกเมินเฉยย้อนกลับมาพันธนาการแอสทริ.",
			"บัดนี้, พายุโหมกระหน่ำเพียงเธอผู้เดียว."
		],
		"hindi": [
			"जमे हुए महल के हृदय का मार्ग।",
			"दीवारों पर खुदे प्रतीक, फर्श पर बिखरे हुए टुकड़े।",
			"एस्ट्री का उपेक्षित अतीत उसे जकड़ लेता है।",
			"अब, तूफान केवल उसी के लिए आया।"
		]
	}
} as const;
