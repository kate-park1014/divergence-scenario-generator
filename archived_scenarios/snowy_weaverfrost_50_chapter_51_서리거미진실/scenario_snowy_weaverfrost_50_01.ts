export const scenario_snowy_weaverfrost_50_01 = {
	"scenario_id": "snowy_weaverfrost_50_01",
	"order": 1,
	"act": "intro",
	"theme": "snowy",
	"actors": {
		"inka": {
			"id": "mon_583e945a-1e2f-428b-a251-b428f25b4052",
			"name": {
				"korean": "인카",
				"english": "Inka",
				"japanese": "インカ",
				"chinese": "因卡",
				"french": "Inka",
				"spanish": "Inka",
				"vietnamese": "Inka",
				"thai": "อินคา",
				"hindi": "इंंका"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/97f4545b-2e8a-4688-3e4e-b34bb246dd00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/f27763ba-2358-4fd3-c813-0f0b59dcac00/public"
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
					"content": {
						"korean": "설원 마을에 불길한 그림자가 드리웠다. 사라지는 사람들에 대한 공포가 감돌았다.",
						"english": "An ominous shadow fell over the snowfield village. Fear of disappearing people lingered.",
						"japanese": "雪原の村に不吉な影が差した。人々が消えることへの恐怖が漂っていた。",
						"chinese": "不祥的阴影笼罩着雪原村。人们对消失的恐惧挥之不去。",
						"french": "Une ombre sinistre planait sur le village enneigé. La peur des disparitions persistait.",
						"spanish": "Una sombra ominosa se cernió sobre el pueblo nevado. El miedo a las desapariciones persistía.",
						"vietnamese": "Một bóng đen đáng sợ bao trùm làng tuyết. Nỗi sợ về những người biến mất cứ đeo bám.",
						"thai": "เงาร้ายปกคลุมหมู่บ้านหิมะ ความกลัวผู้คนที่หายตัวไปวนเวียนอยู่",
						"hindi": "बर्फीले गाँव पर एक अशुभ छाया मंडरा रही थी। गायब होते लोगों का डर छाया हुआ था।"
					},
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "또 사라졌어? 대체 몇 명째야?",
						"english": "Disappeared again? How many is that now?",
						"japanese": "また消えたの？一体何人目なの？",
						"chinese": "又消失了？这已经是第几个了？",
						"french": "Encore disparu ? C'est combien de personnes maintenant ?",
						"spanish": "¿Desapareció de nuevo? ¿Cuántos van ya?",
						"vietnamese": "Lại biến mất ư? Rốt cuộc là bao nhiêu người rồi?",
						"thai": "หายไปอีกแล้วเหรอ? นี่มันคนที่เท่าไหร่แล้วเนี่ย?",
						"hindi": "फिर से गायब? अब तक कितने लोग हो गए?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "inka",
					"spot": [
						4,
						3
					]
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…벌써 세 명째야. 밤에 나갔다가… 흔적도 없이.",
						"english": "...It's already the third one. Went out at night... without a trace.",
						"japanese": "…もう三人目だよ。夜に出て行って…痕跡もなく。",
						"chinese": "……已经是第三个了。晚上出去后……杳无音讯。",
						"french": "...C'est déjà le troisième. Parti la nuit... sans laisser de trace.",
						"spanish": "...Ya es el tercero. Salió por la noche... sin dejar rastro.",
						"vietnamese": "...Đã là người thứ ba rồi. Đi ra ngoài vào ban đêm... không một dấu vết.",
						"thai": "...นี่มันคนที่สามแล้ว ออกไปตอนกลางคืน... แล้วก็ไร้ร่องรอย",
						"hindi": "...यह तीसरा है। रात में बाहर निकला... बिना किसी निशान के।"
					},
					"type": "speech",
					"speaker": "inka"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "빙탑 근처에 갔던 사람만 사라지는 건가?",
						"english": "Is it only people who went near the Ice Tower who disappear?",
						"japanese": "氷の塔の近くに行った人だけが消えるのか？",
						"chinese": "难道只有去过冰塔附近的人才会消失吗？",
						"french": "Est-ce que seules les personnes allées près de la Tour de glace disparaissent ?",
						"spanish": "¿Solo desaparece la gente que fue cerca de la Torre de Hielo?",
						"vietnamese": "Phải chăng chỉ những người đến gần Tháp Băng mới biến mất?",
						"thai": "มีแต่คนที่ไปใกล้หอคอยน้ำแข็งเท่านั้นที่หายไปเหรอ?",
						"hindi": "क्या सिर्फ़ वही लोग गायब हो रहे हैं जो बर्फ़ीले टावर के पास गए थे?"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						2,
						3
					],
					"type": "direction",
					"speaker": "inka"
				},
				{
					"content": {
						"korean": "맞아. 이상하지 않아? '신성한 빙탑'이라 불리던 곳인데…",
						"english": "Right. Isn't it strange? It was called the 'Sacred Ice Tower' but...",
						"japanese": "そうだ。おかしいと思わないか？「聖なる氷の塔」と呼ばれていた場所なのに…",
						"chinese": "对啊。不觉得奇怪吗？明明被称为“神圣冰塔”……",
						"french": "C'est ça. N'est-ce pas étrange ? C'était appelé la « Tour de glace sacrée » mais…",
						"spanish": "Así es. ¿No es extraño? Se le llamaba la «Torre de Hielo Sagrada» pero...",
						"vietnamese": "Đúng vậy. Không lạ sao? Nơi đó được gọi là 'Tháp Băng Thiêng Liêng' mà...",
						"thai": "ใช่ ไม่แปลกเหรอ? ที่ที่เคยถูกเรียกว่า 'หอคอยน้ำแข็งศักดิ์สิทธิ์' น่ะ...",
						"hindi": "हाँ। अजीब नहीं है? इसे 'पवित्र बर्फ़ीला टावर' कहा जाता था लेकिन..."
					},
					"type": "speech",
					"speaker": "inka",
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "신성하다고? 지금은 불길하기만 해.",
						"english": "Sacred? Now it's just ominous.",
						"japanese": "聖なるだと？今はただ不吉なだけだ。",
						"chinese": "神圣？现在只觉得不祥。",
						"french": "Sacrée ? Maintenant, c'est juste sinistre.",
						"spanish": "¿Sagrada? Ahora solo es ominosa.",
						"vietnamese": "Thiêng liêng ư? Giờ thì chỉ toàn điềm gở thôi.",
						"thai": "ศักดิ์สิทธิ์เหรอ? ตอนนี้มันมีแต่ลางร้ายเท่านั้นแหละ",
						"hindi": "पवित्र? अब तो बस अशुभ है।"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "밤에 빙탑 근처에서… 이상한 소리가 들린대. 직물 짜는 소리 같기도 하고.",
						"english": "They say strange sounds are heard near the Ice Spire at night... like the sound of weaving.",
						"japanese": "夜になると、氷の塔の近くで…変な音が聞こえるらしい。布を織る音のようにも…",
						"chinese": "听说晚上冰塔附近…会传来奇怪的声音。好像是织布的声音。",
						"french": "On dit que des bruits étranges se font entendre près de la Tour de Glace la nuit… comme un bruit de tissage.",
						"spanish": "Dicen que se escuchan ruidos extraños cerca de la Aguja de Hielo por la noche... como el sonido de un telar.",
						"vietnamese": "Người ta nói gần Tháp Băng vào ban đêm... có tiếng động lạ. Nghe như tiếng dệt vải.",
						"thai": "มีคนบอกว่าแถวหอคอยน้ำแข็งตอนกลางคืน...มีเสียงแปลกๆ ได้ยิน เหมือนเสียงทอผ้า",
						"hindi": "रात में आइस स्पायर के पास... अजीब आवाज़ें सुनाई देती हैं। जैसे बुनाई की आवाज़ हो।"
					},
					"speaker": "inka",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "직물? 설원에 누가?",
						"english": "Weaving? Who's in the snowy field?",
						"japanese": "布？雪原に誰が？",
						"chinese": "织布？雪原上谁在？",
						"french": "Tissage ? Qui serait dans le champ de neige ?",
						"spanish": "¿Un telar? ¿Quién en el campo nevado?",
						"vietnamese": "Dệt vải? Ai ở trên cánh đồng tuyết?",
						"thai": "ทอผ้า? ใครอยู่ในทุ่งหิมะ?",
						"hindi": "बुनाई? बर्फीले मैदान में कौन?"
					},
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						4,
						3
					],
					"type": "direction",
					"speaker": "inka",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"content": {
						"korean": "그 소리가 들리면… 다음 날 아침, 꼭 누가 사라져.",
						"english": "When that sound is heard... someone always disappears the next morning.",
						"japanese": "あの音が聞こえると…次の日の朝、必ず誰かが消えるんだ。",
						"chinese": "如果听到那声音…第二天早上，就一定有人消失。",
						"french": "Quand on entend ce bruit… le lendemain matin, quelqu'un disparaît toujours.",
						"spanish": "Cuando se escucha ese sonido... a la mañana siguiente, alguien siempre desaparece.",
						"vietnamese": "Mỗi khi nghe thấy âm thanh đó... sáng hôm sau, chắc chắn có người biến mất.",
						"thai": "ถ้าได้ยินเสียงนั้น...เช้าวันรุ่งขึ้น จะมีคนหายไปเสมอ",
						"hindi": "जब वह आवाज़ सुनाई देती है... तो अगली सुबह कोई न कोई ज़रूर गायब हो जाता है।"
					},
					"speaker": "inka",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "우연일까?",
						"english": "Is it a coincidence?",
						"japanese": "偶然だろうか？",
						"chinese": "是巧合吗？",
						"french": "Est-ce une coïncidence ?",
						"spanish": "¿Será una coincidencia?",
						"vietnamese": "Có phải là trùng hợp không?",
						"thai": "เป็นเรื่องบังเอิญหรือเปล่า?",
						"hindi": "क्या यह महज़ एक संयोग है?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "inka",
					"content": {
						"korean": "아니… 이건 우연이 아냐. 분명 뭔가 있어. 사람들을 꾀어내는… 뭔가.",
						"english": "No... it's not a coincidence. There's definitely something. Something luring people away...",
						"japanese": "いや…これは偶然じゃない。何かがあるんだ。人々を誘い出す…何かが。",
						"chinese": "不…这不是巧合。 분명 뭔가 있어。有某种东西…在引诱人们。",
						"french": "Non… ce n'est pas une coïncidence. Il y a clairement quelque chose. Quelque chose qui attire les gens…",
						"spanish": "No... no es una coincidencia. Definitivamente hay algo. Algo que atrae a la gente...",
						"vietnamese": "Không... đây không phải là trùng hợp. Chắc chắn có điều gì đó. Điều gì đó đang dụ dỗ mọi người...",
						"thai": "ไม่...นี่ไม่ใช่เรื่องบังเอิญ ต้องมีอะไรบางอย่างแน่ๆ บางอย่างที่ล่อลวงผู้คนไป...",
						"hindi": "नहीं... यह संयोग नहीं है। ज़रूर कुछ है। कुछ ऐसा जो लोगों को फुसला रहा है..."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"content": {
						"korean": "대체 빙탑에 뭐가 있는 거지?",
						"english": "What in the world is in the Ice Spire?",
						"japanese": "一体氷の塔には何があるんだ？",
						"chinese": "冰塔里到底有什么？",
						"french": "Mais qu'y a-t-il donc dans la Tour de Glace ?",
						"spanish": "¿Qué diablos hay en la Aguja de Hielo?",
						"vietnamese": "Rốt cuộc có gì trong Tháp Băng?",
						"thai": "ในหอคอยน้ำแข็งมีอะไรกันแน่?",
						"hindi": "आख़िरकार आइस स्पायर में क्या है?"
					},
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"speaker": "inka",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "사라진 사람들의 고통이 느껴져… 그들은 혼자였을 거야. 차갑고 어두운 곳에서…",
						"english": "I can feel the pain of those who disappeared... They must have been alone. In a cold, dark place...",
						"japanese": "消えた人々の苦痛が感じられる…彼らは一人だっただろう。冷たく暗い場所で…",
						"chinese": "我能感受到消失之人的痛苦…他们一定很孤独。在一个寒冷黑暗的地方…",
						"french": "Je ressens la douleur de ceux qui ont disparu… Ils devaient être seuls. Dans un endroit froid et sombre…",
						"spanish": "Siento el dolor de los que desaparecieron... Debieron estar solos. En un lugar frío y oscuro...",
						"vietnamese": "Tôi cảm nhận được nỗi đau của những người đã biến mất... Họ chắc hẳn đã cô đơn. Ở một nơi lạnh lẽo và tăm tối...",
						"thai": "ฉันรู้สึกถึงความเจ็บปวดของผู้ที่หายไป...พวกเขาคงอยู่คนเดียว ในที่ที่หนาวเย็นและมืดมิด...",
						"hindi": "मैं गायब हुए लोगों का दर्द महसूस कर सकता हूँ... वे अकेले रहे होंगे। एक ठंडी, अँधेरी जगह में..."
					},
					"speaker": "inka",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "우리가 막아야 해. 더 이상 희생자는 안 돼.",
						"english": "We have to stop it. No more victims.",
						"japanese": "私たちが止めなければならない。これ以上犠牲者は出せない。",
						"chinese": "我们必须阻止。不能再有牺牲者了。",
						"french": "Nous devons l'arrêter. Plus de victimes.",
						"spanish": "Tenemos que detenerlo. No más víctimas.",
						"vietnamese": "Chúng ta phải ngăn chặn nó. Không thể có thêm nạn nhân nào nữa.",
						"thai": "เราต้องหยุดมัน ไม่ให้มีเหยื่ออีกแล้ว",
						"hindi": "हमें इसे रोकना होगा। और कोई शिकार नहीं।"
					}
				},
				{
					"emotion": "base",
					"speaker": "inka",
					"type": "speech",
					"content": {
						"korean": "빙탑에 가까이 갈수록… 그 소리가 더 선명하게 들린대. 유혹하는 것처럼.",
						"english": "The closer you get to the Ice Spire... the clearer the sound becomes. As if luring you in.",
						"japanese": "氷の塔に近づくほど…あの音がより鮮明に聞こえるらしい。誘惑するように。",
						"chinese": "越靠近冰塔…那声音就越清晰。仿佛在引诱着。",
						"french": "Plus on s'approche de la Tour de Glace… plus le son devient clair. Comme s'il vous attirait.",
						"spanish": "Cuanto más te acercas a la Aguja de Hielo... más claro se escucha el sonido. Como si te estuviera atrayendo.",
						"vietnamese": "Càng đến gần Tháp Băng... âm thanh đó càng rõ ràng hơn. Như thể đang quyến rũ.",
						"thai": "ยิ่งเข้าใกล้หอคอยน้ำแข็ง...เสียงนั้นยิ่งชัดเจนขึ้น เหมือนกำลังล่อลวง",
						"hindi": "जितना तुम आइस स्पायर के करीब जाओगे... उतनी ही स्पष्ट वह आवाज़ सुनाई देगी। जैसे तुम्हें लुभा रही हो।"
					}
				},
				{
					"content": {
						"korean": "그 소리를 따라가야 진실을 알 수 있겠군.",
						"english": "We'll only know the truth by following that sound.",
						"japanese": "あの音を辿れば、真実がわかるだろう。",
						"chinese": "只有跟着那个声音，才能知道真相。",
						"french": "Ce n'est qu'en suivant ce son que nous connaîtrons la vérité.",
						"spanish": "Solo siguiendo ese sonido podremos saber la verdad.",
						"vietnamese": "Chúng ta sẽ chỉ biết sự thật khi đi theo âm thanh đó.",
						"thai": "เราจะรู้ความจริงได้ก็ต่อเมื่อตามเสียงนั้นไป",
						"hindi": "उस आवाज़ का पीछा करके ही हम सच्चाई जान पाएंगे।"
					},
					"speaker": "character_2",
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "정체 모를 괴물은 힘없이 쓰러졌다. 그러나 위버프로스트의 그림자는 여전히 남아 있었다.",
						"english": "The unknown monster fell powerlessly. Yet, the shadow of the Überfrost still lingered.",
						"japanese": "正体不明の怪物は力なく倒れた。しかし、ウィーバーフロストの影はまだ残っていた。",
						"chinese": "不明怪物无力地倒下了。然而，极寒之影依然残留。",
						"french": "Le monstre inconnu s'écroula sans force. Pourtant, l'ombre d'Überfrost persistait toujours.",
						"spanish": "El monstruo desconocido cayó sin fuerza. Sin embargo, la sombra de Überfrost aún permanecía.",
						"vietnamese": "Quái vật không rõ danh tính gục ngã không chút sức lực. Tuy nhiên, bóng tối của Überfrost vẫn còn đọng lại.",
						"thai": "สัตว์ประหลาดที่ไม่รู้จักล้มลงอย่างไร้เรี่ยวแรง. แต่เงาของ Überfrost ก็ยังคงอยู่.",
						"hindi": "अज्ञात राक्षस शक्तिहीन होकर गिर गया। फिर भी, Überfrost की छाया अभी भी बनी हुई थी।"
					}
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "크윽… 나는… 시작에 불과하다… 진짜… {random_boss}는…",
						"english": "Ugh… I am… merely the beginning… The real… {random_boss} is…",
						"japanese": "くっ…私は…始まりに過ぎない…本当の… {random_boss}は…",
						"chinese": "呃…我…只是个开始…真正的… {random_boss}在…",
						"french": "Ugh… Je ne suis… que le début… Le vrai… {random_boss} est…",
						"spanish": "Ugh… Yo… solo soy el principio… El verdadero… {random_boss} es…",
						"vietnamese": "Khụ… ta… chỉ là khởi đầu… {random_boss} thật sự thì…",
						"thai": "อึก… ข้า… เป็นแค่จุดเริ่มต้น… {random_boss} ตัวจริงนั้น…",
						"hindi": "उह… मैं… बस शुरुआत हूँ… असली… {random_boss} तो…"
					}
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "무슨 소리야? 진짜 {random_boss}라니!",
						"english": "What do you mean? The real {random_boss}!",
						"japanese": "どういうことだ？本当の {random_boss}だと！",
						"chinese": "什么意思？真正的 {random_boss}！",
						"french": "Que veux-tu dire ? Le vrai {random_boss} !",
						"spanish": "¡¿Qué quieres decir?! ¡¿El verdadero {random_boss}?!",
						"vietnamese": "Ý ngươi là gì? {random_boss} thật sự ư!",
						"thai": "หมายความว่ายังไง? {random_boss} ตัวจริง!",
						"hindi": "क्या मतलब? असली {random_boss}!"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"spot": [
						2,
						3
					],
					"type": "direction",
					"speaker": "inka",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"emotion": "sad",
					"speaker": "inka",
					"type": "speech",
					"content": {
						"korean": "그의 고통이… 느껴져. 그는 누군가에게 이용당하고 있었을지도 몰라.",
						"english": "His pain… I feel it. He might have been used by someone.",
						"japanese": "彼の苦痛が…感じられる。彼は誰かに利用されていたのかもしれない。",
						"chinese": "他的痛苦…我感受到了。他可能被某人利用了。",
						"french": "Sa douleur… Je la sens. Il a peut-être été utilisé par quelqu'un.",
						"spanish": "Su dolor… lo siento. Podría haber sido utilizado por alguien.",
						"vietnamese": "Nỗi đau của hắn… ta cảm nhận được. Hắn có thể đã bị ai đó lợi dụng.",
						"thai": "ความเจ็บปวดของเขา… ข้ารู้สึกได้. เขาอาจถูกใครบางคนใช้เป็นเครื่องมือ.",
						"hindi": "उसका दर्द… मुझे महसूस हो रहा है। हो सकता है उसे किसी ने इस्तेमाल किया हो।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "싸늘한 진실의 조각들이 설원 위에 흩뿌려졌다. 이 거대한 공포는 이제 시작일 뿐이었다.",
						"english": "Fragments of chilling truth scattered across the snowy plains. This colossal terror was only the beginning.",
						"japanese": "冷たい真実の断片が雪原に散らばった。この巨大な恐怖は、まだ始まりに過ぎなかった。",
						"chinese": "冰冷的真相碎片散落在雪原上。这场巨大的恐惧才刚刚开始。",
						"french": "Des fragments d'une vérité glaçante jonchaient la plaine enneigée. Cette terreur colossale n'était que le début.",
						"spanish": "Fragmentos de una verdad escalofriante se esparcieron por las llanuras nevadas. Este terror colosal era solo el principio.",
						"vietnamese": "Những mảnh sự thật lạnh lẽo rải rác khắp đồng bằng tuyết. Nỗi kinh hoàng khổng lồ này chỉ mới là khởi đầu.",
						"thai": "ชิ้นส่วนของความจริงอันเย็นชากระจัดกระจายไปทั่วทุ่งหิมะ. ความหวาดกลัวอันมหึมานี้เป็นเพียงจุดเริ่มต้นเท่านั้น.",
						"hindi": "ठंडी सच्चाई के टुकड़े बर्फीले मैदानों में बिखर गए। यह भीषण आतंक अभी तो बस शुरुआत थी।"
					},
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "마침내 빙탑의 심장부. 거대한 그림자가 모든 것을 얼리고 있었다.",
						"english": "Finally, the heart of the Ice Spire. A colossal shadow was freezing everything.",
						"japanese": "ついに氷の塔の心臓部。巨大な影がすべてを凍らせていた。",
						"chinese": "终于，冰塔的心脏。巨大的阴影冻结着一切。",
						"french": "Enfin, le cœur de la Tour de Glace. Une ombre colossale gelait tout.",
						"spanish": "Finalmente, el corazón de la Aguja de Hielo. Una sombra colosal lo congelaba todo.",
						"vietnamese": "Cuối cùng, trung tâm của Tháp Băng. Một cái bóng khổng lồ đang đóng băng mọi thứ.",
						"thai": "ในที่สุดก็ถึงใจกลางหอคอยน้ำแข็ง. เงาขนาดมหึมากำลังแช่แข็งทุกสิ่ง.",
						"hindi": "अंततः, बर्फ के शिखर का हृदय। एक विशाल छाया सब कुछ जमा रही थी।"
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"speaker": "inka",
					"spot": [
						3,
						3
					],
					"action": "enter",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "여기야… 그 소리의 근원이…",
						"english": "Here… the source of that sound…",
						"japanese": "ここだ…あの音の根源が…",
						"chinese": "就是这里…那声音的源头…",
						"french": "Ici… la source de ce son…",
						"spanish": "Aquí… el origen de ese sonido…",
						"vietnamese": "Đây rồi… nguồn gốc của âm thanh đó…",
						"thai": "ที่นี่… ต้นกำเนิดของเสียงนั้น…",
						"hindi": "यहीं है… उस आवाज़ का स्रोत…"
					},
					"type": "speech",
					"speaker": "inka",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 인간들. 나의 영역을 침범하다니.",
						"english": "Foolish humans. Daring to trespass upon my domain.",
						"japanese": "愚かな人間どもめ。私の領域を侵すとは。",
						"chinese": "愚蠢的人类。竟敢侵犯我的领域。",
						"french": "Humains insensés. Oser envahir mon domaine.",
						"spanish": "Humanos necios. ¿Cómo osáis invadir mi dominio?",
						"vietnamese": "Bọn người ngu xuẩn. Dám xâm phạm lãnh địa của ta.",
						"thai": "มนุษย์โง่เขลา. กล้าดียังไงมาบุกรุกอาณาเขตของข้า.",
						"hindi": "मूर्ख मनुष्य। मेरे क्षेत्र में घुसपैठ करने की हिम्मत कैसे हुई।"
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "네가 이 모든 일의 원흉이군!",
						"english": "So you're the mastermind behind all this!",
						"japanese": "お前がこの全ての元凶か！",
						"chinese": "原来你就是这一切的罪魁祸首！",
						"french": "C'est donc toi le responsable de tout ça !",
						"spanish": "¡Así que tú eres el artífice de todo esto!",
						"vietnamese": "Ngươi chính là kẻ chủ mưu của mọi chuyện này!",
						"thai": "แกคือต้นเหตุของเรื่องทั้งหมดนี่เอง!",
						"hindi": "तो तुम ही हो इन सबका मास्टरमाइंड!"
					}
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "진실은… 너희의 분노로는 알 수 없을 것이다. 얼어붙어라.",
						"english": "The truth… your wrath cannot grasp. Freeze.",
						"japanese": "真実は…お前たちの怒りでは知り得ないだろう。凍りつけ。",
						"chinese": "真相…凭你们的愤怒是无法得知的。冻结吧。",
						"french": "La vérité… votre colère ne peut l'atteindre. Gèle.",
						"spanish": "La verdad… vuestra ira no podrá comprenderla. Congelaos.",
						"vietnamese": "Sự thật… cơn thịnh nộ của các ngươi sẽ không thể biết được. Đóng băng đi.",
						"thai": "ความจริง… ความโกรธของพวกเจ้าไม่อาจหยั่งถึงได้. จงแข็งตายซะ.",
						"hindi": "सत्य… तुम्हारा क्रोध उसे समझ नहीं पाएगा। जम जाओ।"
					},
					"emotion": "base"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "거대한 그림자가 모든 것을 집어삼켰다.",
						"english": "A colossal shadow swallowed everything.",
						"japanese": "巨大な影がすべてを飲み込んだ。",
						"chinese": "巨大的影子吞噬了一切。",
						"french": "Une ombre colossale a tout englouti.",
						"spanish": "Una sombra colosal lo engulló todo.",
						"vietnamese": "Một bóng tối khổng lồ đã nuốt chửng mọi thứ.",
						"thai": "เงามหึมากลืนกินทุกสิ่ง",
						"hindi": "एक विशालकाय परछाई ने सब कुछ निगल लिया।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "하찮은 것들… 나의 거미줄에 영원히 갇히리라.",
						"english": "Insignificant beings... forever trapped in my web.",
						"japanese": "愚かな者たちよ… 永遠に私の網に囚われるがいい。",
						"chinese": "渺小的东西… 永远被困在我的网中。",
						"french": "Êtres insignifiants... à jamais piégés dans ma toile.",
						"spanish": "Seres insignificantes... atrapados para siempre en mi telaraña.",
						"vietnamese": "Những kẻ nhỏ bé... sẽ mãi mãi bị mắc kẹt trong mạng nhện của ta.",
						"thai": "สิ่งมีชีวิตไร้ค่า... จะถูกขังอยู่ในใยแมงมุมของข้าตลอดไป",
						"hindi": "तुच्छ प्राणी… हमेशा के लिए मेरे जाल में फँसे रहोगे।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "젠장… 아직 끝나지 않았어!",
						"english": "Damn it... it's not over yet!",
						"japanese": "くそ… まだ終わってない！",
						"chinese": "该死… 还没结束！",
						"french": "Bon sang... ce n'est pas encore fini !",
						"spanish": "¡Maldita sea... aún no ha terminado!",
						"vietnamese": "Chết tiệt... vẫn chưa kết thúc đâu!",
						"thai": "ให้ตายสิ... ยังไม่จบแค่นี้หรอก!",
						"hindi": "धिक्कार है… अभी खत्म नहीं हुआ है!"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "inka",
					"type": "direction",
					"spot": [
						4,
						3
					]
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "포기하지 마… 그들은… 아직 희망을 기다리고 있어.",
						"english": "Don't give up... they're still waiting for hope.",
						"japanese": "諦めるな… 彼らは… まだ希望を待っている。",
						"chinese": "别放弃… 他们… 还在等待希望。",
						"french": "N'abandonne pas... ils... attendent encore l'espoir.",
						"spanish": "No te rindas... ellos... aún esperan la esperanza.",
						"vietnamese": "Đừng bỏ cuộc... họ... vẫn đang chờ đợi hy vọng.",
						"thai": "อย่ายอมแพ้... พวกเขา... ยังคงรอคอยความหวังอยู่",
						"hindi": "हार मत मानो… वे… अभी भी उम्मीद का इंतज़ार कर रहे हैं।"
					},
					"type": "speech",
					"speaker": "inka"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"설원. 숨 막히는 추위 속, 마을 사람들이 사라졌다.",
			"밤마다 들려오는 기이한 '직물 짜는 소리'.",
			"그 소리는 사람들을 '신성한 빙탑'으로 이끌었다.",
			"그리고 그곳엔, 얼어붙은 진실이 기다리고 있었다."
		],
		"english": [
			"Snowfield. In the breathtaking cold, the villagers disappeared.",
			"A strange 'fabric weaving sound' heard every night.",
			"That sound led people to the 'Sacred Ice Tower'.",
			"And there, a frozen truth awaited."
		],
		"japanese": [
			"雪原。息をのむような寒さの中、村人たちは姿を消した。",
			"毎晩聞こえる奇妙な「織物を織る音」。",
			"その音は人々を「聖なる氷の塔」へと導いた。",
			"そしてそこには、凍りついた真実が待っていた。"
		],
		"chinese": [
			"雪原。在令人窒息的严寒中，村民们消失了。",
			"每晚都能听到奇怪的“织布声”。",
			"那个声音将人们引向了“神圣冰塔”。",
			"而在那里，冰封的真相正在等待。"
		],
		"french": [
			"Champ de neige. Dans le froid suffocant, les villageois ont disparu.",
			"Un étrange « bruit de tissage » se faisant entendre chaque nuit.",
			"Ce son menait les gens à la « Tour de glace sacrée ».",
			"Et là, une vérité gelée attendait."
		],
		"spanish": [
			"Campo de nieve. En el frío asfixiante, los aldeanos desaparecieron.",
			"Un extraño «sonido de tejido de tela» se escuchaba todas las noches.",
			"Ese sonido llevó a la gente a la «Torre de Hielo Sagrada».",
			"Y allí, una verdad congelada esperaba."
		],
		"vietnamese": [
			"Cánh đồng tuyết. Trong cái lạnh cắt da cắt thịt, dân làng đã biến mất.",
			"Một \"tiếng dệt vải\" kỳ lạ vang lên mỗi đêm.",
			"Âm thanh đó đã dẫn mọi người đến 'Tháp Băng Thiêng Liêng'.",
			"Và ở đó, một sự thật đóng băng đang chờ đợi."
		],
		"thai": [
			"ทุ่งหิมะ ในความหนาวเหน็บที่กัดกิน ร่างของชาวบ้านก็หายไป",
			"'เสียงทอผ้า' ประหลาดที่ได้ยินทุกคืน",
			"เสียงนั้นนำพาผู้คนไปยัง 'หอคอยน้ำแข็งศักดิ์สิทธิ์'",
			"และที่นั่น ความจริงที่เยือกแข็งกำลังรอคอยอยู่"
		],
		"hindi": [
			"बर्फीला मैदान। साँस रोक देने वाली ठंड में, गाँव वाले गायब हो गए।",
			"हर रात सुनाई देने वाली एक अजीब 'कपड़ा बुनने की आवाज़'।",
			"वह आवाज़ लोगों को 'पवित्र बर्फ़ीले टावर' की ओर ले गई।",
			"और वहाँ, एक जमी हुई सच्चाई इंतज़ार कर रही थी।"
		]
	}
} as const;
