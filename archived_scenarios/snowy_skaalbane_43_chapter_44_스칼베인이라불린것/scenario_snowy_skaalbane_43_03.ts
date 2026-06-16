export const scenario_snowy_skaalbane_43_03 = {
	"scenario_id": "snowy_skaalbane_43_03",
	"order": 3,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"frost": {
			"id": "mon_942bca3b-33e7-4b14-98e5-ec1e2dc78d5b",
			"name": {
				"korean": "서리",
				"english": "Frost",
				"japanese": "霜",
				"chinese": "霜",
				"french": "Givre",
				"spanish": "Escarcha",
				"vietnamese": "Băng Giá",
				"thai": "น้ำแข็ง",
				"hindi": "पाला"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/0a8c2f92-0cf9-413d-0b33-8e0204caae00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/df60b327-4cc2-435b-67e0-cffb4c319900/public"
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
					"content": {
						"korean": "빙실을 지나 잔해탑의 가장 오래된 층에 다다랐다.",
						"english": "Past the ice chamber, we reached the oldest floor of the Ruined Tower.",
						"japanese": "氷室を過ぎ、残骸塔の最も古い階に辿り着いた。",
						"chinese": "穿过冰室，我们抵达了残骸塔最古老的楼层。",
						"french": "Après la chambre de glace, nous avons atteint l'étage le plus ancien de la Tour en Ruine.",
						"spanish": "Pasando la cámara de hielo, llegamos al piso más antiguo de la Torre Ruinosa.",
						"vietnamese": "Vượt qua phòng băng, chúng tôi đến tầng cổ nhất của Tháp Hoang Tàn.",
						"thai": "ผ่านห้องน้ำแข็ง เรามาถึงชั้นที่เก่าแก่ที่สุดของหอคอยซากปรักหักพัง",
						"hindi": "बर्फीले कक्ष से आगे, हम खंडहर टॉवर की सबसे पुरानी मंजिल पर पहुँचे।"
					},
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "여기가 Skaalbane이 잠든 곳인가.",
						"english": "Is this where Skaalbane sleeps?",
						"japanese": "ここがSkaalbaneが眠る場所なのか。",
						"chinese": "这就是Skaalbane沉睡之地吗？",
						"french": "C'est ici que Skaalbane repose ?",
						"spanish": "¿Es aquí donde Skaalbane duerme?",
						"vietnamese": "Đây có phải là nơi Skaalbane đang ngủ say?",
						"thai": "ที่นี่คือที่ที่ Skaalbane หลับใหลอยู่หรือเปล่า?",
						"hindi": "क्या यहीं Skaalbane सो रहा है?"
					},
					"type": "speech"
				},
				{
					"speaker": "frost",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"duration_ms": 500
				},
				{
					"emotion": "sad",
					"speaker": "frost",
					"content": {
						"korean": "그 이름… 부르지 마.",
						"english": "That name... don't say it.",
						"japanese": "その名… 呼ぶな。",
						"chinese": "那个名字… 别提它。",
						"french": "Ce nom... ne le prononce pas.",
						"spanish": "Ese nombre... no lo digas.",
						"vietnamese": "Cái tên đó... đừng gọi.",
						"thai": "ชื่อนั้น... อย่าเรียกมัน",
						"hindi": "वह नाम... मत लो।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "프로스트? 왜 그래?",
						"english": "Frost? What's wrong?",
						"japanese": "フロスト？どうした？",
						"chinese": "弗罗斯特？你怎么了？",
						"french": "Frost ? Qu'est-ce qui ne va pas ?",
						"spanish": "¿Frost? ¿Qué te pasa?",
						"vietnamese": "Frost? Sao vậy?",
						"thai": "ฟรอสต์? เป็นอะไรไป?",
						"hindi": "फ्रॉस्ट? क्या हुआ?"
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "그 이름을 말할 때마다… 한기가 짙어져.",
						"english": "Every time you say that name... the chill deepens.",
						"japanese": "その名を言うたびに… 寒気が濃くなるんだ。",
						"chinese": "每次你说出那个名字… 寒意就更深了。",
						"french": "Chaque fois que tu prononces ce nom... le froid s'épaissit.",
						"spanish": "Cada vez que dices ese nombre... el frío se intensifica.",
						"vietnamese": "Mỗi khi ngươi nhắc đến cái tên đó... luồng khí lạnh lại càng sâu sắc.",
						"thai": "ทุกครั้งที่เจ้าเอ่ยชื่อนั้น... ความหนาวเย็นก็ยิ่งทวีขึ้น",
						"hindi": "जब भी तुम वह नाम लेते हो... ठंडक गहरी हो जाती है।"
					},
					"speaker": "frost",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "frost",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "방금도… 또 그 이름을 입에 올렸지.",
						"english": "Just now... you said that name again.",
						"japanese": "今も… またその名を口にしたな。",
						"chinese": "刚才… 你又提到了那个名字。",
						"french": "À l'instant... tu as encore prononcé ce nom.",
						"spanish": "Justo ahora... volviste a decir ese nombre.",
						"vietnamese": "Vừa rồi... ngươi lại nhắc đến cái tên đó rồi.",
						"thai": "เมื่อกี้... เจ้าก็เอ่ยชื่อนั้นอีกแล้ว",
						"hindi": "अभी... तुमने फिर वह नाम लिया।"
					},
					"speaker": "frost"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "…어떻게 알았어?",
						"english": "...How did you know?",
						"japanese": "...どうして分かったの？",
						"chinese": "...你怎么知道的？",
						"french": "...Comment as-tu su ?",
						"spanish": "¿...Cómo lo supiste?",
						"vietnamese": "...Sao bạn biết?",
						"thai": "...รู้ได้ยังไง?",
						"hindi": "...तुम्हें कैसे पता चला?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "추위가 더 가까이 와. 부르지 마.",
						"english": "The cold draws nearer. Don't call out.",
						"japanese": "寒さが近づいている。呼んではいけない。",
						"chinese": "寒冷正在逼近。别呼唤它。",
						"french": "Le froid se rapproche. N'appelle pas.",
						"spanish": "El frío se acerca. No lo llames.",
						"vietnamese": "Cái lạnh đang đến gần. Đừng gọi.",
						"thai": "ความหนาวเย็นเข้ามาใกล้ อย่าเรียกมัน",
						"hindi": "सर्दी और पास आ रही है। मत पुकारो।"
					},
					"speaker": "frost"
				},
				{
					"content": {
						"korean": "단순한 우연 아닐까?",
						"english": "Just a coincidence, perhaps?",
						"japanese": "ただの偶然じゃないのか？",
						"chinese": "会不会只是巧合？",
						"french": "Une simple coïncidence, peut-être ?",
						"spanish": "¿Quizás solo una coincidencia?",
						"vietnamese": "Có lẽ chỉ là trùng hợp?",
						"thai": "อาจจะเป็นแค่เรื่องบังเอิญหรือเปล่า?",
						"hindi": "शायद बस एक इत्तेफाक?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "우연히… 모든 게 얼어붙진 않아.",
						"english": "By coincidence... not everything freezes.",
						"japanese": "偶然に…全てが凍りつくわけじゃない。",
						"chinese": "巧合之下…并非所有东西都会冻结。",
						"french": "Par coïncidence... tout ne gèle pas.",
						"spanish": "Por coincidencia... no todo se congela.",
						"vietnamese": "Do trùng hợp... không phải mọi thứ đều đóng băng.",
						"thai": "โดยบังเอิญ...ทุกสิ่งไม่ได้แข็งตัว",
						"hindi": "इत्तेफाक से... सब कुछ नहीं जम जाता।"
					},
					"speaker": "frost",
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"content": {
						"korean": "탑의 오래된 돌벽에서 차가운 기운이 뿜어져 나왔다.",
						"english": "A cold aura emanated from the tower's ancient stone walls.",
						"japanese": "塔の古い石壁から冷たいオーラが放たれた。",
						"chinese": "一股寒气从塔楼古老的石墙中散发出来。",
						"french": "Une aura froide émanait des anciens murs de pierre de la tour.",
						"spanish": "Un aura fría emanaba de los antiguos muros de piedra de la torre.",
						"vietnamese": "Một luồng khí lạnh tỏa ra từ những bức tường đá cổ kính của tháp.",
						"thai": "ออร่าเย็นยะเยือกแผ่ออกมาจากกำแพงหินเก่าแก่ของหอคอย",
						"hindi": "टावर की प्राचीन पत्थर की दीवारों से एक ठंडी आभा निकली।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"spot": [
						4,
						2
					],
					"action": "enter",
					"duration_ms": 500,
					"speaker": "frost",
					"type": "direction"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "느껴져? 탑이… 그 이름에 응답하고 있어.",
						"english": "Do you feel it? The tower... it's responding to its name.",
						"japanese": "感じるか？塔が…その名に呼応している。",
						"chinese": "你感觉到了吗？塔…它正在回应那个名字。",
						"french": "Tu le sens ? La tour... elle répond à son nom.",
						"spanish": "¿Lo sientes? La torre... está respondiendo a su nombre.",
						"vietnamese": "Bạn có cảm thấy không? Ngọn tháp... nó đang phản ứng với cái tên đó.",
						"thai": "รู้สึกไหม? หอคอย...มันกำลังตอบสนองต่อชื่อนั้น",
						"hindi": "क्या तुम्हें महसूस होता है? टॉवर... वह अपने नाम पर प्रतिक्रिया दे रहा है।"
					},
					"speaker": "frost",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "설마… 우리가 부른다고 탑이 반응한다고?",
						"english": "Surely not... the tower responds just because we call it?",
						"japanese": "まさか…私たちが呼んだからって塔が反応するのか？",
						"chinese": "不会吧…我们一呼唤塔就回应了？",
						"french": "Impossible... la tour répond juste parce que nous l'appelons ?",
						"spanish": "¿De verdad...? ¿La torre responde solo porque la llamamos?",
						"vietnamese": "Không thể nào... ngọn tháp phản ứng chỉ vì chúng ta gọi nó?",
						"thai": "ไม่จริงน่า...หอคอยตอบสนองเพียงเพราะเราเรียกมันงั้นเหรอ?",
						"hindi": "कहीं... टॉवर इसलिए प्रतिक्रिया दे रहा है क्योंकि हम उसे बुलाते हैं?"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "frost",
					"content": {
						"korean": "Skaalbane… 그건 평범한 이름이 아니야. 부를수록 또렷해져.",
						"english": "Skaalbane... that's no ordinary name. The more you call it, the clearer it gets.",
						"japanese": "Skaalbane…それは普通の名前じゃない。呼ぶほどに鮮明になる。",
						"chinese": "Skaalbane…那不是一个普通的名字。呼唤得越多，它就越清晰。",
						"french": "Skaalbane... ce n'est pas un nom ordinaire. Plus tu l'appelles, plus il devient distinct.",
						"spanish": "Skaalbane... ese no es un nombre cualquiera. Cuanto más lo llamas, más claro se vuelve.",
						"vietnamese": "Skaalbane... đó không phải là một cái tên bình thường. Càng gọi, nó càng rõ ràng hơn.",
						"thai": "Skaalbane...นั่นไม่ใช่ชื่อธรรมดา ยิ่งเรียกมันยิ่งชัดเจนขึ้น",
						"hindi": "स्कॉलबेन... वह कोई साधारण नाम नहीं है। जितना अधिक तुम उसे पुकारते हो, वह उतना ही स्पष्ट होता जाता है।"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "frost",
					"duration_ms": 500,
					"spot": [
						3,
						3
					],
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "frost",
					"content": {
						"korean": "그 이름을 말할 때마다… 추위가 우리한테 더 가까워져.",
						"english": "Every time that name is spoken... the cold draws nearer to us.",
						"japanese": "その名を口にするたびに…寒さが私たちに近づいてくる。",
						"chinese": "每当说出那个名字时…寒冷就离我们更近了。",
						"french": "Chaque fois que ce nom est prononcé... le froid se rapproche de nous.",
						"spanish": "Cada vez que se pronuncia ese nombre... el frío se acerca más a nosotros.",
						"vietnamese": "Mỗi khi cái tên đó được nhắc đến... cái lạnh lại đến gần chúng ta hơn.",
						"thai": "ทุกครั้งที่พูดชื่อนั้น...ความหนาวเย็นก็เข้ามาใกล้เรามากขึ้น",
						"hindi": "हर बार जब वह नाम बोला जाता है... सर्दी हमारे और करीब आती है।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그럼 어떻게 해야 해?",
						"english": "Then what should we do?",
						"japanese": "じゃあ、どうすればいい？",
						"chinese": "那我们该怎么办？",
						"french": "Alors, que devons-nous faire ?",
						"spanish": "¿Entonces qué debemos hacer?",
						"vietnamese": "Vậy chúng ta phải làm gì?",
						"thai": "แล้วเราควรทำยังไง?",
						"hindi": "तो हमें क्या करना चाहिए?"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "부르지 마. 부를수록… 그 존재가 깨어나.",
						"english": "Don't call it. The more you call... the more it awakens.",
						"japanese": "呼ぶな。呼ぶほどに… その存在が目覚める。",
						"chinese": "别呼唤它。呼唤得越多……那存在就会苏醒。",
						"french": "Ne l'appelle pas. Plus tu l'appelles... plus cette entité s'éveille.",
						"spanish": "No lo llames. Cuanto más lo llames... más se despierta esa entidad.",
						"vietnamese": "Đừng gọi nó. Càng gọi... sự tồn tại đó càng thức tỉnh.",
						"thai": "อย่าเรียกมัน ยิ่งเรียก... ยิ่งปลุกให้มันตื่นขึ้น",
						"hindi": "इसे मत बुलाओ। जितना तुम बुलाओगे... उतना ही वह अस्तित्व जागृत होगा।"
					},
					"speaker": "frost",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "막아야 해. 여기서 더 이상.",
						"english": "We must stop it. No further, here.",
						"japanese": "止めなければならない。これ以上、ここで。",
						"chinese": "必须阻止它。不能再这样下去了。",
						"french": "Il faut l'arrêter. Pas un pas de plus, ici.",
						"spanish": "Debemos detenerlo. No más, aquí.",
						"vietnamese": "Phải ngăn chặn nó. Không thể tiếp tục ở đây.",
						"thai": "ต้องหยุดมัน ไม่ให้ไปต่อที่นี่",
						"hindi": "हमें इसे रोकना होगा। अब और नहीं, यहीं पर।"
					}
				}
			]
		},
		{
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "이 싸움은… 끝이 아니다. 이름은… 사라지지 않아.",
						"english": "This battle... is not the end. The name... will not vanish.",
						"japanese": "この戦いは… 終わりではない。名は… 消えぬ。",
						"chinese": "这场战斗……还不是结束。名字……不会消失。",
						"french": "Cette bataille... n'est pas la fin. Le nom... ne disparaîtra pas.",
						"spanish": "Esta batalla... no es el final. El nombre... no desaparecerá.",
						"vietnamese": "Trận chiến này... chưa phải là kết thúc. Tên... sẽ không biến mất.",
						"thai": "การต่อสู้นี้... ไม่ใช่จุดจบ ชื่อ... จะไม่หายไป",
						"hindi": "यह लड़ाई... अंत नहीं है। नाम... मिटेगा नहीं।"
					},
					"speaker": "random_boss",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "드디어… 끝인가.",
						"english": "Finally... is it over?",
						"japanese": "ついに… 終わりか。",
						"chinese": "终于……结束了吗？",
						"french": "Enfin... est-ce la fin ?",
						"spanish": "¿Finalmente... se acabó?",
						"vietnamese": "Cuối cùng... cũng kết thúc sao?",
						"thai": "ในที่สุด... ก็จบลงแล้วหรือ",
						"hindi": "अंततः... क्या यह खत्म हो गया?"
					},
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "비석의 룬이 더욱 선명해졌다. 더 깊은 곳으로 가는 길이 열렸다.",
						"english": "The runes on the monolith sharpened. A path to deeper places opened.",
						"japanese": "碑石のルーンがさらに鮮明になった。より深い場所への道が開かれた。",
						"chinese": "碑石上的符文变得更加清晰。通往更深处的大门打开了。",
						"french": "Les runes sur le monolithe s'éclaircirent. Un chemin vers des lieux plus profonds s'ouvrit.",
						"spanish": "Las runas del monolito se hicieron más nítidas. Se abrió un camino a lugares más profundos.",
						"vietnamese": "Các rune trên bia đá trở nên rõ ràng hơn. Một con đường dẫn đến những nơi sâu hơn đã mở ra.",
						"thai": "รูนบนศิลาชัดเจนขึ้น เส้นทางสู่สถานที่ที่ลึกกว่าได้เปิดออก",
						"hindi": "स्मारक पर बने रुन और स्पष्ट हो गए। गहरे स्थानों का मार्ग खुल गया।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "거대한 그림자가 탐험대의 앞을 가로막았다. 압도적인 한기가 공간을 채웠다.",
						"english": "A colossal shadow blocked the expedition's path. Overwhelming cold filled the space.",
						"japanese": "巨大な影が探検隊の行く手を阻んだ。圧倒的な冷気が空間を満たした。",
						"chinese": "巨大的黑影挡住了探险队的去路。压倒性的寒气充满了整个空间。",
						"french": "Une ombre colossale barra la route de l'expédition. Un froid écrasant emplit l'espace.",
						"spanish": "Una sombra colosal bloqueó el camino de la expedición. Un frío abrumador llenó el espacio.",
						"vietnamese": "Một cái bóng khổng lồ chặn đường đoàn thám hiểm. Cái lạnh áp đảo tràn ngập không gian.",
						"thai": "เงาขนาดมหึมาขวางเส้นทางของคณะสำรวจ ความหนาวเย็นที่ท่วมท้นปกคลุมไปทั่วบริเวณ",
						"hindi": "एक विशाल छाया ने अभियान के रास्ते को रोक दिया। भीषण ठंड ने पूरे स्थान को भर दिया।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "내 이름이… 너희를 이곳으로 불렀는가.",
						"english": "Did my name... call you here?",
						"japanese": "私の名が… お前たちをここへ呼んだのか。",
						"chinese": "是我的名字……把你们召唤到这里来的吗？",
						"french": "Mon nom... vous a-t-il appelés ici ?",
						"spanish": "¿Fue mi nombre... lo que los trajo aquí?",
						"vietnamese": "Tên của ta... đã gọi các ngươi đến đây sao?",
						"thai": "ชื่อของข้า... เรียกพวกเจ้ามาที่นี่หรือ",
						"hindi": "क्या मेरे नाम ने... तुम्हें यहाँ बुलाया?"
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
						"korean": "우리가 널 끝낼 거야, {random_boss}!",
						"english": "We're going to end you, {random_boss}!",
						"japanese": "私たちが貴様を終わらせる、{random_boss}！",
						"chinese": "我们会终结你，{random_boss}！",
						"french": "Nous allons t'anéantir, {random_boss} !",
						"spanish": "¡Te acabaremos, {random_boss}!",
						"vietnamese": "Chúng ta sẽ kết liễu ngươi, {random_boss}!",
						"thai": "เราจะจัดการแกเอง, {random_boss}!",
						"hindi": "हम तुम्हें खत्म कर देंगे, {random_boss}!"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "어리석군. 난 죽지 않아. 계속해서 불릴 뿐.",
						"english": "Foolish. I do not die. I am merely called, again and again.",
						"japanese": "愚か者め。私は死なぬ。ただ、ひたすらに呼ばれ続けるだけだ。",
						"chinese": "愚蠢。我不会死。只会不断地被召唤。",
						"french": "Imbéciles. Je ne meurs pas. Je ne fais qu'être invoqué, sans cesse.",
						"spanish": "Tontos. No muero. Solo soy invocado, una y otra vez.",
						"vietnamese": "Ngốc nghếch. Ta không chết. Ta chỉ liên tục được triệu hồi.",
						"thai": "โง่เขลา ข้าไม่ตาย ข้าแค่ถูกเรียกซ้ำแล้วซ้ำอีกเท่านั้น",
						"hindi": "मूर्ख। मैं मरता नहीं। मुझे तो बस बार-बार बुलाया जाता है।"
					}
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "한기는… 너희를 집어삼킬 것이다. 영원히.",
						"english": "The cold... will consume you. Forever.",
						"japanese": "冷気は… お前たちを呑み込むだろう。永遠に。",
						"chinese": "寒气……将会吞噬你们。永远。",
						"french": "Le froid... vous consumera. Pour toujours.",
						"spanish": "El frío... los consumirá. Para siempre.",
						"vietnamese": "Cái lạnh... sẽ nuốt chửng các ngươi. Mãi mãi.",
						"thai": "ความหนาวเย็น... จะกลืนกินพวกเจ้า ตลอดไป",
						"hindi": "ठंड... तुम्हें निगल जाएगी। हमेशा के लिए।"
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "…아직 끝나지 않았어.",
						"english": "...It's not over yet.",
						"japanese": "…まだ終わってない。",
						"chinese": "…还没有结束。",
						"french": "…Ce n'est pas encore fini.",
						"spanish": "…Esto no ha terminado aún.",
						"vietnamese": "…Chưa kết thúc đâu.",
						"thai": "…ยังไม่จบแค่นี้หรอกนะ",
						"hindi": "…अभी खत्म नहीं हुआ है।"
					},
					"speaker": "character_any",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"잔해탑 가장 깊은 층.",
			"그 이름을 입에 올릴 때마다, 얼음 같은 한기가 짙어졌다.",
			"영웅의 무덤이 아닌, 절규를 먹고 자란 재앙.",
			"탑이 응답한다. 그 이름이 부르는 한기에."
		],
		"english": [
			"The deepest floor of the Ruined Tower.",
			"Each time its name was uttered, an icy chill deepened.",
			"Not a hero's tomb, but a calamity fed by screams.",
			"The tower responds. To the chill its name invokes."
		],
		"japanese": [
			"残骸塔の最深部。",
			"その名を口にするたび、氷のような寒気が濃くなった。",
			"英雄の墓ではなく、絶叫を糧に育った災厄。",
			"塔が応える。その名が呼ぶ寒気に。"
		],
		"chinese": [
			"残骸塔最深处。",
			"每当提及那个名字，冰冷的寒意便愈发深重。",
			"并非英雄之墓，而是以绝望嘶吼为食的灾厄。",
			"高塔回应着。回应着那名字所唤起的寒意。"
		],
		"french": [
			"L'étage le plus profond de la Tour en Ruine.",
			"Chaque fois que son nom était prononcé, un froid glacial s'épaississait.",
			"Pas la tombe d'un héros, mais une calamité nourrie par les cris.",
			"La tour répond. Au froid que son nom évoque."
		],
		"spanish": [
			"El piso más profundo de la Torre Ruinosa.",
			"Cada vez que se pronunciaba su nombre, un frío helado se intensificaba.",
			"No es la tumba de un héroe, sino una calamidad alimentada por gritos.",
			"La torre responde. Al frío que su nombre invoca."
		],
		"vietnamese": [
			"Tầng sâu nhất của Tháp Hoang Tàn.",
			"Mỗi khi cái tên đó được nhắc đến, một luồng khí lạnh băng giá lại càng sâu sắc.",
			"Không phải là lăng mộ của anh hùng, mà là tai họa được nuôi dưỡng bởi những tiếng gào thét.",
			"Ngọn tháp đáp lại. Với luồng khí lạnh mà cái tên đó triệu hồi."
		],
		"thai": [
			"ชั้นที่ลึกที่สุดของหอคอยซากปรักหักพัง",
			"ทุกครั้งที่เอ่ยชื่อนั้น ความหนาวเย็นเยือกก็ยิ่งทวีความรุนแรงขึ้น",
			"ไม่ใช่หลุมฝังศพของวีรบุรุษ แต่เป็นหายนะที่เติบโตจากการกรีดร้อง",
			"หอคอยตอบสนอง ต่อความหนาวเย็นที่ชื่อนั้นเรียกมา"
		],
		"hindi": [
			"खंडहर टॉवर की सबसे गहरी मंजिल।",
			"जब भी उसका नाम लिया जाता, बर्फीली ठंडक और गहरी हो जाती।",
			"नायक की कब्र नहीं, बल्कि चीखों से पोषित एक आपदा।",
			"टावर जवाब देता है। उस ठंडक को जो उसका नाम बुलाता है।"
		]
	}
} as const;
