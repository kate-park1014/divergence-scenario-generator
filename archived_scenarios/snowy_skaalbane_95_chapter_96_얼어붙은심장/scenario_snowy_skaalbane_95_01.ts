export const scenario_snowy_skaalbane_95_01 = {
	"scenario_id": "snowy_skaalbane_95_01",
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
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "황량한 설원, 얼어붙은 시체들이 널려 있었다.",
						"english": "Desolate snowfield, frozen corpses lay scattered.",
						"japanese": "荒涼たる雪原には、凍りついた死体が散らばっていた。",
						"chinese": "荒凉的雪原上，到处散落着冰冷的尸体。",
						"french": "Dans le champ de neige désolé, des corps gelés gisaient éparpillés.",
						"spanish": "Campo de nieve desolado, cadáveres congelados yacían esparcidos.",
						"vietnamese": "Tuyết nguyên hoang tàn, những xác chết đóng băng nằm rải rác.",
						"thai": "ทุ่งหิมะอันรกร้าง ศพที่แข็งตัวกระจัดกระจายอยู่ทั่ว",
						"hindi": "उजाड़ बर्फीला मैदान, जमे हुए शव बिखरे पड़े थे।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "여기가… 설마 그 전설의 유물이라는 곳인가?",
						"english": "Is this... could this be the place of the legendary artifact?",
						"japanese": "ここが…まさか、あの伝説の遺物がある場所なのか？",
						"chinese": "这里是…难道是那个传说中的遗物所在地吗？",
						"french": "Est-ce que c'est... l'endroit de l'artefact légendaire ?",
						"spanish": "¿Es este... el lugar del artefacto legendario?",
						"vietnamese": "Đây có phải… nơi chứa di vật huyền thoại đó không?",
						"thai": "ที่นี่... ที่นี่เป็นที่ที่มีวัตถุโบราณในตำนานหรือเปล่า?",
						"hindi": "क्या यह... क्या यह पौराणिक कलाकृति का स्थान हो सकता है?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"action": "enter",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "eira"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…기록에 없던 곳인데. 이상해요.",
						"english": "...This place isn't in the records. It's strange.",
						"japanese": "…記録にない場所だ。おかしい。",
						"chinese": "…这里没有记录。很奇怪。",
						"french": "...Cet endroit n'est pas dans les registres. C'est étrange.",
						"spanish": "...Este lugar no está en los registros. Es extraño.",
						"vietnamese": "…Nơi này không có trong ghi chép. Lạ thật.",
						"thai": "...ที่นี่ไม่อยู่ในบันทึก มันแปลกมาก",
						"hindi": "...यह जगह रिकॉर्ड में नहीं है। यह अजीब है।"
					},
					"emotion": "base",
					"speaker": "eira"
				},
				{
					"type": "speech",
					"content": {
						"korean": "길을 잃은 건가?",
						"english": "Are we lost?",
						"japanese": "道に迷ったのか？",
						"chinese": "我们迷路了吗？",
						"french": "Sommes-nous perdus ?",
						"spanish": "¿Estamos perdidos?",
						"vietnamese": "Chúng ta bị lạc đường sao?",
						"thai": "เราหลงทางเหรอ?",
						"hindi": "क्या हम रास्ता भटक गए हैं?"
					},
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "아직은… 아니길 바라요.",
						"english": "I hope not... yet.",
						"japanese": "まだ…そうでないことを願う。",
						"chinese": "我希望…现在还没有。",
						"french": "J'espère que non... pas encore.",
						"spanish": "Espero que no... todavía.",
						"vietnamese": "Tôi hy vọng… chưa phải.",
						"thai": "ฉันหวังว่ายังไม่เป็นเช่นนั้น",
						"hindi": "मुझे उम्मीद है कि अभी तक नहीं..."
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "눈보라가 더욱 거세졌다. 시야가 희미해진다.",
						"english": "The blizzard intensified. Visibility is fading.",
						"japanese": "吹雪はさらに激しくなった。視界がかすむ。",
						"chinese": "暴风雪愈发猛烈。视野变得模糊。",
						"french": "La tempête de neige s'est intensifiée. La visibilité diminue.",
						"spanish": "La ventisca se intensificó. La visibilidad se desvanece.",
						"vietnamese": "Bão tuyết càng dữ dội. Tầm nhìn mờ dần.",
						"thai": "พายุหิมะรุนแรงขึ้น ทัศนวิสัยเริ่มเลือนลาง",
						"hindi": "बर्फीला तूफान और तेज हो गया। दृश्यता कम हो रही है।"
					},
					"type": "speech"
				},
				{
					"type": "direction",
					"speaker": "eira",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "점점 더 심해지네요. 이 불안한 느낌이.",
						"english": "This uneasy feeling is getting stronger.",
						"japanese": "この不安な気持ち、だんだんひどくなってる。",
						"chinese": "这种不安的感觉，越来越强烈了。",
						"french": "Cette sensation d'inquiétude s'intensifie.",
						"spanish": "Este sentimiento inquietante se hace más fuerte.",
						"vietnamese": "Cảm giác bất an này càng lúc càng tồi tệ.",
						"thai": "ความรู้สึกไม่สบายใจนี้รุนแรงขึ้นเรื่อยๆ",
						"hindi": "यह बेचैनी बढ़ती जा रही है。"
					},
					"speaker": "eira",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "무슨 소리야, 에이라?",
						"english": "What are you talking about, Eira?",
						"japanese": "どうしたの、エイラ？",
						"chinese": "你在说什么，艾拉？",
						"french": "De quoi parles-tu, Eira ?",
						"spanish": "¿De qué hablas, Eira?",
						"vietnamese": "Em đang nói gì vậy, Eira?",
						"thai": "เธอพูดอะไรน่ะ ไอรา?",
						"hindi": "क्या कह रही हो, आइरा?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"emotion": "base",
					"content": {
						"korean": "…아무것도 아니에요. 착각이겠죠.",
						"english": "...It's nothing. Must be my imagination.",
						"japanese": "…なんでもないわ。気のせいよ。",
						"chinese": "…没什么。大概是错觉吧。",
						"french": "...Ce n'est rien. Une illusion, sans doute.",
						"spanish": "...No es nada. Debe ser mi imaginación.",
						"vietnamese": "...Không có gì đâu. Chắc là em nhầm lẫn thôi.",
						"thai": "...ไม่มีอะไรหรอกค่ะ คงคิดไปเอง",
						"hindi": "...कुछ नहीं। शायद मेरा वहम है।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "춥긴 엄청 춥네.",
						"english": "It's incredibly cold, though.",
						"japanese": "しかし、すごく寒いな。",
						"chinese": "不过，真是冷啊。",
						"french": "Il fait un froid glacial, quand même.",
						"spanish": "Hace un frío terrible, eso sí.",
						"vietnamese": "Dù sao thì cũng lạnh kinh khủng.",
						"thai": "หนาวจับใจเลยนะเนี่ย",
						"hindi": "पर, बहुत ठंड है।"
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
					"type": "speech",
					"content": {
						"korean": "얼음 동굴 깊숙이, 정체 모를 유물이 빛났다.",
						"english": "Deep within the ice cave, an unknown artifact glowed.",
						"japanese": "氷の洞窟の奥深くで、正体不明の遺物が輝いていた。",
						"chinese": "在冰窟深处，一件不明遗物闪耀着光芒。",
						"french": "Au plus profond de la caverne de glace, un artefact inconnu brillait.",
						"spanish": "En lo profundo de la cueva de hielo, un artefacto desconocido brillaba.",
						"vietnamese": "Sâu trong hang động băng, một di vật không rõ nguồn gốc phát sáng.",
						"thai": "ลึกเข้าไปในถ้ำน้ำแข็ง วัตถุโบราณปริศนากำลังเปล่งประกาย",
						"hindi": "बर्फ की गुफा की गहराइयों में, एक अज्ञात अवशेष चमक उठा।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"duration_ms": 500,
					"spot": [
						2,
						4
					],
					"action": "enter",
					"speaker": "eira",
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "…기록에 없는 유물이에요. 하지만… 낯설지 않아.",
						"english": "...It's an artifact not in the records. But... it's not unfamiliar.",
						"japanese": "…記録にない遺物だ。だが…見慣れないわけじゃない。",
						"chinese": "…这是记录中没有的遗物。但是…却不陌生。",
						"french": "...C'est un artefact qui n'est pas dans les registres. Pourtant... il ne m'est pas inconnu.",
						"spanish": "...Es un artefacto que no está en los registros. Pero... no me es desconocido.",
						"vietnamese": "...Đây là một di vật không có trong ghi chép. Nhưng... nó không xa lạ.",
						"thai": "...เป็นวัตถุโบราณที่ไม่มีในบันทึกเลยค่ะ แต่...ไม่รู้สึกแปลกหน้าเลย",
						"hindi": "...यह ऐसा अवशेष है जो अभिलेखों में नहीं है। पर... यह अनजाना नहीं लग रहा।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "환청인가? 뭔가 들리는 것 같아.",
						"english": "Is it an auditory hallucination? I think I hear something.",
						"japanese": "幻聴か？何かが聞こえる気がする。",
						"chinese": "是幻听吗？我好像听到了什么。",
						"french": "Est-ce une hallucination auditive ? J'ai l'impression d'entendre quelque chose.",
						"spanish": "¿Es una alucinación auditiva? Creo que escucho algo.",
						"vietnamese": "Là ảo giác thính giác ư? Tôi nghĩ tôi nghe thấy gì đó.",
						"thai": "หูฝาดไปหรือเปล่า? เหมือนได้ยินอะไรบางอย่าง",
						"hindi": "क्या यह मतिभ्रम है? मुझे कुछ सुनाई दे रहा है।"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "…저도 그래요. 마치 누군가 울부짖는 것 같기도 하고…",
						"english": "...Me too. It's like someone is wailing...",
						"japanese": "…私もです。まるで誰かが泣き叫んでいるような…",
						"chinese": "…我也是。好像有人在哭嚎…",
						"french": "...Moi aussi. C'est comme si quelqu'un hurlait...",
						"spanish": "...A mí también me pasa. Es como si alguien estuviera lamentándose...",
						"vietnamese": "...Tôi cũng vậy. Cứ như có ai đó đang gào thét...",
						"thai": "...ฉันก็เป็นค่ะ เหมือนมีใครกำลังร้องโหยหวน...",
						"hindi": "...मुझे भी ऐसा ही लग रहा है। जैसे कोई रो रहा हो..."
					},
					"emotion": "sad",
					"speaker": "eira",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "우리가 너무 지쳤나 봐.",
						"english": "We must be too exhausted.",
						"japanese": "私たち、疲れすぎているのかも。",
						"chinese": "我们大概是太累了。",
						"french": "Nous devons être trop épuisés.",
						"spanish": "Debemos estar demasiado agotados.",
						"vietnamese": "Chắc là chúng ta đã quá kiệt sức rồi.",
						"thai": "สงสัยเราจะเหนื่อยเกินไปแล้วล่ะ",
						"hindi": "लगता है हम बहुत थक गए हैं।"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "얼어붙은 낭떠러지. 되돌아갈 수 없었다.",
						"english": "A frozen precipice. There was no turning back.",
						"japanese": "凍てついた崖。もう引き返せなかった。",
						"chinese": "冰封的悬崖。已无法回头。",
						"french": "Un précipice gelé. Impossible de faire demi-tour.",
						"spanish": "Un precipicio helado. No había vuelta atrás.",
						"vietnamese": "Một vách đá đóng băng. Không thể quay lại được nữa.",
						"thai": "หน้าผาที่เยือกแข็ง ไม่อาจหวนกลับได้แล้ว",
						"hindi": "एक जमा हुआ कगार। वापस मुड़ना असंभव था।"
					}
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						5,
						3
					],
					"speaker": "eira",
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…이곳은… 기록에 없는 심연이에요.",
						"english": "...This place... an uncharted abyss.",
						"japanese": "「…ここは…記録にない深淵だ。」",
						"chinese": "“…这里是…记录中没有的深渊。”",
						"french": "...Cet endroit... un abysse inconnu.",
						"spanish": "...Este lugar... un abismo inaudito.",
						"vietnamese": "...Nơi đây... là vực sâu không có trong ghi chép.",
						"thai": "...ที่นี่...คือห้วงลึกที่ไม่เคยมีในบันทึก",
						"hindi": "...यह जगह... एक ऐसा अथाह कुंड है जो किसी अभिलेख में नहीं है।"
					},
					"emotion": "sad",
					"speaker": "eira"
				},
				{
					"type": "speech",
					"content": {
						"korean": "함정이었나?",
						"english": "Was it a trap?",
						"japanese": "「罠だったのか？」",
						"chinese": "“是陷阱吗？”",
						"french": "C'était un piège ?",
						"spanish": "¿Era una trampa?",
						"vietnamese": "Là bẫy ư?",
						"thai": "เป็นกับดักเหรอ?",
						"hindi": "क्या यह एक जाल था?"
					},
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "아니요. 이곳은… 모든 것을 잃은 자들의 절규를 담고 있어요.",
						"english": "No. This place... echoes with the despair of the lost.",
						"japanese": "「いいえ。ここは…すべてを失った者たちの絶叫を宿している。」",
						"chinese": "“不。这里…承载着失去一切之人的绝望嘶吼。”",
						"french": "Non. Cet endroit... contient les hurlements de ceux qui ont tout perdu.",
						"spanish": "No. Este lugar... guarda los lamentos de quienes lo perdieron todo.",
						"vietnamese": "Không. Nơi đây... chứa đựng tiếng gào thét của những kẻ đã mất đi tất cả.",
						"thai": "ไม่ ที่นี่...เก็บงำเสียงกรีดร้องของผู้ที่สูญเสียทุกสิ่งไว้",
						"hindi": "नहीं। यह जगह... उन लोगों की चीखों को समेटे हुए है जिन्होंने सब कुछ खो दिया है।"
					},
					"speaker": "eira",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "뭐? 그게 무슨 말이야!",
						"english": "What? What do you mean!",
						"japanese": "「何？どういう意味だ！」",
						"chinese": "“什么？那是什么意思！”",
						"french": "Quoi ? Qu'est-ce que tu racontes !",
						"spanish": "¿Qué? ¡¿Qué quieres decir?!",
						"vietnamese": "Cái gì? Ngươi nói vậy là có ý gì!",
						"thai": "อะไรนะ? หมายความว่ายังไง!",
						"hindi": "क्या? तुम्हारा क्या मतलब है!"
					},
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "거대한 그림자가 앞을 가로막았다. 압도적인 기운.",
						"english": "A colossal shadow blocked the way. An overwhelming aura.",
						"japanese": "「巨大な影が道を阻んだ。圧倒的な気配。」",
						"chinese": "“巨大的身影挡住了去路。压倒性的气势。”",
						"french": "Une ombre colossale barra le chemin. Une aura écrasante.",
						"spanish": "Una sombra gigantesca bloqueó el camino. Un aura abrumadora.",
						"vietnamese": "Một cái bóng khổng lồ chắn ngang. Khí thế áp đảo.",
						"thai": "เงาขนาดมหึมาขวางทางไว้ บรรยากาศที่กดดัน",
						"hindi": "एक विशाल परछाई ने रास्ता रोक लिया। एक जबरदस्त आभा।"
					}
				},
				{
					"content": {
						"korean": "하찮은 것들. 내 영역을 침범하다니.",
						"english": "Insignificant beings. To invade my domain.",
						"japanese": "「取るに足らぬ者どもめ。私の領域を侵すとは。」",
						"chinese": "“渺小的东西。竟敢侵犯我的领域。”",
						"french": "Créatures insignifiantes. Oser envahir mon domaine.",
						"spanish": "Seres insignificantes. ¡Invadiendo mi dominio!",
						"vietnamese": "Những kẻ hèn mọn. Dám xâm phạm lãnh địa của ta.",
						"thai": "พวกไร้ค่า บังอาจบุกรุกอาณาเขตของข้า",
						"hindi": "तुच्छ प्राणी। मेरे क्षेत्र में घुसपैठ करने की हिम्मत।"
					},
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "네가… 이 모든 것을 꾸민 건가?",
						"english": "Did you... orchestrate all of this?",
						"japanese": "「お前が…この全てを企んだのか？」",
						"chinese": "“你…这一切都是你策划的吗？”",
						"french": "C'est toi... qui as orchestré tout cela ?",
						"spanish": "¿Fuiste tú... quien planeó todo esto?",
						"vietnamese": "Ngươi... là kẻ đã bày ra tất cả chuyện này sao?",
						"thai": "แก...คือคนบงการเรื่องทั้งหมดนี่เหรอ?",
						"hindi": "क्या तुमने... यह सब किया है?"
					}
				},
				{
					"action": "enter",
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "…잊혀진 룬… 이 존재는…!",
						"english": "...The forgotten rune... This being is...!",
						"japanese": "「…忘れ去られたルーン…この存在は…！」",
						"chinese": "“…被遗忘的符文…这个存在是…！”",
						"french": "...La rune oubliée... Cet être est... !",
						"spanish": "...La runa olvidada... ¡Esta entidad es...!",
						"vietnamese": "...Rune đã bị lãng quên... Thực thể này là...!",
						"thai": "...รูนที่ถูกลืม...สิ่งมีชีวิตนี้คือ...!",
						"hindi": "...भुला हुआ रूण... यह अस्तित्व है...!"
					},
					"speaker": "eira",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "알려고 하지 마라. 그저 얼어붙어 사라질 뿐.",
						"english": "Do not try to know. Just freeze and vanish.",
						"japanese": "「知ろうとするな。ただ凍りつき、消え去るがいい。」",
						"chinese": "“别想知道。只需冻结消散即可。”",
						"french": "N'essaie pas de savoir. Contente-toi de geler et de disparaître.",
						"spanish": "No intentes saber. Simplemente congélate y desaparece.",
						"vietnamese": "Đừng cố gắng tìm hiểu. Chỉ cần đóng băng và biến mất.",
						"thai": "อย่าพยายามรู้เลย แค่แข็งตัวแล้วหายไปซะ",
						"hindi": "जानने की कोशिश मत करो। बस जम जाओ और गायब हो जाओ।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "우린 여기서 멈추지 않아!",
						"english": "We won't stop here!",
						"japanese": "「私たちはここで止まらない！」",
						"chinese": "“我们不会就此止步！”",
						"french": "Nous ne nous arrêterons pas ici !",
						"spanish": "¡No nos detendremos aquí!",
						"vietnamese": "Chúng ta sẽ không dừng lại ở đây!",
						"thai": "เราจะไม่หยุดแค่นี้!",
						"hindi": "हम यहीं नहीं रुकेंगे!"
					}
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "거대한 그림자가 연기처럼 사라졌다.",
						"english": "The colossal shadow vanished like smoke.",
						"japanese": "巨大な影が煙のように消え去った。",
						"chinese": "巨大的黑影如烟般消散了。",
						"french": "L'ombre colossale disparut comme de la fumée.",
						"spanish": "La sombra colosal se desvaneció como humo.",
						"vietnamese": "Bóng đen khổng lồ biến mất như làn khói.",
						"thai": "เงาขนาดยักษ์หายไปราวกับควัน",
						"hindi": "विशाल परछाई धुएँ की तरह गायब हो गई।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "random_boss",
					"content": {
						"korean": "…이 모든 고통은… 끝나지 않을 것이다…",
						"english": "...All this suffering... will never end...",
						"japanese": "…この全ての苦痛は…終わらないだろう…",
						"chinese": "…所有的痛苦…都不会结束…",
						"french": "...Toute cette souffrance... ne finira jamais...",
						"spanish": "...Todo este sufrimiento... nunca terminará...",
						"vietnamese": "...Tất cả nỗi đau này... sẽ không bao giờ kết thúc...",
						"thai": "...ความเจ็บปวดทั้งหมดนี้...จะไม่มีวันสิ้นสุด...",
						"hindi": "...यह सारा दुख... कभी खत्म नहीं होगा..."
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "끝나지 않는다고?",
						"english": "Never-ending?",
						"japanese": "終わらないだと？",
						"chinese": "不会结束？",
						"french": "Sans fin ?",
						"spanish": "¿Interminable?",
						"vietnamese": "Không kết thúc ư?",
						"thai": "ไม่มีวันสิ้นสุดงั้นเหรอ?",
						"hindi": "कभी खत्म नहीं होगा?"
					},
					"type": "speech"
				},
				{
					"type": "direction",
					"speaker": "eira",
					"action": "enter",
					"spot": [
						3,
						3
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "…이 룬은… 끊임없이 반복되는… 비극을 기록하고 있어요.",
						"english": "...These runes... record an endlessly repeating... tragedy.",
						"japanese": "…このルーンは…絶え間なく繰り返される…悲劇を記録している。",
						"chinese": "…这些符文…记录着不断重演的…悲剧。",
						"french": "...Ces runes... enregistrent une tragédie... qui se répète sans fin.",
						"spanish": "...Estas runas... registran una tragedia... que se repite sin cesar.",
						"vietnamese": "...Những ký tự này... ghi lại một bi kịch... lặp đi lặp lại không ngừng.",
						"thai": "...รูนเหล่านี้...บันทึกโศกนาฏกรรม...ที่เกิดขึ้นซ้ำๆ ไม่สิ้นสุด",
						"hindi": "...ये रुन्स... अंतहीन दोहराई जाने वाली... त्रासदी को दर्ज कर रहे हैं।"
					},
					"speaker": "eira",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "설원은 잠시 고요해졌다. 그러나, 길 잃은 영혼들의 속삭임은 멈추지 않았다.",
						"english": "The snowy field fell silent for a moment. But the whispers of lost souls did not cease.",
						"japanese": "雪原は一瞬静寂に包まれた。しかし、迷いし魂たちの囁きは止まなかった。",
						"chinese": "雪原短暂地归于平静。然而，迷失灵魂的低语并未停止。",
						"french": "La plaine enneigée se tut un instant. Mais les murmures des âmes perdues ne s'arrêtèrent pas.",
						"spanish": "El campo nevado se quedó en silencio por un momento. Pero los susurros de las almas perdidas no cesaron.",
						"vietnamese": "Cánh đồng tuyết im lặng trong chốc lát. Nhưng tiếng thì thầm của những linh hồn lạc lối vẫn không ngừng.",
						"thai": "ลานหิมะเงียบลงชั่วขณะ แต่เสียงกระซิบของวิญญาณที่หลงทางยังคงไม่หยุดหย่อน",
						"hindi": "बर्फीला मैदान क्षण भर के लिए शांत हो गया। लेकिन भटकी हुई आत्माओं की फुसफुसाहट बंद नहीं हुई।"
					},
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "압도적인 힘에 탐험대는 무릎을 꿇었다.",
						"english": "Overwhelmed by power, the expedition fell to its knees.",
						"japanese": "圧倒的な力に、探検隊は膝を屈した。",
						"chinese": "在压倒性的力量面前，探险队跪下了。",
						"french": "Submergée par une force écrasante, l'expédition tomba à genoux.",
						"spanish": "Abrumada por un poder inmenso, la expedición cayó de rodillas.",
						"vietnamese": "Bị áp đảo bởi sức mạnh, đội thám hiểm đã quỳ gối.",
						"thai": "ด้วยพลังที่ล้นหลาม ทีมสำรวจคุกเข่าลง",
						"hindi": "ज़बरदस्त शक्ति के सामने, अभियान दल घुटनों पर आ गया।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "후후… 얼음 속에 갇혀라. 영원히.",
						"english": "Hehe... Be trapped in ice. Forever.",
						"japanese": "フフ…氷の中に閉じ込められろ。永遠に。",
						"chinese": "呵呵…被困在冰中吧。永远。",
						"french": "Haha... Sois piégé dans la glace. Pour l'éternité.",
						"spanish": "Jaja... Quédate atrapado en el hielo. Para siempre.",
						"vietnamese": "Hehe... Hãy bị mắc kẹt trong băng. Mãi mãi.",
						"thai": "ฮึๆ...จงถูกขังอยู่ในน้ำแข็ง ชั่วนิรันดร์",
						"hindi": "हीही... बर्फ में फँस जाओ। हमेशा के लिए।"
					},
					"emotion": "happy",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "…젠장. 아직… 끝나지 않았어.",
						"english": "...Damn it. It's not... over yet.",
						"japanese": "…ちくしょう。まだ…終わってない。",
						"chinese": "…该死。还没…结束。",
						"french": "...Maudit. Ce n'est pas... encore fini.",
						"spanish": "...Maldita sea. Todavía no... ha terminado.",
						"vietnamese": "...Chết tiệt. Vẫn chưa... kết thúc.",
						"thai": "...บ้าจริง. มันยัง...ไม่จบ",
						"hindi": "...धिक्कार है। यह अभी... खत्म नहीं हुआ है।"
					},
					"type": "speech"
				},
				{
					"speaker": "eira",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "…여기서 멈출 순 없어. 진실은… 아직 저 너머에.",
						"english": "...I can't stop here. The truth is... still beyond.",
						"japanese": "…ここで止まるわけにはいかない。真実は…まだその先に。",
						"chinese": "…我不能停在这里。真相…还在那更远的地方。",
						"french": "...Je ne peux pas m'arrêter ici. La vérité est... encore au-delà.",
						"spanish": "...No puedo parar aquí. La verdad está... todavía más allá.",
						"vietnamese": "...Tôi không thể dừng lại ở đây. Sự thật... vẫn còn ở phía trước.",
						"thai": "...ฉันหยุดที่นี่ไม่ได้ ความจริง...ยังคงอยู่ไกลออกไป",
						"hindi": "...मैं यहाँ रुक नहीं सकता। सच... अभी भी उस पार है।"
					},
					"emotion": "sad",
					"speaker": "eira"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"절규의 설원. 고요하지만 낯선 절규가 맴도는 곳.",
			"전설의 유물? 탐험대는 길을 잃었다.",
			"차가운 얼음은 모든 것을 잊게 한다.",
			"그리고 — 그들은 덫에 걸린 줄도 몰랐다."
		],
		"english": [
			"The Screaming Snowfield. A silent place where an unfamiliar scream echoes.",
			"A legendary artifact? The expedition team is lost.",
			"The cold ice makes you forget everything.",
			"And — they didn't even know they were trapped."
		],
		"japanese": [
			"絶叫の雪原。静寂だが、見知らぬ叫びがこだまする場所。",
			"伝説の遺物？探検隊は道に迷った。",
			"冷たい氷はすべてを忘れさせる。",
			"そして — 彼らは罠にかかったことさえ知らなかった。"
		],
		"chinese": [
			"尖叫雪原。一个寂静却回荡着陌生尖叫的地方。",
			"传说中的遗物？探险队迷路了。",
			"冰冷的寒意让人忘却一切。",
			"而且——他们甚至不知道自己已落入陷阱。"
		],
		"french": [
			"Le Champ de Neige Hurlant. Un lieu silencieux où résonne un cri inconnu.",
			"Un artefact légendaire ? L'équipe d'exploration est perdue.",
			"La glace froide fait tout oublier.",
			"Et — ils ne savaient même pas qu'ils étaient piégés."
		],
		"spanish": [
			"El Campo de Nieve Aullante. Un lugar silencioso donde resuena un grito desconocido.",
			"¿Un artefacto legendario? El equipo de expedición está perdido.",
			"El hielo frío hace que uno lo olvide todo.",
			"Y — ni siquiera sabían que estaban atrapados."
		],
		"vietnamese": [
			"Tuyết Nguyên Hét La. Một nơi tĩnh lặng nhưng văng vẳng tiếng kêu la xa lạ.",
			"Di vật huyền thoại? Đoàn thám hiểm đã lạc lối.",
			"Băng giá lạnh lẽo khiến mọi thứ tan biến.",
			"Và — họ thậm chí không biết mình đã rơi vào bẫy."
		],
		"thai": [
			"ทุ่งหิมะกรีดร้อง สถานที่อันเงียบสงบแต่เสียงกรีดร้องแปลกๆ ยังคงก้องกังวาน",
			"วัตถุโบราณในตำนาน? ทีมสำรวจหลงทางแล้ว",
			"น้ำแข็งที่เย็นยะเยือกทำให้ลืมทุกสิ่ง",
			"และ — พวกเขาไม่รู้ด้วยซ้ำว่าถูกกับดัก"
		],
		"hindi": [
			"चीखता बर्फीला मैदान। एक शांत जगह जहाँ एक अज्ञात चीख गूँजती है।",
			"एक पौराणिक कलाकृति? अभियान दल रास्ता भटक गया है।",
			"ठंडी बर्फ सब कुछ भुला देती है।",
			"और — उन्हें यह भी नहीं पता था कि वे फँस गए हैं।"
		]
	}
} as const;
