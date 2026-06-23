export const scenario_modern_memorykeeper_76_05 = {
	"scenario_id": "modern_memorykeeper_76_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "modern",
	"actors": {
		"lin": {
			"id": "mon_d036a884-3dde-472c-9fe7-c4807643860f",
			"name": {
				"korean": "린",
				"english": "Lin",
				"japanese": "リン",
				"chinese": "琳",
				"french": "Lin",
				"spanish": "Lin",
				"vietnamese": "Lin",
				"thai": "ลิน",
				"hindi": "लिन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a095dd66-1857-4f44-68b0-2ece83006d00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/05b02694-f1ed-4e4c-b7ca-fb5b74a48900/public"
		}
	},
	"boss": {
		"pool_id": "pool_ExArchive_V0"
	},
	"prologue": {
		"korean": [
			"너무나 익숙한 풍경. 너무나 아름다운 과거.",
			"하지만 그 안에서, 시간은 멈춰 있었다.",
			"달콤한 기억은 반복되고, 현실은 부정된다.",
			"이 환영의 감옥, 이제 끝내야 할 때."
		],
		"english": [
			"A landscape all too familiar. A past all too beautiful.",
			"But within it, time stood still.",
			"Sweet memories repeat, and reality is denied.",
			"This prison of illusion, it's time to end it now."
		],
		"japanese": [
			"あまりにも見慣れた風景。あまりにも美しい過去。",
			"しかしその中で、時間は止まっていた。",
			"甘い記憶は繰り返され、現実は否定される。",
			"この幻影の監獄、今こそ終わらせる時。"
		],
		"chinese": [
			"似曾相识的风景。无比美好的过去。",
			"然而在那之中，时间停止了。",
			"甜蜜的记忆不断重复，现实被否定。",
			"这个幻象的牢笼，现在是时候结束了。"
		],
		"french": [
			"Un paysage si familier. Un passé si beau.",
			"Mais en son sein, le temps s'était arrêté.",
			"Les doux souvenirs se répètent, et la réalité est niée.",
			"Cette prison d'illusion, il est temps d'y mettre fin maintenant."
		],
		"spanish": [
			"Un paisaje demasiado familiar. Un pasado demasiado hermoso.",
			"Pero dentro de él, el tiempo se había detenido.",
			"Los dulces recuerdos se repiten, y la realidad es negada.",
			"Esta prisión de ilusión, es hora de terminarla ahora."
		],
		"vietnamese": [
			"Khung cảnh quá đỗi quen thuộc. Quá khứ quá đỗi tươi đẹp.",
			"Nhưng trong đó, thời gian đã ngừng lại.",
			"Ký ức ngọt ngào lặp lại, thực tại bị chối bỏ.",
			"Nhà tù ảo ảnh này, đã đến lúc phải chấm dứt."
		],
		"thai": [
			"ทิวทัศน์ที่คุ้นเคยเกินไป อดีตที่งดงามเกินไป",
			"แต่ในนั้น เวลากลับหยุดนิ่ง",
			"ความทรงจำอันหอมหวานซ้ำรอย และความเป็นจริงถูกปฏิเสธ",
			"คุกแห่งภาพลวงตานี้ ถึงเวลาที่จะต้องจบลงแล้ว"
		],
		"hindi": [
			"अत्यंत परिचित दृश्य। अत्यंत सुंदर अतीत।",
			"परंतु उसके भीतर, समय थम गया था।",
			"मीठी यादें दोहराई जाती हैं, और वास्तविकता नकार दी जाती है।",
			"यह भ्रम का कारागार, अब इसे समाप्त करने का समय है।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"content": {
						"korean": "거대한 그림자가 드리운 공간. 기억의 파편들이 떠다녔다.",
						"english": "A space cast in a giant shadow. Fragments of memory floated.",
						"japanese": "巨大な影が差す空間。記憶の破片が漂っていた。",
						"chinese": "巨大的阴影笼罩着空间。记忆的碎片漂浮着。",
						"french": "Un espace plongé dans une ombre gigantesque. Des fragments de mémoire flottaient.",
						"spanish": "Un espacio envuelto en una sombra gigante. Fragmentos de memoria flotaban.",
						"vietnamese": "Một không gian bị bao phủ bởi bóng tối khổng lồ. Những mảnh ký ức trôi nổi.",
						"thai": "พื้นที่ที่ถูกปกคลุมด้วยเงาขนาดใหญ่ เศษเสี้ยวความทรงจำล่องลอยอยู่",
						"hindi": "एक विशाल छाया से घिरा स्थान। स्मृति के टुकड़े तैर रहे थे।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…여기는.",
						"english": "...This place.",
						"japanese": "…ここは。",
						"chinese": "……这里是。",
						"french": "...Ici.",
						"spanish": "...Aquí.",
						"vietnamese": "...Đây là.",
						"thai": "...ที่นี่",
						"hindi": "...यह जगह।"
					}
				},
				{
					"action": "enter",
					"speaker": "lin",
					"spot": [
						4,
						3
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"emotion": "happy",
					"type": "speech",
					"content": {
						"korean": "돌아왔구나. 모두가 너를 기다렸어.",
						"english": "You're back. Everyone's been waiting for you.",
						"japanese": "お帰りなさい。みんなが待っていたよ。",
						"chinese": "你回来了。大家都在等你。",
						"french": "Tu es de retour. Tout le monde t'attendait.",
						"spanish": "Has vuelto. Todos te estaban esperando.",
						"vietnamese": "Bạn đã về rồi. Mọi người đều chờ bạn.",
						"thai": "เธอกลับมาแล้ว ทุกคนรอเธออยู่",
						"hindi": "तुम वापस आ गए हो। सब तुम्हारा इंतज़ार कर रहे थे।"
					},
					"speaker": "lin"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "모든 게 그대로야. 완벽하게.",
						"english": "Everything's just as it was. Perfectly.",
						"japanese": "何もかも元のままだ。完璧にね。",
						"chinese": "一切都和以前一样。完美无缺。",
						"french": "Tout est pareil. Parfaitement.",
						"spanish": "Todo sigue igual. Perfectamente.",
						"vietnamese": "Mọi thứ vẫn như cũ. Thật hoàn hảo.",
						"thai": "ทุกอย่างยังคงเหมือนเดิม สมบูรณ์แบบ",
						"hindi": "सब कुछ वैसा ही है। बिल्कुल सही।"
					},
					"speaker": "lin"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"speaker": "lin",
					"type": "direction",
					"spot": [
						2,
						3
					],
					"duration_ms": 400
				},
				{
					"content": {
						"korean": "이 평화, 영원히 이어질 수 있어.",
						"english": "This peace, it can last forever.",
						"japanese": "この平和は、永遠に続くことができる。",
						"chinese": "这份平静，可以永远持续下去。",
						"french": "Cette paix peut durer éternellement.",
						"spanish": "Esta paz puede durar para siempre.",
						"vietnamese": "Sự bình yên này, có thể kéo dài mãi mãi.",
						"thai": "ความสงบนี้ สามารถคงอยู่ตลอดไป",
						"hindi": "यह शांति, हमेशा के लिए रह सकती है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "lin"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "하지만… 모든 게 반복되고 있잖아.",
						"english": "But... everything's just repeating.",
						"japanese": "だけど…何もかもが繰り返されているじゃないか。",
						"chinese": "但是…一切都在重复着。",
						"french": "Mais… tout se répète.",
						"spanish": "Pero… todo se está repitiendo.",
						"vietnamese": "Nhưng… mọi thứ cứ lặp đi lặp lại.",
						"thai": "แต่... ทุกอย่างกำลังซ้ำรอยเดิม",
						"hindi": "लेकिन… सब कुछ दोहराया जा रहा है।"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "lin",
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "그건 중요하지 않아. 행복하다면 그걸로 충분해.",
						"english": "That doesn't matter. If you're happy, that's enough.",
						"japanese": "そんなことは重要じゃない。幸せならそれで十分だ。",
						"chinese": "那不重要。如果你幸福，那就足够了。",
						"french": "Ça n'a pas d'importance. Si tu es heureux, c'est suffisant.",
						"spanish": "Eso no importa. Si eres feliz, con eso basta.",
						"vietnamese": "Điều đó không quan trọng. Nếu bạn hạnh phúc, vậy là đủ rồi.",
						"thai": "นั่นไม่สำคัญ ถ้ามีความสุขก็พอแล้ว",
						"hindi": "यह मायने नहीं रखता। अगर तुम खुश हो, तो वही काफी है।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "바닥에 낡은 손수건이 뒹굴었다. 어딘가 익숙한 모습이었다.",
						"english": "An old handkerchief lay on the floor. It looked somewhat familiar.",
						"japanese": "床に古いハンカチが転がっていた。どこか見覚えのあるものだった。",
						"chinese": "一块旧手帕掉在地板上。看起来有些眼熟。",
						"french": "Un vieux mouchoir traînait sur le sol. Il semblait étrangement familier.",
						"spanish": "Un pañuelo viejo yacía en el suelo. Parecía algo familiar.",
						"vietnamese": "Một chiếc khăn tay cũ nằm trên sàn. Trông có vẻ quen thuộc.",
						"thai": "ผ้าเช็ดหน้าเก่าๆ ตกอยู่บนพื้น ดูคุ้นตาอย่างประหลาด",
						"hindi": "एक पुराना रुमाल फर्श पर पड़ा था। वह कहीं देखा-देखा सा लग रहा था।"
					},
					"speaker": "narrator"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "lin"
				},
				{
					"speaker": "lin",
					"content": {
						"korean": "현재는 고통일 뿐이야. 왜 잊으려 하지 않아?",
						"english": "The present is just pain. Why won't you forget it?",
						"japanese": "今はただの苦痛だ。なぜ忘れようとしない？",
						"chinese": "现在只是痛苦。你为什么不试着忘记？",
						"french": "Le présent n'est que douleur. Pourquoi ne pas essayer d'oublier ?",
						"spanish": "El presente es solo dolor. ¿Por qué no intentas olvidarlo?",
						"vietnamese": "Hiện tại chỉ toàn là đau khổ. Tại sao bạn không quên đi?",
						"thai": "ปัจจุบันมีแต่ความเจ็บปวด ทำไมเธอไม่ลืมมันไป?",
						"hindi": "वर्तमान केवल दर्द है। तुम इसे भूलने की कोशिश क्यों नहीं करते?"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "…진실을 외면할 순 없어.",
						"english": "...I can't turn away from the truth.",
						"japanese": "…真実から目を背けることはできない。",
						"chinese": "…我无法逃避真相。",
						"french": "...Je ne peux pas ignorer la vérité.",
						"spanish": "...No puedo ignorar la verdad.",
						"vietnamese": "…Không thể chối bỏ sự thật.",
						"thai": "...ฉันไม่สามารถหันหลังให้ความจริงได้",
						"hindi": "…मैं सच्चाई से मुंह नहीं मोड़ सकता।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "진실? 진실은 늘 너를 아프게 할 뿐이야.",
						"english": "Truth? The truth only ever hurts you.",
						"japanese": "真実？真実はいつも君を傷つけるだけだ。",
						"chinese": "真相？真相只会让你痛苦。",
						"french": "La vérité ? La vérité ne fait que te blesser.",
						"spanish": "¿La verdad? La verdad solo te hará daño.",
						"vietnamese": "Sự thật? Sự thật sẽ luôn làm bạn đau khổ thôi.",
						"thai": "ความจริง? ความจริงมีแต่จะทำร้ายเธอเท่านั้น",
						"hindi": "सच? सच हमेशा तुम्हें केवल चोट पहुंचाएगा।"
					},
					"speaker": "lin"
				},
				{
					"content": {
						"korean": "어디선가 들리던 멜로디가 갑자기 불협화음으로 끊겼다.",
						"english": "A melody from somewhere suddenly broke into dissonance.",
						"japanese": "どこからか聞こえていたメロディが、突然不協和音で途切れた。",
						"chinese": "不知从何处传来的旋律，突然中断，变成了不和谐音。",
						"french": "Une mélodie venue de nulle part fut soudainement interrompue par une dissonance.",
						"spanish": "Una melodía que se escuchaba de algún lugar se interrumpió abruptamente con una disonancia.",
						"vietnamese": "Một giai điệu từ đâu đó đột nhiên bị cắt ngang bởi một sự bất hòa.",
						"thai": "ท่วงทำนองที่ดังมาจากที่ไหนสักแห่งพลันขาดหายไปเป็นเสียงที่ไม่กลมกลืน",
						"hindi": "कहीं से आ रही धुन अचानक बेसुरी होकर रुक गई।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						2,
						2
					],
					"type": "direction",
					"duration_ms": 400,
					"action": "enter",
					"speaker": "lin"
				},
				{
					"speaker": "lin",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "돌아갈 곳은 없어. 여기 머무르는 게 가장 나아.",
						"english": "There's no turning back. Staying here is for the best.",
						"japanese": "戻る場所はない。ここにいるのが一番だ。",
						"chinese": "无路可退。留在这里是最好的选择。",
						"french": "Plus de retour possible. Le mieux est de rester ici.",
						"spanish": "No hay vuelta atrás. Quedarse aquí es lo mejor.",
						"vietnamese": "Không còn nơi nào để về. Ở lại đây là tốt nhất.",
						"thai": "ไม่มีที่ให้กลับไป การอยู่ที่นี่คือสิ่งที่ดีที่สุด",
						"hindi": "लौटने की जगह नहीं है। यहीं रहना सबसे अच्छा है।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "나는… 나 자신을 잃지 않아.",
						"english": "I... I won't lose myself.",
						"japanese": "私は…自分を見失わない。",
						"chinese": "我…不会迷失自我。",
						"french": "Je… je ne me perdrai pas.",
						"spanish": "Yo… no me perderé a mí mismo.",
						"vietnamese": "Tôi… tôi sẽ không đánh mất chính mình.",
						"thai": "ฉัน… จะไม่สูญเสียตัวเอง",
						"hindi": "मैं... मैं खुद को नहीं खोऊंगा।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "거울에 비친 자신의 모습이 순간, 다른 이의 공허한 눈빛으로 일그러졌다.",
						"english": "For a moment, their reflection in the mirror warped into another's empty gaze.",
						"japanese": "鏡に映る自分の姿が、一瞬にして他者の虚ろな瞳に歪んだ。",
						"chinese": "镜中自己的身影，瞬间扭曲成了他人空洞的眼神。",
						"french": "Un instant, son reflet dans le miroir se tordit en le regard vide d'un autre.",
						"spanish": "Por un instante, su reflejo en el espejo se distorsionó en la mirada vacía de otro.",
						"vietnamese": "Thoáng chốc, hình ảnh của mình trong gương biến dạng thành ánh mắt trống rỗng của người khác.",
						"thai": "ชั่วขณะหนึ่ง เงาสะท้อนในกระจกบิดเบี้ยวกลายเป็นดวงตาที่ว่างเปล่าของผู้อื่น",
						"hindi": "पल भर में, दर्पण में उनका प्रतिबिंब किसी और की खाली नज़र में विकृत हो गया।"
					}
				},
				{
					"speaker": "lin",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "착각하지 마. 넌 이미 우리와 같아.",
						"english": "Don't be mistaken. You're already one of us.",
						"japanese": "勘違いするな。お前は既に我らと同じだ。",
						"chinese": "别搞错了。你已经和我们一样了。",
						"french": "Ne te méprends pas. Tu es déjà des nôtres.",
						"spanish": "No te equivoques. Ya eres como nosotros.",
						"vietnamese": "Đừng nhầm lẫn. Ngươi đã giống chúng ta rồi.",
						"thai": "อย่าเข้าใจผิด เจ้าเป็นพวกเดียวกับเราแล้ว",
						"hindi": "गलतफहमी में मत रहो। तुम पहले ही हमारे जैसे हो।"
					}
				}
			]
		},
		{
			"win_dialogue": [
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "결국… 진실은 너를 외롭게 할 뿐이다.",
						"english": "In the end... the truth will only leave you lonely.",
						"japanese": "結局…真実は君を孤独にするだけだ。",
						"chinese": "最终…真相只会让你感到孤独。",
						"french": "Au final… la vérité ne fera que te laisser seul.",
						"spanish": "Al final... la verdad solo te dejará solo.",
						"vietnamese": "Cuối cùng... sự thật chỉ khiến ngươi cô độc mà thôi.",
						"thai": "สุดท้ายแล้ว... ความจริงก็แค่ทิ้งให้เจ้าเดียวดาย",
						"hindi": "अंततः... सत्य तुम्हें केवल अकेला ही छोड़ जाएगा।"
					},
					"speaker": "boss"
				},
				{
					"content": {
						"korean": "나는… 이 고통을 택하겠어.",
						"english": "I... will choose this pain.",
						"japanese": "私は…この苦痛を選ぶ。",
						"chinese": "我…会选择这份痛苦。",
						"french": "Je… choisirai cette douleur.",
						"spanish": "Yo... elegiré este dolor.",
						"vietnamese": "Ta… sẽ chọn nỗi đau này.",
						"thai": "ข้า... จะเลือกความเจ็บปวดนี้",
						"hindi": "मैं... इस पीड़ा को चुनूँगा।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "공간을 채웠던 기억의 파편들이 산산조각 났다. 모든 것이 멈췄다.",
						"english": "The fragments of memory that filled the space shattered. Everything stopped.",
						"japanese": "空間を満たしていた記憶の破片が粉々になった。全てが止まった。",
						"chinese": "充满空间的记忆碎片支离破碎。一切都停止了。",
						"french": "Les fragments de souvenirs qui emplissaient l'espace se brisèrent. Tout s'arrêta.",
						"spanish": "Los fragmentos de memoria que llenaban el espacio se hicieron pedazos. Todo se detuvo.",
						"vietnamese": "Những mảnh ký ức lấp đầy không gian vỡ tan. Mọi thứ dừng lại.",
						"thai": "เศษเสี้ยวความทรงจำที่เติมเต็มพื้นที่แตกสลาย ทุกสิ่งหยุดนิ่ง",
						"hindi": "स्थान को भर देने वाले स्मृति के टुकड़े बिखर गए। सब कुछ थम गया।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "환영은 너를 놓지 않아. 언제든 다시 찾아오리라.",
						"english": "The illusion won't let you go. It will come back for you anytime.",
						"japanese": "幻影は君を離さない。いつでもまた訪れるだろう。",
						"chinese": "幻象不会放过你。它随时会再次找上你。",
						"french": "L'illusion ne te lâchera pas. Elle reviendra te hanter à tout moment.",
						"spanish": "La ilusión no te soltará. Volverá a buscarte en cualquier momento.",
						"vietnamese": "Ảo ảnh sẽ không buông tha ngươi. Nó sẽ trở lại bất cứ lúc nào.",
						"thai": "ภาพลวงตาจะไม่ปล่อยเจ้าไป มันจะกลับมาหาเจ้าได้ทุกเมื่อ",
						"hindi": "भ्रम तुम्हें नहीं छोड़ेगा। यह कभी भी तुम्हारे पास फिर आएगा।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "…아직 끝나지 않았어.",
						"english": "...It's not over yet.",
						"japanese": "…まだ終わっていない。",
						"chinese": "…还没结束。",
						"french": "…Ce n'est pas encore fini.",
						"spanish": "…Aún no ha terminado.",
						"vietnamese": "…Chưa kết thúc đâu.",
						"thai": "...ยังไม่จบ",
						"hindi": "…अभी खत्म नहीं हुआ है।"
					}
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "모든 기억의 잔해가 모인 곳. 거대한 존재가 눈을 떴다.",
						"english": "Where the remnants of all memories gather, a colossal entity awoke.",
						"japanese": "全ての記憶の残骸が集う場所。巨大な存在が目を覚ました。",
						"chinese": "所有记忆残骸汇聚之地。一个庞大的存在睁开了眼睛。",
						"french": "Là où se rassemblent les vestiges de toutes les mémoires, une entité colossale s'éveilla.",
						"spanish": "Donde se reúnen los restos de todas las memorias, una entidad colosal despertó.",
						"vietnamese": "Nơi các mảnh vụn ký ức hội tụ. Một thực thể khổng lồ đã thức tỉnh.",
						"thai": "ที่ซึ่งเศษซากของความทรงจำทั้งหมดรวมตัวกัน สิ่งมีชีวิตขนาดยักษ์ได้ตื่นขึ้น",
						"hindi": "जहाँ सभी यादों के अवशेष एकत्रित होते हैं, एक विशाल सत्ता जाग उठी।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "boss",
					"content": {
						"korean": "오래 기다렸다. 나의 일부가 될 존재여.",
						"english": "I've waited long. You, who shall become part of me.",
						"japanese": "長く待った。我が一部となる者よ。",
						"chinese": "久候多时。你，将成为我的一部分。",
						"french": "J'ai longtemps attendu. Toi, qui feras partie de moi.",
						"spanish": "He esperado mucho. Tú, que serás parte de mí.",
						"vietnamese": "Ta đã chờ đợi rất lâu. Ngươi, kẻ sẽ trở thành một phần của ta.",
						"thai": "รอคอยมานานแล้ว เจ้าผู้ที่จะเป็นส่วนหนึ่งของข้า",
						"hindi": "मैंने बहुत इंतज़ार किया। तुम, जो मेरा हिस्सा बनोगे।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"action": "enter",
					"speaker": "lin",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						3
					]
				},
				{
					"speaker": "lin",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "여기서 영원히… 그때로 돌아가면 괜찮을 거야!",
						"english": "Here forever… If we just go back to that time, everything will be fine!",
						"japanese": "ここで永遠に… あの時に戻れば、きっと大丈夫！",
						"chinese": "永远留在这里… 如果能回到那时候，一切都会好起来的！",
						"french": "Ici pour toujours… Si seulement on pouvait retourner à cette époque, tout irait bien !",
						"spanish": "Aquí para siempre… ¡Si volvemos a ese momento, todo estará bien!",
						"vietnamese": "Ở đây mãi mãi… Nếu quay về lúc đó, mọi chuyện sẽ ổn thôi!",
						"thai": "อยู่ที่นี่ตลอดไป… ถ้ากลับไปเวลานั้นได้ มันจะโอเค!",
						"hindi": "यहाँ हमेशा के लिए… अगर हम उस समय में वापस चले जाएँ, तो सब ठीक हो जाएगा!"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "헛된 반복을 끝내러 왔다.",
						"english": "I've come to end this futile repetition.",
						"japanese": "無意味な繰り返しを終わらせに来た。",
						"chinese": "我来是为了结束这徒劳的循环。",
						"french": "Je suis venu mettre fin à cette vaine répétition.",
						"spanish": "He venido a poner fin a esta repetición inútil.",
						"vietnamese": "Ta đến để chấm dứt sự lặp lại vô nghĩa này.",
						"thai": "ข้ามาเพื่อยุติการวนซ้ำที่ไร้ประโยชน์นี้",
						"hindi": "मैं इस व्यर्थ दोहराव को खत्म करने आया हूँ।"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "boss",
					"content": {
						"korean": "너는… 과거를 부정하는가?",
						"english": "Do you… deny the past?",
						"japanese": "お前は…過去を否定するのか？",
						"chinese": "你…是否否定过去？",
						"french": "Toi… nies-tu le passé ?",
						"spanish": "¿Tú… niegas el pasado?",
						"vietnamese": "Ngươi… phủ nhận quá khứ sao?",
						"thai": "เจ้า… ปฏิเสธอดีตหรือ?",
						"hindi": "क्या तुम… अतीत को नकारते हो?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "바닥에 닳아 해진 손수건 한 장이 부서지듯 사라졌다.",
						"english": "A worn-out handkerchief on the floor vanished as if shattering.",
						"japanese": "床に擦り切れたハンカチが、砕けるように消え去った。",
						"chinese": "地板上破旧的手帕，如同破碎般消失了。",
						"french": "Un mouchoir usé au sol disparut comme s'il se brisait.",
						"spanish": "Un pañuelo desgastado en el suelo desapareció como si se hiciera añicos.",
						"vietnamese": "Một chiếc khăn tay cũ nát trên sàn biến mất như thể vỡ vụn.",
						"thai": "ผ้าเช็ดหน้าเก่าขาดผืนหนึ่งบนพื้นหายไปราวกับแตกสลาย",
						"hindi": "ज़मीन पर पड़ा एक घिसा-पिटा रुमाल टूटकर जैसे गायब हो गया।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"id": 15
		}
	],
	"epilogue": {
		"korean": [
			"격렬했던 싸움의 흔적만이 남았다.",
			"허무하게 흩어지는 기억의 조각들.",
			"숲은 침묵했다. 그 침묵은 해방인가, 공허인가.",
			"진실은 너무나 잔혹하게, 홀로 남겨졌다."
		],
		"english": [
			"Only the traces of a fierce battle remained.",
			"Fragments of memory scattering emptily.",
			"The forest fell silent. Was that silence liberation, or emptiness?",
			"The truth, too cruel, was left alone."
		],
		"japanese": [
			"激しい戦いの痕跡だけが残った。",
			"虚しく散らばる記憶の破片。",
			"森は沈黙した。その沈黙は解放か、それとも虚無か。",
			"真実はあまりにも残酷に、一人残された。"
		],
		"chinese": [
			"只剩下激烈战斗的痕迹。",
			"虚无地散落的记忆碎片。",
			"森林沉默了。那沉默是解放，还是空虚？",
			"真相如此残酷，独自被留下。"
		],
		"french": [
			"Seules les traces d'un combat acharné subsistaient.",
			"Des fragments de mémoire se dispersant vainement.",
			"La forêt se tut. Ce silence était-il une libération, ou un vide ?",
			"La vérité, trop cruelle, fut laissée seule."
		],
		"spanish": [
			"Solo quedaron las huellas de una feroz batalla.",
			"Fragmentos de memoria dispersándose en vano.",
			"El bosque enmudeció. ¿Fue ese silencio liberación, o vacío?",
			"La verdad, demasiado cruel, fue dejada sola."
		],
		"vietnamese": [
			"Chỉ còn lại dấu vết của một trận chiến khốc liệt.",
			"Những mảnh ký ức tan biến một cách vô vọng.",
			"Rừng im lặng. Sự im lặng đó là giải thoát, hay trống rỗng?",
			"Sự thật quá tàn khốc, bị bỏ lại một mình."
		],
		"thai": [
			"เหลือเพียงร่องรอยของการต่อสู้อันดุเดือด",
			"เศษเสี้ยวความทรงจำที่แตกสลายไปอย่างไร้ค่า",
			"ป่าเงียบงัน ความเงียบนั้นคือการปลดปล่อย หรือความว่างเปล่า?",
			"ความจริงที่โหดร้ายเกินไป ถูกทิ้งไว้เพียงลำพัง"
		],
		"hindi": [
			"केवल भीषण युद्ध के निशान ही बचे थे।",
			"स्मृति के टुकड़े व्यर्थ ही बिखर रहे हैं।",
			"जंगल शांत हो गया। क्या वह शांति मुक्ति थी, या शून्यता?",
			"सत्य, बहुत क्रूरता से, अकेला छोड़ दिया गया था।"
		]
	}
} as const;
