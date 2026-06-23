export const scenario_modern_nemesis_70_05 = {
	"scenario_id": "modern_nemesis_70_05",
	"order": 5,
	"act": "climax_finale",
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
		"pool_id": "pool_Oathbound_Nemesis_V1"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "마천루의 첨탑이 하늘을 찔렀다. 도시의 심장이 저 안에 있었다.",
						"english": "The skyscraper's spire pierced the sky. The city's heart was within it.",
						"japanese": "摩天楼の尖塔が空を突き刺した。都市の心臓がその中にあった。",
						"chinese": "摩天大楼的尖塔刺破天空。城市的心脏就在其中。",
						"french": "La flèche du gratte-ciel perçait le ciel. Le cœur de la ville était en elle.",
						"spanish": "La aguja del rascacielos perforaba el cielo. El corazón de la ciudad estaba dentro.",
						"vietnamese": "Ngọn tháp chọc trời đâm xuyên bầu trời. Trái tim của thành phố nằm bên trong đó.",
						"thai": "ยอดตึกระฟ้าเสียดฟ้า หัวใจของเมืองอยู่ในนั้น",
						"hindi": "गगनचुंबी इमारत का शिखर आकाश को भेद रहा था। शहर का दिल उसके अंदर था।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "여기가 네메시스의 본거지인가.",
						"english": "Is this Nemesis's stronghold?",
						"japanese": "ここがネメシスの本拠地なのか。",
						"chinese": "这里是复仇女神的据点吗？",
						"french": "Est-ce le bastion de Némésis ?",
						"spanish": "¿Es este el bastión de Némesis?",
						"vietnamese": "Đây là sào huyệt của Nemesis ư?",
						"thai": "ที่นี่คือฐานที่มั่นของเนเมซิสหรือ",
						"hindi": "क्या यह नेमेसिस का गढ़ है?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "zoe",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						3
					]
				},
				{
					"speaker": "zoe",
					"type": "speech",
					"content": {
						"korean": "…왔구나. 기다렸어.",
						"english": "...You're here. I've been waiting.",
						"japanese": "…来たわね。待っていたわ。",
						"chinese": "……你来了。我等你很久了。",
						"french": "...Tu es là. Je t'attendais.",
						"spanish": "...Has llegado. Te estaba esperando.",
						"vietnamese": "...Ngươi đến rồi. Ta đã chờ.",
						"thai": "...มาแล้วสินะ รออยู่เลย.",
						"hindi": "...तुम आ गए। मैं इंतज़ार कर रहा था।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "조이? 네가 왜 여기에.",
						"english": "Joy? What are you doing here?",
						"japanese": "ジョイ？なぜここに。",
						"chinese": "乔伊？你怎么会在这里？",
						"french": "Joy ? Qu'est-ce que tu fais ici ?",
						"spanish": "¿Joy? ¿Qué haces aquí?",
						"vietnamese": "Joy? Sao ngươi lại ở đây?",
						"thai": "จอย? เธอมาทำอะไรที่นี่?",
						"hindi": "जॉय? तुम यहाँ क्या कर रही हो?"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "나도 이 서약의… 일부분이거든. 네메시스는 모든 걸 지켜보고 있어. 너희의 모든 행동까지.",
						"english": "I'm part of this covenant too. Nemesis is watching everything. Even your every move.",
						"japanese": "私もこの誓約の…一部だから。ネメシスはすべてを見ている。君たちの行動までも。",
						"chinese": "我…也是这誓约的一部分。涅墨西斯监视着一切。甚至包括你们的一举一动。",
						"french": "Moi aussi, je fais partie de ce serment... Némésis observe tout. Chacun de vos actes.",
						"spanish": "Yo también soy parte de este pacto... Némesis lo observa todo. Cada una de vuestras acciones.",
						"vietnamese": "Ta cũng là… một phần của lời thề này. Nemesis đang quan sát mọi thứ. Ngay cả mọi hành động của các ngươi.",
						"thai": "ฉันก็เป็นส่วนหนึ่งของพันธสัญญา… นี้เหมือนกัน เนเมซิสเฝ้าดูทุกสิ่ง แม้กระทั่งทุกการกระทำของพวกเธอ.",
						"hindi": "मैं भी इस संधि का एक हिस्सा हूँ... नेमेसिस सब कुछ देख रहा है। तुम्हारे हर काम को भी।"
					},
					"emotion": "sad",
					"speaker": "zoe",
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						2,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "zoe"
				},
				{
					"content": {
						"korean": "…알고 있니? 이 빌딩 곳곳에 새겨진 문양들.",
						"english": "...Do you know? The symbols carved all over this building.",
						"japanese": "…知っている？このビルに刻まれた文様を。",
						"chinese": "……你知道吗？这栋建筑里随处可见的纹样。",
						"french": "...Sais-tu ? Les symboles gravés un peu partout dans ce bâtiment.",
						"spanish": "...¿Sabes? Los símbolos grabados por todo este edificio.",
						"vietnamese": "...Ngươi có biết không? Những hoa văn khắc khắp tòa nhà này.",
						"thai": "...รู้ไหม? สัญลักษณ์ที่แกะสลักอยู่ทั่วอาคารนี้.",
						"hindi": "...क्या तुम जानते हो? इस इमारत में जगह-जगह खुदे हुए निशान।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "zoe"
				},
				{
					"content": {
						"korean": "서약의 상징인가?",
						"english": "A symbol of the covenant?",
						"japanese": "誓約の象徴か？",
						"chinese": "是誓约的象征吗？",
						"french": "Un symbole du serment ?",
						"spanish": "¿Un símbolo del pacto?",
						"vietnamese": "Biểu tượng của lời thề à?",
						"thai": "สัญลักษณ์ของพันธสัญญาหรือ?",
						"hindi": "क्या यह संधि का प्रतीक है?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "어쩌면… 시작과 끝을 의미할지도. 하지만 내 기억은… 항상 이 앞에서 멈춰.",
						"english": "Perhaps... they signify the beginning and the end. But my memory... always stops here.",
						"japanese": "もしかしたら…始まりと終わりを意味するのかもしれない。でも私の記憶は…いつもこの前で止まる。",
						"chinese": "也许……意味着开始和结束。但我的记忆……总是在这里停滞。",
						"french": "Peut-être... signifient-ils le début et la fin. Mais ma mémoire... s'arrête toujours ici.",
						"spanish": "Quizás... signifiquen el principio y el fin. Pero mi memoria... siempre se detiene aquí.",
						"vietnamese": "Có lẽ… chúng mang ý nghĩa khởi đầu và kết thúc. Nhưng ký ức của ta… luôn dừng lại ở đây.",
						"thai": "บางที… อาจจะหมายถึงจุดเริ่มต้นและจุดสิ้นสุด แต่ความทรงจำของฉัน… มักจะหยุดอยู่แค่นี้.",
						"hindi": "शायद... वे शुरुआत और अंत का प्रतीक हैं। लेकिन मेरी याददाश्त... हमेशा यहीं रुक जाती है।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "zoe"
				},
				{
					"content": {
						"korean": "…왜?",
						"english": "...Why?",
						"japanese": "…なぜ？",
						"chinese": "……为什么？",
						"french": "...Pourquoi ?",
						"spanish": "¿...Por qué?",
						"vietnamese": "...Tại sao?",
						"thai": "...ทำไม?",
						"hindi": "...क्यों?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "zoe",
					"content": {
						"korean": "나조차도… 이 서약의 일부니까. 벗어날 수 없어.",
						"english": "Even I... am part of this covenant. I can't escape.",
						"japanese": "私でさえ…この誓約の一部だから。逃れることはできない。",
						"chinese": "因为连我……也是这誓约的一部分。无法摆脱。",
						"french": "Même moi... je fais partie de ce serment. Je ne peux pas m'en échapper.",
						"spanish": "Incluso yo... soy parte de este pacto. No puedo escapar.",
						"vietnamese": "Ngay cả ta… cũng là một phần của lời thề này. Không thể thoát.",
						"thai": "แม้แต่ฉัน… ก็เป็นส่วนหนึ่งของพันธสัญญานี้ ฉันหนีไม่ได้.",
						"hindi": "मैं भी... इस संधि का एक हिस्सा हूँ। बच नहीं सकता।"
					},
					"emotion": "sad"
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						3,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "zoe"
				},
				{
					"content": {
						"korean": "너희가 뭘 하든… 달라지지 않아. 이 도시는 서약 위에 세워졌어.",
						"english": "Whatever you do... it won't change anything. This city was built upon the covenant.",
						"japanese": "君たちが何をしようと…何も変わらない。この都市は誓約の上に築かれたのだから。",
						"chinese": "无论你们做什么……都不会改变。这座城市是建立在誓约之上的。",
						"french": "Quoi que vous fassiez... ça ne changera rien. Cette ville a été bâtie sur le serment.",
						"spanish": "Hagáis lo que hagáis... no cambiará nada. Esta ciudad fue construida sobre el pacto.",
						"vietnamese": "Các ngươi làm gì đi nữa… cũng không thay đổi được. Thành phố này được xây dựng trên lời thề.",
						"thai": "ไม่ว่าพวกเธอจะทำอะไร… ก็ไม่เปลี่ยนหรอก เมืองนี้ถูกสร้างขึ้นบนพันธสัญญา.",
						"hindi": "तुम कुछ भी करो... इससे कोई फर्क नहीं पड़ेगा। यह शहर संधि पर बना है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "zoe"
				},
				{
					"content": {
						"korean": "그게 무슨 소리야.",
						"english": "What do you mean?",
						"japanese": "どういう意味だ。",
						"chinese": "那是什么意思？",
						"french": "Qu'est-ce que tu racontes ?",
						"spanish": "¿Qué quieres decir?",
						"vietnamese": "Ngươi nói vậy là sao?",
						"thai": "หมายความว่าอะไร.",
						"hindi": "इसका क्या मतलब है?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "옛날 백년회. 그들이 맺은 피의 서약이… 지금의 네메시스야. 죽지 않아.",
						"english": "The old Hundred-Year Society. Their blood oath… that is Nemesis now. It won't die.",
						"japanese": "昔の百年会。彼らが結んだ血の誓約が…今のネメシスだ。死なない。",
						"chinese": "昔日的百年会。他们立下的血之誓约…就是现在的涅墨西斯。不会消亡。",
						"french": "L'ancienne Société Centenaire. Leur serment de sang… c'est Nemesis, maintenant. Ça ne mourra pas.",
						"spanish": "La antigua Sociedad Centenaria. Su juramento de sangre… es Némesis ahora. No morirá.",
						"vietnamese": "Hội Trăm Năm xưa. Lời thề máu của họ… chính là Nemesis bây giờ. Bất tử.",
						"thai": "สมาคมร้อยปีในอดีต. คำสาบานเลือดที่พวกเขาทำไว้… คือเนเมซิสในตอนนี้. มันจะไม่ตาย.",
						"hindi": "पुराने सौ साल के समाज। उनकी रक्त शपथ… अब नेमेसिस है। वह नहीं मरेगी."
					},
					"emotion": "sad",
					"speaker": "zoe",
					"type": "speech"
				},
				{
					"content": {
						"korean": "그럼 우린 뭘 해야 해?",
						"english": "Then what should we do?",
						"japanese": "じゃあ、私たちはどうすればいい？",
						"chinese": "那我们该怎么办？",
						"french": "Alors, que devons-nous faire ?",
						"spanish": "¿Entonces qué debemos hacer?",
						"vietnamese": "Vậy chúng ta phải làm gì?",
						"thai": "แล้วเราควรทำยังไง?",
						"hindi": "तो हमें क्या करना चाहिए?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "…그저 지켜봐. 모든 것이 반복될 뿐.",
						"english": "…Just watch. Everything will repeat.",
						"japanese": "…ただ見守れ。全ては繰り返されるだけだ。",
						"chinese": "…只需旁观。一切都将重演。",
						"french": "…Contente-toi de regarder. Tout se répétera.",
						"spanish": "…Solo observa. Todo se repetirá.",
						"vietnamese": "…Chỉ cần dõi theo. Mọi thứ sẽ lặp lại.",
						"thai": "…แค่เฝ้าดู. ทุกสิ่งจะวนซ้ำเท่านั้น.",
						"hindi": "…बस देखो। सब कुछ दोहराया जाएगा।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "zoe"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						4,
						3
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "zoe"
				},
				{
					"content": {
						"korean": "여기까지 왔으니… 이제 알겠지? 되돌릴 수 없어.",
						"english": "Since you've come this far… you understand now, don't you? It can't be undone.",
						"japanese": "ここまで来たからには…もうわかるだろう？引き返せない。",
						"chinese": "既然走到这一步…现在明白了吧？无法回头了。",
						"french": "Puisque tu es venu jusqu'ici… tu comprends maintenant, n'est-ce pas ? On ne peut plus revenir en arrière.",
						"spanish": "Ya que has llegado hasta aquí… lo entiendes ahora, ¿verdad? No se puede deshacer.",
						"vietnamese": "Đã đến nước này… giờ ngươi hiểu rồi chứ? Không thể quay lại.",
						"thai": "มาถึงจุดนี้แล้ว… คงจะรู้แล้วใช่ไหม? ไม่อาจย้อนคืนได้.",
						"hindi": "जब तुम यहाँ तक आ गए हो… अब समझते हो, है ना? इसे वापस नहीं लिया जा सकता।"
					},
					"emotion": "base",
					"speaker": "zoe",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "우리가 선택한 길이야.",
						"english": "It's the path we chose.",
						"japanese": "私たちが選んだ道だ。",
						"chinese": "这是我们选择的路。",
						"french": "C'est la voie que nous avons choisie.",
						"spanish": "Es el camino que elegimos.",
						"vietnamese": "Đây là con đường chúng ta đã chọn.",
						"thai": "นี่คือหนทางที่เราเลือก.",
						"hindi": "यह वह रास्ता है जिसे हमने चुना है।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…네 기억 속의 공백은… 우연이 아니야. 너 역시 이 서약에 묶여 있을지도.",
						"english": "…The void in your memory… it's not a coincidence. You might also be bound by this oath.",
						"japanese": "…君の記憶の空白は…偶然ではない。君もこの誓約に縛られているのかもしれない。",
						"chinese": "…你记忆中的空白…并非偶然。或许你也被这个誓约束缚着。",
						"french": "…Le vide dans ta mémoire… ce n'est pas un hasard. Tu es peut-être aussi lié par ce serment.",
						"spanish": "…El vacío en tu memoria… no es una coincidencia. Puede que tú también estés atado por este juramento.",
						"vietnamese": "…Khoảng trống trong ký ức của ngươi… không phải ngẫu nhiên. Ngươi cũng có thể bị ràng buộc bởi lời thề này.",
						"thai": "…ช่องว่างในความทรงจำของเจ้า… ไม่ใช่เรื่องบังเอิญ. เจ้าเองก็อาจถูกผูกมัดด้วยคำสาบานนี้เช่นกัน.",
						"hindi": "…तुम्हारी याददाश्त में खालीपन… यह कोई संयोग नहीं है। तुम भी इस शपथ से बंधे हो सकते हो।"
					},
					"emotion": "sad",
					"speaker": "zoe",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…!",
						"english": "…!",
						"japanese": "…！",
						"chinese": "…！",
						"french": "…!",
						"spanish": "…!",
						"vietnamese": "…!",
						"thai": "…!",
						"hindi": "…!"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "네메시스는 그 굴레의 심장이야. 심장을 꿰뚫어도… 굴레는 사라지지 않아.",
						"english": "Nemesis is the heart of that cycle. Even if you pierce its heart… the cycle won't disappear.",
						"japanese": "ネメシスはその輪廻の心臓だ。心臓を貫いても…輪廻は消えない。",
						"chinese": "涅墨西斯是那个循环的核心。即便刺穿了心脏…循环也不会消失。",
						"french": "Nemesis est le cœur de ce cycle. Même si tu perces son cœur… le cycle ne disparaîtra pas.",
						"spanish": "Némesis es el corazón de ese ciclo. Aunque perfores su corazón… el ciclo no desaparecerá.",
						"vietnamese": "Nemesis là trái tim của vòng lặp đó. Dù có đâm xuyên tim nó… vòng lặp vẫn không biến mất.",
						"thai": "เนเมซิสคือหัวใจของวงจรนั้น. แม้จะแทงทะลุหัวใจ… วงจรก็ไม่หายไป.",
						"hindi": "नेमेसिस उस चक्र का हृदय है। भले ही तुम उसके हृदय को भेद दो… चक्र गायब नहीं होगा।"
					},
					"emotion": "base",
					"speaker": "zoe",
					"type": "speech"
				}
			]
		},
		{
			"id": 15,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "마천루의 최상층, 서약의 심장이 고동치는 곳.",
						"english": "The highest floor of the skyscraper, where the heart of the oath beats.",
						"japanese": "摩天楼の最上階、誓約の心臓が鼓動する場所。",
						"chinese": "摩天大楼的顶层，誓约之心跳动之处。",
						"french": "Le dernier étage du gratte-ciel, là où bat le cœur du serment.",
						"spanish": "El piso más alto del rascacielos, donde late el corazón del juramento.",
						"vietnamese": "Tầng cao nhất của tòa nhà chọc trời, nơi trái tim của lời thề đang đập.",
						"thai": "ชั้นสูงสุดของตึกระฟ้า, ที่ซึ่งหัวใจของคำสาบานเต้นระรัว.",
						"hindi": "गगनचुंबी इमारत की सबसे ऊपरी मंजिल, जहां शपथ का दिल धड़कता है।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "네메시스!",
						"english": "Nemesis!",
						"japanese": "ネメシス！",
						"chinese": "涅墨西斯！",
						"french": "Nemesis !",
						"spanish": "¡Némesis!",
						"vietnamese": "Nemesis!",
						"thai": "เนเมซิส!",
						"hindi": "नेमेシス!"
					},
					"emotion": "angry"
				},
				{
					"speaker": "boss",
					"type": "speech",
					"content": {
						"korean": "…왔구나. 굴레 속으로.",
						"english": "...You've come. Into the cycle.",
						"japanese": "…来たな。因果の輪へ。",
						"chinese": "……来了啊。进入这桎梏之中。",
						"french": "...Vous êtes venus. Dans le cycle.",
						"spanish": "...Has llegado. Al ciclo.",
						"vietnamese": "...Ngươi đã đến. Vào vòng luẩn quẩn.",
						"thai": "...มาแล้วสินะ สู่บ่วงกรรมนี้",
						"hindi": "...तुम आ गए। इस बंधन में।"
					},
					"emotion": "base"
				},
				{
					"speaker": "boss",
					"type": "speech",
					"content": {
						"korean": "너희의 발버둥은… 서약을 더 견고하게 할 뿐.",
						"english": "Your struggles... only strengthen the pact.",
						"japanese": "お前たちの足掻きは…誓約をより強固にするだけだ。",
						"chinese": "你们的挣扎……只会让誓约更加牢固。",
						"french": "Vos luttes... ne font que renforcer le pacte.",
						"spanish": "Vuestras luchas... solo fortalecerán el pacto.",
						"vietnamese": "Sự giãy giụa của các ngươi... chỉ càng củng cố khế ước này thôi.",
						"thai": "ความดิ้นรนของพวกเจ้า... มีแต่จะทำให้พันธะแข็งแกร่งขึ้นเท่านั้น",
						"hindi": "तुम्हारी जद्दोजहद... केवल अनुबंध को और मज़बूत करेगी।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "헛소리 마! 오늘 끝내주겠어!",
						"english": "Enough talk! Today, it ends!",
						"japanese": "戯言はよせ！今日で全てを終わらせてやる！",
						"chinese": "少废话！今天就让你彻底完蛋！",
						"french": "Assez de paroles ! Aujourd'hui, ça se termine !",
						"spanish": "¡Basta de tonterías! ¡Hoy acabaremos con esto!",
						"vietnamese": "Đừng nói nhảm! Hôm nay ta sẽ kết thúc mọi chuyện!",
						"thai": "เพ้อเจ้อ! วันนี้แหละจะจบมันซะ!",
						"hindi": "बकवास बंद करो! आज ही ख़त्म करेंगे इसे!"
					},
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "네메시스의 심장을 꿰뚫는 순간, 거대한 비명이 빌딩을 울렸다.",
						"english": "The moment Nemesis's heart was pierced, a colossal scream echoed through the building.",
						"japanese": "ネメシスの心臓を貫いた瞬間、巨大な悲鳴がビルに響き渡った。",
						"chinese": "在贯穿涅墨西斯心脏的瞬间，巨大的惨叫声响彻了整栋大楼。",
						"french": "Au moment où le cœur de Némésis fut transpercé, un cri colossal résonna dans le bâtiment.",
						"spanish": "En el momento en que el corazón de Némesis fue traspasado, un grito colosal resonó en el edificio.",
						"vietnamese": "Khoảnh khắc trái tim Nemesis bị xuyên thủng, một tiếng hét khổng lồ vang vọng khắp tòa nhà.",
						"thai": "ในวินาทีที่หัวใจของเนเมซิสถูกแทงทะลุ เสียงกรีดร้องอันมหึมาก็ดังสนั่นไปทั่วอาคาร",
						"hindi": "जैसे ही नेमेसिस के हृदय को भेदा गया, एक विशाल चीख इमारत में गूँज उठी।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "크… 하하하! 어리석은 것들…!",
						"english": "Kuh... Hahahaha! Foolish mortals...!",
						"japanese": "クッ… ハハハハ！愚かな者どもめ…！",
						"chinese": "呵……哈哈哈！愚蠢的家伙们……！",
						"french": "Kuh... Hahahaha ! Stupides mortels... !",
						"spanish": "¡Kuh... Hahahaha! ¡Estúpidos...!",
						"vietnamese": "Khụ... Hahahahaha! Lũ ngu ngốc...!",
						"thai": "คึ... ฮ่าฮ่าฮ่า! พวกโง่เอ๊ย...!",
						"hindi": "क्रुह... हाहाहा! मूर्ख प्राणियों...!"
					},
					"emotion": "angry",
					"speaker": "boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "이 서약은… 죽음을 통해서만 완성된다. 너희 또한… 그 굴레에서 자유롭지 못하리니….",
						"english": "This pact... is only complete through death. You too... will not be free from its grasp...",
						"japanese": "この誓約は…死をもってのみ完成する。お前たちもまた…その因果から逃れることはできないだろう…。",
						"chinese": "这个誓约……只有通过死亡才能完成。你们也……无法摆脱这个桎梏……",
						"french": "Ce pacte... n'est achevé que par la mort. Vous aussi... ne serez pas libérés de son emprise...",
						"spanish": "Este pacto... solo se completa con la muerte. Vosotros también... no seréis libres de su yugo...",
						"vietnamese": "Khế ước này... chỉ hoàn thành qua cái chết. Các ngươi cũng... không thể thoát khỏi vòng luẩn quẩn đó...",
						"thai": "พันธะนี้... จะสมบูรณ์ได้ด้วยความตายเท่านั้น พวกเจ้าเองก็... จะไม่มีวันเป็นอิสระจากบ่วงนี้ได้เลย...",
						"hindi": "यह अनुबंध... केवल मृत्यु के माध्यम से ही पूर्ण होता है। तुम भी... इस बंधन से मुक्त नहीं होगे..."
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "몸에서 검은 재가 폭풍처럼 뿜어져 나왔다. 핏빛 안광이 번뜩였다.",
						"english": "Black ash erupted from its body like a storm. Blood-red eyes flashed.",
						"japanese": "体から黒い灰が嵐のように噴き出した。血のような眼光が閃いた。",
						"chinese": "黑色的灰烬如风暴般从身体中喷涌而出。血红色的眼光闪烁着。",
						"french": "Des cendres noires jaillirent de son corps comme une tempête. Des yeux d'un rouge sang brillèrent.",
						"spanish": "Cenizas negras brotaron de su cuerpo como una tormenta. Sus ojos, con un brillo sangriento, destellaron.",
						"vietnamese": "Tro đen tuôn ra từ cơ thể như bão táp. Ánh mắt đỏ ngầu lóe lên.",
						"thai": "ขี้เถ้าสีดำพวยพุ่งออกมาจากร่างราวกับพายุ แววตาสีเลือดสาดประกาย",
						"hindi": "शरीर से काली राख तूफ़ान की तरह निकली। लहू-रंग की आँखें चमक उठीं।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "빛바랜 양피지가 찢어지며 허공으로 흩어졌다. 백년회의 잔인한 맹세문이었다.",
						"english": "A faded parchment tore and scattered into the air. It was the cruel oath of the Hundred-Year Council.",
						"japanese": "色褪せた羊皮紙が破れ、虚空へと散っていった。百年会の残酷な誓約書だった。",
						"chinese": "褪色的羊皮纸撕裂开来，散落在空中。那是百年会残忍的誓言书。",
						"french": "Un parchemin fané se déchira et se dispersa dans les airs. C'était le serment cruel du Conseil Centenaire.",
						"spanish": "Un pergamino descolorido se rasgó y se dispersó en el aire. Era el cruel juramento del Consejo del Centenario.",
						"vietnamese": "Một tấm da dê phai màu xé toạc và bay tán loạn vào không trung. Đó là lời thề tàn nhẫn của Hội Đồng Trăm Năm.",
						"thai": "แผ่นหนังแกะสีซีดจางฉีกขาดและปลิวว่อนไปในอากาศ มันคือคำสาบานอันโหดร้ายของสภาหนึ่งร้อยปี",
						"hindi": "एक फीका चर्मपत्र फटकर हवा में बिखर गया। यह सौ साल की परिषद की क्रूर प्रतिज्ञा थी।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…무슨 소리야? 우리가… 서약의 일부라고?",
						"english": "...What do you mean? We're... part of the pact?",
						"japanese": "…どういうことだ？俺たちが…誓約の一部だと？",
						"chinese": "……什么意思？我们……是誓约的一部分？",
						"french": "...Qu'est-ce que tu veux dire ? Nous faisons... partie du pacte ?",
						"spanish": "¿...Qué dices? ¿Nosotros... somos parte del pacto?",
						"vietnamese": "...Ngươi nói gì? Chúng ta... là một phần của khế ước?",
						"thai": "...หมายความว่าไง? พวกเรา... เป็นส่วนหนึ่งของพันธะเหรอ?",
						"hindi": "...क्या मतलब? हम... अनुबंध का हिस्सा हैं?"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"duration_ms": 500,
					"speaker": "zoe",
					"spot": [
						3,
						3
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "zoe",
					"content": {
						"korean": "결국… 아무것도 변하지 않았어.",
						"english": "In the end... nothing changed.",
						"japanese": "結局…何も変わらなかった。",
						"chinese": "最终……什么都没有改变。",
						"french": "Au final... rien n'a changé.",
						"spanish": "Al final... nada cambió.",
						"vietnamese": "Cuối cùng... chẳng có gì thay đổi cả.",
						"thai": "สุดท้ายแล้ว... ก็ไม่มีอะไรเปลี่ยนแปลงเลย",
						"hindi": "अंततः... कुछ भी नहीं बदला।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "넌 서약을 파괴한 것이 아니야. 그저… 굴레의 일부가 된 것뿐.",
						"english": "You didn't break the pact. You merely... became part of the cycle.",
						"japanese": "お前は誓約を破ったのではない。ただ…輪の一部となっただけだ。",
						"chinese": "你并没有打破誓约。只不过……成为了轮回的一部分。",
						"french": "Tu n'as pas brisé le pacte. Tu es simplement... devenu une partie du cycle.",
						"spanish": "No rompiste el pacto. Simplemente... te convertiste en parte del ciclo.",
						"vietnamese": "Ngươi không phá hủy lời thề. Ngươi chỉ... trở thành một phần của vòng luân hồi.",
						"thai": "เจ้าไม่ได้ทำลายพันธะสัญญา เพียงแค่... ได้เป็นส่วนหนึ่งของวัฏจักรเท่านั้นเอง",
						"hindi": "तुमने प्रतिज्ञा को तोड़ा नहीं है। तुम बस... चक्र का एक हिस्सा बन गए हो।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "zoe"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "승리는 허망했다. 영원한 서약의 굴레는, 여전히 그들을 옥죄고 있었다.",
						"english": "Victory was fleeting. The eternal shackles of the pact still bound them.",
						"japanese": "勝利は虚しかった。永遠の誓約の鎖は、未だ彼らを縛り付けていた。",
						"chinese": "胜利是虚妄的。永恒誓约的枷锁，依然束缚着他们。",
						"french": "La victoire fut vaine. Les chaînes éternelles du pacte les entravaient toujours.",
						"spanish": "La victoria fue vana. Las cadenas eternas del pacto aún los oprimían.",
						"vietnamese": "Chiến thắng thật vô vọng. Xiềng xích vĩnh cửu của lời thề, vẫn trói buộc họ.",
						"thai": "ชัยชนะช่างว่างเปล่า ห่วงโซ่แห่งพันธะสัญญาอันเป็นนิรันดร์ยังคงพันธนาการพวกเขาไว้",
						"hindi": "जीत व्यर्थ थी। प्रतिज्ञा की शाश्वत बेड़ियाँ, अभी भी उन्हें जकड़े हुए थीं।"
					},
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "하찮은 저항… 결국 서약의 힘을 깨닫겠지.",
						"english": "Meaningless resistance... You'll eventually realize the power of the pact.",
						"japanese": "取るに足らない抵抗…結局、誓約の力を思い知るだろう。",
						"chinese": "微不足道的抵抗……终究会明白誓约的力量。",
						"french": "Résistance futile... Tu finiras par comprendre le pouvoir du pacte.",
						"spanish": "Resistencia insignificante... Al final, comprenderás el poder del pacto.",
						"vietnamese": "Sự kháng cự vô ích... Cuối cùng ngươi sẽ nhận ra sức mạnh của lời thề.",
						"thai": "การต่อต้านที่ไร้ค่า... ในที่สุดเจ้าก็จะได้ตระหนักถึงพลังของพันธะสัญญา",
						"hindi": "तुच्छ प्रतिरोध... आखिर में तुम प्रतिज्ञा की शक्ति समझ जाओगे।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "젠장…! 아직 끝나지 않았어!",
						"english": "Damn it...! It's not over yet!",
						"japanese": "くそっ…！まだ終わってないぞ！",
						"chinese": "该死……！还没完呢！",
						"french": "Maudits... ! Ce n'est pas encore fini !",
						"spanish": "¡Maldita sea...! ¡Aún no ha terminado!",
						"vietnamese": "Chết tiệt...! Vẫn chưa kết thúc đâu!",
						"thai": "ให้ตายสิ...! มันยังไม่จบแค่นี้หรอก!",
						"hindi": "धिक्कार है...! अभी खत्म नहीं हुआ है!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "zoe",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						2,
						3
					],
					"action": "enter"
				},
				{
					"content": {
						"korean": "…그래. 이 서약은 끝나지 않아.",
						"english": "...Yes. This pact won't end.",
						"japanese": "…ああ。この誓約は終わらない。",
						"chinese": "……是啊。这份誓约，永无止境。",
						"french": "...Oui. Ce pacte ne prendra jamais fin.",
						"spanish": "...Sí. Este pacto no terminará.",
						"vietnamese": "...Phải. Lời thề này sẽ không kết thúc.",
						"thai": "...ใช่แล้ว. พันธะสัญญานี้จะไม่มีวันสิ้นสุด.",
						"hindi": "...हाँ। यह प्रतिज्ञा खत्म नहीं होगी।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "zoe"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"네메시스. 도시의 모든 서약을 꿰뚫는 존재.",
			"마천루의 심장부, 그 끝에서 영원한 굴레가 기다렸다.",
			"모든 진실이 조각나고, 승리마저 의미를 잃는 순간.",
			"그 서약의 그림자는, 이미 우리 안에 스며들어 있었다."
		],
		"english": [
			"Nemesis. The one who pierces all covenants of the city.",
			"At the heart of the skyscraper, at its end, an eternal cycle awaited.",
			"The moment all truth shattered, and even victory lost its meaning.",
			"The shadow of that covenant had already seeped into us."
		],
		"japanese": [
			"ネメシス。都市の全ての誓約を貫く存在。",
			"摩天楼の心臓部、その果てで永遠の輪廻が待っていた。",
			"全ての真実が砕け散り、勝利さえも意味を失う瞬間。",
			"その誓約の影は、すでに私たちの中に染み込んでいた。"
		],
		"chinese": [
			"复仇女神。洞穿城市所有契约的存在。",
			"在摩天大楼的心脏，尽头等待着永恒的桎梏。",
			"所有真相支离破碎，胜利也失去意义的瞬间。",
			"那份契约的阴影，早已渗透到我们心中。"
		],
		"french": [
			"Némésis. L'entité qui transperce tous les serments de la ville.",
			"Au cœur du gratte-ciel, à son terme, un cycle éternel attendait.",
			"L'instant où toute vérité se brisa, et où même la victoire perdit son sens.",
			"L'ombre de ce serment s'était déjà infiltrée en nous."
		],
		"spanish": [
			"Némesis. El ser que perfora todos los pactos de la ciudad.",
			"En el corazón del rascacielos, al final, esperaba una rueda eterna.",
			"El momento en que toda verdad se hizo pedazos, y hasta la victoria perdió su significado.",
			"La sombra de ese pacto ya se había infiltrado en nosotros."
		],
		"vietnamese": [
			"Nemesis. Kẻ xuyên thủng mọi lời thề của thành phố.",
			"Tại trung tâm của tòa nhà chọc trời, ở cuối cùng, một vòng luẩn quẩn vĩnh cửu đang chờ đợi.",
			"Khoảnh khắc mọi sự thật tan vỡ, và ngay cả chiến thắng cũng mất đi ý nghĩa.",
			"Bóng tối của lời thề đó đã thấm sâu vào trong chúng ta."
		],
		"thai": [
			"เนเมซิส ผู้ที่เจาะทะลุทุกพันธสัญญาของเมือง",
			"ณ ใจกลางตึกระฟ้า ที่ปลายสุดนั้น วงเวียนนิรันดร์รอคอยอยู่",
			"ชั่วขณะที่ความจริงทั้งหมดแตกสลาย และแม้แต่ชัยชนะก็ไร้ความหมาย",
			"เงาแห่งพันธสัญญานั้น ได้ซึมซับเข้ามาในตัวเราแล้ว"
		],
		"hindi": [
			"नेमेसिस। शहर के सभी करारों को भेदने वाला अस्तित्व।",
			"गगनचुंबी इमारत के दिल में, उसके अंत में, एक शाश्वत बंधन प्रतीक्षा कर रहा था।",
			"वह क्षण जब सभी सत्य बिखर गए, और विजय भी अपना अर्थ खो बैठी।",
			"उस करार की छाया, पहले ही हमारे भीतर समा चुकी थी।"
		]
	},
	"epilogue": {
		"korean": [
			"네메시스의 잔해가 흩어지고, 마천루는 침묵에 잠겼다.",
			"그러나 서약의 굴레는 사라지지 않았다. 도시의 그림자 속에 더 깊이 스며들 뿐.",
			"승리는 허망했다. 파괴하려 했던 것은, 이제 우리 자신의 일부가 되었다.",
			"새로운 시작인가? 혹은… 끝없는 반복의 서곡인가."
		],
		"english": [
			"The remnants of Nemesis scattered, and the skyscraper fell silent.",
			"But the cycle of the covenant did not disappear. It only seeped deeper into the city's shadows.",
			"Victory was fleeting. What we tried to destroy had now become a part of ourselves.",
			"Is this a new beginning? Or... the prelude to an endless repetition?"
		],
		"japanese": [
			"ネメシスの残骸が散り、摩天楼は沈黙に包まれた。",
			"しかし、誓約の輪廻は消えなかった。都市の影の中により深く染み込むだけだった。",
			"勝利は虚しかった。破壊しようとしたものは、今や私たち自身の一部となっていた。",
			"新たな始まりか？それとも…終わりなき繰り返しの序曲か。"
		],
		"chinese": [
			"复仇女神的残骸散落，摩天大楼陷入沉寂。",
			"然而契约的桎梏并未消失。它只是更深地渗入了城市的阴影中。",
			"胜利是虚妄的。我们试图摧毁的，如今已成为我们自身的一部分。",
			"是新的开始吗？抑或是……无尽重复的序曲。"
		],
		"french": [
			"Les vestiges de Némésis se dispersèrent, et le gratte-ciel sombra dans le silence.",
			"Mais le cycle du serment ne disparut pas. Il ne fit que s'infiltrer plus profondément dans les ombres de la ville.",
			"La victoire fut vaine. Ce que nous avions cherché à détruire était désormais devenu une partie de nous-mêmes.",
			"Est-ce un nouveau commencement ? Ou... le prélude à une répétition sans fin ?"
		],
		"spanish": [
			"Los restos de Némesis se dispersaron, y el rascacielos se sumió en el silencio.",
			"Pero la rueda del pacto no desapareció. Solo se infiltró más profundamente en las sombras de la ciudad.",
			"La victoria fue vana. Lo que intentamos destruir, ahora se había convertido en parte de nosotros mismos.",
			"¿Es un nuevo comienzo? O... el preludio de una repetición interminable."
		],
		"vietnamese": [
			"Tàn dư của Nemesis tan biến, và tòa nhà chọc trời chìm vào im lặng.",
			"Nhưng vòng luẩn quẩn của lời thề không biến mất. Nó chỉ thấm sâu hơn vào bóng tối của thành phố.",
			"Chiến thắng thật phù du. Thứ chúng ta cố gắng phá hủy, giờ đã trở thành một phần của chính chúng ta.",
			"Đây là một khởi đầu mới? Hay... khúc dạo đầu cho một sự lặp lại vô tận?"
		],
		"thai": [
			"ซากปรักหักพังของเนเมซิสกระจัดกระจาย และตึกระฟ้าก็เงียบงัน",
			"แต่พันธสัญญาแห่งพันธนาการไม่หายไป เพียงแต่ซึมลึกเข้าไปในเงาของเมืองเท่านั้น",
			"ชัยชนะว่างเปล่า สิ่งที่เราพยายามจะทำลาย ตอนนี้ได้กลายเป็นส่วนหนึ่งของเราไปแล้ว",
			"นี่คือการเริ่มต้นใหม่หรือ? หรือ... เป็นบทโหมโรงของการทำซ้ำไม่รู้จบ?"
		],
		"hindi": [
			"नेमेसिस के अवशेष बिखर गए, और गगनचुंबी इमारत शांत हो गई।",
			"लेकिन करार का बंधन गायब नहीं हुआ। यह केवल शहर की छाया में और गहरा समा गया।",
			"विजय क्षणभंगुर थी। जिसे हमने नष्ट करने का प्रयास किया था, वह अब हमारा ही एक हिस्सा बन गया था।",
			"क्या यह एक नई शुरुआत है? या... एक अंतहीन पुनरावृत्ति की प्रस्तावना है।"
		]
	}
} as const;
