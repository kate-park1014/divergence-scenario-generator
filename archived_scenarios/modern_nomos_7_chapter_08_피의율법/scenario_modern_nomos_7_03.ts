export const scenario_modern_nomos_7_03 = {
	"scenario_id": "modern_nomos_7_03",
	"order": 3,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"dax": {
			"id": "mon_08d5b43e-f9ab-4469-9064-855e170b0cdc",
			"name": {
				"korean": "닥스",
				"english": "Dax",
				"japanese": "ダックス",
				"chinese": "达克斯",
				"french": "Dax",
				"spanish": "Dax",
				"vietnamese": "Dax",
				"thai": "แด็กซ์",
				"hindi": "डैक्स"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/84bb11db-6eb4-4500-d274-222e8b100100/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/5d325a75-bd91-4758-7b3f-ad9a97e52700/public"
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
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "시간의 흐름이 끊어진 고대 기록 보관소. 낡은 종이들이 공중에 떠다닌다.",
						"english": "Ancient archives where the flow of time is broken. Old papers float in the air.",
						"japanese": "時の流れが途絶えた古代の記録保管庫。古い紙が宙に漂っている。",
						"chinese": "时间流逝中断的古代档案室。旧纸张在空中漂浮。",
						"french": "Archives anciennes où le cours du temps est brisé. De vieux papiers flottent dans l'air.",
						"spanish": "Archivos antiguos donde el flujo del tiempo está roto. Viejos papeles flotan en el aire.",
						"vietnamese": "Kho lưu trữ cổ đại nơi dòng thời gian bị đứt đoạn. Những tờ giấy cũ bay lơ lửng trong không khí.",
						"thai": "หอจดหมายเหตุโบราณที่กระแสเวลาขาดสะบั้น กระดาษเก่าๆ ลอยอยู่ในอากาศ",
						"hindi": "प्राचीन अभिलेखागार जहाँ समय का प्रवाह टूट गया है। पुराने कागज़ हवा में तैर रहे हैं।"
					}
				},
				{
					"speaker": "dax",
					"action": "enter",
					"type": "direction",
					"spot": [
						4,
						3
					],
					"duration_ms": 500
				},
				{
					"speaker": "dax",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "...왔군. 이 모든 혼란의 원인. '피의 율법'을 찾고 있었지?",
						"english": "...You're here. The source of all this chaos. You were looking for the 'Law of Blood', weren't you?",
						"japanese": "…来たか。この混乱の元凶。‘血の律法’を探していたんだろう？",
						"chinese": "……你来了。所有混乱的根源。你在找‘血之法则’，对吗？",
						"french": "...Te voilà. La source de tout ce chaos. Tu cherchais la 'Loi du Sang', n'est-ce pas ?",
						"spanish": "...Has llegado. La fuente de todo este caos. Buscabas la 'Ley de Sangre', ¿verdad?",
						"vietnamese": "...Ngươi đến rồi. Nguồn gốc của mọi hỗn loạn này. Ngươi đang tìm 'Luật Máu' phải không?",
						"thai": "...มาแล้วสินะ ต้นเหตุของความวุ่นวายทั้งหมด กำลังตามหา 'กฎแห่งเลือด' ใช่ไหม?",
						"hindi": "...तुम आ गए। इस सारी अराजकता का स्रोत। तुम 'रक्त का नियम' ढूंढ रहे थे, है ना?"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "당신은…?",
						"english": "You are...?",
						"japanese": "あなたは…？",
						"chinese": "你是……？",
						"french": "Vous êtes...?",
						"spanish": "¿Usted es...?",
						"vietnamese": "Ngươi là...?",
						"thai": "ท่านคือ...?",
						"hindi": "आप कौन हैं...?"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "닥스. 왜곡된 기록들을 연구하는 자. 이곳은… 모든 것이 뒤섞여 있어.",
						"english": "Dax. A researcher of distorted records. This place... everything is intertwined.",
						"japanese": "ダックス。歪んだ記録を研究する者。ここは…すべてが混じり合っている。",
						"chinese": "达克斯。研究扭曲记录的人。这里……一切都交织在一起。",
						"french": "Dax. Un chercheur des archives déformées. Cet endroit... tout est entrelacé.",
						"spanish": "Dax. Un investigador de registros distorsionados. Este lugar... todo está entrelazado.",
						"vietnamese": "Dax. Kẻ nghiên cứu những ghi chép bị bóp méo. Nơi đây... mọi thứ đều lẫn lộn.",
						"thai": "แด็กซ์ ผู้ศึกษาบันทึกที่บิดเบือน ที่นี่... ทุกสิ่งปะปนกันไปหมด",
						"hindi": "डैक्स। विकृत अभिलेखों का शोधकर्ता। यह जगह... सब कुछ आपस में गुंथा हुआ है।"
					},
					"speaker": "dax",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "맹세와 관련된 기록들이라던데.",
						"english": "Records related to vows, so they say.",
						"japanese": "誓いに関連する記録だとか。",
						"chinese": "据说这里是关于誓言的记录。",
						"french": "Des archives liées aux serments, paraît-il.",
						"spanish": "Registros relacionados con juramentos, según dicen.",
						"vietnamese": "Nghe nói đây là những ghi chép liên quan đến lời thề.",
						"thai": "บันทึกที่เกี่ยวข้องกับคำสาบาน ว่ากันว่าอย่างนั้น",
						"hindi": "शपथों से संबंधित अभिलेख, ऐसा कहते हैं।"
					}
				},
				{
					"speaker": "dax",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "그래. '깨진 맹세는 그림자를 남긴다'… 이 벽에 쓰인 글귀가 모든 것을 설명하지.",
						"english": "Indeed. 'Broken vows leave shadows'... the inscription on this wall explains everything.",
						"japanese": "そうだ。『破られた誓いは影を残す』…この壁の言葉がすべてを物語っている。",
						"chinese": "没错。‘破碎的誓言留下阴影’……这面墙上的铭文解释了一切。",
						"french": "En effet. 'Les serments brisés laissent des ombres'... l'inscription sur ce mur explique tout.",
						"spanish": "Exacto. 'Los juramentos rotos dejan sombras'... la inscripción en esta pared lo explica todo.",
						"vietnamese": "Đúng vậy. 'Lời thề bị phá vỡ để lại bóng tối'... dòng chữ trên bức tường này giải thích tất cả.",
						"thai": "ใช่แล้ว 'คำสาบานที่แตกสลายทิ้งร่องรอยแห่งเงามืด'... ข้อความบนกำแพงนี้อธิบายทุกอย่าง",
						"hindi": "हाँ। 'टूटे हुए वादे परछाई छोड़ जाते हैं'... इस दीवार पर लिखी इबारत सब कुछ समझाती है।"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "dax"
				},
				{
					"speaker": "dax",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "여기는… 가장 뒤틀린 기록들이 보관된 곳이다.",
						"english": "This is… where the most twisted records are kept.",
						"japanese": "ここは…最も歪んだ記録が保管されている場所だ。",
						"chinese": "这里是……保存着最扭曲记录的地方。",
						"french": "C'est ici… que sont conservés les enregistrements les plus tordus.",
						"spanish": "Aquí es… donde se guardan los registros más retorcidos.",
						"vietnamese": "Đây là… nơi lưu giữ những ghi chép méo mó nhất.",
						"thai": "ที่นี่คือ… ที่เก็บรักษาบันทึกที่บิดเบี้ยวที่สุด",
						"hindi": "यह वो जगह है… जहाँ सबसे विकृत अभिलेख रखे गए हैं।"
					}
				},
				{
					"content": {
						"korean": "기록들이… 살아있는 것 같아.",
						"english": "The records… they seem alive.",
						"japanese": "記録が…まるで生きているようだ。",
						"chinese": "这些记录……似乎还活着。",
						"french": "Les enregistrements… semblent vivants.",
						"spanish": "Los registros… parecen vivos.",
						"vietnamese": "Những ghi chép… dường như còn sống.",
						"thai": "บันทึกเหล่านี้… ดูเหมือนมีชีวิต",
						"hindi": "अभिलेख… मानो जीवित हैं।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "시간이 뒤섞여 있어. 과거의 환영이 현재에 개입하고 있지.",
						"english": "Time is jumbled. Visions of the past are intruding on the present.",
						"japanese": "時間が入り混じっている。過去の幻影が現在に干渉している。",
						"chinese": "时间混杂了。过去的幻象正在干预现在。",
						"french": "Le temps est chamboulé. Des visions du passé interfèrent avec le présent.",
						"spanish": "El tiempo está revuelto. Visiones del pasado interfieren con el presente.",
						"vietnamese": "Thời gian bị xáo trộn. Những ảo ảnh của quá khứ đang can thiệp vào hiện tại.",
						"thai": "เวลากลับปนเป ภาพหลอนจากอดีตกำลังแทรกแซงปัจจุบัน",
						"hindi": "समय उलझा हुआ है। अतीत के भ्रम वर्तमान में दखल दे रहे हैं।"
					},
					"speaker": "dax",
					"type": "speech"
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이건 '피의 율법'에 대한 내용인가?",
						"english": "Is this about the 'Law of Blood'?",
						"japanese": "これは「血の律法」についての内容か？",
						"chinese": "这是关于‘血之律法’的内容吗？",
						"french": "Est-ce que c'est à propos de la 'Loi du Sang' ?",
						"spanish": "¿Es esto sobre la 'Ley de Sangre'?",
						"vietnamese": "Đây có phải là về 'Luật Máu' không?",
						"thai": "นี่เกี่ยวกับ 'กฎแห่งเลือด' หรือไม่?",
						"hindi": "क्या यह 'रक्त के नियम' के बारे में है?"
					}
				},
				{
					"speaker": "dax",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "모호한 언급뿐… 하지만 그 단편들이 진실을 숨기고 있다.",
						"english": "Only vague mentions… but these fragments hide the truth.",
						"japanese": "曖昧な言及ばかり…しかしその断片が真実を隠している。",
						"chinese": "只有模糊的提及……但这些片段隐藏着真相。",
						"french": "Seules des mentions vagues… mais ces fragments cachent la vérité.",
						"spanish": "Solo menciones vagas… pero estos fragmentos esconden la verdad.",
						"vietnamese": "Chỉ là những đề cập mơ hồ… nhưng những mảnh ghép này đang che giấu sự thật.",
						"thai": "มีการกล่าวถึงอย่างคลุมเครือ… แต่เศษเสี้ยวเหล่านั้นซ่อนเร้นความจริงอยู่",
						"hindi": "केवल अस्पष्ट उल्लेख… पर ये अंश सच्चाई छिपाते हैं।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"speaker": "dax"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "기록을 해독할수록… 더 깊은 광기가 느껴진다.",
						"english": "The more I decipher the records… the deeper the madness I feel.",
						"japanese": "記録を解読するほど…より深い狂気を感じる。",
						"chinese": "越是解读这些记录……越能感受到更深的疯狂。",
						"french": "Plus je déchiffre les enregistrements… plus je ressens une folie profonde.",
						"spanish": "Cuanto más descifro los registros… más profunda es la locura que siento.",
						"vietnamese": "Càng giải mã những ghi chép… càng cảm nhận được sự điên loạn sâu sắc hơn.",
						"thai": "ยิ่งถอดรหัสบันทึก… ยิ่งรู้สึกถึงความบ้าคลั่งที่ลึกซึ้งขึ้น",
						"hindi": "जितना मैं अभिलेखों को समझता हूँ… उतनी गहरी सनक महसूस होती है।"
					},
					"speaker": "dax",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "진실은 대체 뭐야?",
						"english": "What exactly is the truth?",
						"japanese": "真実はいったい何なんだ？",
						"chinese": "真相到底是什么？",
						"french": "Quelle est la vérité, au juste ?",
						"spanish": "¿Cuál es la verdad, exactamente?",
						"vietnamese": "Sự thật rốt cuộc là gì?",
						"thai": "ความจริงคืออะไรกันแน่?",
						"hindi": "आखिर सच क्या है?"
					},
					"emotion": "base"
				},
				{
					"speaker": "dax",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "심판자의 결정은 때론 불합리해 보이지만, 결국 모두를 위한 길이라 말하지.",
						"english": "The Arbiter's decisions sometimes seem unreasonable, yet they say it's for the good of all.",
						"japanese": "審判者の決定は時に不合理に見えるが、結局は皆のための道だと言う。",
						"chinese": "审判者的决定有时看似不合理，但他们说那最终是为了所有人。",
						"french": "Les décisions de l'Arbitre semblent parfois déraisonnables, mais on dit que c'est pour le bien de tous.",
						"spanish": "Las decisiones del Juez a veces parecen irrazonables, pero dicen que es por el bien de todos.",
						"vietnamese": "Quyết định của Người Phán Quyết đôi khi có vẻ vô lý, nhưng họ nói đó là con đường vì tất cả mọi người.",
						"thai": "การตัดสินใจของผู้พิพากษาบางครั้งดูเหมือนไม่สมเหตุสมผล แต่ก็บอกว่าเป็นทางออกเพื่อทุกคน",
						"hindi": "न्यायाधीश के निर्णय कभी-कभी अनुचित लगते हैं, फिर भी वे कहते हैं कि यह सभी के भले के लिए है।"
					}
				},
				{
					"content": {
						"korean": "모두를 위한 길… 정말일까?",
						"english": "A path for all… Really?",
						"japanese": "皆のための道…本当に？",
						"chinese": "为所有人铺设的道路……真的吗？",
						"french": "Un chemin pour tous… Vraiment ?",
						"spanish": "¿Un camino para todos… De verdad?",
						"vietnamese": "Con đường vì tất cả… Thật sao?",
						"thai": "ทางออกเพื่อทุกคน… จริงหรือ?",
						"hindi": "सभी के लिए एक रास्ता… सच में?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "하지만 그 목소리에는 미묘한 떨림이 있었어. 기록을 남긴 자의 두려움이지.",
						"english": "But there was a subtle tremor in that voice. The fear of the one who left the records.",
						"japanese": "しかし、その声には微かな震えがあった。記録を残した者の恐怖だ。",
						"chinese": "但那个声音中带着一丝微妙的颤抖。那是留下记录之人的恐惧。",
						"french": "Mais il y avait un subtil tremblement dans cette voix. La peur de celui qui a laissé ces enregistrements.",
						"spanish": "Pero había un sutil temblor en esa voz. El miedo de quien dejó los registros.",
						"vietnamese": "Nhưng trong giọng nói đó có một sự run rẩy tinh tế. Đó là nỗi sợ hãi của người đã để lại những ghi chép này.",
						"thai": "แต่ในน้ำเสียงนั้นมีความสั่นไหวเล็กน้อย นั่นคือความกลัวของผู้ที่บันทึกสิ่งนี้ไว้",
						"hindi": "पर उस आवाज़ में एक सूक्ष्म कंपकंपी थी। अभिलेख छोड़ने वाले का डर।"
					},
					"speaker": "dax",
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						2,
						4
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "dax"
				},
				{
					"content": {
						"korean": "이 이상은… 위험하다. 기록의 광기가 너희를 집어삼킬 거야.",
						"english": "Beyond this… lies danger. The madness of the records will consume you.",
						"japanese": "これ以上は…危険だ。記録の狂気がお前たちを飲み込むだろう。",
						"chinese": "到此为止…很危险。记录的疯狂会吞噬你们。",
						"french": "Au-delà… le danger vous guette. La folie des archives vous dévorera.",
						"spanish": "Más allá… hay peligro. La locura de los registros os consumirá.",
						"vietnamese": "Đi xa hơn nữa… nguy hiểm lắm. Sự điên loạn của ký ức sẽ nuốt chửng các ngươi.",
						"thai": "เลยจากนี้ไป…อันตราย ความวิกลจริตของบันทึกจะกลืนกินพวกเจ้า",
						"hindi": "इससे आगे… खतरा है। अभिलेखों का पागलपन तुम्हें निगल जाएगा。"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "dax"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "멈출 수 없어. 진실을 봐야 해.",
						"english": "I can't stop. I must see the truth.",
						"japanese": "止められない。真実を見なければ。",
						"chinese": "无法停止。必须看到真相。",
						"french": "Je ne peux pas m'arrêter. Je dois voir la vérité.",
						"spanish": "No puedo parar. Debo ver la verdad.",
						"vietnamese": "Không thể dừng lại. Ta phải thấy sự thật.",
						"thai": "หยุดไม่ได้ ข้าต้องเห็นความจริง",
						"hindi": "रुक नहीं सकता। मुझे सच देखना होगा।"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "…그럼 이걸 가져가. '피의 율법'의 핵심이 담긴 단편이다. 언젠가 도움이 될 거다.",
						"english": "...Then take this. It's a fragment containing the core of the 'Law of Blood'. It might help you someday.",
						"japanese": "…ならば、これを持っていけ。『血の律法』の核心が込められた断片だ。いつか役に立つだろう。",
						"chinese": "…那么，拿着这个。这是蕴含着‘血之律法’核心的碎片。总有一天会帮到你。",
						"french": "...Alors prends ceci. C'est un fragment contenant le cœur de la 'Loi du Sang'. Cela pourra t'être utile un jour.",
						"spanish": "...Entonces, toma esto. Es un fragmento que contiene el núcleo de la 'Ley de Sangre'. Algún día te será de ayuda.",
						"vietnamese": "…Vậy thì, hãy cầm lấy cái này. Đây là một mảnh chứa đựng cốt lõi của 'Luật Máu'. Nó sẽ giúp ích cho ngươi vào một ngày nào đó.",
						"thai": "…งั้นก็เอาสิ่งนี้ไป นี่คือชิ้นส่วนที่บรรจุแก่นแท้ของ 'กฎแห่งเลือด' ไว้ สักวันมันคงมีประโยชน์",
						"hindi": "यह ले लो। यह 'रक्त के नियम' का मूल अंश है। यह तुम्हें कभी-न-कभी काम आएगा।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "dax"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "기록의 심연이 탐험대를 에워쌌다. 더 이상 돌아갈 수 없는 길이다.",
						"english": "The abyss of records enveloped the expedition. A path from which there is no return.",
						"japanese": "記録の深淵が探検隊を包み込んだ。もはや引き返せない道だ。",
						"chinese": "记录的深渊吞噬了探险队。这是一条无法回头的路。",
						"french": "L'abîme des archives engloutit l'expédition. C'est un chemin sans retour.",
						"spanish": "El abismo de los registros envolvió a la expedición. Un camino sin retorno.",
						"vietnamese": "Vực thẳm của ký ức đã bao trùm đoàn thám hiểm. Một con đường không thể quay lại.",
						"thai": "ห้วงลึกแห่งบันทึกกลืนกินคณะสำรวจ เส้นทางที่ไม่มีวันหวนกลับ",
						"hindi": "अभिलेखों के अथाह सागर ने अभियान दल को घेर लिया। यह एक ऐसा मार्ग है जहाँ से वापसी नहीं।"
					},
					"emotion": "base"
				},
				{
					"speaker": "dax",
					"direction": "down",
					"duration_ms": 400,
					"action": "exit",
					"type": "direction"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"emotion": "sad",
					"content": {
						"korean": "크아악… 결국, 너희도… 허무에 갇힐 것이다… 맹세 없는 존재는…",
						"english": "Grraahh… In the end, you too… will be trapped in nihility… Beings without an oath are…",
						"japanese": "ぐああ…結局、お前たちも…虚無に囚われるだろう…誓いなき存在は…",
						"chinese": "呃啊…最终，你们也会…被囚禁于虚无…没有誓言的存在…",
						"french": "Grraahh… Au final, vous aussi… serez piégés dans le néant… Les êtres sans serment sont…",
						"spanish": "¡Arghh…! Al final, vosotros también… seréis atrapados en la nulidad… Los seres sin juramento son…",
						"vietnamese": "Khốn kiếp… Cuối cùng, các ngươi cũng… sẽ bị mắc kẹt trong hư vô… Những kẻ không có lời thề thì…",
						"thai": "อ๊าก… ในที่สุด พวกเจ้าก็… จะถูกขังอยู่ในความว่างเปล่า… ผู้ที่ไร้ซึ่งคำสาบานนั้น…",
						"hindi": "आह्ह… अंत में, तुम भी… शून्यता में फँस जाओगे… बिना शपथ के प्राणी…"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…끝난 건가?",
						"english": "...Is it over?",
						"japanese": "…終わったのか？",
						"chinese": "…结束了吗？",
						"french": "...C'est fini ?",
						"spanish": "¿…Ha terminado?",
						"vietnamese": "…Kết thúc rồi sao?",
						"thai": "…จบแล้วหรือ?",
						"hindi": "...क्या यह खत्म हो गया?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"action": "enter",
					"type": "direction",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"speaker": "dax"
				},
				{
					"speaker": "dax",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "아직 아니야. 이 기록들은… 더 깊은 곳으로 이어져 있어.",
						"english": "Not yet. These records... they lead to something deeper.",
						"japanese": "まだだ。この記録は…もっと深い場所へと繋がっている。",
						"chinese": "还没。这些记录…通向更深之处。",
						"french": "Pas encore. Ces registres... ils mènent à quelque chose de plus profond.",
						"spanish": "Todavía no. Estos registros... conducen a algo más profundo.",
						"vietnamese": "Chưa đâu. Những ghi chép này… dẫn đến một nơi sâu thẳm hơn.",
						"thai": "ยังไม่ใช่. บันทึกเหล่านี้... นำไปสู่สิ่งที่ลึกซึ้งกว่านั้น",
						"hindi": "अभी नहीं। ये अभिलेख… और गहरी जगह तक ले जाते हैं।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "혼돈의 기록이 잠시 잠잠해졌다. 하지만 진실은 더욱 깊은 미궁으로 이끌었다.",
						"english": "The chaotic records fell silent for a moment. But the truth led to an even deeper labyrinth.",
						"japanese": "混沌の記録は一時的に沈黙した。しかし、真実はさらに深い迷宮へと誘った。",
						"chinese": "混沌的记录暂时平息了。然而，真相却将我们引向更深的迷宫。",
						"french": "Les registres chaotiques se sont tus un instant. Mais la vérité menait à un labyrinthe encore plus profond.",
						"spanish": "Los registros caóticos se silenciaron por un momento. Pero la verdad condujo a un laberinto aún más profundo.",
						"vietnamese": "Những ghi chép hỗn loạn tạm thời lắng xuống. Nhưng sự thật đã dẫn lối đến một mê cung sâu thẳm hơn.",
						"thai": "บันทึกแห่งความโกลาหลสงบลงชั่วขณะ แต่ความจริงกลับนำไปสู่เขาวงกตที่ลึกซึ้งยิ่งกว่า",
						"hindi": "अराजक अभिलेख कुछ देर के लिए शांत हो गए। लेकिन सच्चाई ने और भी गहरी भूलभुलैया में धकेल दिया।"
					},
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "뒤틀린 기록의 수호자가 나타났다. 과거와 현재의 비극이 뒤섞인 형상이다.",
						"english": "The Guardian of Twisted Records appeared. A form mingled with tragedies of past and present.",
						"japanese": "歪んだ記録の守護者が現れた。過去と現在の悲劇が入り混じった姿だ。",
						"chinese": "扭曲记录的守护者出现了。那是过去与现在悲剧交织的形态。",
						"french": "Le Gardien des Archives Tordues est apparu. Une forme mêlant les tragédies du passé et du présent.",
						"spanish": "El Guardián de los Registros Retorcidos apareció. Una forma mezclada con tragedias del pasado y del presente.",
						"vietnamese": "Kẻ bảo hộ ký ức vặn vẹo đã xuất hiện. Một hình dạng hòa quyện những bi kịch của quá khứ và hiện tại.",
						"thai": "ผู้พิทักษ์บันทึกอันบิดเบือนปรากฏขึ้น ร่างที่ผสมผสานโศกนาฏกรรมทั้งในอดีตและปัจจุบัน",
						"hindi": "विकृत अभिलेखों का संरक्षक प्रकट हुआ। अतीत और वर्तमान की त्रासदियों से मिश्रित एक आकृति।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "감히… 이 혼돈의 기록을 넘어서려 하는가?",
						"english": "How dare you… try to transcend these chaotic records?",
						"japanese": "よくも…この混沌の記録を越えようとするか？",
						"chinese": "胆敢…试图超越这混沌的记录？",
						"french": "Comment oses-tu… tenter de transcender ces archives chaotiques ?",
						"spanish": "¿Cómo osas… intentar trascender estos registros caóticos?",
						"vietnamese": "Ngươi dám… vượt qua những ký ức hỗn loạn này sao?",
						"thai": "บังอาจ… คิดจะก้าวข้ามบันทึกอันวุ่นวายเหล่านี้หรือ?",
						"hindi": "तुम्हारी हिम्मत कैसे हुई… इन अराजक अभिलेखों को पार करने की कोशिश करने की?"
					},
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "비켜. 모든 것을 원래대로 돌려놓을 거야.",
						"english": "Move. I'll restore everything to how it was.",
						"japanese": "退け。全てを元に戻す。",
						"chinese": "让开。我会让一切恢复原状。",
						"french": "Écarte-toi. Je vais tout remettre à sa place.",
						"spanish": "Apártate. Devolveré todo a como estaba.",
						"vietnamese": "Tránh ra. Ta sẽ khôi phục mọi thứ về nguyên trạng.",
						"thai": "หลีกไป ข้าจะคืนทุกสิ่งให้กลับเป็นเหมือนเดิม",
						"hindi": "हट जाओ। मैं सब कुछ पहले जैसा कर दूंगा।"
					}
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "어리석군. 진실은… 너희가 감당할 수 없을 것이다!",
						"english": "Fools. The truth… you cannot bear!",
						"japanese": "愚か者め。真実は…お前たちには耐えられないだろう！",
						"chinese": "愚蠢。真相…你们无法承受！",
						"french": "Idiots. La vérité… vous ne pourrez la supporter !",
						"spanish": "Necios. ¡La verdad… no podréis soportarla!",
						"vietnamese": "Thật ngu xuẩn. Sự thật… các ngươi không thể chịu đựng được đâu!",
						"thai": "โง่เขลา ความจริง… พวกเจ้าจะรับไม่ไหวหรอก!",
						"hindi": "मूर्खों। सत्य… तुम सहन नहीं कर पाओगे!"
					},
					"speaker": "random_boss",
					"type": "speech"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"content": {
						"korean": "하하… 너희도 결국… 이 뒤틀린 시간의 일부가 될 뿐이다!",
						"english": "Hah hah... You too, in the end... will only become a part of this twisted time!",
						"japanese": "ハハ…お前たちも結局…この歪んだ時間の一部となるだけだ！",
						"chinese": "哈哈…你们最终…也只会成为这扭曲时间的一部分！",
						"french": "Hahaha... Vous aussi, à la fin... ne serez qu'une partie de ce temps distordu !",
						"spanish": "¡Ja, ja... Vosotros también, al final... solo seréis una parte de este tiempo retorcido!",
						"vietnamese": "Hahaha… Cuối cùng thì các ngươi cũng… chỉ là một phần của dòng thời gian méo mó này thôi!",
						"thai": "ฮ่าฮ่า... พวกเจ้าเองก็เช่นกัน... สุดท้ายก็จะเป็นเพียงส่วนหนึ่งของกาลเวลาที่บิดเบี้ยวนี่เท่านั้น!",
						"hindi": "हाहा… तुम भी अंततः… इस विकृत समय का एक हिस्सा मात्र बन जाओगे!"
					},
					"emotion": "happy",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "젠장… 아직 끝나지 않았어. 다시 일어설 거야.",
						"english": "Damn it... It's not over yet. I'll rise again.",
						"japanese": "くそ…まだ終わってない。また立ち上がるさ。",
						"chinese": "该死…还没结束。我会再站起来的。",
						"french": "Bon sang... Ce n'est pas encore fini. Je me relèverai.",
						"spanish": "¡Maldita sea... Todavía no ha terminado. Me levantaré de nuevo!",
						"vietnamese": "Chết tiệt… Vẫn chưa kết thúc đâu. Ta sẽ đứng dậy lần nữa.",
						"thai": "บ้าจริง... ยังไม่จบหรอก. ข้าจะลุกขึ้นสู้อีกครั้ง",
						"hindi": "धिक्कार है… अभी खत्म नहीं हुआ। मैं फिर उठ खड़ा होऊंगा।"
					},
					"emotion": "angry"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"고대 기록 보관소. 뒤틀린 시간의 흔적들이 벽마다 새겨져 있다.",
			"잊힌 맹세와 파괴된 약속의 잔재가 어지럽게 뒤섞였다.",
			"'피의 율법'… 그 모호한 언급은 진실을 더욱 왜곡시킨다.",
			"여기서, 과거의 환영과 현재의 진실이 교차하며 우리를 혼란에 빠뜨린다."
		],
		"english": [
			"Ancient archives. Traces of twisted time etched on every wall.",
			"Remnants of forgotten vows and shattered promises chaotically intertwined.",
			"'Law of Blood'... its vague mention further distorts the truth.",
			"Here, phantoms of the past and truths of the present intersect, plunging us into confusion."
		],
		"japanese": [
			"古代の記録保管庫。歪んだ時間の痕跡が壁に刻まれている。",
			"忘れられた誓いと破られた約束の残骸が乱雑に絡み合っている。",
			"「血の律法」…その曖昧な言及は、真実をさらに歪める。",
			"ここで、過去の幻影と現在の真実が交差し、私たちを混乱に陥れる。"
		],
		"chinese": [
			"古代档案室。扭曲时间的痕迹刻在每面墙上。",
			"遗忘的誓言和破碎的承诺残骸杂乱地交织在一起。",
			"“血之法则”……其模糊的提及进一步扭曲了真相。",
			"在这里，过去的幻影与现在的真相交织，使我们陷入困惑。"
		],
		"french": [
			"Archives anciennes. Des traces de temps tordu gravées sur chaque mur.",
			"Des vestiges de vœux oubliés et de promesses brisées s'entremêlent chaotiquement.",
			"La 'Loi du Sang'... sa mention vague déforme davantage la vérité.",
			"Ici, les fantômes du passé et les vérités du présent s'entrecroisent, nous plongeant dans la confusion."
		],
		"spanish": [
			"Archivos antiguos. Huellas de tiempo retorcido grabadas en cada pared.",
			"Restos de votos olvidados y promesas rotas entrelazados caóticamente.",
			"La 'Ley de Sangre'... su mención vaga distorsiona aún más la verdad.",
			"Aquí, los fantasmas del pasado y las verdades del presente se cruzan, sumiéndonos en la confusión."
		],
		"vietnamese": [
			"Kho lưu trữ cổ đại. Dấu vết thời gian méo mó được khắc trên mọi bức tường.",
			"Tàn dư của những lời thề bị lãng quên và lời hứa tan vỡ xen lẫn hỗn độn.",
			"'Luật Máu'... cách đề cập mơ hồ của nó càng làm sai lệch sự thật.",
			"Tại đây, ảo ảnh của quá khứ và sự thật của hiện tại giao thoa, đẩy chúng ta vào sự bối rối."
		],
		"thai": [
			"หอจดหมายเหตุโบราณ ร่องรอยของกาลเวลาที่บิดเบี้ยวสลักอยู่บนกำแพงทุกบาน",
			"ซากของคำสาบานที่ถูกลืมและคำสัญญาที่แตกสลายปะปนกันอย่างวุ่นวาย",
			"'กฎแห่งเลือด'... การกล่าวถึงที่คลุมเครือยิ่งบิดเบือนความจริง",
			"ที่นี่ ภาพหลอนในอดีตและความจริงในปัจจุบันมาบรรจบกัน ทำให้เราสับสน"
		],
		"hindi": [
			"प्राचीन अभिलेखागार। दीवारों पर विकृत समय के निशान खुदे हुए हैं।",
			"भूले हुए व्रतों और टूटे वादों के अवशेष अव्यवस्थित रूप से आपस में गुंथे हुए हैं।",
			"'रक्त का नियम'... इसका अस्पष्ट उल्लेख सच्चाई को और विकृत करता है।",
			"यहाँ, अतीत के भ्रम और वर्तमान की सच्चाई आपस में मिलती हैं, हमें भ्रम में डालती हैं।"
		]
	}
} as const;
