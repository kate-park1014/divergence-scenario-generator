export const scenario_snowy_lyrewept_18_04 = {
	"scenario_id": "snowy_lyrewept_18_04",
	"order": 4,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"ivar": {
			"id": "mon_d8a80adc-9315-47b5-8c30-97ce33672bce",
			"name": {
				"korean": "이바르",
				"english": "Ivar",
				"japanese": "イヴァー",
				"chinese": "伊瓦尔",
				"french": "Ivar",
				"spanish": "Ivar",
				"vietnamese": "Ivar",
				"thai": "ไอวาร์",
				"hindi": "इवर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8dd7872b-d4df-44fd-b1a1-083a9156e700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/2622fb62-daf4-42d1-a83b-2b78869d3e00/public"
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
						"korean": "모든 것이 꽁꽁 얼어붙은 유적. 한기가 폐부를 찔렀다.",
						"english": "Ruins where everything was frozen solid. The chill pierced to the bone.",
						"japanese": "すべてが凍りついた遺跡。寒気が肺腑を刺した。",
						"chinese": "一切都被冻结的遗迹。寒意刺骨。",
						"french": "Des ruines où tout était figé. Le froid transperçait les poumons.",
						"spanish": "Ruinas donde todo estaba congelado. El frío calaba hasta los huesos.",
						"vietnamese": "Di tích nơi mọi thứ đóng băng hoàn toàn. Cái lạnh thấu xương.",
						"thai": "ซากปรักหักพังที่ทุกสิ่งถูกแช่แข็ง ความหนาวเย็นกัดกินปอด",
						"hindi": "खंडहर जहाँ सब कुछ जम गया था। ठंड फेफड़ों तक चुभ रही थी।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "이 추위는… 심상치 않아.",
						"english": "This cold... it's unusual.",
						"japanese": "この寒さは…尋常じゃない。",
						"chinese": "这股寒意……非同寻常。",
						"french": "Ce froid... c'est inhabituel.",
						"spanish": "Este frío... no es normal.",
						"vietnamese": "Cái lạnh này... không bình thường.",
						"thai": "ความหนาวเย็นนี้... ไม่ธรรมดา",
						"hindi": "यह ठंड... सामान्य नहीं है।"
					}
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "ivar",
					"duration_ms": 500,
					"spot": [
						4,
						3
					]
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "왔군. 네놈도 이 끝없는 굶주림을 느끼러 온 건가?",
						"english": "You've come. Have you also come to feel this endless hunger?",
						"japanese": "来たか。お前もこの終わりなき飢えを感じに来たのか？",
						"chinese": "你来了。你也是来感受这无尽饥饿的吗？",
						"french": "Tu es venu. Es-tu aussi venu ressentir cette faim sans fin ?",
						"spanish": "Has venido. ¿También has venido a sentir esta hambre interminable?",
						"vietnamese": "Ngươi đã đến. Ngươi cũng đến để cảm nhận cơn đói khát vô tận này sao?",
						"thai": "มาแล้วสินะ เจ้าเองก็มาเพื่อสัมผัสความหิวโหยอันไม่สิ้นสุดนี้ด้วยหรือ?",
						"hindi": "तुम आ गए। क्या तुम भी इस अंतहीन भूख को महसूस करने आए हो?"
					},
					"speaker": "ivar"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "당신은…?",
						"english": "You are...?",
						"japanese": "あなたは…？",
						"chinese": "您是……？",
						"french": "Vous êtes...?",
						"spanish": "¿Usted es...?",
						"vietnamese": "Ngươi là...?",
						"thai": "ท่านคือ...?",
						"hindi": "आप कौन हैं...?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "ivar",
					"content": {
						"korean": "이바르. 한때는 라이어웹트의 영광을 좇던 자.",
						"english": "Ivar. Once, one who pursued the glory of Lyarweb.",
						"japanese": "イヴァル。かつてはライアウェーブトの栄光を追った者。",
						"chinese": "伊瓦尔。曾几何时，追求莱亚韦布荣耀之人。",
						"french": "Ivar. Jadis, celui qui poursuivait la gloire de Lyarweb.",
						"spanish": "Ivar. Una vez, el que buscó la gloria de Lyarweb.",
						"vietnamese": "Ivar. Từng là kẻ theo đuổi vinh quang của Lyarweb.",
						"thai": "ไอวาร์ ครั้งหนึ่งผู้ที่ไล่ตามความรุ่งโรจน์ของไลอาร์เวบ",
						"hindi": "इवर। कभी लायरवेब की महिमा का पीछा करने वाला।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "지금은… 그 끝을 보려는 자.",
						"english": "Now… he who seeks its end.",
						"japanese": "「今は… その終わりを見ようとする者。」",
						"chinese": "现在… 企图看到其结局的人。",
						"french": "Maintenant… celui qui cherche sa fin.",
						"spanish": "Ahora… el que busca su fin.",
						"vietnamese": "Giờ đây… kẻ muốn nhìn thấy kết cục của nó.",
						"thai": "ตอนนี้… ผู้ที่ต้องการเห็นจุดจบของมัน",
						"hindi": "अब… वह जो इसका अंत देखना चाहता है।"
					},
					"speaker": "ivar"
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
					"type": "direction",
					"action": "enter",
					"speaker": "ivar"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "라이어웹트. 겨울의 정령.",
						"english": "Lyrawebt. Spirit of Winter.",
						"japanese": "「ライアウェブト。冬の精霊。」",
						"chinese": "莱雅维布特。冬之精灵。",
						"french": "Lyrawebt. L'esprit de l'hiver.",
						"spanish": "Lyrawebt. Espíritu del Invierno.",
						"vietnamese": "Lyrawebt. Tinh linh mùa đông.",
						"thai": "ไลราเวบต์ วิญญาณแห่งฤดูหนาว",
						"hindi": "लाइरावैब्ट। शीत ऋतु की आत्मा।"
					},
					"speaker": "ivar"
				},
				{
					"speaker": "ivar",
					"content": {
						"korean": "그는 모든 것을 얼음 속에 가두려 한다.",
						"english": "He seeks to trap all in ice.",
						"japanese": "「彼は全てを氷の中に閉じ込めようとする。」",
						"chinese": "他试图将一切都困在冰中。",
						"french": "Il cherche à tout emprisonner dans la glace.",
						"spanish": "Él busca atrapar todo en el hielo.",
						"vietnamese": "Hắn ta muốn giam cầm mọi thứ trong băng giá.",
						"thai": "เขาพยายามจะกักขังทุกสิ่งไว้ในน้ำแข็ง",
						"hindi": "वह सब कुछ बर्फ में कैद करना चाहता है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "왜?",
						"english": "Why?",
						"japanese": "「なぜ？」",
						"chinese": "为什么？",
						"french": "Pourquoi ?",
						"spanish": "¿Por qué?",
						"vietnamese": "Tại sao?",
						"thai": "ทำไม?",
						"hindi": "क्यों?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "ivar",
					"content": {
						"korean": "보존하기 위해서다. 잊히지 않기 위해.",
						"english": "To preserve. To not be forgotten.",
						"japanese": "「保存するため。忘れられないために。」",
						"chinese": "为了保存。为了不被遗忘。",
						"french": "Pour préserver. Pour ne pas être oublié.",
						"spanish": "Para preservar. Para no ser olvidado.",
						"vietnamese": "Để bảo tồn. Để không bị lãng quên.",
						"thai": "เพื่อรักษาไว้ เพื่อไม่ให้ถูกลืม",
						"hindi": "संरक्षित रखने के लिए। भूला न जाने के लिए।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "무엇을… 보존해?",
						"english": "What does he… preserve?",
						"japanese": "「何を… 保存するの？」",
						"chinese": "他… 保存了什么？",
						"french": "Que… préserve-t-il ?",
						"spanish": "¿Qué… preserva?",
						"vietnamese": "Hắn ta… bảo tồn cái gì?",
						"thai": "เขา… รักษาอะไรไว้?",
						"hindi": "वह क्या… संरक्षित रखता है?"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…그의 슬픔을.",
						"english": "…His sorrow.",
						"japanese": "「…彼の悲しみを。」",
						"chinese": "…他的悲伤。",
						"french": "…Sa tristesse.",
						"spanish": "…Su dolor.",
						"vietnamese": "…Nỗi buồn của hắn.",
						"thai": "…ความเศร้าของเขา",
						"hindi": "…उसका दुख।"
					},
					"speaker": "ivar"
				},
				{
					"content": {
						"korean": "극심한 한기 속, 순간적으로 따뜻한 온기가 느껴졌다. 희미하게 사라지는 눈물처럼.",
						"english": "In the extreme cold, a momentary warmth was felt. Like fading tears.",
						"japanese": "「極度の寒さの中、一瞬の温かさが感じられた。かすかに消える涙のように。」",
						"chinese": "在极度寒冷中，瞬间感受到一丝温暖。如同渐渐消失的泪水。",
						"french": "Dans le froid extrême, une chaleur momentanée fut ressentie. Comme des larmes qui s'estompent.",
						"spanish": "En el frío extremo, se sintió una calidez momentánea. Como lágrimas que se desvanecen.",
						"vietnamese": "Giữa cái lạnh cắt da cắt thịt, bỗng cảm thấy một chút ấm áp thoáng qua. Như những giọt nước mắt dần tan biến.",
						"thai": "ในความหนาวเย็นสุดขีด สัมผัสได้ถึงความอบอุ่นชั่วขณะ ราวกับน้ำตาที่ค่อยๆ เลือนหายไป",
						"hindi": "अत्यधिक ठंड में, क्षण भर के लिए गर्माहट महसूस हुई। जैसे धुंधले होते आँसू।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						3,
						3
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "ivar",
					"action": "enter"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "정령의 비극은… 그의 모든 것을 앗아갔다.",
						"english": "The spirit's tragedy… took everything from him.",
						"japanese": "「精霊の悲劇は… 彼の全てを奪い去った。」",
						"chinese": "精灵的悲剧… 夺走了他的一切。",
						"french": "La tragédie de l'esprit… lui a tout pris.",
						"spanish": "La tragedia del espíritu… le quitó todo.",
						"vietnamese": "Bi kịch của tinh linh… đã cướp đi tất cả của hắn.",
						"thai": "โศกนาฏกรรมของวิญญาณ… พรากทุกสิ่งไปจากเขา",
						"hindi": "आत्मा की त्रासदी… ने उससे सब कुछ छीन लिया।"
					},
					"speaker": "ivar"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "무슨 일이 있었던 거야?",
						"english": "What happened?",
						"japanese": "「何があったの？」",
						"chinese": "发生了什么？",
						"french": "Que s'est-il passé ?",
						"spanish": "¿Qué pasó?",
						"vietnamese": "Chuyện gì đã xảy ra?",
						"thai": "เกิดอะไรขึ้น?",
						"hindi": "क्या हुआ था?"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "사랑하는 이를 잃었다. 모든 온기를.",
						"english": "Lost a loved one. All warmth gone.",
						"japanese": "愛する者を失った。全ての温もりを。",
						"chinese": "失去了挚爱。所有的温暖。",
						"french": "J'ai perdu un être cher. Toute la chaleur.",
						"spanish": "Perdí a un ser querido. Toda la calidez.",
						"vietnamese": "Đã mất đi người yêu thương. Mọi sự ấm áp.",
						"thai": "สูญเสียคนที่รักไปแล้ว ความอบอุ่นทั้งหมด",
						"hindi": "एक प्रियजन को खो दिया। सारी गर्माहट।"
					},
					"speaker": "ivar"
				},
				{
					"content": {
						"korean": "그래서 그는 모든 것을 얼려버리기로 택했다. 영원히 변치 않도록.",
						"english": "So he chose to freeze everything. To remain unchanged forever.",
						"japanese": "だから彼は全てを凍らせることを選んだ。永遠に変わらぬように。",
						"chinese": "于是他选择冻结一切。为了永不改变。",
						"french": "Alors il a choisi de tout geler. Pour que rien ne change, à jamais.",
						"spanish": "Así que eligió congelarlo todo. Para que nunca cambiara.",
						"vietnamese": "Nên anh ta đã chọn đóng băng mọi thứ. Để mãi mãi không thay đổi.",
						"thai": "ดังนั้นเขาจึงเลือกที่จะแช่แข็งทุกสิ่ง เพื่อไม่ให้เปลี่ยนแปลงตลอดไป",
						"hindi": "इसलिए उसने सब कुछ जमा देने का फैसला किया। ताकि वह हमेशा के लिए अपरिवर्तित रहे।"
					},
					"speaker": "ivar",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그게… 구원이야?",
						"english": "Is that... salvation?",
						"japanese": "それが…救済なのか？",
						"chinese": "那是…救赎吗？",
						"french": "Est-ce... le salut ?",
						"spanish": "¿Eso es... la salvación?",
						"vietnamese": "Đó là... sự cứu rỗi sao?",
						"thai": "นั่นคือ... การไถ่บาปหรือ?",
						"hindi": "क्या वह… मोक्ष है?"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "ivar",
					"content": {
						"korean": "…영원히 고통받는 것. 파멸일지도.",
						"english": "...To suffer eternally. Perhaps ruin.",
						"japanese": "…永遠に苦しむこと。破滅かもしれない。",
						"chinese": "……永远受苦。或许是毁灭。",
						"french": "...Souffrir éternellement. Peut-être la ruine.",
						"spanish": "...Sufrir eternamente. Quizás la ruina.",
						"vietnamese": "...Sống trong đau khổ vĩnh viễn. Có lẽ là sự hủy diệt.",
						"thai": "...ทนทุกข์ทรมานชั่วนิรันดร์ อาจเป็นหายนะ",
						"hindi": "...हमेशा के लिए पीड़ित रहना। शायद विनाश।"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "ivar",
					"type": "direction"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "ivar",
					"content": {
						"korean": "네놈이 그 얼음을 녹이려 한다면… 정령은 네놈을 가만두지 않을 거다.",
						"english": "If you try to melt that ice... the spirits will not leave you be.",
						"japanese": "お前がその氷を溶かそうとするならば…精霊がお前を許さないだろう。",
						"chinese": "若你企图融化那冰…精灵是不会放过你的。",
						"french": "Si tu tentes de faire fondre cette glace... les esprits ne te laisseront pas faire.",
						"spanish": "Si intentas derretir ese hielo... los espíritus no te lo permitirán.",
						"vietnamese": "Nếu ngươi dám làm tan tảng băng đó... linh hồn sẽ không tha cho ngươi đâu.",
						"thai": "หากเจ้าพยายามละลายน้ำแข็งนั้น... วิญญาณจะไม่ปล่อยเจ้าไป",
						"hindi": "यदि तुम उस बर्फ़ को पिघलाने की कोशिश करते हो… आत्माएँ तुम्हें बख्शेंगी नहीं।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "어떻게 해야 해?",
						"english": "What should I do?",
						"japanese": "どうすればいい？",
						"chinese": "我该怎么做？",
						"french": "Que dois-je faire ?",
						"spanish": "¿Qué debo hacer?",
						"vietnamese": "Tôi phải làm gì?",
						"thai": "ฉันควรทำอย่างไร?",
						"hindi": "मुझे क्या करना चाहिए?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "강함의 끝은 결국… 무엇을 남기는가?",
						"english": "The end of strength... what does it ultimately leave behind?",
						"japanese": "強さの果ては結局…何を残すのか？",
						"chinese": "力量的尽头…最终会留下什么？",
						"french": "La fin de la force... que laisse-t-elle finalement derrière elle ?",
						"spanish": "El fin de la fuerza... ¿qué deja finalmente atrás?",
						"vietnamese": "Cuối cùng, sự mạnh mẽ... để lại điều gì?",
						"thai": "จุดจบของความแข็งแกร่ง... สุดท้ายแล้วทิ้งอะไรไว้?",
						"hindi": "शक्ति का अंत… अंततः क्या छोड़ जाता है?"
					},
					"speaker": "ivar",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "….",
						"english": "....",
						"japanese": "…",
						"chinese": "……",
						"french": "...",
						"spanish": "...",
						"vietnamese": "...",
						"thai": "...",
						"hindi": "..."
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "ivar",
					"content": {
						"korean": "곧 그 해답을 보게 될 거다. 저 너머에.",
						"english": "Soon you will see the answer. Beyond.",
						"japanese": "間もなくその答えを見るだろう。その向こうに。",
						"chinese": "你很快就会看到答案。在那 beyond。",
						"french": "Bientôt tu verras la réponse. Au-delà.",
						"spanish": "Pronto verás la respuesta. Más allá.",
						"vietnamese": "Ngươi sẽ sớm thấy câu trả lời thôi. Ở phía bên kia.",
						"thai": "เจ้าจะได้เห็นคำตอบในไม่ช้า ที่อยู่เบื้องหลังนั้น",
						"hindi": "जल्द ही तुम्हें वह जवाब मिल जाएगा। उस पार।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "압도적인 냉기가 앞을 가로막았다. 정체 모를 그림자가 기다리고 있었다.",
						"english": "Overwhelming cold blocked the way. An unknown shadow awaited.",
						"japanese": "圧倒的な冷気が道を阻んだ。正体不明の影が待ち構えていた。",
						"chinese": "压倒性的寒气阻挡了去路。一个不明的影子正在等待。",
						"french": "Un froid accablant bloquait le passage. Une ombre inconnue attendait.",
						"spanish": "Un frío abrumador bloqueaba el camino. Una sombra desconocida esperaba.",
						"vietnamese": "Hơi lạnh ngập tràn chắn lối đi. Một bóng hình không rõ danh tính đang chờ đợi.",
						"thai": "ความหนาวเย็นอันท่วมท้นขวางทางอยู่ เงาที่ไม่รู้จักกำลังรอคอย",
						"hindi": "अत्यधिक ठंड ने रास्ता रोक दिया। एक अज्ञात छाया इंतज़ार कर रही थी।"
					},
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"content": {
						"korean": "가여운 자… 슬픔은… 너를 집어삼킬 것이다…",
						"english": "Poor soul… sorrow… will consume you…",
						"japanese": "哀れな者よ… 悲しみは… お前を飲み込むだろう…",
						"chinese": "可怜人啊… 悲伤… 将吞噬你…",
						"french": "Pauvre âme… la tristesse… te dévorera…",
						"spanish": "Pobre alma… la tristeza… te consumirá…",
						"vietnamese": "Kẻ đáng thương… Nỗi buồn… sẽ nuốt chửng ngươi…",
						"thai": "น่าสงสารเอ๋ย… ความโศกเศร้า… จะกลืนกินเจ้า…",
						"hindi": "दीन आत्मा… दुख… तुम्हें निगल जाएगा…"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "아직… 끝나지 않았어!",
						"english": "It's not… over yet!",
						"japanese": "まだ… 終わってない！",
						"chinese": "还没… 结束！",
						"french": "Ce n'est pas… encore fini !",
						"spanish": "¡Aún no… ha terminado!",
						"vietnamese": "Chưa… kết thúc đâu!",
						"thai": "ยัง… ไม่จบ!",
						"hindi": "अभी… खत्म नहीं हुआ!"
					}
				},
				{
					"type": "direction",
					"speaker": "ivar",
					"action": "enter",
					"spot": [
						2,
						3
					],
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "ivar",
					"content": {
						"korean": "포기하는가? 그것이 네놈의 강함의 끝인가?",
						"english": "Do you give up? Is this the end of your strength?",
						"japanese": "諦めるのか？それが貴様の強さの終わりか？",
						"chinese": "放弃了吗？这就是你力量的尽头吗？",
						"french": "Abandonnes-tu ? Est-ce la fin de ta force ?",
						"spanish": "¿Te rindes? ¿Es este el fin de tu fuerza?",
						"vietnamese": "Ngươi bỏ cuộc sao? Đây là giới hạn sức mạnh của ngươi sao?",
						"thai": "เจ้าจะยอมแพ้รึ? นี่คือจุดสิ้นสุดของพลังเจ้าแล้วหรือ?",
						"hindi": "क्या तुम हार मानते हो? क्या यही तुम्हारी शक्ति का अंत है?"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "아니… 다시 일어설 거야.",
						"english": "No… I'll rise again.",
						"japanese": "いや… また立ち上がる。",
						"chinese": "不… 我会再次站起来。",
						"french": "Non… je me relèverai.",
						"spanish": "No… me levantaré de nuevo.",
						"vietnamese": "Không… Ta sẽ đứng dậy lần nữa.",
						"thai": "ไม่… ข้าจะลุกขึ้นยืนอีกครั้ง",
						"hindi": "नहीं… मैं फिर खड़ा होऊंगा।"
					},
					"emotion": "angry",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "크윽… 이 슬픔은… 영원할 것이다…",
						"english": "Ugh… This sorrow… will be eternal…",
						"japanese": "くっ…この悲しみは…永遠だろう…",
						"chinese": "呃…这份悲伤…将永恒…",
						"french": "Argh… Cette tristesse… sera éternelle…",
						"spanish": "Ugh… Esta tristeza… será eterna…",
						"vietnamese": "Ư… nỗi buồn này… sẽ vĩnh cửu…",
						"thai": "อึก…ความเศร้าโศกนี้…จะคงอยู่ชั่วนิรันดร์…",
						"hindi": "उफ़… यह दुख… शाश्वत रहेगा…"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "결국… 아무것도 변하지 않아?",
						"english": "In the end… nothing changes?",
						"japanese": "結局…何も変わらないのか？",
						"chinese": "最终…什么都没改变吗？",
						"french": "Au final… rien ne change ?",
						"spanish": "Al final… ¿nada cambia?",
						"vietnamese": "Cuối cùng… chẳng có gì thay đổi sao?",
						"thai": "ท้ายที่สุด…ไม่มีอะไรเปลี่ยนไปเลยหรือ?",
						"hindi": "अंततः… क्या कुछ भी नहीं बदलता?"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "전장의 한기가 짙어지는 가운데, 다시금 희미한 온기가 느껴졌다. 누군가의 눈물처럼 사라졌다.",
						"english": "As the chill of the battlefield deepened, a faint warmth was felt once more. It vanished like someone's tears.",
						"japanese": "戦場の冷気が濃くなる中、再び微かな温もりが感じられた。誰かの涙のように消え去った。",
						"chinese": "战场寒意渐浓，一丝微弱的暖意再次浮现。旋即，又如某人的泪水般消散。",
						"french": "Alors que le froid du champ de bataille s'intensifiait, une faible chaleur se fit de nouveau sentir. Elle disparut comme les larmes de quelqu'un.",
						"spanish": "Mientras el frío del campo de batalla se intensificaba, una débil calidez se sintió de nuevo. Desapareció como las lágrimas de alguien.",
						"vietnamese": "Giữa lúc khí lạnh chiến trường trở nên dày đặc, một chút hơi ấm mờ nhạt lại được cảm nhận. Rồi tan biến như giọt nước mắt của ai đó.",
						"thai": "ขณะที่ความหนาวเย็นจากสนามรบเข้มข้นขึ้น ความอบอุ่นจางๆ ก็กลับมาอีกครั้ง มันหายไปราวกับหยาดน้ำตาของใครบางคน",
						"hindi": "जैसे-जैसे युद्धक्षेत्र की ठंडक गहरी होती गई, एक हल्की गर्माहट फिर से महसूस हुई। यह किसी के आँसुओं की तरह गायब हो गई।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이바르의 말은… 정령의 슬픔은 끝없이 메아리치는구나.",
						"english": "Ivar's words… the spirits' sorrow echoes endlessly.",
						"japanese": "イヴァルの言葉は…精霊の悲しみは果てしなくこだまするのだな。",
						"chinese": "伊瓦尔的话语…精灵的悲伤，无尽回响。",
						"french": "Les mots d'Ivar… la tristesse des esprits résonne sans fin.",
						"spanish": "Las palabras de Ivar… la tristeza de los espíritus resuena sin fin.",
						"vietnamese": "Lời nói của Ivar… nỗi buồn của tinh linh vang vọng không ngừng.",
						"thai": "คำพูดของอีวาร์…ความเศร้าของภูตผีสะท้อนก้องไม่รู้จบ",
						"hindi": "इवार के शब्द… आत्माओं का दुख अंतहीन गूँजता है।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "그러나 길은 멈추지 않는다. 더 깊은 비극 속으로.",
						"english": "But the path doesn't end. Into deeper tragedy.",
						"japanese": "しかし道は止まらない。より深い悲劇の中へ。",
						"chinese": "然而道路并未停止。迈向更深的悲剧。",
						"french": "Mais le chemin ne s'arrête pas. Vers une tragédie plus profonde.",
						"spanish": "Pero el camino no se detiene. Hacia una tragedia más profunda.",
						"vietnamese": "Nhưng con đường không dừng lại. Tiến vào bi kịch sâu hơn.",
						"thai": "แต่เส้นทางไม่หยุดนิ่ง สู่โศกนาฏกรรมที่ลึกซึ้งกว่า",
						"hindi": "परन्तु मार्ग नहीं रुकता। और गहरे दुखों में।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "감히… 이 영역을 침범하려 하는가?",
						"english": "Dare you... trespass upon this domain?",
						"japanese": "貴様…この領域を侵そうというのか？",
						"chinese": "竟敢…侵犯此领域？",
						"french": "Osez-vous… envahir ce domaine ?",
						"spanish": "¿Osas… invadir este dominio?",
						"vietnamese": "Ngươi… dám xâm phạm lãnh địa này?",
						"thai": "กล้าดียังไง… มาบุกรุกอาณาเขตนี้?",
						"hindi": "क्या तुम… इस क्षेत्र का अतिक्रमण करने की हिम्मत करते हो?"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "당신이 정령의 힘으로 조종되는 존재인가?",
						"english": "Are you a being controlled by the power of spirits?",
						"japanese": "貴様は精霊の力に操られる存在なのか？",
						"chinese": "你是被精灵之力操控的存在吗？",
						"french": "Êtes-vous un être contrôlé par le pouvoir des esprits ?",
						"spanish": "¿Eres un ser controlado por el poder de los espíritus?",
						"vietnamese": "Ngươi có phải là kẻ bị sức mạnh tinh linh điều khiển?",
						"thai": "เจ้าคือสิ่งมีชีวิตที่ถูกควบคุมด้วยพลังของภูตผีหรือ?",
						"hindi": "क्या तुम आत्माओं की शक्ति से नियंत्रित प्राणी हो?"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "나는… 영원한 슬픔을 지키는 자.",
						"english": "I am… the guardian of eternal sorrow.",
						"japanese": "私は…永遠の悲しみを守る者。",
						"chinese": "我乃…永恒悲伤的守护者。",
						"french": "Je suis… le gardien de la tristesse éternelle.",
						"spanish": "Yo soy… el guardián de la tristeza eterna.",
						"vietnamese": "Ta là… kẻ canh giữ nỗi buồn vĩnh cửu.",
						"thai": "ข้าคือ… ผู้พิทักษ์แห่งความเศร้าชั่วนิรันดร์",
						"hindi": "मैं हूँ… शाश्वत दुख का संरक्षक।"
					},
					"speaker": "random_boss"
				},
				{
					"type": "direction",
					"speaker": "ivar",
					"action": "enter",
					"spot": [
						4,
						3
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "강함의 끝이 결국 이것이었나. 텅 비어버린 껍데기.",
						"english": "Was this the end of strength? An empty husk.",
						"japanese": "強さの果ては結局これだったのか。空っぽの抜け殻。",
						"chinese": "力量的尽头，终是如此吗？只剩空壳。",
						"french": "La fin de la force n'était donc que cela. Une coquille vide.",
						"spanish": "¿Era este el final de la fuerza? Un cascarón vacío.",
						"vietnamese": "Hóa ra đây là kết cục của sức mạnh. Một cái xác rỗng tuếch.",
						"thai": "ที่สุดแห่งความแข็งแกร่งเป็นเช่นนี้หรือไร? เพียงเปลือกหอยที่ว่างเปล่า",
						"hindi": "क्या यही थी शक्ति की पराकाष्ठा? एक खाली खोखला।"
					},
					"speaker": "ivar"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이바르… 당신은 싸우지 않을 거야?",
						"english": "Ivar… won't you fight?",
						"japanese": "イヴァル…あなたは戦わないのか？",
						"chinese": "伊瓦尔…你不会战斗吗？",
						"french": "Ivar… ne te battras-tu pas ?",
						"spanish": "Ivar… ¿no lucharás?",
						"vietnamese": "Ivar… ngươi sẽ không chiến đấu sao?",
						"thai": "อีวาร์… เจ้าจะไม่ต่อสู้หรือ?",
						"hindi": "इवार… क्या तुम लड़ोगे नहीं?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "나는 나의 길을 간다. 네놈의 강함으로 이 진실을 꿰뚫어라.",
						"english": "I walk my own path. Pierce this truth with your strength.",
						"japanese": "私は我が道を行く。貴様の強さでこの真実を貫け。",
						"chinese": "我走我的路。用你的强大，洞穿这真相吧。",
						"french": "Je suis mon propre chemin. Transperce cette vérité de ta force.",
						"spanish": "Sigo mi propio camino. Atraviesa esta verdad con tu fuerza.",
						"vietnamese": "Ta đi theo con đường của ta. Hãy dùng sức mạnh của ngươi xuyên thủng chân lý này.",
						"thai": "ข้าจะดำเนินไปตามทางของข้า จงเจาะทะลุความจริงนี้ด้วยพลังของเจ้า",
						"hindi": "मैं अपने मार्ग पर चलता हूँ। अपनी शक्ति से इस सत्य को भेद दो।"
					},
					"speaker": "ivar"
				},
				{
					"action": "exit",
					"speaker": "ivar",
					"type": "direction",
					"direction": "up",
					"duration_ms": 400
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"얼어붙은 세계. 진실은 얼음장처럼 차가웠다.",
			"강함을 좇던 전사, 이바르. 그도 이 혹한 속에 갇혔다.",
			"정령의 슬픔이 모든 것을 보존하려는 이유.",
			"그 비극적인 운명 속에서, 희미한 온기가 느껴졌다.",
			"그것은 눈물이었을까?"
		],
		"english": [
			"A frozen world. The truth, cold as ice.",
			"Ivar, a warrior who sought strength. He too was trapped in this bitter cold.",
			"The spirit's sorrow, why it sought to preserve everything.",
			"Amidst that tragic fate, a faint warmth was felt.",
			"Was it tears?"
		],
		"japanese": [
			"凍てついた世界。真実は氷のように冷たかった。",
			"強さを求めた戦士、イヴァル。彼もまた、この厳寒の中に囚われた。",
			"精霊の悲しみ、それがすべてを保存しようとする理由。",
			"その悲劇的な運命の中、微かな温もりが感じられた。",
			"それは涙だったのだろうか？"
		],
		"chinese": [
			"冰封的世界。真相如寒冰般冷酷。",
			"追求力量的战士，伊瓦尔。他也困于这严寒之中。",
			"精灵的悲伤，它为何要保留一切。",
			"在那悲剧的命运中，一丝微弱的温暖被感受到。",
			"那是眼泪吗？"
		],
		"french": [
			"Un monde gelé. La vérité, froide comme la glace.",
			"Ivar, un guerrier en quête de force. Lui aussi fut piégé dans ce froid glacial.",
			"La tristesse de l'esprit, la raison pour laquelle il cherchait à tout préserver.",
			"Au milieu de ce destin tragique, une légère chaleur fut ressentie.",
			"Était-ce des larmes ?"
		],
		"spanish": [
			"Un mundo congelado. La verdad, fría como el hielo.",
			"Ivar, un guerrero que buscaba la fuerza. Él también quedó atrapado en este frío amargo.",
			"La tristeza del espíritu, la razón por la que buscó preservar todo.",
			"En medio de ese trágico destino, se sintió una calidez tenue.",
			"¿Eran lágrimas?"
		],
		"vietnamese": [
			"Một thế giới băng giá. Sự thật lạnh lẽo như băng.",
			"Ivar, chiến binh tìm kiếm sức mạnh. Anh ta cũng bị mắc kẹt trong cái lạnh khắc nghiệt này.",
			"Nỗi buồn của linh hồn, lý do nó muốn bảo tồn mọi thứ.",
			"Giữa số phận bi thảm đó, một hơi ấm mờ nhạt được cảm nhận.",
			"Đó có phải là nước mắt không?"
		],
		"thai": [
			"โลกที่เยือกแข็ง ความจริงที่หนาวเย็นราวกับน้ำแข็ง",
			"ไอวาร์ นักรบผู้แสวงหาความแข็งแกร่ง เขาก็ติดอยู่ในความหนาวเหน็บนี้เช่นกัน",
			"ความโศกเศร้าของวิญญาณ เหตุผลที่มันพยายามจะรักษาสรรพสิ่ง",
			"ท่ามกลางชะตากรรมอันน่าเศร้าโศกนั้น ความอบอุ่นจางๆ ได้ถูกสัมผัส",
			"นั่นคือน้ำตาหรือเปล่า?"
		],
		"hindi": [
			"जमी हुई दुनिया। सच बर्फ की तरह ठंडा था।",
			"शक्ति की तलाश करने वाला योद्धा, इवर। वह भी इस कड़ाके की ठंड में फँस गया।",
			"आत्मा का दुख, क्यों वह सब कुछ संरक्षित करना चाहती थी।",
			"उस दुखद नियति के बीच, एक हल्की गर्माहट महसूस हुई।",
			"क्या वह आँसू थे?"
		]
	}
} as const;
