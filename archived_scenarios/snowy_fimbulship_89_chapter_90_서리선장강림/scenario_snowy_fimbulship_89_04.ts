export const scenario_snowy_fimbulship_89_04 = {
	"scenario_id": "snowy_fimbulship_89_04",
	"order": 4,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"eira": {
			"id": "mon_0c37c014-b5ca-4f2f-ad03-5d393e5b2eb1",
			"name": {
				"korean": "에이라",
				"english": "Eira",
				"japanese": "エイラ",
				"chinese": "艾拉",
				"french": "Eira",
				"spanish": "Eira",
				"vietnamese": "Eira",
				"thai": "ไอรา",
				"hindi": "ऐरा"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8e2970b7-bcb1-4b1c-6bf0-93106b373500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/0ca1ec09-a624-450f-054a-b98de58bdb00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"혹한의 빙하. 거대한 유령선이 모습을 드러냈다.",
			"그것은 죽음의 그림자를 드리우고 있었다.",
			"하지만 단순한 죽음이 아니었다. 무언가가 생명력을 탐하고 있었다.",
			"이곳에서, 산 자의 온기가 사라지고 있었다."
		],
		"english": [
			"A frigid glacier. A colossal ghost ship emerged.",
			"It cast the shadow of death.",
			"But it wasn't mere death. Something was preying on life force.",
			"Here, the warmth of the living was fading."
		],
		"japanese": [
			"極寒の氷河。巨大な幽霊船が姿を現した。",
			"それは死の影を落としていた。",
			"しかし、それはただの死ではなかった。何かが生命力を貪っていた。",
			"ここで、生者の温もりが消え去っていた。"
		],
		"chinese": [
			"严寒的冰川。一艘巨大的幽灵船浮现了。",
			"它投下了死亡的阴影。",
			"但那并非单纯的死亡。某种东西正在吞噬生命力。",
			"在这里，生者的温暖正在消逝。"
		],
		"french": [
			"Un glacier glacial. Un colossal vaisseau fantôme est apparu.",
			"Il projetait l'ombre de la mort.",
			"Mais ce n'était pas une simple mort. Quelque chose dévorait la force vitale.",
			"Ici, la chaleur des vivants s'évanouissait."
		],
		"spanish": [
			"Un glaciar gélido. Un colosal barco fantasma apareció.",
			"Proyectaba la sombra de la muerte.",
			"Pero no era una muerte simple. Algo estaba devorando la fuerza vital.",
			"Aquí, el calor de los vivos se desvanecía."
		],
		"vietnamese": [
			"Một sông băng giá lạnh. Một con tàu ma khổng lồ đã xuất hiện.",
			"Nó bao phủ một bóng tối chết chóc.",
			"Nhưng đó không phải cái chết đơn thuần. Một thứ gì đó đang thèm khát sinh lực.",
			"Tại đây, hơi ấm của sự sống đang dần biến mất."
		],
		"thai": [
			"ธารน้ำแข็งอันหนาวเหน็บ. เรือผีขนาดมหึมาปรากฏขึ้น.",
			"มันทอดเงาแห่งความตาย.",
			"แต่มันไม่ใช่แค่ความตายธรรมดา. บางสิ่งกำลังกัดกินพลังชีวิต.",
			"ที่นี่, ความอบอุ่นของผู้มีชีวิตกำลังเลือนหายไป."
		],
		"hindi": [
			"बर्फीला ग्लेशियर। एक विशाल भूतिया जहाज़ प्रकट हुआ।",
			"उसने मौत की छाया डाल दी थी।",
			"लेकिन यह महज़ मौत नहीं थी। कुछ जीवन शक्ति का लालच कर रहा था।",
			"यहाँ, जीवितों की गरमाहट गायब हो रही थी।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "으스스한 한기가 감돌았다. 작은 생명체들의 움직임이 둔해지는 것을 느꼈다.",
						"english": "A chilling cold permeated the air. I felt the movements of small creatures growing sluggish.",
						"japanese": "薄気味悪い寒気が漂っていた。小さな生命体の動きが鈍くなるのを感じた。",
						"chinese": "一股阴森的寒气弥漫开来。我感觉到小生物们的动作变得迟钝。",
						"french": "Un froid sinistre régnait. Je sentis les mouvements des petites créatures ralentir.",
						"spanish": "Un frío espeluznante se cernía. Sentí que los movimientos de las pequeñas criaturas se volvían lentos.",
						"vietnamese": "Một luồng khí lạnh rợn người bao trùm. Tôi cảm thấy chuyển động của các sinh vật nhỏ bé trở nên chậm chạp.",
						"thai": "ความเย็นยะเยือกน่าขนลุกแผ่ซ่าน. ฉันรู้สึกได้ถึงการเคลื่อนไหวของสิ่งมีชีวิตเล็ก ๆ ที่เชื่องช้าลง.",
						"hindi": "एक भयानक ठंडक छा गई। मैंने महसूस किया कि छोटे जीवों की हलचल धीमी पड़ रही है।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"type": "direction",
					"speaker": "eira",
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"emotion": "base",
					"content": {
						"korean": "…이곳의 생명력이 희미해지고 있어. 기이한 현상이야.",
						"english": "...The life force here is fading. A strange phenomenon.",
						"japanese": "…ここの生命力が薄れている。奇妙な現象だ。",
						"chinese": "……这里的生命力正在减弱。真是奇怪的现象。",
						"french": "...La force vitale ici s'amenuise. Un phénomène étrange.",
						"spanish": "...La fuerza vital aquí se está desvaneciendo. Un fenómeno extraño.",
						"vietnamese": "...Sinh lực ở đây đang mờ dần. Một hiện tượng kỳ lạ.",
						"thai": "...พลังชีวิตที่นี่กำลังจางหายไป. ปรากฏการณ์ประหลาดจริงๆ.",
						"hindi": "...यहाँ की जीवन शक्ति क्षीण हो रही है। एक अजीब घटना है।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "뭐? 설마, 감기라도 걸린 건 아니겠지?",
						"english": "What? You're not catching a cold, are you?",
						"japanese": "何？まさか、風邪でもひいたんじゃないだろうな？",
						"chinese": "什么？你该不会是感冒了吧？",
						"french": "Quoi ? Tu n'aurais pas attrapé un rhume, j'espère ?",
						"spanish": "¿Qué? No estarás resfriado, ¿verdad?",
						"vietnamese": "Gì cơ? Chẳng lẽ, cậu bị cảm rồi sao?",
						"thai": "อะไรนะ? ไม่ใช่ว่านายเป็นหวัดหรอกนะ?",
						"hindi": "क्या? कहीं तुम्हें सर्दी तो नहीं हो गई?"
					},
					"type": "speech"
				},
				{
					"speaker": "eira",
					"emotion": "sad",
					"content": {
						"korean": "아니. 이 한기는… 마치 무언가 빨려 나가는 듯한 감각이야.",
						"english": "No. This cold... it feels like something is being sucked out.",
						"japanese": "違う。この寒気は…まるで何かが吸い取られているような感覚だ。",
						"chinese": "不。这股寒气……就像有什么东西被吸走了一样。",
						"french": "Non. Ce froid... c'est comme si quelque chose était aspiré.",
						"spanish": "No. Este frío... se siente como si algo estuviera siendo absorbido.",
						"vietnamese": "Không. Luồng khí lạnh này... cứ như có thứ gì đó đang bị hút ra vậy.",
						"thai": "ไม่ใช่. ความเย็นนี้... เหมือนกับว่ามีบางสิ่งกำลังถูกดูดออกไป.",
						"hindi": "नहीं। यह ठंडक... ऐसा लगता है जैसे कुछ खिंचा जा रहा हो।"
					},
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "eira"
				},
				{
					"speaker": "eira",
					"emotion": "sad",
					"content": {
						"korean": "점점 강해지고 있어. 주변의 모든 활력이 쇠퇴하고 있어.",
						"english": "It's getting stronger. All vitality around is waning.",
						"japanese": "どんどん強くなっている。周囲のあらゆる活力が衰退している。",
						"chinese": "越来越强了。周围所有的活力都在衰退。",
						"french": "Ça s'intensifie. Toute la vitalité environnante s'affaiblit.",
						"spanish": "Se está volviendo más fuerte. Toda la vitalidad alrededor está disminuyendo.",
						"vietnamese": "Nó ngày càng mạnh hơn. Tất cả sức sống xung quanh đang suy tàn.",
						"thai": "มันแข็งแกร่งขึ้นเรื่อยๆ. พลังชีวิตทั้งหมดรอบตัวกำลังอ่อนแอลง.",
						"hindi": "यह और मज़बूत होता जा रहा है। आस-पास की सारी जीवन शक्ति कमज़ोर हो रही है।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "유령선 때문인가? 죽은 자들의 기운이 강해서?",
						"english": "Is it because of the ghost ship? Because the aura of the dead is strong?",
						"japanese": "幽霊船のせいか？死者たちの気が強いから？",
						"chinese": "是因为幽灵船吗？因为死者的气息太强了？",
						"french": "Est-ce à cause du vaisseau fantôme ? L'aura des morts est-elle si forte ?",
						"spanish": "¿Es por el barco fantasma? ¿Porque el aura de los muertos es fuerte?",
						"vietnamese": "Là do con tàu ma sao? Vì khí chất của người chết quá mạnh à?",
						"thai": "เป็นเพราะเรือผีหรือเปล่า? เพราะพลังของคนตายมันแรง?",
						"hindi": "क्या यह भूतिया जहाज़ की वजह से है? क्योंकि मृतकों की आभा तेज़ है?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "eira",
					"emotion": "angry",
					"content": {
						"korean": "죽은 자가 아니야. 산 자의 것을 노리고 있어.",
						"english": "Not the dead. It seeks the living.",
						"japanese": "死者ではない。生ける者を狙っている。",
						"chinese": "不是死者。它觊觎生者的东西。",
						"french": "Pas les morts. Il vise les vivants.",
						"spanish": "No son los muertos. Acecha a los vivos.",
						"vietnamese": "Không phải người chết. Nó nhắm vào người sống.",
						"thai": "ไม่ใช่คนตาย มันจ้องจะเอาของคนเป็น",
						"hindi": "मृत नहीं। यह जीवितों को निशाना बना रहा है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "거대한 그림자가 앞을 막아섰다. 정체 모를 존재였다.",
						"english": "A colossal shadow blocked the way. An unknown entity.",
						"japanese": "巨大な影が立ちはだかった。正体不明の存在だった。",
						"chinese": "一个巨大的影子挡住了去路。一个不明身份的存在。",
						"french": "Une ombre colossale bloquait le passage. Une entité inconnue.",
						"spanish": "Una sombra colosal bloqueaba el camino. Era una entidad desconocida.",
						"vietnamese": "Một bóng đen khổng lồ chặn đường. Một thực thể không rõ danh tính.",
						"thai": "เงาขนาดมหึมาขวางทางอยู่ มันคือสิ่งมีชีวิตที่ไม่รู้จัก",
						"hindi": "एक विशाल छाया ने रास्ता रोक दिया। एक अज्ञात सत्ता।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "너희의 활력이… 내 배를 움직일 연료가 되리라.",
						"english": "Your vitality... shall fuel my ship.",
						"japanese": "お前たちの活力が… 我が船を動かす燃料となろう。",
						"chinese": "你们的活力……将成为驱动我船的燃料。",
						"french": "Votre vitalité… sera le carburant de mon navire.",
						"spanish": "Vuestra vitalidad… será el combustible de mi barco.",
						"vietnamese": "Sức sống của các ngươi… sẽ là nhiên liệu cho con thuyền của ta.",
						"thai": "พลังชีวิตของพวกเจ้า... จะเป็นเชื้อเพลิงขับเคลื่อนเรือของข้า",
						"hindi": "आपकी जीवन शक्ति… मेरे जहाज का ईंधन बनेगी।"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "비켜라!",
						"english": "Out of my way!",
						"japanese": "どけ！",
						"chinese": "让开！",
						"french": "Écartez-vous !",
						"spanish": "¡Fuera de mi camino!",
						"vietnamese": "Tránh ra!",
						"thai": "หลีกไป!",
						"hindi": "हट जाओ!"
					}
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "쓰러진 {random_boss}에게서 차가운 기운이 뿜어져 나왔다. 죽음의 저주가 짙게 깔렸다.",
						"english": "A cold aura emanated from the fallen {random_boss}. The curse of death hung heavy.",
						"japanese": "倒れた{random_boss}から冷たい気が放たれた。死の呪いが深く立ち込めた。",
						"chinese": "冰冷的气息从倒下的{random_boss}身上散发出来。死亡的诅咒浓重地笼罩着。",
						"french": "Une aura froide émanait du {random_boss} tombé. La malédiction de la mort s'épaississait.",
						"spanish": "Una aura fría emanaba del {random_boss} caído. La maldición de la muerte se cernía pesadamente.",
						"vietnamese": "Một luồng khí lạnh tỏa ra từ {random_boss} đã ngã xuống. Lời nguyền của cái chết bao trùm dày đặc.",
						"thai": "รัศมีเย็นเยียบแผ่ออกมาจาก {random_boss} ที่ล้มลง คำสาปแห่งความตายปกคลุมหนาแน่น",
						"hindi": "गिरे हुए {random_boss} से एक ठंडी आभा निकली। मौत का अभिशाप गहरा छा गया।"
					},
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"type": "direction",
					"speaker": "eira",
					"action": "enter"
				},
				{
					"speaker": "eira",
					"emotion": "sad",
					"content": {
						"korean": "저 괴물은… 생명력을 빼앗긴 자들이었어.",
						"english": "Those monsters… were those robbed of life force.",
						"japanese": "あの怪物たちは… 生命力を奪われた者たちだった。",
						"chinese": "那些怪物……是被剥夺了生命力的人。",
						"french": "Ces monstres… étaient des êtres privés de leur force vitale.",
						"spanish": "Esos monstruos… eran aquellos a quienes les robaron la fuerza vital.",
						"vietnamese": "Những con quái vật đó… là những kẻ bị tước đoạt sinh lực.",
						"thai": "สัตว์ประหลาดพวกนั้น... คือผู้ที่ถูกช่วงชิงพลังชีวิตไป",
						"hindi": "वे राक्षस… वे थे जिनसे जीवन शक्ति छीन ली गई थी।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "그럼 유령선이… 사람들을 죽여서 드라우그로 만드는 거야?",
						"english": "So the ghost ship… kills people and turns them into Draugr?",
						"japanese": "じゃあ幽霊船が… 人々を殺してドラウグにするのか？",
						"chinese": "那么幽灵船……是杀人并将他们变成德劳格吗？",
						"french": "Alors le vaisseau fantôme… tue les gens et les transforme en Draugr ?",
						"spanish": "¿Así que el barco fantasma… mata a la gente y los convierte en Draugr?",
						"vietnamese": "Vậy là con tàu ma… giết người và biến họ thành Draugr?",
						"thai": "งั้นเรือผีสิง... ฆ่าคนแล้วเปลี่ยนเป็นดราวก์หรือ?",
						"hindi": "तो क्या भूतिया जहाज… लोगों को मारकर ड्रागर में बदल देता है?"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "아니. 죽음보다 더한 저주야. 영혼까지 묶는 저주.",
						"english": "No. It's a curse worse than death. A curse that binds even the soul.",
						"japanese": "違う。死よりも恐ろしい呪いだ。魂まで縛る呪い。",
						"chinese": "不。这是比死亡更可怕的诅咒。一个连灵魂都被束缚的诅咒。",
						"french": "Non. C'est une malédiction pire que la mort. Une malédiction qui lie même l'âme.",
						"spanish": "No. Es una maldición peor que la muerte. Una maldición que ata hasta el alma.",
						"vietnamese": "Không. Đó là một lời nguyền còn tệ hơn cả cái chết. Một lời nguyền trói buộc cả linh hồn.",
						"thai": "ไม่ใช่ มันเป็นคำสาปที่เลวร้ายกว่าความตาย คำสาปที่ผูกมัดแม้กระทั่งวิญญาณ",
						"hindi": "नहीं। यह मृत्यु से भी बदतर अभिशाप है। एक ऐसा अभिशाप जो आत्मा को भी बांध देता है।"
					},
					"speaker": "eira",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "오래된 항해일지에 기록된, 잊힌 선장의 전설과도 같아.",
						"english": "It's like the legend of the forgotten captain, recorded in an old logbook.",
						"japanese": "古い航海日誌に記された、忘れ去られた船長の伝説のようだ。",
						"chinese": "这就像是古老航海日志中记载的，被遗忘的船长的传说。",
						"french": "C'est comme la légende du capitaine oublié, consignée dans un vieux journal de bord.",
						"spanish": "Es como la leyenda del capitán olvidado, registrada en un antiguo diario de a bordo.",
						"vietnamese": "Nó giống như truyền thuyết về vị thuyền trưởng bị lãng quên, được ghi lại trong một cuốn nhật ký hàng hải cũ.",
						"thai": "มันเหมือนตำนานของกัปตันที่ถูกลืม ซึ่งบันทึกไว้ในสมุดบันทึกการเดินเรือเก่าแก่",
						"hindi": "यह पुरानी लॉगबुक में दर्ज भूले हुए कप्तान की किंवदंती जैसा है।"
					},
					"speaker": "eira",
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"type": "direction",
					"speaker": "eira",
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "유령선은… 살아있는 항해사를 원하고 있어.",
						"english": "The ghost ship… desires a living navigator.",
						"japanese": "幽霊船は… 生きた航海士を求めている。",
						"chinese": "幽灵船……渴望一个活着的航海士。",
						"french": "Le vaisseau fantôme… désire un navigateur vivant.",
						"spanish": "El barco fantasma… desea un navegante vivo.",
						"vietnamese": "Con tàu ma… khao khát một hoa tiêu còn sống.",
						"thai": "เรือผีสิง... ต้องการต้นหนที่มีชีวิต",
						"hindi": "भूतिया जहाज… एक जीवित नाविक चाहता है।"
					},
					"speaker": "eira",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "우리를 끌어들이려는 건가?",
						"english": "Are you trying to lure us in?",
						"japanese": "我々を誘い込もうとしているのか？",
						"chinese": "你想引诱我们吗？",
						"french": "Essaies-tu de nous attirer ?",
						"spanish": "¿Intentas atraernos?",
						"vietnamese": "Ngươi đang muốn dụ dỗ chúng ta sao?",
						"thai": "เจ้ากำลังพยายามล่อลวงเราหรือ?",
						"hindi": "क्या तुम हमें फंसाने की कोशिश कर रहे हो?"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "eira",
					"emotion": "angry",
					"content": {
						"korean": "당신들의 분노와 활력을… 모두 흡수할 거야.",
						"english": "I will absorb all your rage and vitality.",
						"japanese": "お前たちの怒りと活力を… 全て吸収してやる。",
						"chinese": "我会吸收你们所有的愤怒和活力。",
						"french": "J'absorberai toute votre rage et votre vitalité.",
						"spanish": "Absorberé toda vuestra ira y vitalidad.",
						"vietnamese": "Ta sẽ hấp thụ tất cả sự phẫn nộ và sinh lực của các ngươi.",
						"thai": "ข้าจะดูดกลืนความโกรธและพลังชีวิตของพวกเจ้าทั้งหมด",
						"hindi": "मैं तुम्हारे सारे क्रोध और जीवन शक्ति को सोख लूँगा।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "절대 그렇게 두지 않아. 이 저주를 끝낼 거야.",
						"english": "I won't let that happen. I'll end this curse.",
						"japanese": "決してそうはさせない。この呪いを終わらせる。",
						"chinese": "我绝不会让你得逞。我会终结这个诅咒。",
						"french": "Jamais ! Je mettrai fin à cette malédiction.",
						"spanish": "¡Nunca lo permitiré! Acabaré con esta maldición.",
						"vietnamese": "Ta sẽ không để chuyện đó xảy ra. Ta sẽ kết thúc lời nguyền này.",
						"thai": "ข้าจะไม่ยอมให้เป็นเช่นนั้น ข้าจะยุติคำสาปนี้",
						"hindi": "मैं ऐसा कभी नहीं होने दूँगा। मैं इस शाप का अंत करूँगा."
					}
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"content": {
						"korean": "{random_boss}의 몸이 서서히 얼어붙었다. 그 힘이 사그라드는 것을 느꼈다.",
						"english": "{random_boss}'s body slowly froze. Its power, I felt, was fading.",
						"japanese": "{random_boss}の体が徐々に凍りついた。その力が失われていくのを感じた。",
						"chinese": "{random_boss}的身体渐渐冻结。我感觉到它的力量正在消散。",
						"french": "Le corps de {random_boss} se figea lentement. Je sentis sa puissance s'évanouir.",
						"spanish": "El cuerpo de {random_boss} se congeló lentamente. Sentí cómo su poder se desvanecía.",
						"vietnamese": "Cơ thể của {random_boss} dần đóng băng. Ta cảm thấy sức mạnh của nó đang cạn kiệt.",
						"thai": "ร่างกายของ {random_boss} ค่อยๆ กลายเป็นน้ำแข็ง ข้ารู้สึกได้ว่าพลังของมันกำลังเลือนหายไป",
						"hindi": "{random_boss} का शरीर धीरे-धीरे जम गया। मैंने महसूस किया कि उसकी शक्ति कम हो रही थी।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "끝이 아니다… 진짜 저주는… 유령선 그 자체에….",
						"english": "It's not over... The true curse is... on the ghost ship itself...",
						"japanese": "終わりではない… 本当の呪いは… 幽霊船そのものに…。",
						"chinese": "还没结束… 真正的诅咒… 在幽灵船本身上…。",
						"french": "Ce n'est pas fini… La véritable malédiction… est le vaisseau fantôme lui-même…",
						"spanish": "No ha terminado… La verdadera maldición… está en el propio barco fantasma…",
						"vietnamese": "Chưa kết thúc… Lời nguyền thật sự… nằm ở chính con thuyền ma…",
						"thai": "ยังไม่จบ… คำสาปที่แท้จริงคือ… บนเรือผีสิงนั่นเอง…",
						"hindi": "यह खत्म नहीं हुआ है… असली शाप… भूतिया जहाज़ पर ही है…।"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "진짜… 저주?",
						"english": "A true... curse?",
						"japanese": "本当の… 呪い？",
						"chinese": "真正的… 诅咒？",
						"french": "Une vraie… malédiction ?",
						"spanish": "¿Una verdadera… maldición?",
						"vietnamese": "Lời nguyền… thật sự?",
						"thai": "คำสาป… ที่แท้จริง?",
						"hindi": "एक असली… शाप?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "유령선의 속삭임이 더욱 가까워졌다. 매서운 바람 속 '더 많은 선원이 필요하다'는 환청이 맴돌았다.",
						"english": "The ghost ship's whispers grew louder. In the fierce wind, the hallucination 'more sailors are needed' echoed.",
						"japanese": "幽霊船の囁きがさらに近くに。厳しい風の中、「もっと多くの船員が必要だ」という幻聴が響いた。",
						"chinese": "幽灵船的低语更加临近了。在凛冽的寒风中，幻听“需要更多船员”盘旋不散。",
						"french": "Les murmures du vaisseau fantôme se firent plus proches. Dans le vent glacial, l'hallucination « plus de marins sont nécessaires » résonnait.",
						"spanish": "Los susurros del barco fantasma se hicieron más cercanos. En el viento gélido, la alucinación \"se necesitan más marineros\" resonaba.",
						"vietnamese": "Tiếng thì thầm của con thuyền ma ngày càng gần. Trong gió lạnh buốt, ảo giác \"cần thêm nhiều thủy thủ\" cứ văng vẳng.",
						"thai": "เสียงกระซิบของเรือผีสิงใกล้เข้ามาอีก ในสายลมที่รุนแรง ภาพหลอนที่ว่า 'ต้องการลูกเรือเพิ่ม' ดังก้องอยู่ในหู",
						"hindi": "भूतिया जहाज़ की फुसफुसाहट और करीब आ गई। तेज़ हवा में 'और नाविकों की ज़रूरत है' का भ्रम गूँज रहा था।"
					},
					"speaker": "narrator",
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "차가운 어둠이 모든 것을 집어삼켰다. 유령선의 저주는 더욱 깊어졌다.",
						"english": "The cold darkness swallowed everything. The ghost ship's curse deepened.",
						"japanese": "冷たい闇がすべてを飲み込んだ。幽霊船の呪いはさらに深まった。",
						"chinese": "冰冷的黑暗吞噬了一切。幽灵船的诅咒愈发深重。",
						"french": "Les ténèbres froides ont tout englouti. La malédiction du vaisseau fantôme s'est approfondie.",
						"spanish": "La fría oscuridad lo engulló todo. La maldición del barco fantasma se hizo más profunda.",
						"vietnamese": "Bóng tối lạnh lẽo nuốt chửng mọi thứ. Lời nguyền của con tàu ma càng sâu sắc hơn.",
						"thai": "ความมืดมิดอันหนาวเหน็บกลืนกินทุกสิ่ง คำสาปของเรือผีสิงยิ่งลึกซึ้งขึ้น",
						"hindi": "ठंडे अंधेरे ने सब कुछ निगल लिया। भूतिया जहाज़ का शाप गहरा गया।"
					}
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "아직도… 분노가 끓는가? 좋다… 다시 오거라.",
						"english": "Does your rage still burn? Good... come again.",
						"japanese": "まだ…怒りが燃えたぎっているか？ よかろう…また来るがいい。",
						"chinese": "怒火…仍在燃烧吗？很好…再来吧。",
						"french": "Votre rage brûle-t-elle encore ? Bien... revenez.",
						"spanish": "¿Aún arde tu ira? Bien... vuelve.",
						"vietnamese": "Cơn giận của ngươi vẫn còn cháy sao? Tốt... hãy quay lại.",
						"thai": "ความโกรธของเจ้ายังคงคุกรุ่นอยู่หรือ? ดี... กลับมาอีกครั้ง",
						"hindi": "क्या तुम्हारा क्रोध अभी भी सुलग रहा है? अच्छा... फिर आना।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "…다음에… 반드시….",
						"english": "...Next time... you must...",
						"japanese": "…次は…必ず…。",
						"chinese": "…下次…务必…。",
						"french": "...La prochaine fois... vous devrez...",
						"spanish": "...La próxima vez... sin falta...",
						"vietnamese": "...Lần tới... nhất định...",
						"thai": "...ครั้งหน้า... ต้อง...",
						"hindi": "...अगली बार... निश्चित रूप से..."
					}
				}
			],
			"dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "어리석은 산 자여… 너의 활력도 곧 나의 것이 되리라.",
						"english": "Foolish living one... your vitality too shall soon be mine.",
						"japanese": "愚かな生者よ… お前の活力もすぐに私のものとなるだろう。",
						"chinese": "愚蠢的生者… 你的活力很快也将是我的。",
						"french": "Stupide mortel… Ta vitalité aussi sera bientôt mienne.",
						"spanish": "Estúpido mortal… Tu vitalidad también será pronto mía.",
						"vietnamese": "Sinh vật sống ngu ngốc… Sinh lực của ngươi cũng sẽ sớm là của ta.",
						"thai": "ผู้มีชีวิตอันโง่เขลา… พลังชีวิตของเจ้าก็จะเป็นของข้าในไม่ช้า",
						"hindi": "मूर्ख जीवित प्राणी… तुम्हारी जीवन शक्ति भी जल्द ही मेरी होगी।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "닥쳐라! 네 저주 따위에 굴복할 것 같으냐!",
						"english": "Silence! Do you think I'd yield to your curse?!",
						"japanese": "黙れ！お前の呪いなどに屈すると思うか！",
						"chinese": "闭嘴！你以为我会屈服于你的诅咒吗？！",
						"french": "Tais-toi ! Crois-tu que je céderai à ta malédiction ?!",
						"spanish": "¡Cállate! ¿Crees que cederé a tu maldición?!",
						"vietnamese": "Im đi! Ngươi nghĩ ta sẽ khuất phục trước lời nguyền của ngươi sao?!",
						"thai": "หุบปาก! เจ้าคิดว่าข้าจะยอมจำนนต่อคำสาปของเจ้าหรือไง!",
						"hindi": "चुप रहो! क्या तुम्हें लगता है कि मैं तुम्हारे शाप के आगे झुक जाऊँगा?!"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "흐흐… 너의 분노가 오히려 나를 강하게 만든다.",
						"english": "Heh heh... your rage only makes me stronger.",
						"japanese": "フフ… お前の怒りがむしろ私を強くする。",
						"chinese": "呵呵… 你的愤怒反而让我更强大。",
						"french": "Heh heh… Ta rage ne fait que me renforcer.",
						"spanish": "Je, je… Tu ira solo me hace más fuerte.",
						"vietnamese": "Hề hề… Sự phẫn nộ của ngươi lại càng khiến ta mạnh hơn.",
						"thai": "ฮึๆ… ความโกรธของเจ้ากลับทำให้ข้าแข็งแกร่งขึ้น",
						"hindi": "हे हे… तुम्हारा क्रोध मुझे और मज़बूत बनाता है।"
					}
				}
			]
		}
	]
} as const;
