export const scenario_snowy_skuld_2_03 = {
	"scenario_id": "snowy_skuld_2_03",
	"order": 3,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"hild": {
			"id": "mon_6f20c96a-bf07-4aae-b37c-da898a8336e8",
			"name": {
				"korean": "힐드",
				"english": "Hild",
				"japanese": "ヒルド",
				"chinese": "希尔德",
				"french": "Hild",
				"spanish": "Hild",
				"vietnamese": "Hild",
				"thai": "ฮิลด์",
				"hindi": "हिल्ड"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/722a86fd-2903-4688-3f04-db8241ed0e00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/af3d96ba-e571-4132-fede-cd415bd15c00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"content": {
						"korean": "푸른 빙하가 하늘을 찌르고 있었다. 수십 년간 잊힌 설원의 지배자.",
						"english": "A blue glacier pierced the sky. The forgotten ruler of the snowfields, for decades.",
						"japanese": "青い氷河が空を衝いていた。数十年間忘れ去られた雪原の支配者。",
						"chinese": "蓝色冰川直插云霄。被遗忘数十载的雪原主宰。",
						"french": "Un glacier bleu transperçait le ciel. Le maître oublié des étendues enneigées, depuis des décennies.",
						"spanish": "Un glaciar azul perforaba el cielo. El olvidado señor de las llanuras nevadas, por décadas.",
						"vietnamese": "Sông băng xanh biếc đâm xuyên trời. Kẻ thống trị đồng tuyết bị lãng quên suốt hàng thập kỷ.",
						"thai": "ธารน้ำแข็งสีน้ำเงินพุ่งทะลุฟ้า ผู้ปกครองทุ่งหิมะที่ถูกลืมเลือนไปนับสิบปี",
						"hindi": "एक नीला हिमनद आकाश को भेद रहा था। दशकों से भूला हुआ बर्फीले मैदान का शासक।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이게 그… 설원을 얼려버린다는 정령인가?",
						"english": "Is this... the spirit said to freeze the snowfields?",
						"japanese": "これが…雪原を凍らせるという精霊か？",
						"chinese": "这就是那个……能冰封雪原的精灵吗？",
						"french": "Est-ce là... l'esprit qui gèlerait les étendues enneigées ?",
						"spanish": "¿Es este... el espíritu que se dice que congela las llanuras nevadas?",
						"vietnamese": "Đây là... tinh linh được cho là đóng băng đồng tuyết sao?",
						"thai": "นี่คือ...วิญญาณที่ว่ากันว่าจะแช่แข็งทุ่งหิมะหรือเปล่า?",
						"hindi": "क्या यह वही... आत्मा है जो बर्फीले मैदानों को जमा देती है?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "hild",
					"spot": [
						3,
						3
					],
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"speaker": "hild",
					"type": "speech",
					"content": {
						"korean": "강렬한 한기. 그러나… 분노만은 아니야.",
						"english": "An intense chill. But... it's not just anger.",
						"japanese": "強烈な冷気。しかし…怒りだけではない。",
						"chinese": "强烈的寒意。然而……不仅仅是愤怒。",
						"french": "Un froid intense. But... ce n'est pas seulement de la colère.",
						"spanish": "Un frío intenso. Pero... no es solo ira.",
						"vietnamese": "Một cái lạnh cực độ. Nhưng... không chỉ là sự giận dữ.",
						"thai": "ความหนาวเย็นที่รุนแรง แต่...มันไม่ใช่แค่ความโกรธ",
						"hindi": "एक तीव्र ठंड। लेकिन... यह सिर्फ क्रोध नहीं है।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "분노가 아니라니? 척 봐도 위협적인데.",
						"english": "Not anger? It looks threatening at a glance.",
						"japanese": "怒りじゃないだと？一見して脅威的なのに。",
						"chinese": "不是愤怒？一眼看上去就很具威胁性啊。",
						"french": "Pas de la colère ? Ça a l'air menaçant au premier coup d'œil.",
						"spanish": "¿No es ira? A primera vista parece amenazante.",
						"vietnamese": "Không phải giận dữ ư? Nhìn qua đã thấy đầy đe dọa rồi.",
						"thai": "ไม่โกรธเหรอ? มองแวบเดียวก็ดูน่ากลัวแล้วนะ",
						"hindi": "क्रोध नहीं? एक नज़र में तो यह खतरनाक लग रहा है।"
					},
					"emotion": "base",
					"speaker": "character_1"
				},
				{
					"content": {
						"korean": "이건… 슬픔에 더 가까워.",
						"english": "This is... closer to sorrow.",
						"japanese": "これは…悲しみに近い。",
						"chinese": "这更像是……悲伤。",
						"french": "C'est... plus proche de la tristesse.",
						"spanish": "Esto es... más cercano a la tristeza.",
						"vietnamese": "Điều này... gần với nỗi buồn hơn.",
						"thai": "นี่มัน...ใกล้เคียงกับความเศร้ามากกว่า",
						"hindi": "यह... दुःख के अधिक करीब है।"
					},
					"type": "speech",
					"speaker": "hild",
					"emotion": "sad"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"speaker": "hild",
					"action": "enter",
					"spot": [
						2,
						3
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 빙하의 기운은… 모든 것을 포기한 자의 쓸쓸함과 같아.",
						"english": "This glacier's aura... it's like the desolation of one who has surrendered all.",
						"japanese": "この氷河の気配は…全てを諦めた者の寂しさのようだ。",
						"chinese": "这冰川的气息…如同放弃一切之人的寂寥。",
						"french": "L'aura de ce glacier... c'est la mélancolie de celui qui a tout abandonné.",
						"spanish": "El aura de este glaciar... es como la soledad de quien lo ha abandonado todo.",
						"vietnamese": "Hào quang của sông băng này... giống như sự cô độc của kẻ đã từ bỏ tất cả.",
						"thai": "กลิ่นอายของธารน้ำแข็งนี้... เหมือนความโดดเดี่ยวของผู้ที่ยอมแพ้ทุกสิ่ง",
						"hindi": "इस ग्लेशियर का आभास... सब कुछ त्यागने वाले की उदासी जैसा है।"
					},
					"emotion": "sad",
					"speaker": "hild"
				},
				{
					"content": {
						"korean": "정령이 포기라니… 말이 돼?",
						"english": "A spirit giving up... does that even make sense?",
						"japanese": "精霊が諦めるなんて…ありえるの？",
						"chinese": "精灵放弃？这可能吗？",
						"french": "Un esprit qui abandonne... Est-ce possible ?",
						"spanish": "¿Un espíritu rindiéndose...? ¿Tiene sentido?",
						"vietnamese": "Tinh linh từ bỏ ư... có lý không?",
						"thai": "วิญญาณจะยอมแพ้... เป็นไปได้หรือ?",
						"hindi": "एक आत्मा का हार मानना... क्या यह संभव है?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "오랜 시간… 무언가를 홀로 견뎌낸 기운이야.",
						"english": "It's an aura of one who has endured something alone for a long, long time.",
						"japanese": "長い間…何かを一人で耐え忍んできた気配だ。",
						"chinese": "这是长久以来…独自承受着什么的气息。",
						"french": "C'est l'aura de quelqu'un qui a enduré quelque chose seul pendant longtemps.",
						"spanish": "Es el aura de alguien que ha soportado algo solo durante mucho tiempo.",
						"vietnamese": "Đó là một luồng khí... của kẻ đã một mình chịu đựng điều gì đó suốt một thời gian dài.",
						"thai": "เป็นกลิ่นอายของผู้ที่อดทนกับบางสิ่งมาอย่างยาวนาน...เพียงลำพัง",
						"hindi": "यह लंबे समय से... अकेले कुछ सहने वाले का आभास है।"
					},
					"emotion": "base",
					"speaker": "hild"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"action": "enter",
					"speaker": "hild",
					"type": "direction"
				},
				{
					"speaker": "hild",
					"emotion": "base",
					"content": {
						"korean": "단순한 얼음 정령이 아니야. 이건… 약속이야.",
						"english": "It's no mere ice spirit. This is... a promise.",
						"japanese": "ただの氷の精霊じゃない。これは…約束だ。",
						"chinese": "这不是简单的冰之精灵。这是…一个承诺。",
						"french": "Ce n'est pas un simple esprit de glace. C'est... une promesse.",
						"spanish": "No es un simple espíritu de hielo. Esto es... una promesa.",
						"vietnamese": "Không phải tinh linh băng đơn thuần. Đây là... một lời hứa.",
						"thai": "นี่ไม่ใช่แค่วิญญาณน้ำแข็งธรรมดา นี่คือ...คำมั่นสัญญา",
						"hindi": "यह केवल एक बर्फीली आत्मा नहीं है। यह... एक वादा है।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "약속?",
						"english": "A promise?",
						"japanese": "約束？",
						"chinese": "承诺？",
						"french": "Une promesse ?",
						"spanish": "¿Una promesa?",
						"vietnamese": "Lời hứa ư?",
						"thai": "คำมั่นสัญญา?",
						"hindi": "एक वादा?"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "빙하 표면에는 용머리 조각과 알 수 없는 룬 문양이 아스라이 새겨져 있었다.",
						"english": "Dragon head carvings and unknown runic patterns were faintly etched upon the glacier's surface.",
						"japanese": "氷河の表面には、竜の頭の彫刻と未知のルーン文字がかすかに刻まれていた。",
						"chinese": "冰川表面，隐约刻着龙首雕刻和未知的符文。",
						"french": "Des sculptures en forme de tête de dragon et d'étranges runes étaient faiblement gravées sur la surface du glacier.",
						"spanish": "Esculturas de cabezas de dragón y runas desconocidas estaban tenuemente grabadas en la superficie del glaciar.",
						"vietnamese": "Trên bề mặt sông băng, những hình chạm khắc đầu rồng và ký tự rune không rõ hiện lên mờ nhạt.",
						"thai": "บนพื้นผิวของธารน้ำแข็ง มีรูปแกะสลักหัวมังกรและอักขระรูนที่ไม่รู้จักสลักไว้อย่างเลือนราง",
						"hindi": "ग्लेशियर की सतह पर, ड्रैगन के सिर की नक्काशी और अज्ञात रूनिक पैटर्न हल्के से खुदे हुए थे।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "망자가… 남긴 맹세의 흔적.",
						"english": "A trace of a vow... left by the departed.",
						"japanese": "亡者が…遺した誓いの痕跡。",
						"chinese": "逝者…留下的誓言痕迹。",
						"french": "Une trace de serment... laissée par le défunt.",
						"spanish": "Una huella del juramento... dejada por el difunto.",
						"vietnamese": "Dấu vết lời thề... do người đã khuất để lại.",
						"thai": "ร่องรอยแห่งคำสาบาน...ที่ผู้ตายทิ้งไว้",
						"hindi": "मृतक द्वारा छोड़ी गई... एक प्रतिज्ञा का निशान।"
					},
					"emotion": "sad",
					"speaker": "hild"
				},
				{
					"speaker": "character_2",
					"emotion": "base",
					"content": {
						"korean": "점점 더 알 수 없군.",
						"english": "It grows ever more inscrutable.",
						"japanese": "ますます分からなくなるな。",
						"chinese": "真是越来越搞不懂了。",
						"french": "C'est de plus en plus mystérieux.",
						"spanish": "Cada vez es más incomprensible.",
						"vietnamese": "Càng ngày càng khó hiểu.",
						"thai": "ยิ่งนานยิ่งไม่เข้าใจ",
						"hindi": "यह और भी अधिक रहस्यमय होता जा रहा है।"
					},
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"speaker": "hild",
					"action": "enter",
					"spot": [
						2,
						3
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "이자는… 지키기 위해 모든 것을 걸었던 자야.",
						"english": "This one... wagered everything to protect something.",
						"japanese": "この者は…守るために全てを賭けた者だ。",
						"chinese": "此人…是为守护而倾尽所有之人。",
						"french": "Celui-ci... a tout misé pour protéger quelque chose.",
						"spanish": "Este... es alguien que lo arriesgó todo para proteger.",
						"vietnamese": "Người này... đã đặt cược tất cả để bảo vệ.",
						"thai": "ผู้นี้...คือผู้ที่ทุ่มเททุกสิ่งเพื่อปกป้อง",
						"hindi": "यह वह है... जिसने रक्षा के लिए सब कुछ दांव पर लगा दिया।"
					},
					"emotion": "sad",
					"speaker": "hild"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "뭘 지키는데? 우리를 얼려버리려고 하잖아.",
						"english": "Protect what? They're trying to freeze us!",
						"japanese": "何を…守るって？私たちを凍らせようとしてるじゃないか。",
						"chinese": "守护什么？他不是想把我们冻住吗？",
						"french": "Protéger quoi ? Il essaie de nous congeler !",
						"spanish": "¿Proteger qué? ¡Nos está intentando congelar!",
						"vietnamese": "Bảo vệ cái gì chứ? Hắn đang định đóng băng chúng ta mà.",
						"thai": "ปกป้องอะไร? เขากำลังจะแช่แข็งพวกเรานะ",
						"hindi": "किसकी रक्षा कर रहा है? वह हमें जमाना चाहता है!"
					},
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "hild",
					"type": "speech",
					"content": {
						"korean": "그 응징의 한기 속에서도… 지독한 피로가 느껴져.",
						"english": "Even in this punishing chill... a terrible weariness sets in.",
						"japanese": "その懲罰の寒気の中でも…ひどい疲労を感じる。",
						"chinese": "即使在这惩戒的寒气中…也感到极度的疲惫。",
						"french": "Même dans ce froid punitif... une terrible fatigue m'envahit.",
						"spanish": "Incluso en este frío punitivo... siento un cansancio terrible.",
						"vietnamese": "Ngay cả trong cái lạnh trừng phạt này... một sự mệt mỏi khủng khiếp ập đến.",
						"thai": "แม้ในความหนาวเย็นที่ลงทัณฑ์นี้... ก็ยังรู้สึกถึงความเหนื่อยล้าอย่างแสนสาหัส",
						"hindi": "इस दंडात्मक ठंडक के बीच भी... एक भयानक थकान महसूस हो रही है।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "…누가 듣고 있는 것 같아.",
						"english": "...It feels like someone is listening.",
						"japanese": "…誰かが聞いているようだ。",
						"chinese": "……好像有人在听。",
						"french": "...On dirait que quelqu'un écoute.",
						"spanish": "...Parece que alguien está escuchando.",
						"vietnamese": "...Có vẻ như có ai đó đang lắng nghe.",
						"thai": "...เหมือนมีใครบางคนกำลังฟังอยู่",
						"hindi": "...लगता है कोई सुन रहा है।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "빙하의 심장부에서 옅은 안개 같은 푸른 빛이 새어 나왔다. 마치 살아 숨 쉬는 것처럼.",
						"english": "From the heart of the glacier, a faint, mist-like blue light seeped out. As if it were alive.",
						"japanese": "氷河の心臓部から、淡い霧のような青い光が漏れ出た。まるで生きているかのように。",
						"chinese": "从冰川的深处，渗出了淡薄如雾的蓝色光芒。仿佛它还活着。",
						"french": "Du cœur du glacier, une faible lumière bleue, semblable à du brouillard, s'échappait. Comme si elle était vivante.",
						"spanish": "Del corazón del glaciar, una tenue luz azul, como niebla, se filtró. Como si estuviera viva.",
						"vietnamese": "Từ trái tim của sông băng, một luồng ánh sáng xanh mờ ảo như sương mù rỉ ra. Như thể nó đang sống.",
						"thai": "จากใจกลางของธารน้ำแข็ง แสงสีน้ำเงินจางๆ คล้ายหมอกไหลออกมา ราวกับว่ามันมีชีวิต",
						"hindi": "ग्लेशियर के हृदय से, एक हल्की, धुंध जैसी नीली रोशनी रिस रही थी। जैसे वह जीवित हो।"
					}
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "거대한 빙벽이 갈라졌다. 그 안에 잠들어 있던 그림자가 모습을 드러냈다.",
						"english": "The colossal ice wall cracked open. The shadow that lay dormant within revealed itself.",
						"japanese": "巨大な氷壁が裂けた。その中に眠っていた影が姿を現した。",
						"chinese": "巨大的冰墙裂开了。沉睡在其中的影子显露了真容。",
						"french": "L'énorme mur de glace se fendit. L'ombre qui y dormait se révéla.",
						"spanish": "La colosal pared de hielo se agrietó. La sombra que yacía dormida en su interior se reveló.",
						"vietnamese": "Bức tường băng khổng lồ nứt ra. Cái bóng đang ngủ yên bên trong hiện hình.",
						"thai": "กำแพงน้ำแข็งมหึมากำลังแยกออก เงาที่หลับใหลอยู่ข้างในก็ปรากฏตัวขึ้น",
						"hindi": "विशाल हिम-दीवार में दरार पड़ गई। उसके अंदर सोई हुई परछाई प्रकट हुई।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…더 이상… 아무것도 오지 않게 하라.",
						"english": "...Let nothing else come.",
						"japanese": "…これ以上…何も来させないでくれ。",
						"chinese": "……不要再让任何东西靠近了。",
						"french": "...Ne laissez plus rien venir.",
						"spanish": "...Que no venga nada más.",
						"vietnamese": "...Đừng để bất cứ thứ gì khác đến nữa.",
						"thai": "...อย่าให้สิ่งใดมาอีก",
						"hindi": "...अब और कुछ भी न आने दो।"
					},
					"emotion": "sad",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "저게… 정령이야?",
						"english": "Is that... a spirit?",
						"japanese": "あれが…精霊なのか？",
						"chinese": "那是……精灵吗？",
						"french": "C'est... un esprit ?",
						"spanish": "¿Eso es... un espíritu?",
						"vietnamese": "Đó... là linh hồn sao?",
						"thai": "นั่น... วิญญาณเหรอ?",
						"hindi": "क्या वह... एक आत्मा है?"
					},
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "이곳은… 죽은 자들의 영원한 안식처.",
						"english": "This place... is the eternal resting place of the dead.",
						"japanese": "ここは…死者たちの永遠の安息の地。",
						"chinese": "这里是……死者的永恒安息之地。",
						"french": "Cet endroit... est le repos éternel des morts.",
						"spanish": "Este lugar... es el eterno descanso de los muertos.",
						"vietnamese": "Nơi này... là nơi yên nghỉ vĩnh hằng của những người đã khuất.",
						"thai": "ที่นี่... คือสถานที่พำนักนิรันดร์ของผู้ตาย",
						"hindi": "यह स्थान... मृत आत्माओं का शाश्वत विश्राम स्थल है।"
					}
				},
				{
					"speaker": "character_1",
					"emotion": "base",
					"content": {
						"korean": "우리가 침범했다고 생각하는군.",
						"english": "They think we've intruded.",
						"japanese": "私たちが侵入したと思っているようだ。",
						"chinese": "他们认为我们入侵了。",
						"french": "Ils pensent que nous avons fait intrusion.",
						"spanish": "Creen que hemos invadido.",
						"vietnamese": "Họ nghĩ chúng ta đã xâm phạm.",
						"thai": "พวกเขาคิดว่าเราบุกรุก",
						"hindi": "उन्हें लगता है कि हमने घुसपैठ की है।"
					},
					"type": "speech"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"content": {
						"korean": "…침범하는 자… 모두… 얼어붙으리라.",
						"english": "...All trespassers... shall freeze.",
						"japanese": "…侵入する者…全て…凍てつくだろう。",
						"chinese": "…入侵者…都将…被冻结。",
						"french": "...Tous les intrus... gèleront.",
						"spanish": "...Todo el que invada... se congelará.",
						"vietnamese": "...Kẻ xâm phạm... tất cả... sẽ bị đóng băng.",
						"thai": "...ผู้บุกรุก... ทุกคน... จะแข็งตาย",
						"hindi": "...घुसपैठिए... सभी... जम जाएँगे।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "젠장… 아직 끝나지 않았어!",
						"english": "Damn it... it's not over yet!",
						"japanese": "くそ…まだ終わってない！",
						"chinese": "该死…还没结束！",
						"french": "Maudit... ce n'est pas encore fini !",
						"spanish": "¡Maldita sea... aún no ha terminado!",
						"vietnamese": "Chết tiệt... vẫn chưa kết thúc!",
						"thai": "บ้าเอ๊ย... ยังไม่จบ!",
						"hindi": "धत् तेरे की... अभी खत्म नहीं हुआ है!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "…결국… 약속은… 지켜지지 못했군.",
						"english": "...In the end... the promise... couldn't be kept.",
						"japanese": "…結局…約束は…守られなかったな。",
						"chinese": "……最终……约定……未能遵守。",
						"french": "...Finalement... la promesse... n'a pas pu être tenue.",
						"spanish": "...Al final... la promesa... no pudo ser cumplida.",
						"vietnamese": "...Cuối cùng... lời hứa... đã không thể được giữ.",
						"thai": "...ในที่สุด... สัญญา... ก็ไม่สามารถรักษาไว้ได้",
						"hindi": "...अंत में... वादा... निभाया नहीं जा सका।"
					},
					"emotion": "sad",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "약속…?",
						"english": "A promise...?",
						"japanese": "約束…？",
						"chinese": "约定……？",
						"french": "Une promesse... ?",
						"spanish": "¿Una promesa...?",
						"vietnamese": "Một lời hứa...?",
						"thai": "สัญญา...?",
						"hindi": "एक वादा...?"
					},
					"type": "speech"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						3
					],
					"action": "enter",
					"speaker": "hild"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이자는… 이 모든 것을 지키려 했던… 수호자였어.",
						"english": "He was... the guardian... who sought to protect all this.",
						"japanese": "この者は… この全てを守ろうとした… 守護者だった。",
						"chinese": "他曾是…试图守护这一切的…守护者。",
						"french": "Il était... le gardien... qui cherchait à protéger tout cela.",
						"spanish": "Él era... el guardián... que intentó proteger todo esto.",
						"vietnamese": "Người này... là một hộ vệ... đã cố gắng bảo vệ tất cả những điều này.",
						"thai": "เขาคือ... ผู้พิทักษ์... ที่พยายามจะปกป้องทั้งหมดนี้",
						"hindi": "यह... वह संरक्षक था... जिसने यह सब बचाने की कोशिश की।"
					},
					"emotion": "sad",
					"speaker": "hild"
				},
				{
					"type": "speech",
					"content": {
						"korean": "빙하 깊숙한 곳에서, 잊힌 약속의 노래가 들려오는 듯했다.",
						"english": "From deep within the glacier, the song of a forgotten promise seemed to whisper.",
						"japanese": "氷河の奥深くから、忘れられた約束の歌が聞こえてくるようだった。",
						"chinese": "在冰川深处，仿佛传来了被遗忘的承诺之歌。",
						"french": "Du plus profond du glacier, le chant d'une promesse oubliée semblait résonner.",
						"spanish": "Desde lo más profundo del glaciar, el canto de una promesa olvidada parecía susurrar.",
						"vietnamese": "Từ sâu thẳm trong sông băng, dường như vang vọng khúc ca của một lời hứa đã lãng quên.",
						"thai": "จากส่วนลึกของธารน้ำแข็ง เสียงเพลงแห่งคำสัญญาที่ถูกลืมเลือนดูเหมือนจะก้องกังวาน",
						"hindi": "ग्लेशियर की गहराई से, एक भूले हुए वादे का गीत गूंजता हुआ सा लगा।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아직… 밝혀지지 않은 것이 많아.",
						"english": "Much still... remains unrevealed.",
						"japanese": "まだ… 明らかになっていないことが多い。",
						"chinese": "还有…许多尚未揭示的。",
						"french": "Encore... beaucoup reste à découvrir.",
						"spanish": "Aún... mucho queda por revelar.",
						"vietnamese": "Vẫn còn... rất nhiều điều chưa được hé lộ.",
						"thai": "ยังมี... อีกมากที่ยังไม่ถูกเปิดเผย",
						"hindi": "अभी भी... बहुत कुछ अनसुलझा है।"
					},
					"emotion": "base",
					"speaker": "character_any"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"북방 설원, 끝없는 눈보라 속.",
			"거대한 빙하가 솟아올랐다.",
			"그 안에는 얼어붙은 시간이, 숨 쉬고 있었다.",
			"누군가는 정령이라 불렀고, 누군가는 괴물이라 했다.",
			"그러나 그 한기 속엔, 더 깊은 진실이 잠들어 있었다."
		],
		"english": [
			"Northern snowfields, amidst an endless blizzard.",
			"A colossal glacier rose.",
			"Within it, frozen time breathed.",
			"Some called it a spirit, others a monster.",
			"But within that chill, a deeper truth lay dormant."
		],
		"japanese": [
			"北の雪原、果てなき吹雪の中。",
			"巨大な氷河がそびえ立った。",
			"その中に、凍りついた時間が息づいていた。",
			"ある者は精霊と呼び、ある者は怪物と呼んだ。",
			"だが、その冷気の中には、より深い真実が眠っていた。"
		],
		"chinese": [
			"北方雪原，无尽暴雪之中。",
			"巨大的冰川拔地而起。",
			"其内，冰封的时间正在呼吸。",
			"有人称之为精灵，有人称之为怪物。",
			"然而，在那寒意之中，更深层的真相沉睡着。"
		],
		"french": [
			"Les étendues enneigées du Nord, au cœur d'un blizzard éternel.",
			"Un glacier colossal s'éleva.",
			"En son sein, le temps gelé respirait.",
			"Certains l'appelaient esprit, d'autres monstre.",
			"Mais au sein de ce froid, une vérité plus profonde sommeillait."
		],
		"spanish": [
			"Las llanuras nevadas del Norte, en medio de una ventisca interminable.",
			"Un glaciar colosal se alzó.",
			"Dentro, el tiempo congelado respiraba.",
			"Algunos lo llamaron espíritu, otros un monstruo.",
			"Pero dentro de ese frío, una verdad más profunda yacía dormida."
		],
		"vietnamese": [
			"Đồng tuyết phương Bắc, giữa bão tuyết vô tận.",
			"Một sông băng khổng lồ trỗi dậy.",
			"Bên trong, thời gian đóng băng đang thở.",
			"Kẻ gọi là tinh linh, người gọi là quái vật.",
			"Nhưng trong cái lạnh ấy, một sự thật sâu sắc hơn đang ẩn mình."
		],
		"thai": [
			"ทุ่งหิมะทางเหนือ ท่ามกลางพายุหิมะที่ไม่มีวันสิ้นสุด",
			"ธารน้ำแข็งขนาดมหึมาได้ผุดขึ้นมา",
			"ภายในนั้น กาลเวลาที่ถูกแช่แข็งกำลังมีชีวิต",
			"บางคนเรียกมันว่าวิญญาณ บางคนเรียกมันว่าสัตว์ประหลาด",
			"แต่ภายในความหนาวเย็นนั้น ความจริงที่ลึกซึ้งกว่ากำลังหลับใหลอยู่"
		],
		"hindi": [
			"उत्तरी बर्फीले मैदान, अंतहीन बर्फीले तूफान के बीच।",
			"एक विशालकाय हिमनद उठा।",
			"उसके भीतर, जमा हुआ समय साँस ले रहा था।",
			"किसी ने उसे आत्मा कहा, किसी ने राक्षस।",
			"परंतु उस ठंडक में, एक गहरा सत्य सोया हुआ था।"
		]
	}
} as const;
