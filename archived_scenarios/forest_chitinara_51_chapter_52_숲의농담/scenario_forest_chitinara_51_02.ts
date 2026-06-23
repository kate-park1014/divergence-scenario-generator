export const scenario_forest_chitinara_51_02 = {
	"scenario_id": "forest_chitinara_51_02",
	"order": 2,
	"act": "rising",
	"theme": "forest",
	"actors": {
		"briar": {
			"id": "mon_21f92820-190e-4d08-a75c-5d2c0b6d0a6b",
			"name": {
				"korean": "브라이어",
				"english": "Briar",
				"japanese": "ブライア",
				"chinese": "布莱尔",
				"french": "Briar",
				"spanish": "Briar",
				"vietnamese": "Briar",
				"thai": "ไบรอา",
				"hindi": "ब्रायर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/41fb431e-57e0-45e0-dde6-1a1f02c01200/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/dd89dff7-88ed-4444-28d8-5aaa85bd4e00/public"
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
						"korean": "숲의 중심부에 다다르자, 기이한 활력이 느껴진다.",
						"english": "Reaching the heart of the forest, a strange vitality is felt.",
						"japanese": "森の中心部にたどり着くと、奇妙な活力が感じられる。",
						"chinese": "抵达森林中心时，一股奇异的活力涌上心头。",
						"french": "En atteignant le cœur de la forêt, une étrange vitalité se fait sentir.",
						"spanish": "Al llegar al corazón del bosque, se siente una extraña vitalidad.",
						"vietnamese": "Đến trung tâm khu rừng, một sức sống kỳ lạ được cảm nhận.",
						"thai": "เมื่อมาถึงใจกลางป่า สัมผัสได้ถึงพลังชีวิตที่แปลกประหลาด",
						"hindi": "जंगल के केंद्र तक पहुँचने पर, एक अजीबोगरीब जीवन शक्ति महसूस होती है।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"speaker": "briar",
					"spot": [
						4,
						3
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"content": {
						"korean": "이 숲은 참 신기해! 다친 짐승들도 여기서 금방 회복하거든.",
						"english": "This forest is truly amazing! Even injured animals recover quickly here.",
						"japanese": "この森、本当に不思議！怪我した動物もここでたちまち回復するんだ。",
						"chinese": "这片森林真神奇！受伤的动物在这里也能很快恢复。",
						"french": "Cette forêt est vraiment incroyable ! Même les animaux blessés y guérissent vite.",
						"spanish": "¡Este bosque es realmente asombroso! Incluso los animales heridos se recuperan rápidamente aquí.",
						"vietnamese": "Khu rừng này thật kỳ diệu! Ngay cả những con thú bị thương cũng nhanh chóng hồi phục ở đây.",
						"thai": "ป่านี้มหัศจรรย์จริง ๆ! สัตว์ที่บาดเจ็บก็ฟื้นตัวเร็วที่นี่",
						"hindi": "यह जंगल सचमुच अद्भुत है! घायल जानवर भी यहाँ जल्दी ठीक हो जाते हैं।"
					},
					"type": "speech",
					"speaker": "briar",
					"emotion": "happy"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "정말요? 어떻게?",
						"english": "Really? How?",
						"japanese": "本当ですか？どうやって？",
						"chinese": "真的吗？怎么会？",
						"french": "Vraiment ? Comment ?",
						"spanish": "¿De verdad? ¿Cómo?",
						"vietnamese": "Thật sao? Bằng cách nào?",
						"thai": "จริงเหรอ? ได้ยังไง?",
						"hindi": "सच में? कैसे?"
					}
				},
				{
					"emotion": "happy",
					"type": "speech",
					"speaker": "briar",
					"content": {
						"korean": "숲이 감싸 안아주니까! 봐봐, 저 덫에 걸린 다람쥐도 곧 기운을 차릴 거야.",
						"english": "Because the forest embraces them! Look, that squirrel caught in a trap will soon regain its strength.",
						"japanese": "森が抱きしめてくれるからさ！見てごらん、あの罠にかかったリスもすぐに元気になるよ。",
						"chinese": "因为森林拥抱着它们！看，那只被困在陷阱里的松鼠很快就会恢复精神的。",
						"french": "Parce que la forêt les étreint ! Regarde, cet écureuil pris au piège retrouvera bientôt ses forces.",
						"spanish": "¡Porque el bosque los abraza! Mira, esa ardilla atrapada en la trampa pronto recuperará sus fuerzas.",
						"vietnamese": "Vì khu rừng bao bọc chúng! Nhìn kìa, con sóc bị mắc bẫy kia cũng sẽ sớm lấy lại sức thôi.",
						"thai": "ก็เพราะป่าโอบกอดพวกมันไง! ดูสิ กระรอกที่ติดกับดักตัวนั้นก็จะกลับมามีแรงในไม่ช้า",
						"hindi": "क्योंकि जंगल उन्हें गले लगाता है! देखो, वह गिलहरी जो जाल में फंसी है, वह भी जल्द ही ठीक हो जाएगी।"
					}
				},
				{
					"content": {
						"korean": "…왠지 모르게 좀 섬뜩한데요.",
						"english": "...Somehow, it feels a bit eerie.",
						"japanese": "…なんだか、ちょっと不気味ですね。",
						"chinese": "……不知为何，总觉得有点毛骨悚然。",
						"french": "...D'une certaine manière, c'est un peu étrange.",
						"spanish": "...De alguna manera, se siente un poco espeluznante.",
						"vietnamese": "Không hiểu sao, tôi thấy hơi rợn người.",
						"thai": "ไม่รู้ทำไม แต่รู้สึกขนลุกนิดหน่อย",
						"hindi": "...किसी तरह, यह थोड़ा भयानक लग रहा है।"
					},
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "briar",
					"spot": [
						2,
						3
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "briar",
					"emotion": "happy",
					"content": {
						"korean": "신기하지 않아? 뼈가 부러진 채로도, 며칠이면 다시 쌩쌩해진다고!",
						"english": "Isn't it amazing? Even with broken bones, they're good as new in a few days!",
						"japanese": "不思議だと思わない？骨が折れても、数日で元通りになるんだよ！",
						"chinese": "不觉得神奇吗？即使骨头断了，几天内也能恢复如初！",
						"french": "N'est-ce pas incroyable ? Même avec des os cassés, en quelques jours, c'est comme neuf !",
						"spanish": "¿No es asombroso? ¡Aunque se rompan los huesos, en unos días están como nuevos!",
						"vietnamese": "Không lạ sao? Dù gãy xương, chỉ vài ngày là lại khỏe re!",
						"thai": "ไม่แปลกเหรอ? แม้กระดูกหัก ไม่กี่วันก็กลับมาแข็งแรงเหมือนเดิมแล้วนะ!",
						"hindi": "अजीब नहीं है? हड्डियां टूटने पर भी, कुछ ही दिनों में फिर से ठीक हो जाती हैं!"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_1",
					"content": {
						"korean": "그 정도 회복력이라니… 이건 자연의 섭리를 넘어선 것 같아요.",
						"english": "Such regenerative power... it seems to defy the laws of nature.",
						"japanese": "その回復力… 自然の摂理を超えているように思えます。",
						"chinese": "这种恢复力… 似乎超越了自然法则。",
						"french": "Une telle capacité de récupération... cela dépasse les lois de la nature.",
						"spanish": "Esa capacidad de recuperación... parece ir más allá de las leyes naturales.",
						"vietnamese": "Sức hồi phục đến mức đó… dường như đã vượt quá quy luật tự nhiên rồi.",
						"thai": "พลังฟื้นฟูขนาดนั้น... ดูเหมือนจะเหนือกว่ากฎธรรมชาติเลยนะเนี่ย",
						"hindi": "इतनी पुनर्जीवित करने की शक्ति... यह तो प्रकृति के नियमों से परे लगती है।"
					}
				},
				{
					"content": {
						"korean": "그게 바로 이 숲의 축복이야! 모두를 품어주는 자비로운 치유의 힘!",
						"english": "That's this forest's blessing! A benevolent healing power that embraces all!",
						"japanese": "それこそがこの森の祝福だよ！皆を包み込む慈悲深い癒しの力！",
						"chinese": "那就是这片森林的祝福！包容万物的慈悲治愈之力！",
						"french": "C'est la bénédiction de cette forêt ! Un pouvoir de guérison bienveillant qui étreint tout !",
						"spanish": "¡Esa es la bendición de este bosque! ¡Un poder curativo benévolo que abraza a todos!",
						"vietnamese": "Đó chính là phước lành của khu rừng này! Sức mạnh chữa lành nhân từ ôm lấy vạn vật!",
						"thai": "นั่นแหละคือพรของป่าแห่งนี้! พลังแห่งการเยียวยาอันเมตตาที่โอบกอดทุกคน!",
						"hindi": "यही इस जंगल का आशीर्वाद है! एक परोपकारी उपचार शक्ति जो सभी को गले लगाती है!"
					},
					"speaker": "briar",
					"type": "speech",
					"emotion": "happy"
				},
				{
					"emotion": "sad",
					"speaker": "character_2",
					"type": "speech",
					"content": {
						"korean": "…축복이라기엔, 뭔가 불편한데요.",
						"english": "...For a blessing, it feels... uncomfortable.",
						"japanese": "…祝福というには、何か違和感がありますね。",
						"chinese": "……与其说是祝福，倒不如说有些不安。",
						"french": "...Pour une bénédiction, c'est un peu... dérangeant.",
						"spanish": "...Para ser una bendición, me resulta un poco... incómodo.",
						"vietnamese": "…Gọi là phước lành, nhưng sao thấy bất an quá.",
						"thai": "...จะว่าเป็นพร มันก็รู้สึก... ไม่สบายใจ",
						"hindi": "...आशीर्वाद कहने के लिए, कुछ अजीब सा लगता है।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "briar",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						3
					],
					"action": "enter"
				},
				{
					"speaker": "briar",
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "이것 봐, 저기 쓰러져있던 사슴도 다시 일어섰어! 완전 건강해 보이지?",
						"english": "Look! That deer that fell is back on its feet! Doesn't it look perfectly healthy?",
						"japanese": "これ見て、倒れてた鹿もまた立ち上がったよ！すごく元気そうに見えるだろ？",
						"chinese": "快看，那只倒下的鹿又站起来了！看起来是不是非常健康？",
						"french": "Regarde ! Ce cerf qui était tombé s'est relevé ! Il a l'air en pleine forme, n'est-ce pas ?",
						"spanish": "¡Mira! ¡Ese ciervo que estaba caído se levantó de nuevo! ¿No se ve totalmente sano?",
						"vietnamese": "Nhìn này, con hươu bị ngã đằng kia cũng đứng dậy rồi! Trông nó khỏe mạnh chưa kìa?",
						"thai": "ดูสิ! กวางที่ล้มอยู่ตรงนั้นก็ลุกขึ้นแล้ว! ดูแข็งแรงสุดๆ ไปเลยใช่ไหม?",
						"hindi": "देखो! वह हिरण जो गिरा हुआ था, फिर से उठ खड़ा हुआ! एकदम स्वस्थ दिख रहा है, है ना?"
					}
				},
				{
					"content": {
						"korean": "건강하긴 한데… 너무 건강해서 기분 나빠요. 뭔가 억지로 주입된 느낌이랄까.",
						"english": "It's healthy, but... almost *too* healthy. It feels like something's been unnaturally forced into it.",
						"japanese": "健康だけど… 健康すぎて、なんだか気持ち悪いです。無理やり何かを注入されたような。",
						"chinese": "健康倒是健康……但健康得让人不舒服。感觉像是被强行注入了什么。",
						"french": "Il est en bonne santé, mais... presque *trop* en bonne santé. On dirait que quelque chose lui a été forcé.",
						"spanish": "Está sano, pero... demasiado sano, me da mala espina. Como si le hubieran inyectado algo a la fuerza.",
						"vietnamese": "Khỏe thì khỏe thật đấy… nhưng khỏe đến mức thấy khó chịu. Cứ như có gì đó bị ép buộc tiêm vào vậy.",
						"thai": "ก็แข็งแรงนะ... แต่แข็งแรงเกินไปจนรู้สึกไม่สบายใจเลย เหมือนโดนยัดเยียดอะไรบางอย่าง",
						"hindi": "स्वस्थ तो है... लेकिन इतना स्वस्थ कि अजीब लगता है। जैसे कुछ जबरदस्ती भर दिया गया हो।"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "briar",
					"emotion": "happy",
					"content": {
						"korean": "무슨 소리야? 생명은 아름다운 거야. 숲은 언제나 우리에게 '최고의 상태'를 선물해준다고!",
						"english": "What are you talking about? Life is beautiful. The forest always grants us the 'best state'!",
						"japanese": "何を言ってるんだ？命は美しいものだよ。森はいつも私たちに『最高の状態』をプレゼントしてくれるんだ！",
						"chinese": "你在说什么？生命是美好的。森林总是赠予我们‘最佳状态’！",
						"french": "Qu'est-ce que tu racontes ? La vie est belle. La forêt nous offre toujours 'le meilleur état' !",
						"spanish": "¿Qué dices? La vida es hermosa. ¡El bosque siempre nos regala el 'estado óptimo'!",
						"vietnamese": "Nói gì vậy? Sự sống thật đẹp. Rừng luôn ban tặng chúng ta 'trạng thái tốt nhất'!",
						"thai": "พูดอะไรน่ะ? ชีวิตน่ะมันสวยงามนะ ป่าแห่งนี้มอบ 'สภาวะที่ดีที่สุด' ให้เราเสมอ!",
						"hindi": "क्या बात कर रहे हो? जीवन सुंदर है। जंगल हमेशा हमें 'सर्वोत्तम अवस्था' प्रदान करता है!"
					}
				},
				{
					"speaker": "character_3",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "최고의 상태가… 이런 건가요?",
						"english": "Is *this* what 'the best state' is?",
						"japanese": "最高の状態が… これですか？",
						"chinese": "最佳状态……就是这样吗？",
						"french": "Le meilleur état... c'est ça ?",
						"spanish": "¿'El estado óptimo'... es esto?",
						"vietnamese": "Trạng thái tốt nhất… là thế này sao?",
						"thai": "สภาวะที่ดีที่สุด... นี่น่ะเหรอ?",
						"hindi": "सबसे अच्छी अवस्था... क्या यह ऐसी होती है?"
					}
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "briar"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "briar",
					"content": {
						"korean": "더 이상 의심하지 마. 숲은 너희에게 '구원'을 줄 거야.",
						"english": "Doubt no more. The forest will grant you 'salvation'.",
						"japanese": "これ以上疑うな。森はお前たちに『救済』を与えてくれるだろう。",
						"chinese": "别再怀疑了。森林会赐予你们‘救赎’。",
						"french": "Ne doute plus. La forêt vous apportera le 'salut'.",
						"spanish": "No dudes más. El bosque os dará la 'salvación'.",
						"vietnamese": "Đừng nghi ngờ nữa. Rừng sẽ ban cho các ngươi 'sự cứu rỗi'.",
						"thai": "อย่าสงสัยอีกต่อไปเลย ป่าแห่งนี้จะมอบ 'ความรอด' ให้พวกเจ้า",
						"hindi": "अब और शक मत करो। जंगल तुम्हें 'मुक्ति' देगा।"
					}
				},
				{
					"content": {
						"korean": "구원… 웃기지 마. 덫에 걸린 생명체들을 보면서 그런 말이 나와?",
						"english": "Salvation...? Don't make me laugh. Can you say that, looking at the trapped creatures?",
						"japanese": "救済… ふざけないで。罠にかかった生き物たちを見て、そんなことが言えるの？",
						"chinese": "救赎……别开玩笑了。看着那些被困的生物，你还能说出这种话？",
						"french": "Le salut...? Ne me fais pas rire. Peux-tu dire ça en voyant ces créatures piégées ?",
						"spanish": "¿Salvación...? No me hagas reír. ¿Puedes decir eso viendo a las criaturas atrapadas?",
						"vietnamese": "Cứu rỗi…? Đừng có đùa. Nhìn những sinh vật bị mắc bẫy mà nói được lời đó à?",
						"thai": "ความรอด... ตลกน่า! พูดแบบนั้นได้ยังไง ในเมื่อเห็นสิ่งมีชีวิตที่ติดกับดักพวกนั้นอยู่?",
						"hindi": "मुक्ति...? हँसाओ मत। फंसे हुए जीवों को देखकर तुम ऐसी बात कह सकते हो?"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "briar",
					"content": {
						"korean": "…너도 곧 알게 될 거야. 이 숲의 진정한 '환대'를.",
						"english": "...You'll soon learn. The true 'hospitality' of this forest.",
						"japanese": "…お前もすぐに知ることになるだろう。この森の真の『もてなし』を。",
						"chinese": "…你很快就会知道。这片森林真正的‘款待’。",
						"french": "...Tu apprendras bientôt. La véritable 'hospitalité' de cette forêt.",
						"spanish": "...Pronto lo sabrás. La verdadera 'hospitalidad' de este bosque.",
						"vietnamese": "...Ngươi rồi sẽ sớm biết thôi. Sự 'hiếu khách' thực sự của khu rừng này.",
						"thai": "...เจ้าจะรู้ในไม่ช้า 'การต้อนรับ' ที่แท้จริงของป่าแห่งนี้",
						"hindi": "...तुम भी जल्द ही जान जाओगे। इस जंगल की असली 'मेहमाननवाज़ी'।"
					}
				},
				{
					"content": {
						"korean": "환대? 그게 뭔지 직접 파헤쳐 볼게.",
						"english": "Hospitality? I'll dig into what that is myself.",
						"japanese": "もてなし？それが何なのか、この手で暴いてやる。",
						"chinese": "款待？我亲自去查个究竟。",
						"french": "Hospitalité ? Je vais découvrir ce que c'est moi-même.",
						"spanish": "¿Hospitalidad? Yo mismo descubriré lo que es.",
						"vietnamese": "Hiếu khách? Ta sẽ tự mình tìm hiểu xem nó là gì.",
						"thai": "การต้อนรับ? ข้าจะขุดคุ้ยหาความจริงเอง",
						"hindi": "मेहमाननवाज़ी? मैं खुद पता लगाऊँगा कि वो क्या है।"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				}
			]
		},
		{
			"id": 15,
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "숲의 가장 깊은 곳, 기이하게 뒤틀린 생명력이 꿈틀거린다.",
						"english": "In the deepest part of the forest, a strangely twisted life force writhes.",
						"japanese": "森の最も深き場所、奇妙に歪んだ生命力が蠢いている。",
						"chinese": "在森林最深处，一股诡异扭曲的生命力正在蠕动。",
						"french": "Dans la partie la plus profonde de la forêt, une force vitale étrangement tordue frémit.",
						"spanish": "En lo más profundo del bosque, una fuerza vital extrañamente retorcida se agita.",
						"vietnamese": "Nơi sâu thẳm nhất khu rừng, một sinh lực méo mó kỳ lạ đang cựa quậy.",
						"thai": "ในส่วนที่ลึกที่สุดของป่า พลังชีวิตที่บิดเบี้ยวแปลกประหลาดกำลังดิ้นรน",
						"hindi": "जंगल के सबसे गहरे हिस्से में, एक अजीबोगरीब विकृत जीवन शक्ति मचल रही है।"
					}
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "환영한다, 새로운 손님들. 너희도 곧 숲의 일부가 될 테니.",
						"english": "Welcome, new guests. You too shall soon become part of the forest.",
						"japanese": "ようこそ、新たな客たちよ。お前たちもすぐに森の一部となるだろうから。",
						"chinese": "欢迎，新来的客人们。你们很快也将成为森林的一部分。",
						"french": "Bienvenue, nouveaux invités. Vous ferez bientôt partie de la forêt.",
						"spanish": "Bienvenidos, nuevos invitados. Pronto seréis parte del bosque.",
						"vietnamese": "Chào mừng, những vị khách mới. Các ngươi rồi cũng sẽ sớm trở thành một phần của khu rừng thôi.",
						"thai": "ยินดีต้อนรับ แขกผู้มาใหม่ พวกเจ้าก็จะกลายเป็นส่วนหนึ่งของป่าในไม่ช้า",
						"hindi": "स्वागत है, नए मेहमानों। तुम भी जल्द ही जंगल का हिस्सा बन जाओगे।"
					}
				},
				{
					"content": {
						"korean": "그 더러운 환대는 사양한다!",
						"english": "I refuse your filthy hospitality!",
						"japanese": "その汚らわしいもてなしは断る！",
						"chinese": "我拒绝你那肮脏的款待！",
						"french": "Je refuse votre hospitalité immonde !",
						"spanish": "¡Rechazo tu asquerosa hospitalidad!",
						"vietnamese": "Ta từ chối sự hiếu khách bẩn thỉu đó!",
						"thai": "ข้าไม่ต้องการการต้อนรับที่สกปรกนั่น!",
						"hindi": "मुझे तुम्हारी गंदी मेहमाननवाज़ी नहीं चाहिए!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "briar",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						3
					],
					"action": "enter"
				},
				{
					"emotion": "sad",
					"speaker": "briar",
					"type": "speech",
					"content": {
						"korean": "안 돼! 싸우지 마! 숲은 모든 걸 포용할 수 있어!",
						"english": "No! Don't fight! The forest can embrace everything!",
						"japanese": "だめだ！争わないで！森は全てを受け入れられるんだ！",
						"chinese": "不！别打了！森林可以包容一切！",
						"french": "Non ! Ne vous battez pas ! La forêt peut tout embrasser !",
						"spanish": "¡No! ¡No luchéis! ¡El bosque puede abrazarlo todo!",
						"vietnamese": "Không! Đừng đánh nhau! Khu rừng có thể bao dung mọi thứ!",
						"thai": "ไม่นะ! อย่าสู้กัน! ป่าสามารถโอบกอดทุกสิ่งได้!",
						"hindi": "नहीं! लड़ो मत! जंगल सब कुछ समाहित कर सकता है!"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "비켜, 브라이어! 저 괴물이 바로 이 숲의 거짓된 '치유'의 본질이야!",
						"english": "Get out of the way, Briar! That monster is the essence of this forest's false 'healing'!",
						"japanese": "どけ、ブライアー！あの怪物がこの森の偽りの『癒し』の本質なんだ！",
						"chinese": "让开，布莱尔！那个怪物就是这片森林虚假‘治愈’的本质！",
						"french": "Écarte-toi, Briar ! Ce monstre est l'essence même de la fausse 'guérison' de cette forêt !",
						"spanish": "¡Apártate, Briar! ¡Ese monstruo es la esencia de la falsa 'sanación' de este bosque!",
						"vietnamese": "Tránh ra, Briar! Con quái vật đó chính là bản chất của sự 'chữa lành' giả dối của khu rừng này!",
						"thai": "หลีกไปไบรเออร์! สัตว์ประหลาดนั่นคือแก่นแท้ของ 'การเยียวยา' ที่หลอกลวงของป่านี้!",
						"hindi": "हट जाओ, ब्रायर्स! वह राक्षस ही इस जंगल के झूठे 'इलाज' का सार है!"
					}
				},
				{
					"action": "exit",
					"direction": "down",
					"type": "direction",
					"duration_ms": 400,
					"speaker": "briar"
				},
				{
					"content": {
						"korean": "어리석은 것들. 진정한 생명을 거부하다니.",
						"english": "Fools. To reject true life.",
						"japanese": "愚かな者たちめ。真の生命を拒むとは。",
						"chinese": "愚蠢的家伙们。竟然拒绝真正的生命。",
						"french": "Imbéciles. Rejeter la vraie vie.",
						"spanish": "Necios. Rechazar la verdadera vida.",
						"vietnamese": "Những kẻ ngu ngốc. Dám từ chối sự sống thật sự.",
						"thai": "พวกโง่เขลา ที่ปฏิเสธชีวิตที่แท้จริง",
						"hindi": "मूर्ख। सच्चे जीवन को अस्वीकार करना।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "진정한 생명? 역겹기만 해!",
						"english": "True life? It's nothing but disgusting!",
						"japanese": "真の生命？吐き気がするだけだ！",
						"chinese": "真正的生命？简直恶心透顶！",
						"french": "La vraie vie ? C'est juste dégoûtant !",
						"spanish": "¿Verdadera vida? ¡Es solo repugnante!",
						"vietnamese": "Sự sống thật sự? Chỉ toàn là sự ghê tởm!",
						"thai": "ชีวิตที่แท้จริง? มันน่าขยะแขยงเท่านั้น!",
						"hindi": "सच्चा जीवन? यह तो बस घृणित है!"
					}
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "크하하… 겨우 이 정도라니. 숲은… 모든 것을 기억한다… 너희도… 곧….",
						"english": "Kuhaha... Is that all you've got? The forest... remembers everything... You too... soon....",
						"japanese": "クハハ…この程度とはな。森は…全てを覚えている…お前たちも…いずれ…。",
						"chinese": "哈哈哈……就这点本事吗。森林……会记住一切……你们也……很快……",
						"french": "Hahaha... C'est tout ce que vous avez ? La forêt... se souvient de tout... Vous aussi... bientôt....",
						"spanish": "Jajaja... ¿Eso es todo lo que tenéis? El bosque... lo recuerda todo... Vosotros también... pronto...",
						"vietnamese": "Khà khà... Chỉ có thế này thôi sao. Rừng... nhớ mọi thứ... Các ngươi cũng... sớm thôi...",
						"thai": "ฮ่าๆๆ... แค่นี้เองรึไง ป่า... จดจำทุกสิ่ง... พวกเจ้าก็... เช่นกัน... ในไม่ช้า...",
						"hindi": "कुकุहाहा… बस इतना ही? जंगल… सब कुछ याद रखता है… तुम भी… जल्द ही…"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "기억? 이 끔찍한 비극의 진실을 기필코 밝혀낼 거야!",
						"english": "Memory? I will surely uncover the truth behind this terrible tragedy!",
						"japanese": "記憶？この忌まわしき悲劇の真実、必ず突き止めてみせる！",
						"chinese": "记忆？这可怕悲剧的真相，我定会查明！",
						"french": "Mémoire ? Je découvrirai la vérité de cette terrible tragédie !",
						"spanish": "¿Recuerdo? ¡Descubriré la verdad de esta terrible tragedia!",
						"vietnamese": "Ký ức? Ta nhất định sẽ phơi bày sự thật đằng sau bi kịch kinh hoàng này!",
						"thai": "ความทรงจำหรือ? ข้าจะเปิดเผยความจริงของโศกนาฏกรรมอันน่าสยดสยองนี้ให้ได้!",
						"hindi": "याददाश्त? मैं निश्चित रूप से इस भयानक त्रासदी के सच का पता लगाऊँगा!"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "'치유'라는 가면 아래 숨겨진 숲의 민낯. 그것은 구원이 아닌, 탐욕스러운 포식이었다. 탐험대는 한 층 더 깊은 진실을 향해 나아간다.",
						"english": "The forest's true face, hidden beneath the mask of 'healing'. It was not salvation, but greedy predation. The expedition presses on, towards a deeper truth.",
						"japanese": "『癒し』という仮面の下に隠された森の素顔。それは救済ではなく、貪欲な捕食だった。探検隊は、さらなる深き真実へと進む。",
						"chinese": "隐藏在“治愈”面具下的森林真面目。那不是救赎，而是贪婪的捕食。探险队继续深入，探寻更深的真相。",
						"french": "Sous le masque de la 'guérison' se cachait le vrai visage de la forêt. Ce n'était pas le salut, mais une prédation avide. L'expédition s'enfonce vers une vérité plus profonde.",
						"spanish": "El verdadero rostro del bosque, oculto bajo la máscara de la 'sanación'. No era salvación, sino una depredación codiciosa. La expedición avanza hacia una verdad más profunda.",
						"vietnamese": "Khuôn mặt thật của khu rừng, ẩn dưới lớp mặt nạ 'chữa lành'. Đó không phải là sự cứu rỗi, mà là sự săn mồi tham lam. Đoàn thám hiểm tiến sâu hơn, hướng tới một sự thật sâu sắc hơn.",
						"thai": "โฉมหน้าที่แท้จริงของป่า ซ่อนอยู่ใต้หน้ากากแห่ง 'การเยียวยา' มันไม่ใช่การไถ่บาป หากแต่เป็นการล่าอย่างละโมบ คณะสำรวจมุ่งหน้าต่อไป สู่ความจริงที่ลึกซึ้งยิ่งกว่า",
						"hindi": "'उपचार' के मुखौटे के नीचे छिपा जंगल का असली चेहरा। यह मोक्ष नहीं, बल्कि एक लालची शिकार था। अभियान एक गहरे सत्य की ओर बढ़ता है।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "뒤틀린 생명력이 탐험대를 집어삼킨다.",
						"english": "Twisted vitality consumes the expedition.",
						"japanese": "歪んだ生命力が探検隊を飲み込む。",
						"chinese": "扭曲的生命力吞噬了探险队。",
						"french": "Une vitalité tordue engloutit l'expédition.",
						"spanish": "Una fuerza vital retorcida engulle a la expedición.",
						"vietnamese": "Sức sống méo mó nuốt chửng đoàn thám hiểm.",
						"thai": "พลังชีวิตที่บิดเบี้ยวกลืนกินคณะสำรวจ",
						"hindi": "विकृत जीवन शक्ति अभियान को निगल जाती है।"
					}
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "나약한 것들. 진정한 생명의 힘을 깨닫지 못하는군.",
						"english": "Weaklings. You fail to grasp the true power of life.",
						"japanese": "弱き者よ。真の生命の力を悟らぬか。",
						"chinese": "弱者。你们未能领悟生命的真正力量。",
						"french": "Faibles créatures. Vous ne comprenez pas la véritable puissance de la vie.",
						"spanish": "Débiles. No comprenden el verdadero poder de la vida.",
						"vietnamese": "Những kẻ yếu ớt. Ngươi không nhận ra sức mạnh thật sự của sự sống.",
						"thai": "พวกอ่อนแอ ไม่เข้าใจพลังที่แท้จริงของชีวิต",
						"hindi": "कमजोरों। तुम जीवन की सच्ची शक्ति को नहीं समझते।"
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "젠장… 다시… 반드시 돌아온다!",
						"english": "Damn it... I'll be back... I will return!",
						"japanese": "くそっ… また… 必ず戻ってくる！",
						"chinese": "该死…… 再来…… 我一定会回来的！",
						"french": "Maudit... Encore... Je reviendrai, c'est promis !",
						"spanish": "Maldita sea... Otra vez... ¡Regresaré, cueste lo que cueste!",
						"vietnamese": "Chết tiệt... Lại nữa... Ta nhất định sẽ quay lại!",
						"thai": "ให้ตายสิ... อีกครั้ง... ข้าจะต้องกลับมาให้ได้!",
						"hindi": "धिक्कार है... फिर से... मैं निश्चित रूप से वापस आऊँगा!"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"숲은 속삭인다. 생명은 영원하다고.",
			"상처 입은 자여, 내 품으로 오라.",
			"브라이어는 그 속삭임을 '구원'이라 했다.",
			"허나 구원은 종종, 가장 잔인한 함정의 다른 이름이다.",
			"이 달콤한 거짓에 속아 넘어갈 것인가?"
		],
		"english": [
			"The forest whispers. Life is eternal.",
			"Wounded one, come to my embrace.",
			"Briar called that whisper 'salvation.'",
			"Yet salvation is often just another name for the cruelest trap.",
			"Will you be fooled by this sweet lie?"
		],
		"japanese": [
			"森がささやく。命は永遠だと。",
			"傷ついた者よ、我が腕の中へ来い。",
			"ブライアーはそのささやきを「救済」と呼んだ。",
			"しかし、救済はしばしば、最も残酷な罠の別の名に過ぎない。",
			"この甘い嘘に騙されるのか？"
		],
		"chinese": [
			"森林在低语。生命是永恒的。",
			"受伤之人，来我怀抱。",
			"布莱尔称那低语为“救赎”。",
			"然而，救赎往往是残酷陷阱的另一个名字。",
			"你会受这甜蜜谎言的欺骗吗？"
		],
		"french": [
			"La forêt murmure. La vie est éternelle.",
			"Âme blessée, viens dans mes bras.",
			"Briar appela ce murmure « salut ».",
			"Pourtant, le salut est souvent un autre nom pour le piège le plus cruel.",
			"Succomberez-vous à ce doux mensonge ?"
		],
		"spanish": [
			"El bosque susurra. La vida es eterna.",
			"Herido, ven a mi abrazo.",
			"Briar llamó a ese susurro \"salvación\".",
			"Sin embargo, la salvación es a menudo otro nombre para la trampa más cruel.",
			"¿Te dejarás engañar por esta dulce mentira?"
		],
		"vietnamese": [
			"Rừng thì thầm. Sự sống là vĩnh cửu.",
			"Hỡi kẻ bị thương, hãy đến với ta.",
			"Briar gọi tiếng thì thầm đó là 'sự cứu rỗi'.",
			"Tuy nhiên, sự cứu rỗi thường là một tên gọi khác của cái bẫy tàn nhẫn nhất.",
			"Bạn có bị lừa bởi lời nói dối ngọt ngào này không?"
		],
		"thai": [
			"ป่ากระซิบ ชีวิตนั้นเป็นนิรันดร์",
			"ผู้บาดเจ็บเอ๋ย จงมาสู่อ้อมกอดของข้า",
			"ไบรเออร์เรียกเสียงกระซิบนั้นว่า 'ความรอด'",
			"ทว่าความรอดมักเป็นอีกชื่อหนึ่งของกับดักที่โหดร้ายที่สุด",
			"เจ้าจะถูกหลอกด้วยคำโกหกอันหอมหวานนี้หรือไม่?"
		],
		"hindi": [
			"जंगल फुसफुसाता है। जीवन शाश्वत है।",
			"हे घायल, मेरी बाहों में आओ।",
			"ब्रायर ने उस फुसफुसाहट को 'मुक्ति' कहा।",
			"फिर भी, मुक्ति अक्सर सबसे क्रूर जाल का दूसरा नाम है।",
			"क्या तुम इस मीठे झूठ से मूर्ख बनोगे?"
		]
	}
} as const;
