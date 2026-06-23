export const scenario_modern_axiom_17_04 = {
	"scenario_id": "modern_axiom_17_04",
	"order": 4,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"zoe": {
			"id": "mon_ad3762e0-13f3-44a1-9b84-4ff67136858e",
			"name": {
				"korean": "조이",
				"english": "Zoe",
				"japanese": "ゾーイ",
				"chinese": "佐伊",
				"french": "Zoé",
				"spanish": "Zoe",
				"vietnamese": "Zoe",
				"thai": "โซอี้",
				"hindi": "ज़ोई"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/75dcfb0c-33e3-4208-4205-fb09d4abb100/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a7d0ebe1-73dc-4683-1338-32be2f7fac00/public"
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
						"korean": "차가운 금속 복도가 끝없이 이어졌다.",
						"english": "A cold metal corridor stretched endlessly.",
						"japanese": "冷たい金属の廊下がどこまでも続いていた。",
						"chinese": "冰冷的金属走廊无尽延伸。",
						"french": "Un froid couloir métallique s'étendait à l'infini.",
						"spanish": "Un frío pasillo de metal se extendía sin fin.",
						"vietnamese": "Một hành lang kim loại lạnh lẽo kéo dài vô tận.",
						"thai": "ทางเดินโลหะเย็นเฉียบทอดยาวไม่สิ้นสุด",
						"hindi": "एक ठंडा धातु का गलियारा अंतहीन फैला हुआ था।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "젠장, 여긴 어디야.",
						"english": "Damn it, where am I?",
						"japanese": "くそ、ここはどこだ。",
						"chinese": "该死，这是哪儿？",
						"french": "Bon sang, où suis-je ?",
						"spanish": "Maldita sea, ¿dónde estoy?",
						"vietnamese": "Chết tiệt, đây là đâu?",
						"thai": "บ้าจริง, ที่นี่ที่ไหนเนี่ย",
						"hindi": "धिक्कार है, मैं कहाँ हूँ?"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "zoe",
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"spot": [
						4,
						1
					]
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "...조심해. 여기 모든 벽에 눈이 달렸어.",
						"english": "...Be careful. Every wall here has eyes.",
						"japanese": "…気をつけろ。ここの壁には全て目がある。",
						"chinese": "……小心。这里的每堵墙都长了眼睛。",
						"french": "...Fais attention. Tous les murs ici ont des yeux.",
						"spanish": "...Ten cuidado. Todas las paredes aquí tienen ojos.",
						"vietnamese": "...Cẩn thận. Mọi bức tường ở đây đều có mắt.",
						"thai": "...ระวังให้ดี ผนังทุกด้านที่นี่มีตา",
						"hindi": "...सावधान रहना। यहाँ हर दीवार की आँखें हैं।"
					},
					"speaker": "zoe"
				},
				{
					"content": {
						"korean": "누구세요?",
						"english": "Who are you?",
						"japanese": "誰だ？",
						"chinese": "你是谁？",
						"french": "Qui êtes-vous ?",
						"spanish": "¿Quién eres?",
						"vietnamese": "Anh là ai?",
						"thai": "คุณเป็นใคร?",
						"hindi": "तुम कौन हो?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "zoe",
					"content": {
						"korean": "조이. 너처럼 여기 갇힌 사람이지. 아키움은 모든 걸 보고 있어.",
						"english": "Joy. Just like you, I'm trapped here. Akium sees everything.",
						"japanese": "ジョイだ。お前と同じで、ここに閉じ込められている。アキウムは全てを見ている。",
						"chinese": "乔伊。和你一样，我被困在这里。亚基姆能看到一切。",
						"french": "Joy. Comme toi, je suis piégée ici. Akium voit tout.",
						"spanish": "Joy. Como tú, estoy atrapada aquí. Akium lo ve todo.",
						"vietnamese": "Joy. Giống như anh, tôi cũng bị mắc kẹt ở đây. Akium nhìn thấy mọi thứ.",
						"thai": "จอย ฉันก็เหมือนนาย ถูกขังอยู่ที่นี่ อาเคียมเห็นทุกอย่าง",
						"hindi": "जॉय। तुम्हारी तरह, मैं भी यहाँ फँसी हुई हूँ। एकियम सब कुछ देखता है।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"spot": [
						2,
						2
					],
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"speaker": "zoe"
				},
				{
					"content": {
						"korean": "네가 뭘 하든, 뭘 생각하든... 전부 기록돼.",
						"english": "Whatever you do, whatever you think... it's all recorded.",
						"japanese": "お前が何をしようと、何を考えようと…全て記録される。",
						"chinese": "无论你做什么，想什么……都会被记录下来。",
						"french": "Quoi que tu fasses, quoi que tu penses... tout est enregistré.",
						"spanish": "Hagas lo que hagas, pienses lo que pienses... todo queda registrado.",
						"vietnamese": "Dù anh làm gì, dù anh nghĩ gì... tất cả đều được ghi lại.",
						"thai": "ไม่ว่านายจะทำอะไร คิดอะไร... ทุกอย่างถูกบันทึกไว้",
						"hindi": "तुम कुछ भी करो, कुछ भी सोचो... सब कुछ रिकॉर्ड होता है।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "zoe"
				},
				{
					"content": {
						"korean": "말도 안 돼.",
						"english": "No way.",
						"japanese": "まさか。",
						"chinese": "不可能。",
						"french": "Impossible.",
						"spanish": "Imposible.",
						"vietnamese": "Vô lý.",
						"thai": "เป็นไปไม่ได้",
						"hindi": "असंभव।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"speaker": "zoe",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "그게 현실이야. 탈출구는 없어. 난 수없이 시도했어.",
						"english": "That's the reality. There's no escape. I've tried countless times.",
						"japanese": "それが現実だ。逃げ場はない。私は何度も試した。",
						"chinese": "那是现实。没有出口。我尝试了无数次。",
						"french": "C'est la réalité. Il n'y a pas d'échappatoire. J'ai essayé d'innombrables fois.",
						"spanish": "Esa es la realidad. No hay escape. Lo he intentado innumerables veces.",
						"vietnamese": "Đó là hiện thực. Không có lối thoát. Tôi đã thử vô số lần.",
						"thai": "นั่นคือความจริง ไม่มีทางหนี ฉันลองมาแล้วนับครั้งไม่ถ้วน",
						"hindi": "यही सच्चाई है। कोई बचकर नहीं निकल सकता। मैंने अनगिनत बार कोशिश की है।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "그럼 우린 여기서 뭘 해야 하는 거죠?",
						"english": "So what should we do here?",
						"japanese": "じゃあ、ここで何をすればいいんですか？",
						"chinese": "那我们在这里该做什么呢？",
						"french": "Alors, que devons-nous faire ici ?",
						"spanish": "Entonces, ¿qué debemos hacer aquí?",
						"vietnamese": "Vậy chúng ta phải làm gì ở đây?",
						"thai": "แล้วเราควรทำอะไรที่นี่?",
						"hindi": "तो हमें यहाँ क्या करना चाहिए?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "zoe",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…숨어. 그게 최선이야.",
						"english": "...Hide. That's your best bet.",
						"japanese": "…隠れろ。それが最善だ。",
						"chinese": "…躲起来。那是最好的办法。",
						"french": "...Cache-toi. C'est la meilleure option.",
						"spanish": "...Escóndete. Es la mejor opción.",
						"vietnamese": "...Trốn đi. Đó là cách tốt nhất.",
						"thai": "...ซ่อนตัว นั่นคือทางเลือกที่ดีที่สุด",
						"hindi": "...छिप जाओ। वही सबसे अच्छा है।"
					}
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"spot": [
						3,
						1
					],
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"speaker": "zoe"
				},
				{
					"content": {
						"korean": "한때는 나도 희망을 품었지. 감시망을 뚫고 자유로워질 수 있다고.",
						"english": "I once held hope. That I could break through the surveillance and be free.",
						"japanese": "かつては私も希望を抱いていた。監視網を突破して自由になれると。",
						"chinese": "我曾一度抱有希望。能够突破监控网获得自由。",
						"french": "J'ai autrefois eu de l'espoir. De pouvoir briser la surveillance et être libre.",
						"spanish": "Una vez tuve esperanza. De poder romper la vigilancia y ser libre.",
						"vietnamese": "Đã từng có lúc tôi ôm hy vọng. Rằng mình có thể xuyên thủng mạng lưới giám sát và tự do.",
						"thai": "ครั้งหนึ่งฉันเคยมีความหวัง ว่าจะสามารถทะลุระบบเฝ้าระวังและเป็นอิสระได้",
						"hindi": "एक समय था जब मुझे भी उम्मीद थी। कि मैं निगरानी से बचकर आज़ाद हो सकता हूँ।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "zoe"
				},
				{
					"content": {
						"korean": "...결국 실패했나요?",
						"english": "...Did you fail in the end?",
						"japanese": "...結局、失敗したんですか？",
						"chinese": "...最终还是失败了吗？",
						"french": "...Avez-vous finalement échoué ?",
						"spanish": "...¿Al final fracasaste?",
						"vietnamese": "...Cuối cùng thì thất bại ư?",
						"thai": "...สุดท้ายก็ล้มเหลวใช่ไหม?",
						"hindi": "...क्या अंततः आप असफल रहे?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "시스템은 완벽해. 빈틈이 없어.",
						"english": "The system is perfect. There are no loopholes.",
						"japanese": "システムは完璧だ。隙がない。",
						"chinese": "系统是完美的。没有漏洞。",
						"french": "Le système est parfait. Il n'y a pas de faille.",
						"spanish": "El sistema es perfecto. No hay fallas.",
						"vietnamese": "Hệ thống hoàn hảo. Không có kẽ hở.",
						"thai": "ระบบสมบูรณ์แบบ ไม่มีช่องโหว่",
						"hindi": "सिस्टम एकदम सही है। कोई कमी नहीं है।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "zoe"
				},
				{
					"content": {
						"korean": "그럼 우린… 영원히?",
						"english": "So we're... stuck forever?",
						"japanese": "じゃあ私たちは…永遠に？",
						"chinese": "那我们…要永远这样吗？",
						"french": "Alors nous sommes... pour toujours ?",
						"spanish": "Entonces nosotros... ¿para siempre?",
						"vietnamese": "Vậy chúng ta... mãi mãi ư?",
						"thai": "งั้นเรา...ตลอดไปเลยเหรอ?",
						"hindi": "तो हम... हमेशा के लिए?"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "zoe",
					"content": {
						"korean": "…모르겠어. 그저 버틸 뿐.",
						"english": "...I don't know. Just endure.",
						"japanese": "…わからない。ただ耐えるだけだ。",
						"chinese": "…我不知道。只能忍受。",
						"french": "...Je ne sais pas. Juste endurer.",
						"spanish": "...No lo sé. Solo soportar.",
						"vietnamese": "...Tôi không biết. Chỉ biết chịu đựng thôi.",
						"thai": "...ฉันไม่รู้ แค่อดทนไว้",
						"hindi": "...मुझे नहीं पता। बस सहते रहो।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "여기 진짜 답답하다. 숨이 막혀.",
						"english": "It's really stifling in here. I can't breathe.",
						"japanese": "ここは本当に息苦しい。息が詰まる。",
						"chinese": "这里真令人窒息。我喘不过气来。",
						"french": "C'est vraiment étouffant ici. Je suffoque.",
						"spanish": "Aquí es realmente asfixiante. Me ahogo.",
						"vietnamese": "Ở đây ngột ngạt thật. Tôi nghẹt thở.",
						"thai": "ที่นี่อึดอัดจริงๆ หายใจไม่ออกเลย",
						"hindi": "यहाँ सच में दम घुट रहा है। मेरी साँस रुक रही है।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"action": "enter",
					"spot": [
						1,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "zoe"
				},
				{
					"speaker": "zoe",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "그래. 이 도시는 거대한 감옥이야.",
						"english": "Yes. This city is a giant prison.",
						"japanese": "ああ。この街は巨大な監獄だ。",
						"chinese": "是啊。这座城市就是一座巨大的监狱。",
						"french": "Oui. Cette ville est une immense prison.",
						"spanish": "Sí. Esta ciudad es una prisión gigante.",
						"vietnamese": "Đúng vậy. Thành phố này là một nhà tù khổng lồ.",
						"thai": "ใช่แล้ว เมืองนี้คือคุกขนาดใหญ่",
						"hindi": "हाँ। यह शहर एक विशाल जेल है।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "모든 행동이 감시당한다니… 소름 끼쳐.",
						"english": "Every move watched... It's creepy.",
						"japanese": "全ての行動が監視されているなんて… 気味が悪い。",
						"chinese": "一举一动都被监视着……真让人毛骨悚然。",
						"french": "Chaque mouvement est surveillé… C'est effrayant.",
						"spanish": "Cada movimiento vigilado... Es espeluznante.",
						"vietnamese": "Mọi hành động đều bị giám sát… Thật rợn người.",
						"thai": "ทุกการกระทำถูกจับตาดู... น่าขนลุกจริงๆ",
						"hindi": "हर हरकत पर नज़र रखी जाती है... यह डरावना है।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "도시의 모든 전자기기에서 미묘한 노이즈와 함께 섬뜩한 경고음이 들렸다. '모든 것은 기록된다'라는 문구가 화면에 잠깐 비쳤다.",
						"english": "A subtle static and eerie warning sound emanated from all electronics in the city. The message 'All is recorded' flashed briefly on screens.",
						"japanese": "都市中の全ての電子機器から、微かなノイズとともに不気味な警告音が聞こえた。「全ては記録される」という文字が画面に一瞬映し出された。",
						"chinese": "城市里所有的电子设备都发出微弱的噪音和令人毛骨悚然的警告声。屏幕上短暂地闪过一句“一切都被记录”的提示。",
						"french": "Un léger grésillement et un son d'avertissement étrange émanaient de tous les appareils électroniques de la ville. Le message 'Tout est enregistré' apparut brièvement sur les écrans.",
						"spanish": "Un sutil ruido y un sonido de advertencia espeluznante emanaron de todos los aparatos electrónicos de la ciudad. El mensaje 'Todo queda registrado' apareció brevemente en las pantallas.",
						"vietnamese": "Từ mọi thiết bị điện tử trong thành phố, một tiếng ồn nhẹ và âm thanh cảnh báo rợn người vang lên. Dòng chữ 'Mọi thứ đều được ghi lại' thoáng hiện trên màn hình.",
						"thai": "เสียงสัญญาณเตือนลางร้ายและเสียงรบกวนเบาๆ ดังมาจากอุปกรณ์อิเล็กทรอนิกส์ทุกชิ้นในเมือง ข้อความ 'ทุกสิ่งถูกบันทึก' แวบขึ้นมาบนหน้าจอชั่วขณะ",
						"hindi": "शहर के सभी इलेक्ट्रॉनिक्स से एक सूक्ष्म शोर और भयानक चेतावनी ध्वनि निकली। स्क्रीन पर संक्षेप में 'सब कुछ दर्ज है' संदेश चमक उठा।"
					}
				},
				{
					"content": {
						"korean": "봐. 지금도 널 보고 있어. 우린 여기서 벗어날 수 없어.",
						"english": "Look. They're still watching you. We can't escape from here.",
						"japanese": "見て。今もあなたを見ている。私たちはここから逃れられない。",
						"chinese": "看。他们现在也正盯着你。我们逃不出这里的。",
						"french": "Regarde. Ils te surveillent encore. On ne peut pas s'échapper d'ici.",
						"spanish": "Mira. Te siguen observando. No podemos escapar de aquí.",
						"vietnamese": "Nhìn kìa. Chúng vẫn đang theo dõi ngươi. Chúng ta không thể thoát khỏi đây.",
						"thai": "ดูสิ พวกมันยังคงจับตาดูแกอยู่ เราหนีจากที่นี่ไปไม่ได้หรอก",
						"hindi": "देखो। वे अभी भी तुम्हें देख रहे हैं। हम यहाँ से नहीं बच सकते।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "zoe"
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "쥐새끼 한 마리가 감옥을 부수겠다고? 어리석군.",
						"english": "A single rat wants to break the prison? Foolish.",
						"japanese": "一匹のネズミが監獄を壊すだと？愚かな。",
						"chinese": "一只老鼠想摧毁监狱？愚蠢。",
						"french": "Un misérable rat veut briser la prison ? Stupide.",
						"spanish": "¿Una sola rata quiere romper la prisión? Qué tonto.",
						"vietnamese": "Một con chuột muốn phá vỡ nhà tù ư? Thật ngu ngốc.",
						"thai": "หนูตัวเดียวจะมาทำลายคุกเนี่ยนะ? ช่างโง่เขลาจริงๆ",
						"hindi": "एक अकेला चूहा जेल तोड़ना चाहता है? मूर्खतापूर्ण।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "시끄러워! 네 감시 따위 부숴버릴 거야.",
						"english": "Quiet! I'll smash your surveillance.",
						"japanese": "うるさい！お前の監視なんかぶち壊してやる！",
						"chinese": "闭嘴！我一定会摧毁你的监视！",
						"french": "Tais-toi ! Je vais détruire ta surveillance.",
						"spanish": "¡Cállate! Romperé tu vigilancia.",
						"vietnamese": "Im đi! Ta sẽ phá hủy sự giám sát của ngươi!",
						"thai": "เงียบซะ! ฉันจะทำลายการเฝ้าระวังของแกให้หมด!",
						"hindi": "चुप रहो! मैं तुम्हारी निगरानी तोड़ दूंगा।"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "{random_boss}의 눈은 도시의 모든 곳에 있다. 넌 이미 우리 손 안에 있어.",
						"english": "{random_boss}'s eyes are everywhere in the city. You're already in our grasp.",
						"japanese": "{random_boss}の目は都市のあらゆる場所にある。お前はすでに我々の手の中だ。",
						"chinese": "{random_boss}的眼睛遍布城市的每一个角落。你早已落入我们的掌控之中。",
						"french": "Les yeux de {random_boss} sont partout dans la ville. Tu es déjà entre nos mains.",
						"spanish": "Los ojos de {random_boss} están por toda la ciudad. Ya estás en nuestras manos.",
						"vietnamese": "Mắt của {random_boss} ở khắp mọi nơi trong thành phố. Ngươi đã nằm gọn trong tay chúng ta rồi.",
						"thai": "ดวงตาของ {random_boss} อยู่ทุกหนทุกแห่งในเมือง แกอยู่ในกำมือของเราแล้ว",
						"hindi": "{random_boss} की आँखें शहर में हर जगह हैं। तुम पहले से ही हमारी पकड़ में हो।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "하찮은 저항이군. {random_boss}에게서 도망칠 수는 없다.",
						"english": "Futile resistance. You cannot escape {random_boss}.",
						"japanese": "無駄な抵抗だ。{random_boss}からは逃れられない。",
						"chinese": "无谓的抵抗。你无法从{random_boss}那里逃脱。",
						"french": "Résistance futile. Vous ne pouvez pas échapper à {random_boss}.",
						"spanish": "Resistencia inútil. No puedes escapar de {random_boss}.",
						"vietnamese": "Kháng cự vô ích. Ngươi không thể thoát khỏi {random_boss}.",
						"thai": "การต่อต้านที่ไร้ค่า เจ้าหนี {random_boss} ไม่พ้นหรอก",
						"hindi": "व्यर्थ का प्रतिरोध। तुम {random_boss} से बच नहीं सकते।"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "…포기 안 해. 다시 돌아올 거야.",
						"english": "...I won't give up. I'll be back.",
						"japanese": "…諦めない。必ず戻ってくる。",
						"chinese": "…我不会放弃。我会再回来的。",
						"french": "...Je n'abandonnerai pas. Je reviendrai.",
						"spanish": "...No me rendiré. Volveré.",
						"vietnamese": "...Tôi sẽ không bỏ cuộc. Tôi sẽ trở lại.",
						"thai": "...ฉันไม่ยอมแพ้หรอก ฉันจะกลับมาอีกครั้ง",
						"hindi": "...मैं हार नहीं मानूंगा। मैं वापस आऊंगा।"
					}
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "도시의 감시망은 더욱 촘촘해졌다. 벗어날 수 없는 절망감 속에서도, 그의 의지는 꺾이지 않았다.",
						"english": "The city's surveillance tightened. Even in inescapable despair, his will remained unbroken.",
						"japanese": "都市の監視網はさらに厳しくなった。逃れようのない絶望感の中でも、彼の意志は折れなかった。",
						"chinese": "城市的监控网络更加严密。即使在无法摆脱的绝望中，他的意志也从未动摇。",
						"french": "La surveillance de la ville s'est resserrée. Même dans un désespoir inéluctable, sa volonté resta inébranlable.",
						"spanish": "La vigilancia de la ciudad se estrechó. Incluso en la desesperación ineludible, su voluntad permaneció inquebrantable.",
						"vietnamese": "Mạng lưới giám sát của thành phố càng trở nên chặt chẽ hơn. Ngay cả trong tuyệt vọng không lối thoát, ý chí của anh vẫn không hề lay chuyển.",
						"thai": "เครือข่ายการเฝ้าระวังของเมืองเข้มงวดขึ้น แม้ในความสิ้นหวังที่ไม่อาจหลีกหนีได้ เจตจำนงของเขาก็ยังคงไม่แตกหัก",
						"hindi": "शहर की निगरानी और कड़ी हो गई। अटूट निराशा के बावजूद, उसकी इच्छाशक्ति नहीं टूटी।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "…겨우 한 마리… 잡았다고… 착각하지 마… 시스템은… 계속될 거야…",
						"english": "...Don't... misunderstand... you only caught... one... The system... will continue...",
						"japanese": "…たった一匹…捕まえたと…勘違いするな…システムは…続く…",
						"chinese": "……别……误以为……只抓到……一只……系统……还会继续……",
						"french": "...Ne... te méprends pas... tu n'as capturé... qu'un... Le système... continuera...",
						"spanish": "...No... te equivoques... solo atrapaste... a uno... El sistema... continuará...",
						"vietnamese": "...Đừng... lầm tưởng... ngươi chỉ bắt được... một con... Hệ thống... sẽ tiếp tục...",
						"thai": "...อย่า...เข้าใจผิด...ว่าจับได้...แค่ตัวเดียว...ระบบ...จะดำเนินต่อไป...",
						"hindi": "...गलत मत समझना... तुमने सिर्फ़... एक को... पकड़ा है... सिस्टम... चलता रहेगा..."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…아직 끝난 게 아니야.",
						"english": "...It's not over yet.",
						"japanese": "…まだ終わってない。",
						"chinese": "……还没结束。",
						"french": "...Ce n'est pas encore fini.",
						"spanish": "...Todavía no ha terminado.",
						"vietnamese": "...Vẫn chưa kết thúc đâu.",
						"thai": "...ยังไม่จบแค่นี้หรอก",
						"hindi": "...अभी ख़त्म नहीं हुआ है।"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "시스템의 감시는 잠시 느슨해졌지만, 도시 전체를 옥죄는 그림자는 여전히 건재했다. 자유를 향한 길은 멀고 험난했다.",
						"english": "The system's surveillance loosened for a moment, but the shadow gripping the entire city remained strong. The path to freedom was long and arduous.",
						"japanese": "システムの監視は一時的に緩んだが、都市全体を締め付ける影は依然として健在だった。自由への道は遠く険しかった。",
						"chinese": "系统的监视暂时放松了，但笼罩整个城市的阴影依然强大。通往自由的道路漫长而艰辛。",
						"french": "La surveillance du système se relâcha un instant, mais l'ombre qui étreignait toute la ville restait intacte. Le chemin vers la liberté était long et ardu.",
						"spanish": "La vigilancia del sistema se relajó por un momento, pero la sombra que atenazaba toda la ciudad seguía fuerte. El camino hacia la libertad era largo y arduo.",
						"vietnamese": "Sự giám sát của hệ thống tạm thời nới lỏng, nhưng bóng tối kìm kẹp toàn bộ thành phố vẫn còn mạnh mẽ. Con đường dẫn đến tự do còn dài và gian nan.",
						"thai": "การเฝ้าระวังของระบบหย่อนยานลงชั่วขณะ แต่เงาที่ครอบงำทั้งเมืองยังคงแข็งแกร่ง หนทางสู่เสรีภาพยังอีกยาวไกลและยากลำบาก",
						"hindi": "सिस्टम की निगरानी कुछ समय के लिए ढीली पड़ गई, लेकिन पूरे शहर को जकड़ी हुई छाया अभी भी मजबूत थी। स्वतंत्रता का मार्ग लंबा और कठिन था।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"모든 시선이 그를 향했다.",
			"도시의 심장부, 보이지 않는 감시망이 죄어왔다.",
			"발버둥칠수록 더욱 깊이 갇히는 기분.",
			"이 도시 전체가 거대한 감옥이었다."
		],
		"english": [
			"All eyes were on him.",
			"In the city's heart, an invisible net of surveillance tightened.",
			"The more he struggled, the deeper he felt trapped.",
			"This entire city was a massive prison."
		],
		"japanese": [
			"全ての視線が彼に集まった。",
			"都市の中心部、見えざる監視網が迫っていた。",
			"もがけばもがくほど、深く閉じ込められる気分。",
			"この都市全体が巨大な監獄だった。"
		],
		"chinese": [
			"所有视线都聚焦在他身上。",
			"城市的中心，一张无形的监视网正在收紧。",
			"越挣扎，就感觉被困得越深。",
			"整座城市就是一座巨大的监狱。"
		],
		"french": [
			"Tous les regards étaient braqués sur lui.",
			"Au cœur de la ville, un filet de surveillance invisible se resserrait.",
			"Plus il se débattait, plus il se sentait piégé.",
			"Cette ville entière était une immense prison."
		],
		"spanish": [
			"Todas las miradas estaban puestas en él.",
			"En el corazón de la ciudad, una red invisible de vigilancia se estrechaba.",
			"Cuanto más forcejeaba, más atrapado se sentía.",
			"Toda esta ciudad era una prisión gigantesca."
		],
		"vietnamese": [
			"Mọi ánh mắt đổ dồn về phía anh.",
			"Tại trung tâm thành phố, một mạng lưới giám sát vô hình đang siết chặt.",
			"Càng vùng vẫy, cảm giác bị giam cầm càng sâu sắc.",
			"Toàn bộ thành phố này là một nhà tù khổng lồ."
		],
		"thai": [
			"ทุกสายตาจับจ้องมาที่เขา",
			"ใจกลางเมือง, ตาข่ายการเฝ้าระวังที่มองไม่เห็นกำลังบีบรัดเข้ามา",
			"ยิ่งดิ้นรน ยิ่งรู้สึกเหมือนถูกขังลึกเข้าไปอีก",
			"เมืองทั้งเมืองนี้คือคุกขนาดใหญ่"
		],
		"hindi": [
			"सभी की निगाहें उस पर थीं।",
			"शहर के केंद्र में, निगरानी का एक अदृश्य जाल कसता जा रहा था।",
			"जितना वह संघर्ष करता, उतना ही वह फंसा हुआ महसूस करता।",
			"यह पूरा शहर एक विशाल जेल था।"
		]
	}
} as const;
