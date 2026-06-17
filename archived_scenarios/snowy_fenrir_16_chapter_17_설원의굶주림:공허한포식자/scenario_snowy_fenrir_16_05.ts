export const scenario_snowy_fenrir_16_05 = {
	"scenario_id": "snowy_fenrir_16_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "snowy",
	"actors": {
		"bran": {
			"id": "mon_985fcdcc-1bf2-4822-aa2f-292ae9353456",
			"name": {
				"korean": "브란",
				"english": "Bran",
				"japanese": "ブラン",
				"chinese": "布兰",
				"french": "Bran",
				"spanish": "Bran",
				"vietnamese": "Bran",
				"thai": "แบรน",
				"hindi": "ब्रैन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/42cde50b-7453-47b1-04df-73500ad21d00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/4ecba7ed-ec7e-4a8e-74dc-bf3e711b4d00/public"
		}
	},
	"boss": {
		"pool_id": "pool_112"
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "혹한의 설원, 거대한 늑대의 형상이 눈보라 속에 우뚝 서 있었다.",
						"english": "In the harsh snowy plains, the form of a giant wolf stood tall amidst the blizzard.",
						"japanese": "酷寒の雪原、巨大な狼の姿が吹雪の中にそびえ立っていた。",
						"chinese": "严寒的雪原上，巨狼的身影在暴风雪中傲然挺立。",
						"french": "Dans les plaines enneigées et rigoureuses, la forme d'un loup géant se tenait debout au milieu du blizzard.",
						"spanish": "En las duras planicies nevadas, la forma de un lobo gigante se erguía en medio de la tormenta de nieve.",
						"vietnamese": "Trên đồng tuyết khắc nghiệt, hình dáng một con sói khổng lồ sừng sững giữa bão tuyết.",
						"thai": "ในทุ่งหิมะอันโหดร้าย ร่างของหมาป่ายักษ์ยืนตระหง่านอยู่ท่ามกลางพายุหิมะ",
						"hindi": "कठोर बर्फीले मैदानों में, एक विशाल भेड़िये का रूप बर्फ़ीले तूफ़ान के बीच खड़ा था।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "저게… Fenrir인가?",
						"english": "Is that… Fenrir?",
						"japanese": "あれが…フェンリルか？",
						"chinese": "那是……芬里尔吗？",
						"french": "C'est… Fenrir ?",
						"spanish": "¿Es eso… Fenrir?",
						"vietnamese": "Đó là… Fenrir sao?",
						"thai": "นั่นมัน… เฟนริร์หรือเปล่า?",
						"hindi": "क्या वह… फेनरिर है?"
					}
				},
				{
					"speaker": "bran",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						4,
						3
					]
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "bran",
					"content": {
						"korean": "저 동공… 빛을 다 빨아들이는 것 같군.",
						"english": "Those pupils... they seem to absorb all light.",
						"japanese": "あの瞳孔… 光をすべて吸い込んでいるようだ。",
						"chinese": "那瞳孔… 仿佛能吸走所有的光。",
						"french": "Ces pupilles... elles semblent absorber toute la lumière.",
						"spanish": "Esas pupilas... parece que absorben toda la luz.",
						"vietnamese": "Đôi đồng tử đó... dường như hút cạn mọi ánh sáng.",
						"thai": "ม่านตาคู่นั้น... ดูดกลืนแสงทั้งหมดไปเสียหมด",
						"hindi": "वो पुतलियां... जैसे सारा प्रकाश सोख लेती हैं।"
					}
				},
				{
					"speaker": "bran",
					"content": {
						"korean": "내가 알던 짐승과는 달라. 불길한 예감이 들어.",
						"english": "It's unlike any beast I've known. I have a bad feeling about this.",
						"japanese": "私が知る獣とは違う。不吉な予感がする。",
						"chinese": "它和我认识的野兽不同。我有一种不祥的预感。",
						"french": "Il ne ressemble à aucune bête que j'ai connue. J'ai un mauvais pressentiment.",
						"spanish": "No se parece a ninguna bestia que haya conocido. Tengo un mal presentimiento.",
						"vietnamese": "Nó khác với bất kỳ con thú nào tôi từng biết. Tôi có một dự cảm chẳng lành.",
						"thai": "มันไม่เหมือนสัตว์ร้ายที่ฉันเคยรู้จักเลย ฉันมีลางสังหรณ์ที่ไม่ดี",
						"hindi": "यह किसी भी जानवर जैसा नहीं है जिसे मैं जानता हूँ। मुझे एक बुरा एहसास हो रहा है।"
					},
					"type": "speech",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "bran"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "bran",
					"content": {
						"korean": "방금… 늑대가 삼킨 눈덩이가 사라졌어.",
						"english": "Just now... the snowball the wolf swallowed disappeared.",
						"japanese": "たった今… 狼が飲み込んだ雪玉が消えた。",
						"chinese": "刚才… 狼吞下的雪球消失了。",
						"french": "À l'instant... la boule de neige que le loup a avalée a disparu.",
						"spanish": "Justo ahora... la bola de nieve que el lobo se tragó desapareció.",
						"vietnamese": "Vừa rồi... quả cầu tuyết con sói nuốt đã biến mất.",
						"thai": "เมื่อกี้... ก้อนหิมะที่หมาป่ากลืนลงไปหายไปแล้ว",
						"hindi": "अभी-अभी... भेड़िया ने जो बर्फ का गोला निगला था, वह गायब हो गया।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "단순히 먹는 게 아니라고?",
						"english": "It's not just eating it?",
						"japanese": "ただ食べているだけじゃないのか？",
						"chinese": "它不只是在吃东西吗？",
						"french": "Il ne fait pas que le manger ?",
						"spanish": "¿No lo está simplemente comiendo?",
						"vietnamese": "Nó không chỉ đơn thuần là ăn ư?",
						"thai": "มันไม่ใช่แค่กินอย่างนั้นเหรอ?",
						"hindi": "यह सिर्फ खा नहीं रहा है?"
					},
					"type": "speech"
				},
				{
					"speaker": "bran",
					"content": {
						"korean": "흔적도 없이. 마치… 존재 자체가 없었던 것처럼.",
						"english": "Without a trace. As if... it never existed.",
						"japanese": "痕跡もなく。まるで… 存在そのものがなかったかのように。",
						"chinese": "毫无痕迹。仿佛… 它从未存在过一样。",
						"french": "Sans laisser de trace. Comme si... ça n'avait jamais existé.",
						"spanish": "Sin dejar rastro. Como si... nunca hubiera existido.",
						"vietnamese": "Không một dấu vết. Cứ như... nó chưa từng tồn tại vậy.",
						"thai": "ไร้ร่องรอย ราวกับ... มันไม่เคยมีอยู่จริง",
						"hindi": "बिना किसी निशान के। जैसे... उसका अस्तित्व कभी था ही नहीं।"
					},
					"type": "speech",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "bran",
					"spot": [
						3,
						3
					],
					"action": "enter"
				},
				{
					"speaker": "bran",
					"content": {
						"korean": "전통적인 사냥 기술은 통하지 않아.",
						"english": "Traditional hunting techniques won't work.",
						"japanese": "伝統的な狩猟技術は通用しない。",
						"chinese": "传统的狩猎技术行不通。",
						"french": "Les techniques de chasse traditionnelles ne fonctionneront pas.",
						"spanish": "Las técnicas de caza tradicionales no funcionan.",
						"vietnamese": "Kỹ thuật săn bắt truyền thống không có tác dụng.",
						"thai": "เทคนิคการล่าสัตว์แบบดั้งเดิมไม่ได้ผล",
						"hindi": "पारंपरिक शिकार तकनीकें काम नहीं करेंगी।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "그럼 어떻게 해야 한다는 거야?",
						"english": "So what are we supposed to do?",
						"japanese": "じゃあ、どうすればいいんだ？",
						"chinese": "那我们该怎么办？",
						"french": "Alors, qu'est-ce qu'on est censé faire ?",
						"spanish": "¿Entonces qué se supone que debemos hacer?",
						"vietnamese": "Vậy chúng ta phải làm gì đây?",
						"thai": "แล้วเราควรทำยังไงล่ะ?",
						"hindi": "तो हमें क्या करना चाहिए?"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "bran",
					"content": {
						"korean": "나도 모르겠다. 내 평생 이런 짐승은 처음이야.",
						"english": "I don't know either. I've never seen a beast like this in my life.",
						"japanese": "私も分からない。こんな獣は生まれて初めてだ。",
						"chinese": "我也不知道。我这辈子从未见过这样的野兽。",
						"french": "Je ne sais pas non plus. Je n'ai jamais vu une bête pareille de ma vie.",
						"spanish": "Yo tampoco lo sé. Nunca en mi vida he visto una bestia como esta.",
						"vietnamese": "Tôi cũng không biết. Cả đời tôi chưa từng thấy con thú nào như vậy.",
						"thai": "ฉันก็ไม่รู้เหมือนกัน ฉันไม่เคยเห็นสัตว์ร้ายแบบนี้มาก่อนในชีวิต",
						"hindi": "मुझे भी नहीं पता। मैंने अपने जीवन में ऐसा जानवर कभी नहीं देखा।"
					},
					"emotion": "sad"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						4,
						3
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "bran"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "Fenrir의 공격이 닿는 곳마다, 설원의 온기가 죽은 듯 사라졌다.",
						"english": "Wherever Fenrir's attack reached, the warmth of the snowfield vanished as if dead.",
						"japanese": "フェンリルの攻撃が届くたびに、雪原の温もりは死んだかのように消え去った。",
						"chinese": "芬里尔的攻击所到之处，雪原的暖意都如同死去般消失了。",
						"french": "Partout où l'attaque de Fenrir atteignait, la chaleur du champ de neige disparaissait comme morte.",
						"spanish": "Dondequiera que alcanzaba el ataque de Fenrir, el calor del campo de nieve desaparecía como si estuviera muerto.",
						"vietnamese": "Mỗi khi đòn tấn công của Fenrir chạm tới, sự ấm áp của cánh đồng tuyết biến mất như thể đã chết.",
						"thai": "ทุกที่ที่การโจมตีของเฟนเรียร์ไปถึง ความอบอุ่นของทุ่งหิมะก็หายไปราวกับตายแล้ว",
						"hindi": "जहां भी फेनrir का हमला पहुंचता, बर्फ के मैदान की गर्माहट ऐसे गायब हो जाती जैसे वह मर गया हो।"
					}
				},
				{
					"type": "speech",
					"speaker": "bran",
					"content": {
						"korean": "저건 생명을 빼앗는 것이 아니야.",
						"english": "That's not just taking life.",
						"japanese": "あれは命を奪っているだけではない。",
						"chinese": "那不只是夺走生命。",
						"french": "Ce n'est pas seulement prendre des vies.",
						"spanish": "Eso no es solo quitar la vida.",
						"vietnamese": "Đó không chỉ là tước đoạt sự sống.",
						"thai": "นั่นไม่ใช่แค่การพรากชีวิต",
						"hindi": "वह सिर्फ जान नहीं ले रहा है।"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "bran",
					"content": {
						"korean": "공간 자체를… 삼키고 있어. 저 늑대는 굶주림 그 자체군.",
						"english": "It's devouring space itself... That wolf is hunger incarnate.",
						"japanese": "空間そのものを… 飲み込んでいる。あの狼は飢えそのものだ。",
						"chinese": "它在吞噬空间本身……那匹狼就是饥饿本身。",
						"french": "Il dévore l'espace lui-même... Ce loup est la faim incarnée.",
						"spanish": "Está devorando el espacio mismo... Ese lobo es el hambre encarnada.",
						"vietnamese": "Nó đang nuốt chửng cả không gian... Con sói đó chính là hiện thân của sự đói khát.",
						"thai": "มันกำลังกลืนกินแม้กระทั่งอวกาศ... หมาป่าตัวนั้นคือความหิวโหยโดยแท้จริง",
						"hindi": "यह अंतरिक्ष को ही निगल रहा है... वह भेड़िया साक्षात भूख है।"
					},
					"emotion": "sad"
				}
			]
		},
		{
			"dialogue": [
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "…다가오지 마라.",
						"english": "...Don't come closer.",
						"japanese": "...近づくな。",
						"chinese": "...别过来。",
						"french": "...Ne t'approche pas.",
						"spanish": "...No te acerques.",
						"vietnamese": "...Đừng lại gần.",
						"thai": "...อย่าเข้ามาใกล้",
						"hindi": "...पास मत आना।"
					}
				},
				{
					"emotion": "base",
					"speaker": "boss",
					"content": {
						"korean": "나의 허기는… 끝이 없다.",
						"english": "My hunger... is endless.",
						"japanese": "私の飢えは… 終わりがない。",
						"chinese": "我的饥饿……永无止境。",
						"french": "Ma faim... est sans fin.",
						"spanish": "Mi hambre... es infinita.",
						"vietnamese": "Cơn đói của ta... là vô tận.",
						"thai": "ความหิวของข้า... ไม่มีที่สิ้นสุด",
						"hindi": "मेरी भूख... अंतहीन है।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "여기서 널 끝내겠다!",
						"english": "I'll end you here!",
						"japanese": "ここで貴様を終わらせる！",
						"chinese": "我要在这里解决你！",
						"french": "Je vais t'achever ici !",
						"spanish": "¡Aquí te acabaré!",
						"vietnamese": "Ta sẽ kết liễu ngươi tại đây!",
						"thai": "ข้าจะจบเจ้าที่นี่!",
						"hindi": "मैं तुम्हें यहीं खत्म कर दूंगा!"
					},
					"type": "speech",
					"emotion": "angry"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "Fenrir의 몸을 이루던 뼈와 사체들이 와르르 무너져 내렸다.",
						"english": "The bones and carcasses that formed Fenrir's body crumbled apart.",
						"japanese": "Fenrirの体を構成していた骨と死体がガラガラと崩れ落ちた。",
						"chinese": "构成芬里尔身体的骨头和尸体轰然倒塌。",
						"french": "Les os et les carcasses qui formaient le corps de Fenrir s'effondrèrent.",
						"spanish": "Los huesos y los cadáveres que formaban el cuerpo de Fenrir se derrumbaron.",
						"vietnamese": "Xương và xác chết tạo nên cơ thể Fenrir đổ sụp xuống.",
						"thai": "กระดูกและซากศพที่ประกอบเป็นร่างของ Fenrir พังทลายลง",
						"hindi": "फेनरिर के शरीर को बनाने वाली हड्डियाँ और शव ढह गए।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "…배고파…",
						"english": "...Hungry...",
						"japanese": "...お腹すいた。",
						"chinese": "...好饿...",
						"french": "...Faim...",
						"spanish": "...Hambre...",
						"vietnamese": "...Đói quá...",
						"thai": "...หิว...",
						"hindi": "...भूख लगी है..."
					},
					"emotion": "sad"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "그 순간, 주변의 더 많은 짐승 사체가 빨려 들어가 늑대의 형상이 더욱 거대해졌다.",
						"english": "At that moment, more beast carcasses nearby were sucked in, making the wolf's form even larger.",
						"japanese": "その瞬間、周囲のより多くの獣の死体が吸い込まれ、狼の姿はさらに巨大になった。",
						"chinese": "那一刻，周围更多的野兽尸体被吸入，狼的形态变得更加巨大。",
						"french": "À cet instant, d'autres carcasses de bêtes furent aspirées, rendant la forme du loup encore plus gigantesque.",
						"spanish": "En ese instante, más cadáveres de bestias cercanas fueron absorbidos, haciendo que la forma del lobo fuera aún más grande.",
						"vietnamese": "Khoảnh khắc đó, nhiều xác thú xung quanh bị hút vào, khiến hình dạng con sói trở nên khổng lồ hơn.",
						"thai": "ในพริบตานั้น ซากศพสัตว์ร้ายรอบ ๆ ถูกดูดเข้าไป ทำให้ร่างของหมาป่าขยายใหญ่ขึ้นอีก",
						"hindi": "उसी क्षण, आसपास के और भी जानवरों के शव अंदर खींच लिए गए, जिससे भेड़िये का आकार और भी विशाल हो गया।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "bran",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						2,
						3
					]
				},
				{
					"speaker": "bran",
					"content": {
						"korean": "이건… 또 다른 늑대야. 내가 뭘 본 거지?",
						"english": "This is... another wolf. What did I just see?",
						"japanese": "これは… 別の狼だ。私は一体何を見たんだ？",
						"chinese": "这是……另一只狼。我刚才看到了什么？",
						"french": "C'est... un autre loup. Qu'est-ce que je viens de voir ?",
						"spanish": "Este es... otro lobo. ¿Qué acabo de ver?",
						"vietnamese": "Đây là... một con sói khác. Ta vừa thấy cái gì vậy?",
						"thai": "นี่มัน... หมาป่าอีกตัว. ฉันเห็นอะไรกันแน่?",
						"hindi": "यह... एक और भेड़िया है। मैंने अभी क्या देखा?"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "Fenrir의 텅 빈 동공에서 수백 마리가 겹쳐 우는 가냘픈 신음이 들려왔다.",
						"english": "From Fenrir's empty pupils came faint whimpers, as if hundreds of creatures were crying out in unison.",
						"japanese": "Fenrirの虚ろな瞳から、何百もの生き物が重なり合って泣くかのようなか細い呻き声が聞こえてきた。",
						"chinese": "从芬里尔空洞的瞳孔中，传来了数百只生物重叠哭泣的微弱呻吟声。",
						"french": "Des pupilles vides de Fenrir s'échappèrent de faibles gémissements, comme si des centaines de créatures pleuraient enchevêtrées.",
						"spanish": "De las pupilas vacías de Fenrir se escucharon débiles gemidos, como si cientos de criaturas lloraran superpuestas.",
						"vietnamese": "Từ đôi đồng tử trống rỗng của Fenrir, vang lên những tiếng rên rỉ yếu ớt, như thể hàng trăm sinh vật đang chồng chất lên nhau mà khóc.",
						"thai": "จากดวงตาที่ว่างเปล่าของ Fenrir ได้ยินเสียงครางแผ่วเบา ราวกับสัตว์นับร้อยกำลังร้องไห้ซ้อนทับกัน",
						"hindi": "फेनरिर की खाली आँखों से, सैकड़ों जीवों के एक साथ रोने जैसी कमजोर कराहें सुनाई दीं।"
					},
					"type": "speech"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…뭐야. 아직 끝나지 않았어?",
						"english": "...What? It's not over yet?",
						"japanese": "...なんだ。まだ終わってないのか？",
						"chinese": "...什么？还没结束？",
						"french": "...Quoi ? Ce n'est pas encore fini ?",
						"spanish": "...¿Qué? ¿Aún no ha terminado?",
						"vietnamese": "...Cái gì? Vẫn chưa kết thúc à?",
						"thai": "...อะไรนะ? ยังไม่จบอีกเหรอ?",
						"hindi": "...क्या? अभी खत्म नहीं हुआ?"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "…나는… 언제나… 굶주린다…",
						"english": "...I... am always... hungry...",
						"japanese": "…私は… いつも… 飢えている…",
						"chinese": "……我……总是……饥饿……",
						"french": "...Je... suis toujours... affamé...",
						"spanish": "...Yo... siempre... tengo hambre...",
						"vietnamese": "...Ta... luôn luôn... đói khát...",
						"thai": "...ข้า... หิวโหย... อยู่เสมอ...",
						"hindi": "...मैं... हमेशा... भूखा... रहता हूँ..."
					}
				}
			],
			"lose_dialogue": [
				{
					"speaker": "boss",
					"content": {
						"korean": "…너희는… 나의 허기를 채울 수 없어.",
						"english": "...You... cannot satisfy my hunger.",
						"japanese": "…お前たちでは… 私の飢えを満たせぬ。",
						"chinese": "……你们……无法满足我的饥饿。",
						"french": "...Vous... ne pouvez pas satisfaire ma faim.",
						"spanish": "...Vosotros... no podéis saciar mi hambre.",
						"vietnamese": "...Các ngươi... không thể lấp đầy cơn đói của ta.",
						"thai": "...พวกเจ้า... ไม่อาจระงับความหิวของข้าได้...",
						"hindi": "...तुम... मेरी भूख... मिटा नहीं सकते।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "크윽… 이대로 끝낼 순 없어!",
						"english": "Ugh... I can't end it like this!",
						"japanese": "くっ… このままでは終わらせられない！",
						"chinese": "呃……不能就这样结束！",
						"french": "Argh... Je ne peux pas finir comme ça !",
						"spanish": "Ugh... ¡No puedo terminar así!",
						"vietnamese": "Khụ... Không thể kết thúc thế này được!",
						"thai": "อึก... จะจบแค่นี้ไม่ได้!",
						"hindi": "उफ़... मैं ऐसे हार नहीं मान सकता!"
					},
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"speaker": "bran",
					"type": "direction",
					"spot": [
						3,
						3
					],
					"action": "enter"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "bran",
					"content": {
						"korean": "다시 일어서라. 이대로 끝낼 수는 없다.",
						"english": "Rise again. We cannot end it like this.",
						"japanese": "再び立ち上がれ。このままでは終われない。",
						"chinese": "再次站起来。不能就这样结束。",
						"french": "Relève-toi. On ne peut pas en finir ainsi.",
						"spanish": "Levántate de nuevo. No podemos terminar así.",
						"vietnamese": "Đứng dậy lần nữa đi. Không thể kết thúc thế này được.",
						"thai": "จงลุกขึ้นใหม่ เราจะจบแค่นี้ไม่ได้",
						"hindi": "फिर से उठो। हम ऐसे खत्म नहीं कर सकते।"
					}
				}
			]
		}
	],
	"epilogue": {
		"korean": [
			"거대한 늑대의 허기는 잠시 멈춘 듯했지만, 진정한 해결책은 보이지 않았다.",
			"수백 마리 짐승의 원한이 응결된 존재… 과연 물리칠 수 있는 것일까?",
			"설원에는 싸늘한 침묵이 감돌았다.",
			"탐험대의 여정은, 끝나지 않았다."
		],
		"english": [
			"The giant wolf's hunger seemed to pause, but no true solution was in sight.",
			"A being formed from the grudges of hundreds of beasts… Can it truly be defeated?",
			"A chilling silence fell over the snowy plains.",
			"The expedition's journey had not ended."
		],
		"japanese": [
			"巨大な狼の飢えは一時的に止まったようだったが、真の解決策は見えなかった。",
			"数百の獣の怨念が凝結した存在…果たして打ち破れるのだろうか？",
			"雪原には冷たい沈黙が漂っていた。",
			"探検隊の旅は、終わっていなかった。"
		],
		"chinese": [
			"巨狼的饥饿似乎暂时平息，但真正的解决方案却不见踪影。",
			"由数百只野兽怨念凝聚而成的存在……真的能被击败吗？",
			"雪原上弥漫着冰冷的寂静。",
			"探险队的旅程，并未结束。"
		],
		"french": [
			"La faim du loup géant semblait s'être arrêtée un instant, mais aucune véritable solution n'était en vue.",
			"Un être formé par les rancunes de centaines de bêtes… Peut-il vraiment être vaincu ?",
			"Un silence glacial tomba sur les plaines enneigées.",
			"Le voyage de l'expédition n'était pas terminé."
		],
		"spanish": [
			"El hambre del lobo gigante pareció detenerse, pero no se vislumbraba una verdadera solución.",
			"Un ser formado por los rencores de cientos de bestias... ¿Podrá ser derrotado realmente?",
			"Un silencio escalofriante se cernió sobre las planicies nevadas.",
			"El viaje de la expedición no había terminado."
		],
		"vietnamese": [
			"Cơn đói của con sói khổng lồ dường như đã dừng lại, nhưng không có giải pháp thực sự nào.",
			"Một thực thể được hình thành từ oán hận của hàng trăm con thú... Liệu nó có thể bị đánh bại không?",
			"Một sự im lặng lạnh lẽo bao trùm khắp đồng tuyết.",
			"Hành trình của đoàn thám hiểm vẫn chưa kết thúc."
		],
		"thai": [
			"ความหิวโหยของหมาป่ายักษ์ดูเหมือนจะหยุดลงชั่วคราว แต่ยังไม่มีวิธีแก้ปัญหาที่แท้จริงปรากฏขึ้น",
			"สิ่งมีชีวิตที่เกิดจากความอาฆาตแค้นของสัตว์ร้ายนับร้อย... มันจะสามารถถูกเอาชนะได้จริงหรือ?",
			"ความเงียบงันเยียบเย็นปกคลุมทุ่งหิมะ",
			"การเดินทางของคณะสำรวจยังไม่สิ้นสุด"
		],
		"hindi": [
			"विशाल भेड़िये की भूख थम गई थी, लेकिन कोई वास्तविक समाधान नजर नहीं आ रहा था।",
			"सैकड़ों जानवरों के द्वेष से बना एक प्राणी... क्या इसे सचमुच हराया जा सकता है?",
			"बर्फीले मैदानों पर एक ठंडी खामोशी छा गई।",
			"अभियान की यात्रा समाप्त नहीं हुई थी।"
		]
	},
	"prologue": {
		"korean": [
			"끝없는 설원, 마침내 도달한 종말의 늑대 'Fenrir'.",
			"그것은 단순한 맹수가 아니었다. 거대한 뼈와 사체의 집합체.",
			"절망적인 일격, 그러나 그것은 단지 절반의 진실이었다.",
			"진정한 '허기'는… 끝나지 않았다."
		],
		"english": [
			"Endless snowy plains, where the wolf of Ragnarok, 'Fenrir', finally arrived.",
			"It was no mere beast. A grotesque amalgamation of giant bones and corpses.",
			"A despairing strike, yet that was only half the truth.",
			"The true 'hunger'… had not ended."
		],
		"japanese": [
			"果てしない雪原、ついに現れた終末の狼「フェンリル」。",
			"それはただの猛獣ではなかった。巨大な骨と死体の集合体。",
			"絶望的な一撃、だがそれは真実の半分に過ぎなかった。",
			"真の「飢え」は…終わっていなかった。"
		],
		"chinese": [
			"无尽的雪原，终焉之狼“芬里尔”终于降临。",
			"它并非寻常猛兽。而是巨骨与尸骸的集合体。",
			"绝望的一击，但这只是真相的一半。",
			"真正的“饥饿”……并未终结。"
		],
		"french": [
			"Plaines enneigées sans fin, où le loup du Ragnarök, 'Fenrir', est finalement apparu.",
			"Ce n'était pas une simple bête. Un amalgame grotesque d'os géants et de cadavres.",
			"Un coup désespéré, mais ce n'était que la moitié de la vérité.",
			"La véritable 'faim'... n'était pas terminée."
		],
		"spanish": [
			"Planicies nevadas interminables, donde el lobo del fin, 'Fenrir', finalmente llegó.",
			"No era una simple bestia. Un amalgama grotesco de huesos gigantes y cadáveres.",
			"Un golpe desesperado, pero esa era solo la mitad de la verdad.",
			"El verdadero 'hambre'... no había terminado."
		],
		"vietnamese": [
			"Đồng tuyết bất tận, nơi Sói tận thế 'Fenrir' cuối cùng đã đến.",
			"Nó không phải là một con thú hoang đơn thuần. Một sự kết hợp kỳ quái của xương khổng lồ và xác chết.",
			"Một đòn tấn công tuyệt vọng, nhưng đó chỉ là một nửa sự thật.",
			"Cơn 'đói' thực sự... vẫn chưa kết thúc."
		],
		"thai": [
			"ทุ่งหิมะอันไร้ที่สิ้นสุด ที่ซึ่งหมาป่าแห่งวันสิ้นโลก 'เฟนริร์' ได้มาถึงในที่สุด",
			"มันไม่ใช่แค่สัตว์ร้ายธรรมดา แต่มันคือการรวมตัวกันอย่างประหลาดของกระดูกยักษ์และซากศพ",
			"การโจมตีที่สิ้นหวัง แต่เป็นเพียงครึ่งหนึ่งของความจริงเท่านั้น",
			" 'ความหิวโหย' ที่แท้จริง... ยังไม่จบลง"
		],
		"hindi": [
			"अंतहीन बर्फीले मैदान, जहाँ अंत का भेड़िया 'फेनरिर' अंततः आ पहुँचा।",
			"यह कोई साधारण जानवर नहीं था। विशाल हड्डियों और लाशों का एक विकृत मिश्रण।",
			"एक निराशाजनक वार, फिर भी वह केवल आधा सच था।",
			"वास्तविक 'भूख'... समाप्त नहीं हुई थी।"
		]
	}
} as const;
