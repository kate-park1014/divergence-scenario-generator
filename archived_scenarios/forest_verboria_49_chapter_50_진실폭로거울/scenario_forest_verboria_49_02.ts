export const scenario_forest_verboria_49_02 = {
	"scenario_id": "forest_verboria_49_02",
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
	"prologue": {
		"korean": [
			"숲에 침묵은 없었다.",
			"샘물은 비밀을 훔치고 속삭였다.",
			"서로를 향한 비난의 칼날이 번뜩였다.",
			"그 광란 속에서, 새로운 폭로자가 태어났다."
		],
		"english": [
			"There was no silence in the forest.",
			"The spring stole secrets and whispered.",
			"Blades of accusation flashed towards each other.",
			"Amidst the frenzy, a new revealer was born."
		],
		"japanese": [
			"森林に沈黙はなかった。",
			"泉は秘密を盗み、囁いた。",
			"互いへの非難の刃が閃いた。",
			"その狂乱の中で、新たな暴露者が生まれた。"
		],
		"chinese": [
			"森林里没有寂静。",
			"泉水窃取了秘密并低语着。",
			"相互指责的刀刃闪烁着。",
			"在那狂乱之中，一个新的揭发者诞生了。"
		],
		"french": [
			"Il n'y avait pas de silence dans la forêt.",
			"La source volait des secrets et chuchotait.",
			"Des lames d'accusation jaillissaient l'une vers l'autre.",
			"Au milieu de cette frénésie, un nouveau dénonciateur naquit."
		],
		"spanish": [
			"No había silencio en el bosque.",
			"El manantial robaba secretos y susurraba.",
			"Cuchillas de acusación brillaron entre ellos.",
			"En medio de esa locura, nació un nuevo revelador."
		],
		"vietnamese": [
			"Không có sự im lặng trong rừng.",
			"Suối nước đánh cắp bí mật và thì thầm.",
			"Lưỡi dao buộc tội loé lên hướng về nhau.",
			"Giữa sự hỗn loạn đó, một kẻ tiết lộ mới ra đời."
		],
		"thai": [
			"ไม่มีความเงียบในป่า",
			"น้ำพุขโมยความลับและกระซิบ",
			"คมดาบแห่งการกล่าวหาเฉือนเข้าหากัน",
			"ในความบ้าคลั่งนั้น ผู้เปิดเผยคนใหม่ถือกำเนิดขึ้น"
		],
		"hindi": [
			"जंगल में शांति नहीं थी।",
			"झरने ने रहस्य चुराए और फुसफुसाए।",
			"एक-दूसरे पर आरोपों की तलवारें चमक उठीं।",
			"उस उन्माद में, एक नया खुलासा करने वाला पैदा हुआ।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "숲에 불안한 속삭임이 감돌았다.",
						"english": "Uneasy whispers filled the forest.",
						"japanese": "森に不穏な囁きが漂っていた。",
						"chinese": "森林里弥漫着不安的低语。",
						"french": "Des murmures inquiets flottaient dans la forêt.",
						"spanish": "Susurros inquietantes rondaban el bosque.",
						"vietnamese": "Những lời thì thầm bất an lan toả trong rừng.",
						"thai": "เสียงกระซิบกระซาบที่ไม่สบายใจลอยอยู่ในป่า",
						"hindi": "जंगल में बेचैन फुसफुसाहट गूंज रही थी।"
					}
				},
				{
					"content": {
						"korean": "무슨 소리 못 들었어?",
						"english": "Didn't you hear something?",
						"japanese": "何か聞こえなかった？",
						"chinese": "你没听到什么吗？",
						"french": "Tu n'as rien entendu ?",
						"spanish": "¿No oíste algo?",
						"vietnamese": "Anh/Bạn không nghe thấy gì à?",
						"thai": "ไม่ได้ยินอะไรเลยเหรอ?",
						"hindi": "क्या तुमने कुछ नहीं सुना?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "briar",
					"action": "enter",
					"spot": [
						4,
						3
					]
				},
				{
					"speaker": "briar",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "비밀은… 내가 더 많이 알고 있지.",
						"english": "Secrets... I know more.",
						"japanese": "秘密は…私がもっと知っている。",
						"chinese": "秘密…我知晓更多。",
						"french": "Les secrets… j'en sais plus.",
						"spanish": "Secretos... yo sé más.",
						"vietnamese": "Bí mật... tôi biết nhiều hơn.",
						"thai": "ความลับ...ฉันรู้มากกว่า",
						"hindi": "राज़... मुझे ज़्यादा पता है।"
					}
				},
				{
					"content": {
						"korean": "너 왜 그렇게 의미심장해?",
						"english": "Why are you so cryptic?",
						"japanese": "なぜそんなに意味深長なの？",
						"chinese": "你为什么这么意味深长？",
						"french": "Pourquoi es-tu si énigmatique ?",
						"spanish": "¿Por qué eres tan enigmático?",
						"vietnamese": "Sao anh/bạn lại đầy ẩn ý thế?",
						"thai": "ทำไมเธอถึงดูมีความนัยจัง?",
						"hindi": "तुम इतने गूढ़ क्यों हो?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "그냥. 다들 모른다는 게 재밌어서.",
						"english": "Just. It's fun everyone else is clueless.",
						"japanese": "ただ。みんなが知らないのが面白いから。",
						"chinese": "只是。大家一无所知，这很有趣。",
						"french": "Juste. C'est amusant que personne ne sache.",
						"spanish": "Solo. Es divertido que nadie sepa.",
						"vietnamese": "Chỉ là. Thật thú vị khi mọi người không biết.",
						"thai": "แค่. สนุกดีที่ไม่มีใครรู้",
						"hindi": "बस। यह मज़ाकिया है कि किसी को पता नहीं।"
					},
					"emotion": "happy",
					"type": "speech",
					"speaker": "briar"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "briar",
					"type": "direction",
					"spot": [
						4,
						3
					],
					"action": "enter"
				},
				{
					"content": {
						"korean": "…그 소문 진짜야?",
						"english": "...Is that rumor true?",
						"japanese": "…その噂、本当なの？",
						"chinese": "……那个传闻是真的吗？",
						"french": "...Cette rumeur est-elle vraie ?",
						"spanish": "...¿Es cierto ese rumor?",
						"vietnamese": "...Tin đồn đó là thật ư?",
						"thai": "...ข่าวลือนั่นจริงเหรอ?",
						"hindi": "...क्या वह अफवाह सच है?"
					},
					"emotion": "base",
					"speaker": "briar",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "무슨 소문? 말해봐!",
						"english": "What rumor? Tell me!",
						"japanese": "何の噂？教えて！",
						"chinese": "什么谣言？快说！",
						"french": "Quelle rumeur ? Dis-moi !",
						"spanish": "¿Qué rumor? ¡Dime!",
						"vietnamese": "Tin đồn gì? Nói đi!",
						"thai": "ข่าวลืออะไร? บอกมา!",
						"hindi": "कैसी अफवाह? बताओ!"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "briar",
					"content": {
						"korean": "이 숲에선 비밀이 없어. 언젠가는 다 드러나.",
						"english": "No secrets in this forest. Everything comes out eventually.",
						"japanese": "この森に秘密はない。いつか全て暴かれる。",
						"chinese": "在这片森林里没有秘密。总有一天都会曝光的。",
						"french": "Pas de secrets dans cette forêt. Tout finit par se savoir.",
						"spanish": "En este bosque no hay secretos. Todo sale a la luz tarde o temprano.",
						"vietnamese": "Rừng này không có bí mật. Mọi thứ rồi sẽ lộ ra thôi.",
						"thai": "ไม่มีความลับในป่านี้. ทุกอย่างจะถูกเปิดเผยในไม่ช้า.",
						"hindi": "इस जंगल में कोई रहस्य नहीं। सब कुछ अंततः सामने आ ही जाता है।"
					},
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "옛날부터 그랬어. 소문이 반복해서 돌았지.",
						"english": "It's always been like this. Rumors kept circling.",
						"japanese": "昔からそうだった。噂は何度も巡った。",
						"chinese": "一直都是这样。谣言反复流传。",
						"french": "Ça a toujours été comme ça. Les rumeurs ont circulé en boucle.",
						"spanish": "Siempre ha sido así. Los rumores circulaban una y otra vez.",
						"vietnamese": "Xưa nay vẫn thế. Tin đồn cứ lặp đi lặp lại.",
						"thai": "มันเป็นแบบนี้มานานแล้ว. ข่าวลือวนเวียนซ้ำไปซ้ำมา.",
						"hindi": "यह हमेशा से ऐसा ही रहा है। अफवाहें बार-बार फैलती रहीं।"
					},
					"type": "speech",
					"speaker": "character_1"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "너… 뭘 아는 거야?",
						"english": "You... what do you know?",
						"japanese": "お前…何か知ってるのか？",
						"chinese": "你…知道些什么？",
						"french": "Toi... qu'est-ce que tu sais ?",
						"spanish": "Tú... ¿qué sabes?",
						"vietnamese": "Ngươi... biết gì sao?",
						"thai": "เธอ...รู้อะไร?",
						"hindi": "तुम... क्या जानते हो?"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "briar",
					"type": "direction",
					"spot": [
						4,
						3
					],
					"action": "enter"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "네가 소문을 퍼뜨리는 거지?",
						"english": "You're the one spreading rumors, aren't you?",
						"japanese": "お前が噂を広めてるんだろ？",
						"chinese": "是你散布谣言的吧？",
						"french": "C'est toi qui répands les rumeurs, n'est-ce pas ?",
						"spanish": "Tú eres quien difunde los rumores, ¿verdad?",
						"vietnamese": "Ngươi đang lan truyền tin đồn đúng không?",
						"thai": "เธอเป็นคนปล่อยข่าวลือใช่ไหม?",
						"hindi": "तुम ही अफवाहें फैला रहे हो, है ना?"
					},
					"emotion": "angry"
				},
				{
					"speaker": "briar",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "내가? 내가 뭘?",
						"english": "Me? What did I do?",
						"japanese": "私が？何を？",
						"chinese": "我？我做了什么？",
						"french": "Moi ? Qu'est-ce que j'ai fait ?",
						"spanish": "¿Yo? ¿Qué hice?",
						"vietnamese": "Tôi á? Tôi làm gì?",
						"thai": "ฉัน? ฉันทำอะไร?",
						"hindi": "मैं? मैंने क्या किया?"
					}
				},
				{
					"content": {
						"korean": "네가 제일 수상해. 숨기는 게 있잖아.",
						"english": "You're the most suspicious. You're hiding something.",
						"japanese": "お前が一番怪しい。何か隠してるだろ。",
						"chinese": "你最可疑。你藏着什么呢。",
						"french": "Tu es le plus suspect. Tu caches quelque chose.",
						"spanish": "Tú eres el más sospechoso. Estás ocultando algo.",
						"vietnamese": "Ngươi đáng ngờ nhất. Ngươi đang giấu cái gì đó.",
						"thai": "เธอมีพิรุธที่สุด. เธอต้องซ่อนอะไรบางอย่าง.",
						"hindi": "तुम सबसे संदिग्ध हो। तुम कुछ छुपा रहे हो।"
					},
					"emotion": "angry",
					"speaker": "character_2",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "난 몰라! 나도 피해자라고.",
						"english": "I don't know! I'm a victim too!",
						"japanese": "知らない！私も被害者よ。",
						"chinese": "我不知道！我也是受害者。",
						"french": "Je ne sais pas ! Je suis aussi une victime !",
						"spanish": "¡No lo sé! ¡Yo también soy una víctima!",
						"vietnamese": "Tôi không biết! Tôi cũng là nạn nhân!",
						"thai": "ฉันไม่รู้! ฉันก็เป็นเหยื่อเหมือนกัน!",
						"hindi": "मुझे नहीं पता! मैं भी पीड़ित हूँ!"
					},
					"speaker": "briar",
					"type": "speech"
				},
				{
					"content": {
						"korean": "가장 믿었던 이의 시선이 그녀를 꿰뚫었다.",
						"english": "The gaze of the one she trusted most pierced her.",
						"japanese": "最も信じていた者の視線が、彼女を貫いた。",
						"chinese": "她最信任的人的目光刺穿了她。",
						"french": "Le regard de celui en qui elle avait le plus confiance la transperça.",
						"spanish": "La mirada de quien más confiaba la traspasó.",
						"vietnamese": "Ánh mắt của người cô tin tưởng nhất xuyên thấu cô.",
						"thai": "สายตาของผู้ที่เธอไว้ใจที่สุดแทงทะลุเธอ.",
						"hindi": "जिस पर उसे सबसे अधिक भरोसा था, उसकी नज़र ने उसे भेद दिया।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "그럼 뭘 숨기는지 말해봐!",
						"english": "Then tell me what you're hiding!",
						"japanese": "なら何を隠してるのか言ってみろ！",
						"chinese": "那你告诉我你藏着什么！",
						"french": "Alors dis-moi ce que tu caches !",
						"spanish": "¡Entonces dime qué ocultas!",
						"vietnamese": "Vậy nói đi ngươi đang giấu cái gì!",
						"thai": "ถ้างั้นบอกมาว่าเธอซ่อนอะไรอยู่!",
						"hindi": "तो बताओ तुम क्या छुपा रहे हो!"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…내가 아는 게 하나 있긴 한데…",
						"english": "...I do know one thing...",
						"japanese": "…一つだけ、知っていることがあるんだが…",
						"chinese": "……我确实知道一件事……",
						"french": "...Je sais une chose cependant...",
						"spanish": "...Hay una cosa que sí sé...",
						"vietnamese": "...Có một điều ta biết...",
						"thai": "...มีบางอย่างที่ฉันรู้นะ...",
						"hindi": "...एक बात तो मैं जानता हूँ..."
					},
					"speaker": "briar",
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "briar",
					"action": "enter",
					"spot": [
						4,
						3
					]
				},
				{
					"speaker": "briar",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "나만 아니면 돼...",
						"english": "As long as it's not me...",
						"japanese": "私じゃなければ、それでいい…",
						"chinese": "只要不是我就行……",
						"french": "Pourvu que ce ne soit pas moi...",
						"spanish": "Mientras no sea yo...",
						"vietnamese": "Miễn không phải là tôi...",
						"thai": "แค่ไม่ใช่ฉันก็พอ...",
						"hindi": "बस मैं न हूँ..."
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "무슨 소리야, 브라이어?",
						"english": "What are you talking about, Briar?",
						"japanese": "何の話だ、ブライアー？",
						"chinese": "你在说什么，布莱尔？",
						"french": "De quoi parles-tu, Briar ?",
						"spanish": "¿De qué hablas, Briar?",
						"vietnamese": "Cậu đang nói gì vậy, Briar?",
						"thai": "นายพูดอะไรน่ะ ไบรเออร์?",
						"hindi": "क्या कह रहे हो, ब्रायर?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "거대한 그림자가 길을 막았다. 싸늘한 기운이 덮쳐왔다.",
						"english": "A colossal shadow blocked the path. A chilling aura enveloped us.",
						"japanese": "巨大な影が道を塞いだ。冷たい気配が押し寄せる。",
						"chinese": "巨大的阴影挡住了去路。一股森冷的寒意袭来。",
						"french": "Une ombre colossale bloquait le chemin. Une aura glaciale nous enveloppa.",
						"spanish": "Una sombra colosal bloqueó el camino. Una aura escalofriante nos envolvió.",
						"vietnamese": "Một bóng đen khổng lồ chặn đường. Một luồng khí lạnh lẽo bao trùm.",
						"thai": "เงาขนาดมหึมาขวางทาง ออร่าเยือกเย็นปกคลุม",
						"hindi": "एक विशाल छाया ने रास्ता रोक दिया। एक सर्द आभा छा गई।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "또 다른 먹잇감인가.",
						"english": "Another prey?",
						"japanese": "また別の獲物か。",
						"chinese": "又是另一个猎物吗？",
						"french": "Une autre proie ?",
						"spanish": "¿Otra presa?",
						"vietnamese": "Lại là một con mồi khác sao?",
						"thai": "เหยื่อรายอื่นอีกแล้วรึ?",
						"hindi": "एक और शिकार?"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이 괴물은 뭐야!",
						"english": "What is this monster!",
						"japanese": "この怪物は何だ！",
						"chinese": "这是什么怪物！",
						"french": "C'est quoi ce monstre !",
						"spanish": "¡¿Qué es este monstruo?!",
						"vietnamese": "Quái vật gì đây!",
						"thai": "นี่มันสัตว์ประหลาดอะไร!",
						"hindi": "यह क्या राक्षस है!"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "너희의 비밀은… 역겹도록 달콤하더군. 특히 'briar', 네것이.",
						"english": "Your secrets... are sickeningly sweet. Especially yours, 'Briar'.",
						"japanese": "お前たちの秘密は… 吐き気がするほど甘美だな。特に『ブライアー』、お前のものが。",
						"chinese": "你们的秘密……真是令人作呕的甜美。尤其是，‘布莱尔’，你的。",
						"french": "Vos secrets... sont écœuramment doux. Surtout le tien, 'Briar'.",
						"spanish": "Vuestros secretos... son asquerosamente dulces. Especialmente el tuyo, 'Briar'.",
						"vietnamese": "Bí mật của các ngươi... thật ngọt ngào đến ghê tởm. Đặc biệt là của ngươi, 'Briar'.",
						"thai": "ความลับของพวกเจ้า... มันหวานจนน่าขยะแขยง โดยเฉพาะของเจ้า 'ไบรเออร์'",
						"hindi": "तुम्हारे रहस्य... घृणित रूप से मीठे हैं। खासकर 'ब्रायर', तुम्हारा।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"speaker": "briar",
					"emotion": "angry",
					"content": {
						"korean": "내… 내 비밀을 어떻게 알아!",
						"english": "How... how do you know my secret!",
						"japanese": "私の… 私の秘密をどうして知っているんだ！",
						"chinese": "你… 你怎么知道我的秘密！",
						"french": "Comment... comment connais-tu mon secret !",
						"spanish": "¡¿Cómo... cómo sabes mi secreto?!",
						"vietnamese": "Sao... sao ngươi biết bí mật của ta!",
						"thai": "นาย... นายรู้ความลับของฉันได้ยังไง!",
						"hindi": "तुम... तुम मेरा रहस्य कैसे जानते हो!"
					}
				}
			]
		},
		{
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "…이건… 끝나지 않아. 다음 속삭임이 올 거야.",
						"english": "...This... isn't over. The next whisper will come.",
						"japanese": "…これは…終わらない。次の囁きが来るだろう。",
						"chinese": "…这…还没结束。下一次低语将会到来。",
						"french": "...Ce... n'est pas fini. Le prochain murmure viendra.",
						"spanish": "...Esto... no ha terminado. El próximo susurro llegará.",
						"vietnamese": "...Cái này... chưa kết thúc. Lời thì thầm tiếp theo sẽ đến.",
						"thai": "...นี่...ยังไม่จบ เสียงกระซิบครั้งต่อไปจะมา",
						"hindi": "...यह... खत्म नहीं हुआ है। अगली फुसफुसाहट आएगी।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…뭐라고?",
						"english": "...What?",
						"japanese": "…何だと？",
						"chinese": "…什么？",
						"french": "...Quoi ?",
						"spanish": "...¿Qué?",
						"vietnamese": "...Gì cơ?",
						"thai": "...อะไรนะ?",
						"hindi": "...क्या?"
					}
				},
				{
					"content": {
						"korean": "‘random_boss’는 사라졌지만, 숲의 비난은 멈추지 않았다.",
						"english": "'random_boss' is gone, but the forest's accusations haven't stopped.",
						"japanese": "「random_boss」は消えたが、森の非難は止まなかった。",
						"chinese": "‘random_boss’消失了，但森林的指责并未停止。",
						"french": "'random_boss' a disparu, mais les accusations de la forêt ne se sont pas arrêtées.",
						"spanish": "'random_boss' se ha ido, pero las acusaciones del bosque no han cesado.",
						"vietnamese": "'random_boss' đã biến mất, nhưng lời buộc tội của khu rừng vẫn không dừng lại.",
						"thai": "'random_boss' หายไปแล้ว แต่คำกล่าวหาของป่าก็ยังไม่หยุด",
						"hindi": "'random_boss' चला गया, लेकिन जंगल के आरोप नहीं रुके हैं।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "누군가 브라이어의 등 뒤에서 속삭였다. 새로운 폭로의 씨앗이 뿌려졌다.",
						"english": "Someone whispered behind Briar's back. The seeds of a new revelation were sown.",
						"japanese": "誰かがブライアの背後で囁いた。新たな暴露の種が蒔かれたのだ。",
						"chinese": "有人在布莱尔背后低语。新启示的种子已播下。",
						"french": "Quelqu'un a murmuré derrière le dos de Briar. Les graines d'une nouvelle révélation furent semées.",
						"spanish": "Alguien susurró a espaldas de Briar. Las semillas de una nueva revelación fueron sembradas.",
						"vietnamese": "Ai đó thì thầm sau lưng Briar. Hạt giống của một sự thật mới đã được gieo.",
						"thai": "ใครบางคนกระซิบที่ด้านหลังของไบรเออร์ เมล็ดพันธุ์ของการเปิดเผยใหม่ถูกหว่าน",
						"hindi": "किसी ने ब्रायर की पीठ पीछे फुसफुसाया। एक नए रहस्योद्घाटन के बीज बोए गए।"
					},
					"type": "speech",
					"speaker": "narrator"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "인간의 추악한 비밀은 이 숲의 양식이다.",
						"english": "Humanity's ugly secrets are this forest's sustenance.",
						"japanese": "人間の醜い秘密は、この森の糧なのだ。",
						"chinese": "人类丑陋的秘密是这片森林的食粮。",
						"french": "Les secrets hideux de l'humanité sont la subsistance de cette forêt.",
						"spanish": "Los feos secretos de la humanidad son el sustento de este bosque.",
						"vietnamese": "Những bí mật xấu xí của loài người là thức ăn của khu rừng này.",
						"thai": "ความลับอันน่าเกลียดของมนุษย์คือเครื่องหล่อเลี้ยงของป่านี้",
						"hindi": "मानवता के बदसूरत रहस्य इस जंगल का पोषण हैं।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "입 닥쳐!",
						"english": "Shut up!",
						"japanese": "黙れ！",
						"chinese": "闭嘴！",
						"french": "Tais-toi !",
						"spanish": "¡Cállate!",
						"vietnamese": "Im đi!",
						"thai": "หุบปาก!",
						"hindi": "चुप हो जाओ!"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "네가 숨긴 모든 것. 이제 곧 모두가 알게 될 것이다.",
						"english": "Everything you've hidden. Soon, everyone will know.",
						"japanese": "お前が隠した全て。もうすぐ、皆が知ることになるだろう。",
						"chinese": "你所隐藏的一切。很快，所有人都会知道。",
						"french": "Tout ce que tu as caché. Bientôt, tout le monde le saura.",
						"spanish": "Todo lo que has ocultado. Pronto, todos lo sabrán.",
						"vietnamese": "Mọi thứ ngươi che giấu. Chẳng mấy chốc, mọi người sẽ biết hết.",
						"thai": "ทุกสิ่งที่เจ้าซ่อนไว้ อีกไม่นาน ทุกคนจะรู้",
						"hindi": "जो कुछ भी तुमने छुपाया है। जल्द ही, हर कोई जान जाएगा。"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "안 돼!",
						"english": "No!",
						"japanese": "やめて！",
						"chinese": "不！",
						"french": "Non !",
						"spanish": "¡No!",
						"vietnamese": "Không!",
						"thai": "ไม่นะ!",
						"hindi": "नहीं!"
					},
					"emotion": "sad",
					"speaker": "briar",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "자, 보여주마. 네 진실을!",
						"english": "Now, I'll show them. Your truth!",
						"japanese": "さあ、見せてやろう。お前の真実を！",
						"chinese": "来吧，我来展示。你的真相！",
						"french": "Maintenant, je vais leur montrer. Ta vérité !",
						"spanish": "¡Ahora, les mostraré. Tu verdad!",
						"vietnamese": "Nào, ta sẽ cho thấy. Sự thật của ngươi!",
						"thai": "เอาล่ะ ข้าจะแสดงให้เห็น ความจริงของเจ้า!",
						"hindi": "अब, मैं दिखाऊंगा। तुम्हारी सच्चाई!"
					},
					"emotion": "happy"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "너희의 약점은 명확해. 서로를 믿지 못하는 것.",
						"english": "Your weakness is clear. Your inability to trust each other.",
						"japanese": "お前たちの弱点は明らかだ。互いを信じられないこと。",
						"chinese": "你们的弱点很明显。无法互相信任。",
						"french": "Votre faiblesse est claire. Votre incapacité à vous faire confiance.",
						"spanish": "Vuestra debilidad es clara. Vuestra incapacidad para confiar los unos en los otros.",
						"vietnamese": "Điểm yếu của các ngươi rõ ràng. Đó là không thể tin tưởng lẫn nhau.",
						"thai": "จุดอ่อนของพวกเจ้าชัดเจน การไม่เชื่อใจกันและกัน",
						"hindi": "तुम्हारी कमजोरी स्पष्ट है। एक-दूसरे पर भरोसा न करना।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "다시… 싸울 거야!",
						"english": "I'll... fight again!",
						"japanese": "また…戦うぞ！",
						"chinese": "我将…再次战斗！",
						"french": "Je... me battrai encore !",
						"spanish": "¡Volveré... a luchar!",
						"vietnamese": "Ta sẽ... chiến đấu lại!",
						"thai": "ข้าจะ...สู้ใหม่!",
						"hindi": "मैं... फिर से लड़ूंगा!"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "그래. 파멸의 끝까지 달려보거라.",
						"english": "Yes. Run to the end of your destruction.",
						"japanese": "ああ。破滅の終わりまで駆け上がってみるがいい。",
						"chinese": "是。奔向毁灭的终点吧。",
						"french": "Oui. Courez jusqu'au bout de votre destruction.",
						"spanish": "Sí. Corred hasta el fin de vuestra destrucción.",
						"vietnamese": "Phải. Cứ chạy đến tận cùng của sự hủy diệt đi.",
						"thai": "ใช่ วิ่งไปจนสุดปลายทางแห่งความพินาศของพวกเจ้าเถอะ",
						"hindi": "हाँ। अपने विनाश के अंत तक दौड़ो।"
					}
				}
			],
			"id": 15
		}
	]
} as const;
