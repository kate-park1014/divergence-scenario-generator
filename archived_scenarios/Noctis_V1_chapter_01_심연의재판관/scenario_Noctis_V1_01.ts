export const scenario_Noctis_V1_01 = {
	"scenario_id": "Noctis_V1_01",
	"order": 1,
	"act": "intro",
	"theme": "hell",
	"actors": {
		"king_borin": {
			"id": "mon_395623fe-f16c-4e32-a96d-b112c2b6b3e3",
			"name": {
				"korean": "보린 왕",
				"english": "King Borin",
				"japanese": "ボリン王",
				"chinese": "波林王",
				"french": "Roi Borin",
				"spanish": "Rey Borin",
				"vietnamese": "Vua Borin",
				"thai": "ราชาบอริน",
				"hindi": "राजा बोरिन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/47299a9c-6646-496d-6716-4b45f9c6f300/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/294303de-0ac2-4671-3674-09d5aec03300/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"끝없이 이어지는 지하 회랑.",
			"길을 잃은 탐험대는 지쳐갔다.",
			"그때, 어둠 속에서 등불 하나가 나타났다.",
			"재판관 녹티스. 그는 너무나 정중했다."
		],
		"english": [
			"An endless underground corridor.",
			"The lost expedition grew weary.",
			"Then, a lantern appeared in the darkness.",
			"Judge Noctis. He was exceedingly courteous."
		],
		"japanese": [
			"果てしなく続く地下回廊。",
			"道に迷った探検隊は疲弊していった。",
			"その時、闇の中から一つの提灯が現れた。",
			"審判官ノクティス。彼はあまりにも丁重だった。"
		],
		"chinese": [
			"无尽的地下回廊。",
			"迷失的探险队日益疲惫。",
			"这时，一盏灯笼在黑暗中出现。",
			"审判官诺克提斯。他彬彬有礼。"
		],
		"french": [
			"Un corridor souterrain sans fin.",
			"L'expédition perdue s'épuisait.",
			"Alors, une lanterne apparut dans l'obscurité.",
			"Le Juge Noctis. Il était excessivement courtois."
		],
		"spanish": [
			"Un corredor subterráneo interminable.",
			"La expedición perdida se agotaba.",
			"Entonces, una linterna apareció en la oscuridad.",
			"Juez Noctis. Él era sumamente cortés."
		],
		"vietnamese": [
			"Hành lang ngầm vô tận.",
			"Đoàn thám hiểm lạc lối dần kiệt sức.",
			"Khi đó, một ngọn đèn lồng xuất hiện trong bóng tối.",
			"Thẩm phán Noctis. Ông ta vô cùng lịch thiệp."
		],
		"thai": [
			"โถงทางเดินใต้ดินอันไร้ที่สิ้นสุด",
			"คณะสำรวจที่หลงทางเริ่มอ่อนล้า",
			"ทันใดนั้น ตะเกียงดวงหนึ่งก็ปรากฏขึ้นในความมืด",
			"ผู้พิพากษา Noctis. เขาสุภาพอย่างยิ่ง"
		],
		"hindi": [
			"एक अंतहीन भूमिगत गलियारा।",
			"गुमशुदा अभियान दल थक गया था।",
			"तभी, अँधेरे में एक लालटेन दिखाई दी।",
			"न्यायाधीश नोक्टिस। वह अत्यंत विनम्र थे।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "끝없이 이어지는 회랑, 방향도 시간도 잃은 곳이었다.",
						"english": "An endless corridor, a place where direction and time were lost.",
						"japanese": "果てしなく続く回廊、方向も時間も失われた場所だった。",
						"chinese": "无尽的回廊，方向和时间都已在此迷失。",
						"french": "Un corridor sans fin, un lieu où direction et temps étaient perdus.",
						"spanish": "Un corredor interminable, un lugar donde se perdieron la dirección y el tiempo.",
						"vietnamese": "Hành lang vô tận, nơi mất cả phương hướng và thời gian.",
						"thai": "โถงทางเดินที่ไม่มีที่สิ้นสุด สถานที่ที่ทิศทางและเวลามลายหายไป",
						"hindi": "एक अंतहीन गलियारा, एक ऐसी जगह जहाँ दिशा और समय खो गए थे।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "여긴 어디지? 출구는 있는 건가?",
						"english": "Where am I? Is there an exit?",
						"japanese": "ここはどこだ？出口はあるのか？",
						"chinese": "这是哪里？有出口吗？",
						"french": "Où suis-je ? Y a-t-il une sortie ?",
						"spanish": "¿Dónde estoy? ¿Hay una salida?",
						"vietnamese": "Đây là đâu? Có lối thoát không?",
						"thai": "ที่นี่ที่ไหนกัน? มีทางออกหรือไม่?",
						"hindi": "मैं कहाँ हूँ? क्या कोई निकास है?"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"action": "enter",
					"spot": [
						5,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "king_borin"
				},
				{
					"emotion": "base",
					"speaker": "king_borin",
					"content": {
						"korean": "길 잃은 여행자여, 이 노쇠한 재판관이 안내해 드리죠.",
						"english": "Lost traveler, this old judge shall guide you.",
						"japanese": "道に迷いし旅人よ、この老いた審判官が案内しよう。",
						"chinese": "迷路的旅人啊，就由这位老朽的审判官来为你指引吧。",
						"french": "Voyageur égaré, ce vieux juge vous guidera.",
						"spanish": "Viajero perdido, este anciano juez te guiará.",
						"vietnamese": "Hỡi lữ khách lạc lối, vị thẩm phán già này sẽ hướng dẫn ngươi.",
						"thai": "นักเดินทางที่หลงทางเอ๋ย ผู้พิพากษาชราผู้นี้จะนำทางเจ้าเอง",
						"hindi": "भटके हुए यात्री, यह वृद्ध न्यायाधीश तुम्हें राह दिखाएगा।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…안내? 어디로?",
						"english": "...Guide? To where?",
						"japanese": "…案内？どこへ？",
						"chinese": "……指引？去哪儿？",
						"french": "...Guider ? Où ?",
						"spanish": "¿...Guiar? ¿A dónde?",
						"vietnamese": "…Dẫn đường? Đến đâu?",
						"thai": "...นำทาง? ไปที่ใด?",
						"hindi": "...राह दिखाना? कहाँ तक?"
					}
				},
				{
					"emotion": "base",
					"speaker": "king_borin",
					"content": {
						"korean": "최후의 문으로. 당신이 찾던 모든 것이 그곳에 있습니다.",
						"english": "To the Final Gate. All you sought is there.",
						"japanese": "最後の門へ。あなたが探していたものは全てそこにある。",
						"chinese": "通往最终之门。你所寻找的一切都在那里。",
						"french": "Vers la Porte Finale. Tout ce que vous cherchiez s'y trouve.",
						"spanish": "A la Puerta Final. Todo lo que buscabas está allí.",
						"vietnamese": "Đến Cổng Cuối Cùng. Mọi thứ ngươi tìm kiếm đều ở đó.",
						"thai": "สู่ประตูบานสุดท้าย ทุกสิ่งที่เจ้าตามหาอยู่ที่นั่น",
						"hindi": "अंतिम द्वार तक। जो कुछ भी तुम तलाश रहे थे, वह वहीं है।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "녹티스의 등불 속에서 푸른 불꽃이 희미하게 흔들렸다. 마치 작은 영혼들처럼.",
						"english": "Within Noctis's lantern, blue flames flickered faintly. Like small souls.",
						"japanese": "ノクティスの提灯の中で、青い炎がほのかに揺れていた。まるで小さな魂たちのように。",
						"chinese": "诺克提斯的灯笼里，蓝色的火焰微微摇曳。仿佛是小小的灵魂。",
						"french": "Dans la lanterne de Noctis, des flammes bleues vacillaient faiblement. Comme de petites âmes.",
						"spanish": "Dentro de la linterna de Noctis, llamas azules parpadeaban débilmente. Como pequeñas almas.",
						"vietnamese": "Trong chiếc đèn lồng của Noctis, ngọn lửa xanh mờ ảo lay động. Tựa như những linh hồn bé nhỏ.",
						"thai": "ภายในตะเกียงของ Noctis เปลวไฟสีน้ำเงินริบหรี่ราวกับวิญญาณดวงน้อยๆ",
						"hindi": "नोक्टिस की लालटेन के भीतर, नीली लपटें धीमी-धीमी झिलमिला रही थीं। मानो छोटे-छोटे आत्माएँ हों।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"content": {
						"korean": "다행이다… 정말.",
						"english": "What a relief... Truly.",
						"japanese": "よかった…本当に。",
						"chinese": "太好了……真的。",
						"french": "Quel soulagement... Vraiment.",
						"spanish": "Qué alivio... De verdad.",
						"vietnamese": "May quá… Thật sự.",
						"thai": "โล่งอกไปที... จริงๆ",
						"hindi": "शुक्र है... सच में।"
					},
					"speaker": "character_1",
					"emotion": "happy"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…허나 잠시, 급한 볼일이 생겨서.",
						"english": "...However, something urgent came up.",
						"japanese": "…だが、急な用事ができてな。",
						"chinese": "……但暂时有点急事。",
						"french": "...Mais, une affaire urgente est survenue.",
						"spanish": "...Pero, me ha surgido algo urgente.",
						"vietnamese": "…Nhưng tạm thời, ta có việc gấp.",
						"thai": "...แต่ว่า, มีเรื่องด่วนเกิดขึ้นชั่วคราว",
						"hindi": "...परन्तु, एक ज़रूरी काम आ गया है।"
					},
					"speaker": "king_borin",
					"emotion": "base"
				},
				{
					"speaker": "king_borin",
					"type": "direction",
					"action": "exit",
					"duration_ms": 400
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "녹티스가 사라지자 희미한 종소리가 회랑 너머에서 울렸다.",
						"english": "As Noctis vanished, a faint bell chime echoed from beyond the corridor.",
						"japanese": "ノクティスが消えると、回廊の向こうからかすかな鐘の音が響いた。",
						"chinese": "诺克提斯消失后，微弱的钟声从回廊尽头传来。",
						"french": "Dès que Noctis disparut, un faible tintement de cloche résonna au-delà du couloir.",
						"spanish": "Cuando Noctis desapareció, un leve tañido de campana resonó más allá del pasillo.",
						"vietnamese": "Khi Noctis biến mất, tiếng chuông yếu ớt vang lên từ cuối hành lang.",
						"thai": "เมื่อน็อกทิสหายไป เสียงระฆังแผ่วเบาก็ดังก้องมาจากอีกฟากของโถงทางเดิน",
						"hindi": "जैसे ही नॉक्टिस गायब हुआ, गलियारे के उस पार से एक हल्की घंटी की आवाज़ गूँजी।"
					}
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "녹티스의 등불이 사라진 회랑은 다시 어둠에 잠겼다.",
						"english": "With Noctis's lamp gone, the corridor was once again plunged into darkness.",
						"japanese": "ノクティスの灯火が消え、回廊は再び闇に包まれた。",
						"chinese": "诺克提斯的灯光消失后，回廊再次陷入黑暗。",
						"french": "La lampe de Noctis disparue, le couloir fut de nouveau plongé dans l'obscurité.",
						"spanish": "Sin la lámpara de Noctis, el pasillo volvió a sumergirse en la oscuridad.",
						"vietnamese": "Khi đèn của Noctis biến mất, hành lang lại chìm trong bóng tối.",
						"thai": "เมื่อแสงตะเกียงของน็อกทิสหายไป โถงทางเดินก็กลับสู่ความมืดมิดอีกครั้ง",
						"hindi": "नॉक्टिस की लालटेन के गायब होते ही, गलियारा फिर से अंधेरे में डूब गया।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "재판관님은… 언제 돌아오시는 거지?",
						"english": "The Judge... when will they return?",
						"japanese": "審判官様は…いつお戻りになるんだ？",
						"chinese": "审判官大人……什么时候回来呢？",
						"french": "Le Juge... quand reviendra-t-il ?",
						"spanish": "El Juez... ¿cuándo regresará?",
						"vietnamese": "Ngài Thẩm phán… bao giờ mới về?",
						"thai": "ท่านผู้พิพากษา... จะกลับมาเมื่อไหร่กันนะ?",
						"hindi": "न्यायाधीश... वे कब लौटेंगे?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "곧 오실 거야. 약속했잖아.",
						"english": "They'll be back soon. They promised.",
						"japanese": "すぐにお戻りになるさ。約束しただろう？",
						"chinese": "他们很快就会回来。不是约好了吗？",
						"french": "Il reviendra bientôt. Il a promis.",
						"spanish": "Volverá pronto. Lo prometió.",
						"vietnamese": "Họ sẽ sớm về thôi. Đã hứa rồi mà.",
						"thai": "เดี๋ยวก็มาแล้วล่ะ ก็สัญญากันไว้แล้วนี่",
						"hindi": "वे जल्द ही वापस आ जाएँगे। उन्होंने वादा किया था।"
					},
					"speaker": "character_2",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "하지만 발걸음은 점점 무거워졌다.",
						"english": "But the footsteps grew heavier.",
						"japanese": "だが、足取りは次第に重くなった。",
						"chinese": "但是，脚步却越来越沉重了。",
						"french": "Mais les pas devinrent de plus en plus lourds.",
						"spanish": "Pero los pasos se volvieron cada vez más pesados.",
						"vietnamese": "Nhưng bước chân dần trở nên nặng nề.",
						"thai": "แต่ทว่าก้าวเดินกลับหนักอึ้งขึ้นเรื่อยๆ",
						"hindi": "परन्तु कदम धीरे-धीरे भारी होते गए।"
					},
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "끝없이 이어진 회랑. 걸어도 걸어도 같은 풍경이었다.",
						"english": "An endless corridor. No matter how far I walked, the scenery remained the same.",
						"japanese": "果てしなく続く回廊。歩いても歩いても同じ景色だった。",
						"chinese": "无尽的回廊。无论怎么走，风景都一模一样。",
						"french": "Un couloir sans fin. J'avais beau marcher, le paysage restait le même.",
						"spanish": "Un pasillo interminable. Por mucho que anduviera, el paisaje era el mismo.",
						"vietnamese": "Hành lang kéo dài vô tận. Cứ đi mãi đi mãi mà cảnh vật vẫn y nguyên.",
						"thai": "โถงทางเดินที่ทอดยาวไม่สิ้นสุด เดินเท่าไหร่ก็ยังคงเป็นภาพเดิมๆ",
						"hindi": "एक अंतहीन गलियारा। कितना भी चला, नज़ारा वही रहा।"
					},
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "…정말 최후의 문이 있는 걸까?",
						"english": "...Is there really a final door?",
						"japanese": "…本当に最後の扉があるのか？",
						"chinese": "……真的有最后一扇门吗？",
						"french": "...Y a-t-il vraiment une dernière porte ?",
						"spanish": "...¿De verdad existe una última puerta?",
						"vietnamese": "…Liệu có thật sự có cánh cửa cuối cùng không?",
						"thai": "...จะมีประตูบานสุดท้ายจริงๆ น่ะหรือ?",
						"hindi": "...क्या वाकई कोई आखिरी दरवाज़ा है?"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_3",
					"content": {
						"korean": "이대로 포기할 순 없어.",
						"english": "I can't give up like this.",
						"japanese": "このまま諦めるわけにはいかない。",
						"chinese": "不能就这样放弃。",
						"french": "Je ne peux pas abandonner comme ça.",
						"spanish": "No puedo rendirme así.",
						"vietnamese": "Không thể bỏ cuộc như thế này được.",
						"thai": "จะยอมแพ้อย่างนี้ไม่ได้หรอก",
						"hindi": "मैं ऐसे हार नहीं मान सकता।"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "발소리마저 울리는 고요 속. 종소리가 조금 더 가까워진 듯했다.",
						"english": "The silence was so profound, even footsteps echoed. The sound of the bell seemed a little closer.",
						"japanese": "足音さえ響く静寂の中。鐘の音が少し近くなったようだった。",
						"chinese": "连脚步声都回荡的寂静中。钟声似乎又近了一些。",
						"french": "Dans un silence où même les pas résonnaient. Le son de la cloche semblait un peu plus proche.",
						"spanish": "En un silencio donde incluso los pasos resonaban. El sonido de la campana parecía un poco más cercano.",
						"vietnamese": "Trong tĩnh lặng đến mức tiếng bước chân cũng vọng lại. Tiếng chuông dường như đã gần hơn một chút.",
						"thai": "ในความเงียบงันที่แม้แต่เสียงฝีเท้ายังก้องกังวาน เสียงระฆังดูเหมือนจะใกล้เข้ามาอีกนิด",
						"hindi": "ऐसी खामोशी जहाँ कदमों की आहट भी गूँजती थी। घंटी की आवाज़ थोड़ी और पास लग रही थी।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "뭔가… 잘못된 것 같아.",
						"english": "Something... feels wrong.",
						"japanese": "何か… おかしい。",
						"chinese": "感觉… 有点不对劲。",
						"french": "Quelque chose… ne va pas.",
						"spanish": "Algo… no está bien.",
						"vietnamese": "Có gì đó… không ổn rồi.",
						"thai": "รู้สึกว่า… มีบางอย่างผิดปกติ",
						"hindi": "कुछ… गलत लग रहा है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "돌아갈까? 이제 와서?",
						"english": "Should I go back? Now?",
						"japanese": "戻るか？今さら？",
						"chinese": "要回去吗？现在？",
						"french": "Revenir en arrière ? Maintenant ?",
						"spanish": "¿Volver? ¿Ahora?",
						"vietnamese": "Quay lại ư? Giờ này sao?",
						"thai": "จะกลับไปดีไหม? ตอนนี้เนี่ยนะ?",
						"hindi": "क्या मैं वापस जाऊँ? अब?"
					},
					"speaker": "character_4",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "…아니, 여기까지 왔는데.",
						"english": "...No, not after coming all this way.",
						"japanese": "…いや、ここまで来たんだ。",
						"chinese": "…不，都走到这了。",
						"french": "…Non, pas après être venu jusqu'ici.",
						"spanish": "…No, después de haber llegado hasta aquí.",
						"vietnamese": "…Không, đã đến đây rồi mà.",
						"thai": "…ไม่, มาถึงขนาดนี้แล้ว",
						"hindi": "…नहीं, इतनी दूर आने के बाद।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "…겨우 여기까지인가. 재판은… 끝나지 않았다.",
						"english": "...Is this as far as it goes? The trial... is not over.",
						"japanese": "…せいぜいここまでか。裁きは…終わっていない。",
						"chinese": "…就到此为止了吗。审判…还没有结束。",
						"french": "…Ce n'est que ça ? Le jugement… n'est pas terminé.",
						"spanish": "…¿Solo hasta aquí? El juicio… no ha terminado.",
						"vietnamese": "…Chỉ đến đây thôi sao. Cuộc thử thách… vẫn chưa kết thúc.",
						"thai": "…แค่นี้เองหรือ การทดสอบ…ยังไม่สิ้นสุด",
						"hindi": "…क्या बस यहीं तक? मुकदमा… खत्म नहीं हुआ है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "무슨 소리야!?",
						"english": "What was that!?",
						"japanese": "何だこれ!?",
						"chinese": "什么声音!?",
						"french": "Qu'est-ce que c'était!?",
						"spanish": "¡¿Qué fue eso?!",
						"vietnamese": "Cái gì vậy!?",
						"thai": "อะไรนะ!?",
						"hindi": "यह क्या था!?"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "쓰러진 {random_boss}. 하지만 그 너머의 문은 여전히 닫혀 있었다.",
						"english": "{random_boss} defeated. But the door beyond remained closed.",
						"japanese": "{random_boss}は倒れた。しかし、その先の扉は固く閉ざされたままだった。",
						"chinese": "{random_boss}倒下了。但门依然紧闭。",
						"french": "{random_boss} est tombé. Mais la porte au-delà restait fermée.",
						"spanish": "{random_boss} derrotado. Pero la puerta más allá seguía cerrada.",
						"vietnamese": "{random_boss} đã gục ngã. Nhưng cánh cửa phía sau vẫn đóng kín.",
						"thai": "{random_boss} พ่ายแพ้ แต่ประตูที่อยู่เลยไปก็ยังคงปิดอยู่",
						"hindi": "{random_boss} पराजित हुआ। लेकिन उसके परे का दरवाजा अभी भी बंद था。"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "희미했던 종소리가 등 뒤에서 울렸다. 재판관 녹티스는 어디에 있는가?",
						"english": "A faint bell chimed from behind. Where is Judge Noctis?",
						"japanese": "背後から微かな鐘の音が響いた。裁定者ノクティスはどこにいる？",
						"chinese": "背后传来微弱的钟声。审判官诺克提斯身在何处？",
						"french": "Une faible cloche a retenti derrière moi. Où est le Juge Noctis ?",
						"spanish": "Una campana tenue sonó a mis espaldas. ¿Dónde está el Juez Noctis?",
						"vietnamese": "Tiếng chuông yếu ớt vang lên từ phía sau. Thẩm phán Noctis đang ở đâu?",
						"thai": "เสียงระฆังแผ่วเบาดังมาจากข้างหลัง ผู้พิพากษา Noctis อยู่ที่ไหน?",
						"hindi": "पीछे से एक धीमी घंटी बजी। जज नॉक्टिस कहाँ है?"
					},
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "마침내, 거대한 문이 눈앞에 나타났다.",
						"english": "Finally, a colossal gate appeared before them.",
						"japanese": "ついに、巨大な門が目の前に現れた。",
						"chinese": "终于，一扇巨大的门出现在眼前。",
						"french": "Enfin, une porte colossale apparut devant eux.",
						"spanish": "Finalmente, una puerta colosal apareció ante ellos.",
						"vietnamese": "Cuối cùng, một cánh cổng khổng lồ đã hiện ra trước mắt.",
						"thai": "ในที่สุด ประตูบานมหึมาก็ปรากฏขึ้นเบื้องหน้า",
						"hindi": "अंततः, उनके सामने एक विशाल द्वार प्रकट हुआ।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "그리고 문을 지키는 정체 모를 존재가 그들을 맞이했다.",
						"english": "And an unknown entity guarding the gate greeted them.",
						"japanese": "そして、門を守る正体不明の存在が彼らを迎えた。",
						"chinese": "随即，守门的一个不明身份的存在迎接了他们。",
						"french": "Et une entité inconnue gardant la porte les accueillit.",
						"spanish": "Y una entidad desconocida que custodiaba la puerta los recibió.",
						"vietnamese": "Và một thực thể bí ẩn canh giữ cánh cổng đã chào đón họ.",
						"thai": "และสิ่งมีชีวิตปริศนาที่เฝ้าประตูได้ต้อนรับพวกเขา",
						"hindi": "और द्वार की रक्षा करने वाली एक अज्ञात इकाई ने उनका स्वागत किया।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"content": {
						"korean": "길 잃은 영혼들이여, 이 문은 너희를 위한 곳이 아니다.",
						"english": "Lost souls, this gate is not for you.",
						"japanese": "迷える魂たちよ、この門はお前たちのための場所ではない。",
						"chinese": "迷失的灵魂们，这扇门不属于你们。",
						"french": "Âmes perdues, cette porte n'est pas pour vous.",
						"spanish": "Almas perdidas, esta puerta no es para vosotros.",
						"vietnamese": "Hỡi những linh hồn lạc lối, cánh cổng này không dành cho các ngươi.",
						"thai": "วิญญาณที่หลงทางเอ๋ย ประตูนี้ไม่เหมาะสำหรับพวกเจ้า",
						"hindi": "भटकी हुई आत्माओं, यह द्वार तुम्हारे लिए नहीं है।"
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "비켜라!",
						"english": "Stand aside!",
						"japanese": "退け！",
						"chinese": "让开！",
						"french": "Écartez-vous !",
						"spanish": "¡Apartaos!",
						"vietnamese": "Tránh ra!",
						"thai": "หลีกไป!",
						"hindi": "हट जाओ!"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "그럴 순 없다. 너희는 아직… 준비되지 않았다.",
						"english": "I cannot. You are not... ready yet.",
						"japanese": "それはできない。お前たちはまだ…準備ができていない。",
						"chinese": "我不能。你们还没…准备好。",
						"french": "Impossible. Vous n'êtes pas… encore prêts.",
						"spanish": "No puedo. Aún no… estáis preparados.",
						"vietnamese": "Không thể được. Các ngươi vẫn chưa… sẵn sàng.",
						"thai": "ทำไม่ได้ พวกเจ้ายัง… ไม่พร้อม",
						"hindi": "मैं ऐसा नहीं कर सकता। तुम अभी… तैयार नहीं हो।"
					},
					"speaker": "random_boss",
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 자들. 너희의 죄는 너무 무겁다.",
						"english": "Fools. Your sins are too heavy.",
						"japanese": "愚かな者たち。お前たちの罪はあまりにも重い。",
						"chinese": "愚蠢的家伙。你们的罪孽太重了。",
						"french": "Imbéciles. Vos péchés sont trop lourds.",
						"spanish": "Necios. Vuestros pecados son demasiado pesados.",
						"vietnamese": "Những kẻ ngốc. Tội lỗi của các ngươi quá nặng nề.",
						"thai": "พวกโง่เขลา บาปของพวกเจ้าหนักหนาสาหัสเกินไป",
						"hindi": "मूर्खों। तुम्हारे पाप बहुत भारी हैं।"
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "…아직 끝나지 않았어.",
						"english": "...It's not over yet.",
						"japanese": "…まだ終わっていない。",
						"chinese": "…还没结束。",
						"french": "...Ce n'est pas encore fini.",
						"spanish": "...Aún no ha terminado.",
						"vietnamese": "...Chưa kết thúc đâu.",
						"thai": "...ยังไม่จบหรอก",
						"hindi": "...अभी खत्म नहीं हुआ है।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "다음에 와도 결과는 같을 것이다. 너희는… 이곳을 벗어날 수 없다.",
						"english": "Even if you return, the outcome will be the same. You cannot... escape this place.",
						"japanese": "次に挑んでも、結果は同じだろう。お前たちは…ここを逃れることはできない。",
						"chinese": "下次再来，结果也一样。你们无法…逃离这里。",
						"french": "Même si vous revenez, le résultat sera le même. Vous ne pouvez pas... vous échapper de cet endroit.",
						"spanish": "Aunque volváis, el resultado será el mismo. No podéis... escapar de este lugar.",
						"vietnamese": "Dù có quay lại, kết quả cũng sẽ như vậy. Các ngươi không thể... thoát khỏi nơi này.",
						"thai": "แม้จะกลับมาอีก ผลลัพธ์ก็จะเหมือนเดิม พวกเจ้าไม่สามารถ... หนีจากที่นี่ไปได้",
						"hindi": "अगली बार भी आओगे तो नतीजा वही होगा। तुम... इस जगह से बच नहीं सकते।"
					},
					"type": "speech"
				}
			]
		}
	]
} as const;
