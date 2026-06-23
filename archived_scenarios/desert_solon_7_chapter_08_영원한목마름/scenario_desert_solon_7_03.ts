export const scenario_desert_solon_7_03 = {
	"scenario_id": "desert_solon_7_03",
	"order": 3,
	"act": "rising",
	"theme": "desert",
	"actors": {
		"kasai": {
			"id": "mon_8050c8ca-5715-4e7d-895e-5bc029d55fcf",
			"name": {
				"korean": "카사이",
				"english": "Kasai",
				"japanese": "カサイ",
				"chinese": "卡赛",
				"french": "Kasai",
				"spanish": "Kasai",
				"vietnamese": "Kasai",
				"thai": "คาไซ",
				"hindi": "कसाई"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/c9ddd314-36fb-4636-cbe6-35d8f6f98900/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a00fae8a-8a27-4895-d62c-a0c88456ff00/public"
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
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "사막 한가운데, 죽은 듯 고요한 마을이 있었다.",
						"english": "In the middle of the desert, there was a village silent as death.",
						"japanese": "砂漠の真ん中に、死んだように静かな村があった。",
						"chinese": "在沙漠中央，有一个死寂般的村庄。",
						"french": "Au milieu du désert, il y avait un village silencieux comme la mort.",
						"spanish": "En medio del desierto, había un pueblo silencioso como la muerte.",
						"vietnamese": "Giữa sa mạc, có một ngôi làng im lặng như chết.",
						"thai": "กลางทะเลทราย มีหมู่บ้านที่เงียบสงัดราวกับความตาย",
						"hindi": "रेगिस्तान के बीच में, एक गाँव था जो मौत की तरह शांत था।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "여기가 솔론의 '평화'가 닿았다는 곳인가?",
						"english": "Is this the place where Solon's 'peace' supposedly reached?",
						"japanese": "ここがソロンの「平和」が訪れたという場所か？",
						"chinese": "这里就是索伦的“和平”所及之处吗？",
						"french": "C'est donc ici que la « paix » de Solon aurait atteint ?",
						"spanish": "¿Es este el lugar al que la \"paz\" de Solón supuestamente llegó?",
						"vietnamese": "Đây có phải là nơi mà 'hòa bình' của Solon được cho là đã đến?",
						"thai": "นี่คือที่ที่ 'สันติภาพ' ของโซลอนกล่าวกันว่ามาถึงแล้วหรือ?",
						"hindi": "क्या यह वही जगह है जहाँ सोलोन की 'शांति' पहुँचने की बात कही गई थी?"
					},
					"type": "speech"
				},
				{
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"speaker": "kasai"
				},
				{
					"speaker": "kasai",
					"emotion": "sad",
					"content": {
						"korean": "…살아있나? 다른 곳에서 온 사람들은.",
						"english": "...Are they alive? The people from other places.",
						"japanese": "…生きているのか？ 他の場所から来た人々は。",
						"chinese": "……还活着吗？那些从别处来的人。",
						"french": "...Sont-ils vivants ? Les gens venus d'ailleurs.",
						"spanish": "...¿Están vivos? La gente de otros lugares.",
						"vietnamese": "...Họ còn sống không? Những người từ nơi khác đến.",
						"thai": "...พวกเขายังมีชีวิตอยู่ไหม? ผู้คนจากที่อื่นน่ะ",
						"hindi": "...क्या वे ज़िंदा हैं? दूसरी जगहों से आए लोग।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "당신은?",
						"english": "And you?",
						"japanese": "あなたは？",
						"chinese": "你是？",
						"french": "Et vous ?",
						"spanish": "¿Y tú?",
						"vietnamese": "Còn bạn?",
						"thai": "แล้วคุณล่ะ?",
						"hindi": "और तुम?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "카사이. 이젠 죽어가는 이름일 뿐.",
						"english": "Kasai. Just a dying name now.",
						"japanese": "カサイ。今はただ死にゆく名に過ぎない。",
						"chinese": "卡萨伊。现在，只是一个垂死的名字。",
						"french": "Kasaï. Plus qu'un nom mourant, maintenant.",
						"spanish": "Kasai. Solo un nombre moribundo ahora.",
						"vietnamese": "Kasai. Bây giờ chỉ là một cái tên đang chết.",
						"thai": "คาซาอิ ตอนนี้ก็เป็นแค่ชื่อที่กำลังจะตาย",
						"hindi": "कासाई। अब बस एक मरता हुआ नाम।"
					},
					"type": "speech",
					"speaker": "kasai",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "어서 도망쳐요. 이곳은… 살아있는 지옥이야.",
						"english": "Run! This place... it's a living hell.",
						"japanese": "早く逃げて！ここは…生き地獄よ。",
						"chinese": "快逃！这里是……人间地狱。",
						"french": "Fuyez vite ! Cet endroit… c'est un enfer vivant.",
						"spanish": "¡Huye rápido! Este lugar… es un infierno viviente.",
						"vietnamese": "Chạy đi! Nơi này… là địa ngục trần gian.",
						"thai": "หนีไปเร็ว! ที่นี่…คือนรกบนดินชัดๆ",
						"hindi": "भागो! यह जगह... जीती-जागती नरक है।"
					},
					"emotion": "sad",
					"speaker": "kasai"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "kasai",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						2,
						3
					]
				},
				{
					"content": {
						"korean": "봐요. 이게 솔론이 말하는 '평화'야.",
						"english": "Look. This is Solon's 'peace'.",
						"japanese": "見て。これがソロが言う『平和』よ。",
						"chinese": "看啊。这就是索伦所说的‘和平’。",
						"french": "Regardez. C'est ça, la 'paix' selon Solon.",
						"spanish": "Mira. Esta es la 'paz' de Solon.",
						"vietnamese": "Nhìn đi. Đây là 'hòa bình' mà Solon nói đó.",
						"thai": "ดูสิ. นี่แหละ 'สันติภาพ' ที่โซลอนพูดถึง",
						"hindi": "देखो। यही है सोलोन की 'शांति'।"
					},
					"type": "speech",
					"speaker": "kasai",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "마을 사람들은 눈빛조차 없었다. 움직임 없는 인형처럼.",
						"english": "The villagers had no light in their eyes. Like motionless dolls.",
						"japanese": "村人たちは、目に光さえなかった。動きのない人形のように。",
						"chinese": "村民们眼中甚至没有一丝光彩。像一具具纹丝不动的玩偶。",
						"french": "Les villageois n'avaient aucune lueur dans les yeux. Comme des poupées immobiles.",
						"spanish": "Los aldeanos no tenían ni brillo en los ojos. Como muñecos sin vida.",
						"vietnamese": "Dân làng thậm chí không có ánh mắt. Giống như những con búp bê bất động.",
						"thai": "ชาวบ้านไม่มีแม้แต่แววตา เหมือนตุ๊กตาที่ไร้การเคลื่อนไหว",
						"hindi": "गाँव वालों की आँखों में रोशनी तक नहीं थी। बेजान गुड़ियों की तरह।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "대체 무슨 짓을….",
						"english": "What in the world have you done...?",
						"japanese": "一体何を…。",
						"chinese": "你到底做了什么……",
						"french": "Qu'avez-vous fait, bon sang…?",
						"spanish": "¿Qué demonios has hecho...?",
						"vietnamese": "Rốt cuộc đã làm gì vậy…?",
						"thai": "นี่มันเกิดอะไรขึ้นเนี่ย…",
						"hindi": "आखिर क्या कर दिया है...।"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "생기를 빼앗고, 고통을 멈추는 것. 그게 솔론의 구원이래.",
						"english": "Taking away their vitality, stopping their pain. That's Solon's salvation, they say.",
						"japanese": "生気を奪い、苦しみを止めること。それがソロの救済だとか。",
						"chinese": "剥夺生机，停止痛苦。据说那就是索伦的救赎。",
						"french": "Leur arracher leur vitalité, arrêter leur souffrance. C'est ça, le salut de Solon, paraît-il.",
						"spanish": "Quitarles la vitalidad, detener su dolor. Eso es la salvación de Solon, dicen.",
						"vietnamese": "Lấy đi sinh khí, ngừng mọi đau đớn. Đó là sự cứu rỗi của Solon, họ nói thế.",
						"thai": "การพรากชีวิตไป หยุดยั้งความเจ็บปวด นั่นคือการไถ่บาปของโซลอนว่างั้น",
						"hindi": "जीवन शक्ति छीन लेना, दर्द को रोक देना। कहते हैं, यही सोलोन का मोक्ष है।"
					},
					"type": "speech",
					"speaker": "kasai",
					"emotion": "sad"
				},
				{
					"speaker": "kasai",
					"emotion": "angry",
					"content": {
						"korean": "살아있는 채로 죽어가는 고통. 그게… 진정한 평화라니.",
						"english": "The pain of dying while still alive. That's... true peace?",
						"japanese": "生きたまま死んでいく苦痛。それが…真の平和だなんて。",
						"chinese": "在活着的时候慢慢死去。那就是……真正的和平吗？",
						"french": "La douleur de mourir tout en étant vivant. C'est ça… la vraie paix, vraiment ?",
						"spanish": "El dolor de morir estando vivo. ¿Eso es… la verdadera paz?",
						"vietnamese": "Cái đau đớn của việc chết dần khi vẫn còn sống. Đó… lại là hòa bình thực sự sao?",
						"thai": "ความเจ็บปวดของการตายทั้งที่ยังมีชีวิตอยู่ นั่นคือ…สันติภาพที่แท้จริงงั้นเหรอ",
						"hindi": "ज़िंदा रहते हुए मरने का दर्द। यही... सच्ची शांति है?"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "kasai",
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"spot": [
						4,
						2
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "솔론은… 가끔 고통스러워 보여요.",
						"english": "Solon… sometimes looks like he's in pain.",
						"japanese": "ソロは…時々苦しそうに見えるわ。",
						"chinese": "索伦……有时看起来很痛苦。",
						"french": "Solon… a parfois l'air de souffrir.",
						"spanish": "Solon… a veces parece sufrir.",
						"vietnamese": "Solon… đôi khi trông rất đau khổ.",
						"thai": "โซลอน…บางครั้งก็ดูเหมือนเจ็บปวดนะ",
						"hindi": "सोलोन... कभी-कभी दर्द में लगता है।"
					},
					"emotion": "sad",
					"speaker": "kasai"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "고통스럽다고?",
						"english": "In pain?",
						"japanese": "苦しそうに？",
						"chinese": "痛苦？",
						"french": "Il souffre ?",
						"spanish": "¿Sufriendo?",
						"vietnamese": "Đau khổ sao?",
						"thai": "เจ็บปวดเหรอ?",
						"hindi": "दर्द में?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "허공을 응시하며, 마치 자기 자신과 싸우는 것처럼.",
						"english": "Staring into space, as if fighting with himself.",
						"japanese": "虚空を見つめ、まるで自分自身と戦っているかのように。",
						"chinese": "他凝视着虚空，仿佛在与自己搏斗。",
						"french": "Il fixe le vide, comme s'il se battait contre lui-même.",
						"spanish": "Mirando al vacío, como si luchara consigo mismo.",
						"vietnamese": "Nhìn chằm chằm vào hư không, cứ như đang đấu tranh với chính mình.",
						"thai": "จ้องมองความว่างเปล่า เหมือนกำลังต่อสู้กับตัวเอง",
						"hindi": "खाली जगह को घूरते हुए, मानो खुद से लड़ रहा हो।"
					},
					"emotion": "base",
					"speaker": "kasai"
				},
				{
					"content": {
						"korean": "그도… 완벽하게 평화롭지는 않다는 거겠지.",
						"english": "So he's not… perfectly at peace either, then.",
						"japanese": "彼も…完璧に平和ではないってことね。",
						"chinese": "看来他……也并非完全平静。",
						"french": "Donc, lui non plus… n'est pas parfaitement en paix.",
						"spanish": "Entonces, él tampoco… está completamente en paz.",
						"vietnamese": "Vậy là anh ta… cũng không hoàn toàn bình yên.",
						"thai": "เขาก็คง…ไม่ได้สงบสุขสมบูรณ์แบบสินะ",
						"hindi": "इसका मतलब है कि वह भी... पूरी तरह से शांत नहीं है।"
					},
					"type": "speech",
					"speaker": "kasai",
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "그의 평화는… 우리에게 고통만 줘.",
						"english": "His peace… only brings us pain.",
						"japanese": "彼の平和は…我々に苦痛しか与えない。",
						"chinese": "他的和平…只带给我们痛苦。",
						"french": "Sa paix… ne nous apporte que souffrance.",
						"spanish": "Su paz… solo nos trae dolor.",
						"vietnamese": "Bình yên của hắn… chỉ mang lại đau khổ cho chúng ta.",
						"thai": "สันติของเขา…มีแต่ความเจ็บปวดให้เรา",
						"hindi": "उसकी शांति… हमें केवल पीड़ा देती है।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "제발, 멈춰줘요. 이 고통을.",
						"english": "Please, stop this pain.",
						"japanese": "お願い、この苦痛を止めて。",
						"chinese": "拜托，停止这痛苦。",
						"french": "S'il vous plaît, arrêtez cette souffrance.",
						"spanish": "Por favor, detén este dolor.",
						"vietnamese": "Làm ơn, hãy dừng nỗi đau này lại.",
						"thai": "ได้โปรด หยุดความเจ็บปวดนี้ด้วย",
						"hindi": "कृपया, इस पीड़ा को रोकें।"
					},
					"emotion": "sad",
					"speaker": "kasai"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						3
					],
					"speaker": "kasai"
				},
				{
					"emotion": "sad",
					"speaker": "kasai",
					"type": "speech",
					"content": {
						"korean": "이젠… 돌아갈 수 없어.",
						"english": "Now… we can't go back.",
						"japanese": "もう…引き返せない。",
						"chinese": "现在…回不去了。",
						"french": "Maintenant… nous ne pouvons plus reculer.",
						"spanish": "Ahora… no podemos volver.",
						"vietnamese": "Giờ thì… không thể quay lại được nữa.",
						"thai": "ตอนนี้…กลับไปไม่ได้แล้ว",
						"hindi": "अब… हम वापस नहीं जा सकते।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "무슨 소리야?",
						"english": "What do you mean?",
						"japanese": "何のことだ？",
						"chinese": "什么意思？",
						"french": "Que veux-tu dire ?",
						"spanish": "¿Qué quieres decir?",
						"vietnamese": "Ý ngươi là gì?",
						"thai": "คุณหมายความว่าอะไร",
						"hindi": "तुम्हारा क्या मतलब है?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "솔론의 평화는 모든 것을 멈춰. 살아있는 것까지도.",
						"english": "Solon's peace stops everything. Even living things.",
						"japanese": "ソロンの平和は全てを止める。生きているものまで。",
						"chinese": "索伦的和平让一切停止。甚至包括生命。",
						"french": "La paix de Solon arrête tout. Même ce qui est vivant.",
						"spanish": "La paz de Solon detiene todo. Incluso lo que vive.",
						"vietnamese": "Bình yên của Solon khiến mọi thứ dừng lại. Ngay cả sự sống.",
						"thai": "สันติของโซลอนหยุดทุกสิ่ง แม้กระทั่งสิ่งมีชีวิต",
						"hindi": "सोलोन की शांति सब कुछ रोक देती है। जीवित चीजों को भी।"
					},
					"emotion": "angry",
					"speaker": "kasai"
				},
				{
					"speaker": "kasai",
					"emotion": "sad",
					"content": {
						"korean": "우린 이미 너무 깊이 들어왔어.",
						"english": "We've already come too far.",
						"japanese": "我々はもう深入りしすぎた。",
						"chinese": "我们已经深入太多了。",
						"french": "Nous sommes déjà allés trop loin.",
						"spanish": "Ya hemos ido demasiado lejos.",
						"vietnamese": "Chúng ta đã đi quá sâu rồi.",
						"thai": "เราเข้ามาลึกเกินไปแล้ว",
						"hindi": "हम पहले ही बहुत अंदर आ चुके हैं।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "멈추지 않아. 반드시 솔론을 막을 거야.",
						"english": "I won't stop. I'll definitely stop Solon.",
						"japanese": "止まらない。必ずソロンを止める。",
						"chinese": "我不会停下。我一定会阻止索伦。",
						"french": "Je ne m'arrêterai pas. J'arrêterai Solon, c'est certain.",
						"spanish": "No me detendré. Detendré a Solon a toda costa.",
						"vietnamese": "Ta sẽ không dừng lại. Ta nhất định sẽ ngăn chặn Solon.",
						"thai": "ฉันจะไม่หยุด ฉันจะหยุดโซลอนให้ได้",
						"hindi": "मैं रुकूंगा नहीं। मैं सोलोन को अवश्य रोकूंगा।"
					},
					"type": "speech"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "거대한 그림자가 모든 것을 집어삼켰다.",
						"english": "A colossal shadow swallowed everything.",
						"japanese": "巨大な影が全てを飲み込んだ。",
						"chinese": "巨大的阴影吞噬了一切。",
						"french": "Une ombre colossale a tout englouti.",
						"spanish": "Una sombra colosal lo devoró todo.",
						"vietnamese": "Một bóng tối khổng lồ nuốt chửng mọi thứ.",
						"thai": "เงามหึมากลืนกินทุกสิ่ง",
						"hindi": "एक विशाल परछाई ने सब कुछ निगल लिया।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "어리석은 자. 영원한 평화는… 움직임을 멈춰야 온다.",
						"english": "Fool. Eternal peace… comes when all movement ceases.",
						"japanese": "愚か者め。永遠の平和は…動きを止めねば訪れない。",
						"chinese": "愚蠢的家伙。永恒的和平……唯有停止行动才能降临。",
						"french": "Imbécile. La paix éternelle… ne vient que lorsque tout mouvement cesse.",
						"spanish": "Necio. La paz eterna… llega cuando todo movimiento cesa.",
						"vietnamese": "Kẻ ngốc. Hòa bình vĩnh cửu… chỉ đến khi mọi chuyển động dừng lại.",
						"thai": "เจ้าโง่. สันติภาพนิรันดร์…จะมาถึงเมื่อการเคลื่อนไหวทั้งหมดหยุดลง",
						"hindi": "मूर्ख। शाश्वत शांति… तभी आती है जब सारी हरकत रुक जाती है।"
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…다시 일어설 거야.",
						"english": "…I will rise again.",
						"japanese": "…また立ち上がるだろう。",
						"chinese": "……我还会再站起来的。",
						"french": "…Je me relèverai.",
						"spanish": "…Me levantaré de nuevo.",
						"vietnamese": "…Ta sẽ đứng dậy lần nữa.",
						"thai": "…ข้าจะลุกขึ้นอีกครั้ง",
						"hindi": "…मैं फिर उठ खड़ा होऊँगा।"
					}
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "크윽… 그분도… 같은 고통을…",
						"english": "Ugh… He too… the same pain…",
						"japanese": "くっ…あの方も…同じ苦痛を…",
						"chinese": "呃……祂也……同样的痛苦……",
						"french": "Argh… Lui aussi… la même douleur…",
						"spanish": "Ugh… Él también… el mismo dolor…",
						"vietnamese": "Khụ… Ngài ấy cũng… nỗi đau tương tự…",
						"thai": "อึก…พระองค์ก็…ความเจ็บปวดเดียวกัน…",
						"hindi": "उफ़… उन्हें भी… वही दर्द…"
					},
					"emotion": "sad",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "무슨 소리야?",
						"english": "What are you talking about?",
						"japanese": "何を言ってるんだ？",
						"chinese": "你在说什么？",
						"french": "Qu'est-ce que tu racontes ?",
						"spanish": "¿De qué estás hablando?",
						"vietnamese": "Ngươi đang nói gì vậy?",
						"thai": "พูดเรื่องอะไรน่ะ?",
						"hindi": "क्या कह रहे हो?"
					},
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "쓰러진 그림자 너머로, 더욱 깊은 사막의 그림자가 드리웠다.",
						"english": "Beyond the fallen shadow, a deeper desert shadow loomed.",
						"japanese": "倒れた影の向こうには、さらに深い砂漠の影が迫っていた。",
						"chinese": "倒下的阴影之外，更深的沙漠阴影笼罩而来。",
						"french": "Au-delà de l'ombre tombée, une ombre désertique plus profonde s'étendait.",
						"spanish": "Más allá de la sombra caída, una sombra desértica más profunda se cernía.",
						"vietnamese": "Vượt qua bóng tối ngã xuống, một bóng tối sa mạc sâu thẳm hơn bao trùm.",
						"thai": "เหนือเงาที่ล้มลง มีเงาทะเลทรายที่ลึกซึ้งกว่าทอดทับเข้ามา",
						"hindi": "गिरी हुई परछाई से परे, एक गहरी रेगिस्तानी परछाई छा गई।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "솔론의 평화는… 아직 끝나지 않았다.",
						"english": "Solon's peace… is not over yet.",
						"japanese": "ソロンの平和は…まだ終わっていない。",
						"chinese": "索隆的和平……尚未结束。",
						"french": "La paix de Solon… n'est pas encore terminée.",
						"spanish": "La paz de Solon… aún no ha terminado.",
						"vietnamese": "Hòa bình của Solon… vẫn chưa kết thúc.",
						"thai": "สันติภาพของโซลอน…ยังไม่จบลง",
						"hindi": "सोलोन की शांति… अभी खत्म नहीं हुई है।"
					}
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "죽음만이 숨쉬는 골목 끝. 거대한 그림자가 서 있었다.",
						"english": "At the end of an alley where only death breathed, a giant shadow stood.",
						"japanese": "死だけが息づく路地の奥。巨大な影が立っていた。",
						"chinese": "在只有死亡气息的小巷尽头，一个巨大的身影站立着。",
						"french": "Au bout de l'allée où seule la mort respirait, une ombre gigantesque se tenait.",
						"spanish": "Al final de un callejón donde solo respiraba la muerte, una sombra gigantesca se alzaba.",
						"vietnamese": "Cuối con hẻm chỉ có cái chết ngự trị, một cái bóng khổng lồ đứng đó.",
						"thai": "สุดปลายซอยที่ความตายหายใจอยู่เท่านั้น มีเงาขนาดใหญ่ยืนอยู่",
						"hindi": "एक ऐसी गली के अंत में जहाँ केवल मृत्यु साँस लेती थी, एक विशाल छाया खड़ी थी।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "멈춰라. 이곳의 평화를 방해하지 마라.",
						"english": "Stop. Do not disturb the peace here.",
						"japanese": "止まれ。ここの平和を乱すな。",
						"chinese": "停下。不要打扰这里的和平。",
						"french": "Arrête. Ne trouble pas la paix de ce lieu.",
						"spanish": "Detente. No perturbes la paz de este lugar.",
						"vietnamese": "Dừng lại. Đừng quấy rầy sự bình yên nơi đây.",
						"thai": "หยุด อย่ารบกวนความสงบสุขที่นี่",
						"hindi": "रुको। यहाँ की शांति भंग मत करो।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "네가 솔론의 부하인가?",
						"english": "Are you Solon's subordinate?",
						"japanese": "お前がソロンの部下か？",
						"chinese": "你是索伦的部下吗？",
						"french": "Es-tu un subordonné de Solon ?",
						"spanish": "¿Eres un subordinado de Solon?",
						"vietnamese": "Ngươi là thuộc hạ của Solon à?",
						"thai": "เจ้าเป็นลูกน้องของโซลอนหรือ",
						"hindi": "क्या तुम सोलोन के अधीनस्थ हो?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "내 이름은… 중요하지 않다. 그분의 뜻대로, 모두 멈출 것이다.",
						"english": "My name... it doesn't matter. By His will, all will cease.",
						"japanese": "私の名前は…重要ではない。あの方の御心のままに、全ては止まるだろう。",
						"chinese": "我的名字……不重要。遵从祂的旨意，一切都将停止。",
						"french": "Mon nom… n'a pas d'importance. Selon Sa volonté, tout s'arrêtera.",
						"spanish": "Mi nombre… no importa. Por Su voluntad, todo se detendrá.",
						"vietnamese": "Tên của ta… không quan trọng. Theo ý Ngài, mọi thứ sẽ dừng lại.",
						"thai": "ชื่อของข้า...ไม่สำคัญ ตามพระประสงค์ของพระองค์ ทุกสิ่งจะหยุดลง",
						"hindi": "मेरा नाम… मायने नहीं रखता। उनकी इच्छा से, सब कुछ रुक जाएगा।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "이게 평화라고? 웃기지 마!",
						"english": "This is peace? Don't make me laugh!",
						"japanese": "これが平和だと？ふざけるな！",
						"chinese": "这就是和平？别开玩笑了！",
						"french": "C'est ça la paix ? Ne me faites pas rire !",
						"spanish": "¿Esto es paz? ¡No me hagas reír!",
						"vietnamese": "Đây là hòa bình ư? Đừng có đùa!",
						"thai": "นี่คือสันติภาพงั้นเหรอ? อย่ามาตลกน่า!",
						"hindi": "ये शांति है? हँसाओ मत!"
					},
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"사막 깊숙한 곳. 솔론의 '평화'가 닿았다는 마을.",
			"그곳에서 생명은 멈췄다.",
			"희망도, 절규도 없이 메말라가는 사람들.",
			"이것이 솔론의 구원인가?",
			"그리고 진실은, 예상보다 훨씬 잔인했다."
		],
		"english": [
			"Deep in the desert. A village where Solon's 'peace' was said to have reached.",
			"There, life ceased.",
			"People withering away, without hope or screams.",
			"Is this Solon's salvation?",
			"And the truth was far crueler than expected."
		],
		"japanese": [
			"砂漠の奥深く。「ソロンの平和」が訪れたとされる村。",
			"そこで、命は止まった。",
			"希望も、絶叫もなく、枯れていく人々。",
			"これがソロンの救いなのか？",
			"そして真実は、予想よりもはるかに残酷だった。"
		],
		"chinese": [
			"沙漠深处。一个据说被索伦的“和平”触及的村庄。",
			"在那里，生命停止了。",
			"人们在枯萎，没有希望，也没有绝望的呼喊。",
			"这就是索伦的救赎吗？",
			"而真相，远比预想的要残忍。"
		],
		"french": [
			"Au plus profond du désert. Un village que la « paix » de Solon aurait atteint.",
			"Là, la vie s'est arrêtée.",
			"Des gens qui se dessèchent, sans espoir ni cris.",
			"Est-ce le salut de Solon ?",
			"Et la vérité était bien plus cruelle que prévu."
		],
		"spanish": [
			"En lo profundo del desierto. Un pueblo al que la \"paz\" de Solón supuestamente llegó.",
			"Allí, la vida cesó.",
			"Gente marchitándose, sin esperanza ni gritos.",
			"¿Es esta la salvación de Solón?",
			"Y la verdad era mucho más cruel de lo esperado."
		],
		"vietnamese": [
			"Sâu trong sa mạc. Một ngôi làng mà 'hòa bình' của Solon được cho là đã đến.",
			"Ở đó, sự sống đã ngừng lại.",
			"Con người khô héo, không hy vọng, không tiếng thét.",
			"Đây có phải là sự cứu rỗi của Solon?",
			"Và sự thật còn tàn nhẫn hơn nhiều so với dự kiến."
		],
		"thai": [
			"ลึกเข้าไปในทะเลทราย หมู่บ้านที่ 'สันติภาพ' ของโซลอนกล่าวกันว่ามาถึงแล้ว",
			"ณ ที่นั่น ชีวิตได้หยุดลงแล้ว",
			"ผู้คนร่วงโรยไป โดยปราศจากความหวังหรือเสียงกรีดร้องใดๆ",
			"นี่คือความรอดของโซลอนหรือ?",
			"และความจริงก็โหดร้ายกว่าที่คาดคิดไว้มาก"
		],
		"hindi": [
			"रेगिस्तान की गहराई में। एक गाँव जहाँ सोलोन की 'शांति' पहुँचने की बात कही गई थी।",
			"वहाँ, जीवन थम गया।",
			"लोग सूख रहे हैं, बिना आशा या चीखों के।",
			"क्या यह सोलोन का मोक्ष है?",
			"और सच्चाई उम्मीद से कहीं ज़्यादा क्रूर थी।"
		]
	}
} as const;
