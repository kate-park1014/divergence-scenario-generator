export const scenario_snowy_pool_104_01 = {
	"scenario_id": "snowy_pool_104_01",
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
					"content": {
						"korean": "눈보라가 몰아치는 산맥 초입. 칼날 같은 바람이 살을 에는 듯했다.",
						"english": "The foothills of a blizzard-swept mountain range. The knife-like wind felt like it was tearing at my flesh.",
						"japanese": "吹雪が吹き荒れる山脈の入り口。刃のような風が肌を裂くようだった。",
						"chinese": "暴风雪肆虐的山脉入口。刀割般的寒风刺骨。",
						"french": "Les contreforts d'une chaîne de montagnes balayée par le blizzard. Le vent, tranchant comme une lame, semblait déchirer ma chair.",
						"spanish": "Las faldas de una cordillera azotada por el ventisca. El viento, como un cuchillo, parecía desgarrar la piel.",
						"vietnamese": "Đầu dãy núi bị bão tuyết càn quét. Gió lạnh cắt da cắt thịt.",
						"thai": "ทางเข้าเทือกเขาที่พายุหิมะพัดกระหน่ำ ลมคมกริบราวกับจะบาดเนื้อ",
						"hindi": "बर्फीले तूफान से घिरी पर्वत श्रृंखला का प्रवेश द्वार। चाकू जैसी हवा शरीर को चीर रही थी।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "여기가… 얼어붙은 입구인가?",
						"english": "Is this... the frozen entrance?",
						"japanese": "ここが…凍てついた入り口か？",
						"chinese": "这里就是……冰冻的入口吗？",
						"french": "Est-ce ici... l'entrée gelée ?",
						"spanish": "¿Es este... la entrada congelada?",
						"vietnamese": "Đây là... lối vào đóng băng sao?",
						"thai": "นี่คือ... ทางเข้าที่เยือกแข็งงั้นรึ?",
						"hindi": "क्या यह... जमा हुआ प्रवेश द्वार है?"
					}
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						5,
						2
					],
					"speaker": "eira",
					"action": "enter"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…어서 와. 기다리고 있었어.",
						"english": "...Welcome. I've been waiting.",
						"japanese": "…よく来たね。待っていたよ。",
						"chinese": "……欢迎。我一直在等你。",
						"french": "...Bienvenue. Je t'attendais.",
						"spanish": "...Bienvenido. Te estaba esperando.",
						"vietnamese": "...Chào mừng. Tôi đã đợi bạn.",
						"thai": "...ยินดีต้อนรับ ฉันรออยู่",
						"hindi": "...स्वागत है। मैं तुम्हारा इंतजार कर रहा था।"
					},
					"speaker": "eira"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "당신은… 누구지?",
						"english": "Who... are you?",
						"japanese": "あなたは…誰だ？",
						"chinese": "你……是谁？",
						"french": "Qui... es-tu ?",
						"spanish": "¿Quién... eres?",
						"vietnamese": "Bạn là... ai?",
						"thai": "ท่านคือ... ใคร?",
						"hindi": "तुम... कौन हो?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "길을 안내할 자. 이 산에서 살아남고 싶다면… 날 따라와.",
						"english": "The one who will guide the way. If you wish to survive in this mountain... follow me.",
						"japanese": "道を案内する者だ。この山で生き残りたければ…私について来い。",
						"chinese": "指引道路的人。如果你想在这座山里活下来……就跟着我。",
						"french": "Celui qui te guidera. Si tu veux survivre dans cette montagne... suis-moi.",
						"spanish": "Quien te guiará. Si quieres sobrevivir en esta montaña... sígueme.",
						"vietnamese": "Người dẫn đường. Nếu bạn muốn sống sót trên ngọn núi này... hãy theo tôi.",
						"thai": "ผู้ชี้นำทาง หากเจ้าอยากรอดในภูเขานี้... จงตามข้ามา",
						"hindi": "मार्गदर्शक। यदि तुम इस पहाड़ में जीवित रहना चाहते हो... तो मेरे पीछे आओ।"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "eira",
					"content": {
						"korean": "다만, 경고하겠어. 고대의 흔적들은… 보이는 게 다가 아닐 테니.",
						"english": "However, I must warn you. The ancient traces... may not be all they seem.",
						"japanese": "ただし、警告しておこう。古代の痕跡は…見えているものだけではないだろうからな。",
						"chinese": "但是，我得警告你。古老的痕迹……可能并非表面看上去那么简单。",
						"french": "Cependant, je te préviens. Les traces antiques... pourraient être plus que ce qu'elles semblent.",
						"spanish": "Sin embargo, te advierto. Los vestigios antiguos... podrían no ser todo lo que parecen.",
						"vietnamese": "Tuy nhiên, tôi phải cảnh báo bạn. Những dấu vết cổ xưa... có thể không phải là tất cả những gì bạn thấy.",
						"thai": "แต่ข้าต้องเตือนเจ้า ร่องรอยโบราณ... อาจไม่ใช่ทั้งหมดที่เห็น",
						"hindi": "हालांकि, मैं तुम्हें चेतावनी देता हूँ। प्राचीन निशान... जो दिखते हैं, वे सब नहीं हो सकते।"
					}
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
						5,
						2
					],
					"speaker": "eira",
					"type": "direction"
				},
				{
					"content": {
						"korean": "거대한 얼음 벽에 도착했다. 기이하고 복잡한 무늬들이 새겨져 있었다.",
						"english": "Arrived at a gigantic ice wall. Strange and intricate patterns were carved into it.",
						"japanese": "巨大な氷の壁に到着した。奇妙で複雑な模様が刻まれていた。",
						"chinese": "抵达了一面巨大的冰墙。上面刻画着奇异而复杂的图案。",
						"french": "Arrivé devant un gigantesque mur de glace. Des motifs étranges et complexes y étaient gravés.",
						"spanish": "Llegué a un muro de hielo gigantesco. Tenía grabados patrones extraños y complejos.",
						"vietnamese": "Đã đến một bức tường băng khổng lồ. Những hoa văn kỳ lạ và phức tạp được khắc trên đó.",
						"thai": "มาถึงกำแพงน้ำแข็งขนาดมหึมา ลวดลายแปลกประหลาดและซับซ้อนสลักอยู่บนนั้น",
						"hindi": "एक विशाल बर्फ की दीवार पर पहुँच गया। उस पर अजीब और जटिल पैटर्न खुदे हुए थे।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이건… 단순한 얼음이 아니야. 누가 조각한 건가?",
						"english": "This isn't... just ice. Who carved this?",
						"japanese": "これは…ただの氷じゃない。誰が彫ったんだ？",
						"chinese": "这不是…普通的冰。是谁雕刻的？",
						"french": "Ce n'est pas... juste de la glace. Qui a sculpté ça ?",
						"spanish": "¿Esto no es... solo hielo. Quién lo esculpió?",
						"vietnamese": "Đây không phải... chỉ là băng. Ai đã điêu khắc nó?",
						"thai": "นี่มัน... ไม่ใช่แค่น้ำแข็งธรรมดา ใครเป็นคนแกะสลัก?",
						"hindi": "यह... सिर्फ बर्फ नहीं है। इसे किसने तराशा है?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…아니. 자연 현상도 아니지.",
						"english": "...No. Not a natural phenomenon either.",
						"japanese": "…いや。自然現象でもない。",
						"chinese": "…不。也不是自然现象。",
						"french": "...Non. Pas un phénomène naturel non plus.",
						"spanish": "...No. Tampoco es un fenómeno natural.",
						"vietnamese": "...Không. Cũng không phải hiện tượng tự nhiên.",
						"thai": "...ไม่สิ ไม่ใช่ปรากฏการณ์ธรรมชาติด้วย",
						"hindi": "...नहीं। यह कोई प्राकृतिक घटना भी नहीं है।"
					},
					"speaker": "eira"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "이것은… 누군가의 의지. 얼어붙은 고대의 메시지야.",
						"english": "This is... someone's will. A frozen ancient message.",
						"japanese": "これは…誰かの意思だ。凍りついた古代のメッセージ。",
						"chinese": "这是…某个人的意志。一个冰封的古老讯息。",
						"french": "C'est... la volonté de quelqu'un. Un message ancien gelé.",
						"spanish": "Esto es... la voluntad de alguien. Un mensaje antiguo congelado.",
						"vietnamese": "Đây là... ý chí của ai đó. Một thông điệp cổ xưa bị đóng băng.",
						"thai": "นี่คือ... เจตจำนงของใครบางคน ข้อความโบราณที่ถูกแช่แข็ง",
						"hindi": "यह... किसी की इच्छा है। एक जमा हुआ प्राचीन संदेश।"
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
					"type": "direction",
					"speaker": "eira",
					"duration_ms": 500,
					"spot": [
						5,
						2
					]
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "고대의 메시지라니… 무슨 의미지?",
						"english": "An ancient message... What does that mean?",
						"japanese": "古代のメッセージだと…どういう意味だ？",
						"chinese": "古老的讯息…那是什么意思？",
						"french": "Un message ancien... Qu'est-ce que ça veut dire ?",
						"spanish": "¿Un mensaje antiguo...? ¿Qué significa eso?",
						"vietnamese": "Một thông điệp cổ xưa... Nghĩa là gì?",
						"thai": "ข้อความโบราณเหรอ... หมายความว่ายังไง?",
						"hindi": "एक प्राचीन संदेश... इसका क्या मतलब है?"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "이 산은 모든 것을 얼려버려. 생명도, 시간도… 그리고 진실까지도.",
						"english": "This mountain freezes everything. Life, time... and even truth.",
						"japanese": "この山は全てを凍らせる。命も、時間も…そして真実までも。",
						"chinese": "这座山冻结一切。生命，时间…甚至真相。",
						"french": "Cette montagne gèle tout. La vie, le temps... et même la vérité.",
						"spanish": "Esta montaña congela todo. La vida, el tiempo... e incluso la verdad.",
						"vietnamese": "Ngọn núi này đóng băng mọi thứ. Sự sống, thời gian... và cả sự thật.",
						"thai": "ภูเขานี้ทำให้ทุกสิ่งหยุดนิ่ง ทั้งชีวิต เวลา... และแม้แต่ความจริง",
						"hindi": "यह पहाड़ सब कुछ जमा देता है। जीवन, समय... और यहाँ तक कि सच को भी।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "숨겨진 진실이라도 있다는 건가?",
						"english": "Is there a hidden truth?",
						"japanese": "隠された真実でもあるというのか？",
						"chinese": "是有隐藏的真相吗？",
						"french": "Y a-t-il une vérité cachée ?",
						"spanish": "¿Hay alguna verdad oculta?",
						"vietnamese": "Có sự thật ẩn giấu nào sao?",
						"thai": "มีความจริงที่ซ่อนอยู่หรือเปล่า?",
						"hindi": "क्या कोई छिपा हुआ सच है?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "너희가 찾는 것이 무엇이든. 이 얼음은… 그리 쉽게 깨지지 않을 거야.",
						"english": "Whatever you seek. This ice... won't break so easily.",
						"japanese": "君たちが何を求めているにせよ。この氷は…そう簡単には砕けないだろう。",
						"chinese": "无论你们在寻找什么。这冰…不会那么容易被打破。",
						"french": "Quoi que vous cherchiez. Cette glace... ne se brisera pas si facilement.",
						"spanish": "Lo que sea que busquéis. Este hielo... no se romperá tan fácilmente.",
						"vietnamese": "Dù các ngươi tìm kiếm điều gì. Tảng băng này... sẽ không dễ vỡ đâu.",
						"thai": "ไม่ว่าพวกเจ้าจะตามหาอะไร น้ำแข็งนี้... จะไม่แตกง่ายๆ หรอก",
						"hindi": "तुम जो कुछ भी ढूंढ रहे हो। यह बर्फ... इतनी आसानी से नहीं टूटेगी।"
					},
					"speaker": "eira"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						5,
						2
					],
					"speaker": "eira",
					"type": "direction"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "산맥은 점점 더 깊숙이 이어졌다. 돌아갈 길은 이미 눈에 덮여 사라졌다.",
						"english": "The mountain range continued deeper and deeper. The path back was already covered and gone beneath the snow.",
						"japanese": "山脈はますます深く続いていた。戻る道はすでに雪に覆われ、消えていた。",
						"chinese": "山脉不断向深处延伸。回去的路已被雪覆盖，消失不见。",
						"french": "La chaîne de montagnes s'enfonçait de plus en plus profondément. Le chemin du retour était déjà recouvert de neige et avait disparu.",
						"spanish": "La cordillera se adentraba cada vez más. El camino de vuelta ya estaba cubierto por la nieve y había desaparecido.",
						"vietnamese": "Dãy núi tiếp tục sâu hun hút. Con đường quay về đã bị tuyết bao phủ và biến mất.",
						"thai": "เทือกเขาลึกเข้าไปเรื่อยๆ เส้นทางกลับถูกปกคลุมด้วยหิมะจนหายไปแล้ว",
						"hindi": "पर्वत श्रृंखला और गहरी होती गई। वापस जाने का रास्ता पहले ही बर्फ से ढककर गायब हो चुका था।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "추위가 너무 심해… 이대로 가다간 얼어붙을 것 같아.",
						"english": "The cold is too intense... If we keep going like this, I think I'll freeze.",
						"japanese": "寒さがひどすぎる…このままじゃ凍えそうだ。",
						"chinese": "寒冷太强烈了…再这样下去，我恐怕要冻僵了。",
						"french": "Le froid est trop intense... Si on continue comme ça, je crois que je vais geler.",
						"spanish": "El frío es demasiado intenso... Si seguimos así, creo que me congelaré.",
						"vietnamese": "Cái lạnh quá khắc nghiệt... Cứ tiếp tục thế này, tôi nghĩ mình sẽ đóng băng mất.",
						"thai": "หนาวเกินไปแล้ว... ถ้าไปต่อแบบนี้ฉันคงแข็งตายแน่",
						"hindi": "ठंड बहुत ज़्यादा है... अगर ऐसे ही चलते रहे, तो मुझे लगता है कि मैं जम जाऊँगा।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "돌아갈 수 없어. 이 산은 한 번 들어온 자를 절대 놓아주지 않으니.",
						"english": "There's no turning back. This mountain never lets go of those who enter.",
						"japanese": "もう戻れない。この山は一度入った者を決して手放さない。",
						"chinese": "无法回头了。这座山绝不会放走任何一个踏入它的人。",
						"french": "Impossible de revenir en arrière. Cette montagne ne lâche jamais ceux qui y sont entrés.",
						"spanish": "No hay vuelta atrás. Esta montaña nunca suelta a quien entra en ella.",
						"vietnamese": "Không thể quay lại. Ngọn núi này sẽ không bao giờ buông tha kẻ nào đã đặt chân vào.",
						"thai": "กลับไม่ได้แล้ว ภูเขานี้ไม่เคยปล่อยใครที่เข้ามาได้เลย",
						"hindi": "वापस नहीं जा सकते। यह पहाड़ उन लोगों को कभी नहीं छोड़ता जो एक बार इसमें प्रवेश कर जाते हैं।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "선택은 너희 몫이야. 끝까지 나아갈 것인가, 아니면 여기서 얼어붙을 것인가.",
						"english": "The choice is yours. Push forward to the end, or freeze here.",
						"japanese": "選択はお前たち次第だ。最後まで進むか、それともここで凍りつくか。",
						"chinese": "选择权在你们。是继续前进到底，还是在此冻结？",
						"french": "Le choix vous appartient. Avancer jusqu'au bout, ou geler ici.",
						"spanish": "La elección es vuestra. ¿Avanzar hasta el final, o congelaros aquí?",
						"vietnamese": "Lựa chọn là của các ngươi. Tiến lên đến cuối, hay đông cứng tại đây?",
						"thai": "ทางเลือกเป็นของพวกเจ้า จะเดินหน้าจนสุดทาง หรือจะแข็งตายอยู่ตรงนี้",
						"hindi": "चुनाव तुम्हारा है। अंत तक आगे बढ़ो, या यहीं जम जाओ।"
					}
				}
			]
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						5,
						2
					],
					"speaker": "eira",
					"action": "enter"
				},
				{
					"content": {
						"korean": "크어억…! 멈출 순… 없어…!",
						"english": "Ugh...! Can't... stop...!",
						"japanese": "ぐああ…！止められない…！",
						"chinese": "呃啊……！不能……停……！",
						"french": "Ugh...! Je ne peux pas... m'arrêter...!",
						"spanish": "¡Ugh...! ¡No puedo... parar...!",
						"vietnamese": "Ư... ư...! Không thể... dừng lại...!",
						"thai": "อั่ก…! หยุดไม่ได้…!",
						"hindi": "उह...! रुक नहीं सकता...!"
					},
					"speaker": "random_boss",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "괴물은 얼음 조각이 되어 부서졌다. 그러나 그 냉기는 사라지지 않았다.",
						"english": "The monster shattered into ice fragments. But its chilling aura did not fade.",
						"japanese": "怪物は氷の破片となり砕け散った。しかし、その冷気は消えなかった。",
						"chinese": "怪物碎裂成冰块。然而那股寒气并未消散。",
						"french": "Le monstre se brisa en fragments de glace. Mais son aura glaciale ne disparut pas.",
						"spanish": "El monstruo se hizo añicos de hielo. Pero su fría aura no desapareció.",
						"vietnamese": "Quái vật vỡ tan thành những mảnh băng. Nhưng khí lạnh của nó vẫn không biến mất.",
						"thai": "อสูรกายแตกสลายเป็นเสี่ยง ๆ ทว่าความหนาวเหน็บยังคงอยู่",
						"hindi": "राक्षस बर्फ के टुकड़ों में बिखर गया। लेकिन उसकी ठंडक गायब नहीं हुई।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "해치웠나…?",
						"english": "Did we... defeat it?",
						"japanese": "倒したのか…？",
						"chinese": "解决掉了吗……？",
						"french": "On... l'a vaincu ?",
						"spanish": "¿Lo hemos... derrotado?",
						"vietnamese": "Đã diệt được nó...?",
						"thai": "จัดการได้แล้วเหรอ...?",
						"hindi": "क्या हमने... उसे हरा दिया?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…잠시 멈췄을 뿐이야. 이 산은… 다시 얼어붙을 거야. 더 깊은 곳에서.",
						"english": "...It only stopped for a moment. This mountain... will freeze again. From a deeper place.",
						"japanese": "…一時的に止まっただけだ。この山は…また凍りつくだろう。もっと深い場所で。",
						"chinese": "……它只是暂时停了下来。这座山……会再次冻结的。在更深的地方。",
						"french": "...Il ne s'est arrêté qu'un instant. Cette montagne... gèlera à nouveau. D'un endroit plus profond.",
						"spanish": "...Solo se detuvo por un momento. Esta montaña... volverá a congelarse. Desde un lugar más profundo.",
						"vietnamese": "...Nó chỉ dừng lại trong chốc lát thôi. Ngọn núi này... sẽ đóng băng trở lại. Từ một nơi sâu hơn.",
						"thai": "...แค่หยุดชั่วคราวเท่านั้นแหละ ภูเขานี้... จะแข็งตัวอีกครั้ง จากที่ที่ลึกกว่านี้",
						"hindi": "...यह सिर्फ एक पल के लिए रुका था। यह पहाड़... फिर से जम जाएगा। और गहरी जगह से।"
					},
					"speaker": "eira"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "너희가 진정으로 깨야 할 것은… 저 얼음이 아니야.",
						"english": "What you truly need to break... isn't that ice.",
						"japanese": "本当に壊すべきは…あの氷ではない。",
						"chinese": "你们真正需要打破的…不是那块冰。",
						"french": "Ce que vous devez vraiment briser… ce n'est pas cette glace.",
						"spanish": "Lo que realmente necesitan romper... no es ese hielo.",
						"vietnamese": "Thứ mà các ngươi thực sự cần phá vỡ… không phải tảng băng đó.",
						"thai": "สิ่งที่คุณต้องทำลายจริงๆ... ไม่ใช่ก้อนน้ำแข็งนั่น",
						"hindi": "तुम्हें जो सच में तोड़ना है... वो बर्फ़ नहीं है।"
					},
					"speaker": "eira"
				}
			],
			"dialogue": [
				{
					"type": "direction",
					"speaker": "eira",
					"duration_ms": 500,
					"spot": [
						5,
						2
					],
					"action": "enter"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "거대한 그림자가 앞을 막아섰다. 온몸이 얼음으로 뒤덮인 괴물이었다.",
						"english": "A colossal shadow blocked the way. It was a monster covered entirely in ice.",
						"japanese": "巨大な影が道を阻んだ。全身が氷に覆われた怪物だった。",
						"chinese": "一个巨大的影子挡住了去路。那是一个全身覆盖着冰的怪物。",
						"french": "Une ombre colossale bloquait le chemin. C'était un monstre entièrement recouvert de glace.",
						"spanish": "Una sombra colosal bloqueó el camino. Era un monstruo cubierto de hielo.",
						"vietnamese": "Một cái bóng khổng lồ chặn đường. Đó là một con quái vật phủ đầy băng giá.",
						"thai": "เงาร่างมหึมาขวางทางอยู่ มันคืออสูรกายที่ถูกปกคลุมไปด้วยน้ำแข็งทั้งตัว",
						"hindi": "एक विशाल छाया ने रास्ता रोक दिया। वह पूरी तरह से बर्फ से ढका एक राक्षस था।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "크르르릉… 감히 여기까지 오다니.",
						"english": "Grrr... You dare come this far.",
						"japanese": "グルルル… よくもここまで来たな。",
						"chinese": "吼吼… 竟敢来到这里。",
						"french": "Grrr... Vous osez venir jusqu'ici.",
						"spanish": "Grrr... ¿Te atreves a llegar tan lejos?",
						"vietnamese": "Gừừừ... Ngươi dám đến tận đây.",
						"thai": "ครืน… บังอาจมาถึงที่นี่ได้",
						"hindi": "ग्रर्र... इतनी दूर आने की तुम्हारी हिम्मत कैसे हुई।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…괴물!",
						"english": "...Monster!",
						"japanese": "…怪物！",
						"chinese": "……怪物！",
						"french": "...Monstre !",
						"spanish": "¡...Monstruo!",
						"vietnamese": "...Quái vật!",
						"thai": "...อสูรกาย!",
						"hindi": "...राक्षस!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "(속삭이듯) …저자는… 이 산의 일부. 절대 멈추지 않아.",
						"english": "(Whispering) ...That one... is part of this mountain. It will never stop.",
						"japanese": "（囁くように）…あれは…この山の一部。決して止まらない。",
						"chinese": "(低语) ……它……是这座山的一部分。绝不会停止。",
						"french": "(Murmurant) ...Celui-là... fait partie de cette montagne. Il ne s'arrêtera jamais.",
						"spanish": "(Susurrando) ...Ese... es parte de esta montaña. Nunca se detendrá.",
						"vietnamese": "(Thì thầm) ...Kẻ đó... là một phần của ngọn núi này. Nó sẽ không bao giờ dừng lại.",
						"thai": "(กระซิบ) ...นั่นน่ะ... คือส่วนหนึ่งของภูเขานี้ ไม่มีทางหยุดได้หรอก",
						"hindi": "(फुसफुसाते हुए) ...वह... इस पहाड़ का हिस्सा है। वह कभी नहीं रुकेगा।"
					},
					"speaker": "eira",
					"emotion": "sad",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						5,
						2
					],
					"speaker": "eira",
					"type": "direction",
					"action": "enter"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "거대한 얼음 주먹이 모든 것을 산산조각 냈다.",
						"english": "A giant ice fist shattered everything.",
						"japanese": "巨大な氷の拳が全てを粉砕した。",
						"chinese": "巨大的冰拳将一切击碎。",
						"french": "Un poing de glace géant a tout brisé.",
						"spanish": "Un puño de hielo gigante destrozó todo.",
						"vietnamese": "Một nắm đấm băng khổng lồ đã đập tan mọi thứ.",
						"thai": "กำปั้นน้ำแข็งขนาดยักษ์บดขยี้ทุกสิ่ง",
						"hindi": "एक विशाल बर्फीली मुट्ठी ने सब कुछ चकनाचूर कर दिया।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "크하하… 어리석은 인간들. 여기서 멈춰라.",
						"english": "Hahaha... Foolish humans. Stop here.",
						"japanese": "クハハ…愚かな人間どもめ。ここで止まれ。",
						"chinese": "哈哈哈…愚蠢的人类。到此为止吧。",
						"french": "Hahaha… Humains stupides. Arrêtez-vous ici.",
						"spanish": "Jajaja... Humanos tontos. Deténganse aquí.",
						"vietnamese": "Khakha… Lũ người ngu ngốc. Dừng lại ở đây!",
						"thai": "ฮ่าๆๆ... มนุษย์โง่เง่า หยุดแค่นี้แห",
						"hindi": "हाहाहा... मूर्ख इंसानो। यहीं रुक जाओ।"
					},
					"emotion": "happy",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "…젠장! 여기서 끝낼 순 없어!",
						"english": "...Damn it! I can't end it here!",
						"japanese": "…ちくしょう！ここで終わらせるわけにはいかない！",
						"chinese": "…该死！不能就这么结束！",
						"french": "…Mince ! Je ne peux pas en finir ici !",
						"spanish": "...¡Maldita sea! ¡No puedo terminar aquí!",
						"vietnamese": "…Chết tiệt! Không thể kết thúc ở đây được!",
						"thai": "บ้าจริง! จบแค่นี้ไม่ได้หรอก!",
						"hindi": "...धत् तेरी! मैं इसे यहाँ खत्म नहीं कर सकता!"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "아직… 끝나지 않았어. 다시 일어설 기회는… 분명히 올 거야.",
						"english": "It's not over yet... The chance to rise again will surely come.",
						"japanese": "まだ…終わってない。再び立ち上がる機会は…必ず来る。",
						"chinese": "还没…结束。再次站起来的机会…一定会来的。",
						"french": "Ce n'est pas encore… fini. L'occasion de se relever… viendra sûrement.",
						"spanish": "Aún… no ha terminado. La oportunidad de levantarse de nuevo… seguramente llegará.",
						"vietnamese": "Chưa… kết thúc đâu. Cơ hội để đứng dậy một lần nữa… chắc chắn sẽ đến.",
						"thai": "ยัง...ไม่จบ โอกาสที่จะลุกขึ้นอีกครั้ง...จะต้องมาถึงแน่นอน",
						"hindi": "अभी... खत्म नहीं हुआ है। दोबारा खड़े होने का मौका... ज़रूर आएगा।"
					},
					"type": "speech",
					"emotion": "base"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"매서운 눈보라가 휘몰아치는 산맥.",
			"뾰족한 봉우리와 얼어붙은 길에 숨겨진 전설들.",
			"그 입구에서, 신비로운 안내자가 기다리고 있었다.",
			"그녀의 경고는 단순한 길이 아니었다. 모든 것이 얼음 아래 감춰져 있었다."
		],
		"english": [
			"A fierce blizzard rages in the mountain range.",
			"Legends hidden in jagged peaks and frozen paths.",
			"At its entrance, a mysterious guide awaited.",
			"Her warning wasn't just about the path. Everything was hidden beneath the ice."
		],
		"japanese": [
			"猛吹雪が荒れ狂う山脈。",
			"尖った峰々と凍てついた道に隠された伝説。",
			"その入り口で、神秘的な案内人が待っていた。",
			"彼女の警告はただの道ではなかった。すべてが氷の下に隠されていた。"
		],
		"chinese": [
			"暴风雪肆虐的山脉。",
			"隐藏在尖峰和冰冻道路中的传说。",
			"在入口处，一位神秘的向导正在等候。",
			"她的警告不只关于道路。一切都被冰雪隐藏着。"
		],
		"french": [
			"Une chaîne de montagnes sous une violente tempête de neige.",
			"Des légendes cachées dans les sommets acérés et les chemins gelés.",
			"À son entrée, un guide mystérieux attendait.",
			"Son avertissement ne concernait pas seulement le chemin. Tout était caché sous la glace."
		],
		"spanish": [
			"Una cordillera azotada por una feroz tormenta de nieve.",
			"Leyendas ocultas en picos afilados y caminos helados.",
			"En su entrada, una guía misteriosa esperaba.",
			"Su advertencia no era solo sobre el camino. Todo estaba oculto bajo el hielo."
		],
		"vietnamese": [
			"Dãy núi bị bão tuyết dữ dội càn quét.",
			"Những truyền thuyết ẩn mình trong các đỉnh núi sắc nhọn và con đường đóng băng.",
			"Tại lối vào, một người dẫn đường bí ẩn đang chờ đợi.",
			"Lời cảnh báo của cô ấy không chỉ về con đường. Mọi thứ đều bị che giấu dưới lớp băng."
		],
		"thai": [
			"เทือกเขาที่ถูกพายุหิมะโหมกระหน่ำอย่างรุนแรง",
			"ตำนานที่ซ่อนอยู่ในยอดเขาแหลมคมและเส้นทางที่เยือกแข็ง",
			"ที่ทางเข้า ผู้แนะนำลึกลับกำลังรออยู่",
			"คำเตือนของเธอไม่ใช่แค่เรื่องเส้นทาง ทุกสิ่งซ่อนอยู่ใต้น้ำแข็ง"
		],
		"hindi": [
			"एक बर्फीला तूफान से घिरी पर्वत श्रृंखला।",
			"नुकीली चोटियों और जमी हुई सड़कों में छिपी हुई कहानियाँ।",
			"उसके प्रवेश द्वार पर, एक रहस्यमय मार्गदर्शक प्रतीक्षा कर रहा था।",
			"उसकी चेतावनी केवल रास्ते के बारे में नहीं थी। सब कुछ बर्फ़ के नीचे छिपा हुआ था।"
		]
	}
} as const;
