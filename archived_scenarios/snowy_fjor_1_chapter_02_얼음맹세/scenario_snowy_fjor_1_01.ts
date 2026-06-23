export const scenario_snowy_fjor_1_01 = {
	"scenario_id": "snowy_fjor_1_01",
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
					"emotion": "base",
					"content": {
						"korean": "황량한 설원에 도착했다. 마을은 침묵에 잠겨 있었다.",
						"english": "Arrived at the desolate snowfield. The village was silent.",
						"japanese": "荒涼とした雪原に到着した。村は沈黙に包まれていた。",
						"chinese": "抵达了荒凉的雪原。村庄一片寂静。",
						"french": "Arrivés dans la plaine enneigée désolée. Le village était silencieux.",
						"spanish": "Llegamos al desolado campo de nieve. El pueblo estaba en silencio.",
						"vietnamese": "Đã đến cánh đồng tuyết hoang vắng. Ngôi làng chìm trong im lặng.",
						"thai": "มาถึงทุ่งหิมะอันรกร้าง หมู่บ้านเงียบสงัด",
						"hindi": "वीरान बर्फीले मैदान में पहुँच गए। गाँव में सन्नाटा पसरा हुआ था।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "여기가… 맹세의 폭풍이 부는 곳인가?",
						"english": "Is this... where the Storm of Oaths blows?",
						"japanese": "ここが… 誓いの嵐が吹く場所なのか？",
						"chinese": "这里就是……誓约风暴席卷之地吗？",
						"french": "Est-ce ici... que souffle la Tempête des Serments ?",
						"spanish": "¿Es aquí... donde sopla la Tormenta de Juramentos?",
						"vietnamese": "Đây có phải là... nơi Bão Lời Thề thổi qua?",
						"thai": "นี่คือ... ที่ที่พายุแห่งคำสาบานพัดผ่านหรือ?",
						"hindi": "क्या यह... वही जगह है जहाँ शपतों का तूफ़ान आता है?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"spot": [
						3,
						2
					],
					"speaker": "eira",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "eira",
					"emotion": "base",
					"content": {
						"korean": "…그래요. 오래 기다렸어요.",
						"english": "...Yes. I've waited a long time.",
						"japanese": "…ええ。ずっと待っていました。",
						"chinese": "……是的。我等了很久。",
						"french": "...Oui. J'ai attendu longtemps.",
						"spanish": "...Sí. He esperado mucho tiempo.",
						"vietnamese": "...Vâng. Tôi đã chờ rất lâu rồi.",
						"thai": "...ใช่ ฉันรอมานานแล้ว",
						"hindi": "हाँ। मैंने बहुत इंतज़ार किया है।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "폭풍은 고통받는 영혼들의 안식처래요. 사람들은 그렇게 믿고 싶어 하죠.",
						"english": "They say the storm is a sanctuary for suffering souls. People want to believe that.",
						"japanese": "嵐は苦しむ魂たちの安息の地だそうです。人々はそう信じたがっています。",
						"chinese": "他们说风暴是受苦灵魂的安息之所。人们都想相信这一点。",
						"french": "On dit que la tempête est un sanctuaire pour les âmes souffrantes. Les gens veulent y croire.",
						"spanish": "Dicen que la tormenta es un santuario para las almas sufrientes. La gente quiere creerlo.",
						"vietnamese": "Họ nói bão là nơi trú ẩn của những linh hồn đau khổ. Mọi người muốn tin vào điều đó.",
						"thai": "พวกเขาบอกว่าพายุคือที่พำนักของวิญญาณที่ทุกข์ทรมาน ผู้คนต่างอยากเชื่อเช่นนั้น",
						"hindi": "वे कहते हैं कि तूफ़ान पीड़ित आत्माओं के लिए एक अभयारण्य है। लोग यही मानना चाहते हैं।"
					},
					"type": "speech",
					"speaker": "eira"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "하지만… 뭔가 불안해요. 그냥 소문만은 아닌 것 같아요.",
						"english": "But... something feels unsettling. It doesn't seem to be just rumors.",
						"japanese": "でも… 何か不安です。ただの噂だけではない気がします。",
						"chinese": "但是……总觉得有些不安。似乎不仅仅是传闻。",
						"french": "Mais... quelque chose me trouble. Ce ne sont pas que des rumeurs, il me semble.",
						"spanish": "Pero... algo me inquieta. No parece ser solo un rumor.",
						"vietnamese": "Nhưng... có điều gì đó bất an. Có vẻ không chỉ là lời đồn.",
						"thai": "แต่... ฉันรู้สึกไม่สบายใจบางอย่าง มันไม่น่าจะเป็นแค่ข่าวลือ",
						"hindi": "लेकिन... कुछ बेचैनी महसूस हो रही है। यह सिर्फ अफवाहें नहीं लगतीं।"
					},
					"speaker": "eira",
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"speaker": "eira",
					"type": "direction",
					"spot": [
						2,
						3
					],
					"action": "enter",
					"duration_ms": 500
				},
				{
					"speaker": "eira",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이걸 보세요. 폭풍 근처에서 주웠어요.",
						"english": "Look at this. I picked it up near the storm.",
						"japanese": "これを見てください。嵐の近くで拾いました。",
						"chinese": "看看这个。我在风暴附近捡到的。",
						"french": "Regardez ceci. Je l'ai ramassé près de la tempête.",
						"spanish": "Mira esto. Lo recogí cerca de la tormenta.",
						"vietnamese": "Nhìn cái này đi. Tôi nhặt được nó gần cơn bão.",
						"thai": "ดูนี่สิ ฉันเก็บมันได้ใกล้พายุ",
						"hindi": "इसे देखो। मैंने इसे तूफ़ान के पास से उठाया है।"
					}
				},
				{
					"content": {
						"korean": "기묘한 룬 문양이 새겨져 있죠. 아무도 이게 뭔지 몰라요.",
						"english": "Strange runic symbols are carved here. No one knows what they mean.",
						"japanese": "奇妙なルーン文字が刻まれています。誰もそれが何を意味するのか知りません。",
						"chinese": "这里刻着奇怪的符文。没人知道它们是什么意思。",
						"french": "D'étranges symboles runiques y sont gravés. Personne ne sait ce qu'ils signifient.",
						"spanish": "Extraños símbolos rúnicos están grabados aquí. Nadie sabe qué significan.",
						"vietnamese": "Những ký hiệu rune kỳ lạ được khắc ở đây. Không ai biết chúng có nghĩa là gì.",
						"thai": "มีสัญลักษณ์รูนแปลกๆ แกะสลักอยู่ ไม่มีใครรู้ว่ามันคืออะไร",
						"hindi": "यहां अजीबोगरीब रनिक प्रतीक खुदे हुए हैं। कोई नहीं जानता कि इनका क्या मतलब है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "이건… 잊힌 왕국의 상징인가?",
						"english": "Is this... a symbol of the forgotten kingdom?",
						"japanese": "これは…忘れ去られた王国の象徴か？",
						"chinese": "这是…被遗忘王国的象征吗？",
						"french": "Est-ce… un symbole du royaume oublié ?",
						"spanish": "¿Es esto… un símbolo del reino olvidado?",
						"vietnamese": "Đây có phải… là biểu tượng của vương quốc đã lãng quên?",
						"thai": "นี่คือ... สัญลักษณ์ของอาณาจักรที่ถูกลืมงั้นหรือ?",
						"hindi": "क्या यह… भूले हुए राज्य का प्रतीक है?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"emotion": "sad",
					"content": {
						"korean": "글쎄요. 하지만… 불길한 기분만 들어요.",
						"english": "I don't know. But... I only feel an ominous presence.",
						"japanese": "さあ。でも…ただ不吉な予感しかしない。",
						"chinese": "我不知道。但是…我只感到一种不祥的气息。",
						"french": "Je ne sais pas. Mais… je ne ressens qu'une présence sinistre.",
						"spanish": "No lo sé. Pero… solo siento una presencia siniestra.",
						"vietnamese": "Tôi không biết. Nhưng… tôi chỉ cảm thấy một điềm gở.",
						"thai": "ไม่รู้สิ แต่... ฉันรู้สึกได้ถึงลางร้าย",
						"hindi": "मुझे नहीं पता। लेकिन… मुझे केवल एक अशुभ उपस्थिति महसूस होती है।"
					}
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "eira",
					"type": "direction",
					"spot": [
						3,
						3
					],
					"action": "enter",
					"duration_ms": 500
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "폭풍이… 점점 거세지고 있어요.",
						"english": "The storm... is getting stronger.",
						"japanese": "嵐が…ますます激しくなっている。",
						"chinese": "暴风雨…越来越猛烈了。",
						"french": "La tempête… se renforce.",
						"spanish": "La tormenta… se está volviendo más fuerte.",
						"vietnamese": "Cơn bão… đang mạnh dần lên.",
						"thai": "พายุ... กำลังโหมกระหน่ำมากขึ้น",
						"hindi": "तूफान… और तेज़ होता जा रहा है।"
					},
					"type": "speech",
					"speaker": "eira"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "밤마다 마을 사람들은 비명을 듣는다고 해요.",
						"english": "Every night, the villagers say they hear screams.",
						"japanese": "毎晩、村人たちは悲鳴を聞くと言っている。",
						"chinese": "每晚，村民们都说听到尖叫声。",
						"french": "Chaque nuit, les villageois disent entendre des cris.",
						"spanish": "Cada noche, los aldeanos dicen escuchar gritos.",
						"vietnamese": "Mỗi đêm, dân làng nói rằng họ nghe thấy tiếng la hét.",
						"thai": "ทุกคืน ชาวบ้านบอกว่าพวกเขาได้ยินเสียงกรีดร้อง",
						"hindi": "हर रात, ग्रामीण कहते हैं कि वे चीखें सुनते हैं।"
					},
					"type": "speech",
					"speaker": "eira"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "그냥 바람 소리가 아닐까?",
						"english": "Isn't it just the wind?",
						"japanese": "ただの風の音じゃないのか？",
						"chinese": "那不是只是风声吗？",
						"french": "N'est-ce pas juste le vent ?",
						"spanish": "¿No será solo el viento?",
						"vietnamese": "Không phải chỉ là tiếng gió thôi sao?",
						"thai": "มันไม่ใช่แค่เสียงลมเหรอ?",
						"hindi": "क्या यह सिर्फ हवा की आवाज़ नहीं है?"
					}
				},
				{
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "아뇨. 달라요. 이건… 저주받은 자들의 울음소리 같아요.",
						"english": "No. It's different. This... sounds like the wails of the cursed.",
						"japanese": "いいえ。違います。これは…呪われた者たちの叫び声のようだ。",
						"chinese": "不。不一样。这…听起来像是被诅咒者的哭嚎。",
						"french": "Non. C'est différent. Cela… ressemble aux plaintes des maudits.",
						"spanish": "No. Es diferente. Esto… suena como los lamentos de los malditos.",
						"vietnamese": "Không. Khác biệt. Đây… nghe như tiếng than khóc của những kẻ bị nguyền rủa.",
						"thai": "ไม่ มันต่างกัน นี่... ฟังดูเหมือนเสียงคร่ำครวญของผู้ถูกสาปแช่ง",
						"hindi": "नहीं। यह अलग है। यह… शापितों के विलाप जैसा लगता है।"
					},
					"emotion": "angry"
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						2,
						2
					],
					"speaker": "eira",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "더 이상 가면 안 돼요. 정말 위험해요.",
						"english": "You can't go any further. It's really dangerous.",
						"japanese": "これ以上進んではいけません。本当に危険です。",
						"chinese": "你不能再往前走了。真的很危险。",
						"french": "Vous ne pouvez pas aller plus loin. C'est vraiment dangereux.",
						"spanish": "No puedes ir más lejos. Es realmente peligroso.",
						"vietnamese": "Bạn không thể đi xa hơn nữa. Nó thực sự nguy hiểm.",
						"thai": "คุณไปต่อไม่ได้แล้ว มันอันตรายมาก",
						"hindi": "आप इससे आगे नहीं जा सकते। यह बहुत खतरनाक है।"
					},
					"emotion": "angry",
					"speaker": "eira",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "진실을 알아야 해.",
						"english": "I need to know the truth.",
						"japanese": "真実を知る必要がある。",
						"chinese": "我需要知道真相。",
						"french": "Je dois connaître la vérité.",
						"spanish": "Necesito saber la verdad.",
						"vietnamese": "Tôi cần biết sự thật.",
						"thai": "ฉันต้องรู้ความจริง",
						"hindi": "मुझे सच जानना है।"
					}
				},
				{
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "이 폭풍은… 당신이 생각하는 것보다 훨씬 더 오래되고, 사악해요.",
						"english": "This storm... is far older and more evil than you think.",
						"japanese": "この嵐は…あなたが思っているよりもはるかに古く、邪悪だ。",
						"chinese": "这场暴风雨…比你想象的要古老得多，也邪恶得多。",
						"french": "Cette tempête… est bien plus ancienne et maléfique que vous ne le pensez.",
						"spanish": "Esta tormenta… es mucho más antigua y malvada de lo que piensas.",
						"vietnamese": "Cơn bão này… còn cổ xưa và tà ác hơn bạn nghĩ nhiều.",
						"thai": "พายุลูกนี้... เก่าแก่และชั่วร้ายกว่าที่คุณคิดมาก",
						"hindi": "यह तूफान… जितना आप सोचते हैं, उससे कहीं अधिक पुराना और बुरा है।"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "돌아갈 수 없을지도 몰라요.",
						"english": "There might be no turning back.",
						"japanese": "もう戻れないかもしれない。",
						"chinese": "我们可能回不去了。",
						"french": "Il n'y aura peut-être pas de retour.",
						"spanish": "Puede que no haya vuelta atrás.",
						"vietnamese": "Chúng ta có thể không quay lại được.",
						"thai": "เราอาจจะกลับไปไม่ได้แล้ว",
						"hindi": "वापस जाने का रास्ता नहीं होगा।"
					},
					"emotion": "sad"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "어리석은 자… 맹세의 힘을 거스를 순 없다.",
						"english": "Foolish one... you cannot defy the power of the oath.",
						"japanese": "愚か者よ… 誓いの力に逆らうことはできぬ。",
						"chinese": "愚蠢之徒… 你无法违抗誓约的力量。",
						"french": "Insensé... tu ne peux défier le pouvoir du serment.",
						"spanish": "Necio... no puedes desafiar el poder del juramento.",
						"vietnamese": "Kẻ ngu muội... ngươi không thể chống lại sức mạnh của lời thề.",
						"thai": "ผู้โง่เขลา... เจ้าไม่อาจท้าทายพลังแห่งคำสาบานได้",
						"hindi": "मूर्ख… तुम शपथ की शक्ति का उल्लंघन नहीं कर सकते।"
					}
				},
				{
					"content": {
						"korean": "젠장… 아직… 끝나지 않았어.",
						"english": "Damn it... It's not... over yet.",
						"japanese": "くそっ… まだ… 終わってない！",
						"chinese": "该死… 还没… 结束！",
						"french": "Merde... Ce n'est pas... fini.",
						"spanish": "¡Maldita sea!... Todavía no... ha terminado.",
						"vietnamese": "Chết tiệt... Vẫn chưa... kết thúc đâu.",
						"thai": "บ้าเอ๊ย... ยัง... ไม่จบหรอก!",
						"hindi": "लानत है... यह अभी... ख़त्म नहीं हुआ है।"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"speaker": "eira",
					"type": "direction",
					"spot": [
						3,
						1
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"content": {
						"korean": "…이 룬… 맹세의 그림자… 저 존재가 바로…",
						"english": "...This rune... The shadow of the oath... That being is...",
						"japanese": "…このルーン… 誓いの影… あの存在がまさか…",
						"chinese": "…这符文… 誓约的阴影… 那个存在就是…",
						"french": "...Cette rune... L'ombre du serment... Cette entité est...",
						"spanish": "...Esta runa... La sombra del juramento... Esa entidad es...",
						"vietnamese": "...Cái rune này... Bóng tối của lời thề... Thực thể đó chính là...",
						"thai": "...รูนนี้... เงาแห่งคำสาบาน... สิ่งนั้นคือ...",
						"hindi": "...यह रुन... शपथ की छाया... वह अस्तित्व ही है..."
					},
					"emotion": "sad",
					"speaker": "eira",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "누구냐… 나의 안식을 방해하는 어리석은 자가.",
						"english": "Who are you... foolish one, disturbing my slumber?",
						"japanese": "何者だ… 我が安息を妨げる愚か者め。",
						"chinese": "何人… 竟敢打扰我的安宁，愚蠢之徒。",
						"french": "Qui es-tu... fou, osant troubler mon repos ?",
						"spanish": "¿Quién eres... necio, que perturba mi descanso?",
						"vietnamese": "Ngươi là ai... kẻ ngu muội dám quấy rầy giấc ngủ của ta.",
						"thai": "เจ้าเป็นใคร... ผู้โง่เขลาที่มารบกวนความสงบของข้า",
						"hindi": "कौन हो तुम… मेरे विश्राम में खलल डालने वाले मूर्ख?"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "폭풍의 정체는… 너였나.",
						"english": "The storm's true nature... was you?",
						"japanese": "嵐の正体は… お前だったのか。",
						"chinese": "暴风的真面目… 竟然是你。",
						"french": "L'identité de la tempête... c'était toi ?",
						"spanish": "La verdadera identidad de la tormenta... ¿eras tú?",
						"vietnamese": "Bản chất của cơn bão... là ngươi sao.",
						"thai": "ตัวตนที่แท้จริงของพายุ... คือเจ้าสินะ",
						"hindi": "तू ही था उस तूफ़ान का असली रूप…?"
					}
				},
				{
					"content": {
						"korean": "도망쳐요! 이 저주는… 끝이 없어요!",
						"english": "Run! This curse... is endless!",
						"japanese": "逃げろ！この呪いは… 終わりがない！",
						"chinese": "快逃！这个诅咒… 无止无尽！",
						"french": "Fuyez ! Cette malédiction... est sans fin !",
						"spanish": "¡Huyan! ¡Esta maldición... es interminable!",
						"vietnamese": "Chạy đi! Lời nguyền này... không có hồi kết!",
						"thai": "หนีไป! คำสาปนี้... ไม่มีที่สิ้นสุด!",
						"hindi": "भागो! यह श्राप… कभी ख़त्म नहीं होगा!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "eira"
				},
				{
					"type": "direction",
					"speaker": "eira",
					"duration_ms": 400,
					"action": "exit",
					"direction": "down"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "맹세는 반드시 지켜져야 한다… 그 대가는 피로 치러질 것이다.",
						"english": "The oath must be upheld... its price paid in blood.",
						"japanese": "誓いは必ず守られねばならぬ… その代償は血で支払われるだろう。",
						"chinese": "誓约必须遵守… 其代价将以血偿还。",
						"french": "Le serment doit être tenu... son prix sera payé en sang.",
						"spanish": "El juramento debe ser cumplido... su precio se pagará con sangre.",
						"vietnamese": "Lời thề phải được giữ... cái giá sẽ phải trả bằng máu.",
						"thai": "คำสาบานต้องได้รับการรักษา... ราคาของมันจะถูกชดใช้ด้วยเลือด",
						"hindi": "शपथ का पालन अवश्य होना चाहिए… उसकी कीमत रक्त से चुकानी होगी।"
					},
					"type": "speech",
					"speaker": "random_boss"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…겨우 이 정도인가… 진정한 맹세의 분노는… 시작에 불과하다.",
						"english": "...Is this all you have...? The true wrath of the oath... is merely the beginning.",
						"japanese": "…たったこれしきか… 真の誓いの怒りは… 始まりに過ぎぬ。",
						"chinese": "…就这点能耐吗… 誓约真正的愤怒… 才刚刚开始。",
						"french": "...Ce n'est que ça...? La véritable fureur du serment... n'est qu'un début.",
						"spanish": "...¿Es esto todo...? La verdadera ira del juramento... es solo el principio.",
						"vietnamese": "...Chỉ đến thế này thôi sao...? Cơn thịnh nộ thật sự của lời thề... mới chỉ là khởi đầu.",
						"thai": "...แค่นี้เองรึ...? ความโกรธแค้นที่แท้จริงของคำสาบาน... เป็นเพียงจุดเริ่มต้นเท่านั้น",
						"hindi": "...बस इतना ही…? शपथ का असली क्रोध… तो अभी बस शुरुआत है।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "폭풍이… 잠잠해졌나?",
						"english": "Has the storm... subsided?",
						"japanese": "嵐が… 静まったのか？",
						"chinese": "暴风… 平息了吗？",
						"french": "La tempête... s'est-elle calmée ?",
						"spanish": "¿La tormenta... ha amainado?",
						"vietnamese": "Cơn bão... đã lặng xuống sao?",
						"thai": "พายุ... สงบลงแล้วหรือ?",
						"hindi": "क्या तूफ़ान… शांत हो गया?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "일시적인 평화. 폭풍의 중심에서, 더 깊은 속삭임이 들려왔다.",
						"english": "Temporary peace. From the eye of the storm, a deeper whisper was heard.",
						"japanese": "一時的な平和。嵐の中心から、より深い囁きが聞こえた。",
						"chinese": "暂时的平静。在风暴的中心，更深层的低语传来。",
						"french": "Une paix temporaire. Du cœur de la tempête, un murmure plus profond se fit entendre.",
						"spanish": "Una paz temporal. Desde el ojo de la tormenta, un susurro más profundo se escuchó.",
						"vietnamese": "Bình yên tạm thời. Từ tâm bão, một tiếng thì thầm sâu hơn vang lên.",
						"thai": "ความสงบชั่วคราว. จากใจกลางพายุ เสียงกระซิบที่ลึกกว่านั้นได้ยินมา",
						"hindi": "अस्थायी शांति। तूफ़ान के केंद्र से, एक गहरी फुसफुसाहट सुनाई दी।"
					},
					"emotion": "base"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"북부의 차가운 바람이 모든 것을 얼렸다.",
			"맹세의 폭풍. 그 이름만으로도 마을은 침묵에 잠겼다.",
			"찢겨진 약속들의 저주. 누군가는 그렇게 속삭였다.",
			"진실은 언제나 차가운 소문 뒤에 숨어 있었다."
		],
		"english": [
			"The cold northern winds froze everything.",
			"The Storm of Oaths. Its mere name silenced the village.",
			"The Curse of Broken Promises. Someone whispered so.",
			"Truth always hid behind cold rumors."
		],
		"japanese": [
			"北部の冷たい風がすべてを凍らせた。",
			"誓いの嵐。その名だけで村は沈黙に包まれた。",
			"破られた約束の呪い。誰かがそう囁いた。",
			"真実はいつも冷たい噂の裏に隠されていた。"
		],
		"chinese": [
			"北部寒风冻结了一切。",
			"誓约风暴。仅是其名，就让村庄陷入沉寂。",
			"破碎誓言的诅咒。有人如此低语。",
			"真相总是隐藏在冰冷的传闻之后。"
		],
		"french": [
			"Les vents froids du nord ont tout gelé.",
			"La Tempête des Serments. Son seul nom réduisit le village au silence.",
			"La Malédiction des Promesses Brisées. Quelqu'un le murmura.",
			"La vérité se cachait toujours derrière de froides rumeurs."
		],
		"spanish": [
			"Los fríos vientos del norte lo congelaron todo.",
			"La Tormenta de Juramentos. Su solo nombre sumió al pueblo en el silencio.",
			"La Maldición de las Promesas Rotas. Alguien susurró aquello.",
			"La verdad siempre se escondía tras fríos rumores."
		],
		"vietnamese": [
			"Gió lạnh phương Bắc đóng băng vạn vật.",
			"Bão Lời Thề. Chỉ cái tên thôi cũng khiến làng chìm vào im lặng.",
			"Lời nguyền của những lời hứa tan vỡ. Ai đó thì thầm như vậy.",
			"Sự thật luôn ẩn sau những lời đồn lạnh lẽo."
		],
		"thai": [
			"ลมหนาวจากทิศเหนือแช่แข็งทุกสิ่ง",
			"พายุแห่งคำสาบาน แค่ชื่อนั้นก็ทำให้หมู่บ้านเงียบสงัด",
			"คำสาปแห่งพันธสัญญาที่ฉีกขาด ใครบางคนกระซิบเช่นนั้น",
			"ความจริงมักจะซ่อนอยู่เบื้องหลังข่าวลืออันหนาวเหน็บเสมอ"
		],
		"hindi": [
			"उत्तर की ठंडी हवाओं ने सब कुछ जमा दिया।",
			"शपतों का तूफ़ान। उसका नाम सुनते ही गाँव में सन्नाटा छा गया।",
			"टूटे वादों का अभिशाप। किसी ने फुसफुसाया।",
			"सच्चाई हमेशा ठंडी अफवाहों के पीछे छिपी रहती थी।"
		]
	}
} as const;
