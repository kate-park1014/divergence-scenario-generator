export const scenario_forest_umbraempress_8_01 = {
	"scenario_id": "forest_umbraempress_8_01",
	"order": 1,
	"act": "intro",
	"theme": "forest",
	"actors": {
		"bracken": {
			"id": "mon_48cf29be-dbc0-44b1-bbb3-ecda1d14742d",
			"name": {
				"korean": "브라켄",
				"english": "Bracken",
				"japanese": "ブラッケン",
				"chinese": "布莱肯",
				"french": "Bracken",
				"spanish": "Bracken",
				"vietnamese": "Bracken",
				"thai": "แบรกเคน",
				"hindi": "ब्रैकेन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/5b494da6-ffd7-43d3-7171-7ac84bdfe400/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/4a7a1b62-d7a7-4a21-ffd5-fa9b5de82100/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "숲의 입구. 달콤한 공기 속에 비릿한 피 냄새가 섞였다.",
						"english": "Forest entrance. Sweet air, yet tainted with a metallic scent of blood.",
						"japanese": "森の入り口。甘い空気の中に、生臭い血の匂いが混じっている。",
						"chinese": "森林入口。甜美的空气中混杂着腥臭的血腥味。",
						"french": "Entrée de la forêt. L'air doux, pourtant teinté d'une odeur métallique de sang.",
						"spanish": "Entrada del bosque. Aire dulce, pero mezclado con un olor metálico a sangre.",
						"vietnamese": "Lối vào rừng. Không khí ngọt ngào, nhưng pha lẫn mùi máu tanh nồng.",
						"thai": "ทางเข้าป่า อากาศหอมหวานปนกลิ่นคาวเลือด",
						"hindi": "जंगल का प्रवेश द्वार। मीठी हवा, फिर भी खून की धातु जैसी गंध से दूषित।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "이 피는 뭐지? 짐승의 것 같지는 않은데…",
						"english": "Whose blood is this? Doesn't seem like an animal's…",
						"japanese": "この血は何だ？獣のものではないようだが…",
						"chinese": "这是谁的血？看起来不像动物的…",
						"french": "Quel est ce sang ? Ne semble pas être celui d'un animal…",
						"spanish": "¿De quién es esta sangre? No parece de un animal…",
						"vietnamese": "Đây là máu của ai? Không giống của thú rừng…",
						"thai": "เลือดนี่ของใครกัน? ดูไม่เหมือนสัตว์ป่าเลย…",
						"hindi": "यह खून किसका है? किसी जानवर का नहीं लगता…"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "버려진 상자들. 숲에 어울리지 않는 수상한 물건들이었다.",
						"english": "Abandoned boxes. Suspicious items, out of place in the forest.",
						"japanese": "捨てられた箱。森には似つかわしくない不審な物ばかりだ。",
						"chinese": "废弃的箱子。与森林格格不入的可疑物品。",
						"french": "Caisses abandonnées. Objets suspects, hors de propos dans la forêt.",
						"spanish": "Cajas abandonadas. Objetos sospechosos, fuera de lugar en el bosque.",
						"vietnamese": "Những chiếc hộp bị bỏ hoang. Những vật khả nghi không hợp với khu rừng.",
						"thai": "กล่องที่ถูกทิ้งร้าง ของต้องสงสัยที่ไม่เข้ากับป่าเลย",
						"hindi": "छोड़े हुए बक्से। संदिग्ध वस्तुएं, जंगल में बेमेल।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "밀매 흔적인가? 숲이 위험하다는 얘기는 들었지만…",
						"english": "Smuggling? I heard this forest was dangerous, but…",
						"japanese": "密売の痕跡か？この森が危険だとは聞いていたが…",
						"chinese": "是走私的痕迹吗？虽然听说森林很危险，但是…",
						"french": "Trafic ? J'ai entendu dire que cette forêt était dangereuse, mais…",
						"spanish": "¿Contrabando? Había oído que este bosque era peligroso, pero…",
						"vietnamese": "Dấu vết buôn lậu à? Tôi đã nghe nói khu rừng này nguy hiểm, nhưng…",
						"thai": "ร่องรอยการค้าเถื่อนหรือ? ได้ยินมาว่าป่านี้อันตราย แต่…",
						"hindi": "तस्करी के निशान? मैंने सुना था कि यह जंगल खतरनाक है, लेकिन…"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"type": "direction",
					"speaker": "bracken"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "bracken",
					"content": {
						"korean": "조심해. 겉보기와 달라, 이 숲은.",
						"english": "Be careful. This forest isn't what it seems.",
						"japanese": "気をつけろ。見かけと違う、この森は。",
						"chinese": "小心。这个森林和看起来的不一样。",
						"french": "Sois prudent. Cette forêt n'est pas ce qu'elle semble être.",
						"spanish": "Ten cuidado. Este bosque no es lo que parece.",
						"vietnamese": "Cẩn thận. Khu rừng này không như vẻ ngoài của nó.",
						"thai": "ระวังให้ดี ป่านี้ไม่เหมือนที่เห็น",
						"hindi": "सावधान रहो। यह जंगल जैसा दिखता है, वैसा नहीं है।"
					}
				},
				{
					"emotion": "base",
					"speaker": "bracken",
					"content": {
						"korean": "모두가 거래하고 있어. 생존을 위해. 모든 것을.",
						"english": "Everyone's trading. For survival. Everything.",
						"japanese": "誰もが取引している。生き残るために。全てを。",
						"chinese": "所有人都正在交易。为了生存。所有的一切。",
						"french": "Tout le monde fait du troc. Pour survivre. Tout.",
						"spanish": "Todos están traficando. Por supervivencia. Todo.",
						"vietnamese": "Tất cả mọi người đều đang giao dịch. Vì sự sống còn. Tất cả mọi thứ.",
						"thai": "ทุกคนกำลังค้าขาย เพื่อการเอาชีวิตรอด ทุกสิ่งทุกอย่าง",
						"hindi": "हर कोई व्यापार कर रहा है। अस्तित्व के लिए। सब कुछ।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "'비밀 상자의 낡은 일기장' 소문은 들었나? 조심해야 할 거야.",
						"english": "Heard the rumors about 'The Old Diary in the Secret Box'? Be careful.",
						"japanese": "「秘密の箱の古い日記」の噂を聞いたか？ 気をつけろ。",
						"chinese": "听说过“秘密箱子里的旧日记”的传闻吗？要小心。",
						"french": "Tu as entendu les rumeurs sur \"Le Vieux Journal de la Boîte Secrète\" ? Sois prudent.",
						"spanish": "¿Has oído los rumores sobre \"El Viejo Diario en la Caja Secreta\"? Ten cuidado.",
						"vietnamese": "Nghe nói về 'Cuốn nhật ký cũ trong Hộp Bí Mật' chưa? Phải cẩn thận đấy.",
						"thai": "ได้ยินข่าวลือเรื่อง 'ไดอารี่เก่าในกล่องปริศนา' ไหม? ต้องระวังนะ",
						"hindi": "क्या तुमने 'गुप्त बक्से की पुरानी डायरी' की अफवाह सुनी है? तुम्हें सावधान रहना होगा।"
					},
					"emotion": "sad",
					"speaker": "bracken"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"type": "direction",
					"speaker": "bracken"
				},
				{
					"emotion": "base",
					"speaker": "bracken",
					"content": {
						"korean": "숲의 역사를 담은 지도가 있어.",
						"english": "There's a map that holds the forest's history.",
						"japanese": "森の歴史が記された地図がある。",
						"chinese": "有一张记录着森林历史的地图。",
						"french": "Il y a une carte qui contient l'histoire de la forêt.",
						"spanish": "Hay un mapa que contiene la historia del bosque.",
						"vietnamese": "Có một tấm bản đồ chứa đựng lịch sử của khu rừng.",
						"thai": "มีแผนที่ที่บันทึกประวัติศาสตร์ของป่าไว้",
						"hindi": "एक नक्शा है जिसमें जंगल का इतिहास समाहित है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "하지만… 어떤 문양은 지워져 있어. 일부러 지운 것처럼.",
						"english": "But... some markings are erased. As if intentionally.",
						"japanese": "しかし…一部の模様は消されている。まるで意図的に消したかのように。",
						"chinese": "但是……有些图案被抹去了。好像是故意擦掉的。",
						"french": "Mais... certains motifs sont effacés. Comme si c'était intentionnel.",
						"spanish": "Pero... algunas marcas han sido borradas. Como si fuera intencional.",
						"vietnamese": "Nhưng... một số ký hiệu đã bị xóa. Cứ như thể cố ý xóa vậy.",
						"thai": "แต่...สัญลักษณ์บางอย่างถูกลบไป เหมือนกับว่าถูกลบโดยเจตนา",
						"hindi": "लेकिन... कुछ निशान मिटा दिए गए हैं। जैसे जानबूझकर मिटाया गया हो।"
					},
					"emotion": "sad",
					"speaker": "bracken"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "누가 뭘 숨기는 거지?",
						"english": "Who's hiding what?",
						"japanese": "誰が何を隠しているんだ？",
						"chinese": "谁在隐藏什么？",
						"french": "Qui cache quoi ?",
						"spanish": "¿Quién esconde qué?",
						"vietnamese": "Ai đang giấu diếm điều gì?",
						"thai": "ใครกำลังซ่อนอะไรอยู่?",
						"hindi": "कौन क्या छिपा रहा है?"
					},
					"type": "speech"
				},
				{
					"speaker": "bracken",
					"emotion": "sad",
					"content": {
						"korean": "이 숲은 겉보기엔 아름답지. 하지만 그 안엔 끔찍한 진실이 숨어있어.",
						"english": "This forest seems beautiful. But a terrible truth hides within.",
						"japanese": "この森は見た目は美しい。だが、その中には恐ろしい真実が隠されている。",
						"chinese": "这片森林表面上很美。但里面隐藏着可怕的真相。",
						"french": "Cette forêt semble magnifique. Mais une terrible vérité s'y cache.",
						"spanish": "Este bosque parece hermoso. Pero una terrible verdad se esconde en su interior.",
						"vietnamese": "Khu rừng này bề ngoài thật đẹp. Nhưng bên trong lại ẩn chứa một sự thật kinh hoàng.",
						"thai": "ป่านี้ดูสวยงาม แต่ความจริงอันน่าสะพรึงกลัวซ่อนอยู่ข้างใน",
						"hindi": "यह जंगल देखने में सुंदर है। लेकिन इसके अंदर एक भयानक सच्चाई छिपी हुई है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "네가 생각하는 것보다 훨씬 더.",
						"english": "Far more than you think.",
						"japanese": "君が思っているよりも、はるかにね。",
						"chinese": "远超你的想象。",
						"french": "Bien plus que tu ne l'imagines.",
						"spanish": "Mucho más de lo que piensas.",
						"vietnamese": "Nhiều hơn những gì bạn nghĩ rất nhiều.",
						"thai": "มากกว่าที่คุณคิดไว้เยอะ",
						"hindi": "जितना तुम सोचते हो, उससे कहीं ज़्यादा।"
					},
					"emotion": "angry",
					"speaker": "bracken"
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"type": "direction",
					"speaker": "bracken"
				},
				{
					"content": {
						"korean": "이 숲의 가장 큰 규칙은 하나야.",
						"english": "This forest has one cardinal rule.",
						"japanese": "この森の最大のルールは一つだ。",
						"chinese": "这片森林最大的规则只有一个。",
						"french": "La plus grande règle de cette forêt est unique.",
						"spanish": "La regla más importante de este bosque es una.",
						"vietnamese": "Quy tắc lớn nhất của khu rừng này chỉ có một.",
						"thai": "กฎที่สำคัญที่สุดของป่านี้มีข้อเดียว",
						"hindi": "इस जंगल का सबसे बड़ा नियम एक ही है।"
					},
					"speaker": "bracken",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "살아남기 위해선, 무엇이든 거래해야 한다는 것.",
						"english": "To survive, you must trade anything.",
						"japanese": "生き残るためには、何でも取引しなければならないということ。",
						"chinese": "为了生存，必须交易一切。",
						"french": "Pour survivre, il faut tout échanger.",
						"spanish": "Para sobrevivir, debes negociar cualquier cosa.",
						"vietnamese": "Để sống sót, phải giao dịch bất cứ thứ gì.",
						"thai": "เพื่อความอยู่รอด ต้องแลกเปลี่ยนทุกสิ่ง",
						"hindi": "जीवित रहने के लिए, तुम्हें कुछ भी व्यापार करना होगा।"
					},
					"speaker": "bracken",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그럼 우리도 뭘 거래해야 해?",
						"english": "So what do we have to trade?",
						"japanese": "じゃあ、私たちも何を取引すればいいんだ？",
						"chinese": "那我们也需要交易什么？",
						"french": "Alors, que devons-nous échanger, nous aussi ?",
						"spanish": "Entonces, ¿qué tenemos que negociar nosotros?",
						"vietnamese": "Vậy chúng ta cũng phải giao dịch gì?",
						"thai": "แล้วเราต้องแลกเปลี่ยนอะไร?",
						"hindi": "तो हमें क्या व्यापार करना होगा?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "너의… 모든 것. 때로는 목숨까지도.",
						"english": "Your... everything. Sometimes even your life.",
						"japanese": "君の…全てだ。時には命さえも。",
						"chinese": "你的一切……有时甚至是生命。",
						"french": "Ton... tout. Parfois même ta vie.",
						"spanish": "Tu... todo. A veces incluso tu vida.",
						"vietnamese": "Tất cả... của bạn. Đôi khi cả mạng sống.",
						"thai": "ทุกสิ่ง...ของเธอ บางครั้งก็กระทั่งชีวิต",
						"hindi": "तुम्हारा... सब कुछ। कभी-कभी तुम्हारी जान भी।"
					},
					"speaker": "bracken",
					"emotion": "sad"
				},
				{
					"speaker": "bracken",
					"emotion": "angry",
					"content": {
						"korean": "하지만 그 이면엔 거대한 힘이 도사리고 있어.",
						"english": "But a colossal power lurks beneath.",
						"japanese": "しかし、その裏には巨大な力が潜んでいる。",
						"chinese": "然而，其背后隐藏着一股巨大的力量。",
						"french": "Mais une puissance colossale se cache derrière.",
						"spanish": "Pero una fuerza colosal acecha debajo.",
						"vietnamese": "Nhưng đằng sau đó ẩn chứa một sức mạnh khổng lồ.",
						"thai": "แต่เบื้องหลังนั้นมีพลังมหาศาลซ่อนอยู่",
						"hindi": "लेकिन उसके पीछे एक प्रचंड शक्ति छिपी है।"
					},
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"speaker": "bracken"
				},
				{
					"content": {
						"korean": "이제 되돌아갈 수 없어.",
						"english": "No turning back now.",
						"japanese": "もう後戻りはできない。",
						"chinese": "现在无法回头了。",
						"french": "Plus de retour en arrière possible.",
						"spanish": "Ya no hay vuelta atrás.",
						"vietnamese": "Không thể quay lại nữa.",
						"thai": "ตอนนี้กลับไม่ได้แล้ว",
						"hindi": "अब वापस नहीं जा सकते।"
					},
					"emotion": "sad",
					"speaker": "bracken",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "…알고 있어.",
						"english": "...I know.",
						"japanese": "…分かっている。",
						"chinese": "…我知道。",
						"french": "...Je sais.",
						"spanish": "...Lo sé.",
						"vietnamese": "...Tôi biết.",
						"thai": "...ฉันรู้",
						"hindi": "…मुझे पता है।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 길이 어디로 이어지는지 아나?",
						"english": "Do you know where this path leads?",
						"japanese": "この道がどこへ続くか知っているか？",
						"chinese": "你知道这条路通向何方吗？",
						"french": "Sais-tu où mène ce chemin ?",
						"spanish": "¿Sabes a dónde lleva este camino?",
						"vietnamese": "Ngươi có biết con đường này dẫn đến đâu không?",
						"thai": "เจ้ารู้หรือไม่ว่าทางนี้จะนำไปที่ใด?",
						"hindi": "क्या तुम जानते हो यह रास्ता कहाँ जाता है?"
					},
					"speaker": "bracken",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "절망의 심장부로. 네 모든 희망이 꺾일 수도 있는 곳이야.",
						"english": "To the heart of despair. Where all your hopes may shatter.",
						"japanese": "絶望の核心へ。お前の全ての希望が砕け散る場所だ。",
						"chinese": "通往绝望的核心。你所有的希望都可能在那里破灭。",
						"french": "Au cœur du désespoir. Là où tous tes espoirs pourraient s'effondrer.",
						"spanish": "Al corazón de la desesperación. Donde todas tus esperanzas podrían hacerse pedazos.",
						"vietnamese": "Đến tận cùng của tuyệt vọng. Nơi mọi hy vọng của ngươi có thể tan vỡ.",
						"thai": "สู่ใจกลางแห่งความสิ้นหวัง ที่ซึ่งความหวังทั้งหมดของเจ้าอาจพังทลาย",
						"hindi": "निराशा के केंद्र में। जहाँ तुम्हारी सारी उम्मीदें टूट सकती हैं।"
					},
					"speaker": "bracken",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "그래도 가야 해.",
						"english": "Still, I must go.",
						"japanese": "それでも、行かねばならない。",
						"chinese": "即便如此，我也必须去。",
						"french": "Malgré tout, je dois y aller.",
						"spanish": "Aun así, debo ir.",
						"vietnamese": "Dù vậy, ta vẫn phải đi.",
						"thai": "ถึงกระนั้น ก็ต้องไป",
						"hindi": "फिर भी, मुझे जाना होगा।"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "마침내 숲의 가장 깊은 곳. 어둠의 그림자가 드리웠다.",
						"english": "Finally, the deepest part of the forest. Shadows of darkness loomed.",
						"japanese": "ついに森の最も深い場所。闇の影が迫っていた。",
						"chinese": "终于来到森林最深处。黑暗的阴影笼罩着。",
						"french": "Enfin, le plus profond de la forêt. L'ombre des ténèbres planait.",
						"spanish": "Finalmente, la parte más profunda del bosque. Las sombras de la oscuridad se cernían.",
						"vietnamese": "Cuối cùng, nơi sâu nhất của khu rừng. Bóng tối bao trùm.",
						"thai": "ในที่สุด ก็มาถึงส่วนลึกที่สุดของป่า เงาแห่งความมืดมิดปกคลุม",
						"hindi": "आखिरकार, जंगल का सबसे गहरा हिस्सा। अंधेरे की परछाइयाँ मंडरा रही थीं।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "여기까지 오다니. …꽤 대담하군.",
						"english": "To come this far... Quite daring.",
						"japanese": "ここまで来るとは。…なかなか大胆だな。",
						"chinese": "竟能走到这里。…真是大胆。",
						"french": "Venir jusqu'ici... C'est assez audacieux.",
						"spanish": "Llegar hasta aquí... Bastante osado.",
						"vietnamese": "Dám đến tận đây... Khá là táo bạo đấy.",
						"thai": "มาได้ถึงนี่... ค่อนข้างจะกล้าหาญนะ",
						"hindi": "इतनी दूर आना... काफी साहसिक।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "네가 이 숲을 타락시킨 장본인인가?",
						"english": "Are you the one who corrupted this forest?",
						"japanese": "お前がこの森を堕落させた張本人か？",
						"chinese": "你就是腐蚀这片森林的罪魁祸首吗？",
						"french": "Es-tu celui qui a corrompu cette forêt ?",
						"spanish": "¿Eres tú quien corrompió este bosque?",
						"vietnamese": "Ngươi chính là kẻ đã làm ô uế khu rừng này sao?",
						"thai": "เจ้าคือผู้ที่ทำให้ป่านี้เสื่อมทรามใช่หรือไม่?",
						"hindi": "क्या तुम ही वह हो जिसने इस जंगल को भ्रष्ट किया?"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "타락? 이건 생존이야. 약육강식.",
						"english": "Corruption? This is survival. The strong devour the weak.",
						"japanese": "堕落だと？これは生存だ。弱肉強食。",
						"chinese": "腐蚀？这是生存。弱肉强食。",
						"french": "Corruption ? C'est de la survie. La loi du plus fort.",
						"spanish": "¿Corrupción? Esto es supervivencia. La ley del más fuerte.",
						"vietnamese": "Ô uế? Đây là sự sinh tồn. Cá lớn nuốt cá bé.",
						"thai": "เสื่อมทรามงั้นหรือ? นี่คือการอยู่รอด การที่ผู้แข็งแกร่งกลืนกินผู้อ่อนแอ",
						"hindi": "भ्रष्टाचार? यह अस्तित्व है। बलवान कमजोर को निगल जाता है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "어리석은 정의감으로… 이 숲을 더럽히지 마라.",
						"english": "Don't defile this forest with your foolish sense of justice.",
						"japanese": "愚かな正義感で… この森を汚すな。",
						"chinese": "别用你愚蠢的正义感… 玷污这片森林。",
						"french": "Ne souille pas cette forêt avec ton sens de la justice insensé.",
						"spanish": "No contamines este bosque con tu estúpido sentido de la justicia.",
						"vietnamese": "Đừng làm ô uế khu rừng này bằng cái thứ chính nghĩa ngu xuẩn của ngươi.",
						"thai": "อย่ามาทำให้ป่านี้แปดเปื้อนด้วยความยุติธรรมอันโง่เขลาของแกเลย",
						"hindi": "अपनी मूर्खतापूर्ण न्याय की भावना से... इस जंगल को अपवित्र मत करो。"
					},
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"speaker": "bracken",
					"spot": [
						2,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "bracken",
					"emotion": "angry",
					"content": {
						"korean": "그만해! 숲은 더 이상 피를 원하지 않아!",
						"english": "Stop it! The forest craves no more blood!",
						"japanese": "やめろ！ 森はもう血を求めていない！",
						"chinese": "住手！森林不再需要鲜血！",
						"french": "Arrête ! La forêt ne veut plus de sang !",
						"spanish": "¡Basta! ¡El bosque no quiere más sangre!",
						"vietnamese": "Dừng lại! Rừng không còn muốn máu nữa!",
						"thai": "พอได้แล้ว! ป่าไม่ต้องการเลือดอีกต่อไป!",
						"hindi": "बंद करो! जंगल को अब और खून नहीं चाहिए!"
					}
				},
				{
					"emotion": "happy",
					"speaker": "random_boss",
					"content": {
						"korean": "(웃음) 이제 와서? 너무 늦었어, 브라켄.",
						"english": "(Laughs) Now? Too late, Bracken.",
						"japanese": "（笑）今さら？ 遅すぎるよ、ブラッケン。",
						"chinese": "（笑）现在才想起来？太迟了，布莱肯。",
						"french": "(Rit) Maintenant ? Trop tard, Bracken.",
						"spanish": "(Ríe) ¿Ahora? Es demasiado tarde, Bracken.",
						"vietnamese": "(Cười) Giờ này sao? Quá muộn rồi, Bracken.",
						"thai": "(หัวเราะ) มาตอนนี้เหรอ? สายเกินไปแล้ว แบรกเคน",
						"hindi": "(हंसता है) अब? बहुत देर हो चुकी है, ब्रैकन।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "숲의 질서를 바꿀 순 없어. 죽음만이 있을 뿐.",
						"english": "You can't change the forest's order. Only death awaits.",
						"japanese": "森の秩序は変えられない。死あるのみだ。",
						"chinese": "你无法改变森林的秩序。只有死亡。",
						"french": "Tu ne peux pas changer l'ordre de la forêt. Seule la mort attend.",
						"spanish": "No puedes cambiar el orden del bosque. Solo hay muerte.",
						"vietnamese": "Ngươi không thể thay đổi trật tự của rừng. Chỉ có cái chết mà thôi.",
						"thai": "เจ้าเปลี่ยนระเบียบของป่าไม่ได้ มีแต่ความตายเท่านั้น",
						"hindi": "तुम जंगल के नियम को नहीं बदल सकते। केवल मृत्यु ही है।"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"duration_ms": 400,
					"action": "exit",
					"direction": "down",
					"speaker": "bracken",
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "브라켄!",
						"english": "Bracken!",
						"japanese": "ブラッケン！",
						"chinese": "布莱肯！",
						"french": "Bracken !",
						"spanish": "¡Bracken!",
						"vietnamese": "Bracken!",
						"thai": "แบรกเคน!",
						"hindi": "ब्रैकन!"
					},
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "내 먹이가 되어라.",
						"english": "Become my prey.",
						"japanese": "私の獲物となれ。",
						"chinese": "成为我的猎物吧。",
						"french": "Deviens ma proie.",
						"spanish": "Sé mi presa.",
						"vietnamese": "Hãy trở thành con mồi của ta.",
						"thai": "มาเป็นเหยื่อของข้าซะ",
						"hindi": "मेरे शिकार बनो।"
					}
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "거대한 그림자가 사라졌다. 숲은 다시 침묵했다.",
						"english": "The massive shadow vanished. The forest fell silent once more.",
						"japanese": "巨大な影は消え去った。森は再び沈黙した。",
						"chinese": "巨大的身影消失了。森林再次陷入沉寂。",
						"french": "L'ombre gigantesque disparut. La forêt retrouva son silence.",
						"spanish": "La enorme sombra desapareció. El bosque volvió a silenciarse.",
						"vietnamese": "Bóng đen khổng lồ biến mất. Rừng lại chìm vào im lặng.",
						"thai": "เงาขนาดมหึมาได้หายไป ป่ากลับมาเงียบสงบอีกครั้ง",
						"hindi": "विशाल छाया गायब हो गई। जंगल फिर से शांत हो गया।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "sad",
					"content": {
						"korean": "…이건… 시작일 뿐이야.",
						"english": "...This... is just the beginning.",
						"japanese": "…これは…始まりにすぎない。",
						"chinese": "...这...只是个开始。",
						"french": "...Ce n'est... que le début.",
						"spanish": "...Esto... es solo el principio.",
						"vietnamese": "...Đây... chỉ là khởi đầu thôi.",
						"thai": "...นี่...เป็นเพียงจุดเริ่มต้นเท่านั้น",
						"hindi": "...यह... तो बस शुरुआत है।"
					}
				},
				{
					"content": {
						"korean": "숲의… 진정한… 주인은…",
						"english": "The forest's... true... master...",
						"japanese": "森の…真の…主は…",
						"chinese": "森林的…真正…主人是…",
						"french": "Le véritable... maître... de la forêt...",
						"spanish": "El verdadero... señor... del bosque...",
						"vietnamese": "Chủ nhân... thực sự... của rừng...",
						"thai": "นาย...ที่แท้จริง...ของป่า...",
						"hindi": "जंगल का...असली...स्वामी..."
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "…끝난 게 아니었어.",
						"english": "...It wasn't over.",
						"japanese": "…終わっていなかった。",
						"chinese": "...还没结束。",
						"french": "...Ce n'était pas fini.",
						"spanish": "...No había terminado.",
						"vietnamese": "...Vẫn chưa kết thúc.",
						"thai": "...ยังไม่จบ",
						"hindi": "...यह खत्म नहीं हुआ था।"
					}
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "어둠의 숲은 잠시 숨을 골랐다. 하지만 더 깊은 곳에서, 또 다른 그림자가 움직이고 있었다.",
						"english": "The dark forest caught its breath. But deeper within, another shadow stirred.",
						"japanese": "暗闇の森は一時息を潜めた。しかし、より深い場所で、別の影が動き始めていた。",
						"chinese": "黑暗森林暂时平静下来。然而，在更深处，另一道阴影正在蠢蠢欲动。",
						"french": "La forêt sombre retint son souffle un instant. Mais au plus profond, une autre ombre s'agitait.",
						"spanish": "El bosque oscuro contuvo el aliento por un momento. Pero en lo más profundo, otra sombra se movía.",
						"vietnamese": "Rừng tối tạm thời nín thở. Nhưng sâu thẳm hơn, một bóng tối khác đang cựa quậy.",
						"thai": "ป่าทมิฬสงบนิ่งไปชั่วครู่ แต่ลึกเข้าไปข้างใน เงาอีกตนหนึ่งกำลังเคลื่อนไหว",
						"hindi": "अंधेरे जंगल ने थोड़ी देर के लिए सांस ली। लेकिन और गहराई में, एक और छाया हिल रही थी।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "탐험대의 여정은 이제 막 시작되었다.",
						"english": "The expedition has only just begun.",
						"japanese": "探検隊の旅は、今始まったばかりだ。",
						"chinese": "探险队的旅程才刚刚开始。",
						"french": "Le voyage de l'expédition ne fait que commencer.",
						"spanish": "La expedición apenas ha comenzado.",
						"vietnamese": "Cuộc hành trình của đội thám hiểm chỉ vừa mới bắt đầu.",
						"thai": "การเดินทางของคณะสำรวจเพิ่งจะเริ่มต้นขึ้น",
						"hindi": "अभियान की यात्रा अभी शुरू ही हुई है।"
					},
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "거대한 그림자에 압도당했다.",
						"english": "Overwhelmed by a colossal shadow.",
						"japanese": "巨大な影に圧倒された。",
						"chinese": "被巨大的阴影吞噬了。",
						"french": "Submergé par une ombre colossale.",
						"spanish": "Abrumado por una sombra colosal.",
						"vietnamese": "Bị bóng tối khổng lồ áp đảo.",
						"thai": "ถูกเงายักษ์ครอบงำ",
						"hindi": "एक विशाल छाया से अभिभूत।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "약해. 너무 약해.",
						"english": "Weak. Too weak.",
						"japanese": "弱い。弱すぎる。",
						"chinese": "太弱了。实在太弱了。",
						"french": "Faible. Trop faible.",
						"spanish": "Débil. Demasiado débil.",
						"vietnamese": "Yếu ớt. Quá yếu ớt.",
						"thai": "อ่อนแอ อ่อนแอเกินไป",
						"hindi": "कमजोर। बहुत कमजोर।"
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "이 숲은… 너희가 상대할 곳이 아니야.",
						"english": "This forest... is not for you to challenge.",
						"japanese": "この森は… お前たちが相手にする場所ではない。",
						"chinese": "这片森林… 不是你们能对付的。",
						"french": "Cette forêt… n'est pas un lieu pour vous.",
						"spanish": "Este bosque... no es para vosotros.",
						"vietnamese": "Rừng này… không phải là nơi các ngươi có thể đối phó.",
						"thai": "ป่านี้... ไม่ใช่ที่ที่พวกเจ้าจะรับมือได้",
						"hindi": "यह जंगल... तुम्हारे सामना करने के लिए नहीं है।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "…다시 일어설 거야. 반드시.",
						"english": "...I will rise again. Absolutely.",
						"japanese": "…再び立ち上がる。必ず。",
						"chinese": "…我会再次站起来。绝不放弃。",
						"french": "…Je me relèverai. Absolument.",
						"spanish": "…Me levantaré de nuevo. Sin falta.",
						"vietnamese": "…Ta sẽ đứng dậy lần nữa. Nhất định.",
						"thai": "...ฉันจะลุกขึ้นอีกครั้ง ให้ได้",
						"hindi": "...मैं फिर से उठूंगा। निश्चित रूप से।"
					},
					"type": "speech"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"평화로운 숲? 그건 겉모습일 뿐.",
			"붉게 물든 잎사귀 아래, 은밀한 거래가 시작된다.",
			"생존을 위해 모든 것을 걸어야 하는 이곳에서, 진실은 숨겨져 있다.",
			"어둠의 서막이 열리고, 탐험대는 첫 번째 시련을 마주한다."
		],
		"english": [
			"A peaceful forest? Only on the surface.",
			"Beneath crimson leaves, a secret trade begins.",
			"Here, where survival demands everything, truth remains hidden.",
			"The prelude to darkness begins, and the expedition faces its first trial."
		],
		"japanese": [
			"平和な森？それは見せかけに過ぎない。",
			"赤く染まった葉の下、秘密の取引が始まる。",
			"生き残るために全てを賭けねばならないこの場所で、真実は隠されている。",
			"闇の序幕が開き、探検隊は最初の試練に直面する。"
		],
		"chinese": [
			"宁静的森林？那只是表象。",
			"在染红的叶子下，秘密交易开始了。",
			"在这里，为了生存必须赌上一切，真相却被隐藏着。",
			"黑暗的序幕拉开，探险队面临着第一次考验。"
		],
		"french": [
			"Une forêt paisible ? Ce n'est qu'une façade.",
			"Sous les feuilles écarlates, un commerce secret commence.",
			"Ici, où la survie exige tout, la vérité reste cachée.",
			"Le prélude des ténèbres s'ouvre, et l'expédition affronte sa première épreuve."
		],
		"spanish": [
			"¿Un bosque pacífico? Solo en apariencia.",
			"Bajo las hojas carmesí, un comercio secreto comienza.",
			"Aquí, donde la supervivencia lo exige todo, la verdad permanece oculta.",
			"El preludio de la oscuridad se abre, y la expedición se enfrenta a su primera prueba."
		],
		"vietnamese": [
			"Một khu rừng yên bình? Chỉ là vẻ ngoài thôi.",
			"Dưới những tán lá đỏ thẫm, một giao dịch bí mật bắt đầu.",
			"Ở đây, nơi sinh tồn đòi hỏi tất cả, sự thật vẫn bị che giấu.",
			"Màn dạo đầu của bóng tối mở ra, và đoàn thám hiểm đối mặt với thử thách đầu tiên."
		],
		"thai": [
			"ป่าอันเงียบสงบ? นั่นเป็นเพียงแค่ภายนอกเท่านั้น",
			"ใต้ใบไม้สีแดงฉาน การค้าลับเริ่มต้นขึ้น",
			"ที่นี่ ที่ซึ่งการเอาชีวิตรอดต้องแลกมาด้วยทุกสิ่ง ความจริงยังคงถูกซ่อนไว้",
			"ปฐมบทแห่งความมืดมิดเปิดฉากขึ้น และคณะสำรวจเผชิญหน้ากับการทดสอบครั้งแรก"
		],
		"hindi": [
			"एक शांतिपूर्ण जंगल? यह केवल बाहरी रूप है।",
			"लाल पत्तियों के नीचे, एक गुप्त व्यापार शुरू होता है।",
			"यहां, जहां अस्तित्व सब कुछ मांगता है, सच्चाई छिपी रहती है।",
			"अंधेरे का प्रस्तावना शुरू होता है, और अभियान अपनी पहली परीक्षा का सामना करता है।"
		]
	}
} as const;
