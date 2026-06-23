export const scenario_snowy_frostwail_64_01 = {
	"scenario_id": "snowy_frostwail_64_01",
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
	"prologue": {
		"korean": [
			"영원히 얼어붙은 시간 속에 갇힌 혹독한 설원.",
			"희미한 북극광이 모든 풍경을 물들였다.",
			"이곳의 비극은 끊임없이 반복되고 있었다.",
			"나는 이 모든 미스터리의 진실을 파헤쳐야만 했다."
		],
		"english": [
			"A harsh snowfield, trapped in eternally frozen time.",
			"Faint aurora painted the entire landscape.",
			"The tragedy of this place repeated endlessly.",
			"I had to unearth the truth of all these mysteries."
		],
		"japanese": [
			"永遠に凍りついた時間に囚われた、過酷な雪原。",
			"かすかなオーロラが全ての景色を染め上げた。",
			"この地の悲劇は、絶え間なく繰り返されていた。",
			"私はこの全ての謎の真実を暴かねばならなかった。"
		],
		"chinese": [
			"严酷的雪原，被困在永恒冻结的时间里。",
			"微弱的极光染遍了整个风景。",
			"此地的悲剧不断重演。",
			"我必须揭示所有这些谜团的真相。"
		],
		"french": [
			"Une toundra rigoureuse, piégée dans un temps éternellement gelé.",
			"De faibles aurores boréales peignaient tout le paysage.",
			"La tragédie de ce lieu se répétait sans fin.",
			"Je devais déterrer la vérité de tous ces mystères."
		],
		"spanish": [
			"Un duro campo de nieve, atrapado en el tiempo eternamente congelado.",
			"Débiles auroras boreales pintaban todo el paisaje.",
			"La tragedia de este lugar se repetía sin cesar.",
			"Debía desenterrar la verdad de todos estos misterios."
		],
		"vietnamese": [
			"Một cánh đồng tuyết khắc nghiệt, bị mắc kẹt trong thời gian đóng băng vĩnh cửu.",
			"Cực quang mờ nhạt nhuộm màu toàn bộ phong cảnh.",
			"Bi kịch của nơi đây lặp đi lặp lại không ngừng.",
			"Tôi phải khám phá sự thật của tất cả những bí ẩn này."
		],
		"thai": [
			"ทุ่งหิมะอันโหดร้าย ถูกขังอยู่ในห้วงเวลาที่หยุดนิ่งชั่วนิรันดร์",
			"แสงเหนือสลัว ๆ แต้มแต่งทิวทัศน์ทั้งหมด",
			"โศกนาฏกรรมของสถานที่นี้เกิดขึ้นซ้ำแล้วซ้ำเล่า",
			"ข้าต้องเปิดเผยความจริงของความลึกลับทั้งหมดนี้"
		],
		"hindi": [
			"एक कठोर बर्फीला मैदान, जो शाश्वत जमे हुए समय में फँसा हुआ है।",
			"धुंधली उत्तरी रोशनी ने पूरे परिदृश्य को रंग दिया।",
			"इस जगह की त्रासदी अंतहीन रूप से दोहराई जा रही थी।",
			"मुझे इन सभी रहस्यों की सच्चाई को उजागर करना था।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "끝없이 펼쳐진 설원, 눈보라가 시야를 가렸다. 길을 잃은 지 오래였다.",
						"english": "An endless snowfield, a blizzard obscured my sight. I'd been lost for a long time.",
						"japanese": "果てしなく広がる雪原、吹雪が視界を遮った。道に迷って久しい。",
						"chinese": "一望无际的雪原，暴风雪遮蔽了视线。我迷失已久。",
						"french": "Une étendue de neige infinie, un blizzard obscurcissait ma vue. J'étais perdu depuis longtemps.",
						"spanish": "Un campo de nieve infinito, una ventisca oscurecía mi vista. Llevaba mucho tiempo perdido.",
						"vietnamese": "Cánh đồng tuyết vô tận, bão tuyết che khuất tầm nhìn. Tôi đã lạc lối từ lâu.",
						"thai": "ทุ่งหิมะอันกว้างใหญ่ พายุหิมะบดบังทัศนียภาพ ข้าหลงทางมานานแล้ว",
						"hindi": "एक अंतहीन बर्फीला मैदान, एक बर्फीला तूफ़ान मेरी दृष्टि को अस्पष्ट कर रहा था। मैं बहुत पहले ही खो गया था।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…대체 어디지.",
						"english": "...Where am I, exactly?",
						"japanese": "…一体、どこなんだ。",
						"chinese": "……这到底是什么地方。",
						"french": "...Où suis-je, au juste ?",
						"spanish": "...¿Dónde estoy, exactamente?",
						"vietnamese": "...Rốt cuộc đây là đâu?",
						"thai": "...นี่มันที่ไหนกันแน่",
						"hindi": "...मैं कहाँ हूँ, ठीक-ठीक?"
					}
				},
				{
					"spot": [
						4,
						3
					],
					"speaker": "eira",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "어디로 가야 할지 모르는 것 같군.",
						"english": "Seems you don't know where to go.",
						"japanese": "どこへ行けばいいのか、分からないようだな。",
						"chinese": "看来你不知道该去哪里。",
						"french": "On dirait que tu ne sais pas où aller.",
						"spanish": "Parece que no sabes adónde ir.",
						"vietnamese": "Có vẻ như ngươi không biết phải đi đâu.",
						"thai": "ดูเหมือนว่าเจ้าจะไม่รู้ว่าจะไปที่ไหน",
						"hindi": "लगता है तुम नहीं जानते कहाँ जाना है।"
					}
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "이 땅은 얼어붙었다. 모든 것은 멈춰 있고, 표면적인 질서만이 존재하지.",
						"english": "This land is frozen. Everything is still, only superficial order remains.",
						"japanese": "この地は凍りついた。全ては止まり、表面的な秩序だけが存在する。",
						"chinese": "这片土地冻结了。一切都静止了，只剩下表面的秩序。",
						"french": "Cette terre est gelée. Tout est immobile, seule l'ordre superficiel demeure.",
						"spanish": "Esta tierra está congelada. Todo está inmóvil, solo un orden superficial permanece.",
						"vietnamese": "Vùng đất này đã đóng băng. Mọi thứ đều bất động, chỉ còn lại trật tự bề ngoài.",
						"thai": "ดินแดนนี้ถูกแช่แข็ง ทุกสิ่งหยุดนิ่ง เหลือเพียงระเบียบที่ฉาบฉวย",
						"hindi": "यह भूमि जमी हुई है। सब कुछ स्थिर है, केवल सतही व्यवस्था ही बची है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "당신은… 누구지?",
						"english": "Who... are you?",
						"japanese": "あなたは…誰だ？",
						"chinese": "你是……谁？",
						"french": "Qui... êtes-vous ?",
						"spanish": "¿Quién... eres?",
						"vietnamese": "Ngươi... là ai?",
						"thai": "ท่าน...คือใคร",
						"hindi": "तुम... कौन हो?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "에이라. 이 세계의 기록자이자, 잊힌 것들을 기억하려는 자.",
						"english": "Eira. The chronicler of this world, and one who seeks to remember what's forgotten.",
						"japanese": "エイラ。この世界の記録者にして、忘れられたものを記憶しようとする者。",
						"chinese": "艾拉。这个世界的记录者，也是试图记住被遗忘之物的人。",
						"french": "Eira. La chroniqueuse de ce monde, et celle qui cherche à se souvenir de ce qui est oublié.",
						"spanish": "Eira. La cronista de este mundo, y quien busca recordar lo olvidado.",
						"vietnamese": "Eira. Người ghi chép của thế giới này, và là người cố gắng ghi nhớ những điều đã bị lãng quên.",
						"thai": "เอร่า ผู้บันทึกโลกนี้ และผู้ที่พยายามจดจำสิ่งที่ถูกลืม",
						"hindi": "ऐरा। इस दुनिया की इतिहासकार, और वह जो भूली हुई चीज़ों को याद करने की कोशिश करती है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "eira",
					"content": {
						"korean": "하지만 조심해. 이 얼어붙은 질서 아래, 모든 것은 반복될 뿐이니.",
						"english": "But be careful. Under this frozen order, all things merely repeat.",
						"japanese": "しかし、気をつけろ。この凍てついた秩序の下、全ては繰り返されるだけだ。",
						"chinese": "但要小心。在这冰封的秩序之下，一切都只是在重复。",
						"french": "Mais sois prudent. Sous cet ordre gelé, tout ne fait que se répéter.",
						"spanish": "Pero ten cuidado. Bajo este orden congelado, todo no hace más que repetirse.",
						"vietnamese": "Nhưng hãy cẩn thận. Dưới trật tự băng giá này, mọi thứ chỉ lặp lại mà thôi.",
						"thai": "แต่จงระวัง ภายใต้ระเบียบอันเยือกแข็งนี้ ทุกสิ่งล้วนเพียงแค่ซ้ำรอยเดิม",
						"hindi": "पर सावधान रहना। इस जमी हुई व्यवस्था के तहत, सब कुछ बस दोहराया जाता है。"
					}
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "거대한 고대 선박의 잔해가 얼어붙은 바다에 박혀 있었다. 시간의 흔적이 멈춘 듯했다.",
						"english": "The remains of a colossal ancient ship were embedded in the frozen sea. The passage of time seemed to have stopped.",
						"japanese": "巨大な古代船の残骸が凍てついた海に突き刺さっていた。時間の痕跡が止まったかのようだ。",
						"chinese": "巨大的古老船只残骸嵌在冰封的海水中。时间的痕迹似乎停滞了。",
						"french": "Les vestiges d'un colossal navire antique étaient encastrés dans la mer gelée. Le temps semblait s'être arrêté.",
						"spanish": "Los restos de un colosal barco antiguo estaban incrustados en el mar congelado. Las huellas del tiempo parecían haberse detenido.",
						"vietnamese": "Tàn tích của một con tàu cổ khổng lồ nằm sâu trong biển băng giá. Dấu vết thời gian dường như đã ngừng lại.",
						"thai": "ซากเรือโบราณขนาดมหึมาจมลึกอยู่ในทะเลเยือกแข็ง ราวกับร่องรอยแห่งกาลเวลาได้หยุดนิ่งไป",
						"hindi": "एक विशाल प्राचीन जहाज के अवशेष जमी हुई समुद्र में धंसे हुए थे। ऐसा लग रहा था मानो समय रुक गया हो।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "여기서… 노 젓는 소리가 들려.",
						"english": "I hear… the sound of oars here.",
						"japanese": "ここで…オールを漕ぐ音が聞こえる。",
						"chinese": "在这里…我听到了划桨声。",
						"french": "Ici… j'entends le bruit des rames.",
						"spanish": "Aquí… oigo el sonido de los remos.",
						"vietnamese": "Ở đây… tôi nghe thấy tiếng mái chèo.",
						"thai": "ที่นี่…ได้ยินเสียงไม้พาย",
						"hindi": "यहाँ… चप्पू चलाने की आवाज़ सुनाई दे रही है।"
					}
				},
				{
					"speaker": "eira",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "환청이 아니야. 저 배는 영원히 같은 시간을 반복하고 있지.",
						"english": "It's not a hallucination. That ship is repeating the same time, forever.",
						"japanese": "幻聴じゃない。あの船は永遠に同じ時間を繰り返しているんだ。",
						"chinese": "不是幻听。那艘船永远在重复着同一时间。",
						"french": "Ce n'est pas une hallucination. Ce navire répète le même instant, pour toujours.",
						"spanish": "No es una alucinación. Ese barco está repitiendo el mismo tiempo, para siempre.",
						"vietnamese": "Không phải ảo giác. Con tàu đó đang lặp lại cùng một khoảnh khắc, vĩnh viễn.",
						"thai": "ไม่ใช่มันไม่ใช่ภาพหลอน เรือลำนั้นกำลังวนซ้ำช่วงเวลาเดิมตลอดไป",
						"hindi": "यह मतिभ्रम नहीं है। वह जहाज हमेशा एक ही समय को दोहरा रहा है।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "시간이… 뒤틀렸다는 건가?",
						"english": "Is time… twisted?",
						"japanese": "時間が…歪んでいるのか？",
						"chinese": "时间…扭曲了吗？",
						"french": "Le temps est… déformé ?",
						"spanish": "¿El tiempo… se ha torcido?",
						"vietnamese": "Thời gian… bị vặn vẹo sao?",
						"thai": "เวลา…บิดเบี้ยวหรือเปล่า?",
						"hindi": "क्या समय… विकृत हो गया है?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "이곳의 시간은, 비극의 순간에 갇혀 있지. 모든 것은 결국 같은 종착점으로.",
						"english": "Time here is trapped in a moment of tragedy. Everything eventually leads to the same destination.",
						"japanese": "ここでの時間は、悲劇の瞬間に囚われている。全ては結局、同じ終着点へ。",
						"chinese": "这里的时间，被困在悲剧的瞬间。一切终将走向同一个终点。",
						"french": "Le temps ici est piégé dans un instant de tragédie. Tout mène finalement à la même destination.",
						"spanish": "El tiempo aquí está atrapado en un momento de tragedia. Todo, al final, conduce al mismo destino.",
						"vietnamese": "Thời gian ở đây bị kẹt trong khoảnh khắc bi kịch. Mọi thứ cuối cùng đều dẫn đến cùng một điểm kết thúc.",
						"thai": "เวลาที่นี่ถูกกักขังอยู่ในห้วงเวลาแห่งโศกนาฏกรรม ทุกสิ่งล้วนนำไปสู่จุดหมายปลายทางเดียวกันในที่สุด",
						"hindi": "यहाँ का समय, त्रासदी के क्षण में फंसा हुआ है। सब कुछ अंततः एक ही गंतव्य की ओर ले जाता है।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "….",
						"english": "....",
						"japanese": "…。",
						"chinese": "……",
						"french": "....",
						"spanish": "....",
						"vietnamese": "....",
						"thai": "....",
						"hindi": "...."
					},
					"type": "speech",
					"emotion": "sad"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "점점 더 깊은 설원으로 들어섰다. 모든 것이 차갑게 굳어 있었다.",
						"english": "We ventured deeper into the snowfields. Everything was rigidly frozen.",
						"japanese": "どんどん深い雪原へと入っていった。全てが冷たく硬く凍てついていた。",
						"chinese": "深入雪原。一切都冻结得冰冷僵硬。",
						"french": "Nous nous sommes aventurés plus profondément dans les champs de neige. Tout était figé et froid.",
						"spanish": "Nos adentramos más en los campos de nieve. Todo estaba rígidamente congelado.",
						"vietnamese": "Chúng ta tiến sâu hơn vào vùng tuyết. Mọi thứ đều đóng băng lạnh lẽo.",
						"thai": "เราเข้าสู่ทุ่งหิมะลึกขึ้นเรื่อยๆ ทุกสิ่งล้วนแข็งตัวอย่างเย็นชา",
						"hindi": "हम गहरे बर्फीले मैदानों में उतर गए। सब कुछ ठंड से अकड़ गया था।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이 혹독한 땅이… 날 어디로 이끄는 거지?",
						"english": "Where is this harsh land… leading me?",
						"japanese": "この過酷な土地は…私をどこへ導いている？",
						"chinese": "这片严酷的土地…将我引向何处？",
						"french": "Où cette terre inhospitalière… me mène-t-elle ?",
						"spanish": "¿Adónde me lleva… esta tierra tan dura?",
						"vietnamese": "Vùng đất khắc nghiệt này… đang dẫn tôi đi đâu?",
						"thai": "ดินแดนอันโหดร้ายนี้…กำลังนำฉันไปที่ไหน?",
						"hindi": "यह कठोर भूमि… मुझे कहाँ ले जा रही है?"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"spot": [
						2,
						3
					],
					"speaker": "eira"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "어쩌면, 아무것도 아닌 곳으로 이끌고 있을지도 몰라.",
						"english": "Perhaps it's leading me to nowhere at all.",
						"japanese": "もしかしたら、何もない場所へ導いているのかもしれない。",
						"chinese": "也许，它正将我引向虚无之地。",
						"french": "Peut-être que cela me mène vers le néant.",
						"spanish": "Quizás, me esté llevando a ninguna parte.",
						"vietnamese": "Có lẽ, nó đang dẫn tôi đến một nơi không là gì cả.",
						"thai": "บางที อาจจะนำพาไปสู่ที่ที่ไม่มีอะไรเลยก็ได้",
						"hindi": "शायद, यह मुझे कहीं नहीं ले जा रहा है।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "무슨 뜻이지?",
						"english": "What do you mean?",
						"japanese": "どういう意味だ？",
						"chinese": "什么意思？",
						"french": "Qu'est-ce que tu veux dire ?",
						"spanish": "¿Qué quieres decir?",
						"vietnamese": "Ý anh là gì?",
						"thai": "หมายความว่าอะไร?",
						"hindi": "क्या मतलब है?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "이곳에서 무언가를 얻으려 해도, 결국 모든 노력은 무의미해질 뿐이야.",
						"english": "Even if you try to gain something here, all your efforts will ultimately be meaningless.",
						"japanese": "ここで何かを得ようとしても、結局、全ての努力は無意味になるだけだ。",
						"chinese": "即使你试图在这里得到什么，最终所有努力都将是徒劳的。",
						"french": "Même si tu tentes d'obtenir quelque chose ici, tous tes efforts seront vains.",
						"spanish": "Aunque intentes conseguir algo aquí, todos tus esfuerzos serán en vano al final.",
						"vietnamese": "Dù có cố gắng giành lấy điều gì ở đây, cuối cùng mọi nỗ lực đều vô nghĩa.",
						"thai": "แม้ว่าคุณจะพยายามไขว่คว้าอะไรที่นี่ ท้ายที่สุดความพยายามทั้งหมดก็ไร้ความหมาย",
						"hindi": "अगर तुम यहाँ कुछ हासिल करने की कोशिश भी करते हो, तो अंत में तुम्हारे सारे प्रयास व्यर्थ ही होंगे।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "그래도 멈출 수 없어.",
						"english": "Yet, I cannot stop.",
						"japanese": "それでも、止まることはできない。",
						"chinese": "尽管如此，我无法停止。",
						"french": "Pourtant, je ne peux pas m'arrêter.",
						"spanish": "Aun así, no puedo parar.",
						"vietnamese": "Dù vậy, tôi không thể dừng lại.",
						"thai": "ถึงอย่างนั้น ฉันก็หยุดไม่ได้",
						"hindi": "फिर भी, मैं रुक नहीं सकता।"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "eira",
					"content": {
						"korean": "…그 고집이, 너를 더 깊은 비극으로 밀어 넣을지도 모르는데.",
						"english": "...That stubbornness might drag you deeper into tragedy.",
						"japanese": "…その頑固さが、お前をより深い悲劇へと突き落とすかもしれないのに。",
						"chinese": "……那份固执，或许会将你推向更深的悲剧。",
						"french": "...Cette obstination pourrait bien te pousser vers une tragédie encore plus profonde.",
						"spanish": "...Esa terquedad podría empujarte a una tragedia aún más profunda.",
						"vietnamese": "...Sự cố chấp đó, có thể sẽ đẩy ngươi vào bi kịch sâu hơn nữa.",
						"thai": "...ความดื้อรั้นนั้น อาจผลักดันเจ้าไปสู่โศกนาฏกรรมที่ลึกซึ้งกว่าเดิม",
						"hindi": "…शायद वही ज़िद तुम्हें और गहरी त्रासदी में धकेल दे।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "길고 긴 절벽 끝에 다다랐다. 돌아갈 길은 보이지 않았다.",
						"english": "I arrived at the edge of a vast cliff. There was no path to return.",
						"japanese": "長く険しい崖の果てにたどり着いた。戻る道は見えなかった。",
						"chinese": "抵达了漫长悬崖的尽头。回头的路已不可见。",
						"french": "J'ai atteint le bout d'une très longue falaise. Le chemin du retour était invisible.",
						"spanish": "Llegué al final de un acantilado largo y extenso. No se veía camino de regreso.",
						"vietnamese": "Tôi đã đến cuối vách đá dài thăm thẳm. Không thấy đường quay lại.",
						"thai": "มาถึงสุดปลายผาสูงชัน ไม่มีทางย้อนกลับ",
						"hindi": "मैं एक लंबी, लंबी चट्टान के सिरे पर पहुँच गया। वापसी का कोई रास्ता नहीं दिख रहा था।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "분명히… 본 것 같은데.",
						"english": "I could swear... I saw it.",
						"japanese": "確かに…見たような気がする。",
						"chinese": "我明明…好像见过。",
						"french": "J'ai clairement... l'impression de l'avoir vu.",
						"spanish": "Claramente... creo que lo vi.",
						"vietnamese": "Rõ ràng... hình như tôi đã thấy.",
						"thai": "ชัดเจนว่า... ฉันเห็นมันแล้ว",
						"hindi": "ज़रूर… मैंने देखा था।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"spot": [
						3,
						2
					],
					"speaker": "eira",
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "또 다른 길을 걸었던 자들의 그림자가 이곳에 맴돌고 있지.",
						"english": "The shadows of those who walked a different path still roam here.",
						"japanese": "また別の道を歩んだ者たちの影が、ここにさまよっている。",
						"chinese": "曾走过另一条路的人们的影子，正徘徊于此。",
						"french": "Les ombres de ceux qui ont emprunté un autre chemin planent ici.",
						"spanish": "Las sombras de quienes anduvieron por otro camino, merodean por aquí.",
						"vietnamese": "Bóng dáng những kẻ đã đi một con đường khác đang lảng vảng ở đây.",
						"thai": "เงาของผู้ที่เดินไปในอีกเส้นทางหนึ่งยังคงวนเวียนอยู่ที่นี่",
						"hindi": "उन लोगों की परछाइयाँ यहाँ मंडरा रही हैं जिन्होंने कोई और रास्ता अपनाया था।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "나와 같은… 누군가가 있었단 말인가?",
						"english": "Was there someone... just like me?",
						"japanese": "私と同じような…誰かがいたというのか？",
						"chinese": "有人…和我一样吗？",
						"french": "Quelqu'un comme moi... aurait-il existé ?",
						"spanish": "¿Había alguien... como yo?",
						"vietnamese": "Có ai đó... giống như tôi sao?",
						"thai": "มีใครบางคน... เหมือนฉันอย่างนั้นหรือ?",
						"hindi": "क्या मेरे जैसा… कोई और भी था?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "그들은 승리했지만, 결국 모든 것을 잃었어. 헛된 승리였지.",
						"english": "They triumphed, yet lost everything in the end. A victory in vain.",
						"japanese": "彼らは勝利したが、結局全てを失った。虚しい勝利だった。",
						"chinese": "他们胜利了，但最终失去了一切。那是一场徒劳的胜利。",
						"french": "Ils ont gagné, mais ont finalement tout perdu. Ce fut une victoire vaine.",
						"spanish": "Ellos ganaron, pero al final lo perdieron todo. Fue una victoria hueca.",
						"vietnamese": "Họ đã thắng, nhưng cuối cùng mất tất cả. Một chiến thắng vô nghĩa.",
						"thai": "พวกเขาได้รับชัยชนะ แต่ท้ายที่สุดก็สูญเสียทุกสิ่ง มันคือชัยชนะที่ว่างเปล่า",
						"hindi": "वे जीते, लेकिन अंत में सब कुछ खो दिया। वह एक खोखली जीत थी।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…그게 나라는 건가?",
						"english": "...Does that mean it's me?",
						"japanese": "…それが私だというのか？",
						"chinese": "……那是我吗？",
						"french": "...Est-ce que c'est moi ?",
						"spanish": "...¿Soy yo?",
						"vietnamese": "...Đó là tôi sao?",
						"thai": "...นั่นคือฉันหรือเปล่า?",
						"hindi": "...क्या वह मैं हूँ?"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "너 또한 이 길의 끝에서, 같은 죄책감에 시달리게 될까 두려울 뿐이야.",
						"english": "I only fear that you, too, will suffer the same guilt at the end of this path.",
						"japanese": "あなたもまた、この道の終わりで同じ罪悪感に苦しむことになるのではと、ただ恐れるばかりだ。",
						"chinese": "我只担心，你也会在这条路的尽头，饱受同样的罪恶感折磨。",
						"french": "Je crains seulement que toi aussi, tu ne sois tourmenté par la même culpabilité au bout de ce chemin.",
						"spanish": "Solo temo que tú también, al final de este camino, seas atormentado por la misma culpa.",
						"vietnamese": "Ta chỉ sợ rằng ngươi cũng sẽ phải chịu đựng sự dằn vặt của tội lỗi tương tự ở cuối con đường này.",
						"thai": "ฉันเพียงกลัวว่า ณ ปลายทางนี้ เธอเองก็จะถูกทรมานด้วยความรู้สึกผิดเช่นเดียวกัน",
						"hindi": "मुझे बस यह डर है कि तुम भी इस रास्ते के अंत में, उसी अपराधबोध से पीड़ित होगे।"
					},
					"emotion": "sad",
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "차가운 어둠 속, 거대한 그림자가 모습을 드러냈다. 알 수 없는 위압감이었다.",
						"english": "In the cold darkness, a colossal shadow emerged. An unknown, ominous presence.",
						"japanese": "冷たい闇の中、巨大な影が現れた。それは未知の威圧感だった。",
						"chinese": "在冰冷的黑暗中，一个巨大的身影显现。那是一种莫名的压迫感。",
						"french": "Dans l'obscurité froide, une ombre colossale apparut. Une présence intimidante et inconnue.",
						"spanish": "En la fría oscuridad, una sombra colosal emergió. Una presencia imponente e inexplicable.",
						"vietnamese": "Trong bóng tối lạnh lẽo, một bóng hình khổng lồ hiện ra. Một áp lực vô hình bao trùm.",
						"thai": "ในความมืดอันเย็นยะเยือก เงาขนาดมหึมาปรากฏขึ้น มันคือแรงกดดันที่ไม่อาจหยั่งรู้ได้",
						"hindi": "ठंडे अंधेरे में, एक विशाल छाया उभरी। यह एक अज्ञात, भयावह उपस्थिति थी।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "감히 여기까지 왔느냐. 네 호기심은 결국 너를 파멸로 이끌 것이다.",
						"english": "How dare you come this far? Your curiosity will ultimately lead you to ruin.",
						"japanese": "よくもここまで来たな。お前の好奇心は結局、お前を破滅へと導くだろう。",
						"chinese": "竟敢来到此处？你的好奇心终将把你引向毁灭。",
						"french": "Comment oses-tu venir si loin ? Ta curiosité te mènera finalement à ta perte.",
						"spanish": "¿Cómo te atreves a llegar tan lejos? Tu curiosidad te llevará a la ruina.",
						"vietnamese": "Ngươi dám đến tận đây sao? Sự tò mò của ngươi cuối cùng sẽ dẫn ngươi đến sự diệt vong.",
						"thai": "บังอาจมาถึงที่นี่หรือ? ความอยากรู้อยากเห็นของเจ้าจะนำพาเจ้าไปสู่หายนะในที่สุด",
						"hindi": "इतनी दूर आने की हिम्मत कैसे हुई? तुम्हारी जिज्ञासा अंततः तुम्हें विनाश की ओर ले जाएगी।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "물러서지 않아. 진실을 밝혀낼 때까지.",
						"english": "I won't back down. Not until I uncover the truth.",
						"japanese": "退かない。真実を明らかにするまで。",
						"chinese": "我不会退缩。直到揭示真相为止。",
						"french": "Je ne reculerai pas. Pas avant d'avoir découvert la vérité.",
						"spanish": "No me echaré atrás. No hasta que revele la verdad.",
						"vietnamese": "Ta sẽ không lùi bước. Cho đến khi sự thật được phơi bày.",
						"thai": "ข้าจะไม่ถอย จนกว่าจะเปิดเผยความจริง",
						"hindi": "मैं पीछे नहीं हटूंगा। जब तक मैं सच का पता नहीं लगा लेता।"
					}
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 자. 이것은 끝이 아니야. 그저… 반복될 뿐.",
						"english": "Foolish one. This isn't the end. It merely… repeats.",
						"japanese": "愚か者め。これは終わりではない。ただ…繰り返されるだけだ。",
						"chinese": "愚蠢的家伙。这并非结局。它只会……不断重复。",
						"french": "Idiot. Ce n'est pas la fin. Ça ne fait que… se répéter.",
						"spanish": "Estúpido. Este no es el final. Simplemente… se repite.",
						"vietnamese": "Kẻ ngốc. Đây không phải là kết thúc. Nó chỉ… lặp lại mà thôi.",
						"thai": "คนโง่ นี่ไม่ใช่จุดจบ มันเป็นเพียง… การซ้ำรอยเท่านั้น",
						"hindi": "मूर्ख। यह अंत नहीं है। यह बस… दोहराया जाएगा।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "….",
						"english": "...",
						"japanese": "...",
						"chinese": "...",
						"french": "...",
						"spanish": "...",
						"vietnamese": "...",
						"thai": "...",
						"hindi": "..."
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "eira",
					"spot": [
						4,
						3
					]
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "결국… 같은 길을 가는구나. 모든 것은 되풀이될 뿐.",
						"english": "So… you walk the same path after all. Everything merely repeats.",
						"japanese": "結局…同じ道を辿るのか。全ては繰り返されるだけだ。",
						"chinese": "最终…你还是走了同样的路。一切都只是重复。",
						"french": "Finalement… tu suis le même chemin. Tout ne fait que se répéter.",
						"spanish": "Al final… sigues el mismo camino. Todo simplemente se repite.",
						"vietnamese": "Cuối cùng… ngươi cũng đi trên con đường tương tự. Mọi thứ chỉ là sự lặp lại.",
						"thai": "ท้ายที่สุด… เจ้าก็เดินซ้ำรอยเดิม ทุกสิ่งล้วนแค่ย้อนรอย",
						"hindi": "आखिरकार… तुम वही रास्ता चल रहे हो। सब कुछ बस दोहराता है।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "차가운 바람이 모든 것을 휩쓸었다. 또 다른 여정의 시작이었다.",
						"english": "A cold wind swept through everything. It was the beginning of another journey.",
						"japanese": "冷たい風が全てを吹き荒れた。それはまた別の旅の始まりだった。",
						"chinese": "一阵寒风席卷了一切。这是另一段旅程的开始。",
						"french": "Un vent froid balaya tout. C'était le début d'un autre voyage.",
						"spanish": "Un viento frío lo barrió todo. Era el comienzo de otro viaje.",
						"vietnamese": "Một cơn gió lạnh cuốn qua mọi thứ. Đó là khởi đầu của một hành trình khác.",
						"thai": "ลมหนาวพัดกวาดทุกสิ่ง นี่คือการเริ่มต้นของการเดินทางครั้งใหม่",
						"hindi": "एक ठंडी हवा ने सब कुछ बहा दिया। यह एक और यात्रा की शुरुआत थी।"
					}
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "하찮은 저항. 너의 의지도 결국 이 얼어붙은 땅에 갇히게 될 것이다.",
						"english": "Futile resistance. Your will, too, will ultimately be trapped in this frozen land.",
						"japanese": "取るに足らない抵抗。お前の意志もまた、結局この凍てついた地に囚われるだろう。",
						"chinese": "微不足道的抵抗。你的意志最终也将被困在这片冰封的土地上。",
						"french": "Résistance futile. Ta volonté aussi sera finalement piégée dans cette terre gelée.",
						"spanish": "Resistencia inútil. Tu voluntad también quedará atrapada en esta tierra helada.",
						"vietnamese": "Sự phản kháng vô nghĩa. Ý chí của ngươi cuối cùng cũng sẽ bị giam cầm trong vùng đất băng giá này.",
						"thai": "การต่อต้านที่ไร้ค่า เจตจำนงของเจ้าเองก็จะถูกจองจำในดินแดนน้ำแข็งแห่งนี้ในที่สุด",
						"hindi": "तुच्छ प्रतिरोध। तुम्हारी इच्छा भी अंततः इस जमी हुई भूमि में फंस जाएगी।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "젠장… 아직 끝나지 않았어.",
						"english": "Damn it… It's not over yet.",
						"japanese": "くそ…まだ終わってない。",
						"chinese": "该死…还没结束。",
						"french": "Maudits… Ce n'est pas encore fini.",
						"spanish": "Maldita sea… Esto no ha terminado aún.",
						"vietnamese": "Khốn kiếp… Vẫn chưa kết thúc đâu.",
						"thai": "ให้ตายสิ… ยังไม่จบหรอก",
						"hindi": "लानत है… यह अभी खत्म नहीं हुआ है।"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "eira",
					"spot": [
						4,
						3
					],
					"type": "direction",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "이것이 너의 운명. 벗어날 수 없는 굴레.",
						"english": "This is your destiny. An inescapable loop.",
						"japanese": "これが運命。逃れられぬ枷。",
						"chinese": "这是你的命运。无法挣脱的桎梏。",
						"french": "C'est ton destin. Un joug inévitable.",
						"spanish": "Este es tu destino. Un yugo ineludible.",
						"vietnamese": "Đây là vận mệnh của ngươi. Một vòng luẩn quẩn không lối thoát.",
						"thai": "นี่คือโชคชะตาเจ้า วงเวียนมิอาจหลีกหนี",
						"hindi": "यही तुम्हारी नियति है। एक अटूट बंधन।"
					}
				}
			]
		}
	]
} as const;
