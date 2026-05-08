export const scenario_ExArchive_V0_02 = {
	"scenario_id": "ExArchive_V0_02",
	"order": 2,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"nyxaria": {
			"id": "mon_ed20a1cc-edfe-4cd4-99ba-652cc7bf38f8",
			"name": {
				"korean": "닉사리아",
				"english": "Nyxaria",
				"japanese": "ニクサリア",
				"chinese": "尼克萨莉亚",
				"french": "Nyxaria",
				"spanish": "Nixaria",
				"vietnamese": "Nyxaria",
				"thai": "นิกซาเรีย",
				"hindi": "निक्सारिया"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/4f5d3331-24f0-4a5d-9150-06e65c767300/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/bb20e308-3a0a-4436-9ded-984b387dc100/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "낡은 골목 한쪽, 벤치에 앉은 노인들이 미동도 없다.",
						"english": "In an old alley, old people on a bench are motionless.",
						"japanese": "古い路地の一角、ベンチに座った老人たちが微動だにしない。",
						"chinese": "老旧小巷一隅，长椅上的老人们一动不动。",
						"french": "Dans une vieille ruelle, des vieillards assis sur un banc sont immobiles.",
						"spanish": "En un callejón viejo, los ancianos sentados en un banco están inmóviles.",
						"vietnamese": "Trong một con hẻm cũ, những người già ngồi trên ghế đá bất động.",
						"thai": "ในซอยเก่า ผู้สูงอายุนั่งนิ่งอยู่บนม้านั่ง",
						"hindi": "एक पुरानी गली में, बेंच पर बैठे बुज़ुर्ग बिल्कुल हिल नहीं रहे।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "...돌이 되어버린 건가?",
						"english": "...Have they turned to stone?",
						"japanese": "...石になってしまったのか？",
						"chinese": "...难道他们变成了石头？",
						"french": "...Sont-ils devenus de pierre ?",
						"spanish": "¿Se habrán convertido en piedra?",
						"vietnamese": "...Họ biến thành đá rồi sao?",
						"thai": "...กลายเป็นหินไปแล้วหรือ?",
						"hindi": "...क्या वे पत्थर बन गए हैं?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "그때, 노인들을 감싼 일그러진 그림자가 솟아올랐다.",
						"english": "Then, a distorted shadow enveloping the old people rose.",
						"japanese": "その時、老人たちを包み込む歪んだ影が立ち上がった。",
						"chinese": "就在那时，一道扭曲的影子包围着老人们升了起来。",
						"french": "Alors, une ombre déformée enveloppant les vieillards s'éleva.",
						"spanish": "Entonces, una sombra distorsionada que envolvía a los ancianos se levantó.",
						"vietnamese": "Bỗng nhiên, một bóng đen méo mó bao trùm lấy những người già và trỗi dậy.",
						"thai": "ทันใดนั้น เงาบิดเบี้ยวที่ห่อหุ้มผู้สูงอายุไว้ก็ผุดขึ้นมา",
						"hindi": "तभी, बुज़ुर्गों को घेरे हुए एक विकृत परछाई ऊपर उठी।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"speaker": "nyxaria",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						4,
						2
					],
					"action": "enter"
				},
				{
					"content": {
						"korean": "이런 게 이 동네 곳곳에 있어. 너무 오래 앉아 있으면 안 돼.",
						"english": "Things like this are everywhere in this town. Don't sit too long.",
						"japanese": "この町にはこういうものがそこら中にある。あまり長く座っているとだめだ。",
						"chinese": "这种东西这个镇上到处都是。不能坐太久。",
						"french": "Il y en a partout dans ce quartier. Ne restez pas assis trop longtemps.",
						"spanish": "Hay cosas así por todo este pueblo. No te sientes demasiado tiempo.",
						"vietnamese": "Mấy thứ như này có khắp nơi trong khu phố này. Đừng ngồi quá lâu.",
						"thai": "ของแบบนี้มีอยู่ทั่วเมืองนี้เลยนะ อย่าไปนั่งนานๆ",
						"hindi": "ऐसी चीज़ें इस इलाके में हर जगह हैं। ज़्यादा देर मत बैठना।"
					},
					"type": "speech",
					"speaker": "nyxaria",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "뭐야, 저건?",
						"english": "What is that?",
						"japanese": "何だ、あれは？",
						"chinese": "那是什么？",
						"french": "Qu'est-ce que c'est que ça ?",
						"spanish": "¿Qué es eso?",
						"vietnamese": "Cái gì vậy?",
						"thai": "นั่นอะไรน่ะ?",
						"hindi": "वो क्या है?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"speaker": "nyxaria",
					"content": {
						"korean": "머무는 자를 동네에 묶어두는 존재.",
						"english": "A presence that binds those who stay to this town.",
						"japanese": "留まる者をこの町に縛り付ける存在。",
						"chinese": "将逗留者束缚在这座小镇的存在。",
						"french": "Une présence qui retient ceux qui restent en ville.",
						"spanish": "Una presencia que ata a los que se quedan a este pueblo.",
						"vietnamese": "Một sự tồn tại trói buộc những người ở lại với thị trấn này.",
						"thai": "การดำรงอยู่ที่ผูกมัดผู้ที่อยู่กับเมืองนี้",
						"hindi": "एक ऐसी शक्ति जो रुकने वालों को इस कस्बे से बांधे रखती है।"
					},
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"content": {
						"korean": "버려진 공중전화 부스에서 낡은 음성 메시지가 반복되었다.",
						"english": "In the abandoned phone booth, an old voicemail played on repeat.",
						"japanese": "打ち捨てられた公衆電話ボックスで、古い音声メッセージが繰り返されていた。",
						"chinese": "在废弃的公共电话亭里，一段旧语音留言反复播放着。",
						"french": "Dans la cabine téléphonique abandonnée, un vieux message vocal se répétait.",
						"spanish": "En la cabina telefónica abandonada, un viejo mensaje de voz se repetía.",
						"vietnamese": "Trong buồng điện thoại công cộng bị bỏ hoang, một tin nhắn thoại cũ cứ lặp đi lặp lại.",
						"thai": "ในตู้โทรศัพท์สาธารณะที่ถูกทิ้งร้าง ข้อความเสียงเก่าๆ ถูกเล่นซ้ำไปมา",
						"hindi": "सुनसान फोन बूथ में, एक पुराना वॉयसमेल बार-बार बज रहा था।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "'사랑해. 기다릴게…'",
						"english": "'I love you. I'll wait...'",
						"japanese": "「愛してる。待ってるね…」",
						"chinese": "“我爱你。我会等你…”",
						"french": "« Je t'aime. J'attendrai… »",
						"spanish": "\"Te quiero. Esperaré...\"",
						"vietnamese": "\"Em yêu anh. Em sẽ đợi...\"",
						"thai": "\"ฉันรักเธอ ฉันจะรอ...\"",
						"hindi": "\"मैं तुमसे प्यार करता हूँ। मैं इंतज़ार करूँगा...\""
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"action": "enter",
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "nyxaria"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아직도 저러고 있네. 잊을 때도 됐는데.",
						"english": "Still at it, huh? It's about time to forget.",
						"japanese": "まだあんなことしてるのか。もう忘れてもいい頃なのに。",
						"chinese": "还在那样啊。也该忘记了吧。",
						"french": "Encore ça, hein ? Il est temps d'oublier.",
						"spanish": "¿Todavía con eso? Ya es hora de olvidar.",
						"vietnamese": "Vẫn vậy à. Đã đến lúc phải quên rồi.",
						"thai": "ยังคงเป็นแบบนั้นอยู่สินะ ได้เวลาลืมแล้วแท้ๆ",
						"hindi": "अभी भी वही है, है ना? भूलने का समय हो गया है।"
					},
					"speaker": "nyxaria",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "누구의 목소리인데?",
						"english": "Whose voice is that?",
						"japanese": "誰の声だ？",
						"chinese": "那是谁的声音？",
						"french": "C'est la voix de qui ?",
						"spanish": "¿De quién es esa voz?",
						"vietnamese": "Giọng của ai vậy?",
						"thai": "เสียงใครกัน?",
						"hindi": "यह किसकी आवाज़ है?"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "...오래 전 헤어진 친구의 목소리. 나도 저런 전화를 했던 것 같아.",
						"english": "...A friend I broke up with long ago. I think I made calls like that too.",
						"japanese": "…昔別れた友人の声。私もあんな電話をかけた気がする。",
						"chinese": "……很久以前分手的那个朋友的声音。我好像也打过那样的电话。",
						"french": "...La voix d'un ami avec qui j'ai rompu il y a longtemps. Je crois que j'ai aussi fait de tels appels.",
						"spanish": "...La voz de un amigo con el que rompí hace mucho tiempo. Creo que yo también hice llamadas así.",
						"vietnamese": "...Giọng của một người bạn đã chia tay từ lâu. Tôi cũng từng gọi những cuộc điện thoại như vậy.",
						"thai": "...เสียงของเพื่อนที่เลิกรากันไปนานแล้ว ฉันเองก็เคยโทรแบบนั้นเหมือนกันนะ",
						"hindi": "...एक दोस्त की आवाज़ जिससे मेरा बहुत पहले ब्रेकअप हो गया था। मुझे लगता है कि मैंने भी ऐसी कॉल की थी।"
					},
					"speaker": "nyxaria",
					"emotion": "sad"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "빛바랜 사진들이 바닥에서 떠올라 주위를 맴돌았다.",
						"english": "Faded photos floated up from the floor, circling around.",
						"japanese": "色褪せた写真が床から浮かび上がり、周囲を漂っていた。",
						"chinese": "褪色的照片从地板上浮起，在周围盘旋。",
						"french": "Des photos fanées flottaient depuis le sol, tournoyant autour.",
						"spanish": "Fotos descoloridas flotaban desde el suelo, dando vueltas.",
						"vietnamese": "Những bức ảnh phai màu nổi lên từ sàn nhà, lượn lờ xung quanh.",
						"thai": "ภาพถ่ายที่ซีดจางลอยขึ้นมาจากพื้น หมุนวนไปรอบๆ",
						"hindi": "धुंधली तस्वीरें फर्श से ऊपर उठकर चारों ओर तैरने लगीं।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "사진들이 움직여...",
						"english": "The photos are moving...",
						"japanese": "写真が動いてる…",
						"chinese": "照片在动…",
						"french": "Les photos bougent...",
						"spanish": "Las fotos se mueven...",
						"vietnamese": "Những bức ảnh đang di chuyển...",
						"thai": "รูปภาพกำลังเคลื่อนไหว...",
						"hindi": "तस्वीरें हिल रही हैं..."
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"action": "enter",
					"spot": [
						4,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "nyxaria"
				},
				{
					"speaker": "nyxaria",
					"type": "speech",
					"content": {
						"korean": "그 시절에 갇힌 사람들이야. 행복했던 순간만 반복하는.",
						"english": "They're people trapped in that era. Repeating only their happy moments.",
						"japanese": "あの頃に囚われた人々だ。幸せだった瞬間だけを繰り返している。",
						"chinese": "他们是被困在那个时代的人们。只重复着幸福的瞬间。",
						"french": "Ce sont des gens piégés dans cette époque. Ne répétant que leurs moments heureux.",
						"spanish": "Son personas atrapadas en esa época. Repitiendo solo sus momentos felices.",
						"vietnamese": "Họ là những người bị mắc kẹt trong thời đại đó. Chỉ lặp đi lặp lại những khoảnh khắc hạnh phúc của họ.",
						"thai": "พวกเขาคือผู้คนที่ติดอยู่ในยุคนั้น ซ้ำๆ วนเวียนอยู่แต่ช่วงเวลาแห่งความสุข",
						"hindi": "वे उस युग में फंसे हुए लोग हैं। केवल अपने खुशहाल पलों को दोहराते हुए।"
					},
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"speaker": "nyxaria",
					"content": {
						"korean": "나도 그랬지. 잊고 싶지 않은 순간들.",
						"english": "I was like that too. Moments I don't want to forget.",
						"japanese": "私もそうだったな。忘れたくない瞬間ばかり。",
						"chinese": "我也曾是那样。那些不想忘记的瞬间。",
						"french": "J'étais comme ça aussi. Des moments que je ne veux pas oublier.",
						"spanish": "Yo también fui así. Momentos que no quiero olvidar.",
						"vietnamese": "Tôi cũng từng như vậy. Những khoảnh khắc tôi không muốn quên.",
						"thai": "ฉันก็เคยเป็นแบบนั้น ช่วงเวลาที่ไม่อยากลืมเลือน",
						"hindi": "मैं भी वैसा ही था। ऐसे पल जिन्हें मैं भूलना नहीं चाहता।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "...닉사리아.",
						"english": "...Nixaria.",
						"japanese": "...ニクシャリア。",
						"chinese": "...尼克萨莉亚。",
						"french": "...Nixaria.",
						"spanish": "...Nixaria.",
						"vietnamese": "...Nixaria.",
						"thai": "...นิกซาเรีย.",
						"hindi": "...निक्सारिया।"
					},
					"emotion": "base"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "발걸음이 점점 무거워지고, 귓가에 다정한 환청이 들려왔다.",
						"english": "My steps grew heavy, and a sweet hallucination whispered in my ear.",
						"japanese": "足取りが重くなり、耳元に優しい幻聴が聞こえてきた。",
						"chinese": "脚步愈发沉重，耳边传来温柔的幻听。",
						"french": "Mes pas se faisaient lourds, et une douce hallucination me murmurait à l'oreille.",
						"spanish": "Mis pasos se volvieron pesados, y una dulce alucinación susurró en mi oído.",
						"vietnamese": "Bước chân ngày càng nặng nề, và một ảo ảnh dịu dàng thì thầm bên tai tôi.",
						"thai": "ก้าวเดินหนักอึ้งขึ้นเรื่อยๆ และภาพหลอนแสนอ่อนโยนก็แว่วมาในหู",
						"hindi": "मेरे कदम भारी होते गए, और मेरे कान में एक मधुर मतिभ्रम फुसफुसाया।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "'그때로 돌아가면... 괜찮을 것 같지 않아?'",
						"english": "'If you go back to that time... won't it be okay?'",
						"japanese": "「あの頃に戻れば…きっと大丈夫じゃない？」",
						"chinese": "“如果回到那时候…是不是就会没事？”",
						"french": "«Si tu retournes à cette époque... ne serait-ce pas mieux?»",
						"spanish": "'Si regresas a ese momento... ¿no crees que todo estará bien?'",
						"vietnamese": "'Nếu quay lại thời điểm đó... sẽ ổn thôi, đúng không?'",
						"thai": "'ถ้ากลับไปตอนนั้น... มันจะไม่เป็นไรเหรอ?'",
						"hindi": "'अगर तुम उस समय में वापस जाओगे... क्या यह ठीक नहीं होगा?'"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "nyxaria",
					"spot": [
						4,
						2
					]
				},
				{
					"speaker": "nyxaria",
					"type": "speech",
					"content": {
						"korean": "속지 마. 돌아가도, 아무것도 달라지지 않아. 오히려 더 갇힐 뿐이야.",
						"english": "Don't be fooled. Nothing will change if you go back. You'll only be more trapped.",
						"japanese": "騙されるな。戻っても、何も変わらない。むしろ、もっと閉じ込められるだけだ。",
						"chinese": "别被骗了。即使回去，一切都不会改变。你只会陷得更深。",
						"french": "Ne te laisse pas tromper. Y retourner ne changera rien. Tu ne feras que t'enfermer davantage.",
						"spanish": "No te dejes engañar. Volver no cambiará nada. Solo te quedarás más atrapado.",
						"vietnamese": "Đừng bị lừa. Quay lại cũng chẳng thay đổi được gì. Ngược lại, ngươi sẽ càng bị giam cầm.",
						"thai": "อย่าหลงกลเลย กลับไปก็ไม่มีอะไรเปลี่ยน มีแต่จะยิ่งติดกับ",
						"hindi": "धोखे में मत रहो। वापस जाने से कुछ नहीं बदलेगा। तुम बस और भी फंस जाओगे।"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "...젠장.",
						"english": "...Damn it.",
						"japanese": "…くそっ。",
						"chinese": "...该死。",
						"french": "...Mince.",
						"spanish": "...Maldita sea.",
						"vietnamese": "...Chết tiệt.",
						"thai": "...ให้ตายสิ.",
						"hindi": "...धिक्कार है।"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "...기어이 떠나는군. 하지만, 추억은 사라지지 않아. 언젠가 다시 너를 부를 것이다...",
						"english": "...So you leave after all. But memories never fade. Someday, I will call you again...",
						"japanese": "…結局、お前は去っていくのか。だが、思い出は消えない。いつか、再びお前を呼ぶだろう…",
						"chinese": "……终究还是离开了。但是，回忆不会消失。总有一天，我会再次呼唤你……",
						"french": "...Tu pars donc finalement. Mais les souvenirs ne disparaissent jamais. Un jour, je t'appellerai à nouveau...",
						"spanish": "...Así que te vas después de todo. Pero los recuerdos nunca se desvanecen. Algún día, te llamaré de nuevo...",
						"vietnamese": "...Cuối cùng ngươi cũng rời đi. Nhưng ký ức sẽ không phai nhạt. Một ngày nào đó, ta sẽ gọi ngươi trở lại...",
						"thai": "...ในที่สุดเจ้าก็จากไป แต่ความทรงจำไม่มีวันเลือนหาย สักวันหนึ่ง ข้าจะเรียกเจ้ากลับมาอีกครั้ง...",
						"hindi": "...आखिर तुम जा ही रहे हो। लेकिन यादें कभी मिटती नहीं। किसी दिन, मैं तुम्हें फिर से बुलाऊंगा..."
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "닥쳐!",
						"english": "Shut up!",
						"japanese": "黙れ！",
						"chinese": "闭嘴！",
						"french": "Tais-toi !",
						"spanish": "¡Cállate!",
						"vietnamese": "Im đi!",
						"thai": "หุบปาก!",
						"hindi": "चुप रहो!"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"action": "enter",
					"spot": [
						4,
						2
					],
					"speaker": "nyxaria",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "이겼어... 그래도 완전히 사라지진 않는구나. 추억이란 게.",
						"english": "I won... Still, memories don't completely disappear, do they?",
						"japanese": "勝った…それでも、思い出は完全に消えないものだな。",
						"chinese": "我赢了……但回忆，终究不会完全消失啊。",
						"french": "J'ai gagné... Pourtant, les souvenirs ne disparaissent jamais complètement, n'est-ce pas ?",
						"spanish": "Gané... Aún así, los recuerdos no desaparecen por completo, ¿verdad?",
						"vietnamese": "Mình thắng rồi... Dù sao thì, ký ức cũng không hoàn toàn biến mất nhỉ.",
						"thai": "ฉันชนะ... ถึงอย่างนั้น ความทรงจำก็ไม่ได้หายไปทั้งหมดสินะ",
						"hindi": "मैं जीत गया... फिर भी, यादें पूरी तरह से मिटती नहीं, है ना?"
					},
					"type": "speech",
					"speaker": "nyxaria",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그림자는 사라졌지만, 동네는 여전히 같은 계절에 머물러 있었다. 누군가는 또 다른 기억 속으로 사라지고 있었다.",
						"english": "The shadow was gone, but the town remained in the same season. Someone was disappearing into another memory.",
						"japanese": "影は消えたが、街は依然として同じ季節に留まっていた。誰かが、また別の記憶の中へと消えていった。",
						"chinese": "影子消失了，但小镇依旧停留在相同的季节。有人正消失在另一段记忆中。",
						"french": "L'ombre avait disparu, mais la ville restait figée dans la même saison. Quelqu'un s'évanouissait dans un autre souvenir.",
						"spanish": "La sombra se había ido, pero el pueblo permanecía en la misma estación. Alguien se estaba desvaneciendo en otro recuerdo.",
						"vietnamese": "Bóng tối biến mất, nhưng thị trấn vẫn ở lại cùng một mùa. Ai đó đang biến mất vào một ký ức khác.",
						"thai": "เงาหายไปแล้ว แต่เมืองยังคงอยู่ในฤดูเดิม มีใครบางคนกำลังหายไปในความทรงจำอีกครั้ง",
						"hindi": "छाया चली गई थी, लेकिन शहर उसी मौसम में ठहरा हुआ था। कोई और यादों में खो रहा था।"
					},
					"speaker": "narrator"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "결국, 너도 여기에 갇히는군. 영원히.",
						"english": "In the end, you're trapped here too. Forever.",
						"japanese": "結局、お前もここに閉じ込められるのか。永遠に。",
						"chinese": "最终，你也被困在这里了。永远。",
						"french": "Au final, toi aussi, tu es piégé ici. Pour toujours.",
						"spanish": "Al final, tú también estás atrapado aquí. Para siempre.",
						"vietnamese": "Cuối cùng, ngươi cũng bị mắc kẹt ở đây. Mãi mãi.",
						"thai": "ในที่สุด เจ้าก็ติดอยู่ที่นี่เช่นกัน ตลอดไป",
						"hindi": "आखिरकार, तुम भी यहीं फंस गए। हमेशा के लिए।"
					},
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "아니, 아직…",
						"english": "No, not yet...",
						"japanese": "いや、まだ…",
						"chinese": "不，还没……",
						"french": "Non, pas encore...",
						"spanish": "No, todavía no...",
						"vietnamese": "Không, vẫn chưa...",
						"thai": "ไม่, ยัง...",
						"hindi": "नहीं, अभी नहीं..."
					},
					"type": "speech"
				},
				{
					"action": "enter",
					"spot": [
						4,
						2
					],
					"speaker": "nyxaria",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "포기하지 마! 여긴 우리가 있을 곳이 아니야!",
						"english": "Don't give up! This isn't where we belong!",
						"japanese": "諦めるな！ここは私たちがいるべき場所じゃない！",
						"chinese": "别放弃！这里不是我们该待的地方！",
						"french": "N'abandonne pas ! Ce n'est pas notre place ici !",
						"spanish": "¡No te rindas! ¡Este no es nuestro lugar!",
						"vietnamese": "Đừng bỏ cuộc! Đây không phải là nơi chúng ta thuộc về!",
						"thai": "อย่ายอมแพ้! ที่นี่ไม่ใช่ที่ของเรา!",
						"hindi": "हार मत मानो! यह हमारी जगह नहीं है!"
					},
					"speaker": "nyxaria"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "골목 끝, 가장 오래된 벤치 위에서 거대한 그림자가 일렁였다.",
						"english": "At the end of the alley, a massive shadow flickered on the oldest bench.",
						"japanese": "路地の突き当たり、最も古いベンチの上で巨大な影が揺らめいた。",
						"chinese": "在巷子尽头，最古老的长凳上，一个巨大的影子在摇曳。",
						"french": "Au bout de l'allée, une ombre immense vacillait sur le banc le plus ancien.",
						"spanish": "Al final del callejón, una sombra gigantesca parpadeaba sobre el banco más antiguo.",
						"vietnamese": "Cuối con hẻm, một bóng đen khổng lồ lấp lánh trên chiếc ghế dài cũ kỹ nhất.",
						"thai": "สุดซอย บนม้านั่งที่เก่าแก่ที่สุด เงาขนาดมหึมาสั่นไหว",
						"hindi": "गली के अंत में, सबसे पुरानी बेंच पर एक विशाल छाया फड़फड़ा रही थी।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "왜 이렇게 서두르나. 이대로 머물러도 좋잖아?",
						"english": "Why the rush? Isn't it fine to stay like this?",
						"japanese": "なぜそんなに急ぐ。このまま留まっても良いではないか？",
						"chinese": "何必这么匆忙。就这样待着不好吗？",
						"french": "Pourquoi cette hâte? N'est-ce pas bien de rester ainsi?",
						"spanish": "¿Por qué tanta prisa? ¿No está bien quedarse así?",
						"vietnamese": "Tại sao phải vội vã thế? Cứ ở lại đây chẳng phải tốt sao?",
						"thai": "จะรีบไปไหน อยู่แบบนี้ก็ได้นี่?",
						"hindi": "इतनी जल्दी क्यों? क्या ऐसे ही रहना ठीक नहीं है?"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "넌 뭐야!",
						"english": "What are you?!",
						"japanese": "お前は何だ！",
						"chinese": "你是什么人！",
						"french": "Qui es-tu?!",
						"spanish": "¡¿Qué eres?!",
						"vietnamese": "Ngươi là ai!",
						"thai": "แกเป็นใคร!",
						"hindi": "तुम कौन हो!"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "nyxaria",
					"spot": [
						4,
						2
					],
					"action": "enter"
				},
				{
					"emotion": "angry",
					"speaker": "nyxaria",
					"type": "speech",
					"content": {
						"korean": "저 그림자가 모든 걸 붙잡고 있어. 베어내야 해!",
						"english": "That shadow is holding everything back. I have to cut it down!",
						"japanese": "あの影が全てを捕らえている。斬り裂かなければ！",
						"chinese": "那道影子紧抓着一切。我必须斩断它！",
						"french": "Cette ombre retient tout. Je dois la trancher!",
						"spanish": "Esa sombra está reteniendo todo. ¡Tengo que cortarla!",
						"vietnamese": "Bóng đen đó đang níu giữ mọi thứ. Tôi phải chém nó đi!",
						"thai": "เงานั่นกำลังรั้งทุกสิ่งไว้ ต้องฟันมันทิ้งซะ!",
						"hindi": "वह छाया सब कुछ रोके हुए है। मुझे उसे काटना होगा!"
					}
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "과거를 부정하는군. 이 동네의 일부가 될 기회를 발로 차버리다니.",
						"english": "You deny the past. To kick away the chance to become a part of this town.",
						"japanese": "過去を否定するのか。この町の、一部になる機会を蹴り捨てるとは。",
						"chinese": "你否定过去。竟然踢开了成为这个小镇一部分的机会。",
						"french": "Tu nies le passé. Gâcher l'opportunité de faire partie de ce quartier.",
						"spanish": "Niegas el pasado. Desaprovechar la oportunidad de ser parte de este pueblo.",
						"vietnamese": "Ngươi phủ nhận quá khứ. Đã đá bỏ cơ hội trở thành một phần của nơi này.",
						"thai": "แกปฏิเสธเรื่องในอดีต เตะโอกาสที่จะได้เป็นส่วนหนึ่งของเมืองนี้ทิ้งไปเสียได้",
						"hindi": "तुम अतीत को नकारते हो। इस शहर का हिस्सा बनने के अवसर को ठुकरा देना।"
					}
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"낡은 동네에 발을 들였다.",
			"멈춘 시간, 쌓이는 추억.",
			"발걸음은 무거워지고, 기억은 선명해진다.",
			"하지만 과거에 머물러서는 안 된다.",
			"그곳에는 잊혀진 그림자가 기다리고 있다."
		],
		"english": [
			"Stepped into an old town.",
			"Time stands still, memories accumulate.",
			"Steps grow heavy, memories sharpen.",
			"But one must not linger in the past.",
			"Forgotten shadows await there."
		],
		"japanese": [
			"古い町に足を踏み入れた。",
			"止まった時間、積もる思い出。",
			"足取りは重く、記憶は鮮明になる。",
			"しかし、過去に留まってはならない。",
			"そこには忘れられた影が待っている。"
		],
		"chinese": [
			"踏入了一个老旧的小镇。",
			"停滞的时间，堆积的记忆。",
			"脚步沉重，记忆清晰。",
			"但不能停留在过去。",
			"那里有被遗忘的影子在等待。"
		],
		"french": [
			"J'ai pénétré dans une vieille ville.",
			"Le temps s'arrête, les souvenirs s'accumulent.",
			"Les pas s'alourdissent, les souvenirs s'éclaircissent.",
			"Mais il ne faut pas s'attarder dans le passé.",
			"Des ombres oubliées y attendent."
		],
		"spanish": [
			"Puse un pie en un pueblo antiguo.",
			"El tiempo se detiene, los recuerdos se acumulan.",
			"Los pasos se vuelven pesados, los recuerdos se agudizan.",
			"Pero no hay que quedarse en el pasado.",
			"Allí esperan sombras olvidadas."
		],
		"vietnamese": [
			"Bước chân vào một khu phố cũ.",
			"Thời gian ngừng lại, ký ức chồng chất.",
			"Bước chân nặng nề, ký ức rõ nét.",
			"Nhưng không thể mãi mắc kẹt trong quá khứ.",
			"Ở đó, một bóng hình lãng quên đang chờ đợi."
		],
		"thai": [
			"ก้าวเข้าสู่เมืองเก่า",
			"เวลาหยุดนิ่ง ความทรงจำก่อตัวขึ้น",
			"ก้าวเดินหนักอึ้ง ความทรงจำชัดเจนขึ้น",
			"แต่ก็ไม่ควรจมอยู่กับอดีต",
			"ที่นั่นมีเงาที่ถูกลืมรออยู่"
		],
		"hindi": [
			"एक पुराने कस्बे में कदम रखा।",
			"थमा हुआ समय, बढ़ती यादें।",
			"कदम भारी हो जाते हैं, यादें ताज़ा होती हैं।",
			"लेकिन अतीत में नहीं रहना चाहिए।",
			"वहाँ भूली हुई परछाइयाँ इंतज़ार कर रही हैं।"
		]
	}
} as const;
