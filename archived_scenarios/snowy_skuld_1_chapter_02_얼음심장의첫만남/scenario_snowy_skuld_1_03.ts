export const scenario_snowy_skuld_1_03 = {
	"scenario_id": "snowy_skuld_1_03",
	"order": 3,
	"act": "rising",
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
		},
		"ivar": {
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
		},
		"eira": {
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
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "북방 설원, 발밑의 얼음이 매 순간 갈라진다.",
						"english": "Northern snowfields, the ice beneath your feet cracks every moment.",
						"japanese": "北の雪原、足元の氷が今にも割れそうだ。",
						"chinese": "北方雪原，脚下的冰每时每刻都在开裂。",
						"french": "Plaines enneigées du Nord, la glace sous vos pieds se fissure à chaque instant.",
						"spanish": "Campos nevados del norte, el hielo bajo tus pies se agrieta a cada instante.",
						"vietnamese": "Đồng tuyết phương Bắc, băng dưới chân nứt ra từng giây.",
						"thai": "ทุ่งหิมะทางเหนือ น้ำแข็งใต้เท้ากำลังปริแตกทุกขณะ",
						"hindi": "उत्तरी बर्फीले मैदान, हर पल तुम्हारे पैरों के नीचे की बर्फ टूट रही है।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"type": "direction",
					"speaker": "ivar",
					"spot": [
						5,
						2
					],
					"action": "enter",
					"duration_ms": 500
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "조심해. 이 얼음은 살아있는 것 같아.",
						"english": "Be careful. This ice feels alive.",
						"japanese": "気をつけろ。この氷は生きているようだ。",
						"chinese": "小心。这冰块好像有生命。",
						"french": "Fais attention. Cette glace semble vivante.",
						"spanish": "Ten cuidado. Este hielo parece vivo.",
						"vietnamese": "Cẩn thận. Khối băng này có vẻ sống động.",
						"thai": "ระวังนะ น้ำแข็งนี่ดูเหมือนมีชีวิต",
						"hindi": "सावधान। यह बर्फ जीवित लगती है।"
					},
					"type": "speech",
					"speaker": "ivar"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "살아있다고?",
						"english": "Alive?",
						"japanese": "生きているって？",
						"chinese": "有生命？",
						"french": "Vivant ?",
						"spanish": "¿Vivo?",
						"vietnamese": "Sống ư?",
						"thai": "มีชีวิตงั้นเหรอ?",
						"hindi": "जीवित?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "ivar",
					"type": "speech",
					"content": {
						"korean": "그래. 놈은… 예측 불가능해. 하지만 패턴이 있어.",
						"english": "Yes. It's... unpredictable. But it has a pattern.",
						"japanese": "ああ。それは…予測不可能だ。だが、パターンがある。",
						"chinese": "没错。它…无法预测。但有规律可循。",
						"french": "Oui. C'est... imprévisible. Mais il y a un motif.",
						"spanish": "Sí. Es... impredecible. Pero tiene un patrón.",
						"vietnamese": "Đúng vậy. Nó... không thể đoán trước. Nhưng có một quy luật.",
						"thai": "ใช่แล้ว มัน... คาดเดาไม่ได้ แต่มีรูปแบบอยู่",
						"hindi": "हाँ। वह... अप्रत्याशित है। लेकिन उसका एक पैटर्न है।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "무슨 소리야, 저건 그냥 얼음이잖아.",
						"english": "What are you talking about? It's just ice.",
						"japanese": "何を言ってるんだ、ただの氷じゃないか。",
						"chinese": "你在说什么，那只是一块冰而已。",
						"french": "De quoi tu parles ? Ce n'est que de la glace.",
						"spanish": "¿De qué hablas? Es solo hielo.",
						"vietnamese": "Anh đang nói gì vậy, đó chỉ là băng thôi mà.",
						"thai": "พูดอะไรน่ะ มันก็แค่น้ำแข็งไม่ใช่เหรอ?",
						"hindi": "क्या बकवास कर रहे हो, वह तो सिर्फ बर्फ है।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "깊어진 빙하 동굴, 얼어붙은 시간이 멈춘 곳.",
						"english": "Deeper into the glacial cave, where frozen time stands still.",
						"japanese": "氷河洞窟の奥深く、凍りついた時間が止まった場所。",
						"chinese": "深入冰川洞穴，时间在此凝固。",
						"french": "Plus profond dans la grotte glaciaire, là où le temps gelé s'est arrêté.",
						"spanish": "Más profundo en la cueva glaciar, donde el tiempo congelado se detuvo.",
						"vietnamese": "Sâu hơn vào hang động băng, nơi thời gian đóng băng ngưng đọng.",
						"thai": "ลึกเข้าไปในถ้ำธารน้ำแข็ง สถานที่ซึ่งกาลเวลาที่เยือกแข็งหยุดนิ่ง",
						"hindi": "ग्ලೇಶಿಯರ್ गुफा की गहराई में, जहाँ जमा हुआ समय थम गया है।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"speaker": "bran"
				},
				{
					"type": "speech",
					"speaker": "bran",
					"content": {
						"korean": "이상해… 빙하의 움직임이 너무 질서정연해.",
						"english": "Strange… The glacier's movement is too orderly.",
						"japanese": "変ね… 氷河の動きが整然としすぎている。",
						"chinese": "奇怪… 冰川的移动太有规律了。",
						"french": "Étrange… Le mouvement du glacier est trop ordonné.",
						"spanish": "Qué extraño… El movimiento del glaciar es demasiado ordenado.",
						"vietnamese": "Lạ thật… Chuyển động của sông băng quá có trật tự.",
						"thai": "แปลกจัง… การเคลื่อนที่ของธารน้ำแข็งเป็นระเบียบเกินไป",
						"hindi": "अजीब है… ग्लेशियर की हलचल बहुत व्यवस्थित है।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "질서정연하다니?",
						"english": "Orderly?",
						"japanese": "整然と？",
						"chinese": "有规律？",
						"french": "Ordonné ?",
						"spanish": "¿Ordenado?",
						"vietnamese": "Có trật tự ư?",
						"thai": "เป็นระเบียบ?",
						"hindi": "व्यवस्थित?"
					}
				},
				{
					"speaker": "bran",
					"type": "speech",
					"content": {
						"korean": "마치… 누군가 조종하는 것처럼. 그리고 저기…",
						"english": "As if… someone is controlling it. And over there…",
						"japanese": "まるで… 誰かが操っているみたいだ。そして、あそこ…",
						"chinese": "就像… 有人在操控一样。而且那里…",
						"french": "Comme si… quelqu'un le contrôlait. Et là-bas…",
						"spanish": "Como si… alguien lo estuviera controlando. Y allí…",
						"vietnamese": "Cứ như… có ai đó đang điều khiển vậy. Và đằng kia…",
						"thai": "ราวกับ… มีคนกำลังควบคุมมันอยู่ และตรงนั้น…",
						"hindi": "जैसे… कोई इसे नियंत्रित कर रहा हो। और वहाँ…"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "뭐가 보여?",
						"english": "What do you see?",
						"japanese": "何が見える？",
						"chinese": "看到什么了？",
						"french": "Qu'est-ce que tu vois ?",
						"spanish": "¿Qué ves?",
						"vietnamese": "Thấy gì không?",
						"thai": "เห็นอะไร?",
						"hindi": "क्या दिख रहा है?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "얼음 깊숙이 희미한 문양들이… 마치 그림자처럼.",
						"english": "Faint patterns deep within the ice… like shadows.",
						"japanese": "氷の奥深くに、薄い紋様が… まるで影のように。",
						"chinese": "冰层深处隐约的图案… 就像影子一样。",
						"french": "De faibles motifs au fond de la glace… comme des ombres.",
						"spanish": "Tenues patrones en lo profundo del hielo… como sombras.",
						"vietnamese": "Những hoa văn mờ nhạt sâu trong băng… như những cái bóng.",
						"thai": "ลวดลายจางๆ ลึกเข้าไปในน้ำแข็ง… ราวกับเงา",
						"hindi": "बर्फ की गहराई में धुंधले पैटर्न… परछाइयों की तरह।"
					},
					"emotion": "base",
					"speaker": "bran",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "어둠에 익숙해진 눈에는 아무것도 안 보이는데.",
						"english": "To eyes accustomed to darkness, I see nothing.",
						"japanese": "闇に慣れた目には何も見えないけど。",
						"chinese": "习惯了黑暗的眼睛什么都看不见。",
						"french": "Mes yeux habitués à l'obscurité ne voient rien.",
						"spanish": "Mis ojos acostumbrados a la oscuridad no ven nada.",
						"vietnamese": "Mắt tôi quen với bóng tối nên không thấy gì cả.",
						"thai": "สายตาที่คุ้นชินกับความมืดมองไม่เห็นอะไรเลย",
						"hindi": "अँधेरे में आदी आँखों को कुछ नहीं दिख रहा है।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "이건 단순한 무늬가 아니야. 뭔가… 기록된 것 같아.",
						"english": "These aren't just simple patterns. It feels like… something is recorded.",
						"japanese": "これは単なる模様じゃない。何か… 記録されているようだ。",
						"chinese": "这不只是简单的图案。好像… 记录了什么。",
						"french": "Ce ne sont pas de simples motifs. On dirait… que quelque chose y est enregistré.",
						"spanish": "No son simples patrones. Parece que… algo está grabado.",
						"vietnamese": "Đây không phải là hoa văn đơn giản. Cứ như… có thứ gì đó được ghi lại.",
						"thai": "นี่ไม่ใช่แค่ลวดลายธรรมดา ดูเหมือนว่า… มีอะไรบางอย่างถูกบันทึกไว้",
						"hindi": "ये सिर्फ़ साधारण पैटर्न नहीं हैं। लगता है… कुछ रिकॉर्ड किया गया है।"
					},
					"emotion": "base",
					"speaker": "bran",
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "더욱 깊어진 빙하의 미로. 공기가 칼날처럼 날카롭다.",
						"english": "Deeper into the glacial labyrinth. The air is sharp as a blade.",
						"japanese": "さらに深まる氷河の迷宮。空気が刃のように鋭い。",
						"chinese": "冰川迷宫更深了。空气像刀刃一样锋利。",
						"french": "Plus profond dans le labyrinthe glaciaire. L'air est tranchant comme une lame.",
						"spanish": "Más profundo en el laberinto glaciar. El aire es afilado como una cuchilla.",
						"vietnamese": "Sâu hơn vào mê cung băng. Không khí sắc như dao.",
						"thai": "ลึกเข้าไปในเขาวงกตธารน้ำแข็ง อากาศคมกริบราวกับคมมีด",
						"hindi": "ग्लेशियर की भूलभुलैया में और गहराई। हवा चाकू की तरह तीखी है।"
					},
					"emotion": "base"
				},
				{
					"action": "enter",
					"spot": [
						4,
						2
					],
					"type": "direction",
					"speaker": "bran",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "문양이 더 선명해지고 있어. 하지만… 의미를 모르겠어.",
						"english": "The patterns are getting clearer. But… I don't understand their meaning.",
						"japanese": "紋様がもっと鮮明になっている。でも… 意味が分からない。",
						"chinese": "图案变得更清晰了。但是… 我不明白它的含义。",
						"french": "Les motifs deviennent plus clairs. Mais… je n'en comprends pas le sens.",
						"spanish": "Los patrones se están volviendo más claros. Pero… no entiendo su significado.",
						"vietnamese": "Các hoa văn đang trở nên rõ nét hơn. Nhưng… tôi không hiểu ý nghĩa của chúng.",
						"thai": "ลวดลายชัดเจนขึ้นเรื่อยๆ แต่… ฉันไม่เข้าใจความหมาย",
						"hindi": "पैटर्न और स्पष्ट होते जा रहे हैं। लेकिन… मैं उनका अर्थ नहीं समझ पा रहा हूँ।"
					},
					"emotion": "sad",
					"speaker": "bran",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "단순한 얼음 결정이 아니었어?",
						"english": "Wasn't it just an ice crystal?",
						"japanese": "ただの氷の結晶じゃなかったの？",
						"chinese": "这不是普通的冰晶吗？",
						"french": "Ce n'était pas un simple cristal de glace ?",
						"spanish": "¿No era solo un cristal de hielo?",
						"vietnamese": "Không phải chỉ là một tinh thể băng đơn thuần sao?",
						"thai": "นี่ไม่ใช่แค่ผลึกน้ำแข็งธรรมดาเหรอ?",
						"hindi": "क्या यह सिर्फ़ एक बर्फ़ का क्रिस्टल नहीं था?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "bran",
					"content": {
						"korean": "아니. 이건 누군가의 흔적이야. 고대의 언어 같아.",
						"english": "No. This is someone's trace. It looks like an ancient language.",
						"japanese": "いいえ。これは誰かの痕跡よ。古代の言語みたいだ。",
						"chinese": "不。这是某个人的痕迹。像是古代文字。",
						"french": "Non. C'est la trace de quelqu'un. On dirait une langue ancienne.",
						"spanish": "No. Esto es el rastro de alguien. Parece un lenguaje antiguo.",
						"vietnamese": "Không. Đây là dấu vết của ai đó. Trông như một ngôn ngữ cổ xưa.",
						"thai": "ไม่ นี่คือร่องรอยของใครบางคน ดูเหมือนภาษาโบราณเลย",
						"hindi": "नहीं। यह किसी के निशान हैं। प्राचीन भाषा लगती है।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "그럼 누가 이걸 남긴 거지?",
						"english": "Then who left this?",
						"japanese": "じゃあ、誰がこれを残したんだ？",
						"chinese": "那这是谁留下的？",
						"french": "Alors, qui a laissé ça ?",
						"spanish": "¿Entonces quién dejó esto?",
						"vietnamese": "Vậy ai đã để lại cái này?",
						"thai": "แล้วใครทิ้งสิ่งนี้ไว้?",
						"hindi": "तो यह किसने छोड़ा?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "bran",
					"content": {
						"korean": "그리고 이 얼음… 마치 무언가를 보호하려는 듯한 느낌이야.",
						"english": "And this ice... it feels like it's trying to protect something.",
						"japanese": "そしてこの氷…まるで何かを守ろうとしているみたいだ。",
						"chinese": "而且这冰……感觉像是在保护着什么。",
						"french": "Et cette glace... on dirait qu'elle essaie de protéger quelque chose.",
						"spanish": "Y este hielo... parece que está intentando proteger algo.",
						"vietnamese": "Và lớp băng này... có cảm giác như đang cố bảo vệ thứ gì đó.",
						"thai": "แล้วน้ำแข็งนี่... รู้สึกเหมือนกำลังปกป้องบางสิ่งอยู่เลย",
						"hindi": "और यह बर्फ़... ऐसा लगता है जैसे कुछ बचाने की कोशिश कर रही हो।"
					},
					"emotion": "base"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "빙하가 격렬하게 울부짖는다. 모든 것이 붕괴 직전이다.",
						"english": "The glacier roars violently. Everything is on the verge of collapse.",
						"japanese": "氷河が激しく咆哮する。全てが崩壊寸前だ。",
						"chinese": "冰川在剧烈地咆哮。一切都即将崩塌。",
						"french": "Le glacier rugit violemment. Tout est sur le point de s'effondrer.",
						"spanish": "El glaciar ruge violentamente. Todo está al borde del colapso.",
						"vietnamese": "Sông băng gầm thét dữ dội. Mọi thứ đang trên bờ vực sụp đổ.",
						"thai": "ธารน้ำแข็งคำรามกึกก้อง ทุกสิ่งกำลังจะพังทลายลงมา",
						"hindi": "ग्लेशियर ज़ोर से दहाड़ता है। सब कुछ ढहने वाला है।"
					},
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"speaker": "eira",
					"type": "direction",
					"action": "enter",
					"spot": [
						5,
						2
					]
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "빨리 움직여! 이대로는 위험해!",
						"english": "Move quickly! It's dangerous like this!",
						"japanese": "早く動け！このままでは危ない！",
						"chinese": "快动！这样下去很危险！",
						"french": "Vite, bougez ! C'est dangereux de rester là !",
						"spanish": "¡Muévanse rápido! ¡Así es peligroso!",
						"vietnamese": "Mau di chuyển! Cứ thế này thì nguy hiểm!",
						"thai": "รีบไปเร็ว! อยู่แบบนี้อันตราย!",
						"hindi": "जल्दी चलो! ऐसे ख़तरा है!"
					},
					"speaker": "eira",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "얼음이 계속 갈라져요!",
						"english": "The ice keeps cracking!",
						"japanese": "氷がどんどん割れていく！",
						"chinese": "冰一直在裂开！",
						"french": "La glace continue de se fissurer !",
						"spanish": "¡El hielo sigue partiéndose!",
						"vietnamese": "Băng cứ nứt ra mãi!",
						"thai": "น้ำแข็งแตกเพิ่มขึ้นเรื่อยๆ เลย!",
						"hindi": "बर्फ़ लगातार टूट रही है!"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "거대한 빙하 속에서 슬픔이 담긴 듯한 공명음이 울려 퍼진다.",
						"english": "A sorrowful resonance echoes from within the colossal glacier.",
						"japanese": "巨大な氷河の中から、悲しみを帯びたような共鳴音が響き渡る。",
						"chinese": "巨大的冰川中，回荡着一声仿佛蕴含悲伤的共鸣。",
						"french": "Un son résonnant, comme empreint de tristesse, émane du glacier colossal.",
						"spanish": "Un sonido resonante, lleno de tristeza, resuena desde el interior del glaciar colosal.",
						"vietnamese": "Từ bên trong sông băng khổng lồ, một âm thanh vang vọng chứa đựng sự buồn bã vang lên.",
						"thai": "จากธารน้ำแข็งขนาดมหึมา เสียงสะท้อนที่เต็มไปด้วยความโศกเศร้าก็ดังก้องไปทั่ว",
						"hindi": "विशाल ग्लेशियर के भीतर से, दुख से भरी एक गूंजती हुई आवाज़ फैलती है।"
					},
					"emotion": "base"
				},
				{
					"spot": [
						2,
						4
					],
					"action": "enter",
					"speaker": "random_boss",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "크르르… 이곳은… 너희의 무덤이다…",
						"english": "Grrr... This place... is your tomb...",
						"japanese": "グルルル…ここは…お前たちの墓場だ…",
						"chinese": "嘶嘶……这里就是……你们的坟墓……",
						"french": "Grrr... Cet endroit... est votre tombe...",
						"spanish": "Grrr... Este lugar... es vuestra tumba...",
						"vietnamese": "Gầm gừ... Nơi này... là mồ chôn của các ngươi...",
						"thai": "ครืน... ที่นี่... คือหลุมฝังศพของพวกเจ้า...",
						"hindi": "ग्र्र्र... यह जगह... तुम्हारी कब्र है..."
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "물러서지 마! 탈출구가 보일 거야!",
						"english": "Don't back down! An escape route will appear!",
						"japanese": "退くな！脱出路が見えるはずだ！",
						"chinese": "别退缩！一定会出现逃生之路的！",
						"french": "Ne reculez pas ! Une issue finira par apparaître !",
						"spanish": "¡No retrocedan! ¡Aparecerá una salida!",
						"vietnamese": "Đừng lùi bước! Lối thoát sẽ xuất hiện!",
						"thai": "อย่าถอย! ทางออกจะต้องปรากฏแน่!",
						"hindi": "पीछे मत हटो! भागने का रास्ता ज़रूर दिखेगा!"
					},
					"type": "speech",
					"speaker": "eira"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"content": {
						"korean": "크윽… 내 얼음이… 이럴 순 없어… 나의 맹세는…",
						"english": "Ugh... my ice... This can't be... My oath...",
						"japanese": "くっ…我が氷が…こんなはずでは…我が誓いは…",
						"chinese": "呃……我的冰……不可能……我的誓言……",
						"french": "Argh... ma glace... Ce n'est pas possible... Mon serment...",
						"spanish": "Ugh... mi hielo... Esto no puede ser... Mi juramento...",
						"vietnamese": "Khụ... băng của ta... Không thể nào... Lời thề của ta...",
						"thai": "อึก... น้ำแข็งของข้า... เป็นไปไม่ได้... คำสาบานของข้า...",
						"hindi": "उफ़... मेरी बर्फ... ऐसा नहीं हो सकता... मेरी प्रतिज्ञा..."
					},
					"emotion": "sad",
					"speaker": "boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "해치웠어… 하지만 이게 끝이 아니잖아.",
						"english": "We defeated it... But this isn't over, is it?",
						"japanese": "やったぞ…だが、これで終わりじゃないだろう。",
						"chinese": "解决了……但这不是结束，对吧？",
						"french": "Nous l'avons vaincu... Mais ce n'est pas la fin, n'est-ce pas ?",
						"spanish": "Lo hemos derrotado... Pero esto no ha terminado, ¿verdad?",
						"vietnamese": "Đã tiêu diệt rồi... Nhưng đây không phải là kết thúc, phải không?",
						"thai": "จัดการได้แล้ว... แต่นี่ไม่ใช่จุดจบใช่ไหม?",
						"hindi": "हमने उसे हरा दिया... लेकिन यह खत्म नहीं हुआ है, है ना?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "Skuld의 얼음 심장이 멈추자, 거대한 빙하가 비명을 토했다.",
						"english": "As Skuld's ice heart stopped, the colossal glacier screamed.",
						"japanese": "スクルドの氷の心臓が止まると、巨大な氷河が悲鳴を上げた。",
						"chinese": "当Skuld的冰之心停止跳动时，巨大的冰川发出了尖叫。",
						"french": "Alors que le cœur de glace de Skuld s'arrêtait, l'énorme glacier poussa un hurlement.",
						"spanish": "Al detenerse el corazón de hielo de Skuld, el colosal glaciar gritó.",
						"vietnamese": "Khi trái tim băng giá của Skuld ngừng đập, tảng băng khổng lồ đã gào thét.",
						"thai": "เมื่อหัวใจน้ำแข็งของสกุลด์หยุดลง ธารน้ำแข็งขนาดยักษ์ก็กรีดร้อง",
						"hindi": "जैसे ही स्कल्ड का बर्फीला दिल रुका, विशाल ग्लेशियर चीख उठा।"
					}
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "하지만 어딘가에서, 또 다른 얼어붙은 운명이 꿈틀거리고 있었다.",
						"english": "Yet somewhere, another frozen destiny stirred.",
						"japanese": "だが、どこかで、また別の凍てついた運命が蠢いていた。",
						"chinese": "然而在某个地方，另一个被冰冻的命运正在蠢蠢欲动。",
						"french": "Pourtant, quelque part, un autre destin gelé frémissait.",
						"spanish": "Sin embargo, en algún lugar, otro destino congelado se agitaba.",
						"vietnamese": "Thế nhưng, ở đâu đó, một số phận đóng băng khác đang cựa quậy.",
						"thai": "ทว่า ที่ไหนสักแห่ง ชะตากรรมน้ำแข็งอีกอันกำลังคืบคลาน",
						"hindi": "फिर भी कहीं और, एक और जमी हुई नियति हिल रही थी।"
					},
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "boss",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "어리석은 것들… 나의 얼음은 영원하다.",
						"english": "Fools... My ice is eternal.",
						"japanese": "愚か者ども…我が氷は永遠だ。",
						"chinese": "愚蠢的东西……我的冰是永恒的。",
						"french": "Imbéciles... Ma glace est éternelle.",
						"spanish": "Necios... Mi hielo es eterno.",
						"vietnamese": "Đồ ngốc... Băng của ta là vĩnh cửu.",
						"thai": "พวกโง่... น้ำแข็งของข้าเป็นนิรันดร์",
						"hindi": "मूर्खों... मेरी बर्फ शाश्वत है।"
					}
				},
				{
					"content": {
						"korean": "아직 포기 못 해! 반드시…",
						"english": "I can't give up yet! I must...",
						"japanese": "まだ諦められない！必ず…",
						"chinese": "我还不能放弃！我一定要……",
						"french": "Je ne peux pas encore abandonner ! Je dois...",
						"spanish": "¡No puedo rendirme aún! Debo...",
						"vietnamese": "Chưa thể bỏ cuộc! Nhất định phải...",
						"thai": "ยังยอมแพ้ไม่ได้! จะต้อง...",
						"hindi": "मैं अभी हार नहीं मान सकता! मुझे अवश्य..."
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "차가운 얼음이 모든 것을 삼켰다. 하지만 그들의 의지는 꺾이지 않았다.",
						"english": "Cold ice swallowed all. Yet their will remained unbroken.",
						"japanese": "冷たい氷がすべてを飲み込んだ。しかし、彼らの意志は折れなかった。",
						"chinese": "寒冰吞噬了一切，但他们的意志并未屈服。",
						"french": "La glace froide a tout englouti. Pourtant, leur volonté est restée inébranlable.",
						"spanish": "El hielo frío lo devoró todo. Mas su voluntad permaneció inquebrantable.",
						"vietnamese": "Băng giá lạnh lẽo nuốt chửng mọi thứ. Nhưng ý chí của họ không hề lay chuyển.",
						"thai": "น้ำแข็งอันเย็นยะเยือกกลืนกินทุกสิ่ง แต่เจตจำนงของพวกเขายังคงไม่แตกหัก",
						"hindi": "ठंडी बर्फ़ ने सब कुछ निगल लिया। लेकिन उनकी इच्छाशक्ति नहीं टूटी।"
					},
					"type": "speech",
					"speaker": "narrator"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "세계의 심장부에 다다랐다. 모든 것을 압도하는 존재가 기다린다.",
						"english": "Reached the world's heart. An overwhelming presence awaits.",
						"japanese": "世界の心臓部に到達した。すべてを圧倒する存在が待っている。",
						"chinese": "抵达了世界的心脏。一个压倒性的存在正在等待。",
						"french": "Atteint le cœur du monde. Une présence écrasante attend.",
						"spanish": "Alcanzado el corazón del mundo. Una presencia abrumadora espera.",
						"vietnamese": "Đã đến trung tâm thế giới. Một sự hiện diện áp đảo đang chờ đợi.",
						"thai": "มาถึงใจกลางโลกแล้ว สิ่งมีชีวิตที่เหนือกว่าทุกสิ่งกำลังรออยู่",
						"hindi": "विश्व के हृदय तक पहुँच गए। एक सर्वव्यापी उपस्थिति प्रतीक्षा कर रही है。"
					}
				},
				{
					"action": "enter",
					"spot": [
						5,
						4
					],
					"type": "direction",
					"speaker": "boss",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "왔느냐… 침략자들이여. 나의 얼음은 너희를 영원히 붙잡으리라.",
						"english": "You've come... invaders. My ice shall hold you forever.",
						"japanese": "来たか…侵略者たちよ。我が氷がお前たちを永遠に捕らえるだろう。",
						"chinese": "你们来了……入侵者。我的冰将永远困住你们。",
						"french": "Vous êtes venus... envahisseurs. Ma glace vous retiendra pour toujours.",
						"spanish": "¿Habéis venido... invasores? Mi hielo os retendrá para siempre.",
						"vietnamese": "Ngươi đã đến rồi sao... những kẻ xâm lược. Băng của ta sẽ giam cầm các ngươi vĩnh viễn.",
						"thai": "มาแล้วรึ... พวกผู้บุกรุก น้ำแข็งของข้าจะกักขังพวกเจ้าตลอดไป",
						"hindi": "तुम आ गए... आक्रमणकारियों। मेरी बर्फ तुम्हें सदा के लिए जकड़ लेगी।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "boss"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "ivar",
					"action": "enter",
					"spot": [
						2,
						2
					]
				},
				{
					"content": {
						"korean": "드디어 모습을 드러냈군, Skuld!",
						"english": "Finally, you show yourself, Skuld!",
						"japanese": "ついに姿を現したな、スクルド！",
						"chinese": "Skuld，你终于现身了！",
						"french": "Enfin, tu te montres, Skuld !",
						"spanish": "¡Por fin te muestras, Skuld!",
						"vietnamese": "Cuối cùng ngươi cũng xuất hiện, Skuld!",
						"thai": "ในที่สุดเจ้าก็เผยตัว สกุลด์!",
						"hindi": "अंततः, तुम प्रकट हो गए, स्कल्ड!"
					},
					"emotion": "angry",
					"speaker": "ivar",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "감히 나의 이름을… 너희는 그저 먹잇감일 뿐.",
						"english": "How dare you speak my name... You are merely prey.",
						"japanese": "よくも我が名を…お前たちはただの獲物だ。",
						"chinese": "竟敢直呼吾名……你们不过是猎物罢了。",
						"french": "Comment osez-vous prononcer mon nom... Vous n'êtes que des proies.",
						"spanish": "¿Cómo osas pronunciar mi nombre? Solo sois presas.",
						"vietnamese": "Dám gọi tên ta ư... Ngươi chỉ là con mồi mà thôi.",
						"thai": "บังอาจเรียกชื่อข้า... พวกเจ้าเป็นแค่เหยื่อเท่านั้น",
						"hindi": "मेरी नाम लेने की हिम्मत कैसे हुई... तुम तो बस शिकार हो।"
					},
					"type": "speech",
					"speaker": "boss"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"북방의 빙하, 고대 문명이 숨쉬는 곳.",
			"얼음 깊이 잠든 것은 단순한 자연이 아니다.",
			"그림자는 다가오고, 진실은 얼음장처럼 차갑다.",
			"길 잃은 영혼을 위한 길잡이, 브란.",
			"그가 감지한 미지의 규칙, 그 끝에는 무엇이 기다릴까."
		],
		"english": [
			"Northern glaciers, where ancient civilizations breathe.",
			"What slumbers deep within the ice is not mere nature.",
			"Shadows approach, and the truth is as cold as ice.",
			"Bran, a guide for lost souls.",
			"The unknown rules he sensed; what awaits at their end?"
		],
		"japanese": [
			"北方の氷河、古代文明が息づく場所。",
			"氷深く眠るのは、単なる自然ではない。",
			"影が迫り、真実は氷のように冷たい。",
			"道に迷いし魂の導き手、ブラン。",
			"彼が感知した未知の法則、その果てには何が待つのか。"
		],
		"chinese": [
			"北方冰川，古老文明在此沉睡。",
			"深埋冰下的，并非单纯的自然。",
			"阴影逼近，真相冷如寒冰。",
			"迷失灵魂的向导，布兰。",
			"他感知到的未知法则，尽头等待着什么？"
		],
		"french": [
			"Les glaciers du Nord, là où respire une ancienne civilisation.",
			"Ce qui dort profondément sous la glace n'est pas une simple nature.",
			"Les ombres approchent, et la vérité est aussi froide que la glace.",
			"Bran, un guide pour les âmes perdues.",
			"Les règles inconnues qu'il a perçues ; qu'est-ce qui l'attend à leur fin ?"
		],
		"spanish": [
			"Glaciares del norte, donde respira una civilización antigua.",
			"Lo que yace profundo en el hielo no es mera naturaleza.",
			"Las sombras se acercan, y la verdad es fría como el hielo.",
			"Bran, un guía para las almas perdidas.",
			"Las reglas desconocidas que percibió; ¿qué le espera al final?"
		],
		"vietnamese": [
			"Những sông băng phương Bắc, nơi nền văn minh cổ đại đang hô hấp.",
			"Thứ ngủ sâu trong băng không chỉ là tự nhiên.",
			"Bóng tối đang đến gần, và sự thật lạnh lẽo như băng giá.",
			"Bran, người dẫn đường cho những linh hồn lạc lối.",
			"Những quy tắc vô danh anh ta cảm nhận được; điều gì đang chờ đợi ở cuối?"
		],
		"thai": [
			"ธารน้ำแข็งทางเหนือ สถานที่ที่อารยธรรมโบราณหายใจอยู่",
			"สิ่งที่หลับใหลอยู่ลึกในน้ำแข็งไม่ใช่แค่ธรรมชาติธรรมดา",
			"เงามืดคืบคลานเข้ามา และความจริงก็เย็นเยียบราวกับน้ำแข็ง",
			"แบรน ผู้ชี้นำทางสำหรับดวงวิญญาณที่หลงทาง",
			"กฎเกณฑ์ลึกลับที่เขาสัมผัสได้ อะไรจะรออยู่ ณ ที่สุดปลายนั้น?"
		],
		"hindi": [
			"उत्तरी ग्लेશियर, जहाँ प्राचीन सभ्यताएँ साँस लेती हैं।",
			"बर्फ की गहराई में जो सोया है, वह केवल प्रकृति नहीं है।",
			"परछाइयाँ आ रही हैं, और सच बर्फ जैसा ठंडा है।",
			"गुमशुदा आत्माओं का मार्गदर्शक, ब्रैन।",
			"उसने जो अज्ञात नियम महसूस किए; उनके अंत में क्या इंतज़ार कर रहा है?"
		]
	}
} as const;
