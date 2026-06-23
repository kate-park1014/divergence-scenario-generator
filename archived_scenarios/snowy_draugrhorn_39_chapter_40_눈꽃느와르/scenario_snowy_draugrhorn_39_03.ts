export const scenario_snowy_draugrhorn_39_03 = {
	"scenario_id": "snowy_draugrhorn_39_03",
	"order": 3,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"borealis": {
			"id": "mon_8dc13eb3-9244-4413-a74b-ee25681ceab5",
			"name": {
				"korean": "보레아리스",
				"english": "Borealis",
				"japanese": "ボレアリス",
				"chinese": "博瑞利斯",
				"french": "Boréalis",
				"spanish": "Borealis",
				"vietnamese": "Borealis",
				"thai": "โบเรียลิส",
				"hindi": "बोरियालिस"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/bd557ed6-ee94-4ed6-7da8-6f9770585b00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/2a79793b-650a-478a-00e2-38f8c8730a00/public"
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
						"korean": "환영의 드라우그혼은 더 깊은 곳으로 이끌었다.",
						"english": "The illusory Draughhon led deeper.",
						"japanese": "幻影のドラウグホンは、より深い場所へと導いた。",
						"chinese": "幻象中的德拉格霍恩引向更深处。",
						"french": "L'illusion de Draughhon menait plus profondément.",
						"spanish": "El Draughhon ilusorio conducía más profundo.",
						"vietnamese": "Draughhon ảo ảnh dẫn sâu hơn.",
						"thai": "แดร็กฮอร์นลวงตาพาไปลึกกว่าเดิม",
						"hindi": "मायावी ड्रौगहॉन और गहरे में ले गया।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "정말 승리의 길을 보여주는 걸까?",
						"english": "Is it really showing the path to victory?",
						"japanese": "本当に勝利への道を示しているのだろうか？",
						"chinese": "它真的在展示胜利之路吗？",
						"french": "Montre-t-il vraiment le chemin de la victoire ?",
						"spanish": "¿De verdad muestra el camino a la victoria?",
						"vietnamese": "Liệu nó có thực sự chỉ ra con đường chiến thắng không?",
						"thai": "มันกำลังแสดงเส้นทางสู่ชัยชนะจริงๆ เหรอ?",
						"hindi": "क्या यह वाकई विजय का मार्ग दिखा रहा है?"
					},
					"emotion": "base"
				},
				{
					"spot": [
						3,
						2
					],
					"type": "direction",
					"speaker": "borealis",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"emotion": "sad",
					"speaker": "borealis",
					"type": "speech",
					"content": {
						"korean": "승리는 환상이야. 이곳에 진짜 영광은 없어.",
						"english": "Victory is an illusion. There's no true glory here.",
						"japanese": "勝利は幻想だ。ここに真の栄光はない。",
						"chinese": "胜利是幻象。这里没有真正的荣耀。",
						"french": "La victoire est une illusion. Il n'y a pas de vraie gloire ici.",
						"spanish": "La victoria es una ilusión. Aquí no hay gloria verdadera.",
						"vietnamese": "Chiến thắng là ảo ảnh. Không có vinh quang thực sự ở đây.",
						"thai": "ชัยชนะเป็นภาพลวงตา ที่นี่ไม่มีเกียรติที่แท้จริง",
						"hindi": "विजय एक भ्रम है। यहाँ कोई वास्तविक गौरव नहीं है।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "그래도… 우리는 희망이 필요해.",
						"english": "Still... we need hope.",
						"japanese": "それでも…我々には希望が必要だ。",
						"chinese": "不过……我们需要希望。",
						"french": "Pourtant… nous avons besoin d'espoir.",
						"spanish": "Aun así… necesitamos esperanza.",
						"vietnamese": "Dù vậy… chúng ta cần hy vọng.",
						"thai": "ถึงอย่างนั้น... เราก็ยังต้องการความหวัง",
						"hindi": "फिर भी... हमें आशा की आवश्यकता है।"
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
						2
					],
					"type": "direction",
					"speaker": "borealis",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"speaker": "borealis",
					"type": "speech",
					"content": {
						"korean": "저 환상들은 달콤한 거짓말이야. 현실을 직시해야 해.",
						"english": "Those illusions are sweet lies. We must face reality.",
						"japanese": "あの幻想は甘い嘘だ。現実を直視すべきだ。",
						"chinese": "那些幻象是甜蜜的谎言。我们必须面对现实。",
						"french": "Ces illusions sont de doux mensonges. Nous devons faire face à la réalité.",
						"spanish": "Esas ilusiones son dulces mentiras. Debemos enfrentar la realidad.",
						"vietnamese": "Những ảo ảnh đó là những lời dối trá ngọt ngào. Chúng ta phải đối mặt với thực tế.",
						"thai": "ภาพลวงตาเหล่านั้นคือคำโกหกอันหอมหวาน เราต้องเผชิญหน้ากับความจริง",
						"hindi": "वे भ्रम मीठे झूठ हैं। हमें वास्तविकता का सामना करना होगा।"
					},
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"speaker": "character_1",
					"type": "speech",
					"content": {
						"korean": "하지만 저 안에 뭔가가 있을지도 몰라.",
						"english": "But there might be something in there.",
						"japanese": "しかし、あの奥に何かがあるかもしれない。",
						"chinese": "但里面可能有什么。",
						"french": "Mais il pourrait y avoir quelque chose là-dedans.",
						"spanish": "Pero podría haber algo ahí dentro.",
						"vietnamese": "Nhưng có thể có thứ gì đó ở trong đó.",
						"thai": "แต่อาจมีบางอย่างอยู่ข้างใน",
						"hindi": "लेकिन शायद वहाँ कुछ हो।"
					}
				},
				{
					"speaker": "borealis",
					"type": "speech",
					"content": {
						"korean": "기만뿐이야. 여기 오면 모두 허무에 갇힌다고.",
						"english": "It's all deceit. Everyone who comes here is trapped in futility.",
						"japanese": "欺瞞だけだ。ここに来れば皆、虚無に囚われる。",
						"chinese": "全是欺骗。来这里的人都会陷入虚无。",
						"french": "Ce n'est que tromperie. Tous ceux qui viennent ici sont piégés dans le néant.",
						"spanish": "Solo hay engaño. Todos los que vienen aquí quedan atrapados en la nada.",
						"vietnamese": "Chỉ toàn lừa dối. Ai đến đây cũng bị giam cầm trong hư vô.",
						"thai": "มีแต่การหลอกลวง. ทุกคนที่มาที่นี่จะติดอยู่ในความว่างเปล่า.",
						"hindi": "यह सब छल है। जो भी यहाँ आता है, व्यर्थता में फँस जाता है."
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "우리는 진실을 찾아야 해. 설령 그게 절망이라도.",
						"english": "We must find the truth. Even if it's despair.",
						"japanese": "我々は真実を見つけなければならない。それが絶望であっても。",
						"chinese": "我们必须找到真相。即使那是绝望。",
						"french": "Nous devons trouver la vérité. Même si c'est le désespoir.",
						"spanish": "Debemos encontrar la verdad. Incluso si es la desesperación.",
						"vietnamese": "Chúng ta phải tìm ra sự thật. Dù đó là tuyệt vọng.",
						"thai": "เราต้องค้นหาความจริง. แม้ว่ามันจะเป็นความสิ้นหวังก็ตาม.",
						"hindi": "हमें सच खोजना होगा। भले ही वह निराशा ही क्यों न हो."
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						4,
						2
					],
					"type": "direction",
					"speaker": "borealis",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"speaker": "character_2",
					"type": "speech",
					"content": {
						"korean": "밤마다 들리는 저 소리… 함성 같기도 하고, 절규 같기도 해.",
						"english": "That sound every night... It's like a roar, or a scream.",
						"japanese": "毎晩聞こえるあの音… 叫びのようでもあり、絶叫のようでもある。",
						"chinese": "每晚听到的声音… 像是呐喊，又像是尖叫。",
						"french": "Ce son chaque nuit... C'est comme un rugissement, ou un cri.",
						"spanish": "Ese sonido cada noche... Es como un rugido, o un grito.",
						"vietnamese": "Tiếng động mỗi đêm... Nó như tiếng gầm, hoặc tiếng thét.",
						"thai": "เสียงนั้นทุกคืน... เหมือนเสียงคำราม หรือเสียงกรีดร้อง.",
						"hindi": "वह आवाज़ हर रात... गर्जना जैसी लगती है, या चीख जैसी."
					},
					"emotion": "sad"
				},
				{
					"speaker": "borealis",
					"type": "speech",
					"content": {
						"korean": "그건 망자의 메아리야. 환상이 깨지려는 소리.",
						"english": "It's the echo of the dead. The sound of an illusion breaking.",
						"japanese": "それは亡者の木霊だ。幻想が壊れようとしている音。",
						"chinese": "那是亡者的回响。幻象即将破灭的声音。",
						"french": "C'est l'écho des morts. Le son d'une illusion qui se brise.",
						"spanish": "Es el eco de los muertos. El sonido de una ilusión que se rompe.",
						"vietnamese": "Đó là tiếng vọng của người chết. Âm thanh của ảo ảnh đang vỡ tan.",
						"thai": "มันคือเสียงสะท้อนของคนตาย. เสียงแห่งภาพลวงตาที่กำลังจะแตกสลาย.",
						"hindi": "यह मृतकों की प्रतिध्वनि है। एक भ्रम के टूटने की आवाज़."
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "점점 더 가까워지고 있어.",
						"english": "It's getting closer.",
						"japanese": "だんだん近づいている。",
						"chinese": "越来越近了。",
						"french": "Ça se rapproche.",
						"spanish": "Se está acercando.",
						"vietnamese": "Nó đang đến gần hơn.",
						"thai": "มันใกล้เข้ามาแล้ว.",
						"hindi": "यह और करीब आ रहा है."
					}
				},
				{
					"emotion": "angry",
					"speaker": "borealis",
					"type": "speech",
					"content": {
						"korean": "정신 차려. 그들은 너희를 유혹하고 있어.",
						"english": "Snap out of it. They're luring you.",
						"japanese": "気をしっかり持て。彼らは君たちを誘惑している。",
						"chinese": "清醒点。他们正在引诱你们。",
						"french": "Reprends-toi. Ils vous tentent.",
						"spanish": "Espabila. Te están tentando.",
						"vietnamese": "Tỉnh táo lại đi. Chúng đang dụ dỗ các ngươi.",
						"thai": "มีสติไว้. พวกเขากำลังล่อลวงเจ้า.",
						"hindi": "होश में आओ। वे तुम्हें फुसला रहे हैं."
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"type": "direction",
					"speaker": "borealis",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"emotion": "sad",
					"speaker": "borealis",
					"type": "speech",
					"content": {
						"korean": "더 이상 물러설 곳은 없어. 이곳은 끝없는 나락이야.",
						"english": "There's no turning back. This is an endless abyss.",
						"japanese": "もう後戻りはできない。ここは果てしない奈落だ。",
						"chinese": "已无退路。这里是无尽的深渊。",
						"french": "Il n'y a plus de retour. C'est un abîme sans fin.",
						"spanish": "No hay vuelta atrás. Esto es un abismo sin fin.",
						"vietnamese": "Không còn đường lùi. Nơi đây là vực thẳm vô tận.",
						"thai": "ไม่มีที่ให้ถอยอีกแล้ว. ที่นี่คือหุบเหวที่ไม่มีที่สิ้นสุด.",
						"hindi": "पीछे हटने की कोई जगह नहीं है। यह एक अंतहीन पाताल है."
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "우리는 끝까지 갈 거야. 진실이 무엇이든.",
						"english": "We'll go all the way. Whatever the truth may be.",
						"japanese": "我々は最後まで行く。真実が何であれ。",
						"chinese": "我们会走到最后。无论真相是什么。",
						"french": "Nous irons jusqu'au bout. Quelle que soit la vérité.",
						"spanish": "Iremos hasta el final. Sea cual sea la verdad.",
						"vietnamese": "Chúng ta sẽ đi đến cùng. Dù sự thật là gì.",
						"thai": "เราจะไปให้สุด. ไม่ว่าความจริงจะเป็นอะไรก็ตาม.",
						"hindi": "हम अंत तक जाएंगे। सच्चाई जो भी हो."
					}
				},
				{
					"speaker": "borealis",
					"type": "speech",
					"content": {
						"korean": "진실은… 너희를 구원하지 못할 거야.",
						"english": "The truth... won't save you.",
						"japanese": "真実は… 君たちを救わないだろう。",
						"chinese": "真相… 无法拯救你们。",
						"french": "La vérité... ne vous sauvera pas.",
						"spanish": "La verdad... no os salvará.",
						"vietnamese": "Sự thật... sẽ không cứu được các ngươi.",
						"thai": "ความจริง... จะไม่ช่วยเจ้าได้.",
						"hindi": "सच... तुम्हें बचा नहीं पाएगा."
					},
					"emotion": "sad"
				}
			]
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "드라우그혼의 심장부. 거대한 그림자가 길을 막았다.",
						"english": "Heart of Draughorn. A colossal shadow blocked the path.",
						"japanese": "ドラウグホルンの心臓部。巨大な影が道を阻んだ。",
						"chinese": "德劳格霍恩之心。一个巨大的影子挡住了去路。",
						"french": "Cœur de Draughorn. Une ombre colossale bloquait le chemin.",
						"spanish": "Corazón de Draughorn. Una sombra colosal bloqueaba el camino.",
						"vietnamese": "Trái tim của Draughorn. Một cái bóng khổng lồ đã chặn đường.",
						"thai": "ใจกลางแห่งดราวก์ฮอร์น. เงาขนาดมหึมาขวางทาง.",
						"hindi": "ड्रॉघॉर्न का हृदय। एक विशालकाय छाया ने रास्ता रोक दिया."
					}
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "결국 여기까지 왔군. …허무를 마주할 준비는 되었나?",
						"english": "So you've come this far. ...Are you ready to face the Void?",
						"japanese": "結局、ここまで来たか。…虚無と向き合う準備はできたか？",
						"chinese": "终究还是走到这一步了。…准备好面对虚无了吗？",
						"french": "Ainsi, vous êtes arrivé jusqu'ici. ...Êtes-vous prêt à affronter le Néant ?",
						"spanish": "Así que has llegado hasta aquí. ...¿Estás listo para enfrentar el Vacío?",
						"vietnamese": "Cuối cùng ngươi cũng đến đây. ...Ngươi đã sẵn sàng đối mặt với Hư Vô chưa?",
						"thai": "ในที่สุดเจ้าก็มาถึงที่นี่ ...พร้อมที่จะเผชิญหน้ากับความว่างเปล่าแล้วหรือยัง?",
						"hindi": "तो तुम यहाँ तक आ गए। ...क्या तुम शून्यता का सामना करने के लिए तैयार हो?"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "우리가 찾던 것이 너였나?",
						"english": "Were you what we were looking for?",
						"japanese": "私たちが探していたのは、お前だったのか？",
						"chinese": "你就是我们一直在寻找的吗？",
						"french": "Étiez-vous ce que nous cherchions ?",
						"spanish": "¿Eras tú lo que buscábamos?",
						"vietnamese": "Ngươi có phải là thứ chúng ta tìm kiếm không?",
						"thai": "เจ้าคือสิ่งที่เราตามหาหรือเปล่า?",
						"hindi": "क्या तुम वही थे जिसकी हम तलाश कर रहे थे?"
					},
					"emotion": "angry"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "borealis",
					"spot": [
						1,
						2
					]
				},
				{
					"emotion": "angry",
					"speaker": "borealis",
					"type": "speech",
					"content": {
						"korean": "{random_boss}의 속삭임에 속지 마. 이 모든 것은 환상일 뿐이야!",
						"english": "Don't be fooled by {random_boss}'s whispers. This is all just an illusion!",
						"japanese": "{random_boss}のささやきに惑わされるな。これらはすべて幻影に過ぎない！",
						"chinese": "不要被{random_boss}的低语所欺骗。这一切都只是幻象！",
						"french": "Ne te laisse pas berner par les murmures de {random_boss}. Tout cela n'est qu'une illusion !",
						"spanish": "No te dejes engañar por los susurros de {random_boss}. ¡Todo esto es solo una ilusión!",
						"vietnamese": "Đừng để bị những lời thì thầm của {random_boss} lừa dối. Tất cả chỉ là ảo ảnh!",
						"thai": "อย่าหลงกลกระซิบของ {random_boss} นี่เป็นเพียงภาพลวงตาเท่านั้น!",
						"hindi": "{random_boss} की फुसफुसाहट से मूर्ख मत बनो। यह सब सिर्फ एक भ्रम है!"
					}
				},
				{
					"duration_ms": 400,
					"action": "exit",
					"type": "direction",
					"speaker": "borealis",
					"direction": "down"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "진실은 중요하지 않다. 중요한 건 네가 무엇을 믿느냐지.",
						"english": "Truth doesn't matter. What matters is what you believe.",
						"japanese": "真実は重要ではない。重要なのは、お前が何を信じるかだ。",
						"chinese": "真相并不重要。重要的是你相信什么。",
						"french": "La vérité n'a pas d'importance. Ce qui compte, c'est ce que tu crois.",
						"spanish": "La verdad no importa. Lo que importa es lo que crees.",
						"vietnamese": "Sự thật không quan trọng. Quan trọng là ngươi tin vào điều gì.",
						"thai": "ความจริงไม่สำคัญ สิ่งสำคัญคือสิ่งที่คุณเชื่อ",
						"hindi": "सच मायने नहीं रखता। मायने यह रखता है कि तुम किस पर विश्वास करते हो।"
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "우리는 더 이상 속지 않아.",
						"english": "We won't be fooled anymore.",
						"japanese": "私たちはもう騙されない。",
						"chinese": "我们不会再被骗了。",
						"french": "Nous ne serons plus dupés.",
						"spanish": "Ya no nos engañarán.",
						"vietnamese": "Chúng ta sẽ không bị lừa nữa.",
						"thai": "เราจะไม่ถูกหลอกอีกต่อไป",
						"hindi": "हमें अब और मूर्ख नहीं बनाया जाएगा।"
					}
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "결국, 너희도 과거의 영광에 갇힐 뿐.",
						"english": "In the end, you too will be trapped in past glory.",
						"japanese": "結局、お前たちも過去の栄光に囚われるだけだ。",
						"chinese": "最终，你们也只会困于昔日的荣耀。",
						"french": "En fin de compte, vous aussi serez piégés dans la gloire passée.",
						"spanish": "Al final, vosotros también quedaréis atrapados en la gloria pasada.",
						"vietnamese": "Cuối cùng, các ngươi cũng sẽ bị mắc kẹt trong vinh quang quá khứ.",
						"thai": "ในที่สุด พวกเจ้าก็จะติดอยู่ในความรุ่งโรจน์ในอดีต",
						"hindi": "अंत में, तुम भी पिछली महिमा में फंस जाओगे।"
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "아직 끝나지 않았어… 우리는 포기하지 않아.",
						"english": "It's not over yet... We won't give up.",
						"japanese": "まだ終わっていない…私たちは諦めない。",
						"chinese": "还没有结束…我们不会放弃。",
						"french": "Ce n'est pas encore fini... Nous n'abandonnerons pas.",
						"spanish": "Todavía no ha terminado... No nos rendiremos.",
						"vietnamese": "Chưa kết thúc… Chúng ta sẽ không bỏ cuộc.",
						"thai": "มันยังไม่จบ... เราจะไม่ยอมแพ้",
						"hindi": "अभी खत्म नहीं हुआ है... हम हार नहीं मानेंगे।"
					}
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "나를 쓰러뜨려도… 허무는 사라지지 않아. 너희 안에 있으니까.",
						"english": "Even if you defeat me... the Void won't disappear. It's inside you.",
						"japanese": "私を倒しても…虚無は消えない。お前たちの中にいるからだ。",
						"chinese": "即使你打败了我…虚无也不会消失。它就在你们的心中。",
						"french": "Même si vous me vainquez... le Néant ne disparaîtra pas. Il est en vous.",
						"spanish": "Incluso si me derrotas... el Vacío no desaparecerá. Está dentro de vosotros.",
						"vietnamese": "Ngay cả khi ngươi đánh bại ta… Hư Vô sẽ không biến mất. Nó ở bên trong các ngươi.",
						"thai": "แม้ว่าเจ้าจะเอาชนะข้าได้... ความว่างเปล่าก็จะไม่หายไป มันอยู่ในตัวพวกเจ้า",
						"hindi": "अगर तुम मुझे हरा भी दो... तो भी शून्यता गायब नहीं होगी। वह तुम्हारे अंदर है।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…끝난 게 아니었어.",
						"english": "...It wasn't over.",
						"japanese": "…終わっていなかった。",
						"chinese": "…还没有结束。",
						"french": "...Ce n'était pas fini.",
						"spanish": "...No había terminado.",
						"vietnamese": "...Nó vẫn chưa kết thúc.",
						"thai": "...มันยังไม่จบ",
						"hindi": "...यह खत्म नहीं हुआ था।"
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "환영의 그림자는 짙어졌다. 승리했으나, 공허함만 남았다.",
						"english": "The shadow of illusion deepened. Though victorious, only emptiness remained.",
						"japanese": "幻影の影は濃くなった。勝利したが、残ったのは虚無だけだった。",
						"chinese": "幻影的阴影加深了。虽然胜利了，却只剩下空虚。",
						"french": "L'ombre de l'illusion s'épaissit. Bien que victorieux, seul le vide demeurait.",
						"spanish": "La sombra de la ilusión se profundizó. Aunque victoriosos, solo quedó el vacío.",
						"vietnamese": "Bóng tối ảo ảnh càng dày đặc. Mặc dù đã chiến thắng, nhưng chỉ còn lại sự trống rỗng.",
						"thai": "เงาของภาพลวงตาลึกขึ้น แม้จะได้รับชัยชนะ แต่ก็เหลือเพียงความว่างเปล่า",
						"hindi": "भ्रम की छाया गहरी हो गई। विजयी होने के बावजूद, केवल खालीपन ही बचा।"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"드라우그혼의 환영은 점점 더 선명해졌다.",
			"보여주는 모든 것이 과거의 영광이었다.",
			"그러나, 현실주의자는 속삭였다. 이것은 함정이라고.",
			"밤마다 들려오는 절규가, 그 경고를 뒷받침했다."
		],
		"english": [
			"Draughhon's illusion grew clearer.",
			"Everything it showed was past glory.",
			"But the realist whispered, \"This is a trap.\"",
			"The screams every night supported that warning."
		],
		"japanese": [
			"ドラウグホンの幻影は次第に鮮明になった。",
			"示される全ては過去の栄光だった。",
			"しかし、現実主義者は囁いた。「これは罠だ」と。",
			"毎晩聞こえる絶叫が、その警告を裏付けた。"
		],
		"chinese": [
			"德拉格霍恩的幻象变得越来越清晰。",
			"它所展示的一切都是昔日的辉煌。",
			"然而，现实主义者低语道：“这是一个陷阱。”",
			"每晚传来的尖叫声，都证实了那个警告。"
		],
		"french": [
			"L'illusion de Draughhon devenait de plus en plus nette.",
			"Tout ce qu'il montrait était une gloire passée.",
			"Pourtant, le réaliste murmura : « C'est un piège. »",
			"Les cris chaque nuit renforçaient cet avertissement."
		],
		"spanish": [
			"La ilusión de Draughhon se hacía cada vez más clara.",
			"Todo lo que mostraba era gloria pasada.",
			"Sin embargo, el realista susurró: \"Esto es una trampa.\"",
			"Los gritos cada noche respaldaban esa advertencia."
		],
		"vietnamese": [
			"Ảo ảnh của Draughhon ngày càng rõ nét.",
			"Mọi thứ nó thể hiện đều là vinh quang quá khứ.",
			"Nhưng người thực tế thì thầm, \"Đây là một cái bẫy.\"",
			"Tiếng thét mỗi đêm củng cố lời cảnh báo đó."
		],
		"thai": [
			"ภาพลวงตาของแดร็กฮอร์นชัดเจนขึ้นเรื่อยๆ",
			"ทุกสิ่งที่มันแสดงคือความรุ่งโรจน์ในอดีต",
			"แต่สัจนิยมกระซิบว่า \"นี่คือกับดัก\"",
			"เสียงกรีดร้องทุกคืนยืนยันคำเตือนนั้น"
		],
		"hindi": [
			"ड्रौगहॉन का भ्रम और स्पष्ट होता गया।",
			"जो कुछ भी उसने दिखाया, वह अतीत का गौरव था।",
			"परन्तु, यथार्थवादी ने फुसफुसाया, \"यह एक जाल है।\"",
			"हर रात सुनाई देने वाली चीखें, उस चेतावनी का समर्थन करती थीं।"
		]
	}
} as const;
