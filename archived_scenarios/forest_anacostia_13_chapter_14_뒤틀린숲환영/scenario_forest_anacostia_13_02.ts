export const scenario_forest_anacostia_13_02 = {
	"scenario_id": "forest_anacostia_13_02",
	"order": 2,
	"act": "rising",
	"theme": "forest",
	"actors": {
		"hazel": {
			"id": "mon_e2c11115-b300-4f32-b289-9ad088dc0273",
			"name": {
				"korean": "헤이즐",
				"english": "Hazel",
				"japanese": "ヘイゼル",
				"chinese": "榛",
				"french": "Hazel",
				"spanish": "Hazel",
				"vietnamese": "Hazel",
				"thai": "เฮเซล",
				"hindi": "हेज़ल"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/39f75a47-c622-45fe-04fd-a8bac1f93a00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/fc97b5d5-7a1d-4646-bedc-47a40ea70a00/public"
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
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "환영이 시작되는 숲의 초입. 몽환적인 안개가 시야를 가린다.",
						"english": "The entrance to the forest where the vision begins. A dreamlike mist obscures the view.",
						"japanese": "幻影が始まる森の入り口。夢のような霧が視界を遮る。",
						"chinese": "幻象开始的森林入口。梦幻般的薄雾遮蔽了视线。",
						"french": "L'entrée de la forêt où commence la vision. Une brume onirique obstrue la vue.",
						"spanish": "La entrada al bosque donde comienza la visión. Una niebla onírica oculta la vista.",
						"vietnamese": "Lối vào khu rừng nơi ảo ảnh bắt đầu. Sương mù huyền ảo che khuất tầm nhìn.",
						"thai": "ทางเข้าป่าที่นิมิตเริ่มต้นขึ้น หมอกชวนฝันบดบังทัศนียภาพ",
						"hindi": "जंगल का प्रवेश द्वार जहाँ से दृष्टि शुरू होती है। एक स्वप्निल कोहरा दृश्य को अस्पष्ट कर देता है।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이상해. 숲이… 말을 거는 것 같아.",
						"english": "It's strange. The forest seems to be… talking to me.",
						"japanese": "変だ。森が…私に話しかけているようだ。",
						"chinese": "奇怪。森林好像……在对我说话。",
						"french": "C'est étrange. La forêt semble… me parler.",
						"spanish": "Es extraño. El bosque parece… hablarme.",
						"vietnamese": "Thật kỳ lạ. Khu rừng dường như đang… nói chuyện với tôi.",
						"thai": "มันแปลก ป่า… ดูเหมือนกำลังพูดกับฉัน",
						"hindi": "यह अजीब है। जंगल… मुझसे बात कर रहा है।"
					}
				},
				{
					"spot": [
						4,
						2
					],
					"action": "enter",
					"speaker": "hazel",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "hazel",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…왔구나. 이곳은 위험해.",
						"english": "…You've come. This place is dangerous.",
						"japanese": "…来たか。ここは危険だ。",
						"chinese": "……你来了。这个地方很危险。",
						"french": "…Vous êtes venus. Cet endroit est dangereux.",
						"spanish": "…Has venido. Este lugar es peligroso.",
						"vietnamese": "…Bạn đã đến. Nơi này rất nguy hiểm.",
						"thai": "…มาแล้วเหรอ ที่นี่อันตรายนะ",
						"hindi": "…तुम आ गए। यह जगह खतरनाक है।"
					}
				},
				{
					"content": {
						"korean": "당신은 누구죠?",
						"english": "Who are you?",
						"japanese": "あなたは誰ですか？",
						"chinese": "你是谁？",
						"french": "Qui êtes-vous ?",
						"spanish": "¿Quién eres?",
						"vietnamese": "Bạn là ai?",
						"thai": "คุณเป็นใคร?",
						"hindi": "तुम कौन हो?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "hazel",
					"content": {
						"korean": "헤이즐. 숲의 생명력이 날 치유해주고 있어….",
						"english": "Hazel. The forest's life force is healing me…",
						"japanese": "ヘイゼル。森の生命力が私を癒してくれている…。",
						"chinese": "海泽尔。森林的生命力正在治愈我……",
						"french": "Hazel. La force vitale de la forêt me guérit…",
						"spanish": "Hazel. La fuerza vital del bosque me está curando…",
						"vietnamese": "Hazel. Nguồn năng lượng sống của khu rừng đang chữa lành cho tôi…",
						"thai": "เฮเซล พลังชีวิตของป่ากำลังรักษาฉันอยู่…",
						"hindi": "हेज़ल। जंगल की जीवन शक्ति मुझे ठीक कर रही है..."
					}
				},
				{
					"content": {
						"korean": "하지만… 동시에 끔찍한 것들을 보여주지.",
						"english": "But… it also shows me terrible things.",
						"japanese": "でも…同時に恐ろしいものを見せてくれる。",
						"chinese": "但是……它也向我展示了可怕的事情。",
						"french": "Mais… cela me montre aussi des choses terribles.",
						"spanish": "Pero… también me muestra cosas terribles.",
						"vietnamese": "Nhưng… nó cũng cho tôi thấy những điều kinh khủng.",
						"thai": "แต่… มันก็แสดงสิ่งเลวร้ายให้ฉันเห็นด้วย",
						"hindi": "लेकिन… यह मुझे भयानक चीजें भी दिखाता है।"
					},
					"speaker": "hazel",
					"type": "speech",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "hazel",
					"action": "enter",
					"spot": [
						3,
						3
					],
					"duration_ms": 500
				},
				{
					"speaker": "hazel",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "숲이 날 낫게 하지만… 기억도 함께 돌려주고 있어.",
						"english": "The forest heals me... but it also returns my memories.",
						"japanese": "森は私を癒す…だが、記憶も取り戻させている。",
						"chinese": "森林治愈了我……但也带回了我的记忆。",
						"french": "La forêt me guérit... mais elle me rend aussi mes souvenirs.",
						"spanish": "El bosque me sana... pero también me devuelve mis recuerdos.",
						"vietnamese": "Rừng chữa lành tôi... nhưng cũng trả lại ký ức cho tôi.",
						"thai": "ป่ารักษาฉัน... แต่มันก็คืนความทรงจำให้ฉันด้วย",
						"hindi": "जंगल मुझे ठीक कर रहा है... पर यह मेरी यादें भी लौटा रहा है।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "기억…?",
						"english": "Memories...?",
						"japanese": "記憶…？",
						"chinese": "记忆……？",
						"french": "Des souvenirs...?",
						"spanish": "¿Recuerdos...?",
						"vietnamese": "Ký ức...?",
						"thai": "ความทรงจำ...?",
						"hindi": "यादें...?"
					}
				},
				{
					"content": {
						"korean": "과거의 환영들… 숲에 갇힌 자들의 울부짖음.",
						"english": "Visions of the past... the wails of those trapped in the forest.",
						"japanese": "過去の幻影…森に囚われた者たちの叫び。",
						"chinese": "过去的幻象……被困在森林中的人们的哀嚎。",
						"french": "Des visions du passé... les hurlements de ceux piégés dans la forêt.",
						"spanish": "Visiones del pasado... los lamentos de los atrapados en el bosque.",
						"vietnamese": "Những ảo ảnh quá khứ... tiếng gào thét của những người bị mắc kẹt trong rừng.",
						"thai": "นิมิตแห่งอดีต... เสียงคร่ำครวญของผู้ที่ถูกขังในป่า",
						"hindi": "अतीत के दर्शन... जंगल में फँसे हुए लोगों की चीखें।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "hazel"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_1",
					"content": {
						"korean": "이 숲… 우리에게만 환영을 보여주는 게 아니었어.",
						"english": "This forest... it wasn't just showing *us* visions.",
						"japanese": "この森…私たちだけに幻影を見せていたわけじゃなかった。",
						"chinese": "这片森林……它不仅仅是向我们展示幻象。",
						"french": "Cette forêt... elle ne nous montrait pas seulement des visions.",
						"spanish": "Este bosque... no solo nos mostraba visiones a *nosotros*.",
						"vietnamese": "Khu rừng này... nó không chỉ hiện ra ảo ảnh cho *chúng ta*.",
						"thai": "ป่าแห่งนี้... ไม่ได้แสดงภาพหลอนให้ *เรา* เห็นเท่านั้น",
						"hindi": "यह जंगल... यह सिर्फ *हमें* ही दर्शन नहीं दिखा रहा था।"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						4,
						3
					],
					"speaker": "hazel",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "헤이즐, 여기서 뭘 본 거죠?",
						"english": "Hazel, what did you see here?",
						"japanese": "ヘイゼル、ここで何を見たの？",
						"chinese": "海泽尔，你在这里看到了什么？",
						"french": "Hazel, qu'avez-vous vu ici ?",
						"spanish": "Hazel, ¿qué viste aquí?",
						"vietnamese": "Hazel, bạn đã thấy gì ở đây?",
						"thai": "เฮเซล คุณเห็นอะไรที่นี่?",
						"hindi": "हेज़ल, तुमने यहाँ क्या देखा?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "고대 전사들의 마지막 비명… 숲에 갇힌 채 죽어갔어.",
						"english": "The last screams of ancient warriors... trapped and dying in the forest.",
						"japanese": "古の戦士たちの最後の悲鳴…森に囚われ、死んでいった。",
						"chinese": "古代战士们最后的尖叫……被困在森林中死去。",
						"french": "Les derniers cris des anciens guerriers... piégés et mourant dans la forêt.",
						"spanish": "Los últimos gritos de guerreros antiguos... atrapados y muriendo en el bosque.",
						"vietnamese": "Tiếng hét cuối cùng của các chiến binh cổ đại... mắc kẹt và chết trong rừng.",
						"thai": "เสียงกรีดร้องครั้งสุดท้ายของนักรบโบราณ... ถูกขังและตายในป่า",
						"hindi": "प्राचीन योद्धाओं की आखिरी चीखें... जंगल में फँसकर मरते हुए।"
					},
					"speaker": "hazel",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "귀를 찢는 듯한 고대 전사들의 외침이 숲에 울려 퍼진다.",
						"english": "The ear-splitting cries of ancient warriors echo through the forest.",
						"japanese": "耳をつんざくような古の戦士たちの叫びが森に響き渡る。",
						"chinese": "震耳欲聋的古代战士的呼喊声在森林中回荡。",
						"french": "Les cris déchirants des anciens guerriers résonnent dans la forêt.",
						"spanish": "Los gritos desgarradores de los antiguos guerreros resuenan en el bosque.",
						"vietnamese": "Tiếng kêu xé tai của các chiến binh cổ đại vang vọng khắp khu rừng.",
						"thai": "เสียงร้องโหยหวนของนักรบโบราณดังก้องไปทั่วป่า",
						"hindi": "प्राचीन योद्धाओं की कान फाड़ने वाली चीखें जंगल में गूँज रही हैं।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_2",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이건 단순한 환청이 아니야.",
						"english": "This isn't just a hallucination.",
						"japanese": "これは単なる幻聴じゃない。",
						"chinese": "这不仅仅是幻听。",
						"french": "Ce n'est pas une simple hallucination auditive.",
						"spanish": "Esto no es solo una alucinación.",
						"vietnamese": "Đây không chỉ là ảo thanh.",
						"thai": "นี่ไม่ใช่แค่ภาพหลอนทางเสียง",
						"hindi": "यह सिर्फ एक मतिभ्रम नहीं है।"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "hazel",
					"content": {
						"korean": "숲은… 그들의 고통을 보여주며 경고하는 거야.",
						"english": "The forest... it's showing their pain, warning us.",
						"japanese": "森は…彼らの苦痛を見せ、私たちに警告しているんだ。",
						"chinese": "森林……它展示着他们的痛苦，警告着我们。",
						"french": "La forêt... elle montre leur douleur, elle nous avertit.",
						"spanish": "El bosque... está mostrando su dolor, advirtiéndonos.",
						"vietnamese": "Rừng... nó đang cho thấy nỗi đau của họ, cảnh báo chúng ta.",
						"thai": "ป่า... กำลังแสดงความเจ็บปวดของพวกเขา เป็นการเตือนเรา",
						"hindi": "जंगल... वह उनका दर्द दिखा रहा है, हमें चेतावनी दे रहा है।"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"speaker": "hazel",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "덩굴이 더욱 기괴하게 얽히고, 숲은 끊임없이 변이한다.",
						"english": "Vines intertwine more grotesquely, and the forest constantly mutates.",
						"japanese": "蔓はさらに奇怪に絡み合い、森は絶え間なく変異する。",
						"chinese": "藤蔓缠绕得更加怪异，森林不断变异。",
						"french": "Les lianes s'entrelacent de manière plus grotesque, et la forêt mute constamment.",
						"spanish": "Las enredaderas se entrelazan de forma más grotesca, y el bosque muta constantemente.",
						"vietnamese": "Dây leo quấn vào nhau một cách kỳ dị hơn, và khu rừng không ngừng biến đổi.",
						"thai": "เถาวัลย์พันกันยุ่งเหยิงมากขึ้น และป่าก็กลายพันธุ์อยู่ตลอดเวลา",
						"hindi": "बेलें और भी भयावह रूप से उलझती जाती हैं, और जंगल लगातार बदलता रहता है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "숲이… 살아 움직이는 것 같아.",
						"english": "The forest… it feels alive.",
						"japanese": "森が…生きているみたいだ。",
						"chinese": "森林…好像活过来了。",
						"french": "La forêt… elle semble vivante.",
						"spanish": "El bosque… parece cobrar vida.",
						"vietnamese": "Rừng… như sống dậy.",
						"thai": "ป่า…ดูเหมือนมีชีวิต",
						"hindi": "वन… जैसे जीवित हो उठा है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "우리가 들어올수록 숲은 더 깊이 잠식돼.",
						"english": "The deeper we go, the more the forest consumes.",
						"japanese": "進むほど、森は深く侵食される。",
						"chinese": "我们越深入，森林被侵蚀得越深。",
						"french": "Plus nous avançons, plus la forêt s'enfonce.",
						"spanish": "Cuanto más avanzamos, más nos consume el bosque.",
						"vietnamese": "Chúng ta càng vào sâu, rừng càng bị xâm chiếm.",
						"thai": "ยิ่งเราเข้ามาลึกเท่าไหร่ ป่ายิ่งถูกกลืนกินลึกขึ้นเท่านั้น",
						"hindi": "जितना गहरा हम जाते हैं, वन उतना ही अधिक निगल जाता है।"
					},
					"speaker": "hazel",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_3",
					"content": {
						"korean": "이게… 숲을 구하는 길이라고?",
						"english": "Is this… the way to save the forest?",
						"japanese": "これが…森を救う道だと？",
						"chinese": "这就是…拯救森林的方法吗？",
						"french": "C'est ça… la façon de sauver la forêt ?",
						"spanish": "¿Es esto… el camino para salvar el bosque?",
						"vietnamese": "Đây… là cách cứu khu rừng này sao?",
						"thai": "นี่คือ…หนทางที่จะช่วยป่าอย่างนั้นเหรอ?",
						"hindi": "क्या यही… वन को बचाने का मार्ग है?"
					}
				},
				{
					"speaker": "hazel",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "뒤틀린 치유… 그것이 너희를 삼킬 것이다.",
						"english": "Twisted healing… it will consume you.",
						"japanese": "歪んだ癒し…それがお前たちを蝕むだろう。",
						"chinese": "扭曲的治愈…它将吞噬你们。",
						"french": "Une guérison tordue… elle vous consumera.",
						"spanish": "Una curación retorcida… os consumirá.",
						"vietnamese": "Sự chữa lành vặn vẹo… sẽ nuốt chửng các ngươi.",
						"thai": "การเยียวยาที่บิดเบี้ยว…มันจะกลืนกินพวกเจ้า",
						"hindi": "विकृत उपचार… यह तुम्हें निगल जाएगा।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "기괴하게 변형된 숲의 심장부. 거대한 그림자가 앞을 가로막는다.",
						"english": "The grotesquely transformed heart of the forest. A giant shadow blocks the way.",
						"japanese": "奇怪に変貌した森の心臓部。巨大な影が道を阻む。",
						"chinese": "森林中心奇形怪状地变异。一道巨大的阴影挡住了去路。",
						"french": "Au cœur de la forêt grotesquement transformée. Une ombre gigantesque barre le chemin.",
						"spanish": "El corazón del bosque grotescamente transformado. Una sombra gigantesca bloquea el paso.",
						"vietnamese": "Trung tâm rừng bị biến dạng kỳ quái. Một bóng đen khổng lồ chặn đường.",
						"thai": "ใจกลางป่าที่บิดเบี้ยวผิดรูป เงาขนาดยักษ์ขวางหน้าอยู่",
						"hindi": "वन के विकृत रूप से परिवर्तित हृदय में। एक विशाल छाया मार्ग अवरुद्ध करती है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "어리석은 자들… 이 숲의 환영에 현혹되었구나.",
						"english": "Fools… you've been ensnared by this forest's illusions.",
						"japanese": "愚か者ども…この森の幻影に惑わされたな。",
						"chinese": "愚蠢的人们…你们被这森林的幻象迷惑了。",
						"french": "Imbéciles… vous vous êtes laissés séduire par les illusions de cette forêt.",
						"spanish": "Necios… os habéis dejado engañar por las ilusiones de este bosque.",
						"vietnamese": "Những kẻ ngu ngốc… các ngươi đã bị ảo ảnh của khu rừng này mê hoặc.",
						"thai": "พวกคนโง่…หลงติดกับภาพลวงตาของป่านี้ไปแล้ว",
						"hindi": "मूर्खों… तुम इस वन के भ्रमजाल में फंस गए हो।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "당신이 이 모든 걸 꾸민 건가!",
						"english": "Did you orchestrate all of this?!",
						"japanese": "あなたがこの全てを仕組んだのか！",
						"chinese": "这一切都是你策划的吗？！",
						"french": "C'est vous qui avez orchestré tout ça ?!",
						"spanish": "¿Tú has orquestado todo esto?!",
						"vietnamese": "Ngươi đã sắp đặt tất cả chuyện này sao!",
						"thai": "แกเป็นคนบงการเรื่องทั้งหมดนี่เหรอ!",
						"hindi": "क्या यह सब तुम्हारी चाल है?!"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "나는 이 숲의 의지. 너희의 어리석음을 끝내러 왔다.",
						"english": "I am the will of this forest. I've come to end your foolishness.",
						"japanese": "我はこの森の意思。お前たちの愚かさを終わらせに来たのだ。",
						"chinese": "我是这森林的意志。我来终结你们的愚蠢。",
						"french": "Je suis la volonté de cette forêt. Je suis venue mettre fin à votre folie.",
						"spanish": "Soy la voluntad de este bosque. He venido a poner fin a vuestra insensatez.",
						"vietnamese": "Ta là ý chí của khu rừng này. Ta đến để chấm dứt sự ngu ngốc của các ngươi.",
						"thai": "ข้าคือเจตจำนงของป่านี้ ข้ามาเพื่อยุติความโง่เขลาของพวกเจ้า",
						"hindi": "मैं इस वन की इच्छा हूँ। मैं तुम्हारी मूर्खता को समाप्त करने आया हूँ।"
					}
				},
				{
					"content": {
						"korean": "환영 따위에 속지 않아!",
						"english": "We won't be fooled by mere illusions!",
						"japanese": "幻影ごときに騙されない！",
						"chinese": "才不会被幻象骗倒！",
						"french": "Nous ne nous laisserons pas berner par de simples illusions !",
						"spanish": "¡No nos engañarán simples ilusiones!",
						"vietnamese": "Sẽ không bị ảo ảnh lừa gạt đâu!",
						"thai": "ไม่หลงกลภาพลวงตาหรอก!",
						"hindi": "हम केवल भ्रमों से मूर्ख नहीं बनेंगे!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "강렬한 환영에 갇혀 탐험대는 정신을 잃었다.",
						"english": "Trapped in an intense illusion, the expedition lost consciousness.",
						"japanese": "強烈な幻影に囚われ、探検隊は意識を失った。",
						"chinese": "被强烈的幻象困住，探险队失去了意识。",
						"french": "Prise au piège d'une puissante illusion, l'expédition perdit connaissance.",
						"spanish": "Atrapados en una intensa ilusión, la expedición perdió el conocimiento.",
						"vietnamese": "Mắc kẹt trong ảo ảnh mạnh mẽ, đoàn thám hiểm mất ý thức.",
						"thai": "ถูกขังอยู่ในภาพลวงตาอันรุนแรง ทีมสำรวจก็หมดสติไป",
						"hindi": "एक तीव्र भ्रम में फंसकर, अभियान दल ने चेतना खो दी।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "너희도 영원히 이 환영 속에 갇힐 것이다….",
						"english": "You too will be trapped forever in this illusion...",
						"japanese": "お前たちも永遠にこの幻影の中に囚われるだろう…。",
						"chinese": "你们也将永远被困在这个幻象之中……",
						"french": "Vous aussi, vous serez à jamais piégés dans cette illusion...",
						"spanish": "Vosotros también quedaréis atrapados para siempre en esta ilusión...",
						"vietnamese": "Các ngươi cũng sẽ mãi mãi bị mắc kẹt trong ảo ảnh này...",
						"thai": "พวกเจ้าก็จะถูกขังอยู่ในภาพลวงตานี้ตลอดไป...",
						"hindi": "तुम भी हमेशा के लिए इस भ्रम में फंस जाओगे...।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…아직, 끝나지 않았어!",
						"english": "...It's not over yet!",
						"japanese": "…まだ、終わってない！",
						"chinese": "……还没，结束！",
						"french": "...Ce n'est pas encore fini !",
						"spanish": "¡...Todavía no ha terminado!",
						"vietnamese": "...Chưa, kết thúc đâu!",
						"thai": "...ยัง, ไม่จบ!",
						"hindi": "…अभी, खत्म नहीं हुआ है!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "착각하지 마라… 너희는 그저 다음 환영에 불과할 뿐….",
						"english": "Don't be mistaken… you are merely the next illusion….",
						"japanese": "勘違いするな…お前たちは次の幻影に過ぎない…。",
						"chinese": "别搞错了…你们不过是下一个幻象罢了…。",
						"french": "Ne vous y trompez pas… vous n'êtes que la prochaine illusion….",
						"spanish": "No os equivoquéis… no sois más que la próxima ilusión….",
						"vietnamese": "Đừng lầm tưởng… các ngươi chỉ là ảo ảnh kế tiếp mà thôi….",
						"thai": "อย่าสำคัญผิดไป…พวกเจ้าก็เป็นแค่ภาพลวงตาถัดไปเท่านั้นเอง….",
						"hindi": "भ्रमित मत होओ… तुम मात्र अगले भ्रम हो…।"
					}
				},
				{
					"content": {
						"korean": "…끝난 건가?",
						"english": "...Is it over?",
						"japanese": "…終わったのか？",
						"chinese": "…结束了吗？",
						"french": "...Est-ce fini ?",
						"spanish": "¿...Ha terminado?",
						"vietnamese": "...Kết thúc rồi sao?",
						"thai": "...จบแล้วหรือ?",
						"hindi": "...क्या यह खत्म हो गया?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "하지만 숲의 깊은 곳에서 또 다른 환영이 기다리고 있었다.",
						"english": "But deep within the forest, another illusion awaited.",
						"japanese": "しかし、森の奥深くで別の幻影が待っていた。",
						"chinese": "然而，森林深处，另一个幻象正在等待着。",
						"french": "Pourtant, au plus profond de la forêt, une autre illusion attendait.",
						"spanish": "Sin embargo, en lo más profundo del bosque, otra ilusión aguardaba.",
						"vietnamese": "Nhưng sâu thẳm trong rừng, một ảo ảnh khác đang chờ đợi.",
						"thai": "แต่ลึกเข้าไปในป่า ภาพลวงตาอีกอย่างกำลังรออยู่",
						"hindi": "लेकिन जंगल की गहराई में, एक और भ्रम इंतज़ार कर रहा था।"
					}
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"숲의 심장으로 향하는 길. 이상한 환영이 우릴 부른다.",
			"발을 디딜수록, 과거의 끔찍한 속삭임이 현실이 된다.",
			"이곳은 치유의 숲인가, 아니면 거대한 환영에 불과한가.",
			"우리가 구원자인가… 아니면, 새로운 제물인가."
		],
		"english": [
			"The path to the heart of the forest. A strange vision beckons us.",
			"With every step, the horrible whispers of the past become reality.",
			"Is this a healing forest, or merely a grand illusion?",
			"Are we saviors… or new sacrifices?"
		],
		"japanese": [
			"森の心臓へと続く道。奇妙な幻影が我々を誘う。",
			"足を踏み入れるたびに、過去の恐ろしい囁きが現実となる。",
			"ここは癒しの森なのか、それとも巨大な幻影に過ぎないのか。",
			"我々は救世主なのか…それとも、新たな生贄なのか。"
		],
		"chinese": [
			"通往森林之心的小路。奇怪的幻象在召唤我们。",
			"每迈出一步，过去的可怕低语都变成现实。",
			"这里是治愈之森，还是一个巨大的幻象？",
			"我们是救世主……还是新的祭品？"
		],
		"french": [
			"Le chemin vers le cœur de la forêt. Une étrange vision nous appelle.",
			"À chaque pas, les horribles murmures du passé deviennent réalité.",
			"Est-ce une forêt de guérison, ou simplement une grande illusion ?",
			"Sommes-nous des sauveurs… ou de nouveaux sacrifices ?"
		],
		"spanish": [
			"El camino hacia el corazón del bosque. Una extraña visión nos llama.",
			"Con cada paso, los horribles susurros del pasado se hacen realidad.",
			"¿Es este un bosque curativo, o simplemente una gran ilusión?",
			"¿Somos salvadores… o nuevos sacrificios?"
		],
		"vietnamese": [
			"Con đường đến trái tim khu rừng. Một ảo ảnh kỳ lạ vẫy gọi chúng ta.",
			"Với mỗi bước chân, những lời thì thầm kinh hoàng của quá khứ trở thành hiện thực.",
			"Đây là khu rừng chữa lành, hay chỉ là một ảo ảnh lớn?",
			"Chúng ta là những vị cứu tinh… hay những vật tế mới?"
		],
		"thai": [
			"เส้นทางสู่ใจกลางป่า นิมิตแปลกประหลาดกำลังเรียกหาเรา",
			"ทุกย่างก้าว เสียงกระซิบอันน่าสะพรึงกลัวในอดีตก็กลายเป็นความจริง",
			"นี่คือป่าแห่งการเยียวยา หรือเป็นเพียงภาพลวงตาอันยิ่งใหญ่?",
			"เราคือผู้กอบกู้… หรือเครื่องสังเวยใหม่กันแน่?"
		],
		"hindi": [
			"जंगल के दिल तक का रास्ता। एक अजीब दृष्टि हमें बुला रही है।",
			"हर कदम पर, अतीत की भयानक फुसफुसाहटें हकीकत बन जाती हैं।",
			"क्या यह एक उपचार करने वाला जंगल है, या केवल एक महान भ्रम?",
			"क्या हम मुक्तिदाता हैं… या नए बलिदान?"
		]
	}
} as const;
