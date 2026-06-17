export const scenario_snowy_haraldr_10_01 = {
	"scenario_id": "snowy_haraldr_10_01",
	"order": 1,
	"act": "intro",
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
		},
		"haraldr": {
			"name": "Haraldr"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"차가운 설원, 눈 속에 묻힌 고대 유적.",
			"수상한 상인, 하랄드르의 끊임없는 전리품 판매.",
			"점점 노골적으로 변하는 그의 강매는 불안한 기운을 드리웠다.",
			"무언가… 심상치 않다. 이 얼어붙은 땅에서."
		],
		"english": [
			"Cold snowy field, ancient ruins buried in snow.",
			"Suspicious merchant, Haraldr's incessant selling of loot.",
			"His increasingly blatant forceful sales cast an unsettling aura.",
			"Something... is not right. In this frozen land."
		],
		"japanese": [
			"冷たい雪原、雪に埋もれた古代遺跡。",
			"怪しい商人、ハラルドルによる絶え間ない戦利品の販売。",
			"日増しに露骨になる彼の強引な押し売りは、不穏な雰囲気を漂わせた。",
			"何か…尋常ではない。この凍てつく地で。"
		],
		"chinese": [
			"寒冷的雪原，埋藏在雪中的古代遗迹。",
			"可疑的商人，哈拉尔德尔无休止地兜售战利品。",
			"他日益露骨的强买强卖笼罩着一种不安的气氛。",
			"有些事情……不对劲。在这片冰冻的土地上。"
		],
		"french": [
			"Étendue enneigée et glaciale, ruines antiques enfouies sous la neige.",
			"Le marchand suspect, Haraldr, vend constamment du butin.",
			"Sa vente forcée de plus en plus flagrante a jeté une aura inquiétante.",
			"Quelque chose... ne va pas. Dans cette terre gelée."
		],
		"spanish": [
			"Campo nevado y frío, ruinas antiguas sepultadas en la nieve.",
			"El mercader sospechoso, Haraldr, vende botines sin parar.",
			"Su venta forzada, cada vez más descarada, proyectaba un aura inquietante.",
			"Algo... no está bien. En esta tierra helada."
		],
		"vietnamese": [
			"Đồng tuyết lạnh giá, tàn tích cổ đại chôn vùi trong tuyết.",
			"Thương nhân đáng ngờ, Haraldr, không ngừng bán chiến lợi phẩm.",
			"Việc ép buộc mua hàng ngày càng trắng trợn của hắn ta tạo ra một không khí bất an.",
			"Có điều gì đó... không ổn. Ở vùng đất băng giá này."
		],
		"thai": [
			"ทุ่งหิมะอันหนาวเหน็บ ซากปรักหักพังโบราณที่ฝังอยู่ใต้หิมะ",
			"พ่อค้าที่น่าสงสัย ฮาราลเดอร์ขายของที่ริบมาได้อย่างไม่หยุดหย่อน",
			"การบังคับขายที่เปิดเผยมากขึ้นเรื่อยๆ ของเขาทำให้เกิดบรรยากาศที่ไม่สบายใจ",
			"บางอย่าง...ไม่ถูกต้อง ในดินแดนที่เยือกแข็งนี้"
		],
		"hindi": [
			"ठंडा बर्फीला मैदान, बर्फ में दबे प्राचीन खंडहर।",
			"संदिग्ध व्यापारी, हरल्ड्र द्वारा लगातार लूट का बेचना।",
			"उसकी बढ़ती हुई ज़बरदस्ती बिक्री ने एक बेचैनी भरी आभा डाली।",
			"कुछ… ठीक नहीं है। इस जमी हुई भूमि में।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "끝없이 펼쳐진 설원. 고대 유적의 잔해가 눈 속에 파묻혀 있었다.",
						"english": "Endless snowy fields. Remains of ancient ruins lay buried in the snow.",
						"japanese": "終わりなく広がる雪原。古代遺跡の残骸が雪の中に埋もれていた。",
						"chinese": "一望无际的雪原。古代遗迹的残骸埋藏在雪中。",
						"french": "Des champs de neige à perte de vue. Les vestiges d'anciennes ruines étaient enfouis sous la neige.",
						"spanish": "Campos nevados interminables. Restos de ruinas antiguas yacían sepultados en la nieve.",
						"vietnamese": "Cánh đồng tuyết trải dài vô tận. Tàn tích của những phế tích cổ đại nằm vùi trong tuyết.",
						"thai": "ทุ่งหิมะอันกว้างใหญ่ไร้ที่สิ้นสุด ซากปรักหักพังโบราณถูกฝังอยู่ในหิมะ",
						"hindi": "अंतहीन बर्फीले मैदान। प्राचीन खंडहरों के अवशेष बर्फ में दबे पड़े थे।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "또 저 사람이야? 지겹네.",
						"english": "Him again? How tiresome.",
						"japanese": "またあの人か？うんざりする。",
						"chinese": "又是那个人？真烦人。",
						"french": "Encore lui ? C'est lassant.",
						"spanish": "¿Él otra vez? Qué fastidio.",
						"vietnamese": "Lại là hắn ta à? Phiền phức thật.",
						"thai": "เขาอีกแล้วเหรอ? น่าเบื่อจริง",
						"hindi": "फिर वही? कितना थकाऊ है।"
					}
				},
				{
					"spot": [
						2,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "ivar"
				},
				{
					"speaker": "ivar",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "하랄드르. 그만하고 길이나 안내해.",
						"english": "Haraldr. Stop it and just guide the way.",
						"japanese": "ハラルドル。もうやめて道を案内してくれ。",
						"chinese": "哈拉尔德尔。别再胡闹了，快带路。",
						"french": "Haraldr. Arrête ça et guide-nous.",
						"spanish": "Haraldr. Para ya y guíanos.",
						"vietnamese": "Haraldr. Dừng lại đi và dẫn đường đi.",
						"thai": "ฮาราลเดอร์ หยุดเถอะ แล้วนำทางไป",
						"hindi": "हरल्ड्र। इसे रोको और बस रास्ता दिखाओ।"
					}
				},
				{
					"content": {
						"korean": "맨날 전리품만 팔아대고….",
						"english": "Always just selling loot...",
						"japanese": "いつも戦利品ばかり売ってるし…。",
						"chinese": "老是只卖战利品……。",
						"french": "Toujours à vendre du butin...",
						"spanish": "Siempre vendiendo solo botín...",
						"vietnamese": "Lúc nào cũng chỉ bán chiến lợi phẩm...",
						"thai": "วันๆ เอาแต่ขายของที่ริบมา...",
						"hindi": "हमेशा केवल लूट बेचता रहता है..."
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
					"speaker": "ivar",
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						3
					]
				},
				{
					"content": {
						"korean": "이번엔 또 뭐야? 짐만 늘어나잖아.",
						"english": "What is it this time? It'll just add to my burden.",
						"japanese": "今度は何だ？荷物が増えるだけじゃないか。",
						"chinese": "这次又是什么？只会增加我的负担。",
						"french": "Qu'est-ce que c'est cette fois ? Ça ne fera qu'alourdir ma charge.",
						"spanish": "Frente a: ¿Qué es esta vez? Solo aumentará mi carga.",
						"vietnamese": "Lần này là gì nữa? Chỉ làm tăng thêm gánh nặng của ta thôi.",
						"thai": "ครั้งนี้อะไรอีก? จะเพิ่มภาระให้ฉันเปล่าๆ",
						"hindi": "इस बार क्या है? यह सिर्फ मेरा बोझ बढ़ाएगा।"
					},
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "direction",
					"spot": [
						4,
						3
					],
					"speaker": "haraldr",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "흥! 이건 최고의 전리품이다! 거부하면 후회할 걸?",
						"english": "Hmph! This is the best loot! You'll regret it if you refuse!",
						"japanese": "ふん！これは最高の戦利品だ！断ったら後悔するぞ？",
						"chinese": "哼！这可是最好的战利品！你拒绝会后悔的！",
						"french": "Hmph ! C'est le meilleur butin ! Tu le regretteras si tu refuses !",
						"spanish": "¡Hum! ¡Este es el mejor botín! ¡Te arrepentirás si lo rechazas!",
						"vietnamese": "Hừm! Đây là chiến lợi phẩm tốt nhất! Ngươi sẽ hối hận nếu từ chối đấy!",
						"thai": "ฮึ่ม! นี่คือของที่ริบมาที่ดีที่สุด! เจ้าจะเสียใจถ้าปฏิเสธ!",
						"hindi": "हम्फ! यह सबसे अच्छा लूट है! यदि तुम मना करोगे तो पछताओगे!"
					},
					"emotion": "angry",
					"speaker": "haraldr",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"emotion": "base",
					"content": {
						"korean": "도대체 전리품이 뭔데 그렇게 강매하는 거야?",
						"english": "What kind of loot are you pushing so hard?",
						"japanese": "一体どんな戦利品なんだ、そんなに無理やり売ろうとするなんて？",
						"chinese": "这到底是什么战利品，你为何如此强行推销？",
						"french": "Mais quel genre de butin est-ce, pour que tu nous le forces à ce point ?",
						"spanish": "¿Qué clase de botín estás vendiendo tan agresivamente?",
						"vietnamese": "Chiến lợi phẩm gì mà cứ ép buộc phải mua vậy?",
						"thai": "นี่มันของรางวัลอะไร ทำไมถึงบังคับขายอย่างนี้?",
						"hindi": "यह कैसा लूट है जिसे तुम इतनी ज़बरदस्ती बेच रहे हो?"
					}
				},
				{
					"content": {
						"korean": "내 영업을 방해하는 건가? 너희, 감히…!",
						"english": "Are you interfering with my business? You dare…!",
						"japanese": "私の営業を邪魔するのか？貴様ら、よくも…！",
						"chinese": "你们是想妨碍我的生意吗？你们竟敢…！",
						"french": "Vous osez interférer avec mes affaires ? Vous… !",
						"spanish": "¿Están interfiriendo en mi negocio? ¡Ustedes, cómo se atreven…!",
						"vietnamese": "Mấy người đang cản trở công việc của ta à? Dám…!",
						"thai": "พวกแกกำลังขัดขวางการค้าของข้ารึ? พวกแก, กล้าดียังไง…!",
						"hindi": "क्या तुम मेरे धंधे में दखल दे रहे हो? तुम, हिम्मत कैसे हुई…!"
					},
					"emotion": "angry",
					"speaker": "haraldr",
					"type": "speech"
				},
				{
					"content": {
						"korean": "…저자의 광기가 심상치 않아.",
						"english": "...His madness is no laughing matter.",
						"japanese": "…あの男の狂気は尋常じゃない。",
						"chinese": "…那家伙的疯狂不一般。",
						"french": "...Sa folie est alarmante.",
						"spanish": "...La locura de este sujeto es inusual.",
						"vietnamese": "...Sự điên rồ của kẻ đó không phải dạng vừa.",
						"thai": "...ความบ้าคลั่งของเขาไม่ธรรมดา.",
						"hindi": "...उसकी सनक कुछ ज़्यादा ही है।"
					},
					"speaker": "ivar",
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"speaker": "ivar"
				},
				{
					"speaker": "haraldr",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						5,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "haraldr",
					"emotion": "angry",
					"content": {
						"korean": "이 전리품은 필히 사야 한다! 너희에게 영광을 가져다줄 테니!",
						"english": "You must buy this loot! It will bring you glory!",
						"japanese": "この戦利品は必ず買うべきだ！お前たちに栄光をもたらすだろうからな！",
						"chinese": "这件战利品必买！它将为你们带来荣耀！",
						"french": "Vous devez acheter ce butin ! Il vous apportera la gloire !",
						"spanish": "¡Deben comprar este botín! ¡Les traerá gloria!",
						"vietnamese": "Chiến lợi phẩm này nhất định phải mua! Nó sẽ mang lại vinh quang cho các ngươi!",
						"thai": "พวกเจ้าต้องซื้อของรางวัลนี้! มันจะนำความรุ่งโรจน์มาให้พวกเจ้า!",
						"hindi": "यह लूट तुम्हें ज़रूर खरीदना चाहिए! यह तुम्हें गौरव दिलाएगा!"
					}
				},
				{
					"content": {
						"korean": "영광? 도대체 무슨 영광을 말하는 거야?",
						"english": "Glory? What kind of glory are you talking about?",
						"japanese": "栄光？一体どんな栄光を言っているんだ？",
						"chinese": "荣耀？到底是什么荣耀？",
						"french": "La gloire ? De quelle gloire parles-tu ?",
						"spanish": "¿Gloria? ¿De qué gloria estás hablando?",
						"vietnamese": "Vinh quang? Rốt cuộc là vinh quang gì?",
						"thai": "ความรุ่งโรจน์? เจ้ากำลังพูดถึงความรุ่งโรจน์แบบไหน?",
						"hindi": "गौरव? तुम किस गौरव की बात कर रहे हो?"
					},
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "haraldr",
					"content": {
						"korean": "…어리석은 자들 같으니. 곧 알게 될 것이다.",
						"english": "...You foolish ones. You will soon know.",
						"japanese": "…愚かな者どもめ。すぐにわかることだろう。",
						"chinese": "…真是群愚蠢的家伙。你们很快就会明白的。",
						"french": "...Vous êtes stupides. Vous le saurez bientôt.",
						"spanish": "...Qué tontos sois. Pronto lo sabréis.",
						"vietnamese": "...Đúng là lũ ngu xuẩn. Các ngươi sẽ sớm biết thôi.",
						"thai": "...พวกคนโง่เง่าเอ๊ย. อีกไม่นานก็จะรู้เอง.",
						"hindi": "...तुम मूर्ख हो। तुम्हें जल्द ही पता चल जाएगा।"
					}
				},
				{
					"content": {
						"korean": "전리품 뒤에 숨겨진 진실은 뭘까.",
						"english": "What truth lies hidden behind the loot?",
						"japanese": "戦利品の裏に隠された真実とは一体何だろう。",
						"chinese": "战利品背后隐藏的真相是什么？",
						"french": "Quelle est la vérité cachée derrière le butin ?",
						"spanish": "¿Cuál será la verdad oculta tras el botín?",
						"vietnamese": "Sự thật ẩn giấu đằng sau chiến lợi phẩm là gì?",
						"thai": "ความจริงที่ซ่อนอยู่เบื้องหลังของรางวัลคืออะไรกันนะ?",
						"hindi": "लूट के पीछे छिपा सच क्या है?"
					},
					"speaker": "ivar",
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						3,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "ivar"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "haraldr",
					"spot": [
						4,
						3
					],
					"type": "direction"
				},
				{
					"content": {
						"korean": "거절은 없다. 내 전리품은 거부할 수 없는 선택지다.",
						"english": "There is no refusal. My loot is an offer you can't refuse.",
						"japanese": "拒否は許さない。私の戦利品は、拒むことのできない選択肢だ。",
						"chinese": "没有拒绝。我的战利品是无法拒绝的选择。",
						"french": "Il n'y a pas de refus. Mon butin est une option que vous ne pouvez pas refuser.",
						"spanish": "No hay rechazo. Mi botín es una opción irrefutable.",
						"vietnamese": "Không có chuyện từ chối. Chiến lợi phẩm của ta là một lựa chọn không thể chối từ.",
						"thai": "ไม่มีการปฏิเสธ ของรางวัลของข้าเป็นทางเลือกที่มิอาจปฏิเสธได้",
						"hindi": "कोई इनकार नहीं है। मेरी लूट एक ऐसा विकल्प है जिसे ठुकराया नहीं जा सकता।"
					},
					"speaker": "haraldr",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "협박하는 거야? 이게 무슨 상인이야!",
						"english": "Are you threatening us? What kind of merchant is this!",
						"japanese": "脅迫しているのか？これが何の商人だ！",
						"chinese": "你是在威胁吗？这算什么商人！",
						"french": "Est-ce une menace ? Quel genre de marchand est-ce !",
						"spanish": "¿Nos estás amenazando? ¡¿Qué clase de mercader eres?!",
						"vietnamese": "Ngươi đang đe dọa à? Đây là kiểu thương nhân gì vậy!",
						"thai": "นี่เจ้ากำลังขู่พวกเราอยู่รึ? นี่มันพ่อค้าอะไรกัน!",
						"hindi": "क्या तुम धमकी दे रहे हो? यह कैसा व्यापारी है!"
					}
				},
				{
					"type": "speech",
					"emotion": "happy",
					"speaker": "haraldr",
					"content": {
						"korean": "후회하지 않을 거다. 내가 보장한다!",
						"english": "You won't regret it. I guarantee it!",
						"japanese": "後悔はさせない。私が保証する！",
						"chinese": "你不会后悔的。我保证！",
						"french": "Vous ne le regretterez pas. Je le garantis !",
						"spanish": "No te arrepentirás. ¡Yo lo garantizo!",
						"vietnamese": "Các ngươi sẽ không hối hận đâu. Ta đảm bảo!",
						"thai": "พวกเจ้าจะไม่เสียใจ ข้ารับประกัน!",
						"hindi": "तुम्हें अफ़सोस नहीं होगा। मैं इसकी गारंटी देता हूँ!"
					}
				},
				{
					"type": "speech",
					"speaker": "ivar",
					"emotion": "base",
					"content": {
						"korean": "저자의 눈빛… 단순한 상인이 아냐.",
						"english": "His eyes... not just a merchant.",
						"japanese": "奴の目つき…ただの商人ではない。",
						"chinese": "他的眼神…绝非等闲商人。",
						"french": "Son regard... pas un simple marchand.",
						"spanish": "Su mirada... no es un simple mercader.",
						"vietnamese": "Ánh mắt hắn... không phải một thương nhân bình thường.",
						"thai": "แววตาของเขา... ไม่ใช่แค่พ่อค้าธรรมดา.",
						"hindi": "उसकी आँखें... एक साधारण व्यापारी नहीं है।"
					}
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "정체 모를 보스의 압도적인 힘에 탐험대는 쓰러졌다.",
						"english": "The expedition fell to the overwhelming power of the unknown boss.",
						"japanese": "探検隊は、正体不明のボスの圧倒的な力に倒れた。",
						"chinese": "探险队倒在了未知首领的压倒性力量之下。",
						"french": "L'expédition a succombé à la puissance écrasante du boss inconnu.",
						"spanish": "La expedición cayó ante el poder abrumador del jefe desconocido.",
						"vietnamese": "Đoàn thám hiểm đã gục ngã trước sức mạnh áp đảo của tên trùm vô danh.",
						"thai": "คณะสำรวจพ่ายแพ้ต่อพลังอันมหาศาลของบอสปริศนา",
						"hindi": "अभियान अज्ञात बॉस की जबरदस्त शक्ति के आगे नतमस्तक हो गया।"
					}
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "haraldr",
					"spot": [
						4,
						3
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "haraldr",
					"content": {
						"korean": "하찮은 것들! 최고의 전리품을 알아볼 눈도 없으면서!",
						"english": "Insignificant fools! You can't even recognize the greatest treasure!",
						"japanese": "くだらん奴らめ！最高の戦利品を見抜く目も持ち合わせていないくせに！",
						"chinese": "卑微的家伙！连最棒的战利品都认不出来！",
						"french": "Ignobles créatures ! Vous ne savez même pas reconnaître le plus grand des trésors !",
						"spanish": "!Insignificantes! !Ni siquiera sabéis reconocer el mayor botín!",
						"vietnamese": "Lũ vô dụng! Ngay cả kho báu tuyệt vời nhất mà cũng không nhận ra!",
						"thai": "พวกไร้ค่า! ไม่มีตาจะดูของล้ำค่าที่สุดหรือไง!",
						"hindi": "तुच्छ प्राणी! तुम तो सबसे बड़ी लूट को भी पहचान नहीं पाते!"
					}
				},
				{
					"content": {
						"korean": "젠장… 다시… 도전한다…!",
						"english": "Damn it... I'll... challenge again...!",
						"japanese": "くそ… もう一度… 挑戦する…！",
						"chinese": "可恶…… 我要…… 再次挑战……！",
						"french": "Bon sang... Je vais... retenter...!",
						"spanish": "Maldita sea... !Lo... intentaré de nuevo...!",
						"vietnamese": "Chết tiệt… Ta sẽ… thách đấu lại…!",
						"thai": "ให้ตายสิ… จะ… ท้าทายอีกครั้ง…!",
						"hindi": "धिक्कार है... मैं... फिर से... चुनौती दूँगा...!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "ivar",
					"spot": [
						2,
						3
					],
					"type": "direction"
				},
				{
					"spot": [
						4,
						3
					],
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"speaker": "haraldr"
				},
				{
					"speaker": "haraldr",
					"emotion": "happy",
					"type": "speech",
					"content": {
						"korean": "여기까지 왔군. 이제 진정한 전리품을 보여줄 시간이다!",
						"english": "You've made it this far. Now, time to reveal the true spoils!",
						"japanese": "よくぞここまで。いざ、真の戦利品を見せる時だ！",
						"chinese": "你们竟能走到这儿。是时候展示真正的战利品了！",
						"french": "Vous êtes arrivés jusqu'ici. Il est temps de révéler les vrais butins !",
						"spanish": "Han llegado hasta aquí. ¡Es hora de mostrar el verdadero botín!",
						"vietnamese": "Các ngươi đã đến được đây. Giờ là lúc để ta cho các ngươi thấy chiến lợi phẩm thật sự!",
						"thai": "เจ้ามาถึงนี่แล้วรึ ถึงเวลาเผยสมบัติที่แท้จริงแล้ว!",
						"hindi": "तुम इतनी दूर आ गए। अब, असली इनाम दिखाने का समय है!"
					}
				},
				{
					"content": {
						"korean": "또 전리품 타령이야? 지겨워 죽겠네.",
						"english": "Spoils again? I'm sick of it.",
						"japanese": "また戦利品の話か？うんざりだ。",
						"chinese": "又是战利品？烦死了。",
						"french": "Encore des butins ? Quelle barbe !",
						"spanish": "¿Más botín? Qué fastidio.",
						"vietnamese": "Lại là chiến lợi phẩm à? Phát chán rồi đấy.",
						"thai": "สมบัติอีกแล้วเหรอ? เบื่อจะตายอยู่แล้ว.",
						"hindi": "फिर से इनाम की बात? मैं थक गया हूँ।"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "…최고의 전리품! 발할라… 아니, 이 위대한 전투의 영광이 될 것이다!",
						"english": "...The greatest spoils! Valhalla... no, the glory of this great battle!",
						"japanese": "…最高の戦利品！ヴァルハラ…いや、この偉大な戦いの栄光となるだろう！",
						"chinese": "……最棒的战利品！瓦尔哈拉……不，是这场伟大战斗的荣耀！",
						"french": "...Les plus grands butins ! Valhalla... non, la gloire de cette grande bataille !",
						"spanish": "...¡El mejor botín! ¡Valhalla... no, la gloria de esta gran batalla!",
						"vietnamese": "...Chiến lợi phẩm tuyệt vời nhất! Valhalla... không, sẽ là vinh quang của trận chiến vĩ đại này!",
						"thai": "...สุดยอดสมบัติ! วัลฮัลลา... ไม่สิ ความรุ่งโรจน์ของศึกอันยิ่งใหญ่นี้ต่างหาก!",
						"hindi": "...सबसे बड़ा इनाम! वलहल्ला... नहीं, इस महान युद्ध की महिमा होगी!"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "haraldr"
				},
				{
					"content": {
						"korean": "그 순간, 거대한 그림자가 나타나 길을 막았다.",
						"english": "At that moment, a massive shadow appeared, blocking the way.",
						"japanese": "その瞬間、巨大な影が現れ、道を塞いだ。",
						"chinese": "就在那时，一个巨大的影子出现，挡住了去路。",
						"french": "À cet instant, une ombre gigantesque apparut, bloquant le chemin.",
						"spanish": "En ese instante, una sombra gigantesca apareció, bloqueando el camino.",
						"vietnamese": "Ngay lúc đó, một bóng đen khổng lồ xuất hiện, chặn lối đi.",
						"thai": "ทันใดนั้น เงาขนาดมหึมาปรากฏขึ้น ขวางทางไว้.",
						"hindi": "उसी पल, एक विशाल छाया प्रकट हुई और रास्ता रोक दिया।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "감히 내 영역을 침범하다니… 사라져라!",
						"english": "How dare you invade my domain... Vanish!",
						"japanese": "貴様ら、よくも我の領域を侵したな…消え失せろ！",
						"chinese": "竟敢侵犯我的领域……消失吧！",
						"french": "Comment osez-vous envahir mon domaine... Disparaissez !",
						"spanish": "¡Cómo osas invadir mi dominio... Desaparece!",
						"vietnamese": "Dám xâm phạm lãnh địa của ta... Biến đi!",
						"thai": "กล้าดียังไงมาบุกรุกอาณาเขตของข้า... จงหายไปซะ!",
						"hindi": "मेरी सीमा में घुसपैठ करने की हिम्मत कैसे हुई... गायब हो जाओ!"
					},
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "크윽… 감히… 이 몸을…!",
						"english": "Urgh... How dare... this body...!",
						"japanese": "くっ…よくも…この我を…！",
						"chinese": "呃……竟敢……对我……！",
						"french": "Argh... Comment osez-vous... mon corps...!",
						"spanish": "Ugh... ¡Cómo osáis... a mí...!",
						"vietnamese": "Khụ... Dám... với ta...!",
						"thai": "อึก... กล้าดียังไง... กับร่างนี้...!",
						"hindi": "उह... हिम्मत कैसे हुई... मेरे शरीर को...!"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "해치웠어!",
						"english": "We did it!",
						"japanese": "やったぞ！",
						"chinese": "搞定了！",
						"french": "On l'a eu !",
						"spanish": "¡Lo logramos!",
						"vietnamese": "Xử lý xong rồi!",
						"thai": "จัดการได้แล้ว!",
						"hindi": "हमने कर दिखाया!"
					},
					"emotion": "happy",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"spot": [
						2,
						3
					],
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"speaker": "ivar"
				},
				{
					"spot": [
						4,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "haraldr"
				},
				{
					"emotion": "happy",
					"speaker": "haraldr",
					"type": "speech",
					"content": {
						"korean": "훌륭하다! 역시 내 전리품은 너희의 영광을 쟁취하는 도구였어!",
						"english": "Excellent! My spoils were indeed a tool for you to achieve glory!",
						"japanese": "素晴らしい！やはり我の戦利品は、お前たちの栄光を勝ち取る道具だったな！",
						"chinese": "太棒了！我的战利品果然是你们赢得荣耀的工具！",
						"french": "Excellent ! Mes butins étaient bien un outil pour que vous obteniez la gloire !",
						"spanish": "¡Excelente! ¡Mis botines fueron, de hecho, una herramienta para que ustedes alcanzaran la gloria!",
						"vietnamese": "Tuyệt vời! Quả nhiên chiến lợi phẩm của ta là công cụ để các ngươi giành lấy vinh quang!",
						"thai": "ยอดเยี่ยม! สมบัติของข้าคือเครื่องมือให้พวกเจ้าคว้าความรุ่งโรจน์จริงๆ!",
						"hindi": "शानदार! मेरा इनाम वास्तव में तुम्हारी महिमा प्राप्त करने का एक साधन था!"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "ivar",
					"content": {
						"korean": "…저자는 자신의 광기를 시험하고 있군. \"강함의 끝\"이 무엇인지…",
						"english": "...He's testing his own madness. What the \"end of strength\" truly is...",
						"japanese": "…あの者は自身の狂気を試している。‟強さの果て”が何なのかを…。",
						"chinese": "……那家伙正在测试自己的疯狂。什么是“力量的尽头”……",
						"french": "...Il teste sa propre folie. Ce qu'est vraiment \"la fin de la force\"...",
						"spanish": "...Está probando su propia locura. Qué es realmente \"el límite de la fuerza\"...",
						"vietnamese": "...Hắn đang thử thách sự điên rồ của chính mình. \"Giới hạn của sức mạnh\" là gì...",
						"thai": "...เขากำลังทดสอบความบ้าคลั่งของตัวเอง \"จุดสิ้นสุดของความแข็งแกร่ง\" คืออะไรกันแน่...",
						"hindi": "...वह अपनी सनक का परीक्षण कर रहा है। \"शक्ति का अंत\" क्या है..."
					}
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "하랄드르의 기묘한 집착. 진실은 얼어붙은 설원 깊은 곳에 있었다.",
						"english": "Haraldr's strange obsession. The truth lay deep within the frozen wasteland.",
						"japanese": "ハラルドルの奇妙な執着。真実は凍てつく雪原の奥深くに隠されていた。",
						"chinese": "哈拉尔德的奇异执着。真相深藏于冰冻雪原深处。",
						"french": "L'étrange obsession d'Haraldr. La vérité se trouvait au plus profond de la toundra gelée.",
						"spanish": "La extraña obsesión de Haraldr. La verdad yacía en lo profundo del páramo helado.",
						"vietnamese": "Nỗi ám ảnh kỳ lạ của Haraldr. Sự thật nằm sâu trong vùng đất hoang băng giá.",
						"thai": "ความหมกมุ่นอันแปลกประหลาดของฮาราลเดอร์ ความจริงซ่อนเร้นอยู่ลึกสุดในดินแดนน้ำแข็ง",
						"hindi": "हारल्ड्र का अजीब जुनून। सच जमी हुई बंजर भूमि में गहराई में छिपा था।"
					}
				}
			]
		}
	]
} as const;
