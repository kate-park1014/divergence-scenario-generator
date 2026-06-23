export const scenario_snowy_husk_30_05 = {
	"scenario_id": "snowy_husk_30_05",
	"order": 5,
	"act": "climax_finale",
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
		"pool_id": "pool_FrozenToy_Husk_V1"
	},
	"prologue": {
		"korean": [
			"영원한 눈보라가 멈춘 곳, 비로소 진실이 모습을 드러낸다.",
			"모든 단서는 하나의 비극을 가리키고 있었다.",
			"잃어버린 아이, 그리고 주인을 찾아 헤매는 얼어붙은 눈물.",
			"이제, 그 슬픔의 심연과 마주할 시간."
		],
		"english": [
			"Where the eternal blizzard ceased, the truth finally revealed itself.",
			"All clues pointed to a single tragedy.",
			"A lost child, and frozen tears searching for their owner.",
			"Now, it's time to face the abyss of that sorrow."
		],
		"japanese": [
			"永遠の吹雪が止んだ場所で、ついに真実がその姿を現す。",
			"すべての手がかりは、一つの悲劇を指し示していた。",
			"失われた子供と、持ち主を探し彷徨う凍てついた涙。",
			"今、その悲しみの深淵と向き合う時が来た。"
		],
		"chinese": [
			"永恒的暴风雪停止之处，真相终于显现。",
			"所有线索都指向一场悲剧。",
			"一个失踪的孩子，以及寻找主人的冰冷泪水。",
			"现在，是时候面对那悲伤的深渊了。"
		],
		"french": [
			"Là où le blizzard éternel cessa, la vérité se révéla enfin.",
			"Tous les indices pointaient vers une seule tragédie.",
			"Un enfant perdu, et des larmes gelées cherchant leur propriétaire.",
			"Maintenant, il est temps d'affronter l'abîme de cette tristesse."
		],
		"spanish": [
			"Donde la ventisca eterna cesó, la verdad finalmente se reveló.",
			"Todas las pistas apuntaban a una sola tragedia.",
			"Un niño perdido, y lágrimas congeladas buscando a su dueño.",
			"Ahora, es el momento de enfrentar el abismo de esa tristeza."
		],
		"vietnamese": [
			"Nơi bão tuyết vĩnh cửu dừng lại, sự thật cuối cùng đã lộ diện.",
			"Mọi manh mối đều chỉ về một bi kịch duy nhất.",
			"Một đứa trẻ thất lạc, và những giọt nước mắt đóng băng lang thang tìm chủ nhân.",
			"Bây giờ, là lúc đối mặt với vực thẳm của nỗi buồn đó."
		],
		"thai": [
			"ณ ที่ซึ่งพายุหิมะนิรันดร์หยุดลง ความจริงก็ได้ปรากฏกายในที่สุด",
			"เบาะแสทั้งหมดชี้ไปที่โศกนาฏกรรมเพียงหนึ่งเดียว",
			"เด็กที่หายไป และหยาดน้ำตาที่แข็งตัวกำลังตามหาเจ้าของ",
			"ถึงเวลาแล้วที่จะเผชิญหน้ากับห้วงลึกแห่งความโศกเศร้า"
		],
		"hindi": [
			"जहाँ शाश्वत बर्फीला तूफ़ान थम गया, वहाँ सत्य ने स्वयं को प्रकट किया।",
			"सभी सुराग एक ही त्रासदी की ओर इशारा कर रहे थे।",
			"एक खोया हुआ बच्चा, और अपने मालिक को ढूंढते हुए जमे हुए आँसू।",
			"अब, उस दुःख के रसातल का सामना करने का समय है।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "eira",
					"spot": [
						3,
						3
					],
					"action": "enter"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "…이곳이 모든 것이 시작된 곳이자, 끝날 곳.",
						"english": "...This is where everything began, and where it will end.",
						"japanese": "…ここが、全ての始まりであり、終わりの場所。",
						"chinese": "……这里是所有事情的起点，也将是终点。",
						"french": "...C'est ici que tout a commencé, et où tout finira.",
						"spanish": "...Aquí es donde todo comenzó, y donde terminará.",
						"vietnamese": "…Đây là nơi mọi thứ bắt đầu, và cũng là nơi kết thúc.",
						"thai": "…ที่นี่คือจุดเริ่มต้นของทุกสิ่ง และเป็นที่สิ้นสุดของมัน",
						"hindi": "...यह वह जगह है जहाँ सब कुछ शुरू हुआ था, और जहाँ यह समाप्त होगा।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "허스크의 흔적이 더 선명해졌어.",
						"english": "Husk's traces are clearer now.",
						"japanese": "ハスクの痕跡が、より鮮明になった。",
						"chinese": "赫斯克的痕迹更清晰了。",
						"french": "Les traces de Husk sont plus claires maintenant.",
						"spanish": "Las huellas de Husk son más claras ahora.",
						"vietnamese": "Dấu vết của Husk giờ đã rõ ràng hơn.",
						"thai": "ร่องรอยของฮัสค์ชัดเจนขึ้นแล้ว",
						"hindi": "हस्क के निशान अब और स्पष्ट हो गए हैं।"
					},
					"emotion": "base"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "그래요. 우리가 모은 모든 조각들이 여기에서 하나의 그림을 완성해요.",
						"english": "Yes. All the pieces we've gathered complete a single picture here.",
						"japanese": "はい。私たちが集めたすべての破片が、ここで一つの絵を完成させます。",
						"chinese": "是的。我们收集到的所有碎片都在这里拼成了一幅完整的画。",
						"french": "Oui. Toutes les pièces que nous avons rassemblées forment une image complète ici.",
						"spanish": "Sí. Todas las piezas que hemos reunido completan un solo cuadro aquí.",
						"vietnamese": "Đúng vậy. Mọi mảnh ghép chúng ta thu thập được đều hoàn thành một bức tranh duy nhất ở đây.",
						"thai": "ใช่ ชิ้นส่วนทั้งหมดที่เรารวบรวมมาได้มาประกอบกันเป็นภาพเดียวที่นี่",
						"hindi": "हाँ। हमने जो भी टुकड़े इकट्ठे किए हैं, वे सब मिलकर यहाँ एक पूरी तस्वीर बनाते हैं。"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "eira",
					"spot": [
						3,
						3
					],
					"action": "enter",
					"duration_ms": 500
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "이 극한의 추위 속에서… 느껴지던 미약한 온기. 기억하나요?",
						"english": "In this extreme cold... that faint warmth we felt. Do you remember?",
						"japanese": "この極限の寒さの中で…感じられたかすかな温もり。覚えていますか？",
						"chinese": "在这极度的严寒中……感受到的微弱暖意。你还记得吗？",
						"french": "Dans ce froid extrême... cette faible chaleur que nous ressentions. Vous en souvenez-vous ?",
						"spanish": "En este frío extremo... esa tenue calidez que sentimos. ¿Lo recuerdas?",
						"vietnamese": "Trong cái lạnh khắc nghiệt này... hơi ấm mờ nhạt chúng ta cảm nhận được. Bạn có nhớ không?",
						"thai": "ในความหนาวเหน็บสุดขั้วนี้... ความอบอุ่นจางๆ ที่รู้สึกได้ จำได้ไหม?",
						"hindi": "इस अत्यधिक ठंड में… वह हल्की-सी गर्माहट जो महसूस हुई थी। क्या आपको याद है?"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "따뜻한 기운… 허스크한테서 느껴진다고?",
						"english": "Warm energy... from the Husk?",
						"japanese": "暖かい気配…ハスクから感じられるって？",
						"chinese": "温暖的气息……是从赫斯克身上感觉到的吗？",
						"french": "Une énergie chaleureuse... du Spectre ?",
						"spanish": "¿Una energía cálida... del Cascarón?",
						"vietnamese": "Một nguồn năng lượng ấm áp... từ Husk?",
						"thai": "พลังงานอบอุ่น... จากฮัสค์เหรอ?",
						"hindi": "गर्म ऊर्जा… हस्क से महसूस हुई?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "네. 그것은 단순한 생명력이 아니었어요. 순수한 그리움의 흔적이었죠.",
						"english": "Yes. It wasn't mere life force. It was a trace of pure longing.",
						"japanese": "はい。それは単なる生命力ではありませんでした。純粋な郷愁の痕跡でした。",
						"chinese": "是的。那不是单纯的生命力。那是纯粹的思念的痕迹。",
						"french": "Oui. Ce n'était pas une simple force vitale. C'était la trace d'un pur désir ardent.",
						"spanish": "Sí. No era una simple fuerza vital. Era el rastro de una pura añoranza.",
						"vietnamese": "Vâng. Đó không chỉ là sức sống đơn thuần. Đó là dấu vết của nỗi khao khát thuần khiết.",
						"thai": "ใช่ มันไม่ใช่แค่พลังชีวิต แต่มันคือร่องรอยของความโหยหาอันบริสุทธิ์",
						"hindi": "हाँ। वह केवल जीवन शक्ति नहीं थी। वह शुद्ध लालसा का निशान था।"
					},
					"emotion": "sad",
					"speaker": "eira",
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "eira",
					"type": "direction",
					"spot": [
						3,
						3
					]
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "부서진 얼음 조각 사이에서 발견했던… 특이한 직물 섬유.",
						"english": "Discovered among the broken ice shards... unusual fabric fibers.",
						"japanese": "砕けた氷の破片の間で発見した…特異な織物繊維。",
						"chinese": "在破碎的冰块中发现的……奇特的纺织纤维。",
						"french": "Découvert parmi les éclats de glace brisés... des fibres textiles inhabituelles.",
						"spanish": "Descubierto entre los trozos de hielo rotos... fibras textiles inusuales.",
						"vietnamese": "Tìm thấy giữa những mảnh băng vỡ... sợi vải kỳ lạ.",
						"thai": "ค้นพบระหว่างเศษน้ำแข็งที่แตก... เส้นใยผ้าแปลกๆ",
						"hindi": "टूटे हुए बर्फ के टुकड़ों के बीच मिली… असामान्य कपड़े की रेशे।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "그래, 괴물의 몸에서 나온 건 아니었지.",
						"english": "Right, it wasn't from the monster's body.",
						"japanese": "ええ、怪物の体から出たものではなかったな。",
						"chinese": "对，那不是从怪物身上出来的。",
						"french": "Oui, ça ne venait pas du corps du monstre.",
						"spanish": "Cierto, no era del cuerpo del monstruo.",
						"vietnamese": "Đúng vậy, nó không phải từ cơ thể quái vật.",
						"thai": "ใช่ มันไม่ได้มาจากตัวสัตว์ประหลาด",
						"hindi": "हाँ, वह राक्षस के शरीर से नहीं था।"
					}
				},
				{
					"type": "speech",
					"speaker": "eira",
					"emotion": "base",
					"content": {
						"korean": "네. 오래된 천 인형의 것과 일치해요. 그리고… 유적에서 찾았던 어린이용 장신구.",
						"english": "Yes. It matches that of an old cloth doll. And... the child's accessory we found in the ruins.",
						"japanese": "はい。古い布人形のものと一致します。そして…遺跡で見つけた子供用の装飾品。",
						"chinese": "是的。它与一个旧布娃娃的相符。而且……我们在遗迹中发现的儿童饰品。",
						"french": "Oui. Cela correspond à celui d'une vieille poupée de chiffon. Et... l'accessoire pour enfant que nous avons trouvé dans les ruines.",
						"spanish": "Sí. Coincide con el de una vieja muñeca de trapo. Y... el accesorio infantil que encontramos en las ruinas.",
						"vietnamese": "Vâng. Nó khớp với của một con búp bê vải cũ. Và... món phụ kiện trẻ em chúng ta tìm thấy trong di tích.",
						"thai": "ใช่ มันตรงกับตุ๊กตาผ้าเก่า และ... เครื่องประดับของเด็กที่เราพบในซากปรักหักพัง",
						"hindi": "हाँ। वह एक पुरानी कपड़े की गुड़िया से मेल खाता है। और… वह बच्चों का आभूषण जो हमने खंडहरों में पाया था।"
					}
				},
				{
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "모든 것이 말하고 있어요. 허스크가 무엇이었는지.",
						"english": "Everything is telling us. What the Husk truly was.",
						"japanese": "すべてが語っています。ハスクが何であったかを。",
						"chinese": "一切都在说明。赫斯克到底是什么。",
						"french": "Tout nous indique. Ce que le Spectre était vraiment.",
						"spanish": "Todo lo está diciendo. Lo que realmente era el Cascarón.",
						"vietnamese": "Mọi thứ đều đang nói lên. Husk thực sự là gì.",
						"thai": "ทุกสิ่งกำลังบอกเราว่า ฮัสค์คืออะไร",
						"hindi": "सब कुछ बता रहा है। कि हस्क क्या था।"
					},
					"emotion": "sad"
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
					"speaker": "eira",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "eira",
					"emotion": "sad",
					"content": {
						"korean": "여기까지 오니 더 선명하게 들려요. 그 아이의 흐느낌이… 자장가 소리가.",
						"english": "Coming this far, I can hear it more clearly now. The child's whimpering... the sound of a lullaby.",
						"japanese": "ここまで来ると、もっとはっきりと聞こえます。その子のすすり泣きが…子守歌の声が。",
						"chinese": "走到这里，我听得更清楚了。那个孩子的抽泣声……摇篮曲的声音。",
						"french": "En arrivant ici, je l'entends plus clairement. Les sanglots de l'enfant... le son d'une berceuse.",
						"spanish": "Al llegar hasta aquí, lo oigo con más claridad. El sollozo del niño... el sonido de una nana.",
						"vietnamese": "Đi đến đây, tôi nghe rõ hơn. Tiếng nức nở của đứa trẻ... tiếng hát ru.",
						"thai": "มาถึงนี่แล้วได้ยินชัดเจนขึ้น เสียงสะอื้นของเด็ก... เสียงเพลงกล่อมเด็ก",
						"hindi": "यहाँ तक आने पर, मुझे और स्पष्ट सुनाई दे रहा है। उस बच्चे की सिसकियाँ… लोरी की आवाज़।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "환청이 아니었어? 허스크가 내는 소리였다고?",
						"english": "It wasn't a hallucination? The Husk was making the sound?",
						"japanese": "幻聴ではなかったのか？ハスクが出していた音だったと？",
						"chinese": "不是幻听吗？是赫斯克发出的声音？",
						"french": "Ce n'était pas une hallucination ? Le Spectre faisait ce bruit ?",
						"spanish": "¿No era una alucinación? ¿El Cascarón estaba emitiendo ese sonido?",
						"vietnamese": "Không phải ảo giác sao? Tiếng đó là do Husk tạo ra ư?",
						"thai": "ไม่ใช่ภาพหลอนเหรอ? ฮัสค์เป็นคนส่งเสียงนั้นเหรอ?",
						"hindi": "यह मतिभ्रम नहीं था? क्या हस्क वह आवाज़ निकाल रहा था?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"emotion": "sad",
					"content": {
						"korean": "아니요. 허스크가 기억하는, 잃어버린 주인의 마지막 흔적.",
						"english": "No. The last trace of its lost owner, remembered by Husk.",
						"japanese": "いいえ。ハスクが覚えている、失われた主人の最後の痕跡。",
						"chinese": "不。哈斯克记忆中，失去主人的最后痕迹。",
						"french": "Non. La dernière trace de son maître perdu, dont Husk se souvient.",
						"spanish": "No. El último rastro de su dueño perdido, recordado por Husk.",
						"vietnamese": "Không. Dấu vết cuối cùng của chủ nhân đã mất, được Husk ghi nhớ.",
						"thai": "ไม่ใช่ ร่องรอยสุดท้ายของเจ้าของที่หายไป ซึ่งฮัสค์จดจำได้",
						"hindi": "नहीं। हस्क को याद है, खोए हुए मालिक का आखिरी निशान।"
					}
				},
				{
					"speaker": "eira",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "그 아이는 인형을 통해 계속 말을 걸고 있었던 거예요. '가지 마…'",
						"english": "The child kept speaking through the doll. 'Don't go...'",
						"japanese": "その子は人形を通じて話し続けていたんです。「行かないで…」",
						"chinese": "那个孩子通过玩偶不停地说着话。“别走……”",
						"french": "L'enfant n'arrêtait pas de parler à travers la poupée. \"Ne pars pas...\"",
						"spanish": "El niño seguía hablando a través de la muñeca. \"No te vayas...\"",
						"vietnamese": "Đứa bé cứ nói chuyện qua con búp bê. 'Đừng đi...'",
						"thai": "เด็กน้อยยังคงพูดผ่านตุ๊กตา \"อย่าไปนะ...\"",
						"hindi": "वह बच्चा गुड़िया के ज़रिए बात करता रहा। 'मत जाओ...'"
					}
				}
			]
		},
		{
			"id": 15,
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "거대한 얼음 괴물 '허스크'가 굳건히 서 있었다. 그 눈동자에 슬픔이 얼어붙어 있었다.",
						"english": "The colossal ice monster 'Husk' stood firm. Sorrow was frozen in its eyes.",
						"japanese": "巨大な氷の怪物「ハスク」が不動のまま立っていた。その瞳には悲しみが凍りついていた。",
						"chinese": "巨大的冰之怪物“哈斯克”坚定地站着。悲伤冻结在它的眼眸中。",
						"french": "Le monstre de glace colossal 'Husk' se tenait fermement. La tristesse était figée dans ses yeux.",
						"spanish": "El colosal monstruo de hielo 'Husk' se mantenía firme. La tristeza estaba congelada en sus ojos.",
						"vietnamese": "Quái vật băng khổng lồ 'Husk' đứng vững. Nỗi buồn đóng băng trong đôi mắt nó.",
						"thai": "สัตว์ประหลาดน้ำแข็งขนาดยักษ์ 'ฮัสค์' ยืนหยัดอย่างมั่นคง ความโศกเศร้าถูกแช่แข็งอยู่ในดวงตาของมัน",
						"hindi": "विशाल बर्फीला राक्षस 'हस्क' दृढ़ता से खड़ा था। उसकी आँखों में उदासी जमी हुई थी।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"spot": [
						3,
						3
					],
					"type": "direction",
					"speaker": "eira",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "eira",
					"emotion": "sad",
					"content": {
						"korean": "허스크… 당신은 괴물이 아니었어요. 그저… 잃어버린 것을 찾는 인형.",
						"english": "Husk... You weren't a monster. Just... a doll searching for what it lost.",
						"japanese": "ハスク…あなたは怪物じゃなかった。ただ…失われたものを探す人形。",
						"chinese": "哈斯克……你不是怪物。只是……一个寻找失物的玩偶。",
						"french": "Husk... Tu n'étais pas un monstre. Juste... une poupée cherchant ce qu'elle a perdu.",
						"spanish": "Husk... No eras un monstruo. Solo... una muñeca buscando lo que perdió.",
						"vietnamese": "Husk... Bạn không phải là quái vật. Chỉ là... một con búp bê đang tìm kiếm thứ đã mất.",
						"thai": "ฮัสค์... คุณไม่ใช่สัตว์ประหลาด แค่... ตุ๊กตาที่กำลังตามหาสิ่งที่หายไป",
						"hindi": "हस्क... तुम राक्षस नहीं थे। बस... एक गुड़िया जो अपनी खोई हुई चीज़ ढूंढ रही थी।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "인형…?",
						"english": "A doll...?",
						"japanese": "人形…？",
						"chinese": "玩偶……？",
						"french": "Une poupée...?",
						"spanish": "¿Una muñeca...?",
						"vietnamese": "Một con búp bê...?",
						"thai": "ตุ๊กตา...?",
						"hindi": "गुड़िया...?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "네. 폭설 속에 사라진 아이가 애지중지하던, 낡은 천 인형.",
						"english": "Yes. An old cloth doll, cherished by the child who vanished in the blizzard.",
						"japanese": "ええ。吹雪の中で消えた子供が大切にしていた、古い布の人形。",
						"chinese": "是的。在暴风雪中消失的孩子，曾珍视的旧布玩偶。",
						"french": "Oui. Une vieille poupée de chiffon, chérie par l'enfant qui a disparu dans le blizzard.",
						"spanish": "Sí. Una vieja muñeca de trapo, apreciada por el niño que desapareció en la ventisca.",
						"vietnamese": "Vâng. Một con búp bê vải cũ, được đứa trẻ biến mất trong bão tuyết yêu quý.",
						"thai": "ใช่ ตุ๊กตาผ้าเก่าแก่ที่เด็กคนนั้นซึ่งหายไปในพายุหิมะรักและหวงแหน",
						"hindi": "हाँ। एक पुरानी कपड़े की गुड़िया, जिसे उस बच्चे ने सँजोया था जो बर्फीले तूफान में गायब हो गया।"
					},
					"emotion": "sad"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "그 순수한 그리움과 혹독한 추위가 당신을 이렇게 만든 거예요.",
						"english": "That pure longing and the harsh cold made you this way.",
						"japanese": "その純粋な郷愁と厳しい寒さがあなたをこうさせたんです。",
						"chinese": "那纯粹的思念和严酷的寒冷，将你变成了这样。",
						"french": "Cette pure nostalgie et le froid rigoureux vous ont transformé ainsi.",
						"spanish": "Esa pura añoranza y el frío intenso te transformaron así.",
						"vietnamese": "Nỗi nhớ thuần khiết và cái lạnh khắc nghiệt đã biến bạn thành thế này.",
						"thai": "ความปรารถนาอันบริสุทธิ์และความหนาวเย็นอันโหดร้ายทำให้คุณเป็นแบบนี้",
						"hindi": "उस शुद्ध लालसा और कठोर ठंड ने तुम्हें ऐसा बना दिया।"
					},
					"speaker": "eira",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"emotion": "sad",
					"content": {
						"korean": "…아가… 내 아가…",
						"english": "...My child... My child...",
						"japanese": "…我が子よ…私の我が子よ…",
						"chinese": "……孩子……我的孩子……",
						"french": "...Mon enfant... Mon enfant...",
						"spanish": "...Mi niño... Mi niño...",
						"vietnamese": "...Con của ta... Con của ta...",
						"thai": "...ลูกของฉัน... ลูกของฉัน...",
						"hindi": "...मेरे बच्चे... मेरे बच्चे..."
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "우리는… 이 슬픔을 멈춰야 해.",
						"english": "We... must stop this sorrow.",
						"japanese": "私たちは…この悲しみを止めなければならない。",
						"chinese": "我们……必须阻止这份悲伤。",
						"french": "Nous... devons arrêter cette tristesse.",
						"spanish": "Debemos... detener esta tristeza.",
						"vietnamese": "Chúng ta... phải ngăn chặn nỗi buồn này.",
						"thai": "เรา... ต้องหยุดความเศร้าโศกนี้",
						"hindi": "हमें... इस दुख को रोकना होगा।"
					}
				},
				{
					"content": {
						"korean": "…누구도… 내 아가를… 데려갈 수 없어…!",
						"english": "...No one... can take... my child...!",
						"japanese": "…誰も…私の我が子を…連れて行かせない…！",
						"chinese": "……谁也……不能带走……我的孩子……！",
						"french": "...Personne... ne peut emmener... mon enfant...!",
						"spanish": "...¡Nadie... puede llevarse... a mi niño...!",
						"vietnamese": "...Không ai... có thể đưa... con của ta đi...!",
						"thai": "...ไม่มีใคร... พา... ลูกของฉันไปได้...!",
						"hindi": "...कोई भी... मेरे बच्चे को... नहीं ले जा सकता...!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "boss"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "얼어붙은 그리움이 모든 것을 집어삼켰다.",
						"english": "Frozen longing consumed everything.",
						"japanese": "凍てついた郷愁がすべてを飲み込んだ。",
						"chinese": "冰冷的思念吞噬了一切。",
						"french": "Un désir gelé consuma tout.",
						"spanish": "La añoranza congelada lo consumió todo.",
						"vietnamese": "Nỗi khao khát đóng băng nuốt chửng mọi thứ.",
						"thai": "ความโหยหาที่เยือกแข็งกลืนกินทุกสิ่ง",
						"hindi": "जमी हुई लालसा ने सब कुछ निगल लिया।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "…누구도… 내 아가를… 방해할 수 없어…!",
						"english": "...No one... can disturb... my child...!",
						"japanese": "…誰も…私の坊やを…邪魔することはできない…！",
						"chinese": "……没有人……能打扰……我的孩子……！",
						"french": "...Personne... ne peut déranger... mon enfant... !",
						"spanish": "...Nadie... puede molestar... a mi hijo... !",
						"vietnamese": "...Không ai... có thể làm phiền... con của ta...!",
						"thai": "...ไม่มีใคร... สามารถรบกวน... ลูกของฉัน... ได้!",
						"hindi": "...कोई नहीं... मेरे बच्चे को... परेशान कर सकता...!"
					},
					"speaker": "boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "아직… 끝나지 않았어. 우리는… 너의 슬픔을 멈출 거야.",
						"english": "It's not over yet... We will... stop your sorrow.",
						"japanese": "まだ…終わってない。私たちは…あなたの悲しみを止める。",
						"chinese": "还没有…结束。我们…会阻止你的悲伤。",
						"french": "Ce n'est pas encore fini... Nous... arrêterons ta tristesse.",
						"spanish": "Aún no ha terminado... Nosotros... detendremos tu pena.",
						"vietnamese": "Vẫn chưa… kết thúc. Chúng ta… sẽ ngăn nỗi buồn của ngươi lại.",
						"thai": "ยัง…ไม่จบ เราจะ…หยุดความโศกเศร้าของเจ้า",
						"hindi": "अभी…खत्म नहीं हुआ है। हम…तुम्हारे दुख को रोकेंगे।"
					}
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "허스크의 거대한 몸체가 산산이 부서졌다. 얼음 파편들이 눈보라처럼 쏟아졌다.",
						"english": "The Husk's massive body shattered. Ice shards poured down like a blizzard.",
						"japanese": "ハスクの巨大な体が粉々に砕け散った。氷の破片が吹雪のように降り注いだ。",
						"chinese": "巨型赫斯克的身躯四分五裂。冰屑如暴风雪般倾泻而下。",
						"french": "Le corps massif du Husk se brisa en mille morceaux. Des éclats de glace s'abattirent comme une tempête.",
						"spanish": "El enorme cuerpo del Husk se hizo pedazos. Escombros de hielo cayeron como una ventisca.",
						"vietnamese": "Thân thể khổng lồ của Husk vỡ vụn. Những mảnh băng đổ xuống như bão tuyết.",
						"thai": "ร่างมหึมาของฮัสค์แตกเป็นเสี่ยงๆ เศษน้ำแข็งร่วงหล่นราวกับพายุหิมะ",
						"hindi": "हस्क का विशाल शरीर चकनाचूर हो गया। बर्फ के टुकड़े बर्फीले तूफान की तरह गिरने लगे。"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "그 잔해 속에서 낡고 해진 작은 천 인형이 모습을 드러냈다.",
						"english": "Amidst the debris, a small, old, tattered cloth doll emerged.",
						"japanese": "その残骸の中から、古く擦り切れた小さな布人形が現れた。",
						"chinese": "在废墟中，一个破旧的小布娃娃显露出来。",
						"french": "Au milieu des débris, une petite poupée de chiffon vieille et déchirée apparut.",
						"spanish": "Entre los escombros, una pequeña muñeca de trapo vieja y raída apareció.",
						"vietnamese": "Giữa đống đổ nát, một con búp bê vải nhỏ, cũ kỹ và rách nát xuất hiện.",
						"thai": "ท่ามกลางซากปรักหักพัง ตุ๊กตาผ้าเก่าแก่และขาดรุ่งริ่งตัวเล็กๆ ปรากฏตัวขึ้น",
						"hindi": "उस मलबे में से एक पुरानी, फटी हुई छोटी कपड़े की गुड़िया निकली।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "인형의 한쪽 팔에는 어린아이가 직접 수놓은 듯한 조악한 꽃 문양이 새겨져 있었다.",
						"english": "On one of the doll's arms was a crude floral pattern, as if embroidered by a child.",
						"japanese": "人形の片腕には、子供が自分で刺繍したような粗末な花の模様が施されていた。",
						"chinese": "娃娃的一只手臂上，有一个粗糙的花朵图案，仿佛是孩子亲手绣的。",
						"french": "Sur l'un des bras de la poupée, il y avait un motif floral grossier, comme brodé par un enfant.",
						"spanish": "En uno de los brazos de la muñeca había un tosco patrón floral, como bordado por un niño.",
						"vietnamese": "Trên một cánh tay của búp bê có một họa tiết hoa thô sơ, như thể được một đứa trẻ tự thêu.",
						"thai": "บนแขนข้างหนึ่งของตุ๊กตามีลวดลายดอกไม้หยาบๆ ราวกับเด็กเป็นคนปักเอง",
						"hindi": "गुड़िया के एक हाथ पर एक भद्दा फूलों का डिज़ाइन था, जैसे किसी बच्चे ने खुद कढ़ाई की हो।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이내, 인형의 찢어진 천 사이에서 희미한 목소리가 울려 퍼졌다.",
						"english": "Soon, a faint voice echoed from within the doll's torn fabric.",
						"japanese": "やがて、人形の破れた布の間から、かすかな声が響き渡った。",
						"chinese": "很快，一个微弱的声音从娃娃破损的布料中回荡开来。",
						"french": "Bientôt, une voix faible résonna à travers le tissu déchiré de la poupée.",
						"spanish": "Pronto, una voz tenue resonó desde el tejido roto de la muñeca.",
						"vietnamese": "Ngay sau đó, một giọng nói yếu ớt vang lên từ giữa lớp vải rách của búp bê.",
						"thai": "ไม่นานนัก เสียงแผ่วเบาก็ดังก้องออกมาจากผ้าที่ขาดรุ่งริ่งของตุ๊กตา",
						"hindi": "जल्द ही, गुड़िया के फटे हुए कपड़े से एक धीमी आवाज़ गूँज उठी।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "…아가, 내가 지켜줄게. 어디에 있든… 네 곁을… 영원히…",
						"english": "...My child, I'll protect you. Wherever you are... I'll be by your side... forever...",
						"japanese": "…坊や、私が守ってあげる。どこにいても…あなたのそばに…永遠に…",
						"chinese": "……孩子，我会保护你。无论你在哪里……我都会在你身边……永远……",
						"french": "...Mon enfant, je te protégerai. Où que tu sois... je serai à tes côtés... pour toujours...",
						"spanish": "...Mi niño, te protegeré. Dondequiera que estés... estaré a tu lado... para siempre...",
						"vietnamese": "...Con ơi, ta sẽ bảo vệ con. Dù con ở đâu... ta sẽ ở bên con... mãi mãi...",
						"thai": "...ลูกรัก ฉันจะปกป้องเธอ ไม่ว่าเธอจะอยู่ที่ไหน... ฉันจะอยู่ข้างเธอ... ตลอดไป...",
						"hindi": "...मेरे बच्चे, मैं तुम्हारी रक्षा करूँगा। तुम जहाँ कहीं भी हो... मैं तुम्हारे साथ रहूँगा... हमेशा..."
					},
					"emotion": "sad"
				},
				{
					"spot": [
						3,
						3
					],
					"type": "direction",
					"speaker": "eira",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"speaker": "eira",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…결국, 주인을 찾지 못했군요. 너무나… 외로웠을 인형.",
						"english": "...In the end, it couldn't find its owner. Such a... lonely doll.",
						"japanese": "…結局、持ち主を見つけられなかったのですね。どれほど…寂しかったことでしょう、この人形は。",
						"chinese": "……最终，它没能找到主人。多么……孤独的娃娃。",
						"french": "...Finalement, elle n'a pas pu retrouver son propriétaire. Quelle... poupée solitaire.",
						"spanish": "...Al final, no pudo encontrar a su dueño. Qué... muñeca tan solitaria.",
						"vietnamese": "...Cuối cùng, nó không thể tìm thấy chủ nhân. Một con búp bê... cô đơn biết bao.",
						"thai": "...ท้ายที่สุด มันก็ไม่พบเจ้าของ ช่างเป็นตุ๊กตาที่... โดดเดี่ยวเหลือเกิน",
						"hindi": "...आखिरकार, यह अपने मालिक को नहीं ढूंढ पाया। कितनी... अकेली गुड़िया।"
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…편히 쉬렴. 이제 괜찮아.",
						"english": "...Rest peacefully. It's okay now.",
						"japanese": "…安らかに眠りなさい。もう大丈夫よ。",
						"chinese": "……安息吧。现在没事了。",
						"french": "...Repose en paix. Tout va bien maintenant.",
						"spanish": "...Descansa en paz. Ya está bien.",
						"vietnamese": "...Hãy yên nghỉ. Giờ thì không sao rồi.",
						"thai": "...พักผ่อนอย่างสงบนะ ตอนนี้ไม่เป็นไรแล้ว",
						"hindi": "...शांति से आराम करो। अब सब ठीक है।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "영원한 눈보라가 잠시 멈추고, 숲은 조용한 침묵 속으로 빠져들었다.",
						"english": "The eternal blizzard paused, and the forest fell into quietude.",
						"japanese": "永遠の吹雪が一時的に止み、森は静かな沈黙に包まれた。",
						"chinese": "永恒的暴风雪暂时停歇，森林陷入一片寂静。",
						"french": "Le blizzard éternel s'interrompit un instant, et la forêt tomba dans un silence profond.",
						"spanish": "La eterna ventisca se detuvo por un momento, y el bosque se sumió en un silencio apacible.",
						"vietnamese": "Cơn bão tuyết vĩnh cửu tạm dừng, và khu rừng chìm vào sự yên lặng.",
						"thai": "พายุหิมะนิรันดร์หยุดลงชั่วขณะ และป่าก็ตกอยู่ในความเงียบงัน",
						"hindi": "शाश्वत बर्फीला तूफान थम गया, और जंगल गहरी शांति में डूब गया।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				}
			]
		}
	],
	"epilogue": {
		"korean": [
			"오랜 눈보라가 걷히고, 잊혀진 황무지에 햇살이 내렸다.",
			"허스크의 비극은 끝났지만, 그 아이의 그리움은 여전히 겨울 바람에 맴돌았다.",
			"인형의 마지막 자장가는 차가운 얼음 속에 영원히 울려 퍼졌다.",
			"우리는 그저, 그 슬픔에 작은 위로를 전할 수 있을 뿐이었다."
		],
		"english": [
			"The long blizzard cleared, and sunlight fell upon the forgotten wasteland.",
			"Husk's tragedy ended, but the child's longing still lingered in the winter wind.",
			"The doll's last lullaby echoed eternally in the cold ice.",
			"We could only offer a small comfort to that sorrow."
		],
		"japanese": [
			"長い吹雪が晴れ、忘れ去られた荒野に陽光が降り注いだ。",
			"ハスクの悲劇は終わったが、あの子供の面影は冬の風の中にまだ残っていた。",
			"人形の最後の歌は、冷たい氷の中で永遠に響き渡った。",
			"私たちはただ、その悲しみに小さな慰めを伝えることしかできなかった。"
		],
		"chinese": [
			"漫长的暴风雪消散，阳光洒落在被遗忘的荒原上。",
			"赫斯克的悲剧结束了，但那孩子的思念仍在冬风中萦绕。",
			"玩偶最后的摇篮曲在冰冷的寒冰中永远回响。",
			"我们所能做的，只是为那悲伤带来一丝小小的慰藉。"
		],
		"french": [
			"Le long blizzard se dissipa, et la lumière du soleil tomba sur la terre désolée oubliée.",
			"La tragédie de Husk prit fin, mais la nostalgie de l'enfant persistait encore dans le vent d'hiver.",
			"La dernière berceuse de la poupée résonna éternellement dans la glace froide.",
			"Nous ne pouvions qu'offrir un mince réconfort à cette douleur."
		],
		"spanish": [
			"La larga ventisca se disipó, y la luz del sol cayó sobre el páramo olvidado.",
			"La tragedia de Husk terminó, pero el anhelo del niño aún perduraba en el viento invernal.",
			"La última nana de la muñeca resonó eternamente en el hielo frío.",
			"Solo pudimos ofrecer un pequeño consuelo a esa tristeza."
		],
		"vietnamese": [
			"Cơn bão tuyết dài tan đi, ánh nắng chiếu rọi vùng đất hoang tàn bị lãng quên.",
			"Bi kịch của Husk đã kết thúc, nhưng nỗi nhớ của đứa trẻ vẫn còn vương vấn trong gió mùa đông.",
			"Khúc hát ru cuối cùng của con búp bê vang vọng mãi mãi trong băng giá lạnh lẽo.",
			"Chúng ta chỉ có thể mang lại một chút an ủi cho nỗi buồn đó."
		],
		"thai": [
			"พายุหิมะที่ยาวนานได้สงบลง และแสงอาทิตย์ได้สาดส่องลงบนดินแดนรกร้างที่ถูกลืม",
			"โศกนาฏกรรมของฮัสค์จบลงแล้ว แต่ความโหยหาของเด็กคนนั้นยังคงอบอวลอยู่ในลมหนาว",
			"เพลงกล่อมเด็กครั้งสุดท้ายของตุ๊กตาได้ก้องกังวานชั่วนิรันดร์ในน้ำแข็งอันเยือกเย็น",
			"เราทำได้เพียงแค่ปลอบโยนความเศร้าโศกนั้นเพียงเล็กน้อยเท่านั้น"
		],
		"hindi": [
			"लंबे समय तक चला बर्फीला तूफ़ान छँट गया, और भूले हुए बंजर भूमि पर धूप पड़ी।",
			"हस्क की त्रासदी समाप्त हो गई, लेकिन बच्चे की लालसा अभी भी सर्दियों की हवा में मंडरा रही थी।",
			"गुड़िया की आखिरी लोरी ठंडी बर्फ में हमेशा के लिए गूँजती रही।",
			"हम उस दुःख को बस एक छोटा सा दिलासा दे सकते थे।"
		]
	}
} as const;
