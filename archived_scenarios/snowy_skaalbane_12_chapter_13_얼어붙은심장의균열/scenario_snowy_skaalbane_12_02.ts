export const scenario_snowy_skaalbane_12_02 = {
	"scenario_id": "snowy_skaalbane_12_02",
	"order": 2,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"ivar": {
			"id": "mon_d8a80adc-9315-47b5-8c30-97ce33672bce",
			"name": {
				"korean": "이바르",
				"english": "Ivar",
				"japanese": "イヴァー",
				"chinese": "伊瓦尔",
				"french": "Ivar",
				"spanish": "Ivar",
				"vietnamese": "Ivar",
				"thai": "ไอวาร์",
				"hindi": "इवर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8dd7872b-d4df-44fd-b1a1-083a9156e700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/2622fb62-daf4-42d1-a83b-2b78869d3e00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"content": {
						"korean": "얼음 기둥 깊숙한 곳. 차가운 벽에 박힌 시신들이 나타났다.",
						"english": "Deep within the ice pillar. Corpses appeared, embedded in the cold walls.",
						"japanese": "氷柱の奥深く。冷たい壁に埋め込まれた死体が現れた。",
						"chinese": "冰柱深处。冰冷的墙壁上出现了嵌入的尸体。",
						"french": "Au fond du pilier de glace. Des corps sont apparus, incrustés dans les murs froids.",
						"spanish": "En lo profundo del pilar de hielo. Cadáveres incrustados en las frías paredes aparecieron.",
						"vietnamese": "Sâu thẳm trong cột băng. Những thi thể xuất hiện, bị đóng vào bức tường lạnh lẽo.",
						"thai": "ลึกเข้าไปในเสาน้ำแข็ง ร่างไร้วิญญาณปรากฏขึ้นฝังอยู่บนผนังอันเยือกเย็น",
						"hindi": "बर्फीले स्तंभ के गहरे भीतर। ठंडी दीवारों में जड़े हुए शव दिखाई दिए।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이건… 바이킹 전사들이잖아?",
						"english": "These are... Viking warriors?",
						"japanese": "これらは…ヴァイキングの戦士たちか？",
						"chinese": "这些是……维京战士？",
						"french": "Ce sont... des guerriers vikings ?",
						"spanish": "¿Estos son... guerreros vikingos?",
						"vietnamese": "Đây là… các chiến binh Viking sao?",
						"thai": "นี่มัน... นักรบไวกิ้งหรือเปล่า?",
						"hindi": "ये... वाइकिंग योद्धा हैं?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"emotion": "sad",
					"content": {
						"korean": "전부 얼어붙어 있어. 마치 시간이 멈춘 것처럼.",
						"english": "They're all frozen. As if time has stopped.",
						"japanese": "全て凍りついている。まるで時間が止まったかのように。",
						"chinese": "全都冻结了。就像时间停止了一样。",
						"french": "Ils sont tous gelés. Comme si le temps s'était arrêté.",
						"spanish": "Todos están congelados. Como si el tiempo se hubiera detenido.",
						"vietnamese": "Tất cả đều đóng băng. Cứ như thời gian đã ngừng lại vậy.",
						"thai": "พวกเขาทั้งหมดแข็งค้าง ราวกับว่าเวลาได้หยุดลง",
						"hindi": "वे सब जमे हुए हैं। जैसे समय रुक गया हो।"
					}
				},
				{
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "ivar"
				},
				{
					"content": {
						"korean": "더 이상은 위험하다. 퇴각해야 한다.",
						"english": "It's too dangerous to go on. We must retreat.",
						"japanese": "これ以上は危険だ。退却しなければならない。",
						"chinese": "再往前就危险了。必须撤退。",
						"french": "C'est trop dangereux. Nous devons nous retirer.",
						"spanish": "Es demasiado peligroso. Debemos retirarnos.",
						"vietnamese": "Nguy hiểm lắm rồi. Phải rút lui thôi.",
						"thai": "อันตรายเกินไปแล้ว ต้องถอยกลับ",
						"hindi": "अब और आगे खतरा है। हमें पीछे हटना होगा।"
					},
					"speaker": "ivar",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "하지만… 진실이 바로 앞에 있는 것 같아.",
						"english": "But... the truth seems to be right in front of us.",
						"japanese": "しかし…真実が目の前にあるような気がする。",
						"chinese": "但是……真相似乎就在眼前。",
						"french": "Mais... la vérité semble être juste devant nous.",
						"spanish": "Pero... la verdad parece estar justo delante de nosotros.",
						"vietnamese": "Nhưng mà… sự thật dường như đang ở ngay trước mắt.",
						"thai": "แต่ว่า... ความจริงเหมือนจะอยู่ตรงหน้าแล้ว",
						"hindi": "लेकिन... सच्चाई हमारे सामने लग रही है।"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "ivar",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "ivar",
					"content": {
						"korean": "봐라. 이바르의 말이 틀리지 않았어.",
						"english": "Look. Ivar was right.",
						"japanese": "見ろ。イーヴァルの言った通りだ。",
						"chinese": "看啊。伊瓦尔说得没错。",
						"french": "Regarde. Ivar avait raison.",
						"spanish": "Mira. Ivar no se equivocó.",
						"vietnamese": "Nhìn kìa. Lời Ivar nói không sai.",
						"thai": "ดูสิ ไอบาร์พูดถูก",
						"hindi": "देखो। इवार गलत नहीं था।"
					}
				},
				{
					"content": {
						"korean": "끔찍하게 일그러진 시신들이 더욱 많아졌다. 이들의 눈에는 공포가 서려 있었다.",
						"english": "More terribly twisted corpses appeared. Their eyes were filled with terror.",
						"japanese": "恐ろしく歪んだ死体がさらに増えた。彼らの目には恐怖が宿っていた。",
						"chinese": "可怕扭曲的尸体越来越多。他们的眼中充满了恐惧。",
						"french": "Davantage de corps horriblement tordus. Leurs yeux figés par la terreur.",
						"spanish": "Cada vez más cadáveres horriblemente retorcidos. Sus ojos reflejaban el terror.",
						"vietnamese": "Càng lúc càng nhiều xác chết biến dạng kinh khủng. Đôi mắt họ chất chứa nỗi kinh hoàng.",
						"thai": "พบศพที่บิดเบี้ยวอย่างน่าสยดสยองมากขึ้นเรื่อยๆ ดวงตาของพวกเขาเต็มไปด้วยความหวาดกลัว",
						"hindi": "भयंकर रूप से विकृत लाशें और बढ़ गईं। उनकी आँखों में भय समाया हुआ था।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이바르, 저 시신들을 봐. 굳은 표정에서도 공포가 느껴져.",
						"english": "Ivar, look at those bodies. Even in their rigid expressions, fear is palpable.",
						"japanese": "イヴァル、あの死体を見て。凍りついた表情からも恐怖が感じられる。",
						"chinese": "伊瓦尔，看那些尸体。即使是僵硬的表情也透着恐惧。",
						"french": "Ivar, regarde ces corps. La peur se lit même dans leurs expressions figées.",
						"spanish": "Ivar, mira esos cuerpos. El miedo se siente incluso en sus expresiones rígidas.",
						"vietnamese": "Ivar, nhìn những xác chết kia đi. Nỗi sợ hãi hiện rõ ngay cả trên những gương mặt đã đông cứng.",
						"thai": "อีวาร์ มองดูศพพวกนั้นสิ แม้แต่สีหน้าที่แข็งทื่อก็ยังสัมผัสได้ถึงความหวาดกลัว",
						"hindi": "ईवर, उन लाशों को देखो। उनकी कठोर अभिव्यक्तियों में भी डर महसूस हो रहा है।"
					},
					"type": "speech",
					"speaker": "character_2",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "죽음의 기운이 더욱 강해지고 있다. 이곳은… 더 깊이 파고들수록 위험해질 뿐이다.",
						"english": "The aura of death intensifies. This place... the deeper we delve, the more dangerous it becomes.",
						"japanese": "死の気配がさらに強まっている。ここは…深く潜るほど危険になるだけだ。",
						"chinese": "死亡的气息越来越强烈。这里……越深入只会越危险。",
						"french": "L'aura de la mort s'intensifie. Cet endroit… ne fera que devenir plus dangereux plus nous nous enfoncerons.",
						"spanish": "El aura de la muerte se intensifica. Este lugar… solo se volverá más peligroso cuanto más nos adentremos.",
						"vietnamese": "Khí tức của cái chết càng lúc càng mạnh. Nơi đây... càng đi sâu vào sẽ càng nguy hiểm.",
						"thai": "กลิ่นอายแห่งความตายยิ่งทวีความรุนแรงขึ้นเรื่อยๆ ที่นี่... ยิ่งลงลึกเท่าไหร่ก็ยิ่งอันตรายเท่านั้น",
						"hindi": "मृत्यु की आभा और भी तीव्र हो रही है। यह जगह… जितनी गहरी हम जाएँगे, उतनी ही ख़तरनाक होती जाएगी।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "ivar"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이 힘은 대체 뭘까… 이 시신들은 왜 여기에…",
						"english": "What *is* this power? And why are these bodies here...?",
						"japanese": "この力は一体何だ…この死体たちはなぜここに…",
						"chinese": "这股力量到底是什么……这些尸体为什么会在这里……",
						"french": "Qu'est donc ce pouvoir… Et pourquoi ces corps sont-ils ici…",
						"spanish": "¿Qué es este poder…? ¿Por qué están aquí estos cuerpos…?",
						"vietnamese": "Sức mạnh này rốt cuộc là gì... Những xác chết này tại sao lại ở đây...",
						"thai": "พลังนี้คืออะไรกันแน่... ทำไมศพพวกนี้ถึงมาอยู่ที่นี่...",
						"hindi": "यह शक्ति आखिर क्या है… ये लाशें यहाँ क्यों हैं…"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						3,
						3
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "ivar"
				},
				{
					"content": {
						"korean": "얼어붙은 채 몸부림치던 한 시신이 눈에 띄었다. 그의 손에는 낡은 검이 쥐여 있었다.",
						"english": "A frozen corpse, contorted as if struggling, caught my eye. A worn sword was clutched in its hand.",
						"japanese": "凍りつき、もがいていたような一体の死体が目に留まった。その手には古びた剣が握られていた。",
						"chinese": "一个冻僵挣扎的尸体映入眼帘。他的手里握着一把旧剑。",
						"french": "Un cadavre, figé dans une contorsion, attira mon regard. Une épée usée était serrée dans sa main.",
						"spanish": "Un cadáver, congelado y retorcido como si hubiera luchado, llamó mi atención. En su mano empuñaba una espada desgastada.",
						"vietnamese": "Một xác chết đang giãy giụa trong băng giá lọt vào mắt tôi. Trên tay hắn nắm chặt một thanh kiếm cũ kỹ.",
						"thai": "ศพหนึ่งที่แข็งค้างราวกับกำลังต่อสู้ดิ้นรนอยู่ในความสนใจของฉัน ดาบเก่าๆ เล่มหนึ่งอยู่ในมือของเขา",
						"hindi": "एक जमा हुआ, संघर्ष करता हुआ शव मेरी नजर में आया। उसके हाथ में एक पुरानी तलवार पकड़ी हुई थी।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "이 검… 설마, 전설 속 영웅의 검인가?",
						"english": "This sword... could it be the legendary hero's blade?",
						"japanese": "この剣…まさか、伝説の英雄の剣なのか？",
						"chinese": "这把剑……难道是传说中英雄的剑？",
						"french": "Cette épée… Serait-ce l'épée du héros légendaire ?",
						"spanish": "Esta espada… ¿Será la espada del héroe legendario?",
						"vietnamese": "Thanh kiếm này... lẽ nào, là kiếm của anh hùng trong truyền thuyết?",
						"thai": "ดาบเล่มนี้... ไม่นะ นี่คือดาบของวีรบุรุษในตำนานหรือ?",
						"hindi": "यह तलवार… कहीं यह पौराणिक नायक की तलवार तो नहीं?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_3"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "ivar",
					"content": {
						"korean": "…이런 곳에 버려져 있을 리가 없다. 이건 경고다.",
						"english": "...It wouldn't be abandoned in a place like this. This is a warning.",
						"japanese": "…こんな場所に捨てられているはずがない。これは警告だ。",
						"chinese": "……不可能被遗弃在这种地方。这是一个警告。",
						"french": "…Elle ne serait pas abandonnée dans un tel endroit. C'est un avertissement.",
						"spanish": "…No estaría abandonada en un lugar como este. Esto es una advertencia.",
						"vietnamese": "...Không thể nào lại bị bỏ lại ở nơi như thế này. Đây là một lời cảnh báo.",
						"thai": "...ไม่มีทางที่จะถูกทิ้งไว้ในที่แบบนี้ นี่คือคำเตือน",
						"hindi": "…यह ऐसी जगह पर यूँ ही नहीं छोड़ी गई होगी। यह एक चेतावनी है।"
					}
				},
				{
					"content": {
						"korean": "하지만 이 힘… 느껴지지 않아? 더 깊은 곳에 뭔가가 있어.",
						"english": "But this power... don't you feel it? Something lies deeper within.",
						"japanese": "しかしこの力…感じないか？もっと深い場所に何かがある。",
						"chinese": "可是这股力量……你感觉不到吗？更深处有什么东西。",
						"french": "Mais ce pouvoir… Ne le sens-tu pas ? Il y a quelque chose de plus profond.",
						"spanish": "Pero este poder… ¿No lo sientes? Hay algo más profundo.",
						"vietnamese": "Nhưng sức mạnh này... ngươi không cảm nhận được sao? Có thứ gì đó ở sâu hơn bên trong.",
						"thai": "แต่พลังนี้... เธอไม่รู้สึกหรือไง? มีบางอย่างอยู่ลึกกว่านั้น",
						"hindi": "लेकिन यह शक्ति… क्या तुम्हें महसूस नहीं होती? गहरे में कुछ और है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"emotion": "angry",
					"speaker": "ivar",
					"type": "speech",
					"content": {
						"korean": "…내가 경고했다. 이 힘은 너희를 파괴할 것이다.",
						"english": "...I warned you. This power will destroy you.",
						"japanese": "…私が警告したぞ。この力はお前たちを破滅させるだろう。",
						"chinese": "……我已经警告过你。这股力量会摧毁你们。",
						"french": "…Je vous avais prévenus. Ce pouvoir vous détruira.",
						"spanish": "…Te lo advertí. Este poder os destruirá.",
						"vietnamese": "...Ta đã cảnh báo rồi. Sức mạnh này sẽ hủy diệt các ngươi.",
						"thai": "...ฉันเตือนแล้ว พลังนี้จะทำลายพวกเจ้า",
						"hindi": "...मैंने तुम्हें चेतावनी दी थी। यह शक्ति तुम्हें नष्ट कर देगी।"
					}
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "ivar",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "차가운 공기가 살을 에는 듯했다. 끝없이 이어진 시신들이 거대한 길을 만들고 있었다.",
						"english": "The cold air bit into my skin. Endless corpses formed a massive path.",
						"japanese": "冷たい空気が肌を裂くようだった。果てしなく続く死体が、巨大な道を作っていた。",
						"chinese": "冰冷的空气仿佛要撕裂皮肤。无尽的尸体铺成了一条巨大的道路。",
						"french": "L'air froid mordait la peau. Des corps sans fin formaient un chemin gigantesque.",
						"spanish": "El aire frío cortaba la piel. Cadáveres interminables formaban un camino gigantesco.",
						"vietnamese": "Không khí lạnh lẽo như cứa vào da thịt. Vô số thi thể trải dài tạo thành một con đường khổng lồ.",
						"thai": "อากาศเย็นยะเยือกกัดกินผิวหนัง ศพที่เรียงรายไม่สิ้นสุดสร้างเป็นเส้นทางขนาดใหญ่",
						"hindi": "ठंडी हवा त्वचा को चीर रही थी। अनगिनत लाशें एक विशाल रास्ता बना रही थीं।"
					}
				},
				{
					"content": {
						"korean": "이제 돌아갈 수 없어… 여기까지 왔는데.",
						"english": "No turning back now... not after coming this far.",
						"japanese": "もう戻れない…ここまで来たんだから。",
						"chinese": "已经无法回头了……都走到这里了。",
						"french": "Impossible de faire demi-tour maintenant... après tout ce chemin.",
						"spanish": "Ya no hay vuelta atrás... después de haber llegado tan lejos.",
						"vietnamese": "Không thể quay lại nữa... khi đã đến tận đây rồi.",
						"thai": "ตอนนี้กลับไปไม่ได้แล้ว... มาถึงนี่แล้ว",
						"hindi": "अब वापस नहीं जा सकते... यहाँ तक आ गए हैं।"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"speaker": "ivar",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "강함은 무모함이 아니다. 때로는 용기 있는 퇴각이 더 큰 강함을 증명한다.",
						"english": "Strength isn't recklessness. Sometimes, a courageous retreat proves greater strength.",
						"japanese": "強さとは無謀さではない。時には、勇気ある撤退こそが真の強さを示す。",
						"chinese": "强大并非鲁莽。有时，有勇气的撤退更能证明强大的力量。",
						"french": "La force n'est pas la témérité. Parfois, une retraite courageuse prouve une plus grande force.",
						"spanish": "La fuerza no es imprudencia. A veces, una retirada valiente demuestra mayor fuerza.",
						"vietnamese": "Sức mạnh không phải là liều lĩnh. Đôi khi, một cuộc rút lui dũng cảm lại chứng tỏ sức mạnh lớn hơn.",
						"thai": "ความแข็งแกร่งไม่ใช่ความบ้าบิ่น บางครั้ง การถอยอย่างกล้าหาญต่างหากที่พิสูจน์ความแข็งแกร่งที่ยิ่งใหญ่กว่า",
						"hindi": "ताकत जल्दबाज़ी नहीं है। कभी-कभी, एक साहसी पीछे हटना ही सबसे बड़ी ताकत साबित करता है।"
					}
				},
				{
					"content": {
						"korean": "하지만 저 안에서 느껴지는 힘… 놓칠 수 없어.",
						"english": "But the power I feel within... I can't let it go.",
						"japanese": "しかし、あの奥で感じる力…見過ごせない。",
						"chinese": "但是，从那里面感受到的力量……我不能错过。",
						"french": "Mais le pouvoir que je ressens là-dedans... je ne peux pas le laisser filer.",
						"spanish": "Pero el poder que siento ahí dentro... no puedo dejarlo escapar.",
						"vietnamese": "Nhưng sức mạnh cảm nhận được từ bên trong... không thể bỏ lỡ.",
						"thai": "แต่พลังที่รู้สึกได้จากข้างในนั้น... ปล่อยไปไม่ได้",
						"hindi": "लेकिन अंदर जो शक्ति महसूस हो रही है... उसे खो नहीं सकता।"
					},
					"speaker": "character_1",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "ivar",
					"content": {
						"korean": "결국… 각자의 선택이다.",
						"english": "Ultimately... it's each person's choice.",
						"japanese": "結局…それぞれの選択だ。",
						"chinese": "最终……这是各自的选择。",
						"french": "Finalement... c'est le choix de chacun.",
						"spanish": "Al final... es la elección de cada uno.",
						"vietnamese": "Cuối cùng... đó là lựa chọn của mỗi người.",
						"thai": "ท้ายที่สุดแล้ว... มันคือทางเลือกของแต่ละคน",
						"hindi": "अंततः... यह हर किसी की अपनी पसंद है।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "거대한 그림자가 얼음 사이에서 솟아났다. 얼어붙은 바이킹 시신들의 염원이 모인 듯했다.",
						"english": "A colossal shadow emerged from the ice. It seemed to be a convergence of the frozen Viking corpses' desires.",
						"japanese": "巨大な影が氷の間から現れた。凍りついたヴァイキングの屍たちの念が集まったようだった。",
						"chinese": "巨大的阴影从冰层中升起。仿佛是冰冻维京尸体的愿望汇聚而成。",
						"french": "Une ombre colossale surgit des glaces. On aurait dit que c'était la convergence des désirs des corps gelés des Vikings.",
						"spanish": "Una sombra colosal surgió entre el hielo. Parecía una convergencia de los deseos de los cadáveres vikingos congelados.",
						"vietnamese": "Một bóng tối khổng lồ trỗi dậy từ giữa băng. Dường như đó là sự hội tụ của những ước nguyện từ xác chết Viking bị đóng băng.",
						"thai": "เงาขนาดยักษ์ผุดขึ้นจากน้ำแข็ง มันดูราวกับเป็นการรวมตัวของความปรารถนาจากศพไวกิ้งที่ถูกแช่แข็ง",
						"hindi": "बर्फ़ के बीच से एक विशाल छाया उभरी। ऐसा लग रहा था मानो जमी हुई वाइキング लाशों की इच्छाएँ इकट्ठी हो गई हों।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "어리석은 자들. 너희도 결국 이곳에 갇히리라.",
						"english": "Fools. You too shall eventually be trapped here.",
						"japanese": "愚かな者たち。お前たちも結局、ここに閉じ込められるだろう。",
						"chinese": "愚蠢的家伙们。你们最终也会被困在这里。",
						"french": "Insensés. Vous aussi finirez par être piégés ici.",
						"spanish": "Necios. Vosotros también acabaréis atrapados aquí.",
						"vietnamese": "Những kẻ ngốc. Cuối cùng các ngươi cũng sẽ bị nhốt ở đây.",
						"thai": "พวกโง่เขลา เจ้าเองก็จะถูกขังอยู่ที่นี่ในที่สุด",
						"hindi": "मूर्ख। तुम भी अंततः यहीं फँस जाओगे।"
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "네가 이 모든 것을 꾸민 건가?",
						"english": "Did you orchestrate all of this?",
						"japanese": "お前がこの全てを企んだのか？",
						"chinese": "这一切都是你策划的吗？",
						"french": "Est-ce toi qui as orchestré tout cela ?",
						"spanish": "¿Fuiste tú quien orquestó todo esto?",
						"vietnamese": "Ngươi đã sắp đặt tất cả chuyện này sao?",
						"thai": "เจ้าเป็นคนบงการทั้งหมดนี้หรือเปล่า?",
						"hindi": "क्या यह सब तुमने ही रचा है?"
					}
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "나는 그저… 차가운 진실을 보여줄 뿐.",
						"english": "I merely... show the cold truth.",
						"japanese": "私はただ…冷たい真実を見せるだけだ。",
						"chinese": "我只是……展示冰冷的真相。",
						"french": "Je ne fais que... montrer la froide vérité.",
						"spanish": "Yo solo... muestro la fría verdad.",
						"vietnamese": "Ta chỉ... cho thấy sự thật lạnh lùng.",
						"thai": "ข้าแค่... แสดงความจริงอันเยือกเย็นเท่านั้น",
						"hindi": "मैं बस... ठंडी सच्चाई दिखाता हूँ।"
					}
				},
				{
					"emotion": "angry",
					"speaker": "ivar",
					"type": "speech",
					"content": {
						"korean": "이 이상은 안 된다! 물러서라!",
						"english": "No further! Retreat!",
						"japanese": "これ以上は許さない！退がれ！",
						"chinese": "到此为止！退下！",
						"french": "Pas plus loin ! Retirez-vous !",
						"spanish": "¡No más! ¡Retírense!",
						"vietnamese": "Không được nữa! Lùi lại!",
						"thai": "ห้ามไปเกินกว่านี้! ถอยไป!",
						"hindi": "इससे आगे नहीं! पीछे हटो!"
					}
				},
				{
					"content": {
						"korean": "오만한 전사여. 너의 강함도 얼음 앞에서는 무의미하다.",
						"english": "Arrogant warrior. Your strength is meaningless before the ice.",
						"japanese": "傲慢な戦士よ。お前の強さも氷の前では無意味だ。",
						"chinese": "傲慢的战士啊。你的强大在冰霜面前毫无意义。",
						"french": "Guerrier arrogant. Ta force est insignifiante devant la glace.",
						"spanish": "Guerrero arrogante. Tu fuerza es insignificante ante el hielo.",
						"vietnamese": "Chiến binh kiêu ngạo. Sức mạnh của ngươi cũng vô nghĩa trước băng giá.",
						"thai": "นักรบผู้หยิ่งผยอง ความแข็งแกร่งของเจ้าไร้ความหมายต่อหน้าธารน้ำแข็ง",
						"hindi": "अभिमानी योद्धा। तुम्हारी ताकत बर्फ़ के सामने बेमानी है।"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "차가운 어둠이 모든 것을 삼켰다. 강철도, 의지도 얼어붙었다.",
						"english": "Cold darkness swallowed everything. Steel and will, both frozen.",
						"japanese": "冷たい闇がすべてを飲み込んだ。鋼も、意志も凍りついた。",
						"chinese": "冰冷的黑暗吞噬了一切。钢铁与意志，都已冻结。",
						"french": "Les ténèbres froides ont tout englouti. L'acier et la volonté, tous deux gelés.",
						"spanish": "La fría oscuridad lo engulló todo. El acero y la voluntad, ambos congelados.",
						"vietnamese": "Bóng tối lạnh lẽo nuốt chửng mọi thứ. Thép và ý chí, đều đóng băng.",
						"thai": "ความมืดมิดเยือกเย็นกลืนกินทุกสิ่ง ทั้งเหล็กกล้าและเจตจำนงต่างแข็งเป็นน้ำแข็ง",
						"hindi": "ठंडे अंधेरे ने सब कुछ निगल लिया। इस्पात और इच्छाशक्ति, दोनों जम गए।"
					}
				},
				{
					"content": {
						"korean": "나의 일부가 될지어다. 영원한 고통 속에서…",
						"english": "Become a part of me. In eternal torment...",
						"japanese": "我が一部となれ。永遠の苦痛の中で…",
						"chinese": "成为我的一部分吧。在永恒的痛苦中……",
						"french": "Deviens une partie de moi. Dans un tourment éternel...",
						"spanish": "Sé parte de mí. En tormento eterno...",
						"vietnamese": "Hãy trở thành một phần của ta. Trong nỗi đau vĩnh hằng...",
						"thai": "จงกลายเป็นส่วนหนึ่งของข้า ในความทรมานชั่วนิรันดร์...",
						"hindi": "मेरा एक हिस्सा बन जाओ। शाश्वत पीड़ा में..."
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "크윽… 여기서 멈출 수 없어!",
						"english": "Ugh... I can't stop here!",
						"japanese": "くっ…ここで止まるわけにはいかない！",
						"chinese": "呃……不能在这里停下！",
						"french": "Ugh... Je ne peux pas m'arrêter ici !",
						"spanish": "Ugh... ¡No puedo parar aquí!",
						"vietnamese": "Ư... Ta không thể dừng lại ở đây!",
						"thai": "อึก... ข้าจะหยุดอยู่แค่นี้ไม่ได้!",
						"hindi": "उह... मैं यहाँ रुक नहीं सकता!"
					}
				},
				{
					"action": "enter",
					"speaker": "ivar",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"type": "direction"
				},
				{
					"speaker": "ivar",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "이바르는… 결코 쓰러지지 않는다. 다시 도전하겠다!",
						"english": "Ivarr... will never fall. I will challenge again!",
						"japanese": "イーヴァルは…決して倒れない。再び挑む！",
						"chinese": "伊瓦尔……绝不会倒下。我将再次挑战！",
						"french": "Ivarr... ne tombera jamais. Je relèverai le défi !",
						"spanish": "Ivarr... nunca caerá. ¡Volveré a desafiar!",
						"vietnamese": "Ivarr... sẽ không bao giờ gục ngã. Ta sẽ thử thách lại!",
						"thai": "อีวาร์... จะไม่มีวันล้ม ข้าจะท้าทายอีกครั้ง!",
						"hindi": "इवर... कभी नहीं गिरेगा। मैं फिर से चुनौती दूँगा!"
					}
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "거대한 그림자는 산산이 부서져 얼음 먼지가 되었다.",
						"english": "The colossal shadow shattered into icy dust.",
						"japanese": "巨大な影は砕け散り、氷の塵となった。",
						"chinese": "巨大的阴影支离破碎，化为冰尘。",
						"french": "L'ombre colossale s'est brisée en poussière de glace.",
						"spanish": "La sombra colosal se hizo añicos en polvo helado.",
						"vietnamese": "Bóng tối khổng lồ vỡ tan thành bụi băng.",
						"thai": "เงาขนาดมหึมาแตกสลายเป็นผงน้ำแข็ง",
						"hindi": "विशालकाय परछाई बर्फीली धूल में बिखर गई।"
					}
				},
				{
					"emotion": "sad",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "…강함을 좇던 나의 운명… 너희도 다르지 않을 것이다…",
						"english": "...My fate, forever seeking strength... Yours will be no different...",
						"japanese": "…強さを追い求めた我が運命…お前たちも同じだろう…",
						"chinese": "……我追寻力量的命运……你们也将如此……",
						"french": "...Mon destin, poursuivant la force... Le vôtre ne sera pas différent...",
						"spanish": "...Mi destino, persiguiendo la fuerza... El vuestro no será diferente...",
						"vietnamese": "...Vận mệnh của ta, mãi mãi tìm kiếm sức mạnh... Các ngươi cũng sẽ không khác...",
						"thai": "...โชคชะตาของข้า ผู้แสวงหาความแข็งแกร่ง... พวกเจ้าก็คงไม่ต่างกัน...",
						"hindi": "...मेरी नियति, शक्ति की तलाश में... तुम्हारी भी ऐसी ही होगी..."
					}
				},
				{
					"content": {
						"korean": "끝났어… 하지만 이 허탈함은 뭐지?",
						"english": "It's over... But what is this emptiness?",
						"japanese": "終わった…だが、この虚無感は何だ？",
						"chinese": "结束了……但这份空虚感是什么？",
						"french": "C'est fini... Mais qu'est-ce que ce vide ?",
						"spanish": "Se acabó... ¿Pero qué es este vacío?",
						"vietnamese": "Xong rồi... Nhưng cảm giác trống rỗng này là gì?",
						"thai": "จบแล้ว... แต่ความว่างเปล่านี้คืออะไรกัน?",
						"hindi": "यह खत्म हो गया... लेकिन यह खालीपन क्या है?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"action": "enter",
					"speaker": "ivar",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "이것이 강함의 끝인가… 아니, 아직 끝이 아니다.",
						"english": "Is this the end of strength...? No, it's not the end yet.",
						"japanese": "これが強さの果てか…いや、まだ終わりではない。",
						"chinese": "这就是力量的终点吗……不，还没有结束。",
						"french": "Est-ce la fin de la force...? Non, ce n'est pas encore la fin.",
						"spanish": "¿Es este el fin de la fuerza...? No, aún no es el fin.",
						"vietnamese": "Đây là tận cùng của sức mạnh ư...? Không, vẫn chưa kết thúc.",
						"thai": "นี่คือจุดสิ้นสุดของความแข็งแกร่งงั้นหรือ... ไม่สิ ยังไม่จบสิ้น",
						"hindi": "क्या यह शक्ति का अंत है...? नहीं, अभी अंत नहीं है।"
					},
					"type": "speech",
					"speaker": "ivar",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "얼어붙은 고통 속에서, 탐험대는 또 다른 진실의 조각을 발견했다. 이 기둥은, 살아 숨 쉬는 무언가였다.",
						"english": "Amidst frozen agony, the expedition found another piece of truth. This pillar was something alive, breathing.",
						"japanese": "凍てつく苦痛の中、探検隊は別の真実の断片を発見した。この柱は、生きている何かだった。",
						"chinese": "在冰冷的痛苦中，探险队发现了另一片真相。这根柱子，是一个活生生的存在。",
						"french": "Au milieu d'une agonie gelée, l'expédition a découvert un autre fragment de vérité. Ce pilier était quelque chose de vivant, qui respirait.",
						"spanish": "En medio de una agonía helada, la expedición encontró otra pieza de la verdad. Este pilar era algo vivo, que respiraba.",
						"vietnamese": "Giữa nỗi đau đóng băng, đoàn thám hiểm đã tìm thấy một mảnh chân lý khác. Cây cột này, là một thứ gì đó sống động, đang thở.",
						"thai": "ท่ามกลางความเจ็บปวดที่เยือกแข็ง คณะสำรวจได้ค้นพบเศษเสี้ยวแห่งความจริงอีกชิ้น เสานี้... เป็นบางสิ่งที่ยังมีชีวิตและลมหายใจ",
						"hindi": "जमे हुए दर्द के बीच, अभियान दल को सच्चाई का एक और टुकड़ा मिला। यह स्तंभ कुछ जीवित, साँस लेने वाला था।"
					}
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"얼음 기둥 '스칼베인'. 그 심연은 더욱 깊어졌다.",
			"강철도 얼어붙은 시신들. 그들의 고통이 경고처럼 다가왔다.",
			"전사 이바르. 동료를 지켜야 했지만, 낯선 힘이 그를 불렀다.",
			"퇴각인가, 전진인가. 차가운 유혹 앞에서 그는 망설였다."
		],
		"english": [
			"The ice pillar 'Scalbain'. Its abyss deepened even further.",
			"Corpses frozen even in steel. Their agony came as a warning.",
			"Warrior Ivar. He had to protect his comrades, but an unknown power called to him.",
			"Retreat or advance? He hesitated before the cold temptation."
		],
		"japanese": [
			"氷柱「スカルベイン」。その深淵はさらに深まった。",
			"鋼鉄さえも凍りついた死体。彼らの苦痛が警告のように迫ってきた。",
			"戦士イーヴァル。仲間を守るべきだったが、見知らぬ力が彼を呼んだ。",
			"退却か、前進か。冷たい誘惑の前で、彼はためらった。"
		],
		"chinese": [
			"冰柱“斯卡尔贝因”。其深渊变得更加深邃。",
			"连钢铁都被冻结的尸体。他们的痛苦如警告般袭来。",
			"战士伊瓦尔。他本应保护同伴，但一股陌生的力量在呼唤他。",
			"撤退还是前进？在冰冷的诱惑面前，他犹豫了。"
		],
		"french": [
			"Le pilier de glace \"Scalbain\". Son abîme s'est encore approfondi.",
			"Des corps figés, même l'acier. Leur agonie était un avertissement.",
			"Le guerrier Ivar. Il devait protéger ses compagnons, mais une force inconnue l'appelait.",
			"Retraite ou avance ? Il hésita devant la froide tentation."
		],
		"spanish": [
			"El pilar de hielo \"Scalbain\". Su abismo se hizo aún más profundo.",
			"Cadáveres congelados incluso en el acero. Su agonía se presentó como una advertencia.",
			"El guerrero Ivar. Tenía que proteger a sus compañeros, pero una fuerza extraña lo llamó.",
			"¿Retirada o avance? Él dudó ante la fría tentación."
		],
		"vietnamese": [
			"Cột băng 'Scalbain'. Vực sâu của nó càng thêm thăm thẳm.",
			"Những thi thể đóng băng cả sắt thép. Nỗi đau của họ như một lời cảnh báo.",
			"Chiến binh Ivar. Anh phải bảo vệ đồng đội, nhưng một sức mạnh xa lạ đã gọi anh.",
			"Rút lui hay tiến lên? Anh do dự trước cám dỗ lạnh lẽo."
		],
		"thai": [
			"เสาน้ำแข็ง 'สคาลเบน' ห้วงลึกของมันยิ่งลึกซึ้งลงไปอีก",
			"ร่างไร้วิญญาณที่แม้แต่เหล็กก็ยังแข็งค้าง ความเจ็บปวดของพวกเขาดุจคำเตือน",
			"นักรบไอบาร์ เขาต้องปกป้องสหาย แต่พลังแปลกประหลาดได้เรียกหาเขา",
			"ถอยหรือไปต่อ? เขาลังเลต่อหน้าสิ่งยั่วยวนอันเยือกเย็น"
		],
		"hindi": [
			"बर्फीला स्तंभ 'स्कल्बेन'। उसकी खाई और गहरी हो गई।",
			"लोहे में भी जमी हुई लाशें। उनका दर्द एक चेतावनी की तरह आया।",
			"योद्धा इवार। उसे अपने साथियों की रक्षा करनी थी, लेकिन एक अज्ञात शक्ति ने उसे बुलाया।",
			"पीछे हटना है या आगे बढ़ना है? वह ठंडे प्रलोभन के सामने हिचकिचाया।"
		]
	}
} as const;
