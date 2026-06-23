export const scenario_modern_facade_58_01 = {
	"scenario_id": "modern_facade_58_01",
	"order": 1,
	"act": "intro",
	"theme": "modern",
	"actors": {
		"nia": {
			"id": "mon_872177dd-fcf0-40d8-b78c-fd795017c763",
			"name": {
				"korean": "니아",
				"english": "Nia",
				"japanese": "ニア",
				"chinese": "妮娅",
				"french": "Nia",
				"spanish": "Nia",
				"vietnamese": "Nia",
				"thai": "เนีย",
				"hindi": "निया"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/db690f96-d5b3-498a-f4ec-f269e6e95100/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a8fe5d7a-56fe-4822-c272-5a04fd7f4c00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "안개 낀 도시, '파사드'의 그림자가 드리운 거리.",
						"english": "A foggy city, streets cast in the shadow of 'Façade'.",
						"japanese": "霧深い都市、「ファサード」の影が落ちる通り。",
						"chinese": "迷雾笼罩的城市，街道上投下了‘立面’的阴影。",
						"french": "Une ville brumeuse, des rues assombries par l'ombre de 'Façade'.",
						"spanish": "Una ciudad neblinosa, calles bajo la sombra de 'Fachada'.",
						"vietnamese": "Thành phố sương mù, những con phố chìm trong bóng 'Façade'.",
						"thai": "เมืองที่เต็มไปด้วยหมอก ถนนที่ทอดเงาของ 'Façade'",
						"hindi": "धुंध भरा शहर, 'फसाड' की छाया में डूबी गलियाँ।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "실종된 사람을 찾으려면… 니아를 만나야 한다고?",
						"english": "To find the missing person... I need to meet Nia?",
						"japanese": "行方不明者を探すなら…ニアに会う必要があるのか？",
						"chinese": "要找到失踪者…需要去见尼亚吗？",
						"french": "Pour retrouver la personne disparue... je dois rencontrer Nia ?",
						"spanish": "Para encontrar a la persona desaparecida... ¿tengo que ver a Nia?",
						"vietnamese": "Để tìm người mất tích... phải gặp Nia?",
						"thai": "จะหาคนหาย... ต้องไปพบนีอา?",
						"hindi": "लापता व्यक्ति को खोजने के लिए... मुझे निया से मिलना होगा?"
					}
				},
				{
					"duration_ms": 500,
					"speaker": "nia",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "nia",
					"content": {
						"korean": "왔군. '파사드'에 대해 묻는 건가?",
						"english": "You're here. Asking about 'Façade'?",
						"japanese": "来たか。「ファサード」について聞きたいのか？",
						"chinese": "你来了。是来打听‘立面’的事吗？",
						"french": "Tu es là. Tu veux savoir des choses sur 'Façade' ?",
						"spanish": "Estás aquí. ¿Preguntando sobre 'Fachada'?",
						"vietnamese": "Đến rồi. Hỏi về 'Façade' à?",
						"thai": "มาแล้วสินะ. จะถามเรื่อง 'Façade' ใช่ไหม?",
						"hindi": "तुम आ गए। 'फसाड' के बारे में पूछ रहे हो?"
					}
				},
				{
					"content": {
						"korean": "그곳에서 사라진 사람들의 정보를 찾고 있어.",
						"english": "I'm looking for information on those who vanished there.",
						"japanese": "そこで消えた人々の情報を探している。",
						"chinese": "我正在寻找在那里失踪的人的信息。",
						"french": "Je cherche des informations sur ceux qui ont disparu là-bas.",
						"spanish": "Estoy buscando información sobre la gente que desapareció allí.",
						"vietnamese": "Tôi đang tìm thông tin về những người đã biến mất ở đó.",
						"thai": "ฉันกำลังหาข้อมูลเกี่ยวกับผู้ที่หายไปจากที่นั่น",
						"hindi": "मैं वहाँ से गायब हुए लोगों की जानकारी ढूंढ रहा हूँ।"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "'파사드'는 겉보기와 달라. 깊이 파고들면… 위험해.",
						"english": "'Façade' isn't what it seems. Dig too deep, and... it's dangerous.",
						"japanese": "「ファサード」は見かけと違う。深く掘り下げれば…危険だ。",
						"chinese": "‘立面’并非表面那样。深入挖掘…很危险。",
						"french": "'Façade' n'est pas ce qu'il semble. Creuse trop, et... c'est dangereux.",
						"spanish": "'Fachada' no es lo que parece. Si cavas demasiado hondo... es peligroso.",
						"vietnamese": "'Façade' không như vẻ ngoài đâu. Đào sâu vào... sẽ nguy hiểm đấy.",
						"thai": "'Façade' ไม่เหมือนอย่างที่เห็น หากขุดลึกลงไป... มันอันตราย",
						"hindi": "'फसाड' जैसा दिखता है, वैसा नहीं है। गहराई में जाओगे तो... खतरा है।"
					},
					"speaker": "nia"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						2,
						2
					],
					"duration_ms": 500,
					"speaker": "nia",
					"action": "enter"
				},
				{
					"speaker": "nia",
					"content": {
						"korean": "소문이 더 많아. '파사드'는 사람을 삼킨다는 소문.",
						"english": "There are more rumors. Rumors that 'Façade' devours people.",
						"japanese": "もっと多くの噂がある。「ファサード」は人を飲み込むという噂だ。",
						"chinese": "传闻更多了。传闻‘立面’会吞噬人类。",
						"french": "Il y a plus de rumeurs. Des rumeurs selon lesquelles 'Façade' dévore les gens.",
						"spanish": "Hay más rumores. Rumores de que 'Fachada' devora a la gente.",
						"vietnamese": "Có nhiều lời đồn hơn. Rằng 'Façade' nuốt chửng con người.",
						"thai": "มีข่าวลืออีกมาก ข่าวลือว่า 'Façade' กลืนกินผู้คน",
						"hindi": "और भी अफवाहें हैं। अफवाहें कि 'फसाड' लोगों को निगल जाता है।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…삼킨다니?",
						"english": "...Swallowed?",
						"japanese": "「…飲み込むって？」",
						"chinese": "“……吞噬？”",
						"french": "...Avaler ?",
						"spanish": "¿...Tragar?",
						"vietnamese": "...Nuốt chửng ư?",
						"thai": "...กลืนกินเหรอ?",
						"hindi": "...निगलना?"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "순간, 길가 유리창에 비친 니아의 형상이 찰나의 왜곡을 일으켰다.",
						"english": "For a moment, Nia's reflection in the street window distorted.",
						"japanese": "「一瞬、道端のガラス窓に映るニアの姿が歪んだ。」",
						"chinese": "“一瞬间，街边玻璃窗中映出的妮娅的身影发生了刹那的扭曲。”",
						"french": "Un instant, le reflet de Nia dans la vitrine de la rue se tordit.",
						"spanish": "Por un instante, la figura de Nia reflejada en el escaparate de la calle sufrió una distorsión momentánea.",
						"vietnamese": "Trong khoảnh khắc, hình bóng của Nia phản chiếu trên cửa kính đường phố bỗng biến dạng.",
						"thai": "ชั่วขณะหนึ่ง ร่างของเนียที่สะท้อนในกระจกหน้าร้านริมถนนก็บิดเบี้ยวไปชั่วขณะ",
						"hindi": "एक पल के लिए, सड़क की खिड़की में निया का प्रतिबिंब विकृत हो गया।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "nia",
					"content": {
						"korean": "이 도시, 뭔가를 감추고 있어. 그리고… 시간이 없어.",
						"english": "This city is hiding something. And... there's no time.",
						"japanese": "「この街は何かを隠している。そして…時間がない。」",
						"chinese": "“这座城市藏着什么。而且……没时间了。”",
						"french": "Cette ville cache quelque chose. Et... il n'y a plus de temps.",
						"spanish": "Esta ciudad oculta algo. Y... no hay tiempo.",
						"vietnamese": "Thành phố này đang che giấu điều gì đó. Và... không còn thời gian nữa.",
						"thai": "เมืองนี้กำลังซ่อนบางอย่างอยู่ และ... ไม่มีเวลาแล้ว",
						"hindi": "यह शहर कुछ छिपा रहा है। और... समय नहीं है।"
					}
				},
				{
					"content": {
						"korean": "시간?",
						"english": "Time?",
						"japanese": "「時間？」",
						"chinese": "“时间？”",
						"french": "Le temps ?",
						"spanish": "¿Tiempo?",
						"vietnamese": "Thời gian?",
						"thai": "เวลา?",
						"hindi": "समय?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "nia",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"type": "direction"
				},
				{
					"content": {
						"korean": "내 말을 믿어. '파사드'는 단순한 건물이 아니야.",
						"english": "Trust me. 'Facade' is not just a building.",
						"japanese": "「僕の言葉を信じて。『ファサード』はただの建物じゃない。」",
						"chinese": "“相信我。‘Façade’不仅仅是一栋建筑。”",
						"french": "Fais-moi confiance. La 'Façade' n'est pas qu'un simple bâtiment.",
						"spanish": "Confía en mí. 'Fachada' no es solo un edificio.",
						"vietnamese": "Hãy tin tôi. 'Facade' không phải là một tòa nhà bình thường.",
						"thai": "เชื่อฉันสิ 'ฟะซาด' ไม่ใช่แค่ตึกธรรมดา",
						"hindi": "मुझ पर भरोसा करो। 'मुखौटा' सिर्फ एक इमारत नहीं है।"
					},
					"speaker": "nia",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그럼 대체 뭔데.",
						"english": "Then what is it?",
						"japanese": "「じゃあ一体何なんだ。」",
						"chinese": "“那它到底是什么？”",
						"french": "Alors, qu'est-ce que c'est ?",
						"spanish": "Entonces, ¿qué es?",
						"vietnamese": "Vậy nó là gì?",
						"thai": "แล้วมันคืออะไรกันแน่?",
						"hindi": "तो फिर यह क्या है?"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "어디선가 낮은 금속성 울림이 들려왔다. 오케스트라의 불협화음 같았다.",
						"english": "A low metallic hum echoed from somewhere. It sounded like a dissonant orchestra.",
						"japanese": "「どこからか低い金属音が響いてきた。オーケストラの不協和音のようだった。」",
						"chinese": "“不知从何处传来低沉的金属声。听起来像交响乐的刺耳不和谐音。”",
						"french": "Un faible bourdonnement métallique résonna de quelque part. C'était comme une cacophonie orchestrale.",
						"spanish": "Un zumbido metálico bajo resonó desde algún lugar. Sonaba como una orquesta disonante.",
						"vietnamese": "Một tiếng rung kim loại trầm thấp vang lên từ đâu đó. Nó giống như bản giao hưởng lạc điệu.",
						"thai": "เสียงหึ่งๆ ของโลหะต่ำๆ ดังมาจากที่ไหนสักแห่ง มันเหมือนเสียงที่ไม่ประสานกันของวงออร์เคสตรา",
						"hindi": "कहीं से एक धीमी धातु की गूंज सुनाई दी। यह एक बेसुरी ऑर्केस्ट्रा की तरह लग रहा था।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "그곳에선… 모든 게 뒤틀려. 진실마저도.",
						"english": "There... everything is twisted. Even the truth.",
						"japanese": "「そこでは…何もかもが歪んでいる。真実さえも。」",
						"chinese": "“在那里……一切都扭曲了。甚至连真相也是。”",
						"french": "Là-bas... tout est tordu. Même la vérité.",
						"spanish": "Allí... todo está distorsionado. Incluso la verdad.",
						"vietnamese": "Ở đó... mọi thứ đều bị bóp méo. Ngay cả sự thật.",
						"thai": "ที่นั่น... ทุกอย่างบิดเบี้ยว แม้แต่ความจริง",
						"hindi": "वहां... सब कुछ विकृत है। यहां तक कि सच्चाई भी।"
					},
					"speaker": "nia",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "그래서 실종된 사람들은…?",
						"english": "So, the missing people...?",
						"japanese": "「じゃあ、失踪した人たちは…？」",
						"chinese": "“那么那些失踪的人呢……？”",
						"french": "Alors, les personnes disparues... ?",
						"spanish": "Entonces, ¿las personas desaparecidas...?",
						"vietnamese": "Vậy những người mất tích...?",
						"thai": "แล้วคนหายล่ะ...?",
						"hindi": "तो, लापता लोग...?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그 질문에 대한 답은… 직접 찾아야 할 거야.",
						"english": "The answer to that question... you'll have to find yourself.",
						"japanese": "「その質問の答えは…君自身で見つけなければならないだろう。」",
						"chinese": "“那个问题的答案……你得自己去寻找。”",
						"french": "La réponse à cette question... tu devras la trouver toi-même.",
						"spanish": "La respuesta a esa pregunta... tendrás que encontrarla tú mismo.",
						"vietnamese": "Câu trả lời cho câu hỏi đó... bạn sẽ phải tự mình tìm lấy.",
						"thai": "คำตอบสำหรับคำถามนั้น... คุณจะต้องหามันด้วยตัวเอง",
						"hindi": "उस सवाल का जवाब... तुम्हें खुद ही ढूंढना होगा।"
					},
					"speaker": "nia"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "nia",
					"spot": [
						3,
						3
					]
				},
				{
					"speaker": "nia",
					"content": {
						"korean": "더 이상은… 나도 모르겠어. 그냥 도망쳐.",
						"english": "I don't know anymore... Just run away.",
						"japanese": "もうこれ以上は…私にも分からない。ただ逃げて。",
						"chinese": "我不知道了… 快逃吧。",
						"french": "Je ne sais plus… Fuis, c'est tout.",
						"spanish": "Ya no sé más… Solo huye.",
						"vietnamese": "Tôi không biết nữa… Cứ chạy đi.",
						"thai": "ไม่รู้แล้ว… แค่หนีไป",
						"hindi": "अब और नहीं… मुझे नहीं पता। बस भाग जाओ。"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "도망칠 순 없어.",
						"english": "We can't run away.",
						"japanese": "逃げることはできない。",
						"chinese": "无法逃脱。",
						"french": "On ne peut pas fuir.",
						"spanish": "No podemos huir.",
						"vietnamese": "Không thể chạy trốn.",
						"thai": "หนีไม่พ้นหรอก",
						"hindi": "भाग नहीं सकते।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "시계탑의 그림자가 예상보다 빠르게 움직이는 듯한 착각에 빠졌다. 찰나의 피로감이 몰려왔다.",
						"english": "The clock tower's shadow seemed to move faster than expected. A momentary fatigue washed over me.",
						"japanese": "時計塔の影が予想よりも速く動いているような錯覚に陥った。一瞬の疲労感が押し寄せた。",
						"chinese": "仿佛钟楼的影子移动得比预期更快。一股短暂的疲惫感袭来。",
						"french": "L'ombre du clocher semblait bouger plus vite que prévu. Une fatigue passagère m'envahit.",
						"spanish": "La sombra del campanario parecía moverse más rápido de lo esperado. Un cansancio momentáneo me invadió.",
						"vietnamese": "Bóng tháp đồng hồ dường như di chuyển nhanh hơn dự kiến. Một cảm giác mệt mỏi thoáng qua ập đến.",
						"thai": "เงาของหอนาฬิกาเคลื่อนไหวเร็วกว่าที่คาดไว้ ความเหนื่อยล้าเพียงชั่วขณะก็เข้าปกคลุม",
						"hindi": "ऐसा भ्रम हुआ जैसे घड़ी मीनार की परछाई उम्मीद से ज़्यादा तेज़ी से हिल रही हो। क्षण भर की थकान छा गई।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "nia",
					"content": {
						"korean": "시간이… 모든 것을 잠식할 거야.",
						"english": "Time... will devour everything.",
						"japanese": "時間が…全てを蝕むだろう。",
						"chinese": "时间…会吞噬一切。",
						"french": "Le temps… dévorera tout.",
						"spanish": "El tiempo… lo devorará todo.",
						"vietnamese": "Thời gian… sẽ nuốt chửng tất cả.",
						"thai": "เวลา… จะกลืนกินทุกสิ่ง",
						"hindi": "समय… सब कुछ निगल जाएगा।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "막아야 해.",
						"english": "We have to stop it.",
						"japanese": "止めなければ。",
						"chinese": "必须阻止它。",
						"french": "Il faut l'arrêter.",
						"spanish": "Debemos detenerlo.",
						"vietnamese": "Phải ngăn chặn nó.",
						"thai": "ต้องหยุดมันให้ได้",
						"hindi": "इसे रोकना होगा।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "어리석은 시도였군. 이 도시의 진실은… 너에게 너무 버거워.",
						"english": "A foolish attempt. The truth of this city... is too much for you.",
						"japanese": "愚かな試みだったな。この街の真実は… お前には重すぎる。",
						"chinese": "愚蠢的尝试。这座城市的真相… 对你而言太过沉重了。",
						"french": "Tentative insensée. La vérité de cette ville... est trop lourde pour toi.",
						"spanish": "Un intento necio. La verdad de esta ciudad... es demasiado para ti.",
						"vietnamese": "Một nỗ lực ngu ngốc. Sự thật về thành phố này… quá sức đối với ngươi.",
						"thai": "เป็นการลองที่โง่เขลา ความจริงของเมืองนี้… หนักหนาเกินไปสำหรับเจ้า",
						"hindi": "एक मूर्खतापूर्ण कोशिश थी। इस शहर का सच... तुम्हारे लिए बहुत भारी है।"
					},
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "크윽… 아직… 끝나지 않았어.",
						"english": "Ugh... It's not... over yet.",
						"japanese": "くっ… まだ… 終わってない…",
						"chinese": "呃… 还没… 结束…",
						"french": "Ugh... Ce n'est pas... encore fini.",
						"spanish": "Uf... Aún... no ha terminado.",
						"vietnamese": "Khụ… Vẫn… chưa kết thúc đâu.",
						"thai": "อึก… ยัง… ไม่จบหรอกนะ",
						"hindi": "उफ़... अभी... खत्म नहीं हुआ है।"
					}
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "하… 결국 여기까지 왔군. 하지만… 아직 끝나지 않았어.",
						"english": "Hah... So you made it this far. But... it's not over yet.",
						"japanese": "はあ…結局ここまで来たか。だが…まだ終わっていない。",
						"chinese": "哈… 没想到你们能走到这里。但是… 还没结束。",
						"french": "Ah… Vous êtes arrivés jusque-là. Mais… ce n'est pas encore fini.",
						"spanish": "Ah… Así que llegasteis hasta aquí. Pero… aún no ha terminado.",
						"vietnamese": "Ha… Cuối cùng cũng đến được đây. Nhưng… vẫn chưa kết thúc đâu.",
						"thai": "ฮ่า… ในที่สุดก็มาถึงจุดนี้ แต่… มันยังไม่จบหรอกนะ",
						"hindi": "हा… आख़िर तुम यहाँ तक आ ही गए। लेकिन… यह अभी ख़त्म नहीं हुआ है।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이 도시의 심장은… 다른 곳에 있다. 그리고 {random_boss}는… 그저 시작일 뿐.",
						"english": "This city's heart... lies elsewhere. And {random_boss}... is just the beginning.",
						"japanese": "この街の心臓は… 別の場所にある。そして、{random_boss}は… 始まりに過ぎない。",
						"chinese": "这座城市的心脏… 在别处。而 {random_boss}… 只是个开始。",
						"french": "Le cœur de cette ville... se trouve ailleurs. Et {random_boss}... n'est qu'un début.",
						"spanish": "El corazón de esta ciudad... reside en otro lugar. Y {random_boss}... es solo el principio.",
						"vietnamese": "Trái tim của thành phố này… nằm ở nơi khác. Và {random_boss}… chỉ là khởi đầu.",
						"thai": "หัวใจของเมืองนี้… อยู่ที่อื่น และ {random_boss}… เป็นเพียงแค่จุดเริ่มต้นเท่านั้น",
						"hindi": "इस शहर का दिल... कहीं और है। और {random_boss}... बस शुरुआत है।"
					},
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "…다른 심장?",
						"english": "...Another heart?",
						"japanese": "…別の心臓？",
						"chinese": "…另一个心脏？",
						"french": "...Un autre cœur ?",
						"spanish": "¿...Otro corazón?",
						"vietnamese": "...Một trái tim khác?",
						"thai": "...หัวใจดวงอื่น?",
						"hindi": "...एक और दिल?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "'파사드'의 잔해가 흩어지고, 도시의 또 다른 그림자가 드러나기 시작했다.",
						"english": "The remnants of 'Façade' scattered, revealing another shadow of the city.",
						"japanese": "「ファサード」の残骸が散り、都市のもう一つの影が姿を現し始めた。",
						"chinese": "“立面”的残骸散落，城市的另一道阴影开始显现。",
						"french": "Les vestiges de 'Façade' se sont dispersés, révélant une autre ombre de la ville.",
						"spanish": "Los restos de 'Fachada' se dispersaron, revelando otra sombra de la ciudad.",
						"vietnamese": "Tàn dư của 'Façade' tan biến, một bóng đen khác của thành phố bắt đầu lộ diện.",
						"thai": "ซากปรักหักพังของ 'Façade' กระจัดกระจาย เผยให้เห็นเงาอีกด้านของเมือง",
						"hindi": "'मुखौटा' के अवशेष बिखर गए, और शहर की एक और परछाई सामने आने लगी।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "마침내, '파사드'의 가장 깊은 곳. 거대한 그림자가 탐험대를 기다리고 있었다.",
						"english": "Finally, at the deepest part of 'Facade'. A colossal shadow awaited the expedition.",
						"japanese": "ついに、「ファサード」の最も深い場所。巨大な影が探検隊を待ち受けていた。",
						"chinese": "终于，在“立面”最深处。一道巨大的影子等待着探险队。",
						"french": "Enfin, au plus profond de « Façade ». Une ombre colossale attendait l'expédition.",
						"spanish": "Finalmente, en lo más profundo de 'Fachada'. Una sombra colosal esperaba a la expedición.",
						"vietnamese": "Cuối cùng, tại nơi sâu thẳm nhất của 'Façade'. Một bóng hình khổng lồ đang chờ đợi đoàn thám hiểm.",
						"thai": "ในที่สุด ที่ส่วนที่ลึกที่สุดของ 'Facade' เงาขนาดยักษ์กำลังรอคอยคณะสำรวจอยู่",
						"hindi": "अंततः, 'फ़ेकेड' के सबसे गहरे हिस्से में। एक विशाल छाया अभियान दल का इंतज़ार कर रही थी।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "찾아왔군… 이 진실을 감당할 수 있겠나?",
						"english": "You've come... Can you bear this truth?",
						"japanese": "来たか…この真実を耐え忍べるか？",
						"chinese": "你们来了… 能承受这份真相吗？",
						"french": "Vous êtes venus… Pouvez-vous supporter cette vérité ?",
						"spanish": "Habéis llegado… ¿Podéis soportar esta verdad?",
						"vietnamese": "Ngươi đã đến… Ngươi có thể chịu đựng được sự thật này không?",
						"thai": "มาแล้วสินะ… เจ้าจะแบกรับความจริงนี้ได้หรือเปล่า?",
						"hindi": "तुम आ गए… क्या तुम इस सच्चाई को सहन कर पाओगे?"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "당신이 모든 걸 꾸민 건가.",
						"english": "Did you orchestrate all of this?",
						"japanese": "全てあなたが一枚噛んでいたのか。",
						"chinese": "这一切都是你策划的吗？",
						"french": "Est-ce vous qui avez tout orchestré ?",
						"spanish": "¿Fuiste tú quien orquestó todo esto?",
						"vietnamese": "Có phải ngươi đã sắp đặt tất cả?",
						"thai": "คุณเป็นคนบงการทั้งหมดงั้นหรือ",
						"hindi": "क्या यह सब तुम्हारी साज़िश थी?"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "시작은 내가 아니었지. 나는 그저… 진실을 보여줄 뿐.",
						"english": "I didn't start it. I merely... show the truth.",
						"japanese": "始まりは私ではない。私はただ…真実を見せるだけだ。",
						"chinese": "开端并非我。我只是…展现真相。",
						"french": "Je n'ai pas commencé. Je ne fais que… révéler la vérité.",
						"spanish": "Yo no lo inicié. Yo solo… muestro la verdad.",
						"vietnamese": "Ta không phải kẻ khởi đầu. Ta chỉ… cho thấy sự thật.",
						"thai": "ฉันไม่ได้เป็นคนเริ่ม ฉันแค่… เปิดเผยความจริงเท่านั้น",
						"hindi": "शुरुआत मेरी नहीं थी। मैं तो बस… सच दिखाता हूँ।"
					},
					"speaker": "random_boss"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"거울처럼 빛나는 도시, 그 심장에 '파사드'가 서 있었다.",
			"모두가 탐했지만, 감춰진 그림자를 본 자는 없었다.",
			"시간은 흐르고, 파멸의 그림자가 서서히 미소 지었다.",
			"진실을 쫓는 자, 그에게 주어진 시간은 많지 않았다."
		],
		"english": [
			"A city shimmering like a mirror, and at its heart stood 'Façade'.",
			"All coveted it, yet none saw its hidden shadow.",
			"Time flowed on, and the shadow of ruin slowly smiled.",
			"For the one chasing truth, little time remained."
		],
		"japanese": [
			"鏡のように輝く都市、その心臓に「ファサード」はそびえ立っていた。",
			"誰もがそれを渇望したが、隠された影を見た者はいなかった。",
			"時は流れ、破滅の影がゆっくりと微笑んだ。",
			"真実を追う者、彼に残された時間は多くなかった。"
		],
		"chinese": [
			"城市如镜般闪耀，而‘立面’则矗立其中心。",
			"众人皆觊觎，却无人窥见其隐藏之影。",
			"时光流逝，毁灭的阴影渐渐露出了微笑。",
			"追寻真相者，所剩时日无多。"
		],
		"french": [
			"Une ville scintillante comme un miroir, et en son cœur se dressait 'Façade'.",
			"Tous le convoitaient, mais personne n'en voyait l'ombre cachée.",
			"Le temps s'écoulait, et l'ombre de la ruine souriait lentement.",
			"Pour celui qui cherchait la vérité, le temps était compté."
		],
		"spanish": [
			"Una ciudad que brillaba como un espejo, y en su corazón se erguía 'Fachada'.",
			"Todos lo codiciaban, pero nadie vio su sombra oculta.",
			"El tiempo transcurría, y la sombra de la ruina sonreía lentamente.",
			"Para quien perseguía la verdad, no quedaba mucho tiempo."
		],
		"vietnamese": [
			"Một thành phố rực rỡ như gương, và tại trái tim nó, 'Façade' sừng sững.",
			"Ai cũng thèm muốn, nhưng không ai thấy được cái bóng ẩn giấu của nó.",
			"Thời gian trôi, và bóng dáng hủy diệt dần mỉm cười.",
			"Kẻ đuổi theo sự thật, thời gian không còn nhiều."
		],
		"thai": [
			"เมืองที่เปล่งประกายดุจกระจก และ ณ ใจกลางของมัน 'Façade' ได้ตั้งตระหง่านอยู่",
			"ทุกคนปรารถนา ทว่าไม่มีใครเห็นเงาที่ซ่อนอยู่",
			"กาลเวลาผ่านไป และเงาแห่งหายนะยิ้มเยาะอย่างช้าๆ",
			"สำหรับผู้ที่ตามล่าความจริง เวลาก็เหลือน้อยเต็มที"
		],
		"hindi": [
			"दर्पण-सा चमकता शहर, उसके हृदय में 'फसाड' खड़ा था।",
			"सबने लालच किया, पर किसी ने उसकी छिपी छाया नहीं देखी।",
			"समय बीतता गया, और विनाश की छाया धीरे से मुस्कुराई।",
			"सत्य का पीछा करने वाले के लिए, समय कम था।"
		]
	}
} as const;
