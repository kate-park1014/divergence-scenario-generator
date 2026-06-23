export const scenario_forest_jadewomb_27_03 = {
	"scenario_id": "forest_jadewomb_27_03",
	"order": 3,
	"act": "rising",
	"theme": "forest",
	"actors": {
		"Ivy": {
			"name": {
				"korean": "아이비",
				"english": "Ivy",
				"japanese": "アイビー",
				"chinese": "艾薇",
				"french": "Ivy",
				"spanish": "Ivy",
				"vietnamese": "Ivy",
				"thai": "ไอวี่",
				"hindi": "आइवी"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/654fde54-6029-4601-b4a8-0578f00df900/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/6ee8738d-0e14-4f8d-d04d-c934b0fff000/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"숲의 비명이 더욱 커졌다. 정령들의 절규가 울려 퍼졌다.",
			"생명력은 말라가고, 봉분은 모든 것을 집어삼켰다.",
			"죽은 자들의 안식처가 아니었다. 살아있는 모든 것을 저주했다.",
			"파멸까지 남은 시간은… 이제 얼마 없었다."
		],
		"english": [
			"The forest's screams grew louder. The spirits' wails echoed.",
			"Life force withered, and the barrow swallowed everything.",
			"It was no resting place for the dead. It cursed all living things.",
			"Little time remained until ruin."
		],
		"japanese": [
			"森の悲鳴がさらに大きくなった。精霊たちの叫び声が響き渡った。",
			"生命力は枯れ果て、墳墓はすべてを飲み込んだ。",
			"それは死者の安息の地ではなかった。生きとし生けるものすべてを呪った。",
			"破滅までの時間は…もう残り少なかった。"
		],
		"chinese": [
			"森林的尖叫声越来越大。精灵们的哭喊声回荡着。",
			"生命力枯竭，坟冢吞噬了一切。",
			"那不是死者的安息之地。它诅咒着所有生灵。",
			"离毁灭只剩下……所剩无几的时间了。"
		],
		"french": [
			"Les cris de la forêt s'amplifièrent. Les hurlements des esprits résonnèrent.",
			"La force vitale se tarissait, et le tumulus dévorait tout.",
			"Ce n'était pas un lieu de repos pour les morts. Cela maudissait tout ce qui est vivant.",
			"Il ne restait que peu de temps avant la ruine."
		],
		"spanish": [
			"Los gritos del bosque se hicieron más fuertes. Los lamentos de los espíritus resonaron.",
			"La fuerza vital se marchitaba, y el túmulo lo devoraba todo.",
			"No era un lugar de descanso para los muertos. Maldijo a todos los seres vivos.",
			"Quedaba poco tiempo hasta la ruina."
		],
		"vietnamese": [
			"Tiếng thét của rừng càng lúc càng lớn. Tiếng kêu gào của các linh hồn vang vọng.",
			"Sinh lực cạn kiệt, và mộ táng nuốt chửng mọi thứ.",
			"Đó không phải là nơi an nghỉ của người chết. Nó nguyền rủa tất cả sự sống.",
			"Thời gian còn lại cho đến khi diệt vong… không còn nhiều nữa."
		],
		"thai": [
			"เสียงกรีดร้องของป่าดังขึ้นเรื่อยๆ เสียงคร่ำครวญของวิญญาณดังก้อง",
			"พลังชีวิตเหือดแห้ง และสุสานกลืนกินทุกสิ่ง",
			"มันไม่ใช่ที่พำนักของคนตาย มันสาปแช่งทุกชีวิต",
			"เหลือเวลาอีกไม่มากจนกว่าจะถึงหายนะ"
		],
		"hindi": [
			"जंगल की चीखें तेज़ हो गईं। आत्माओं की पुकार गूँज उठी।",
			"जीवन शक्ति मुरझा गई, और टीले ने सब कुछ निगल लिया।",
			"यह मृतकों का विश्राम स्थल नहीं था। इसने सभी जीवित चीज़ों को शाप दिया।",
			"विनाश तक बहुत कम समय बचा था।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "숲의 생명력이 바닥을 드러냈다. 모든 것이 빠르게 시들었다.",
						"english": "The forest's life force hit rock bottom. Everything withered rapidly.",
						"japanese": "森の生命力が底を尽きた。すべてが急速に枯れ果てた。",
						"chinese": "森林的生命力已见底。一切都迅速枯萎了。",
						"french": "La force vitale de la forêt était au plus bas. Tout se flétrissait rapidement.",
						"spanish": "La fuerza vital del bosque tocó fondo. Todo se marchitó rápidamente.",
						"vietnamese": "Sinh lực của rừng đã chạm đáy. Mọi thứ héo tàn nhanh chóng.",
						"thai": "พลังชีวิตของป่าลดลงจนหมด ทุกสิ่งร่วงโรยอย่างรวดเร็ว",
						"hindi": "जंगल की जीवन शक्ति रसातल में पहुँच गई। सब कुछ तेज़ी से मुरझा गया।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "숲이… 죽어가고 있어.",
						"english": "The forest... is dying.",
						"japanese": "森が…死にかけている。",
						"chinese": "森林…正在死去。",
						"french": "La forêt... est en train de mourir.",
						"spanish": "El bosque... está muriendo.",
						"vietnamese": "Rừng… đang chết dần.",
						"thai": "ป่ากำลัง...ตาย",
						"hindi": "जंगल... मर रहा है।"
					}
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "Ivy",
					"duration_ms": 500,
					"spot": [
						4,
						3
					]
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "Ivy",
					"content": {
						"korean": "감히… 여기까지 발을 들여놓다니!",
						"english": "How dare you... step foot here!",
						"japanese": "よくも…ここまで足を踏み入れるとは！",
						"chinese": "你们竟敢…踏足这里！",
						"french": "Comment osez-vous... mettre les pieds ici !",
						"spanish": "¡Cómo osas... poner un pie aquí!",
						"vietnamese": "Dám… đặt chân đến đây!",
						"thai": "กล้าดียังไง...เข้ามาถึงนี่!",
						"hindi": "तुम्हारी हिम्मत कैसे हुई... यहाँ पैर रखने की!"
					}
				},
				{
					"speaker": "Ivy",
					"content": {
						"korean": "너희 때문에 숲이 더 빨리 죽어가고 있어!",
						"english": "Because of you, the forest is dying even faster!",
						"japanese": "お前たちのせいで、森はもっと早く死んでいく！",
						"chinese": "因为你们，森林正在更快地死去！",
						"french": "À cause de vous, la forêt meurt encore plus vite !",
						"spanish": "¡Por vuestra culpa, el bosque está muriendo aún más rápido!",
						"vietnamese": "Vì các ngươi, rừng đang chết nhanh hơn!",
						"thai": "เพราะพวกเจ้า ป่าถึงตายเร็วขึ้น!",
						"hindi": "तुम्हारी वजह से जंगल और भी तेज़ी से मर रहा है!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "우리가 뭘 했다고 그래!",
						"english": "What did we do?!",
						"japanese": "私たちが何をしたって言うんだ！",
						"chinese": "我们做了什么？！",
						"french": "Qu'avons-nous fait ?!",
						"spanish": "¡¿Qué hicimos?!",
						"vietnamese": "Chúng tôi đã làm gì chứ!",
						"thai": "พวกเราทำอะไรไปงั้นเหรอ!",
						"hindi": "हमने क्या किया?!"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "Ivy",
					"content": {
						"korean": "너희는… 숲의 균형을 깨뜨렸어.",
						"english": "You... shattered the forest's balance.",
						"japanese": "お前たちは… 森の均衡を破った。",
						"chinese": "你们…打破了森林的平衡。",
						"french": "Vous... avez brisé l'équilibre de la forêt.",
						"spanish": "Vosotros... rompisteis el equilibrio del bosque.",
						"vietnamese": "Các ngươi… đã phá vỡ sự cân bằng của rừng.",
						"thai": "พวกเจ้า...ทำลายสมดุลของป่า",
						"hindi": "तुमने... जंगल का संतुलन बिगाड़ दिया।"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"content": {
						"korean": "땅에서 생명력이 빨려 나가는 것이 느껴졌다. 숲의 일부가 빠르게 시들고 있었다.",
						"english": "I felt life draining from the land. Parts of the forest were rapidly withering.",
						"japanese": "大地から生命力が吸い取られるのを感じた。森の一部が急速に枯れていった。",
						"chinese": "我感觉到生命力正从大地上流失。森林的一部分正在迅速枯萎。",
						"french": "Je sentais la vie s'échapper de la terre. Des parties de la forêt se fanaient rapidement.",
						"spanish": "Sentí cómo la vida se escapaba de la tierra. Partes del bosque se marchitaban rápidamente.",
						"vietnamese": "Tôi cảm thấy sự sống đang bị hút cạn khỏi đất. Một phần của rừng đang héo úa nhanh chóng.",
						"thai": "ฉันรู้สึกถึงชีวิตที่กำลังถูกดูดออกจากผืนดิน บางส่วนของป่ากำลังเหี่ยวเฉาอย่างรวดเร็ว",
						"hindi": "मैंने महसूस किया कि ज़मीन से जीवन शक्ति खींची जा रही थी। जंगल का कुछ हिस्सा तेज़ी से मुरझा रहा था।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						3
					],
					"speaker": "Ivy"
				},
				{
					"content": {
						"korean": "…(고통스러운 듯) 느껴져… 숲의 비명… 내 생명도…",
						"english": "...(Painfully) I feel it... The forest's scream... My life too...",
						"japanese": "...(苦痛に)感じる… 森の悲鳴… 私の命も…",
						"chinese": "……（痛苦地）我感觉到了……森林的尖叫……我的生命也……",
						"french": "...(Douloureusement) Je le sens... Le cri de la forêt... Ma vie aussi...",
						"spanish": "...(Con dolor) Lo siento... El grito del bosque... Mi vida también...",
						"vietnamese": "...(Đau đớn) Tôi cảm thấy... Tiếng thét của rừng... Cả sinh mạng của tôi nữa...",
						"thai": "...(เจ็บปวด) ฉันรู้สึก... เสียงกรีดร้องของป่า... ชีวิตของฉันด้วย...",
						"hindi": "...(दर्दनाक ढंग से) मुझे महसूस हो रहा है... जंगल की चीख... मेरी जान भी..."
					},
					"speaker": "Ivy",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "정령도 영향을 받는 거야?",
						"english": "Even spirits are affected?",
						"japanese": "精霊も影響を受けるの？",
						"chinese": "连精灵也受影响吗？",
						"french": "Même les esprits sont affectés ?",
						"spanish": "¿Incluso los espíritus están afectados?",
						"vietnamese": "Ngay cả tinh linh cũng bị ảnh hưởng sao?",
						"thai": "แม้แต่ภูตผีก็ได้รับผลกระทบด้วยเหรอ?",
						"hindi": "क्या आत्माएँ भी प्रभावित होती हैं?"
					}
				},
				{
					"content": {
						"korean": "봉분이… 봉분이 모든 것을 집어삼키고 있어.",
						"english": "The mound... The mound is devouring everything.",
						"japanese": "墳墓が… 墳墓がすべてを飲み込んでいる。",
						"chinese": "坟墓……坟墓正在吞噬一切。",
						"french": "Le tertre... Le tertre dévore tout.",
						"spanish": "El túmulo... El túmulo lo está devorando todo.",
						"vietnamese": "Mộ đất... Mộ đất đang nuốt chửng mọi thứ.",
						"thai": "เนินดิน... เนินดินกำลังกลืนกินทุกสิ่ง",
						"hindi": "वो टीला... वो टीला सब कुछ निगल रहा है।"
					},
					"speaker": "Ivy",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "Ivy",
					"content": {
						"korean": "죽은 영혼만이 아니야… 살아있는 모든 것을…",
						"english": "Not just dead souls... but all living things...",
						"japanese": "死んだ魂だけじゃない… 生きているすべてを…",
						"chinese": "不只是死去的灵魂……还有所有活着的东西……",
						"french": "Pas seulement les âmes mortes... mais tout ce qui vit...",
						"spanish": "No solo las almas muertas... sino todo lo vivo...",
						"vietnamese": "Không chỉ linh hồn đã chết... mà là mọi thứ đang sống...",
						"thai": "ไม่ใช่แค่ดวงวิญญาณที่ตายแล้ว... แต่รวมถึงสิ่งมีชีวิตทั้งหมดด้วย...",
						"hindi": "सिर्फ मृत आत्माएँ ही नहीं... बल्कि सभी जीवित चीज़ें भी..."
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"speaker": "Ivy",
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "Ivy",
					"content": {
						"korean": "여왕은… 자식들을 잃고 미쳐버렸어.",
						"english": "The Queen... went mad after losing her children.",
						"japanese": "女王は… 子供たちを失って狂ってしまった。",
						"chinese": "女王……失去了孩子后疯了。",
						"french": "La Reine... est devenue folle après avoir perdu ses enfants.",
						"spanish": "La Reina... enloqueció tras perder a sus hijos.",
						"vietnamese": "Nữ hoàng... đã phát điên sau khi mất đi những đứa con của mình.",
						"thai": "ราชินี... คลุ้มคลั่งหลังจากสูญเสียลูกๆ ของเธอไป",
						"hindi": "रानी... अपने बच्चों को खोकर पागल हो गई।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "그 슬픔이… 이 숲을 저주로 만들었어.",
						"english": "That sorrow... turned this forest into a curse.",
						"japanese": "その悲しみが… この森を呪いに変えた。",
						"chinese": "那份悲伤……把这片森林变成了诅咒。",
						"french": "Cette tristesse... a transformé cette forêt en malédiction.",
						"spanish": "Esa tristeza... convirtió este bosque en una maldición.",
						"vietnamese": "Nỗi buồn đó... đã biến khu rừng này thành một lời nguyền.",
						"thai": "ความเศร้าโศกนั้น... ได้เปลี่ยนป่านี้ให้กลายเป็นคำสาป",
						"hindi": "उस दुख ने... इस जंगल को एक अभिशाप में बदल दिया।"
					},
					"speaker": "Ivy"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "여왕의 슬픔이 숲을 죽였다고?",
						"english": "The Queen's sorrow killed the forest?",
						"japanese": "女王の悲しみが森を殺したの？",
						"chinese": "女王的悲伤杀死了森林？",
						"french": "La tristesse de la Reine a tué la forêt ?",
						"spanish": "¿La tristeza de la Reina mató el bosque?",
						"vietnamese": "Nỗi buồn của Nữ hoàng đã giết chết khu rừng sao?",
						"thai": "ความเศร้าโศกของราชินีฆ่าป่าเหรอ?",
						"hindi": "रानी के दुख ने जंगल को मार डाला?"
					}
				},
				{
					"content": {
						"korean": "봉분은… 여왕의 슬픔이 만들어낸… 거대한 무덤이야.",
						"english": "The mound... is a massive tomb created by the Queen's sorrow.",
						"japanese": "墳墓は… 女王の悲しみが作り出した… 巨大な墓だ。",
						"chinese": "坟墓……是女王的悲伤创造的……一个巨大的坟墓。",
						"french": "Le tertre... est une immense tombe créée par la tristesse de la Reine.",
						"spanish": "El túmulo... es una tumba masiva creada por la tristeza de la Reina.",
						"vietnamese": "Mộ đất... là một ngôi mộ khổng lồ do nỗi buồn của Nữ hoàng tạo ra.",
						"thai": "เนินดิน... เป็นสุสานขนาดมหึมาที่เกิดจากความเศร้าโศกของราชินี",
						"hindi": "वो टीला... रानी के दुख से बनी... एक विशाल कब्र है।"
					},
					"speaker": "Ivy",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "나도… 숲과 함께… 저 봉분에 흡수될 거야.",
						"english": "I too... along with the forest... will be absorbed into that mound.",
						"japanese": "私も… 森と共に… あの墳墓に吸収されるだろう。",
						"chinese": "我也会……和森林一起……被那个坟墓吸收。",
						"french": "Moi aussi... avec la forêt... je serai absorbé par ce tertre.",
						"spanish": "Yo también... junto con el bosque... seré absorbido por ese túmulo.",
						"vietnamese": "Tôi cũng... cùng với khu rừng... sẽ bị hút vào ngôi mộ đất đó.",
						"thai": "ฉันเองก็... พร้อมกับป่า... จะถูกดูดซึมเข้าไปในเนินดินนั้น",
						"hindi": "मैं भी... जंगल के साथ... उस टीले में समा जाऊँगा।"
					},
					"speaker": "Ivy",
					"type": "speech",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "숲의 죽음은 돌이킬 수 없을 만큼 가속화되었다. 길은 더욱 어두워졌다.",
						"english": "The forest's demise has irreversibly accelerated. The path grew darker.",
						"japanese": "森の死は取り返しのつかないほど加速した。道はさらに暗くなった。",
						"chinese": "森林的死亡已不可逆转地加速。道路变得更加黑暗。",
						"french": "La mort de la forêt s'est accélérée de manière irréversible. Le chemin s'assombrit encore.",
						"spanish": "La muerte del bosque se ha acelerado irreversiblemente. El camino se volvió más oscuro.",
						"vietnamese": "Cái chết của khu rừng đã tăng tốc không thể cứu vãn. Con đường càng trở nên tăm tối.",
						"thai": "ความตายของป่าได้เร่งตัวขึ้นอย่างไม่สามารถย้อนกลับได้ เส้นทางยิ่งมืดมิดลง",
						"hindi": "वन की मृत्यु अपरिवर्तनीय रूप से तेज़ हो गई है। रास्ता और भी अँधेरा हो गया।"
					},
					"speaker": "narrator"
				},
				{
					"action": "enter",
					"type": "direction",
					"speaker": "Ivy",
					"duration_ms": 500,
					"spot": [
						4,
						3
					]
				},
				{
					"content": {
						"korean": "도망쳐… 더 이상은…",
						"english": "Run… no more…",
						"japanese": "逃げて…もう…",
						"chinese": "快逃…别再…",
						"french": "Fuyez… pas plus…",
						"spanish": "Huye… no más…",
						"vietnamese": "Chạy đi… đừng nữa…",
						"thai": "หนีไป…อีกไม่ไหวแล้ว…",
						"hindi": "भागो… और नहीं…"
					},
					"speaker": "Ivy",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "정령님!",
						"english": "Spirit!",
						"japanese": "精霊様！",
						"chinese": "灵主大人！",
						"french": "Esprit !",
						"spanish": "¡Espíritu!",
						"vietnamese": "Tinh linh đại nhân!",
						"thai": "ท่านวิญญาณ!",
						"hindi": "हे आत्मा!"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "Ivy",
					"content": {
						"korean": "이 숲은… 너희가 상대할 수 있는 곳이 아니야…",
						"english": "This forest… is not a place you can handle…",
						"japanese": "この森は…お前たちが相手にできる場所ではない…",
						"chinese": "这片森林…不是你们能应付的地方…",
						"french": "Cette forêt… n'est pas un endroit que vous pouvez affronter…",
						"spanish": "Este bosque… no es un lugar que puedan manejar…",
						"vietnamese": "Khu rừng này… không phải nơi các ngươi có thể đối phó…",
						"thai": "ป่าแห่งนี้…ไม่ใช่ที่ที่พวกเจ้าจะรับมือได้…",
						"hindi": "यह वन… वह स्थान नहीं जहाँ तुम सामना कर सको…"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"direction": "up",
					"duration_ms": 400,
					"speaker": "Ivy",
					"type": "direction",
					"action": "exit"
				},
				{
					"action": "enter",
					"type": "direction",
					"speaker": "random_boss",
					"spot": [
						2,
						4
					],
					"duration_ms": 500
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "감히… 어리석은 인간들.",
						"english": "How dare you… foolish humans.",
						"japanese": "よくも…愚かな人間たちめ。",
						"chinese": "竟敢…愚蠢的人类。",
						"french": "Comment osez-vous… humains stupides.",
						"spanish": "Cómo osas… tontos humanos.",
						"vietnamese": "Dám lắm… lũ người ngu ngốc.",
						"thai": "กล้าดียังไง…มนุษย์โง่เขลา",
						"hindi": "तुम्हारी हिम्मत कैसे हुई… मूर्ख मानवों।"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "숲의 평화를 깨려는 자는… 사라질 뿐.",
						"english": "Those who disturb the forest's peace… shall merely vanish.",
						"japanese": "森の平和を乱そうとする者は…消え去るのみ。",
						"chinese": "胆敢破坏森林和平者…终将消亡。",
						"french": "Ceux qui osent troubler la paix de la forêt… ne feront que disparaître.",
						"spanish": "Quienes osen perturbar la paz del bosque… simplemente desaparecerán.",
						"vietnamese": "Kẻ nào phá vỡ sự bình yên của rừng… sẽ chỉ biến mất.",
						"thai": "ผู้ใดที่คิดจะทำลายความสงบสุขของป่า…จะอันตรธานหายไปเท่านั้น",
						"hindi": "वन की शांति भंग करने वाले… बस गायब हो जाएँगे।"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "물러서!",
						"english": "Stand back!",
						"japanese": "下がれ！",
						"chinese": "退下！",
						"french": "Reculez !",
						"spanish": "¡Retrocede!",
						"vietnamese": "Lùi lại!",
						"thai": "ถอยไป!",
						"hindi": "पीछे हटो!"
					}
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"content": {
						"korean": "아직도 미련한가? 숲은 너희를 받아들이지 않는다.",
						"english": "Still foolish? The forest does not accept you.",
						"japanese": "まだ愚かか？森はお前たちを受け入れない。",
						"chinese": "仍旧执迷不悟吗？森林不会接纳你们。",
						"french": "Toujours aussi stupides ? La forêt ne vous accepte pas.",
						"spanish": "¿Aún sois necios? El bosque no os acepta.",
						"vietnamese": "Vẫn còn ngu ngốc sao? Rừng sẽ không chấp nhận các ngươi đâu.",
						"thai": "ยังคงโง่เขลาอีกหรือ? ป่าไม่ต้อนรับพวกเจ้าหรอก",
						"hindi": "अभी भी मूर्ख हो? जंगल तुम्हें स्वीकार नहीं करेगा।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…포기하지 않아.",
						"english": "...I won't give up.",
						"japanese": "…諦めない。",
						"chinese": "…我不会放弃。",
						"french": "...Je n'abandonnerai pas.",
						"spanish": "...No me rendiré.",
						"vietnamese": "...Tôi sẽ không bỏ cuộc.",
						"thai": "...ฉันจะไม่ยอมแพ้",
						"hindi": "...मैं हार नहीं मानूंगा।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "하찮은 발버둥. 곧… 너희도 숲의 일부가 될 것이다.",
						"english": "A futile struggle. Soon... you too will become part of the forest.",
						"japanese": "儚い足掻き。やがて…お前たちも森の一部となるだろう。",
						"chinese": "无谓的挣扎。很快…你们也将成为森林的一部分。",
						"french": "Une lutte futile. Bientôt... vous aussi ferez partie de la forêt.",
						"spanish": "Una lucha inútil. Pronto... vosotros también seréis parte del bosque.",
						"vietnamese": "Sự vùng vẫy vô ích. Chẳng mấy chốc... các ngươi cũng sẽ trở thành một phần của khu rừng thôi.",
						"thai": "การดิ้นรนที่ไร้ค่า อีกไม่นาน... พวกเจ้าก็จะกลายเป็นส่วนหนึ่งของป่า",
						"hindi": "एक व्यर्थ संघर्ष। जल्द ही... तुम भी जंगल का हिस्सा बन जाओगे।"
					}
				}
			],
			"id": 15,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"speaker": "random_boss",
					"spot": [
						3,
						4
					],
					"duration_ms": 500
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "여기까지 온 것을 후회하게 해주마.",
						"english": "I'll make you regret coming this far.",
						"japanese": "ここまで来たことを後悔させてやろう。",
						"chinese": "我会让你后悔来到这里。",
						"french": "Je vous ferai regretter d'être venus jusqu'ici.",
						"spanish": "Haré que lamentes haber llegado tan lejos.",
						"vietnamese": "Ta sẽ khiến ngươi hối hận vì đã đến đây.",
						"thai": "ข้าจะทำให้เจ้าเสียใจที่มาถึงที่นี่",
						"hindi": "मैं तुम्हें यहाँ तक आने का पछतावा कराऊँगा।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "숲을 망치는 건 너희야!",
						"english": "You are the ones destroying the forest!",
						"japanese": "森を荒らすのはお前たちだ！",
						"chinese": "破坏森林的是你们！",
						"french": "C'est vous qui détruisez la forêt !",
						"spanish": "¡Ustedes son quienes destruyen el bosque!",
						"vietnamese": "Chính các ngươi đang phá hoại khu rừng!",
						"thai": "พวกเจ้าต่างหากที่กำลังทำลายป่า!",
						"hindi": "जंगल को बर्बाद करने वाले तुम ही हो!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "숲의 섭리를 거스르지 마라.",
						"english": "Do not defy the forest's will.",
						"japanese": "森の摂理に逆らうな。",
						"chinese": "不要违背森林的法则。",
						"french": "Ne défiez pas la providence de la forêt.",
						"spanish": "No desafíes la providencia del bosque.",
						"vietnamese": "Đừng chống lại ý trời của rừng.",
						"thai": "อย่าฝ่าฝืนวัฏจักรของป่า",
						"hindi": "वन की व्यवस्था का उल्लंघन मत करो।"
					}
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "죽음만이… 너희의 안식처가 될 것이다.",
						"english": "Only death... will be your rest.",
						"japanese": "死のみが…お前たちの安息の地となるだろう。",
						"chinese": "唯有死亡…才是你们的安息之所。",
						"french": "Seule la mort... sera votre repos.",
						"spanish": "Solo la muerte... será vuestro descanso.",
						"vietnamese": "Chỉ có cái chết... mới là nơi an nghỉ của các ngươi.",
						"thai": "ความตายเท่านั้น... จะเป็นที่พำนักของพวกเจ้า",
						"hindi": "केवल मृत्यु ही... तुम्हारा विश्राम स्थल होगी।"
					},
					"emotion": "angry",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "(쓰러지며) 어리석은… 아직 끝이 아니야…",
						"english": "(Collapsing) Foolish... It's not over yet...",
						"japanese": "(倒れながら) 愚かな…まだ終わりではない…",
						"chinese": "(倒下) 愚蠢的…还没结束…",
						"french": "(S'effondrant) Insensé... Ce n'est pas encore fini...",
						"spanish": "(Cayendo) Necios... Aún no ha terminado...",
						"vietnamese": "(Ngã xuống) Ngu ngốc... Vẫn chưa kết thúc đâu...",
						"thai": "(ล้มลง) ช่างโง่เขลา... ยังไม่จบแค่นี้...",
						"hindi": "(गिरते हुए) मूर्ख... अभी खत्म नहीं हुआ है..."
					}
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "봉분은… 계속될 것이다… 여왕의 슬픔은… 영원히…",
						"english": "The barrow... will continue... The Queen's sorrow... forever...",
						"japanese": "墳墓は…続くであろう…女王の悲しみは…永遠に…",
						"chinese": "坟墓…将继续存在…女王的悲伤…永无止境…",
						"french": "Le tertre... continuera... La tristesse de la Reine... pour toujours...",
						"spanish": "El túmulo... continuará... La pena de la Reina... para siempre...",
						"vietnamese": "Gò mộ... sẽ tiếp tục... Nỗi buồn của Nữ hoàng... mãi mãi...",
						"thai": "สุสาน... จะยังคงอยู่... ความเศร้าโศกของราชินี... ชั่วนิรันดร์...",
						"hindi": "टीला... जारी रहेगा... रानी का दुःख... सदा के लिए..."
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…뭐라고?",
						"english": "...What was that?",
						"japanese": "…なんだと？",
						"chinese": "…你说什么？",
						"french": "...Qu'as-tu dit ?",
						"spanish": "...¿Qué dijiste?",
						"vietnamese": "...Ngươi nói gì?",
						"thai": "...ว่าอะไรนะ?",
						"hindi": "...क्या कहा?"
					}
				},
				{
					"content": {
						"korean": "쓰러진 {random_boss}의 잔해가 숲의 어둠 속으로 스며들었다.",
						"english": "The fallen {random_boss}'s remnants seeped into the forest's darkness.",
						"japanese": "倒れた{random_boss}の残骸は、森の闇へと染み渡った。",
						"chinese": "倒下的{random_boss}的残骸渗入了森林的黑暗之中。",
						"french": "Les vestiges du {random_boss} vaincu s'infiltrèrent dans l'obscurité de la forêt.",
						"spanish": "Los restos del {random_boss} caído se filtraron en la oscuridad del bosque.",
						"vietnamese": "Tàn tích của {random_boss} đã ngã xuống thấm vào bóng tối của khu rừng.",
						"thai": "ซากปรักหักพังของ {random_boss} ที่ล้มลงได้ซึมซับเข้าไปในความมืดของป่า",
						"hindi": "गिरे हुए {random_boss} के अवशेष जंगल के अंधेरे में समा गए।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "그러나 숲의 비명은 멈추지 않았다. 오히려 더 깊은 곳에서 울려 퍼졌다.",
						"english": "Yet the forest's screams did not cease. Instead, they echoed from deeper within.",
						"japanese": "しかし、森の悲鳴は止まなかった。むしろ、より深い場所から響き渡った。",
						"chinese": "然而，森林的尖叫并未停止。相反，它们从更深处回荡开来。",
						"french": "Pourtant, les cris de la forêt ne cessèrent pas. Au contraire, ils résonnèrent depuis des profondeurs.",
						"spanish": "Sin embargo, los gritos del bosque no cesaron. Más bien, resonaron desde lo más profundo.",
						"vietnamese": "Tuy nhiên, tiếng thét của khu rừng không dừng lại. Thay vào đó, chúng vọng lên từ sâu thẳm hơn.",
						"thai": "แต่เสียงกรีดร้องของป่าไม่ได้หยุดลง กลับกัน มันกลับก้องกังวานมาจากส่วนลึกยิ่งกว่า",
						"hindi": "फिर भी, जंगल की चीखें बंद नहीं हुईं। बल्कि, वे और गहरी जगह से गूंज उठीं।"
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		}
	]
} as const;
