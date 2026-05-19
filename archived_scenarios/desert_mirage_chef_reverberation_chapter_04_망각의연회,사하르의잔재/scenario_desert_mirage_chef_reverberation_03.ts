export const scenario_desert_mirage_chef_reverberation_03 = {
	"scenario_id": "desert_mirage_chef_reverberation_03",
	"order": 3,
	"act": "rising",
	"theme": "desert",
	"actors": {
		"kemet": {
			"id": "mon_2f8a1701-571b-40b5-92d9-69aa973cef18",
			"name": {
				"korean": "케메트",
				"english": "Kemet",
				"japanese": "ケメト",
				"chinese": "凯麦特",
				"french": "Kemet",
				"spanish": "Kemet",
				"vietnamese": "Kemet",
				"thai": "เคเมต",
				"hindi": "केमेट"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/fd9e93e0-2874-4647-0076-839718949500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8c3f2690-e8a9-44f5-4527-d8f8d4ea2800/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"사하르의 환상이 걷힌 사막. 망각의 그림자가 스며들었다.",
			"고대 기록은 잊혀진 진실을 속삭였다.",
			"절망과 상실. 그것이 모든 시작이었다.",
			"진실은 때로… 모래 폭풍처럼 잔인하다."
		],
		"english": [
			"The desert where Sahar's illusion faded. The shadow of oblivion seeped in.",
			"Ancient records whispered forgotten truths.",
			"Despair and loss. That was the beginning of everything.",
			"Truth can sometimes be... as cruel as a sandstorm."
		],
		"japanese": [
			"サハルの幻想が消えた砂漠。忘却の影が染み込んだ。",
			"古の記録は忘れ去られた真実を囁いた。",
			"絶望と喪失。それが全ての始まりだった。",
			"真実は時に…砂嵐のように残酷だ。"
		],
		"chinese": [
			"萨哈尔的幻象消散的沙漠。遗忘的阴影渗透其中。",
			"古老的记录低语着被遗忘的真相。",
			"绝望与失去。那是一切的开端。",
			"真相有时…如沙暴般残酷。"
		],
		"french": [
			"Le désert où l'illusion de Sahar s'est dissipée. L'ombre de l'oubli s'est infiltrée.",
			"D'anciens registres chuchotaient des vérités oubliées.",
			"Désespoir et perte. C'était le début de tout.",
			"La vérité est parfois… aussi cruelle qu'une tempête de sable."
		],
		"spanish": [
			"El desierto donde la ilusión de Sahar se desvaneció. La sombra del olvido se filtró.",
			"Antiguos registros susurraban verdades olvidadas.",
			"Desesperación y pérdida. Ese fue el comienzo de todo.",
			"La verdad a veces es… tan cruel como una tormenta de arena."
		],
		"vietnamese": [
			"Sa mạc nơi ảo ảnh của Sahar tan biến. Bóng tối lãng quên thấm đẫm.",
			"Những ghi chép cổ xưa thì thầm về những sự thật bị lãng quên.",
			"Tuyệt vọng và mất mát. Đó là khởi nguồn của mọi thứ.",
			"Sự thật đôi khi… tàn nhẫn như bão cát."
		],
		"thai": [
			"ทะเลทรายที่ภาพลวงตาของซาฮาร์จางหายไป เงาแห่งการหลงลืมได้แทรกซึมเข้ามา",
			"บันทึกโบราณกระซิบถึงความจริงที่ถูกลืม",
			"ความสิ้นหวังและการสูญเสีย นั่นคือจุดเริ่มต้นของทุกสิ่ง",
			"ความจริงบางครั้ง… โหดร้ายราวกับพายุทราย"
		],
		"hindi": [
			"सहार का भ्रम छंटा हुआ रेगिस्तान। विस्मृति की छाया फैल गई।",
			"प्राचीन अभिलेखों ने भूली हुई सच्चाइयों को फुसफुसाया।",
			"निराशा और हानि। वही सब की शुरुआत थी।",
			"सच कभी-कभी… रेत के तूफान जितना क्रूर होता है।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "고대 사막 문명의 유적. 시간조차 잊힌 곳이었다.",
						"english": "Ruins of an ancient desert civilization. A place forgotten even by time.",
						"japanese": "古代砂漠文明の遺跡。時間さえ忘れ去られた場所だった。",
						"chinese": "古老沙漠文明的遗迹。一个连时间都遗忘的地方。",
						"french": "Ruines d'une ancienne civilisation du désert. Un lieu oublié même du temps.",
						"spanish": "Ruinas de una antigua civilización del desierto. Un lugar olvidado incluso por el tiempo.",
						"vietnamese": "Tàn tích của một nền văn minh sa mạc cổ đại. Một nơi bị thời gian lãng quên.",
						"thai": "ซากปรักหักพังของอารยธรรมทะเลทรายโบราณ สถานที่ที่แม้แต่เวลาก็ยังลืมเลือน",
						"hindi": "प्राचीन रेगिस्तानी सभ्यता के खंडहर। एक ऐसी जगह जिसे समय भी भूल गया।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "kemet",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						4,
						2
					],
					"type": "direction"
				},
				{
					"speaker": "kemet",
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "찾았어! 드디어… 이걸 찾았다고!",
						"english": "Found it! Finally… I found this!",
						"japanese": "見つけた！ついに…これを見つけたぞ！",
						"chinese": "找到了！终于…我找到这个了！",
						"french": "Je l'ai trouvé ! Enfin… j'ai trouvé ça !",
						"spanish": "¡Lo encontré! ¡Por fin… encontré esto!",
						"vietnamese": "Tìm thấy rồi! Cuối cùng… tôi đã tìm thấy cái này!",
						"thai": "เจอแล้ว! ในที่สุด… ฉันก็เจอสิ่งนี้!",
						"hindi": "मिल गया! आखिरकार… मुझे यह मिल गया!"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "뭘요? 그렇게 흥분할 만한 게 뭔데요?",
						"english": "What? What's so exciting about it?",
						"japanese": "何をです？そんなに興奮するほどのものって何ですか？",
						"chinese": "什么？有什么值得这么兴奋的？",
						"french": "Quoi ? Qu'y a-t-il de si excitant ?",
						"spanish": "¿Qué? ¿Qué hay de tan emocionante?",
						"vietnamese": "Cái gì? Có gì mà đáng phấn khích đến vậy?",
						"thai": "อะไรนะ? มีอะไรที่น่าตื่นเต้นขนาดนั้น?",
						"hindi": "क्या? ऐसा क्या है जो इतना रोमांचक है?"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "망각의 정령에 대한 기록. 이 모든 혼란의 근원!",
						"english": "Records about the Spirit of Oblivion. The source of all this chaos!",
						"japanese": "忘却の精霊についての記録。この全ての混乱の根源だ！",
						"chinese": "关于遗忘精灵的记录。所有混乱的根源！",
						"french": "Des registres sur l'Esprit de l'Oubli. La source de tout ce chaos !",
						"spanish": "Registros sobre el Espíritu del Olvido. ¡La fuente de todo este caos!",
						"vietnamese": "Ghi chép về Tinh linh Lãng quên. Nguồn gốc của mọi hỗn loạn này!",
						"thai": "บันทึกเกี่ยวกับวิญญาณแห่งการหลงลืม ต้นตอของความวุ่นวายทั้งหมดนี้!",
						"hindi": "विस्मृति की आत्मा के बारे में अभिलेख। इस सारी अराजकता का स्रोत!"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "kemet"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						3,
						3
					],
					"action": "enter",
					"speaker": "kemet",
					"duration_ms": 450
				},
				{
					"speaker": "kemet",
					"content": {
						"korean": "기록에 따르면, 정령은 사람들의 절망과 상실감을 먹고 자라.",
						"english": "According to records, the spirit feeds on people's despair and sense of loss.",
						"japanese": "記録によると、精霊は人々の絶望と喪失感を糧に成長する。",
						"chinese": "根据记载，精灵以人们的绝望和失落感为食并成长。",
						"french": "Selon les registres, l'esprit se nourrit du désespoir et du sentiment de perte des gens.",
						"spanish": "Según los registros, el espíritu se alimenta de la desesperación y el sentimiento de pérdida de la gente.",
						"vietnamese": "Theo ghi chép, tinh linh lớn lên nhờ ăn cảm giác tuyệt vọng và mất mát của con người.",
						"thai": "ตามบันทึก วิญญาณจะเติบโตโดยกินความสิ้นหวังและความรู้สึกสูญเสียของผู้คน",
						"hindi": "अभिलेखों के अनुसार, आत्मा लोगों की निराशा और हानि की भावना पर पलती है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "그래서 사막에 이런 일이…?",
						"english": "So that's why this happened in the desert…?",
						"japanese": "それで砂漠にこんなことが…？",
						"chinese": "所以沙漠里才会发生这种事…？",
						"french": "Alors c'est pour ça que cela s'est passé dans le désert… ?",
						"spanish": "¿Así que por eso pasó esto en el desierto…?",
						"vietnamese": "Vậy nên sa mạc mới xảy ra chuyện này…?",
						"thai": "นั่นสินะ ทำไมถึงเกิดเรื่องแบบนี้ขึ้นในทะเลทราย…?",
						"hindi": "तो रेगिस्तान में ऐसा कुछ हुआ…?"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "그리고… 사하르가 쓰던 향신료가 봉인을 약화시켰어.",
						"english": "And... the spices Sahar used weakened the seal.",
						"japanese": "そして…サハールが使っていた香辛料が封印を弱めた。",
						"chinese": "而且…萨哈尔使用的香料削弱了封印。",
						"french": "Et... les épices utilisées par Sahar ont affaibli le sceau.",
						"spanish": "Y... las especias que usó Sahar debilitaron el sello.",
						"vietnamese": "Và... loại gia vị Sahar dùng đã làm suy yếu phong ấn.",
						"thai": "และ... เครื่องเทศที่ซาฮาร์ใช้ทำให้อาคมอ่อนแอลง",
						"hindi": "और... सहर के इस्तेमाल किए गए मसालों ने मुहर को कमज़ोर कर दिया।"
					},
					"speaker": "kemet"
				},
				{
					"content": {
						"korean": "그럼 사하르가 처음부터…!",
						"english": "Then Sahar... from the start...!",
						"japanese": "じゃあサハールは最初から…！",
						"chinese": "那么萨哈尔从一开始就…！",
						"french": "Alors Sahar... depuis le début... !",
						"spanish": "¡Entonces Sahar, desde el principio...!",
						"vietnamese": "Vậy là Sahar từ đầu đã...!",
						"thai": "งั้นซาฮาร์ก็... ตั้งแต่แรก...!",
						"hindi": "तो सहर ने शुरुआत से ही...!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_1"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "예전 환상 속에서… 희미한 그림자를 본 적 있어.",
						"english": "In a past vision... I saw a faint shadow.",
						"japanese": "昔の幻覚で…おぼろげな影を見たことがある。",
						"chinese": "在以前的幻象中…我曾见过一个模糊的影子。",
						"french": "Dans une ancienne vision... j'ai vu une ombre indistincte.",
						"spanish": "En una visión pasada... vi una sombra tenue.",
						"vietnamese": "Trong một ảo ảnh trước đây... tôi đã thấy một bóng hình mờ nhạt.",
						"thai": "ในภาพหลอนเมื่อก่อน... เคยเห็นเงารางๆ",
						"hindi": "पहले की कल्पनाओं में... मैंने एक धुंधली परछाई देखी है।"
					},
					"type": "speech",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "kemet",
					"duration_ms": 550,
					"type": "direction",
					"spot": [
						2,
						4
					]
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "정령은 네가 잊고 싶은 기억을 파고들어.",
						"english": "The spirit delves into memories you wish to forget.",
						"japanese": "精霊は君が忘れたい記憶を深く探る。",
						"chinese": "精灵会深入你想要忘记的记忆。",
						"french": "L'esprit fouille les souvenirs que tu veux oublier.",
						"spanish": "El espíritu hurga en los recuerdos que quieres olvidar.",
						"vietnamese": "Linh hồn đào sâu vào những ký ức mà bạn muốn quên.",
						"thai": "วิญญาณจะเจาะลึกความทรงจำที่นายอยากลืม",
						"hindi": "आत्मा तुम्हारी उन यादों में घुसपैठ करती है जिन्हें तुम भूलना चाहते हो।"
					},
					"speaker": "kemet"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "우리 안의 슬픔을 먹는다고?",
						"english": "It feeds on the sorrow within us?",
						"japanese": "私たちの悲しみを食べるって？",
						"chinese": "它吞噬我们内心的悲伤？",
						"french": "Elle se nourrit de notre tristesse intérieure ?",
						"spanish": "¿Se alimenta de la tristeza que hay en nosotros?",
						"vietnamese": "Nó ăn nỗi buồn trong chúng ta ư?",
						"thai": "มันกินความเศร้าในตัวเรางั้นเหรอ?",
						"hindi": "यह हमारे अंदर के दुख को खाता है?"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "봉인하는 방법은 있어. 하지만… 대가가 너무 커.",
						"english": "There's a way to seal it. But... the cost is too great.",
						"japanese": "封印する方法はある。だけど…代償が大きすぎる。",
						"chinese": "有办法封印。但是…代价太大了。",
						"french": "Il y a un moyen de le sceller. But... le prix est trop élevé.",
						"spanish": "Hay una forma de sellarlo. Pero... el precio es demasiado alto.",
						"vietnamese": "Có cách để phong ấn. Nhưng... cái giá quá đắt.",
						"thai": "มีวิธีผนึกมันนะ แต่... ราคาที่ต้องจ่ายมันแพงมาก",
						"hindi": "इसे सील करने का एक तरीका है। लेकिन... कीमत बहुत ज़्यादा है।"
					},
					"speaker": "kemet"
				},
				{
					"speaker": "character_1",
					"content": {
						"korean": "대가가 뭔데요?",
						"english": "What's the cost?",
						"japanese": "代償は何なの？",
						"chinese": "代价是什么？",
						"french": "Quel est le prix ?",
						"spanish": "¿Cuál es el precio?",
						"vietnamese": "Cái giá là gì?",
						"thai": "ราคาที่ต้องจ่ายคืออะไร?",
						"hindi": "क्या कीमत है?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "밤마다 들려오는 알 수 없는 노랫소리. 환상이 부활하려는 듯했다.",
						"english": "An unknown song heard every night. The illusion seemed to be resurrecting.",
						"japanese": "毎晩聞こえる、得体の知れない歌声。幻覚が蘇ろうとしているようだった。",
						"chinese": "每晚都能听到不知名的歌声。幻象似乎要复活了。",
						"french": "Un chant inconnu entendu chaque nuit. L'illusion semblait ressusciter.",
						"spanish": "Un canto desconocido que se escucha cada noche. La ilusión parecía resucitar.",
						"vietnamese": "Tiếng hát bí ẩn vang lên mỗi đêm. Ảo ảnh dường như đang hồi sinh.",
						"thai": "เสียงเพลงที่ไม่รู้จักดังขึ้นทุกคืน ภาพลวงตาดูเหมือนกำลังจะฟื้นคืนชีพ",
						"hindi": "हर रात एक अनजाना गाना सुनाई देता है। ऐसा लग रहा था जैसे भ्रम फिर से ज़िंदा होने वाला है।"
					},
					"speaker": "narrator"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 400,
					"speaker": "kemet",
					"action": "enter",
					"type": "direction",
					"spot": [
						1,
						3
					]
				},
				{
					"speaker": "kemet",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "지금 봉인하지 않으면… 모든 기억이 사라질 거야.",
						"english": "If you don't seal it now... all memories will vanish.",
						"japanese": "今封印しないと…全ての記憶が消える。",
						"chinese": "如果现在不封印…所有记忆都会消失。",
						"french": "Si tu ne le scelles pas maintenant... tous les souvenirs disparaîtront.",
						"spanish": "Si no lo sellas ahora... todos los recuerdos desaparecerán.",
						"vietnamese": "Nếu không phong ấn ngay bây giờ... mọi ký ức sẽ biến mất.",
						"thai": "ถ้าไม่ผนึกตอนนี้... ความจำทั้งหมดจะหายไป",
						"hindi": "अगर इसे अभी सील नहीं किया, तो... सारी यादें मिट जाएंगी।"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "선택하라고요? 이런 상황에서?",
						"english": "Choose? In this situation?",
						"japanese": "選べって？こんな状況で？",
						"chinese": "让我选择？在这种情况下？",
						"french": "Choisir ? Dans cette situation ?",
						"spanish": "¿Elegir? ¿En esta situación?",
						"vietnamese": "Chọn ư? Trong tình huống này ư?",
						"thai": "ให้เลือกงั้นเหรอ? ในสถานการณ์แบบนี้เนี่ยนะ?",
						"hindi": "चुनना है? ऐसी स्थिति में?"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "kemet",
					"content": {
						"korean": "그렇지 않으면… 넌 모든 것을 잊고 정령의 일부가 돼.",
						"english": "Otherwise... you'll forget everything and become part of the spirit.",
						"japanese": "さもなければ…お前は全てを忘れ、精霊の一部となる。",
						"chinese": "否则…你将遗忘一切，成为精灵的一部分。",
						"french": "Sinon... tu oublieras tout et deviendras une partie de l'esprit.",
						"spanish": "De lo contrario... lo olvidarás todo y te convertirás en parte del espíritu.",
						"vietnamese": "Nếu không... ngươi sẽ quên hết mọi thứ và trở thành một phần của tinh linh.",
						"thai": "มิฉะนั้น... เจ้าจะลืมทุกสิ่งและกลายเป็นส่วนหนึ่งของวิญญาณ",
						"hindi": "अन्यथा... तुम सब कुछ भूल जाओगे और आत्मा का हिस्सा बन जाओगे।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "우린 절대 잊지 않아. 어떤 대가를 치르더라도.",
						"english": "We will never forget. No matter the cost.",
						"japanese": "我々は決して忘れない。どんな代償を払っても。",
						"chinese": "我们绝不会忘记。无论付出什么代价。",
						"french": "Nous n'oublierons jamais. Quel qu'en soit le prix.",
						"spanish": "Nunca olvidaremos. Cueste lo que cueste.",
						"vietnamese": "Chúng ta sẽ không bao giờ quên. Dù phải trả giá nào đi nữa.",
						"thai": "เราจะไม่มีวันลืม ไม่ว่าจะต้องแลกด้วยสิ่งใด",
						"hindi": "हम कभी नहीं भूलेंगे। चाहे जो भी कीमत चुकानी पड़े।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "고대 유적의 심장부. 거대한 그림자가 일렁였다.",
						"english": "Deep within the ancient ruins. A colossal shadow flickered.",
						"japanese": "古代遺跡の心臓部。巨大な影が揺らめいた。",
						"chinese": "古老遗迹的深处。一个巨大的影子在晃动。",
						"french": "Au cœur des ruines antiques. Une ombre colossale vacillait.",
						"spanish": "En el corazón de las ruinas antiguas. Una sombra colosal parpadeó.",
						"vietnamese": "Sâu trong lòng di tích cổ. Một bóng đen khổng lồ chập chờn.",
						"thai": "ใจกลางซากปรักหักพังโบราณ เงาขนาดมหึมาสั่นไหว",
						"hindi": "प्राचीन खंडहरों के हृदय में। एक विशाल छाया जगमगा उठी।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "하찮은 존재들. 나의 힘을 시험하려는가?",
						"english": "Insignificant beings. Do you dare test my power?",
						"japanese": "取るに足らない存在ども。我が力を試すというのか？",
						"chinese": "渺小的存在。胆敢考验我的力量？",
						"french": "Êtres insignifiants. Osez-vous tester mon pouvoir ?",
						"spanish": "Seres insignificantes. ¿Os atrevéis a probar mi poder?",
						"vietnamese": "Những sinh vật nhỏ bé. Ngươi dám thử sức mạnh của ta sao?",
						"thai": "สิ่งมีชีวิตไร้ค่า เจ้ากล้าลองดีกับพลังของข้าหรือ?",
						"hindi": "तुच्छ प्राणी। क्या तुम मेरी शक्ति का परीक्षण करने की हिम्मत करते हो?"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "망각의 정령…!",
						"english": "Spirit of Oblivion...!",
						"japanese": "忘却の精霊…！",
						"chinese": "遗忘的精灵…！",
						"french": "Esprit de l'Oubli...!",
						"spanish": "¡Espíritu del Olvido...!",
						"vietnamese": "Tinh linh Lãng Quên...!",
						"thai": "วิญญาณแห่งการลืมเลือน...!",
						"hindi": "विस्मृति की आत्मा...!"
					}
				},
				{
					"spot": [
						4,
						3
					],
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"speaker": "kemet"
				},
				{
					"content": {
						"korean": "봉인해! 지금이야! 기회를 놓치지 마!",
						"english": "Seal it! Now! Don't miss this chance!",
						"japanese": "封印しろ！今だ！この好機を逃すな！",
						"chinese": "封印它！就是现在！别错过机会！",
						"french": "Scellez-le ! Maintenant ! Ne manquez pas cette chance !",
						"spanish": "¡Séllalo! ¡Ahora! ¡No pierdas esta oportunidad!",
						"vietnamese": "Phong ấn nó lại! Ngay bây giờ! Đừng bỏ lỡ cơ hội!",
						"thai": "ผนึกมันซะ! เดี๋ยวนี้! อย่าพลาดโอกาสนี้!",
						"hindi": "इसे सील करो! अभी! इस मौके को मत छोड़ो!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "kemet"
				},
				{
					"type": "direction",
					"action": "exit",
					"duration_ms": 400,
					"speaker": "kemet"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "이것이 끝은 아닐지니… 너희의 상실은… 영원할 것이다.",
						"english": "This is not the end... your loss... will be eternal.",
						"japanese": "これが終わりではない…お前たちの喪失は…永遠になるだろう。",
						"chinese": "这并非结束…你们的损失…将是永恒的。",
						"french": "Ce n'est pas la fin... votre perte... sera éternelle.",
						"spanish": "Este no es el final... vuestra pérdida... será eterna.",
						"vietnamese": "Đây không phải là kết thúc... sự mất mát của các ngươi... sẽ là vĩnh cửu.",
						"thai": "นี่ไม่ใช่จุดจบ... ความสูญเสียของพวกเจ้า... จะคงอยู่ตลอดไป",
						"hindi": "यह अंत नहीं है... तुम्हारा नुकसान... शाश्वत होगा।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "아니. 우린 다시 잊지 않아.",
						"english": "No. We won't forget again.",
						"japanese": "いや。我々は二度と忘れない。",
						"chinese": "不。我们不会再忘记了。",
						"french": "Non. Nous n'oublierons plus.",
						"spanish": "No. No volveremos a olvidar.",
						"vietnamese": "Không. Chúng ta sẽ không quên nữa.",
						"thai": "ไม่ เราจะไม่ลืมอีกแล้ว",
						"hindi": "नहीं। हम फिर कभी नहीं भूलेंगे।"
					}
				},
				{
					"content": {
						"korean": "정령의 힘이 약해지자, 사막은 잠시 숨을 골랐다.",
						"english": "As the spirit's power waned, the desert took a momentary breath.",
						"japanese": "精霊の力が弱まるにつれ、砂漠は一時的に息をひそめた。",
						"chinese": "随着精灵的力量减弱，沙漠暂时恢复了平静。",
						"french": "Alors que le pouvoir de l'esprit s'amenuisait, le désert marqua une pause.",
						"spanish": "Mientras el poder del espíritu disminuía, el desierto tomó un respiro momentáneo.",
						"vietnamese": "Khi sức mạnh của tinh linh suy yếu, sa mạc tạm thời lấy lại hơi thở.",
						"thai": "เมื่อพลังของวิญญาณอ่อนแอลง ทะเลทรายก็หยุดพักชั่วขณะ",
						"hindi": "जैसे ही आत्मा की शक्ति कम हुई, रेगिस्तान ने क्षण भर के लिए सांस ली।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "하지만 고대 기록의 마지막 페이지는… 아직 읽히지 않았다.",
						"english": "But the final page of the ancient records... has yet to be read.",
						"japanese": "だが、古代記録の最後のページは…まだ読まれていない。",
						"chinese": "但古老记录的最后一页…尚未被阅读。",
						"french": "Mais la dernière page des annales antiques... n'a pas encore été lue.",
						"spanish": "Pero la última página de los registros antiguos... aún no ha sido leída.",
						"vietnamese": "Nhưng trang cuối cùng của những ghi chép cổ đại... vẫn chưa được đọc.",
						"thai": "แต่หน้าสุดท้ายของบันทึกโบราณ... ยังไม่ถูกอ่าน",
						"hindi": "लेकिन प्राचीन अभिलेखों का अंतिम पृष्ठ... अभी तक पढ़ा नहीं गया है।"
					}
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "하하하… 절망에 잠겨라. 모든 것을 잊어버려.",
						"english": "Hahaha... Drown in despair. Forget everything.",
						"japanese": "ハハハ…絶望に沈め。全てを忘れろ。",
						"chinese": "哈哈哈……沉浸在绝望中吧。忘记一切。",
						"french": "Hahaha... Sombre dans le désespoir. Oublie tout.",
						"spanish": "Jajaja... Sumérgete en la desesperación. Olvídalo todo.",
						"vietnamese": "Hahaha... Hãy chìm đắm trong tuyệt vọng. Quên hết tất cả đi.",
						"thai": "ฮ่าฮ่าฮ่า... จมดิ่งสู่ความสิ้นหวัง ลืมทุกสิ่งไปซะ",
						"hindi": "हाहाहा... निराशा में डूब जाओ। सब कुछ भूल जाओ।"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "잊지 않아…! 절대 잊지 않아!",
						"english": "I won't forget...! I'll never forget!",
						"japanese": "忘れない…！絶対に忘れない！",
						"chinese": "我不会忘记…！绝不会忘记！",
						"french": "Je n'oublierai pas… ! Jamais je n'oublierai !",
						"spanish": "¡No lo olvidaré...! ¡Nunca lo olvidaré!",
						"vietnamese": "Tôi sẽ không quên...! Tuyệt đối không quên!",
						"thai": "ฉันไม่ลืม...! ไม่มีทางลืมเด็ดขาด!",
						"hindi": "मैं नहीं भूलूंगा...! कभी नहीं भूलूंगा!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "direction",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"duration_ms": 500,
					"speaker": "kemet"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "안 돼! 다시 일어서야 해!",
						"english": "No! I must get back up!",
						"japanese": "ダメだ！再び立ち上がらねば！",
						"chinese": "不行！我必须重新站起来！",
						"french": "Non ! Je dois me relever !",
						"spanish": "¡No! ¡Debo levantarme de nuevo!",
						"vietnamese": "Không được! Phải đứng dậy lần nữa!",
						"thai": "ไม่นะ! ต้องลุกขึ้นอีกครั้ง!",
						"hindi": "नहीं! मुझे फिर से खड़ा होना होगा!"
					},
					"speaker": "kemet"
				}
			],
			"id": 15
		}
	]
} as const;
