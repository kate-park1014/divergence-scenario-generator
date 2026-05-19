export const scenario_Noctis_V2_EchoesOfBalance_01 = {
	"scenario_id": "Noctis_V2_EchoesOfBalance_01",
	"order": 1,
	"act": "intro",
	"theme": "hell",
	"actors": {
		"ash": {
			"id": "mon_b225f5fa-59a1-47bb-b4c5-e73bf9e7192a",
			"name": {
				"korean": "애쉬",
				"english": "Ash",
				"japanese": "アッシュ",
				"chinese": "艾什",
				"french": "Ash",
				"spanish": "Ash",
				"vietnamese": "Ash",
				"thai": "แอช",
				"hindi": "ऐश"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/d84413a8-9d6f-4a40-5d36-75e431fb9900/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/78281fca-e4b8-45cc-68ef-7df3fef74200/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"녹티스의 심판 후, 세계는 무너졌다.",
			"'불완전한 균형'의 저주. 모든 것이 뒤틀렸다.",
			"심연의 균열은 벌어지고, 영혼들은 울부짖는다.",
			"새로운 위협이 깨어나고 있다. 이제, 진실을 쫓을 시간."
		],
		"english": [
			"After Noctis's judgment, the world crumbled.",
			"The curse of 'Imperfect Balance.' Everything twisted.",
			"Abyssal rifts opened, and souls cried out.",
			"A new threat awakens. Now, it's time to pursue the truth."
		],
		"japanese": [
			"ノクティスの審判後、世界は崩壊した。",
			"「不完全な均衡」の呪い。すべてが歪んだ。",
			"深淵の亀裂が開き、魂が叫びをあげる。",
			"新たな脅威が目覚めている。今こそ、真実を追う時だ。"
		],
		"chinese": [
			"诺克提斯的审判后，世界崩塌了。",
			"“不完美的平衡”的诅咒。一切都扭曲了。",
			"深渊的裂缝裂开，灵魂在哭嚎。",
			"新的威胁正在苏醒。现在，是时候追寻真相了。"
		],
		"french": [
			"Après le jugement de Noctis, le monde s'est effondré.",
			"La malédiction de l'« Équilibre imparfait ». Tout est déformé.",
			"Les failles abyssales s'ouvrent, et les âmes hurlent.",
			"Une nouvelle menace s'éveille. Il est temps de poursuivre la vérité."
		],
		"spanish": [
			"Tras el juicio de Noctis, el mundo se derrumbó.",
			"La maldición del \"Equilibrio Imperfecto\". Todo se retorció.",
			"Las grietas abismales se abrieron, y las almas gritaron.",
			"Una nueva amenaza despierta. Ahora, es hora de perseguir la verdad."
		],
		"vietnamese": [
			"Sau phán quyết của Noctis, thế giới sụp đổ.",
			"Lời nguyền \"Cân bằng không hoàn hảo\". Mọi thứ đều méo mó.",
			"Những khe nứt vực thẳm mở ra, và các linh hồn gào thét.",
			"Một mối đe dọa mới đang thức tỉnh. Bây giờ là lúc theo đuổi sự thật."
		],
		"thai": [
			"หลังจากคำพิพากษาของน็อคติส โลกก็พังทลายลง",
			"คำสาปแห่ง 'สมดุลที่ไม่สมบูรณ์' ทุกสิ่งบิดเบี้ยว",
			"รอยแยกแห่งห้วงลึกเปิดออก ดวงวิญญาณร่ำไห้",
			"ภัยคุกคามใหม่กำลังตื่นขึ้น บัดนี้ได้เวลาตามล่าความจริง"
		],
		"hindi": [
			"नॉक्टिस के न्याय के बाद, दुनिया बिखर गई।",
			"'अपूर्ण संतुलन' का अभिशाप। सब कुछ विकृत हो गया।",
			"अगाध दरारें खुल गईं, और आत्माएं चीखने लगीं।",
			"एक नया खतरा जाग रहा है। अब, सच्चाई का पीछा करने का समय है।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "녹티스의 심판 이후, 세상은 온통 균열뿐이었다.",
						"english": "After Noctis's judgment, the world was nothing but cracks.",
						"japanese": "ノクティスの審判後、世界は亀裂だらけだった。",
						"chinese": "诺克提斯的审判之后，世界满是裂痕。",
						"french": "Après le jugement de Noctis, le monde n'était que fissures.",
						"spanish": "Después del juicio de Noctis, el mundo era solo grietas.",
						"vietnamese": "Sau phán quyết của Noctis, thế giới chỉ toàn vết nứt.",
						"thai": "หลังคำพิพากษาของน็อคติส โลกนี้เต็มไปด้วยรอยแยก",
						"hindi": "नॉक्टिस के न्याय के बाद, दुनिया में सिर्फ दरारें ही थीं।"
					}
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…끝이 없잖아. 이 혼돈은.",
						"english": "...There's no end. To this chaos.",
						"japanese": "…終わりがない。この混沌は。",
						"chinese": "……没完没了。这混乱。",
						"french": "...Ça n'en finit jamais. Ce chaos.",
						"spanish": "...No tiene fin. Este caos.",
						"vietnamese": "...Không có hồi kết. Sự hỗn loạn này.",
						"thai": "...มันไม่มีวันจบ ความวุ่นวายนี้",
						"hindi": "...कोई अंत नहीं है। इस अराजकता का।"
					}
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"speaker": "ash"
				},
				{
					"speaker": "ash",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "끝나지 않아. 오히려 시작일 뿐.",
						"english": "It won't end. Rather, it's just the beginning.",
						"japanese": "終わらない。むしろ始まりに過ぎない。",
						"chinese": "不会结束。反而是个开始。",
						"french": "Ça ne finira pas. C'est plutôt le début.",
						"spanish": "No terminará. Más bien, es solo el principio.",
						"vietnamese": "Nó sẽ không kết thúc. Mà đúng hơn, đây chỉ là khởi đầu.",
						"thai": "มันยังไม่จบ มันเป็นเพียงจุดเริ่มต้นเท่านั้น",
						"hindi": "यह खत्म नहीं होगा। बल्कि, यह तो बस शुरुआत है।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "'불완전한 균형'의 저주에 갇힌 세상.",
						"english": "A world trapped in the curse of 'Imperfect Balance.'",
						"japanese": "「不完全な均衡」の呪いに囚われた世界。",
						"chinese": "困于“不完美平衡”诅咒的世界。",
						"french": "Un monde piégé par la malédiction de l'« Équilibre imparfait ».",
						"spanish": "Un mundo atrapado en la maldición del \"Equilibrio Imperfecto\".",
						"vietnamese": "Một thế giới bị mắc kẹt trong lời nguyền \"Cân bằng không hoàn hảo\".",
						"thai": "โลกที่ถูกขังอยู่ในคำสาปแห่ง 'สมดุลที่ไม่สมบูรณ์'",
						"hindi": "'अपूर्ण संतुलन' के अभिशाप में फंसा संसार।"
					},
					"speaker": "ash",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "애쉬? 너 여기 있었어?",
						"english": "Ash? You were here?",
						"japanese": "アッシュ？君、ここにいたのか？",
						"chinese": "艾什？你在这里？",
						"french": "Ash ? Tu étais là ?",
						"spanish": "¿Ash? ¿Estabas aquí?",
						"vietnamese": "Ash? Cậu ở đây à?",
						"thai": "แอช? นายอยู่ที่นี่เหรอ",
						"hindi": "ऐश? तुम यहाँ थे?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "진실을 쫓고 있었지. 너희처럼.",
						"english": "I was pursuing the truth. Just like you.",
						"japanese": "真実を追っていた。君たちのように。",
						"chinese": "我在追寻真相。和你们一样。",
						"french": "Je poursuivais la vérité. Comme vous.",
						"spanish": "Estaba persiguiendo la verdad. Como vosotros.",
						"vietnamese": "Ta đang theo đuổi sự thật. Giống như các ngươi.",
						"thai": "ฉันกำลังตามล่าความจริง เหมือนกับพวกเธอ",
						"hindi": "मैं सच्चाई का पीछा कर रहा था। तुम सब की तरह।"
					},
					"emotion": "base",
					"speaker": "ash"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이제, 등불마저 진실을 가려.",
						"english": "Even the lamp now hides the truth.",
						"japanese": "もう、灯りすら真実を隠す。",
						"chinese": "现在，连灯光都掩盖了真相。",
						"french": "Même la lanterne masque la vérité, à présent.",
						"spanish": "Ahora, incluso la lámpara oculta la verdad.",
						"vietnamese": "Giờ đây, ngay cả đèn lồng cũng che giấu sự thật.",
						"thai": "ตอนนี้แม้แต่ตะเกียงก็ยังบดบังความจริง",
						"hindi": "अब, दीपक भी सच छिपाता है।"
					},
					"emotion": "sad",
					"speaker": "ash"
				},
				{
					"type": "speech",
					"content": {
						"korean": "등불이?",
						"english": "The lamp?",
						"japanese": "灯りが？",
						"chinese": "灯光？",
						"french": "La lanterne ?",
						"spanish": "¿La lámpara?",
						"vietnamese": "Đèn lồng ư?",
						"thai": "ตะเกียง?",
						"hindi": "दीपक?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "ash",
					"type": "speech",
					"content": {
						"korean": "그래. 환영을 보여줄 때도 있어. 조심해야 해.",
						"english": "Yes. Sometimes it shows illusions. Be careful.",
						"japanese": "ああ。幻影を見せることもある。気をつけろ。",
						"chinese": "是的。有时它会显示幻象。要小心。",
						"french": "Oui. Il montre parfois des illusions. Sois prudent.",
						"spanish": "Sí. A veces muestra ilusiones. Ten cuidado.",
						"vietnamese": "Đúng vậy. Đôi khi nó tạo ra ảo ảnh. Hãy cẩn thận.",
						"thai": "ใช่ บางครั้งมันก็แสดงภาพลวงตา ระวังตัวด้วย",
						"hindi": "हाँ। कभी-कभी यह भ्रम दिखाता है। सावधान रहना।"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "ash",
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 균열들. 단순히 심연이 아니야.",
						"english": "These rifts. They're not just the abyss.",
						"japanese": "この亀裂。ただの深淵ではない。",
						"chinese": "这些裂隙。它们不仅仅是深渊。",
						"french": "Ces fissures. Ce n'est pas seulement l'abîme.",
						"spanish": "Estas grietas. No son solo el abismo.",
						"vietnamese": "Những vết nứt này. Chúng không chỉ là vực thẳm.",
						"thai": "รอยแยกเหล่านี้ ไม่ใช่แค่ห้วงลึก",
						"hindi": "ये दरारें। ये सिर्फ़ पाताल नहीं हैं।"
					},
					"speaker": "ash",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"speaker": "ash",
					"type": "speech",
					"content": {
						"korean": "무언가, 더 강력한 것이 깨어나고 있어.",
						"english": "Something, more powerful, is awakening.",
						"japanese": "何か、より強力なものが目覚めつつある。",
						"chinese": "有什么更强大的东西正在苏醒。",
						"french": "Quelque chose de plus puissant se réveille.",
						"spanish": "Algo, más poderoso, está despertando.",
						"vietnamese": "Một thứ gì đó, mạnh mẽ hơn, đang thức tỉnh.",
						"thai": "บางสิ่งบางอย่างที่ทรงพลังกว่ากำลังตื่นขึ้นมา",
						"hindi": "कुछ, और शक्तिशाली, जाग रहा है।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "더 강력한 거?",
						"english": "More powerful?",
						"japanese": "より強力なもの？",
						"chinese": "更强大的东西？",
						"french": "Plus puissant ?",
						"spanish": "¿Más poderoso?",
						"vietnamese": "Mạnh mẽ hơn ư?",
						"thai": "ทรงพลังกว่า?",
						"hindi": "और शक्तिशाली?"
					}
				},
				{
					"emotion": "base",
					"speaker": "ash",
					"type": "speech",
					"content": {
						"korean": "'핵심 영혼'을 가진 자만이 균열을 거스를 수 있다고 해.",
						"english": "They say only those with a 'Core Soul' can defy the rifts.",
						"japanese": "「核心の魂」を持つ者だけが、亀裂に逆らえるという。",
						"chinese": "据说只有拥有“核心灵魂”的人才能对抗裂隙。",
						"french": "On dit que seuls ceux qui possèdent une 'Âme Essentielle' peuvent défier les fissures.",
						"spanish": "Dicen que solo aquellos con un 'Alma Esencial' pueden desafiar las grietas.",
						"vietnamese": "Họ nói chỉ những ai có 'Linh Hồn Cốt Lõi' mới có thể chống lại những vết nứt.",
						"thai": "ว่ากันว่ามีเพียงผู้ที่มี 'จิตวิญญาณหลัก' เท่านั้นที่จะต้านทานรอยแยกได้",
						"hindi": "कहते हैं, 'मूल आत्मा' वाले ही दरारों का सामना कर सकते हैं।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "하지만 그 힘을 노리는 '뒤틀린 구원자'의 그림자도 있어.",
						"english": "But there's also the shadow of the 'Twisted Saviors' who seek that power.",
						"japanese": "だが、その力を狙う「歪んだ救済者」の影もある。",
						"chinese": "但也有“扭曲的救世主”的影子，他们在觊觎那份力量。",
						"french": "Mais il y a aussi l'ombre des 'Sauveurs Tordus' qui convoitent ce pouvoir.",
						"spanish": "Pero también está la sombra de los 'Salvadores Retorcidos' que buscan ese poder.",
						"vietnamese": "Nhưng cũng có bóng dáng của 'Kẻ Cứu Rỗi Sai Lệch' đang tìm kiếm sức mạnh đó.",
						"thai": "แต่ก็ยังมีเงาของ 'ผู้ช่วยให้รอดที่บิดเบี้ยว' ที่จ้องจะแย่งชิงพลังนั้น",
						"hindi": "लेकिन 'विकृत मुक्तिदाताओं' की छाया भी है जो उस शक्ति को चाहते हैं।"
					},
					"emotion": "angry",
					"speaker": "ash"
				},
				{
					"type": "speech",
					"content": {
						"korean": "구원자가 뒤틀렸다고?",
						"english": "Saviors are twisted?",
						"japanese": "救済者が歪んでいると？",
						"chinese": "救世主扭曲了？",
						"french": "Des sauveurs tordus ?",
						"spanish": "¿Los salvadores están retorcidos?",
						"vietnamese": "Kẻ cứu rỗi bị sai lệch ư?",
						"thai": "ผู้ช่วยให้รอดบิดเบี้ยว?",
						"hindi": "मुक्तिदाता विकृत हो गए?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "ash",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "그들은 '진정한 자유'를 외치지만, 결국 광기에 물들지.",
						"english": "They cry out for 'true freedom,' but ultimately, they are tainted by madness.",
						"japanese": "彼らは「真の自由」を叫ぶが、結局は狂気に染まる。",
						"chinese": "他们高喊着“真正的自由”，但最终却被疯狂所玷污。",
						"french": "Ils réclament la 'vraie liberté', mais au final, ils sont souillés par la folie.",
						"spanish": "Claman por la 'verdadera libertad', pero al final, son manchados por la locura.",
						"vietnamese": "Họ kêu gọi 'tự do đích thực', nhưng cuối cùng, họ bị vấy bẩn bởi sự điên rồ.",
						"thai": "พวกเขาเรียกร้อง 'อิสรภาพที่แท้จริง' แต่สุดท้ายก็แปดเปื้อนด้วยความบ้าคลั่ง",
						"hindi": "वे 'सच्ची आज़ादी' के लिए पुकारते हैं, लेकिन अंततः वे पागलपन से दूषित हो जाते हैं।"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"speaker": "ash"
				},
				{
					"type": "speech",
					"content": {
						"korean": "'뒤틀린 구원자'의 흔적을 쫓아야 해.",
						"english": "We must pursue the 'Twisted Saviors'.",
						"japanese": "「歪んだ救世主」の痕跡を追わねば。",
						"chinese": "必须追寻“扭曲的救世主”的踪迹。",
						"french": "Nous devons traquer les \"Sauveurs Tordus\".",
						"spanish": "Debemos seguir el rastro de los \"Salvadores Retorcidos\".",
						"vietnamese": "Phải truy lùng dấu vết của 'Cứu Chúa Vặn Vẹo'.",
						"thai": "เราต้องตามรอย \"ผู้ช่วยให้รอดบิดเบี้ยว\"",
						"hindi": "हमें 'विकृत उद्धारकर्ताओं' के निशान का पीछा करना होगा।"
					},
					"speaker": "ash",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"speaker": "ash",
					"type": "speech",
					"content": {
						"korean": "그들이 세계를 더 깊은 혼돈으로 몰아넣고 있어.",
						"english": "They're plunging the world into deeper chaos.",
						"japanese": "彼らは世界をより深い混沌へと陥れている。",
						"chinese": "他们正在将世界推向更深的混沌。",
						"french": "Ils plongent le monde dans un chaos plus profond.",
						"spanish": "Están sumiendo al mundo en un caos más profundo.",
						"vietnamese": "Chúng đang đẩy thế giới vào hỗn loạn sâu hơn.",
						"thai": "พวกเขากำลังผลักโลกเข้าสู่ความสับสนวุ่นวายที่ลึกซึ้งยิ่งขึ้น",
						"hindi": "वे दुनिया को और गहरे अराजकता में धकेल रहे हैं।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "어떻게 막아?",
						"english": "How do we stop them?",
						"japanese": "どうやって止める？",
						"chinese": "怎么阻止？",
						"french": "Comment les arrêter ?",
						"spanish": "¿Cómo los detenemos?",
						"vietnamese": "Làm sao để ngăn chặn?",
						"thai": "เราจะหยุดพวกเขาได้อย่างไร?",
						"hindi": "उन्हें कैसे रोकें?"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "고대 존재의 속삭임이 이 모든 고통의 메아리를 만들고 있어.",
						"english": "Ancient whispers echo all this suffering.",
						"japanese": "古代の存在の囁きが、この苦痛の反響を生み出している。",
						"chinese": "古老存在的低语正在制造所有这些痛苦的回声。",
						"french": "Les murmures d'une entité ancienne créent l'écho de toute cette souffrance.",
						"spanish": "Los susurros de una entidad antigua crean el eco de todo este sufrimiento.",
						"vietnamese": "Lời thì thầm của một thực thể cổ xưa đang tạo ra tiếng vọng của mọi nỗi đau này.",
						"thai": "เสียงกระซิบของสิ่งมีชีวิตโบราณกำลังสร้างเสียงสะท้อนของความทุกข์ทรมานทั้งหมดนี้",
						"hindi": "एक प्राचीन सत्ता की फुसफुसाहटें इस सारे कष्ट की गूँज पैदा कर रही हैं।"
					},
					"emotion": "sad",
					"speaker": "ash"
				},
				{
					"type": "speech",
					"content": {
						"korean": "심연에 갇힌 영혼들의 비극이 반복되려 하고 있어.",
						"english": "The tragedy of souls trapped in the abyss threatens to repeat.",
						"japanese": "深淵に囚われた魂たちの悲劇が繰り返されようとしている。",
						"chinese": "被困在深渊中的灵魂的悲剧即将重演。",
						"french": "La tragédie des âmes piégées dans l'abîme est sur le point de se répéter.",
						"spanish": "La tragedia de las almas atrapadas en el abismo está a punto de repetirse.",
						"vietnamese": "Bi kịch của những linh hồn bị mắc kẹt trong vực thẳm sắp lặp lại.",
						"thai": "โศกนาฏกรรมของวิญญาณที่ถูกขังอยู่ในเหวใกล้จะซ้ำรอย",
						"hindi": "अतल गहराइयों में फंसी आत्माओं की त्रासदी दोहराई जाने वाली है।"
					},
					"speaker": "ash",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "비극?",
						"english": "Tragedy?",
						"japanese": "悲劇？",
						"chinese": "悲剧？",
						"french": "Tragédie ?",
						"spanish": "¿Tragedia?",
						"vietnamese": "Bi kịch?",
						"thai": "โศกนาฏกรรม?",
						"hindi": "त्रासदी?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "과거의 슬픈 노래가 다시 울려 퍼지고 있어…",
						"english": "The mournful song of the past echoes once more...",
						"japanese": "過去の悲しき歌が、再び響き渡っている…",
						"chinese": "过去的悲歌再次回荡……",
						"french": "Le chant triste du passé résonne à nouveau…",
						"spanish": "La triste canción del pasado resuena de nuevo…",
						"vietnamese": "Bài ca buồn của quá khứ lại vang vọng…",
						"thai": "บทเพลงเศร้าของอดีตกำลังดังขึ้นอีกครั้ง...",
						"hindi": "अतीत का दुखद गीत फिर से गूँज रहा है..."
					},
					"emotion": "sad",
					"speaker": "ash"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "ash",
					"action": "enter"
				},
				{
					"emotion": "base",
					"speaker": "ash",
					"type": "speech",
					"content": {
						"korean": "여기까지 온 이상, 되돌릴 수 없어.",
						"english": "We've come too far; there's no turning back.",
						"japanese": "ここまで来た以上、もう引き返せない。",
						"chinese": "既然已走到这一步，就无法回头了。",
						"french": "Puisque nous sommes arrivés si loin, il n'y a pas de retour en arrière.",
						"spanish": "Habiendo llegado tan lejos, no hay vuelta atrás.",
						"vietnamese": "Đã đến nước này rồi, không thể quay đầu được nữa.",
						"thai": "เมื่อมาถึงจุดนี้แล้ว ไม่มีทางหวนกลับ",
						"hindi": "अब जब हम इतनी दूर आ गए हैं, तो पीछे मुड़ना नामुमकिन है।"
					}
				},
				{
					"emotion": "sad",
					"speaker": "ash",
					"type": "speech",
					"content": {
						"korean": "균열은 더 깊어지고, 세상은 이미 돌이킬 수 없는 길을 가고 있어.",
						"english": "The rift deepens, and the world is on an irreversible path.",
						"japanese": "亀裂はさらに深まり、世界は既に引き返せない道を歩んでいる。",
						"chinese": "裂缝越来越深，世界已踏上了一条不可逆转的道路。",
						"french": "La faille s'approfondit, et le monde suit déjà une voie irréversible.",
						"spanish": "La grieta se profundiza y el mundo ya está en un camino irreversible.",
						"vietnamese": "Vết nứt ngày càng sâu, thế giới đã đi vào con đường không thể quay lại.",
						"thai": "รอยแยกยิ่งลึกขึ้น และโลกกำลังเดินอยู่บนเส้นทางที่ย้อนกลับไม่ได้แล้ว",
						"hindi": "दरार और गहरी होती जा रही है, और दुनिया पहले से ही एक अपरिवर्तनीय रास्ते पर है।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "그럼 우린 뭘 해야 해?",
						"english": "So what must we do?",
						"japanese": "なら、何をすべきだ？",
						"chinese": "那我们该怎么办？",
						"french": "Alors que devons-nous faire ?",
						"spanish": "Entonces, ¿qué debemos hacer?",
						"vietnamese": "Vậy chúng ta phải làm gì?",
						"thai": "แล้วเราควรทำอย่างไร?",
						"hindi": "तो हमें क्या करना चाहिए?"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "'뒤틀린 구원자'를 막아야 해. 더 늦기 전에.",
						"english": "We must stop the 'Twisted Savior' before it's too late.",
						"japanese": "「歪んだ救済者」を止めなければ。手遅れになる前に。",
						"chinese": "必须阻止“扭曲的救世主”。趁还来得及。",
						"french": "Nous devons arrêter le \"Sauveur Tordu\" avant qu'il ne soit trop tard.",
						"spanish": "Debemos detener al \"Salvador Retorcido\" antes de que sea demasiado tarde.",
						"vietnamese": "Phải ngăn chặn 'Kẻ Cứu Rỗi Biến Dạng' trước khi quá muộn.",
						"thai": "เราต้องหยุด 'ผู้กอบกู้บิดเบี้ยว' ก่อนที่จะสายเกินไป",
						"hindi": "हमें 'विकृत उद्धारकर्ता' को रोकना होगा, इससे पहले कि बहुत देर हो जाए।"
					},
					"emotion": "angry",
					"speaker": "ash"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그들의 '자유'는 곧 세상의 파멸이 될 거야.",
						"english": "Their 'freedom' will soon become the world's ruin.",
						"japanese": "彼らの「自由」は、やがて世界の破滅となるだろう。",
						"chinese": "他们的“自由”很快就会成为世界的毁灭。",
						"french": "Leur \"liberté\" deviendra bientôt la ruine du monde.",
						"spanish": "Su \"libertad\" pronto será la ruina del mundo.",
						"vietnamese": "'Tự do' của chúng sẽ sớm trở thành sự hủy diệt của thế giới.",
						"thai": "'อิสรภาพ' ของพวกเขาจะกลายเป็นหายนะของโลกในไม่ช้า",
						"hindi": "उनकी 'आज़ादी' जल्द ही दुनिया का विनाश बन जाएगी।"
					},
					"emotion": "angry",
					"speaker": "ash"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…여기까지 오다니. 대단하군.",
						"english": "...To have come this far. Impressive.",
						"japanese": "…ここまで来るとは。見事だ。",
						"chinese": "……竟能走到这里。了不起。",
						"french": "...Être arrivé jusqu'ici. Impressionnant.",
						"spanish": "...Haber llegado hasta aquí. Impresionante.",
						"vietnamese": "...Đến được đây. Thật đáng nể.",
						"thai": "...มาได้ไกลถึงเพียงนี้ น่าทึ่งจริง ๆ",
						"hindi": "...यहाँ तक पहुँचना। प्रभावशाली।"
					}
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "너희가 균형을 되찾을 수 있을 것 같나?",
						"english": "Do you truly think you can restore balance?",
						"japanese": "お前たちが均衡を取り戻せるとでも？",
						"chinese": "你们真以为能找回平衡吗？",
						"french": "Pensez-vous vraiment pouvoir restaurer l'équilibre ?",
						"spanish": "¿De verdad creéis que podéis restaurar el equilibrio?",
						"vietnamese": "Các ngươi nghĩ mình có thể khôi phục lại sự cân bằng sao?",
						"thai": "พวกเจ้าคิดว่าจะฟื้นฟูสมดุลได้งั้นหรือ?",
						"hindi": "क्या तुम्हें सच में लगता है कि तुम संतुलन बहाल कर सकते हो?"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 혼돈은 네가 만들었어.",
						"english": "You created this chaos.",
						"japanese": "この混沌はお前が作り出したものだ。",
						"chinese": "这混乱是你造成的。",
						"french": "C'est toi qui as créé ce chaos.",
						"spanish": "Tú creaste este caos.",
						"vietnamese": "Ngươi đã tạo ra sự hỗn loạn này.",
						"thai": "เจ้าเป็นคนสร้างความวุ่นวายนี้ขึ้นมา",
						"hindi": "तुमने यह अराजकता पैदा की है।"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "난 그저 '자유'를 주었을 뿐. 너희는 그저 어리석을 뿐.",
						"english": "I merely granted 'freedom.' You are simply foolish.",
						"japanese": "私はただ「自由」を与えただけ。お前たちはただ愚かなだけだ。",
						"chinese": "我只是给予了“自由”。你们只是愚蠢而已。",
						"french": "J'ai seulement accordé la \"liberté\". Vous n'êtes que des sots.",
						"spanish": "Yo solo concedí la \"libertad\". Vosotros sois simplemente tontos.",
						"vietnamese": "Ta chỉ ban cho 'tự do'. Các ngươi chỉ là những kẻ ngu ngốc.",
						"thai": "ข้าเพียงแค่ให้ 'อิสรภาพ' พวกเจ้าก็แค่โง่เขลาเท่านั้น",
						"hindi": "मैंने बस 'आज़ादी' दी। तुम बस मूर्ख हो।"
					}
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…흥. 이 정도로는… '불완전한 균형'을 깨뜨릴 수 없어.",
						"english": "...Hmph. This much... cannot shatter the 'imperfect balance.'",
						"japanese": "…フン。この程度では…「不完全な均衡」を打ち破ることはできない。",
						"chinese": "……哼。就凭这样……无法打破“不完美的平衡”。",
						"french": "...Hmph. Ce n'est pas assez... pour briser l'\"équilibre imparfait\".",
						"spanish": "...Hmph. Con esto... no podéis romper el \"equilibrio imperfecto\".",
						"vietnamese": "...Hừ. Chỉ chừng này... không thể phá vỡ 'sự cân bằng không hoàn hảo'.",
						"thai": "หึ แค่นี้...ไม่สามารถทำลาย 'สมดุลที่ไม่สมบูรณ์' ได้หรอก",
						"hindi": "...हम्म। इतना सा... 'अपूर्ण संतुलन' को तोड़ नहीं सकता।"
					}
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "더 깊은 심연이 너희를 기다릴 거다…",
						"english": "A deeper abyss awaits you...",
						"japanese": "より深い深淵がお前たちを待っているだろう…",
						"chinese": "更深的深渊在等着你们……",
						"french": "Un abîme plus profond vous attend...",
						"spanish": "Un abismo más profundo os espera...",
						"vietnamese": "Một vực thẳm sâu hơn đang chờ đợi các ngươi...",
						"thai": "ห้วงเหวที่ลึกกว่ากำลังรอพวกเจ้าอยู่...",
						"hindi": "एक गहरा अथाह कुंड तुम्हारा इंतज़ार कर रहा है..."
					}
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "이게… 끝이 아니라고?",
						"english": "This isn't... the end?",
						"japanese": "これが…終わりではないと？",
						"chinese": "这……还不是结束？",
						"french": "Ce n'est... pas la fin ?",
						"spanish": "¿Esto... no es el final?",
						"vietnamese": "Đây... không phải là kết thúc sao?",
						"thai": "นี่...ไม่ใช่จุดจบหรือ?",
						"hindi": "यह... अंत नहीं है?"
					}
				},
				{
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "ash",
					"action": "enter"
				},
				{
					"speaker": "ash",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "끝은 없어. 그저… 다음 단계일 뿐.",
						"english": "There is no end. Only... the next stage.",
						"japanese": "終わりはない。ただ…次の段階に過ぎない。",
						"chinese": "没有结束。只是……下一个阶段而已。",
						"french": "Il n'y a pas de fin. Juste... la prochaine étape.",
						"spanish": "No hay final. Solo... la siguiente fase.",
						"vietnamese": "Không có kết thúc. Chỉ là... giai đoạn tiếp theo.",
						"thai": "ไม่มีที่สิ้นสุด มีเพียง...ขั้นตอนต่อไปเท่านั้น",
						"hindi": "कोई अंत नहीं है। बस... अगला चरण है।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "'뒤틀린 구원자'의 흔적은 사라졌지만, 그들의 광기는 세상에 깊은 상처를 남겼다.",
						"english": "The 'Twisted Saviors' are gone, but their madness scarred the world.",
						"japanese": "「ねじれた救世主」の痕跡は消えたが、彼らの狂気は世界に深い傷跡を残した。",
						"chinese": "“扭曲的救世主”的痕迹消失了，但他们的疯狂给世界留下了深刻的伤痕。",
						"french": "Les traces des « Sauveurs Tordus » ont disparu, mais leur folie a profondément marqué le monde.",
						"spanish": "Las huellas de los 'Salvadores Retorcidos' han desaparecido, pero su locura dejó profundas cicatrices en el mundo.",
						"vietnamese": "Dấu vết của 'Cứu Chúa Vặn Vẹo' đã biến mất, nhưng sự điên loạn của chúng đã để lại vết sẹo sâu sắc trên thế giới.",
						"thai": "ร่องรอยของ 'ผู้กอบกู้บิดเบี้ยว' หายไปแล้ว แต่ความบ้าคลั่งของพวกเขาทิ้งบาดแผลลึกไว้ในโลก",
						"hindi": "‘विकृत मुक्तिदाताओं’ के निशान मिट गए हैं, पर उनकी सनक ने दुनिया पर गहरे घाव छोड़े हैं।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "애쉬는 조용히 말했다. '핵심 영혼'을 찾아야 한다고.",
						"english": "Ash quietly said, 'We must find the Core Soul.'",
						"japanese": "アッシュは静かに言った。「『核心の魂』を見つけなければならない。」",
						"chinese": "艾什轻轻地说：“必须找到‘核心之魂’。”",
						"french": "Ash murmura : « Nous devons trouver l'Âme Principale. »",
						"spanish": "Ash dijo en voz baja: 'Debemos encontrar el Alma Central'.",
						"vietnamese": "Ash lặng lẽ nói, 'Chúng ta phải tìm 'Linh Hồn Cốt Lõi'.",
						"thai": "แอชพูดเบาๆ ว่า 'เราต้องค้นหาวิญญาณแก่นแท้'",
						"hindi": "ऐश ने चुपचाप कहा, 'हमें मूल आत्मा को ढूंढना होगा।'"
					}
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "훗… 역시. 이 세상은 영원히 이 불완전함에 갇힐 거야.",
						"english": "Hmph… Just as I thought. This world will forever be trapped in its imperfection.",
						"japanese": "フッ…やはりな。この世界は永遠にこの不完全さに囚われるだろう。",
						"chinese": "哼……果然如此。这个世界将永远被困在这不完美之中。",
						"french": "Hmph… Comme je le pensais. Ce monde sera à jamais piégé dans son imperfection.",
						"spanish": "Hmph… Como esperaba. Este mundo estará atrapado para siempre en su imperfección.",
						"vietnamese": "Hừm… Quả nhiên. Thế giới này sẽ mãi mãi bị mắc kẹt trong sự không hoàn hảo này.",
						"thai": "หึ... เป็นไปตามที่คิดไว้ โลกนี้จะติดอยู่ในความไม่สมบูรณ์แบบนี้ตลอดไป",
						"hindi": "हम्फ… जैसा कि मैंने सोचा था। यह दुनिया हमेशा अपनी अपूर्णता में फंसी रहेगी।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "…아직 포기 안 해!",
						"english": "…I won't give up yet!",
						"japanese": "…まだ諦めない！",
						"chinese": "……我还没放弃！",
						"french": "…Je n'abandonne pas encore !",
						"spanish": "…¡Aún no me rindo!",
						"vietnamese": "…Tôi chưa bỏ cuộc!",
						"thai": "...ฉันยังไม่ยอมแพ้!",
						"hindi": "…मैं अभी हार नहीं मानूंगा!"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "재밌군. 다시 와봐라. 그때도 마찬가지일 테니.",
						"english": "Amusing. Come again. It will be the same.",
						"japanese": "面白い。また来るがいい。その時も同じことだ。",
						"chinese": "有趣。再来一次吧。结果还是一样。",
						"french": "Amusant. Reviens. Ce sera pareil.",
						"spanish": "Divertido. Vuelve. Será lo mismo.",
						"vietnamese": "Thú vị đấy. Hãy đến lần nữa. Kết quả vẫn sẽ như vậy thôi.",
						"thai": "น่าสนใจ มาอีกสิ ผลก็คงเหมือนเดิม",
						"hindi": "दिलचस्प। फिर आना। तब भी ऐसा ही होगा।"
					},
					"speaker": "random_boss",
					"emotion": "base"
				}
			]
		}
	]
} as const;
