export const scenario_forest_silvanus_46_02 = {
	"scenario_id": "forest_silvanus_46_02",
	"order": 2,
	"act": "rising",
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
	"prologue": {
		"korean": [
			"숲 속으로 이끄는 신비로운 빛.",
			"그것은 희망일까, 아니면 파멸의 시작일까.",
			"점점 더 깊숙이, 발걸음은 멈출 수 없었다.",
			"환영 속에서, 어두운 그림자가 춤춘다."
		],
		"english": [
			"A mysterious light draws you into the forest.",
			"Is it hope, or the dawn of destruction?",
			"Deeper and deeper, your steps were relentless.",
			"In the illusion, dark shadows dance."
		],
		"japanese": [
			"森へと誘う神秘的な光。",
			"それは希望か、それとも破滅の始まりか。",
			"さらに奥深くへ、足取りは止まらなかった。",
			"幻影の中で、暗い影が舞い踊る。"
		],
		"chinese": [
			"一道神秘的光引你进入森林。",
			"是希望，还是毁灭的开始？",
			"越陷越深，脚步无法停止。",
			"幻象中，黑暗的影子在舞动。"
		],
		"french": [
			"Une lumière mystérieuse vous attire dans la forêt.",
			"Est-ce l'espoir, ou l'aube de la destruction ?",
			"Toujours plus profond, vos pas étaient inarrêtables.",
			"Dans l'illusion, des ombres sombres dansent."
		],
		"spanish": [
			"Una luz misteriosa te atrae al bosque.",
			"¿Es esperanza, o el amanecer de la destrucción?",
			"Cada vez más profundo, tus pasos eran imparables.",
			"En la ilusión, sombras oscuras danzan."
		],
		"vietnamese": [
			"Một ánh sáng bí ẩn dẫn lối vào rừng sâu.",
			"Liệu đó là hy vọng, hay khởi đầu của sự hủy diệt?",
			"Càng lúc càng sâu, bước chân không thể dừng lại.",
			"Trong ảo ảnh, những bóng tối đang nhảy múa."
		],
		"thai": [
			"แสงลึกลับนำพาเจ้าเข้าสู่ป่า",
			"นี่คือความหวัง หรือรุ่งอรุณแห่งหายนะกันแน่",
			"ลึกลงไปเรื่อย ๆ เจ้าหยุดก้าวไม่ได้",
			"ในภาพลวงตา เงาดำทะมึนกำลังร่ายรำ"
		],
		"hindi": [
			"एक रहस्यमय प्रकाश तुम्हें जंगल में खींचता है।",
			"क्या यह आशा है, या विनाश की शुरुआत?",
			"और गहरे, तुम्हारे कदम रुक नहीं रहे थे।",
			"भ्रम में, अँधेरी परछाइयाँ नाचती हैं।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "빛은 숲 속 깊은 곳으로 유혹하듯 깜빡였다.",
						"english": "The light flickered, beckoning deeper into the forest.",
						"japanese": "光は森の奥深くへと誘うように瞬いた。",
						"chinese": "光芒闪烁，诱惑着你深入森林。",
						"french": "La lumière scintillait, vous attirant plus profondément dans la forêt.",
						"spanish": "La luz parpadeaba, atrayéndote más adentro del bosque.",
						"vietnamese": "Ánh sáng nhấp nháy, như mời gọi sâu hơn vào rừng.",
						"thai": "แสงสว่างกะพริบไหว ดึงดูดให้ลึกเข้าไปในป่า",
						"hindi": "प्रकाश झिलमिला रहा था, तुम्हें जंगल में और अंदर खींच रहा था।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "저 빛… 설마.",
						"english": "That light... surely not.",
						"japanese": "あの光… まさか。",
						"chinese": "那束光……不会吧。",
						"french": "Cette lumière... non, ce n'est pas possible.",
						"spanish": "Esa luz... no puede ser.",
						"vietnamese": "Ánh sáng đó... không lẽ nào.",
						"thai": "แสงนั่น... ไม่จริงน่า",
						"hindi": "वह प्रकाश... कहीं ऐसा न हो।"
					},
					"type": "speech"
				},
				{
					"spot": [
						4,
						3
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "bracken"
				},
				{
					"content": {
						"korean": "가지 마! 저 빛은… 널 잡아먹을 거야.",
						"english": "Don't go! That light... it will devour you.",
						"japanese": "行くな！あの光は…お前を食い尽くすぞ。",
						"chinese": "别去！那束光……会吞噬你。",
						"french": "N'y va pas ! Cette lumière... elle te dévorera.",
						"spanish": "¡No vayas! Esa luz... te devorará.",
						"vietnamese": "Đừng đi! Ánh sáng đó... sẽ nuốt chửng ngươi.",
						"thai": "อย่าไป! แสงนั่น... มันจะกลืนกินเจ้า",
						"hindi": "मत जाओ! वह प्रकाश... तुम्हें निगल जाएगा।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "bracken"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "당신은 누구죠?",
						"english": "Who are you?",
						"japanese": "あなたは誰だ？",
						"chinese": "你是谁？",
						"french": "Qui êtes-vous ?",
						"spanish": "¿Quién eres?",
						"vietnamese": "Ngươi là ai?",
						"thai": "ท่านเป็นใคร?",
						"hindi": "तुम कौन हो?"
					}
				},
				{
					"speaker": "bracken",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "난… 그냥 목격자. 수많은 사람들이 저 빛을 쫓아갔어.",
						"english": "I'm... just a witness. Countless people chased that light.",
						"japanese": "私は…ただの目撃者だ。数えきれない人々があの光を追いかけた。",
						"chinese": "我……只是个目击者。无数人追逐着那束光。",
						"french": "Je ne suis... qu'un témoin. D'innombrables personnes ont poursuivi cette lumière.",
						"spanish": "Soy... solo un testigo. Innumerables personas persiguieron esa luz.",
						"vietnamese": "Ta... chỉ là một nhân chứng. Vô số người đã đuổi theo ánh sáng đó.",
						"thai": "ข้า... เป็นแค่พยาน ผู้คนมากมายไล่ตามแสงนั่นไป",
						"hindi": "मैं... बस एक गवाह हूँ। अनगिनत लोग उस प्रकाश के पीछे भागे।"
					}
				},
				{
					"emotion": "angry",
					"speaker": "bracken",
					"type": "speech",
					"content": {
						"korean": "돌아온 사람은… 아무도 없었지.",
						"english": "No one... ever returned.",
						"japanese": "戻ってきた者は…誰もいなかった。",
						"chinese": "回来的……一个也没有。",
						"french": "Personne... n'est jamais revenu.",
						"spanish": "Nadie... regresó jamás.",
						"vietnamese": "Không một ai... quay trở lại.",
						"thai": "ไม่มีใคร... กลับมาเลย",
						"hindi": "कोई भी... कभी वापस नहीं आया।"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"speaker": "bracken"
				},
				{
					"emotion": "sad",
					"speaker": "bracken",
					"content": {
						"korean": "숲의 옛 전설은 말했지. 길 잃은 자를 인도하는 등불이라고.",
						"english": "Ancient forest legends tell of a guiding light for the lost.",
						"japanese": "森の古い伝説は語る。道に迷いし者を導く灯火だと。",
						"chinese": "古老的森林传说称，那是指引迷失者的灯火。",
						"french": "L'ancienne légende de la forêt disait que c'était une lumière guidant les égarés.",
						"spanish": "La antigua leyenda del bosque decía que era una luz que guiaba a los perdidos.",
						"vietnamese": "Truyền thuyết xưa của rừng kể rằng, đó là ngọn đèn dẫn lối cho kẻ lạc.",
						"thai": "ตำนานป่าโบราณกล่าวไว้ว่า มันคือแสงนำทางผู้หลงทาง",
						"hindi": "जंगल की पुरानी किंवदंती कहती थी। यह भटके हुए लोगों को राह दिखाने वाली रोशनी है。"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그럼 그게 저 빛인가요?",
						"english": "Is that light it, then?",
						"japanese": "では、あれがその光ですか？",
						"chinese": "那，就是那道光吗？",
						"french": "Alors, c'est cette lumière ?",
						"spanish": "¿Entonces es esa luz?",
						"vietnamese": "Vậy đó có phải là ánh sáng đó không?",
						"thai": "นั่นคือแสงนั้นหรือเปล่า?",
						"hindi": "तो, क्या वह रोशनी वही है?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"speaker": "bracken",
					"emotion": "angry",
					"content": {
						"korean": "아니. 지금은… 아니야.",
						"english": "No. Not… now.",
						"japanese": "いや。今は…違う。",
						"chinese": "不。现在…不是。",
						"french": "Non. Maintenant… non.",
						"spanish": "No. Ahora… no.",
						"vietnamese": "Không. Bây giờ thì… không.",
						"thai": "ไม่. ตอนนี้… ไม่ใช่แล้ว.",
						"hindi": "नहीं। अब… नहीं।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "빛에 홀린 사람들은 눈이 풀려 있었어. 제정신이 아니었지.",
						"english": "Those entranced by the light had vacant eyes. They weren't themselves.",
						"japanese": "光に魅入られた者たちの目は虚ろだった。正気ではなかったんだ。",
						"chinese": "被光迷惑的人们目光呆滞。他们已失去理智。",
						"french": "Ceux qui étaient ensorcelés par la lumière avaient les yeux vides. Ils n'étaient pas dans leur état normal.",
						"spanish": "Los que estaban hechizados por la luz tenían los ojos perdidos. No estaban en su sano juicio.",
						"vietnamese": "Những kẻ bị ánh sáng mê hoặc có đôi mắt vô hồn. Họ đã mất trí rồi.",
						"thai": "คนที่หลงใหลในแสงนั้นมีดวงตาว่างเปล่า พวกเขาไม่ปกติ",
						"hindi": "रोशनी से मोहित लोगों की आँखें सूनी थीं। वे होश में नहीं थे।"
					},
					"type": "speech",
					"speaker": "bracken",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…믿기 어려워요.",
						"english": "…It's hard to believe.",
						"japanese": "…信じられない。",
						"chinese": "…难以置信。",
						"french": "…C'est difficile à croire.",
						"spanish": "…Es difícil de creer.",
						"vietnamese": "…Thật khó tin.",
						"thai": "…ยากที่จะเชื่อ.",
						"hindi": "…विश्वास करना कठिन है।"
					},
					"speaker": "character_any",
					"emotion": "base"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"content": {
						"korean": "오래된 나무뿌리들이 얽힌 틈새에서 부서진 석조물이 보였다.",
						"english": "A broken stone structure was visible in the tangled roots of ancient trees.",
						"japanese": "古木の根が絡み合う隙間から、壊れた石造物が見えた。",
						"chinese": "在古老树根缠绕的缝隙中，看到了一座破损的石质建筑。",
						"french": "Une structure en pierre brisée était visible dans les interstices des racines d'arbres anciens enchevêtrées.",
						"spanish": "Una estructura de piedra rota era visible entre las raíces entrelazadas de árboles antiguos.",
						"vietnamese": "Một công trình đá đổ nát hiện ra trong kẽ hở của những rễ cây cổ thụ chằng chịt.",
						"thai": "โครงสร้างหินที่แตกหักปรากฏให้เห็นในช่องว่างระหว่างรากไม้เก่าแก่ที่พันกัน",
						"hindi": "पुराने पेड़ों की उलझी हुई जड़ों के बीच एक टूटी हुई पत्थर की संरचना दिखाई दी।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "이건… 뭐지?",
						"english": "What… is this?",
						"japanese": "これは…何だ？",
						"chinese": "这…是什么？",
						"french": "Qu'est-ce que… c'est ?",
						"spanish": "¿Qué… es esto?",
						"vietnamese": "Đây… là gì vậy?",
						"thai": "นี่มัน… อะไรกัน?",
						"hindi": "यह… क्या है?"
					},
					"type": "speech"
				},
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"speaker": "bracken"
				},
				{
					"emotion": "sad",
					"speaker": "bracken",
					"type": "speech",
					"content": {
						"korean": "점점 더 위험해지는 거야. 저 석조물… 옛날엔 신성한 곳이었다는데.",
						"english": "It's getting more dangerous. That stone structure… they say it was a sacred place long ago.",
						"japanese": "どんどん危険になっているんだ。あの石造物…昔は神聖な場所だったらしいが。",
						"chinese": "变得越来越危险了。那座石质建筑…据说以前是神圣之地。",
						"french": "Ça devient de plus en plus dangereux. Cette structure en pierre… on dit que c'était un lieu sacré autrefois.",
						"spanish": "Se está volviendo cada vez más peligroso. Esa estructura de piedra… dicen que era un lugar sagrado hace mucho tiempo.",
						"vietnamese": "Càng ngày càng nguy hiểm hơn. Công trình đá đó… người ta nói ngày xưa đó là nơi linh thiêng.",
						"thai": "มันอันตรายขึ้นเรื่อยๆ โครงสร้างหินนั่น… ว่ากันว่าเมื่อก่อนเป็นสถานที่ศักดิ์สิทธิ์",
						"hindi": "यह और भी खतरनाक होता जा रहा है। वह पत्थर की संरचना… कहते हैं कि यह पहले एक पवित्र स्थान था।"
					}
				},
				{
					"emotion": "angry",
					"speaker": "bracken",
					"content": {
						"korean": "지금은… 다 망가졌어. 빛이 저길 거쳐 가면 더 강해진다고.",
						"english": "Now… it's all ruined. They say the light grows stronger when it passes through there.",
						"japanese": "今は…すっかり壊れてしまった。光があそこを通ると、もっと強くなるらしい。",
						"chinese": "现在…都毁了。据说光穿过那里会变得更强。",
						"french": "Maintenant… tout est détruit. La lumière, disent-ils, devient plus forte en passant par là.",
						"spanish": "Ahora… todo está destruido. Dicen que la luz se hace más fuerte si pasa por ahí.",
						"vietnamese": "Bây giờ thì… tất cả đã tan nát. Ánh sáng đi qua đó sẽ trở nên mạnh hơn.",
						"thai": "ตอนนี้… มันพังทลายหมดแล้ว แสงจะแข็งแกร่งขึ้นหากผ่านที่นั่น",
						"hindi": "अब… सब कुछ बर्बाद हो गया है। कहते हैं कि रोशनी वहां से गुजरने पर और मजबूत हो जाती है।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "…아마존 문양?",
						"english": "…An Amazonian pattern?",
						"japanese": "…アマゾンの模様？",
						"chinese": "…亚马逊图腾？",
						"french": "…Motif amazonien ?",
						"spanish": "…¿Un patrón amazónico?",
						"vietnamese": "…Hoa văn Amazon?",
						"thai": "…ลวดลายอเมซอน?",
						"hindi": "…अमेज़ॅन पैटर्न?"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"content": {
						"korean": "빛이 홀연히 사라졌다. 그리고 숲의 깊은 곳에서 섬뜩한 울음소리가 메아리쳤다.",
						"english": "The light vanished suddenly. A chilling cry echoed from deep within the forest.",
						"japanese": "光が突然消えた。そして森の奥深くから不気味な鳴き声がこだました。",
						"chinese": "光芒骤然消失。接着，森林深处回荡着令人毛骨悚然的嚎叫声。",
						"french": "La lumière a soudainement disparu. Et un cri terrifiant a résonné du plus profond de la forêt.",
						"spanish": "La luz se desvaneció de repente. Y un espeluznante aullido resonó desde lo más profundo del bosque.",
						"vietnamese": "Ánh sáng đột ngột biến mất. Và một tiếng kêu rùng rợn vang vọng từ sâu thẳm khu rừng.",
						"thai": "แสงสว่างหายไปในทันที และเสียงกรีดร้องน่าขนลุกก็ดังก้องมาจากส่วนลึกของป่า",
						"hindi": "प्रकाश अचानक गायब हो गया। और जंगल की गहराई से एक भयानक चीख गूँज उठी।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "이 소리는… 대체.",
						"english": "This sound... what on earth is it?",
						"japanese": "この音は…一体。",
						"chinese": "这声音…究竟是。",
						"french": "Ce son... qu'est-ce que c'est, au juste ?",
						"spanish": "Este sonido... ¿qué es?",
						"vietnamese": "Tiếng động này... là gì vậy?",
						"thai": "เสียงนี้... คืออะไรกันแน่",
						"hindi": "यह आवाज़... आखिर क्या है।"
					},
					"type": "speech"
				},
				{
					"speaker": "bracken",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						2,
						3
					]
				},
				{
					"content": {
						"korean": "밤마다 들려오는 소리야. 고대 주술을 읊조리는 듯한…",
						"english": "It's the sound heard every night. Like an ancient spell being chanted...",
						"japanese": "毎晩聞こえる音だ。古代の呪文を唱えているような…",
						"chinese": "这是每晚都能听到的声音。仿佛在吟诵古老的咒语…",
						"french": "C'est le son qu'on entend chaque nuit. Comme si un ancien sortilège était récité...",
						"spanish": "Es el sonido que se escucha cada noche. Como si recitaran un antiguo hechizo...",
						"vietnamese": "Đó là âm thanh nghe thấy mỗi đêm. Như thể đang tụng niệm một cổ chú...",
						"thai": "เป็นเสียงที่ได้ยินทุกคืน เหมือนกับการร่ายเวทมนตร์โบราณ...",
						"hindi": "यह हर रात सुनाई देने वाली आवाज़ है। जैसे कोई प्राचीन जादू का उच्चारण कर रहा हो..."
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "bracken"
				},
				{
					"content": {
						"korean": "내가 왜 여기 왔는지… 잊지 않아.",
						"english": "Why I came here... I won't forget.",
						"japanese": "なぜ私がここに来たのか…忘れない。",
						"chinese": "我为什么来这里…我不会忘记。",
						"french": "Pourquoi je suis venu ici... je n'oublierai pas.",
						"spanish": "Por qué vine aquí... no lo olvidaré.",
						"vietnamese": "Tại sao tôi đến đây... tôi sẽ không quên.",
						"thai": "เหตุผลที่ฉันมาที่นี่... ฉันจะไม่ลืม",
						"hindi": "मैं यहाँ क्यों आया... मैं नहीं भूलूँगा।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "후회할 거야… 분명 후회할 거야.",
						"english": "You'll regret it... You'll definitely regret it.",
						"japanese": "後悔するだろう…きっと後悔するだろう。",
						"chinese": "你会后悔的…你一定会后悔的。",
						"french": "Tu le regretteras... Tu le regretteras, c'est sûr.",
						"spanish": "Te arrepentirás... Definitivamente te arrepentirás.",
						"vietnamese": "Ngươi sẽ hối hận... Chắc chắn sẽ hối hận.",
						"thai": "แกจะต้องเสียใจ... แน่นอนว่าต้องเสียใจ",
						"hindi": "तुम्हें पछतावा होगा... निश्चित रूप से पछतावा होगा।"
					},
					"type": "speech",
					"speaker": "bracken",
					"emotion": "sad"
				},
				{
					"direction": "down",
					"speaker": "bracken",
					"duration_ms": 400,
					"action": "exit",
					"type": "direction"
				}
			]
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "빛이 사라진 자리에 거대한 그림자가 드리웠다.",
						"english": "A colossal shadow loomed where the light had vanished.",
						"japanese": "光が消えた場所に巨大な影が差した。",
						"chinese": "光芒消失的地方，一道巨大的阴影笼罩着。",
						"french": "Une ombre gigantesque planait là où la lumière avait disparu.",
						"spanish": "Una sombra gigantesca se cernió donde la luz había desaparecido.",
						"vietnamese": "Một bóng đen khổng lồ bao trùm nơi ánh sáng biến mất.",
						"thai": "เงาขนาดมหึมาทอดตัวลงในที่ที่แสงหายไป",
						"hindi": "प्रकाश के गायब होने की जगह पर एक विशाल छाया छा गई।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "감히… 나의 숲을 더럽히는가.",
						"english": "How dare you... defile my forest?",
						"japanese": "許さん…私の森を汚すか。",
						"chinese": "竟敢…玷污我的森林。",
						"french": "Comment oses-tu... souiller ma forêt ?",
						"spanish": "¿Cómo te atreves... a profanar mi bosque?",
						"vietnamese": "Ngươi dám... làm ô uế khu rừng của ta sao.",
						"thai": "แกกล้าดียังไง... มาแปดเปื้อนป่าของข้า",
						"hindi": "तुम्हारी हिम्मत कैसे हुई... मेरे जंगल को अपवित्र करने की।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "네가 이 소리의 근원인가!",
						"english": "You are the source of this sound!",
						"japanese": "お前がこの音の根源か！",
						"chinese": "你就是这声音的源头吗！",
						"french": "Tu es la source de ce son !",
						"spanish": "¡Tú eres el origen de este sonido!",
						"vietnamese": "Ngươi là nguồn gốc của âm thanh này sao!",
						"thai": "แกคือต้นกำเนิดของเสียงนี้!",
						"hindi": "तुम इस आवाज़ का स्रोत हो!"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "어리석은 인간… 진실은 아직 너에게 가혹하다.",
						"english": "Foolish human... The truth is still too harsh for you.",
						"japanese": "愚かな人間め…真実はまだお前には過酷だ。",
						"chinese": "愚蠢的人类…真相对你而言仍然过于残酷。",
						"french": "Humain stupide... La vérité est encore trop dure pour toi.",
						"spanish": "Humano insensato... La verdad es aún demasiado dura para ti.",
						"vietnamese": "Con người ngu xuẩn... Sự thật vẫn còn quá khắc nghiệt đối với ngươi.",
						"thai": "มนุษย์โง่เขลา... ความจริงยังโหดร้ายเกินไปสำหรับเจ้า",
						"hindi": "मूर्ख इंसान... सच्चाई अभी भी तुम्हारे लिए बहुत कठोर है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "네 어리석음이… 너를 잡아먹을 것이다.",
						"english": "Your foolishness... will consume you.",
						"japanese": "お前の愚かさが…お前を食い尽くすだろう。",
						"chinese": "你的愚蠢…将会吞噬你。",
						"french": "Ta folie... te dévorera.",
						"spanish": "Tu necedad... te consumirá.",
						"vietnamese": "Sự ngu ngốc của ngươi... sẽ nuốt chửng ngươi.",
						"thai": "ความโง่เขลาของเจ้า... จะกลืนกินเจ้าเอง",
						"hindi": "तुम्हारी मूर्खता... तुम्हें निगल जाएगी।"
					},
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…아직 포기할 수 없어.",
						"english": "...I can't give up yet.",
						"japanese": "…まだ諦められない。",
						"chinese": "…我不能就这么放弃。",
						"french": "...Je ne peux pas encore abandonner.",
						"spanish": "...Todavía no puedo rendirme.",
						"vietnamese": "...Vẫn chưa thể bỏ cuộc.",
						"thai": "...ยังยอมแพ้ไม่ได้",
						"hindi": "...अभी हार नहीं मान सकता।"
					}
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "크아아… 끝이… 아니다…",
						"english": "Graaah... This isn't... the end...",
						"japanese": "グアア…終わり…ではない…",
						"chinese": "嘶啊…这不是…结束…",
						"french": "Graaah... Ce n'est... pas la fin...",
						"spanish": "Graaah... Esto no es... el final...",
						"vietnamese": "Grừ... Đây không phải... kết thúc...",
						"thai": "กรร... นี่ไม่ใช่... จุดจบ...",
						"hindi": "ग्राआह... यह अंत... नहीं है..."
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "random_boss"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "하나를 처치했지만… 아직 끝이 아니야.",
						"english": "One down... but it's not over yet.",
						"japanese": "一人倒したが…まだ終わりじゃない。",
						"chinese": "击败了一个…但还没结束。",
						"french": "Un éliminé... mais ce n'est pas encore fini.",
						"spanish": "Uno ha caído... pero aún no ha terminado.",
						"vietnamese": "Hạ gục một kẻ... nhưng chưa kết thúc đâu.",
						"thai": "กำจัดไปหนึ่ง... แต่ยังไม่จบแค่นี้",
						"hindi": "एक को हरा दिया... पर अभी खत्म नहीं हुआ है।"
					}
				},
				{
					"content": {
						"korean": "어렴풋한 승리감 속, 숲은 더 깊은 죄책감과 비밀을 숨기고 있었다.",
						"english": "In the faint glow of victory, the forest concealed deeper guilt and secrets.",
						"japanese": "かすかな勝利感の中、森はより深い罪悪感と秘密を隠していた。",
						"chinese": "在模糊的胜利感中，森林隐藏着更深的罪恶感和秘密。",
						"french": "Dans l'éclat ténu de la victoire, la forêt cachait une culpabilité et des secrets plus profonds.",
						"spanish": "En la tenue sensación de victoria, el bosque ocultaba culpas y secretos más profundos.",
						"vietnamese": "Giữa cảm giác chiến thắng mơ hồ, khu rừng ẩn chứa những tội lỗi và bí mật sâu xa hơn.",
						"thai": "ท่ามกลางความรู้สึกแห่งชัยชนะอันเลือนราง ป่ากลับซ่อนเร้นความรู้สึกผิดและปริศนาที่ลึกซึ้งกว่าเดิม",
						"hindi": "जीत की हल्की सी भावना के बीच, जंगल गहरे अपराधबोध और रहस्यों को छुपा रहा था।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				}
			]
		}
	]
} as const;
