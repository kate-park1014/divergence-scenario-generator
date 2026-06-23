export const scenario_desert_obsidianoath_13_03 = {
	"scenario_id": "desert_obsidianoath_13_03",
	"order": 3,
	"act": "rising",
	"theme": "desert",
	"actors": {
		"ferro": {
			"id": "mon_5c70c6fb-4f52-4d23-99f0-5feaf177dd7d",
			"name": {
				"korean": "페로",
				"english": "Ferro",
				"japanese": "フェロ",
				"chinese": "费罗",
				"french": "Ferro",
				"spanish": "Ferro",
				"vietnamese": "Ferro",
				"thai": "เฟอร์โร",
				"hindi": "फेरो"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a3074391-6f80-4537-3ad2-d4347b9d5500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a3c6cecf-f0c6-42f7-cda1-ddf11348ad00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "사막의 열기가 아지랑이처럼 피어올랐다. 흐릿한 시야 속에 무언가 움직였다.",
						"english": "The desert heat shimmered like a mirage. Something moved in my blurred vision.",
						"japanese": "砂漠の熱気が陽炎のように立ち昇った。霞む視界の中に何かが動いた。",
						"chinese": "沙漠的热气如海市蜃楼般升腾。模糊的视线中，有什么东西在移动。",
						"french": "La chaleur du désert montait comme un mirage. Quelque chose bougeait dans ma vision trouble.",
						"spanish": "El calor del desierto se alzaba como un espejismo. Algo se movió en mi visión borrosa.",
						"vietnamese": "Hơi nóng sa mạc bốc lên như ảo ảnh. Có gì đó chuyển động trong tầm nhìn mờ ảo.",
						"thai": "ความร้อนระอุของทะเลทรายระอุขึ้นราวกับภาพลวงตา บางสิ่งเคลื่อนไหวในสายตาที่พร่ามัว",
						"hindi": "रेगिस्तान की गर्मी मृगतृष्णा की तरह उठ रही थी। मेरी धुंधली दृष्टि में कुछ हिला।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "저건… 사람인가?",
						"english": "Is that… a person?",
						"japanese": "あれは…人なのか？",
						"chinese": "那是…人吗？",
						"french": "C'est… une personne ?",
						"spanish": "¿Es eso… una persona?",
						"vietnamese": "Đó… là người sao?",
						"thai": "นั่น… คือคนเหรอ?",
						"hindi": "वह… एक इंसान है?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"action": "enter",
					"speaker": "ferro",
					"duration_ms": 500,
					"spot": [
						5,
						2
					],
					"type": "direction"
				},
				{
					"speaker": "ferro",
					"content": {
						"korean": "…아니… 넌… 또 누구야. 환영… 아니지?",
						"english": "...No... who are you? Not an illusion... are you?",
						"japanese": "…いや…お前は…また誰だ。幻影…じゃないよな？",
						"chinese": "…不…你…又是谁。幻影…不是吧？",
						"french": "...Non... qui es-tu encore ? Pas une illusion... n'est-ce pas ?",
						"spanish": "...No... ¿quién eres tú? No eres una ilusión... ¿verdad?",
						"vietnamese": "...Không... ngươi... lại là ai. Không phải ảo ảnh... đúng không?",
						"thai": "…ไม่… นาย… เป็นใครอีก? ไม่ใช่ภาพลวงตา… ใช่ไหม?",
						"hindi": "...नहीं... तुम... कौन हो फिर? भ्रम... नहीं हो, है ना?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "당신은 페로? 저희는 환영이 아닙니다.",
						"english": "Are you Pero? We are not illusions.",
						"japanese": "あなたはペロ？私たちは幻影ではありません。",
						"chinese": "你是佩罗吗？我们不是幻象。",
						"french": "Vous êtes Pero ? Nous ne sommes pas des illusions.",
						"spanish": "¿Eres Pero? No somos ilusiones.",
						"vietnamese": "Ngài là Pero? Chúng tôi không phải ảo ảnh.",
						"thai": "คุณคือเปโร? พวกเราไม่ใช่ภาพลวงตา",
						"hindi": "क्या तुम पेरो हो? हम भ्रम नहीं हैं।"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "ferro",
					"content": {
						"korean": "환영… 다들 그렇게 말했어. 그러다 사라졌지.",
						"english": "Illusions... everyone said that. Then they vanished.",
						"japanese": "幻影…みんなそう言った。そして消えた。",
						"chinese": "幻象…大家都这么说。然后就消失了。",
						"french": "Illusions... tout le monde a dit ça. Puis ils ont disparu.",
						"spanish": "Ilusiones... todos decían eso. Luego desaparecieron.",
						"vietnamese": "Ảo ảnh... mọi người đều nói vậy. Rồi họ biến mất.",
						"thai": "ภาพลวงตา… ทุกคนพูดแบบนั้น แล้วพวกเขาก็หายไป",
						"hindi": "भ्रम... सबने यही कहा था। फिर वे गायब हो गए।"
					},
					"emotion": "sad",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"speaker": "ferro",
					"duration_ms": 500,
					"spot": [
						5,
						2
					],
					"type": "direction"
				},
				{
					"content": {
						"korean": "여기는… 다들 그리움에 묶여 있어. 떠나지 못해.",
						"english": "Here... everyone is bound by longing. Unable to leave.",
						"japanese": "ここは…みんな郷愁に縛られている。去ることができない。",
						"chinese": "这里…大家都被思念束缚着。无法离开。",
						"french": "Ici... tout le monde est lié par le désir. Incapable de partir.",
						"spanish": "Aquí... todos están atados por la nostalgia. Incapaces de irse.",
						"vietnamese": "Ở đây... mọi người đều bị nỗi nhớ níu giữ. Không thể rời đi.",
						"thai": "ที่นี่… ทุกคนถูกผูกมัดด้วยความโหยหา ไม่อาจจากไปได้",
						"hindi": "यहाँ... हर कोई लालसा से बँधा है। छोड़ नहीं सकता।"
					},
					"speaker": "ferro",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "그리움? 망령들 말입니까?",
						"english": "Longing? Do you mean the specters?",
						"japanese": "郷愁？亡霊のことですか？",
						"chinese": "思念？您是指那些幽灵吗？",
						"french": "Nostalgie ? Vous parlez des spectres ?",
						"spanish": "¿Anhelo? ¿Se refiere a los espectros?",
						"vietnamese": "Nỗi nhớ? Ý ngài là các vong linh?",
						"thai": "ความคิดถึง? หมายถึงวิญญาณพวกนั้นหรือเปล่า?",
						"hindi": "तरस? क्या आपका मतलब आत्माओं से है?"
					}
				},
				{
					"content": {
						"korean": "망령… 그래, 망령… 잊을 수 없는 것들. 보고 싶은 것들. 그게 환영이 되는 거야.",
						"english": "Specters... Yes, specters... Things you can't forget. Things you want to see. Those become illusions.",
						"japanese": "亡霊… そう、亡霊… 忘れられないもの。会いたいもの。それが幻になるんだ。",
						"chinese": "幽灵……对，幽灵……那些无法忘怀的事物。那些想见的事物。它们就成了幻影。",
						"french": "Spectres... Oui, des spectres... Des choses inoubliables. Des choses que l'on veut revoir. Elles deviennent des illusions.",
						"spanish": "Espectros... Sí, espectros... Cosas que no puedes olvidar. Cosas que deseas ver. Eso es lo que se convierte en una ilusión.",
						"vietnamese": "Vong linh… Đúng vậy, vong linh… Những thứ không thể quên. Những thứ muốn gặp. Đó chính là ảo ảnh.",
						"thai": "วิญญาณ... ใช่, วิญญาณ... สิ่งที่ไม่อาจลืม สิ่งที่อยากเห็น สิ่งเหล่านั้นกลายเป็นภาพลวงตา",
						"hindi": "आत्माएँ... हाँ, आत्माएँ... वो चीज़ें जिन्हें तुम भूल नहीं सकते। वो चीज़ें जिन्हें तुम देखना चाहते हो। वही भ्रम बन जाते हैं।"
					},
					"speaker": "ferro",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그래서 당신도 여기서 떠나지 못하는 겁니까?",
						"english": "So, you can't leave this place either?",
						"japanese": "だからあなたもここを離れられないのですか？",
						"chinese": "所以，您也无法离开这里吗？",
						"french": "Alors, vous ne pouvez pas non plus quitter cet endroit ?",
						"spanish": "¿Así que usted tampoco puede irse de aquí?",
						"vietnamese": "Vậy nên, ngài cũng không thể rời khỏi đây sao?",
						"thai": "งั้นคุณก็ไปจากที่นี่ไม่ได้เหมือนกันใช่ไหม?",
						"hindi": "तो, क्या आप भी यहाँ से नहीं जा सकते?"
					},
					"speaker": "character_1"
				},
				{
					"speaker": "ferro",
					"content": {
						"korean": "나도… 누군가를… 잃었어.",
						"english": "I... lost... someone too.",
						"japanese": "私も… 誰かを… 失ったんだ。",
						"chinese": "我也……失去过……某个人。",
						"french": "Moi aussi… j'ai… perdu quelqu'un.",
						"spanish": "Yo también... perdí... a alguien.",
						"vietnamese": "Tôi cũng… đã mất… một ai đó.",
						"thai": "ฉันก็... สูญเสีย... ใครบางคนไปเหมือนกัน",
						"hindi": "मैंने भी... किसी को... खोया है।"
					},
					"emotion": "sad",
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "ferro",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						5,
						2
					]
				},
				{
					"content": {
						"korean": "바람… 소리가… 들려?",
						"english": "Do you hear... the wind... sound?",
						"japanese": "風… の音が… 聞こえる？",
						"chinese": "听见……风……的声音了吗？",
						"french": "Entends-tu… le son… du vent ?",
						"spanish": "¿Oyes... el sonido... del viento?",
						"vietnamese": "Anh có nghe thấy… tiếng… gió không?",
						"thai": "ได้ยิน... เสียงลม... ไหม?",
						"hindi": "क्या तुम्हें... हवा... की आवाज़ सुनाई दे रही है?"
					},
					"speaker": "ferro",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "단순한 모래바람 아닌가요?",
						"english": "Isn't it just a simple sandstorm?",
						"japanese": "ただの砂嵐じゃないんですか？",
						"chinese": "这不只是普通的沙尘暴吗？",
						"french": "N'est-ce pas juste une simple tempête de sable ?",
						"spanish": "¿No es solo una simple tormenta de arena?",
						"vietnamese": "Chẳng phải chỉ là bão cát bình thường thôi sao?",
						"thai": "ไม่ใช่แค่พายุทรายธรรมดาหรอกเหรอ?",
						"hindi": "क्या यह सिर्फ एक सामान्य रेत का तूफ़ान नहीं है?"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "ferro",
					"content": {
						"korean": "아냐… 저건… 슬픈 노랫말이야.",
						"english": "No... That's... a sad melody.",
						"japanese": "違う… あれは… 悲しい歌声だ。",
						"chinese": "不……那……是悲伤的歌谣。",
						"french": "Non… C'est… une triste mélodie.",
						"spanish": "No... Esa... es una melodía triste.",
						"vietnamese": "Không… Đó là… một khúc ca buồn.",
						"thai": "ไม่ใช่... นั่นมัน... บทเพลงที่โศกเศร้า",
						"hindi": "नहीं... वह... एक दुखद धुन है।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "옛날부터… 계속 들렸어.",
						"english": "It's been heard... since long ago.",
						"japanese": "昔から… ずっと聞こえていたんだ。",
						"chinese": "从很久以前……就一直能听到。",
						"french": "Ça se fait entendre… depuis longtemps.",
						"spanish": "Se ha oído... desde hace mucho tiempo.",
						"vietnamese": "Nó đã được nghe thấy… từ rất lâu rồi.",
						"thai": "ได้ยินมา... ตั้งแต่สมัยก่อน",
						"hindi": "यह... बहुत पहले से... सुनाई दे रहा है।"
					},
					"speaker": "ferro"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "사막의 바람이 흐느낌처럼 느껴졌다. 귀를 기울이자 알 수 없는 노랫말이 섞여 들려오는 듯했다.",
						"english": "The desert wind felt like a sob. As I listened closely, an unknown melody seemed to mix in.",
						"japanese": "砂漠の風はすすり泣きのように感じられた。耳を傾けると、得体の知れない歌声が混じって聞こえるようだった。",
						"chinese": "沙漠的风像抽泣一般。仔细倾听，仿佛有不知名的歌谣混杂其中。",
						"french": "Le vent du désert résonnait comme un sanglot. En tendant l'oreille, une mélodie inconnue semblait se mêler à lui.",
						"spanish": "El viento del desierto se sentía como un sollozo. Al escuchar atentamente, una melodía desconocida parecía mezclarse.",
						"vietnamese": "Gió sa mạc như tiếng nức nở. Khi lắng nghe kỹ, dường như có một giai điệu không rõ ràng hòa lẫn vào.",
						"thai": "ลมทะเลทรายให้ความรู้สึกเหมือนเสียงสะอื้น เมื่อตั้งใจฟัง เหมือนมีบทเพลงที่ไม่รู้จักปะปนเข้ามา",
						"hindi": "रेगिस्तान की हवा सिसकियों जैसी महसूस हुई। जैसे ही मैंने ध्यान से सुना, एक अज्ञात धुन उसमें घुलती हुई प्रतीत हुई।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_2",
					"content": {
						"korean": "망령들의 속삭임인가…?",
						"english": "Is it the whispers of specters...?",
						"japanese": "亡霊たちの囁きなのか…？",
						"chinese": "难道是幽灵的低语吗……？",
						"french": "Est-ce le murmure des spectres… ?",
						"spanish": "¿Son los susurros de los espectros...?",
						"vietnamese": "Có phải là tiếng thì thầm của vong linh không…?",
						"thai": "หรือว่าเป็นเสียงกระซิบของวิญญาณ...?",
						"hindi": "क्या यह आत्माओं की फुसफुसाहट है...?"
					}
				},
				{
					"content": {
						"korean": "그들은… 계속 찾아 헤매고 있어. 뭔가를… 잃어버린 채로.",
						"english": "They… keep searching, wandering. Something… lost.",
						"japanese": "彼らは…探し続けている。何かを…失ったまま。",
						"chinese": "他们…一直在寻找，徘徊。仿佛…失去了什么。",
						"french": "Ils… continuent de chercher, d'errer. Quelque chose… a été perdu.",
						"spanish": "Ellos… siguen buscando, vagando. Algo… perdido.",
						"vietnamese": "Họ… cứ tìm kiếm, lang thang mãi. Như thể… đã mất đi thứ gì đó.",
						"thai": "พวกเขา…ยังคงตามหา พเนจรไปเรื่อยๆ ราวกับว่า…บางสิ่งหายไป",
						"hindi": "वे… लगातार ढूँढ रहे हैं, भटक रहे हैं। कुछ… खोया हुआ।"
					},
					"speaker": "ferro",
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "ferro",
					"spot": [
						5,
						2
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "ferro",
					"content": {
						"korean": "더 이상 가면 안 돼. 저 환영들이… 널 붙잡을 거야.",
						"english": "Don't go any further. Those illusions… will ensnare you.",
						"japanese": "これ以上は進むな。あの幻影が…お前を捕らえるだろう。",
						"chinese": "别再往前了。那些幻象…会困住你。",
						"french": "N'avance pas plus. Ces illusions… t'attraperont.",
						"spanish": "No vayas más lejos. Esas ilusiones… te atraparán.",
						"vietnamese": "Đừng đi xa hơn nữa. Những ảo ảnh đó… sẽ giam cầm ngươi.",
						"thai": "อย่าไปไกลกว่านี้เลย ภาพลวงตาเหล่านั้น…จะกักขังเจ้าไว้",
						"hindi": "और आगे मत जाओ। वे भ्रम… तुम्हें फँसा लेंगे।"
					}
				},
				{
					"content": {
						"korean": "저희는 진실을 찾아야 합니다.",
						"english": "We must find the truth.",
						"japanese": "私たちは真実を見つけなければなりません。",
						"chinese": "我们必须找到真相。",
						"french": "Nous devons trouver la vérité.",
						"spanish": "Debemos encontrar la verdad.",
						"vietnamese": "Chúng tôi phải tìm ra sự thật.",
						"thai": "เราต้องค้นหาความจริง",
						"hindi": "हमें सच्चाई का पता लगाना होगा।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "ferro",
					"content": {
						"korean": "진실? 진실이… 널 더 미치게 할 수도 있어.",
						"english": "Truth? The truth… might drive you madder.",
						"japanese": "真実？真実は…お前をさらに狂わせるかもしれない。",
						"chinese": "真相？真相…可能会让你更加疯狂。",
						"french": "La vérité ? La vérité… pourrait te rendre encore plus fou.",
						"spanish": "¿Verdad? La verdad… podría volverte más loco.",
						"vietnamese": "Sự thật ư? Sự thật… có thể khiến ngươi điên loạn hơn đấy.",
						"thai": "ความจริงรึ? ความจริง…อาจจะทำให้เจ้าคลุ้มคลั่งยิ่งกว่าเดิม",
						"hindi": "सच? सच… तुम्हें और भी पागल कर सकता है।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "황량한 사막의 저편, 기적처럼 푸른 꽃 한 송이가 희미하게 빛나고 있었다. 죽음의 땅에서 홀로 피어난 생명이었다.",
						"english": "Beyond the desolate desert, a single blue flower glowed faintly, a miracle. Life blooming alone in a land of death.",
						"japanese": "荒涼たる砂漠の向こう、奇跡のように青い花が一輪、かすかに輝いていた。死の地で独り咲いた命だった。",
						"chinese": "在荒凉的沙漠彼端，一朵奇迹般的蓝色花朵，正微弱地发光。那是死寂之地中，独自绽放的生命。",
						"french": "Au-delà du désert désolé, une fleur bleue unique brillait faiblement, un miracle. Une vie éclose seule dans une terre de mort.",
						"spanish": "Más allá del desierto desolado, una única flor azul brillaba tenuemente, un milagro. Una vida floreciendo sola en una tierra de muerte.",
						"vietnamese": "Phía bên kia sa mạc hoang vắng, một đóa hoa xanh kỳ diệu đang tỏa sáng mờ nhạt. Một sự sống duy nhất nở rộ trên vùng đất chết.",
						"thai": "เหนือผืนทะเลทรายที่รกร้าง ดอกไม้สีน้ำเงินดอกหนึ่งเรืองรองอย่างริบหรี่ราวปาฏิหาริย์ เป็นชีวิตที่ผลิบานเพียงลำพังในดินแดนแห่งความตาย",
						"hindi": "उजाड़ रेगिस्तान के पार, एक नीले रंग का फूल चमत्कार की तरह मंद-मंद चमक रहा था। मृत्यु की भूमि में अकेला खिला हुआ जीवन।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "저 꽃은…",
						"english": "That flower…",
						"japanese": "あの花は…",
						"chinese": "那朵花…",
						"french": "Cette fleur…",
						"spanish": "Esa flor…",
						"vietnamese": "Bông hoa đó…",
						"thai": "ดอกไม้นั่น…",
						"hindi": "वह फूल…"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "ferro",
					"content": {
						"korean": "…아름답지. 하지만… 다가가지 마. 더 깊은 환영으로 끌려갈 거야.",
						"english": "…Beautiful, isn't it? But… don't go near it. You'll be drawn into a deeper illusion.",
						"japanese": "…美しいだろう。だが…近づくな。より深い幻影へと引きずり込まれるぞ。",
						"chinese": "…很美，对吧。但是…别靠近。你会陷入更深的幻象。",
						"french": "…Belle, n'est-ce pas ? Mais… ne t'approche pas. Tu seras entraîné dans une illusion plus profonde.",
						"spanish": "…Hermosa, ¿verdad? Pero… no te acerques. Serás arrastrado a una ilusión más profunda.",
						"vietnamese": "…Đẹp lắm phải không? Nhưng… đừng lại gần. Ngươi sẽ bị kéo vào một ảo ảnh sâu sắc hơn đấy.",
						"thai": "…สวยงามใช่ไหมล่ะ? แต่…อย่าเข้าไปใกล้ เจ้าจะถูกดึงเข้าไปในภาพลวงตาที่ลึกซึ้งกว่าเดิม",
						"hindi": "…सुंदर है। लेकिन… पास मत जाओ। तुम्हें एक गहरे भ्रम में खींच लिया जाएगा।"
					},
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"content": {
						"korean": "어리석은 인간들… 영원히 이 환영 속에서 헤매어라!",
						"english": "Foolish mortals... wander in this illusion forever!",
						"japanese": "愚かな人間どもめ…永遠にこの幻影の中を彷徨え！",
						"chinese": "愚蠢的人类…永远在这幻象中徘徊吧！",
						"french": "Stupides mortels… errez pour toujours dans cette illusion !",
						"spanish": "¡Mortales necios… vaguen por siempre en esta ilusión!",
						"vietnamese": "Loài người ngu ngốc… hãy mãi mãi lạc lối trong ảo ảnh này đi!",
						"thai": "มนุษย์ผู้โง่เขลา... จงหลงทางในภาพลวงตานี้ตลอดไป!",
						"hindi": "मूर्ख नश्वर… इस भ्रम में हमेशा भटकते रहो!"
					},
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "아직… 포기할 수 없어…!",
						"english": "I can't... give up yet...!",
						"japanese": "まだ…諦められない…！",
						"chinese": "还…不能放弃…！",
						"french": "Je ne peux pas… abandonner encore… !",
						"spanish": "¡No puedo… rendirme todavía…!",
						"vietnamese": "Vẫn… không thể bỏ cuộc…!",
						"thai": "ยัง... ยอมแพ้ไม่ได้...!",
						"hindi": "अभी… हार नहीं मान सकता…!"
					}
				},
				{
					"duration_ms": 500,
					"spot": [
						5,
						2
					],
					"type": "direction",
					"action": "enter",
					"speaker": "ferro"
				},
				{
					"speaker": "ferro",
					"content": {
						"korean": "저것 봐… 환영이… 더 강해지고 있어…",
						"english": "Look... the illusion... it's getting stronger...",
						"japanese": "あれを見ろ…幻影が…もっと強くなっている…",
						"chinese": "看啊…幻象…变得更强了…",
						"french": "Regardez… l'illusion… elle devient plus forte…",
						"spanish": "Mira… la ilusión… se está haciendo más fuerte…",
						"vietnamese": "Nhìn kìa… ảo ảnh… đang mạnh hơn…",
						"thai": "ดูนั่นสิ... ภาพลวงตา... มันแข็งแกร่งขึ้น...",
						"hindi": "देखो… भ्रम… और मज़बूत हो रहा है…"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"action": "exit",
					"speaker": "ferro",
					"type": "direction",
					"duration_ms": 400,
					"direction": "down"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "여기까지 온 어리석은 자여… 이 사막의 고통을 맛보아라.",
						"english": "Fool who has come this far… taste the agony of this desert.",
						"japanese": "ここまで来た愚か者よ…この砂漠の苦痛を味わえ。",
						"chinese": "走到这里的愚蠢之人啊…尝尝这沙漠的痛苦吧。",
						"french": "Fou qui est venu jusqu'ici… goûte l'agonie de ce désert.",
						"spanish": "Necio que has llegado hasta aquí… prueba la agonía de este desierto.",
						"vietnamese": "Kẻ ngốc đã đến được đây… hãy nếm trải nỗi thống khổ của sa mạc này.",
						"thai": "เจ้าคนโง่ที่มาถึงนี่ได้…จงลิ้มรสความเจ็บปวดของทะเลทรายนี้ซะ",
						"hindi": "हे मूर्ख जो यहाँ तक आया… इस रेगिस्तान की पीड़ा का स्वाद चख।"
					},
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "당신이 이 환영들을 만들어낸 겁니까?",
						"english": "Did you create these illusions?",
						"japanese": "あなたがこの幻影を作り出したのですか？",
						"chinese": "是你制造了这些幻象吗？",
						"french": "C'est vous qui avez créé ces illusions ?",
						"spanish": "¿Creaste estas ilusiones?",
						"vietnamese": "Ngươi đã tạo ra những ảo ảnh này sao?",
						"thai": "ท่านเป็นผู้สร้างภาพลวงตาเหล่านี้ขึ้นมาหรือ?",
						"hindi": "क्या तुमने ये भ्रम बनाए हैं?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "나는… 그저… 이 모든 그리움의 파편들일 뿐. 너희도 곧 알게 될 것이다.",
						"english": "I am… merely… fragments of all this longing. You too, will soon know.",
						"japanese": "私は…ただ…このすべての郷愁の破片に過ぎない。お前たちもやがて知ることになるだろう。",
						"chinese": "我…只不过是…所有这些思念的碎片罢了。你们也很快就会明白的。",
						"french": "Je ne suis… que… des fragments de toute cette nostalgie. Vous aussi, vous le saurez bientôt.",
						"spanish": "Yo soy… solo… fragmentos de toda esta añoranza. Vosotros también, pronto lo sabréis.",
						"vietnamese": "Ta… chỉ là… những mảnh vỡ của tất cả nỗi khao khát này. Các ngươi rồi cũng sẽ sớm biết thôi.",
						"thai": "ข้า…เป็นเพียง…เศษเสี้ยวของความปรารถนาทั้งหมดนี้ พวกเจ้าเองก็จะรู้ในไม่ช้า",
						"hindi": "मैं… बस… इस सारी लालसा के टुकड़े मात्र हूँ। तुम भी, जल्द ही जान जाओगे।"
					}
				},
				{
					"speaker": "ferro",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						5,
						2
					]
				},
				{
					"speaker": "ferro",
					"content": {
						"korean": "도망쳐! 이건… 너희가 감당할 수 있는 게 아냐!",
						"english": "Run! This is... not something you can handle!",
						"japanese": "逃げろ！これは…お前たちがどうにかできるものじゃない！",
						"chinese": "快逃！这不是…你们能应付得了的！",
						"french": "Fuyez ! C'est… au-delà de vos forces !",
						"spanish": "¡Huyan! ¡Esto... no es algo que puedan manejar!",
						"vietnamese": "Chạy đi! Chuyện này... không phải thứ các ngươi có thể đối phó!",
						"thai": "หนีไป! นี่มัน... เกินกว่าพวกเจ้าจะรับมือได้!",
						"hindi": "भागो! यह… तुम लोगों के बस की बात नहीं है!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "ferro",
					"action": "exit",
					"duration_ms": 400,
					"direction": "down",
					"type": "direction"
				}
			],
			"win_dialogue": [
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "크윽… 겨우… 쓰러뜨렸을 뿐… 진정한 고통은… 아직… 시작도 안 했다…",
						"english": "Ugh... barely... defeated it... The true pain... hasn't even... begun...",
						"japanese": "くっ…かろうじて…倒しただけだ…真の苦痛は…まだ…始まってもいない…",
						"chinese": "咳…只是…勉强击败而已…真正的痛苦…还…没有开始…",
						"french": "Ugh… à peine… vaincu… La vraie douleur… n'a pas encore… commencé…",
						"spanish": "Uf… apenas… lo derrotamos… El verdadero dolor… aún… no ha comenzado…",
						"vietnamese": "Khụ… chỉ là… mới hạ gục thôi… Nỗi đau thật sự… còn… chưa bắt đầu…",
						"thai": "อึก... แค่... ล้มมันได้เท่านั้น... ความเจ็บปวดที่แท้จริง... ยัง... ไม่ได้เริ่มเลย...",
						"hindi": "उफ़… बमुश्किल… हराया है… असली दर्द… अभी… शुरू भी नहीं हुआ है…"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "고통의 근원은… 대체…",
						"english": "The source of the pain... what could it be...?",
						"japanese": "苦痛の根源は…一体…",
						"chinese": "痛苦的根源…究竟是…",
						"french": "La source de la douleur… mais qu'est-ce que c'est…?",
						"spanish": "La raíz del dolor… ¿qué será…?",
						"vietnamese": "Nguồn gốc của nỗi đau… rốt cuộc là gì…?",
						"thai": "ต้นตอแห่งความเจ็บปวด... คืออะไรกันแน่...?",
						"hindi": "दर्द का स्रोत… आख़िर…"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "망령들의 속삭임이 잠시 멎었다. 그러나 사막의 환영은 완전히 사라지지 않았다. 거대한 비극의 그림자가 여전히 그들을 기다리고 있었다.",
						"english": "The whispers of the specters ceased for a moment. But the desert's illusion had not fully vanished. The shadow of a great tragedy still awaited them.",
						"japanese": "亡霊たちの囁きは一時止んだ。しかし砂漠の幻影は完全には消え去っていなかった。巨大な悲劇の影が、依然として彼らを待ち受けていた。",
						"chinese": "亡灵的低语暂时平息了。然而，沙漠的幻象并未完全消失。一场巨大悲剧的阴影仍在等待着他们。",
						"french": "Les murmures des spectres cessèrent un instant. Mais l'illusion du désert n'avait pas complètement disparu. L'ombre d'une immense tragédie les attendait encore.",
						"spanish": "Los susurros de los espectros cesaron por un momento. Pero la ilusión del desierto no había desaparecido por completo. La sombra de una gran tragedia aún los esperaba.",
						"vietnamese": "Lời thì thầm của vong hồn tạm ngưng. Nhưng ảo ảnh sa mạc vẫn chưa hoàn toàn biến mất. Bóng dáng của một bi kịch lớn vẫn đang chờ đợi họ.",
						"thai": "เสียงกระซิบของเหล่าวิญญาณหยุดลงชั่วขณะ แต่ภาพลวงตาแห่งทะเลทรายยังไม่หายไปอย่างสิ้นเชิง เงาแห่งโศกนาฏกรรมครั้งใหญ่ยังคงรอคอยพวกเขาอยู่",
						"hindi": "आत्माओं की फुसफुसाहटें पल भर के लिए थम गईं। लेकिन रेगिस्तान का भ्रम पूरी तरह से गायब नहीं हुआ था। एक बड़ी त्रासदी की परछाई अभी भी उनका इंतजार कर रही थी।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…우리는 계속 가야 해.",
						"english": "...We must keep going.",
						"japanese": "…私たちは進み続けなければならない。",
						"chinese": "…我们必须继续前进。",
						"french": "…Nous devons continuer.",
						"spanish": "…Debemos seguir adelante.",
						"vietnamese": "…Chúng ta phải tiếp tục.",
						"thai": "...เราต้องไปต่อ",
						"hindi": "…हमें आगे बढ़ते रहना होगा।"
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"끝없이 펼쳐진 모래사막, 그 속에서 현실은 흐려진다.",
			"과거의 비극이 환영이 되어 떠돌고, 망령들은 그리움을 속삭인다.",
			"진실을 좇는 자, 광기에 잠식될 것인가.",
			"이 모든 환상 속에, 단 하나의 희미한 희망이 빛나고 있었다."
		],
		"english": [
			"An endless desert, reality blurs within it.",
			"Tragedies of the past linger as illusions, specters whisper yearning.",
			"Will those who seek truth be consumed by madness?",
			"Amidst all these illusions, a single faint hope shone."
		],
		"japanese": [
			"果てなく広がる砂漠、その中で現実は霞む。",
			"過去の悲劇が幻影となり漂い、亡霊たちは郷愁を囁く。",
			"真実を追う者、狂気に蝕まれるのか。",
			"これらすべての幻想の中で、ただ一つの微かな希望が輝いていた。"
		],
		"chinese": [
			"无尽的沙漠，现实在其间模糊。",
			"过去的悲剧化作幻影游荡，亡灵低语着思念。",
			"追寻真相之人，终将被疯狂吞噬吗？",
			"在这所有幻象中，一丝微弱的希望正在闪耀。"
		],
		"french": [
			"Un désert infini, la réalité s'y estompe.",
			"Les tragédies du passé persistent en illusions, les spectres murmurent le désir.",
			"Ceux qui cherchent la vérité seront-ils dévorés par la folie ?",
			"Au milieu de toutes ces illusions, une seule faible lueur d'espoir brillait."
		],
		"spanish": [
			"Un desierto interminable, la realidad se desdibuja en él.",
			"Las tragedias del pasado persisten como ilusiones, los espectros susurran anhelo.",
			"Aquellos que buscan la verdad, ¿serán consumidos por la locura?",
			"Entre todas estas ilusiones, una única y tenue esperanza brillaba."
		],
		"vietnamese": [
			"Trong sa mạc vô tận, hiện thực mờ ảo.",
			"Bi kịch quá khứ thành ảo ảnh lãng du, vong hồn thì thầm nỗi nhớ.",
			"Kẻ theo đuổi sự thật, sẽ bị điên loạn nuốt chửng?",
			"Giữa mọi ảo ảnh này, một tia hy vọng mờ nhạt lóe sáng."
		],
		"thai": [
			"ทะเลทรายอันกว้างใหญ่ไร้ที่สิ้นสุด ความจริงเลือนรางไปในนั้น",
			"โศกนาฏกรรมในอดีตยังคงอยู่ดั่งภาพลวงตา เหล่าวิญญาณกระซิบถึงความโหยหา",
			"ผู้ที่แสวงหาความจริงจะถูกความบ้าคลั่งกัดกินหรือไม่",
			"ท่ามกลางภาพลวงตาทั้งหมดนี้ มีเพียงความหวังอันริบหรี่เพียงหนึ่งเดียวที่ส่องประกาย"
		],
		"hindi": [
			"एक अंतहीन रेगिस्तान, उसमें वास्तविकता धुंधली पड़ जाती है。",
			"अतीत की दुखद घटनाएँ भ्रम बनकर घूमती हैं, प्रेत लालसा फुसफुसाते हैं।",
			"क्या सत्य के खोजी पागलपन में समा जाएंगे?",
			"इन सभी भ्रमों के बीच, एक धुंधली सी आशा चमक रही थी।"
		]
	}
} as const;
