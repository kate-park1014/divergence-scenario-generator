export const scenario_snowy_chitinblight_8_01 = {
	"scenario_id": "snowy_chitinblight_8_01",
	"order": 1,
	"act": "intro",
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
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "끝없이 펼쳐진 설원 입구. 칼날 같은 바람이 탐험대를 맞았다.",
						"english": "Entrance to the endless snowfield. A biting wind greeted the expedition.",
						"japanese": "果てしなく広がる雪原の入口。刃のような風が探検隊を迎えた。",
						"chinese": "无尽雪原的入口。凛冽的寒风迎面吹向探险队。",
						"french": "Entrée de l'étendue infinie de la toundra. Un vent glacial accueillit l'expédition.",
						"spanish": "Entrada al campo nevado interminable. Un viento cortante recibió a la expedición.",
						"vietnamese": "Lối vào đồng tuyết vô tận. Làn gió sắc như dao chào đón đoàn thám hiểm.",
						"thai": "ทางเข้าทุ่งหิมะอันไร้ขอบเขต สายลมคมกริบปะทะคณะสำรวจ",
						"hindi": "अंतहीन हिमपात का प्रवेश द्वार। एक तेज़ हवा ने अभियान दल का स्वागत किया।"
					},
					"emotion": "base"
				},
				{
					"spot": [
						5,
						2
					],
					"type": "direction",
					"speaker": "eira",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"emotion": "base",
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "기다렸어요. 어서 오세요.",
						"english": "I've been waiting. Welcome.",
						"japanese": "お待ちしておりました。ようこそ。",
						"chinese": "我等候多时了。欢迎到来。",
						"french": "Je vous attendais. Bienvenue.",
						"spanish": "Los esperaba. Bienvenidos.",
						"vietnamese": "Tôi đã chờ. Mời vào.",
						"thai": "รออยู่ค่ะ ยินดีต้อนรับ",
						"hindi": "मैं इंतजार कर रहा था। स्वागत है।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "에이라? 마을은 괜찮아?",
						"english": "Ayra? Is the village alright?",
						"japanese": "アイラ？村は大丈夫か？",
						"chinese": "艾拉？村庄没事吧？",
						"french": "Ayra ? Le village va bien ?",
						"spanish": "¿Ayra? ¿El pueblo está bien?",
						"vietnamese": "Ayra? Làng có ổn không?",
						"thai": "ไอรา? หมู่บ้านสบายดีไหม?",
						"hindi": "आयरा? गाँव ठीक है?"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "네… 그런데요, 저… 설원 깊은 곳에서 이상한 노래가 들려요.",
						"english": "Yes... But, I... I hear a strange song from deep within the snowfield.",
						"japanese": "はい…でも、あの…雪原の奥深くから、奇妙な歌が聞こえるんです。",
						"chinese": "嗯……可是，我……我听到雪原深处传来奇怪的歌声。",
						"french": "Oui… Mais, je… j'entends une étrange mélodie venant du fond de la toundra.",
						"spanish": "Sí… Pero, yo… oigo una canción extraña desde lo profundo del campo nevado.",
						"vietnamese": "Vâng… Nhưng, tôi… tôi nghe thấy một bài hát lạ từ sâu trong đồng tuyết.",
						"thai": "ค่ะ... แต่ว่า... ฉันได้ยินเพลงแปลกๆ จากส่วนลึกของทุ่งหิมะ",
						"hindi": "हाँ... लेकिन, मैं... मुझे हिमपात के भीतर से एक अजीब गाना सुनाई देता है।"
					},
					"speaker": "eira",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "길 잃은 영혼의 노래 같아요. 밤마다 빛도 보여요.",
						"english": "It sounds like the song of a lost soul. I also see a light every night.",
						"japanese": "迷える魂の歌のようです。夜ごとに光も見えるんです。",
						"chinese": "那似乎是迷失灵魂的歌声。每晚还能看到光芒。",
						"french": "On dirait le chant d'une âme perdue. Je vois aussi une lumière chaque nuit.",
						"spanish": "Parece la canción de un alma perdida. También veo una luz cada noche.",
						"vietnamese": "Giống như khúc ca của linh hồn lạc lối. Tôi còn thấy ánh sáng mỗi đêm.",
						"thai": "เหมือนเพลงของวิญญาณที่หลงทางเลยค่ะ กลางคืนก็เห็นแสงด้วย",
						"hindi": "यह एक भटकी हुई आत्मा के गीत जैसा लगता है। मुझे हर रात एक रोशनी भी दिखती है।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "길 잃은 영혼이라니… 그냥 소문 아냐?",
						"english": "Lost souls...? Isn't that just a rumor?",
						"japanese": "迷える魂だと…？ただの噂じゃないのか？",
						"chinese": "迷失灵魂……？那不只是个谣言吗？",
						"french": "Des âmes perdues… ? N'est-ce pas qu'une rumeur ?",
						"spanish": "¿Almas perdidas…? ¿No es solo un rumor?",
						"vietnamese": "Linh hồn lạc lối à…? Không phải chỉ là tin đồn sao?",
						"thai": "วิญญาณที่หลงทางงั้นเหรอ... ไม่ใช่แค่ข่าวลือเหรอ?",
						"hindi": "भटकी हुई आत्माएँ...? क्या यह सिर्फ एक अफवाह नहीं है?"
					},
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "아니요. 벌써 몇 명이나 사라졌어요. 그 빛을 따라갔다가.",
						"english": "No. Several people have already disappeared after following that light.",
						"japanese": "いいえ。もう何人もの人がその光を追って消えました。",
						"chinese": "不。已经有好几个人跟着那道光消失了。",
						"french": "Non. Plusieurs personnes ont déjà disparu après avoir suivi cette lumière.",
						"spanish": "No. Varias personas ya han desaparecido tras seguir esa luz.",
						"vietnamese": "Không. Đã có vài người biến mất sau khi đi theo ánh sáng đó rồi.",
						"thai": "ไม่ค่ะ มีหลายคนหายตัวไปแล้วหลังจากตามแสงนั้นไป",
						"hindi": "नहीं। उस रोशनी का पीछा करने के बाद कई लोग गायब हो चुके हैं।"
					},
					"speaker": "eira"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "eira",
					"spot": [
						5,
						2
					]
				},
				{
					"emotion": "sad",
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "여기는… 더 깊어졌네요.",
						"english": "It's... deeper here.",
						"japanese": "ここは…もっと深くなってる。",
						"chinese": "这里…更深了。",
						"french": "C'est... plus profond ici.",
						"spanish": "Aquí... es más profundo.",
						"vietnamese": "Chỗ này… sâu hơn rồi.",
						"thai": "ที่นี่... ลึกกว่าเดิมนะเนี่ย",
						"hindi": "यहाँ… और गहरा हो गया है।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "바람 소리인가? 뭔가 희미하게 들려오는데.",
						"english": "Is that the wind? I hear something faintly.",
						"japanese": "風の音かな？何かかすかに聞こえる。",
						"chinese": "是风声吗？我好像隐约听到什么。",
						"french": "C'est le vent ? J'entends quelque chose faiblement.",
						"spanish": "¿Es el viento? Oigo algo débilmente.",
						"vietnamese": "Tiếng gió à? Nghe có gì đó mơ hồ.",
						"thai": "เสียงลมเหรอ? ได้ยินอะไรแผ่วๆ",
						"hindi": "क्या यह हवा की आवाज़ है? मुझे कुछ हल्का सा सुनाई दे रहा है।"
					}
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "네… 밤이 되면 아이들 흐느끼는 소리가 들린대요. 저도 몇 번….",
						"english": "Yes… they say you can hear children sobbing at night. I've heard it a few times myself…",
						"japanese": "ええ…夜になると子供たちのすすり泣く声が聞こえるって。私も何回か…。",
						"chinese": "是的…他们说晚上能听到孩子们抽泣的声音。我也听过几次…",
						"french": "Oui… on dit qu'on entend les enfants sangloter la nuit. Je l'ai entendu plusieurs fois…",
						"spanish": "Sí… dicen que se oyen los sollozos de los niños por la noche. Yo también lo he oído un par de veces…",
						"vietnamese": "Vâng… họ nói rằng vào ban đêm có thể nghe thấy tiếng trẻ con nức nở. Tôi cũng nghe thấy vài lần rồi…",
						"thai": "ค่ะ... เขาว่ากลางคืนจะได้ยินเสียงเด็กสะอื้น ฉันเองก็เคยได้ยินมาบ้าง...",
						"hindi": "हाँ… कहते हैं कि रात में बच्चों के सिसकने की आवाज़ आती है। मैंने भी कुछ बार…।"
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "아이들 소리라고?",
						"english": "Children's voices?",
						"japanese": "子供たちの声だと？",
						"chinese": "孩子们的声音？",
						"french": "Des voix d'enfants ?",
						"spanish": "¿Voces de niños?",
						"vietnamese": "Tiếng trẻ con á?",
						"thai": "เสียงเด็กเหรอ?",
						"hindi": "बच्चों की आवाज़?"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "옛날 이야기에는 설원 요정이… 손길이 닿으면 모든 게 사라진다고 했어요.",
						"english": "In old tales, the Snow Elf… they say everything disappears if touched by its hand.",
						"japanese": "昔話では、雪原の妖精が…手が触れると全てが消えるって言われてた。",
						"chinese": "在古老的传说中，雪原精灵…据说只要被它触碰到，一切都会消失。",
						"french": "Dans les vieilles histoires, les fées des neiges… on dit que tout disparaît si leur main touche.",
						"spanish": "En los cuentos antiguos, la Hada de la Nieve… dicen que si te toca, todo desaparece.",
						"vietnamese": "Trong truyện cổ, tinh linh tuyết nguyên… nói rằng mọi thứ sẽ biến mất nếu bị chạm vào.",
						"thai": "ในนิทานเก่าๆ แฟรี่หิมะ… เขาว่าถ้าโดนสัมผัสทุกอย่างจะหายไป",
						"hindi": "पुरानी कहानियों में, हिम परी… कहते हैं कि अगर उसका हाथ लग जाए तो सब कुछ गायब हो जाता है।"
					},
					"speaker": "eira"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "요정이라니. 그게 뭐야.",
						"english": "A fairy? What's that?",
						"japanese": "妖精だって？なんだそれ。",
						"chinese": "妖精？那是什么东西。",
						"french": "Une fée ? Qu'est-ce que c'est ?",
						"spanish": "¿Un hada? ¿Qué es eso?",
						"vietnamese": "Tinh linh á? Cái gì vậy chứ.",
						"thai": "แฟรี่อะไรนั่นน่ะ มันคืออะไร",
						"hindi": "परी? वह क्या है।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "저도 잘 모르겠어요. 그저 전설이라고 들었어요.",
						"english": "I don't really know either. I just heard it's a legend.",
						"japanese": "私もよく分かりません。ただの伝説だと聞きました。",
						"chinese": "我也不是很清楚。只是听说那是个传说。",
						"french": "Je ne sais pas vraiment non plus. J'ai juste entendu dire que c'était une légende.",
						"spanish": "Yo tampoco lo sé. Solo escuché que es una leyenda.",
						"vietnamese": "Tôi cũng không rõ nữa. Chỉ nghe nói đó là một truyền thuyết thôi.",
						"thai": "ฉันก็ไม่ค่อยรู้เหมือนกันค่ะ ได้ยินแค่ว่าเป็นตำนาน",
						"hindi": "मुझे भी ठीक से नहीं पता। मैंने बस इतना सुना है कि यह एक किंवदंती है।"
					},
					"speaker": "eira",
					"emotion": "base"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						5,
						2
					],
					"speaker": "eira",
					"type": "direction"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "이 빛이… 이상해요. 너무 아름다워서… 더 무서워요.",
						"english": "This light… it's strange. So beautiful… it's even scarier.",
						"japanese": "この光…変だ。美しすぎて…かえって怖い。",
						"chinese": "这光…好奇怪。太美了…反而更可怕。",
						"french": "Cette lumière… est étrange. Tellement belle… que c'en est encore plus effrayant.",
						"spanish": "Esta luz… es extraña. Tan hermosa… que da más miedo.",
						"vietnamese": "Ánh sáng này… thật kỳ lạ. Đẹp quá… nên càng đáng sợ hơn.",
						"thai": "แสงนี่... แปลกจังเลย สวยมากจน…น่ากลัวกว่าเดิม",
						"hindi": "यह रोशनी… अजीब है। इतनी खूबसूरत है कि… और डरावनी लगती है।"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아름답다고? 그냥 얼음 결정일 뿐이야.",
						"english": "Beautiful? It's just an ice crystal.",
						"japanese": "美しいだって？ただの氷の結晶だ。",
						"chinese": "美丽？那不过是冰晶而已。",
						"french": "Belle ? Ce n'est qu'un cristal de glace.",
						"spanish": "Hermosa? Es solo un cristal de hielo.",
						"vietnamese": "Đẹp á? Chỉ là một tinh thể băng thôi mà.",
						"thai": "สวยเหรอ? ก็แค่ผลึกน้ำแข็งเท่านั้นเอง",
						"hindi": "खूबसूरत? यह सिर्फ एक बर्फ का क्रिस्टल है।"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "아니에요. 이건… 길을 잃은 영혼을 유혹하는 빛 같아요.",
						"english": "No. This light... it feels like it's luring lost souls.",
						"japanese": "いいえ。これは…道に迷った魂を誘惑する光のようです。",
						"chinese": "不，这光…像是在引诱迷失的灵魂。",
						"french": "Non. Cette lumière… on dirait qu'elle attire les âmes perdues.",
						"spanish": "No. Esta luz... parece que está atrayendo a las almas perdidas.",
						"vietnamese": "Không. Ánh sáng này… hình như nó đang dụ dỗ những linh hồn lạc lối.",
						"thai": "ไม่ค่ะ นี่มัน...เหมือนแสงที่ล่อลวงวิญญาณที่หลงทางเลยค่ะ",
						"hindi": "नहीं। यह रोशनी... खोई हुई आत्माओं को लुभाने वाली लगती है।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"content": {
						"korean": "괜찮아, 에이라. 우리가 지켜줄게.",
						"english": "It's alright, Eira. We'll protect you.",
						"japanese": "大丈夫だよ、エイラ。私たちが守ってあげるから。",
						"chinese": "没关系，艾拉。我们会保护你。",
						"french": "Tout va bien, Eira. Nous te protégerons.",
						"spanish": "Tranquila, Eira. Te protegeremos.",
						"vietnamese": "Không sao đâu, Eira. Chúng ta sẽ bảo vệ em.",
						"thai": "ไม่เป็นไรนะ ไอรา พวกเราจะปกป้องเธอเอง",
						"hindi": "ठीक है, ऐरा। हम तुम्हारी रक्षा करेंगे।"
					},
					"emotion": "base"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "제발… 조심하세요. 더 깊이 가면 안 돼요.",
						"english": "Please… be careful. We shouldn't go any deeper.",
						"japanese": "どうか…気をつけてください。これ以上奥へ行ってはいけません。",
						"chinese": "拜托了…小心点。不能再深入了。",
						"french": "S'il vous plaît… soyez prudents. On ne devrait pas aller plus loin.",
						"spanish": "Por favor… tengan cuidado. No debemos ir más profundo.",
						"vietnamese": "Làm ơn… hãy cẩn thận. Không được đi sâu hơn nữa.",
						"thai": "โปรด...ระวังตัวด้วยค่ะ เราไม่ควรเข้าไปลึกกว่านี้",
						"hindi": "कृपया... सावधान रहें। हमें और अंदर नहीं जाना चाहिए।"
					},
					"emotion": "sad"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"spot": [
						5,
						2
					],
					"type": "direction",
					"speaker": "eira",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"emotion": "sad",
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "돌아갈까요? 더 이상 가면….",
						"english": "Should we go back? If we go any further...",
						"japanese": "戻りましょうか？これ以上行くと…",
						"chinese": "我们回去吗？再往前走就…",
						"french": "Devrions-nous rebrousser chemin ? Si on va plus loin…",
						"spanish": "¿Volvemos? Si vamos más allá...",
						"vietnamese": "Chúng ta quay lại không? Nếu đi xa hơn nữa...",
						"thai": "เราจะกลับกันไหมคะ? ถ้าไปมากกว่านี้...",
						"hindi": "क्या हम वापस चलें? अगर हम और आगे गए तो..."
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "여기까지 와서 포기할 순 없어.",
						"english": "We can't give up after coming this far.",
						"japanese": "ここまで来て諦めるわけにはいかない。",
						"chinese": "走到这里，不能放弃。",
						"french": "On ne peut pas abandonner après être venus jusqu'ici.",
						"spanish": "No podemos rendirnos después de haber llegado hasta aquí.",
						"vietnamese": "Đến đây rồi, không thể bỏ cuộc được.",
						"thai": "มาถึงนี่แล้ว จะยอมแพ้ไม่ได้หรอก",
						"hindi": "इतनी दूर आकर हार नहीं मान सकते।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_2",
					"type": "speech",
					"content": {
						"korean": "사라진 사람들을 찾아야 해.",
						"english": "We have to find the missing people.",
						"japanese": "消えた人々を見つけなければならない。",
						"chinese": "我们必须找到失踪的人。",
						"french": "Nous devons retrouver les personnes disparues.",
						"spanish": "Tenemos que encontrar a las personas desaparecidas.",
						"vietnamese": "Chúng ta phải tìm những người mất tích.",
						"thai": "เราต้องหาคนที่หายไปให้เจอ",
						"hindi": "हमें लापता लोगों को ढूंढना होगा।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "하지만… 이제 진짜 길을 잃을 거예요.",
						"english": "But… now we'll truly get lost.",
						"japanese": "でも…本当に道に迷ってしまいますよ。",
						"chinese": "但是…我们现在真的会迷路了。",
						"french": "Mais… maintenant, nous allons vraiment nous perdre.",
						"spanish": "Pero… ahora sí que nos perderemos.",
						"vietnamese": "Nhưng… bây giờ chúng ta sẽ thực sự lạc đường.",
						"thai": "แต่...ตอนนี้เราจะหลงทางจริงๆ แล้วนะ",
						"hindi": "लेकिन... अब हम सच में रास्ता भटक जाएंगे।"
					},
					"speaker": "eira",
					"emotion": "sad"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "매서운 눈보라가 길을 지웠다. 돌아갈 길은 보이지 않았다.",
						"english": "The harsh blizzard erased the path. The way back was gone.",
						"japanese": "猛吹雪が道を消し去った。戻る道は見えなかった。",
						"chinese": "猛烈的暴风雪抹去了道路。回程的路已不见踪影。",
						"french": "La violente tempête de neige avait effacé le chemin. La voie du retour était invisible.",
						"spanish": "La fuerte ventisca borró el camino. El regreso no se veía.",
						"vietnamese": "Trận bão tuyết khắc nghiệt đã xóa sạch con đường. Lối về không còn.",
						"thai": "พายุหิมะที่รุนแรงได้ลบเส้นทางออกไป ไม่เห็นทางที่จะกลับแล้ว",
						"hindi": "भीषण बर्फीले तूफान ने रास्ते मिटा दिए। वापस जाने का रास्ता नहीं दिख रहा था।"
					},
					"emotion": "base"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "설원 가장 깊은 곳, 거대한 얼음 동굴이 모습을 드러냈다.",
						"english": "Deepest in the snowfield, a gigantic ice cave revealed itself.",
						"japanese": "雪原の最も深い場所で、巨大な氷の洞窟がその姿を現した。",
						"chinese": "雪原深处，一座巨大的冰洞显露出来。",
						"french": "Au plus profond du champ de neige, une gigantesque grotte de glace se révéla.",
						"spanish": "En lo más profundo del campo nevado, una gigantesca cueva de hielo se reveló.",
						"vietnamese": "Sâu nhất trong vùng tuyết, một hang động băng khổng lồ hiện ra.",
						"thai": "ลึกที่สุดในทุ่งหิมะ ถ้ำน้ำแข็งขนาดยักษ์ได้ปรากฏขึ้น",
						"hindi": "बर्फ के मैदान के सबसे गहरे हिस्से में, एक विशाल बर्फीली गुफा प्रकट हुई।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"action": "focus",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "random_boss",
					"spot": [
						5,
						5
					]
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "…누가 나의 노래를 방해하는가.",
						"english": "...Who disturbs my song?",
						"japanese": "…誰が私の歌を邪魔するのか。",
						"chinese": "…是谁在打扰我的歌声？",
						"french": "…Qui trouble mon chant ?",
						"spanish": "...¿Quién perturba mi canción?",
						"vietnamese": "…Ai đang quấy rầy bài hát của ta?",
						"thai": "...ใครบังอาจมารบกวนเพลงของข้า?",
						"hindi": "...कौन मेरे गीत में बाधा डाल रहा है?"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "네가… 사라진 사람들을 데려간 괴물이야?",
						"english": "Are you… the monster who took the vanished ones?",
						"japanese": "お前が… 消えた者たちを連れ去った怪物なのか？",
						"chinese": "你是…带走失踪者的怪物吗？",
						"french": "Es-tu… le monstre qui a emporté les disparus ?",
						"spanish": "¿Eres… el monstruo que se llevó a los desaparecidos?",
						"vietnamese": "Ngươi… là quái vật đã bắt những người biến mất sao?",
						"thai": "แก… คือสัตว์ประหลาดที่พาทุกคนที่หายไปใช่ไหม?",
						"hindi": "क्या तुम… उन लापता लोगों को ले जाने वाले राक्षस हो?"
					},
					"emotion": "angry"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "괴물? 나는 그저… 길 잃은 영혼을 품을 뿐.",
						"english": "Monster? I merely… embrace lost souls.",
						"japanese": "怪物だと？私はただ… 迷いし魂を抱くだけ。",
						"chinese": "怪物？我只是… 收容迷失的灵魂。",
						"french": "Monstre ? Je ne fais qu’… étreindre les âmes perdues.",
						"spanish": "¿Monstruo? Yo solo… abrazo a las almas perdidas.",
						"vietnamese": "Quái vật? Ta chỉ là… dung dưỡng những linh hồn lạc lối mà thôi.",
						"thai": "สัตว์ประหลาด? ข้าเพียงแค่… โอบรับวิญญาณที่หลงทางเท่านั้น.",
						"hindi": "राक्षस? मैं तो बस… भटकी हुई आत्माओं को गले लगाता हूँ।"
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"speaker": "eira",
					"spot": [
						5,
						2
					],
					"action": "enter",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "저 괴물이… 그 길 잃은 영혼의 노래를 부르던 존재였어요.",
						"english": "That monster… was the one singing the song of lost souls.",
						"japanese": "あの怪物が… その迷いし魂の歌を歌っていた存在だったのね。",
						"chinese": "那个怪物…就是唱着迷失灵魂之歌的存在。",
						"french": "Ce monstre… c'était celui qui chantait la chanson des âmes perdues.",
						"spanish": "Ese monstruo… era quien cantaba la canción de las almas perdidas.",
						"vietnamese": "Con quái vật đó… chính là kẻ đã hát khúc ca của những linh hồn lạc lối.",
						"thai": "สัตว์ประหลาดตัวนั้น… คือผู้ที่ขับขานบทเพลงแห่งวิญญาณที่หลงทาง.",
						"hindi": "वह राक्षस… वही था जो भटकी हुई आत्माओं का गीत गा रहा था।"
					},
					"speaker": "eira",
					"emotion": "sad"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "너희도 곧 나의 일부가 되리라.",
						"english": "You too shall soon become a part of me.",
						"japanese": "お前たちもすぐに私の¹部となるだろう。",
						"chinese": "你们也很快会成为我的一部分。",
						"french": "Vous aussi deviendrez bientôt une partie de moi.",
						"spanish": "Vosotros también pronto seréis parte de mí.",
						"vietnamese": "Các ngươi rồi cũng sẽ sớm trở thành một phần của ta.",
						"thai": "พวกเจ้าก็จะกลายเป็นส่วนหนึ่งของข้าในไม่ช้า.",
						"hindi": "तुम भी जल्द ही मेरा हिस्सा बन जाओगे।"
					},
					"emotion": "base"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "크으윽… 어리석은 자들… 너희는 아무것도 모른다…",
						"english": "Ugh… Foolish mortals… You know nothing…",
						"japanese": "くぅぅ… 愚かな者たちめ… お前たちは何も知らない…",
						"chinese": "呃…愚蠢的家伙们…你们什么都不知道…",
						"french": "Urgh… Imbéciles… Vous ne savez rien…",
						"spanish": "Uf… Necios… No sabéis nada…",
						"vietnamese": "Khụ… Những kẻ ngu ngốc… Các ngươi chẳng biết gì cả…",
						"thai": "อึก… พวกโง่เขลา… พวกเจ้าไม่รู้อะไรเลย…",
						"hindi": "उफ़… मूर्ख प्राणी… तुम कुछ नहीं जानते…"
					},
					"speaker": "random_boss",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "진정한 공포는… 이제 시작될 뿐….",
						"english": "True terror… is only just beginning….",
						"japanese": "真の恐怖は… 今、始まったばかりだ…。",
						"chinese": "真正的恐惧…才刚刚开始…。",
						"french": "La véritable horreur… ne fait que commencer….",
						"spanish": "El verdadero terror… apenas está comenzando….",
						"vietnamese": "Nỗi kinh hoàng thật sự… chỉ mới bắt đầu mà thôi….",
						"thai": "ความหวาดกลัวที่แท้จริง… เพิ่งจะเริ่มต้นขึ้นเท่านั้น….",
						"hindi": "असली डर तो… अब बस शुरू हो रहा है…।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "끝났나? 뭔가 찝찝한데…",
						"english": "Is it over? Something feels off…",
						"japanese": "終わったのか？何だか釈然としないな…",
						"chinese": "结束了吗？总觉得有些不对劲…",
						"french": "C'est fini ? Il y a quelque chose qui cloche…",
						"spanish": "¿Ha terminado? Algo no me cuadra…",
						"vietnamese": "Kết thúc rồi sao? Thấy cứ là lạ…",
						"thai": "จบแล้วเหรอ? รู้สึกไม่ค่อยสบายใจเลย…",
						"hindi": "क्या यह खत्म हो गया? कुछ अजीब सा लग रहा है…"
					},
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						5,
						2
					],
					"type": "direction",
					"speaker": "eira"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "전설에 따르면… 설원 요정의 그림자가 깨어나면… 더 큰 비극이 온다고 했어요.",
						"english": "According to legend… when the shadow of the Snow Fairy awakens… a greater tragedy will come.",
						"japanese": "伝説によると… 雪原の妖精の影が目覚めれば… さらに大きな悲劇が訪れると…。",
						"chinese": "据传说…当雪原妖精的影子苏醒时…更大的悲剧将会降临。",
						"french": "Selon la légende… quand l'ombre de la Fée des Neiges s'éveillera… une tragédie plus grande encore surviendra.",
						"spanish": "Según la leyenda… cuando la sombra de la Hada de la Nieve despierte… una tragedia mayor llegará.",
						"vietnamese": "Theo truyền thuyết… khi bóng tối của Tiên Tuyết Nguyên thức tỉnh… một bi kịch lớn hơn sẽ đến.",
						"thai": "ตามตำนานเล่าว่า… เมื่อเงามืดของนางฟ้าแห่งทุ่งหิมะตื่นขึ้น… โศกนาฏกรรมที่ยิ่งใหญ่กว่าก็จะมาเยือน.",
						"hindi": "किंवदंती के अनुसार… जब बर्फीली परी की परछाई जागृत होगी… तो एक बड़ी त्रासदी आएगी।"
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "길 잃은 영혼의 노래는 멈췄지만, 설원에는 새로운 그림자가 드리워졌다.",
						"english": "The song of lost souls has stopped, but a new shadow has fallen upon the snowy plains.",
						"japanese": "迷いし魂の歌は止まったが、雪原には新たな影が差し込んだ。",
						"chinese": "迷失灵魂之歌停止了，但雪原上却笼罩了新的阴影。",
						"french": "Le chant des âmes perdues s'est tu, mais une nouvelle ombre plane sur les plaines enneigées.",
						"spanish": "La canción de las almas perdidas ha cesado, pero una nueva sombra se ha cernido sobre las llanuras nevadas.",
						"vietnamese": "Khúc ca của những linh hồn lạc lối đã ngừng, nhưng một bóng tối mới đã phủ xuống tuyết nguyên.",
						"thai": "บทเพลงแห่งวิญญาณที่หลงทางหยุดลงแล้ว แต่เงามืดใหม่ได้ปกคลุมทุ่งหิมะ.",
						"hindi": "भटकी हुई आत्माओं का गीत थम गया, लेकिन बर्फीले मैदानों पर एक नई परछाई छा गई है।"
					},
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이것은, 거대한 비극의 서막에 불과했다.",
						"english": "This was merely the prelude to a colossal tragedy.",
						"japanese": "これは、巨大な悲劇の序幕に過ぎなかった。",
						"chinese": "这不过是巨大悲剧的序幕。",
						"french": "Ceci n'était que le prélude d'une tragédie colossale.",
						"spanish": "Esto fue solo el preludio de una tragedia colosal.",
						"vietnamese": "Đây chỉ là khúc dạo đầu của một bi kịch khổng lồ.",
						"thai": "นี่เป็นเพียงบทนำของโศกนาฏกรรมครั้งยิ่งใหญ่เท่านั้น.",
						"hindi": "यह तो बस एक विशाल त्रासदी का प्रस्तावना मात्र था।"
					},
					"speaker": "narrator"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "하찮은 것들… 나의 품에 영원히 잠들어라.",
						"english": "Insignificant beings... Slumber forever in my embrace.",
						"japanese": "取るに足らない者ども… 我が腕の中で永遠に眠れ。",
						"chinese": "卑微的生灵… 在我的怀抱中永眠吧。",
						"french": "Créatures insignifiantes... Dormez à jamais dans mon étreinte.",
						"spanish": "Seres insignificantes... Dormid para siempre en mi abrazo.",
						"vietnamese": "Những kẻ hèn mọn… Hãy ngủ vùi mãi mãi trong vòng tay ta.",
						"thai": "พวกไร้ค่า… จงหลับใหลชั่วนิรันดร์ในอ้อมกอดของข้า",
						"hindi": "तुच्छ प्राणियों... मेरी बाहों में हमेशा के लिए सो जाओ।"
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "젠장… 아직… 끝나지 않았어!",
						"english": "Damn it... It's not... over yet!",
						"japanese": "くそっ… まだ… 終わってない！",
						"chinese": "该死… 还没… 结束！",
						"french": "Maudit... Ce n'est pas... fini !",
						"spanish": "Maldita sea... ¡Todavía no... ha terminado!",
						"vietnamese": "Chết tiệt… Vẫn chưa… kết thúc đâu!",
						"thai": "ให้ตายสิ… ยัง… ไม่จบหรอก!",
						"hindi": "धिक्कार है... यह अभी... खत्म नहीं हुआ!"
					},
					"speaker": "character_any",
					"emotion": "angry"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"끝없이 펼쳐진 설원, 희미한 빛이 일렁였다.",
			"그 빛은 길 잃은 영혼의 노래를 품고 있었다.",
			"어린 소녀의 불길한 소문, 탐험대는 진실을 찾아 나섰다.",
			"그러나 눈송이 아래 잠든 비극은, 이제 막 시작될 뿐이었다."
		],
		"english": [
			"An endless snowfield, a faint light flickered.",
			"That light held the song of a lost soul.",
			"Ominous rumors of a young girl. The expedition set out to find the truth.",
			"But the tragedy slumbering beneath the snowflakes was only just beginning."
		],
		"japanese": [
			"果てしなく広がる雪原、かすかな光が揺らめいた。",
			"その光は、迷える魂の歌を宿していた。",
			"幼い少女の不吉な噂。探検隊は真実を求め出発した。",
			"しかし、雪の下に眠る悲劇は、まだ始まったばかりだった。"
		],
		"chinese": [
			"无尽的雪原上，微弱的光芒闪烁着。",
			"那光芒中蕴含着迷失灵魂的歌声。",
			"关于小女孩的不祥传闻，探险队出发寻找真相。",
			"然而，雪花下沉睡的悲剧，才刚刚开始。"
		],
		"french": [
			"Dans l'étendue infinie de la toundra, une faible lumière vacillait.",
			"Cette lumière portait le chant d'une âme perdue.",
			"Des rumeurs sinistres sur une jeune fille. L'expédition partit à la recherche de la vérité.",
			"Mais la tragédie, endormie sous les flocons, ne faisait que commencer."
		],
		"spanish": [
			"Un campo nevado interminable, una luz tenue parpadeaba.",
			"Esa luz albergaba la canción de un alma perdida.",
			"Rumores siniestros de una niña. La expedición partió en busca de la verdad.",
			"Pero la tragedia, dormida bajo los copos de nieve, apenas comenzaba."
		],
		"vietnamese": [
			"Đồng tuyết trải dài vô tận, một ánh sáng mờ ảo lung linh.",
			"Ánh sáng ấy chứa đựng khúc ca của linh hồn lạc lối.",
			"Tin đồn đáng ngại về một cô bé. Đoàn thám hiểm lên đường tìm sự thật.",
			"Nhưng bi kịch đang ẩn mình dưới tuyết, chỉ mới bắt đầu."
		],
		"thai": [
			"ทุ่งหิมะอันไร้ขอบเขต แสงเลือนรางริบหรี่",
			"แสงนั้นแฝงบทเพลงของวิญญาณที่หลงทาง",
			"ข่าวลือร้ายเกี่ยวกับเด็กสาว คณะสำรวจออกตามหาความจริง",
			"แต่โศกนาฏกรรมที่หลับใหลใต้เกล็ดหิมะ เพิ่งจะเริ่มต้นขึ้นเท่านั้น"
		],
		"hindi": [
			"एक अंतहीन हिमपात, एक हल्की रोशनी टिमटिमा रही थी।",
			"उस रोशनी में एक भटकी हुई आत्मा का गीत था।",
			"एक छोटी लड़की की अशुभ अफवाहें। अभियान सत्य की तलाश में निकल पड़ा।",
			"लेकिन बर्फ के टुकड़ों के नीचे सोई हुई त्रासदी अभी शुरू ही हुई थी।"
		]
	}
} as const;
