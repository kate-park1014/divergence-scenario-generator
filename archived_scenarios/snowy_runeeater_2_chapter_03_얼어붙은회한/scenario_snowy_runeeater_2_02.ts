export const scenario_snowy_runeeater_2_02 = {
	"scenario_id": "snowy_runeeater_2_02",
	"order": 2,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"finn": {
			"id": "mon_3e3930d2-c2d3-4ad0-9818-26d259edac77",
			"name": {
				"korean": "핀",
				"english": "Finn",
				"japanese": "フィン",
				"chinese": "芬恩",
				"french": "Finn",
				"spanish": "Finn",
				"vietnamese": "Finn",
				"thai": "ฟินน์",
				"hindi": "फिन"
			},
			"description": "",
			"face_image_url": "",
			"battle_sprite_url": ""
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"얼음 동굴의 입구. 지도는 방향을 잃었다.",
			"눈앞의 길은 보였다 사라지기를 반복한다.",
			"대체 무엇이 진짜인가. 서로의 기억마저 뒤틀리기 시작했다.",
			"환영의 속삭임이, 진실을 삼킨다."
		],
		"english": [
			"Entrance to the ice cave. The map has lost its way.",
			"The path before us appears and vanishes repeatedly.",
			"What is real? Even our memories began to twist.",
			"Whispers of illusion swallow the truth."
		],
		"japanese": [
			"氷の洞窟の入り口。地図は方角を見失った。",
			"目の前の道は、現れては消えるを繰り返す。",
			"一体何が本当なのか。お互いの記憶すら歪み始めた。",
			"幻影の囁きが、真実を飲み込む。"
		],
		"chinese": [
			"冰洞入口。地图失去了方向。",
			"眼前的路反复出现又消失。",
			"究竟什么是真的。甚至彼此的记忆都开始扭曲。",
			"幻影的低语，吞噬着真相。"
		],
		"french": [
			"Entrée de la caverne de glace. La carte a perdu son chemin.",
			"Le chemin devant nous apparaît et disparaît sans cesse.",
			"Qu'est-ce qui est réel ? Même nos souvenirs ont commencé à se déformer.",
			"Les murmures de l'illusion engloutissent la vérité."
		],
		"spanish": [
			"Entrada a la cueva de hielo. El mapa ha perdido su rumbo.",
			"El camino ante nosotros aparece y desaparece repetidamente.",
			"¿Qué es real? Incluso nuestros recuerdos empezaron a distorsionarse.",
			"Los susurros de la ilusión devoran la verdad."
		],
		"vietnamese": [
			"Lối vào hang băng. Bản đồ đã lạc lối.",
			"Con đường trước mắt cứ hiện ra rồi lại biến mất.",
			"Rốt cuộc cái gì là thật. Ký ức của nhau cũng bắt đầu méo mó.",
			"Lời thì thầm của ảo ảnh nuốt chửng sự thật."
		],
		"thai": [
			"ทางเข้าถ้ำน้ำแข็ง แผนที่หลงทางแล้ว",
			"เส้นทางตรงหน้าปรากฏและหายไปซ้ำๆ",
			"อะไรคือความจริงกันแน่ แม้แต่ความทรงจำของกันและกันก็เริ่มบิดเบี้ยว",
			"เสียงกระซิบของภาพลวงตา กลืนกินความจริง"
		],
		"hindi": [
			"बर्फीली गुफा का प्रवेश द्वार। नक्शा रास्ता भटक गया है।",
			"सामने का रास्ता बार-बार दिखाई देता और गायब हो जाता है।",
			"आखिर सच क्या है? हमारी यादें भी मुड़ने लगी हैं।",
			"भ्रम की फुसफुसाहट, सच्चाई को निगल जाती है।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "깊은 얼음 동굴. 지도는 길을 잃었다.",
						"english": "Deep inside the ice cave. The map has lost its way.",
						"japanese": "深い氷の洞窟。地図は道を見失った。",
						"chinese": "冰洞深处。地图迷失了方向。",
						"french": "Au cœur de la caverne de glace. La carte a perdu son chemin.",
						"spanish": "En lo profundo de la cueva de hielo. El mapa ha perdido su rumbo.",
						"vietnamese": "Sâu trong hang băng. Bản đồ đã lạc lối.",
						"thai": "ลึกเข้าไปในถ้ำน้ำแข็ง แผนที่หลงทางแล้ว",
						"hindi": "गहरी बर्फीली गुफा। नक्शा रास्ता भटक गया है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "이상해. 분명 이 길이었는데.",
						"english": "Strange. This was definitely the path.",
						"japanese": "おかしい。確かにこの道だったはずなのに。",
						"chinese": "奇怪。明明是这条路。",
						"french": "Étrange. C'était bien ce chemin, pourtant.",
						"spanish": "Qué extraño. Estaba segura de que era este camino.",
						"vietnamese": "Lạ thật. Rõ ràng là đường này mà.",
						"thai": "แปลกนะ นี่มันทางนี้แน่ๆ",
						"hindi": "अजीब है। पक्का यही रास्ता था।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "direction",
					"speaker": "finn",
					"action": "enter",
					"spot": [
						3,
						3
					],
					"duration_ms": 500
				},
				{
					"speaker": "finn",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "지도가 자꾸 바뀌는 것 같지 않아? 방금 본 길이 아닌데.",
						"english": "Doesn't the map seem to keep changing? This isn't the path I just saw.",
						"japanese": "地図がコロコロ変わる気がしない？さっき見た道じゃないのに。",
						"chinese": "你们不觉得地图一直在变吗？这不是我刚才看到的路。",
						"french": "La carte ne vous semble pas changer constamment ? Ce n'est pas le chemin que je viens de voir.",
						"spanish": "¿No les parece que el mapa no para de cambiar? No es el camino que acabamos de ver.",
						"vietnamese": "Mọi người không thấy bản đồ cứ thay đổi sao? Không phải đường vừa nãy mình thấy.",
						"thai": "ไม่รู้สึกว่าแผนที่มันเปลี่ยนไปเรื่อยๆ เหรอ? ไม่ใช่ทางที่เพิ่งเห็นเมื่อกี้เลย",
						"hindi": "क्या तुम्हें नहीं लगता कि नक्शा बार-बार बदल रहा है? यह वह रास्ता नहीं है जो मैंने अभी देखा था।"
					}
				},
				{
					"speaker": "character_1",
					"emotion": "base",
					"content": {
						"korean": "착각 아니야? 다들 피곤해서 그런가.",
						"english": "Is it just an illusion? Perhaps we're all just tired.",
						"japanese": "錯覚じゃないの？みんな疲れてるからかな。",
						"chinese": "不是错觉吧？是不是大家都太累了？",
						"french": "N'est-ce qu'une illusion ? Est-ce à cause de la fatigue ?",
						"spanish": "¿No será una ilusión? ¿Será que estamos todos cansados?",
						"vietnamese": "Không phải là ảo giác sao? Hay là mọi người đều mệt mỏi?",
						"thai": "ไม่ใช่ภาพหลอนหรอกเหรอ? สงสัยทุกคนคงจะเหนื่อยล่ะมั้ง",
						"hindi": "क्या यह सिर्फ एक भ्रम है? शायद हम सब थके हुए हैं।"
					},
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "방금… 저기 길이 있었는데, 사라졌어.",
						"english": "Just now... there was a path there, but it vanished.",
						"japanese": "今…あそこに道があったのに、消えた。",
						"chinese": "刚才……那里有条路，但是消失了。",
						"french": "Tout à l'heure… il y avait un chemin là, mais il a disparu.",
						"spanish": "Hace un momento... había un camino allí, pero desapareció.",
						"vietnamese": "Vừa nãy… có một con đường ở đó, nhưng nó biến mất rồi.",
						"thai": "เมื่อกี้… ตรงนั้นมีทางอยู่ แต่ว่ามันหายไปแล้ว",
						"hindi": "अभी-अभी... वहाँ एक रास्ता था, लेकिन वह गायब हो गया।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_2"
				},
				{
					"type": "speech",
					"content": {
						"korean": "무슨 소리야. 아무것도 없었잖아.",
						"english": "What are you talking about? There was nothing there.",
						"japanese": "何言ってるの。何もなかったじゃない。",
						"chinese": "你在说什么。那里什么都没有啊。",
						"french": "De quoi tu parles ? Il n'y avait rien.",
						"spanish": "¿De qué hablas? No había nada allí.",
						"vietnamese": "Cậu nói gì vậy. Chẳng có gì ở đó cả.",
						"thai": "พูดอะไรน่ะ? ไม่มีอะไรอยู่ตรงนั้นเลยนี่",
						"hindi": "तुम क्या कह रहे हो? वहाँ कुछ भी नहीं था।"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"spot": [
						2,
						3
					],
					"speaker": "finn",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "모두 집중해. 서로 본 게 다르면 믿을 수가 없어.",
						"english": "Everyone, focus. If what we saw differed, we can't trust it.",
						"japanese": "皆、集中して。見たものが違えば、信じられない。",
						"chinese": "大家都集中注意力。如果看到的不一样，我们就无法相信。",
						"french": "Tout le monde, concentrez-vous. Si ce que nous avons vu diffère, nous ne pouvons pas nous fier à cela.",
						"spanish": "Todos, concéntrense. Si lo que vimos difiere, no podemos confiar en ello.",
						"vietnamese": "Mọi người, tập trung đi. Nếu những gì chúng ta thấy khác nhau, thì không thể tin được.",
						"thai": "ทุกคน ตั้งใจนะ ถ้าสิ่งที่เราเห็นไม่เหมือนกัน เราจะเชื่อถือไม่ได้",
						"hindi": "सब ध्यान दो। अगर हमने अलग-अलग चीजें देखीं, तो हम भरोसा नहीं कर सकते।"
					},
					"speaker": "finn"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "하지만… 방금 진짜였단 말이야!",
						"english": "But… that was real just now!",
						"japanese": "でも…今のは本物だったんだ！",
						"chinese": "可是…刚才那是真的啊！",
						"french": "Mais… c'était bien réel tout à l'heure !",
						"spanish": "¡Pero… eso fue real hace un momento!",
						"vietnamese": "Nhưng mà… vừa nãy là thật mà!",
						"thai": "แต่ว่า… เมื่อกี้มันจริงนะ!",
						"hindi": "लेकिन… अभी-अभी तो वह सच था!"
					},
					"type": "speech",
					"speaker": "character_3"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "갈라진 얼음벽 사이로, 길이 흐려진다.",
						"english": "Between the cracked ice walls, the path blurs.",
						"japanese": "割れた氷壁の間で、道が霞む。",
						"chinese": "冰裂的墙壁之间，道路变得模糊。",
						"french": "Entre les murs de glace fissurés, le chemin s'estompe.",
						"spanish": "Entre las paredes de hielo agrietadas, el camino se difumina.",
						"vietnamese": "Giữa những bức tường băng nứt nẻ, con đường mờ dần.",
						"thai": "ระหว่างกำแพงน้ำแข็งที่แตก ทางเดินเลือนลาง",
						"hindi": "दरकी हुई बर्फ की दीवारों के बीच, रास्ता धुंधला हो जाता है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "이젠 길 자체가 사라져. 이건 환상이야.",
						"english": "Now the path itself vanishes. This is an illusion.",
						"japanese": "もう道そのものが消える。これは幻だ。",
						"chinese": "现在连路都消失了。这是幻觉。",
						"french": "Maintenant, le chemin lui-même disparaît. C'est une illusion.",
						"spanish": "Ahora el camino mismo desaparece. Esto es una ilusión.",
						"vietnamese": "Giờ thì ngay cả con đường cũng biến mất. Đây là ảo ảnh.",
						"thai": "ตอนนี้ทางเดินหายไปแล้ว นี่มันภาพลวงตา",
						"hindi": "अब तो रास्ता ही गायब हो गया। यह एक भ्रम है।"
					},
					"speaker": "character_any"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						3
					],
					"speaker": "finn",
					"action": "enter"
				},
				{
					"content": {
						"korean": "환상… 환영… 무엇이든 명확해야 해. 우리가 뭘 믿어야 하지?",
						"english": "Illusion… mirage… Whatever it is, it must be clear. What can we trust?",
						"japanese": "幻…幻影…何であれ、明確でなければ。何を信じればいい？",
						"chinese": "幻觉…幻影…无论是什么，都必须清晰。我们该相信什么？",
						"french": "Illusion… mirage… Quoi que ce soit, cela doit être clair. Que devons-nous croire ?",
						"spanish": "Ilusión… espejismo… Sea lo que sea, debe ser claro. ¿Qué debemos creer?",
						"vietnamese": "Ảo ảnh… ảo giác… Dù là gì đi nữa, nó phải rõ ràng. Chúng ta nên tin vào điều gì?",
						"thai": "ภาพลวงตา… ภาพหลอน… ไม่ว่าอะไรก็ตาม มันต้องชัดเจน เราจะเชื่ออะไรดี?",
						"hindi": "भ्रम… माया… जो भी हो, स्पष्ट होना चाहिए। हम किस पर विश्वास करें?"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "finn"
				},
				{
					"speaker": "character_4",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "저 멀리서… 노랫소리가 들리지 않아?",
						"english": "From afar… don't you hear a song?",
						"japanese": "遠くから…歌声が聞こえないか？",
						"chinese": "从远处…你没听到歌声吗？",
						"french": "De loin… n'entendez-vous pas un chant ?",
						"spanish": "De lejos… ¿no oyes un canto?",
						"vietnamese": "Từ đằng xa… cậu không nghe thấy tiếng hát à?",
						"thai": "จากที่ไกลๆ… ไม่ได้ยินเสียงเพลงเหรอ?",
						"hindi": "दूर से… क्या तुम्हें कोई गीत नहीं सुनाई दे रहा?"
					}
				},
				{
					"speaker": "finn",
					"emotion": "sad",
					"content": {
						"korean": "오래된 노래 같긴 한데… 어딘가 뒤틀려 있어.",
						"english": "It sounds like an old song… but it's twisted somehow.",
						"japanese": "古い歌のようだけど…どこか歪んでる。",
						"chinese": "听起来像是一首老歌…但有些扭曲。",
						"french": "On dirait une vieille chanson… mais elle est tordue d'une certaine manière.",
						"spanish": "Suena como una canción antigua… pero está distorsionada de alguna manera.",
						"vietnamese": "Nghe như một bài hát cũ… nhưng có gì đó méo mó.",
						"thai": "เหมือนเพลงเก่าๆ… แต่รู้สึกบิดเบี้ยวบางอย่าง",
						"hindi": "यह एक पुराना गीत लगता है… लेकिन कहीं न कहीं कुछ गड़बड़ है।"
					},
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "이제는 눈앞의 동료조차 희미하다.",
						"english": "Now, even the ally right before my eyes is hazy.",
						"japanese": "今や、目の前の仲間さえも朧げだ。",
						"chinese": "现在连眼前的同伴都变得模糊了。",
						"french": "Maintenant, même le compagnon devant mes yeux est flou.",
						"spanish": "Ahora, incluso el compañero frente a mis ojos es tenue.",
						"vietnamese": "Giờ thì ngay cả đồng đội trước mắt cũng mờ ảo.",
						"thai": "ตอนนี้แม้แต่สหายตรงหน้าก็เลือนลาง",
						"hindi": "अब तो सामने खड़ा साथी भी धुंधला लग रहा है।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "내가 널… 똑똑히 봤는데… 사라졌다가 나타났어.",
						"english": "I saw you… clearly… then you vanished and reappeared.",
						"japanese": "俺はお前を…はっきり見たのに…消えたり現れたりしたんだ。",
						"chinese": "我明明…清楚地看到了你…你却时隐时现。",
						"french": "Je t'ai vu… clairement… puis tu as disparu et réapparu.",
						"spanish": "Te vi… claramente… luego desapareciste y reapareciste.",
						"vietnamese": "Tôi đã thấy cậu… rất rõ ràng… rồi cậu biến mất rồi lại xuất hiện.",
						"thai": "ฉันเห็นนาย… ชัดเจนนะ… แล้วนายก็หายไปแล้วก็ปรากฏขึ้นมา",
						"hindi": "मैंने तुम्हें… साफ-साफ देखा था… तुम गायब हो गए और फिर प्रकट हुए।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"content": {
						"korean": "내가? 난 계속 여기 있었는데.",
						"english": "Me? I've been here the whole time.",
						"japanese": "私が？私はずっとここにいたのに。",
						"chinese": "我？我一直都在这里啊。",
						"french": "Moi ? J'étais là tout le temps.",
						"spanish": "¿Yo? Estuve aquí todo el tiempo.",
						"vietnamese": "Tôi ư? Tôi vẫn luôn ở đây mà.",
						"thai": "ฉันเหรอ? ฉันก็อยู่ตรงนี้ตลอดนะ",
						"hindi": "मैं? मैं तो लगातार यहीं था।"
					},
					"emotion": "base"
				},
				{
					"spot": [
						1,
						3
					],
					"speaker": "finn",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "finn",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "기억이 왜곡되고 있어. 서로 다른 현실을 보는 거야.",
						"english": "Memories are distorted. We're seeing different realities.",
						"japanese": "記憶が歪んでいる。異なる現実を見ているんだ。",
						"chinese": "记忆被扭曲了。我们看到了不同的现实。",
						"french": "Les souvenirs sont déformés. Nous voyons des réalités différentes.",
						"spanish": "Los recuerdos están distorsionados. Vemos realidades diferentes.",
						"vietnamese": "Ký ức đang bị bóp méo. Chúng ta đang nhìn thấy những thực tại khác nhau.",
						"thai": "ความทรงจำบิดเบือน เรากำลังเห็นความจริงที่ต่างกัน",
						"hindi": "यादें विकृत हो रही हैं। हम अलग-अलग वास्तविकताएं देख रहे हैं।"
					}
				},
				{
					"speaker": "finn",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "이 모든 게… 조작되고 있다면?",
						"english": "What if all of this... is a manipulation?",
						"japanese": "もし、この全てが…操作されているとしたら？",
						"chinese": "如果这一切…都是被操纵的呢？",
						"french": "Et si tout cela... était une manipulation ?",
						"spanish": "¿Y si todo esto... fuera una manipulación?",
						"vietnamese": "Nếu tất cả những điều này… đều bị thao túng thì sao?",
						"thai": "ถ้าทั้งหมดนี้...ถูกบงการล่ะ?",
						"hindi": "अगर यह सब... हेरफेर हो रहा है तो?"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…누가 이런 짓을.",
						"english": "...Who would do such a thing?",
						"japanese": "…一体誰がこんなことを。",
						"chinese": "…是谁做了这种事。",
						"french": "...Qui ferait une chose pareille ?",
						"spanish": "...¿Quién haría algo así?",
						"vietnamese": "…Ai đã làm điều này?",
						"thai": "...ใครทำเรื่องแบบนี้",
						"hindi": "...ऐसा किसने किया।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "환영이 모든 것을 집어삼킨다.",
						"english": "The illusion devours everything.",
						"japanese": "幻影が全てを飲み込む。",
						"chinese": "幻象吞噬一切。",
						"french": "L'illusion dévore tout.",
						"spanish": "La ilusión lo devora todo.",
						"vietnamese": "Ảo ảnh nuốt chửng mọi thứ.",
						"thai": "ภาพลวงตากลืนกินทุกสิ่ง",
						"hindi": "भ्रम सब कुछ निगल लेता है।"
					},
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"content": {
						"korean": "너희는 결국 진실을 보지 못했군. 영원히 이 미로에 갇혀라.",
						"english": "You failed to see the truth, after all. Be trapped forever in this labyrinth.",
						"japanese": "お前たちは結局、真実を見抜けなかったな。永遠にこの迷宮に囚われろ。",
						"chinese": "你们终究未能看清真相。永远被困在这迷宫中吧。",
						"french": "Vous n'avez finalement pas vu la vérité. Soyez piégés à jamais dans ce labyrinthe.",
						"spanish": "Al final, no visteis la verdad. Quedad atrapados para siempre en este laberinto.",
						"vietnamese": "Cuối cùng, các ngươi đã không nhìn thấy sự thật. Hãy bị giam cầm vĩnh viễn trong mê cung này.",
						"thai": "พวกเจ้าก็ไม่เห็นความจริงในที่สุด จงถูกขังอยู่ในเขาวงกตนี้ตลอดไป",
						"hindi": "तुमने अंततः सच्चाई नहीं देखी। इस भूलभुलैया में हमेशा के लिए कैद रहो।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…아직 끝나지 않았어. 진짜를 찾을 거야.",
						"english": "…It's not over yet. I'll find what's real.",
						"japanese": "…まだ終わってない。本当のものを探すんだ。",
						"chinese": "…还没结束。我会找到真相的。",
						"french": "…Ce n'est pas encore fini. Je trouverai la vérité.",
						"spanish": "…Todavía no ha terminado. Encontraré lo real.",
						"vietnamese": "…Vẫn chưa kết thúc. Tôi sẽ tìm ra sự thật.",
						"thai": "…ยังไม่จบ ฉันจะหาของจริงให้เจอ",
						"hindi": "…अभी खत्म नहीं हुआ है। मैं असली चीज़ ढूंढूंगा।"
					},
					"type": "speech",
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "겨우… 이 정도를… 이겼다고… 생각하나…?",
						"english": "You… think you've… won… with just this…?",
						"japanese": "まさか… これしきで… 勝ったと… 思うのか…？",
						"chinese": "就… 凭这点… 你就… 以为赢了…？",
						"french": "Vous… croyez… avoir gagné… avec si peu…?",
						"spanish": "¿Creéis… que con… esto… ya… habéis ganado…?",
						"vietnamese": "Chỉ… chừng này… mà… đã nghĩ là thắng…?",
						"thai": "แค่… เท่านี้… คิดว่า… ชนะแล้ว… รึ…?",
						"hindi": "बस… इतना सा… क्या तुम… इसे… जीत मानते हो…?"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "진정한 환영은… 너희의 기억 속에 있다…!",
						"english": "The true illusion… lies… within your memories…!",
						"japanese": "真の幻影は… お前たちの… 記憶の中に… ある…！",
						"chinese": "真正的幻象… 在… 你们的记忆之中…！",
						"french": "La véritable illusion… est… dans vos souvenirs…!",
						"spanish": "La verdadera ilusión… reside… en vuestros recuerdos…!",
						"vietnamese": "Ảo ảnh thật sự… nằm… trong ký ức của các ngươi…!",
						"thai": "ภาพลวงตาที่แท้จริง… อยู่… ในความทรงจำของพวกเจ้า…!",
						"hindi": "असली भ्रम… तुम्हारी… यादों में… है…!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "끝났어. …정말 끝난 건가?",
						"english": "It's over. …Is it truly over?",
						"japanese": "終わった。…本当に終わったのか？",
						"chinese": "结束了。…真的结束了吗？",
						"french": "C'est fini. …Est-ce vraiment fini ?",
						"spanish": "Ha terminado. …¿Realmente ha terminado?",
						"vietnamese": "Kết thúc rồi. …Thật sự kết thúc rồi sao?",
						"thai": "จบแล้ว… นี่มัน… จบจริงแล้วเหรอ?",
						"hindi": "खत्म हो गया। …क्या यह सच में खत्म हो गया?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "direction",
					"spot": [
						3,
						3
					],
					"speaker": "finn",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "환영은 사라졌지만, 의심은 여전해. 우리가 본 건… 전부 진짜였을까?",
						"english": "The illusion is gone, but the doubt remains. Was everything we saw… real?",
						"japanese": "幻影は消えたが、疑念は残る。我々が見たものは… 全て本物だったのか？",
						"chinese": "幻象消失了，但疑虑犹存。我们所看到的一切… 都是真的吗？",
						"french": "L'illusion a disparu, mais le doute persiste. Tout ce que nous avons vu… était-il réel ?",
						"spanish": "La ilusión desapareció, pero la duda persiste. Lo que vimos… ¿fue todo real?",
						"vietnamese": "Ảo ảnh đã tan biến, nhưng sự nghi ngờ vẫn còn. Mọi thứ chúng ta thấy… có phải là thật không?",
						"thai": "ภาพลวงตาหายไปแล้ว แต่ความสงสัยยังคงอยู่ สิ่งที่เราเห็น… ทั้งหมดเป็นของจริงหรือเปล่า?",
						"hindi": "भ्रम मिट गया, पर संदेह बरकरार है। क्या जो कुछ हमने देखा… वह सब सच था?"
					},
					"emotion": "sad",
					"speaker": "finn"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "환영은 걷혔지만, 뒤틀린 기억은 여전했다.",
						"english": "The illusion lifted, but twisted memories remained.",
						"japanese": "幻影は晴れたが、歪んだ記憶は残った。",
						"chinese": "幻象消散了，但扭曲的记忆依然存在。",
						"french": "L'illusion s'est dissipée, mais les souvenirs déformés demeuraient.",
						"spanish": "La ilusión se disipó, pero los recuerdos distorsionados permanecieron.",
						"vietnamese": "Ảo ảnh đã tan, nhưng ký ức méo mó vẫn còn.",
						"thai": "ภาพลวงตาจางหายไปแล้ว แต่ความทรงจำที่บิดเบี้ยวก็ยังคงอยู่",
						"hindi": "भ्रम छट गया, पर विकृत यादें अब भी थीं।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "다음 길은 더 깊은 미로로 이어진다. 그곳에는 어떤 진실이 잠들어 있을까.",
						"english": "The next path leads to a deeper labyrinth. What truth lies dormant there?",
						"japanese": "次の道は、さらに深い迷宮へと続く。そこには、どんな真実が眠っているのだろうか。",
						"chinese": "前方的路通往更深的迷宫。那里沉睡着怎样的真相呢？",
						"french": "Le prochain chemin mène à un labyrinthe plus profond. Quelle vérité y sommeille ?",
						"spanish": "El siguiente camino conduce a un laberinto más profundo. ¿Qué verdad yace dormida allí?",
						"vietnamese": "Con đường tiếp theo dẫn vào một mê cung sâu hơn. Sự thật nào đang ẩn giấu ở đó?",
						"thai": "เส้นทางต่อไปนำไปสู่เขาวงกตที่ลึกกว่านั้น ความจริงใดที่หลับใหลอยู่ที่นั่น?",
						"hindi": "अगला रास्ता एक गहरे भूलभुलैया में जाता है। कौन-सी सच्चाई वहाँ सोई हुई है?"
					},
					"speaker": "narrator"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "동굴의 심장부. 모든 환영의 근원.",
						"english": "The heart of the cave. The source of all illusions.",
						"japanese": "洞窟の心臓部。全ての幻影の根源。",
						"chinese": "洞穴的心脏。所有幻象的根源。",
						"french": "Le cœur de la grotte. La source de toutes les illusions.",
						"spanish": "El corazón de la cueva. El origen de todas las ilusiones.",
						"vietnamese": "Trái tim của hang động. Nguồn gốc của mọi ảo ảnh.",
						"thai": "ใจกลางถ้ำ แหล่งกำเนิดของภาพลวงตาทั้งหมด",
						"hindi": "गुफा का हृदय। सभी भ्रमों का स्रोत।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "왔구나, 길 잃은 자들이여. 진실을 보았다고 생각하나?",
						"english": "You've come, lost ones. Do you think you've seen the truth?",
						"japanese": "来たか、迷いし者たちよ。真実を見たと思っているのか？",
						"chinese": "你们来了，迷失者。你们以为看到了真相吗？",
						"french": "Vous êtes venus, âmes perdues. Pensez-vous avoir vu la vérité ?",
						"spanish": "Habéis llegado, almas perdidas. ¿Creéis haber visto la verdad?",
						"vietnamese": "Ngươi đã đến rồi, những kẻ lạc lối. Ngươi nghĩ mình đã nhìn thấy sự thật ư?",
						"thai": "มาแล้วสินะ เจ้าผู้หลงทาง คิดว่าได้เห็นความจริงแล้วหรือ?",
						"hindi": "तुम आ गए, भटके हुए लोगों। क्या तुम्हें लगता है कि तुमने सच देख लिया है?"
					}
				},
				{
					"content": {
						"korean": "네가 우리를 속인 거야?",
						"english": "Did you deceive us?",
						"japanese": "お前が我々を騙したのか？",
						"chinese": "是你欺骗了我们吗？",
						"french": "C'est toi qui nous as trompés ?",
						"spanish": "¿Fuiste tú quien nos engañó?",
						"vietnamese": "Ngươi đã lừa dối chúng ta sao?",
						"thai": "แกหลอกเราเหรอ?",
						"hindi": "क्या तुमने हमें धोखा दिया?"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "너희는 스스로를 속였을 뿐. 눈앞의 환영이 전부라 믿었지.",
						"english": "You only deceived yourselves. You believed the illusions before you were everything.",
						"japanese": "お前たちは自らを欺いただけだ。目の前の幻影が全てだと信じたのだから。",
						"chinese": "你们只是欺骗了自己。你们相信眼前的幻象就是一切。",
						"french": "Vous ne vous êtes trompés que vous-mêmes. Vous avez cru que les illusions devant vos yeux étaient tout.",
						"spanish": "Solo os engañasteis a vosotros mismos. Creísteis que las ilusiones ante vuestros ojos lo eran todo.",
						"vietnamese": "Các ngươi chỉ tự lừa dối mình thôi. Các ngươi tin rằng ảo ảnh trước mắt là tất cả.",
						"thai": "พวกเจ้าหลอกตัวเองเท่านั้น เชื่อว่าภาพลวงตาตรงหน้าคือทุกสิ่ง",
						"hindi": "तुमने बस खुद को धोखा दिया। तुमने सामने वाले भ्रमों को ही सब कुछ मान लिया।"
					},
					"speaker": "random_boss"
				},
				{
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"action": "enter",
					"speaker": "finn",
					"type": "direction"
				},
				{
					"speaker": "finn",
					"content": {
						"korean": "기억을 조작한 건 너야! 증거는 없지만… 확신해.",
						"english": "You manipulated our memories! I have no proof, but... I'm certain.",
						"japanese": "記憶を操ったのはお前だ！証拠はないが…確信している。",
						"chinese": "是你操纵了我们的记忆！虽然没有证据…但我确信。",
						"french": "C'est toi qui as manipulé nos souvenirs ! Je n'ai pas de preuves, mais... j'en suis certain.",
						"spanish": "¡Tú manipulaste nuestros recuerdos! No tengo pruebas, pero... estoy seguro.",
						"vietnamese": "Ngươi đã thao túng ký ức của chúng ta! Ta không có bằng chứng, nhưng… ta chắc chắn.",
						"thai": "แกบงการความทรงจำของเรา! ไม่มีหลักฐานแต่...ฉันมั่นใจ",
						"hindi": "तुमने हमारी यादों को हेरफेर किया! मेरे पास सबूत नहीं है, लेकिन... मुझे यकीन है।"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "확신? 환영 속에서 무엇을 확신할 수 있지?",
						"english": "Certainty? What can you be certain of within an illusion?",
						"japanese": "確信だと？幻影の中で何を確信できるというのだ？",
						"chinese": "确信？在幻象中你能确信什么？",
						"french": "Une certitude ? Que peux-tu être certain de quoi que ce soit au sein d'une illusion ?",
						"spanish": "¿Certeza? ¿De qué puedes estar seguro dentro de una ilusión?",
						"vietnamese": "Chắc chắn ư? Ngươi có thể chắc chắn điều gì trong ảo ảnh?",
						"thai": "มั่นใจ? ในภาพลวงตาจะมั่นใจอะไรได้?",
						"hindi": "निश्चितता? एक भ्रम में तुम किस बात पर निश्चित हो सकते हो?"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "싸우자. 진짜를 보여줄게.",
						"english": "Let's fight. I'll show you the truth.",
						"japanese": "戦おう。本当の姿を見せてやる。",
						"chinese": "来战吧。我会让你看到真正的。",
						"french": "Battons-nous. Je te montrerai la vérité.",
						"spanish": "Luchemos. Te mostraré la verdad.",
						"vietnamese": "Hãy chiến đấu. Ta sẽ cho ngươi thấy điều thật sự.",
						"thai": "มาสู้กัน ฉันจะแสดงของจริงให้ดู",
						"hindi": "चलो लड़ते हैं। मैं तुम्हें असली चीज़ दिखाऊंगा।"
					},
					"type": "speech",
					"emotion": "angry"
				}
			]
		}
	]
} as const;
