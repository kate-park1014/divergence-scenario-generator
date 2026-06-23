export const scenario_snowy_fluffymenace_53_04 = {
	"scenario_id": "snowy_fluffymenace_53_04",
	"order": 4,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"hild": {
			"id": "mon_6f20c96a-bf07-4aae-b37c-da898a8336e8",
			"name": {
				"korean": "힐드",
				"english": "Hild",
				"japanese": "ヒルド",
				"chinese": "希尔德",
				"french": "Hild",
				"spanish": "Hild",
				"vietnamese": "Hild",
				"thai": "ฮิลด์",
				"hindi": "हिल्ड"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/722a86fd-2903-4688-3f04-db8241ed0e00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/af3d96ba-e571-4132-fede-cd415bd15c00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"설원, 환영과 현실의 경계가 무너지는 곳.",
			"사라진 동료를 찾는 학자, 힐드.",
			"그녀는 말한다, 이 모든 것이 거대한 힘의 통제 아래 있다고.",
			"주인공은 직감한다. 자신 또한 누군가의 연극 속 인물임을."
		],
		"english": [
			"A snowfield where the boundary between illusion and reality crumbles.",
			"Hild, a scholar searching for her vanished colleague.",
			"She says, all this is under the control of a colossal power.",
			"The protagonist senses it. They too are a character in someone's play."
		],
		"japanese": [
			"雪原、幻影と現実の境界が崩れる場所。",
			"消えた仲間を探す学者、ヒルデ。",
			"彼女は言う、この全てが巨大な力の支配下にあると。",
			"主人公は直感する。自分もまた、誰かの演劇の登場人物であることを。"
		],
		"chinese": [
			"雪原，幻象与现实的界限崩塌之地。",
			"寻找失踪同伴的学者，希尔德。",
			"她说，这一切都受一个巨大力量的控制。",
			"主人公直觉。自己也是某人戏剧中的角色。"
		],
		"french": [
			"Une étendue enneigée, là où la frontière entre l'illusion et la réalité s'effondre.",
			"Hild, une érudite à la recherche de son collègue disparu.",
			"Elle affirme que tout cela est sous le contrôle d'une puissance colossale.",
			"Le protagoniste le pressent. Il est lui aussi un personnage dans le théâtre de quelqu'un d'autre."
		],
		"spanish": [
			"Un campo nevado, donde la frontera entre la ilusión y la realidad se desvanece.",
			"Hild, una erudita buscando a su colega desaparecido.",
			"Ella dice que todo esto está bajo el control de un poder colosal.",
			"El protagonista intuye que él también es un personaje en la obra de alguien."
		],
		"vietnamese": [
			"Cánh đồng tuyết, nơi ranh giới giữa ảo ảnh và hiện thực sụp đổ.",
			"Hild, một học giả đang tìm kiếm đồng đội đã mất tích.",
			"Cô ấy nói, tất cả những điều này đều nằm dưới sự kiểm soát của một thế lực khổng lồ.",
			"Nhân vật chính linh cảm. Mình cũng là một nhân vật trong vở kịch của ai đó."
		],
		"thai": [
			"ทุ่งหิมะ สถานที่ที่ขอบเขตระหว่างภาพลวงตาและความจริงพังทลายลง",
			"ฮิลด์ นักวิชาการผู้ตามหาเพื่อนร่วมงานที่หายไป",
			"เธอกล่าวว่า ทั้งหมดนี้อยู่ภายใต้การควบคุมของพลังมหาศาล",
			"ตัวเอกสัมผัสได้ว่า ตนเองก็เป็นเพียงตัวละครในละครของใครบางคน"
		],
		"hindi": [
			"हिमक्षेत्र, जहाँ भ्रम और वास्तविकता की सीमाएँ ढह जाती हैं।",
			"हिल्ड, एक विद्वान जो अपने लापता सहकर्मी की तलाश में है।",
			"वह कहती है, यह सब एक विशाल शक्ति के नियंत्रण में है।",
			"नायक को आभास होता है कि वह भी किसी के नाटक का पात्र है।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "끝없이 펼쳐진 설원, 낯선 오두막이 보였다.",
						"english": "An endless snowfield stretched out; a strange cabin came into view.",
						"japanese": "どこまでも広がる雪原、見慣れない小屋が見えた。",
						"chinese": "无尽的雪原延伸开来，一座陌生的木屋映入眼帘。",
						"french": "Une étendue enneigée infinie s'étirait; une étrange cabane apparut.",
						"spanish": "Un campo nevado interminable se extendía; una extraña cabaña apareció.",
						"vietnamese": "Cánh đồng tuyết vô tận trải dài, một căn lều lạ hiện ra.",
						"thai": "ทุ่งหิมะอันกว้างใหญ่ไร้ขอบเขต ปรากฏกระท่อมแปลกตาหลังหนึ่ง",
						"hindi": "एक अंतहीन हिमक्षेत्र फैला हुआ था; एक अजीब सी कुटिया दिखाई दी।"
					}
				},
				{
					"action": "enter",
					"speaker": "hild",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "동료를 찾고 있습니다. 혹시, 이 근처에서 보셨나요?",
						"english": "I'm looking for a colleague. Have you seen anyone around here?",
						"japanese": "仲間を探しています。もしかして、この近くで見かけませんでしたか？",
						"chinese": "我在找一位同伴。请问，您在这附近见过他吗？",
						"french": "Je cherche un collègue. L'auriez-vous vu dans les parages ?",
						"spanish": "Estoy buscando a un colega. ¿Lo ha visto por aquí?",
						"vietnamese": "Tôi đang tìm một đồng đội. Anh có thấy ai quanh đây không?",
						"thai": "ฉันกำลังตามหาเพื่อนร่วมงาน ไม่ทราบว่าคุณเห็นเขาแถวนี้บ้างไหม?",
						"hindi": "मैं एक सहकर्मी को ढूंढ रहा हूँ। क्या आपने उन्हें इस आस-पास देखा है?"
					},
					"speaker": "hild",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "당신은 누구시죠?",
						"english": "Who are you?",
						"japanese": "あなたはどなたですか？",
						"chinese": "您是哪位？",
						"french": "Qui êtes-vous ?",
						"spanish": "¿Quién es usted?",
						"vietnamese": "Anh là ai?",
						"thai": "คุณคือใคร?",
						"hindi": "आप कौन हैं?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "hild",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "저는 힐드라고 합니다. 이곳의 비정상적인 물리 법칙을 연구하는 학자죠.",
						"english": "I am Hild. I'm a scholar researching the anomalous physical laws of this place.",
						"japanese": "私はヒルデと申します。ここの異常な物理法則を研究している学者です。",
						"chinese": "我是希尔德。我是一名研究此处异常物理法则的学者。",
						"french": "Je suis Hild. Je suis une érudite qui étudie les lois physiques anormales de cet endroit.",
						"spanish": "Soy Hild. Soy una erudita que investiga las leyes físicas anómalas de este lugar.",
						"vietnamese": "Tôi là Hild. Tôi là một học giả nghiên cứu các định luật vật lý bất thường ở nơi này.",
						"thai": "ฉันชื่อฮิลด์ ฉันเป็นนักวิชาการที่กำลังค้นคว้ากฎทางฟิสิกส์อันผิดปกติของที่นี่",
						"hindi": "मैं हिल्ड हूँ। मैं यहाँ के असामान्य भौतिकी नियमों पर शोध करने वाली एक विद्वान हूँ।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "비정상적인 법칙이요?",
						"english": "Anomalous laws?",
						"japanese": "異常な法則ですか？",
						"chinese": "异常的法则？",
						"french": "Des lois anormales ?",
						"spanish": "¿Leyes anómalas?",
						"vietnamese": "Định luật bất thường sao?",
						"thai": "กฎที่ผิดปกติหรือ?",
						"hindi": "असामान्य नियम?"
					}
				},
				{
					"content": {
						"korean": "네, 예를 들면… 이 눈보라. 너무 완벽하게 시야를 가립니다.",
						"english": "Yes, for example... this blizzard. It obscures vision too perfectly.",
						"japanese": "ええ、例えば…この吹雪。あまりにも完璧に視界を遮ります。",
						"chinese": "是的，例如……这场暴风雪。它完美地遮蔽了视线。",
						"french": "Oui, par exemple... cette tempête de neige. Elle obstrue la vision avec une perfection déconcertante.",
						"spanish": "Sí, por ejemplo... esta ventisca. Obscurece la vista de forma demasiado perfecta.",
						"vietnamese": "Vâng, ví dụ như... trận bão tuyết này. Nó che khuất tầm nhìn một cách quá hoàn hảo.",
						"thai": "ใช่ อย่างเช่น... พายุหิมะนี้ มันบดบังทัศนวิสัยได้สมบูรณ์แบบเกินไป",
						"hindi": "हाँ, उदाहरण के लिए... यह बर्फीला तूफान। यह दृश्य को बहुत ही पूर्णता से ढक देता है।"
					},
					"speaker": "hild",
					"type": "speech",
					"emotion": "base"
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
					"speaker": "hild",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "제 가설로는, 어떤 거대한 힘이 이 공간을 통제하고 있어요.",
						"english": "My theory is, some immense power controls this space.",
						"japanese": "私の仮説では、ある巨大な力がこの空間を支配しています。",
						"chinese": "我的推测是，某种巨大的力量正在控制这个空间。",
						"french": "Ma théorie est qu'une force immense contrôle cet espace.",
						"spanish": "Mi teoría es que un poder inmenso controla este espacio.",
						"vietnamese": "Theo giả thuyết của tôi, một thế lực khổng lồ đang kiểm soát không gian này.",
						"thai": "ทฤษฎีของผมคือ มีพลังมหาศาลบางอย่างกำลังควบคุมพื้นที่นี้อยู่",
						"hindi": "मेरे अनुमान से, कोई बहुत बड़ी शक्ति इस जगह को नियंत्रित कर रही है।"
					},
					"speaker": "hild",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "거대한 힘이요?",
						"english": "Immense power?",
						"japanese": "巨大な力、ですか？",
						"chinese": "巨大的力量？",
						"french": "Une force immense ?",
						"spanish": "¿Un poder inmenso?",
						"vietnamese": "Thế lực khổng lồ ư?",
						"thai": "พลังมหาศาลเหรอครับ/คะ?",
						"hindi": "बहुत बड़ी शक्ति?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "모든 게 정교하게 조작된 무대 같아요.",
						"english": "Everything feels like an elaborately manipulated stage.",
						"japanese": "全てが巧妙に仕組まれた舞台のようです。",
						"chinese": "一切都像是被精心操纵的舞台。",
						"french": "Tout semble être une scène manipulée avec précision.",
						"spanish": "Todo parece un escenario meticulosamente manipulado.",
						"vietnamese": "Mọi thứ cứ như một sân khấu được dàn dựng công phu.",
						"thai": "ทุกอย่างเหมือนเวทีที่ถูกจัดฉากอย่างประณีต",
						"hindi": "सब कुछ एक सावधानी से संचालित मंच जैसा लगता है।"
					},
					"speaker": "hild",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "말도 안 돼…",
						"english": "Unbelievable...",
						"japanese": "まさか…",
						"chinese": "不可能…",
						"french": "Impensable...",
						"spanish": "Imposible...",
						"vietnamese": "Vô lý...",
						"thai": "ไม่น่าเชื่อ…",
						"hindi": "असंभव..."
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "hild",
					"content": {
						"korean": "…하지만 제 눈에는 그렇게 보여요. 제 동료도 이걸 쫓다 사라졌죠.",
						"english": "...but that's how it appears to me. My colleague also vanished pursuing this.",
						"japanese": "…ですが、私の目にはそう見えます。私の仲間もこれを追って消えました。",
						"chinese": "…但我的眼中就是如此。我的同伴也因此失踪了。",
						"french": "...mais c'est ce que je vois. Mon collègue a aussi disparu en cherchant ça.",
						"spanish": "...pero así es como lo veo yo. Mi compañero también desapareció persiguiendo esto.",
						"vietnamese": "...nhưng trong mắt tôi thì là vậy. Đồng đội tôi cũng biến mất khi theo đuổi điều này.",
						"thai": "...แต่ในสายตาผม/ฉันมันเป็นอย่างนั้น เพื่อนร่วมงานของผม/ฉันก็หายไปหลังจากตามรอยเรื่องนี้",
						"hindi": "...लेकिन मेरी आँखों को ऐसा ही लगता है। मेरा साथी भी इसे ढूंढते हुए गायब हो गया।"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						3
					],
					"speaker": "hild",
					"action": "enter"
				},
				{
					"speaker": "hild",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "주위를 보세요. 모든 것이 완벽하게 반복돼요.",
						"english": "Look around. Everything repeats perfectly.",
						"japanese": "周囲を見てください。全てが完璧に繰り返されています。",
						"chinese": "看看周围。一切都完美地重复着。",
						"french": "Regardez autour de vous. Tout se répète parfaitement.",
						"spanish": "Mira a tu alrededor. Todo se repite a la perfección.",
						"vietnamese": "Hãy nhìn xung quanh. Mọi thứ lặp lại hoàn hảo.",
						"thai": "ลองดูรอบๆ สิครับ/คะ ทุกสิ่งวนซ้ำอย่างสมบูรณ์แบบ",
						"hindi": "आस-पास देखो। सब कुछ पूरी तरह से दोहराया जा रहा है।"
					}
				},
				{
					"content": {
						"korean": "(눈 결정들이 미세하게 같은 패턴으로 반짝인다.)",
						"english": "(Snowflakes shimmer in subtly identical patterns.)",
						"japanese": "(雪の結晶が、わずかに同じパターンで輝いている。)",
						"chinese": "(雪花以微妙的相同模式闪烁。)",
						"french": "(Les flocons de neige scintillent selon des motifs subtilement identiques.)",
						"spanish": "(Los copos de nieve brillan con patrones sutilmente idénticos.)",
						"vietnamese": "(Những bông tuyết lấp lánh theo cùng một hoa văn tinh tế.)",
						"thai": "(เกล็ดหิมะระยิบระยับในลวดลายที่เหมือนกันอย่างละเอียดอ่อน)",
						"hindi": "(बर्फ के क्रिस्टल सूक्ष्म रूप से एक ही पैटर्न में चमकते हैं।)"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "hild",
					"content": {
						"korean": "마치 거대한 누군가의 설계도 같지 않나요?",
						"english": "Doesn't it seem like a grand blueprint from someone immense?",
						"japanese": "まるで、巨大な誰かの設計図のようではありませんか？",
						"chinese": "这难道不是某个巨大存在的蓝图吗？",
						"french": "N'est-ce pas comme le plan d'un être colossal ?",
						"spanish": "¿No parece el plano de alguien inmenso?",
						"vietnamese": "Không phải nó trông giống như bản thiết kế của một ai đó vĩ đại sao?",
						"thai": "มันเหมือนพิมพ์เขียวของใครบางคนที่ยิ่งใหญ่ไม่ใช่เหรอ?",
						"hindi": "क्या यह किसी विशालकाय के ब्लूप्रिंट जैसा नहीं लगता?"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "소름 끼쳐… 그럼 우리는?",
						"english": "Chilling... So, what about us?",
						"japanese": "ゾッとする…じゃあ、私たちは？",
						"chinese": "太可怕了…那我们呢？",
						"french": "Effrayant... Alors, nous ?",
						"spanish": "Escalofriante... ¿Y nosotros?",
						"vietnamese": "Rùng mình... Vậy còn chúng ta?",
						"thai": "ขนลุก…แล้วเราล่ะ?",
						"hindi": "डरावना... तो हम क्या हैं?"
					}
				},
				{
					"content": {
						"korean": "우리도 이 연극의 일부일 뿐일까요?",
						"english": "Are we merely a part of this play too?",
						"japanese": "私たちも、この劇の一部に過ぎないのでしょうか？",
						"chinese": "我们也只是这场戏的一部分吗？",
						"french": "Serions-nous aussi de simples figurants de cette pièce ?",
						"spanish": "¿También nosotros somos solo una parte de esta obra?",
						"vietnamese": "Chúng ta cũng chỉ là một phần của vở kịch này sao?",
						"thai": "เราก็เป็นแค่ส่วนหนึ่งของการแสดงนี้เท่านั้นหรือเปล่า?",
						"hindi": "क्या हम भी इस नाटक का सिर्फ एक हिस्सा हैं?"
					},
					"speaker": "hild",
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "hild",
					"spot": [
						4,
						3
					]
				},
				{
					"content": {
						"korean": "이제 돌아갈 수 없어요. 이곳은 우리를 놓아주지 않을 겁니다.",
						"english": "There's no turning back now. This place won't let us go.",
						"japanese": "もう後戻りできません。ここは私たちを解放してくれないでしょう。",
						"chinese": "我们回不去了。这里不会放过我们。",
						"french": "Il n'y a plus de retour en arrière. Cet endroit ne nous laissera pas partir.",
						"spanish": "Ya no podemos volver. Este lugar no nos dejará ir.",
						"vietnamese": "Chúng ta không thể quay lại được nữa. Nơi này sẽ không buông tha chúng ta đâu.",
						"thai": "เรากลับไปไม่ได้แล้ว ที่นี่จะไม่ปล่อยเราไป",
						"hindi": "अब वापस नहीं जा सकते। यह जगह हमें जाने नहीं देगी।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "hild"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…그 코코아. (주인공의 뇌리에 차가운 쇠맛이 스친다.)",
						"english": "...That cocoa. (A cold, metallic taste flashes in the protagonist's mind.)",
						"japanese": "...あのココア。(主人公の脳裏に冷たい鉄の味がよぎる。)",
						"chinese": "……那杯可可。（主角的脑海中闪过一丝冰冷的铁锈味。）",
						"french": "...Ce cacao. (Un goût métallique et froid traverse l'esprit du protagoniste.)",
						"spanish": "...Ese cacao. (Un sabor metálico y frío atraviesa la mente del protagonista.)",
						"vietnamese": "...Cốc ca cao đó. (Trong tâm trí nhân vật chính chợt hiện lên vị kim loại lạnh lẽo.)",
						"thai": "…โกโก้นั่น (รสชาติโลหะเย็นเฉียบแวบเข้ามาในความคิดของตัวเอก)",
						"hindi": "...वह कोको। (नायक के मन में एक ठंडा, धात्विक स्वाद कौंध जाता है।)"
					}
				},
				{
					"content": {
						"korean": "당신도 느꼈나요? 이 완벽한 환상 속 균열을.",
						"english": "Did you feel it too? The crack in this perfect illusion.",
						"japanese": "あなたも感じましたか？この完璧な幻想の中の亀裂を。",
						"chinese": "你也感觉到了吗？这完美幻象中的裂痕。",
						"french": "Vous l'avez senti aussi ? La fissure dans cette parfaite illusion.",
						"spanish": "¿Tú también lo sentiste? La grieta en esta ilusión perfecta.",
						"vietnamese": "Bạn cũng cảm thấy rồi chứ? Vết nứt trong ảo ảnh hoàn hảo này.",
						"thai": "คุณก็รู้สึกเหมือนกันใช่ไหม? รอยร้าวในภาพลวงตาอันสมบูรณ์แบบนี้",
						"hindi": "क्या तुम्हें भी महसूस हुआ? इस संपूर्ण भ्रम में दरार।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "hild"
				},
				{
					"content": {
						"korean": "(문득, 낡은 썰매와 개썰매 경주의 단편적인 영상이 스쳐 지나간다.) 이 모든 게… 거짓말인가?",
						"english": "(Suddenly, fragmented images of an old sled and a dog sled race flash by.) Is all of this... a lie?",
						"japanese": "(ふと、古いソリと犬ぞりレースの断片的な映像が脳裏をよぎる。) これら全てが…嘘なのか？",
						"chinese": "（突然，旧雪橇和狗拉雪橇比赛的零碎画面一闪而过。）这一切……都是谎言吗？",
						"french": "(Soudain, des images fragmentées d'un vieux traîneau et d'une course de chiens de traîneau défilent.) Tout cela... est-ce un mensonge ?",
						"spanish": "(De repente, imágenes fragmentadas de un viejo trineo y una carrera de trineos tirados por perros parpadean.) ¿Todo esto... es una mentira?",
						"vietnamese": "(Đột nhiên, những hình ảnh rời rạc về một chiếc xe trượt tuyết cũ và cuộc đua xe trượt tuyết chó kéo lướt qua.) Tất cả những thứ này... là giả dối sao?",
						"thai": "(ทันใดนั้น ภาพบางส่วนของเลื่อนเก่าและการแข่งขันเลื่อนสุนัขก็แวบเข้ามาในหัว) ทั้งหมดนี้... เป็นเรื่องโกหกงั้นเหรอ?",
						"hindi": "(अचानक, एक पुरानी स्लेज और एक डॉग स्लेज दौड़ के खंडित चित्र सामने आते हैं।) क्या यह सब... झूठ है?"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "hild",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이 세상의 모든 것이, 거대한 연극이라고요.",
						"english": "Everything in this world, it's all just a grand play.",
						"japanese": "この世界の全てが、壮大な演劇だというんですよ。",
						"chinese": "这个世界的一切，都只是一场盛大的戏剧。",
						"french": "Tout dans ce monde n'est qu'une immense pièce de théâtre.",
						"spanish": "Todo en este mundo, es solo una gran obra de teatro.",
						"vietnamese": "Mọi thứ trên thế giới này, đều là một vở kịch lớn.",
						"thai": "ทุกสิ่งในโลกนี้ เป็นเพียงละครเวทีอันยิ่งใหญ่",
						"hindi": "इस दुनिया की हर चीज़, एक बड़ा नाटक है।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "거대한 그림자가 설원을 덮쳤다. 이 연극의 다음 막이 시작된다.",
						"english": "A colossal shadow fell over the snowy fields. The next act of this play begins.",
						"japanese": "巨大な影が雪原を覆った。この演劇の次の幕が始まる。",
						"chinese": "巨大的阴影笼罩了雪原。这场戏剧的下一幕即将开始。",
						"french": "Une ombre colossale s'abattit sur les champs de neige. Le prochain acte de cette pièce commence.",
						"spanish": "Una sombra colosal cubrió los campos nevados. El próximo acto de esta obra comienza.",
						"vietnamese": "Một bóng tối khổng lồ bao trùm cánh đồng tuyết. Màn tiếp theo của vở kịch này bắt đầu.",
						"thai": "เงาขนาดมหึมาปกคลุมทุ่งหิมะ องก์ต่อไปของละครเรื่องนี้กำลังจะเริ่มขึ้น",
						"hindi": "एक विशाल छाया बर्फीले खेतों पर छा गई। इस नाटक का अगला अंक शुरू होता है।"
					}
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "잘 오셨습니다, 배우님. 당신의 열연에 감동했습니다.",
						"english": "Welcome, esteemed actor. Your passionate performance has moved me.",
						"japanese": "ようこそ、役者殿。あなたの熱演に感動しました。",
						"chinese": "欢迎，尊敬的演员。您的精彩表演令我感动不已。",
						"french": "Bienvenue, cher acteur. Votre performance passionnée m'a ému.",
						"spanish": "Bienvenido, estimado actor. Su apasionada actuación me ha conmovido.",
						"vietnamese": "Chào mừng, diễn viên quý mến. Màn trình diễn đầy nhiệt huyết của bạn đã làm tôi xúc động.",
						"thai": "ยินดีต้อนรับครับ ท่านนักแสดง ผมประทับใจกับการแสดงอันเร่าร้อนของคุณมาก",
						"hindi": "स्वागत है, प्रिय अभिनेता। आपके जोशीले प्रदर्शन ने मुझे मंत्रमुग्ध कर दिया है।"
					}
				},
				{
					"content": {
						"korean": "이 모든 게… 네 짓이야?",
						"english": "All of this... was your doing?",
						"japanese": "これら全てが…お前の仕業か？",
						"chinese": "这一切……都是你干的？",
						"french": "Tout cela... c'était ton œuvre ?",
						"spanish": "¿Todo esto... fue obra tuya?",
						"vietnamese": "Tất cả những thứ này... là do ngươi gây ra sao?",
						"thai": "ทั้งหมดนี้... เป็นฝีมือแกงั้นเหรอ?",
						"hindi": "यह सब... तुम्हारी करतूत है?"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "'짓'이라니요. 그저… 좀 더 흥미로운 이야기를 만들고 싶었을 뿐.",
						"english": "'Doing'? No, I merely... wished to create a more interesting story.",
						"japanese": "『仕業』だなんて。ただ…もっと興味深い物語を作りたかっただけです。",
						"chinese": "‘干的’？不，我只是……想创造一个更有趣的故事罢了。",
						"french": "'Œuvre' ? Non, j'ai simplement... voulu créer une histoire plus intéressante.",
						"spanish": "¿'Obra'? No, solo... quería crear una historia más interesante.",
						"vietnamese": "'Gây ra'? Không, tôi chỉ... muốn tạo ra một câu chuyện thú vị hơn mà thôi.",
						"thai": " 'ฝีมือ' อย่างนั้นเหรอ? ไม่หรอก... แค่อยากสร้างเรื่องราวที่น่าสนใจยิ่งขึ้นเท่านั้นเอง",
						"hindi": "'करतूत'? नहीं, मैं बस... एक और दिलचस्प कहानी बनाना चाहता था।"
					}
				},
				{
					"content": {
						"korean": "연극은 끝났어.",
						"english": "The play is over.",
						"japanese": "芝居は終わった。",
						"chinese": "这场戏结束了。",
						"french": "La pièce est terminée.",
						"spanish": "La obra ha terminado.",
						"vietnamese": "Vở kịch đã kết thúc.",
						"thai": "ละครจบแล้ว",
						"hindi": "नाटक खत्म हो गया।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "…흥미롭군요. 하지만 이 무대는 영원히 지속될 겁니다. 당신은… 또 다른 역할을 찾게 되겠죠.",
						"english": "...Interesting. But this stage will last forever. You... will find another role.",
						"japanese": "…興味深い。だが、この舞台は永遠に続くでしょう。あなたは…別の役割を見つけるでしょう。",
						"chinese": "…有意思。但这个舞台将永远持续下去。你…会找到另一个角色。",
						"french": "...Intéressant. Mais cette scène durera éternellement. Vous... trouverez un autre rôle.",
						"spanish": "...Interesante. Pero este escenario durará para siempre. Tú... encontrarás otro papel.",
						"vietnamese": "...Thú vị đấy. Nhưng sân khấu này sẽ tồn tại mãi mãi. Ngươi... sẽ tìm một vai diễn khác thôi.",
						"thai": "...น่าสนใจ แต่เวทีนี้จะคงอยู่ตลอดไป คุณ... จะได้พบกับบทบาทอื่น",
						"hindi": "...दिलचस्प। लेकिन यह मंच हमेशा बना रहेगा। तुम... एक और भूमिका पाओगे।"
					}
				},
				{
					"content": {
						"korean": "아니. 내 이야기는 내가 써.",
						"english": "No. I write my own story.",
						"japanese": "いや。私の物語は私が書く。",
						"chinese": "不。我的故事我自己写。",
						"french": "Non. J'écris ma propre histoire.",
						"spanish": "No. Mi historia la escribo yo.",
						"vietnamese": "Không. Chuyện của ta, ta tự viết.",
						"thai": "ไม่ ฉันเขียนเรื่องราวของฉันเอง",
						"hindi": "नहीं। मेरी कहानी मैं खुद लिखता हूँ।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "거대한 연극의 막 하나가 내렸다. 하지만 대본은 아직 끝나지 않았다. 진실은 더 깊은 설원 아래 숨어 있었다.",
						"english": "One act of a grand play has ended. But the script isn't over yet. The truth lay hidden beneath deeper snowfields.",
						"japanese": "壮大な劇の一幕が下りた。しかし、台本はまだ終わっていない。真実はより深い雪原の下に隠されていた。",
						"chinese": "一场宏大戏剧的一幕落下了。但剧本尚未结束。真相隐藏在更深的雪原之下。",
						"french": "Un acte d'une grande pièce est tombé. Mais le script n'est pas encore terminé. La vérité était cachée sous des champs de neige plus profonds.",
						"spanish": "Un acto de una gran obra ha terminado. Pero el guion aún no ha terminado. La verdad yacía oculta bajo campos de nieve más profundos.",
						"vietnamese": "Một màn kịch vĩ đại đã khép lại. Nhưng kịch bản vẫn chưa kết thúc. Sự thật ẩn mình dưới những cánh đồng tuyết sâu hơn.",
						"thai": "ฉากหนึ่งของการแสดงอันยิ่งใหญ่ได้ปิดลงแล้ว แต่บทละครยังไม่จบ ความจริงซ่อนอยู่ใต้ทุ่งหิมะที่ลึกกว่า",
						"hindi": "एक भव्य नाटक का एक अंक समाप्त हो गया है। लेकिन स्क्रिप्ट अभी खत्म नहीं हुई है। सच्चाई गहरी बर्फ की चादरों के नीचे छिपी थी।"
					}
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "어리석은 배우. 당신의 대사는 여기까지입니다.",
						"english": "Foolish actor. Your lines end here.",
						"japanese": "愚かな役者。あなたのセリフはここまでです。",
						"chinese": "愚蠢的演员。你的台词到此为止。",
						"french": "Acteur insensé. Vos répliques s'arrêtent ici.",
						"spanish": "Actor tonto. Tus líneas terminan aquí.",
						"vietnamese": "Diễn viên ngốc nghếch. Lời thoại của ngươi đến đây là hết.",
						"thai": "นักแสดงโง่ๆ บทพูดของคุณสิ้นสุดลงที่นี่แล้ว",
						"hindi": "मूर्ख अभिनेता। तुम्हारी पंक्तियाँ यहीं समाप्त होती हैं।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "…아직 끝나지 않았어. 이 연극을 내가 끝낼 거야.",
						"english": "...It's not over yet. I'll end this play.",
						"japanese": "…まだ終わっていない。この劇は私が終わらせる。",
						"chinese": "…还没结束。我会结束这场戏。",
						"french": "...Ce n'est pas encore fini. Je mettrai fin à cette pièce.",
						"spanish": "...Aún no ha terminado. Yo terminaré esta obra.",
						"vietnamese": "...Chưa kết thúc đâu. Ta sẽ kết thúc vở kịch này.",
						"thai": "...ยังไม่จบ ฉันจะจบละครเรื่องนี้เอง",
						"hindi": "...अभी खत्म नहीं हुआ है। मैं इस नाटक को खत्म करूँगा।"
					}
				},
				{
					"content": {
						"korean": "(비웃는 듯한 웃음소리) 어디 한번 해보시죠.",
						"english": "(A scornful laugh) Go on, try it.",
						"japanese": "（あざけるような笑い声）さあ、やってみろ。",
						"chinese": "（嘲讽的笑声）去吧，试试看。",
						"french": "(Un rire moqueur) Allez-y, essayez.",
						"spanish": "(Una risa burlona) Adelante, inténtalo.",
						"vietnamese": "(Tiếng cười khinh bỉ) Cứ thử đi.",
						"thai": "(เสียงหัวเราะเยาะเย้ย) เอาเลย ลองดูสิ",
						"hindi": "(एक तिरछी हँसी) चलो, कोशिश करो।"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				}
			]
		}
	]
} as const;
