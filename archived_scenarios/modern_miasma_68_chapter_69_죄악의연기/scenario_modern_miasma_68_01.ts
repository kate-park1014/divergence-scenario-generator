export const scenario_modern_miasma_68_01 = {
	"scenario_id": "modern_miasma_68_01",
	"order": 1,
	"act": "intro",
	"theme": "modern",
	"actors": {
		"zoe": {
			"id": "mon_ad3762e0-13f3-44a1-9b84-4ff67136858e",
			"name": {
				"korean": "조이",
				"english": "Zoe",
				"japanese": "ゾーイ",
				"chinese": "佐伊",
				"french": "Zoé",
				"spanish": "Zoe",
				"vietnamese": "Zoe",
				"thai": "โซอี้",
				"hindi": "ज़ोई"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/75dcfb0c-33e3-4208-4205-fb09d4abb100/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a7d0ebe1-73dc-4683-1338-32be2f7fac00/public"
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
					"content": {
						"korean": "도시의 지하 수로. 어둡고 축축한 곳에서 이상한 점액질이 발견됐다.",
						"english": "The city's underground waterways. A strange slime was found in the dark, damp depths.",
						"japanese": "都市の地下水路。暗く湿った場所で、奇妙な粘液が発見された。",
						"chinese": "城市的地下水道。在黑暗潮湿之处，发现了奇怪的黏液。",
						"french": "Les canalisations souterraines de la ville. Une étrange substance visqueuse fut découverte dans les profondeurs sombres et humides.",
						"spanish": "Las alcantarillas subterráneas de la ciudad. Se encontró una extraña sustancia viscosa en las profundidades oscuras y húmedas.",
						"vietnamese": "Hệ thống cống ngầm của thành phố. Một chất nhầy kỳ lạ được tìm thấy ở nơi tối tăm, ẩm ướt.",
						"thai": "ทางน้ำใต้ดินของเมือง เมือกประหลาดถูกพบในที่มืดและชื้นแฉะ.",
						"hindi": "शहर की भूमिगत जलधाराएँ। अंधेरी, नम गहराइयों में एक अजीब चिपचिपा पदार्थ मिला।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "이게 그… '말라비타'라는 건가?",
						"english": "Is this... 'Malavita'?",
						"japanese": "これが…「マラヴィータ」なのか？",
						"chinese": "这就是……“Malavita”吗？",
						"french": "C'est ça... la 'Malavita' ?",
						"spanish": "¿Esto es... 'Malavita'?",
						"vietnamese": "Đây có phải là... 'Malavita'?",
						"thai": "นี่มัน... 'มาลาวิต้า' หรือเปล่า?",
						"hindi": "क्या यह... 'मालाविता' है?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"spot": [
						4,
						3
					],
					"type": "direction",
					"speaker": "zoe",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"speaker": "zoe",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "말라비타가 아니야. 이건… 도시의 저주야.",
						"english": "It's not Malavita. This is... the city's curse.",
						"japanese": "マラヴィータじゃない。これは…都市の呪いだ。",
						"chinese": "这不是Malavita。这是……城市的诅咒。",
						"french": "Ce n'est pas la Malavita. C'est... la malédiction de la ville.",
						"spanish": "No es Malavita. Esto es... la maldición de la ciudad.",
						"vietnamese": "Không phải Malavita. Đây là... lời nguyền của thành phố.",
						"thai": "ไม่ใช่มาลาวิต้า นี่มัน... คำสาปของเมือง.",
						"hindi": "यह मालाविता नहीं है। यह... शहर का अभिशाप है।"
					}
				},
				{
					"content": {
						"korean": "저주?",
						"english": "A curse?",
						"japanese": "呪い？",
						"chinese": "诅咒？",
						"french": "Une malédiction ?",
						"spanish": "¿Una maldición?",
						"vietnamese": "Lời nguyền ư?",
						"thai": "คำสาปเหรอ?",
						"hindi": "अभिशाप?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "오래된 도시의 죄가 곪아 터진 거라고.",
						"english": "It's the old city's sins festering and bursting forth.",
						"japanese": "古き都市の罪が、膿んで溢れ出たものだ。",
						"chinese": "是这座古老城市的罪恶在溃烂爆发。",
						"french": "Ce sont les péchés de la vieille ville qui ont suppuré et éclaté.",
						"spanish": "Son los pecados de la vieja ciudad que han supurado y estallado.",
						"vietnamese": "Đó là những tội lỗi của thành phố cổ xưa đang mưng mủ và bùng phát.",
						"thai": "มันคือบาปของเมืองเก่าที่เน่าเฟะและปะทุออกมา.",
						"hindi": "यह पुराने शहर के पाप हैं जो सड़कर फट पड़े हैं।"
					},
					"speaker": "zoe",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "zoe",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"action": "enter"
				},
				{
					"speaker": "zoe",
					"type": "speech",
					"content": {
						"korean": "점액질이 퍼지면서 사람들이 사라지고 있어.",
						"english": "As the slime spreads, people are disappearing.",
						"japanese": "粘液が広がるにつれて、人々が消えている。",
						"chinese": "随着黏液扩散，人们正在消失。",
						"french": "À mesure que la substance visqueuse se répand, les gens disparaissent.",
						"spanish": "A medida que la sustancia viscosa se extiende, la gente está desapareciendo.",
						"vietnamese": "Khi chất nhầy lan rộng, mọi người đang biến mất.",
						"thai": "เมื่อเมือกแพร่กระจาย ผู้คนก็หายไป.",
						"hindi": "जैसे-जैसे चिपचिपा पदार्थ फैलता जा रहा है, लोग गायब हो रहे हैं।"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "실종이라니… 무슨 소리야?",
						"english": "Missing? What do you mean?",
						"japanese": "失踪だって…どういうこと？",
						"chinese": "失踪？什么意思？",
						"french": "Disparus... Qu'est-ce que tu racontes ?",
						"spanish": "¿Desaparecidos? ¿De qué hablas?",
						"vietnamese": "Mất tích ư... Ý anh là sao?",
						"thai": "หายตัวไป... หมายความว่าไงเนี่ย?",
						"hindi": "लापता? क्या मतलब है तुम्हारा?"
					}
				},
				{
					"type": "speech",
					"speaker": "zoe",
					"content": {
						"korean": "지하에 살던 하층민들이야. 아무도 신경 쓰지 않아.",
						"english": "They were lower-class people living underground. No one cares.",
						"japanese": "地下に住んでいた下層民たちだよ。誰も気にしない。",
						"chinese": "是住在地下的贫民。没人会在意。",
						"french": "Ce sont des gens des bas-fonds qui vivaient sous terre. Personne ne s'en soucie.",
						"spanish": "Eran gente de clase baja que vivía bajo tierra. A nadie le importa.",
						"vietnamese": "Họ là những người dân thường sống dưới lòng đất. Chẳng ai quan tâm đâu.",
						"thai": "พวกเขาคือชนชั้นล่างที่อาศัยอยู่ใต้ดิน ไม่มีใครสนใจหรอก",
						"hindi": "वे भूमिगत रहने वाले निचले तबके के लोग थे। किसी को परवाह नहीं।"
					},
					"emotion": "angry"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "원인을 알 수 없는 병에 걸려 죽어가기도 하고…",
						"english": "Some also fell ill with unknown diseases and died...",
						"japanese": "原因不明の病にかかって死んでいく者もいるし…",
						"chinese": "也有人得了原因不明的病，然后死去…",
						"french": "Certains sont aussi morts de maladies inconnues...",
						"spanish": "Algunos también enfermaron de males desconocidos y murieron...",
						"vietnamese": "Một số còn mắc bệnh không rõ nguyên nhân mà chết...",
						"thai": "บางคนก็ป่วยเป็นโรคที่ไม่ทราบสาเหตุและตายไป...",
						"hindi": "कुछ अज्ञात बीमारियों से बीमार होकर मर भी गए..."
					},
					"speaker": "zoe",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "이 점액질 때문이라는 거야?",
						"english": "Is it because of this slime?",
						"japanese": "この粘液のせいだって言うのか？",
						"chinese": "是因为这种黏液吗？",
						"french": "C'est à cause de cette substance visqueuse ?",
						"spanish": "¿Es por este limo?",
						"vietnamese": "Là do chất nhầy này à?",
						"thai": "เป็นเพราะเมือกนี่เหรอ?",
						"hindi": "क्या यह इस कीचड़ की वजह से है?"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "zoe",
					"action": "enter"
				},
				{
					"speaker": "zoe",
					"type": "speech",
					"content": {
						"korean": "이 도시는 잊어서는 안 되는 과거가 있어.",
						"english": "This city has a past that must not be forgotten.",
						"japanese": "この街には忘れてはならない過去がある。",
						"chinese": "这座城市有段不可遗忘的过去。",
						"french": "Cette ville a un passé qu'il ne faut pas oublier.",
						"spanish": "Esta ciudad tiene un pasado que no debe ser olvidado.",
						"vietnamese": "Thành phố này có một quá khứ không thể bị lãng quên.",
						"thai": "เมืองนี้มีอดีตที่ห้ามลืมเด็ดขาด",
						"hindi": "इस शहर का एक ऐसा अतीत है जिसे भुलाया नहीं जा सकता।"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "무슨 과거를 말하는 거야?",
						"english": "What past are you talking about?",
						"japanese": "どんな過去を言ってるんだ？",
						"chinese": "你说的是什么过去？",
						"french": "De quel passé parles-tu ?",
						"spanish": "¿De qué pasado hablas?",
						"vietnamese": "Anh đang nói về quá khứ nào?",
						"thai": "กำลังพูดถึงอดีตแบบไหนกัน?",
						"hindi": "तुम किस अतीत की बात कर रहे हो?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "그게 이 점액질을 만들었어. 과거를 외면하면 더 큰 재앙이 돼.",
						"english": "That created this slime. Ignoring the past leads to greater disaster.",
						"japanese": "それがこの粘液を生み出したんだ。過去を無視すれば、さらに大きな災厄となる。",
						"chinese": "是它制造了这种黏液。忽视过去只会酿成更大的灾难。",
						"french": "C'est ça qui a créé cette substance visqueuse. Ignorer le passé mène à une catastrophe encore plus grande.",
						"spanish": "Eso creó este limo. Ignorar el pasado lleva a un desastre mayor.",
						"vietnamese": "Nó đã tạo ra chất nhầy này. Nếu bỏ qua quá khứ, sẽ dẫn đến thảm họa lớn hơn.",
						"thai": "สิ่งนั้นสร้างเมือกนี่ขึ้นมา การเมินเฉยต่ออดีตจะนำมาซึ่งหายนะที่ยิ่งใหญ่กว่า",
						"hindi": "उसने यह कीचड़ बनाया। अतीत को नज़रअंदाज़ करने से और बड़ी आपदा आती है।"
					},
					"speaker": "zoe",
					"type": "speech"
				},
				{
					"content": {
						"korean": "멈출 방법은 없어?",
						"english": "Is there no way to stop it?",
						"japanese": "止める方法はないのか？",
						"chinese": "没有办法阻止吗？",
						"french": "Il n'y a aucun moyen de l'arrêter ?",
						"spanish": "¿No hay forma de detenerlo?",
						"vietnamese": "Không có cách nào dừng nó lại sao?",
						"thai": "ไม่มีทางหยุดมันได้เหรอ?",
						"hindi": "क्या इसे रोकने का कोई तरीका नहीं है?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
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
					"speaker": "zoe",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"speaker": "zoe",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "더 깊이 가면… 돌아올 수 없을 거야.",
						"english": "Go deeper... and you might not come back.",
						"japanese": "これ以上深く行けば…戻ってこれなくなるぞ。",
						"chinese": "如果再深入…你就回不来了。",
						"french": "Si tu vas plus loin... tu ne pourras plus revenir.",
						"spanish": "Si vas más profundo... no podrás regresar.",
						"vietnamese": "Nếu đi sâu hơn... có thể sẽ không quay lại được đâu.",
						"thai": "ถ้าไปลึกกว่านี้... อาจจะกลับมาไม่ได้แล้วนะ",
						"hindi": "और गहरा जाओगे... तो शायद वापस नहीं आ पाओगे।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "여기서 멈출 순 없어. 원인을 알아내야 해.",
						"english": "I can't stop here. I need to find the cause.",
						"japanese": "ここで止まるわけにはいかない。原因を突き止めないと。",
						"chinese": "我不能停在这里。必须查明原因。",
						"french": "Je ne peux pas m'arrêter là. Je dois trouver la cause.",
						"spanish": "No puedo parar aquí. Necesito encontrar la causa.",
						"vietnamese": "Tôi không thể dừng lại ở đây. Tôi phải tìm ra nguyên nhân.",
						"thai": "ฉันหยุดอยู่แค่นี้ไม่ได้ ต้องหาต้นตอให้เจอ",
						"hindi": "मैं यहां रुक नहीं सकता। मुझे वजह पता करनी होगी।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "제발… 조심해. 내 가족도…",
						"english": "Please… be careful. My family too…",
						"japanese": "どうか…気をつけて。私の家族も…",
						"chinese": "拜托了…小心点。我的家人也…",
						"french": "S'il te plaît… fais attention. Ma famille aussi…",
						"spanish": "Por favor… ten cuidado. Mi familia también…",
						"vietnamese": "Làm ơn… hãy cẩn thận. Gia đình tôi cũng…",
						"thai": "ได้โปรด... ระวังด้วย ครอบครัวของฉันก็...",
						"hindi": "कृपया... सावधान रहना। मेरा परिवार भी..."
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "zoe"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "걱정 마. 꼭 밝혀낼게.",
						"english": "Don't worry. I'll get to the bottom of this.",
						"japanese": "心配しないで。必ず突き止めるから。",
						"chinese": "别担心。我一定会查明的。",
						"french": "Ne t'inquiète pas. Je vais découvrir la vérité.",
						"spanish": "No te preocupes. Lo averiguaré.",
						"vietnamese": "Đừng lo. Tôi sẽ tìm ra sự thật.",
						"thai": "ไม่ต้องห่วง ฉันจะเปิดเผยความจริงให้ได้",
						"hindi": "चिंता मत करो। मैं इसका पता लगा लूंगा।"
					}
				}
			]
		},
		{
			"win_dialogue": [
				{
					"emotion": "sad",
					"content": {
						"korean": "크으윽… 겨우 나를 막았다고 생각하나? 이건 시작일 뿐이다…",
						"english": "Ugh… Do you really think you've stopped me? This is just the beginning…",
						"japanese": "くっ…私を止めたとでも思っているのか？これは始まりに過ぎない…",
						"chinese": "呃…你以为你阻止了我吗？这只是个开始…",
						"french": "Ugh… Crois-tu vraiment m'avoir arrêté ? Ce n'est que le début…",
						"spanish": "Ugh… ¿De verdad crees que me has detenido? Esto es solo el principio…",
						"vietnamese": "Khặc khặc… Ngươi thật sự nghĩ đã ngăn được ta sao? Đây chỉ là khởi đầu thôi…",
						"thai": "อึก... คิดว่าหยุดฉันได้แล้วงั้นเหรอ? นี่เป็นแค่จุดเริ่มต้นเท่านั้น...",
						"hindi": "उफ़… क्या तुम्हें लगता है कि तुमने मुझे रोक दिया है? यह तो बस शुरुआत है…"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "시작이라고? 그럼 이 뒤에 더 큰 게 있다는 거야?",
						"english": "The beginning? So there's something bigger coming?",
						"japanese": "始まりだと？じゃあこの後に、もっと大きなものが待っているのか？",
						"chinese": "开始？那后面还有更大的事情吗？",
						"french": "Le début ? Alors il y a quelque chose de plus grand à venir ?",
						"spanish": "¿El principio? ¿Entonces hay algo más grande después de esto?",
						"vietnamese": "Khởi đầu sao? Vậy có nghĩa là phía sau còn có điều lớn hơn à?",
						"thai": "เริ่มต้นงั้นเหรอ? งั้นหลังจากนี้มีเรื่องใหญ่กว่านี้อีกเหรอ?",
						"hindi": "शुरुआत? तो क्या इसके बाद कुछ बड़ा आने वाला है?"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "정체 모를 존재는 사라졌지만, 도시의 불안은 가시지 않았다.",
						"english": "The mysterious entity vanished, but the city's unease remained.",
						"japanese": "正体不明の存在は消えたが、都市の不安は拭えなかった。",
						"chinese": "那个不明身份的存在消失了，但城市的 불안 (不安) 并未消散。",
						"french": "L'entité mystérieuse a disparu, mais l'inquiétude de la ville persistait.",
						"spanish": "La entidad misteriosa desapareció, pero la inquietud de la ciudad permaneció.",
						"vietnamese": "Thực thể bí ẩn đã biến mất, nhưng sự bất an của thành phố vẫn còn đó.",
						"thai": "สิ่งลึกลับได้หายไปแล้ว แต่ความไม่สบายใจของเมืองก็ยังคงอยู่",
						"hindi": "रहस्यमय सत्ता गायब हो गई, लेकिन शहर की बेचैनी बनी रही।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이것은 서막에 불과했다. 더 깊은 곳, 더 큰 진실이 기다리고 있었다.",
						"english": "This was merely the prologue. Deeper secrets, a greater truth awaited.",
						"japanese": "これは序章に過ぎなかった。より深い場所で、より大きな真実が待っていた。",
						"chinese": "这仅仅是序幕。更深的地方，更大的真相正在等待。",
						"french": "Ce n'était que le prologue. Des secrets plus profonds, une plus grande vérité attendaient.",
						"spanish": "Esto fue meramente el prólogo. Secretos más profundos, una verdad mayor esperaban.",
						"vietnamese": "Đây chỉ là khúc dạo đầu. Những bí mật sâu hơn, một sự thật lớn hơn đang chờ đợi.",
						"thai": "นี่เป็นเพียงแค่บทโหมโรงเท่านั้น ความจริงที่ลึกซึ้งกว่าและยิ่งใหญ่กว่ากำลังรออยู่",
						"hindi": "यह सिर्फ प्रस्तावना थी। गहरे रहस्य, एक बड़ी सच्चाई इंतजार कर रही थी।"
					},
					"type": "speech",
					"speaker": "narrator"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "점액질이 가득한 공간. 그 중심에서 거대한 그림자가 일렁였다.",
						"english": "A space filled with slime. A colossal shadow flickered at its center.",
						"japanese": "粘液で満たされた空間。その中心で巨大な影が揺らめいた。",
						"chinese": "一个充满黏液的空间。在它的中心，一个巨大的影子在波动。",
						"french": "Un espace rempli de substance visqueuse. Au centre, une ombre colossale vacillait.",
						"spanish": "Un espacio lleno de limo. En su centro, una sombra colosal parpadeaba.",
						"vietnamese": "Một không gian đầy chất nhầy. Một bóng đen khổng lồ chập chờn ở trung tâm.",
						"thai": "พื้นที่ที่เต็มไปด้วยเมือกเงาขนาดยักษ์สั่นไหวอยู่ตรงกลาง",
						"hindi": "कीचड़ से भरी एक जगह। उसके केंद्र में एक विशाल छाया लहरा रही थी।"
					}
				},
				{
					"content": {
						"korean": "감히 이곳까지 발을 들이다니… 어리석은 인간들.",
						"english": "How dare you step foot in here… Foolish humans.",
						"japanese": "よくもここまで足を踏み入れたな…愚かな人間たちめ。",
						"chinese": "竟敢踏足此处…愚蠢的人类。",
						"french": "Comment osez-vous mettre les pieds ici… Humains stupides.",
						"spanish": "Cómo osáis pisar aquí… Humanos tontos.",
						"vietnamese": "Dám đặt chân đến đây… Lũ người ngu ngốc.",
						"thai": "บังอาจเข้ามาในที่แห่งนี้... มนุษย์ที่โง่เขลา",
						"hindi": "तुम यहाँ कदम रखने की हिम्मत कैसे कर सकते हो… मूर्ख इंसान।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "네가 이 모든 것의 원흉인가!",
						"english": "Are you the mastermind behind all of this?!",
						"japanese": "お前がこの全ての元凶なのか！",
						"chinese": "你就是这一切的罪魁祸首吗！",
						"french": "Es-tu la cause de tout cela ?!",
						"spanish": "¿Eres tú el origen de todo esto?",
						"vietnamese": "Ngươi là kẻ chủ mưu của tất cả những chuyện này sao?!",
						"thai": "แกคือต้นตอของเรื่องทั้งหมดนี่งั้นหรือ!",
						"hindi": "क्या तुम ही इन सब के पीछे की वजह हो?!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "나는 그저 도시의 죄를 반영할 뿐이다. 감히 나를 막으려 하는가?",
						"english": "I merely reflect the city's sins. Do you dare try to stop me?",
						"japanese": "私はただ都市の罪を映し出しているに過ぎない。よくも私を止めようとするな？",
						"chinese": "我只是在反映这座城市的罪恶。你敢阻止我吗？",
						"french": "Je ne fais que refléter les péchés de la ville. Osez-vous m'arrêter ?",
						"spanish": "Solo reflejo los pecados de la ciudad. ¿Osas intentar detenerme?",
						"vietnamese": "Ta chỉ phản ánh tội lỗi của thành phố thôi. Ngươi dám cản ta sao?",
						"thai": "ฉันเป็นเพียงแค่ผู้สะท้อนบาปของเมืองเท่านั้น กล้าดียังไงถึงมาหยุดฉัน?",
						"hindi": "मैं तो बस शहर के पापों को दर्शाता हूँ। क्या तुम मुझे रोकने की हिम्मत करते हो?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "압도적인 힘 앞에서 탐험대는 쓰러졌다.",
						"english": "The expedition fell before an overwhelming power.",
						"japanese": "圧倒的な力の前に、探検隊は倒れた。",
						"chinese": "在压倒性的力量面前，探险队倒下了。",
						"french": "Face à une puissance écrasante, l'expédition a succombé.",
						"spanish": "Ante un poder abrumador, la expedición cayó.",
						"vietnamese": "Đoàn thám hiểm đã gục ngã trước sức mạnh áp đảo.",
						"thai": "คณะสำรวจล้มลงต่อหน้าพลังอันท่วมท้น",
						"hindi": "प्रबल शक्ति के सामने अभियान दल गिर पड़ा।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "하찮은 존재들이… 감히 역사를 거스르려 하다니.",
						"english": "Insignificant beings... How dare you defy history.",
						"japanese": "愚かな存在め… よくも歴史に抗おうとしたな。",
						"chinese": "渺小的存在……竟敢违抗历史。",
						"french": "Êtres insignifiants... Comment osez-vous défier l'histoire ?",
						"spanish": "Seres insignificantes... ¿Cómo osáis desafiar la historia?",
						"vietnamese": "Những kẻ hèn mọn... Sao dám chống lại lịch sử.",
						"thai": "เจ้าพวกไร้ค่า... บังอาจมาท้าทายประวัติศาสตร์",
						"hindi": "तुच्छ प्राणी… तुम्हारी इतनी हिम्मत कि इतिहास को चुनौती दो।"
					}
				},
				{
					"content": {
						"korean": "젠장… 아직 끝나지 않았어. 반드시…!",
						"english": "Damn it... It's not over yet. I will...!",
						"japanese": "くそっ… まだ終わってない。必ず…！",
						"chinese": "该死……还没结束。我一定会……！",
						"french": "Bon sang... Ce n'est pas encore fini. Je vais... !",
						"spanish": "Maldita sea... ¡Todavía no ha terminado. ¡Definitivamente...!",
						"vietnamese": "Chết tiệt... Vẫn chưa kết thúc. Nhất định phải...!",
						"thai": "ให้ตายสิ... ยังไม่จบแค่นี้. ข้าจะ...!",
						"hindi": "धिक्कार है... यह अभी ख़त्म नहीं हुआ। मैं ज़रूर...!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"화려한 도시 아래, 잊혀진 지하 세계가 꿈틀거렸다.",
			"오래된 수로에서 시작된 기묘한 점액질. 그것은 빠르게 모든 것을 잠식했다.",
			"사람들은 애써 외면했지만, 불안은 그림자처럼 도시를 집어삼켰다.",
			"그리고, 그 속에서 누군가의 목소리가 들려왔다. \"이건 저주야.\""
		],
		"english": [
			"Beneath the glittering city, a forgotten underworld stirred.",
			"A strange slime emerged from old waterways, swiftly consuming everything.",
			"People tried to ignore it, but anxiety devoured the city like a shadow.",
			"Then, a voice echoed from within. \"This is a curse.\""
		],
		"japanese": [
			"華やかな都市の影で、忘れ去られた地下世界が蠢き出した。",
			"古びた水路から現れた奇妙な粘液。それは瞬く間に全てを侵食していった。",
			"人々は懸命に目を背けたが、不安は影のように都市を飲み込んでいった。",
			"そして、その中から誰かの声が聞こえた。「これは呪いだ。」"
		],
		"chinese": [
			"在华丽都市之下，被遗忘的地下世界蠢蠢欲动。",
			"一种奇异的黏液从古老水道中涌出，迅速吞噬了一切。",
			"人们试图视而不见，但不安如同阴影般吞噬了城市。",
			"然后，一个声音从深处传来。“这是诅咒。”"
		],
		"french": [
			"Sous la ville scintillante, un monde souterrain oublié s'agitait.",
			"Une étrange substance visqueuse émergea des vieilles canalisations, dévorant rapidement tout sur son passage.",
			"Les gens tentèrent de l'ignorer, mais l'anxiété dévora la ville comme une ombre.",
			"Puis, une voix résonna de l'intérieur. « C'est une malédiction. »"
		],
		"spanish": [
			"Bajo la deslumbrante ciudad, un inframundo olvidado se agitaba.",
			"Una extraña sustancia viscosa surgió de las viejas alcantarillas, devorándolo todo rápidamente.",
			"La gente intentó ignorarlo, pero la ansiedad devoró la ciudad como una sombra.",
			"Entonces, una voz resonó desde el interior. \"Esto es una maldición.\""
		],
		"vietnamese": [
			"Bên dưới thành phố tráng lệ, một thế giới ngầm bị lãng quên đang cựa quậy.",
			"Một chất nhầy kỳ lạ xuất hiện từ những cống nước cũ, nhanh chóng nuốt chửng mọi thứ.",
			"Mọi người cố gắng phớt lờ, nhưng sự bất an đã nuốt chửng thành phố như một bóng đen.",
			"Và rồi, một giọng nói vang lên từ bên trong. \"Đây là một lời nguyền.\""
		],
		"thai": [
			"ใต้เมืองที่หรูหรา โลกใต้ดินที่ถูกลืมเลือนเริ่มเคลื่อนไหว.",
			"เมือกประหลาดถือกำเนิดจากทางน้ำเก่า มันกลืนกินทุกสิ่งอย่างรวดเร็ว.",
			"ผู้คนพยายามมองข้ามมันไป แต่ความกังวลกลับกลืนกินเมืองเหมือนเงา.",
			"แล้วเสียงของใครบางคนก็ดังขึ้นจากภายใน \"นี่มันคำสาปชัดๆ\"."
		],
		"hindi": [
			"चकाचौंध शहर के नीचे, एक भूला हुआ पाताल लोक करवटें बदल रहा था。",
			"पुरानी जलधाराओं से एक अजीब चिपचिपा पदार्थ निकला, जिसने तेज़ी से सब कुछ निगल लिया।",
			"लोगों ने इसे नज़रअंदाज़ करने की कोशिश की, लेकिन चिंता ने शहर को एक परछाई की तरह निगल लिया।",
			"फिर, भीतर से एक आवाज़ गूँजी। \"यह एक अभिशाप है।\""
		]
	}
} as const;
