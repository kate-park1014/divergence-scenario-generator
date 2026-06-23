export const scenario_forest_chloris_7_01 = {
	"scenario_id": "forest_chloris_7_01",
	"order": 1,
	"act": "intro",
	"theme": "forest",
	"actors": {
		"ela": {
			"id": "mon_24765cb2-6fc0-452e-8969-871a82349c70",
			"name": {
				"korean": "엘라",
				"english": "Ela",
				"japanese": "エラ",
				"chinese": "艾拉",
				"french": "Ela",
				"spanish": "Ela",
				"vietnamese": "Ela",
				"thai": "เอล่า",
				"hindi": "एला"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/55d3e9ee-c589-40ab-dfa4-a658bbddd400/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/cfacc842-115e-4175-a7fa-3111a468ed00/public"
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
					"content": {
						"korean": "울창한 숲에 갇혔다. 출구는 보이지 않았다.",
						"english": "Trapped in a dense forest. No exit in sight.",
						"japanese": "鬱蒼とした森に閉じ込められた。出口は見えなかった。",
						"chinese": "被困在茂密的森林里。看不到出口。",
						"french": "Piégé dans une forêt dense. Aucune sortie en vue.",
						"spanish": "Atrapado en un denso bosque. No había salida a la vista.",
						"vietnamese": "Mắc kẹt trong khu rừng rậm rạp. Không thấy lối ra.",
						"thai": "ติดอยู่ในป่าทึบ ไม่มีทางออกให้เห็น",
						"hindi": "घने जंगल में फँस गया। कोई रास्ता बाहर नहीं दिख रहा था।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "젠장. 또 여기잖아?",
						"english": "Damn it. Here again?",
						"japanese": "くそっ。またここか？",
						"chinese": "该死。又来这里了？",
						"french": "Mince. Encore ici ?",
						"spanish": "Maldita sea. ¿Aquí otra vez?",
						"vietnamese": "Chết tiệt. Lại ở đây à?",
						"thai": "บ้าเอ๊ย ที่นี่อีกแล้วเหรอ?",
						"hindi": "धिक्कार है। फिर से यहाँ?"
					},
					"emotion": "angry"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "이 숲… 우리를 가두는 것 같아.",
						"english": "This forest... it feels like it's trapping us.",
						"japanese": "この森…私たちを閉じ込めているようだ。",
						"chinese": "这片森林……好像要把我们困住。",
						"french": "Cette forêt... on dirait qu'elle nous piège.",
						"spanish": "Este bosque... parece que nos está atrapando.",
						"vietnamese": "Khu rừng này... dường như đang giam cầm chúng ta.",
						"thai": "ป่านี้… เหมือนกำลังขังเราไว้",
						"hindi": "यह जंगल... ऐसा लगता है जैसे हमें फँसा रहा है।"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "ela",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction"
				},
				{
					"content": {
						"korean": "오, 길을 잃으셨나요? 걱정 마세요. 제가 안내해 드릴게요.",
						"english": "Oh, have you lost your way? Don't worry. I'll guide you.",
						"japanese": "あら、道に迷われたのですか？ご心配なく。私がご案内します。",
						"chinese": "哦，你迷路了吗？别担心。我会引导你的。",
						"french": "Oh, vous vous êtes perdu ? Ne vous inquiétez pas. Je vais vous guider.",
						"spanish": "Oh, ¿se ha perdido? No se preocupe. Yo le guiaré.",
						"vietnamese": "Ôi, bạn bị lạc à? Đừng lo. Tôi sẽ hướng dẫn bạn.",
						"thai": "โอ้ คุณหลงทางเหรอคะ? ไม่ต้องห่วงนะคะ ฉันจะนำทางให้ค่ะ",
						"hindi": "ओह, क्या आप रास्ता भटक गए हैं? चिंता मत करो। मैं आपको रास्ता दिखाऊँगा।"
					},
					"speaker": "ela",
					"type": "speech",
					"emotion": "happy"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "누구…?",
						"english": "Who...?",
						"japanese": "誰…？",
						"chinese": "谁……？",
						"french": "Qui... ?",
						"spanish": "¿Quién...?",
						"vietnamese": "Ai…?",
						"thai": "ใคร…?",
						"hindi": "कौन…?"
					}
				},
				{
					"emotion": "happy",
					"speaker": "ela",
					"type": "speech",
					"content": {
						"korean": "저는 이 숲의 정령 엘라예요. 이 숲은 모든 것을 포용하죠.",
						"english": "I am Ella, the spirit of this forest. This forest embraces all.",
						"japanese": "私はこの森の精霊エラです。この森はすべてを包み込みます。",
						"chinese": "我是埃拉，这片森林的精灵。这片森林包容万物。",
						"french": "Je suis Ella, l'esprit de cette forêt. Cette forêt embrasse tout.",
						"spanish": "Soy Ella, el espíritu de este bosque. Este bosque lo abraza todo.",
						"vietnamese": "Tôi là Ella, linh hồn của khu rừng này. Khu rừng này ôm ấp mọi thứ.",
						"thai": "ฉันคือเอลล่า วิญญาณแห่งป่านี้ ป่านี้โอบกอดทุกสิ่ง",
						"hindi": "मैं एला हूँ, इस जंगल की आत्मा। यह जंगल सब कुछ समाहित करता है।"
					}
				},
				{
					"emotion": "base",
					"speaker": "ela",
					"type": "speech",
					"content": {
						"korean": "숲의 속삭임에 귀 기울이면… 길을 찾을 수 있을 거예요.",
						"english": "Listen to the forest's whispers... and you'll find your way.",
						"japanese": "森のささやきに耳を傾ければ… 道を見つけられるでしょう。",
						"chinese": "倾听森林的低语……你就能找到路。",
						"french": "Écoutez les murmures de la forêt… et vous trouverez votre chemin.",
						"spanish": "Escucha los susurros del bosque… y encontrarás tu camino.",
						"vietnamese": "Lắng nghe tiếng thì thầm của rừng… bạn sẽ tìm thấy lối đi.",
						"thai": "หากฟังเสียงกระซิบของป่า… คุณจะพบหนทาง",
						"hindi": "अगर तुम जंगल की फुसफुसाहट सुनोगे... तो तुम्हें रास्ता मिल जाएगा।"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "ela",
					"spot": [
						2,
						2
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"emotion": "happy",
					"type": "speech",
					"speaker": "ela",
					"content": {
						"korean": "보세요. 이 숲의 길은 언제나 새로운 아름다움을 선사해요.",
						"english": "Look. The paths in this forest always offer new beauty.",
						"japanese": "見てください。この森の道は、いつも新しい美しさを見せてくれます。",
						"chinese": "看。这片森林的小径总是带来新的美景。",
						"french": "Regardez. Les chemins de cette forêt offrent toujours une nouvelle beauté.",
						"spanish": "Mira. Los caminos de este bosque siempre ofrecen una nueva belleza.",
						"vietnamese": "Hãy nhìn xem. Con đường trong khu rừng này luôn mang đến vẻ đẹp mới lạ.",
						"thai": "ดูสิ เส้นทางในป่านี้มักจะมอบความงามใหม่ๆ เสมอ",
						"hindi": "देखो। इस जंगल के रास्ते हमेशा नई सुंदरता प्रदान करते हैं।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "아름답긴 한데… 왠지 계속 맴도는 기분이야.",
						"english": "It's beautiful, but... I feel like we're going in circles.",
						"japanese": "美しいけど… なんだかずっと堂々巡りしてる気がする。",
						"chinese": "虽然很美……但总觉得我们一直在原地打转。",
						"french": "C'est beau, mais… j'ai l'impression de tourner en rond.",
						"spanish": "Es hermoso, pero… siento que damos vueltas sin fin.",
						"vietnamese": "Đẹp thì đẹp đấy… nhưng sao cứ có cảm giác đi lòng vòng mãi.",
						"thai": "สวยก็สวยนะ… แต่ทำไมรู้สึกเหมือนเดินวนไปวนมาเลย",
						"hindi": "सुंदर तो है… पर मुझे लग रहा है कि हम गोल-गोल घूम रहे हैं।"
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "방금 지나온 곳이랑 똑같지 않아?",
						"english": "Isn't this exactly where we just were?",
						"japanese": "さっき通った場所と全く同じじゃない？",
						"chinese": "这不就是我们刚才经过的地方吗？",
						"french": "N'est-ce pas exactement l'endroit où nous étions il y a un instant ?",
						"spanish": "¿No es este exactamente el lugar por donde acabamos de pasar?",
						"vietnamese": "Không phải chỗ này y hệt chỗ chúng ta vừa đi qua sao?",
						"thai": "ที่นี่ไม่ใช่ที่ที่เราเพิ่งผ่านมาหรอกเหรอ?",
						"hindi": "क्या यह वही जगह नहीं है जहां से हम अभी-अभी गुजरे थे?"
					},
					"type": "speech",
					"speaker": "character_1"
				},
				{
					"emotion": "happy",
					"content": {
						"korean": "아하, 그건 숲이 여러분을 너무 좋아해서 그래요! 다시 보고 싶은 거죠.",
						"english": "Ah, that's because the forest loves you all too much! It wants to see you again.",
						"japanese": "あら、それは森が皆さんをとても好きだからですよ！また会いたいのでしょう。",
						"chinese": "啊哈，那是森林太喜欢你们了！它想再见到你们。",
						"french": "Ah, c'est parce que la forêt vous aime trop ! Elle veut vous revoir.",
						"spanish": "¡Ah, es porque el bosque os quiere demasiado! Quiere veros de nuevo.",
						"vietnamese": "À, đó là vì rừng quá yêu quý các bạn! Nó muốn gặp lại các bạn đó.",
						"thai": "อ่าาา นั่นเป็นเพราะป่าชอบพวกคุณมากต่างหาก! อยากเจออีกครั้งไงล่ะ",
						"hindi": "आहा, ऐसा इसलिए है क्योंकि जंगल आप सबको बहुत पसंद करता है! वह आपको फिर से देखना चाहता है।"
					},
					"speaker": "ela",
					"type": "speech"
				},
				{
					"content": {
						"korean": "저 나비들이 안내해 줄 거예요. 따라가면 돼요.",
						"english": "Those butterflies will guide you. Just follow them.",
						"japanese": "あの蝶々たちが案内してくれますよ。ついていけば大丈夫です。",
						"chinese": "那些蝴蝶会引导你们。跟着它们走就行了。",
						"french": "Ces papillons vous guideront. Suivez-les simplement.",
						"spanish": "Esas mariposas os guiarán. Solo seguidlas.",
						"vietnamese": "Những chú bướm kia sẽ dẫn đường cho các bạn. Chỉ cần đi theo chúng thôi.",
						"thai": "ผีเสื้อพวกนั้นจะนำทางให้คุณเอง แค่เดินตามไปก็พอ",
						"hindi": "वे तितलियाँ तुम्हें रास्ता दिखाएंगी। बस उनके पीछे चलो।"
					},
					"speaker": "ela",
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"speaker": "ela",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						4,
						2
					]
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "아니, 왜 또 이 자리인 건데?",
						"english": "Seriously, why are we back here again?",
						"japanese": "いや、なんでまたこの場所なの？",
						"chinese": "搞什么，为什么又是这个地方？",
						"french": "Non, mais pourquoi sommes-nous encore ici ?",
						"spanish": "No, ¿por qué estamos aquí otra vez?",
						"vietnamese": "Trời, sao lại quay lại chỗ này nữa vậy?",
						"thai": "ไม่นะ ทำไมถึงกลับมาที่นี่อีกแล้ว?",
						"hindi": "नहीं, हम फिर से इसी जगह पर क्यों हैं?"
					}
				},
				{
					"content": {
						"korean": "몇 번째야… 믿을 수가 없어.",
						"english": "How many times now... I can't believe it.",
						"japanese": "何度目だよ… 信じられない。",
						"chinese": "这是第几次了……简直难以置信。",
						"french": "Combien de fois déjà… Je n'arrive pas à y croire.",
						"spanish": "¿Cuántas veces ya…? No puedo creerlo.",
						"vietnamese": "Lần thứ mấy rồi đây… không thể tin được.",
						"thai": "กี่ครั้งแล้วเนี่ย… ไม่อยากจะเชื่อเลย",
						"hindi": "कितनी बार हो गया है... मुझे विश्वास नहीं हो रहा।"
					},
					"speaker": "character_2",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "happy",
					"speaker": "ela",
					"type": "speech",
					"content": {
						"korean": "길은 항상 같지만, 시야는 계속 바뀌죠. 그게 숲의 매력이에요.",
						"english": "The path is always the same, but the view constantly changes. That's the forest's charm.",
						"japanese": "道はいつも同じですが、視界は常に変わります。それが森の魅力ですよ。",
						"chinese": "道路总是相同的，但视野却不断变化。这就是森林的魅力。",
						"french": "Le chemin est toujours le même, mais la vue change constamment. C'est ça, le charme de la forêt.",
						"spanish": "El camino siempre es el mismo, pero la vista cambia constantemente. Ese es el encanto del bosque.",
						"vietnamese": "Lối đi thì luôn như cũ, nhưng tầm nhìn thì thay đổi không ngừng. Đó chính là sự quyến rũ của rừng.",
						"thai": "เส้นทางเหมือนเดิมเสมอ แต่ทิวทัศน์เปลี่ยนไปเรื่อยๆ นั่นแหละคือเสน่ห์ของป่า",
						"hindi": "रास्ता हमेशा एक जैसा होता है, लेकिन नज़ारा लगातार बदलता रहता है। यही जंगल का आकर्षण है।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "매력이 아니라… 우릴 가두려는 거 아니야?",
						"english": "Charm? Or is it trying to trap us?",
						"japanese": "魅力じゃなくて… 私たちを閉じ込めようとしてるんじゃないの？",
						"chinese": "这哪是魅力……它不是想把我们困住吧？",
						"french": "Du charme ? Ou bien elle essaie de nous piéger ?",
						"spanish": "¿Encanto? ¿O nos está intentando atrapar?",
						"vietnamese": "Quyến rũ cái gì… Hay là nó đang muốn nhốt chúng ta lại?",
						"thai": "เสน่ห์อะไร… นี่มันพยายามจะขังเราไว้ไม่ใช่เหรอ?",
						"hindi": "आकर्षण? या यह हमें फंसाने की कोशिश कर रहा है?"
					},
					"emotion": "angry"
				},
				{
					"emotion": "happy",
					"speaker": "ela",
					"type": "speech",
					"content": {
						"korean": "절대 아니에요! 숲은 여러분에게 '구원'을 주고 싶어 해요.",
						"english": "Absolutely not! The forest wants to grant you 'salvation'.",
						"japanese": "とんでもない！森はあなたたちに『救い』を与えたいのです。",
						"chinese": "绝不是！森林想给予你们‘救赎’。",
						"french": "Absolument pas ! La forêt veut vous offrir le 'salut'.",
						"spanish": "¡De ninguna manera! El bosque quiere darles la 'salvación'.",
						"vietnamese": "Tuyệt đối không! Rừng muốn ban cho các bạn 'cứu rỗi'.",
						"thai": "ไม่จริงเลย! ป่าต้องการมอบ 'ความรอด' ให้กับพวกคุณต่างหาก",
						"hindi": "बिल्कुल नहीं! जंगल आपको 'मुक्ति' देना चाहता है।"
					}
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"speaker": "ela",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						2,
						2
					]
				},
				{
					"content": {
						"korean": "아름답던 숲이 일그러져 보였다. 환영 속 어둠이 감돌았다.",
						"english": "The beautiful forest seemed distorted. Darkness swirled within the illusion.",
						"japanese": "美しかった森が歪んで見えた。幻影の中に闇が渦巻いていた。",
						"chinese": "美丽的森林变得扭曲。幻象中弥漫着黑暗。",
						"french": "La forêt, autrefois si belle, semblait déformée. L'obscurité tourbillonnait dans l'illusion.",
						"spanish": "El hermoso bosque parecía distorsionado. La oscuridad se arremolinaba en la ilusión.",
						"vietnamese": "Rừng cây tuyệt đẹp bỗng trở nên méo mó. Bóng tối bao trùm ảo ảnh.",
						"thai": "ป่าที่สวยงามดูบิดเบี้ยว ความมืดมิดคืบคลานในภาพลวงตา",
						"hindi": "सुंदर जंगल विकृत लगने लगा। भ्रम में अँधेरा छा गया था।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "이건 미로가 아니야. 함정이라고!",
						"english": "This isn't a maze. It's a trap!",
						"japanese": "これは迷路じゃない。罠だ！",
						"chinese": "这不是迷宫。这是陷阱！",
						"french": "Ce n'est pas un labyrinthe. C'est un piège !",
						"spanish": "Esto no es un laberinto. ¡Es una trampa!",
						"vietnamese": "Đây không phải mê cung. Đây là cái bẫy!",
						"thai": "นี่ไม่ใช่เขาวงกต มันคือกับดัก!",
						"hindi": "यह भूलभुलैया नहीं है। यह एक जाल है!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…왜 그렇게 생각하시죠? 영원한 평화가 눈앞에 있는데.",
						"english": "...Why do you think so? Eternal peace is right before your eyes.",
						"japanese": "…なぜそう思われるのですか？永遠の平和が目の前にあるのに。",
						"chinese": "……你们为什么会这么想？永恒的和平就在眼前。",
						"french": "...Pourquoi pensez-vous cela ? La paix éternelle est sous vos yeux.",
						"spanish": "...¿Por qué piensan eso? La paz eterna está ante sus ojos.",
						"vietnamese": "...Sao các bạn lại nghĩ vậy? Hòa bình vĩnh cửu đang ở ngay trước mắt mà.",
						"thai": "...ทำไมถึงคิดเช่นนั้น? ในเมื่อสันติสุขนิรันดร์อยู่ตรงหน้าคุณแล้วแท้ๆ",
						"hindi": "...आप ऐसा क्यों सोचते हैं? शाश्वत शांति आपकी आँखों के सामने है।"
					},
					"type": "speech",
					"speaker": "ela"
				},
				{
					"speaker": "character_3",
					"type": "speech",
					"content": {
						"korean": "영원히 갇히라는 소리잖아!",
						"english": "That means being trapped forever!",
						"japanese": "それは永遠に閉じ込められるってことだろ！",
						"chinese": "那意味着要永远被困住！",
						"french": "Cela signifie être piégé pour l'éternité !",
						"spanish": "¡Eso significa estar atrapado para siempre!",
						"vietnamese": "Vậy là phải bị mắc kẹt vĩnh viễn!",
						"thai": "นั่นหมายถึงการถูกขังตลอดไป!",
						"hindi": "इसका मतलब है हमेशा के लिए फँस जाना!"
					},
					"emotion": "angry"
				},
				{
					"speaker": "ela",
					"type": "speech",
					"content": {
						"korean": "갇힌 게 아니에요. 동화되는 거죠. 이 숲과 하나가 되는.",
						"english": "You're not trapped. You're assimilating. Becoming one with this forest.",
						"japanese": "閉じ込められたのではありません。同化するのです。この森と一つになる。",
						"chinese": "不是被困住。是同化。与这片森林融为一体。",
						"french": "Vous n'êtes pas piégés. Vous vous assimilez. Vous ne faites qu'un avec cette forêt.",
						"spanish": "No están atrapados. Están asimilándose. Haciéndose uno con este bosque.",
						"vietnamese": "Không phải bị mắc kẹt. Là đang đồng hóa. Trở thành một với khu rừng này.",
						"thai": "ไม่ได้ถูกขังหรอกค่ะ แต่กำลังหลอมรวมต่างหาก การได้เป็นหนึ่งเดียวกับป่าแห่งนี้",
						"hindi": "आप फँसे नहीं हैं। आप घुलमिल रहे हैं। इस जंगल के साथ एक हो रहे हैं।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그게 구원이라고?",
						"english": "That's salvation?",
						"japanese": "それが救いだと？",
						"chinese": "这就是救赎？",
						"french": "C'est ça, le salut ?",
						"spanish": "¿Eso es salvación?",
						"vietnamese": "Đó là cứu rỗi ư?",
						"thai": "นั่นคือความรอดหรือ?",
						"hindi": "क्या यह मुक्ति है?"
					},
					"emotion": "angry"
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "환영의 숲에 잠식당했다. 모든 감각이 희미해졌다.",
						"english": "Consumed by the Forest of Illusions. All my senses fade.",
						"japanese": "幻影の森に侵食された。全ての感覚が薄れていく。",
						"chinese": "被幻影森林侵蚀了。所有感官都变得模糊。",
						"french": "Envahi par la Forêt des Illusions. Tous mes sens s'estompent.",
						"spanish": "Consumido por el Bosque de las Ilusiones. Todos mis sentidos se desvanecen.",
						"vietnamese": "Bị Rừng Ảo Ảnh xâm chiếm. Mọi giác quan đều mờ dần.",
						"thai": "ถูกป่าลวงตาครอบงำ ทุกสัมผัสเลือนลางลง",
						"hindi": "भ्रमों के वन ने निगल लिया। सभी इंद्रियाँ धुंधली पड़ गईं।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "그래. 이것이 진정한 평화….",
						"english": "Yes. This is true peace...",
						"japanese": "ああ。これが真の平和…",
						"chinese": "是啊。这就是真正的平静…",
						"french": "Oui. C'est la véritable paix…",
						"spanish": "Sí. Esta es la verdadera paz…",
						"vietnamese": "Phải. Đây là bình yên thật sự...",
						"thai": "ใช่ นี่แหละคือสันติที่แท้จริง...",
						"hindi": "हाँ। यही सच्ची शांति है…"
					}
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "…아직… 끝나지 않았어.",
						"english": "...It's not... over yet.",
						"japanese": "…まだ…終わってない。",
						"chinese": "…还没…结束。",
						"french": "...Ce n'est pas... encore fini.",
						"spanish": "...Aún... no ha terminado.",
						"vietnamese": "...Chưa... kết thúc đâu.",
						"thai": "...ยัง...ไม่จบลง",
						"hindi": "...अभी... खत्म नहीं हुआ है।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "다시 시작될 뿐이야. 언제나 그랬듯이.",
						"english": "It will only start anew. As it always has.",
						"japanese": "また始まるだけだ。いつもそうだったように。",
						"chinese": "只是会重新开始。一如既往。",
						"french": "Ça ne fera que recommencer. Comme toujours.",
						"spanish": "Solo volverá a empezar. Como siempre.",
						"vietnamese": "Nó sẽ chỉ bắt đầu lại thôi. Như mọi khi.",
						"thai": "มันแค่จะเริ่มต้นใหม่อีกครั้ง ก็เท่านั้นเอง เหมือนที่เคยเป็นมา",
						"hindi": "यह बस फिर से शुरू होगा। हमेशा की तरह।"
					},
					"emotion": "base"
				}
			],
			"win_dialogue": [
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "…아직 멀었어. 이 숲의 순환은… 끝나지 않아.",
						"english": "...Not yet. The cycle of this forest... will not end.",
						"japanese": "…まだまだだ。この森の循環は…終わらない。",
						"chinese": "……还没完。这片森林的循环……不会结束。",
						"french": "...Pas encore. Le cycle de cette forêt... ne s'achèvera pas.",
						"spanish": "...Aún no. El ciclo de este bosque... no terminará.",
						"vietnamese": "...Vẫn chưa đâu. Chu kỳ của khu rừng này... sẽ không kết thúc.",
						"thai": "...ยังไม่จบ วงจรของป่าแห่งนี้...จะไม่มีวันสิ้นสุด",
						"hindi": "...अभी बाकी है। इस जंगल का चक्र... खत्म नहीं होगा।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "너희는… 결국 돌아오게 될 거야.",
						"english": "You all... will eventually return.",
						"japanese": "お前たちは…結局戻ってくるだろう。",
						"chinese": "你们……终将回来。",
						"french": "Vous... finirez par revenir.",
						"spanish": "Vosotros... al final regresaréis.",
						"vietnamese": "Các ngươi... cuối cùng rồi cũng sẽ quay trở lại.",
						"thai": "พวกเจ้า...ในที่สุดก็จะกลับมา",
						"hindi": "तुम सब... अंततः लौट आओगे।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "헛소리 마! 끝났어!",
						"english": "Nonsense! It's over!",
						"japanese": "戯言を言うな！終わったんだ！",
						"chinese": "胡说八道！结束了！",
						"french": "N'importe quoi ! C'est fini !",
						"spanish": "¡Tonterías! ¡Se acabó!",
						"vietnamese": "Đừng nói xàm! Chấm dứt rồi!",
						"thai": "เหลวไหล! มันจบแล้ว!",
						"hindi": "बकवास बंद करो! यह खत्म हो गया!"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "정체 모를 보스는 쓰러졌다. 그러나 숲은 여전히 그들을 가두고 있었다.",
						"english": "The unknown boss fell. Yet, the forest still held them captive.",
						"japanese": "正体不明のボスは倒れた。しかし、森は依然として彼らを閉じ込めていた。",
						"chinese": "不明身份的首领倒下了。然而，森林依然将他们困住。",
						"french": "Le boss inconnu est tombé. Pourtant, la forêt les retenait toujours prisonniers.",
						"spanish": "El jefe desconocido cayó. Sin embargo, el bosque aún los mantenía cautivos.",
						"vietnamese": "Tên trùm bí ẩn đã gục ngã. Tuy nhiên, khu rừng vẫn giam cầm họ.",
						"thai": "บอสปริศนาล้มลง แต่ป่าก็ยังคงกักขังพวกเขาไว้",
						"hindi": "अज्ञात बॉस गिर गया। फिर भी, जंगल ने उन्हें अभी भी बंदी बना रखा था।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "탈출은커녕, 다시 익숙한 길이 눈앞에 펼쳐졌다.",
						"english": "Far from escaping, familiar paths unfolded before them once more.",
						"japanese": "脱出どころか、再び見慣れた道が目の前に広がった。",
						"chinese": "别说逃脱了，熟悉的道路再次出现在眼前。",
						"french": "Loin de s'échapper, des chemins familiers se déroulaient à nouveau devant eux.",
						"spanish": "Lejos de escapar, caminos familiares se desplegaron ante ellos una vez más.",
						"vietnamese": "Đừng nói đến việc thoát ra, con đường quen thuộc lại mở ra trước mắt họ.",
						"thai": "แทนที่จะหลบหนีได้ เส้นทางที่คุ้นเคยกลับปรากฏขึ้นตรงหน้าพวกเขาอีกครั้ง",
						"hindi": "भागने की बात तो दूर, परिचित रास्ते एक बार फिर उनके सामने खुल गए।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "환영의 숲은, 다시 그들을 환영했다.",
						"english": "The Forest of Illusion, once again, welcomed them.",
						"japanese": "幻影の森は、再び彼らを歓迎した。",
						"chinese": "幻象之森，再次“欢迎”了他们。",
						"french": "La Forêt de l'Illusion, encore une fois, les a accueillis.",
						"spanish": "El Bosque de la Ilusión, una vez más, les dio la bienvenida.",
						"vietnamese": "Rừng Ảo Ảnh, một lần nữa, lại \"chào đón\" họ.",
						"thai": "ป่าแห่งภาพลวงตา ได้ \"ต้อนรับ\" พวกเขาอีกครั้ง",
						"hindi": "भ्रम के जंगल ने, एक बार फिर, उनका \"स्वागत\" किया।"
					},
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "ela",
					"type": "direction"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "ela",
					"content": {
						"korean": "결국 여기까지 오셨네요. 이제야 숲의 진정한 구원을 알게 될 거예요.",
						"english": "You've finally made it this far. Now you will know the forest's true salvation.",
						"japanese": "ついにここまでたどり着きましたね。これで森の真の救いを知ることになるでしょう。",
						"chinese": "你们终于走到这里了。现在，你们将了解森林真正的救赎。",
						"french": "Vous êtes enfin arrivés jusqu'ici. Maintenant, vous connaîtrez le véritable salut de la forêt.",
						"spanish": "Finalmente han llegado hasta aquí. Ahora conocerán la verdadera salvación del bosque.",
						"vietnamese": "Cuối cùng các bạn cũng đã đến đây. Giờ đây, các bạn sẽ biết được sự cứu rỗi thực sự của khu rừng.",
						"thai": "ในที่สุดพวกคุณก็มาถึงที่นี่แล้ว ตอนนี้คุณจะได้รู้ถึงความรอดที่แท้จริงของป่า",
						"hindi": "आप आखिरकार यहाँ तक आ गए हैं। अब आप जंगल की सच्ची मुक्ति को जानेंगे।"
					}
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "구원 같은 소리 하지 마! 이건 감금이야!",
						"english": "Don't talk about salvation! This is imprisonment!",
						"japanese": "救いなんて言うな！これは監禁だ！",
						"chinese": "别说什么救赎！这是监禁！",
						"french": "Ne parlez pas de salut ! C'est un emprisonnement !",
						"spanish": "¡No hables de salvación! ¡Esto es un encierro!",
						"vietnamese": "Đừng nói chuyện cứu rỗi! Đây là giam cầm!",
						"thai": "อย่าพูดถึงความรอด! นี่มันคือการกักขัง!",
						"hindi": "मुक्ति की बात मत करो! यह कारावास है!"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "happy",
					"speaker": "ela",
					"type": "speech",
					"content": {
						"korean": "아니요. 숲은 여러분을 사랑해요. 그래서 영원히 함께하고 싶은 거죠.",
						"english": "No. The forest loves you. That's why it wants to be with you forever.",
						"japanese": "いいえ。森はあなたたちを愛しているのです。だから永遠に一緒にいたいのです。",
						"chinese": "不。森林爱你们。所以它想永远和你们在一起。",
						"french": "Non. La forêt vous aime. C'est pourquoi elle veut être avec vous pour toujours.",
						"spanish": "No. El bosque los ama. Por eso quiere estar con ustedes para siempre.",
						"vietnamese": "Không. Rừng yêu các bạn. Vì vậy, nó muốn ở bên các bạn mãi mãi.",
						"thai": "ไม่หรอกค่ะ ป่ารักพวกคุณต่างหาก เลยอยากอยู่กับพวกคุณไปตลอดกาลไงคะ",
						"hindi": "नहीं। जंगल आपको प्यार करता है। इसीलिए वह आपके साथ हमेशा रहना चाहता है।"
					}
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "그 순간, 거대한 그림자가 숲을 뒤덮었다. 정체 모를 존재가 모습을 드러냈다.",
						"english": "At that moment, a colossal shadow engulfed the forest. An unknown entity revealed itself.",
						"japanese": "その瞬間、巨大な影が森を覆った。正体不明の存在が現れた。",
						"chinese": "就在那一刻，巨大的阴影笼罩了森林。一个不明身份的存在显现了。",
						"french": "À cet instant, une ombre colossale a enveloppé la forêt. Une entité inconnue s'est manifestée.",
						"spanish": "En ese instante, una sombra colosal envolvió el bosque. Una entidad desconocida se manifestó.",
						"vietnamese": "Ngay lúc đó, một bóng tối khổng lồ bao trùm khu rừng. Một thực thể không rõ danh tính đã xuất hiện.",
						"thai": "ในขณะนั้น เงาขนาดมหึมาได้ปกคลุมป่า สิ่งมีชีวิตปริศนาได้ปรากฏตัวขึ้น",
						"hindi": "उसी क्षण, एक विशाल छाया ने जंगल को घेर लिया। एक अज्ञात सत्ता प्रकट हुई।"
					}
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "들어와라. 환영의 심장 속으로.",
						"english": "Enter. Into the heart of the illusion.",
						"japanese": "入れ。幻影の心臓へと。",
						"chinese": "进来吧。进入幻象之心。",
						"french": "Entrez. Au cœur de l'illusion.",
						"spanish": "Entra. Al corazón de la ilusión.",
						"vietnamese": "Bước vào đi. Vào sâu trong trái tim ảo ảnh.",
						"thai": "จงเข้ามา สู่ใจกลางแห่งภาพลวงตา",
						"hindi": "भीतर आओ। भ्रम के हृदय में।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "나와 하나가 되어, 영원한 평화를 누릴지니.",
						"english": "Become one with me, and revel in eternal peace.",
						"japanese": "我と一つになり、永遠の安らぎを享受せよ。",
						"chinese": "与我合一，享受永恒的平静。",
						"french": "Ne fais qu'un avec moi, et savoure une paix éternelle.",
						"spanish": "Únete a mí y goza de la paz eterna.",
						"vietnamese": "Hòa làm một với ta, và tận hưởng sự bình yên vĩnh hằng.",
						"thai": "จงเป็นหนึ่งเดียวกับข้า แล้วเจ้าจะได้รับความสงบสุขชั่วนิรันดร์",
						"hindi": "मेरे साथ एक हो जाओ, और शाश्वत शांति का आनंद लो।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "네 뜻대로 안 돼!",
						"english": "You won't have your way!",
						"japanese": "思い通りにはさせない！",
						"chinese": "你休想得逞！",
						"french": "Ce ne sera pas comme tu le veux !",
						"spanish": "¡No será como quieres!",
						"vietnamese": "Sẽ không theo ý ngươi đâu!",
						"thai": "ไม่มีทางเป็นไปตามที่แกต้องการ!",
						"hindi": "तुम्हारी मर्जी नहीं चलेगी!"
					},
					"emotion": "angry"
				},
				{
					"type": "direction",
					"direction": "down",
					"speaker": "ela",
					"action": "exit",
					"duration_ms": 400
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"숲은 아름다웠다. 모든 것이 완벽한 조화 속에.",
			"길을 잃은 자들에게, 숲은 기꺼이 길을 내어주었다.",
			"그러나 그 길은, 영원히 갇힌 환영의 미로였다.",
			"그 완벽한 속삭임 뒤에, 광기가 도사리고 있었다."
		],
		"english": [
			"The forest was beautiful. Everything in perfect harmony.",
			"To those who lost their way, the forest gladly offered a path.",
			"But that path was a labyrinth of illusions, forever trapping them.",
			"Behind that perfect whisper, madness lurked."
		],
		"japanese": [
			"森は美しかった。すべてが完璧な調和の中に。",
			"道に迷った者たちに、森は喜んで道を与えた。",
			"しかしその道は、永遠に閉じ込められた幻影の迷路だった。",
			"その完璧な囁きの裏には、狂気が潜んでいた。"
		],
		"chinese": [
			"森林很美。一切都处于完美的和谐之中。",
			"对于迷失方向的人，森林欣然提供了一条路。",
			"然而那条路，是一个永远困住人的幻影迷宫。",
			"在那完美的低语之后，潜伏着疯狂。"
		],
		"french": [
			"La forêt était magnifique. Tout était en parfaite harmonie.",
			"À ceux qui s'étaient perdus, la forêt offrait volontiers un chemin.",
			"Mais ce chemin était un labyrinthe d'illusions, les piégeant à jamais.",
			"Derrière ce murmure parfait, la folie guettait."
		],
		"spanish": [
			"El bosque era hermoso. Todo en perfecta armonía.",
			"A los que se perdieron, el bosque les ofreció gustosamente un camino.",
			"Pero ese camino era un laberinto de ilusiones, que los atrapaba para siempre.",
			"Detrás de ese susurro perfecto, la locura acechaba."
		],
		"vietnamese": [
			"Khu rừng thật đẹp. Mọi thứ hài hòa một cách hoàn hảo.",
			"Với những người lạc lối, khu rừng sẵn lòng chỉ lối.",
			"Nhưng con đường ấy, là một mê cung ảo ảnh giam cầm vĩnh viễn.",
			"Đằng sau lời thì thầm hoàn hảo đó, là sự điên loạn rình rập."
		],
		"thai": [
			"ป่าสวยงาม ทุกสิ่งอยู่ในความกลมกลืนที่สมบูรณ์แบบ",
			"สำหรับผู้หลงทาง ป่ายินดีที่จะนำทาง",
			"แต่เส้นทางนั้นเป็นเขาวงกตแห่งภาพลวงตา กักขังไว้ชั่วนิรันดร์",
			"เบื้องหลังเสียงกระซิบที่สมบูรณ์แบบนั้น ความบ้าคลั่งกำลังซุ่มซ่อนอยู่"
		],
		"hindi": [
			"जंगल खूबसूरत था। सब कुछ सही तालमेल में।",
			"जो रास्ता भटक गए थे, जंगल ने खुशी-खुशी उन्हें रास्ता दिखाया।",
			"लेकिन वह रास्ता भ्रमों का एक भूलभुलैया था, जो उन्हें हमेशा के लिए फँसाता था।",
			"उस सही फुसफुसाहट के पीछे, पागलपन छिपा था।"
		]
	}
} as const;
